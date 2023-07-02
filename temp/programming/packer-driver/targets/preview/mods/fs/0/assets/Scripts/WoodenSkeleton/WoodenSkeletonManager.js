System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EVENTMANAGER, ENTINY_STATE_ENUM, EnemyManager, DataManager, EventManager, WoodenSkeletonSubMachine, _dec, _class, _crd, ccclass, property, WoodenSkeletonManager;

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

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenSkeletonSubMachine(extras) {
    _reporterNs.report("WoodenSkeletonSubMachine", "./WoodenSkeletonSubMachine", _context.meta, extras);
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
      EnemyManager = _unresolved_3.EnemyManager;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      WoodenSkeletonSubMachine = _unresolved_6.WoodenSkeletonSubMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cba5GIPCRGkaa22tDT4XG0", "WoodenSkeletonManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WoodenSkeletonManager", WoodenSkeletonManager = (_dec = ccclass('WoodenSkeletonManager'), _dec(_class = class WoodenSkeletonManager extends (_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager) {
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && WoodenSkeletonSubMachine === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonSubMachine({
              error: Error()
            }), WoodenSkeletonSubMachine) : WoodenSkeletonSubMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, _this.onAttack, _this);
          })();
        }

        update() {
          super.update();
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.onAttack);
        }
        /**
         * isInit 判断初始化
         * changeDirection 改变敌人放向
         * 通过对比敌人坐标跟player坐标在哪个象限
         * dix diy 表示偏远量 靠近x轴 还是靠近y轴
         */


        onAttack() {
          if (this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            return;
          }

          var {
            x: playerX,
            y: playerY,
            state: playState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;

          if ((this.x === playerX && Math.abs(this.y - playerY) <= 1 || this.y === playerY && Math.abs(this.x - playerX) <= 1) && playState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).AIRDEATH && playState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);
            console.log(this.x === playerX && Math.abs(this.y - playerY) <= 1);
            console.log(this.y === playerY && Math.abs(this.x - playerX) <= 1);
            console.log(playState);
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
          } else {
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=WoodenSkeletonManager.js.map