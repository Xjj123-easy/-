import { _decorator, Component, Node, director, AudioClip } from 'cc'
import { ILevel } from '../../Level'
import level from '../../Level'
import DataManager, { IRecord } from '../RunTime/DataManager'
import { TlieMapManager } from '../Tile/TlieMapManager'
import EventManager from '../RunTime/EventManager'
import { DRIECTION_ENUM, ENTINY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENTMANAGER, SCENE_ENUM } from '../../Enums'
import { creatUINode } from '../Utiils/index'
import { PlayerManager } from '../Player/PlayerManager'
import { WoodenSkeletonManager } from '../WoodenSkeleton/WoodenSkeletonManager'
import { DoorManager } from '../Door/DoorManager'
import { IronskeletonManager } from '../ironskeleton/IronskeletonManager'
import { BurstManager } from '../Burst/BurstManager'
import { SpikesManager } from '../spikes/SpikesManager'
import { SmokeManager } from '../smoke/SmokeManager'
import FaderManager from '../RunTime/FaderManager'
import { ShakeManager } from '../UI/ShakeManager'
import MusicManager from '../RunTime/MusicManager'
const { ccclass, property } = _decorator

/**
 * Predefined variables
 * Name = BattleManager
 * DateTime = Fri May 19 2023 14:21:20 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = BattleManager.ts
 * FileBasenameNoExtension = BattleManager
 * URL = db://assets/Scripts/Scene/BattleManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
const TILE_HEIGHT = 55
const TILE_WIDTH = 55
@ccclass('BattleManager')
export class BattleManager extends Component {
  @property(AudioClip)
  clip: AudioClip = null
  levelss: ILevel //关卡
  stage: Node = null
  smokeLayer: Node = null
  private hasinited: boolean = false //第一次从菜单进来的时候，入场fade效果不一样，特殊处理一下

  start() {
    this.initScence()
  }
  initScence() {
    this.generaterStage()
    this.initLevel()
  }

  onLoad() {
    director.preloadScene(SCENE_ENUM.strat)
    DataManager.Instance.levelindex = 1
    EventManager.Instance.on(EVENTMANAGER.NEXT_LEVEL, this.nextlevel, this)
    EventManager.Instance.on(EVENTMANAGER.PLAYERMOVE_END, this.CheeckDoor, this)
    EventManager.Instance.on(EVENTMANAGER.SMOKE_SHOW, this.generaterSmoke, this)
    EventManager.Instance.on(EVENTMANAGER.RECORD_STEP, this.record, this)
    EventManager.Instance.on(EVENTMANAGER.REVOKE_STEP, this.revoke, this)
    EventManager.Instance.on(EVENTMANAGER.RESTART, this.reStart, this)
    EventManager.Instance.on(EVENTMANAGER.EXIT, this.exit, this)
  }

  onDestroy() {
    EventManager.Instance.off(EVENTMANAGER.NEXT_LEVEL, this.nextlevel)
    EventManager.Instance.off(EVENTMANAGER.PLAYERMOVE_END, this.CheeckDoor)
    EventManager.Instance.off(EVENTMANAGER.SMOKE_SHOW, this.generaterSmoke)
    EventManager.Instance.off(EVENTMANAGER.RECORD_STEP, this.record)
    EventManager.Instance.off(EVENTMANAGER.REVOKE_STEP, this.revoke)
    EventManager.Instance.off(EVENTMANAGER.RESTART, this.reStart)
    EventManager.Instance.off(EVENTMANAGER.EXIT, this.exit)
    EventManager.Instance.clear()
  }
  reStart() {
    MusicManager.Instance.stop()
    this.initLevel()
  }

  exit() {
    this.node.destroy()
    MusicManager.Instance.destory()
    director.loadScene(SCENE_ENUM.strat)
  }
  async initLevel() {
    const levels = level[`level${DataManager.Instance.levelindex}`]
    if (levels) {
      if (this.hasinited) {
        await FaderManager.Instance.fadeIn()
      } else {
        await FaderManager.Instance.mask()
      }

      this.clearlevel()
      this.levelss = levels
      DataManager.Instance.mapInfo = this.levelss.mapInfo
      DataManager.Instance.mapColumnCount = this.levelss.mapInfo[0]?.length || 0
      DataManager.Instance.mapRowCount = this.levelss.mapInfo.length || 0

      await Promise.all([
        this.generateTileMap(),
        this.generaterDoor(),
        this.generaterEnemy(),
        this.generaterSmokeLayer(),
        this.generaterSpikes(),
        this.generaterBurst(),
      ])

      await Promise.all([
        await this.generaterPlayer(),
        await FaderManager.Instance.fadeOut(),
        await MusicManager.Instance.play(true, this.clip),
      ])

      this.hasinited = true
    } else {
      this.exit()
    }
  }

  // 下一个关卡
  nextlevel() {
    DataManager.Instance.levelindex++
    this.initLevel()
  }

  // 清除原先等级
  clearlevel() {
    this.stage.destroyAllChildren()
    DataManager.Instance.reset()
  }

  generaterStage() {
    this.stage = creatUINode()
    this.stage.setParent(this.node)
    this.stage.setSiblingIndex(2)
    this.stage.addComponent(ShakeManager)
  }
  async generateTileMap() {
    const tlieMap = creatUINode()
    tlieMap.setParent(this.stage)
    const TlieMapManagers = tlieMap.addComponent(TlieMapManager)
    await TlieMapManagers.init()
    this.adaptor()
  }

  async generaterPlayer() {
    const player = creatUINode()
    player.setParent(this.stage)
    const playerManagers = player.addComponent(PlayerManager)
    await playerManagers.init(this.levelss.player)
    DataManager.Instance.player = playerManagers
    EventManager.Instance.emit(EVENTMANAGER.PLAYER_BORN, true)
  }

  async generaterEnemy() {
    DataManager.Instance.enemes = []
    const promises = []

    for (let i = 0; i < this.levelss.enemies.length; i++) {
      const enemy = this.levelss.enemies[i]
      const node = creatUINode()
      node.setParent(this.stage)
      const Manager = enemy.type === ENTITY_TYPE_ENUM.WOODENSKELETON ? WoodenSkeletonManager : IronskeletonManager
      const MA = node.addComponent(Manager)
      promises.push(MA.init(enemy))
      DataManager.Instance.enemes.push(MA)
    }
    Promise.all(promises)
  }

  async generaterDoor() {
    const door = creatUINode()
    door.setParent(this.stage)
    const doorManager = door.addComponent(DoorManager)
    await doorManager.init(this.levelss.door)
    DataManager.Instance.door = doorManager
  }

  async generaterBurst() {
    const promises = []
    DataManager.Instance.burst = []
    for (let i = 0; i < this.levelss.bursts.length; i++) {
      const burst = this.levelss.bursts[i]
      const node = creatUINode()
      node.setParent(this.stage)
      const burstManager = node.addComponent(BurstManager)
      promises.push(burstManager.init(burst))
      DataManager.Instance.burst.push(burstManager)
    }
    Promise.all(promises)
  }
  async generaterSpikes() {
    const promises = []
    DataManager.Instance.spikes = []
    for (let i = 0; i < this.levelss.spikes.length; i++) {
      const spik = this.levelss.spikes[i]
      const node = creatUINode()
      node.setParent(this.stage)
      const spikesManager = node.addComponent(SpikesManager)
      promises.push(spikesManager.init(spik))
      DataManager.Instance.spikes.push(spikesManager)
    }
    Promise.all(promises)
  }

  async generaterSmokeLayer() {
    this.smokeLayer = creatUINode()
    this.smokeLayer.setParent(this.stage)
  }
  async generaterSmoke(direction: DRIECTION_ENUM, x: number, y: number) {
    const item = DataManager.Instance.smoke.find(s => s.state === ENTINY_STATE_ENUM.DEATH)
    if (item) {
      item.x = x
      item.y = y
      item.direction = direction
      // item.node.setPosition(item.x * TILE_WIDTH - TILE_WIDTH * 1.5, -item * TILE_HEIGHT + TILE_HEIGHT * 1.5)
      item.node.setPosition(item.x * TILE_WIDTH, -item * TILE_HEIGHT)
      item.state = ENTINY_STATE_ENUM.IDLE
    } else {
      const node = creatUINode()
      node.setParent(this.smokeLayer)
      const smokemanager = node.addComponent(SmokeManager)
      await smokemanager.init({
        x,
        y,
        direction,
        state: ENTINY_STATE_ENUM.IDLE,
        type: ENTITY_TYPE_ENUM.SMOKE,
      })
      DataManager.Instance.smoke.push(smokemanager)
    }
  }

  adaptor() {
    const { mapColumnCount, mapRowCount } = DataManager.Instance
    const DiX = (mapRowCount / 2) * TILE_WIDTH
    const Diy = (TILE_HEIGHT * mapColumnCount) / 2 + 80
    this.stage.setPosition(-DiX, Diy)
    this.stage.getComponent(ShakeManager).stop()
  }

  CheeckDoor() {
    const { x: playerX, y: playerY } = DataManager.Instance.player
    const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.door
    if (doorX === playerX && doorY === playerY && doorState === ENTINY_STATE_ENUM.DEATH) {
      EventManager.Instance.emit(EVENTMANAGER.NEXT_LEVEL)
    }
  }

  record() {
    const item: IRecord = {
      player: {
        x: DataManager.Instance.player.x,
        y: DataManager.Instance.player.y,
        type: DataManager.Instance.player.type,
        direction: DataManager.Instance.player.direction,
        state:
          DataManager.Instance.player.state === ENTINY_STATE_ENUM.AIRDEATH ||
          DataManager.Instance.player.state === ENTINY_STATE_ENUM.DEATH ||
          DataManager.Instance.player.state === ENTINY_STATE_ENUM.IDLE
            ? DataManager.Instance.player.state
            : ENTINY_STATE_ENUM.IDLE,
      },
      door: {
        x: DataManager.Instance.door.x,
        y: DataManager.Instance.door.y,
        type: DataManager.Instance.door.type,
        direction: DataManager.Instance.door.direction,
        state: DataManager.Instance.door.state,
      },
      enemies: DataManager.Instance.enemes.map(({ x, y, direction, state, type }) => ({
        x,
        y,
        direction,
        state,
        type,
      })),
      bursts: DataManager.Instance.burst.map(({ x, y, direction, state, type }) => ({
        x,
        y,
        direction,
        state,
        type,
      })),
      spikes: DataManager.Instance.spikes.map(({ x, y, count, type }) => ({
        x,
        y,
        count,
        type,
      })),
    }
    DataManager.Instance.record.push(item)
  }
  revoke() {
    const item = DataManager.Instance.record.pop()
    if (item) {
      DataManager.Instance.player.x = DataManager.Instance.player.targetX = item.player.x
      DataManager.Instance.player.y = DataManager.Instance.player.targetY = item.player.y
      DataManager.Instance.player.state = item.player.state
      DataManager.Instance.player.direction = item.player.direction

      DataManager.Instance.door.x = item.door.x
      DataManager.Instance.door.y = item.door.y
      DataManager.Instance.door.state = item.door.state
      DataManager.Instance.door.direction = item.door.direction

      for (let i = 0; i < DataManager.Instance.enemes.length; i++) {
        const enemy = item.enemies[i]
        DataManager.Instance.enemes[i].x = enemy.x
        DataManager.Instance.enemes[i].y = enemy.y
        DataManager.Instance.enemes[i].state = enemy.state
        DataManager.Instance.enemes[i].direction = enemy.direction
        DataManager.Instance.enemes[i].type = enemy.type
      }

      for (let i = 0; i < DataManager.Instance.burst.length; i++) {
        const burst = item.bursts[i]
        DataManager.Instance.burst[i].x = burst.x
        DataManager.Instance.burst[i].y = burst.y
        DataManager.Instance.burst[i].state = burst.state
        DataManager.Instance.burst[i].direction = burst.direction
      }

      for (let i = 0; i < DataManager.Instance.spikes.length; i++) {
        const spike = item.spikes[i]
        DataManager.Instance.spikes[i].x = spike.x
        DataManager.Instance.spikes[i].y = spike.y
        DataManager.Instance.spikes[i].count = spike.count
        DataManager.Instance.spikes[i].type = spike.type
      }
    }
  }
}
