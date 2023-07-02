System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationClip, animation, Sprite, ANIMATION_SPEED, ResourcesManager, sortspriteFrame, State, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfANIMATION_SPEED(extras) {
    _reporterNs.report("ANIMATION_SPEED", "../Player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesManager(extras) {
    _reporterNs.report("ResourcesManager", "../RunTime/ResourcesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsortspriteFrame(extras) {
    _reporterNs.report("sortspriteFrame", "../Utiils", _context.meta, extras);
  }

  _export("State", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
      animation = _cc.animation;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ANIMATION_SPEED = _unresolved_2.ANIMATION_SPEED;
    }, function (_unresolved_3) {
      ResourcesManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      sortspriteFrame = _unresolved_4.sortspriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac66b5B21BJJ4zc9rnaV4oF", "State", undefined);

      _export("State", State = class State {
        constructor(fsm, path, warpMode, speed, events) {
          if (warpMode === void 0) {
            warpMode = AnimationClip.WrapMode.Normal;
          }

          if (speed === void 0) {
            speed = _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED;
          }

          if (events === void 0) {
            events = [];
          }

          _defineProperty(this, "animationClip", void 0);

          this.fsm = fsm;
          this.path = path;
          this.warpMode = warpMode;
          this.speed = speed;
          this.events = events;
          this.init();
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promise = (_crd && ResourcesManager === void 0 ? (_reportPossibleCrUseOfResourcesManager({
              error: Error()
            }), ResourcesManager) : ResourcesManager).Instance.loaddir(_this.path);

            _this.fsm.waitingList.push(promise);

            _this.animationClip = new AnimationClip();
            _this.animationClip.name = _this.path;
            var spriteFrame = yield promise;
            var track = new animation.ObjectTrack(); // 创建一个对象轨道

            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径，即指定目标对象为 "Foo" 子节点的 "position" 属性

            var frames = (_crd && sortspriteFrame === void 0 ? (_reportPossibleCrUseOfsortspriteFrame({
              error: Error()
            }), sortspriteFrame) : sortspriteFrame)(spriteFrame).map((item, index) => [_this.speed * index, item]);
            track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

            _this.animationClip.addTrack(track);

            _this.animationClip.duration = spriteFrame.length * (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED); // 整个动画剪辑的周期

            _this.animationClip.wrapMode = _this.warpMode;

            for (var event of _this.events) {
              _this.animationClip.events.push(event);
            }

            _this.animationClip.updateEventDatas();
          })();
        }

        run() {
          var _this$fsm, _this$fsm$animationCo;

          if (((_this$fsm = this.fsm) === null || _this$fsm === void 0 ? void 0 : (_this$fsm$animationCo = _this$fsm.animationComponent) === null || _this$fsm$animationCo === void 0 ? void 0 : _this$fsm$animationCo.defaultClip) === this.animationClip) {
            return;
          }

          this.fsm.animationComponent.defaultClip = this.animationClip;
          this.fsm.animationComponent.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=State.js.map