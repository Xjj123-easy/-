import { SPIKES_COUNT_ENUM } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'

import SpikesSubMachine from './SpikesSubMachine'

const BASE_URL = 'texture/spikes/spikesfour'
export default class SpikesFourSubMachine extends SpikesSubMachine {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(SPIKES_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}/one`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}/two`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.THREE, new State(fsm, `${BASE_URL}/three`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.FOUR, new State(fsm, `${BASE_URL}/four`))
    this.stateMachine.set(SPIKES_COUNT_ENUM.FIVE, new State(fsm, `${BASE_URL}/five`))
  }
}
