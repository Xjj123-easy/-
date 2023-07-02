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
import { IEntity } from '../../Level'
import { EnemyManager } from '../Base/EnemyManager'

import { IronskeletonManagerSubMachine } from './IronskeletonManagerSubMachine'

const { ccclass, property } = _decorator
@ccclass('IronskeletonManager')
export class IronskeletonManager extends EnemyManager {
  async init(params: IEntity) {
    this.fsm = this.addComponent(IronskeletonManagerSubMachine)
    await this.fsm.init()
    super.init(params)
  }

  /**
   * isInit 判断初始化
   * changeDirection 改变敌人放向
   * 通过对比敌人坐标跟player坐标在哪个象限
   * dix diy 表示偏远量 靠近x轴 还是靠近y轴
   */
}
