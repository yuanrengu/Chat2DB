"use strict";
exports.id = 7565;
exports.ids = [7565];
exports.modules = {

/***/ 77565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_chat_message": () => (/* binding */ DyteChatMessage),
/* harmony export */   "dyte_paginated_list": () => (/* binding */ DytePaginatedList)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _index_123dfc47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88581);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82321);
/* harmony import */ var _isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49797);







const dyteChatMessageCss = ":host{display:block}.file-picker{display:none}.head{display:flex;align-items:center}.head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";

const DyteChatMessage = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.renderMessage = () => {
      if (this.messageItem.type !== 'chat')
        return;
      const message = this.messageItem.message;
      switch (message.type) {
        case 'text':
          return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: message.id }, this.isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message", { message: message, now: this.now, isContinued: this.isContinued, "data-timestamp": message.time.getTime(), ref: this.observeMessage, iconPack: this.iconPack, t: this.t })));
        case 'image':
          return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: message.id }, this.isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message", { message: message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, "data-timestamp": message.time.getTime(), ref: this.observeMessage, t: this.t })));
        case 'file':
          return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: message.id }, this.isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message", { message: message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, t: this.t, "data-timestamp": message.time.getTime(), ref: this.observeMessage })));
      }
    };
    this.messageItem = undefined;
    this.isContinued = undefined;
    this.isUnread = undefined;
    this.observeMessage = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_123dfc47_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.now = new Date();
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message" }, this.renderMessage())));
  }
};
DyteChatMessage.style = dyteChatMessageCss;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.a)(value) && (0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.b)(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.i)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.i)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.r.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_4__.i)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

const dytePaginatedListCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;flex:1}.container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll;}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.show-new-messages-ctr{pointer-events:none;position:absolute;bottom:var(--dyte-space-2, 8px);right:var(--dyte-space-4, 16px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";

const DytePaginatedList = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.currentTime = () => {
      return new Date().getTime();
    };
    this.observe = (el) => {
      if (!el)
        return;
      this.intersectionObserver.observe(el);
    };
    this.pageSize = undefined;
    this.pagesAllowed = undefined;
    this.fetchData = undefined;
    this.createNodes = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_123dfc47_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.rerenderBoolean = false;
    this.shouldRenderNewNodes = true;
    this.hasNewNodesToRender = false;
    this.pagesToRender = [[]];
  }
  /**
   * On a new node created
   */
  async onNewNode(node) {
    if (!this.shouldRenderNewNodes) {
      this.hasNewNodesToRender = true;
      return;
    }
    this.addNodeToRender(node, false);
    this.rerender();
  }
  connectedCallback() {
    this.rerender = debounce(this.rerender.bind(this), 50, { maxWait: 200 });
    this.loadPage(this.currentTime(), this.pageSize, true, () => (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_5__.s)(this.$paginatedList, false));
    this.intersectionObserver = new IntersectionObserver((entries) => {
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.target.id === 'bottom-scroll') {
            if (entry.isIntersecting)
              this.loadBottom();
            else
              this.shouldRenderNewNodes = false;
          }
          if (entry.target.id === 'top-scroll' && entry.isIntersecting) {
            this.loadTop();
          }
        }
      });
    });
  }
  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }
  componentDidLoad() {
    /**
     * Adding observes here so that on the first render we scroll down
     * and shouldRenderNewNodes remains true
     */
    this.observe(this.$topRef);
    this.observe(this.$bottomRef);
  }
  componentDidRender() {
    if (this.shouldRenderNewNodes)
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_5__.s)(this.$paginatedList);
  }
  loadTop() {
    var _a, _b, _c;
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0)
      return;
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize)
      return;
    /**
     * TODO: Make this more flexible currently this only works with chat
     */
    const oldestVNode = this.pagesToRender[0][0];
    const oldestTimestamp = (_c = (_b = (_a = oldestVNode.$attrs$) === null || _a === void 0 ? void 0 : _a.messageItem) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.timeMs;
    const onPageRendered = () => { var _a; return (_a = oldestVNode.$elm$) === null || _a === void 0 ? void 0 : _a.scrollIntoView(); };
    this.loadPage(oldestTimestamp - 1, this.pageSize, true, onPageRendered);
  }
  loadBottom() {
    var _a, _b, _c;
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0) {
      this.shouldRenderNewNodes = true;
      return;
    }
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize) {
      this.shouldRenderNewNodes = true;
      return;
    }
    const newestVNode = this.pagesToRender.at(-1).at(-1);
    const newestTimestamp = (_c = (_b = (_a = newestVNode.$attrs$) === null || _a === void 0 ? void 0 : _a.messageItem) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.timeMs;
    const onPageRendered = () => { var _a; return (_a = newestVNode.$elm$) === null || _a === void 0 ? void 0 : _a.scrollIntoView(); };
    this.loadPage(newestTimestamp + 1, this.pageSize, false, onPageRendered);
  }
  addNodeToRender(node, addToStart) {
    if (addToStart) {
      const firstPage = this.pagesToRender[0];
      if (firstPage && (firstPage === null || firstPage === void 0 ? void 0 : firstPage.length) < this.pageSize) {
        /**
         * If first page is not full then just add to that page
         */
        firstPage.unshift(node);
      }
      else {
        /**
         * If first page is full then add a new page to the start
         */
        const newPage = [node];
        this.pagesToRender.unshift(newPage);
        this.removeLastPageIfNeeded(false);
      }
    }
    else {
      const [lastPage] = this.pagesToRender.slice(-1);
      if (lastPage && (lastPage === null || lastPage === void 0 ? void 0 : lastPage.length) < this.pageSize) {
        /**
         * If last page is not full then just add it
         */
        lastPage.push(node);
      }
      else {
        /**
         * If last page is full add a new page with just
         * this node
         */
        const newPage = [node];
        this.pagesToRender.push(newPage);
        this.removeLastPageIfNeeded(true);
      }
    }
  }
  /**
   * @param start
   * @param end
   * @param reversed Defines whether to add the page at the beginning or the end
   * @param onPageLoaded Callback for when all new nodes are rendered
   */
  async loadPage(timestamp, size, reversed, onPageRendered) {
    const data = await this.fetchData(timestamp, size, reversed);
    if (!(data === null || data === void 0 ? void 0 : data.length)) {
      /**
       * While scrolling down if there were no new items found
       * then start rendering new nodes;
       */
      if (!reversed) {
        this.hasNewNodesToRender = false;
        this.shouldRenderNewNodes = true;
      }
      return;
    }
    const page = this.createNodes(data);
    const lastNodeToBeRendered = page[page.length - 1];
    let lastNodeToBeRenderedProxy = new Proxy(lastNodeToBeRendered, {
      set(obj, prop, value) {
        /**
         * Whenever the last node has the 'elm' property added to it
         * we can assume it has been rendered
         */
        if (prop === '$elm$' && value && !obj.$elm$)
          onPageRendered();
        obj[prop] = value;
        return true;
      },
    });
    page[page.length - 1] = lastNodeToBeRenderedProxy;
    page.forEach((node) => this.addNodeToRender(node, reversed));
    this.rerender();
  }
  rerender() {
    this.rerenderBoolean = !this.rerenderBoolean;
  }
  removeLastPageIfNeeded(removeFromStart) {
    if (this.pagesToRender.length > this.pagesAllowed) {
      if (removeFromStart)
        this.pagesToRender.shift();
      else
        this.pagesToRender.pop();
    }
  }
  onDownArrowClicked() {
    /**
     * Load the freshest pages
     */
    this.loadBottom();
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scrollbar container", part: "container", ref: (el) => (this.$paginatedList = el) }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "show-new-messages-ctr" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: {
        'show-new-messages': true,
        active: !this.shouldRenderNewNodes,
      }, kind: "icon", part: "show-new-messages", onClick: () => this.onDownArrowClicked(), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t }))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "top-scroll", ref: (el) => (this.$topRef = el) }), this.pagesToRender.map((page) => page.map((el) => el)), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "bottom-scroll", ref: (el) => (this.$bottomRef = el) }))));
  }
};
DytePaginatedList.style = dytePaginatedListCss;




/***/ }),

/***/ 82321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
};




/***/ })

};
;