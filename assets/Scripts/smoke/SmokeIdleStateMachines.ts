import { DRIECTION_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'
import { IdleTurnStateMachie } from '../Base/IdleTurnStateMachie'
import { ANIMATION_SPEED } from '../Base/EnityManger'

const BaseUrl = 'texture/smoke/idle'
export default class SmokeIdleStateMachines extends IdleTurnStateMachie {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(DRIECTION_ENUM.TOP, new State(fsm, `${BaseUrl}/top`, ANIMATION_SPEED / 1.5))
    this.stateMachine.set(DRIECTION_ENUM.BOTTOM, new State(fsm, `${BaseUrl}/bottom`, ANIMATION_SPEED / 1.5))
    this.stateMachine.set(DRIECTION_ENUM.LEFT, new State(fsm, `${BaseUrl}/left`, ANIMATION_SPEED / 1.5))
    this.stateMachine.set(DRIECTION_ENUM.RIGHT, new State(fsm, `${BaseUrl}/right`, ANIMATION_SPEED / 1.5))
  }
}
