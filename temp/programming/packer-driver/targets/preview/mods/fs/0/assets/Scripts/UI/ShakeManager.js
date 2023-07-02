System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, EVENTMANAGER, SHAKE_DIRECTION_ENMU, EventManager, _dec, _class, _temp, _crd, ccclass, ShakeManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_DIRECTION_ENMU(extras) {
    _reporterNs.report("SHAKE_DIRECTION_ENMU", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
    }, function (_unresolved_2) {
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      SHAKE_DIRECTION_ENMU = _unresolved_2.SHAKE_DIRECTION_ENMU;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51f4cvepehCf75bTlf/r/fi", "ShakeManager", undefined);

      ({
        ccclass
      } = _decorator);

      _export("ShakeManager", ShakeManager = (_dec = ccclass('ShakeManager'), _dec(_class = (_temp = class ShakeManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isShaking", false);

          _defineProperty(this, "oldTime", 0);

          _defineProperty(this, "oldPos", {
            x: 0,
            y: 0
          });

          _defineProperty(this, "shakeType", void 0);
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, this.onshake, this);
        }

        onDstroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).SHAKE_SHOW, this.onshake);
        }

        stop() {
          this.isShaking = false;
        }

        update() {
          if (this.isShaking) {
            //持续时间
            var duration = 200; //振幅

            var amount = 1.6; //频率

            var frequency = 12; //当前时间

            var crruentTime = (game.totalTime - this.oldTime) / 1000; //总时间

            var totalTime = duration / 1000; //y=A*sin(w*x+z)

            var offest = amount * Math.sin(frequency * Math.PI * crruentTime);

            switch (this.shakeType) {
              case (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).TOP:
                this.node.setPosition(this.oldPos.x, this.oldPos.y - offest);
                break;

              case (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).BOTTOM:
                this.node.setPosition(this.oldPos.x, this.oldPos.y + offest);
                break;

              case (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).LEFT:
                this.node.setPosition(this.oldPos.x - offest, this.oldPos.y);
                break;

              case (_crd && SHAKE_DIRECTION_ENMU === void 0 ? (_reportPossibleCrUseOfSHAKE_DIRECTION_ENMU({
                error: Error()
              }), SHAKE_DIRECTION_ENMU) : SHAKE_DIRECTION_ENMU).RIGHT:
                this.node.setPosition(this.oldPos.x + offest, this.oldPos.y);
                break;

              default:
                break;
            }

            if (crruentTime > totalTime) {
              this.isShaking = false;
              this.node.setPosition(this.oldPos.x, this.oldPos.y);
            }
          }
        } //振动


        onshake(inputDirection) {
          if (this.isShaking) {
            return;
          }

          this.oldTime = game.totalTime;
          this.oldPos.x = this.node.position.x;
          this.oldPos.y = this.node.position.y;
          this.isShaking = true;
          this.shakeType = inputDirection;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ShakeManager.js.map