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

import { StateMachine } from './StateMachine'
import { IEntity } from '../../Level'
import { randombyLength } from '../Utiils'
import { EnityManger } from './EnityManger'
import EventManager from '../RunTime/EventManager'
import DataManager from '../RunTime/DataManager'
const { ccclass, property } = _decorator

export const TILE_HEIGHT = 55
export const TILE_WIDTH = 55
export const ANIMATION_SPEED = 1 / 8

export class EnemyManager extends EnityManger {
  async init(params: IEntity) {
    super.init(params)

    EventManager.Instance.on(EVENTMANAGER.PLAYERMOVE_END, this.changeDirection, this)
    EventManager.Instance.on(EVENTMANAGER.PLAYER_BORN, this.changeDirection, this)
    EventManager.Instance.on(EVENTMANAGER.ATTACK_ENEMY, this.onDead, this)
    this.changeDirection(true)
  }

  onDestroy() {
    super.onDestroy()
    EventManager.Instance.off(EVENTMANAGER.PLAYERMOVE_END, this.changeDirection)
    EventManager.Instance.off(EVENTMANAGER.PLAYER_BORN, this.changeDirection)
    EventManager.Instance.off(EVENTMANAGER.ATTACK_ENEMY, this.onDead)
    this.destroy()
  }
  /**
   * isInit 判断初始化
   * changeDirection 改变敌人放向
   * 通过对比敌人坐标跟player坐标在哪个象限
   * dix diy 表示偏远量 靠近x轴 还是靠近y轴
   */
  changeDirection(isInit: boolean = false) {
    if (!DataManager.Instance.player || this.state === ENTINY_STATE_ENUM.DEATH) {
      return
    }
    const { x: playerX, y: playerY } = DataManager.Instance.player

    const dix = Math.abs(this.x - playerX)
    const diy = Math.abs(this.y - playerY)

    if (dix === diy && !isInit) {
      return
    }

    if (playerX >= this.x && playerY <= this.y) {
      this.direction = diy > dix ? DRIECTION_ENUM.TOP : DRIECTION_ENUM.RIGHT
    } else if (playerX <= this.x && playerY <= this.y) {
      this.direction = diy > dix ? DRIECTION_ENUM.TOP : DRIECTION_ENUM.LEFT
    } else if (playerX >= this.x && playerY >= this.y) {
      this.direction = diy > dix ? DRIECTION_ENUM.BOTTOM : DRIECTION_ENUM.RIGHT
    } else if (playerX <= this.x && playerY >= this.y) {
      this.direction = diy > dix ? DRIECTION_ENUM.BOTTOM : DRIECTION_ENUM.LEFT
    }
  }

  onDead(id: string) {
    if (this.state === ENTINY_STATE_ENUM.DEATH) {
      return
    }
    if (id === this.id) {
      this.state = ENTINY_STATE_ENUM.DEATH
    }
  }
}
