import { DIRECTION_ORDER_ENUM, DRIECTION_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'
import { SubStateMachine } from '../Base/SubStateMachine'
import { AnimationClip } from 'cc'
import { IdleTurnStateMachie } from '../Base/IdleTurnStateMachie'

const BaseUrl = 'texture/player/turnleft'
export default class TurnLeftStateMachine extends IdleTurnStateMachie {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(DRIECTION_ENUM.TOP, new State(fsm, `${BaseUrl}/top`))
    this.stateMachine.set(DRIECTION_ENUM.BOTTOM, new State(fsm, `${BaseUrl}/bottom`))
    this.stateMachine.set(DRIECTION_ENUM.LEFT, new State(fsm, `${BaseUrl}/left`))
    this.stateMachine.set(DRIECTION_ENUM.RIGHT, new State(fsm, `${BaseUrl}/right`))
  }
}
