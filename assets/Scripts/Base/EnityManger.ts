import {
  _decorator,
  Component,
  Sprite,
  UITransform,
  animation,
  AnimationClip,
  SpriteFrame,
  AnimationComponent,
} from 'cc'
import {
  CONTROLLER_ENMU,
  EVENTMANAGER,
  PARAMS_NAME_ENUM,
  DRIECTION_ENUM,
  ENTINY_STATE_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_TYPE_ENUM,
} from '../../Enums'

import { StateMachine } from '../Base/StateMachine'
import { IEntity } from '../../Level'
import { randombyLength } from '../Utiils'
const { ccclass, property } = _decorator

export const TILE_HEIGHT = 55
export const TILE_WIDTH = 55
export const ANIMATION_SPEED = 1 / 8
@ccclass('EnityManger')
export class EnityManger extends Component {
  id: string = randombyLength(12)
  x: number
  y: number
  fsm: StateMachine //状态机
  _direction: DRIECTION_ENUM
  _state: ENTINY_STATE_ENUM
  type: ENTITY_TYPE_ENUM
  transfrom: UITransform
  get state() {
    return this._state
  }

  set state(newState: ENTINY_STATE_ENUM) {
    this._state = newState
    try {
      this?.fsm?.setParams(newState, true)
    } catch (error) {
      console.log(this)
    }
  }
  get direction() {
    return this._direction
  }

  set direction(newdirection: DRIECTION_ENUM) {
    this._direction = newdirection
    try {
      this?.fsm?.setParams(PARAMS_NAME_ENUM.DRIECTION, DIRECTION_ORDER_ENUM[this._direction])
    } catch (error) {
      console.log(this)
    }
  }
  init(params: IEntity) {
    const sprite = this.node.addComponent(Sprite)

    sprite.sizeMode = Sprite.SizeMode.CUSTOM

    this.transfrom = this.getComponent(UITransform)

    this.transfrom.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

    this.x = params.x

    this.y = params.y

    this.direction = params.direction

    this.state = params.state
  }
  update() {
    this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT)
  }
  onDestroy() {}
}
