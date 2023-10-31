System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
          const ComponentAudioContext = exports.ComponentAudioContext = (0, _react.createContext)({});
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 3888674681,
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
                    console.log(200, data.blob);
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
                  setAudio(audio);
                  setReady(true);
                });
              } catch (e) {
                console.error('capturado', e.message);
                setError(true);
              }
            }, [src]);
            console.log(100, error, ready, audio);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZiIsImN1cnJlbnQiLCJnZXRBdWRpb0NvbnRleHQiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwidGhlbiIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYXRjaCIsInJlYWRBc0FycmF5QnVmZmVyIiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJsb2IiLCJjbG9uZSIsImxvZyIsImFycmF5QnVmZmVyIiwiYXVkaW9CdWZmZXIiLCJlIiwidXJsIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwiX3VzZUF1ZGlvIiwiX2ljb25zIiwiX2NvbnRleHQiLCJfcHJvZ3Jlc3NiYXIiLCJfdGltZXIiLCJfdmlzdWFsaXplciIsIl9wcmVsb2FkIiwiQXVkaW9QbGF5ZXIiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZCIsImFjdGlvbnMiLCJwbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZSIsInJlc3RhcnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJQcm9ncmVzc0JhciIsIlZpc3VhbGl6ZXIiLCJUaW1lciIsImRpc2FibGVkIiwic2V0VmFsdWUiLCJ0aW1lVXBkYXRlTGlzdGVuZXIiLCJvbkVuZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwiZGVzaXJlZFRpbWUiLCJpIiwiYnVmZmVyZWQiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInR5cGUiLCJ0aXRsZSIsIm1heCIsInRpbWUiLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidGltZVRvU2hvdyIsInNldFRpbWVUb1Nob3ciLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicm91bmQiLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiRnJhZ21lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIm5vcm1hbGl6ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJtdWx0aXBsaWVyIiwicG93IiwibWFwIiwibiIsImRyYXdMaW5lU2VnbWVudCIsImN0eCIsIngiLCJ5IiwiYmFyV2lkdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRyYXciLCJjYW52YXMiLCJub3JtYWxpemVkRGF0YSIsImRwciIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwYWRkaW5nIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldENvbnRleHQiLCJzY2FsZSIsInRyYW5zbGF0ZSIsInRvdGFsV2lkdGgiLCJzZXBhcmF0aW9uIiwic2VnbWVudFdpZHRoIiwibnVtQmFycyIsImRhdGFJbmRleCIsImZpbHRlckRhdGEiLCJyYXdEYXRhIiwiZ2V0Q2hhbm5lbERhdGEiLCJzYW1wbGVzIiwiYmxvY2tTaXplIiwiYmxvY2tTdGFydCIsInN1bSIsImoiLCJhYnMiLCJ2aXN1YWxpemUiLCJzZWxlY3RvciJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtYXVkaW8udHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wcm9ncmVzc2Jhci50c3giLCIvdHMvdGltZXIudHN4IiwiL0lBdWRpb0ludGVyZmFjZS50cyIsIi90cy92aXN1YWxpemVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU08sTUFBTUMscUJBQXFCLEdBQUFDLE9BQUEsQ0FBQUQscUJBQUEsR0FBRyxJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFtQixDQUFDO1VBQ2hFLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLHFCQUFxQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmhGLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVNLFFBQVFBLENBQUNDLEdBQUcsRUFBRUMsT0FBTztZQUNwQyxNQUFNQyxRQUFRLEdBQUdWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2QsTUFBQSxDQUFBVyxPQUFLLENBQUNJ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