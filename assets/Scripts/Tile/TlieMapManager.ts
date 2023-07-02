import { _decorator, Component } from 'cc'

import DataManager from '../RunTime/DataManager'
import ResourcesManager from '../RunTime/ResourcesManager'
import { creatUINode, RandomNumer } from '../Utiils'
import { TlieManager } from './TileManager'
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

@ccclass('TlieMapManager')
export class TlieMapManager extends Component {
  async init() {
    const { mapInfo } = DataManager.Instance

    const SpriteFrames = await ResourcesManager.Instance.loaddir('texture/tile/tile/')
    //   console.log(SpriteFrames);

    //遍历瓦片数组
    DataManager.Instance.tileInfo = []
    for (let i = 0; i < mapInfo.length; i++) {
      const column = mapInfo[i]
      DataManager.Instance.tileInfo[i] = []
      for (let j = 0; j < column.length; j++) {
        const item = column[j]
        if (item.src === null || item.type === null) {
          continue
        }
        const node = creatUINode()

        //随机瓦片
        let number = item.src
        if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
          number += RandomNumer(0, 4)
        }
        const imgSrc = `tile (${number})`

        const spriteFrame = SpriteFrames.find(v => v.name === imgSrc) || SpriteFrames[0]

        const tileManager = node.addComponent(TlieManager)

        const type = item.type

        tileManager.init(type, spriteFrame, i, j)

        DataManager.Instance.tileInfo[i][j] = tileManager

        node.setParent(this.node)
      }
    }
  }
}
