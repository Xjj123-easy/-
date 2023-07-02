import { _decorator, Component, game } from 'cc'
import { EVENTMANAGER, SHAKE_DIRECTION_ENMU } from '../../Enums'
import EventManager from '../RunTime/EventManager'
const { ccclass } = _decorator

@ccclass('ShakeManager')
export class ShakeManager extends Component {
  private isShaking: boolean = false
  private oldTime: number = 0
  private oldPos: { x: number; y: number } = { x: 0, y: 0 }
  private shakeType: SHAKE_DIRECTION_ENMU
  onLoad() {
    EventManager.Instance.on(EVENTMANAGER.SHAKE_SHOW, this.onshake, this)
  }
  onDstroy() {
    EventManager.Instance.off(EVENTMANAGER.SHAKE_SHOW, this.onshake)
  }
  stop() {
    this.isShaking = false
  }
  update() {
    if (this.isShaking) {
      //持续时间
      const duration = 200
      //振幅
      const amount = 1.6
      //频率
      const frequency = 12
      //当前时间
      const crruentTime = (game.totalTime - this.oldTime) / 1000
      //总时间
      const totalTime = duration / 1000

      //y=A*sin(w*x+z)

      const offest = amount * Math.sin(frequency * Math.PI * crruentTime)
      switch (this.shakeType) {
        case SHAKE_DIRECTION_ENMU.TOP:
          this.node.setPosition(this.oldPos.x, this.oldPos.y - offest)
          break
        case SHAKE_DIRECTION_ENMU.BOTTOM:
          this.node.setPosition(this.oldPos.x, this.oldPos.y + offest)
          break
        case SHAKE_DIRECTION_ENMU.LEFT:
          this.node.setPosition(this.oldPos.x - offest, this.oldPos.y)
          break
        case SHAKE_DIRECTION_ENMU.RIGHT:
          this.node.setPosition(this.oldPos.x + offest, this.oldPos.y)
          break
        default:
          break
      }

      if (crruentTime > totalTime) {
        this.isShaking = false
        this.node.setPosition(this.oldPos.x, this.oldPos.y)
      }
    }
  }
  //振动
  onshake(inputDirection: SHAKE_DIRECTION_ENMU) {
    if (this.isShaking) {
      return
    }
    this.oldTime = game.totalTime
    this.oldPos.x = this.node.position.x
    this.oldPos.y = this.node.position.y
    this.isShaking = true
    this.shakeType = inputDirection
  }
}
