import { _decorator, Component, Node, resources, ProgressBar, director, Label } from 'cc'
import { SCENE_ENUM } from '../../Enums'
const { ccclass, property } = _decorator

/**
 * Predefined variables
 * Name = LoadingManager
 * DateTime = Thu Jun 29 2023 12:58:12 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = LoadingManager.ts
 * FileBasenameNoExtension = LoadingManager
 * URL = db://assets/Scripts/UI/LoadingManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('LoadingManager')
export class LoadingManager extends Component {
  @property(ProgressBar)
  bar: ProgressBar = null
  onLoad() {
    resources.preloadDir(
      '/',
      (cur, total) => {
        this.bar.progress = cur / total
      },
      () => {
        director.loadScene(SCENE_ENUM.strat)
      },
    )
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
