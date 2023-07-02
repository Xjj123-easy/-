System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CONTROLLER_ENMU, EVENTMANAGER, DRIECTION_ENUM, ENTINY_STATE_ENUM, SHAKE_DIRECTION_ENMU, EventManager, PlayerStateMachine, EnityManger, DataManager, MusicManager, _dec, _class, _temp, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, ANIMATION_SPEED, PlayerManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCONTROLLER_ENMU(extras) {
    _reporterNs.report("CONTROLLER_ENMU", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_DIRECTION_ENMU(extras) {
    _reporterNs.report("SHAKE_DIRECTION_ENMU", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "./PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "../RunTime/MusicManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CONTROLLER_ENMU = _unresolved_2.CONTROLLER_ENMU;
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      DRIECTION_ENUM = _unresolved_2.DRIECTION_ENUM;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
      SHAKE_DIRECTION_ENMU = _unresolved_2.SHAKE_DIRECTION_ENMU;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      PlayerStateMachine = _unresolved_4.PlayerStateMachine;
    }, function (_unresolved_5) {
      EnityManger = _unresolved_5.EnityManger;
    }, function (_unresolved_6) {
      DataManager = _unresolved_6.default;
    }, function (_unresolved_7) {
      MusicManager = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f53adYigDhI3bbjulOae/Qf", "PlayerManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("ANIMATION_SPEED", ANIMATION_SPEED = 1 / 8);

      _export("PlayerManager", PlayerManager = (_dec = ccclass('PlayerManager'), _dec(_class = (_temp = class PlayerManager extends (_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
        error: Error()
      }), EnityManger) : EnityManger) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "speeed", 1 / 10);

          _defineProperty(this, "isMoveing", false);

          _defineProperty(this, "targetX", void 0);

          _defineProperty(this, "targetY", void 0);

          _defineProperty(this, "clip", []);
        }

        async init(params) {
          this.fsm = this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine);
          await this.fsm.init();
          super.init(params);
          this.targetX = this.x;
          this.targetY = this.y;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYER_CONTROLLER, this.inputhandler, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, this.Dead, this);
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYER_CONTROLLER, this.inputhandler);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, this.Dead);
        }

        onAttackShake(type) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, type);
        }

        update() {
          super.update();
          this.updateXY();
        }

        updateXY() {
          if (this.x < this.targetX) {
            this.x += this.speeed;
          } else if (this.x > this.targetX) {
            this.x -= this.speeed;
          }

          if (this.y < this.targetY) {
            this.y += this.speeed;
          } else if (this.y > this.targetY) {
            this.y -= this.speeed;
          }

          if (Math.abs(this.x - this.targetX) <= 0.01 && Math.abs(this.y - this.targetY) <= 0.01 && this.isMoveing === true) {
            this.x = this.targetX;
            this.y = this.targetY;
            this.isMoveing = false;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END);
          }
        }

        inputhandler(inputs, clip) {
          this.clip = clip;

          if (this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).AIRDEATH || this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH || this.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK) {
            return;
          }

          if (this.isMoveing) {
            return;
          }

          const id = this.willAttack(inputs);

          if (id) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).RECORD_STEP);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).ATTACK_ENEMY, id);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).DOOR_OPEN);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END);
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).Instance.sound(clip[1]);
            return;
          }

          if (this.willblock(inputs)) {
            if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).TOP);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).LEFT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).RIGHT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).LEFT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).RIGHT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).TOP);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).RIGHT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).TOP);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).LEFT);
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM);
            }

            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).Instance.sound(clip[2]);
            return;
          }

          this.move(inputs);
          (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
            error: Error()
          }), MusicManager) : MusicManager).Instance.sound(clip[0]);
        }
        /**
         *
         *  死亡
         */


        Dead(type, ctx) {
          this.state = type;
          (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
            error: Error()
          }), MusicManager) : MusicManager).Instance.sound(this.clip[3]);
        }
        /**
         * 移动
         * @param inputs
         */


        move(inputs) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).RECORD_STEP);

          switch (inputs) {
            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TOP:
              this.targetY -= 1;
              this.isMoveing = true;
              this.showsmoke((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP);
              break;

            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).BOTTOM:
              this.targetY += 1;
              this.isMoveing = true;
              this.showsmoke((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM);
              break;

            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).LEFT:
              this.targetX -= 1;
              this.isMoveing = true;
              this.showsmoke((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT);
              break;

            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).RIGHT:
              this.targetX += 1;
              this.isMoveing = true;
              this.showsmoke((_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT);
              break;

            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT:
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).TURN_LEFT;

              if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP;
              }

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END);
              break;

            case (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT:
              if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT;
              } else if (this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                error: Error()
              }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
                this.direction = (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
                  error: Error()
                }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT;
              }

              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).TURN_RIGHT;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
                error: Error()
              }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END);
              break;

            default:
              break;
          }
        }

        willblock(inputs) {
          const {
            targetX: x,
            targetY: y,
            direction
          } = this;
          const {
            tileInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const {
            mapRowCount: row,
            mapColumnCount: column
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door || {};
          const burst = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.burst.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);
          const enemes = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH); //按钮方向——向上

          if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TOP) {
            const playerNextY = y - 1; //玩家方向——向上

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$x, _tileInfo$x2;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextY = y - 2;
              const nextPlayerTile = (_tileInfo$x = tileInfo[x]) === null || _tileInfo$x === void 0 ? void 0 : _tileInfo$x[playerNextY];
              const nextWeaponTile = (_tileInfo$x2 = tileInfo[x]) === null || _tileInfo$x2 === void 0 ? void 0 : _tileInfo$x2[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === x && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || enemyX === x && weaponNextY === enemyY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$x3, _tileInfo$x4;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextY = y;
              const nextPlayerTile = (_tileInfo$x3 = tileInfo[x]) === null || _tileInfo$x3 === void 0 ? void 0 : _tileInfo$x3[playerNextY];
              const nextWeaponTile = (_tileInfo$x4 = tileInfo[x]) === null || _tileInfo$x4 === void 0 ? void 0 : _tileInfo$x4[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === x && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$x5, _tileInfo$weaponNextX;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$x5 = tileInfo[x]) === null || _tileInfo$x5 === void 0 ? void 0 : _tileInfo$x5[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX === void 0 ? void 0 : _tileInfo$weaponNextX[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || weaponNextY === enemyY && enemyX === weaponNextX) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$x6, _tileInfo$weaponNextX2;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$x6 = tileInfo[x]) === null || _tileInfo$x6 === void 0 ? void 0 : _tileInfo$x6[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX2 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX2 === void 0 ? void 0 : _tileInfo$weaponNextX2[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || weaponNextY === enemyY && enemyX === weaponNextX) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } //按钮方向——向下

          } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).BOTTOM) {
            const playerNextY = y + 1; //玩家方向——向上

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$x7, _tileInfo$x8;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextY = y;
              const nextPlayerTile = (_tileInfo$x7 = tileInfo[x]) === null || _tileInfo$x7 === void 0 ? void 0 : _tileInfo$x7[playerNextY];
              const nextWeaponTile = (_tileInfo$x8 = tileInfo[x]) === null || _tileInfo$x8 === void 0 ? void 0 : _tileInfo$x8[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === x && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$x9, _tileInfo$x10;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextY = y + 2;
              const nextPlayerTile = (_tileInfo$x9 = tileInfo[x]) === null || _tileInfo$x9 === void 0 ? void 0 : _tileInfo$x9[playerNextY];
              const nextWeaponTile = (_tileInfo$x10 = tileInfo[x]) === null || _tileInfo$x10 === void 0 ? void 0 : _tileInfo$x10[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === x && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || enemyX === x && weaponNextY === enemyY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$x11, _tileInfo$weaponNextX3;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$x11 = tileInfo[x]) === null || _tileInfo$x11 === void 0 ? void 0 : _tileInfo$x11[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX3 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX3 === void 0 ? void 0 : _tileInfo$weaponNextX3[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$x12, _tileInfo$weaponNextX4;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$x12 = tileInfo[x]) === null || _tileInfo$x12 === void 0 ? void 0 : _tileInfo$x12[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX4 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX4 === void 0 ? void 0 : _tileInfo$weaponNextX4[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (playerNextY === enemyY && enemyX === x || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            } //按钮方向——向左

          } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).LEFT) {
            const playerNextX = x - 1; //玩家方向——向上

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$playerNextX, _tileInfo$weaponNextX5;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$playerNextX = tileInfo[playerNextX]) === null || _tileInfo$playerNextX === void 0 ? void 0 : _tileInfo$playerNextX[y];
              const nextWeaponTile = (_tileInfo$weaponNextX5 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX5 === void 0 ? void 0 : _tileInfo$weaponNextX5[weaponNextY]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX2, _tileInfo$weaponNextX6;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$playerNextX2 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX2 === void 0 ? void 0 : _tileInfo$playerNextX2[y];
              const nextWeaponTile = (_tileInfo$weaponNextX6 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX6 === void 0 ? void 0 : _tileInfo$weaponNextX6[weaponNextY]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX3, _tileInfo$weaponNextX7;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x - 2;
              const nextPlayerTile = (_tileInfo$playerNextX3 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX3 === void 0 ? void 0 : _tileInfo$playerNextX3[y];
              const nextWeaponTile = (_tileInfo$weaponNextX7 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX7 === void 0 ? void 0 : _tileInfo$weaponNextX7[y]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX4, _tileInfo$weaponNextX8;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileInfo$playerNextX4 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX4 === void 0 ? void 0 : _tileInfo$playerNextX4[y];
              const nextWeaponTile = (_tileInfo$weaponNextX8 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX8 === void 0 ? void 0 : _tileInfo$weaponNextX8[y]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } //按钮方向——向右

          } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).RIGHT) {
            const playerNextX = x + 1; //玩家方向——向上

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$playerNextX5, _tileInfo$weaponNextX9;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$playerNextX5 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX5 === void 0 ? void 0 : _tileInfo$playerNextX5[y];
              const nextWeaponTile = (_tileInfo$weaponNextX9 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX9 === void 0 ? void 0 : _tileInfo$weaponNextX9[weaponNextY]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX6, _tileInfo$weaponNextX10;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$playerNextX6 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX6 === void 0 ? void 0 : _tileInfo$playerNextX6[y];
              const nextWeaponTile = (_tileInfo$weaponNextX10 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX10 === void 0 ? void 0 : _tileInfo$weaponNextX10[weaponNextY]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === weaponNextY) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX7, _tileInfo$weaponNextX11;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileInfo$playerNextX7 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX7 === void 0 ? void 0 : _tileInfo$playerNextX7[y];
              const nextWeaponTile = (_tileInfo$weaponNextX11 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX11 === void 0 ? void 0 : _tileInfo$weaponNextX11[y]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX8, _tileInfo$weaponNextX12;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x + 2;
              const nextPlayerTile = (_tileInfo$playerNextX8 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX8 === void 0 ? void 0 : _tileInfo$playerNextX8[y];
              const nextWeaponTile = (_tileInfo$weaponNextX12 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX12 === void 0 ? void 0 : _tileInfo$weaponNextX12[y]; //判断门

              if ((y === doorY && doorX === playerNextX || doorX === weaponNextX && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemes.length; i++) {
                const enemy = enemes[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (y === enemyY && enemyX === playerNextX || enemyX === weaponNextX && enemyY === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } //按钮方向——左转

          } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_LEFT) {
            var _tileInfo$x13, _tileInfo$x14, _tileInfo$x14$nextY, _tileInfo$nextX, _tileInfo$nextX2, _tileInfo$nextX2$y, _tileInfo$nextX3, _tileInfo$nextX4, _tileInfo$nextX4$next;

            let nextX;
            let nextY;

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              nextX = x - 1;
              nextY = y - 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              nextX = x + 1;
              nextY = y + 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              nextX = x - 1;
              nextY = y + 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              nextX = x + 1;
              nextY = y - 1;
            }
            /**
             * 判断旋转砖块是否存在
             */


            if ((!((_tileInfo$x13 = tileInfo[x]) === null || _tileInfo$x13 === void 0 ? void 0 : _tileInfo$x13[nextY]) || ((_tileInfo$x14 = tileInfo[x]) === null || _tileInfo$x14 === void 0 ? void 0 : (_tileInfo$x14$nextY = _tileInfo$x14[nextY]) === null || _tileInfo$x14$nextY === void 0 ? void 0 : _tileInfo$x14$nextY.turnable)) && (!((_tileInfo$nextX = tileInfo[nextX]) === null || _tileInfo$nextX === void 0 ? void 0 : _tileInfo$nextX[y]) || ((_tileInfo$nextX2 = tileInfo[nextX]) === null || _tileInfo$nextX2 === void 0 ? void 0 : (_tileInfo$nextX2$y = _tileInfo$nextX2[y]) === null || _tileInfo$nextX2$y === void 0 ? void 0 : _tileInfo$nextX2$y.turnable)) && (!((_tileInfo$nextX3 = tileInfo[nextX]) === null || _tileInfo$nextX3 === void 0 ? void 0 : _tileInfo$nextX3[nextY]) || ((_tileInfo$nextX4 = tileInfo[nextX]) === null || _tileInfo$nextX4 === void 0 ? void 0 : (_tileInfo$nextX4$next = _tileInfo$nextX4[nextY]) === null || _tileInfo$nextX4$next === void 0 ? void 0 : _tileInfo$nextX4$next.turnable))) {//
            } else {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //判断门


            if (doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && nextY === doorY && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
              //
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //判断敌人


            for (let i = 0; i < enemes.length; i++) {
              const enemy = enemes[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (x === enemyX && enemyY === nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (nextX === enemyX && enemyY === y) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (nextX === enemyX && enemyY === nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
            }
          } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TURN_RIGHT) {
            var _tileInfo$x15, _tileInfo$x16, _tileInfo$x16$nextY, _tileInfo$nextX5, _tileInfo$nextX6, _tileInfo$nextX6$y, _tileInfo$nextX7, _tileInfo$nextX8, _tileInfo$nextX8$next;

            let nextX;
            let nextY;

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              nextX = x + 1;
              nextY = y - 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              nextX = x - 1;
              nextY = y + 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              nextX = x - 1;
              nextY = y - 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              nextX = x + 1;
              nextY = y + 1;
            } //判断门


            if (doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && nextY === doorY && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
              //
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断敌人


            for (let i = 0; i < enemes.length; i++) {
              const enemy = enemes[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (x === enemyX && enemyY === nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (nextX === enemyX && enemyY === y) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (nextX === enemyX && enemyY === nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            }

            if ((!((_tileInfo$x15 = tileInfo[x]) === null || _tileInfo$x15 === void 0 ? void 0 : _tileInfo$x15[nextY]) || ((_tileInfo$x16 = tileInfo[x]) === null || _tileInfo$x16 === void 0 ? void 0 : (_tileInfo$x16$nextY = _tileInfo$x16[nextY]) === null || _tileInfo$x16$nextY === void 0 ? void 0 : _tileInfo$x16$nextY.turnable)) && (!((_tileInfo$nextX5 = tileInfo[nextX]) === null || _tileInfo$nextX5 === void 0 ? void 0 : _tileInfo$nextX5[y]) || ((_tileInfo$nextX6 = tileInfo[nextX]) === null || _tileInfo$nextX6 === void 0 ? void 0 : (_tileInfo$nextX6$y = _tileInfo$nextX6[y]) === null || _tileInfo$nextX6$y === void 0 ? void 0 : _tileInfo$nextX6$y.turnable)) && (!((_tileInfo$nextX7 = tileInfo[nextX]) === null || _tileInfo$nextX7 === void 0 ? void 0 : _tileInfo$nextX7[nextY]) || ((_tileInfo$nextX8 = tileInfo[nextX]) === null || _tileInfo$nextX8 === void 0 ? void 0 : (_tileInfo$nextX8$next = _tileInfo$nextX8[nextY]) === null || _tileInfo$nextX8$next === void 0 ? void 0 : _tileInfo$nextX8$next.turnable))) {//
            } else {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            }
          }
        }

        showsmoke(direction) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SMOKE_SHOW, direction, this.x, this.y);
        }

        willAttack(inputs) {
          const enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);

          for (let i = 0; i < enemies.length; i++) {
            const {
              x: enemyX,
              y: enemyY,
              id
            } = enemies[i];

            if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TOP && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP && this.x === enemyX && this.targetY - 2 === enemyY) {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).BOTTOM && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM && this.x === enemyX && this.targetY + 2 === enemyY) {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).LEFT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT && this.x - 2 === enemyX && this.targetY === enemyY) {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
              error: Error()
            }), CONTROLLER_ENMU) : CONTROLLER_ENMU).RIGHT && this.direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT && this.x + 2 === enemyX && this.targetY === enemyY) {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).ATTACK;
              return id;
            } else {
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE;
            }
          }

          return '';
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerManager.js.map