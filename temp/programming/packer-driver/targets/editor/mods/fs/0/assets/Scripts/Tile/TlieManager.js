System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, resources, SpriteFrame, Node, Sprite, UITransform, Layers, level, _dec, _class, _crd, ccclass, TILE_HEIGHT, TILE_WIDTH, TlieManager;

  function _reportPossibleCrUseOflevel(extras) {
    _reporterNs.report("level", "../../Level", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      level = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30be1d4dEhDpbhy1VQevQoC", "TlieManager", undefined);

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

      _export("TlieManager", TlieManager = (_dec = ccclass('TlieManager'), _dec(_class = class TlieManager extends Component {
        async init() {
          const {
            mapInfo
          } = (_crd && level === void 0 ? (_reportPossibleCrUseOflevel({
            error: Error()
          }), level) : level)[`level${1}`];
          const SpriteFrames = await this.loadDir(); //   console.log(SpriteFrames);
          //遍历瓦片数组

          for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];

            for (let j = 0; j < column.length; j++) {
              const item = column[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = new Node();
              const sprite = node.addComponent(Sprite);
              const imgSrc = `tile (${item.src})`;
              sprite.spriteFrame = SpriteFrames.find(v => v.name === imgSrc) || SpriteFrames[0];
              const tranfrom = sprite.addComponent(UITransform);
              tranfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
              node.layer = 1 << Layers.nameToLayer('UI_2D');
              node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
              const node1 = new Node();
              node1.setPosition(0, 0);
              node.setParent(node1);
              node1.setParent(this.node);
            }
          }
        }

        loadDir() {
          //资源批量加载
          return new Promise((ro, re) => {
            resources.loadDir('texture/tile/tile', SpriteFrame, function (err, assets) {
              if (err) {
                re(err);
                return;
              }

              ro(assets);
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TlieManager.js.map