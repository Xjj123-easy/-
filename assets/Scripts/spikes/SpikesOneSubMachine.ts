import { DRIECTION_ENUM, ENTITY_TYPE_ENUM, SPIKES_COUNT_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'

import SpikesSubMachine from './SpikesSubMachine'

const BASE_URL = 'texture/spikes/spikesone'
export default class SpikesOneSubMachine extends SpikesSubMachine {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(SPIKES_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}/one`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}/two`))
  }
}
