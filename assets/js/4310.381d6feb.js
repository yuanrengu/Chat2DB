"use strict";
exports.id = 4310;
exports.ids = [4310];
exports.modules = {

/***/ 84310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_livestream_player": () => (/* binding */ DyteLivestreamPlayer)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51306);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50528);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21237);







const dyteLivestreamPlayerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.player-container{position:relative;margin:var(--dyte-space-4, 16px);display:flex;flex-grow:1;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px)}video{z-index:0;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.loader{position:absolute;z-index:10;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;justify-content:center}p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.latency-controls{position:absolute;bottom:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);z-index:20;display:flex;flex-direction:row;align-items:center}.sync-live-stream{cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:12px}.unmute-popup{position:absolute;z-index:30 !important;display:flex;width:var(--dyte-space-72, 288px);flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);text-align:center;max-width:70%}.unmute-popup h3{margin:var(--dyte-space-0, 0px);font-size:16px;font-weight:500}.unmute-popup p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);font-size:14px}";

const DyteLivestreamPlayer = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dyteAPIError = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.showLatencyIndicator = false;
    this.LoadPlayer = (player = this.ivsPlayer) => {
      if (this.player && player) {
        player.attachHTMLVideoElement(this.player);
        player.setAutoplay(true);
        player.setVolume(1);
      }
    };
    this.livestreamUpdateListener = (state) => {
      var _a, _b;
      this.livestreamState = state;
      if (state === 'LIVESTREAMING') {
        this.LoadPlayer();
        this.getPlaybackUrl();
        if (!((_b = (_a = this.meeting.__internals__) === null || _a === void 0 ? void 0 : _a.browserSpecs) === null || _b === void 0 ? void 0 : _b.isIOSMobile())) {
          this.fetchLatency();
          this.updateLatency = setInterval(this.fetchLatency, 2000);
        }
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.enableSource('livestream-player');
      }
      else {
        this.showLatencyIndicator = false;
        if (this.updateLatency)
          clearInterval(this.updateLatency);
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.disableSource('livestream-player');
      }
    };
    this.getLoadingState = () => {
      let loadingMessage = '';
      let isLoading = false;
      let showIcon = false;
      switch (this.livestreamState) {
        case 'IDLE':
          loadingMessage = this.t('Waiting to go live.');
          isLoading = true;
          showIcon = false;
          break;
        case 'STARTING':
          loadingMessage = this.t('Livestream is starting...');
          isLoading = true;
          showIcon = true;
          break;
        case 'STOPPING':
          loadingMessage = this.t('Livestream is stopping...');
          isLoading = true;
          showIcon = true;
          break;
        case 'LIVESTREAMING':
          if (this.playerState !== _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.PLAYING) {
            loadingMessage = this.t('Livestream is starting...');
            showIcon = true;
            isLoading = true;
          }
          break;
        default:
          isLoading = false;
          loadingMessage = this.t('');
          showIcon = true;
          break;
      }
      return { isLoading, loadingMessage, showIcon };
    };
    this.getErrorState = () => {
      var _a, _b;
      let isError = false;
      let errorMessage = '';
      if (this.livestreamState !== 'LIVESTREAMING') {
        isError = false;
        errorMessage = this.t('');
        return { isError, errorMessage };
      }
      if (!this.isSupported) {
        isError = true;
        errorMessage = this.t('Player not supported.');
      }
      if (!this.playbackUrl) {
        isError = true;
        errorMessage = this.t('Playback URL not found.');
      }
      if (this.playerError) {
        isError = true;
        errorMessage = this.t((_b = (_a = this.playerError) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'An unknown error occured.');
      }
      return { isError, errorMessage };
    };
    this.fetchLatency = () => {
      if (this.ivsPlayer) {
        this.latency = this.ivsPlayer.getLiveLatency();
      }
    };
    this.stopRebuffer = (latency) => {
      this.ivsPlayer.setRebufferToLive(false);
      this.latency = latency;
      clearInterval(this.updateLatency);
      this.updateLatency = setInterval(this.fetchLatency, 2000);
    };
    this.resetSyncLivestream = () => {
      const latency = this.ivsPlayer.getLiveLatency();
      this.stopRebuffer(latency);
      this.dyteAPIError.emit({
        trace: this.t('livestreamPlayer.rebuffer.error'),
        message: this.t('Could not sync livestream please try again later.'),
      });
    };
    this.syncLiveStream = () => {
      clearInterval(this.updateLatency);
      // set latency to -1, to show loading icon
      this.latency = -1;
      this.ivsPlayer.setRebufferToLive(true);
      // Reset after 15 seconds
      const resetTimeout = setTimeout(this.resetSyncLivestream, 15000);
      this.updateLatency = setInterval(() => {
        const latency = this.ivsPlayer.getLiveLatency();
        if (latency < 10) {
          // Stop dropping frames
          this.stopRebuffer(latency);
          clearTimeout(resetTimeout);
        }
      }, 1000);
    };
    this.meeting = undefined;
    this.size = undefined;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.playbackUrl = undefined;
    this.isSupported = true;
    this.playerState = _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.IDLE;
    this.livestreamState = 'IDLE';
    this.playerError = undefined;
    this.latency = 0;
    this.audioPlaybackError = false;
  }
  AddPlayerListeners(player = this.ivsPlayer) {
    Object.values(Object.assign(Object.assign({}, _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.d), _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P)).forEach((key) => {
      if (_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.e.includes(key))
        return;
      player === null || player === void 0 ? void 0 : player.addEventListener(key, (event) => {
        var _a, _b, _c;
        if (key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.IDLE ||
          key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.PLAYING ||
          key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.d.ERROR ||
          key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.READY)
          this.playerState = key;
        if (key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.d.ERROR) {
          this.playerError = event;
        }
        if (key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.IDLE && player.isPaused()) {
          player.play();
        }
        if (key === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.d.AUDIO_BLOCKED) {
          this.audioPlaybackError = true;
        }
        if (this.playerState === _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.P.PLAYING &&
          !((_b = (_a = this.meeting.__internals__) === null || _a === void 0 ? void 0 : _a.browserSpecs) === null || _b === void 0 ? void 0 : _b.isIOSMobile())) {
          this.showLatencyIndicator = true;
        }
        else
          this.showLatencyIndicator = false;
        this.meeting.__internals__.logger.info(`IVS.Player.${key}`, event);
        // Send selected data to CallStats
        if (_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.f.includes(key)) {
          (_c = this.meeting.__internals__.callStats) === null || _c === void 0 ? void 0 : _c.ivsPlayerEvent(key, event);
        }
      });
    });
  }
  getPlaybackUrl(player = this.ivsPlayer) {
    this.playbackUrl = this.meeting.livestream.playbackUrl;
    if (this.playbackUrl && player) {
      player.load(this.playbackUrl);
      player.play();
    }
  }
  onPlayerRef(el) {
    this.player = el;
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.addSource('livestream-player', this.player, this.playbackUrl ? true : false);
    if (this.playbackUrl)
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.enableSource('livestream-player');
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    window.onDyteLivestreamPlayer = (player) => {
      if (player) {
        this.isSupported = true;
        this.ivsPlayer = player;
        this.AddPlayerListeners(player);
        this.LoadPlayer(player);
        this.getPlaybackUrl(player);
      }
      else
        this.isSupported = false;
    };
    this.sendLatencyToCallStats = setInterval(() => {
      var _a;
      this.fetchLatency();
      (_a = this.meeting.__internals__.callStats) === null || _a === void 0 ? void 0 : _a.livestreamLatency(this.latency);
    }, 10000);
  }
  disconnectedCallback() {
    window.onDyteLivestreamPlayer = undefined;
    this.meeting.livestream.removeListener('livestreamUpdate', this.livestreamUpdateListener);
    clearInterval(this.sendLatencyToCallStats);
    this.ivsPlayer.load('');
    this.ivsPlayer = undefined;
    this.player = undefined;
  }
  async componentDidLoad() {
    const IVSPlayerImport = `
    import IVSPlayer from 'https://cdn.jsdelivr.net/npm/amazon-ivs-player@1.16.0/+esm'
    let player = undefined;
    if (IVSPlayer.isPlayerSupported) {
      player = IVSPlayer.create({
        wasmBinary:
          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.wasm',
        wasmWorker:
          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.js',
      });
    }
    window.onDyteLivestreamPlayer && window.onDyteLivestreamPlayer(player);
    `;
    const pScript = document.createElement('script');
    pScript.type = 'module';
    pScript.innerHTML = IVSPlayerImport;
    document.body.appendChild(pScript);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.livestreamState = this.meeting.livestream.state;
    if (this.livestreamState === 'LIVESTREAMING') {
      this.LoadPlayer();
      this.getPlaybackUrl();
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.enableSource('livestream-player');
    }
    this.meeting.livestream.on('livestreamUpdate', this.livestreamUpdateListener);
  }
  render() {
    if (!(0,_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_4__.s)(this.meeting))
      return;
    const { isError, errorMessage } = this.getErrorState();
    const { isLoading, loadingMessage, showIcon } = this.getLoadingState();
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "player-container" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onPlayerRef(el), playsInline: true }), this.audioPlaybackError && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unmute-popup" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('audio_playback.title')), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('audio_playback.description')), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => {
        this.player.muted = false;
        this.audioPlaybackError = false;
      }, title: this.t('audio_playback'), iconPack: this.iconPack, t: this.t }, this.t('audio_playback')))), this.showLatencyIndicator && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "latency-controls" }, (this.latency > 10 || this.latency < 0) && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sync-live-stream", onClick: this.syncLiveStream }, this.latency === -1 ? ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { id: "icon", part: "spinner", iconPack: this.iconPack, t: this.t, size: "sm" })) : ('Skip to Live'))))), isError && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.warning, t: this.t }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, errorMessage))), !isError && isLoading && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, showIcon && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { id: "icon", part: "spinner", iconPack: this.iconPack, t: this.t, size: "md" })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, loadingMessage))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLivestreamPlayer.style = dyteLivestreamPlayerCss;




/***/ }),

/***/ 50528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PlayerState),
/* harmony export */   "a": () => (/* binding */ isLiveStreamHost),
/* harmony export */   "b": () => (/* binding */ canRequestToJoinStage),
/* harmony export */   "c": () => (/* binding */ canJoinStage),
/* harmony export */   "d": () => (/* binding */ PlayerEventType),
/* harmony export */   "e": () => (/* binding */ awsIvsPlayerEventsToIgnore),
/* harmony export */   "f": () => (/* binding */ isIvsPlayerCallStatsEvent),
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
const isIvsPlayerCallStatsEvent = [
  // CallStats Major Events
  PlayerEventType.REBUFFERING,
  PlayerEventType.AUDIO_BLOCKED,
  PlayerEventType.PLAYBACK_BLOCKED,
  PlayerEventType.ERROR,
  PlayerEventType.RECOVERABLE_ERROR,
  PlayerEventType.WORKER_ERROR,
  // According to docs it says:
  // "Indicates that a playback unavailable event occurred."
  //
  // So I am taking a guess this can occcur
  // even when a viewer is online
  PlayerEventType.NETWORK_UNAVAILABLE,
  // CallStats Minor Events
  PlayerEventType.ANALYTICS_EVENT,
  PlayerEventType.PLAYBACK_RATE_CHANGED,
  PlayerEventType.QUALITY_CHANGED,
  PlayerEventType.INITIALIZED, // no payload
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




/***/ })

};
;