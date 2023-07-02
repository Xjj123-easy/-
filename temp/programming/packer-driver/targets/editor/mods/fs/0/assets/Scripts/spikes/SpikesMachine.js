System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTITY_TYPE_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, GetParamsNUmber, StateMachine, SpikesFourSubMachine, SpikesManager, SpikesOneSubMachine, SpikesThreeSubMachine, SpikesTwoSubMachine, _dec, _class, _crd, ccclass, property, SpikesMachine;

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetParamsNUmber(extras) {
    _reporterNs.report("GetParamsNUmber", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesFourSubMachine(extras) {
    _reporterNs.report("SpikesFourSubMachine", "./SpikesFourSubMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesManager(extras) {
    _reporterNs.report("SpikesManager", "./SpikesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesOneSubMachine(extras) {
    _reporterNs.report("SpikesOneSubMachine", "./SpikesOneSubMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesThreeSubMachine(extras) {
    _reporterNs.report("SpikesThreeSubMachine", "./SpikesThreeSubMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesTwoSubMachine(extras) {
    _reporterNs.report("SpikesTwoSubMachine", "./SpikesTwoSubMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      GetParamsNUmber = _unresolved_3.GetParamsNUmber;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SpikesFourSubMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      SpikesManager = _unresolved_5.SpikesManager;
    }, function (_unresolved_6) {
      SpikesOneSubMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      SpikesThreeSubMachine = _unresolved_7.default;
    }, function (_unresolved_8) {
      SpikesTwoSubMachine = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57f0bIQeeFALZbRNNJDEmzJ", "SpikesMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikesMachine", SpikesMachine = (_dec = ccclass('SpikesMachine'), _dec(_class = class SpikesMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
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
            const name = this.animationComponent.defaultClip.name;
            const {
              value
            } = this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT); // 例如1个刺的地裂，在播放完1刺之后，回到0的状态

            if (name.includes('spikesone/two') && value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE || name.includes('spikesone/three') && value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO || name.includes('spikesone/four') && value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE || name.includes('spikesone/five') && value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR) {
              this.node.getComponent(_crd && SpikesManager === void 0 ? (_reportPossibleCrUseOfSpikesManager({
                error: Error()
              }), SpikesManager) : SpikesManager).ResetZero();
            }
          });
        } //初始化状态机参数


        initParams() {
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CUR_COUNT, (_crd && GetParamsNUmber === void 0 ? (_reportPossibleCrUseOfGetParamsNUmber({
            error: Error()
          }), GetParamsNUmber) : GetParamsNUmber)());
          this.param.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT, (_crd && GetParamsNUmber === void 0 ? (_reportPossibleCrUseOfGetParamsNUmber({
            error: Error()
          }), GetParamsNUmber) : GetParamsNUmber)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE, new (_crd && SpikesOneSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesOneSubMachine({
            error: Error()
          }), SpikesOneSubMachine) : SpikesOneSubMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO, new (_crd && SpikesTwoSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesTwoSubMachine({
            error: Error()
          }), SpikesTwoSubMachine) : SpikesTwoSubMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE, new (_crd && SpikesThreeSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesThreeSubMachine({
            error: Error()
          }), SpikesThreeSubMachine) : SpikesThreeSubMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR, new (_crd && SpikesFourSubMachine === void 0 ? (_reportPossibleCrUseOfSpikesFourSubMachine({
            error: Error()
          }), SpikesFourSubMachine) : SpikesFourSubMachine)(this));
        }

        run() {
          //得到地刺参数
          const {
            value
          } = this.param.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT);

          switch (this.currentState) {
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR):
              if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesMachine.js.map