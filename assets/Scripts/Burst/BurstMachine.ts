import { _decorator, Animation } from 'cc'
import { ENTINY_STATE_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { EnityManger } from '../Base/EnityManger'
import { State } from '../Base/State'
import { GetParamsNUmber, GetParamsTrigger, StateMachine } from '../Base/StateMachine'

const { ccclass, property } = _decorator
const BaseUrl = 'texture/burst'
@ccclass('BurstMachine')
export class BurstMachine extends StateMachine {
  async init() {
    this.animationComponent = this.node.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initEventMachine()

    await Promise.all(this.waitingList)
  }

  initEventMachine() {}

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.IDLE, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DRIECTION, GetParamsNUmber())
    this.param.set(PARAMS_NAME_ENUM.ATTACK, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DEATH, GetParamsTrigger())
  }

  initStateMachine() {
    this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new State(this, `${BaseUrl}/idle`))
    this.stateMachine.set(PARAMS_NAME_ENUM.ATTACK, new State(this, `${BaseUrl}/attack`))
    this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new State(this, `${BaseUrl}/death`))
  }
  run() {
    switch (this.currentState) {
      case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
      case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
      case this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK):
        if (this.param.get(PARAMS_NAME_ENUM.ATTACK).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK)
        } else if (this.param.get(PARAMS_NAME_ENUM.IDLE).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
        } else if (this.param.get(PARAMS_NAME_ENUM.DEATH).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH)
        } else {
          this.currentState = this.currentState
        }
        break
      default:
        this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
    }
  }
}
