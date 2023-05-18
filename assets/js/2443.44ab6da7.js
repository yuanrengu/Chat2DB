"use strict";
exports.id = 2443;
exports.ids = [2443];
exports.modules = {

/***/ 72729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ differenceInMinutes),
/* harmony export */   e: () => (/* binding */ elapsedDuration),
/* harmony export */   f: () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 72443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_file_message: () => (/* binding */ DyteFileMessage),
/* harmony export */   dyte_image_message: () => (/* binding */ DyteImageMessage),
/* harmony export */   dyte_text_message: () => (/* binding */ DyteTextMessage)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72729);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22906);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _file_a11c6818_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96396);
/* harmony import */ var _index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51306);
/* harmony import */ var _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86466);








const ChatHead = ({ name, time, now }) => {
  return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" },
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__.s)((0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__.f)(name), 20)),
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_5__.f)(time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_5__.e)(time, now))));
};

const DyteFileMessage = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    const link = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.message.link);
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, this.message.name), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data-split" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ext" }, (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.message.name)), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "divider" }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "size" }, (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.message.size)))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_6__.d)(link, { name: this.message.name, fallbackName: 'file' }), part: "button" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))));
  }
};

const dyteImageMessageCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";

const DyteImageMessage = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.status = 'loading';
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { image: true, loaded: this.status === 'loaded' } }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.message.link), onLoad: () => {
        this.status = 'loaded';
      }, onError: () => {
        this.status = 'errored';
      }, onClick: () => {
        if (this.status === 'loaded') {
          this.stateUpdate.emit({ image: this.message });
          _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.image = this.message;
        }
      } }), this.status === 'loading' && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-spinner", title: this.t('Loading image'), "aria-label": this.t('Loading image') }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t }))), this.status === 'errored' && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-errored", title: this.t('Image not found'), "aria-label": this.t('Image not found') }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image_off, iconPack: this.iconPack, t: this.t }))), this.status === 'loaded' && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => {
        this.stateUpdate.emit({ image: this.message });
        _store_2454ac74_js__WEBPACK_IMPORTED_MODULE_3__.s.image = this.message;
      }, iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.full_screen_maximize })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_6__.d)(this.message.link, { fallbackName: 'image' }), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))))));
  }
};
DyteImageMessage.style = dyteImageMessageCss;

const URLRegEx = /(https?:\/\/[^\s]+)/;
const formatMessage = (text) => {
  const words = text.split(' ');
  const lastIndex = words.length - 1;
  return words.map((word, index) => {
    if (URLRegEx.test(word)) {
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null,
        (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: word, target: "_blank", rel: "noopener noreferrer" }, word),
        index !== lastIndex ? ' ' : ''));
    }
    return `${word}${index !== lastIndex ? ' ' : ''}`;
  });
};
const TextMessageView = ({ message }) => {
  const lines = message.split('\n');
  return lines.map((line) => (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, formatMessage(line)));
};

const DyteTextMessage = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, emoji: (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.message.message) } }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(TextMessageView, { message: this.message.message })))));
  }
};




/***/ }),

/***/ 96396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getFileSize),
/* harmony export */   d: () => (/* binding */ downloadFile),
/* harmony export */   g: () => (/* binding */ getExtension)
/* harmony export */ });
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22906);


const getExtension = (name) => {
  // split query and hash from url, then get the filename
  return name.split(/[#?]/)[0].split('.').pop().trim();
};
/**
 * Formats size in bytes to human readable formats
 * @param size Size in bytes
 * @returns Human readable file size
 */
const getFileSize = (size) => {
  if (!size)
    return '0 B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / 1024 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};
/**
 * Extracts the file name from a URL.
 * @param link The URL of the file
 * @param fallback Fallback filename
 * @returns File name
 */
const getFileName = (link, fallback = 'file') => {
  try {
    const url = new URL(link);
    const name = url.pathname.split('/').pop();
    return name !== '/' ? name : fallback;
  }
  catch (_) {
    return fallback;
  }
};
/**
 * Downloads file from a given URL without leaving the current page
 * @param link URL of the file to download
 * @param options Optional Options for file download - `name` and `fallbackName`
 */
const downloadFile = async (link, options) => {
  link = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_0__.a)(link);
  let name = options === null || options === void 0 ? void 0 : options.name;
  const res = await fetch(link);
  if (!res.ok) {
    // if unable to download file (CORS or some other error)
    // open the URL in new tab
    window.open(link, '_blank');
    return;
  }
  const blobURL = URL.createObjectURL(await res.blob());
  // Creates an anchor tag and simulates download
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = name !== null && name !== void 0 ? name : getFileName(link, options === null || options === void 0 ? void 0 : options.fallbackName);
  a.click();
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




/***/ }),

/***/ 22906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g, '');
  const words = cleanedName.trim().split(/\s+/).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;