System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, PARAMS_NAME_ENUM, EVENTMANAGER, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, ENTINY_STATE_ENUM, randombyLength, EventManager, SpikesMachine, DataManager, _dec, _class, _temp, _crd, ccclass, property, TILE_HEIGHT, TILE_WIDTH, ANIMATION_SPEED, SpikesManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENTMANAGER(extras) {
    _reporterNs.report("EVENTMANAGER", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpikes(extras) {
    _reporterNs.report("ISpikes", "../../Level", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandombyLength(extras) {
    _reporterNs.report("randombyLength", "../Utiils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../RunTime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesMachine(extras) {
    _reporterNs.report("SpikesMachine", "./SpikesMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../RunTime/DataManager", _context.meta, extras);
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
      EVENTMANAGER = _unresolved_2.EVENTMANAGER;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
    }, function (_unresolved_3) {
      randombyLength = _unresolved_3.randombyLength;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      SpikesMachine = _unresolved_5.SpikesMachine;
    }, function (_unresolved_6) {
      DataManager = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "032cbHCikpFDJS41nA9gA6f", "SpikesManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("ANIMATION_SPEED", ANIMATION_SPEED = 1 / 8);

      _export("SpikesManager", SpikesManager = (_dec = ccclass('SpikesManager'), _dec(_class = (_temp = class SpikesManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "id", (_crd && randombyLength === void 0 ? (_reportPossibleCrUseOfrandombyLength({
            error: Error()
          }), randombyLength) : randombyLength)(12));

          _defineProperty(this, "x", void 0);

          _defineProperty(this, "y", void 0);

          _defineProperty(this, "fsm", void 0);

          _defineProperty(this, "_count", 0);

          _defineProperty(this, "_totalcount", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "transfrom", void 0);
        }

        get count() {
          return this._count;
        }

        set count(newCount) {
          if (this === null) return;
          this._count = newCount;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CUR_COUNT, newCount);
        }

        get totalcount() {
          return this._totalcount;
        }

        set totalcount(newCount) {
          if (this === null) return;
          this._totalcount = newCount;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT, newCount);
        }

        init(params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var sprite = _this.node.addComponent(Sprite);

            sprite.sizeMode = Sprite.SizeMode.CUSTOM;
            _this.transfrom = _this.getComponent(UITransform);

            _this.transfrom.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

            _this.x = params.x;
            _this.y = params.y;
            _this.fsm = _this.addComponent(_crd && SpikesMachine === void 0 ? (_reportPossibleCrUseOfSpikesMachine({
              error: Error()
            }), SpikesMachine) : SpikesMachine);
            yield _this.fsm.init();
            var type = params.type;
            _this.count = params.count;
            _this.totalcount = (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM)[type];
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, _this.onloop, _this);
          })();
        }

        update() {
          this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
            error: Error()
          }), EVENTMANAGER) : EVENTMANAGER).PLAYERMOVE_END, this.onloop);
        }

        onloop() {
          if (this.fsm == null) return;

          if (this.count === this.totalcount) {
            this.count = 0;
          } else {
            this.count++;
          }

          this.attack();
        }

        attack() {
          if ((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player === null) return;
          var {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;

          if (this.x === playerX && this.y === playerY && this.totalcount === this.count) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENTMANAGER === void 0 ? (_reportPossibleCrUseOfEVENTMANAGER({
              error: Error()
            }), EVENTMANAGER) : EVENTMANAGER).ATTACK_PLAYER, (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
              error: Error()
            }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).DEATH);
          }
        }

        ResetZero() {
          this.count = 0;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesManager.js.map