"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[2819],{1737:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Initialize Plugin",sidebar_position:1},p=void 0,s={unversionedId:"usage/basic/initialize",id:"usage/basic/initialize",title:"Initialize Plugin",description:"The DytePlugin class is the root class of Plugin SDK. It is the main entry point",source:"@site/docs/plugin-sdk/usage/basic/initialize.mdx",sourceDirName:"usage/basic",slug:"/usage/basic/initialize",permalink:"/plugin-sdk/usage/basic/initialize",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/plugin-sdk/usage/basic/initialize.mdx",tags:[],version:"current",lastUpdatedAt:1682507282,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{title:"Initialize Plugin",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/plugin-sdk/usage/installation"},next:{title:"Methods",permalink:"/plugin-sdk/usage/basic/methods"}},u={},d=[],g={toc:d},m="wrapper";function c(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(m,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The DytePlugin class is the root class of Plugin SDK. It is the main entry point\nof the SDK. It is the only class that you need to instantiate in order to use\nthe SDK."),(0,a.kt)("p",null,"A plugin object can be created using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"DytePlugin.init()"),"\xa0method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"init()"),"\nmethod can take an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"optional"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object."),(0,a.kt)("admonition",{title:"tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do checkout ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cGuides\u201d"))," for end to end examples on the usage of these\nmodules.")),(0,a.kt)("p",null,"The following is the schema for the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Param")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Default Value")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authToken"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Authorisation token."),(0,a.kt)("td",{parentName:"tr",align:null},"auto-filled by client SDK."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"baseURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Server URL being used by the parent app."),(0,a.kt)("td",{parentName:"tr",align:null},"auto-filled by client SDK."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parentURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URL of the parent app the plugin is opened in."),(0,a.kt)("td",{parentName:"tr",align:null},"auto-filled by client SDK."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pluginId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ID generated using Dyte CLI."),(0,a.kt)("td",{parentName:"tr",align:null},"auto-filled by client SDK."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ready"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," when the plugin initialization has completed."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import DytePlugin from \"@dytesdk/plugin-sdk\";\n...\nconst plugin = DytePlugin.init();\nawait plugin.stores.populate('storeName');\n")))}c.isMDXComponent=!0}}]);