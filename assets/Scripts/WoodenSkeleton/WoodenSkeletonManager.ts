import { _decorator } from 'cc'
import {
  CONTROLLER_ENMU,
  EVENTMANAGER,
  PARAMS_NAME_ENUM,
  DRIECTION_ENUM,
  ENTINY_STATE_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_TYPE_ENUM,
} from '../../Enums'
import { IEntity } from '../../Level'
import { EnemyManager } from '../Base/EnemyManager'
import DataManager from '../RunTime/DataManager'
import EventManager from '../RunTime/EventManager'
import { WoodenSkeletonSubMachine } from './WoodenSkeletonSubMachine'

const { ccclass, property } = _decorator
@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EnemyManager {
  async init(params: IEntity) {
    this.fsm = this.addComponent(WoodenSkeletonSubMachine)

    await this.fsm.init()

    super.init(params)
    EventManager.Instance.on(EVENTMANAGER.PLAYERMOVE_END, this.onAttack, this)
  }
  update() {
    super.update()
  }
  onDestroy() {
    super.onDestroy()

    EventManager.Instance.off(EVENTMANAGER.PLAYERMOVE_END, this.onAttack)
  }
  /**
   * isInit 判断初始化
   * changeDirection 改变敌人放向
   * 通过对比敌人坐标跟player坐标在哪个象限
   * dix diy 表示偏远量 靠近x轴 还是靠近y轴
   */

  onAttack() {
    if (this.state === ENTINY_STATE_ENUM.DEATH) {
      return
    }

    const { x: playerX, y: playerY, state: playState } = DataManager.Instance.player
    if (
      ((this.x === playerX && Math.abs(this.y - playerY) <= 1) ||
        (this.y === playerY && Math.abs(this.x - playerX) <= 1)) &&
      playState !== ENTINY_STATE_ENUM.AIRDEATH &&
      playState !== ENTINY_STATE_ENUM.DEATH
    ) {
      EventManager.Instance.emit(EVENTMANAGER.ATTACK_PLAYER, ENTINY_STATE_ENUM.DEATH)

      console.log(this.x === playerX && Math.abs(this.y - playerY) <= 1)
      console.log(this.y === playerY && Math.abs(this.x - playerX) <= 1)

      console.log(playState)

      this.state = ENTINY_STATE_ENUM.ATTACK
    } else {
      this.state = ENTINY_STATE_ENUM.IDLE
    }
  }
}
