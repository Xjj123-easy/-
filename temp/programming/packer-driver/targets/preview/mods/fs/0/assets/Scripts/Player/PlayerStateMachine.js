System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTINY_STATE_ENUM, PARAMS_NAME_ENUM, EnityManger, StateMachine, GetParamsTrigger, GetParamsNUmber, AirDeathSubStateMachine, AttackDeathSubStateMachine, AttackSubStateMachine, BlockblackStateMachine, BlockfrontStateMachine, BlockturnleftStateMachine, BlockturnrightStateMachine, IdleLeftStateMachine, TurnLeftStateMachine, TurnRightStateMachine, _dec, _class, _crd, ccclass, property, PlayerStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsTrigger(extras) {
    _reporterNs.report("GetParamsTrigger", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsNUmber(extras) {
    _reporterNs.report("GetParamsNUmber", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAirDeathSubStateMachine(extras) {
    _reporterNs.report("AirDeathSubStateMachine", "./AirDeathSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttackDeathSubStateMachine(extras) {
    _reporterNs.report("AttackDeathSubStateMachine", "./AttackDeathSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttackSubStateMachine(extras) {
    _reporterNs.report("AttackSubStateMachine", "./AttackSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockblackStateMachine(extras) {
    _reporterNs.report("BlockblackStateMachine", "./BlockblackStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockfrontStateMachine(extras) {
    _reporterNs.report("BlockfrontStateMachine", "./BlockfrontStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockturnleftStateMachine(extras) {
    _reporterNs.report("BlockturnleftStateMachine", "./BlockturnleftStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockturnrightStateMachine(extras) {
    _reporterNs.report("BlockturnrightStateMachine", "./BlockturnrightStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdleLeftStateMachine(extras) {
    _reporterNs.report("IdleLeftStateMachine", "./IdleLeftStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurnLeftStateMachine(extras) {
    _reporterNs.report("TurnLeftStateMachine", "./TurnLeftStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurnRightStateMachine(extras) {
    _reporterNs.report("TurnRightStateMachine", "./TurnRightStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
    }, function (_unresolved_3) {
      EnityManger = _unresolved_3.EnityManger;
    }, function (_unresolved_4) {
      StateMachine = _unresolved_4.StateMachine;
      GetParamsTrigger = _unresolved_4.GetParamsTrigger;
      GetParamsNUmber = _unresolved_4.GetParamsNUmber;
    }, function (_unresolved_5) {
      AirDeathSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      AttackDeathSubStateMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      AttackSubStateMachine = _unresolved_7.default;
    }, function (_unresolved_8) {
      BlockblackStateMachine = _unresolved_8.default;
    }, function (_unresolved_9) {
      BlockfrontStateMachine = _unresolved_9.default;
    }, function (_unresolved_10) {
      BlockturnleftStateMachine = _unresolved_10.default;
    }, function (_unresolved_11) {
      BlockturnrightStateMachine = _unresolved_11.default;
    }, function (_unresolved_12) {
      IdleLeftStateMachine = _unresolved_12.default;
    }, function (_unresolved_13) {
      TurnLeftStateMachine = _unresolved_13.default;
    }, function (_unresolved_14) {
      TurnRightStateMachine = _unresolved_14.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8c892IvtRNr6MlZEAs7RQr", "PlayerStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerStateMachine", PlayerStateMachine = (_dec = ccclass('PlayerStateMachine'), _dec(_class = class PlayerStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationComponent = _this.addComponent(Animation);

            _this.initParams();

            _this.initStateMachine();

            _this.initEventMachine();

            yield Promise.all(_this.waitingList);
          })();
        }

        initEventMachine() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            var name = this.animationComponent.defaultClip.name; //获取动画名字

            var whiteList = ['block', 'turn', 'attack'];

            if (whiteList.some(v => name.includes(v))) {
              //匹配是否含有turn再设置状态
              this.node.getComponent(_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
                error: Error()
              }), EnityManger) : EnityManger).state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE; // this.setParams(PARAMS_NAME_ENUM.IDLE, true)
            }
          });
        } //初始化状态机参数


        initParams() {
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_LEFT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_RIGHT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DRIECTION, (_crd && GetParamsNUmber === void 0 ? (_reportPossibleCrUseOfGetParamsNUmber({
            error: Error()
          }), GetParamsNUmber) : GetParamsNUmber)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKFRONT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKBACK, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKLEFT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKRIGHT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).AIRDEATH, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNRIGHT, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && IdleLeftStateMachine === void 0 ? (_reportPossibleCrUseOfIdleLeftStateMachine({
            error: Error()
          }), IdleLeftStateMachine) : IdleLeftStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_LEFT, new (_crd && TurnLeftStateMachine === void 0 ? (_reportPossibleCrUseOfTurnLeftStateMachine({
            error: Error()
          }), TurnLeftStateMachine) : TurnLeftStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_RIGHT, new (_crd && TurnRightStateMachine === void 0 ? (_reportPossibleCrUseOfTurnRightStateMachine({
            error: Error()
          }), TurnRightStateMachine) : TurnRightStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKFRONT, new (_crd && BlockfrontStateMachine === void 0 ? (_reportPossibleCrUseOfBlockfrontStateMachine({
            error: Error()
          }), BlockfrontStateMachine) : BlockfrontStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKBACK, new (_crd && BlockblackStateMachine === void 0 ? (_reportPossibleCrUseOfBlockblackStateMachine({
            error: Error()
          }), BlockblackStateMachine) : BlockblackStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT, new (_crd && BlockturnleftStateMachine === void 0 ? (_reportPossibleCrUseOfBlockturnleftStateMachine({
            error: Error()
          }), BlockturnleftStateMachine) : BlockturnleftStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && AttackDeathSubStateMachine === void 0 ? (_reportPossibleCrUseOfAttackDeathSubStateMachine({
            error: Error()
          }), AttackDeathSubStateMachine) : AttackDeathSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).AIRDEATH, new (_crd && AirDeathSubStateMachine === void 0 ? (_reportPossibleCrUseOfAirDeathSubStateMachine({
            error: Error()
          }), AirDeathSubStateMachine) : AirDeathSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNRIGHT, new (_crd && BlockturnrightStateMachine === void 0 ? (_reportPossibleCrUseOfBlockturnrightStateMachine({
            error: Error()
          }), BlockturnrightStateMachine) : BlockturnrightStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK, new (_crd && AttackSubStateMachine === void 0 ? (_reportPossibleCrUseOfAttackSubStateMachine({
            error: Error()
          }), AttackSubStateMachine) : AttackSubStateMachine)(this));
        }

        run() {
          switch (this.currentState) {
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_LEFT):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).AIRDEATH):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_RIGHT):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKFRONT):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKBACK):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
              if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_LEFT).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_LEFT);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_RIGHT).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURN_RIGHT);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNLEFT);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNRIGHT).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKTURNRIGHT);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).AIRDEATH).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).AIRDEATH);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKFRONT).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKFRONT);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKBACK).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).BLOCKBACK);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerStateMachine.js.map