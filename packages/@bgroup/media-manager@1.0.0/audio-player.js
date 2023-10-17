System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/media-manager@1.0.0/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/media-manager@1.0.0/audio-player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 711415198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useComponentAudioContext = exports.ComponentAudioContext = void 0;
          var _react = require("react");
          const ComponentAudioContext = (0, _react.createContext)({});
          exports.ComponentAudioContext = ComponentAudioContext;
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 2986254013,
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
            const [buffer, setBuffer] = _react.default.useState();
            const [ready, setReady] = _react.default.useState();
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const ref = audioRef.current;
            const getAudioContext = element => {
              return new Promise((resolve, reject) => {
                const audioContext = new AudioContext();
                const reader = new FileReader();
                reader.onload = () => {
                  const buffer = reader.result;
                  audioContext.decodeAudioData(buffer).then(buffer => {
                    resolve(audioContext);
                    setData({
                      ...data,
                      duration: parseFloat(buffer.duration.toFixed(2))
                    });
                    setBuffer(buffer);
                  }).catch(error => {
                    reject(error);
                  });
                };
                reader.readAsArrayBuffer(element);
              });
            };
            _react.default.useEffect(() => {
              try {
                const isBlob = src instanceof Blob;
                if (isBlob) {
                  const audio = new Audio();
                  audio.addEventListener('loadedmetadata', () => {
                    data.duration = parseFloat(audio.duration.toFixed(2));
                    data.fileName = src.name;
                    setData(data);
                    setAudio(audio);
                    getAudioContext(src).then(() => {
                      setReady(true);
                    });
                  });
                  audio.addEventListener('error', error => {
                    console.warn('error', error);
                    setError(true);
                  });
                  audio.src = URL.createObjectURL(src);
                  audio.load();
                  return;
                }
                fetch(src).then(async response => {
                  if (!response.ok) throw new Error(response.statusText);
                  const data = {
                    src
                  };
                  data.blob = await response.clone().blob();
                  try {
                    const audioContext = new AudioContext();
                    response.arrayBuffer().then(buffer => {
                      audioContext.decodeAudioData(buffer).then(audioBuffer => {
                        setBuffer(audioBuffer);
                      });
                    });
                  } catch (e) {
                    console.error('error getting audio', e);
                  }
                  data.url = URL.createObjectURL(data.blob);
                  const audio = new Audio();
                  audio.addEventListener('loadedmetadata', () => {
                    data.duration = parseFloat(audio.duration.toFixed(2));
                    data.fileName = src.split('/').pop();
                    setData(data);
                    setAudio(audio);
                  });
                  audio.addEventListener('error', error => {
                    setError(true);
                  });
                  audio.src = src;
                  audio.load();
                });
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
        hash: 2627428846,
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
        hash: 975179880,
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
        hash: 3107809367,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCRCxjQUFLLENBQUNpQyxTQUFTLENBQUMsTUFBSztjQUNwQitILFNBQVMsQ0FBQzNKLE1BQU0sRUFBRVEsR0FBRyxDQUFDQyxPQUFPLENBQUM7WUFDL0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE9BQ0NkLDREQUNDQTtjQUFRYSxHQUFHLEVBQUVBO1lBQUcsRUFBSSxDQUNsQjtVQUVMIiwibmFtZXMiOlsiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsInVzZUNvbXBvbmVudEF1ZGlvQ29udGV4dCIsInVzZUF1ZGlvIiwic3JjIiwiY29udmVydCIsImF1ZGlvUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJhdWRpbyIsInNldEF1ZGlvIiwidXNlU3RhdGUiLCJidWZmZXIiLCJzZXRCdWZmZXIiLCJyZWFkeSIsInNldFJlYWR5IiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwicmVmIiwiY3VycmVudCIsImdldEF1ZGlvQ29udGV4dCIsImVsZW1lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJkZWNvZGVBdWRpb0RhdGEiLCJ0aGVuIiwiZHVyYXRpb24iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhdGNoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJ1c2VFZmZlY3QiLCJpc0Jsb2IiLCJCbG9iIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZU5hbWUiLCJuYW1lIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsb2FkIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYmxvYiIsImNsb25lIiwiYXJyYXlCdWZmZXIiLCJhdWRpb0J1ZmZlciIsImUiLCJ1cmwiLCJzcGxpdCIsInBvcCIsIm1lc3NhZ2UiLCJBdWRpb1BsYXllciIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsIlByZWxvYWQiLCJhY3Rpb25zIiwicGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicGF1c2UiLCJyZXN0YXJ0Iiwib25DbGljayIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiUHJvZ3Jlc3NCYXIiLCJWaXN1YWxpemVyIiwiVGltZXIiLCJkaXNhYmxlZCIsInNldFZhbHVlIiwidGltZVVwZGF0ZUxpc3RlbmVyIiwib25FbmRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNoYW5nZSIsImRlc2lyZWRUaW1lIiwiaSIsImJ1ZmZlcmVkIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJ0eXBlIiwidGl0bGUiLCJtYXgiLCJ0aW1lIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInRpbWVUb1Nob3ciLCJzZXRUaW1lVG9TaG93IiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInJvdW5kIiwib3V0cHV0IiwicHVzaCIsImtleSIsIkZyYWdtZW50IiwiT2JqZWN0Iiwibm9ybWFsaXplRGF0YSIsImZpbHRlcmVkRGF0YSIsIm11bHRpcGxpZXIiLCJwb3ciLCJtYXAiLCJuIiwiZHJhd0xpbmVTZWdtZW50IiwiY3R4IiwieCIsInkiLCJiYXJXaWR0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhdyIsImNhbnZhcyIsIm5vcm1hbGl6ZWREYXRhIiwiZHByIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBhZGRpbmciLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwidHJhbnNsYXRlIiwidG90YWxXaWR0aCIsInNlcGFyYXRpb24iLCJzZWdtZW50V2lkdGgiLCJudW1CYXJzIiwiZGF0YUluZGV4IiwiZmlsdGVyRGF0YSIsInJhd0RhdGEiLCJnZXRDaGFubmVsRGF0YSIsInNhbXBsZXMiLCJibG9ja1NpemUiLCJibG9ja1N0YXJ0Iiwic3VtIiwiaiIsImFicyIsInZpc3VhbGl6ZSIsInNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250ZXh0LnRzeCIsInRzL2hvb2tzL3VzZS1hdWRpby50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9wcmVsb2FkLnRzeCIsInRzL3Byb2dyZXNzYmFyLnRzeCIsInRzL3RpbWVyLnRzeCIsInRzL3R5cGVzL0lBdWRpb0ludGVyZmFjZS50cyIsInRzL3Zpc3VhbGl6ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=