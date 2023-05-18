"use strict";
exports.id = 1617;
exports.ids = [1617];
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

/***/ 71617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_composer_ui: () => (/* binding */ DyteChatComposerUi),
/* harmony export */   dyte_chat_messages_ui: () => (/* binding */ DyteChatMessagesUi),
/* harmony export */   dyte_chat_messages_ui_paginated: () => (/* binding */ DyteChatMessagesUiPaginated),
/* harmony export */   dyte_chat_selector_ui: () => (/* binding */ DyteChatSelectorUi)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51922);
/* harmony import */ var _index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51306);
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
    this.initializeTextField = (el) => {
      this.$textArea = el;
      const message = _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__.g.getItem('dyte-text-message') || '';
      this.$textArea.value = message;
    };
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.size = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
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
      }, t: this.t })), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon" }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input" }, this.canSendTextMessage && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { class: "scrollbar", part: "textarea", placeholder: "Message..", ref: this.initializeTextField, autoFocus: true, onPaste: this.onPaste, onKeyDown: this.handleKeyDown, onInput: (e) => {
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
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
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
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
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
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_2__.u)();
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

/***/ 82321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ smoothScrollToBottom)
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