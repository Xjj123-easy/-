import {
  DRIECTION_ENUM,
  PARAMS_NAME_ENUM,
  SPIKES_COUNT_MAP_NUMBER_ENUM,
  SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM,
} from '../../Enums'
import SubStateMachine from '../Base/SubStateMachine'

export default abstract class SpikesSubMachine extends SubStateMachine {
  run(): void {
    const { value } = this.fsm.param.get(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT)

    this.currentState = this.stateMachine.get(SPIKES_COUNT_MAP_NUMBER_ENUM[value as number])
  }
}
