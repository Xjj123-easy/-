System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EVENTMANAGER, ENTINY_STATE_ENUM, EnityManger, DataManager, EventManager, DoorSubMachine, _dec, _class, _crd, ccclass, property, DoorManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorSubMachine(extras) {
    _reporterNs.report("DoorSubMachine", "./DoorSubMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
    }, function (_unresolved_3) {
      EnityManger = _unresolved_3.EnityManger;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      DoorSubMachine = _unresolved_6.DoorSubMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52c73qWQ25FjY17wqP77wgL", "DoorManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DoorManager", DoorManager = (_dec = ccclass('DoorManager'), _dec(_class = class DoorManager extends (_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
        error: Error()
      }), EnityManger) : EnityManger) {
        init(param) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && DoorSubMachine === void 0 ? (_reportPossibleCrUseOfDoorSubMachine({
              error: Error()
            }), DoorSubMachine) : DoorSubMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, param);

            _this.state = param.state;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).DOOR_OPEN, _this.onOpen, _this);
          })();
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).DOOR_OPEN, this.onOpen);
        }

        update() {
          super.update();
        }
        /**
         * isInit 判断初始化
         * changeDirection 改变敌人放向
         * 通过对比敌人坐标跟player坐标在哪个象限
         * dix diy 表示偏远量 靠近x轴 还是靠近y轴
         */


        onOpen() {
          if (!(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes) return;

          if ((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes.every(enemy => enemy.state === 'DEATH') && this.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            //
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DoorManager.js.map