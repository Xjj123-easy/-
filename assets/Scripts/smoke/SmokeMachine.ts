import { _decorator, Animation } from 'cc'
import { ENTINY_STATE_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { GetParamsNUmber, GetParamsTrigger, StateMachine } from '../Base/StateMachine'
import SmokeIdleStateMachines from './SmokeIdleStateMachines'
import SmokeDeathStateMachines from './SmokeDeathStateMachines'
import { EnityManger } from '../Base/EnityManger'

const { ccclass } = _decorator
@ccclass('SmokeMachine')
export class SmokeMachine extends StateMachine {
  async init() {
    this.animationComponent = this.node.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initAnimationEvent()

    await Promise.all(this.waitingList)
  }

  initAnimationEvent() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {
      const name = this.animationComponent.defaultClip.name //获取动画名字
      const whiteList = ['idle']
      if (whiteList.some(v => name.includes(v))) {
        //匹配是否含有turn再设置状态
        this.node.getComponent(EnityManger).state = ENTINY_STATE_ENUM.DEATH
      }
    })
  }

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.IDLE, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DEATH, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DRIECTION, GetParamsNUmber())
  }

  initStateMachine() {
    this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new SmokeIdleStateMachines(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new SmokeDeathStateMachines(this))
  }
  run() {
    //得到地刺参数

    switch (this.currentState) {
      case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
      case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
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
