"use strict";
exports.id = 8557;
exports.ids = [8557];
exports.modules = {

/***/ 78557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_leave_meeting": () => (/* binding */ DyteLeaveMeeting)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11204);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86466);





const dyteLeaveMeetingCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif)}.leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}";

const DyteLeaveMeeting = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.keyPressListener = (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    };
    this.close = () => {
      this.stateUpdate.emit({ activeLeaveConfirmation: false });
      _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.activeLeaveConfirmation = false;
    };
    this.handleLeave = () => {
      var _a;
      if (this.meeting.connectedMeetings.isActive &&
        this.meeting.connectedMeetings.parentMeeting.id !== this.meeting.meta.roomName &&
        this.meeting.self.permissions.connectedMeetings.canSwitchToParentMeeting) {
        this.meeting.connectedMeetings.moveParticipants(this.meeting.meta.roomName, this.meeting.connectedMeetings.parentMeeting.id, [this.meeting.self.clientSpecificId]);
      }
      else {
        (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom();
      }
      this.close();
    };
    this.handleEndMeeting = () => {
      var _a;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.kickAll();
      this.close();
    };
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.canEndMeeting = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    document.addEventListener('keydown', this.keyPressListener);
  }
  componentDidLoad() { }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.keyPressListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.canEndMeeting =
        meeting.self.permissions.kickParticipant &&
          this.meeting.connectedMeetings.isActive === false;
    }
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-modal" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { class: "title" }, this.t('leave'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, this.t('leave_confirmation')), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-meeting" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", title: this.t('Close'), onClick: this.close, iconPack: this.iconPack, t: this.t }, this.t('cancel')), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", title: this.t('leave'), onClick: this.handleLeave, iconPack: this.iconPack, t: this.t }, this.t('leave'))), this.canEndMeeting && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "end-meeting" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", kind: "wide", onClick: this.handleEndMeeting, iconPack: this.iconPack, t: this.t }, this.t('end_meeting_for_all'))))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLeaveMeeting.style = dyteLeaveMeetingCss;




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