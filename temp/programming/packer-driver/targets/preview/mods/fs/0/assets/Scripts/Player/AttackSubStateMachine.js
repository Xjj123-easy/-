System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRIECTION_ENUM, SHAKE_DIRECTION_ENMU, State, IdleTurnStateMachie, ANIMATION_SPEED, AnimationClip, AttackSubStateMachine, _crd, BaseUrl;

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_DIRECTION_ENMU(extras) {
    _reporterNs.report("SHAKE_DIRECTION_ENMU", "../../Enums", _context.meta, extras);
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
    _reporterNs.report("ANIMATION_SPEED", "./PlayerManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      DRIECTION_ENUM = _unresolved_2.DRIECTION_ENUM;
      SHAKE_DIRECTION_ENMU = _unresolved_2.SHAKE_DIRECTION_ENMU;
    }, function (_unresolved_3) {
      State = _unresolved_3.State;
    }, function (_unresolved_4) {
      IdleTurnStateMachie = _unresolved_4.IdleTurnStateMachie;
    }, function (_unresolved_5) {
      ANIMATION_SPEED = _unresolved_5.ANIMATION_SPEED;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8d60H2YZ5IL5JjcC9kbckN", "AttackSubStateMachine", undefined);

      BaseUrl = 'texture/player/attack';

      _export("default", AttackSubStateMachine = class AttackSubStateMachine extends (_crd && IdleTurnStateMachie === void 0 ? (_reportPossibleCrUseOfIdleTurnStateMachie({
        error: Error()
      }), IdleTurnStateMachie) : IdleTurnStateMachie) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/top", AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
              error: Error()
            }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).TOP]
          }]));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/bottom", AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
              error: Error()
            }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM]
          }]));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/left", AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
              error: Error()
            }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).LEFT]
          }]));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BaseUrl + "/right", AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
              error: Error()
            }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).RIGHT]
          }]));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AttackSubStateMachine.js.map