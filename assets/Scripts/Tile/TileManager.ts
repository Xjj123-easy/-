import { _decorator, Component, SpriteFrame, Sprite, UITransform } from 'cc'
import { TILE_TYPE_ENUM } from '../../Enums'
const { ccclass } = _decorator

/**
 * Predefined variables
 * Name = BattleManager
 * DateTime = Fri May 19 2023 14:21:20 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = BattleManager.ts
 * FileBasenameNoExtension = BattleManager
 * URL = db://assets/Scripts/Scene/BattleManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

const TILE_HEIGHT = 55
const TILE_WIDTH = 55

@ccclass('TlieManager')
export class TlieManager extends Component {
  type: TILE_TYPE_ENUM
  moveable: boolean
  turnable: boolean
  init(type: TILE_TYPE_ENUM, spriteFrame: SpriteFrame, i: number, j: number) {
    this.type = type

    if (this.type.includes('WALL')) {
      this.moveable = false
      this.turnable = false
    } else if (this.type.includes('CLIFF')) {
      this.moveable = false
      this.turnable = true
    } else if (this.type.includes('FLOOR')) {
      this.moveable = true
      this.turnable = true
    }
    const sprite = this.addComponent(Sprite)
    sprite.spriteFrame = spriteFrame
    const tranfrom = this.addComponent(UITransform)
    tranfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT)
    this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT)
  }
}
