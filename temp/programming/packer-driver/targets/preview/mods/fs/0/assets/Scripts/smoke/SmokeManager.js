System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EnityManger, SmokeMachine, _dec, _class, _crd, ccclass, SmokeManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && SmokeMachine === void 0 ? (_reportPossibleCrUseOfSmokeMachine({
              error: Error()
            }), SmokeMachine) : SmokeMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SmokeManager.js.map