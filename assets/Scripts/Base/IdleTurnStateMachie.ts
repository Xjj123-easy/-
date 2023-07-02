import { DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import SubStateMachine from './SubStateMachine'
import { _decorator, Component, Node, AnimationClip, Animation, SpriteFrame } from 'cc'
import { StateMachine } from './StateMachine'
const { ccclass, property } = _decorator
@ccclass('IdleTurnStateMachie')
export class IdleTurnStateMachie extends SubStateMachine {
  run(): void {
    const value = this.fsm.getParams(PARAMS_NAME_ENUM.DRIECTION)
    this.currentState = this.stateMachine.get(DIRECTION_ORDER_ENUM[value as number])
  }
}
