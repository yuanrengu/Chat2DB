"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 30791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participants_stage_list": () => (/* binding */ DyteParticipants)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11810);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36881);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const dyteParticipantsStageListCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;width:100%;flex-direction:column;font-size:14px}.participants-container{margin-bottom:var(--dyte-space-4, 16px);width:100%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}dyte-participant{width:100%}";

const DyteParticipants = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.updateParticipants = () => {
      this.getParticipants(this.search);
    };
    this.shouldShowStageList = () => {
      var _a, _b, _c;
      if (((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta.viewType) === 'LIVESTREAM') {
        this.showStageList = ((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.status) === 'ON_STAGE';
      }
      else
        this.showStageList = true;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.view = 'sidebar';
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.search = '';
    this.participants = [];
    this.showStageList = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.searchChanged(this.search);
  }
  disconnectedCallback() {
    var _a, _b;
    const { participants, self } = this.meeting;
    if (this.meeting == null)
      return;
    this.participantJoinedListener &&
      this.meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    participants.joined.removeListener('peerStartedPresenting', this.updateParticipants);
    participants.joined.removeListener('peerStoppedPresenting', this.updateParticipants);
    self.removeListener('stageJoined', this.updateParticipants);
    self.removeListener('stageLeft', this.updateParticipants);
    self.removeListener('removedFromStage', this.updateParticipants);
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.shouldShowStageList);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.participantJoinedListener = (participant) => {
      if (this.meeting.meta.viewType === 'WEBINAR' && participant.webinarStageStatus !== 'ON_STAGE')
        return;
      // Do not append if participant name or id does not match search query
      const lowerCaseSearch = this.search.toLowerCase();
      if (!participant.name.toLowerCase().includes(lowerCaseSearch) ||
        !participant.id.toLowerCase().includes(lowerCaseSearch))
        return;
      this.participants = [
        ...this.participants.filter((p) => p.id !== participant.id),
        participant,
      ];
    };
    this.participantLeftListener = (participant) => {
      this.participants = this.participants.filter((p) => p.id !== participant.id);
    };
    meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
    meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    meeting.participants.joined.addListener('peerStartedPresenting', this.updateParticipants);
    meeting.participants.joined.addListener('peerStoppedPresenting', this.updateParticipants);
    meeting.self.addListener('stageJoined', this.updateParticipants);
    meeting.self.addListener('stageLeft', this.updateParticipants);
    meeting.self.addListener('removedFromStage', this.updateParticipants);
    this.shouldShowStageList();
    (_a = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.shouldShowStageList);
  }
  searchChanged(search) {
    this.getParticipants(search);
  }
  getParticipants(search) {
    let list = [this.meeting.self, ...this.meeting.participants.joined.toArray()];
    if (this.meeting.meta.viewType === 'WEBINAR') {
      list = list.filter((p) => p.webinarStageStatus === 'ON_STAGE');
    }
    if (search === '')
      this.participants = list;
    else {
      this.participants = list.filter((p) => { var _a; return ((_a = p.name) !== null && _a !== void 0 ? _a : p.id).toLowerCase().includes(search.toLowerCase()); });
    }
  }
  render() {
    if (!this.showStageList)
      return;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-container" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "heading-count" }, this.t('participants'), " (", this.participants.length, ")"), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "participants" }, this.participants.map((participant) => ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant", { role: "listitem", key: participant.id, meeting: this.meeting, participant: participant, view: this.view, t: this.t, iconPack: this.iconPack }))), this.participants.length === 0 && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-message", part: "empty-message" }, this.search.length > 0
      ? this.t("Couldn't find a participant with the specified name or ID.")
      : this.t('It looks like nobody is here.')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "search": ["searchChanged"]
  }; }
};
DyteParticipants.style = dyteParticipantsStageListCss;




/***/ })

};
;