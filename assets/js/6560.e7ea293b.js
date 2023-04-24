"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[6560,3533],{3533:(e,t,i)=>{i.r(t),i.d(t,{dyte_dialog_manager:()=>h});var a=i(7503),o=i(6881),s=i(5461),n=i(1810),l=i(4228),c=i(6466);const h=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onDyteDialogClose=(e,t)=>{c.s[e]=t,this.stateUpdate.emit({[e]:t})},this.leaveStage=async()=>{var e,t,i;"LIVESTREAM"===this.meeting.meta.viewType&&"ACCEPTED_TO_JOIN_STAGE"===(null===(e=this.meeting.stage)||void 0===e?void 0:e.status)&&await(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===i?void 0:i.leave()),"WEBINAR"===this.meeting.meta.viewType&&await this.meeting.self.leaveStage(),this.onDyteDialogClose("activeJoinStage",!1)},this.joinStage=async()=>{"LIVESTREAM"===this.meeting.meta.viewType&&await this.meeting.stage.join(),"WEBINAR"===this.meeting.meta.viewType&&await this.meeting.self.joinStage(),this.onDyteDialogClose("activeJoinStage",!1)},this.meeting=void 0,this.config=o.d,this.states=void 0,this.size=void 0,this.iconPack=s.d,this.t=(0,n.u)()}render(){var e,t,i,o,s;const n={meeting:this.meeting,states:this.states||c.s,config:this.config,size:this.size,iconPack:this.iconPack,t:this.t},h=this.states||c.s;if(null!=(null==h?void 0:h.image)){const e=h.image,t=()=>{this.stateUpdate.emit({image:null}),c.s.image=null};return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:t,hideCloseButton:!0,iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-image-viewer",defaults:n,props:{image:e,onClose:t}})))}if(!0===(null==h?void 0:h.activeSettings))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeSettings",!1),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-settings",defaults:n})));if(!0===(null==h?void 0:h.activeLeaveConfirmation))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeLeaveConfirmation",!1),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-leave-meeting",defaults:n})));if(!0===(null===(e=null==h?void 0:h.activePermissionsMessage)||void 0===e?void 0:e.enabled))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activePermissionsMessage",{enabled:!1}),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-permissions-message",defaults:n})));if(!0===(null==h?void 0:h.activeRemoteAccessManager))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeRemoteAccessManager",!1),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-remote-access-manager",defaults:n})));if(!0===(null===(t=null==h?void 0:h.activeBreakoutRoomsManager)||void 0===t?void 0:t.active))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeBreakoutRoomsManager",{active:!1,data:void 0}),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-breakout-rooms-manager",defaults:n,props:{mode:(null===(i=this.states)||void 0===i?void 0:i.activeBreakoutRooms)?"view":"create"}})));if(!0===(null===(o=null==h?void 0:h.activeConfirmationModal)||void 0===o?void 0:o.active))return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeConfirmationModal",!1),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-confirmation-modal",defaults:n})));if(!0===(null===(s=null==h?void 0:h.activeOverlayModal)||void 0===s?void 0:s.active))return(0,a.h)(a.H,null,(0,a.h)("dyte-overlay-modal",{meeting:this.meeting,states:this.states,iconPack:this.iconPack,t:this.t}));if(null==h?void 0:h.activeBroadcastMessageModal)return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>this.onDyteDialogClose("activeBroadcastMessageModal",!1),iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-broadcast-message-modal",defaults:n})));if(!0===(null==h?void 0:h.activeJoinStage)){const e={title:this.t("stage.join_title"),label:{accept:this.t("stage.join_confirm"),reject:this.t("stage.join_cancel")},description:this.t("stage.join_summary")};return(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:this.leaveStage,iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-join-stage",Object.assign({dataConfig:e,onDyteJoinStage:this.joinStage,onDyteLeaveStage:this.leaveStage},n))))}return!0===(null==h?void 0:h.activeMuteAllConfirmation)?(0,a.h)(a.H,null,(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>{this.onDyteDialogClose("activeMuteAllConfirmation",!1)},iconPack:this.iconPack,t:this.t},(0,a.h)(l.R,{element:"dyte-mute-all-confirmation",defaults:n}))):null}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}"}}]);