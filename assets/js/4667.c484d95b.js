"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4667],{62270:(e,t,i)=>{i.d(t,{g:()=>s,h:()=>n,p:()=>a});i(85114);const a=e=>{let t=null;try{const i=JSON.parse(e.message),{target:a,message:s}=i;t=void 0===a||void 0===s?e:Object.assign(Object.assign({},e),{targetUserIds:a,message:s})}catch(i){t=e}return t};function s(e){return e.sort(((e,t)=>e.localeCompare(t))).join("_")}function n(e,t){if(null!=e)for(const i of e)if("file"===i.kind){const e=i.getAsFile();i.type.startsWith("image/")?t("image",e):t("file",e)}}},36881:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#more-menu":{position:"absolute",boxSizing:"border-box",top:"0",left:"0",width:"100%",transform:"translateY(-100%)",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))",padding:"16px 12px",borderRadius:"18px 18px 0 0"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":["dyte-name-tag","dyte-network-indicator"],"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-controlbar.activeMoreMenu.sm":{add:["div#more-menu"]},"dyte-controlbar.activeMoreMenu.md":{add:["div#more-menu"]},"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#more-menu":[["dyte-chat-toggle",{variant:"horizontal"}],["dyte-participants-toggle",{variant:"horizontal"}],["dyte-polls-toggle",{variant:"horizontal"}],["dyte-plugins-toggle",{variant:"horizontal"}],["dyte-fullscreen-toggle",{variant:"horizontal"}],["dyte-screen-share-toggle",{variant:"horizontal"}],["dyte-pip-toggle",{variant:"horizontal"}],["dyte-mute-all-button",{variant:"horizontal"}],["dyte-breakout-rooms-toggle",{variant:"horizontal"}],["dyte-settings-toggle",{variant:"horizontal"}]],"div#controlbar-left":["dyte-screen-share-toggle","dyte-fullscreen-toggle","dyte-pip-toggle","dyte-recording-toggle","dyte-breakout-rooms-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-mic-toggle","dyte-camera-toggle","dyte-mute-all-button","dyte-settings-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},4667:(e,t,i)=>{i.r(t),i.d(t,{dyte_chat:()=>c});var a=i(67503),s=i(35461),n=i(11810),r=i(62270),d=i(85114),o=i(36881),l=i(40579);i(60804),i(60614);const c=class{constructor(e){(0,a.r)(this,e),this.disconnectMeeting=e=>{var t;this.isPrivateChatSupported()&&(null==e||e.participants.joined.removeListener("participantsUpdate",this.onParticipantUpdate),null==e||e.participants.joined.removeListener("participantLeft",this.onParticipantUpdate)),null===(t=null==e?void 0:e.chat)||void 0===t||t.removeListener("chatUpdate",this.chatUpdateListener)},this.onParticipantUpdate=()=>{this.participants=this.meeting.participants.joined.toArray(),this.selectedParticipant&&!this.participants.includes(this.selectedParticipant)&&(this.selectedParticipant=null,this.chatRecipientId=this.selectedGroup="everyone")},this.usePaginatedChat=()=>(0,l.u)(this.meeting),this.updateUnreadCountGroups=e=>{this.unreadCountGroups=Object.assign(Object.assign({},this.unreadCountGroups),e)},this.isPrivateChatSupported=()=>{var e,t,i;return this.canPrivateMessage&&!this.disablePrivateChat&&"socket-service"===(null===(i=null===(t=null===(e=this.meeting)||void 0===e?void 0:e.__internals__)||void 0===t?void 0:t.features)||void 0===i?void 0:i.getFeatureValue("chat_socket_server"))},this.updateRecipients=e=>{if("string"==typeof e.detail)this.chatRecipientId="everyone",this.selectedParticipant=null;else{const{userId:t}=e.detail;this.chatRecipientId=t,this.selectedParticipant=this.participants.find((e=>e.userId===t))}if("everyone"!==this.chatRecipientId){const e=[this.chatRecipientId,this.meeting.self.userId],t=(0,r.g)(e);this.selectedGroup=t}else this.selectedGroup="everyone";this.updateUnreadCountGroups({[this.selectedGroup]:0})},this.isTextMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendTextMessage:this.canPrivateMessage&&this.canSendPrivateTexts,this.isFileMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendFiles:this.canPrivateMessage&&this.canSendPrivateFiles,this.meeting=void 0,this.config=o.d,this.size=void 0,this.iconPack=s.d,this.t=(0,n.u)(),this.disablePrivateChat=!1,this.privatePresetFilter=[],this.unreadCountGroups={},this.chatGroups={everyone:[]},this.selectedGroup="everyone",this.now=new Date,this.dropzoneActivated=!1,this.showLatestMessageButton=!1,this.canSend=!1,this.canSendTextMessage=!1,this.canSendFiles=!1,this.canPrivateMessage=!1,this.canSendPrivateTexts=!1,this.canSendPrivateFiles=!1,this.emojiPickerEnabled=!1,this.chatRecipientId="everyone",this.participants=[],this.selectedParticipant=void 0}connectedCallback(){this.meetingChanged(this.meeting),this.meeting&&!this.meeting.chat||this.isFileMessagingAllowed()&&(this.host.addEventListener("dragover",(e=>{e.preventDefault(),this.dropzoneActivated=!0})),this.host.addEventListener("dragleave",(()=>{this.dropzoneActivated=!1})),this.host.addEventListener("drop",(e=>{e.preventDefault(),this.dropzoneActivated=!1,(0,r.h)(e.dataTransfer.items,((e,t)=>{var i,a,s,n;switch(e){case"image":this.isFileMessagingAllowed()&&(null===(a=null===(i=this.meeting)||void 0===i?void 0:i.chat)||void 0===a||a.sendImageMessage(t,this.getRecipientPeerIds()));break;case"file":this.isFileMessagingAllowed()&&(null===(n=null===(s=this.meeting)||void 0===s?void 0:s.chat)||void 0===n||n.sendFileMessage(t,this.getRecipientPeerIds()))}}))})))}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,t){var i,a,s,n,r;null!=t&&this.disconnectMeeting(t),e&&!e.chat||null!=e&&(this.canSend=e.self.permissions.chatPublic.canSend,this.canSendTextMessage=e.self.permissions.chatPublic.text,this.canSendFiles=e.self.permissions.chatPublic.files,this.canPrivateMessage=(null===(i=e.self.permissions.chatPrivate)||void 0===i?void 0:i.canSend)||(null===(a=e.self.permissions.chatPrivate)||void 0===a?void 0:a.canReceive),this.canSendPrivateTexts=null===(s=e.self.permissions.chatPrivate)||void 0===s?void 0:s.text,this.canSendPrivateFiles=null===(n=e.self.permissions.chatPrivate)||void 0===n?void 0:n.files,this.initializeChatGroups(),this.chatGroups=Object.assign({},this.chatGroups),this.chatUpdateListener=({message:e})=>{this.addToChatGroup(e),this.chatGroups=Object.assign({},this.chatGroups)},this.onParticipantUpdate(),this.usePaginatedChat()||null===(r=e.chat)||void 0===r||r.addListener("chatUpdate",this.chatUpdateListener),this.isPrivateChatSupported()&&(e.participants.joined.addListener("participantJoined",this.onParticipantUpdate),e.participants.joined.addListener("participantLeft",this.onParticipantUpdate)))}chatGroupsChanged(e){var t,i;if(!this.isPrivateChatSupported())return;const a={};for(const s in e){const n=null!==(t=d.c[s])&&void 0!==t?t:0;a[s]=e[s].filter((e=>"chat"==e.type&&e.message.time>n&&e.message.userId!==this.meeting.self.userId)).length,(s===(0,r.g)([this.meeting.self.userId,null===(i=this.selectedParticipant)||void 0===i?void 0:i.userId])||"everyone"===s&&null===this.selectedParticipant)&&(a[s]=0,d.c[s]=new Date)}this.updateUnreadCountGroups(a)}initializeChatGroups(){var e;null===(e=this.meeting.chat)||void 0===e||e.messages.forEach((e=>{this.addToChatGroup(e)}))}addToChatGroup(e){var t;const i=(0,r.p)(e);let a="everyone";if((null===(t=i.targetUserIds)||void 0===t?void 0:t.length)>0){const e=new Set([i.userId,...i.targetUserIds]);a=(0,r.g)(Array.from(e))}void 0===this.chatGroups[a]&&(this.chatGroups[a]=[]),this.chatGroups[a]=[...this.chatGroups[a],{type:"chat",message:i}]}getRecipientPeerIds(){let e=[];return"everyone"!==this.chatRecipientId&&(e=[this.selectedParticipant.id]),e}render(){var e,t,i,s;const n={iconPack:this.iconPack,t:this.t,size:this.size},r=null===(e=this.meeting)||void 0===e?void 0:e.self.userId,d=this.chatGroups[this.selectedGroup]||[];return(0,a.h)(a.H,null,this.isFileMessagingAllowed()&&(0,a.h)("div",{id:"dropzone",class:{active:this.dropzoneActivated},part:"dropzone"},(0,a.h)("dyte-icon",{icon:this.iconPack.attach,iconPack:this.iconPack,t:this.t}),(0,a.h)("p",null,this.t("Drop files/images to send"))),this.isPrivateChatSupported()&&(0,a.h)("dyte-chat-selector-ui",Object.assign({selfUserId:r,groups:this.participants,selectedGroupId:null===(t=this.selectedParticipant)||void 0===t?void 0:t.userId,unreadCounts:this.unreadCountGroups,onDyteChatGroupChanged:this.updateRecipients},n)),this.usePaginatedChat()?(0,a.h)("dyte-chat-messages-ui-paginated",{meeting:this.meeting,size:this.size,iconPack:this.iconPack,t:this.t}):(0,a.h)("dyte-chat-messages-ui",Object.assign({messages:d,selfUserId:r,selectedGroup:this.selectedGroup},n)),(0,a.h)("dyte-chat-composer-ui",Object.assign({canSendTextMessage:this.isTextMessagingAllowed(),canSendFiles:this.isFileMessagingAllowed(),disableEmojiPicker:!!(null===(s=null===(i=this.meeting)||void 0===i?void 0:i.__internals__)||void 0===s?void 0:s.features.hasFeature(l.F.DISABLE_EMOJI_PICKER)),onDyteNewMessage:e=>{var t,i,a,s,n,r;const d=e.detail;switch(d.type){case"text":null===(i=null===(t=this.meeting)||void 0===t?void 0:t.chat)||void 0===i||i.sendTextMessage(d.message,this.getRecipientPeerIds());break;case"image":null===(s=null===(a=this.meeting)||void 0===a?void 0:a.chat)||void 0===s||s.sendImageMessage(d.file,this.getRecipientPeerIds());break;case"file":null===(r=null===(n=this.meeting)||void 0===n?void 0:n.chat)||void 0===r||r.sendFileMessage(d.file,this.getRecipientPeerIds())}}},n),(0,a.h)("slot",{name:"chat-addon",slot:"chat-addon"})))}get host(){return(0,a.g)(this)}static get watchers(){return{meeting:["meetingChanged"],chatGroups:["chatGroupsChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui{flex:1 0 0}"},40579:(e,t,i)=>{i.d(t,{F:()=>s,i:()=>n,u:()=>r});var a=i(60614);const s={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures"},n=e=>e.connectedMeetings.supportsConnectedMeetings,r=e=>{var t;return(0,a.s)(e)||(null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature("feat_paginated_chat"))}},60804:(e,t,i)=>{i.d(t,{g:()=>n});const a={get:(e,t,i)=>(...a)=>{try{return Reflect.get(e,t,i).apply(e,a)}catch(s){return null}}};let s;try{s=new Proxy(localStorage,a)}catch(r){s=new Proxy({},a)}const n=s},60614:(e,t,i)=>{i.d(t,{P:()=>r,a:()=>s,b:()=>c,c:()=>l,d:()=>d,e:()=>o,i:()=>a,s:()=>n});const a=e=>!!n(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),s=e=>{var t;return!!n(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},n=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,d;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(d||(d={}));const o=[d.TIME_UPDATE,d.BUFFER_UPDATE,d.TEXT_METADATA_CUE,d.PLAYER_METADATA],l=e=>{var t,i,a,s,r,d;return!!n(e)&&("ALLOWED"===(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"ALLOWED"===(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"ALLOWED"===(null===(d=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===d?void 0:d.canProduceVideo))},c=e=>{var t,i,a,s,r,d,o,l;return!!n(e)&&("NOT_ALLOWED"!==(null===(i=null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(s=null===(a=null==e?void 0:e.self)||void 0===a?void 0:a.permissions)||void 0===s?void 0:s.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(d=null===(r=null==e?void 0:e.self)||void 0===r?void 0:r.permissions)||void 0===d?void 0:d.canProduceVideo)||(null===(l=null===(o=null==e?void 0:e.self)||void 0===o?void 0:o.permissions)||void 0===l?void 0:l.canLivestream))}},85114:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>o,g:()=>d,s:()=>n});var a=i(60804);const s="dyte-prefs",n=(e,t)=>{const i=JSON.parse(a.g.getItem(s)||"{}");i[e]=JSON.stringify(t),a.g.setItem("dyte-prefs",JSON.stringify(i))},r=e=>JSON.parse(a.g.getItem(s)||"{}")[e],d=()=>{const e=JSON.parse(a.g.getItem(s)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},o={}}}]);