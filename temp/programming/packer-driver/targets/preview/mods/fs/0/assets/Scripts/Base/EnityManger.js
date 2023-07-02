System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, randombyLength, _dec, _class, _temp, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, ANIMATION_SPEED, EnityManger;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandombyLength(extras) {
    _reporterNs.report("randombyLength", "../Utiils", _context.meta, extras);
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
    }, function (_unresolved_2) {
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
    }, function (_unresolved_3) {
      randombyLength = _unresolved_3.randombyLength;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbdc5sA0RpK2a6Ttut+rXPH", "EnityManger", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("ANIMATION_SPEED", ANIMATION_SPEED = 1 / 8);

      _export("EnityManger", EnityManger = (_dec = ccclass('EnityManger'), _dec(_class = (_temp = class EnityManger extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "id", (_crd && randombyLength === void 0 ? (_reportPossibleCrUseOfrandombyLength({
            error: Error()
          }), randombyLength) : randombyLength)(12));

          _defineProperty(this, "x", void 0);

          _defineProperty(this, "y", void 0);

          _defineProperty(this, "fsm", void 0);

          _defineProperty(this, "_direction", void 0);

          _defineProperty(this, "_state", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "transfrom", void 0);
        }

        get state() {
          return this._state;
        }

        set state(newState) {
          this._state = newState;

          try {
            var _this$fsm;

            this === null || this === void 0 ? void 0 : (_this$fsm = this.fsm) === null || _this$fsm === void 0 ? void 0 : _this$fsm.setParams(newState, true);
          } catch (error) {
            console.log(this);
          }
        }

        get direction() {
          return this._direction;
        }

        set direction(newdirection) {
          this._direction = newdirection;

          try {
            var _this$fsm2;

            this === null || this === void 0 ? void 0 : (_this$fsm2 = this.fsm) === null || _this$fsm2 === void 0 ? void 0 : _this$fsm2.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DRIECTION, (_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
              error: Error()
            }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[this._direction]);
          } catch (error) {
            console.log(this);
          }
        }

        init(params) {
          var sprite = this.node.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          this.transfrom = this.getComponent(UITransform);
          this.transfrom.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);
          this.x = params.x;
          this.y = params.y;
          this.direction = params.direction;
          this.state = params.state;
        }

        update() {
          this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT);
        }

        onDestroy() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnityManger.js.map