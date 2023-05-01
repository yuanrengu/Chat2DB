---
title: '本地安装'
sidebar_position: 3
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---


## 📦 Docker部署

```bash
  docker pull chat2db/chat2db:latest
```
## 🎯 运行环境
注意：
如果需要本地调试
- java运行 <a href="https://adoptopenjdk.net/" target="_blank">Open JDK 17</a>
- Node运行环境Node16 <a href="https://nodejs.org/" target="_blank">Node.js</a>.
## 💻 本地调试
- git clone到本地
```bash
$ git clone git@github.com:alibaba/Chat2DB.git
```
- 前端安装
```bash
$ cd Chat2DB/ali-dbhub-client
$ npm install # 安装npm 
$ npm run build:prod # 把js打包生成到后端的source目录
```
- 后端调试
```bash
$ cd ../ali-dbhub-server
$ mvn clean install # 需要安装maven 3.8以上版本
$ cd ali-dbhub-server/ali-dbhub-server-start/target/
$ java -jar -Dchatgpt.apiKey=xxxxx ali-dbhub-server-start.jar  # 启动应用 chatgpt.apiKey 需要输入ChatGPT的key,如果不输入无法使用AIGC功能
$ # 打开 http://localhost:7001 开启调试
```

- 前端调试
```bash
$ cd Chat2DB/ali-dbhub-client
$ npm install 
$ npm run start
$ # 打开 http://localhost:8001 开启前端调试
```
但是前端调试需要映射下资源，可以下载[XSwitch](https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg),添加以下配置文件
``` json
{
  "proxy": [
    [
      "http://127.0.0.1:7001/static/front/(.*)",
      "http://127.0.0.1:8001/$1",
    ],
    [
      "http://127.0.0.1:7001/(.*).js$",
      "http://127.0.0.1:8001/$1.js",
    ],
    [
      "http://127.0.0.1:7001/(.*).css$",
      "http://127.0.0.1:8001/$1.css",
    ]
  ],
}
```
