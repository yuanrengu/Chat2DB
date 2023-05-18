"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 70573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_toggle: () => (/* binding */ DyteChatToggle)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51306);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86466);
/* harmony import */ var _flags_fc6b98fd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77347);
/* harmony import */ var _sidebar_f6c4a327_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43114);
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50528);








const dyteChatToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}.unread-count-dot{position:absolute;right:var(--dyte-space-3, 12px);z-index:10;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));border-radius:50%;display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}";

const DyteChatToggle = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onChatUpdate = ({ action, message }) => {
      var _a;
      if (this.chatActive)
        return;
      if (action === 'add' && message.userId !== ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId)) {
        this.hasNewMessages = true;
        this.unreadMessageCount += 1;
      }
    };
    this.toggleChat = () => {
      const states = this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s;
      this.chatActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'chat');
      if (this.chatActive) {
        this.unreadMessageCount = 0;
        this.hasNewMessages = false;
      }
      _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.chatActive;
      _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
      _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.chatActive ? 'chat' : 'none';
      this.stateUpdate.emit({
        activeSidebar: this.chatActive,
        sidebar: this.chatActive ? 'chat' : 'none',
        activeMoreMenu: false,
      });
    };
    this.updateCanView = () => {
      this.canViewChat = (0,_sidebar_f6c4a327_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.meeting);
    };
    this.unreadMessageCount = 0;
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.chatActive = false;
    this.canViewChat = false;
    this.hasNewMessages = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    (0,_store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.removeListener('chatUpdate', this.onChatUpdate);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageStatusUpdate', this.updateCanView);
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting == null)
      return;
    if ((0,_flags_fc6b98fd_js__WEBPACK_IMPORTED_MODULE_4__.u)(meeting)) {
      (_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.getMessages(new Date().getTime(), 1, true).then((res) => {
        var _a;
        if ((_a = res === null || res === void 0 ? void 0 : res.messages) === null || _a === void 0 ? void 0 : _a.length)
          this.hasNewMessages = true;
      });
    }
    this.unreadMessageCount = ((_b = meeting.chat) === null || _b === void 0 ? void 0 : _b.messages.length) || 0;
    (_c = meeting.chat) === null || _c === void 0 ? void 0 : _c.addListener('chatUpdate', this.onChatUpdate);
    this.canViewChat = (0,_sidebar_f6c4a327_js__WEBPACK_IMPORTED_MODULE_5__.c)(meeting);
    (_d = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _d === void 0 ? void 0 : _d.on('stageStatusUpdate', this.updateCanView);
  }
  statesChanged(s) {
    const states = s || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.chatActive = states.activeSidebar === true && states.sidebar === 'chat';
    }
  }
  render() {
    if (!this.canViewChat)
      return;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t('chat') }, (0,_flags_fc6b98fd_js__WEBPACK_IMPORTED_MODULE_4__.u)(this.meeting)
      ? this.hasNewMessages && (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count-dot", part: "unread-count-dot" })
      : this.unreadMessageCount !== 0 &&
        !this.chatActive && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadMessageCount <= 100 ? this.unreadMessageCount : '99+'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.chatActive }, onClick: this.toggleChat, icon: this.iconPack.chat, label: this.t('chat'), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteChatToggle.style = dyteChatToggleCss;




/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FlagsmithFeatureFlags),
/* harmony export */   i: () => (/* binding */ isBreakoutRoomsEnabled),
/* harmony export */   u: () => (/* binding */ usePaginatedChat)
/* harmony export */ });
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50528);


const FlagsmithFeatureFlags = {
  PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE: 'play_participant_tile_video_on_pause',
  DISABLE_EMOJI_PICKER: 'disable_emoji_picker',
  FEAT_PAGINATED_CHAT: 'feat_paginated_chat',
  LOG_PLAYING_FAILURES: 'log_playing_failures',
};
const isBreakoutRoomsEnabled = (meeting) => meeting.connectedMeetings.supportsConnectedMeetings;
const usePaginatedChat = (meeting) => { var _a; return (0,_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) || ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.__internals__) === null || _a === void 0 ? void 0 : _a.features.hasFeature('feat_paginated_chat')); };




/***/ }),

/***/ 50528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ PlayerState),
/* harmony export */   a: () => (/* binding */ isLiveStreamHost),
/* harmony export */   b: () => (/* binding */ canRequestToJoinStage),
/* harmony export */   c: () => (/* binding */ canJoinStage),
/* harmony export */   d: () => (/* binding */ PlayerEventType),
/* harmony export */   e: () => (/* binding */ awsIvsPlayerEventsToIgnore),
/* harmony export */   f: () => (/* binding */ isIvsPlayerCallStatsEvent),
/* harmony export */   i: () => (/* binding */ isLiveStreamViewer),
/* harmony export */   s: () => (/* binding */ showLivestream)
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

/***/ 43114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ canViewParticipants),
/* harmony export */   b: () => (/* binding */ canViewPlugins),
/* harmony export */   c: () => (/* binding */ canViewChat),
/* harmony export */   d: () => (/* binding */ canViewPolls)
/* harmony export */ });
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50528);


const canViewChat = (meeting) => {
  if (meeting && !meeting.chat)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.chat)
    return false;
  const { chatPublic, chatPrivate } = meeting.self.permissions;
  return (chatPublic.canSend ||
    chatPublic.text ||
    chatPublic.files ||
    chatPrivate.canSend ||
    chatPrivate.canReceive ||
    chatPrivate.files ||
    chatPrivate.text);
};
const canViewPolls = (meeting) => {
  if (meeting && !meeting.polls)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.polls)
    return false;
  const { polls } = meeting.self.permissions;
  return polls.canCreate || polls.canView || polls.canVote;
};
const canViewParticipants = (meeting) => {
  var _a, _b;
  if ((0,_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) && !((_a = meeting.self.permissions) === null || _a === void 0 ? void 0 : _a.acceptPresentRequests))
    return false;
  if (meeting && !meeting.participants)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM') {
    return meeting.self.permissions.acceptPresentRequests || ((_b = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _b === void 0 ? void 0 : _b.status) === 'ON_STAGE';
  }
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.participants)
    return false;
  return true;
};
const canViewPlugins = (meeting) => {
  if ((0,_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__.i)(meeting))
    return false;
  if (meeting && !meeting.plugins)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM')
    return meeting.stage.status === 'ON_STAGE';
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.plugins)
    return false;
  const { plugins } = meeting.self.permissions;
  return plugins.canClose || plugins.canStart;
};




/***/ }),

/***/ 86466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
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