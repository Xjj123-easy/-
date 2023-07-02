System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SPIKES_COUNT_ENUM, State, SpikesSubMachine, SpikesFourSubMachine, _crd, BASE_URL;

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

      _cclegacy._RF.push({}, "18a936eE0ZEpoJLNCLwrJk6", "SpikesFourSubMachine", undefined);

      BASE_URL = 'texture/spikes/spikesfour';

      _export("default", SpikesFourSubMachine = class SpikesFourSubMachine extends (_crd && SpikesSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesSubMachine({
        error: Error()
      }), SpikesSubMachine) : SpikesSubMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ZERO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/zero`));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ONE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/one`));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).TWO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/two`));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).THREE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/three`));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).FOUR, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/four`));
          this.stateMachine.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).FIVE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/five`));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesFourSubMachine.js.map