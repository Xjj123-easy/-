import { _decorator, Component, Node, AnimationClip, Animation, SpriteFrame } from 'cc'
import { DIRECTION_ORDER_ENUM, ENTINY_STATE_ENUM, FMS_PARAMS_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { EnityManger } from '../Base/EnityManger'
import { State } from '../Base/State'
import { StateMachine, GetParamsTrigger, GetParamsNUmber } from '../Base/StateMachine'
import AirDeathSubStateMachine from './AirDeathSubStateMachine'
import AttackDeathSubStateMachine from './AttackDeathSubStateMachine'
import AttackSubStateMachine from './AttackSubStateMachine'
import BlockblackStateMachine from './BlockblackStateMachine'
import BlockfrontStateMachine from './BlockfrontStateMachine'
import BlockturnleftStateMachine from './BlockturnleftStateMachine'
import BlockturnrightStateMachine from './BlockturnrightStateMachine'
import IdleLeftStateMachine from './IdleLeftStateMachine'
import TurnLeftStateMachine from './TurnLeftStateMachine'
import TurnRightStateMachine from './TurnRightStateMachine'

const { ccclass, property } = _decorator

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends StateMachine {
  async init() {
    this.animationComponent = this.addComponent(Animation)

    this.initParams()

    this.initStateMachine()

    this.initEventMachine()

    await Promise.all(this.waitingList)
  }

  initEventMachine() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {
      const name = this.animationComponent.defaultClip.name //获取动画名字

      const whiteList = ['block', 'turn', 'attack']
      if (whiteList.some(v => name.includes(v))) {
        //匹配是否含有turn再设置状态
        this.node.getComponent(EnityManger).state = ENTINY_STATE_ENUM.IDLE
        // this.setParams(PARAMS_NAME_ENUM.IDLE, true)
      }
    })
  }

  //初始化状态机参数
  initParams() {
    this.param.set(PARAMS_NAME_ENUM.IDLE, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.TURN_LEFT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.TURN_RIGHT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DRIECTION, GetParamsNUmber())
    this.param.set(PARAMS_NAME_ENUM.BLOCKFRONT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKBACK, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKLEFT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKRIGHT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.DEATH, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.ATTACK, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.AIRDEATH, GetParamsTrigger())
    this.param.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, GetParamsTrigger())
  }

  initStateMachine() {
    this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new IdleLeftStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.TURN_LEFT, new TurnLeftStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.TURN_RIGHT, new TurnRightStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKFRONT, new BlockfrontStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKBACK, new BlockblackStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, new BlockturnleftStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new AttackDeathSubStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.AIRDEATH, new AirDeathSubStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, new BlockturnrightStateMachine(this))
    this.stateMachine.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this))
  }
  run() {
    switch (this.currentState) {
      case this.stateMachine.get(PARAMS_NAME_ENUM.TURN_LEFT):
      case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
      case this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK):
      case this.stateMachine.get(PARAMS_NAME_ENUM.AIRDEATH):
      case this.stateMachine.get(PARAMS_NAME_ENUM.TURN_RIGHT):
      case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT):
      case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKBACK):
      case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT):
      case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
        if (this.param.get(PARAMS_NAME_ENUM.TURN_LEFT).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURN_LEFT)
        } else if (this.param.get(PARAMS_NAME_ENUM.TURN_RIGHT).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURN_RIGHT)
        } else if (this.param.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT)
        } else if (this.param.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT)
        } else if (this.param.get(PARAMS_NAME_ENUM.DEATH).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH)
        } else if (this.param.get(PARAMS_NAME_ENUM.AIRDEATH).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.AIRDEATH)
        } else if (this.param.get(PARAMS_NAME_ENUM.BLOCKFRONT).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT)
        } else if (this.param.get(PARAMS_NAME_ENUM.BLOCKBACK).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKBACK)
        } else if (this.param.get(PARAMS_NAME_ENUM.IDLE).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
        } else if (this.param.get(PARAMS_NAME_ENUM.ATTACK).value) {
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK)
        } else {
          this.currentState = this.currentState
        }
        break
      default:
        this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE)
    }
  }
}
