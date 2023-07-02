import { _decorator, Animation } from 'cc'
import { ENTINY_STATE_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { EnityManger } from '../Base/EnityManger'
import { GetParamsNUmber, GetParamsTrigger, StateMachine } from '../Base/StateMachine'
import DoorDeathSubStateMachines from './DoorDeathSubStateMachines'
import DoorIdleSubStateMachines from './DoorIdleSubStateMachines'

const { ccclass, property } = _decorator

@ccclass('DoorSubMachine')
export class DoorSubMachine extends StateMachine {
  async init() {
    this.animationComponent = this.node.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initEventMachine()

    await Promise.all(this.waitingList)
  }

  initEventMachine() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {})
  }

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.IDLE, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DEATH, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DRIECTION, GetParamsNUmber())
  }

  initStateMachine() {
    this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new DoorIdleSubStateMachines(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new DoorDeathSubStateMachines(this))
  }
  run() {
    switch (this.currentState) {
      case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
      case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
        if (this.param.get(PARAMS_NAME_ENUM.DEATH).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH)
        } else if (this.param.get(PARAMS_NAME_ENUM.IDLE).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
        } else {
          this.currentState = this.currentState
        }
        break
      default:
        this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
    }
  }
}
