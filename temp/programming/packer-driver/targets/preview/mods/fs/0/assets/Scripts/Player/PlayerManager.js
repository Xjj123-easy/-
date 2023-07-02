System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CONTROLLER_ENMU, EVENTMANAGER, DRIECTION_ENUM, ENTINY_STATE_ENUM, SHAKE_DIRECTION_ENMU, EventManager, PlayerStateMachine, EnityManger, DataManager, MusicManager, _dec, _class, _temp, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, ANIMATION_SPEED, PlayerManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);

          _defineProperty(this, "speeed", 1 / 10);

          _defineProperty(this, "isMoveing", false);

          _defineProperty(this, "targetX", void 0);

          _defineProperty(this, "targetY", void 0);

          _defineProperty(this, "clip", []);
        }

        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

            _this.targetX = _this.x;
            _this.targetY = _this.y;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).PLAYER_CONTROLLER, _this.inputhandler, _this);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, _this.Dead, _this);
          })();
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

          var id = this.willAttack(inputs);

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
          var {
            targetX: x,
            targetY: y,
            direction
          } = this;
          var {
            tileInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var {
            mapRowCount: row,
            mapColumnCount: column
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door || {};
          var burst = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.burst.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);
          var enemes = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH); //按钮方向——向上

          if (inputs === (_crd && CONTROLLER_ENMU === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENMU({
            error: Error()
          }), CONTROLLER_ENMU) : CONTROLLER_ENMU).TOP) {
            var playerNextY = y - 1; //玩家方向——向上

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

              var weaponNextY = y - 2;
              var nextPlayerTile = (_tileInfo$x = tileInfo[x]) === null || _tileInfo$x === void 0 ? void 0 : _tileInfo$x[playerNextY];
              var nextWeaponTile = (_tileInfo$x2 = tileInfo[x]) === null || _tileInfo$x2 === void 0 ? void 0 : _tileInfo$x2[weaponNextY]; //判断门

              if ((playerNextY === doorY && doorX === x || doorX === x && weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (var i = 0; i < enemes.length; i++) {
                var enemy = enemes[i];
                var {
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

              var _weaponNextY = y;

              var _nextPlayerTile = (_tileInfo$x3 = tileInfo[x]) === null || _tileInfo$x3 === void 0 ? void 0 : _tileInfo$x3[playerNextY];

              var _nextWeaponTile = (_tileInfo$x4 = tileInfo[x]) === null || _tileInfo$x4 === void 0 ? void 0 : _tileInfo$x4[_weaponNextY]; //判断门


              if ((playerNextY === doorY && doorX === x || doorX === x && _weaponNextY === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i = 0; _i < enemes.length; _i++) {
                var _enemy = enemes[_i];
                var {
                  x: _enemyX,
                  y: _enemyY
                } = _enemy;

                if (playerNextY === _enemyY && _enemyX === x) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile || _nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile && _nextPlayerTile.moveable && (!_nextWeaponTile || _nextWeaponTile.turnable)) {// empty
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

              var weaponNextX = x - 1;

              var _weaponNextY2 = y - 1;

              var _nextPlayerTile2 = (_tileInfo$x5 = tileInfo[x]) === null || _tileInfo$x5 === void 0 ? void 0 : _tileInfo$x5[playerNextY];

              var _nextWeaponTile2 = (_tileInfo$weaponNextX = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX === void 0 ? void 0 : _tileInfo$weaponNextX[_weaponNextY2]; //判断门


              if ((playerNextY === doorY && doorX === x || doorX === weaponNextX && _weaponNextY2 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i2 = 0; _i2 < enemes.length; _i2++) {
                var _enemy2 = enemes[_i2];
                var {
                  x: _enemyX2,
                  y: _enemyY2
                } = _enemy2;

                if (playerNextY === _enemyY2 && _enemyX2 === x || _weaponNextY2 === _enemyY2 && _enemyX2 === weaponNextX) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile2 || _nextWeaponTile2.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile2 && _nextPlayerTile2.moveable && (!_nextWeaponTile2 || _nextWeaponTile2.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$x6, _tileInfo$_weaponNext;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX = x + 1;

              var _weaponNextY3 = y - 1;

              var _nextPlayerTile3 = (_tileInfo$x6 = tileInfo[x]) === null || _tileInfo$x6 === void 0 ? void 0 : _tileInfo$x6[playerNextY];

              var _nextWeaponTile3 = (_tileInfo$_weaponNext = tileInfo[_weaponNextX]) === null || _tileInfo$_weaponNext === void 0 ? void 0 : _tileInfo$_weaponNext[_weaponNextY3]; //判断门


              if ((playerNextY === doorY && doorX === x || doorX === _weaponNextX && _weaponNextY3 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i3 = 0; _i3 < enemes.length; _i3++) {
                var _enemy3 = enemes[_i3];
                var {
                  x: _enemyX3,
                  y: _enemyY3
                } = _enemy3;

                if (playerNextY === _enemyY3 && _enemyX3 === x || _weaponNextY3 === _enemyY3 && _enemyX3 === _weaponNextX) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile3 || _nextWeaponTile3.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile3 && _nextPlayerTile3.moveable && (!_nextWeaponTile3 || _nextWeaponTile3.turnable)) {// empty
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
            var _playerNextY = y + 1; //玩家方向——向上


            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$x7, _tileInfo$x8;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY4 = y;

              var _nextPlayerTile4 = (_tileInfo$x7 = tileInfo[x]) === null || _tileInfo$x7 === void 0 ? void 0 : _tileInfo$x7[_playerNextY];

              var _nextWeaponTile4 = (_tileInfo$x8 = tileInfo[x]) === null || _tileInfo$x8 === void 0 ? void 0 : _tileInfo$x8[_weaponNextY4]; //判断门


              if ((_playerNextY === doorY && doorX === x || doorX === x && _weaponNextY4 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i4 = 0; _i4 < enemes.length; _i4++) {
                var _enemy4 = enemes[_i4];
                var {
                  x: _enemyX4,
                  y: _enemyY4
                } = _enemy4;

                if (_playerNextY === _enemyY4 && _enemyX4 === x) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile4 || _nextWeaponTile4.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile4 && _nextPlayerTile4.moveable && (!_nextWeaponTile4 || _nextWeaponTile4.turnable)) {// empty
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

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextY5 = y + 2;

              var _nextPlayerTile5 = (_tileInfo$x9 = tileInfo[x]) === null || _tileInfo$x9 === void 0 ? void 0 : _tileInfo$x9[_playerNextY];

              var _nextWeaponTile5 = (_tileInfo$x10 = tileInfo[x]) === null || _tileInfo$x10 === void 0 ? void 0 : _tileInfo$x10[_weaponNextY5]; //判断门


              if ((_playerNextY === doorY && doorX === x || doorX === x && _weaponNextY5 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (var _i5 = 0; _i5 < enemes.length; _i5++) {
                var _enemy5 = enemes[_i5];
                var {
                  x: _enemyX5,
                  y: _enemyY5
                } = _enemy5;

                if (_playerNextY === _enemyY5 && _enemyX5 === x || _enemyX5 === x && _weaponNextY5 === _enemyY5) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile5 || _nextWeaponTile5.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile5 && _nextPlayerTile5.moveable && (!_nextWeaponTile5 || _nextWeaponTile5.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$x11, _tileInfo$_weaponNext2;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX2 = x - 1;

              var _weaponNextY6 = y + 1;

              var _nextPlayerTile6 = (_tileInfo$x11 = tileInfo[x]) === null || _tileInfo$x11 === void 0 ? void 0 : _tileInfo$x11[_playerNextY];

              var _nextWeaponTile6 = (_tileInfo$_weaponNext2 = tileInfo[_weaponNextX2]) === null || _tileInfo$_weaponNext2 === void 0 ? void 0 : _tileInfo$_weaponNext2[_weaponNextY6]; //判断门


              if ((_playerNextY === doorY && doorX === x || doorX === _weaponNextX2 && _weaponNextY6 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i6 = 0; _i6 < enemes.length; _i6++) {
                var _enemy6 = enemes[_i6];
                var {
                  x: _enemyX6,
                  y: _enemyY6
                } = _enemy6;

                if (_playerNextY === _enemyY6 && _enemyX6 === x || _enemyX6 === _weaponNextX2 && _enemyY6 === _weaponNextY6) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //最后判断地图元素


              if (_nextPlayerTile6 && _nextPlayerTile6.moveable && (!_nextWeaponTile6 || _nextWeaponTile6.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile6 || _nextWeaponTile6.turnable)) {
                return false;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$x12, _tileInfo$_weaponNext3;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX3 = x + 1;

              var _weaponNextY7 = y + 1;

              var _nextPlayerTile7 = (_tileInfo$x12 = tileInfo[x]) === null || _tileInfo$x12 === void 0 ? void 0 : _tileInfo$x12[_playerNextY];

              var _nextWeaponTile7 = (_tileInfo$_weaponNext3 = tileInfo[_weaponNextX3]) === null || _tileInfo$_weaponNext3 === void 0 ? void 0 : _tileInfo$_weaponNext3[_weaponNextY7]; //判断门


              if ((_playerNextY === doorY && doorX === x || doorX === _weaponNextX3 && _weaponNextY7 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i7 = 0; _i7 < enemes.length; _i7++) {
                var _enemy7 = enemes[_i7];
                var {
                  x: _enemyX7,
                  y: _enemyY7
                } = _enemy7;

                if (_playerNextY === _enemyY7 && _enemyX7 === x || _enemyX7 === _weaponNextX3 && _enemyY7 === _weaponNextY7) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile7 || _nextWeaponTile7.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile7 && _nextPlayerTile7.moveable && (!_nextWeaponTile7 || _nextWeaponTile7.turnable)) {// empty
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
            var playerNextX = x - 1; //玩家方向——向上

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$playerNextX, _tileInfo$_weaponNext4;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX4 = x - 1;

              var _weaponNextY8 = y - 1;

              var _nextPlayerTile8 = (_tileInfo$playerNextX = tileInfo[playerNextX]) === null || _tileInfo$playerNextX === void 0 ? void 0 : _tileInfo$playerNextX[y];

              var _nextWeaponTile8 = (_tileInfo$_weaponNext4 = tileInfo[_weaponNextX4]) === null || _tileInfo$_weaponNext4 === void 0 ? void 0 : _tileInfo$_weaponNext4[_weaponNextY8]; //判断门


              if ((y === doorY && doorX === playerNextX || doorX === _weaponNextX4 && _weaponNextY8 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i8 = 0; _i8 < enemes.length; _i8++) {
                var _enemy8 = enemes[_i8];
                var {
                  x: _enemyX8,
                  y: _enemyY8
                } = _enemy8;

                if (y === _enemyY8 && _enemyX8 === playerNextX || _enemyX8 === _weaponNextX4 && _enemyY8 === _weaponNextY8) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile8 || _nextWeaponTile8.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile8 && _nextPlayerTile8.moveable && (!_nextWeaponTile8 || _nextWeaponTile8.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX2, _tileInfo$_weaponNext5;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX5 = x - 1;

              var _weaponNextY9 = y + 1;

              var _nextPlayerTile9 = (_tileInfo$playerNextX2 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX2 === void 0 ? void 0 : _tileInfo$playerNextX2[y];

              var _nextWeaponTile9 = (_tileInfo$_weaponNext5 = tileInfo[_weaponNextX5]) === null || _tileInfo$_weaponNext5 === void 0 ? void 0 : _tileInfo$_weaponNext5[_weaponNextY9]; //判断门


              if ((y === doorY && doorX === playerNextX || doorX === _weaponNextX5 && _weaponNextY9 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i9 = 0; _i9 < enemes.length; _i9++) {
                var _enemy9 = enemes[_i9];
                var {
                  x: _enemyX9,
                  y: _enemyY9
                } = _enemy9;

                if (y === _enemyY9 && _enemyX9 === playerNextX || _enemyX9 === _weaponNextX5 && _enemyY9 === _weaponNextY9) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile9 || _nextWeaponTile9.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile9 && _nextPlayerTile9.moveable && (!_nextWeaponTile9 || _nextWeaponTile9.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX3, _tileInfo$_weaponNext6;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX6 = x - 2;

              var _nextPlayerTile10 = (_tileInfo$playerNextX3 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX3 === void 0 ? void 0 : _tileInfo$playerNextX3[y];

              var _nextWeaponTile10 = (_tileInfo$_weaponNext6 = tileInfo[_weaponNextX6]) === null || _tileInfo$_weaponNext6 === void 0 ? void 0 : _tileInfo$_weaponNext6[y]; //判断门


              if ((y === doorY && doorX === playerNextX || doorX === _weaponNextX6 && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i10 = 0; _i10 < enemes.length; _i10++) {
                var _enemy10 = enemes[_i10];
                var {
                  x: _enemyX10,
                  y: _enemyY10
                } = _enemy10;

                if (y === _enemyY10 && _enemyX10 === playerNextX || _enemyX10 === _weaponNextX6 && _enemyY10 === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile10 || _nextWeaponTile10.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile10 && _nextPlayerTile10.moveable && (!_nextWeaponTile10 || _nextWeaponTile10.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX4, _tileInfo$_weaponNext7;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX7 = x;

              var _nextPlayerTile11 = (_tileInfo$playerNextX4 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX4 === void 0 ? void 0 : _tileInfo$playerNextX4[y];

              var _nextWeaponTile11 = (_tileInfo$_weaponNext7 = tileInfo[_weaponNextX7]) === null || _tileInfo$_weaponNext7 === void 0 ? void 0 : _tileInfo$_weaponNext7[y]; //判断门


              if ((y === doorY && doorX === playerNextX || doorX === _weaponNextX7 && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i11 = 0; _i11 < enemes.length; _i11++) {
                var _enemy11 = enemes[_i11];
                var {
                  x: _enemyX11,
                  y: _enemyY11
                } = _enemy11;

                if (y === _enemyY11 && _enemyX11 === playerNextX || _enemyX11 === _weaponNextX7 && _enemyY11 === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile11 || _nextWeaponTile11.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile11 && _nextPlayerTile11.moveable && (!_nextWeaponTile11 || _nextWeaponTile11.turnable)) {// empty
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
            var _playerNextX = x + 1; //玩家方向——向上


            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              var _tileInfo$_playerNext, _tileInfo$_weaponNext8;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX8 = x + 1;

              var _weaponNextY10 = y - 1;

              var _nextPlayerTile12 = (_tileInfo$_playerNext = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext === void 0 ? void 0 : _tileInfo$_playerNext[y];

              var _nextWeaponTile12 = (_tileInfo$_weaponNext8 = tileInfo[_weaponNextX8]) === null || _tileInfo$_weaponNext8 === void 0 ? void 0 : _tileInfo$_weaponNext8[_weaponNextY10]; //判断门


              if ((y === doorY && doorX === _playerNextX || doorX === _weaponNextX8 && _weaponNextY10 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i12 = 0; _i12 < enemes.length; _i12++) {
                var _enemy12 = enemes[_i12];
                var {
                  x: _enemyX12,
                  y: _enemyY12
                } = _enemy12;

                if (y === _enemyY12 && _enemyX12 === _playerNextX || _enemyX12 === _weaponNextX8 && _enemyY12 === _weaponNextY10) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile12 || _nextWeaponTile12.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile12 && _nextPlayerTile12.moveable && (!_nextWeaponTile12 || _nextWeaponTile12.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              var _tileInfo$_playerNext2, _tileInfo$_weaponNext9;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX9 = x + 1;

              var _weaponNextY11 = y + 1;

              var _nextPlayerTile13 = (_tileInfo$_playerNext2 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext2 === void 0 ? void 0 : _tileInfo$_playerNext2[y];

              var _nextWeaponTile13 = (_tileInfo$_weaponNext9 = tileInfo[_weaponNextX9]) === null || _tileInfo$_weaponNext9 === void 0 ? void 0 : _tileInfo$_weaponNext9[_weaponNextY11]; //判断门


              if ((y === doorY && doorX === _playerNextX || doorX === _weaponNextX9 && _weaponNextY11 === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i13 = 0; _i13 < enemes.length; _i13++) {
                var _enemy13 = enemes[_i13];
                var {
                  x: _enemyX13,
                  y: _enemyY13
                } = _enemy13;

                if (y === _enemyY13 && _enemyX13 === _playerNextX || _enemyX13 === _weaponNextX9 && _enemyY13 === _weaponNextY11) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile13 || _nextWeaponTile13.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile13 && _nextPlayerTile13.moveable && (!_nextWeaponTile13 || _nextWeaponTile13.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              var _tileInfo$_playerNext3, _tileInfo$_weaponNext10;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX10 = x;

              var _nextPlayerTile14 = (_tileInfo$_playerNext3 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext3 === void 0 ? void 0 : _tileInfo$_playerNext3[y];

              var _nextWeaponTile14 = (_tileInfo$_weaponNext10 = tileInfo[_weaponNextX10]) === null || _tileInfo$_weaponNext10 === void 0 ? void 0 : _tileInfo$_weaponNext10[y]; //判断门


              if ((y === doorY && doorX === _playerNextX || doorX === _weaponNextX10 && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i14 = 0; _i14 < enemes.length; _i14++) {
                var _enemy14 = enemes[_i14];
                var {
                  x: _enemyX14,
                  y: _enemyY14
                } = _enemy14;

                if (y === _enemyY14 && _enemyX14 === _playerNextX || _enemyX14 === _weaponNextX10 && _enemyY14 === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile14 || _nextWeaponTile14.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile14 && _nextPlayerTile14.moveable && (!_nextWeaponTile14 || _nextWeaponTile14.turnable)) {// empty
              } else {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              var _tileInfo$_playerNext4, _tileInfo$_weaponNext11;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX11 = x + 2;

              var _nextPlayerTile15 = (_tileInfo$_playerNext4 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext4 === void 0 ? void 0 : _tileInfo$_playerNext4[y];

              var _nextWeaponTile15 = (_tileInfo$_weaponNext11 = tileInfo[_weaponNextX11]) === null || _tileInfo$_weaponNext11 === void 0 ? void 0 : _tileInfo$_weaponNext11[y]; //判断门


              if ((y === doorY && doorX === _playerNextX || doorX === _weaponNextX11 && y === doorY) && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i15 = 0; _i15 < enemes.length; _i15++) {
                var _enemy15 = enemes[_i15];
                var {
                  x: _enemyX15,
                  y: _enemyY15
                } = _enemy15;

                if (y === _enemyY15 && _enemyX15 === _playerNextX || _enemyX15 === _weaponNextX11 && _enemyY15 === y) {
                  //
                  this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                    error: Error()
                  }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              if (burst.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile15 || _nextWeaponTile15.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile15 && _nextPlayerTile15.moveable && (!_nextWeaponTile15 || _nextWeaponTile15.turnable)) {// empty
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

            var nextX;
            var nextY;

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


            for (var _i16 = 0; _i16 < enemes.length; _i16++) {
              var _enemy16 = enemes[_i16];
              var {
                x: _enemyX16,
                y: _enemyY16
              } = _enemy16;

              if (x === _enemyX16 && _enemyY16 === nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (nextX === _enemyX16 && _enemyY16 === y) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (nextX === _enemyX16 && _enemyY16 === nextY) {
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
            var _tileInfo$x15, _tileInfo$x16, _tileInfo$x16$_nextY, _tileInfo$_nextX, _tileInfo$_nextX2, _tileInfo$_nextX2$y, _tileInfo$_nextX3, _tileInfo$_nextX4, _tileInfo$_nextX4$_ne;

            var _nextX;

            var _nextY;

            if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP) {
              _nextX = x + 1;
              _nextY = y - 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM) {
              _nextX = x - 1;
              _nextY = y + 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT) {
              _nextX = x - 1;
              _nextY = y - 1;
            } else if (direction === (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
              error: Error()
            }), DRIECTION_ENUM) : DRIECTION_ENUM).RIGHT) {
              _nextX = x + 1;
              _nextY = y + 1;
            } //判断门


            if (doorX === x && doorY === _nextY || doorX === _nextX && doorY === y || doorX === _nextX && _nextY === doorY && doorState !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
              //
              this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断敌人


            for (var _i17 = 0; _i17 < enemes.length; _i17++) {
              var _enemy17 = enemes[_i17];
              var {
                x: _enemyX17,
                y: _enemyY17
              } = _enemy17;

              if (x === _enemyX17 && _enemyY17 === _nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_nextX === _enemyX17 && _enemyY17 === y) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_nextX === _enemyX17 && _enemyY17 === _nextY) {
                //
                this.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                  error: Error()
                }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            }

            if ((!((_tileInfo$x15 = tileInfo[x]) === null || _tileInfo$x15 === void 0 ? void 0 : _tileInfo$x15[_nextY]) || ((_tileInfo$x16 = tileInfo[x]) === null || _tileInfo$x16 === void 0 ? void 0 : (_tileInfo$x16$_nextY = _tileInfo$x16[_nextY]) === null || _tileInfo$x16$_nextY === void 0 ? void 0 : _tileInfo$x16$_nextY.turnable)) && (!((_tileInfo$_nextX = tileInfo[_nextX]) === null || _tileInfo$_nextX === void 0 ? void 0 : _tileInfo$_nextX[y]) || ((_tileInfo$_nextX2 = tileInfo[_nextX]) === null || _tileInfo$_nextX2 === void 0 ? void 0 : (_tileInfo$_nextX2$y = _tileInfo$_nextX2[y]) === null || _tileInfo$_nextX2$y === void 0 ? void 0 : _tileInfo$_nextX2$y.turnable)) && (!((_tileInfo$_nextX3 = tileInfo[_nextX]) === null || _tileInfo$_nextX3 === void 0 ? void 0 : _tileInfo$_nextX3[_nextY]) || ((_tileInfo$_nextX4 = tileInfo[_nextX]) === null || _tileInfo$_nextX4 === void 0 ? void 0 : (_tileInfo$_nextX4$_ne = _tileInfo$_nextX4[_nextY]) === null || _tileInfo$_nextX4$_ne === void 0 ? void 0 : _tileInfo$_nextX4$_ne.turnable))) {//
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
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes.filter(e => e.state !== (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);

          for (var i = 0; i < enemies.length; i++) {
            var {
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