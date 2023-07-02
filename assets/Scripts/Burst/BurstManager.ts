import { UITransform, _decorator } from 'cc'
import { EVENTMANAGER, ENTINY_STATE_ENUM, SHAKE_DIRECTION_ENMU } from '../../Enums'
import { IEntity } from '../../Level'
import { EnityManger, TILE_HEIGHT, TILE_WIDTH } from '../Base/EnityManger'
import DataManager from '../RunTime/DataManager'
import EventManager from '../RunTime/EventManager'
import { BurstMachine } from './BurstMachine'

const { ccclass, property } = _decorator
@ccclass('BurstManager')
export class BurstManager extends EnityManger {
  async init(params: IEntity) {
    this.fsm = this.addComponent(BurstMachine)

    await this.fsm.init()

    super.init(params)
    this.transfrom = this.getComponent(UITransform)
    this.transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT)
    EventManager.Instance.on(EVENTMANAGER.PLAYERMOVE_END, this.onBurst, this)
  }
  onDestroy() {
    super.onDestroy()
    EventManager.Instance.off(EVENTMANAGER.PLAYERMOVE_END, this.onBurst)
  }

  update() {
    this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT)
  }
  /**
   * isInit 判断初始化
   * changeDirection 改变敌人放向
   * 通过对比敌人坐标跟player坐标在哪个象限
   * dix diy 表示偏远量 靠近x轴 还是靠近y轴
   */

  onBurst() {
    if (DataManager.Instance.player === null) return
    const { x: playerX, y: playerY } = DataManager.Instance.player

    if (this.x === playerX && this.y === playerY && this.state === ENTINY_STATE_ENUM.IDLE) {
      this.state = ENTINY_STATE_ENUM.ATTACK
    } else if (this.state === ENTINY_STATE_ENUM.ATTACK) {
      this.state = ENTINY_STATE_ENUM.DEATH
      EventManager.Instance.emit(EVENTMANAGER.SHAKE_SHOW, SHAKE_DIRECTION_ENMU.BOTTOM)
      if (this.x === playerX && this.y === playerY) {
        EventManager.Instance.emit(EVENTMANAGER.ATTACK_PLAYER, ENTINY_STATE_ENUM.AIRDEATH)
      }
    }
  }
}
