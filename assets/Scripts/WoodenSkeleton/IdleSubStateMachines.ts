import { DRIECTION_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'
import { AnimationClip } from 'cc'
import { IdleTurnStateMachie } from '../Base/IdleTurnStateMachie'

const BaseUrl = 'texture/woodenskeleton/idle'
export default class IdleSubStateMachine extends IdleTurnStateMachie {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(DRIECTION_ENUM.TOP, new State(fsm, `${BaseUrl}/top`, AnimationClip.WrapMode.Loop))
    this.stateMachine.set(DRIECTION_ENUM.BOTTOM, new State(fsm, `${BaseUrl}/bottom`, AnimationClip.WrapMode.Loop))
    this.stateMachine.set(DRIECTION_ENUM.LEFT, new State(fsm, `${BaseUrl}/left`, AnimationClip.WrapMode.Loop))
    this.stateMachine.set(DRIECTION_ENUM.RIGHT, new State(fsm, `${BaseUrl}/right`, AnimationClip.WrapMode.Loop))
  }
}
