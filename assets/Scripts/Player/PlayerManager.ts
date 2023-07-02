import {
  _decorator,
  Component,
  Sprite,
  UITransform,
  animation,
  AnimationClip,
  SpriteFrame,
  AnimationComponent,
  AudioClip,
} from 'cc'
import {
  CONTROLLER_ENMU,
  EVENTMANAGER,
  PARAMS_NAME_ENUM,
  DRIECTION_ENUM,
  ENTINY_STATE_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_TYPE_ENUM,
  SHAKE_DIRECTION_ENMU,
} from '../../Enums'
import EventManager from '../RunTime/EventManager'
import ResourcesManager from '../RunTime/ResourcesManager'
import { PlayerStateMachine } from './PlayerStateMachine'
import { StateMachine } from '../Base/StateMachine'
import { EnityManger } from '../Base/EnityManger'
import DataManager from '../RunTime/DataManager'
import { IEntity } from '../../Level'
import MusicManager from '../RunTime/MusicManager'
const { ccclass, property } = _decorator

export const TILE_HEIGHT = 55
export const TILE_WIDTH = 55
export const ANIMATION_SPEED = 1 / 8
@ccclass('PlayerManager')
export class PlayerManager extends EnityManger {
  private readonly speeed = 1 / 10
  isMoveing: boolean = false
  targetX: number
  targetY: number
  clip: AudioClip[] = []
  async init(params: IEntity) {
    this.fsm = this.addComponent(PlayerStateMachine)

    await this.fsm.init()

    super.init(params)

    this.targetX = this.x
    this.targetY = this.y

    EventManager.Instance.on(EVENTMANAGER.PLAYER_CONTROLLER, this.inputhandler, this)
    EventManager.Instance.on(EVENTMANAGER.ATTACK_PLAYER, this.Dead, this)
  }
  onDestroy() {
    super.onDestroy()

    EventManager.Instance.off(EVENTMANAGER.PLAYER_CONTROLLER, this.inputhandler)
    EventManager.Instance.off(EVENTMANAGER.ATTACK_PLAYER, this.Dead)
  }

  onAttackShake(type: SHAKE_DIRECTION_ENMU) {
    EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, type)
  }
  update() {
    super.update()
    this.updateXY()
  }
  updateXY() {
    if (this.x < this.targetX) {
      this.x += this.speeed
    } else if (this.x > this.targetX) {
      this.x -= this.speeed
    }

    if (this.y < this.targetY) {
      this.y += this.speeed
    } else if (this.y > this.targetY) {
      this.y -= this.speeed
    }

    if (Math.abs(this.x - this.targetX) <= 0.01 && Math.abs(this.y - this.targetY) <= 0.01 && this.isMoveing === true) {
      this.x = this.targetX
      this.y = this.targetY
      this.isMoveing = false
      EventManager.Instance.emit(EVENTMANAGER.PLAYERMOVE_END)
    }
  }

  inputhandler(inputs: CONTROLLER_ENMU, clip: AudioClip[]) {
    this.clip = clip
    if (
      this.state === ENTINY_STATE_ENUM.AIRDEATH ||
      this.state === ENTINY_STATE_ENUM.DEATH ||
      this.state === ENTINY_STATE_ENUM.ATTACK
    ) {
      return
    }
    if (this.isMoveing) {
      return
    }
    const id = this.willAttack(inputs)
    if (id) {
      EventManager.Instance.emit(EVENTMANAGER.RECORD_STEP)
      EventManager.Instance.emit(EVENTMANAGER.ATTACK_ENEMY, id)
      EventManager.Instance.emit(EVENTMANAGER.DOOR_OPEN)
      EventManager.Instance.emit(EVENTMANAGER.PLAYERMOVE_END)
      MusicManager.Instance.sound(clip[1])
      return
    }
    if (this.willblock(inputs)) {
      if (inputs === CONTROLLER_ENMU.TOP) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.TOP)
      } else if (inputs === CONTROLLER_ENMU.BOTTOM) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.BOTTOM)
      } else if (inputs === CONTROLLER_ENMU.LEFT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.LEFT)
      } else if (inputs === CONTROLLER_ENMU.RIGHT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.RIGHT)
      } else if (inputs === CONTROLLER_ENMU.TURN_LEFT && this.direction === DRIECTION_ENUM.TOP) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.LEFT)
      } else if (inputs === CONTROLLER_ENMU.TURN_LEFT && this.direction === DRIECTION_ENUM.LEFT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.BOTTOM)
      } else if (inputs === CONTROLLER_ENMU.TURN_LEFT && this.direction === DRIECTION_ENUM.BOTTOM) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.RIGHT)
      } else if (inputs === CONTROLLER_ENMU.TURN_LEFT && this.direction === DRIECTION_ENUM.RIGHT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.TOP)
      } else if (inputs === CONTROLLER_ENMU.TURN_RIGHT && this.direction === DRIECTION_ENUM.TOP) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.RIGHT)
      } else if (inputs === CONTROLLER_ENMU.TURN_RIGHT && this.direction === DRIECTION_ENUM.LEFT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.TOP)
      } else if (inputs === CONTROLLER_ENMU.TURN_RIGHT && this.direction === DRIECTION_ENUM.BOTTOM) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.LEFT)
      } else if (inputs === CONTROLLER_ENMU.TURN_RIGHT && this.direction === DRIECTION_ENUM.RIGHT) {
        EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.BOTTOM)
      }
      MusicManager.Instance.sound(clip[2])

      return
    }

    this.move(inputs)
    MusicManager.Instance.sound(clip[0])
  }
  /**
   *
   *  死亡
   */
  Dead(type: ENTINY_STATE_ENUM, ctx?: any) {
    this.state = type

    MusicManager.Instance.sound(this.clip[3])
  }
  /**
   * 移动
   * @param inputs
   */
  move(inputs: CONTROLLER_ENMU) {
    EventManager.Instance.emit(EVENTMANAGER.RECORD_STEP)
    switch (inputs) {
      case CONTROLLER_ENMU.TOP:
        this.targetY -= 1
        this.isMoveing = true
        this.showsmoke(DRIECTION_ENUM.TOP)
        break
      case CONTROLLER_ENMU.BOTTOM:
        this.targetY += 1
        this.isMoveing = true
        this.showsmoke(DRIECTION_ENUM.BOTTOM)
        break
      case CONTROLLER_ENMU.LEFT:
        this.targetX -= 1
        this.isMoveing = true
        this.showsmoke(DRIECTION_ENUM.LEFT)
        break
      case CONTROLLER_ENMU.RIGHT:
        this.targetX += 1
        this.isMoveing = true
        this.showsmoke(DRIECTION_ENUM.RIGHT)
        break
      case CONTROLLER_ENMU.TURN_LEFT:
        this.state = ENTINY_STATE_ENUM.TURN_LEFT
        if (this.direction === DRIECTION_ENUM.TOP) {
          this.direction = DRIECTION_ENUM.LEFT
        } else if (this.direction === DRIECTION_ENUM.LEFT) {
          this.direction = DRIECTION_ENUM.BOTTOM
        } else if (this.direction === DRIECTION_ENUM.BOTTOM) {
          this.direction = DRIECTION_ENUM.RIGHT
        } else if (this.direction === DRIECTION_ENUM.RIGHT) {
          this.direction = DRIECTION_ENUM.TOP
        }

        EventManager.Instance.emit(EVENTMANAGER.PLAYERMOVE_END)

        break
      case CONTROLLER_ENMU.TURN_RIGHT:
        if (this.direction === DRIECTION_ENUM.LEFT) {
          this.direction = DRIECTION_ENUM.TOP
        } else if (this.direction === DRIECTION_ENUM.RIGHT) {
          this.direction = DRIECTION_ENUM.BOTTOM
        } else if (this.direction === DRIECTION_ENUM.BOTTOM) {
          this.direction = DRIECTION_ENUM.LEFT
        } else if (this.direction === DRIECTION_ENUM.TOP) {
          this.direction = DRIECTION_ENUM.RIGHT
        }
        this.state = ENTINY_STATE_ENUM.TURN_RIGHT
        EventManager.Instance.emit(EVENTMANAGER.PLAYERMOVE_END)

        break
      default:
        break
    }
  }

  willblock(inputs: CONTROLLER_ENMU) {
    const { targetX: x, targetY: y, direction } = this
    const { tileInfo } = DataManager.Instance
    const { mapRowCount: row, mapColumnCount: column } = DataManager.Instance
    const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.door || {}
    const burst = DataManager.Instance.burst.filter(e => e.state !== ENTINY_STATE_ENUM.DEATH)
    const enemes = DataManager.Instance.enemes.filter(e => e.state !== ENTINY_STATE_ENUM.DEATH)
    //按钮方向——向上
    if (inputs === CONTROLLER_ENMU.TOP) {
      const playerNextY = y - 1

      //玩家方向——向上
      if (direction === DRIECTION_ENUM.TOP) {
        //判断是否超出地图
        if (playerNextY < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        const weaponNextY = y - 2
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[x]?.[weaponNextY]

        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === x && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (enemyX === x && weaponNextY === enemyY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKFRONT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        //玩家方向——向下
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        //判断是否超出地图
        if (playerNextY < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        const weaponNextY = y
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[x]?.[weaponNextY]
        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === x && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //

          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if (playerNextY === enemyY && enemyX === x) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKBACK
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //玩家方向——向左
      } else if (direction === DRIECTION_ENUM.LEFT) {
        //判断是否超出地图
        if (playerNextY < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        const weaponNextX = x - 1
        const weaponNextY = y - 1
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (weaponNextY === enemyY && enemyX === weaponNextX)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }

        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //玩家方向——向右
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        //判断是否超出地图
        if (playerNextY < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        const weaponNextX = x + 1
        const weaponNextY = y - 1
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (weaponNextY === enemyY && enemyX === weaponNextX)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }
      }

      //按钮方向——向下
    } else if (inputs === CONTROLLER_ENMU.BOTTOM) {
      const playerNextY = y + 1

      //玩家方向——向上
      if (direction === DRIECTION_ENUM.TOP) {
        if (playerNextY > column - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        const weaponNextY = y
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[x]?.[weaponNextY]

        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === x && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if (playerNextY === enemyY && enemyX === x) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKBACK
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //玩家方向——向下
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        if (playerNextY > column - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        const weaponNextY = y + 2
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[x]?.[weaponNextY]
        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === x && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (enemyX === x && weaponNextY === enemyY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKFRONT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        //玩家方向——向左
      } else if (direction === DRIECTION_ENUM.LEFT) {
        if (playerNextY > column - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        const weaponNextX = x - 1
        const weaponNextY = y + 1
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]
        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //玩家方向——向右
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        if (playerNextY > column - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT

          return true
        }

        const weaponNextX = x + 1
        const weaponNextY = y + 1
        const nextPlayerTile = tileInfo[x]?.[playerNextY]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]
        //判断门
        if (
          ((playerNextY === doorY && doorX === x) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((playerNextY === enemyY && enemyX === x) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === x && burst.y === playerNextY) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }
      }

      //按钮方向——向左
    } else if (inputs === CONTROLLER_ENMU.LEFT) {
      const playerNextX = x - 1

      //玩家方向——向上
      if (direction === DRIECTION_ENUM.TOP) {
        //判断是否超出地图
        if (playerNextX < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT

          return true
        }

        const weaponNextX = x - 1
        const weaponNextY = y - 1
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //玩家方向——向下
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        //判断是否超出地图
        if (playerNextX < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT

          return true
        }

        const weaponNextX = x - 1
        const weaponNextY = y + 1
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //玩家方向——向左
      } else if (direction === DRIECTION_ENUM.LEFT) {
        //判断是否超出地图
        if (playerNextX < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT

          return true
        }

        const weaponNextX = x - 2
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[y]
        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && y === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === y)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }

        //玩家方向——向右
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        //判断是否超出地图
        if (playerNextX < 0) {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK

          return true
        }

        const weaponNextX = x
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[y]

        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && y === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === y)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }
      }

      //按钮方向——向右
    } else if (inputs === CONTROLLER_ENMU.RIGHT) {
      const playerNextX = x + 1

      //玩家方向——向上
      if (direction === DRIECTION_ENUM.TOP) {
        if (playerNextX > row - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT

          return true
        }

        const weaponNextX = x + 1
        const weaponNextY = y - 1
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //玩家方向——向下
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        if (playerNextX > row - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT

          return true
        }

        const weaponNextX = x + 1
        const weaponNextY = y + 1
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]
        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && weaponNextY === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //玩家方向——向左
      } else if (direction === DRIECTION_ENUM.LEFT) {
        if (playerNextX > row - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK

          return true
        }

        const weaponNextX = x
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[y]
        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && y === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKLEFT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === y)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKLEFT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKBACK
          return true
        }

        //玩家方向——向右
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        if (playerNextX > row - 1) {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT

          return true
        }

        const weaponNextX = x + 2
        const nextPlayerTile = tileInfo[playerNextX]?.[y]
        const nextWeaponTile = tileInfo[weaponNextX]?.[y]
        //判断门
        if (
          ((y === doorY && doorX === playerNextX) || (doorX === weaponNextX && y === doorY)) &&
          doorState !== ENTINY_STATE_ENUM.DEATH
        ) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
          return true
        }

        //判断敌人
        for (let i = 0; i < enemes.length; i++) {
          const enemy = enemes[i]
          const { x: enemyX, y: enemyY } = enemy
          if ((y === enemyY && enemyX === playerNextX) || (enemyX === weaponNextX && enemyY === y)) {
            //
            this.state = ENTINY_STATE_ENUM.BLOCKRIGHT
            return true
          }
        }
        //判断地裂
        if (
          burst.some(burst => burst.x === playerNextX && burst.y === y) &&
          (!nextWeaponTile || nextWeaponTile.turnable)
        ) {
          return false
        }
        //最后判断地图元素
        if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
          // empty
        } else {
          this.state = ENTINY_STATE_ENUM.BLOCKFRONT
          return true
        }
      }

      //按钮方向——左转
    } else if (inputs === CONTROLLER_ENMU.TURN_LEFT) {
      let nextX
      let nextY

      if (direction === DRIECTION_ENUM.TOP) {
        nextX = x - 1
        nextY = y - 1
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        nextX = x + 1
        nextY = y + 1
      } else if (direction === DRIECTION_ENUM.LEFT) {
        nextX = x - 1
        nextY = y + 1
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        nextX = x + 1
        nextY = y - 1
      }
      /**
       * 判断旋转砖块是否存在
       */
      if (
        (!tileInfo[x]?.[nextY] || tileInfo[x]?.[nextY]?.turnable) &&
        (!tileInfo[nextX]?.[y] || tileInfo[nextX]?.[y]?.turnable) &&
        (!tileInfo[nextX]?.[nextY] || tileInfo[nextX]?.[nextY]?.turnable)
      ) {
        //
      } else {
        this.state = ENTINY_STATE_ENUM.BLOCKTURNLEFT
        return true
      }
      //判断门
      if (
        (doorX === x && doorY === nextY) ||
        (doorX === nextX && doorY === y) ||
        (doorX === nextX && nextY === doorY && doorState !== ENTINY_STATE_ENUM.DEATH)
      ) {
        //
        this.state = ENTINY_STATE_ENUM.BLOCKTURNLEFT
        return true
      }

      //判断敌人
      for (let i = 0; i < enemes.length; i++) {
        const enemy = enemes[i]
        const { x: enemyX, y: enemyY } = enemy
        if (x === enemyX && enemyY === nextY) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNLEFT
          return true
        } else if (nextX === enemyX && enemyY === y) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNLEFT
          return true
        } else if (nextX === enemyX && enemyY === nextY) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNLEFT
          return true
        }
      }
    } else if (inputs === CONTROLLER_ENMU.TURN_RIGHT) {
      let nextX
      let nextY

      if (direction === DRIECTION_ENUM.TOP) {
        nextX = x + 1
        nextY = y - 1
      } else if (direction === DRIECTION_ENUM.BOTTOM) {
        nextX = x - 1
        nextY = y + 1
      } else if (direction === DRIECTION_ENUM.LEFT) {
        nextX = x - 1
        nextY = y - 1
      } else if (direction === DRIECTION_ENUM.RIGHT) {
        nextX = x + 1
        nextY = y + 1
      }

      //判断门
      if (
        (doorX === x && doorY === nextY) ||
        (doorX === nextX && doorY === y) ||
        (doorX === nextX && nextY === doorY && doorState !== ENTINY_STATE_ENUM.DEATH)
      ) {
        //
        this.state = ENTINY_STATE_ENUM.BLOCKTURNRIGHT
        return true
      }

      //判断敌人
      for (let i = 0; i < enemes.length; i++) {
        const enemy = enemes[i]
        const { x: enemyX, y: enemyY } = enemy
        if (x === enemyX && enemyY === nextY) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNRIGHT
          return true
        } else if (nextX === enemyX && enemyY === y) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNRIGHT
          return true
        } else if (nextX === enemyX && enemyY === nextY) {
          //
          this.state = ENTINY_STATE_ENUM.BLOCKTURNRIGHT
          return true
        }
      }

      if (
        (!tileInfo[x]?.[nextY] || tileInfo[x]?.[nextY]?.turnable) &&
        (!tileInfo[nextX]?.[y] || tileInfo[nextX]?.[y]?.turnable) &&
        (!tileInfo[nextX]?.[nextY] || tileInfo[nextX]?.[nextY]?.turnable)
      ) {
        //
      } else {
        this.state = ENTINY_STATE_ENUM.BLOCKTURNRIGHT
        return true
      }
    }
  }

  showsmoke(direction: DRIECTION_ENUM) {
    EventManager.Instance.emit(EVENTMANAGER.SMOKE_SHOW, direction, this.x, this.y)
  }

  willAttack(inputs: CONTROLLER_ENMU) {
    const enemies = DataManager.Instance.enemes.filter(e => e.state !== ENTINY_STATE_ENUM.DEATH)

    for (let i = 0; i < enemies.length; i++) {
      const { x: enemyX, y: enemyY, id } = enemies[i]

      if (
        inputs === CONTROLLER_ENMU.TOP &&
        this.direction === DRIECTION_ENUM.TOP &&
        this.x === enemyX &&
        this.targetY - 2 === enemyY
      ) {
        this.state = ENTINY_STATE_ENUM.ATTACK

        return id
      } else if (
        inputs === CONTROLLER_ENMU.BOTTOM &&
        this.direction === DRIECTION_ENUM.BOTTOM &&
        this.x === enemyX &&
        this.targetY + 2 === enemyY
      ) {
        this.state = ENTINY_STATE_ENUM.ATTACK
        return id
      } else if (
        inputs === CONTROLLER_ENMU.LEFT &&
        this.direction === DRIECTION_ENUM.LEFT &&
        this.x - 2 === enemyX &&
        this.targetY === enemyY
      ) {
        this.state = ENTINY_STATE_ENUM.ATTACK
        return id
      } else if (
        inputs === CONTROLLER_ENMU.RIGHT &&
        this.direction === DRIECTION_ENUM.RIGHT &&
        this.x + 2 === enemyX &&
        this.targetY === enemyY
      ) {
        this.state = ENTINY_STATE_ENUM.ATTACK
        return id
      } else {
        this.state = ENTINY_STATE_ENUM.IDLE
      }
    }
    return ''
  }
}
