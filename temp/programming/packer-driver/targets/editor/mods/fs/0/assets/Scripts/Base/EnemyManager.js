System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EVENTMANAGER, DRIECTION_ENUM, ENTINY_STATE_ENUM, EnityManger, EventManager, DataManager, EnemyManager, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, ANIMATION_SPEED;

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "./EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  _export("EnemyManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      DRIECTION_ENUM = _unresolved_2.DRIECTION_ENUM;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
    }, function (_unresolved_3) {
      EnityManger = _unresolved_3.EnityManger;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7318dpa/M5P3qX/oKJCXRhe", "EnemyManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("ANIMATION_SPEED", ANIMATION_SPEED = 1 / 8);

      _export("EnemyManager", EnemyManager = class EnemyManager extends (_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
        error: Error()
      }), EnityManger) : EnityManger) {
        async init(params) {
          super.init(params);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.changeDirection, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYER_BORN, this.changeDirection, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).ATTACK_ENEMY, this.onDead, this);
          this.changeDirection(true);
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.changeDirection);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYER_BORN, this.changeDirection);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).ATTACK_ENEMY, this.onDead);
          this.destroy();
        }
        /**
         * isInit 判断初始化
         * changeDirection 改变敌人放向
         * 通过对比敌人坐标跟player坐标在哪个象限
         * dix diy 表示偏远量 靠近x轴 还是靠近y轴
         */


        changeDirection(isInit = false) {
          if (!(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player || this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            return;
          }

          const {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;
          const dix = Math.abs(this.x - playerX);
          const diy = Math.abs(this.y - playerY);

          if (dix === diy && !isInit) {
            return;
          }

          if (playerX >= this.x && playerY <= this.y) {
            this.direction = diy > dix ? (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP : (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT;
          } else if (playerX <= this.x && playerY <= this.y) {
            this.direction = diy > dix ? (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP : (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT;
          } else if (playerX >= this.x && playerY >= this.y) {
            this.direction = diy > dix ? (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM : (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT;
          } else if (playerX <= this.x && playerY >= this.y) {
            this.direction = diy > dix ? (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM : (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT;
          }
        }

        onDead(id) {
          if (this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            return;
          }

          if (id === this.id) {
            this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnemyManager.js.map