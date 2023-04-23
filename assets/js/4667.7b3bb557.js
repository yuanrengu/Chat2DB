"use strict";
exports.id = 4667;
exports.ids = [4667];
exports.modules = {

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_chat": () => (/* binding */ DyteChat)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11204);
/* harmony import */ var _chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62270);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36881);
/* harmony import */ var _flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40579);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60804);
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60614);










const dyteChatCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui{flex:1 0 0}";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disconnectMeeting = (meeting) => {
      var _a;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantsUpdate', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
    };
    this.onParticipantUpdate = () => {
      this.participants = this.meeting.participants.joined.toArray();
      // if selected participant leaves, reset state to everyone
      if (this.selectedParticipant && !this.participants.includes(this.selectedParticipant)) {
        this.selectedParticipant = null;
        this.chatRecipientId = this.selectedGroup = 'everyone';
      }
    };
    this.usePaginatedChat = () => (0,_flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_6__.u)(this.meeting);
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (this.canPrivateMessage &&
        !this.disablePrivateChat &&
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.getFeatureValue('chat_socket_server')) ===
          'socket-service');
    };
    this.updateRecipients = (event) => {
      if (typeof event.detail === 'string') {
        this.chatRecipientId = 'everyone';
        this.selectedParticipant = null;
      }
      else {
        const { userId } = event.detail;
        this.chatRecipientId = userId;
        this.selectedParticipant = this.participants.find((p) => p.userId === userId);
      }
      if (this.chatRecipientId !== 'everyone') {
        const allParticipants = [this.chatRecipientId, this.meeting.self.userId];
        const targetKey = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
        this.selectedGroup = targetKey;
      }
      else {
        this.selectedGroup = 'everyone';
      }
      this.updateUnreadCountGroups({ [this.selectedGroup]: 0 });
    };
    this.isTextMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendTextMessage;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateTexts;
    };
    this.isFileMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendFiles;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateFiles;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
    this.privatePresetFilter = [];
    this.unreadCountGroups = {};
    this.chatGroups = { everyone: [] };
    this.selectedGroup = 'everyone';
    this.now = new Date();
    this.dropzoneActivated = false;
    this.showLatestMessageButton = false;
    this.canSend = false;
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.canPrivateMessage = false;
    this.canSendPrivateTexts = false;
    this.canSendPrivateFiles = false;
    this.emojiPickerEnabled = false;
    this.chatRecipientId = 'everyone';
    this.participants = [];
    this.selectedParticipant = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzoneActivated = true;
      });
      this.host.addEventListener('dragleave', () => {
        this.dropzoneActivated = false;
      });
      this.host.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzoneActivated = false;
        (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
          var _a, _b, _c, _d;
          switch (type) {
            case 'image':
              if (this.isFileMessagingAllowed()) {
                (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendImageMessage(file, this.getRecipientPeerIds());
              }
              break;
            case 'file':
              if (this.isFileMessagingAllowed()) {
                (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendFileMessage(file, this.getRecipientPeerIds());
              }
              break;
          }
        });
      });
    }
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      this.canSend = meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
      this.canSendFiles = meeting.self.permissions.chatPublic.files;
      this.canPrivateMessage =
        ((_a = meeting.self.permissions.chatPrivate) === null || _a === void 0 ? void 0 : _a.canSend) ||
          ((_b = meeting.self.permissions.chatPrivate) === null || _b === void 0 ? void 0 : _b.canReceive);
      this.canSendPrivateTexts = (_c = meeting.self.permissions.chatPrivate) === null || _c === void 0 ? void 0 : _c.text;
      this.canSendPrivateFiles = (_d = meeting.self.permissions.chatPrivate) === null || _d === void 0 ? void 0 : _d.files;
      this.initializeChatGroups();
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
      this.chatUpdateListener = ({ message }) => {
        this.addToChatGroup(message);
        // shallow copy to trigger render
        this.chatGroups = Object.assign({}, this.chatGroups);
      };
      this.onParticipantUpdate();
      if (!this.usePaginatedChat())
        (_e = meeting.chat) === null || _e === void 0 ? void 0 : _e.addListener('chatUpdate', this.chatUpdateListener);
      if (this.isPrivateChatSupported()) {
        meeting.participants.joined.addListener('participantJoined', this.onParticipantUpdate);
        meeting.participants.joined.addListener('participantLeft', this.onParticipantUpdate);
      }
    }
  }
  chatGroupsChanged(chatGroups) {
    var _a, _b;
    if (!this.isPrivateChatSupported()) {
      return;
    }
    const unreadCounts = {};
    for (const key in chatGroups) {
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
      }
    }
    this.updateUnreadCountGroups(unreadCounts);
  }
  initializeChatGroups() {
    var _a;
    (_a = this.meeting.chat) === null || _a === void 0 ? void 0 : _a.messages.forEach((message) => {
      this.addToChatGroup(message);
    });
  }
  addToChatGroup(message) {
    var _a;
    const parsedMessage = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.p)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    this.chatGroups[key] = [
      ...this.chatGroups[key],
      { type: 'chat', message: parsedMessage },
    ];
  }
  getRecipientPeerIds() {
    let peerIds = [];
    if (this.chatRecipientId !== 'everyone') {
      peerIds = [this.selectedParticipant.id];
    }
    return peerIds;
  }
  render() {
    var _a, _b, _c, _d;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    const chatMessages = this.chatGroups[this.selectedGroup] || [];
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isFileMessagingAllowed() && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('Drop files/images to send')))), this.isPrivateChatSupported() && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-selector-ui", Object.assign({ selfUserId: selfUserId, groups: this.participants, selectedGroupId: (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId, unreadCounts: this.unreadCountGroups, onDyteChatGroupChanged: this.updateRecipients }, uiProps))), this.usePaginatedChat() ? ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup }, uiProps))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-ui", Object.assign({ canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.__internals__) === null || _d === void 0 ? void 0 : _d.features.hasFeature(_flags_e3ef47bf_js__WEBPACK_IMPORTED_MODULE_6__.F.DISABLE_EMOJI_PICKER)), onDyteNewMessage: (e) => {
        var _a, _b, _c, _d, _e, _f;
        const message = e.detail;
        switch (message.type) {
          case 'text':
            (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendTextMessage(message.message, this.getRecipientPeerIds());
            break;
          case 'image':
            (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendImageMessage(message.file, this.getRecipientPeerIds());
            break;
          case 'file':
            (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.chat) === null || _f === void 0 ? void 0 : _f.sendFileMessage(message.file, this.getRecipientPeerIds());
            break;
        }
      } }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon", slot: "chat-addon" }))));
  }
  get host() { return (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;




/***/ }),

/***/ 40579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FlagsmithFeatureFlags),
/* harmony export */   "i": () => (/* binding */ isBreakoutRoomsEnabled),
/* harmony export */   "u": () => (/* binding */ usePaginatedChat)
/* harmony export */ });
/* harmony import */ var _livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60614);


const FlagsmithFeatureFlags = {
  PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE: 'play_participant_tile_video_on_pause',
  DISABLE_EMOJI_PICKER: 'disable_emoji_picker',
  FEAT_PAGINATED_CHAT: 'feat_paginated_chat',
  LOG_PLAYING_FAILURES: 'log_playing_failures',
};
const isBreakoutRoomsEnabled = (meeting) => meeting.connectedMeetings.supportsConnectedMeetings;
const usePaginatedChat = (meeting) => { var _a; return (0,_livestream_a51a08c2_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) || ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.__internals__) === null || _a === void 0 ? void 0 : _a.features.hasFeature('feat_paginated_chat')); };




/***/ }),

/***/ 60614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PlayerState),
/* harmony export */   "a": () => (/* binding */ isLiveStreamHost),
/* harmony export */   "b": () => (/* binding */ canRequestToJoinStage),
/* harmony export */   "c": () => (/* binding */ canJoinStage),
/* harmony export */   "d": () => (/* binding */ PlayerEventType),
/* harmony export */   "e": () => (/* binding */ awsIvsPlayerEventsToIgnore),
/* harmony export */   "i": () => (/* binding */ isLiveStreamViewer),
/* harmony export */   "s": () => (/* binding */ showLivestream)
/* harmony export */ });
/**
 * Can view the livestream
 */
const isLiveStreamViewer = (meeting) => {
  if (!showLivestream(meeting))
    return false;
  return meeting.meta.viewType === 'LIVESTREAM' && meeting.stage.status !== 'ON_STAGE';
};
/**
 * Can start/stop the livestream
 */
const isLiveStreamHost = (meeting) => {
  var _a;
  if (!showLivestream(meeting))
    return false;
  return meeting.meta.viewType === 'LIVESTREAM' && ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.canLivestream);
};
const showLivestream = (meeting) => {
  var _a;
  return ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.isV2) && (meeting === null || meeting === void 0 ? void 0 : meeting.livestream);
};
var PlayerState;
(function (PlayerState) {
  PlayerState["BUFFERING"] = "Buffering";
  PlayerState["ENDED"] = "Ended";
  PlayerState["IDLE"] = "Idle";
  PlayerState["PLAYING"] = "Playing";
  PlayerState["READY"] = "Ready";
})(PlayerState || (PlayerState = {}));
var PlayerEventType;
(function (PlayerEventType) {
  PlayerEventType["INITIALIZED"] = "PlayerInitialized";
  PlayerEventType["QUALITY_CHANGED"] = "PlayerQualityChanged";
  PlayerEventType["DURATION_CHANGED"] = "PlayerDurationChanged";
  PlayerEventType["VOLUME_CHANGED"] = "PlayerVolumeChanged";
  PlayerEventType["MUTED_CHANGED"] = "PlayerMutedChanged";
  PlayerEventType["PLAYBACK_RATE_CHANGED"] = "PlayerPlaybackRateChanged";
  PlayerEventType["REBUFFERING"] = "PlayerRebuffering";
  PlayerEventType["AUDIO_BLOCKED"] = "PlayerAudioBlocked";
  PlayerEventType["PLAYBACK_BLOCKED"] = "PlayerPlaybackBlocked";
  PlayerEventType["ERROR"] = "PlayerError";
  PlayerEventType["RECOVERABLE_ERROR"] = "PlayerRecoverableError";
  PlayerEventType["ANALYTICS_EVENT"] = "PlayerAnalyticsEvent";
  PlayerEventType["TIME_UPDATE"] = "PlayerTimeUpdate";
  PlayerEventType["BUFFER_UPDATE"] = "PlayerBufferUpdate";
  PlayerEventType["SEEK_COMPLETED"] = "PlayerSeekCompleted";
  PlayerEventType["SESSION_DATA"] = "PlayerSessionData";
  PlayerEventType["STATE_CHANGED"] = "PlayerStateChanged";
  PlayerEventType["WORKER_ERROR"] = "PlayerWorkerError";
  PlayerEventType["METADATA"] = "PlayerMetadata";
  PlayerEventType["TEXT_CUE"] = "PlayerTextCue";
  PlayerEventType["TEXT_METADATA_CUE"] = "PlayerTextMetadataCue";
  PlayerEventType["AD_CUE"] = "PlayerAdCue";
  PlayerEventType["STREAM_SOURCE_CUE"] = "PlayerStreamSourceCue";
  PlayerEventType["NETWORK_UNAVAILABLE"] = "PlayerNetworkUnavailable";
  PlayerEventType["SEGMENT_DISCONTINUITY"] = "PlayerSegmentDiscontinuity";
  PlayerEventType["SEGMENT_METADATA"] = "PlayerSegmentMetadata";
  PlayerEventType["PLAYER_METADATA"] = "PlayerMetadata";
})(PlayerEventType || (PlayerEventType = {}));
/**
 * NOTE(callmetarush): For some reason PlayerMetadata is not in type but spams events like crazy
 */
const awsIvsPlayerEventsToIgnore = [
  PlayerEventType.TIME_UPDATE,
  PlayerEventType.BUFFER_UPDATE,
  PlayerEventType.TEXT_METADATA_CUE,
  PlayerEventType.PLAYER_METADATA,
];
// TODO: (ishita1805): Move to stage.ts helpers when webinar is moved to `meeting.stage`
const canJoinStage = (meeting) => {
  var _a, _b, _c, _d, _e, _f;
  if (!showLivestream(meeting))
    return false;
  return (((_b = (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.canProduceAudio) === 'ALLOWED' ||
    ((_d = (_c = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.canProduceScreenshare) === 'ALLOWED' ||
    ((_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo) === 'ALLOWED');
};
const canRequestToJoinStage = (meeting) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!showLivestream(meeting))
    return false;
  return (((_b = (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.canProduceAudio) !== 'NOT_ALLOWED' ||
    ((_d = (_c = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.canProduceScreenshare) !== 'NOT_ALLOWED' ||
    ((_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo) !== 'NOT_ALLOWED' ||
    ((_h = (_g = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _g === void 0 ? void 0 : _g.permissions) === null || _h === void 0 ? void 0 : _h.canLivestream));
};




/***/ })

};
;