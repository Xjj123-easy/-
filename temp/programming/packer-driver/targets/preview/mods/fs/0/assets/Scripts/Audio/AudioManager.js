System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assert, AudioSource, Component, _decorator, _dec, _class, _temp, _crd, ccclass, AudioManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assert = _cc.assert;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15427zNcsJNt4hB0mDvbGzw", "AudioManager", undefined);

      ({
        ccclass
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec(_class = (_temp = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "audioSource", void 0);

          _defineProperty(this, "AudioResolve", void 0);
        }

        init() {
          this.audioSource = this.addComponent(AudioSource);
        }
        /**
         * 播放音乐
         * @param loop 是否循环播放音乐
          * @param clip 音乐文件
         * @returns
         */


        playMusic(loop, clip) {
          if (loop === void 0) {
            loop = false;
          }

          if (clip === void 0) {
            clip = null;
          }

          // const audioSource = this.audioSource
          this.audioSource.clip = clip;
          assert(this.audioSource, 'AudioManager not inited!');
          this.audioSource.loop = loop;

          if (!this.audioSource.playing) {
            this.audioSource.play();
          }

          return new Promise(re => {
            this.AudioResolve = re;
          });
        }
        /**
         * 播放音效
         * @param {String} name 音效名称
         * @param {Number} volumeScale 播放音量倍数
         */


        playSound(name, volumeScale) {
          if (name === void 0) {
            name = null;
          }

          if (volumeScale === void 0) {
            volumeScale = 1;
          }

          var audioSource = this.audioSource;
          assert(audioSource, 'AudioManager not inited!'); // 注意：第二个参数 “volumeScale” 是指播放音量的倍数，最终播放的音量为 “audioSource.volume * volumeScale”

          audioSource.playOneShot(name, volumeScale);
        }

        stop() {
          this.audioSource.stop();
        }

        destory() {
          this.node.removeFromParent();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map