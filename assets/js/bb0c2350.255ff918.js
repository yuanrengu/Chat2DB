"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[62916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||g[h]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:4,tags:["web-core","chat"]},c="Other chat functions",p={unversionedId:"chat/other-chat-functions",id:"chat/other-chat-functions",title:"Other chat functions",description:"Other functionality associated with chat.",source:"@site/docs/rn-core/chat/other-chat-functions.mdx",sourceDirName:"chat",slug:"/chat/other-chat-functions",permalink:"/rn-core/chat/other-chat-functions",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/rn-core/chat/other-chat-functions.mdx",tags:[{label:"web-core",permalink:"/rn-core/tags/web-core"},{label:"chat",permalink:"/rn-core/tags/chat"}],version:"current",lastUpdatedAt:1682414573,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:4,frontMatter:{title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:4,tags:["web-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Receiving chat messages",permalink:"/rn-core/chat/receiving-chat-messages"},next:{title:"Introduction",permalink:"/rn-core/polls/introduction"}},l={},u=[{value:"Get messages by a user",id:"get-messages-by-a-user",level:2},{value:"Get messages of a particular type",id:"get-messages-of-a-particular-type",level:2},{value:"Pinning a chat message",id:"pinning-a-chat-message",level:2}],g={toc:u},h="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"other-chat-functions"},"Other chat functions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat")," object exposes certain other methods for convenience when\nworking with chat."),(0,r.kt)("h2",{id:"get-messages-by-a-user"},"Get messages by a user"),(0,r.kt)("p",null,"You can get messages by a particular user by passing the user's ID to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.getMessagesByUser()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Find the userId of the user with name \"Freddie\".\nconst { userId } = meeting.participants.joined\n  .toArray()\n  .find((p) => p.name === 'Freddie');\n\nconst messages = meeting.chat.getMessagesByUser(userId);\n")),(0,r.kt)("h2",{id:"get-messages-of-a-particular-type"},"Get messages of a particular type"),(0,r.kt)("p",null,"You can also get messages of a particular type using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.getMessagesByType()")," method. For example, you can get all image\nmessages present in the chat using the following snippet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const imageMessages = meeting.chat.getMessagesByType('image');\n")),(0,r.kt)("h2",{id:"pinning-a-chat-message"},"Pinning a chat message"),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"pin")," a number of messages to the chat. When you pin a message, the\nmessage object will have the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"pinned: true"),", using which you can\nidentify if a message is pinned."),(0,r.kt)("p",null,"To pin a message, run the following snippet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Let's say we want to pin the first message in the chat (could be a text, image, or file).\nconst { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n")),(0,r.kt)("p",null,"Once you pin a message, it will be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.pinned"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n\nconsole.log(meeting.chat.pinned);\nconsole.log(meeting.chat.pinned.length > 0); // Should be true\n")),(0,r.kt)("p",null,"You can also unpin a pinned message, by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.unpin()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Unpin the first pinned message.\n\nconst { id } = meeting.chat.pinned[0];\nawait meeting.chat.unpin(id);\n")))}m.isMDXComponent=!0}}]);