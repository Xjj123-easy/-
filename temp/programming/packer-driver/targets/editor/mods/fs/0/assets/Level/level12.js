System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRIECTION_ENUM, ENTINY_STATE_ENUM, ENTITY_TYPE_ENUM, TILE_TYPE_ENUM, _crd, mapInfo, player, enemies, spikes, bursts, door, level12;

  function _reportPossibleCrUseOfDRIECTION_ENUM(extras) {
    _reporterNs.report("DRIECTION_ENUM", "../Enums/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTINY_STATE_ENUM(extras) {
    _reporterNs.report("ENTINY_STATE_ENUM", "../Enums/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../Enums/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../Enums/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpikes(extras) {
    _reporterNs.report("ISpikes", ".", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRIECTION_ENUM = _unresolved_2.DRIECTION_ENUM;
      ENTINY_STATE_ENUM = _unresolved_2.ENTINY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
      TILE_TYPE_ENUM = _unresolved_2.TILE_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed967RPEptCF4H3PEcerKI5", "level12", undefined);

      mapInfo = [[{
        src: 20,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_TOP
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 20,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_BOTTOM
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 21,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 20,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 22,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 23,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 21,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 21,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }]];
      player = {
        x: 3,
        y: 5,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).PLAYER
      };
      enemies = [{
        x: 1,
        y: 1,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).BOTTOM,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).IRONSKELETON
      }, {
        x: 6,
        y: 2,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).WOODENSKELETON
      }];
      spikes = [];
      bursts = [{
        x: 4,
        y: 2,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).BURST,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP
      }, {
        x: 4,
        y: 3,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).BURST,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).TOP
      }];
      door = {
        x: 0,
        y: 1,
        direction: (_crd && DRIECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDRIECTION_ENUM({
          error: Error()
        }), DRIECTION_ENUM) : DRIECTION_ENUM).LEFT,
        state: (_crd && ENTINY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTINY_STATE_ENUM({
          error: Error()
        }), ENTINY_STATE_ENUM) : ENTINY_STATE_ENUM).IDLE,
        type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
          error: Error()
        }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).DOOR
      };
      level12 = {
        mapInfo,
        player,
        enemies,
        spikes,
        bursts,
        door
      };

      _export("default", level12);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=level12.js.map