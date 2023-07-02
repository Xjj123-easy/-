import { _decorator, Component, Node, director, resources } from 'cc'
import { SCENE_ENUM } from '../../Enums'
import FaderManager from '../RunTime/FaderManager'
const { ccclass, property } = _decorator

/**
 * Predefined variables
 * Name = StartManager
 * DateTime = Thu Jun 29 2023 12:02:53 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = StartManager.ts
 * FileBasenameNoExtension = StartManager
 * URL = db://assets/Scripts/UI/StartManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('StartManager')
export class StartManager extends Component {
  onLoad() {}
  start() {
    director.preloadScene(SCENE_ENUM.scene)
    FaderManager.Instance.fadeOut(1000)
    this.node.once(Node.EventType.TOUCH_END, this.handler, this)
  }
  async handler() {
    await FaderManager.Instance.fadeIn(300)
    director.loadScene(SCENE_ENUM.scene)
  }
}
