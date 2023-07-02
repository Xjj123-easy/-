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
import { IEntity } from '../../Level'
import { EnityManger } from '../Base/EnityManger'
import DataManager from '../RunTime/DataManager'
import EventManager from '../RunTime/EventManager'
import { DoorSubMachine } from './DoorSubMachine'

const { ccclass, property } = _decorator
@ccclass('DoorManager')
export class DoorManager extends EnityManger {
  async init(param: IEntity) {
    this.fsm = this.addComponent(DoorSubMachine)

    await this.fsm.init()

    super.init(param)
    this.state = param.state
    EventManager.Instance.on(EVENTMANAGER.DOOR_OPEN, this.onOpen, this)
  }

  onDestroy() {
    EventManager.Instance.off(EVENTMANAGER.DOOR_OPEN, this.onOpen)
  }
  update() {
    super.update()
  }
  /**
   * isInit 判断初始化
   * changeDirection 改变敌人放向
   * 通过对比敌人坐标跟player坐标在哪个象限
   * dix diy 表示偏远量 靠近x轴 还是靠近y轴
   */
  onOpen() {
    if (!DataManager.Instance.enemes) return
    if (
      DataManager.Instance.enemes.every((enemy: EnityManger) => enemy.state === 'DEATH') &&
      this.state !== ENTINY_STATE_ENUM.DEATH
    ) {
      //
      this.state = ENTINY_STATE_ENUM.DEATH
    }
  }
}
