---
title: 'Chat2DB AI助手介绍'
sidebar_position: 11
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---
# AI功能介绍
## 功能一：自然语言生成SQL
首先建好测试需要用的表，这里用到了4张表做测试。大家也可以建自己的表做测试。
```sql
CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '学生ID',
  name VARCHAR(50) NOT NULL COMMENT '学生姓名',
  gender VARCHAR(10) NOT NULL COMMENT '学生性别',
  birthday DATE NOT NULL COMMENT '学生生日',
  address VARCHAR(100) NOT NULL COMMENT '学生住址',
  phone VARCHAR(20) NOT NULL COMMENT '学生联系方式'
) COMMENT '学生信息表';
科目表：

CREATE TABLE course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '科目ID',
  name VARCHAR(50) NOT NULL COMMENT '科目名称',
  teacher VARCHAR(50) NOT NULL COMMENT '授课教师',
  credit INT NOT NULL COMMENT '科目学分'
) COMMENT '科目表';
学生选修科目表：

CREATE TABLE student_course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '关系ID',
  student_id INT NOT NULL COMMENT '学生ID',
  course_id INT NOT NULL COMMENT '科目ID',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT '学生选修科目表';
学生成绩表：

CREATE TABLE score (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '成绩ID',
  student_id INT NOT NULL COMMENT '学生ID',
  course_id INT NOT NULL COMMENT '科目ID',
  score INT NOT NULL COMMENT '成绩',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT '学生成绩表';
```
表建好后，可以插入一些测试数据。
接下来我们可以直接用自然语言输入比如：“查询小明的各科目成绩” 生成结果如下：
```sql
## ---BEGIN---
## 查询学生小明的各科目成绩

## ---自然语言转换:---
SELECT score.score 
FROM score 
INNER JOIN student_course ON score.course_id = student_course.course_id 
INNER JOIN student ON student_course.student_id = student.id 
WHERE student.name = '小明'
## --- END ---
```
再比如："查询总成绩排名班级前十的同学" 生成结果如下：
```sql
## ---BEGIN---
## 查询总成绩排名班级前十的同学

## ---自然语言转换:---
SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## --- END ---
```

需要注意的是选择自然语言转SQL，需要选择一下用于生成的SQL的原始表，目的提升Prompt训练的精度，让GPT根据你选择的特定表生成SQL。

调用ChatGPT API Prompt代码如下：

```java
Map<String, List<TableColumn>> tableColumns = buildTableColumn(queryParam, queryRequest.getTableNames());
List<String> tableSchemas = tableColumns.entrySet().stream().map(
    entry -> String.format("%s(%s)", entry.getKey(),
                           entry.getValue().stream().map(TableColumn::getName).collect(
                               Collectors.joining(", ")))).collect(Collectors.toList());
String properties = String.join("\n#", tableSchemas);
String prompt = queryRequest.getMessage();
String promptType = StringUtils.isBlank(queryRequest.getPromptType()) ? PromptType.NL_2_SQL.getCode()
: queryRequest.getPromptType();
PromptType pType = EasyEnumUtils.getEnum(PromptType.class, promptType);
String ext = StringUtils.isNotBlank(queryRequest.getExt()) ? queryRequest.getExt() : "";
String schemaProperty = CollectionUtils.isNotEmpty(tableSchemas) ? String.format(
    "### 请根据以下table properties和SQL input%s. %s\n#\n### %s SQL tables, with their properties:\n#\n# "
    + "%s\n#\n#\n### SQL input: %s", pType.getDescription(), ext, dataSourceType,
    properties, prompt) : String.format("### 请根据以下SQL input%s. %s\n#\n### SQL input: %s",
                                        pType.getDescription(), ext, prompt);
```
## 功能二：SQL解释为自然语言
有的时候我们会遇到非常复杂的SQL，有的甚至成百上千行的SQL，要读懂这段SQL可能需要几个小时甚至几天时间。我们通过Chat2DB也可以快速的了解这段SQL的含义：

```sql
## ---BEGIN---
## SELECT score.score 
FROM score 
INNER JOIN student_course ON score.course_id = student_course.course_id 
INNER JOIN student ON student_course.student_id = student.id 
WHERE student.name = '小明'
## ---解释SQL:---
这个SQL查询语句的作用是从“score”表中选择“score”列，同时使用“INNER JOIN”将“score”表与“student_course”表和“student”表连接起来。连接的条件是“score”表中的“course_id”列等于“student_course”表中的“course_id”列，“student_course”表中的“student_id”列等于“student”表中的“id”列。最后，使用“WHERE”子句筛选出“student”表中“name”列为“小明”的记录。这个查询语句的目的是找到学生“小明”在所有课程中的成绩。
## --- END ---
```
## 功能三：SQL优化
有的时候我们写了一段SQL性能不好，Chat2DB也可以帮我们优化SQL，提升查询性能。
```sql
## ---BEGIN---
## SELECT score.score 
FROM score 
INNER JOIN student_course ON score.course_id = student_course.course_id 
INNER JOIN student ON student_course.student_id = student.id 
WHERE student.name = '小明'
## ---SQL优化:---
优化建议：

1. 索引优化：为student表的name字段创建索引，可以加快WHERE条件的查询速度。

2. JOIN优化：可以使用子查询或者临时表的方式，将student表中name为小明的记录先筛选出来，再进行JOIN操作，可以减少JOIN操作的数据量，提高查询效率。

3. 数据库设计优化：可以考虑将student表和student_course表合并为一张表，避免JOIN操作，提高查询效率。

4. 缓存优化：可以将查询结果缓存起来，避免重复查询，提高查询效率。
## --- END ---
```
## 功能四：SQL转换
不同数据库SQL预发间有略微的差异，我们也可以通过Chat2DB让他帮我们去转换这个SQL的语法。
比如将如下的分页从Mysql语法转换成Oracel的语法。
```sql
## ---BEGIN---
## SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## ---SQL转换:---
SQL转换:

SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id, s.name
ORDER BY total_score DESC
FETCH FIRST 10 ROWS ONLY;
## --- END ---
```
## AI功能演示
...待补充