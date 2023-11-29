System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
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
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.16"]]);
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
          const ComponentAudioContext = exports.ComponentAudioContext = (0, _react.createContext)({});
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 3061220603,
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
                  setAudio(audio);
                  setReady(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZiIsImN1cnJlbnQiLCJnZXRBdWRpb0NvbnRleHQiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwidGhlbiIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYXRjaCIsInJlYWRBc0FycmF5QnVmZmVyIiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJsb2IiLCJjbG9uZSIsImFycmF5QnVmZmVyIiwiYXVkaW9CdWZmZXIiLCJlIiwidXJsIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwiX3VzZUF1ZGlvIiwiX2ljb25zIiwiX2NvbnRleHQiLCJfcHJvZ3Jlc3NiYXIiLCJfdGltZXIiLCJfdmlzdWFsaXplciIsIl9wcmVsb2FkIiwiQXVkaW9QbGF5ZXIiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZCIsImFjdGlvbnMiLCJwbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZSIsInJlc3RhcnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJQcm9ncmVzc0JhciIsIlZpc3VhbGl6ZXIiLCJUaW1lciIsImRpc2FibGVkIiwic2V0VmFsdWUiLCJ0aW1lVXBkYXRlTGlzdGVuZXIiLCJvbkVuZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwiZGVzaXJlZFRpbWUiLCJpIiwiYnVmZmVyZWQiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInR5cGUiLCJ0aXRsZSIsIm1heCIsInRpbWUiLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidGltZVRvU2hvdyIsInNldFRpbWVUb1Nob3ciLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicm91bmQiLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiRnJhZ21lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIm5vcm1hbGl6ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJtdWx0aXBsaWVyIiwicG93IiwibWFwIiwibiIsImRyYXdMaW5lU2VnbWVudCIsImN0eCIsIngiLCJ5IiwiYmFyV2lkdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRyYXciLCJjYW52YXMiLCJub3JtYWxpemVkRGF0YSIsImRwciIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwYWRkaW5nIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldENvbnRleHQiLCJzY2FsZSIsInRyYW5zbGF0ZSIsInRvdGFsV2lkdGgiLCJzZXBhcmF0aW9uIiwic2VnbWVudFdpZHRoIiwibnVtQmFycyIsImRhdGFJbmRleCIsImZpbHRlckRhdGEiLCJyYXdEYXRhIiwiZ2V0Q2hhbm5lbERhdGEiLCJzYW1wbGVzIiwiYmxvY2tTaXplIiwiYmxvY2tTdGFydCIsInN1bSIsImoiLCJhYnMiLCJ2aXN1YWxpemUiLCJzZWxlY3RvciJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtYXVkaW8udHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wcm9ncmVzc2Jhci50c3giLCIvdHMvdGltZXIudHN4IiwiL0lBdWRpb0ludGVyZmFjZS50cyIsIi90cy92aXN1YWxpemVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFTTyxNQUFNQyxxQkFBcUIsR0FBQUMsT0FBQSxDQUFBRCxxQkFBQSxHQUFHLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFDLEVBQW1CLENBQUM7VUFDaEUsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTSxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0oscUJBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSx3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWaEYsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBWU0sU0FBVU0sUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPO1lBQ3BDLE1BQU1DLFFBQVEsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHZCxNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFB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