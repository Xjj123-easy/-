System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, Graphics, Color, find, UITransform, BlockInputEvents, _dec, _class, _temp, _crd, ccclass, DURATION, FADE_STATE_ENUM, DrawManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      find = _cc.find;
      UITransform = _cc.UITransform;
      BlockInputEvents = _cc.BlockInputEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1cf3TKSBZOtYo+2w2WsjU9", "DrawManager", undefined);

      ({
        ccclass
      } = _decorator);

      _export("DURATION", DURATION = 500);

      (function (FADE_STATE_ENUM) {
        FADE_STATE_ENUM["IDLE"] = "IDLE";
        FADE_STATE_ENUM["FADE_IN"] = "FADE_IN";
        FADE_STATE_ENUM["FADE_OUT"] = "FADE_OUT";
      })(FADE_STATE_ENUM || (FADE_STATE_ENUM = {}));

      _export("DrawManager", DrawManager = (_dec = ccclass('DrawManager'), _dec(_class = (_temp = class DrawManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ctx", void 0);

          _defineProperty(this, "state", FADE_STATE_ENUM.IDLE);

          _defineProperty(this, "totalTime", 0);

          _defineProperty(this, "drution", 0);

          _defineProperty(this, "ca", void 0);

          _defineProperty(this, "fadeResolve", void 0);

          _defineProperty(this, "block", void 0);
        }

        init() {
          this.ctx = this.addComponent(Graphics);
          this.ca = this.findCanvas();
          this.block = this.addComponent(BlockInputEvents);
          var transfrom = this.getComponent(UITransform);
          transfrom.setAnchorPoint(0.5, 0.5);
          transfrom.setContentSize(this.ca.getComponent(UITransform).width, this.ca.getComponent(UITransform).height);
          this.setAlpa(1);
        }

        setAlpa(percent) {
          this.ctx.clear();
          this.ca = this.findCanvas();
          this.ctx.rect(0, 0, this.ca.getComponent(UITransform).width, this.ca.getComponent(UITransform).height);
          this.ctx.fillColor = new Color(0, 0, 0, 255 * percent);
          this.ctx.fill();
          this.block.enabled = percent === 1;
        }

        findCanvas() {
          if (this.ca === null) return;
          return find('/Canvas');
        }

        update() {
          var precent = (game.totalTime - this.totalTime) / this.drution;

          switch (this.state) {
            case FADE_STATE_ENUM.FADE_IN:
              if (precent < 1) {
                this.setAlpa(precent);
              } else {
                this.setAlpa(1);
                this.state = FADE_STATE_ENUM.IDLE;
                this.fadeResolve(null);
              }

              break;

            case FADE_STATE_ENUM.FADE_OUT:
              if (precent < 1) {
                this.setAlpa(1 - precent);
              } else {
                this.setAlpa(0);
                this.fadeResolve(null);
                this.state = FADE_STATE_ENUM.IDLE;
              }

              break;

            default:
              break;
          }
        }

        fadeIn(duration) {
          if (duration === void 0) {
            duration = DURATION;
          }

          this.setAlpa(1);
          this.drution = duration;
          this.state = FADE_STATE_ENUM.FADE_IN;
          this.totalTime = game.totalTime;
          return new Promise(re => {
            this.fadeResolve = re;
          });
        }

        fadeOut(duration) {
          if (duration === void 0) {
            duration = DURATION;
          }

          this.setAlpa(0);
          this.drution = duration;
          this.state = FADE_STATE_ENUM.FADE_OUT;
          this.totalTime = game.totalTime;
          return new Promise(re => {
            this.fadeResolve = re;
          });
        }

        mask() {
          this.setAlpa(1);
          return new Promise(re => {
            setTimeout(re, this.drution);
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DrawManager.js.map