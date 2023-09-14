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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFTTyxNQUFNQSxxQkFBcUIsR0FBRyx3QkFBYSxFQUFDLEVBQW1CLENBQUM7VUFBQ0M7VUFDakUsTUFBTUMsd0JBQXdCLEdBQUcsTUFBTSxxQkFBVSxFQUFDRixxQkFBcUIsQ0FBQztVQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWaEY7VUFZTSxTQUFVRSxRQUFRLENBQUNDLEdBQUc7WUFDM0IsTUFBTUMsUUFBUSxHQUFHQyxjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHSCxjQUFLLENBQUNJLFFBQVEsQ0FBcUIsSUFBSSxDQUFDO1lBQ2xFLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR04sY0FBSyxDQUFDSSxRQUFRLEVBQWU7WUFDekQsTUFBTSxDQUFDRyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHUixjQUFLLENBQUNJLFFBQVEsQ0FBa0I7Y0FBQ047WUFBRyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDVyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVixjQUFLLENBQUNJLFFBQVEsQ0FBUSxLQUFLLENBQUM7WUFDdEQsTUFBTU8sR0FBRyxHQUFHWixRQUFRLENBQUNhLE9BQU87WUFFNUJaLGNBQUssQ0FBQ2EsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSTtnQkFDSEMsS0FBSyxDQUFDaEIsR0FBRyxDQUFDLENBQUNpQixJQUFJLENBQUMsTUFBTUMsUUFBUSxJQUFHO2tCQUNoQyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVUsQ0FBQztrQkFDdEQsTUFBTVosSUFBSSxHQUFvQjtvQkFBQ1Q7a0JBQUcsQ0FBQztrQkFFbkNTLElBQUksQ0FBQ2EsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssS0FBSyxFQUFFLENBQUNELElBQUksRUFBRTtrQkFDekMsSUFBSTtvQkFDSCxNQUFNRSxZQUFZLEdBQUcsSUFBSUMsWUFBWSxFQUFFO29CQUN2Q1AsUUFBUSxDQUFDUSxXQUFXLEVBQUUsQ0FBQ1QsSUFBSSxDQUFDVixNQUFNLElBQUc7c0JBQ3BDaUIsWUFBWSxDQUFDRyxlQUFlLENBQUNwQixNQUFNLENBQUMsQ0FBQ1UsSUFBSSxDQUFDVyxXQUFXLElBQUc7d0JBQ3ZEcEIsU0FBUyxDQUFDb0IsV0FBVyxDQUFDO3NCQUN2QixDQUFDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDO21CQUNGLENBQUMsT0FBT0MsQ0FBQyxFQUFFO29CQUNYQyxPQUFPLENBQUNuQixLQUFLLENBQUMscUJBQXFCLEVBQUVrQixDQUFDLENBQUM7O2tCQUV4Q3BCLElBQUksQ0FBQ3NCLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUN4QixJQUFJLENBQUNhLElBQUksQ0FBQztrQkFDekMsTUFBTWxCLEtBQUssR0FBRyxJQUFJOEIsS0FBSyxFQUFFO2tCQUV6QjlCLEtBQUssQ0FBQytCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQUs7b0JBQzdDMUIsSUFBSSxDQUFDMkIsUUFBUSxHQUFHQyxVQUFVLENBQUNqQyxLQUFLLENBQUNnQyxRQUFRLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckQ3QixJQUFJLENBQUM4QixRQUFRLEdBQUd2QyxHQUFHLENBQUN3QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRTtvQkFFcEMvQixPQUFPLENBQUNELElBQUksQ0FBQztvQkFDYkosUUFBUSxDQUFDRCxLQUFLLENBQUM7a0JBQ2hCLENBQUMsQ0FBQztrQkFFRkEsS0FBSyxDQUFDK0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFeEIsS0FBSyxJQUFHO29CQUN2Q21CLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLE9BQU8sRUFBRS9CLEtBQUssQ0FBQztvQkFDNUJDLFFBQVEsQ0FBQyxJQUFJLENBQUM7a0JBQ2YsQ0FBQyxDQUFDO2tCQUNGUixLQUFLLENBQUNKLEdBQUcsR0FBR0EsR0FBRztrQkFDZkksS0FBSyxDQUFDdUMsSUFBSSxFQUFFO2dCQUNiLENBQUMsQ0FBQztlQUNGLENBQUMsT0FBT2QsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNuQixLQUFLLENBQUNrQixDQUFDLENBQUNlLE9BQU8sQ0FBQztnQkFDeEJoQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUVoQixDQUFDLEVBQUUsQ0FBQ1osR0FBRyxDQUFDLENBQUM7WUFFVCxPQUFPO2NBQ042QyxLQUFLLEVBQUV6QyxLQUFLLElBQUlHLE1BQU07Y0FDdEJOLFFBQVEsRUFBRVksR0FBRztjQUNiTixNQUFNO2NBQ05ILEtBQUs7Y0FDTEssSUFBSTtjQUNKRTthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQVVtQyxXQUFXLENBQUM7WUFBQzlDO1VBQUcsQ0FBQztZQUMzQzhCLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxHQUFHLEVBQUUvQyxHQUFHLENBQUM7WUFDckIsTUFBTTtjQUFDNkMsS0FBSztjQUFFNUMsUUFBUTtjQUFFVSxLQUFLO2NBQUVQLEtBQUs7Y0FBRUssSUFBSTtjQUFFRjtZQUFNLENBQUMsR0FBRyxzQkFBUSxFQUFDUCxHQUFHLENBQUM7WUFDbkUsTUFBTSxDQUFDZ0QsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRy9DLGNBQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUM0QyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHakQsY0FBSyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQ3VDLEtBQUssSUFBSWxDLEtBQUssRUFBRSxPQUFPVCw2QkFBQ2tELGdCQUFPLE9BQUc7WUFDdkMsTUFBTUMsT0FBTyxHQUFHO2NBQ2ZDLElBQUksRUFBRUMsS0FBSyxJQUFHO2dCQUNiQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDdkJwRCxLQUFLLENBQUNrRCxJQUFJLEVBQUU7Z0JBQ1pMLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDakIsQ0FBQztjQUNEUSxLQUFLLEVBQUVGLEtBQUssSUFBRztnQkFDZEEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCcEQsS0FBSyxDQUFDcUQsS0FBSyxFQUFFO2dCQUNiUixVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2xCLENBQUM7Y0FDRFMsT0FBTyxFQUFFSCxLQUFLLElBQUc7Z0JBQ2hCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN4QjthQUNBO1lBRUQsTUFBTUcsT0FBTyxHQUFHSixLQUFLLElBQUc7Y0FDdkIsTUFBTUssTUFBTSxHQUFHTCxLQUFLLENBQUNNLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDRixNQUFNO2NBRWpEUCxPQUFPLENBQUNPLE1BQU0sQ0FBQyxDQUFDTCxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUNELE1BQU1LLE1BQU0sR0FBR1osT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO1lBQ3pDLE1BQU1lLEtBQUssR0FBRztjQUNiM0QsS0FBSztjQUNMSyxJQUFJO2NBQ0p1QyxPQUFPO2NBQ1B6QyxNQUFNO2NBQ04yQyxXQUFXO2NBQ1hDO2FBQ0E7WUFDRCxPQUNDakQsNkJBQUNOLDhCQUFxQixDQUFDb0UsUUFBUTtjQUFDRCxLQUFLLEVBQUVBO1lBQUssR0FDM0M3RDtjQUFLK0QsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDL0QsNkJBQUNnRSxpQkFBVTtjQUFDQyxJQUFJLEVBQUVQLE1BQU07Y0FBQSxlQUFlQSxNQUFNO2NBQUVELE9BQU8sRUFBRUE7WUFBTyxFQUFJLEVBQ25FekQ7Y0FBSytELFNBQVMsRUFBQztZQUFrQixHQUNoQy9EO2NBQUsrRCxTQUFTLEVBQUM7WUFBYyxHQUM1Qi9ELDZCQUFDa0Usd0JBQVcsT0FBRyxFQUNmbEUsNkJBQUNtRSxzQkFBVSxPQUFHLENBQ1QsRUFDTm5FLDZCQUFDb0UsWUFBSyxPQUFHLENBQ0osQ0FDRCxDQUMwQjtVQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REE7VUFDQTtVQUVNLFNBQVVsQixPQUFPLENBQUMsRUFBRTtZQUN6QixPQUNDbEQ7Y0FBSytELFNBQVMsRUFBQztZQUE4QyxHQUM1RC9ELDZCQUFDZ0UsaUJBQVU7Y0FBQ0ssUUFBUTtjQUFDSixJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ25DakU7Y0FBSytELFNBQVMsRUFBQztZQUFrQixHQUNoQy9EO2NBQUsrRCxTQUFTLEVBQUM7WUFBYyxHQUM1Qi9EO2NBQUsrRCxTQUFTLEVBQUM7WUFBZ0IsRUFBRyxDQUM3QixFQUNOL0Q7Y0FBSytELFNBQVMsRUFBQztZQUFrQixHQUNoQy9EO2NBQU0rRCxTQUFTLEVBQUM7WUFBZ0IsUUFBVSxFQUMxQy9EO2NBQUsrRCxTQUFTLEVBQUM7WUFBa0IsT0FBUSxFQUN6Qy9EO2NBQU0rRCxTQUFTLEVBQUM7WUFBZ0IsUUFBVSxDQUNyQyxDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTtVQUVNLFNBQVVHLFdBQVc7WUFDMUIsTUFBTXZELEdBQUcsR0FBRyxpQkFBTSxFQUFtQixJQUFJLENBQUM7WUFDMUMsTUFBTTtjQUNMVCxLQUFLO2NBQ0wrQyxjQUFjO2NBQ2QxQyxJQUFJLEVBQUU7Z0JBQUUyQjtjQUFRO1lBQUUsQ0FDbEIsR0FBRyxxQ0FBd0IsR0FBRTtZQUM5QixNQUFNLENBQUMyQixLQUFLLEVBQUVTLFFBQVEsQ0FBQyxHQUFHLG1CQUFRLEVBQUMsQ0FBQyxDQUFDO1lBRXJDLG9CQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1DLGtCQUFrQixHQUFHLE1BQUs7Z0JBQy9CLE1BQU12QixXQUFXLEdBQUc5QyxLQUFLLENBQUM4QyxXQUFXO2dCQUNyQyxNQUFNd0IsVUFBVSxHQUFJeEIsV0FBVyxHQUFHZCxRQUFRLEdBQUksR0FBRztnQkFDakRvQyxRQUFRLENBQUNFLFVBQVUsQ0FBQztjQUNyQixDQUFDO2NBQ0R0RSxLQUFLLENBQUMrQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVzQyxrQkFBa0IsQ0FBQztjQUV4RCxPQUFPLE1BQUs7Z0JBQ1hyRSxLQUFLLENBQUN1RSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUVGLGtCQUFrQixDQUFDO2NBQzVELENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ3JFLEtBQUssRUFBRWdDLFFBQVEsQ0FBQyxDQUFDO1lBRXJCLE1BQU13QyxRQUFRLEdBQUlyQixLQUEwQyxJQUFJO2NBQy9EQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNcUIsV0FBVyxHQUFHeEMsVUFBVSxDQUFDa0IsS0FBSyxDQUFDTSxhQUFhLENBQUNFLEtBQUssQ0FBQztjQUN6RGpDLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FDVixtQkFBbUIzQyxLQUFLLENBQUMwRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CM0UsS0FBSyxDQUFDMEUsUUFBUSxDQUFDRSxHQUFHLENBQzlFLENBQUMsQ0FDRCxtQkFBbUJILFdBQVcsRUFBRSxDQUNqQztjQUVELEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHN0UsS0FBSyxDQUFDMEUsUUFBUSxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJN0UsS0FBSyxDQUFDMEUsUUFBUSxDQUFDQyxLQUFLLENBQUNFLENBQUMsQ0FBQyxJQUFJSixXQUFXLElBQUl6RSxLQUFLLENBQUMwRSxRQUFRLENBQUNFLEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDLElBQUlKLFdBQVcsRUFBRTtrQkFDbkZ6RSxLQUFLLENBQUM4QyxXQUFXLEdBQUcyQixXQUFXO2tCQUMvQkwsUUFBUSxDQUFDSyxXQUFXLENBQUM7a0JBQ3JCOzs7Y0FHRi9DLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLG9DQUFvQyxFQUFFdEMsS0FBSyxDQUFDMEUsUUFBUSxDQUFDSSxNQUFNLENBQUM7WUFDMUUsQ0FBQztZQUVELE9BQ0NoRjtjQUNDaUYsSUFBSSxFQUFDLE9BQU87Y0FDWkMsSUFBSSxFQUFDLE1BQU07Y0FDWFIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCUyxLQUFLLEVBQUMsZ0JBQWdCO2NBQ3RCdEIsS0FBSyxFQUFFQSxLQUFLO2NBQ1psRCxHQUFHLEVBQUVBLEdBQUc7Y0FDUnlFLEdBQUcsRUFBRWxEO1lBQVEsRUFDWjtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQTtVQUVBO1VBRU0sU0FBVWtDLEtBQUs7WUFDcEIsTUFBTTtjQUNMN0QsSUFBSSxFQUFFO2dCQUFFMkIsUUFBUSxFQUFFbUQ7Y0FBSSxDQUFFO2NBQ3hCbkY7WUFBSyxDQUNMLEdBQUcscUNBQXdCLEdBQUU7WUFFOUIsTUFBTSxDQUFDb0YsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3ZGLGNBQUssQ0FBQ0ksUUFBUSxDQUFDaUYsSUFBSSxDQUFDO1lBRXhEckYsY0FBSyxDQUFDYSxTQUFTLENBQUMsTUFBSztjQUNwQlgsS0FBSyxDQUFDK0IsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQUs7Z0JBQ25Dc0QsYUFBYSxDQUFDckYsS0FBSyxDQUFDOEMsV0FBVyxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUNGOUMsS0FBSyxDQUFDK0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUs7Z0JBQ3BDc0QsYUFBYSxDQUFDRixJQUFJLENBQUM7Y0FDcEIsQ0FBQyxDQUFDO2NBQ0ZuRixLQUFLLENBQUMrQixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBSztnQkFDbkNzRCxhQUFhLENBQUNGLElBQUksQ0FBQztjQUNwQixDQUFDLENBQUM7Y0FDRm5GLEtBQUssQ0FBQytCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFLO2dCQUN6Q3NELGFBQWEsQ0FBQ3JGLEtBQUssQ0FBQzhDLFdBQVcsQ0FBQztjQUNqQyxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sSUFBSXdDLEtBQUssR0FBVUMsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSUssT0FBTyxHQUFVRixJQUFJLENBQUNDLEtBQUssQ0FBRUosVUFBVSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUM7WUFDekQsSUFBSU0sT0FBTyxHQUFVSCxJQUFJLENBQUNJLEtBQUssQ0FBQ1AsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVoRCxNQUFNUSxNQUFNLEdBQUcsRUFBRTtZQUNqQixJQUFJTixLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQ2RNLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWL0Y7Z0JBQU1nRyxHQUFHLEVBQUMsT0FBTztnQkFBQ2pDLFNBQVMsRUFBQztjQUFzQyxHQUNoRXlCLEtBQUssQ0FDQSxDQUNQOztZQUVGLElBQUlHLE9BQU8sR0FBRyxFQUFFLEVBQUVBLE9BQU8sR0FBRyxHQUFHLEdBQUdBLE9BQU87WUFDekNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWL0YsNkJBQUNBLGNBQUssQ0FBQ2lHLFFBQVE7Y0FBQ0QsR0FBRyxFQUFDO1lBQVMsR0FDNUJoRztjQUFNK0QsU0FBUyxFQUFDO1lBQXVDLEdBQUU0QixPQUFPLElBQUksSUFBSSxDQUFRLEVBQ2hGM0Y7Y0FBTStELFNBQVMsRUFBQztZQUFrQixPQUFTLENBQzNCLENBQ2pCO1lBQ0QsSUFBSTZCLE9BQU8sR0FBRyxFQUFFLEVBQUVBLE9BQU8sR0FBRyxHQUFHLEdBQUdBLE9BQU87WUFDekNFLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWL0Y7Y0FBTWdHLEdBQUcsRUFBQyxTQUFTO2NBQUNqQyxTQUFTLEVBQUM7WUFBdUMsR0FDbkU2QixPQUFPLElBQUksSUFBSSxDQUNWLENBQ1A7WUFDRCxPQUFPNUY7Y0FBUytELFNBQVMsRUFBQztZQUFrQixHQUFFK0IsTUFBTSxDQUFXO1VBQ2hFOzs7Ozs7Ozs7OztVQ3BEQTs7VUFFQUk7WUFDQXJDO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFDQTtVQUVBLE1BQU1zQyxhQUFhLEdBQUdDLFlBQVksSUFBRztZQUNwQyxNQUFNQyxVQUFVLEdBQUdaLElBQUksQ0FBQ2EsR0FBRyxDQUFDYixJQUFJLENBQUNMLEdBQUcsQ0FBQyxHQUFHZ0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBT0EsWUFBWSxDQUFDRyxHQUFHLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxHQUFHSCxVQUFVLENBQUM7VUFDN0MsQ0FBQztVQUVELE1BQU1JLGdCQUFnQixHQUFHLENBQUNDLEdBQUcsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxLQUFJO1lBQ3JESixHQUFHLENBQUNLLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQkwsR0FBRyxDQUFDTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDMUJOLEdBQUcsQ0FBQ08sU0FBUyxFQUFFO1lBQ2ZMLENBQUMsR0FBR0UsTUFBTSxHQUFHRixDQUFDLEdBQUcsQ0FBQ0EsQ0FBQztZQUNuQkYsR0FBRyxDQUFDUSxNQUFNLENBQUNQLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEJELEdBQUcsQ0FBQ1MsTUFBTSxDQUFDUixDQUFDLEVBQUVDLENBQUMsQ0FBQztZQUNoQkYsR0FBRyxDQUFDVSxHQUFHLENBQUNULENBQUMsR0FBR0UsS0FBSyxHQUFHLENBQUMsRUFBRUQsQ0FBQyxFQUFFQyxLQUFLLEdBQUcsQ0FBQyxFQUFFcEIsSUFBSSxDQUFDNEIsRUFBRSxFQUFFLENBQUMsRUFBRVAsTUFBTSxDQUFDO1lBQ3hESixHQUFHLENBQUNTLE1BQU0sQ0FBQ1IsQ0FBQyxHQUFHRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCSCxHQUFHLENBQUNZLE1BQU0sRUFBRTtVQUNiLENBQUM7VUFDRCxNQUFNQyxlQUFlLEdBQUcsQ0FBQ2IsR0FBNkIsRUFBRUMsQ0FBUyxFQUFFQyxDQUFTLEVBQUVZLFFBQWdCLEtBQVU7WUFDdkdkLEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLENBQUM7WUFDakJMLEdBQUcsQ0FBQ00sV0FBVyxHQUFHLE1BQU07WUFFeEI7WUFDQU4sR0FBRyxDQUFDTyxTQUFTLEVBQUU7WUFDZlAsR0FBRyxDQUFDUSxNQUFNLENBQUNQLENBQUMsR0FBR2EsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0JkLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDUixDQUFDLEdBQUdhLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQ1osQ0FBQyxDQUFDO1lBQ2hDRixHQUFHLENBQUNZLE1BQU0sRUFBRTtZQUVaO1lBQ0FaLEdBQUcsQ0FBQ08sU0FBUyxFQUFFO1lBQ2ZQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDUCxDQUFDLEdBQUdhLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CZCxHQUFHLENBQUNTLE1BQU0sQ0FBQ1IsQ0FBQyxHQUFHYSxRQUFRLEdBQUcsQ0FBQyxFQUFFWixDQUFDLENBQUM7WUFDL0JGLEdBQUcsQ0FBQ1ksTUFBTSxFQUFFO1VBQ2IsQ0FBQztVQUVELE1BQU1HLElBQUksR0FBRyxDQUFDQyxNQUF5QixFQUFFQyxjQUF3QixLQUFVO1lBQzFFLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxnQkFBZ0IsSUFBSSxHQUFHO1lBQzFDLE1BQU1DLE9BQU8sR0FBRyxFQUFFO1lBQ2xCTCxNQUFNLENBQUNiLEtBQUssR0FBR2EsTUFBTSxDQUFDTSxXQUFXLEdBQUdKLEdBQUc7WUFDdkNGLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQUNQLE1BQU0sQ0FBQ1EsWUFBWSxHQUFHSCxPQUFPLEdBQUcsQ0FBQyxJQUFJSCxHQUFHO1lBQ3pELE1BQU1sQixHQUFHLEdBQUdnQixNQUFNLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkN6QixHQUFHLENBQUMwQixLQUFLLENBQUNSLEdBQUcsRUFBRUEsR0FBRyxDQUFDO1lBQ25CbEIsR0FBRyxDQUFDMkIsU0FBUyxDQUFDLENBQUMsRUFBRVgsTUFBTSxDQUFDUSxZQUFZLEdBQUcsQ0FBQyxHQUFHSCxPQUFPLENBQUM7WUFFbkQ7WUFDQXJCLEdBQUcsQ0FBQ00sV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQzdCTixHQUFHLENBQUNLLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQkwsR0FBRyxDQUFDTyxTQUFTLEVBQUU7WUFDZlAsR0FBRyxDQUFDUSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEJSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDTyxNQUFNLENBQUNNLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DdEIsR0FBRyxDQUFDWSxNQUFNLEVBQUU7WUFFWixNQUFNZ0IsVUFBVSxHQUFHWixNQUFNLENBQUNNLFdBQVc7WUFDckMsTUFBTVIsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU1lLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNQyxZQUFZLEdBQUdoQixRQUFRLEdBQUdlLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE1BQU1FLE9BQU8sR0FBR2hELElBQUksQ0FBQ0MsS0FBSyxDQUFDNEMsVUFBVSxHQUFHRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBRXZELEtBQUssSUFBSXpELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzBELE9BQU8sRUFBRTFELENBQUMsRUFBRSxFQUFFO2NBQ2pDLE1BQU0yRCxTQUFTLEdBQUdqRCxJQUFJLENBQUNDLEtBQUssQ0FBRVgsQ0FBQyxHQUFHMEQsT0FBTyxHQUFJZCxjQUFjLENBQUMzQyxNQUFNLENBQUM7Y0FDbkUsTUFBTTJCLENBQUMsR0FBRzZCLFlBQVksR0FBR3pELENBQUM7Y0FDMUIsSUFBSWtELE1BQU0sR0FBR04sY0FBYyxDQUFDZSxTQUFTLENBQUMsR0FBR2hCLE1BQU0sQ0FBQ1EsWUFBWSxHQUFHSCxPQUFPO2NBRXRFLElBQUlFLE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FDdEIsSUFBSUEsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFlBQVksR0FBRyxDQUFDLEVBQUVELE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxZQUFZLEdBQUcsQ0FBQztjQUUzRVgsZUFBZSxDQUFDYixHQUFHLEVBQUVDLENBQUMsRUFBRXNCLE1BQU0sRUFBRU8sWUFBWSxDQUFDOztVQUUvQyxDQUFDO1VBRUQsTUFBTUcsS0FBSyxHQUFHLENBQUNqQixNQUFNLEVBQUVDLGNBQWMsS0FBSTtZQUN4QztZQUVBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxnQkFBZ0IsSUFBSSxHQUFHO1lBQzFDLE1BQU1DLE9BQU8sR0FBRyxFQUFFO1lBQ2xCTCxNQUFNLENBQUNiLEtBQUssR0FBR2EsTUFBTSxDQUFDTSxXQUFXLEdBQUdKLEdBQUc7WUFDdkNGLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQUNQLE1BQU0sQ0FBQ1EsWUFBWSxHQUFHSCxPQUFPLEdBQUcsQ0FBQyxJQUFJSCxHQUFHO1lBQ3pELE1BQU1sQixHQUFHLEdBQUdnQixNQUFNLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkN6QixHQUFHLENBQUMwQixLQUFLLENBQUNSLEdBQUcsRUFBRUEsR0FBRyxDQUFDO1lBQ25CbEIsR0FBRyxDQUFDMkIsU0FBUyxDQUFDLENBQUMsRUFBRVgsTUFBTSxDQUFDUSxZQUFZLEdBQUcsQ0FBQyxHQUFHSCxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXJEO1lBQ0EsTUFBTWxCLEtBQUssR0FBR2EsTUFBTSxDQUFDTSxXQUFXLEdBQUdMLGNBQWMsQ0FBQzNDLE1BQU07WUFDeEQsS0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0QyxjQUFjLENBQUMzQyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO2NBQy9DLE1BQU00QixDQUFDLEdBQUdFLEtBQUssR0FBRzlCLENBQUM7Y0FDbkIsSUFBSWtELE1BQU0sR0FBR04sY0FBYyxDQUFDNUMsQ0FBQyxDQUFDLEdBQUcyQyxNQUFNLENBQUNRLFlBQVksR0FBR0gsT0FBTztjQUM5RCxJQUFJRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNmQSxNQUFNLEdBQUcsQ0FBQztlQUNWLE1BQU0sSUFBSUEsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFlBQVksR0FBRyxDQUFDLEVBQUU7Z0JBQzVDRCxNQUFNLEdBQUdQLE1BQU0sQ0FBQ1EsWUFBWSxHQUFHLENBQUM7O2NBRWpDWCxlQUFlLENBQUNiLEdBQUcsRUFBRUMsQ0FBQyxFQUFFc0IsTUFBTSxFQUFFcEIsS0FBSyxFQUFFLENBQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7VUFFckQsQ0FBQztVQUNELE1BQU02RCxVQUFVLEdBQUdsSCxXQUFXLElBQUc7WUFDaEMsTUFBTW1ILE9BQU8sR0FBR25ILFdBQVcsQ0FBQ29ILGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1DLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwQixNQUFNQyxTQUFTLEdBQUd2RCxJQUFJLENBQUNDLEtBQUssQ0FBQ21ELE9BQU8sQ0FBQzdELE1BQU0sR0FBRytELE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTTNDLFlBQVksR0FBRyxFQUFFO1lBQ3ZCLEtBQUssSUFBSXJCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2dFLE9BQU8sRUFBRWhFLENBQUMsRUFBRSxFQUFFO2NBQ2pDLElBQUlrRSxVQUFVLEdBQUdELFNBQVMsR0FBR2pFLENBQUMsQ0FBQyxDQUFDO2NBQ2hDLElBQUltRSxHQUFHLEdBQUcsQ0FBQztjQUNYLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxTQUFTLEVBQUVHLENBQUMsRUFBRSxFQUFFO2dCQUNuQ0QsR0FBRyxHQUFHQSxHQUFHLEdBQUd6RCxJQUFJLENBQUMyRCxHQUFHLENBQUNQLE9BQU8sQ0FBQ0ksVUFBVSxHQUFHRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztjQUVoRC9DLFlBQVksQ0FBQ0wsSUFBSSxDQUFDbUQsR0FBRyxHQUFHRixTQUFTLENBQUMsQ0FBQyxDQUFDOzs7WUFFckMsT0FBTzVDLFlBQVk7VUFDcEIsQ0FBQztVQUVELE1BQU1pRCxTQUFTLEdBQUcsQ0FBQzNILFdBQVcsRUFBRTRILFFBQVEsS0FBSTtZQUMzQyxPQUFPN0IsSUFBSSxDQUFDNkIsUUFBUSxFQUFFbkQsYUFBYSxDQUFDeUMsVUFBVSxDQUFDbEgsV0FBVyxDQUFDLENBQUMsQ0FBQztVQUM5RCxDQUFDO1VBRUssU0FBVXlDLFVBQVU7WUFDekIsTUFBTTtjQUFFOUQ7WUFBTSxDQUFFLEdBQUcscUNBQXdCLEdBQUU7WUFDN0N1QixPQUFPLENBQUNpQixHQUFHLENBQUMsRUFBRSxFQUFFeEMsTUFBTSxDQUFDO1lBQ3ZCLE1BQU1NLEdBQUcsR0FBR1gsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCRCxjQUFLLENBQUNhLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCd0ksU0FBUyxDQUFDaEosTUFBTSxFQUFFTSxHQUFHLENBQUNDLE9BQU8sQ0FBQztZQUMvQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sT0FDQ1osNERBQ0NBO2NBQVFXLEdBQUcsRUFBRUE7WUFBRyxFQUFJLENBQ2xCO1VBRUwiLCJuYW1lcyI6WyJDb21wb25lbnRBdWRpb0NvbnRleHQiLCJleHBvcnRzIiwidXNlQ29tcG9uZW50QXVkaW9Db250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJhdWRpb1JlZiIsIlJlYWN0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwicmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJibG9iIiwiY2xvbmUiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJhcnJheUJ1ZmZlciIsImRlY29kZUF1ZGlvRGF0YSIsImF1ZGlvQnVmZmVyIiwiZSIsImNvbnNvbGUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZmlsZU5hbWUiLCJzcGxpdCIsInBvcCIsIndhcm4iLCJsb2FkIiwibWVzc2FnZSIsInJlYWR5IiwiQXVkaW9QbGF5ZXIiLCJsb2ciLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJQcmVsb2FkIiwiYWN0aW9ucyIsInBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlIiwicmVzdGFydCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlByb2dyZXNzQmFyIiwiVmlzdWFsaXplciIsIlRpbWVyIiwiZGlzYWJsZWQiLCJzZXRWYWx1ZSIsInRpbWVVcGRhdGVMaXN0ZW5lciIsInBlcmNlbnRhZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaGFuZ2UiLCJkZXNpcmVkVGltZSIsImJ1ZmZlcmVkIiwic3RhcnQiLCJlbmQiLCJpIiwibGVuZ3RoIiwidHlwZSIsIm5hbWUiLCJ0aXRsZSIsIm1heCIsInRpbWUiLCJ0aW1lVG9TaG93Iiwic2V0VGltZVRvU2hvdyIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJyb3VuZCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJGcmFnbWVudCIsIk9iamVjdCIsIm5vcm1hbGl6ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJtdWx0aXBsaWVyIiwicG93IiwibWFwIiwibiIsImRyYXdMaW5lU2VnbWVudDEiLCJjdHgiLCJ4IiwieSIsIndpZHRoIiwiaXNFdmVuIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJhcmMiLCJQSSIsInN0cm9rZSIsImRyYXdMaW5lU2VnbWVudCIsImJhcldpZHRoIiwiZHJhdyIsImNhbnZhcyIsIm5vcm1hbGl6ZWREYXRhIiwiZHByIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBhZGRpbmciLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldENvbnRleHQiLCJzY2FsZSIsInRyYW5zbGF0ZSIsInRvdGFsV2lkdGgiLCJzZXBhcmF0aW9uIiwic2VnbWVudFdpZHRoIiwibnVtQmFycyIsImRhdGFJbmRleCIsImRyYXcxIiwiZmlsdGVyRGF0YSIsInJhd0RhdGEiLCJnZXRDaGFubmVsRGF0YSIsInNhbXBsZXMiLCJibG9ja1NpemUiLCJibG9ja1N0YXJ0Iiwic3VtIiwiaiIsImFicyIsInZpc3VhbGl6ZSIsInNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250ZXh0LnRzeCIsInRzL2hvb2tzL3VzZS1hdWRpby50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9wcmVsb2FkLnRzeCIsInRzL3Byb2dyZXNzYmFyLnRzeCIsInRzL3RpbWVyLnRzeCIsInRzL3R5cGVzL0lBdWRpb0ludGVyZmFjZS50cyIsInRzL3Zpc3VhbGl6ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=