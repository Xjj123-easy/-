System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SPIKES_COUNT_ENUM, State, SpikesSubMachine, SpikesOneSubMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfSPIKES_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesSubMachine(extras) {
    _reporterNs.report("SpikesSubMachine", "./SpikesSubMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SPIKES_COUNT_ENUM = _unresolved_2.SPIKES_COUNT_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.State;
    }, function (_unresolved_4) {
      SpikesSubMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75342Dl5bdNdIIO4yY4y7ug", "SpikesOneSubMachine%20copy", undefined);

      BASE_URL = 'texture/spikes/spikesone';

      _export("default", SpikesOneSubMachine = class SpikesOneSubMachine extends (_crd && SpikesSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesSubMachine({
        error: Error()
      }), SpikesSubMachine) : SpikesSubMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ZERO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/zero"));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ONE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/one"));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).TWO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/two"));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesOneSubMachine copy.js.map