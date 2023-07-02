import { DRIECTION_ENUM, SHAKE_DIRECTION_ENMU } from '../../Enums'
import { State } from '../Base/State'
import { StateMachine } from '../Base/StateMachine'

import { IdleTurnStateMachie } from '../Base/IdleTurnStateMachie'
import { ANIMATION_SPEED } from './PlayerManager'
import { AnimationClip } from 'cc'

const BaseUrl = 'texture/player/attack'
export default class AttackSubStateMachine extends IdleTurnStateMachie {
  constructor(fsm: StateMachine) {
    super(fsm)

    this.stateMachine.set(
      DRIECTION_ENUM.TOP,
      new State(fsm, `${BaseUrl}/top`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [
        {
          frame: ANIMATION_SPEED * 4,
          func: 'onAttackShake',
          params: [SHAKE_DIRECTION_ENMU.TOP],
        },
      ]),
    )
    this.stateMachine.set(
      DRIECTION_ENUM.BOTTOM,
      new State(fsm, `${BaseUrl}/bottom`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [
        {
          frame: ANIMATION_SPEED * 4,
          func: 'onAttackShake',
          params: [SHAKE_DIRECTION_ENMU.BOTTOM],
        },
      ]),
    )
    this.stateMachine.set(
      DRIECTION_ENUM.LEFT,
      new State(fsm, `${BaseUrl}/left`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [
        {
          frame: ANIMATION_SPEED * 4,
          func: 'onAttackShake',
          params: [SHAKE_DIRECTION_ENMU.LEFT],
        },
      ]),
    )
    this.stateMachine.set(
      DRIECTION_ENUM.RIGHT,
      new State(fsm, `${BaseUrl}/right`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [
        {
          frame: ANIMATION_SPEED * 4,
          func: 'onAttackShake',
          params: [SHAKE_DIRECTION_ENMU.RIGHT],
        },
      ]),
    )
  }
}
