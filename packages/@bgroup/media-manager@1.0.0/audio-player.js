System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
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
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 4183954797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          function useAudio(src) {
            const audioRef = _react.default.useRef(null);
            const [audio, setAudio] = _react.default.useState(null);
            const [buffer, setBuffer] = _react.default.useState();
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const ref = audioRef.current;
            _react.default.useEffect(() => {
              try {
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
                    console.warn('error', error);
                    setError(true);
                  });
                  audio.src = src;
                  audio.load();
                });
              } catch (e) {
                console.error(e.message);
                setError(true);
              }
            }, [src]);
            return {
              ready: audio && buffer,
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
        hash: 1923822896,
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
            src
          }) {
            console.log(0.2, src);
            const {
              ready,
              audioRef,
              error,
              audio,
              data,
              buffer
            } = (0, _useAudio.useAudio)(src);
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
        hash: 3386254465,
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
              data: {
                duration
              }
            } = (0, _context.useComponentAudioContext)();
            const [value, setValue] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const timeUpdateListener = () => {
                const currentTime = audio.currentTime;
                const percentage = currentTime / duration * 100;
                setValue(percentage);
              };
              audio.addEventListener('timeupdate', timeUpdateListener);
              return () => {
                audio.removeEventListener('timeupdate', timeUpdateListener);
              };
            }, [audio, duration]);
            const onChange = event => {
              event.stopPropagation();
              const desiredTime = parseFloat(event.currentTarget.value);
              console.log(`Buffered Start: ${audio.buffered.start(0)}, Buffered End: ${audio.buffered.end(0)}, Desired Time: ${desiredTime}`);
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
              type: 'range',
              name: 'rang',
              onChange: onChange,
              title: 'audio duration',
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
        hash: 2938475526,
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
                key: 'hours',
                className: 'timer__numbers timer__numbers--hours'
              }, hours));
            }
            if (minutes < 10) minutes = '0' + minutes;
            output.push(_react.default.createElement(_react.default.Fragment, {
              key: 'minutes'
            }, _react.default.createElement("span", {
              className: 'timer__numbers timer__number--minutes'
            }, minutes ?? '00'), _react.default.createElement("span", {
              className: 'timer__separator'
            }, ":")));
            if (seconds < 10) seconds = '0' + seconds;
            output.push(_react.default.createElement("span", {
              key: 'seconds',
              className: 'timer__numbers timer__number--seconds'
            }, seconds ?? '00'));
            return _react.default.createElement("section", {
              className: 'timer__container'
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
        hash: 2421706176,
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
          const drawLineSegment1 = (ctx, x, y, width, isEven) => {
            ctx.lineWidth = 1; // how thick the line is
            ctx.strokeStyle = '#fff'; // what color our line is
            ctx.beginPath();
            y = isEven ? y : -y;
            ctx.moveTo(x, 0);
            ctx.lineTo(x, y);
            ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
            ctx.lineTo(x + width, 0);
            ctx.stroke();
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
          const draw1 = (canvas, normalizedData) => {
            // Set up the canvas
            const dpr = window.devicePixelRatio || 1.5;
            const padding = 20;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            ctx.translate(0, canvas.offsetHeight / 2 + padding); // Set Y = 0 to be in the middle of the canvas
            // draw the line segments
            const width = canvas.offsetWidth / normalizedData.length;
            for (let i = 0; i < normalizedData.length; i++) {
              const x = width * i;
              let height = normalizedData[i] * canvas.offsetHeight - padding;
              if (height < 0) {
                height = 0;
              } else if (height > canvas.offsetHeight / 2) {
                height = canvas.offsetHeight / 2;
              }
              drawLineSegment(ctx, x, height, width, (i + 1) % 2);
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
            console.log(10, buffer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJhdWRpb1JlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJhdWRpbyIsInNldEF1ZGlvIiwidXNlU3RhdGUiLCJidWZmZXIiLCJzZXRCdWZmZXIiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJyZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJsb2IiLCJjbG9uZSIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImFycmF5QnVmZmVyIiwiZGVjb2RlQXVkaW9EYXRhIiwiYXVkaW9CdWZmZXIiLCJlIiwiY29uc29sZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmaWxlTmFtZSIsInNwbGl0IiwicG9wIiwid2FybiIsImxvYWQiLCJtZXNzYWdlIiwicmVhZHkiLCJfdXNlQXVkaW8iLCJfaWNvbnMiLCJfY29udGV4dCIsIl9wcm9ncmVzc2JhciIsIl90aW1lciIsIl92aXN1YWxpemVyIiwiX3ByZWxvYWQiLCJBdWRpb1BsYXllciIsImxvZyIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkIiwiYWN0aW9ucyIsInBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlIiwicmVzdGFydCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlByb2dyZXNzQmFyIiwiVmlzdWFsaXplciIsIlRpbWVyIiwiZGlzYWJsZWQiLCJzZXRWYWx1ZSIsInRpbWVVcGRhdGVMaXN0ZW5lciIsInBlcmNlbnRhZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaGFuZ2UiLCJkZXNpcmVkVGltZSIsImJ1ZmZlcmVkIiwic3RhcnQiLCJlbmQiLCJpIiwibGVuZ3RoIiwidHlwZSIsIm5hbWUiLCJ0aXRsZSIsIm1heCIsInRpbWUiLCJ0aW1lVG9TaG93Iiwic2V0VGltZVRvU2hvdyIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJyb3VuZCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJGcmFnbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwibm9ybWFsaXplRGF0YSIsImZpbHRlcmVkRGF0YSIsIm11bHRpcGxpZXIiLCJwb3ciLCJtYXAiLCJuIiwiZHJhd0xpbmVTZWdtZW50MSIsImN0eCIsIngiLCJ5Iiwid2lkdGgiLCJpc0V2ZW4iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiZHJhd0xpbmVTZWdtZW50IiwiYmFyV2lkdGgiLCJkcmF3IiwiY2FudmFzIiwibm9ybWFsaXplZERhdGEiLCJkcHIiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicGFkZGluZyIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwidHJhbnNsYXRlIiwidG90YWxXaWR0aCIsInNlcGFyYXRpb24iLCJzZWdtZW50V2lkdGgiLCJudW1CYXJzIiwiZGF0YUluZGV4IiwiZHJhdzEiLCJmaWx0ZXJEYXRhIiwicmF3RGF0YSIsImdldENoYW5uZWxEYXRhIiwic2FtcGxlcyIsImJsb2NrU2l6ZSIsImJsb2NrU3RhcnQiLCJzdW0iLCJqIiwiYWJzIiwidmlzdWFsaXplIiwic2VsZWN0b3IiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaG9va3MvdXNlLWF1ZGlvLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHJvZ3Jlc3NiYXIudHN4IiwiL3RzL3RpbWVyLnRzeCIsIi9JQXVkaW9JbnRlcmZhY2UudHMiLCIvdHMvdmlzdWFsaXplci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU08sTUFBTUMscUJBQXFCLEdBQUcsSUFBQUYsTUFBQSxDQUFBRyxhQUFhLEVBQUMsRUFBbUIsQ0FBQztVQUFDQyxPQUFBLENBQUFGLHFCQUFBLEdBQUFBLHFCQUFBO1VBQ2pFLE1BQU1HLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLHFCQUFxQixDQUFDO1VBQUNFLE9BQUEsQ0FBQUMsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmhGLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVNLFFBQVFBLENBQUNDLEdBQUc7WUFDM0IsTUFBTUMsUUFBUSxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDSSxRQUFRLENBQXFCLElBQUksQ0FBQztZQUNsRSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdoQixNQUFBLENBQUFVLE9BQUssQ0FBQ0ksUUFBUSxFQUFlO1lBQ3pELE1BQU0sQ0FBQ0csSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2xC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