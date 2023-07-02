System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTINY_STATE_ENUM, PARAMS_NAME_ENUM, EnityManger, GetParamsNUmber, GetParamsTrigger, StateMachine, IronskeletonDeathsubMachine, IronskeletonIdlesubMachine, _dec, _class, _crd, ccclass, property, IronskeletonManagerSubMachine;

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

  function _reportPossibleCrUseOfGetParamsNUmber(extras) {
    _reporterNs.report("GetParamsNUmber", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsTrigger(extras) {
    _reporterNs.report("GetParamsTrigger", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronskeletonDeathsubMachine(extras) {
    _reporterNs.report("IronskeletonDeathsubMachine", "./IronskeletonDeathsubMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronskeletonIdlesubMachine(extras) {
    _reporterNs.report("IronskeletonIdlesubMachine", "./IronskeletonIdlesubMachine", _context.meta, extras);
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
      GetParamsNUmber = _unresolved_4.GetParamsNUmber;
      GetParamsTrigger = _unresolved_4.GetParamsTrigger;
      StateMachine = _unresolved_4.StateMachine;
    }, function (_unresolved_5) {
      IronskeletonDeathsubMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      IronskeletonIdlesubMachine = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc102FZ2i9OmbpdMg4xGKmT", "IronskeletonManagerSubMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronskeletonManagerSubMachine", IronskeletonManagerSubMachine = (_dec = ccclass('IronskeletonManagerSubMachine'), _dec(_class = class IronskeletonManagerSubMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationComponent = _this.node.addComponent(Animation);

            _this.initParams();

            _this.initStateMachine();

            _this.initEventMachine();

            yield Promise.all(_this.waitingList);
          })();
        }

        initEventMachine() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            var name = this.animationComponent.defaultClip.name; //获取动画名字

            var whiteList = ['attack'];

            if (whiteList.some(v => name.includes(v))) {
              //匹配是否含有turn再设置状态
              this.node.getComponent(_crd && EnityManger === void 0 ? (_reportPossibleCrUseOfEnityManger({
                error: Error()
              }), EnityManger) : EnityManger).state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE;
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
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DRIECTION, (_crd && GetParamsNUmber === void 0 ? (_reportPossibleCrUseOfGetParamsNUmber({
            error: Error()
          }), GetParamsNUmber) : GetParamsNUmber)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, (_crd && GetParamsTrigger === void 0 ? (_reportPossibleCrUseOfGetParamsTrigger({
            error: Error()
          }), GetParamsTrigger) : GetParamsTrigger)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && IronskeletonIdlesubMachine === void 0 ? (_reportPossibleCrUseOfIronskeletonIdlesubMachine({
            error: Error()
          }), IronskeletonIdlesubMachine) : IronskeletonIdlesubMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && IronskeletonDeathsubMachine === void 0 ? (_reportPossibleCrUseOfIronskeletonDeathsubMachine({
            error: Error()
          }), IronskeletonDeathsubMachine) : IronskeletonDeathsubMachine)(this));
        }

        run() {
          switch (this.currentState) {
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
              if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
              } else if (this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH);
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
//# sourceMappingURL=IronskeletonManagerSubMachine.js.map