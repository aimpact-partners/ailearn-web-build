System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/core", "wavesurfer.js@7.8.5", "pragmate-ui@1.0.0-beta.6/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_wavesurferJs) {
      dependency_4 = _wavesurferJs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_5 = _pragmateUi100Beta6Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['wavesurfer.js', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.3.0/audio-player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1420102872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useComponentAudioContext = exports.ComponentAudioContext = void 0;
          var _react = require("react");
          const ComponentAudioContext = exports.ComponentAudioContext = (0, _react.createContext)({});
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/get-element-context
      *******************************************/

      ims.set('./hooks/get-element-context', {
        hash: 3733522732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAudioContext = void 0;
          const getAudioContext = callback => {
            return element => {
              return new Promise((resolve, reject) => {
                const audioContext = new AudioContext();
                const reader = new FileReader();
                reader.onload = () => {
                  const buffer = reader.result;
                  audioContext.decodeAudioData(buffer).then(callback).catch(error => {
                    reject(error);
                  });
                };
                reader.readAsArrayBuffer(element);
              });
            };
          };
          exports.getAudioContext = getAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 4293597558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          var _getElementContext = require("./get-element-context");
          function useAudio(src, convert) {
            const audioRef = _react.default.useRef(null);
            const [audio, setAudio] = _react.default.useState(null);
            const [buffer, setBuffer] = _react.default.useState();
            const [ready, setReady] = _react.default.useState();
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const ref = audioRef.current;
            // const getAudioContext = element => {
            // 	return new Promise((resolve, reject) => {
            // 		const audioContext = new AudioContext();
            // 		const reader = new FileReader();
            // 		reader.onload = () => {
            // 			const buffer = reader.result as ArrayBuffer;
            // 			audioContext
            // 				.decodeAudioData(buffer)
            // 				.then(buffer => {
            // 					resolve(audioContext);
            // 					setData({ ...data, duration: parseFloat(buffer.duration.toFixed(2)) });
            // 					setBuffer(buffer);
            // 				})
            // 				.catch(error => {
            // 					reject(error);
            // 				});
            // 		};
            // 		reader.readAsArrayBuffer(element);
            // 	});
            // };
            _react.default.useEffect(() => {
              try {
                const isBlob = src instanceof Blob;
                if (!isBlob) {
                  return;
                }
                const audio = new Audio();
                const contextCallback = buffer => {
                  resolve(audioContext);
                  setData({
                    ...data,
                    duration: parseFloat(buffer.duration.toFixed(2))
                  });
                  setBuffer(buffer);
                };
                const onLoadMetadata = () => {
                  data.duration = parseFloat(audio.duration.toFixed(2));
                  //@ts-ignore
                  data.fileName = src.name;
                  setData(data);
                  setAudio(audio);
                  (0, _getElementContext.getAudioContext)(src).then(() => {
                    setReady(true);
                  });
                };
                const onError = error => {
                  console.warn('error', error);
                  setError(true);
                };
                audio.addEventListener('loadedmetadata', onLoadMetadata);
                audio.addEventListener('error', onError);
                audio.src = URL.createObjectURL(src);
                audio.load();
                return;
              } catch (e) {
                console.error('capturado', e.message);
                setError(true);
              }
            }, [src]);
            return {
              ready,
              audioRef: ref,
              buffer,
              audio,
              data,
              error
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1486404008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          var _useAudio = require("./hooks/use-audio");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _timer = require("./timer");
          var _visualizer = require("./visualizer");
          var _preload = require("./preload");
          /*bundle*/
          function AudioPlayer({
            src,
            convert
          }) {
            const {
              ready,
              audioRef,
              error,
              audio,
              data,
              buffer
            } = (0, _useAudio.useAudio)(src, convert);
            const [playing, setPlaying] = _react.default.useState(false);
            const [currentTime, setCurrentTime] = _react.default.useState(0);
            if (!ready || error) return _react.default.createElement(_preload.Preload, null);
            const actions = {
              play: event => {
                event.stopPropagation();
                audio.play();
                setPlaying(true);
              },
              pause: event => {
                event.stopPropagation();
                audio.pause();
                setPlaying(false);
              },
              restart: event => {
                event.stopPropagation();
              }
            };
            const onClick = event => {
              const action = event.currentTarget.dataset.action;
              actions[action](event);
            };
            const action = playing ? 'pause' : 'play';
            const value = {
              audio,
              data,
              playing,
              buffer,
              setPlaying,
              currentTime,
              setCurrentTime
            };
            return _react.default.createElement(_context.ComponentAudioContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "audio-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              icon: action,
              "data-action": action,
              onClick: onClick
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement(_visualizer.Visualizer, null)), _react.default.createElement(_timer.Timer, null))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 258477212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Preload({}) {
            return _react.default.createElement("div", {
              className: "player__container player__container--preload"
            }, _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "play"
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement("div", {
              className: "range__preload"
            })), _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"), _react.default.createElement("div", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./progressbar
      *****************************/

      ims.set('./progressbar', {
        hash: 2365172175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          var _context = require("./context");
          function ProgressBar() {
            const ref = (0, _react.useRef)(null);
            const {
              audio,
              setCurrentTime,
              setPlaying,
              data: {
                duration
              }
            } = (0, _context.useComponentAudioContext)();
            const [value, setValue] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const timeUpdateListener = () => {
                const currentTime = audio.currentTime;
                setValue(currentTime);
              };
              const onEnded = event => {
                setPlaying(false);
                setValue(0.1);
                setCurrentTime(0.1);
              };
              audio.addEventListener('timeupdate', timeUpdateListener);
              audio.addEventListener('ended', onEnded);
              return () => {
                audio.removeEventListener('timeupdate', timeUpdateListener);
              };
            }, [audio, duration]);
            const onChange = event => {
              event.stopPropagation();
              const desiredTime = parseFloat(event.currentTarget.value);
              for (let i = 0; i < audio.buffered.length; i++) {
                if (audio.buffered.start(i) <= desiredTime && audio.buffered.end(i) >= desiredTime) {
                  audio.currentTime = desiredTime;
                  setValue(desiredTime);
                  return;
                }
              }
              console.warn('Desired time not in buffered range', audio.buffered.length);
            };
            return _react.default.createElement("input", {
              type: "range",
              name: "rang",
              onClick: onChange,
              onChange: onChange,
              title: "audio duration",
              value: value,
              ref: ref,
              max: duration
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./timer
      ***********************/

      ims.set('./timer', {
        hash: 2388829827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _context = require("./context");
          function Timer() {
            const {
              data: {
                duration: time
              },
              audio
            } = (0, _context.useComponentAudioContext)();
            if ([Infinity, undefined].includes(time)) return null;
            const [timeToShow, setTimeToShow] = _react.default.useState(time);
            _react.default.useEffect(() => {
              audio.addEventListener('play', () => {
                setTimeToShow(audio.currentTime);
              });
              audio.addEventListener('pause', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('stop', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('timeupdate', () => {
                setTimeToShow(audio.currentTime);
              });
            }, []);
            let hours = Math.floor(timeToShow / 3600);
            let minutes = Math.floor(timeToShow % 3600 / 60);
            let seconds = Math.round(timeToShow % 60);
            const output = [];
            if (hours > 0) {
              output.push(_react.default.createElement("span", {
                key: "hours",
                className: "timer__numbers timer__numbers--hours"
              }, hours));
            }
            if (minutes < 10) minutes = '0' + minutes;
            output.push(_react.default.createElement(_react.default.Fragment, {
              key: "minutes"
            }, _react.default.createElement("span", {
              className: "timer__numbers timer__number--minutes"
            }, minutes ?? '00'), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":")));
            if (seconds < 10) seconds = '0' + seconds;
            output.push(_react.default.createElement("span", {
              key: "seconds",
              className: "timer__numbers timer__number--seconds"
            }, seconds ?? '00'));
            return _react.default.createElement("section", {
              className: "timer__container"
            }, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/IAudioInterface
      ***************************************/

      ims.set('./types/IAudioInterface', {
        hash: 377341658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./visualizer
      ****************************/

      ims.set('./visualizer', {
        hash: 2343976179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Visualizer = Visualizer;
          var _react = require("react");
          var _context = require("./context");
          var _wavesurfer = require("wavesurfer.js");
          function Visualizer() {
            const {
              buffer,
              audio
            } = (0, _context.useComponentAudioContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              // const blobUrl = URL.createObjectURL(message.audio);
              const wavesurfer = _wavesurfer.default.create({
                container: ref.current,
                waveColor: '#f0f0f0',
                progressColor: '#007bff',
                barWidth: 2,
                barHeight: 1,
                cursorWidth: 0,
                height: 20,
                normalize: true,
                hideScrollbar: true,
                backend: 'MediaElement',
                // media: blobUrl,
                // Set a bar width
                // Optionally, specify the spacing between bars
                barGap: 1,
                // And the bar radius
                barRadius: 2
                // plugins: [WaveSurfer.cursor.create({ showTime: true })]
              });
              wavesurfer.load(audio.src);
              return () => {
                wavesurfer.destroy();
              };
            }, [{}]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "element",
              ref: ref
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./index').AudioPlayer : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiZ2V0QXVkaW9Db250ZXh0IiwiY2FsbGJhY2siLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiYnVmZmVyIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIl9nZXRFbGVtZW50Q29udGV4dCIsInVzZUF1ZGlvIiwic3JjIiwiY29udmVydCIsImF1ZGlvUmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsImF1ZGlvIiwic2V0QXVkaW8iLCJ1c2VTdGF0ZSIsInNldEJ1ZmZlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJkYXRhIiwic2V0RGF0YSIsInNldEVycm9yIiwicmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImlzQmxvYiIsIkJsb2IiLCJBdWRpbyIsImNvbnRleHRDYWxsYmFjayIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJvbkxvYWRNZXRhZGF0YSIsImZpbGVOYW1lIiwibmFtZSIsIm9uRXJyb3IiLCJjb25zb2xlIiwid2FybiIsImFkZEV2ZW50TGlzdGVuZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsb2FkIiwiZSIsIm1lc3NhZ2UiLCJfdXNlQXVkaW8iLCJfaWNvbnMiLCJfY29udGV4dCIsIl90aW1lciIsIl92aXN1YWxpemVyIiwiX3ByZWxvYWQiLCJBdWRpb1BsYXllciIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkIiwiYWN0aW9ucyIsInBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlIiwicmVzdGFydCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlZpc3VhbGl6ZXIiLCJUaW1lciIsImRpc2FibGVkIiwiUHJvZ3Jlc3NCYXIiLCJzZXRWYWx1ZSIsInRpbWVVcGRhdGVMaXN0ZW5lciIsIm9uRW5kZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaGFuZ2UiLCJkZXNpcmVkVGltZSIsImkiLCJidWZmZXJlZCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwidHlwZSIsInRpdGxlIiwibWF4IiwidGltZSIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0aW1lVG9TaG93Iiwic2V0VGltZVRvU2hvdyIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJyb3VuZCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJGcmFnbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3dhdmVzdXJmZXIiLCJ3YXZlc3VyZmVyIiwiY3JlYXRlIiwiY29udGFpbmVyIiwid2F2ZUNvbG9yIiwicHJvZ3Jlc3NDb2xvciIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwiY3Vyc29yV2lkdGgiLCJoZWlnaHQiLCJub3JtYWxpemUiLCJoaWRlU2Nyb2xsYmFyIiwiYmFja2VuZCIsImJhckdhcCIsImJhclJhZGl1cyIsImRlc3Ryb3kiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaG9va3MvZ2V0LWVsZW1lbnQtY29udGV4dC50cyIsIi90cy9ob29rcy91c2UtYXVkaW8udHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wcm9ncmVzc2Jhci50c3giLCIvdHMvdGltZXIudHN4IiwiL0lBdWRpb0ludGVyZmFjZS50cyIsIi90cy92aXN1YWxpemVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNQyxxQkFBcUIsR0FBQUMsT0FBQSxDQUFBRCxxQkFBQSxHQUFHLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFDLEVBQW1CLENBQUM7VUFDaEUsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTSxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0oscUJBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSx3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiekUsTUFBTUUsZUFBZSxHQUFHQyxRQUFRLElBQUc7WUFDekMsT0FBT0MsT0FBTyxJQUFHO2NBQ2hCLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFJO2dCQUN0QyxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsWUFBWSxFQUFFO2dCQUN2QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2dCQUMvQkQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsTUFBSztrQkFDcEIsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE1BQXFCO2tCQUMzQ04sWUFBWSxDQUNWTyxlQUFlLENBQUNGLE1BQU0sQ0FBQyxDQUN2QkcsSUFBSSxDQUFDYixRQUFRLENBQUMsQ0FDZGMsS0FBSyxDQUFDQyxLQUFLLElBQUc7b0JBQ2RYLE1BQU0sQ0FBQ1csS0FBSyxDQUFDO2tCQUNkLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUNEUixNQUFNLENBQUNTLGlCQUFpQixDQUFDZixPQUFPLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztVQUNGLENBQUM7VUFBQ04sT0FBQSxDQUFBSSxlQUFBLEdB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