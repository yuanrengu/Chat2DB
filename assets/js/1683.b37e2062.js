"use strict";
exports.id = 1683;
exports.ids = [1683];
exports.modules = {

/***/ 91683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participants_viewer_list": () => (/* binding */ DyteParticipantsViewers)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36881);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11204);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const dyteParticipantsViewerListCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;width:100%;flex-direction:column;font-size:14px}.list{margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:column}h3,.heading-count{margin:var(--dyte-space-0, 0px);align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}";

const DyteParticipantsViewers = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.updateStageViewers = () => {
      this.getViewers(this.search);
    };
    this.shouldShowViewers = () => {
      return this.meeting.meta.viewType === 'WEBINAR';
    };
    this.meeting = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.view = 'sidebar';
    this.search = '';
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.stageViewers = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.searchChanged(this.search);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.participantJoinedListener = (participant) => {
      if (participant.webinarStageStatus === 'ON_STAGE')
        return;
      // Do not append if participant name or id does not match search query
      const lowerCaseSearch = this.search.toLowerCase();
      if (!participant.name.toLowerCase().includes(lowerCaseSearch) ||
        !participant.id.toLowerCase().includes(lowerCaseSearch))
        return;
      this.stageViewers = [
        ...this.stageViewers.filter((p) => p.id !== participant.id),
        participant,
      ];
    };
    this.participantLeftListener = (participant) => {
      this.stageViewers = this.stageViewers.filter((p) => p.id !== participant.id);
    };
    meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
    meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    meeting.participants.joined.addListener('peerStartedPresenting', this.updateStageViewers);
    meeting.participants.joined.addListener('peerStoppedPresenting', this.updateStageViewers);
    meeting.self.addListener('stageJoined', this.updateStageViewers);
    meeting.self.addListener('stageLeft', this.updateStageViewers);
    meeting.self.addListener('removedFromStage', this.updateStageViewers);
  }
  searchChanged(search) {
    this.getViewers(search);
  }
  disconnectedCallback() {
    const { participants, self } = this.meeting;
    this.participantJoinedListener &&
      this.meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    participants.joined.removeListener('peerStartedPresenting', this.updateStageViewers);
    participants.joined.removeListener('peerStoppedPresenting', this.updateStageViewers);
    self.removeListener('stageJoined', this.updateStageViewers);
    self.removeListener('stageLeft', this.updateStageViewers);
    self.removeListener('removedFromStage', this.updateStageViewers);
  }
  getViewers(search) {
    let list = [this.meeting.self, ...this.meeting.participants.joined.toArray()].filter((p) => p.webinarStageStatus !== 'ON_STAGE');
    if (search === '')
      this.stageViewers = list;
    else {
      this.stageViewers = list.filter((p) => { var _a; return ((_a = p.name) !== null && _a !== void 0 ? _a : p.id).toLowerCase().includes(search.toLowerCase()); });
    }
  }
  render() {
    if (this.view !== 'sidebar' || !this.shouldShowViewers())
      return;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "list" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "heading-count" }, this.t('Viewers'), " (", this.stageViewers.length, ")"), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "participants" }, this.stageViewers.map((participant) => {
      if (participant.webinarStageStatus === 'ON_STAGE')
        return;
      return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant", { role: "listitem", key: participant.id, meeting: this.meeting, participant: participant, view: this.view, iconPack: this.iconPack, t: this.t }));
    }), this.stageViewers.length === 0 && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-message", part: "empty-message" }, this.search.length > 0
      ? this.t("Couldn't find a viewer with the specified name or ID.")
      : this.t('It looks like nobody is here.'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "search": ["searchChanged"]
  }; }
};
DyteParticipantsViewers.style = dyteParticipantsViewerListCss;




/***/ })

};
;