import { DRIECTION_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'
import { IdleTurnStateMachie } from '../Base/IdleTurnStateMachie'

const BaseUrl = 'texture/door/death'
export default class SmokeDeathStateMachines extends IdleTurnStateMachie {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(DRIECTION_ENUM.TOP, new State(fsm, `${BaseUrl}`))
    this.stateMachine.set(DRIECTION_ENUM.BOTTOM, new State(fsm, `${BaseUrl}`))
    this.stateMachine.set(DRIECTION_ENUM.LEFT, new State(fsm, `${BaseUrl}`))
    this.stateMachine.set(DRIECTION_ENUM.RIGHT, new State(fsm, `${BaseUrl}`))
  }
}
