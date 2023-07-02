System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRIECTION_ENUM, State, IdleTurnStateMachie, ANIMATION_SPEED, SmokeIdleStateMachines, _crd, BaseUrl;

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdleTurnStateMachie(extras) {
    _reporterNs.report("IdleTurnStateMachie", "../Base/IdleTurnStateMachie", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIMATION_SPEED(extras) {
    _reporterNs.report("ANIMATION_SPEED", "../Base/EnityManger", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRIECTION_ENUM = _unresolved_2.DRIECTION_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.State;
    }, function (_unresolved_4) {
      IdleTurnStateMachie = _unresolved_4.IdleTurnStateMachie;
    }, function (_unresolved_5) {
      ANIMATION_SPEED = _unresolved_5.ANIMATION_SPEED;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a757I4WfRP0IeUOGe9JQYp", "SmokeIdleStateMachines", undefined);

      BaseUrl = 'texture/smoke/idle';

      _export("default", SmokeIdleStateMachines = class SmokeIdleStateMachines extends (_crd && IdleTurnStateMachie === void 0 ? (_reportPossibleCrUseOfIdleTurnStateMachie({
        error: Error()
      }), IdleTurnStateMachie) : IdleTurnStateMachie) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/top", (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/bottom", (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/left", (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/right", (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SmokeIdleStateMachines.js.map