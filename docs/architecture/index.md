---
title: '整体技术架构'
sidebar_position: 5
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---

- 在实际调研中我们会发现一部分同学喜欢客户端软件体验好，一部分同学喜欢web版用完就走，不需要装一堆软件。所以我们在设计之初就考虑既要支持客户端，也要支持网页版。最终我们支持了Mac、Windows客户端、web版。
- 为什么没有支持Linux？是因为目前发现使用linux写代码的用户并不多，并且已经支持了web版linux完全可以使用。不过未来看用户使用情况，如果强烈要Linux客户端版，我们也可以轻松的支持。

**先看看Navicat、DBever、DataGrip的技术方案分别是什么样的，以及他们的优缺点？**

| 方案 | 优势 | 劣势 |
| --- | --- | --- |
| **Navicat（C++）** | 流程性好，功能丰富 | 不支持网页版，开发成本大 |
| **DBever（Java swing + JS）** | 可以跨多个操作系统、也支持网页版 | 网页版单独开发成本大 |
| **DataGrip（Java swing）** | 体验好、视觉好 | 不支持网页版 |
|  |  |  |

有没有一种**完美方案**既可以支持网页版，又支持跨端，又通用的前端完美方案，答案就是electron，最成功的案例就是VSCode体验好，还可以多个端部署，部署网页版也非常简单。
那服务端怎么做呢？
**为了做到支持多端我们做了一些技术选型的比较**

| 方案 | 优势 | 劣势 |
| --- | --- | --- |
| **Electron+Nodejs** | 纯JS前端就可以开发，体验也不错 | js在各种不同数据库支持上不够完美，
前端往往不做数据库开发，去了解各个数据库特性很难 |
| **Java swing + js**
**客户端用java 再加web前端** | 支持多端，java又能很好的处理各种数据库。js支持网页版 | swing太难用,java同学使用也不多。
前端开发2套 |
| **Electron+js+Java** | 支持多端展示，也支持web。前后端分离 | 服务端启动慢 |

最终我们选择了**Electron+js+Java 的方案，应该是第一个是用该方案的人来支持客户端也支持网页版**。这个方案很好的解决了复用，效率，语言优势等多个特性。唯一缺点就是java启动spring慢了一点。但我们做了很多优化基本5s秒钟可以启动起来，跟大部分软件差不多。未来我们减少spring依赖应该性能还可以接受。另外我们未来也可以提供给用户选择关闭客户端时候java进程不关闭的方式，下次启动就可以秒启动，所以这么劣势对我们影响不大。
## MAC
支持
## Windows
支持
## Linux
不支持，但可以快速支持，看未来需求，多打一个包即可。
## Web
支持
## 客户端连接公用服务
默认连接的是自己本地，如果团队有公用服务可以配置公用服务的ip和端口
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682685205462-301d90c1-da69-4231-a388-ff53c01c7e6f.png#clientId=u13bd2303-c992-4&from=paste&height=465&id=u4fb19fcd&originHeight=929&originWidth=1500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=250232&status=done&style=none&taskId=u02a37d3a-783d-4e95-9e25-972c39a1433&title=&width=750)