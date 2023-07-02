System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PARAMS_NAME_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM, SubStateMachine, SpikesSubMachine, _crd;

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_MAP_NUMBER_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "../Base/SubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      SPIKES_COUNT_MAP_NUMBER_ENUM = _unresolved_2.SPIKES_COUNT_MAP_NUMBER_ENUM;
    }, function (_unresolved_3) {
      SubStateMachine = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d40cf7+LD9BU719J4Rs/1+d", "SpikesSubMachine", undefined);

      _export("default", SpikesSubMachine = class SpikesSubMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          const {
            value
          } = this.fsm.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CUR_COUNT);
          this.currentState = this.stateMachine.get((_crd && SPIKES_COUNT_MAP_NUMBER_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM({
            error: Error()
          }), SPIKES_COUNT_MAP_NUMBER_ENUM) : SPIKES_COUNT_MAP_NUMBER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesSubMachine.js.map