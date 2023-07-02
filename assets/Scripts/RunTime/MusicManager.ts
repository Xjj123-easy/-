import { RenderRoot2D, game, AudioClip } from 'cc'
import { AudioManager } from '../Audio/AudioManager'
import Singleton from '../Base/Singleton'
import { creatUINode } from '../Utiils'

export default class MusicManager extends Singleton {
  private _audio: AudioManager = null
  root: any = null
  static get Instance() {
    return super.GetInstance<MusicManager>()
  }
  get audio() {
    if (this._audio !== null) {
      return this._audio
    }
    this.root = creatUINode()
    this.root.addComponent(RenderRoot2D)

    const faderNode = creatUINode()
    faderNode.setParent(this.root)
    this._audio = faderNode.addComponent(AudioManager)
    this._audio.init()
    game.addPersistRootNode(this.root)
    return this._audio
  }
  play(loop: boolean, clip: AudioClip) {
    return this.audio.playMusic(loop, clip)
  }
  sound(name: AudioClip, volumeScale?: number) {
    return this.audio.playSound(name, volumeScale)
  }
  stop() {
    return this.audio.stop()
  }
  destory() {
    this.audio.stop()
    game.removePersistRootNode(this.root)
    return this.audio.destory()
  }
}
