"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[79241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>s});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Room Metadata",description:"All metadata pertaining to a meeting.",sidebar_position:4,tags:["web-core","room-metadata"]},l="Room Metadata",m={unversionedId:"room-metadata",id:"room-metadata",title:"Room Metadata",description:"All metadata pertaining to a meeting.",source:"@site/docs/rn-core/room-metadata.mdx",sourceDirName:".",slug:"/room-metadata",permalink:"/rn-core/room-metadata",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/rn-core/room-metadata.mdx",tags:[{label:"web-core",permalink:"/rn-core/tags/web-core"},{label:"room-metadata",permalink:"/rn-core/tags/room-metadata"}],version:"current",lastUpdatedAt:1682414573,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:4,frontMatter:{title:"Room Metadata",description:"All metadata pertaining to a meeting.",sidebar_position:4,tags:["web-core","room-metadata"]},sidebar:"tutorialSidebar",previous:{title:"Media Permission Errors",permalink:"/rn-core/local-user/media-permission-errors"},next:{title:"Participants",permalink:"/rn-core/participants/"}},p={},s=[],u={toc:s},d="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"room-metadata"},"Room Metadata"),(0,r.kt)("p",null,"All metadata pertaining to a meeting is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.meta"),". This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomName"),": The name of the room the current participant is connected to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomType"),": Indicates the meeting is a group-call or a webinar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"meetingTitle"),": The title of the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"meetingStartedTimestamp"),": The timestamp when the meeting started.")),(0,r.kt)("p",null,"For example, if you want to get the name of the room the current participant is\nconnected to, you can do so by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructuring the metadata to get roomName and joined\nconst { roomName } = meeting.meta;\n\nif (meeting.self.roomJoined) {\n  console.log(`The local user has joined room ${roomName}.`);\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object also emits for indicating the change in the connection state\nof the room. For example, you can listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"connected")," event to know when\nthe local user has successfully joined the room, and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected"),"\nevent to find out if the local user's connection has dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.meta.on('connected', () => {\n  console.log(\n    `The local user has successfully joined the room ${meeting.meta.roomName}`\n  );\n});\n\nmeeting.meta.on('disconnected', () => {\n  console.log(\n    `The local user got disconnected from the room ${meeting.meta.roomName}`\n  );\n});\n\nmeeting.meta.on('poorConnection', () => {\n  console.log(`The local user has poor network connection.`);\n});\n\nmeeting.meta.on('connectionError', ({ reason }) => {\n  console.log(`Could not connect to the room.`);\n});\n")))}f.isMDXComponent=!0}}]);