import { _decorator, Component } from 'cc'
import { EVENTMANAGER } from '../../Enums'
import EventManager from '../RunTime/EventManager'
const { ccclass } = _decorator

@ccclass('MenuManager')
export class MenuManager extends Component {
  revoke() {
    EventManager.Instance.emit(EVENTMANAGER.REVOKE_STEP)
  }
  restart() {
    EventManager.Instance.emit(EVENTMANAGER.RESTART)
  }
  exit() {
    EventManager.Instance.emit(EVENTMANAGER.EXIT)
  }
}
