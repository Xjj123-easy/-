System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, FMS_PARAMS_ENUM, _dec, _class, _temp, _crd, ccclass, property, GetParamsTrigger, GetParamsNUmber, StateMachine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFMS_PARAMS_ENUM(extras) {
    _reporterNs.report("FMS_PARAMS_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "./SubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      FMS_PARAMS_ENUM = _unresolved_2.FMS_PARAMS_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9130nM5gVABLpd7tZZ49wL", "StateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetParamsTrigger", GetParamsTrigger = () => {
        return {
          type: (_crd && FMS_PARAMS_ENUM === void 0 ? (_reportPossibleCrUseOfFMS_PARAMS_ENUM({
            error: Error()
          }), FMS_PARAMS_ENUM) : FMS_PARAMS_ENUM).TRIGER,
          value: false
        };
      });

      _export("GetParamsNUmber", GetParamsNUmber = () => {
        return {
          type: (_crd && FMS_PARAMS_ENUM === void 0 ? (_reportPossibleCrUseOfFMS_PARAMS_ENUM({
            error: Error()
          }), FMS_PARAMS_ENUM) : FMS_PARAMS_ENUM).NUMBER,
          value: 0
        };
      });

      _export("StateMachine", StateMachine = (_dec = ccclass('StateMachine'), _dec(_class = (_temp = class StateMachine extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_currentState", null);

          _defineProperty(this, "animationComponent", void 0);

          _defineProperty(this, "waitingList", []);

          _defineProperty(this, "param", new Map());

          _defineProperty(this, "stateMachine", new Map());
        }

        get currentState() {
          return this._currentState;
        }

        set currentState(newState) {
          if (!newState) {
            return;
          }

          this._currentState = newState;

          this._currentState.run();
        }

        getParams(paramName) {
          if (this.param.has(paramName)) {
            return this.param.get(paramName).value;
          }
        }

        setParams(paramName, value) {
          if (this.param.has(paramName)) {
            this.param.get(paramName).value = value;
            this.run();
            this.reseTrigger();
          }
        }

        reseTrigger() {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (var [, value] of this.param) {
            if (value.type === (_crd && FMS_PARAMS_ENUM === void 0 ? (_reportPossibleCrUseOfFMS_PARAMS_ENUM({
              error: Error()
            }), FMS_PARAMS_ENUM) : FMS_PARAMS_ENUM).TRIGER) {
              value.value = false;
            }
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StateMachine.js.map