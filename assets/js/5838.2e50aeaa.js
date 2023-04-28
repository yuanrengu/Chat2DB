"use strict";
exports.id = 5838;
exports.ids = [5838];
exports.modules = {

/***/ 95838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_dialog": () => (/* binding */ DyteDialog)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36881);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11810);





const dyteDialogCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif)}:host{position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);box-sizing:border-box;padding:var(--dyte-space-4, 16px);flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / 0.5);color:rgb(var(--dyte-colors-text-1000, 255 255 255));visibility:hidden;display:none;z-index:60;-webkit-backdrop-filter:blur(12px) saturate(180%);backdrop-filter:blur(12px) saturate(180%)}#dialog{position:relative;max-height:100%;max-width:100%}#dismiss-btn{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);z-index:50}::slotted(*){max-height:100%;max-width:100%}:host([open]){visibility:visible;display:flex}:host([open='false']){visibility:hidden;display:none}";

const DyteDialog = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onClose = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteDialogClose", 7);
    this.close = () => {
      this.open = false;
      this.onClose.emit();
    };
    this.keydownListener = (e) => {
      if (e.key === 'Escape' && this.open) {
        this.close();
      }
    };
    this.hideCloseButton = false;
    this.meeting = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.open = true;
  }
  connectedCallback() {
    document.addEventListener('keydown', this.keydownListener);
  }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.keydownListener);
  }
  render() {
    if (!this.open) {
      return null;
    }
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dialog", part: "container" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), !this.hideCloseButton && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { part: "close-button", id: "dismiss-btn", kind: "icon", variant: "ghost", onClick: () => this.close(), iconPack: this.iconPack, t: this.t }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))));
  }
};
DyteDialog.style = dyteDialogCss;




/***/ })

};
;