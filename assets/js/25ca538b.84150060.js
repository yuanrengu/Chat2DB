"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[92404],{47571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(93070),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={sidebar_position:2},c="Installation",d={unversionedId:"installation",id:"installation",title:"Installation",description:"1. Install the client SDK from npm",source:"@site/docs/react-native/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/react-native/installation",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/react-native/installation.mdx",tags:[],version:"current",lastUpdatedAt:1682414573,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/react-native/"},next:{title:"Basic Usage",permalink:"/react-native/usage"}},u={},m=[{value:"Android",id:"android",level:2},{value:"iOS",id:"ios",level:2}],k={toc:m},y="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(y,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the client SDK from npm")),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @dytesdk/mobile\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @dytesdk/mobile\n"))),(0,a.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @dytesdk/mobile\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install external dependencies required by our SDK")),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n"))),(0,a.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add this to the root of your project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { registerGlobals } from 'react-native-webrtc';\n\nregisterGlobals();\n")),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The below instructions are for the release builds, debug builds should work\nwithout any additional steps.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Edit your ",(0,a.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,a.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the\nfollowing line importing the proguard configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"buildTypes {\n  release {\n    ...\n    ...\n    ...\n    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you encounter chinese characters in your app instead of icons, please apply\nthis fix mentioned in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons/issues/1106#issuecomment-574683931"},"react-native-vector-icons issue"))),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("admonition",{title:"iOS minimum version 12.0",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We support minimum OS version ",(0,a.kt)("inlineCode",{parentName:"p"},"12.0")," for our iOS SDK.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your podfile and make sure your platform is set to ios 12")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '12.0'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the fonts and permission entries in ",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<key>UIAppFonts</key>\n<array>\n    <string>MaterialCommunityIcons.ttf</string>\n    <string>MaterialIcons.ttf</string>\n</array>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n<key>UIViewControllerBasedStatusBarAppearance</key>\n<false/>\n")))}g.isMDXComponent=!0}}]);