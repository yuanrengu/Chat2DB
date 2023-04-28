"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[118],{95902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={title:"\u4ec0\u4e48\u662fChat2DB",sidebar_position:2},u="\u4ec0\u4e48\u662fChat2DB",c={unversionedId:"v2-migration-guide",id:"v2-migration-guide",title:"\u4ec0\u4e48\u662fChat2DB",description:"\u4e00\u4e2a\u96c6\u6210\u4e86AIGC\u7684\u3001\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/guides/v2-migration-guide.md",sourceDirName:".",slug:"/v2-migration-guide",permalink:"/guides/v2-migration-guide",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/guides/v2-migration-guide.md",tags:[],version:"current",lastUpdatedAt:1682672351,formattedLastUpdatedAt:"Apr 28, 2023",sidebarPosition:2,frontMatter:{title:"\u4ec0\u4e48\u662fChat2DB",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/guides/quickstart"},next:{title:"\u6570\u636e\u5e93\u7ba1\u7406",permalink:"/guides/embed"}},s={},p=[{value:"\ud83d\udcd6 \u7b80\u4ecb",id:"-\u7b80\u4ecb",level:2},{value:"\u2728 \u7279\u6027",id:"-\u7279\u6027",level:2}],d={toc:p},b="wrapper";function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4ec0\u4e48\u662fchat2db"},"\u4ec0\u4e48\u662fChat2DB"),(0,n.kt)("p",null,"\u4e00\u4e2a\u96c6\u6210\u4e86AIGC\u7684\u3001\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"),(0,n.kt)("h2",{id:"-\u7b80\u4ecb"},"\ud83d\udcd6 \u7b80\u4ecb"),(0,n.kt)("p",null,"\u2003"," ","\u2003","Chat2DB \u662f\u4e00\u6b3e\u6709\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u514d\u8d39\u7684\u591a\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u652f\u6301windows\u3001mac\u672c\u5730\u5b89\u88c5\uff0c\n\u4e5f\u652f\u6301\u670d\u52a1\u5668\u7aef\u90e8\u7f72\uff0cweb\u7f51\u9875\u8bbf\u95ee\u3002\u548c\u4f20\u7edf\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u8f6f\u4ef6Navicat\u3001DBeaver \u76f8\u6bd4Chat2DB\u96c6\u6210\u4e86AIGC\u7684\u80fd\u529b\uff0c\n\u80fd\u591f\u5c06\u81ea\u7136\u8bed\u8a00\u8f6c\u6362\u4e3aSQL\uff0c\u4e5f\u53ef\u4ee5\u5c06SQL\u8f6c\u6362\u4e3a\u81ea\u7136\u8bed\u8a00\uff0c\u53ef\u4ee5\u7ed9\u51fa\u7814\u53d1\u4eba\u5458SQL\u7684\u4f18\u5316\u5efa\u8bae\uff0c\u6781\u5927\u7684\u63d0\u5347\u4eba\u5458\u7684\u6548\u7387\uff0c\n\u662fAI\u65f6\u4ee3\u6570\u636e\u5e93\u7814\u53d1\u4eba\u5458\u7684\u5229\u5668\uff0c\u672a\u6765\u5373\u4f7f\u4e0d\u61c2SQL\u7684\u8fd0\u8425\u4e1a\u52a1\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5feb\u901f\u67e5\u8be2\u4e1a\u52a1\u6570\u636e\u3001\u751f\u6210\u62a5\u8868\u80fd\u529b\u3002"),(0,n.kt)("h2",{id:"-\u7279\u6027"},"\u2728 \u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf08 AI\u667a\u80fd\u52a9\u624b\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u8f6cSQL\u3001SQL\u8f6c\u81ea\u7136\u8bed\u8a00\u3001SQL\u4f18\u5316\u5efa\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc6d \u652f\u6301\u56e2\u961f\u534f\u4f5c\uff0c\u7814\u53d1\u65e0\u9700\u77e5\u9053\u7ebf\u4e0a\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u89e3\u51b3\u4f01\u4e1a\u6570\u636e\u5e93\u8d26\u53f7\u5b89\u5168\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u2699\ufe0f \u5f3a\u5927\u7684\u6570\u636e\u7ba1\u7406\u80fd\u529b\uff0c\u652f\u6301\u6570\u636e\u8868\u3001\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u3001\u89e6\u53d1\u5668\u3001\u7d22\u5f15\u3001\u5e8f\u5217\u3001\u7528\u6237\u3001\u89d2\u8272\u3001\u6388\u6743\u7b49\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0c \u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301Mysql\u3001PostgreSQL\u3001Oracle\u3001SQLServer\u3001ClickHouse\u3001Oceanbase\u3001H2\u3001SQLite\u7b49\u7b49\uff0c\u672a\u6765\u4f1a\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee1 \u524d\u7aef\u4f7f\u7528 Electron \u5f00\u53d1\uff0c\u63d0\u4f9b Windows\u3001Mac\u3001Linux \u5ba2\u6237\u7aef\u3001\u7f51\u9875\u7248\u672c\u4e00\u4f53\u5316\u7684\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf81 \u652f\u6301\u73af\u5883\u9694\u79bb\u3001\u7ebf\u4e0a\u3001\u65e5\u5e38\u6570\u636e\u6743\u9650\u5206\u79bb")))}m.isMDXComponent=!0}}]);