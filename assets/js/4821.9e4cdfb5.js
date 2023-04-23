"use strict";
exports.id = 4821;
exports.ids = [4821,1617];
exports.modules = {

/***/ 72729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ differenceInMinutes),
/* harmony export */   "e": () => (/* binding */ elapsedDuration),
/* harmony export */   "f": () => (/* binding */ formatDateTime)
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

/***/ 71617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_chat_composer_ui": () => (/* binding */ DyteChatComposerUi),
/* harmony export */   "dyte_chat_messages_ui": () => (/* binding */ DyteChatMessagesUi),
/* harmony export */   "dyte_chat_messages_ui_paginated": () => (/* binding */ DyteChatMessagesUiPaginated),
/* harmony export */   "dyte_chat_selector_ui": () => (/* binding */ DyteChatSelectorUi)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11204);
/* harmony import */ var _chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62270);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85114);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72729);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82321);









const dyteChatComposerUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;flex-direction:column}.chat-input{z-index:10;box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}textarea{box-sizing:border-box;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea{font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;min-height:80px;font-size:14px}.chat-buttons{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.chat-buttons .left dyte-button{margin-right:var(--dyte-space-1, 4px)}.chat-buttons .left dyte-button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-buttons>div{display:flex;align-items:center}dyte-emoji-picker{z-index:0;border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));-webkit-animation:0.3s slide-up ease;animation:0.3s slide-up ease}@-webkit-keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}@keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}";

const DyteChatComposerUi = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onNewMessage = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteNewMessage", 7);
    this.handleKeyDown = (e) => {
      // slack like typing experience
      if (e.key === 'Enter' && e.shiftKey) {
        const height = this.$textArea.clientHeight;
        if (height < 200) {
          this.$textArea.style.height = this.$textArea.clientHeight + 20 + 'px';
        }
      }
      else if (e.key === 'Enter') {
        e.preventDefault();
        this.handleSendMessage();
      }
      else if (e.key === 'Backspace') {
        if (this.$textArea.value.endsWith('\n')) {
          this.$textArea.style.height = this.$textArea.clientHeight - 20 + 'px';
        }
        else if (this.$textArea.value === '') {
          this.$textArea.style.height = 'auto';
        }
      }
    };
    this.onPaste = (e) => {
      const data = e.clipboardData || e.originalEvent.clipboardData;
      (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.h)(data.items, this.sendFile);
    };
    this.sendFile = (type, file) => {
      if (!this.canSendFiles) {
        return;
      }
      if (type === 'image') {
        this.onNewMessage.emit({ type: 'image', file });
      }
      else {
        this.onNewMessage.emit({ type: 'file', file });
      }
    };
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disableEmojiPicker = false;
    this.emojiPickerActive = false;
  }
  handleSendMessage() {
    if (!this.canSendTextMessage) {
      return;
    }
    const message = this.$textArea.value.trim();
    if (message.length > 0) {
      this.onNewMessage.emit({ type: 'text', message });
      this.$textArea.value = '';
      this.$textArea.style.height = 'auto';
      _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__.g.setItem('dyte-text-message', '');
    }
  }
  uploadFile(type) {
    const input = document.createElement('input');
    input.type = 'file';
    if (type === 'image') {
      input.accept = 'image/*';
    }
    input.onchange = (e) => {
      const { validity, files: [file], } = e.target;
      if (validity.valid) {
        this.sendFile(type, file);
      }
    };
    input.click();
  }
  render() {
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canSendTextMessage && this.emojiPickerActive && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-emoji-picker", { part: "emoji-picker", onDyteEmojiClicked: (e) => {
        this.$textArea.value += e.detail;
        this.$textArea.focus();
      }, t: this.t })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon" }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input" }, this.canSendTextMessage && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { class: "scrollbar", part: "textarea", placeholder: "Message..", ref: (el) => (this.$textArea = el), autoFocus: true, onPaste: this.onPaste, onKeyDown: this.handleKeyDown, onInput: (e) => {
        _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__.g.setItem('dyte-text-message', e.target.value);
      } })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-buttons", part: "chat-buttons" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left", part: "chat-buttons-left" }, this.canSendFiles && [
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('Send a file') }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('file'), title: this.t('Send a file'), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach }))),
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('Send an image') }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('image'), title: this.t('Send an image'), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image }))),
    ], this.canSendTextMessage && !this.disableEmojiPicker && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('Send Emoji') }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: { active: this.emojiPickerActive }, title: this.t('Send Emoji'), iconPack: this.iconPack, t: this.t, onClick: () => {
        this.emojiPickerActive = !this.emojiPickerActive;
      } }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.emoji_multiple }))))), this.canSendTextMessage && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right", part: "chat-buttons-right" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('Send message'), delay: 2000 }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.handleSendMessage(), title: this.t('Send message'), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.send })))))))));
  }
};
DyteChatComposerUi.style = dyteChatComposerUiCss;

const dyteChatMessagesUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column}.chat-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll}.chat-container .spacer{flex:1 1 auto}.chat-container .chat{flex:0 0 auto}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";

const DyteChatMessagesUi = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.observingEl = [];
    this.onScroll = (e) => {
      const target = e.target;
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        const { scrollTop, clientHeight, scrollHeight } = target;
        const fromTop = scrollTop + clientHeight;
        if (fromTop + 10 >= scrollHeight) {
          // at bottom
          this.autoScrollEnabled = true;
          this.showLatestMessageButton = false;
        }
        else {
          // not at bottom
          this.autoScrollEnabled = false;
        }
      });
    };
    this.scrollToBottom = () => {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_6__.s)(this.$chat);
    };
    this.observeMessage = (el) => {
      if (el) {
        this.observingEl.push(el);
      }
      try {
        this.intersectionObserver.observe(el);
      }
      catch (_a) { }
    };
    this.selectedGroup = undefined;
    this.messages = [];
    this.selfUserId = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.now = new Date();
    this.showLatestMessageButton = false;
  }
  connectedCallback() {
    var _a;
    this.lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_5__.c.everyone) !== null && _a !== void 0 ? _a : new Date('0001-01-01T00:00:00Z');
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (!document.hasFocus())
        return;
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const currTimestamp = parseInt(entry.target.getAttribute('data-timestamp'));
            if (currTimestamp > this.lastReadTimestamp.getTime()) {
              // this.lastReadTimestamp = new Date();
              _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_5__.c[this.selectedGroup] = new Date();
            }
          }
        }
      });
    });
    // update current time every minute
    const updateNow = () => {
      this.now = new Date();
      this.timeout = setTimeout(() => {
        if (this.request != null) {
          this.request = requestAnimationFrame(updateNow);
        }
      }, 60 * 1000);
    };
    this.request = requestAnimationFrame(updateNow);
    this.chatChanged(this.messages);
  }
  componentDidLoad() {
    this.$chat.addEventListener('scroll', this.onScroll);
  }
  componentDidRender() {
    if (this.autoScrollEnabled) {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_6__.s)(this.$chat);
    }
    else if (this.autoScrollEnabled == null) {
      // scroll to bottom on first render
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_6__.s)(this.$chat, false);
    }
  }
  chatChanged(messages) {
    if (this.$chat == null)
      return;
    if (this.autoScrollEnabled || this.$chat.clientHeight === this.$chat.scrollHeight)
      return;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].message.time > this.lastReadTimestamp &&
        messages[i].message.userId !== this.selfUserId) {
        // show latest message button when you have new messages
        // and chat container is scrollable and autoscroll is not enabled
        this.showLatestMessageButton = true;
        break;
      }
    }
  }
  selectedBucketChanged() {
    this.autoScrollEnabled = undefined;
    this.observingEl.forEach((el) => {
      this.intersectionObserver.unobserve(el);
    });
    this.observingEl = [];
  }
  disconnectedCallback() {
    this.$chat.removeEventListener('scroll', this.onScroll);
    this.intersectionObserver.disconnect();
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.request);
  }
  render() {
    var _a;
    let prevMessage = null;
    let reachedFirstUnread = false;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container scrollbar", ref: (el) => (this.$chat = el), part: "container" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spacer", part: "spacer" }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat", part: "chat" }, (_a = this.messages) === null || _a === void 0 ? void 0 : _a.map((item) => {
      if (item.type === 'chat') {
        const { message } = item;
        const isSelfMessage = message.userId === this.selfUserId;
        const isUnread = !isSelfMessage &&
          !this.autoScrollEnabled &&
          !reachedFirstUnread &&
          message.time > this.lastReadTimestamp;
        if (isUnread)
          reachedFirstUnread = isUnread;
        const isContinued = !isUnread &&
          message.userId === (prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.userId) &&
          (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_7__.d)(message.time, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.time) < 2;
        prevMessage = message;
        switch (message.type) {
          case 'text':
            return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message", { message: message, now: this.now, isContinued: isContinued, "data-timestamp": message.time.getTime(), ref: this.observeMessage, iconPack: this.iconPack, t: this.t })));
          case 'image':
            return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message", { message: message, now: this.now, isContinued: isContinued, iconPack: this.iconPack, "data-timestamp": message.time.getTime(), ref: this.observeMessage, t: this.t })));
          case 'file':
            return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message", { message: message, now: this.now, isContinued: isContinued, iconPack: this.iconPack, t: this.t, "data-timestamp": message.time.getTime(), ref: this.observeMessage })));
        }
      }
      return null;
    }))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "show-new-messages-ctr" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: {
        'show-new-messages': true,
        active: this.showLatestMessageButton,
      }, kind: "icon", part: "show-new-messages", onClick: this.scrollToBottom, iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "messages": ["chatChanged"],
    "selectedGroup": ["selectedBucketChanged"]
  }; }
};
DyteChatMessagesUi.style = dyteChatMessagesUiCss;

const dyteChatMessagesUiPaginatedCss = ":host{display:flex;flex:1 0 0px}";

const DyteChatMessagesUiPaginated = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pageSize = 25;
    this.getChatMessages = async (timestamp, size, reversed) => {
      const { messages } = await this.meeting.chat.getMessages(timestamp, size, reversed);
      return messages;
    };
    this.createChatNodes = (data) => {
      /**
       * NOTE(callmetarush): When between pages the message's isContinued
       * will fail in current implementation
       */
      return data.map((message) => {
        const isContinued = message.userId === (void 0 );
        return this.createChatNode(message, isContinued);
      });
    };
    this.disconnectMeeting = (meeting) => {
      var _a;
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
    };
    this.createChatNode = (message, isContinued) => {
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-message", { messageItem: { type: 'chat', message }, isContinued: isContinued, isUnread: false, size: this.size, iconPack: this.iconPack, key: message.id }));
    };
    this.chatUpdateListener = (data) => {
      // @ts-ignore
      this.$paginatedListRef.onNewNode(this.createChatNode(data.message, false));
    };
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      (_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.addListener('chatUpdate', this.chatUpdateListener);
    }
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-paginated-list", { ref: (el) => (this.$paginatedListRef = el), pageSize: this.pageSize, pagesAllowed: 3, fetchData: this.getChatMessages, createNodes: this.createChatNodes })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteChatMessagesUiPaginated.style = dyteChatMessagesUiPaginatedCss;

const dyteChatSelectorUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;flex-direction:column}.chat-scope-selector{position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));z-index:10}.chat-scope-selector button{width:100%;border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-4, 16px);display:flex;align-items:center;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px;cursor:pointer;height:var(--dyte-space-12, 48px)}.chat-scope-selector button span{display:flex;align-items:center;justify-content:flex-start}.chat-scope-selector button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-scope-selector .search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-0, 0px)}.chat-scope-selector .search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.chat-scope-selector .search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.chat-scope-selector .search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .participants-container{position:absolute;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));top:var(--dyte-space-12, 48px);-webkit-animation:0.3s slide-down ease;animation:0.3s slide-down ease}@-webkit-keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}@keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}.chat-scope-selector .scope-list{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);list-style-type:none;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);overflow:auto;max-height:375px}.chat-scope-selector .scope-list .scope{position:relative;display:flex;flex-direction:row;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px)}.chat-scope-selector .scope-list .scope:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.chat-scope-selector .scope-list .scope-special{margin-top:var(--dyte-space-4, 16px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat-scope-selector .scope-list .everyone-icon>dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-scope-selector .scope-list .everyone-icon{display:flex;height:100%;width:100%;align-items:center;justify-content:center;margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px}.unread-count.selector{position:unset;margin-left:var(--dyte-space-2, 8px)}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px)}";

const DyteChatSelectorUi = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.groupChanged = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteChatGroupChanged", 7);
    this.onScopeClick = (scope) => {
      this.showParticipantsPanel = false;
      this.groupChanged.emit(scope);
    };
    this.selfUserId = undefined;
    this.selectedGroupId = undefined;
    this.unreadCounts = {};
    this.groups = [];
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.showParticipantsPanel = false;
    this.query = '';
  }
  toggleParticipants() {
    this.showParticipantsPanel = !this.showParticipantsPanel;
  }
  getGroups() {
    return this.groups.filter((participant) => participant.name.toLowerCase().includes(this.query.toLowerCase()));
  }
  getName() {
    if (!this.selectedGroupId || this.selectedGroupId === 'everyone') {
      return this.t('everyone');
    }
    const group = this.groups.find((g) => g.userId === this.selectedGroupId);
    if (group) {
      return group.name;
    }
    return this.t('everyone');
  }
  render() {
    const unreadCountTotal = Object.keys(this.unreadCounts).reduce((total, key) => {
      return total + this.unreadCounts[key];
    }, 0);
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-scope-selector" }, this.showParticipantsPanel && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-container" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon" }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: "Search", value: this.query, onInput: (e) => {
        this.query = e.target.value;
      }, part: "search-input" })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "scope-list scrollbar" }, this.query === '' && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope scope-special", onClick: () => this.onScopeClick('everyone') }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "everyone-icon" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.participants })), "Everyone", this.unreadCounts['everyone'] > 0 && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadCounts['everyone']))))), this.getGroups().map((group) => {
      const count = this.unreadCounts[(0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.selfUserId, group.userId])];
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope", onClick: () => this.onScopeClick(group), key: group.userId }, group.name, count > 0 && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, count)))));
    })))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => this.toggleParticipants() }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.t('To')} ${this.getName()}`, '  ', unreadCountTotal > 0 && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count selector" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, unreadCountTotal)))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showParticipantsPanel ? this.iconPack.chevron_up : this.iconPack.chevron_down })))));
  }
};
DyteChatSelectorUi.style = dyteChatSelectorUiCss;




/***/ }),

/***/ 67503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Host),
/* harmony export */   "a": () => (/* binding */ getRenderingRef),
/* harmony export */   "c": () => (/* binding */ createEvent),
/* harmony export */   "f": () => (/* binding */ forceUpdate),
/* harmony export */   "g": () => (/* binding */ getElement),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "r": () => (/* binding */ registerInstance),
/* harmony export */   "w": () => (/* binding */ writeTask)
/* harmony export */ });
/* unused harmony exports b, p */
const NAMESPACE = 'dyte-ui-kit';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let hostTagName;
let isSvgMode = false;
let renderingRef = null;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false positive and then have to do needless re-rendering.
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        // this will be set if components in the build have `key` attrs set on them
        {
            return leftVNode.$key$ === rightVNode.$key$;
        }
    }
    return false;
};
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    if (text === null) {
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        renderingRef = instance;
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
      const processMod = importedModule => {
        cmpModules.set(bundleId, importedModule);
        return importedModule[exportName];
      }
      switch(bundleId) {
        
        case 'dyte-meeting':
          return __webpack_require__.e(/* import() */ 9319).then(__webpack_require__.bind(__webpack_require__, 29319)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-manager':
          return __webpack_require__.e(/* import() */ 9680).then(__webpack_require__.bind(__webpack_require__, 69680)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-toggle':
          return __webpack_require__.e(/* import() */ 6545).then(__webpack_require__.bind(__webpack_require__, 16545)).then(processMod, consoleError);
        case 'dyte-broadcast-message-modal':
          return __webpack_require__.e(/* import() */ 5479).then(__webpack_require__.bind(__webpack_require__, 2691)).then(processMod, consoleError);
        case 'dyte-camera-toggle':
          return __webpack_require__.e(/* import() */ 5329).then(__webpack_require__.bind(__webpack_require__, 35329)).then(processMod, consoleError);
        case 'dyte-chat':
          return __webpack_require__.e(/* import() */ 4667).then(__webpack_require__.bind(__webpack_require__, 4667)).then(processMod, consoleError);
        case 'dyte-chat-toggle':
          return __webpack_require__.e(/* import() */ 573).then(__webpack_require__.bind(__webpack_require__, 70573)).then(processMod, consoleError);
        case 'dyte-clock':
          return __webpack_require__.e(/* import() */ 3585).then(__webpack_require__.bind(__webpack_require__, 73585)).then(processMod, consoleError);
        case 'dyte-confirmation-modal':
          return __webpack_require__.e(/* import() */ 6348).then(__webpack_require__.bind(__webpack_require__, 66348)).then(processMod, consoleError);
        case 'dyte-controlbar':
          return __webpack_require__.e(/* import() */ 1717).then(__webpack_require__.bind(__webpack_require__, 41717)).then(processMod, consoleError);
        case 'dyte-dialog-manager':
          return __webpack_require__.e(/* import() */ 3533).then(__webpack_require__.bind(__webpack_require__, 83533)).then(processMod, consoleError);
        case 'dyte-ended-screen':
          return __webpack_require__.e(/* import() */ 7200).then(__webpack_require__.bind(__webpack_require__, 47200)).then(processMod, consoleError);
        case 'dyte-fullscreen-toggle':
          return __webpack_require__.e(/* import() */ 5486).then(__webpack_require__.bind(__webpack_require__, 5486)).then(processMod, consoleError);
        case 'dyte-grid':
          return __webpack_require__.e(/* import() */ 4737).then(__webpack_require__.bind(__webpack_require__, 74737)).then(processMod, consoleError);
        case 'dyte-grid-pagination':
          return __webpack_require__.e(/* import() */ 5203).then(__webpack_require__.bind(__webpack_require__, 55203)).then(processMod, consoleError);
        case 'dyte-header':
          return __webpack_require__.e(/* import() */ 5792).then(__webpack_require__.bind(__webpack_require__, 55792)).then(processMod, consoleError);
        case 'dyte-idle-screen':
          return __webpack_require__.e(/* import() */ 3505).then(__webpack_require__.bind(__webpack_require__, 13505)).then(processMod, consoleError);
        case 'dyte-image-viewer':
          return __webpack_require__.e(/* import() */ 7331).then(__webpack_require__.bind(__webpack_require__, 77331)).then(processMod, consoleError);
        case 'dyte-leave-button':
          return __webpack_require__.e(/* import() */ 7834).then(__webpack_require__.bind(__webpack_require__, 87834)).then(processMod, consoleError);
        case 'dyte-leave-meeting':
          return __webpack_require__.e(/* import() */ 8557).then(__webpack_require__.bind(__webpack_require__, 78557)).then(processMod, consoleError);
        case 'dyte-livestream-indicator':
          return __webpack_require__.e(/* import() */ 969).then(__webpack_require__.bind(__webpack_require__, 60969)).then(processMod, consoleError);
        case 'dyte-livestream-toggle':
          return __webpack_require__.e(/* import() */ 4482).then(__webpack_require__.bind(__webpack_require__, 54482)).then(processMod, consoleError);
        case 'dyte-meeting-title':
          return __webpack_require__.e(/* import() */ 3797).then(__webpack_require__.bind(__webpack_require__, 73797)).then(processMod, consoleError);
        case 'dyte-mic-toggle':
          return __webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 66676)).then(processMod, consoleError);
        case 'dyte-mixed-grid':
          return __webpack_require__.e(/* import() */ 7121).then(__webpack_require__.bind(__webpack_require__, 67121)).then(processMod, consoleError);
        case 'dyte-more-toggle':
          return __webpack_require__.e(/* import() */ 1196).then(__webpack_require__.bind(__webpack_require__, 61196)).then(processMod, consoleError);
        case 'dyte-mute-all-button':
          return __webpack_require__.e(/* import() */ 7904).then(__webpack_require__.bind(__webpack_require__, 27904)).then(processMod, consoleError);
        case 'dyte-mute-all-confirmation':
          return __webpack_require__.e(/* import() */ 8327).then(__webpack_require__.bind(__webpack_require__, 28327)).then(processMod, consoleError);
        case 'dyte-name-tag':
          return __webpack_require__.e(/* import() */ 5213).then(__webpack_require__.bind(__webpack_require__, 25213)).then(processMod, consoleError);
        case 'dyte-network-indicator':
          return __webpack_require__.e(/* import() */ 2047).then(__webpack_require__.bind(__webpack_require__, 22047)).then(processMod, consoleError);
        case 'dyte-notifications':
          return __webpack_require__.e(/* import() */ 1684).then(__webpack_require__.bind(__webpack_require__, 41684)).then(processMod, consoleError);
        case 'dyte-participant-count':
          return __webpack_require__.e(/* import() */ 8915).then(__webpack_require__.bind(__webpack_require__, 78915)).then(processMod, consoleError);
        case 'dyte-participant-setup':
          return __webpack_require__.e(/* import() */ 4483).then(__webpack_require__.bind(__webpack_require__, 94483)).then(processMod, consoleError);
        case 'dyte-participants':
          return __webpack_require__.e(/* import() */ 1324).then(__webpack_require__.bind(__webpack_require__, 11324)).then(processMod, consoleError);
        case 'dyte-participants-audio':
          return __webpack_require__.e(/* import() */ 597).then(__webpack_require__.bind(__webpack_require__, 50597)).then(processMod, consoleError);
        case 'dyte-participants-stage-list':
          return __webpack_require__.e(/* import() */ 791).then(__webpack_require__.bind(__webpack_require__, 30791)).then(processMod, consoleError);
        case 'dyte-participants-stage-queue':
          return __webpack_require__.e(/* import() */ 6303).then(__webpack_require__.bind(__webpack_require__, 36303)).then(processMod, consoleError);
        case 'dyte-participants-toggle':
          return __webpack_require__.e(/* import() */ 6076).then(__webpack_require__.bind(__webpack_require__, 56076)).then(processMod, consoleError);
        case 'dyte-participants-viewer-list':
          return __webpack_require__.e(/* import() */ 1683).then(__webpack_require__.bind(__webpack_require__, 91683)).then(processMod, consoleError);
        case 'dyte-participants-waiting-list':
          return __webpack_require__.e(/* import() */ 7506).then(__webpack_require__.bind(__webpack_require__, 47506)).then(processMod, consoleError);
        case 'dyte-permissions-message':
          return __webpack_require__.e(/* import() */ 9542).then(__webpack_require__.bind(__webpack_require__, 29542)).then(processMod, consoleError);
        case 'dyte-pip-toggle':
          return __webpack_require__.e(/* import() */ 1001).then(__webpack_require__.bind(__webpack_require__, 1001)).then(processMod, consoleError);
        case 'dyte-plugin-main':
          return __webpack_require__.e(/* import() */ 5472).then(__webpack_require__.bind(__webpack_require__, 25472)).then(processMod, consoleError);
        case 'dyte-plugins':
          return __webpack_require__.e(/* import() */ 6870).then(__webpack_require__.bind(__webpack_require__, 66870)).then(processMod, consoleError);
        case 'dyte-plugins-toggle':
          return __webpack_require__.e(/* import() */ 4327).then(__webpack_require__.bind(__webpack_require__, 65838)).then(processMod, consoleError);
        case 'dyte-polls':
          return __webpack_require__.e(/* import() */ 7394).then(__webpack_require__.bind(__webpack_require__, 57394)).then(processMod, consoleError);
        case 'dyte-polls-toggle':
          return __webpack_require__.e(/* import() */ 9728).then(__webpack_require__.bind(__webpack_require__, 69728)).then(processMod, consoleError);
        case 'dyte-recording-indicator':
          return __webpack_require__.e(/* import() */ 6264).then(__webpack_require__.bind(__webpack_require__, 69545)).then(processMod, consoleError);
        case 'dyte-recording-toggle':
          return __webpack_require__.e(/* import() */ 8286).then(__webpack_require__.bind(__webpack_require__, 8286)).then(processMod, consoleError);
        case 'dyte-remote-access-manager':
          return __webpack_require__.e(/* import() */ 1908).then(__webpack_require__.bind(__webpack_require__, 21908)).then(processMod, consoleError);
        case 'dyte-screen-share-toggle':
          return __webpack_require__.e(/* import() */ 8270).then(__webpack_require__.bind(__webpack_require__, 18270)).then(processMod, consoleError);
        case 'dyte-screenshare-view':
          return __webpack_require__.e(/* import() */ 9246).then(__webpack_require__.bind(__webpack_require__, 89246)).then(processMod, consoleError);
        case 'dyte-settings':
          return __webpack_require__.e(/* import() */ 6253).then(__webpack_require__.bind(__webpack_require__, 96253)).then(processMod, consoleError);
        case 'dyte-settings-toggle':
          return __webpack_require__.e(/* import() */ 6350).then(__webpack_require__.bind(__webpack_require__, 66350)).then(processMod, consoleError);
        case 'dyte-setup-screen':
          return __webpack_require__.e(/* import() */ 605).then(__webpack_require__.bind(__webpack_require__, 70605)).then(processMod, consoleError);
        case 'dyte-sidebar':
          return __webpack_require__.e(/* import() */ 1742).then(__webpack_require__.bind(__webpack_require__, 41742)).then(processMod, consoleError);
        case 'dyte-simple-grid':
          return __webpack_require__.e(/* import() */ 9168).then(__webpack_require__.bind(__webpack_require__, 79168)).then(processMod, consoleError);
        case 'dyte-spotlight-grid':
          return __webpack_require__.e(/* import() */ 7987).then(__webpack_require__.bind(__webpack_require__, 87987)).then(processMod, consoleError);
        case 'dyte-stage':
          return __webpack_require__.e(/* import() */ 7279).then(__webpack_require__.bind(__webpack_require__, 17279)).then(processMod, consoleError);
        case 'dyte-stage-toggle':
          return __webpack_require__.e(/* import() */ 6406).then(__webpack_require__.bind(__webpack_require__, 16406)).then(processMod, consoleError);
        case 'dyte-text-field':
          return __webpack_require__.e(/* import() */ 1461).then(__webpack_require__.bind(__webpack_require__, 51461)).then(processMod, consoleError);
        case 'dyte-viewer-count':
          return __webpack_require__.e(/* import() */ 3570).then(__webpack_require__.bind(__webpack_require__, 3570)).then(processMod, consoleError);
        case 'dyte-waiting-screen':
          return __webpack_require__.e(/* import() */ 2116).then(__webpack_require__.bind(__webpack_require__, 52116)).then(processMod, consoleError);
        case 'dyte-webinar-stage-toggle':
          return __webpack_require__.e(/* import() */ 1976).then(__webpack_require__.bind(__webpack_require__, 21976)).then(processMod, consoleError);
        case 'dyte-breakout-room-manager_3':
          return __webpack_require__.e(/* import() */ 9851).then(__webpack_require__.bind(__webpack_require__, 79851)).then(processMod, consoleError);
        case 'dyte-chat-composer-ui_4':
          return __webpack_require__.e(/* import() */ 1617).then(__webpack_require__.bind(__webpack_require__, 71617)).then(processMod, consoleError);
        case 'dyte-join-stage_2':
          return __webpack_require__.e(/* import() */ 6154).then(__webpack_require__.bind(__webpack_require__, 66154)).then(processMod, consoleError);
        case 'dyte-livestream-player':
          return __webpack_require__.e(/* import() */ 4310).then(__webpack_require__.bind(__webpack_require__, 84310)).then(processMod, consoleError);
        case 'dyte-notification':
          return __webpack_require__.e(/* import() */ 6409).then(__webpack_require__.bind(__webpack_require__, 56409)).then(processMod, consoleError);
        case 'dyte-poll_2':
          return __webpack_require__.e(/* import() */ 1074).then(__webpack_require__.bind(__webpack_require__, 61074)).then(processMod, consoleError);
        case 'dyte-settings-audio_2':
          return __webpack_require__.e(/* import() */ 8407).then(__webpack_require__.bind(__webpack_require__, 28407)).then(processMod, consoleError);
        case 'dyte-tab-bar':
          return __webpack_require__.e(/* import() */ 6625).then(__webpack_require__.bind(__webpack_require__, 16625)).then(processMod, consoleError);
        case 'dyte-audio-visualizer_2':
          return __webpack_require__.e(/* import() */ 5103).then(__webpack_require__.bind(__webpack_require__, 15103)).then(processMod, consoleError);
        case 'dyte-chat-message_2':
          return __webpack_require__.e(/* import() */ 7565).then(__webpack_require__.bind(__webpack_require__, 77565)).then(processMod, consoleError);
        case 'dyte-dialog':
          return __webpack_require__.e(/* import() */ 5838).then(__webpack_require__.bind(__webpack_require__, 95838)).then(processMod, consoleError);
        case 'dyte-emoji-picker':
          return __webpack_require__.e(/* import() */ 8165).then(__webpack_require__.bind(__webpack_require__, 28165)).then(processMod, consoleError);
        case 'dyte-participant':
          return __webpack_require__.e(/* import() */ 4311).then(__webpack_require__.bind(__webpack_require__, 87844)).then(processMod, consoleError);
        case 'dyte-participant-tile':
          return __webpack_require__.e(/* import() */ 6383).then(__webpack_require__.bind(__webpack_require__, 56383)).then(processMod, consoleError);
        case 'dyte-spotlight-indicator':
          return __webpack_require__.e(/* import() */ 3182).then(__webpack_require__.bind(__webpack_require__, 43182)).then(processMod, consoleError);
        case 'dyte-logo':
          return __webpack_require__.e(/* import() */ 6041).then(__webpack_require__.bind(__webpack_require__, 96041)).then(processMod, consoleError);
        case 'dyte-file-message_3':
          return __webpack_require__.e(/* import() */ 2443).then(__webpack_require__.bind(__webpack_require__, 72443)).then(processMod, consoleError);
        case 'dyte-menu_3':
          return __webpack_require__.e(/* import() */ 8861).then(__webpack_require__.bind(__webpack_require__, 38861)).then(processMod, consoleError);
        case 'dyte-avatar':
          return __webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 37311)).then(processMod, consoleError);
        case 'dyte-controlbar-button':
          return __webpack_require__.e(/* import() */ 3394).then(__webpack_require__.bind(__webpack_require__, 3394)).then(processMod, consoleError);
        case 'dyte-tooltip':
          return __webpack_require__.e(/* import() */ 6897).then(__webpack_require__.bind(__webpack_require__, 16897)).then(processMod, consoleError);
        case 'dyte-spinner':
          return __webpack_require__.e(/* import() */ 6013).then(__webpack_require__.bind(__webpack_require__, 6013)).then(processMod, consoleError);
        case 'dyte-button':
          return __webpack_require__.e(/* import() */ 3692).then(__webpack_require__.bind(__webpack_require__, 33692)).then(processMod, consoleError);
        case 'dyte-icon':
          return __webpack_require__.e(/* import() */ 8888).then(__webpack_require__.bind(__webpack_require__, 78888)).then(processMod, consoleError);
      }
    }
    return __webpack_require__(98654)(`./${bundleId}.entry.js`).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (/* unused pure expression or super */ null && ((() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()))
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




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