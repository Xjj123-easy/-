System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RenderRoot2D, game, Singleton, DrawManager, DURATION, creatUINode, FaderManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawManager(extras) {
    _reporterNs.report("DrawManager", "../UI/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDURATION(extras) {
    _reporterNs.report("DURATION", "../UI/DrawManager", _context.meta, extras);
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
      Singleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      DrawManager = _unresolved_3.DrawManager;
      DURATION = _unresolved_3.DURATION;
    }, function (_unresolved_4) {
      creatUINode = _unresolved_4.creatUINode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a00d2ezNL5Cjo0mLHoLAjc3", "FaderManager", undefined);

      _export("default", FaderManager = class FaderManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_fader", null);
        }

        static get Instance() {
          return super.GetInstance();
        }

        get fader() {
          if (this._fader !== null) {
            return this._fader;
          }

          var root = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          root.addComponent(RenderRoot2D);
          var faderNode = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
            error: Error()
          }), creatUINode) : creatUINode)();
          faderNode.setParent(root);
          this._fader = faderNode.addComponent(_crd && DrawManager === void 0 ? (_reportPossibleCrUseOfDrawManager({
            error: Error()
          }), DrawManager) : DrawManager);

          this._fader.init();

          game.addPersistRootNode(root);
          return this._fader;
        }

        fadeIn(duration) {
          if (duration === void 0) {
            duration = _crd && DURATION === void 0 ? (_reportPossibleCrUseOfDURATION({
              error: Error()
            }), DURATION) : DURATION;
          }

          return this.fader.fadeIn(duration);
        }

        fadeOut(duration) {
          if (duration === void 0) {
            duration = _crd && DURATION === void 0 ? (_reportPossibleCrUseOfDURATION({
              error: Error()
            }), DURATION) : DURATION;
          }

          return this.fader.fadeOut(duration);
        }

        mask() {
          return this.fader.mask();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FaderManager.js.map