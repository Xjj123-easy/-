System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITile(extras) {
    _reporterNs.report("ITile", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "../Burst/BurstManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorManager(extras) {
    _reporterNs.report("DoorManager", "../Door/DoorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "../Player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeManager(extras) {
    _reporterNs.report("SmokeManager", "../smoke/SmokeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesManager(extras) {
    _reporterNs.report("SpikesManager", "../spikes/SpikesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTlieManager(extras) {
    _reporterNs.report("TlieManager", "../Tile/TileManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a79e9sTlVCOqLAb+6avxnB", "DataManager", undefined);

      _export("default", DataManager = class DataManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        static get Instance() {
          return super.GetInstance();
        }

        constructor() {
          super();

          _defineProperty(this, "mapInfo", []);

          _defineProperty(this, "mapRowCount", 0);

          _defineProperty(this, "mapColumnCount", 0);

          _defineProperty(this, "levelindex", 1);

          _defineProperty(this, "tileInfo", []);

          _defineProperty(this, "player", void 0);

          _defineProperty(this, "enemes", void 0);

          _defineProperty(this, "door", void 0);

          _defineProperty(this, "burst", void 0);

          _defineProperty(this, "spikes", void 0);

          _defineProperty(this, "smoke", void 0);

          _defineProperty(this, "record", void 0);

          this.reset();
        }

        reset() {
          this.mapInfo = [];
          this.mapColumnCount = 0;
          this.tileInfo = [];
          this.mapRowCount = 0;
          this.player = null;
          this.enemes = [];
          this.door = null;
          this.burst = [];
          this.spikes = [];
          this.smoke = [];
          this.record = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataManager.js.map