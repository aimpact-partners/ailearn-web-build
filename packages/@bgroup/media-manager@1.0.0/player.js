System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "@bgroup/media-manager@1.0.0/player"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/media-manager@1.0.0/player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3146932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /*bundle*/
          function AudioPlayer({
            src
          }) {
            const canPlayType = new Audio().canPlayType(src.type);
            const [data, setData] = React.useState({
              uri: undefined,
              type: undefined
            });
            const ref = React.useRef(null);
            const updateState = async () => {
              const audioElement = ref.current;
              try {
                audioElement.load(); // Load the audio file
                audioElement.play(); // Play the audio
              } catch (e) {}
            };
            React.useEffect(() => {
              let reader = new FileReader();
              reader.onload = e => {
                let base64URL = e.target.result;
                let BlobType = src.type.includes(';') ? src.type.substr(0, src.type.indexOf(';')) : src.type;
                setData({
                  uri: base64URL,
                  type: BlobType
                });
                setTimeout(() => {
                  updateState();
                }, 1000);
              };
              reader.readAsDataURL(src);
            }, []);
            const {
              uri,
              type
            } = data;
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata",
              ref: ref
            }, React.createElement("source", {
              src: uri,
              type: type
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./control').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVSxTQUFVQSxXQUFXLENBQUM7WUFBQ0M7VUFBRyxDQUFDO1lBQzNDLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxLQUFLLEVBQUUsQ0FBQ0QsV0FBVyxDQUFDRCxHQUFHLENBQUNHLElBQUksQ0FBQztZQUVyRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQUNDLEdBQUcsRUFBRUMsU0FBUztjQUFFTixJQUFJLEVBQUVNO1lBQVMsQ0FBQyxDQUFDO1lBRXpFLE1BQU1DLEdBQUcsR0FBR0osS0FBSyxDQUFDSyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1DLFdBQVcsR0FBRyxZQUFXO2NBQzlCLE1BQU1DLFlBQVksR0FBR0gsR0FBRyxDQUFDSSxPQUFPO2NBQ2hDLElBQUk7Z0JBQ0hELFlBQVksQ0FBQ0UsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckJGLFlBQVksQ0FBQ0csSUFBSSxFQUFFLENBQUMsQ0FBQztlQUNyQixDQUFDLE9BQU9DLENBQUMsRUFBRTtZQUNiLENBQUM7WUFFRFgsS0FBSyxDQUFDWSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2NBQzdCRCxNQUFNLENBQUNFLE1BQU0sR0FBR0osQ0FBQyxJQUFHO2dCQUNuQixJQUFJSyxTQUFTLEdBQUdMLENBQUMsQ0FBQ00sTUFBTSxDQUFDQyxNQUFNO2dCQUMvQixJQUFJQyxRQUFRLEdBQUd6QixHQUFHLENBQUNHLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRzFCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDd0IsTUFBTSxDQUFDLENBQUMsRUFBRTNCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc1QixHQUFHLENBQUNHLElBQUk7Z0JBQzVGRSxPQUFPLENBQUM7a0JBQUNHLEdBQUcsRUFBRWMsU0FBUztrQkFBRW5CLElBQUksRUFBRXNCO2dCQUFRLENBQUMsQ0FBQztnQkFDekNJLFVBQVUsQ0FBQyxNQUFLO2tCQUNmakIsV0FBVyxFQUFFO2dCQUNkLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVCxDQUFDO2NBRURPLE1BQU0sQ0FBQ1csYUFBYSxDQUFDOUIsR0FBRyxDQUFDO1lBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNO2NBQUNRLEdBQUc7Y0FBRUw7WUFBSSxDQUFDLEdBQUdDLElBQUk7WUFFeEIsT0FDQ0U7Y0FBS3lCLFNBQVMsRUFBQztZQUFjLEdBQzVCekI7Y0FBTzBCLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDLFVBQVU7Y0FBQ3ZCLEdBQUcsRUFBRUE7WUFBRyxHQUMxQ0o7Y0FBUU4sR0FBRyxFQUFFUSxHQUFHO2NBQUVMLElBQUksRUFBRUE7WUFBSSxFQUFJLHFEQUV6QixDQUNIO1VBRVIiLCJuYW1lcyI6WyJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJSZWFjdCIsInVzZVN0YXRlIiwidXJpIiwidW5kZWZpbmVkIiwicmVmIiwidXNlUmVmIiwidXBkYXRlU3RhdGUiLCJhdWRpb0VsZW1lbnQiLCJjdXJyZW50IiwibG9hZCIsInBsYXkiLCJlIiwidXNlRWZmZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImJhc2U2NFVSTCIsInRhcmdldCIsInJlc3VsdCIsIkJsb2JUeXBlIiwiaW5jbHVkZXMiLCJzdWJzdHIiLCJpbmRleE9mIiwic2V0VGltZW91dCIsInJlYWRBc0RhdGFVUkwiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=