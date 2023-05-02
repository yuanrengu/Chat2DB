"use strict";
exports.id = 4737;
exports.ids = [4737];
exports.modules = {

/***/ 74737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_grid": () => (/* binding */ DyteGrid)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36881);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11810);
/* harmony import */ var _index_eecc1518_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24228);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86466);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21237);
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60614);
/* harmony import */ var _grid_93f2f6c8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26449);










const dyteGridCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;height:100%;width:100%;overflow:hidden;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;color:rgb(var(--dyte-colors-text-1000, 255 255 255));transition:0.4s}dyte-participant-tile{aspect-ratio:initial;box-sizing:border-box}.webinar-stage{box-sizing:border-box;display:flex;align-content:center;align-items:center;justify-content:center;text-align:center}.webinar-stage h2{margin:var(--dyte-space-0, 0px);font-weight:normal}.livestream-stage{box-sizing:border-box;margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;height:100%;flex-grow:1;align-content:center;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-md, 8px);text-align:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}";

const DyteGrid = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.hideSelf = false;
    this.networkUpdateListener = ({ event }) => {
      this.connected = event === 'connected';
    };
    this.meetingDisconnectedListener = () => {
      this.networkUpdateListener({ event: 'disconnected' });
    };
    this.meetingConnectedListener = () => {
      this.networkUpdateListener({ event: 'connected' });
    };
    this.eventCallback = (event) => {
      const { self } = this.meeting;
      if (event === _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.P.CAMERA) {
        if (self.videoEnabled) {
          self.disableVideo();
        }
        else {
          self.enableVideo();
        }
      }
      if (event === _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.P.MIC) {
        if (self.audioEnabled) {
          self.disableAudio();
        }
        else {
          self.enableAudio();
        }
      }
      if (event === _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.P.END) {
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.cleanup();
        this.stateUpdate.emit({ activePipMode: false });
        this.meeting.leaveRoom();
      }
    };
    this.enablePipMediaControls = (meeting = this.meeting) => {
      const canProduceAudio = meeting.self.permissions.canProduceAudio;
      const canProduceVideo = meeting.self.permissions.canProduceVideo;
      if (canProduceAudio)
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.mountAudioEvents(this.eventCallback);
      if (canProduceVideo)
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.mountVideoEvents(this.eventCallback);
    };
    this.disablePipMediaControls = () => {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.unmountAudioEvents();
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.unmountVideoEvents();
    };
    // NOTE: (ishita1805) Only for `DyteStage` events
    this.handlePipMediaControls = (status) => {
      if (status === 'ON_STAGE')
        this.enablePipMediaControls();
      else
        this.disablePipMediaControls();
    };
    // TODO(@madhugb): Temp hack, remove this when we ship manual subscription
    this.filterParticipants = (participants) => {
      var _a;
      // Only filter for non recorders
      if (this.overrides && ((_a = this.overrides) === null || _a === void 0 ? void 0 : _a.videoUnsubscribed)) {
        const presetFilters = this.overrides.videoUnsubscribed.preset;
        if (presetFilters.length > 0) {
          // Filter out unsubscribed participants
          participants = participants.filter((p) => {
            const unsubscribed = presetFilters.some((regex) => {
              if (p.presetName === undefined)
                return false;
              return p.presetName.match(regex);
            });
            return !unsubscribed;
          });
        }
      }
      return participants;
    };
    this.onSelfVideoUpdateListener = ({ videoEnabled }) => {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.updateMediaSession(_pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.P.CAMERA, videoEnabled);
    };
    this.onSelfAudioUpdateListener = ({ audioEnabled }) => {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.updateMediaSession(_pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.P.MIC, audioEnabled);
    };
    this.onViewModeChanged = () => {
      if (this.meeting == null)
        return;
      this.updateActiveParticipants();
    };
    this.onParticipantJoined = (participant) => {
      if (this.meeting == null)
        return;
      if (!this.participants.some((p) => p.id === participant.id)) {
        this.participants = this.filterParticipants([participant, ...this.participants]);
      }
      if (participant.isPinned && !this.pinnedParticipants.some((p) => p.id === participant.id)) {
        this.pinnedParticipants = this.pinnedParticipants.concat([participant]);
      }
      this.updateWebinarStage();
    };
    this.onParticipantLeft = (participant) => {
      this.participants = this.participants.filter((p) => p.id !== participant.id);
      this.participants = this.participants.concat(this.meeting.participants.active
        .toArray()
        .filter((p) => !this.participants.find((p1) => p1.id === p.id)));
      this.participants = this.filterParticipants(this.participants);
      this.pinnedParticipants = this.pinnedParticipants.filter((p) => p.id !== participant.id);
      if (participant.screenShareEnabled) {
        this.removeScreenShare(participant);
      }
      this.updateWebinarStage();
    };
    this.selfStageJoinListener = () => {
      this.updateActiveParticipants();
    };
    this.selfStageLeaveListener = () => {
      this.removeScreenShare(this.meeting.self);
      this.updateActiveParticipants();
    };
    this.onPresentationStart = () => {
      if (this.meeting == null)
        return;
      this.updateActiveParticipants();
    };
    this.onPresentationEnd = (participant) => {
      if (this.meeting == null)
        return;
      this.removePinned(participant);
      this.removeScreenShare(participant);
      this.updateActiveParticipants();
    };
    this.onScreenShareUpdate = (participant) => {
      if (participant.screenShareEnabled) {
        this.addScreenShare(participant);
      }
      else {
        this.removeScreenShare(participant);
      }
    };
    this.onSelfScreenShareUpdate = ({ screenShareEnabled, }) => {
      if (screenShareEnabled) {
        this.addScreenShare(this.meeting.self);
      }
      else {
        this.removeScreenShare(this.meeting.self);
      }
    };
    this.onPluginStateUpdate = (plugin, { active }) => {
      if (active) {
        if (!this.plugins.some((p) => p.id === plugin.id)) {
          this.plugins = [...this.plugins, plugin];
        }
      }
      else {
        this.plugins = this.plugins.filter((p) => p.id !== plugin.id);
      }
    };
    this.onParticipantPinned = () => {
      this.updateActiveParticipants();
    };
    this.onParticipantUnpinned = () => {
      this.updateActiveParticipants();
    };
    this.participants = [];
    this.pinnedParticipants = [];
    this.screenShareParticipants = [];
    this.plugins = [];
    this.showWebinarStage = false;
    this.showLiveStreamPlayer = false;
    this.canCurrentPeerHost = false;
    this.connected = true;
    this.pipSupported = false;
    this.pipEnabled = false;
    this.layout = 'row';
    this.aspectRatio = '16:9';
    this.meeting = undefined;
    this.gap = 8;
    this.size = undefined;
    this.states = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.gridSize = _grid_93f2f6c8_js__WEBPACK_IMPORTED_MODULE_8__.d;
    this.overrides = {};
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectMeeting(meeting) {
    var _a, _b;
    if (meeting == null)
      return;
    this.participants = [];
    this.plugins = [];
    const { self, participants, plugins, meta } = meeting;
    participants.active.removeListener('participantJoined', this.onParticipantJoined);
    participants.active.removeListener('participantLeft', this.onParticipantLeft);
    participants.joined.removeListener('screenShareUpdate', this.onScreenShareUpdate);
    participants.joined.removeListener('peerStartedPresenting', this.onPresentationStart);
    participants.joined.removeListener('peerStoppedPresenting', this.onPresentationEnd);
    self.removeListener('screenShareUpdate', this.onSelfScreenShareUpdate);
    plugins === null || plugins === void 0 ? void 0 : plugins.all.removeListener('stateUpdate', this.onPluginStateUpdate);
    participants.pinned.removeListener('participantJoined', this.onParticipantPinned);
    participants.pinned.removeListener('participantLeft', this.onParticipantUnpinned);
    self.removeListener('pinned', this.onParticipantPinned);
    self.removeListener('unpinned', this.onParticipantUnpinned);
    participants.removeListener('viewModeChanged', this.onViewModeChanged);
    self.removeListener('stageJoined', this.selfStageJoinListener);
    self.removeListener('stageLeft', this.selfStageLeaveListener);
    self.removeListener('removedFromStage', this.selfStageLeaveListener);
    self.removeListener('videoUpdate', this.onSelfVideoUpdateListener);
    self.removeListener('audioUpdate', this.onSelfAudioUpdateListener);
    meta.removeListener('disconnected', this.meetingDisconnectedListener);
    meta.removeListener('connected', this.meetingConnectedListener);
    (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.removeListener('stageStatusUpdate', this.handlePipMediaControls);
    meeting.self.removeListener('stageJoined', this.enablePipMediaControls);
    meeting.self.removeListener('stageLeft', this.disablePipMediaControls);
    (_b = meeting.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.updateLiveStreamStage);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  screenShareParticipantsChanged(participants) {
    const activeScreenShare = participants.length > 0;
    this.stateUpdate.emit({ activeScreenShare });
    _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__.s.activeScreenShare = activeScreenShare;
  }
  pluginsChanged(plugins) {
    const activePlugin = plugins.length > 0;
    this.stateUpdate.emit({ activePlugin });
    _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__.s.activePlugin = activePlugin;
  }
  pinnedParticipantsChanged(participants) {
    const activeSpotlight = participants.length > 0;
    this.stateUpdate.emit({ activeSpotlight });
    _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__.s.activeSpotlight = activeSpotlight;
  }
  updateActiveParticipants() {
    var _a, _b;
    const { self, participants } = this.meeting;
    const isWebinarHiddenParticipant = ((_a = self.config) === null || _a === void 0 ? void 0 : _a.viewType) === 'WEBINAR' && self.webinarStageStatus !== 'ON_STAGE';
    // NOTE(ishita1805): checking hiddenParticipant for v2 meetings.
    const isRecorder = (_b = self.permissions) === null || _b === void 0 ? void 0 : _b.isRecorder;
    this.hideSelf = isWebinarHiddenParticipant || isRecorder || self.permissions.hiddenParticipant;
    this.participants = this.filterParticipants([
      ...participants.active.toArray().filter((p) => p.id !== self.id),
      ...(participants.viewMode === 'ACTIVE_GRID' && !self.isPinned && !this.hideSelf
        ? [self]
        : []),
    ]);
    this.pinnedParticipants = [
      ...participants.pinned.toArray().filter((p) => p.id !== self.id),
      ...(self.isPinned && !this.hideSelf ? [self] : []),
    ];
    this.screenShareParticipants = participants.joined
      .toArray()
      .filter((participant) => participant.screenShareEnabled);
    if (self.screenShareEnabled) {
      this.screenShareParticipants = this.screenShareParticipants.concat([self]);
    }
    this.updateWebinarStage();
  }
  updateWebinarStage() {
    if (this.meeting && this.meeting.meta.viewType === 'WEBINAR') {
      this.showWebinarStage =
        this.participants.length === 0 && this.pinnedParticipants.length === 0;
    }
    else {
      this.showWebinarStage = false;
    }
  }
  updateLiveStreamStage() {
    this.showLiveStreamPlayer = (0,_livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c;
    if (oldMeeting !== null)
      this.disconnectMeeting(oldMeeting);
    if (meeting != null) {
      const { self, participants, plugins, meta, stage } = meeting;
      // Initialize values
      const { config, permissions } = self;
      const isWebinarHiddenParticipant = (config === null || config === void 0 ? void 0 : config.viewType) === 'WEBINAR' && this.meeting.self.webinarStageStatus !== 'ON_STAGE';
      const isRecorder = permissions === null || permissions === void 0 ? void 0 : permissions.isRecorder;
      this.hideSelf = isWebinarHiddenParticipant || isRecorder || permissions.hiddenParticipant;
      this.participants = this.filterParticipants([
        ...participants.active.toArray(),
        ...(!self.isPinned && !this.hideSelf ? [self] : []),
      ]);
      this.pinnedParticipants = [
        ...participants.pinned.toArray(),
        ...(self.isPinned && !this.hideSelf ? [self] : []),
      ];
      this.screenShareParticipants = participants.joined
        .toArray()
        .filter((participant) => participant.screenShareEnabled);
      this.plugins = (plugins === null || plugins === void 0 ? void 0 : plugins.active.toArray()) || [];
      if ((config === null || config === void 0 ? void 0 : config.viewType) === 'WEBINAR') {
        this.canCurrentPeerHost = permissions.acceptPresentRequests || permissions.canPresent;
        this.updateWebinarStage();
      }
      // Check if PiP is supported and enabled
      this.pipSupported = _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.isSupported() && ((_a = meeting.self.config) === null || _a === void 0 ? void 0 : _a.pipMode);
      if (this.pipSupported) {
        const onReady = () => { };
        const onStop = () => {
          this.stateUpdate.emit({ activePipMode: false });
        };
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.create(onReady, onStop, this.eventCallback);
        this.enablePipMediaControls(meeting);
        (_b = meeting.stage) === null || _b === void 0 ? void 0 : _b.on('stageStatusUpdate', this.handlePipMediaControls);
        meeting.self.on('stageJoined', this.enablePipMediaControls);
        meeting.self.on('stageLeft', this.disablePipMediaControls);
      }
      const isEnabled = document.pictureInPictureElement !== null;
      const localStates = this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__.s;
      // correct PiP state
      if (_pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__.s.isSupported() && localStates.activePipMode !== isEnabled) {
        this.stateUpdate.emit({ activePipMode: isEnabled });
      }
      // Add all listeners
      participants.active.addListener('participantJoined', this.onParticipantJoined);
      participants.active.addListener('participantLeft', this.onParticipantLeft);
      participants.joined.addListener('screenShareUpdate', this.onScreenShareUpdate);
      participants.joined.addListener('peerStartedPresenting', this.onPresentationStart);
      participants.joined.addListener('peerStoppedPresenting', this.onPresentationEnd);
      self.addListener('screenShareUpdate', this.onSelfScreenShareUpdate);
      plugins === null || plugins === void 0 ? void 0 : plugins.all.addListener('stateUpdate', this.onPluginStateUpdate);
      participants.pinned.addListener('participantJoined', this.onParticipantPinned);
      participants.pinned.addListener('participantLeft', this.onParticipantUnpinned);
      self.addListener('pinned', this.onParticipantPinned);
      self.addListener('videoUpdate', this.onSelfVideoUpdateListener);
      self.addListener('audioUpdate', this.onSelfAudioUpdateListener);
      self.addListener('unpinned', this.onParticipantUnpinned);
      self.addListener('stageJoined', this.selfStageJoinListener);
      self.addListener('stageLeft', this.selfStageLeaveListener);
      self.addListener('removedFromStage', this.selfStageLeaveListener);
      meta.addListener('disconnected', this.meetingDisconnectedListener);
      meta.addListener('connected', this.meetingConnectedListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.updateLiveStreamStage.bind(this));
      participants.addListener('viewModeChanged', this.onViewModeChanged);
      if ((_c = meeting.stage) === null || _c === void 0 ? void 0 : _c.status) {
        this.updateLiveStreamStage();
      }
    }
  }
  addScreenShare(participant) {
    if (!this.screenShareParticipants.some((p) => p.id === participant.id)) {
      this.screenShareParticipants = [...this.screenShareParticipants, participant];
    }
  }
  removeScreenShare(participant) {
    this.screenShareParticipants = this.screenShareParticipants.filter((p) => p.id !== participant.id);
  }
  removePinned(participant) {
    this.pinnedParticipants = this.pinnedParticipants.filter((p) => p.id !== participant.id);
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      states: this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_5__.s,
      config: this.config,
      iconPack: this.iconPack,
      t: this.t,
    };
    if (!this.connected && this.hideSelf) {
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "webinar-stage" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "center" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, this.t('stage.reconnecting')))));
    }
    if (this.showWebinarStage) {
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "webinar-stage" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "center" }, this.canCurrentPeerHost && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, this.t('stage.empty_host')), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('stage.empty_host_summary')))), !this.canCurrentPeerHost && (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, this.t('stage.empty_viewer'))))));
    }
    if (this.showLiveStreamPlayer) {
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-livestream-player", { meeting: this.meeting, size: this.size })));
    }
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_eecc1518_js__WEBPACK_IMPORTED_MODULE_4__.R, { element: "dyte-grid", defaults: defaults, childProps: {
        participants: this.participants,
        screenShareParticipants: this.screenShareParticipants,
        plugins: this.plugins,
        pinnedParticipants: this.pinnedParticipants,
        aspectRatio: this.aspectRatio,
        gap: this.gap,
        layout: this.layout,
        gridSize: this.gridSize,
      }, onlyChildren: true })));
  }
  get host() { return (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "screenShareParticipants": ["screenShareParticipantsChanged"],
    "plugins": ["pluginsChanged"],
    "pinnedParticipants": ["pinnedParticipantsChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteGrid.style = dyteGridCss;




/***/ }),

/***/ 26449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ defaultGridSize),
/* harmony export */   "u": () => (/* binding */ useGrid)
/* harmony export */ });
function useGrid({ dimensions, count, aspectRatio, gap }) {
  const { width, height, rows, cols } = useGridItemDimensions({
    dimensions,
    count,
    aspectRatio,
    gap,
  });
  const getPosition = useGridPositioning({
    parentDimensions: dimensions,
    dimensions: { width, height },
    rows,
    cols,
    count,
    gap,
  });
  return { width, height, getPosition };
}
function useGridItemDimensions({ count, dimensions, aspectRatio, gap, }) {
  let { width: W, height: H } = dimensions;
  if (W === 0 || H === 0)
    return { width: 0, height: 0, rows: 1, cols: 1 };
  W -= gap * 2;
  H -= gap * 2;
  const s = gap, N = count;
  const r = getAspectRatio(aspectRatio);
  let w = 0, h = 0;
  let a = 1, b = 1;
  const widths = [];
  for (let n = 1; n <= N; n++) {
    widths.push((W - s * (n - 1)) / n);
    widths.push((H - s * (n - 1)) / (n * r));
  }
  // sort in descending order, largest first
  widths.sort((a, b) => b - a);
  for (const width of widths) {
    w = width;
    h = w * r;
    a = Math.floor((W + s) / (w + s));
    b = Math.floor((H + s) / (h + s));
    if (a * b >= N) {
      // recalculate rows, as row calculated above can be inaccurate
      b = Math.ceil(N / a);
      break;
    }
  }
  return { width: w, height: h, rows: b, cols: a };
}
function useGridPositioning({ parentDimensions, dimensions, rows, cols, count, gap, }) {
  const { width: W, height: H } = parentDimensions;
  const { width: w, height: h } = dimensions;
  const firstTop = (H - (h * rows + (rows - 1) * gap)) / 2;
  let firstLeft = (W - (w * cols + (cols - 1) * gap)) / 2;
  const topAdd = h + gap;
  const leftAdd = w + gap;
  let col = 0, row = 0;
  const incompleteRowCols = count % cols;
  function getPosition(index) {
    const remaining = count - index;
    if (remaining === incompleteRowCols) {
      // in last row with incomplete columns, recalculate firstLeft to make it centered
      firstLeft = (W - (w * remaining + (remaining - 1) * gap)) / 2;
    }
    const top = firstTop + row * topAdd;
    const left = firstLeft + col * leftAdd;
    col++;
    if ((index + 1) % cols === 0) {
      // if a row has been traversed completely, increment row, reset col
      row++;
      col = 0;
    }
    return { top, left };
  }
  return getPosition;
}
/**
 * Parses the Aspect Ratio value
 * @param ratio The aspect ratio in the format of `16:9` where `width:height`
 * @returns The parsed value of aspect ratio
 */
const getAspectRatio = (ratio) => {
  const [width, height] = ratio.split(':');
  return Number.parseInt(height) / Number.parseInt(width);
};
const defaultGridSize = {
  spotlight: 'sm',
  mixed: 'sm',
};




/***/ }),

/***/ 24228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {};
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, { id: id, style: styles },
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
};




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