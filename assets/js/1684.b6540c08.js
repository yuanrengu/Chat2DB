"use strict";
exports.id = 1684;
exports.ids = [1684];
exports.modules = {

/***/ 43367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ RemoteUpdateType)
/* harmony export */ });
var RemoteUpdateType;
(function (RemoteUpdateType) {
  RemoteUpdateType["REQUEST_RECEIVED"] = "REQUEST_RECEIVED";
  RemoteUpdateType["REQUEST_SENT"] = "REQUEST_SENT";
  RemoteUpdateType["INCOMING_REQUEST_ACCEPTED"] = "INCOMING_REQUEST_ACCEPTED";
  RemoteUpdateType["OUTGOING_REQUEST_ACCEPTED"] = "OUTGOING_REQUEST_ACCEPTED";
  RemoteUpdateType["INCOMING_REQUEST_ENDED"] = "INCOMING_REQUEST_ENDED";
  RemoteUpdateType["OUTGOING_REQUEST_ENDED"] = "OUTGOING_REQUEST_ENDED";
})(RemoteUpdateType || (RemoteUpdateType = {}));




/***/ }),

/***/ 41684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_notifications": () => (/* binding */ DyteNotifications)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43367);
/* harmony import */ var _notification_8c0067e0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91007);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22906);
/* harmony import */ var _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51922);
/* harmony import */ var _index_c9699924_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51306);
/* harmony import */ var _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36881);
/* harmony import */ var _chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62270);
/* harmony import */ var _flags_fc6b98fd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77347);
/* harmony import */ var _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86386);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85114);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60804);
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50528);














const DEFAULT_NOTIFICATION_DURATION = 2000;
const DEFAULT_NOTIFICATION_CONFIG = Object.freeze({
  notifications: {
    participant_joined: true,
    participant_left: true,
    participant_joined_waitlist: true,
    chat: true,
    polls: true,
    webinar: true,
    tab_sync: true,
  },
  notification_sounds: {
    participant_joined: true,
    participant_left: true,
    chat: true,
    polls: true,
    webinar: true,
    participant_joined_waitlist: true,
  },
  notification_duration: {
    participant_joined: 2100,
    participant_left: 2100,
    participant_joined_waitlist: 4000,
    chat: DEFAULT_NOTIFICATION_DURATION,
    polls: DEFAULT_NOTIFICATION_DURATION,
    webinar: DEFAULT_NOTIFICATION_DURATION,
    tab_sync: DEFAULT_NOTIFICATION_DURATION,
  },
  participant_joined_sound_notification_limit: 10,
  participant_chat_message_sound_notification_limit: 10,
});

const dyteNotificationsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;z-index:100}dyte-notification{margin-top:var(--dyte-space-2, 8px)}";

function parseConfig(config) {
  const permissions = Object.assign({}, DEFAULT_NOTIFICATION_CONFIG);
  if (config == null)
    return permissions;
  Object.assign(permissions.notification_sounds, config.notification_sounds);
  Object.assign(permissions.notifications, config.notifications);
  Object.assign(permissions.notification_duration, config.notification_duration);
  permissions.participant_chat_message_sound_notification_limit =
    config.participant_chat_message_sound_notification_limit;
  permissions.participant_joined_sound_notification_limit =
    config.participant_joined_sound_notification_limit;
  return permissions;
}
function getEnabledSounds(sounds) {
  return Object.keys(sounds).filter((key) => sounds[key]);
}
const DyteNotifications = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.permissions = DEFAULT_NOTIFICATION_CONFIG;
    this.enabledSounds = getEnabledSounds(DEFAULT_NOTIFICATION_CONFIG.notification_sounds);
    this.addStagePeersListeners = (meeting) => {
      meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
      meeting.meta.addListener('disconnected', this.networkDisconnectedListener);
      meeting.meta.addListener('connected', this.networkConnectedListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    };
    this.removeStagePeersListeners = (meeting) => {
      meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
      meeting.meta.removeListener('disconnected', this.networkDisconnectedListener);
      meeting.meta.removeListener('connected', this.networkConnectedListener);
      meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    };
    this.onRemoteUpdate = ({ payload, type }) => {
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.INCOMING_REQUEST_ACCEPTED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Granted remote control to ${remotePeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.OUTGOING_REQUEST_ACCEPTED) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${hostPeer.name} has granted remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.REQUEST_RECEIVED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${remotePeer.name} has requested for remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.INCOMING_REQUEST_ENDED ||
        type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.OUTGOING_REQUEST_ENDED) {
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Existing remote control has been terminated.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.REQUEST_SENT) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Sent remote control request to ${hostPeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.onDyteNotification = (e) => {
      this.add(e.detail);
      const playSound = e.detail.playSound;
      if (playSound != undefined)
        this.audio.play(playSound);
    };
    this.onRecordingUpdate = (recordingState) => {
      if (recordingState === 'RECORDING') {
        this.add({
          id: 'recording-started',
          icon: this.iconPack.recording,
          message: this.t('recording.started'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      else if (recordingState === 'STOPPING') {
        this.add({
          id: 'recording-stopped',
          icon: this.iconPack.stop_recording,
          message: this.t('recording.stopped'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_6e4b8718_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.t = (0,_index_c9699924_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.size = undefined;
    this.iconPack = _default_icon_pack_42ac57c7_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.notifications = [];
  }
  connectedCallback() {
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.addEventListener('dyteNotification', this.onDyteNotification);
    }
    this.meetingChanged(this.meeting);
    this.configChanged(this.config);
    this.statesChanged(this.states);
  }
  clearListeners(meeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    if ((isLivestream && ((_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.status) === 'ON_STAGE') || !isLivestream) {
      this.removeStagePeersListeners(meeting);
    }
    this.chatUpdateListener && ((_b = meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('chatUpdate', this.chatUpdateListener));
    this.pollUpdateListener &&
      ((_c = meeting.polls) === null || _c === void 0 ? void 0 : _c.removeListener('pollsUpdate', this.pollUpdateListener));
    this.socketDisconnectedListener &&
      meeting.meta.removeListener('socketDisconnected', this.socketDisconnectedListener);
    this.socketReconnectFailureListener &&
      meeting.meta.removeListener('socketReconnectFailure', this.socketReconnectFailureListener);
    this.socketReconnectedListener &&
      meeting.meta.removeListener('socketReconnected', this.socketReconnectedListener);
    this.socketReconnectingListener &&
      meeting.meta.removeListener('socketReconnecting', this.socketReconnectingListener);
    this.socketFailureListener &&
      meeting.meta.removeListener('socketFailure', this.socketFailureListener);
    this.stageRequestAccepted &&
      ((_d = meeting.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageRequestApproved', this.stageRequestAccepted));
    this.stageRequestRejected &&
      ((_e = meeting.stage) === null || _e === void 0 ? void 0 : _e.removeListener('stageRequestRejected', this.stageRequestRejected));
    this.newStageRequests &&
      ((_f = meeting.stage) === null || _f === void 0 ? void 0 : _f.removeListener('newStageRequest', this.newStageRequests));
    this.stageStatusUpdateListener &&
      ((_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.removeListener('stageStatusUpdate', this.stageStatusUpdateListener));
    (_h = meeting.remote) === null || _h === void 0 ? void 0 : _h.removeListener('remoteUpdate', this.onRemoteUpdate);
    (_j = meeting.recording) === null || _j === void 0 ? void 0 : _j.removeListener('recordingUpdate', this.onRecordingUpdate);
    clearTimeout(this.disconnectTimeout);
  }
  disconnectedCallback() {
    var _a;
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.removeEventListener('dyteNotification', this.onDyteNotification);
    }
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.spotlightTabUpdateListener &&
      ((_a = this.meeting.spotlight) === null || _a === void 0 ? void 0 : _a.removeListener('activeTabUpdate', this.spotlightTabUpdateListener));
    this.peerRequestToJoinStateListener &&
      this.meeting.participants.joined.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    this.peerAcceptedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    this.audio = new _notification_8c0067e0_js__WEBPACK_IMPORTED_MODULE_2__.D();
    const { notifications, notification_duration, notification_sounds } = this.permissions;
    this.participantJoinedListener = (participant) => {
      if (notifications.participant_joined) {
        this.add({
          id: `${participant.id}-joined`,
          message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_12__.f)(participant.name)} just joined`,
          image: participant.picture,
          duration: notification_duration.participant_joined,
        });
      }
      if (notification_sounds.participant_joined && this.canPlayParticipantJoinedSound()) {
        this.audio.play('joined');
      }
    };
    this.participantLeftListener = (participant) => {
      if (notifications.participant_left) {
        this.add({
          id: `${participant.id}-left`,
          message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_12__.f)(participant.name)} left`,
          image: participant.picture,
          duration: notification_duration.participant_left,
        });
      }
      if (notification_sounds.participant_left && this.canPlayParticipantJoinedSound()) {
        this.audio.play('left');
      }
    };
    this.waitlistedParticipantJoinedListener = (participant) => {
      const id = `${participant.id}-joined-waitlist`;
      this.add({
        id,
        message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_12__.f)(participant.name)} is requesting to join the meeting`,
        image: participant.picture,
        duration: notification_duration.participant_joined_waitlist,
        button: {
          text: 'Accept',
          variant: 'secondary',
          onClick: async () => {
            await this.meeting.participants.acceptWaitingRoomRequest(participant.id);
            this.remove(id);
          },
        },
      });
      if (notification_sounds.participant_joined_waitlist && this.canPlayParticipantJoinedSound()) {
        this.audio.play('message');
      }
    };
    this.chatUpdateListener = ({ message }) => {
      const parsedMessage = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_6__.p)(message);
      if (parsedMessage != null) {
        if (parsedMessage.userId === meeting.self.userId) {
          return;
        }
        if (parsedMessage.type === 'text') {
          if (notifications.chat) {
            this.add({
              id: `message-${Math.random().toString(36)}`,
              icon: this.iconPack.chat,
              message: `${parsedMessage.displayName}: ${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_12__.s)(parsedMessage.message, 20)}`,
              duration: notification_duration.chat,
            });
          }
          if (notification_sounds.chat && this.canPlayChatSound()) {
            this.audio.play('message');
          }
        }
      }
    };
    this.pollUpdateListener = ({ polls, newPoll }) => {
      if (newPoll === false)
        return;
      if (notifications.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId) {
        this.add({
          id: `poll-${Math.random().toString(36)}`,
          icon: this.iconPack.poll,
          message: `New poll created by ${polls[polls.length - 1].createdBy}`,
          duration: notification_duration.polls,
        });
      }
      if (notification_sounds.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId &&
        this.canPlayChatSound()) {
        this.audio.play('message');
      }
    };
    this.deviceUpdateListener = ({ device, preview }) => {
      if (preview)
        return;
      if (device.kind === 'audiooutput') {
        this.audio.setDevice(device.deviceId);
        this.add({
          id: `speaker-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.speaker,
          duration: 5000,
        });
      }
      else if (device.kind === 'videoinput') {
        this.add({
          id: `camera-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.speaker,
          duration: 5000,
        });
      }
      else {
        this.add({
          id: `mic-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.mic_on,
          duration: 5000,
        });
      }
    };
    this.networkDisconnectedListener = () => {
      this.remove('network');
      let reconnectDuration;
      reconnectDuration = 20000;
      this.add({
        id: 'network',
        icon: this.iconPack.disconnected,
        message: this.t('Connection lost. Trying to reconnect...'),
        duration: reconnectDuration,
      });
      this.disconnectTimeout = setTimeout(() => {
        this.add({
          id: 'network-lost',
          icon: this.iconPack.disconnected,
          message: this.t('Taking too long to reconnect...'),
          button: {
            text: this.t('End Meeting'),
            variant: 'danger',
            onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
          },
        });
      }, reconnectDuration);
    };
    this.networkConnectedListener = () => {
      this.remove('network');
      let reconnectDuration;
      this.remove('network-lost');
      reconnectDuration = 3000;
      this.add({
        id: `network`,
        icon: this.iconPack.wifi,
        message: this.t('Connection restored'),
        duration: reconnectDuration,
      });
      clearTimeout(this.disconnectTimeout);
    };
    this.socketUpdateListener = ({ event, attempt }) => {
      this.remove('socket');
      if (event === 'reconnected') {
        this.remove('socketReconnecting');
        this.add({
          id: `socket`,
          icon: this.iconPack.wifi,
          message: this.t('Connection restored'),
          duration: 3000,
        });
      }
      else if (event === 'disconnected') {
        this.add({
          id: 'socket',
          icon: this.iconPack.disconnected,
          message: this.t('Connection lost'),
          duration: 3000,
        });
      }
      else if (event === 'reconnecting') {
        this.add({
          id: 'socketReconnecting',
          icon: this.iconPack.disconnected,
          message: this.t('Connection lost. Please check your network connection.'),
        });
      }
      else if (event === 'reconnectFailure') {
        if (attempt > 5) {
          this.remove('socketReconnecting');
          this.add({
            id: 'socketReconnecting',
            icon: this.iconPack.disconnected,
            message: this.t('Taking too long to reconnect. Please check your network connection.'),
            button: {
              text: this.t('End Meeting'),
              variant: 'danger',
              onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
            },
          });
        }
      }
      else if (event === 'failed') {
        this.remove('socketReconnecting');
        this.add({
          id: 'socketFailed',
          icon: this.iconPack.disconnected,
          message: this.t('Could not reconnect. Please leave the meeting and try refreshing the window.'),
        });
        this.add({
          id: 'leaveMeeting',
          icon: this.iconPack.warning,
          message: this.t(`Automatically leaving the meeting in 10 seconds.`),
        });
        setTimeout(() => {
          var _a;
          (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom('disconnected');
        }, 10000);
      }
    };
    this.spotlightTabUpdateListener = (spotlightTab) => {
      if (!notifications.tab_sync)
        return;
      switch (spotlightTab.type) {
        case 'plugin':
          const spotlightPlugin = meeting.plugins.active
            .toArray()
            .find((plugin) => plugin.id == spotlightTab.id);
          if (spotlightPlugin != undefined) {
            this.add({
              id: 'spotlight',
              message: `Plugin switched to ${spotlightPlugin.name}`,
              duration: notification_duration.participant_joined,
            });
          }
          break;
        case 'screenshare':
          const screenShareParticipant = meeting.participants.joined
            .toArray()
            .filter((participant) => participant.screenShareEnabled)
            .find((participant) => participant.id == spotlightTab.id);
          if (screenShareParticipant != undefined) {
            this.add({
              id: 'spotlight',
              message: `Now watching ${screenShareParticipant.name}'s screen`,
              duration: notification_duration.webinar,
            });
          }
          break;
      }
    };
    this.peerRequestToJoinStateListener = ({ id }) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-request-${id}`,
          message: `${participant.name} is requesting to be on stage`,
          duration: notification_duration.webinar,
          button: {
            text: 'Accept',
            variant: 'primary',
            onClick: async () => {
              await this.meeting.participants.acceptAllRequestToJoinStageRequests([
                {
                  id,
                  requestToJoinType: 'REQUEST_TO_PRESENT',
                },
              ]);
              this.remove(`webinar-request-${id}`);
            },
          },
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
    };
    this.peerAcceptedToJoinStageListener = (request) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(request.id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-accepted-${request.id}`,
          message: `Approved ${participant.name}'s request to join stage.`,
          duration: notification_duration.webinar,
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
    };
    this.peerRejectedToJoinStageListener = (request) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(request.id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-rejected-${request.id}`,
          message: `Rejected ${participant.name}'s request to join stage.`,
          duration: notification_duration.webinar,
        });
      }
    };
    this.stageRequestAccepted = () => {
      this.add({
        id: 'stage-request-accepted',
        message: 'Request to join accepted',
        duration: 3000,
      });
    };
    this.stageRequestRejected = () => {
      this.add({
        id: 'stage-request-rejected',
        message: 'Request to join rejected',
        duration: 3000,
      });
    };
    this.newStageRequests = ({ count }) => {
      this.add({
        id: 'new-stage-request',
        message: `You have ${count} pending request${count === 1 ? '' : 's'}`,
        duration: 3000,
      });
    };
    this.stageStatusUpdateListener = (status) => {
      if (status === 'ON_STAGE')
        this.addStagePeersListeners(meeting);
      else
        this.removeStagePeersListeners(meeting);
    };
    this.socketReconnectedListener = () => this.socketUpdateListener({ event: 'reconnected' });
    this.socketDisconnectedListener = () => this.socketUpdateListener({ event: 'disconnected' });
    this.socketReconnectingListener = () => this.socketUpdateListener({ event: 'reconnecting' });
    this.socketFailureListener = () => this.socketUpdateListener({ event: 'failed' });
    this.socketReconnectFailureListener = ({ attempt }) => this.socketUpdateListener({
      event: 'reconnectFailure',
      attempt,
    });
    const currentDevices = meeting.self.getCurrentDevices();
    if (currentDevices.speaker != null) {
      this.audio.setDevice(currentDevices.speaker.deviceId);
    }
    if (isLivestream)
      (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.stageStatusUpdateListener);
    else
      this.addStagePeersListeners(meeting);
    meeting.participants.joined.addListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    meeting.participants.joined.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    meeting.participants.joined.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    if (this.canAcceptWaitingRequests()) {
      meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
    }
    !(0,_flags_fc6b98fd_js__WEBPACK_IMPORTED_MODULE_7__.u)(meeting) && ((_b = meeting.chat) === null || _b === void 0 ? void 0 : _b.addListener('chatUpdate', this.chatUpdateListener));
    (_c = meeting.polls) === null || _c === void 0 ? void 0 : _c.addListener('pollsUpdate', this.pollUpdateListener);
    meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
    meeting.meta.addListener('socketReconnected', this.socketReconnectedListener);
    meeting.meta.addListener('socketDisconnected', this.socketDisconnectedListener);
    meeting.meta.addListener('socketReconnecting', this.socketReconnectingListener);
    meeting.meta.addListener('socketFailure', this.socketFailureListener);
    meeting.meta.addListener('socketReconnectFailure', this.socketReconnectFailureListener);
    (_d = meeting.remote) === null || _d === void 0 ? void 0 : _d.addListener('remoteUpdate', this.onRemoteUpdate);
    (_e = meeting.spotlight) === null || _e === void 0 ? void 0 : _e.addListener('activeTabUpdate', this.spotlightTabUpdateListener);
    (_f = meeting.recording) === null || _f === void 0 ? void 0 : _f.addListener('recordingUpdate', this.onRecordingUpdate);
    (_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.addListener('stageRequestApproved', this.stageRequestAccepted);
    (_h = meeting.stage) === null || _h === void 0 ? void 0 : _h.addListener('stageRequestRejected', this.stageRequestRejected);
    if (meeting.self.permissions.acceptPresentRequests)
      (_j = meeting.stage) === null || _j === void 0 ? void 0 : _j.addListener('newStageRequest', this.newStageRequests);
  }
  configChanged(config) {
    if (config != null) {
      if ((config === null || config === void 0 ? void 0 : config.config) != null) {
        this.permissions = parseConfig(config.config);
        this.enabledSounds = getEnabledSounds(this.permissions.notification_sounds);
      }
    }
  }
  statesChanged(states) {
    var _a;
    if (states != null) {
      const notificationSoundsEnabled = !((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds);
      // toggle only the notification sounds values which were enabled in the first place
      for (const permission of this.enabledSounds) {
        if (permission in this.permissions.notification_sounds) {
          this.permissions.notification_sounds[permission] = notificationSoundsEnabled;
        }
      }
    }
  }
  apiErrorListener({ detail }) {
    const { trace, message } = detail;
    this.add({
      id: trace,
      message,
      duration: DEFAULT_NOTIFICATION_DURATION,
      icon: this.iconPack.warning,
    });
  }
  add(notification) {
    // show notifications only if tab is in focus and a maximum of 5 at a time
    if (document.visibilityState === 'visible' && this.notifications.length < 5) {
      // adds new notification to start of array so they appear at the bottom
      this.notifications = [...this.notifications, notification];
    }
  }
  remove(id) {
    this.notifications = this.notifications.filter((notification) => notification.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  canPlayParticipantJoinedSound() {
    return (this.permissions.participant_joined_sound_notification_limit == undefined ||
      this.permissions.participant_joined_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_joined_sound_notification_limit);
  }
  canPlayChatSound() {
    return (this.permissions.participant_chat_message_sound_notification_limit == undefined ||
      this.permissions.participant_chat_message_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_chat_message_sound_notification_limit);
  }
  canAcceptWaitingRequests() {
    return (this.permissions.notifications.participant_joined_waitlist &&
      this.meeting.self.permissions.acceptWaitingRequests);
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.notifications.map((notification) => ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notification", { size: this.size, key: notification.id, "data-id": notification.id, notification: notification, onDyteNotificationDismiss: (e) => this.handleDismiss(e), iconPack: this.iconPack, t: this.t })))));
  }
  get host() { return (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "config": ["configChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteNotifications.style = dyteNotificationsCss;




/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FlagsmithFeatureFlags),
/* harmony export */   "i": () => (/* binding */ isBreakoutRoomsEnabled),
/* harmony export */   "u": () => (/* binding */ usePaginatedChat)
/* harmony export */ });
/* harmony import */ var _livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50528);


const FlagsmithFeatureFlags = {
  PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE: 'play_participant_tile_video_on_pause',
  DISABLE_EMOJI_PICKER: 'disable_emoji_picker',
  FEAT_PAGINATED_CHAT: 'feat_paginated_chat',
  LOG_PLAYING_FAILURES: 'log_playing_failures',
};
const isBreakoutRoomsEnabled = (meeting) => meeting.connectedMeetings.supportsConnectedMeetings;
const usePaginatedChat = (meeting) => { var _a; return (0,_livestream_2f88cfb2_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) || ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.__internals__) === null || _a === void 0 ? void 0 : _a.features.hasFeature('feat_paginated_chat')); };




/***/ }),

/***/ 50528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PlayerState),
/* harmony export */   "a": () => (/* binding */ isLiveStreamHost),
/* harmony export */   "b": () => (/* binding */ canRequestToJoinStage),
/* harmony export */   "c": () => (/* binding */ canJoinStage),
/* harmony export */   "d": () => (/* binding */ PlayerEventType),
/* harmony export */   "e": () => (/* binding */ awsIvsPlayerEventsToIgnore),
/* harmony export */   "f": () => (/* binding */ isIvsPlayerCallStatsEvent),
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
const isIvsPlayerCallStatsEvent = [
  // CallStats Major Events
  PlayerEventType.REBUFFERING,
  PlayerEventType.AUDIO_BLOCKED,
  PlayerEventType.PLAYBACK_BLOCKED,
  PlayerEventType.ERROR,
  PlayerEventType.RECOVERABLE_ERROR,
  PlayerEventType.WORKER_ERROR,
  // According to docs it says:
  // "Indicates that a playback unavailable event occurred."
  //
  // So I am taking a guess this can occcur
  // even when a viewer is online
  PlayerEventType.NETWORK_UNAVAILABLE,
  // CallStats Minor Events
  PlayerEventType.ANALYTICS_EVENT,
  PlayerEventType.PLAYBACK_RATE_CHANGED,
  PlayerEventType.QUALITY_CHANGED,
  PlayerEventType.INITIALIZED, // no payload
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




/***/ }),

/***/ 22906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ sanitizeLink),
/* harmony export */   "f": () => (/* binding */ formatName),
/* harmony export */   "g": () => (/* binding */ getInitials),
/* harmony export */   "h": () => (/* binding */ hasOnlyEmojis),
/* harmony export */   "s": () => (/* binding */ shorten)
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