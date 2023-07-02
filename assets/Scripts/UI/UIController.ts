import { _decorator, Component, AudioClip } from 'cc'
import { CONTROLLER_ENMU, EVENTMANAGER } from '../../Enums'
import DataManager from '../RunTime/DataManager'
import EventManager from '../RunTime/EventManager'
const { ccclass, property } = _decorator

@ccclass('UIController')
export class UIController extends Component {
  @property(AudioClip)
  soundclip: AudioClip[] = []
  handler(evt: Event, type: string) {
    const pla = DataManager.Instance.player
    if (pla === null) {
      return
    }

    EventManager.Instance.emit(EVENTMANAGER.PLAYER_CONTROLLER, type as CONTROLLER_ENMU, this.soundclip)
  }
}
