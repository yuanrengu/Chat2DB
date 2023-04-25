"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[65838,84327],{84327:(e,t,s)=>{s.r(t),s.d(t,{dyte_plugins_toggle:()=>o});var i=s(67503),n=s(35461),a=s(11810),r=s(86466),l=s(89140);s(60614);const o=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.updateCanView=()=>{this.canViewPlugins=(0,l.b)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.pluginsActive=!1,this.canViewPlugins=!1}disconnectedCallback(){var e,t;null===(t=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.updateCanView)}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting),(0,r.o)("sidebar",(()=>this.statesChanged()))}meetingChanged(e){var t;null!=e&&(this.canViewPlugins=(0,l.b)(e),null===(t=null==e?void 0:e.stage)||void 0===t||t.on("stageStatusUpdate",this.updateCanView))}statesChanged(e){const t=e||r.s;null!=t&&(this.pluginsActive=!0===t.activeSidebar&&"plugins"===t.sidebar)}togglePlugins(){const e=this.states||r.s;this.pluginsActive=!((null==e?void 0:e.activeSidebar)&&"plugins"===(null==e?void 0:e.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":"none",activeMoreMenu:!1}),r.s.activeSidebar=this.pluginsActive,r.s.sidebar=this.pluginsActive?"plugins":"none",r.s.activeMoreMenu=!1}render(){if(!this.canViewPlugins)return;const e=this.t("plugins");return(0,i.h)(i.H,{title:e},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:e,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}"},60614:(e,t,s)=>{s.d(t,{P:()=>r,a:()=>n,b:()=>c,c:()=>u,d:()=>l,e:()=>o,i:()=>i,s:()=>a});const i=e=>!!a(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),n=e=>{var t;return!!a(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},a=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,l;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(l||(l={}));const o=[l.TIME_UPDATE,l.BUFFER_UPDATE,l.TEXT_METADATA_CUE,l.PLAYER_METADATA],u=e=>{var t,s,i,n,r,l;return!!a(e)&&("ALLOWED"===(null===(s=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===s?void 0:s.canProduceAudio)||"ALLOWED"===(null===(n=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===n?void 0:n.canProduceScreenshare)||"ALLOWED"===(null===(l=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===l?void 0:l.canProduceVideo))},c=e=>{var t,s,i,n,r,l,o,u;return!!a(e)&&("NOT_ALLOWED"!==(null===(s=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===s?void 0:s.canProduceAudio)||"NOT_ALLOWED"!==(null===(n=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===n?void 0:n.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(l=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===l?void 0:l.canProduceVideo)||(null===(u=null===(o=null==e?void 0:e.self)||void 0===o?void 0:o.permissions)||void 0===u?void 0:u.canLivestream))}},89140:(e,t,s)=>{s.d(t,{a:()=>r,b:()=>l,c:()=>n,d:()=>a});var i=s(60614);const n=e=>{if(e&&!e.chat)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:i}=e.self.permissions;return s.canSend||s.text||s.files||i.canSend||i.canReceive||i.files||i.text},a=e=>{if(e&&!e.polls)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.polls)return!1;const{polls:s}=e.self.permissions;return s.canCreate||s.canView||s.canVote},r=e=>{var t,s;if((0,i.s)(e)&&!(null===(t=e.self.permissions)||void 0===t?void 0:t.acceptPresentRequests))return!1;if(e&&!e.participants)return!1;if("LIVESTREAM"===e.meta.viewType)return e.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(s=null==e?void 0:e.stage)||void 0===s?void 0:s.status);const n=null==e?void 0:e.self.config;return!(n&&!n.controlBar.elements.participants)},l=e=>{if((0,i.i)(e))return!1;if(e&&!e.plugins)return!1;if("LIVESTREAM"===e.meta.viewType)return"ON_STAGE"===e.stage.status;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.plugins)return!1;const{plugins:s}=e.self.permissions;return s.canClose||s.canStart}},86466:(e,t,s)=>{s.d(t,{o:()=>u,s:()=>o});var i=s(67503);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=e=>"function"==typeof e?e():e,l=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:o,onChange:u}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=r(e);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;i=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},o=e=>(n.get.forEach((t=>t(e))),i.get(e)),u=(e,s)=>{const a=i.get(e);t(s,a,e)&&(i.set(e,s),n.set.forEach((t=>t(e,s,a))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>o(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,s)=>(u(t,s),!0)}),d=(e,t)=>(n[e].push(t),()=>{l(n[e],t)});return{state:c,get:o,set:u,on:d,onChange:(t,s)=>{const i=d("set",((e,i)=>{e===t&&s(i)})),n=d("reset",(()=>s(r(e)[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=i.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),a(e)}}})()),s})({})}}]);