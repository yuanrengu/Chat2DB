"use strict";
exports.id = 1001;
exports.ids = [1001];
exports.modules = {

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_pip_toggle": () => (/* binding */ DytePipToggle)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36881);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11810);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21237);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86466);








const dytePipToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}";

const DytePipToggle = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.size = undefined;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.pipEnabled = false;
    this.pipSupported = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() { }
  statesChanged(s) {
    const states = s || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_6__.s;
    if ((states === null || states === void 0 ? void 0 : states.activePipMode) != null) {
      this.pipEnabled = states.activePipMode;
    }
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting === null)
      return;
    // Check if PiP is supported and enabled
    this.pipSupported = _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.isSupported() && ((_a = meeting.self.config) === null || _a === void 0 ? void 0 : _a.pipMode);
    const localState = this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_6__.s;
    this.pipEnabled = localState.activePipMode;
  }
  togglePip() {
    const localState = this.states || _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_6__.s;
    const { activePipMode } = localState;
    // Not active, activate
    if (activePipMode !== true) {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.updateMediaSession(_pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.P.CAMERA, this.meeting.self.videoEnabled);
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.updateMediaSession(_pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.P.MIC, this.meeting.self.audioEnabled);
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.enable();
      this.stateUpdate.emit({ activePipMode: true });
    }
    else {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_5__.s.disable();
      this.stateUpdate.emit({ activePipMode: false });
    }
    this.stateUpdate.emit({ activeMoreMenu: false });
    _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_6__.s.activeMoreMenu = false;
  }
  render() {
    if (!this.pipSupported)
      return;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `Picture-in-Picture mode` }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: () => this.togglePip(), icon: this.pipEnabled ? this.iconPack.pip_on : this.iconPack.pip_off, label: this.pipEnabled ? this.t('pip_off') : this.t('pip_on'), variant: this.variant })));
  }
  static get watchers() { return {
    "states": ["statesChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DytePipToggle.style = dytePipToggleCss;




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