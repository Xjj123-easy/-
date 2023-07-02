System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, _dec, _class, _temp, _crd, ccclass, TILE_HEIGHT, TILE_WIDTH, TlieManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../../Enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d150B4tqBIt5/l0H/lqaKb", "TileManager", undefined);

      ({
        ccclass
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

      _export("TlieManager", TlieManager = (_dec = ccclass('TlieManager'), _dec(_class = (_temp = class TlieManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "moveable", void 0);

          _defineProperty(this, "turnable", void 0);
        }

        init(type, spriteFrame, i, j) {
          this.type = type;

          if (this.type.includes('WALL')) {
            this.moveable = false;
            this.turnable = false;
          } else if (this.type.includes('CLIFF')) {
            this.moveable = false;
            this.turnable = true;
          } else if (this.type.includes('FLOOR')) {
            this.moveable = true;
            this.turnable = true;
          }

          var sprite = this.addComponent(Sprite);
          sprite.spriteFrame = spriteFrame;
          var tranfrom = this.addComponent(UITransform);
          tranfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileManager.js.map