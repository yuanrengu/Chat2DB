"use strict";
exports.id = 1976;
exports.ids = [1976];
exports.modules = {

/***/ 21976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_webinar_stage_toggle": () => (/* binding */ DyteWebinarStageToggle)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11810);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86466);





const dyteWebinarStageToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}";

const DyteWebinarStageToggle = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.requestToJoinAcceptedListener = () => {
      this.stageStatus = 'ACCEPTED';
    };
    this.requestToJoinRejectedListener = () => {
      this.stageStatus = 'DENIED';
    };
    this.stageJoinedListener = () => {
      this.stageStatus = 'ACCEPTED';
    };
    this.removeFromStageListener = () => {
      this.stageStatus = 'NOT_REQUESTED';
    };
    this.selfStageLeftListener = () => {
      this.stageStatus = 'NOT_REQUESTED';
    };
    this.activeJoinStageChanged = (activeJoinStage) => {
      if (!activeJoinStage)
        this.stageStatus = 'NOT_REQUESTED';
    };
    this.stageCallback = async () => {
      var _a;
      const self = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self;
      if (self == null || (!this.requestProduce && !this.canPresent)) {
        return;
      }
      if (this.stageStatus === 'ACCEPTED') {
        await self.leaveStage();
        this.stageStatus = 'NOT_REQUESTED';
        return;
      }
      if (this.canPresent) {
        await self.joinStage();
        this.stageStatus = 'ACCEPTED';
      }
      else {
        await self.requestToJoinStage();
        this.stageStatus = 'PENDING';
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.stageStatus = 'NOT_REQUESTED';
    this.canPresent = false;
    this.requestProduce = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.meeting.self.addListener('joinStageRequestAccepted', this.requestToJoinAcceptedListener);
    this.meeting.self.addListener('joinStageRequestRejected', this.requestToJoinRejectedListener);
    this.meeting.self.addListener('stageJoined', this.stageJoinedListener);
    this.meeting.self.addListener('removedFromStage', this.removeFromStageListener);
    this.meeting.self.addListener('stageLeft', this.selfStageLeftListener);
    (0,_store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.o)('activeJoinStage', (activeJoinStage) => this.activeJoinStageChanged(activeJoinStage));
  }
  disconnectedCallback() {
    this.meeting.self.removeListener('joinStageRequestAccepted', this.requestToJoinAcceptedListener);
    this.meeting.self.removeListener('joinStageRequestRejected', this.requestToJoinRejectedListener);
    this.meeting.self.removeListener('removedFromStage', this.removeFromStageListener);
    this.meeting.self.removeListener('stageJoined', this.stageJoinedListener);
    this.meeting.self.removeListener('stageLeft', this.selfStageLeftListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.requestProduce = meeting.self.permissions.requestProduce;
      this.canPresent = meeting.self.permissions.canPresent;
      if (this.canPresent || meeting.self.webinarStageStatus === 'ON_STAGE') {
        this.stageStatus = 'ACCEPTED';
      }
    }
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let disabled = false;
    if (this.stageStatus === 'PENDING') {
      label = this.t('stage_request.approval_pending');
      tooltipLabel = this.t('stage_request.pending_tip');
      icon = this.iconPack.join_stage;
      classList['red-icon'] = false;
      disabled = true;
    }
    else if (this.stageStatus === 'ACCEPTED') {
      label = this.t('stage_request.leave_stage');
      tooltipLabel = this.t('stage_request.leave_tip');
      icon = this.iconPack.leave_stage;
      classList['red-icon'] = false;
      disabled = false;
    }
    else if (this.stageStatus === 'DENIED') {
      label = this.t('stage_request.denied');
      tooltipLabel = this.t('stage_request.denied_tip');
      icon = this.iconPack.join_stage;
      classList['red-icon'] = false;
      disabled = true;
    }
    else {
      label = this.t('stage_request.request');
      if (this.canPresent) {
        tooltipLabel = this.t('stage_request.request');
      }
      else {
        tooltipLabel = this.t('stage_request.request_tip');
      }
      icon = this.iconPack.join_stage;
      disabled = false;
    }
    return { tooltipLabel, label, icon, classList, disabled };
  }
  render() {
    if (!this.requestProduce && !this.canPresent) {
      return null;
    }
    if (this.meeting.self.config.viewType !== 'WEBINAR') {
      return null;
    }
    const { tooltipLabel, label, icon, classList, disabled } = this.getState();
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: tooltipLabel, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: label, icon: icon, class: classList, onClick: this.stageCallback, disabled: disabled, showWarning: false }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteWebinarStageToggle.style = dyteWebinarStageToggleCss;




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