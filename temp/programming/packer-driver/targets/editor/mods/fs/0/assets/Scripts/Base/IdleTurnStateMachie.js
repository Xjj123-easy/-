System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM, SubStateMachine, _decorator, _dec, _class, _crd, ccclass, property, IdleTurnStateMachie;

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "./SubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
    }, function (_unresolved_3) {
      SubStateMachine = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d78czaVUFBkpPfXyHtpwOx", "IdleTurnStateMachie", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IdleTurnStateMachie", IdleTurnStateMachie = (_dec = ccclass('IdleTurnStateMachie'), _dec(_class = class IdleTurnStateMachie extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          const value = this.fsm.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DRIECTION);
          this.currentState = this.stateMachine.get((_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[value]);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IdleTurnStateMachie.js.map