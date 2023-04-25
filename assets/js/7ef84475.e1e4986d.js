"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[26314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,f=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",sidebar_position:3,tags:["flutter-core","chat"]},c="Receiving chat messages",l={unversionedId:"chat/receiving-chat-messages",id:"chat/receiving-chat-messages",title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",source:"@site/docs/flutter-core/chat/receiving-chat-messages.mdx",sourceDirName:"chat",slug:"/chat/receiving-chat-messages",permalink:"/flutter-core/chat/receiving-chat-messages",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/flutter-core/chat/receiving-chat-messages.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"chat",permalink:"/flutter-core/tags/chat"}],version:"current",lastUpdatedAt:1682414573,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:3,frontMatter:{title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",sidebar_position:3,tags:["flutter-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Sending a chat message",permalink:"/flutter-core/chat/sending-a-chat-message"},next:{title:"Introduction",permalink:"/flutter-core/polls/introduction"}},p={},u=[],m={toc:u},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"receiving-chat-messages"},"Receiving chat messages"),(0,r.kt)("p",null,"To listen for chat messages you need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"onChatUpdates()")," method from\ncallback ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingRoomEventsListener"),". You can subscribe to this events by\ncalling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass MeetingRoomEventsListener with DyteMeetingRoomEventsListener {\n\n  ...\n\n  @override\n  void onChatUpdates(\n        newMessage: Boolean,\n        message: DyteChatMessage?,\n        messages: List<DyteChatMessage>\n      ) {\n        // your code to handle new chat message\n      }\n\n  ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.addMeetingEventsListener(\n  /// DyteMeetingRoomEventsListener instance\n)\n")),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteChatMessage"),", as defined in\n",(0,r.kt)("a",{parentName:"p",href:"./introduction"},"introduction"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," is a list of all chat messages in the\nmeeting, which is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient.chat.messages"),"."),(0,r.kt)("p",null,"When a chat message is received, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient.chat.messages")," list is also\nupdated."))}f.isMDXComponent=!0}}]);