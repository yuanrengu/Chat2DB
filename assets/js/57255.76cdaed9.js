"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[57255,3570],{3570:(e,i,t)=>{t.r(i),t.d(i,{dyte_viewer_count:()=>s});var n=t(67503),a=t(35461),r=t(11810),l=t(60614);const s=class{constructor(e){(0,n.r)(this,e),this.disconnectMeeting=e=>{var i;null!=e&&null!=this.countListener&&(null===(i=e.livestream)||void 0===i||i.removeListener("viewerCountUpdate",this.countListener))},this.meeting=void 0,this.iconPack=a.d,this.t=(0,r.u)(),this.viewerCount=0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,i){var t;this.disconnectMeeting(i),null!=e&&(this.countListener=()=>{var i;this.viewerCount=null===(i=e.livestream)||void 0===i?void 0:i.viewerCount},this.countListener(),null===(t=e.livestream)||void 0===t||t.addListener("viewerCountUpdate",this.countListener))}render(){return(0,l.s)(this.meeting)?(0,n.h)(n.H,{tabIndex:0,role:"log","aria-label":`${this.viewerCount} ${this.t("viewers")}`},(0,n.h)("dyte-icon",{icon:this.iconPack.viewers,tabIndex:-1,"aria-hidden":!0,part:"icon",iconPack:this.iconPack,t:this.t}),this.viewerCount," ",this.t("viewers")):null}static get watchers(){return{meeting:["meetingChanged"]}}};s.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"},60614:(e,i,t)=>{t.d(i,{P:()=>l,a:()=>a,b:()=>v,c:()=>d,d:()=>s,e:()=>o,i:()=>n,s:()=>r});const n=e=>!!r(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),a=e=>{var i;return!!r(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.canLivestream))},r=e=>{var i;return(null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions.isV2)&&(null==e?void 0:e.livestream)};var l,s;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(l||(l={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(s||(s={}));const o=[s.TIME_UPDATE,s.BUFFER_UPDATE,s.TEXT_METADATA_CUE,s.PLAYER_METADATA],d=e=>{var i,t,n,a,l,s;return!!r(e)&&("ALLOWED"===(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"ALLOWED"===(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"ALLOWED"===(null===(s=null===(l=null==e?void 0:e.self)||void 0===l?void 0:l.permissions)||void 0===s?void 0:s.canProduceVideo))},v=e=>{var i,t,n,a,l,s,o,d;return!!r(e)&&("NOT_ALLOWED"!==(null===(t=null===(i=null==e?void 0:e.self)||void 0===i?void 0:i.permissions)||void 0===t?void 0:t.canProduceAudio)||"NOT_ALLOWED"!==(null===(a=null===(n=null==e?void 0:e.self)||void 0===n?void 0:n.permissions)||void 0===a?void 0:a.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(s=null===(l=null==e?void 0:e.self)||void 0===l?void 0:l.permissions)||void 0===s?void 0:s.canProduceVideo)||(null===(d=null===(o=null==e?void 0:e.self)||void 0===o?void 0:o.permissions)||void 0===d?void 0:d.canLivestream))}}}]);