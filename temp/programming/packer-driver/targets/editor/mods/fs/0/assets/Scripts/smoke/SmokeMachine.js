System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTINY_STATE_ENUM, PARAMS_NAME_ENUM, GetParamsNUmber, GetParamsTrigger, StateMachine, SmokeIdleStateMachines, SmokeDeathStateMachines, EnityManger, _dec, _class, _crd, ccclass, SmokeMachine;

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsNUmber(extras) {
    _reporterNs.report("GetParamsNUmber", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsTrigger(extras) {
    _reporterNs.report("GetParamsTrigger", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeIdleStateMachines(extras) {
    _reporterNs.report("SmokeIdleStateMachines", "./SmokeIdleStateMachines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeDeathStateMachines(extras) {
    _reporterNs.report("SmokeDeathStateMachines", "./SmokeDeathStateMachines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnityManger(extras) {
    _reporterNs.report("EnityManger", "../Base/EnityManger", _context.meta, extras);
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
      GetParamsNUmber = _unresolved_3.GetParamsNUmber;
      GetParamsTrigger = _unresolved_3.GetParamsTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SmokeIdleStateMachines = _unresolved_4.default;
    }, function (_unresolved_5) {
      SmokeDeathStateMachines = _unresolved_5.default;
    }, function (_unresolved_6) {
      EnityManger = _unresolved_6.EnityManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5eb0GWWxI4q1JAa87Ikuz", "SmokeMachine", undefined);

      ({
        ccclass
      } = _decorator);

      _export("SmokeMachine", SmokeMachine = (_dec = ccclass('SmokeMachine'), _dec(_class = class SmokeMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        async init() {
          this.animationComponent = this.node.addComponent(Animation);
          this.initParams();
          this.initStateMachine();
          this.initAnimationEvent();
          await Promise.all(this.waitingList);
        }

        initAnimationEvent() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            const name = this.animationComponent.defaultClip.name; //获取动画名字

            const whiteList = ['idle'];

            if (whiteList.some(v => name.includes(v))) {
              //匹配是否含有turn再设置状态
              this.node.getComponent(_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
                error: Error()
              }), EnityManger) : EnityManger).state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH;
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
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DRIECTION, (_crd && GetParamsNUmber === void 0 ? (_reportPossibleCrUseOfGetParamsNUmber({
            error: Error()
          }), GetParamsNUmber) : GetParamsNUmber)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && SmokeIdleStateMachines === void 0 ? (_reportPossibleCrUseOfSmokeIdleStateMachines({
            error: Error()
          }), SmokeIdleStateMachines) : SmokeIdleStateMachines)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && SmokeDeathStateMachines === void 0 ? (_reportPossibleCrUseOfSmokeDeathStateMachines({
            error: Error()
          }), SmokeDeathStateMachines) : SmokeDeathStateMachines)(this));
        }

        run() {
          //得到地刺参数
          switch (this.currentState) {
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
              if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
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
//# sourceMappingURL=SmokeMachine.js.map