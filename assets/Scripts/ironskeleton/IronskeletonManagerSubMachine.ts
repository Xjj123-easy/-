import { _decorator, Animation } from 'cc'
import { ENTINY_STATE_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { EnityManger } from '../Base/EnityManger'
import { GetParamsNUmber, GetParamsTrigger, StateMachine } from '../Base/StateMachine'
import IronskeletonDeathsubMachine from './IronskeletonDeathsubMachine'
import IronskeletonIdlesubMachine from './IronskeletonIdlesubMachine'

const { ccclass, property } = _decorator

@ccclass('IronskeletonManagerSubMachine')
export class IronskeletonManagerSubMachine extends StateMachine {
  async init() {
    this.animationComponent = this.node.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initEventMachine()

    await Promise.all(this.waitingList)
  }

  initEventMachine() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {
      const name = this.animationComponent.defaultClip.name //获取动画名字
      const whiteList = ['attack']
      if (whiteList.some(v => name.includes(v))) {
        //匹配是否含有turn再设置状态
        this.node.getComponent(EnityManger).state = ENTINY_STATE_ENUM.IDLE
      }
    })
  }

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.IDLE, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DRIECTION, GetParamsNUmber())
    this.param.set(PARAMS_NAME_ENUM.DEATH, GetParamsTrigger())
  }

  initStateMachine() {
    this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new IronskeletonIdlesubMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new IronskeletonDeathsubMachine(this))
  }
  run() {
    switch (this.currentState) {
      case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
      case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
        if (this.param.get(PARAMS_NAME_ENUM.IDLE).value) {
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
