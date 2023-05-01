---
title: '设计思考'
sidebar_position: 4
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---

整体视觉体验参考了Navicat、DBever、DataGrip，我们遵循的原则足够简洁易用，简洁的视觉效果能够提升技术人的工作效率。综合比较了这几款软件最终还是觉得DataGrip体验最好，在设计更多的借鉴了DataGrip的一些设计。
## Navicat：
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682679233733-f384e7f9-c9ed-4783-bdee-cd7e9d9557ab.png#clientId=u25f9cd40-a273-4&from=paste&height=503&id=uc6698972&originHeight=500&originWidth=720&originalType=binary&ratio=2&rotation=0&showTitle=false&size=277599&status=done&style=none&taskId=ubb42618f-5342-4ad5-872c-3e7e54acad8&title=&width=725)
## DBever
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682679274109-d2c81af7-7663-48dc-81d2-fcf94dbd5e65.png#clientId=u25f9cd40-a273-4&from=paste&height=500&id=u8e478568&originHeight=1000&originWidth=1800&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1476983&status=done&style=none&taskId=u770fb7b7-b6e0-48d1-8973-a4c6de7de0e&title=&width=900)
## DataGrip
![截屏2023-04-28 18.56.58.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682679445615-68b54fe6-7bf6-4314-922c-161aa05d3059.png#clientId=u25f9cd40-a273-4&from=ui&id=uf783e602&originHeight=1988&originWidth=3448&originalType=binary&ratio=2&rotation=0&showTitle=false&size=629258&status=done&style=none&taskId=u5a4d868c-4f39-4706-94cf-da76aacb731&title=)
通过这几个常用数据库软件的比较明显DataGrip视觉效果更好，所以视觉设计和体验上我们学习DataGrip.
我们是不是和DataGrip有点像，我们也支持暗黑模式。除了背景色未来我们也会把主题色开放出来让大家自己选择。
![截屏2023-04-28 19.50.18.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682682629789-f193e296-fb92-4e61-9e46-13e59e2093f1.png#clientId=u25f9cd40-a273-4&from=ui&id=u03a6830d&originHeight=1574&originWidth=2914&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1210130&status=done&style=none&taskId=u933c9008-4e2a-405b-8071-5f043fb8a44&title=)
![截屏2023-04-28 19.50.01.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/5887/1682682642049-baeb95bb-5a43-430e-a0bd-c4a3d563427c.png#clientId=u25f9cd40-a273-4&from=ui&id=uf600325c&originHeight=1582&originWidth=2912&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2266631&status=done&style=none&taskId=u9553bc33-b048-4d02-8a62-08017ea8777&title=)