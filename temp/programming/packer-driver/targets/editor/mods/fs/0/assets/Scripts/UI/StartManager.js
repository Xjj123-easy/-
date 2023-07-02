System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, SCENE_ENUM, FaderManager, _dec, _class, _crd, ccclass, property, StartManager;

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFaderManager(extras) {
    _reporterNs.report("FaderManager", "../RunTime/FaderManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      SCENE_ENUM = _unresolved_2.SCENE_ENUM;
    }, function (_unresolved_3) {
      FaderManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5b8bH3Y5tCSZVWFFOCRd3V", "StartManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = StartManager
       * DateTime = Thu Jun 29 2023 12:02:53 GMT+0800 (中国标准时间)
       * Author = 杰哥真好
       * FileBasename = StartManager.ts
       * FileBasenameNoExtension = StartManager
       * URL = db://assets/Scripts/UI/StartManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("StartManager", StartManager = (_dec = ccclass('StartManager'), _dec(_class = class StartManager extends Component {
        onLoad() {}

        start() {
          director.preloadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).scene);
          (_crd && FaderManager === void 0 ? (_reportPossibleCrUseOfFaderManager({
            error: Error()
          }), FaderManager) : FaderManager).Instance.fadeOut(1000);
          this.node.once(Node.EventType.TOUCH_END, this.handler, this);
        }

        async handler() {
          await (_crd && FaderManager === void 0 ? (_reportPossibleCrUseOfFaderManager({
            error: Error()
          }), FaderManager) : FaderManager).Instance.fadeIn(300);
          director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).scene);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StartManager.js.map