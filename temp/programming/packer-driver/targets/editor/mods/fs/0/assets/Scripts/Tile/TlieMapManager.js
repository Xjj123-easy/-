System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, DataManager, ResourcesManager, creatUINode, RandomNumer, TlieManager, _dec, _class, _crd, ccclass, TlieMapManager;

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesManager(extras) {
    _reporterNs.report("ResourcesManager", "../RunTime/ResourcesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreatUINode(extras) {
    _reporterNs.report("creatUINode", "../Utiils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomNumer(extras) {
    _reporterNs.report("RandomNumer", "../Utiils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTlieManager(extras) {
    _reporterNs.report("TlieManager", "./TileManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      DataManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ResourcesManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      creatUINode = _unresolved_4.creatUINode;
      RandomNumer = _unresolved_4.RandomNumer;
    }, function (_unresolved_5) {
      TlieManager = _unresolved_5.TlieManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e207c2O4mxN4JFIIGBDUq4c", "TlieMapManager", undefined);

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

      _export("TlieMapManager", TlieMapManager = (_dec = ccclass('TlieMapManager'), _dec(_class = class TlieMapManager extends Component {
        async init() {
          const {
            mapInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const SpriteFrames = await (_crd && ResourcesManager === void 0 ? (_reportPossibleCrUseOfResourcesManager({
            error: Error()
          }), ResourcesManager) : ResourcesManager).Instance.loaddir('texture/tile/tile/'); //   console.log(SpriteFrames);
          //遍历瓦片数组

          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.tileInfo = [];

          for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.tileInfo[i] = [];

            for (let j = 0; j < column.length; j++) {
              const item = column[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = (_crd && creatUINode === void 0 ? (_reportPossibleCrUseOfcreatUINode({
                error: Error()
              }), creatUINode) : creatUINode)(); //随机瓦片

              let number = item.src;

              if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
                number += (_crd && RandomNumer === void 0 ? (_reportPossibleCrUseOfRandomNumer({
                  error: Error()
                }), RandomNumer) : RandomNumer)(0, 4);
              }

              const imgSrc = `tile (${number})`;
              const spriteFrame = SpriteFrames.find(v => v.name === imgSrc) || SpriteFrames[0];
              const tileManager = node.addComponent(_crd && TlieManager === void 0 ? (_reportPossibleCrUseOfTlieManager({
                error: Error()
              }), TlieManager) : TlieManager);
              const type = item.type;
              tileManager.init(type, spriteFrame, i, j);
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.tileInfo[i][j] = tileManager;
              node.setParent(this.node);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TlieMapManager.js.map