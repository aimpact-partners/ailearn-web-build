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
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVyaSIsInVuZGVmaW5lZCIsInJlZiIsInVzZVJlZiIsInVwZGF0ZVN0YXRlIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsImxvYWQiLCJwbGF5IiwiZSIsInVzZUVmZmVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJiYXNlNjRVUkwiLCJ0YXJnZXQiLCJyZXN1bHQiLCJCbG9iVHlwZSIsImluY2x1ZGVzIiwic3Vic3RyIiwiaW5kZXhPZiIsInNldFRpbWVvdXQiLCJyZWFkQXNEYXRhVVJMIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRyb2xzIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVQyxXQUFXQSxDQUFDO1lBQUNDO1VBQUcsQ0FBQztZQUMzQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSyxFQUFFLENBQUNELFdBQVcsQ0FBQ0QsR0FBRyxDQUFDRyxJQUFJLENBQUM7WUFFckQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQztjQUFDQyxHQUFHLEVBQUVDLFNBQVM7Y0FBRUwsSUFBSSxFQUFFSztZQUFTLENBQUMsQ0FBQztZQUV6RSxNQUFNQyxHQUFHLEdBQUdaLEtBQUssQ0FBQ2EsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QixNQUFNQyxXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzlCLE1BQU1DLFlBQVksR0FBR0gsR0FBRyxDQUFDSSxPQUFPO2NBQ2hDLElBQUk7Z0JBQ0hELFlBQVksQ0FBQ0UsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckJGLFlBQVksQ0FBQ0csSUFBSSxFQUFFLENBQUMsQ0FBQztlQUNyQixDQUFDLE9BQU9DLENBQUMsRUFBRTtZQUNiLENBQUM7WUFFRG5CLEtBQUssQ0FBQ29CLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7Y0FDN0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHSixDQUFDLElBQUc7Z0JBQ25CLElBQUlLLFNBQVMsR0FBR0wsQ0FBQyxDQUFDTSxNQUFNLENBQUNDLE1BQU07Z0JBQy9CLElBQUlDLFFBQVEsR0FBR3hCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDc0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHekIsR0FBRyxDQUFDRyxJQUFJLENBQUN1QixNQUFNLENBQUMsQ0FBQyxFQUFFMUIsR0FBRyxDQUFDRyxJQUFJLENBQUN3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzNCLEdBQUcsQ0FBQ0csSUFBSTtnQkFDNUZFLE9BQU8sQ0FBQztrQkFBQ0UsR0FBRyxFQUFFYyxTQUFTO2tCQUFFbEIsSUFBSSxFQUFFcUI7Z0JBQVEsQ0FBQyxDQUFDO2dCQUN6Q0ksVUFBVSxDQUFDLE1BQUs7a0JBQ2ZqQixXQUFXLEVBQUU7Z0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNULENBQUM7Y0FFRE8sTUFBTSxDQUFDVyxhQUFhLENBQUM3QixHQUFHLENBQUM7WUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE1BQU07Y0FBQ08sR0FBRztjQUFFSjtZQUFJLENBQUMsR0FBR0MsSUFBSTtZQUV4QixPQUNDUCxLQUFBLENBQUFpQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCbEMsS0FBQSxDQUFBaUMsYUFBQTtjQUFPRSxRQUFRO2NBQUNDLE9BQU8sRUFBQyxVQUFVO2NBQUN4QixHQUFHLEVBQUVBO1lBQUcsR0FDMUNaLEtBQUEsQ0FBQWlDLGFBQUE7Y0FBUTlCLEdBQUcsRUFBRU8sR0FBRztjQUFFSixJQUFJLEVBQUVBO1lBQUksRUFBSSxFLG1EQUV6QixDQUNIO1VBRVIifQ==