import { _decorator, Component, game, Graphics, Color, find, Node, UITransform, BlockInputEvents } from 'cc'
const { ccclass } = _decorator
export const DURATION = 500
enum FADE_STATE_ENUM {
  IDLE = 'IDLE',
  FADE_IN = 'FADE_IN',
  FADE_OUT = 'FADE_OUT',
}
@ccclass('DrawManager')
export class DrawManager extends Component {
  private ctx: Graphics
  private state: FADE_STATE_ENUM = FADE_STATE_ENUM.IDLE
  private totalTime: number = 0
  private drution: number = 0
  private ca: Node
  private fadeResolve: (value: PromiseLike<null>) => void
  private block: BlockInputEvents
  init() {
    this.ctx = this.addComponent(Graphics)
    this.ca = this.findCanvas()
    this.block = this.addComponent(BlockInputEvents)
    const transfrom = this.getComponent(UITransform)
    transfrom.setAnchorPoint(0.5, 0.5)
    transfrom.setContentSize(this.ca.getComponent(UITransform).width, this.ca.getComponent(UITransform).height)

    this.setAlpa(1)
  }
  setAlpa(percent: number) {
    this.ctx.clear()
    this.ca = this.findCanvas()
    this.ctx.rect(0, 0, this.ca.getComponent(UITransform).width, this.ca.getComponent(UITransform).height)
    this.ctx.fillColor = new Color(0, 0, 0, 255 * percent)
    this.ctx.fill()
    this.block.enabled = percent === 1
  }

  findCanvas() {
    if (this.ca === null) return
    return find('/Canvas')
  }
  update() {
    const precent = (game.totalTime - this.totalTime) / this.drution
    switch (this.state) {
      case FADE_STATE_ENUM.FADE_IN:
        if (precent < 1) {
          this.setAlpa(precent)
        } else {
          this.setAlpa(1)
          this.state = FADE_STATE_ENUM.IDLE
          this.fadeResolve(null)
        }
        break
      case FADE_STATE_ENUM.FADE_OUT:
        if (precent < 1) {
          this.setAlpa(1 - precent)
        } else {
          this.setAlpa(0)
          this.fadeResolve(null)
          this.state = FADE_STATE_ENUM.IDLE
        }
        break
      default:
        break
    }
  }
  fadeIn(duration: number = DURATION) {
    this.setAlpa(1)
    this.drution = duration
    this.state = FADE_STATE_ENUM.FADE_IN
    this.totalTime = game.totalTime
    return new Promise(re => {
      this.fadeResolve = re
    })
  }
  fadeOut(duration: number = DURATION) {
    this.setAlpa(0)
    this.drution = duration
    this.state = FADE_STATE_ENUM.FADE_OUT
    this.totalTime = game.totalTime
    return new Promise(re => {
      this.fadeResolve = re
    })
  }
  mask() {
    this.setAlpa(1)
    return new Promise(re => {
      setTimeout(re, this.drution)
    })
  }
}
