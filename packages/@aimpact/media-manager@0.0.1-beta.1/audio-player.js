System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.2/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta2Icons) {
      dependency_4 = _pragmateUi100Beta2Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.12"], ["socket.io-client", "4.7.5"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/ailearn-app", "0.1.6-dev.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@0.0.1-beta.1/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@0.0.1-beta.1/audio-player');
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

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 35183569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          function useAudio(src, convert) {
            const audioRef = _react.default.useRef(null);
            const [audio, setAudio] = _react.default.useState(null);
            const [buffer, setBuffer] = _react.default.useState(null);
            const [ready, setReady] = _react.default.useState(false);
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const getAudioContext = element => {
              return new Promise((resolve, reject) => {
                const audioContext = new AudioContext();
                const reader = new FileReader();
                reader.onload = () => {
                  const buffer = reader.result;
                  audioContext.decodeAudioData(buffer).then(decodedBuffer => {
                    setData(prevData => ({
                      ...prevData,
                      duration: parseFloat(decodedBuffer.duration.toFixed(2))
                    }));
                    setBuffer(decodedBuffer);
                    resolve();
                  }).catch(reject);
                };
                reader.readAsArrayBuffer(element);
              });
            };
            const setupAudioElement = (audio, src) => {
              audio.addEventListener('loadedmetadata', () => {
                setData(prevData => ({
                  ...prevData,
                  duration: parseFloat(audio.duration.toFixed(2)),
                  fileName: src instanceof Blob ? src.name : src.split('/').pop()
                }));
                setAudio(audio);
                setReady(true);
              });
              audio.addEventListener('error', () => {
                setError(true);
              });
            };
            _react.default.useEffect(() => {
              try {
                if (src instanceof Blob) {
                  const audio = new Audio();
                  setupAudioElement(audio, src);
                  audio.src = URL.createObjectURL(src);
                  audio.load();
                  getAudioContext(src).catch(console.error);
                } else {
                  fetch(src).then(async response => {
                    if (!response.ok) throw new Error(response.statusText);
                    const blob = await response.blob();
                    const audio = new Audio();
                    setupAudioElement(audio, src);
                    audio.src = URL.createObjectURL(blob);
                    audio.load();
                    setAudio(audio);
                    getAudioContext(blob).catch(console.error);
                  }).catch(error => {
                    console.error(error);
                    setError(true);
                  });
                }
              } catch (e) {
                console.error(e.message);
                setError(true);
              }
            }, [src]);
            return {
              ready,
              audioRef,
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
        hash: 2977058227,
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
          var _progressbar = require("./progressbar");
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
              className: "player__container"
            }, _react.default.createElement(_icons.IconButton, {
              icon: action,
              "data-action": action,
              onClick: onClick
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement(_progressbar.ProgressBar, null), _react.default.createElement(_visualizer.Visualizer, null)), _react.default.createElement(_timer.Timer, null))));
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
        hash: 2991908883,
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
        hash: 3138334151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Visualizer = Visualizer;
          var _react = require("react");
          var _context = require("./context");
          const normalizeData = filteredData => {
            const multiplier = Math.pow(Math.max(...filteredData), -1);
            return filteredData.map(n => n * multiplier);
          };
          const drawLineSegment = (ctx, x, y, barWidth) => {
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#fff';
            // Draw line upwards
            ctx.beginPath();
            ctx.moveTo(x + barWidth / 2, 0);
            ctx.lineTo(x + barWidth / 2, -y);
            ctx.stroke();
            // Draw line downwards
            ctx.beginPath();
            ctx.moveTo(x + barWidth / 2, 0);
            ctx.lineTo(x + barWidth / 2, y);
            ctx.stroke();
          };
          const draw = (canvas, normalizedData) => {
            const dpr = window.devicePixelRatio || 1.5;
            const padding = 20;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            ctx.translate(0, canvas.offsetHeight / 2 + padding);
            // Draw X-axis
            ctx.strokeStyle = '#cc0000'; // Set the color of the X-axis
            ctx.lineWidth = 1; // Set the line width of the X-axis
            ctx.beginPath();
            ctx.moveTo(0, 0); // Start point of the X-axis
            ctx.lineTo(canvas.offsetWidth, 0); // End point of the X-axis
            ctx.stroke();
            const totalWidth = canvas.offsetWidth;
            const barWidth = 3; // Width of individual bars, can be more than 1
            const separation = 1; // Spacing between bars
            const segmentWidth = barWidth + separation; // Combined width of a bar and the space after it
            const numBars = Math.floor(totalWidth / segmentWidth); // Total number of bars that will fit on the canvas
            for (let i = 0; i < numBars; i++) {
              const dataIndex = Math.floor(i / numBars * normalizedData.length);
              const x = segmentWidth * i;
              let height = normalizedData[dataIndex] * canvas.offsetHeight - padding;
              if (height < 0) height = 0;else if (height > canvas.offsetHeight / 2) height = canvas.offsetHeight / 2;
              drawLineSegment(ctx, x, height, segmentWidth);
            }
          };
          const filterData = audioBuffer => {
            if (!audioBuffer) return [];
            const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
            const samples = 70; // Number of samples we want to have in our final data set
            const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
            const filteredData = [];
            for (let i = 0; i < samples; i++) {
              let blockStart = blockSize * i; // the location of the first sample in the block
              let sum = 0;
              for (let j = 0; j < blockSize; j++) {
                sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
              }
              filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
            }
            return filteredData;
          };
          const visualize = (audioBuffer, selector) => {
            return draw(selector, normalizeData(filterData(audioBuffer)));
          };
          function Visualizer() {
            const {
              buffer
            } = (0, _context.useComponentAudioContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              visualize(buffer, ref.current);
            }, []);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("canvas", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldEF1ZGlvQ29udGV4dCIsImVsZW1lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJkZWNvZGVBdWRpb0RhdGEiLCJ0aGVuIiwiZGVjb2RlZEJ1ZmZlciIsInByZXZEYXRhIiwiZHVyYXRpb24iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhdGNoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzZXR1cEF1ZGlvRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlTmFtZSIsIkJsb2IiLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJ1c2VFZmZlY3QiLCJBdWRpbyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvYWQiLCJjb25zb2xlIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYmxvYiIsImUiLCJtZXNzYWdlIiwiX3VzZUF1ZGlvIiwiX2ljb25zIiwiX2NvbnRleHQiLCJfcHJvZ3Jlc3NiYXIiLCJfdGltZXIiLCJfdmlzdWFsaXplciIsIl9wcmVsb2FkIiwiQXVkaW9QbGF5ZXIiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZCIsImFjdGlvbnMiLCJwbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZSIsInJlc3RhcnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJQcm9ncmVzc0JhciIsIlZpc3VhbGl6ZXIiLCJUaW1lciIsImRpc2FibGVkIiwicmVmIiwic2V0VmFsdWUiLCJ0aW1lVXBkYXRlTGlzdGVuZXIiLCJvbkVuZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwiZGVzaXJlZFRpbWUiLCJpIiwiYnVmZmVyZWQiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsIndhcm4iLCJ0eXBlIiwidGl0bGUiLCJtYXgiLCJ0aW1lIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInRpbWVUb1Nob3ciLCJzZXRUaW1lVG9TaG93IiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInJvdW5kIiwib3V0cHV0IiwicHVzaCIsImtleSIsIkZyYWdtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJub3JtYWxpemVEYXRhIiwiZmlsdGVyZWREYXRhIiwibXVsdGlwbGllciIsInBvdyIsIm1hcCIsIm4iLCJkcmF3TGluZVNlZ21lbnQiLCJjdHgiLCJ4IiwieSIsImJhcldpZHRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3IiwiY2FudmFzIiwibm9ybWFsaXplZERhdGEiLCJkcHIiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicGFkZGluZyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRDb250ZXh0Iiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJ0b3RhbFdpZHRoIiwic2VwYXJhdGlvbiIsInNlZ21lbnRXaWR0aCIsIm51bUJhcnMiLCJkYXRhSW5kZXgiLCJmaWx0ZXJEYXRhIiwiYXVkaW9CdWZmZXIiLCJyYXdEYXRhIiwiZ2V0Q2hhbm5lbERhdGEiLCJzYW1wbGVzIiwiYmxvY2tTaXplIiwiYmxvY2tTdGFydCIsInN1bSIsImoiLCJhYnMiLCJ2aXN1YWxpemUiLCJzZWxlY3RvciIsImN1cnJlbnQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaG9va3MvdXNlLWF1ZGlvLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHJvZ3Jlc3NiYXIudHN4IiwiL3RzL3RpbWVyLnRzeCIsIi9JQXVkaW9JbnRlcmZhY2UudHMiLCIvdHMvdmlzdWFsaXplci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNQyxxQkFBcUIsR0FBQUMsT0FBQSxDQUFBRCxxQkFBQSxHQUFHLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFDLEVBQW1CLENBQUM7VUFDaEUsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTSxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0oscUJBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSx3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiaEYsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBYU0sU0FBVU0sUUFBUUEsQ0FBQ0MsR0FBa0IsRUFBRUMsT0FBaUI7WUFDN0QsTUFBTUMsUUFBUSxHQUFHVixNQUFBLENBQUFXLE9BQUssQ0FBQ0MsTUFBTSxDQUEwQixJQUFJLENBQUM7WUFDNUQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHZCxNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUEwQixJQUFJLENBQUM7WUFDdkUsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHakIsTUFBQSxDQUFBVyxPQUFLLENBQUNJLFFBQVEsQ0FBcUIsSUFBSSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQ0csS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR25CLE1BQUEsQ0FBQVcsT0FBSyxDQUFDSSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ3hELE1BQU0sQ0FBQ0ssSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR3JCLE1BQUEsQ0FBQVcsT0FBSyxDQUFDSSxRQUFRLENBQWtCO2NBQUNQO1lBQUcsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQ2MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3ZCLE1BQUEsQ0FBQVcsT0FBSyxDQUFDSSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBRXhELE1BQU1TLGVBQWUsR0FBSUMsT0FBYSxJQUFtQjtjQUN4RCxPQUFPLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sS0FBSTtnQkFDdEMsTUFBTUMsWUFBWSxHQUFHLElBQUlDLFlBQVksRUFBRTtnQkFDdkMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtnQkFDL0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLE1BQUs7a0JBQ3BCLE1BQU1qQixNQUFNLEdBQUdlLE1BQU0sQ0FBQ0csTUFBcUI7a0JBQzNDTCxZQUFZLENBQ1ZNLGVBQWUsQ0FBQ25CLE1BQU0sQ0FBQyxDQUN2Qm9CLElBQUksQ0FBQ0MsYUFBYSxJQUFHO29CQUNyQmhCLE9BQU8sQ0FBQ2lCLFFBQVEsS0FBSztzQkFDcEIsR0FBR0EsUUFBUTtzQkFDWEMsUUFBUSxFQUFFQyxVQUFVLENBQUNILGFBQWEsQ0FBQ0UsUUFBUSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUN0RCxDQUFDLENBQUM7b0JBQ0h4QixTQUFTLENBQUNvQixhQUFhLENBQUM7b0JBQ3hCVixPQUFPLEVBQUU7a0JBQ1YsQ0FBQyxDQUFDLENBQ0RlLEtBQUssQ0FBQ2QsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2dCQUNERyxNQUFNLENBQUNZLGlCQUFpQixDQUFDbEIsT0FBTyxDQUFDO2NBQ2xDLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNbUIsaUJBQWlCLEdBQUdBLENBQUMvQixLQUF1QixFQUFFTCxHQUFrQixLQUFJO2NBQ3pFSyxLQUFLLENBQUNnQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM3Q3hCLE9BQU8sQ0FBQ2lCLFFBQVEsS0FBSztrQkFDcEIsR0FBR0EsUUFBUTtrQkFDWEMsUUFBUSxFQUFFQyxVQUFVLENBQUMzQixLQUFLLENBQUMwQixRQUFRLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztrQkFDL0NLLFFBQVEsRUFBRXRDLEdBQUcsWUFBWXVDLElBQUksR0FBR3ZDLEdBQUcsQ0FBQ3dDLElBQUksR0FBR3hDLEdBQUcsQ0FBQ3lDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRztpQkFDN0QsQ0FBQyxDQUFDO2dCQUNIcEMsUUFBUSxDQUFDRCxLQUFLLENBQUM7Z0JBQ2ZNLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7Y0FFRk4sS0FBSyxDQUFDZ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUs7Z0JBQ3BDdEIsUUFBUSxDQUFDLElBQUksQ0FBQztjQUNmLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRHZCLE1BQUEsQ0FBQVcsT0FBSyxDQUFDd0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJM0MsR0FBRyxZQUFZdUMsSUFBSSxFQUFFO2tCQUN4QixNQUFNbEMsS0FBSyxHQUFHLElBQUl1QyxLQUFLLEVBQUU7a0JBQ3pCUixpQkFBaUIsQ0FBQy9CLEtBQUssRUFBRUwsR0FBRyxDQUFDO2tCQUM3QkssS0FBSyxDQUFDTCxHQUFHLEdBQUc2QyxHQUFHLENBQUNDLGVBQWUsQ0FBQzlDLEdBQUcsQ0FBQztrQkFDcENLLEtBQUssQ0FBQzBDLElBQUksRUFBRTtrQkFDWi9CLGVBQWUsQ0FBQ2hCLEdBQUcsQ0FBQyxDQUFDa0MsS0FBSyxDQUFDYyxPQUFPLENBQUNsQyxLQUFLLENBQUM7aUJBQ3pDLE1BQU07a0JBQ05tQyxLQUFLLENBQUNqRCxHQUFHLENBQUMsQ0FDUjRCLElBQUksQ0FBQyxNQUFNc0IsUUFBUSxJQUFHO29CQUN0QixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVUsQ0FBQztvQkFDdEQsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO29CQUNsQyxNQUFNakQsS0FBSyxHQUFHLElBQUl1QyxLQUFLLEVBQUU7b0JBQ3pCUixpQkFBaUIsQ0FBQy9CLEtBQUssRUFBRUwsR0FBRyxDQUFDO29CQUM3QkssS0FBSyxDQUFDTCxHQUFHLEdBQUc2QyxHQUFHLENBQUNDLGVBQWUsQ0FBQ1EsSUFBSSxDQUFDO29CQUNyQ2pELEtBQUssQ0FBQzBDLElBQUksRUFBRTtvQkFDWnpDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO29CQUNmVyxlQUFlLENBQUNzQyxJQUFJLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2MsT0FBTyxDQUFDbEMsS0FBSyxDQUFDO2tCQUMzQyxDQUFDLENBQUMsQ0FDRG9CLEtBQUssQ0FBQ3BCLEtBQUssSUFBRztvQkFDZGtDLE9BQU8sQ0FBQ2xDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO29CQUNwQkMsUUFBUSxDQUFDLElBQUksQ0FBQztrQkFDZixDQUFDLENBQUM7O2VBRUosQ0FBQyxPQUFPd0MsQ0FBQyxFQUFFO2dCQUNYUCxPQUFPLENBQUNsQyxLQUFLLENBQUN5QyxDQUFDLENBQUNDLE9BQU8sQ0FBQztnQkFDeEJ6QyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUVoQixDQUFDLEVBQUUsQ0FBQ2YsR0FBRyxDQUFDLENBQUM7WUFFVCxPQUFPO2NBQ05VLEtBQUs7Y0FDTFIsUUFBUTtjQUNSTSxNQUFNO2NBQ05ILEtBQUs7Y0FDTE8sSUFBSTtjQUNKRTthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEdBLElBQUF0QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0UsU0FBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWtFLFFBQUEsR0FBQWxFLE9BQUE7VUFDQSxJQUFBbUUsWUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXFFLFdBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBc0UsUUFBQSxHQUFBdEUsT0FBQTtVQUVPO1VBQVUsU0FBVXVFLFdBQVdBLENBQUM7WUFBQ2hFLEdBQUc7WUFBRUM7VUFBTyxDQUFDO1lBQ3BELE1BQU07Y0FBQ1MsS0FBSztjQUFFUixRQUFRO2NBQUVZLEtBQUs7Y0FBRVQsS0FBSztjQUFFTyxJQUFJO2NBQUVKO1lBQU0sQ0FBQyxHQUFHLElBQUFpRCxTQUFBLENBQUExRCxRQUFRLEVBQUNDLEdBQUcsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU0sQ0FBQ2dFLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxRSxNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUM0RCxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHNUUsTUFBQSxDQUFBVyxPQUFLLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDRyxLQUFLLElBQUlJLEtBQUssRUFBRSxPQUFPdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBLENBQUNOLFFBQUEsQ0FBQU8sT0FBTyxPQUFHO1lBQ3ZDLE1BQU1DLE9BQU8sR0FBRztjQUNmQyxJQUFJLEVBQUVDLEtBQUssSUFBRztnQkFDYkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCckUsS0FBSyxDQUFDbUUsSUFBSSxFQUFFO2dCQUNaTixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2pCLENBQUM7Y0FDRFMsS0FBSyxFQUFFRixLQUFLLElBQUc7Z0JBQ2RBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QnJFLEtBQUssQ0FBQ3NFLEtBQUssRUFBRTtnQkFDYlQsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNsQixDQUFDO2NBQ0RVLE9BQU8sRUFBRUgsS0FBSyxJQUFHO2dCQUNoQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDeEI7YUFDQTtZQUVELE1BQU1HLE9BQU8sR0FBR0osS0FBSyxJQUFHO2NBQ3ZCLE1BQU1LLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTTtjQUNqRFAsT0FBTyxDQUFDTyxNQUFNLENBQUMsQ0FBQ0wsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNSyxNQUFNLEdBQUdiLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTTtZQUN6QyxNQUFNZ0IsS0FBSyxHQUFHO2NBQ2I1RSxLQUFLO2NBQ0xPLElBQUk7Y0FDSnFELE9BQU87Y0FDUHpELE1BQU07Y0FDTjBELFVBQVU7Y0FDVkMsV0FBVztjQUNYQzthQUNBO1lBQ0QsT0FDQzVFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQSxDQUFDVixRQUFBLENBQUFqRSxxQkFBcUIsQ0FBQ3dGLFFBQVE7Y0FBQ0QsS0FBSyxFQUFFQTtZQUFLLEdBQzNDekYsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFtQixHQUNqQzNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQSxDQUFDWCxNQUFBLENBQUEwQixVQUFVO2NBQUNDLElBQUksRUFBRVAsTUFBTTtjQUFBLGVBQWVBLE1BQU07Y0FBRUQsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDbkVyRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDM0YsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFjLEdBQzVCM0YsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBLENBQUNULFlBQUEsQ0FBQTBCLFdBQVcsT0FBRyxFQUNmOUYsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBLENBQUNQLFdBQUEsQ0FBQXlCLFVBQVUsT0FBRyxDQUNULEVBQ04vRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBMkIsS0FBSyxPQUFHLENBQ0osQ0FDRCxDQUMwQjtVQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQWhHLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBRU0sU0FBVTZFLE9BQU9BLENBQUMsRUFBRTtZQUN6QixPQUNDOUUsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUE4QyxHQUM1RDNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQSxDQUFDWCxNQUFBLENBQUEwQixVQUFVO2NBQUNLLFFBQVE7Y0FBQ0osSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQzdGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBa0IsR0FDaEMzRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWMsR0FDNUIzRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWdCLEVBQUcsQ0FDN0IsRUFDTjNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBa0IsR0FDaEMzRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWdCLFFBQVUsRUFDMUMzRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLE9BQVEsRUFDekMzRixNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWdCLFFBQVUsQ0FDckMsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUEzRixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUVNLFNBQVU2RixXQUFXQSxDQUFBO1lBQzFCLE1BQU1JLEdBQUcsR0FBRyxJQUFBbEcsTUFBQSxDQUFBWSxNQUFNLEVBQW1CLElBQUksQ0FBQztZQUMxQyxNQUFNO2NBQ0xDLEtBQUs7Y0FDTCtELGNBQWM7Y0FDZEYsVUFBVTtjQUNWdEQsSUFBSSxFQUFFO2dCQUFDbUI7Y0FBUTtZQUFDLENBQ2hCLEdBQUcsSUFBQTRCLFFBQUEsQ0FBQTlELHdCQUF3QixHQUFFO1lBQzlCLE1BQU0sQ0FBQ29GLEtBQUssRUFBRVUsUUFBUSxDQUFDLEdBQUcsSUFBQW5HLE1BQUEsQ0FBQWUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUVyQyxJQUFBZixNQUFBLENBQUFtRCxTQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1pRCxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFLO2dCQUMvQixNQUFNekIsV0FBVyxHQUFHOUQsS0FBSyxDQUFDOEQsV0FBVztnQkFDckN3QixRQUFRLENBQUN4QixXQUFXLENBQUM7Y0FDdEIsQ0FBQztjQUNELE1BQU0wQixPQUFPLEdBQUdwQixLQUFLLElBQUc7Z0JBQ3ZCUCxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNqQnlCLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ2J2QixjQUFjLENBQUMsR0FBRyxDQUFDO2NBQ3BCLENBQUM7Y0FDRC9ELEtBQUssQ0FBQ2dDLGdCQUFnQixDQUFDLFlBQVksRUFBRXVELGtCQUFrQixDQUFDO2NBQ3hEdkYsS0FBSyxDQUFDZ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFd0QsT0FBTyxDQUFDO2NBRXhDLE9BQU8sTUFBSztnQkFDWHhGLEtBQUssQ0FBQ3lGLG1CQUFtQixDQUFDLFlBQVksRUFBRUYsa0JBQWtCLENBQUM7Y0FDNUQsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDdkYsS0FBSyxFQUFFMEIsUUFBUSxDQUFDLENBQUM7WUFFckIsTUFBTWdFLFFBQVEsR0FBR3RCLEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsTUFBTXNCLFdBQVcsR0FBR2hFLFVBQVUsQ0FBQ3lDLEtBQUssQ0FBQ00sYUFBYSxDQUFDRSxLQUFLLENBQUM7Y0FFekQsS0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNUYsS0FBSyxDQUFDNkYsUUFBUSxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJNUYsS0FBSyxDQUFDNkYsUUFBUSxDQUFDRSxLQUFLLENBQUNILENBQUMsQ0FBQyxJQUFJRCxXQUFXLElBQUkzRixLQUFLLENBQUM2RixRQUFRLENBQUNHLEdBQUcsQ0FBQ0osQ0FBQyxDQUFDLElBQUlELFdBQVcsRUFBRTtrQkFDbkYzRixLQUFLLENBQUM4RCxXQUFXLEdBQUc2QixXQUFXO2tCQUUvQkwsUUFBUSxDQUFDSyxXQUFXLENBQUM7a0JBQ3JCOzs7Y0FHRmhELE9BQU8sQ0FBQ3NELElBQUksQ0FBQyxvQ0FBb0MsRUFBRWpHLEtBQUssQ0FBQzZGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQzFFLENBQUM7WUFFRCxPQUNDM0csTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQ0NrQyxJQUFJLEVBQUMsT0FBTztjQUNaL0QsSUFBSSxFQUFDLE1BQU07Y0FDWHFDLE9BQU8sRUFBRWtCLFFBQVE7Y0FDakJBLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlMsS0FBSyxFQUFDLGdCQUFnQjtjQUN0QnZCLEtBQUssRUFBRUEsS0FBSztjQUNaUyxHQUFHLEVBQUVBLEdBQUc7Y0FDUmUsR0FBRyxFQUFFMUU7WUFBUSxFQUNaO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUF2QyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUVNLFNBQVUrRixLQUFLQSxDQUFBO1lBQ3BCLE1BQU07Y0FDTDVFLElBQUksRUFBRTtnQkFBQ21CLFFBQVEsRUFBRTJFO2NBQUksQ0FBQztjQUN0QnJHO1lBQUssQ0FDTCxHQUFHLElBQUFzRCxRQUFBLENBQUE5RCx3QkFBd0IsR0FBRTtZQUU5QixJQUFJLENBQUM4RyxRQUFRLEVBQUVDLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUNILElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUNyRCxNQUFNLENBQUNJLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd2SCxNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUFDbUcsSUFBSSxDQUFDO1lBRXhEbEgsTUFBQSxDQUFBVyxPQUFLLENBQUN3QyxTQUFTLENBQUMsTUFBSztjQUNwQnRDLEtBQUssQ0FBQ2dDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFLO2dCQUNuQzBFLGFBQWEsQ0FBQzFHLEtBQUssQ0FBQzhELFdBQVcsQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FDRjlELEtBQUssQ0FBQ2dDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFLO2dCQUNwQzBFLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDO2NBQ3BCLENBQUMsQ0FBQztjQUNGckcsS0FBSyxDQUFDZ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQUs7Z0JBQ25DMEUsYUFBYSxDQUFDTCxJQUFJLENBQUM7Y0FDcEIsQ0FBQyxDQUFDO2NBQ0ZyRyxLQUFLLENBQUNnQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBSztnQkFDekMwRSxhQUFhLENBQUMxRyxLQUFLLENBQUM4RCxXQUFXLENBQUM7Y0FDakMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLElBQUk2QyxLQUFLLEdBQVVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2hELElBQUlLLE9BQU8sR0FBVUYsSUFBSSxDQUFDQyxLQUFLLENBQUVKLFVBQVUsR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDO1lBQ3pELElBQUlNLE9BQU8sR0FBVUgsSUFBSSxDQUFDSSxLQUFLLENBQUNQLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFFaEQsTUFBTVEsTUFBTSxHQUFHLEVBQUU7WUFDakIsSUFBSU4sS0FBSyxHQUFHLENBQUMsRUFBRTtjQUNkTSxNQUFNLENBQUNDLElBQUksQ0FDVi9ILE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQTtnQkFBTW1ELEdBQUcsRUFBQyxPQUFPO2dCQUFDckMsU0FBUyxFQUFDO2NBQXNDLEdBQ2hFNkIsS0FBSyxDQUNBLENBQ1A7O1lBRUYsSUFBSUcsT0FBTyxHQUFHLEVBQUUsRUFBRUEsT0FBTyxHQUFHLEdBQUcsR0FBR0EsT0FBTztZQUN6Q0csTUFBTSxDQUFDQyxJQUFJLENBQ1YvSCxNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUEsQ0FBQzdFLE1BQUEsQ0FBQVcsT0FBSyxDQUFDc0gsUUFBUTtjQUFDRCxHQUFHLEVBQUM7WUFBUyxHQUM1QmhJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBa0UsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBdUMsR0FBRWdDLE9BQU8sSUFBSSxJQUFJLENBQVEsRUFDaEYzSCxNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWtCLE9BQVMsQ0FDM0IsQ0FDakI7WUFDRCxJQUFJaUMsT0FBTyxHQUFHLEVBQUUsRUFBRUEsT0FBTyxHQUFHLEdBQUcsR0FBR0EsT0FBTztZQUN6Q0UsTUFBTSxDQUFDQyxJQUFJLENBQ1YvSCxNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUE7Y0FBTW1ELEdBQUcsRUFBQyxTQUFTO2NBQUNyQyxTQUFTLEVBQUM7WUFBdUMsR0FDbkVpQyxPQUFPLElBQUksSUFBSSxDQUNWLENBQ1A7WUFDRCxPQUFPNUgsTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQVNjLFNBQVMsRUFBQztZQUFrQixHQUFFbUMsTUFBTSxDQUFXO1VBQ2hFOzs7Ozs7Ozs7OztVQ3JEQTs7VUFFQUksTUFBQSxDQUFBQyxjQUFBLENBQUFoSSxPQUFBO1lBQ0FzRixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXpGLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrRSxRQUFBLEdBQUFsRSxPQUFBO1VBRUEsTUFBTW1JLGFBQWEsR0FBR0MsWUFBWSxJQUFHO1lBQ3BDLE1BQU1DLFVBQVUsR0FBR2IsSUFBSSxDQUFDYyxHQUFHLENBQUNkLElBQUksQ0FBQ1IsR0FBRyxDQUFDLEdBQUdvQixZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRCxPQUFPQSxZQUFZLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUdILFVBQVUsQ0FBQztVQUM3QyxDQUFDO1VBRUQsTUFBTUksZUFBZSxHQUFHQSxDQUFDQyxHQUE2QixFQUFFQyxDQUFTLEVBQUVDLENBQVMsRUFBRUMsUUFBZ0IsS0FBVTtZQUN2R0gsR0FBRyxDQUFDSSxTQUFTLEdBQUcsQ0FBQztZQUNqQkosR0FBRyxDQUFDSyxXQUFXLEdBQUcsTUFBTTtZQUV4QjtZQUNBTCxHQUFHLENBQUNNLFNBQVMsRUFBRTtZQUNmTixHQUFHLENBQUNPLE1BQU0sQ0FBQ04sQ0FBQyxHQUFHRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQkgsR0FBRyxDQUFDUSxNQUFNLENBQUNQLENBQUMsR0FBR0UsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDRCxDQUFDLENBQUM7WUFDaENGLEdBQUcsQ0FBQ1MsTUFBTSxFQUFFO1lBRVo7WUFDQVQsR0FBRyxDQUFDTSxTQUFTLEVBQUU7WUFDZk4sR0FBRyxDQUFDTyxNQUFNLENBQUNOLENBQUMsR0FBR0UsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0JILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDUCxDQUFDLEdBQUdFLFFBQVEsR0FBRyxDQUFDLEVBQUVELENBQUMsQ0FBQztZQUMvQkYsR0FBRyxDQUFDUyxNQUFNLEVBQUU7VUFDYixDQUFDO1VBRUQsTUFBTUMsSUFBSSxHQUFHQSxDQUFDQyxNQUF5QixFQUFFQyxjQUF3QixLQUFVO1lBQzFFLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxnQkFBZ0IsSUFBSSxHQUFHO1lBQzFDLE1BQU1DLE9BQU8sR0FBRyxFQUFFO1lBQ2xCTCxNQUFNLENBQUNNLEtBQUssR0FBR04sTUFBTSxDQUFDTyxXQUFXLEdBQUdMLEdBQUc7WUFDdkNGLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHLENBQUNSLE1BQU0sQ0FBQ1MsWUFBWSxHQUFHSixPQUFPLEdBQUcsQ0FBQyxJQUFJSCxHQUFHO1lBQ3pELE1BQU1iLEdBQUcsR0FBR1csTUFBTSxDQUFDVSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25DckIsR0FBRyxDQUFDc0IsS0FBSyxDQUFDVCxHQUFHLEVBQUVBLEdBQUcsQ0FBQztZQUNuQmIsR0FBRyxDQUFDdUIsU0FBUyxDQUFDLENBQUMsRUFBRVosTUFBTSxDQUFDUyxZQUFZLEdBQUcsQ0FBQyxHQUFHSixPQUFPLENBQUM7WUFFbkQ7WUFDQWhCLEdBQUcsQ0FBQ0ssV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQzdCTCxHQUFHLENBQUNJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQkosR0FBRyxDQUFDTSxTQUFTLEVBQUU7WUFDZk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEJQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDRyxNQUFNLENBQUNPLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DbEIsR0FBRyxDQUFDUyxNQUFNLEVBQUU7WUFFWixNQUFNZSxVQUFVLEdBQUdiLE1BQU0sQ0FBQ08sV0FBVztZQUNyQyxNQUFNZixRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTXNCLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNQyxZQUFZLEdBQUd2QixRQUFRLEdBQUdzQixVQUFVLENBQUMsQ0FBQztZQUM1QyxNQUFNRSxPQUFPLEdBQUc3QyxJQUFJLENBQUNDLEtBQUssQ0FBQ3lDLFVBQVUsR0FBR0UsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUV2RCxLQUFLLElBQUk1RCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc2RCxPQUFPLEVBQUU3RCxDQUFDLEVBQUUsRUFBRTtjQUNqQyxNQUFNOEQsU0FBUyxHQUFHOUMsSUFBSSxDQUFDQyxLQUFLLENBQUVqQixDQUFDLEdBQUc2RCxPQUFPLEdBQUlmLGNBQWMsQ0FBQzVDLE1BQU0sQ0FBQztjQUNuRSxNQUFNaUMsQ0FBQyxHQUFHeUIsWUFBWSxHQUFHNUQsQ0FBQztjQUMxQixJQUFJcUQsTUFBTSxHQUFHUCxjQUFjLENBQUNnQixTQUFTLENBQUMsR0FBR2pCLE1BQU0sQ0FBQ1MsWUFBWSxHQUFHSixPQUFPO2NBRXRFLElBQUlHLE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FDdEIsSUFBSUEsTUFBTSxHQUFHUixNQUFNLENBQUNTLFlBQVksR0FBRyxDQUFDLEVBQUVELE1BQU0sR0FBR1IsTUFBTSxDQUFDUyxZQUFZLEdBQUcsQ0FBQztjQUUzRXJCLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxDQUFDLEVBQUVrQixNQUFNLEVBQUVPLFlBQVksQ0FBQzs7VUFFL0MsQ0FBQztVQUVELE1BQU1HLFVBQVUsR0FBR0MsV0FBVyxJQUFHO1lBQ2hDLElBQUksQ0FBQ0EsV0FBVyxFQUFFLE9BQU8sRUFBRTtZQUMzQixNQUFNQyxPQUFPLEdBQUdELFdBQVcsQ0FBQ0UsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLE1BQU1DLFNBQVMsR0FBR3BELElBQUksQ0FBQ0MsS0FBSyxDQUFDZ0QsT0FBTyxDQUFDL0QsTUFBTSxHQUFHaUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNdkMsWUFBWSxHQUFHLEVBQUU7WUFDdkIsS0FBSyxJQUFJNUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbUUsT0FBTyxFQUFFbkUsQ0FBQyxFQUFFLEVBQUU7Y0FDakMsSUFBSXFFLFVBQVUsR0FBR0QsU0FBUyxHQUFHcEUsQ0FBQyxDQUFDLENBQUM7Y0FDaEMsSUFBSXNFLEdBQUcsR0FBRyxDQUFDO2NBQ1gsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILFNBQVMsRUFBRUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DRCxHQUFHLEdBQUdBLEdBQUcsR0FBR3RELElBQUksQ0FBQ3dELEdBQUcsQ0FBQ1AsT0FBTyxDQUFDSSxVQUFVLEdBQUdFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFaEQzQyxZQUFZLENBQUNOLElBQUksQ0FBQ2dELEdBQUcsR0FBR0YsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFFckMsT0FBT3hDLFlBQVk7VUFDcEIsQ0FBQztVQUVELE1BQU02QyxTQUFTLEdBQUdBLENBQUNULFdBQVcsRUFBRVUsUUFBUSxLQUFJO1lBQzNDLE9BQU85QixJQUFJLENBQUM4QixRQUFRLEVBQUUvQyxhQUFhLENBQUNvQyxVQUFVLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFDOUQsQ0FBQztVQUVLLFNBQVUxRSxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBQy9FO1lBQU0sQ0FBQyxHQUFHLElBQUFtRCxRQUFBLENBQUE5RCx3QkFBd0IsR0FBRTtZQUMzQyxNQUFNNkYsR0FBRyxHQUFHbEcsTUFBQSxDQUFBVyxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUJaLE1BQUEsQ0FBQVcsT0FBSyxDQUFDd0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIrSCxTQUFTLENBQUNsSyxNQUFNLEVBQUVrRixHQUFHLENBQUNrRixPQUFPLENBQUM7WUFDL0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0NwTCxNQUFBLENBQUFXLE9BQUEsQ0FBQWtFLGFBQUEsQ0FBQTdFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBc0gsUUFBQSxRQUNDakksTUFBQSxDQUFBVyxPQUFBLENBQUFrRSxhQUFBO2NBQVFxQixHQUFHLEVBQUVBO1lBQUcsRUFBSSxDQUNsQjtVQUVMIiwiaWdub3JlTGlzdCI6W119