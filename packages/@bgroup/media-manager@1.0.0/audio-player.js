System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZiIsImN1cnJlbnQiLCJnZXRBdWRpb0NvbnRleHQiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwidGhlbiIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYXRjaCIsInJlYWRBc0FycmF5QnVmZmVyIiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJsb2IiLCJjbG9uZSIsImFycmF5QnVmZmVyIiwiYXVkaW9CdWZmZXIiLCJlIiwidXJsIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwiX3VzZUF1ZGlvIiwiX2ljb25zIiwiX2NvbnRleHQiLCJfcHJvZ3Jlc3NiYXIiLCJfdGltZXIiLCJfdmlzdWFsaXplciIsIl9wcmVsb2FkIiwiQXVkaW9QbGF5ZXIiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZCIsImFjdGlvbnMiLCJwbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZSIsInJlc3RhcnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJQcm9ncmVzc0JhciIsIlZpc3VhbGl6ZXIiLCJUaW1lciIsImRpc2FibGVkIiwic2V0VmFsdWUiLCJ0aW1lVXBkYXRlTGlzdGVuZXIiLCJvbkVuZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwiZGVzaXJlZFRpbWUiLCJpIiwiYnVmZmVyZWQiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInR5cGUiLCJ0aXRsZSIsIm1heCIsInRpbWUiLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidGltZVRvU2hvdyIsInNldFRpbWVUb1Nob3ciLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicm91bmQiLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiRnJhZ21lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIm5vcm1hbGl6ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJtdWx0aXBsaWVyIiwicG93IiwibWFwIiwibiIsImRyYXdMaW5lU2VnbWVudCIsImN0eCIsIngiLCJ5IiwiYmFyV2lkdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRyYXciLCJjYW52YXMiLCJub3JtYWxpemVkRGF0YSIsImRwciIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwYWRkaW5nIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldENvbnRleHQiLCJzY2FsZSIsInRyYW5zbGF0ZSIsInRvdGFsV2lkdGgiLCJzZXBhcmF0aW9uIiwic2VnbWVudFdpZHRoIiwibnVtQmFycyIsImRhdGFJbmRleCIsImZpbHRlckRhdGEiLCJyYXdEYXRhIiwiZ2V0Q2hhbm5lbERhdGEiLCJzYW1wbGVzIiwiYmxvY2tTaXplIiwiYmxvY2tTdGFydCIsInN1bSIsImoiLCJhYnMiLCJ2aXN1YWxpemUiLCJzZWxlY3RvciJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtYXVkaW8udHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wcm9ncmVzc2Jhci50c3giLCIvdHMvdGltZXIudHN4IiwiL0lBdWRpb0ludGVyZmFjZS50cyIsIi90cy92aXN1YWxpemVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU08sTUFBTUMscUJBQXFCLEdBQUcsSUFBQUYsTUFBQSxDQUFBRyxhQUFhLEVBQUMsRUFBbUIsQ0FBQztVQUFDQyxPQUFBLENBQUFGLHFCQUFBLEdBQUFBLHFCQUFBO1VBQ2pFLE1BQU1HLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLHFCQUFxQixDQUFDO1VBQUNFLE9BQUEsQ0FBQUMsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmhGLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVNLFFBQVFBLENBQUNDLEdBQUcsRUFBRUMsT0FBTztZQUNwQyxNQUFNQyxRQUFRLEdBQUdWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2QsTUFBQSxDQUFBVyxPQUFL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