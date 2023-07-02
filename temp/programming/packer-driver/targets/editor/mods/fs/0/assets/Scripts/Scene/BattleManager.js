System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, AudioClip, level, DataManager, TlieMapManager, EventManager, ENTINY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENTMANAGER, SCENE_ENUM, creatUINode, PlayerManager, WoodenSkeletonManager, DoorManager, IronskeletonManager, BurstManager, SpikesManager, SmokeManager, FaderManager, ShakeManager, MusicManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, BattleManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel(extras) {
    _reporterNs.report("level", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRecord(extras) {
    _reporterNs.report("IRecord", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTlieMapManager(extras) {
    _reporterNs.report("TlieMapManager", "../Tile/TlieMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreatUINode(extras) {
    _reporterNs.report("creatUINode", "../Utiils/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "../Player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenSkeletonManager(extras) {
    _reporterNs.report("WoodenSkeletonManager", "../WoodenSkeleton/WoodenSkeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorManager(extras) {
    _reporterNs.report("DoorManager", "../Door/DoorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronskeletonManager(extras) {
    _reporterNs.report("IronskeletonManager", "../ironskeleton/IronskeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "../Burst/BurstManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesManager(extras) {
    _reporterNs.report("SpikesManager", "../spikes/SpikesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeManager(extras) {
    _reporterNs.report("SmokeManager", "../smoke/SmokeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFaderManager(extras) {
    _reporterNs.report("FaderManager", "../RunTime/FaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeManager(extras) {
    _reporterNs.report("ShakeManager", "../UI/ShakeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "../RunTime/MusicManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      level = _unresolved_2.default;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      TlieMapManager = _unresolved_4.TlieMapManager;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      ENTINY_STATE_ENUM = _unresolved_6.ENTINY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_6.ENTITY_TYPE_ENUM;
      EVENTMANAGER = _unresolved_6.EVENTMANAGER;
      SCENE_ENUM = _unresolved_6.SCENE_ENUM;
    }, function (_unresolved_7) {
      creatUINode = _unresolved_7.creatUINode;
    }, function (_unresolved_8) {
      PlayerManager = _unresolved_8.PlayerManager;
    }, function (_unresolved_9) {
      WoodenSkeletonManager = _unresolved_9.WoodenSkeletonManager;
    }, function (_unresolved_10) {
      DoorManager = _unresolved_10.DoorManager;
    }, function (_unresolved_11) {
      IronskeletonManager = _unresolved_11.IronskeletonManager;
    }, function (_unresolved_12) {
      BurstManager = _unresolved_12.BurstManager;
    }, function (_unresolved_13) {
      SpikesManager = _unresolved_13.SpikesManager;
    }, function (_unresolved_14) {
      SmokeManager = _unresolved_14.SmokeManager;
    }, function (_unresolved_15) {
      FaderManager = _unresolved_15.default;
    }, function (_unresolved_16) {
      ShakeManager = _unresolved_16.ShakeManager;
    }, function (_unresolved_17) {
      MusicManager = _unresolved_17.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91725WHhqRC5bd9qAUCdu+z", "BattleManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      TILE_HEIGHT = 55;
      TILE_WIDTH = 55;

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec2 = property(AudioClip), _dec(_class = (_class2 = (_temp = class BattleManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clip", _descriptor, this);

          _defineProperty(this, "levelss", void 0);

          _defineProperty(this, "stage", null);

          _defineProperty(this, "smokeLayer", null);

          _defineProperty(this, "hasinited", false);
        }

        //第一次从菜单进来的时候，入场fade效果不一样，特殊处理一下
        start() {
          this.initScence();
        }

        initScence() {
          this.generaterStage();
          this.initLevel();
        }

        onLoad() {
          director.preloadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).strat);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelindex = 1;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).NEXT_LEVEL, this.nextlevel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.CheeckDoor, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SMOKE_SHOW, this.generaterSmoke, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).RECORD_STEP, this.record, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).REVOKE_STEP, this.revoke, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).RESTART, this.reStart, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).EXIT, this.exit, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).NEXT_LEVEL, this.nextlevel);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.CheeckDoor);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SMOKE_SHOW, this.generaterSmoke);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).RECORD_STEP, this.record);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).REVOKE_STEP, this.revoke);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).RESTART, this.reStart);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).EXIT, this.exit);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.clear();
        }

        reStart() {
          (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
            error: Error()
          }), MusicManager) : MusicManager).Instance.stop();
          this.initLevel();
        }

        exit() {
          this.node.destroy();
          (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
            error: Error()
          }), MusicManager) : MusicManager).Instance.destory();
          director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).strat);
        }

        async initLevel() {
          const levels = (_crd && level === void 0 ? (_reportPossibleCrUseOflevel({
            error: Error()
          }), level) : level)[`level${(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelindex}`];

          if (levels) {
            var _this$levelss$mapInfo;

            if (this.hasinited) {
              await (_crd && FaderManager === void 0 ? (_reportPossibleCrUseOfFaderManager({
                error: Error()
              }), FaderManager) : FaderManager).Instance.fadeIn();
            } else {
              await (_crd && FaderManager === void 0 ? (_reportPossibleCrUseOfFaderManager({
                error: Error()
              }), FaderManager) : FaderManager).Instance.mask();
            }

            this.clearlevel();
            this.levelss = levels;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapInfo = this.levelss.mapInfo;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapColumnCount = ((_this$levelss$mapInfo = this.levelss.mapInfo[0]) === null || _this$levelss$mapInfo === void 0 ? void 0 : _this$levelss$mapInfo.length) || 0;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapRowCount = this.levelss.mapInfo.length || 0;
            await Promise.all([this.generateTileMap(), this.generaterDoor(), this.generaterEnemy(), this.generaterSmokeLayer(), this.generaterSpikes(), this.generaterBurst()]);
            await Promise.all([await this.generaterPlayer(), await (_crd && FaderManager === void 0 ? (_reportPossibleCrUseOfFaderManager({
              error: Error()
            }), FaderManager) : FaderManager).Instance.fadeOut(), await (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).Instance.play(true, this.clip)]);
            this.hasinited = true;
          } else {
            this.exit();
          }
        } // 下一个关卡


        nextlevel() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelindex++;
          this.initLevel();
        } // 清除原先等级


        clearlevel() {
          this.stage.destroyAllChildren();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.reset();
        }

        generaterStage() {
          this.stage = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          this.stage.setParent(this.node);
          this.stage.setSiblingIndex(2);
          this.stage.addComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager);
        }

        async generateTileMap() {
          const tlieMap = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          tlieMap.setParent(this.stage);
          const TlieMapManagers = tlieMap.addComponent(_crd && TlieMapManager === void 0 ? (_reportPossibleCrUseOfTlieMapManager({
            error: Error()
          }), TlieMapManager) : TlieMapManager);
          await TlieMapManagers.init();
          this.adaptor();
        }

        async generaterPlayer() {
          const player = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          player.setParent(this.stage);
          const playerManagers = player.addComponent(_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager);
          await playerManagers.init(this.levelss.player);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player = playerManagers;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYER_BORN, true);
        }

        async generaterEnemy() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemes = [];
          const promises = [];

          for (let i = 0; i < this.levelss.enemies.length; i++) {
            const enemy = this.levelss.enemies[i];
            const node = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
              error: Error()
            }), creatUINode) : creatUINode)();
            node.setParent(this.stage);
            const Manager = enemy.type === (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).WOODENSKELETON ? _crd && WoodenSkeletonManager === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonManager({
              error: Error()
            }), WoodenSkeletonManager) : WoodenSkeletonManager : _crd && IronskeletonManager === void 0 ? (_reportPossibleCrUseOfIronskeletonManager({
              error: Error()
            }), IronskeletonManager) : IronskeletonManager;
            const MA = node.addComponent(Manager);
            promises.push(MA.init(enemy));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemes.push(MA);
          }

          Promise.all(promises);
        }

        async generaterDoor() {
          const door = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          door.setParent(this.stage);
          const doorManager = door.addComponent(_crd && DoorManager === void 0 ? (_reportPossibleCrUseOfDoorManager({
            error: Error()
          }), DoorManager) : DoorManager);
          await doorManager.init(this.levelss.door);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door = doorManager;
        }

        async generaterBurst() {
          const promises = [];
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.burst = [];

          for (let i = 0; i < this.levelss.bursts.length; i++) {
            const burst = this.levelss.bursts[i];
            const node = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
              error: Error()
            }), creatUINode) : creatUINode)();
            node.setParent(this.stage);
            const burstManager = node.addComponent(_crd && BurstManager === void 0 ? (_reportPossibleCrUseOfBurstManager({
              error: Error()
            }), BurstManager) : BurstManager);
            promises.push(burstManager.init(burst));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.burst.push(burstManager);
          }

          Promise.all(promises);
        }

        async generaterSpikes() {
          const promises = [];
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.spikes = [];

          for (let i = 0; i < this.levelss.spikes.length; i++) {
            const spik = this.levelss.spikes[i];
            const node = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
              error: Error()
            }), creatUINode) : creatUINode)();
            node.setParent(this.stage);
            const spikesManager = node.addComponent(_crd && SpikesManager === void 0 ? (_reportPossibleCrUseOfSpikesManager({
              error: Error()
            }), SpikesManager) : SpikesManager);
            promises.push(spikesManager.init(spik));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.push(spikesManager);
          }

          Promise.all(promises);
        }

        async generaterSmokeLayer() {
          this.smokeLayer = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          this.smokeLayer.setParent(this.stage);
        }

        async generaterSmoke(direction, x, y) {
          const item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.smoke.find(s => s.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);

          if (item) {
            item.x = x;
            item.y = y;
            item.direction = direction; // item.node.setPosition(item.x * TILE_WIDTH - TILE_WIDTH * 1.5, -item * TILE_HEIGHT + TILE_HEIGHT * 1.5)

            item.node.setPosition(item.x * TILE_WIDTH, -item * TILE_HEIGHT);
            item.state = (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE;
          } else {
            const node = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
              error: Error()
            }), creatUINode) : creatUINode)();
            node.setParent(this.smokeLayer);
            const smokemanager = node.addComponent(_crd && SmokeManager === void 0 ? (_reportPossibleCrUseOfSmokeManager({
              error: Error()
            }), SmokeManager) : SmokeManager);
            await smokemanager.init({
              x,
              y,
              direction,
              state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
              type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SMOKE
            });
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.smoke.push(smokemanager);
          }
        }

        adaptor() {
          const {
            mapColumnCount,
            mapRowCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const DiX = mapRowCount / 2 * TILE_WIDTH;
          const Diy = TILE_HEIGHT * mapColumnCount / 2 + 80;
          this.stage.setPosition(-DiX, Diy);
          this.stage.getComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager).stop();
        }

        CheeckDoor() {
          const {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;
          const {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door;

          if (doorX === playerX && doorY === playerY && doorState === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
            error: Error()
          }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).NEXT_LEVEL);
          }
        }

        record() {
          const item = {
            player: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.y,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.type,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).AIRDEATH || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE ? (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state : (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
                error: Error()
              }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE
            },
            door: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.y,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.type,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.state
            },
            enemies: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemes.map(({
              x,
              y,
              direction,
              state,
              type
            }) => ({
              x,
              y,
              direction,
              state,
              type
            })),
            bursts: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.burst.map(({
              x,
              y,
              direction,
              state,
              type
            }) => ({
              x,
              y,
              direction,
              state,
              type
            })),
            spikes: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.map(({
              x,
              y,
              count,
              type
            }) => ({
              x,
              y,
              count,
              type
            }))
          };
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.record.push(item);
        }

        revoke() {
          const item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.record.pop();

          if (item) {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.x = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetX = item.player.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.y = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetY = item.player.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.state = item.player.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.direction = item.player.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.x = item.door.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.y = item.door.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.state = item.door.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.direction = item.door.direction;

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemes.length; i++) {
              const enemy = item.enemies[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemes[i].x = enemy.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemes[i].y = enemy.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemes[i].state = enemy.state;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemes[i].direction = enemy.direction;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemes[i].type = enemy.type;
            }

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.burst.length; i++) {
              const burst = item.bursts[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.burst[i].x = burst.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.burst[i].y = burst.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.burst[i].state = burst.state;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.burst[i].direction = burst.direction;
            }

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.length; i++) {
              const spike = item.spikes[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].x = spike.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].y = spike.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].count = spike.count;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].type = spike.type;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleManager.js.map