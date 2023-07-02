import { _decorator } from 'cc'
import { IEntity } from '../../Level'

import { EnityManger } from '../Base/EnityManger'
import { SmokeMachine } from './SmokeMachine'

const { ccclass } = _decorator
@ccclass('SmokeManager')
export class SmokeManager extends EnityManger {
  async init(params: IEntity) {
    this.fsm = this.addComponent(SmokeMachine)
    await this.fsm.init()
    super.init(params)
  }
}
