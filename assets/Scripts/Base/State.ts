import { AnimationClip, UITransform, animation, SpriteFrame, Sprite } from 'cc'

import { ANIMATION_SPEED } from '../Player/PlayerManager'
import ResourcesManager from '../RunTime/ResourcesManager'
import { StateMachine } from './StateMachine'
import { sortspriteFrame } from '../Utiils'
export class State {
  private animationClip: AnimationClip
  constructor(
    private fsm: StateMachine,
    private path: string,
    private warpMode: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal,
    private speed: number = ANIMATION_SPEED,
    private events: any[] = [],
  ) {
    this.init()
  }

  async init() {
    const promise = ResourcesManager.Instance.loaddir(this.path)

    this.fsm.waitingList.push(promise)

    this.animationClip = new AnimationClip()

    this.animationClip.name = this.path

    const spriteFrame = await promise

    const track = new animation.ObjectTrack() // 创建一个对象轨道
    track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame') // 指定轨道路径，即指定目标对象为 "Foo" 子节点的 "position" 属性
    const frames: Array<[number, SpriteFrame]> = sortspriteFrame(spriteFrame).map((item, index) => [
      this.speed * index,
      item,
    ])
    track.channel.curve.assignSorted(frames)

    // 最后将轨道添加到动画剪辑以应用
    this.animationClip.addTrack(track)

    this.animationClip.duration = spriteFrame.length * ANIMATION_SPEED // 整个动画剪辑的周期
    this.animationClip.wrapMode = this.warpMode

    for (const event of this.events) {
      this.animationClip.events.push(event)
    }
    this.animationClip.updateEventDatas()
  }
  run() {
    if (this.fsm?.animationComponent?.defaultClip === this.animationClip) {
      return
    }
    this.fsm.animationComponent.defaultClip = this.animationClip
    this.fsm.animationComponent.play()
  }
}
