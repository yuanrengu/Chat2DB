"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4509,6545],{16545:(t,e,i)=>{i.r(e),i.d(e,{dyte_breakout_rooms_toggle:()=>r});var s=i(67503),o=i(35461),a=i(11810),n=i(86466),c=i(40579);i(60614);const r=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.breakoutRoomToggle=()=>{var t,e,i;const s=this.meeting.connectedMeetings.meetings.length,o=this.states.activeBreakoutRooms||s>0?"view":"create";this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(e=null===(t=this.states)||void 0===t?void 0:t.activeBreakoutRoomsManager)||void 0===e?void 0:e.active),mode:o}}),n.s.activeBreakoutRoomsManager={active:!(null===(i=n.s.activeBreakoutRoomsManager)||void 0===i?void 0:i.active),mode:o}},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,a.u)()}render(){const t=this.meeting.self.permissions.connectedMeetings;if((t.canAlterConnectedMeetings||this.meeting.connectedMeetings.isActive)&&(t.canSwitchConnectedMeetings||t.canSwitchToParentMeeting)&&(0,c.i)(this.meeting))return(0,s.h)(s.H,{title:this.t("breakout_rooms")},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.breakoutRoomToggle,class:{active:this.states.activeBreakoutRooms},icon:this.iconPack.breakout_rooms,label:this.t("breakout_rooms"),variant:this.variant}))}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}"}}]);