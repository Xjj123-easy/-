import { assert, AudioClip, AudioSource, Component, _decorator } from 'cc'
const { ccclass } = _decorator
@ccclass('AudioManager')
export class AudioManager extends Component {
  private audioSource?: AudioSource
  private AudioResolve: (value: PromiseLike<null>) => void
  init() {
    this.audioSource = this.addComponent(AudioSource)
  }
  /**
   * 播放音乐
   * @param loop 是否循环播放音乐

   * @param clip 音乐文件
   * @returns
   */
  playMusic(loop: boolean = false, clip: AudioClip = null) {
    // const audioSource = this.audioSource
    this.audioSource.clip = clip
    assert(this.audioSource, 'AudioManager not inited!')
    this.audioSource.loop = loop
    if (!this.audioSource.playing) {
      this.audioSource.play()
    }
    return new Promise(re => {
      this.AudioResolve = re
    })
  }
  /**
   * 播放音效
   * @param {String} name 音效名称
   * @param {Number} volumeScale 播放音量倍数
   */
  playSound(name: AudioClip = null, volumeScale: number = 1) {
    const audioSource = this.audioSource
    assert(audioSource, 'AudioManager not inited!')

    // 注意：第二个参数 “volumeScale” 是指播放音量的倍数，最终播放的音量为 “audioSource.volume * volumeScale”
    audioSource.playOneShot(name, volumeScale)
  }
  stop() {
    this.audioSource.stop()
  }
  destory() {
    this.node.removeFromParent()
  }
}
