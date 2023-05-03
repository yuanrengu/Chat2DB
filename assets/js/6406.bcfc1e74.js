"use strict";
exports.id = 6406;
exports.ids = [6406];
exports.modules = {

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_stage_toggle": () => (/* binding */ DyteStageToggle)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _index_123dfc47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88581);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60614);






const dyteStageToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}";

const DyteStageToggle = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.stageCallback = async () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const stageStatus = (_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.status;
      if (stageStatus === 'ON_STAGE') {
        await ((_c = (_b = this === null || this === void 0 ? void 0 : this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.leave());
      }
      if (stageStatus === 'OFF_STAGE') {
        (_e = (_d = this === null || this === void 0 ? void 0 : this.meeting) === null || _d === void 0 ? void 0 : _d.stage) === null || _e === void 0 ? void 0 : _e.requestAccess();
        if ((0,_livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.meeting)) {
          this.stateUpdate.emit({ activeJoinStage: true });
        }
      }
      if (stageStatus === 'REQUESTED_TO_JOIN_STAGE') {
        (_g = (_f = this === null || this === void 0 ? void 0 : this.meeting) === null || _f === void 0 ? void 0 : _f.stage) === null || _g === void 0 ? void 0 : _g.cancelRequestAccess();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.stageStatus = 'OFF_STAGE';
    this.state = {
      label: '',
      disabled: false,
      icon: '',
    };
    this.t = (0,_index_123dfc47_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  stageStatusHandler(meeting, status) {
    this.stageStatus = status;
    if (status === 'ACCEPTED_TO_JOIN_STAGE') {
      meeting.self.setupTracks({ audio: false, video: false });
      this.stateUpdate.emit({ activeJoinStage: true });
    }
    this.state = this.getState();
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', (status) => this.stageStatusHandler(this.meeting, status));
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting == null)
      return;
    this.stageStatus = (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.status;
    this.stageStatusHandler(meeting, (_b = meeting.stage) === null || _b === void 0 ? void 0 : _b.status);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.on('stageStatusUpdate', (status) => this.stageStatusHandler(meeting, status));
  }
  getState() {
    let label = '';
    let icon = '';
    let disabled = false;
    switch (this.stageStatus) {
      case 'ON_STAGE': {
        icon = this.iconPack.leave_stage;
        label = 'Leave Livestream';
        disabled = false;
        break;
      }
      case 'ACCEPTED_TO_JOIN_STAGE': {
        icon = this.iconPack.join_stage;
        label = 'Join Livestream';
        disabled = true;
        break;
      }
      case 'REQUESTED_TO_JOIN_STAGE': {
        icon = this.iconPack.join_stage;
        label = 'Requested';
        disabled = false;
        break;
      }
      default: {
        icon = this.iconPack.join_stage;
        label = 'Join Livestream';
        disabled = false;
        break;
      }
    }
    return { label, disabled, icon };
  }
  render() {
    if (!(0,_livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.meeting))
      return;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.state.label }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: this.state.label, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: this.state.label, icon: this.state.icon, onClick: this.stageCallback, disabled: this.state.disabled, showWarning: false }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteStageToggle.style = dyteStageToggleCss;




/***/ }),

/***/ 60614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PlayerState),
/* harmony export */   "a": () => (/* binding */ isLiveStreamHost),
/* harmony export */   "b": () => (/* binding */ canRequestToJoinStage),
/* harmony export */   "c": () => (/* binding */ canJoinStage),
/* harmony export */   "d": () => (/* binding */ PlayerEventType),
/* harmony export */   "e": () => (/* binding */ awsIvsPlayerEventsToIgnore),
/* harmony export */   "i": () => (/* binding */ isLiveStreamViewer),
/* harmony export */   "s": () => (/* binding */ showLivestream)
/* harmony export */ });
/**
 * Can view the livestream
 */
const isLiveStreamViewer = (meeting) => {
  if (!showLivestream(meeting))
    return false;
  return meeting.meta.viewType === 'LIVESTREAM' && meeting.stage.status !== 'ON_STAGE';
};
/**
 * Can start/stop the livestream
 */
const isLiveStreamHost = (meeting) => {
  var _a;
  if (!showLivestream(meeting))
    return false;
  return meeting.meta.viewType === 'LIVESTREAM' && ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.canLivestream);
};
const showLivestream = (meeting) => {
  var _a;
  return ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.isV2) && (meeting === null || meeting === void 0 ? void 0 : meeting.livestream);
};
var PlayerState;
(function (PlayerState) {
  PlayerState["BUFFERING"] = "Buffering";
  PlayerState["ENDED"] = "Ended";
  PlayerState["IDLE"] = "Idle";
  PlayerState["PLAYING"] = "Playing";
  PlayerState["READY"] = "Ready";
})(PlayerState || (PlayerState = {}));
var PlayerEventType;
(function (PlayerEventType) {
  PlayerEventType["INITIALIZED"] = "PlayerInitialized";
  PlayerEventType["QUALITY_CHANGED"] = "PlayerQualityChanged";
  PlayerEventType["DURATION_CHANGED"] = "PlayerDurationChanged";
  PlayerEventType["VOLUME_CHANGED"] = "PlayerVolumeChanged";
  PlayerEventType["MUTED_CHANGED"] = "PlayerMutedChanged";
  PlayerEventType["PLAYBACK_RATE_CHANGED"] = "PlayerPlaybackRateChanged";
  PlayerEventType["REBUFFERING"] = "PlayerRebuffering";
  PlayerEventType["AUDIO_BLOCKED"] = "PlayerAudioBlocked";
  PlayerEventType["PLAYBACK_BLOCKED"] = "PlayerPlaybackBlocked";
  PlayerEventType["ERROR"] = "PlayerError";
  PlayerEventType["RECOVERABLE_ERROR"] = "PlayerRecoverableError";
  PlayerEventType["ANALYTICS_EVENT"] = "PlayerAnalyticsEvent";
  PlayerEventType["TIME_UPDATE"] = "PlayerTimeUpdate";
  PlayerEventType["BUFFER_UPDATE"] = "PlayerBufferUpdate";
  PlayerEventType["SEEK_COMPLETED"] = "PlayerSeekCompleted";
  PlayerEventType["SESSION_DATA"] = "PlayerSessionData";
  PlayerEventType["STATE_CHANGED"] = "PlayerStateChanged";
  PlayerEventType["WORKER_ERROR"] = "PlayerWorkerError";
  PlayerEventType["METADATA"] = "PlayerMetadata";
  PlayerEventType["TEXT_CUE"] = "PlayerTextCue";
  PlayerEventType["TEXT_METADATA_CUE"] = "PlayerTextMetadataCue";
  PlayerEventType["AD_CUE"] = "PlayerAdCue";
  PlayerEventType["STREAM_SOURCE_CUE"] = "PlayerStreamSourceCue";
  PlayerEventType["NETWORK_UNAVAILABLE"] = "PlayerNetworkUnavailable";
  PlayerEventType["SEGMENT_DISCONTINUITY"] = "PlayerSegmentDiscontinuity";
  PlayerEventType["SEGMENT_METADATA"] = "PlayerSegmentMetadata";
  PlayerEventType["PLAYER_METADATA"] = "PlayerMetadata";
})(PlayerEventType || (PlayerEventType = {}));
/**
 * NOTE(callmetarush): For some reason PlayerMetadata is not in type but spams events like crazy
 */
const awsIvsPlayerEventsToIgnore = [
  PlayerEventType.TIME_UPDATE,
  PlayerEventType.BUFFER_UPDATE,
  PlayerEventType.TEXT_METADATA_CUE,
  PlayerEventType.PLAYER_METADATA,
];
// TODO: (ishita1805): Move to stage.ts helpers when webinar is moved to `meeting.stage`
const canJoinStage = (meeting) => {
  var _a, _b, _c, _d, _e, _f;
  if (!showLivestream(meeting))
    return false;
  return (((_b = (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.canProduceAudio) === 'ALLOWED' ||
    ((_d = (_c = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.canProduceScreenshare) === 'ALLOWED' ||
    ((_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo) === 'ALLOWED');
};
const canRequestToJoinStage = (meeting) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!showLivestream(meeting))
    return false;
  return (((_b = (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.canProduceAudio) !== 'NOT_ALLOWED' ||
    ((_d = (_c = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.canProduceScreenshare) !== 'NOT_ALLOWED' ||
    ((_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo) !== 'NOT_ALLOWED' ||
    ((_h = (_g = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _g === void 0 ? void 0 : _g.permissions) === null || _h === void 0 ? void 0 : _h.canLivestream));
};




/***/ })

};
;