import { _decorator, Component, Node, AnimationClip, Animation, SpriteFrame } from 'cc'
import { FMS_PARAMS_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from './StateMachine'
const { ccclass, property } = _decorator

@ccclass('SubStateMachine')
export default abstract class SubStateMachine {
  //当前状态 播放动画
  private _currentState: State = null

  //状态机列表
  stateMachine: Map<string, State> = new Map()

  constructor(public fsm: StateMachine) {}
  get currentState() {
    return this._currentState
  }
  set currentState(newState) {
    if (!newState) {
      return
    }
    this._currentState = newState
    this._currentState.run()
  }
  abstract run(): void
}
