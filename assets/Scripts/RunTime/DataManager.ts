import { ILevel, ITile } from '../../Level'
import { EnemyManager } from '../Base/EnemyManager'
import Singleton from '../Base/Singleton'
import { BurstManager } from '../Burst/BurstManager'
import { DoorManager } from '../Door/DoorManager'
import { PlayerManager } from '../Player/PlayerManager'
import { SmokeManager } from '../smoke/SmokeManager'
import { SpikesManager } from '../spikes/SpikesManager'
import { TlieManager } from '../Tile/TileManager'

export type IRecord = Omit<ILevel, 'mapInfo'>
export default class DataManager extends Singleton {
  mapInfo: Array<Array<ITile>> = []
  mapRowCount: number = 0
  mapColumnCount: number = 0
  levelindex: number = 1
  tileInfo: Array<Array<TlieManager>> = []
  player: PlayerManager
  enemes: EnemyManager[]
  door: DoorManager
  burst: BurstManager[]
  spikes: SpikesManager[]
  smoke: SmokeManager[]
  record: IRecord[]

  static get Instance() {
    return super.GetInstance<DataManager>()
  }
  private constructor() {
    super()
    this.reset()
  }
  reset() {
    this.mapInfo = []
    this.mapColumnCount = 0
    this.tileInfo = []
    this.mapRowCount = 0

    this.player = null
    this.enemes = []
    this.door = null
    this.burst = []
    this.spikes = []
    this.smoke = []
    this.record = []
  }
}
