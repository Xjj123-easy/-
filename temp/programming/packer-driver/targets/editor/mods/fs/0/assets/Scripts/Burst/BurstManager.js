System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UITransform, _decorator, EVENTMANAGER, ENTINY_STATE_ENUM, SHAKE_DIRECTION_ENMU, EnityManger, TILE_HEIGHT, TILE_WIDTH, DataManager, EventManager, BurstMachine, _dec, _class, _crd, ccclass, property, BurstManager;

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_DIRECTION_ENMU(extras) {
    _reporterNs.report("SHAKE_DIRECTION_ENMU", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstMachine(extras) {
    _reporterNs.report("BurstMachine", "./BurstMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
      SHAKE_DIRECTION_ENMU = _unresolved_2.SHAKE_DIRECTION_ENMU;
    }, function (_unresolved_3) {
      EnityManger = _unresolved_3.EnityManger;
      TILE_HEIGHT = _unresolved_3.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_3.TILE_WIDTH;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      BurstMachine = _unresolved_6.BurstMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "750e5R14QdIl5dzpbQjYWQv", "BurstManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BurstManager", BurstManager = (_dec = ccclass('BurstManager'), _dec(_class = class BurstManager extends (_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
        error: Error()
      }), EnityManger) : EnityManger) {
        async init(params) {
          this.fsm = this.addComponent(_crd && BurstMachine === void 0 ? (_reportPossibleCrUseOfBurstMachine({
            error: Error()
          }), BurstMachine) : BurstMachine);
          await this.fsm.init();
          super.init(params);
          this.transfrom = this.getComponent(UITransform);
          this.transfrom.setContentSize(_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH, _crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.onBurst, this);
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.onBurst);
        }

        update() {
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH), -this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT));
        }
        /**
         * isInit 判断初始化
         * changeDirection 改变敌人放向
         * 通过对比敌人坐标跟player坐标在哪个象限
         * dix diy 表示偏远量 靠近x轴 还是靠近y轴
         */


        onBurst() {
          if ((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player === null) return;
          const {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;

          if (this.x === playerX && this.y === playerY && this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE) {
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
          } else if (this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK) {
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
              error: Error()
            }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM);

            if (this.x === playerX && this.y === playerY) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).AIRDEATH);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BurstManager.js.map