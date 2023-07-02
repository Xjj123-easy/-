import { _decorator, Animation } from 'cc'
import { ENTINY_STATE_ENUM, ENTITY_TYPE_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { GetParamsNUmber, GetParamsTrigger, StateMachine } from '../Base/StateMachine'
import SpikesFourSubMachine from './SpikesFourSubMachine'
import { SpikesManager } from './SpikesManager'
import SpikesOneSubMachine from './SpikesOneSubMachine'
import SpikesThreeSubMachine from './SpikesThreeSubMachine'
import SpikesTwoSubMachine from './SpikesTwoSubMachine'

const { ccclass, property } = _decorator
@ccclass('SpikesMachine')
export class SpikesMachine extends StateMachine {
  async init() {
    this.animationComponent = this.node.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initAnimationEvent()

    await Promise.all(this.waitingList)
  }

  initAnimationEvent() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {
      const name = this.animationComponent.defaultClip.name

      const { value } = this.param.get(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT)

      // 例如1个刺的地裂，在播放完1刺之后，回到0的状态
      if (
        (name.includes('spikesone/two') && value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) ||
        (name.includes('spikesone/three') && value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) ||
        (name.includes('spikesone/four') && value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) ||
        (name.includes('spikesone/five') && value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR)
      ) {
        this.node.getComponent(SpikesManager).ResetZero()
      }
    })
  }

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, GetParamsNUmber())
    this.param.set(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, GetParamsNUmber())
  }

  initStateMachine() {
    this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_ONE, new SpikesOneSubMachine(this))
    this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_TWO, new SpikesTwoSubMachine(this))
    this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_THREE, new SpikesThreeSubMachine(this))
    this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_FOUR, new SpikesFourSubMachine(this))
  }
  run() {
    //得到地刺参数
    const { value } = this.param.get(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT)
    switch (this.currentState) {
      case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE):
      case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_TWO):
      case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_THREE):
      case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_FOUR):
        if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) {
          this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) {
          this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_TWO)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) {
          this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_THREE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR) {
          this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_FOUR)
        } else {
          this.currentState = this.currentState
        }
        break
      default:
        this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE)
    }
  }
}
