import { RenderRoot2D, game } from 'cc'
import Singleton from '../Base/Singleton'
import { DrawManager, DURATION } from '../UI/DrawManager'
import { creatUINode } from '../Utiils'

export default class FaderManager extends Singleton {
  private _fader: DrawManager = null
  static get Instance() {
    return super.GetInstance<FaderManager>()
  }
  get fader() {
    if (this._fader !== null) {
      return this._fader
    }
    const root = creatUINode()
    root.addComponent(RenderRoot2D)

    const faderNode = creatUINode()
    faderNode.setParent(root)
    this._fader = faderNode.addComponent(DrawManager)
    this._fader.init()
    game.addPersistRootNode(root)
    return this._fader
  }
  fadeIn(duration: number = DURATION) {
    return this.fader.fadeIn(duration)
  }
  fadeOut(duration: number = DURATION) {
    return this.fader.fadeOut(duration)
  }
  mask() {
    return this.fader.mask()
  }
}
