System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRIECTION_ENUM, State, IdleTurnStateMachie, DoorSubStateMachines, _crd, BaseUrl;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "265b9ze/OdHBbo/+dxkHr1M", "DoorIdleSubStateMachines", undefined);

      BaseUrl = 'texture/door/idle';

      _export("default", DoorSubStateMachines = class DoorSubStateMachines extends (_crd && IdleTurnStateMachie === void 0 ? (_reportPossibleCrUseOfIdleTurnStateMachie({
        error: Error()
      }), IdleTurnStateMachie) : IdleTurnStateMachie) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BaseUrl}/top`));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BaseUrl}/top`));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BaseUrl}/left`));
          this.stateMachine.set((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
            error: Error()
          }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BaseUrl}/left`));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DoorIdleSubStateMachines.js.map