"use strict";
exports.id = 6383;
exports.ids = [6383];
exports.modules = {

/***/ 56383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participant_tile": () => (/* binding */ DyteParticipantTile)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86466);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11204);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21237);
/* harmony import */ var _flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40579);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36881);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60804);
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60614);










const dyteParticipantTileCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}::slotted(dyte-network-indicator){position:absolute;right:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm']) ::slotted(dyte-network-indicator){right:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px)}video{display:none;position:absolute;height:100%;width:100%}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}.pinned-icon{position:absolute;left:var(--dyte-space-3, 12px);top:var(--dyte-space-3, 12px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) .pinned-icon{top:var(--dyte-space-2, 8px);left:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}";

const DyteParticipantTile = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onVideoUpdate = (videoState) => {
      this.videoState = videoState;
      if (this.participant == null)
        return;
      if (videoState.videoEnabled) {
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
      }
      else {
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.disableSource(this.participant.id);
      }
    };
    this.onPinned = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.isSelf = () => { var _a; return this.isPreview || this.participant.id === ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.id); };
    this.videoState = undefined;
    this.isPinned = false;
    this.nameTagPosition = 'bottom-left';
    this.isPreview = false;
    this.participant = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_6__.d;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  onVideoRef(el) {
    this.videoEl = el;
    if (this.isPreview || this.participant == null) {
      return;
    }
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.addSource(this.participant.id, this.videoEl, this.participant.videoEnabled);
    if (this.participant.videoEnabled) {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
    }
  }
  connectedCallback() {
    // set videoState before initial render and initialize listeners
    this.participantsChanged(this.participant);
  }
  componentDidLoad() {
    // load videoState into video element after first render
    this.videoStateChanged(this.videoState);
  }
  disconnectedCallback() {
    if (this.playTimeout)
      clearTimeout(this.playTimeout);
    if (this.participant == null)
      return;
    this.participant.removeListener('videoUpdate', this.onVideoUpdate);
    this.participant.removeListener('pinned', this.onPinned);
    this.participant.removeListener('unpinned', this.onPinned);
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.removeSource(this.participant.id);
  }
  participantsChanged(participant) {
    if (participant != null) {
      this.videoState = {
        videoEnabled: participant.videoEnabled,
        videoTrack: participant.videoTrack,
      };
      this.isPinned = participant.isPinned;
      participant.addListener('videoUpdate', this.onVideoUpdate);
      participant.addListener('pinned', this.onPinned);
      participant.addListener('unpinned', this.onPinned);
    }
  }
  videoStateChanged(videoState) {
    var _a;
    if (videoState != null && this.videoEl != null) {
      if (videoState.videoEnabled) {
        if ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_5__.F.LOG_PLAYING_FAILURES)) {
          if (this.playTimeout)
            clearTimeout(this.playTimeout);
          this.playTimeout = setTimeout(() => {
            var _a;
            (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.log('dyte-participant-tile::playing_timeout');
          }, 6000);
        }
        const stream = new MediaStream();
        if (videoState.videoTrack == null)
          return;
        stream.addTrack(videoState.videoTrack);
        this.videoEl.srcObject = stream;
      }
      else {
        if (this.playTimeout)
          clearTimeout(this.playTimeout);
        this.videoEl.srcObject = undefined;
      }
    }
  }
  isMirrored() {
    var _a;
    if (this.participant != null) {
      if (this.isSelf()) {
        const states = this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_1__.s;
        const mirrorVideo = (_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo;
        if (typeof mirrorVideo === 'boolean') {
          return mirrorVideo;
        }
      }
    }
    return false;
  }
  render() {
    var _a, _b, _c, _d;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onVideoRef(el), class: {
        visible: (_a = this.videoState) === null || _a === void 0 ? void 0 : _a.videoEnabled,
        mirror: this.isMirrored(),
        [(_d = (_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.videoFit) !== null && _d !== void 0 ? _d : 'cover']: true,
      }, onPlaying: () => {
        if (this.playTimeout)
          clearTimeout(this.playTimeout);
      }, onPause: (event) => {
        var _a, _b;
        if (this.isSelf() &&
          ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_5__.F.PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE))) {
          this.meeting.__internals__.logger.warn(`Video player paused for ${this.participant.id} isSelf: ${this.isSelf()}`);
          // @ts-ignore
          (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.play();
        }
      }, autoPlay: true, playsInline: true, muted: true }), this.isPinned && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "pinned-icon", icon: this.iconPack.pin, "aria-label": this.t('Pinned'), iconPack: this.iconPack, t: this.t })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "participant": ["participantsChanged"],
    "videoState": ["videoStateChanged"]
  }; }
};
DyteParticipantTile.style = dyteParticipantTileCss;




/***/ }),

/***/ 40579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FlagsmithFeatureFlags),
/* harmony export */   "i": () => (/* binding */ isBreakoutRoomsEnabled),
/* harmony export */   "u": () => (/* binding */ usePaginatedChat)
/* harmony export */ });
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60614);


const FlagsmithFeatureFlags = {
  PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE: 'play_participant_tile_video_on_pause',
  DISABLE_EMOJI_PICKER: 'disable_emoji_picker',
  FEAT_PAGINATED_CHAT: 'feat_paginated_chat',
  LOG_PLAYING_FAILURES: 'log_playing_failures',
};
const isBreakoutRoomsEnabled = (meeting) => meeting.connectedMeetings.supportsConnectedMeetings;
const usePaginatedChat = (meeting) => { var _a; return (0,_livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) || ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.__internals__) === null || _a === void 0 ? void 0 : _a.features.hasFeature('feat_paginated_chat')); };




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




/***/ }),

/***/ 21237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PiPEvents),
/* harmony export */   "s": () => (/* binding */ store)
/* harmony export */ });
const PIP_CANVAS_HEIGHT = 720;
const PIP_CANVAS_WIDTH = 1280;
const PIP_CANVAS_FILL = '#000000';
const calcGridElemSize = (gridSize) => {
  switch (gridSize) {
    case 0:
    case 1:
      return [PIP_CANVAS_WIDTH, PIP_CANVAS_HEIGHT];
    case 2:
      return [Math.floor(PIP_CANVAS_WIDTH / 2), PIP_CANVAS_HEIGHT];
    case 3:
    case 4:
      return [Math.floor(PIP_CANVAS_WIDTH / 2), Math.floor(PIP_CANVAS_HEIGHT / 2)];
    case 5:
    case 6:
      return [Math.floor(PIP_CANVAS_WIDTH / 3), Math.floor(PIP_CANVAS_HEIGHT / 2)];
    default:
      return [Math.floor(PIP_CANVAS_WIDTH / 3), Math.floor(PIP_CANVAS_HEIGHT / 2)];
  }
};
const calcImageCrop = (x, y, w, h, videoW, videoH) => {
  // default offset is center
  let offsetX = 0.5;
  let offsetY = 0.5;
  const iw = videoW;
  const ih = videoH;
  const r = Math.min(w / iw, h / ih);
  let nw = iw * r; // new prop. width
  let nh = ih * r; // new prop. height
  let cx;
  let cy;
  let cw;
  let ch;
  let ar = 1;
  // decide which gap to fill
  if (nw < w)
    ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h)
    ar = h / nh; // updated
  nw *= ar;
  nh *= ar;
  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;
  // make sure source rectangle is valid
  if (cx < 0)
    cx = 0;
  if (cy < 0)
    cy = 0;
  if (cw > iw)
    cw = iw;
  if (ch > ih)
    ch = ih;
  // fill image in dest. rectangle
  return [cx, cy, cw, ch, x, y, w, h];
};
var PiPEvents;
(function (PiPEvents) {
  PiPEvents["CAMERA"] = "CAMERA";
  PiPEvents["MIC"] = "MIC";
  PiPEvents["END"] = "END";
})(PiPEvents || (PiPEvents = {}));
class PipStore {
  constructor() {
    this.tracks = [];
    this.sources = [];
    this.enabled = false;
  }
  isSupported() {
    return !!window.chrome && document.pictureInPictureEnabled;
  }
  cleanup() {
    if (this.isSupported() &&
      document.exitPictureInPicture !== undefined &&
      document.pictureInPictureElement !== null) {
      document.exitPictureInPicture();
    }
    this.canvas = undefined;
    this.video = undefined;
    this.tracks = [];
    this.request = undefined;
  }
  createCanvas() {
    const c = document.createElement('canvas');
    c.height = PIP_CANVAS_HEIGHT;
    c.width = PIP_CANVAS_WIDTH;
    this.canvas = c;
  }
  setupEvents(onEvent) {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('hangup', () => {
      onEvent(PiPEvents.END);
    });
  }
  mountAudioEvents(onEvent) {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('togglemicrophone', () => {
      onEvent(PiPEvents.MIC);
    });
  }
  mountVideoEvents(onEvent) {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('togglecamera', () => {
      onEvent(PiPEvents.CAMERA);
    });
  }
  unmountAudioEvents() {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('togglemicrophone', undefined);
  }
  unmountVideoEvents() {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('togglecamera', undefined);
  }
  drawGrid(gridW, gridH, gridSize) {
    if (this.canvas === undefined)
      return;
    const ctx = this.canvas.getContext('2d');
    // Reset the canvas
    ctx.fillStyle = PIP_CANVAS_FILL;
    ctx.fillRect(0, 0, PIP_CANVAS_WIDTH, PIP_CANVAS_HEIGHT);
    let pointerY = 0;
    let i = 0;
    while (pointerY < PIP_CANVAS_HEIGHT - 5) {
      let pointerX = 0;
      while (pointerX < PIP_CANVAS_WIDTH - 5 && i < gridSize) {
        const videoElem = this.tracks[i];
        const [cx, cy, cw, ch, x, y, w, h] = calcImageCrop(pointerX, pointerY, gridW, gridH, videoElem.videoWidth, videoElem.videoHeight);
        ctx.drawImage(videoElem, cx, cy, cw, ch, x, y, w, h);
        i += 1;
        pointerX += gridW;
      }
      pointerY += gridH;
    }
  }
  paintCanvas() {
    const gridSize = this.tracks.length;
    const [gridW, gridH] = calcGridElemSize(gridSize);
    this.drawGrid(gridW, gridH, gridSize);
  }
  animate() {
    if (this.tracks !== undefined) {
      this.paintCanvas();
    }
    if (this.request !== undefined) {
      this.request = requestAnimationFrame(() => this.animate());
    }
  }
  /**
   * Create a PiP store and prepare sources
   * @param onReady method to trigger when video stream is ready
   * @param onStop method to trigger when PiP is stopped
   * @param onEvent method to trigger on PiP media session
   */
  create(onReady, onStop, onEvent) {
    this.cleanup();
    this.createCanvas();
    this.setupEvents(onEvent);
    const target = document.createElement('video');
    target.height = PIP_CANVAS_HEIGHT;
    target.width = PIP_CANVAS_WIDTH;
    target.autoplay = true;
    target.srcObject = this.canvas.captureStream(24);
    this.video = target;
    this.video.onloadedmetadata = () => {
      try {
        onReady();
        this.video.onleavepictureinpicture = () => {
          onStop();
        };
      }
      catch (err) {
        onStop(err.getMessage());
      }
    };
    this.paintCanvas();
  }
  updateMediaSession(event, state) {
    if (navigator.mediaSession === undefined)
      return;
    if (event === PiPEvents.CAMERA &&
      navigator.mediaSession.setCameraActive !== undefined) {
      navigator.mediaSession.setCameraActive(state);
    }
    if (event === PiPEvents.MIC &&
      navigator.mediaSession.setMicrophoneActive !== undefined) {
      navigator.mediaSession.setMicrophoneActive(state);
    }
  }
  /**
   * Update the active streams to show on grid
   * @param sources list of participants to show on grid
   */
  updateVideoSources() {
    const enabledSources = Object.values(this.sources).filter((t) => t.enabled);
    const tracks = [];
    enabledSources.map((sou) => {
      tracks.push(sou.element);
    });
    this.tracks = tracks;
  }
  enableSource(source) {
    if (this.sources[source] !== undefined) {
      this.sources[source].enabled = true;
    }
    this.updateVideoSources();
  }
  disableSource(source) {
    if (this.sources[source] !== undefined) {
      this.sources[source].enabled = false;
    }
    this.updateVideoSources();
  }
  /**
   * Add a video source from the participant grid
   * @param id participant id to store the video against
   * @param element HTMLVideoElement for the video source
   */
  addSource(id, element, enabled) {
    this.sources[id] = { element, enabled };
  }
  /**
   * Remove the video source for the participant
   * @param id participant id
   */
  removeSource(id) {
    delete this.sources[id];
  }
  /**
   * Remove all sources
   */
  removeAllSource() {
    this.sources = [];
  }
  /**
   * Enable PiP
   */
  enable() {
    this.enabled = true;
    // Repaint canvas in loop
    this.request = requestAnimationFrame(() => this.animate());
    this.video.requestPictureInPicture();
  }
  /**
   * Enable PiP
   */
  disable() {
    this.enabled = false;
    cancelAnimationFrame(this.request);
    this.request = undefined;
    document.exitPictureInPicture();
  }
}
const store = new PipStore();




/***/ }),

/***/ 86466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ onChange),
/* harmony export */   "s": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;