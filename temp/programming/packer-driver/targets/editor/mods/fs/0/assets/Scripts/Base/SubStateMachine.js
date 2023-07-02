System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, SubStateMachine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb7335ufP5AeqfdFfoS+CZ7", "SubStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SubStateMachine = (_dec = ccclass('SubStateMachine'), _dec(_class = (_temp = class SubStateMachine {
        //当前状态 播放动画
        //状态机列表
        constructor(fsm) {
          _defineProperty(this, "_currentState", null);

          _defineProperty(this, "stateMachine", new Map());

          this.fsm = fsm;
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

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SubStateMachine.js.map