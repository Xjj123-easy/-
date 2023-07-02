System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EnityManger, SmokeMachine, _dec, _class, _crd, ccclass, SmokeManager;

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeMachine(extras) {
    _reporterNs.report("SmokeMachine", "./SmokeMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EnityManger = _unresolved_2.EnityManger;
    }, function (_unresolved_3) {
      SmokeMachine = _unresolved_3.SmokeMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e225WTbEBD5rG6RTAlJTC6", "SmokeManager", undefined);

      ({
        ccclass
      } = _decorator);

      _export("SmokeManager", SmokeManager = (_dec = ccclass('SmokeManager'), _dec(_class = class SmokeManager extends (_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
        error: Error()
      }), EnityManger) : EnityManger) {
        async init(params) {
          this.fsm = this.addComponent(_crd && SmokeMachine === void 0 ? (_reportPossibleCrUseOfSmokeMachine({
            error: Error()
          }), SmokeMachine) : SmokeMachine);
          await this.fsm.init();
          super.init(params);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SmokeManager.js.map