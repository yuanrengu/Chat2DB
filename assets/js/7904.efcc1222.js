"use strict";
exports.id = 7904;
exports.ids = [7904];
exports.modules = {

/***/ 27904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_mute_all_button": () => (/* binding */ DyteMuteAllButton)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11204);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);





const dyteMuteAllButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}";

const DyteMuteAllButton = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onMuteAll = () => {
      this.stateUpdate.emit({ activeMuteAllConfirmation: true });
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    var _a;
    if (!((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.canAllowParticipantAudio)) {
      return null;
    }
    const label = this.t('mute_all');
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: label, part: "tooltip" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", icon: this.iconPack.speaker_off, label: label, size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, onClick: this.onMuteAll }))));
  }
};
DyteMuteAllButton.style = dyteMuteAllButtonCss;




/***/ })

};
;