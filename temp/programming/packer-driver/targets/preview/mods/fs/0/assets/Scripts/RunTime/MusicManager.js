System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RenderRoot2D, game, AudioManager, Singleton, creatUINode, MusicManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreatUINode(extras) {
    _reporterNs.report("creatUINode", "../Utiils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      RenderRoot2D = _cc.RenderRoot2D;
      game = _cc.game;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.default;
    }, function (_unresolved_4) {
      creatUINode = _unresolved_4.creatUINode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "808a4J5QLVFl6HHLF6J1RI6", "MusicManager", undefined);

      _export("default", MusicManager = class MusicManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_audio", null);

          _defineProperty(this, "root", null);
        }

        static get Instance() {
          return super.GetInstance();
        }

        get audio() {
          if (this._audio !== null) {
            return this._audio;
          }

          this.root = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          this.root.addComponent(RenderRoot2D);
          var faderNode = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          faderNode.setParent(this.root);
          this._audio = faderNode.addComponent(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager);

          this._audio.init();

          game.addPersistRootNode(this.root);
          return this._audio;
        }

        play(loop, clip) {
          return this.audio.playMusic(loop, clip);
        }

        sound(name, volumeScale) {
          return this.audio.playSound(name, volumeScale);
        }

        stop() {
          return this.audio.stop();
        }

        destory() {
          this.audio.stop();
          game.removePersistRootNode(this.root);
          return this.audio.destory();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MusicManager.js.map