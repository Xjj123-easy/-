import { _decorator, Component, Sprite, UITransform } from 'cc'
import {
  PARAMS_NAME_ENUM,
  ENTITY_TYPE_ENUM,
  EVENTMANAGER,
  SPIKES_COUNT_MAP_NUMBER_ENUM,
  SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM,
  ENTINY_STATE_ENUM,
} from '../../Enums'

import { StateMachine } from '../Base/StateMachine'
import { ISpikes } from '../../Level'
import { randombyLength } from '../Utiils'
import EventManager from '../RunTime/EventManager'
import { SpikesMachine } from './SpikesMachine'
import DataManager from '../RunTime/DataManager'
const { ccclass, property } = _decorator

export const TILE_HEIGHT = 55
export const TILE_WIDTH = 55
export const ANIMATION_SPEED = 1 / 8
@ccclass('SpikesManager')
export class SpikesManager extends Component {
  id: string = randombyLength(12)
  x: number
  y: number
  fsm: StateMachine //状态机
  _count = 0
  _totalcount: number
  type: ENTITY_TYPE_ENUM
  transfrom: UITransform
  get count() {
    return this._count
  }

  set count(newCount: number) {
    if (this === null) return
    this._count = newCount
    this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, newCount)
  }
  get totalcount() {
    return this._totalcount
  }

  set totalcount(newCount: number) {
    if (this === null) return
    this._totalcount = newCount
    this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, newCount)
  }
  async init(params: ISpikes) {
    const sprite = this.node.addComponent(Sprite)

    sprite.sizeMode = Sprite.SizeMode.CUSTOM

    this.transfrom = this.getComponent(UITransform)

    this.transfrom.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

    this.x = params.x

    this.y = params.y

    this.fsm = this.addComponent(SpikesMachine)

    await this.fsm.init()

    const type = params.type

    this.count = params.count

    this.totalcount =
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[type as 'SPIKES_ONE' | 'SPIKES_TWO' | 'SPIKES_THREE' | 'SPIKES_FOUR']

    EventManager.Instance.on(EVENTMANAGER.PLAYERMOVE_END, this.onloop, this)
  }
  update() {
    this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT)
  }

  onDestroy() {
    EventManager.Instance.off(EVENTMANAGER.PLAYERMOVE_END, this.onloop)
  }

  onloop() {
    if (this.fsm == null) return

    if (this.count === this.totalcount) {
      this.count = 0
    } else {
      this.count++
    }
    this.attack()
  }
  attack() {
    if (DataManager.Instance.player === null) return
    const { x: playerX, y: playerY } = DataManager.Instance.player
    if (this.x === playerX && this.y === playerY && this.totalcount === this.count) {
      EventManager.Instance.emit(EVENTMANAGER.ATTACK_PLAYER, ENTINY_STATE_ENUM.DEATH)
    }
  }
  ResetZero() {
    this.count = 0
  }
}
