System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EnemyManager, IronskeletonManagerSubMachine, _dec, _class, _crd, ccclass, property, IronskeletonManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronskeletonManagerSubMachine(extras) {
    _reporterNs.report("IronskeletonManagerSubMachine", "./IronskeletonManagerSubMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EnemyManager = _unresolved_2.EnemyManager;
    }, function (_unresolved_3) {
      IronskeletonManagerSubMachine = _unresolved_3.IronskeletonManagerSubMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c852vVVTpKRalIIp8YlLCO", "IronskeletonManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronskeletonManager", IronskeletonManager = (_dec = ccclass('IronskeletonManager'), _dec(_class = class IronskeletonManager extends (_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager) {
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && IronskeletonManagerSubMachine === void 0 ? (_reportPossibleCrUseOfIronskeletonManagerSubMachine({
              error: Error()
            }), IronskeletonManagerSubMachine) : IronskeletonManagerSubMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);
          })();
        }
        /**
         * isInit 判断初始化
         * changeDirection 改变敌人放向
         * 通过对比敌人坐标跟player坐标在哪个象限
         * dix diy 表示偏远量 靠近x轴 还是靠近y轴
         */


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IronskeletonManager.js.map