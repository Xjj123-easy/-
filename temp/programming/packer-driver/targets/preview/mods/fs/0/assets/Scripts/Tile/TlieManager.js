System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, resources, SpriteFrame, Node, Sprite, UITransform, Layers, level, _dec, _class, _crd, ccclass, TILE_HEIGHT, TILE_WIDTH, TlieManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var {
              mapInfo
            } = (_crd && level === void 0 ? (_reportPossibleCrUseOflevel({
              error: Error()
            }), level) : level)["level" + 1];
            var SpriteFrames = yield _this.loadDir(); //   console.log(SpriteFrames);
            //遍历瓦片数组

            for (var i = 0; i < mapInfo.length; i++) {
              var column = mapInfo[i];

              var _loop = function _loop(j) {
                var item = column[j];

                if (item.src === null || item.type === null) {
                  return "continue";
                }

                var node = new Node();
                var sprite = node.addComponent(Sprite);
                var imgSrc = "tile (" + item.src + ")";
                sprite.spriteFrame = SpriteFrames.find(v => v.name === imgSrc) || SpriteFrames[0];
                var tranfrom = sprite.addComponent(UITransform);
                tranfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
                node.layer = 1 << Layers.nameToLayer('UI_2D');
                node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
                var node1 = new Node();
                node1.setPosition(0, 0);
                node.setParent(node1);
                node1.setParent(_this.node);
              };

              for (var j = 0; j < column.length; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
              }
            }
          })();
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