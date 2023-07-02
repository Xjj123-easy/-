System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Node, UITransform, Layers, _crd, creatUINode, randombyLength, RandomNumer, reg, getStrNumber, sortspriteFrame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00491gKwipOtrP/vB9jrI5q", "index", undefined);

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
      _export("creatUINode", creatUINode = function creatUINode(name) {
        if (name === void 0) {
          name = '';
        }

        var node = new Node(name);
        var tranfrom = node.addComponent(UITransform); // tranfrom.setAnchorPoint(0,1);

        node.layer = 1 << Layers.nameToLayer('UI_2D');
        return node;
      });

      _export("randombyLength", randombyLength = len => Array.from({
        length: len
      }).reduce((total, item) => total + Math.floor(Math.random() * 10), ''));

      _export("RandomNumer", RandomNumer = (start, end) => {
        return Math.floor(start + (end - start) * Math.random());
      });

      reg = /\((\d+)\)/;

      _export("getStrNumber", getStrNumber = str => {
        return parseInt(str.match(reg)[1] || '0');
      });

      _export("sortspriteFrame", sortspriteFrame = sp => sp.sort((a, b) => getStrNumber(a.name) - getStrNumber(b.name)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map