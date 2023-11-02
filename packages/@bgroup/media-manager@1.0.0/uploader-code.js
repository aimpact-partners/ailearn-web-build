System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@bgroup/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useUploader, UploaderProvider, __beyond_pkg, hmr;
  _export({
    useUploader: void 0,
    UploaderProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_2 = _bgroupMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/media-manager@1.0.0/uploader-code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/media-manager/uploader', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1886608012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _uploader = require("@bgroup/media-manager/uploader");
          /*bundle*/
          function useUploader({
            url,
            name = 'file',
            multiple = false
          }) {
            const [uploader, setUploader] = React.useState();
            const [fetching, setFetching] = React.useState();
            const [total, setTotalFiles] = React.useState(0);
            const drag = React.useRef(null);
            const button = React.useRef(null);
            const clearFiles = () => {
              uploader?.clean();
              setTotalFiles(0);
            };
            React.useEffect(() => {
              const uploader = new _uploader.Uploader({
                url,
                name,
                multiple
              });
              uploader.create(button.current, drag.current);
              const onChange = () => {
                setTotalFiles(uploader.files.items?.size ?? 0);
                if (uploader.fetching !== fetching) setFetching(uploader.fetching);
              };
              uploader.on('change', onChange);
              setUploader(uploader);
              return () => uploader.off('change', onChange);
            }, [url]);
            const uploadFiles = uploader?.publish;
            const deleteFile = uploader?.delete;
            return {
              uploadFiles,
              clearFiles,
              deleteFile,
              files: uploader?.files.items,
              fetching,
              button,
              drag,
              totalFiles: total
            };
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 891411025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderProvider = UploaderProvider;
          var React = require("react");
          var _control = require("./control");
          const UploaderContext = React.createContext({});
          /*bundle*/
          function UploaderProvider({
            specs,
            children
          }) {
            const {
              uploadFiles,
              clearFiles,
              files,
              button,
              drag,
              deleteFile
            } = (0, _control.useUploader)(specs);
            const value = {
              deleteFile,
              clearFiles,
              files,
              uploadFiles,
              button,
              drag
            };
            return React.createElement(UploaderContext.Provider, {
              value: value
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./provider",
        "from": "UploaderProvider",
        "name": "UploaderProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./control').useUploader : value);
        (require || prop === 'UploaderProvider') && _export("UploaderProvider", UploaderProvider = require ? require('./provider').UploaderProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdXBsb2FkZXIiLCJ1c2VVcGxvYWRlciIsInVybCIsIm5hbWUiLCJtdWx0aXBsZSIsInVwbG9hZGVyIiwic2V0VXBsb2FkZXIiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0b3RhbCIsInNldFRvdGFsRmlsZXMiLCJkcmFnIiwidXNlUmVmIiwiYnV0dG9uIiwiY2xlYXJGaWxlcyIsImNsZWFuIiwidXNlRWZmZWN0IiwiVXBsb2FkZXIiLCJjcmVhdGUiLCJjdXJyZW50Iiwib25DaGFuZ2UiLCJmaWxlcyIsIml0ZW1zIiwic2l6ZSIsIm9uIiwib2ZmIiwidXBsb2FkRmlsZXMiLCJwdWJsaXNoIiwiZGVsZXRlRmlsZSIsImRlbGV0ZSIsInRvdGFsRmlsZXMiLCJfY29udHJvbCIsIlVwbG9hZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVcGxvYWRlclByb3ZpZGVyIiwic3BlY3MiLCJjaGlsZHJlbiIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2wudHMiLCIvdHMvcHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFDQyxHQUFHO1lBQUVDLElBQUksR0FBRyxNQUFNO1lBQUVDLFFBQVEsR0FBRztVQUFLLENBQUM7WUFDNUUsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsRUFBRTtZQUNoRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdYLEtBQUssQ0FBQ1MsUUFBUSxFQUFFO1lBQ2hELE1BQU0sQ0FBQ0csS0FBSyxFQUFFQyxhQUFhLENBQUMsR0FBR2IsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRWhELE1BQU1LLElBQUksR0FBR2QsS0FBSyxDQUFDZSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQy9CLE1BQU1DLE1BQU0sR0FBR2hCLEtBQUssQ0FBQ2UsTUFBTSxDQUFDLElBQUksQ0FBQztZQUVqQyxNQUFNRSxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QlYsUUFBUSxFQUFFVyxLQUFLLEVBQUU7Y0FDakJMLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQztZQUVEYixLQUFLLENBQUNtQixTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNWixRQUFRLEdBQUcsSUFBSUwsU0FBQSxDQUFBa0IsUUFBUSxDQUFDO2dCQUM3QmhCLEdBQUc7Z0JBQ0hDLElBQUk7Z0JBQ0pDO2VBQ0EsQ0FBQztjQUVGQyxRQUFRLENBQUNjLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDTSxPQUFPLEVBQUVSLElBQUksQ0FBQ1EsT0FBTyxDQUFDO2NBQzdDLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQlYsYUFBYSxDQUFDTixRQUFRLENBQUNpQixLQUFLLENBQUNDLEtBQUssRUFBRUMsSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDOUMsSUFBSW5CLFFBQVEsQ0FBQ0csUUFBUSxLQUFLQSxRQUFRLEVBQUVDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDRyxRQUFRLENBQUM7Y0FDbkUsQ0FBQztjQUNESCxRQUFRLENBQUNvQixFQUFFLENBQUMsUUFBUSxFQUFFSixRQUFRLENBQUM7Y0FDL0JmLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDO2NBRXJCLE9BQU8sTUFBTUEsUUFBUSxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDO1lBQzlDLENBQUMsRUFBRSxDQUFDbkIsR0FBRyxDQUFDLENBQUM7WUFFVCxNQUFNeUIsV0FBVyxHQUFHdEIsUUFBUSxFQUFFdUIsT0FBTztZQUNyQyxNQUFNQyxVQUFVLEdBQUd4QixRQUFRLEVBQUV5QixNQUFNO1lBRW5DLE9BQU87Y0FDTkgsV0FBVztjQUNYWixVQUFVO2NBQ1ZjLFVBQVU7Y0FDVlAsS0FBSyxFQUFFakIsUUFBUSxFQUFFaUIsS0FBSyxDQUFDQyxLQUFLO2NBQzVCZixRQUFRO2NBQ1JNLE1BQU07Y0FDTkYsSUFBSTtjQUNKbUIsVUFBVSxFQUFFckI7YUFDWjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBWixLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaUMsUUFBQSxHQUFBakMsT0FBQTtVQVVBLE1BQU1rQyxlQUFlLEdBQUduQyxLQUFLLENBQUNvQyxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUUxRDtVQUFVLFNBQVVDLGdCQUFnQkEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQVEsQ0FBRTtZQUM5RCxNQUFNO2NBQUVWLFdBQVc7Y0FBRVosVUFBVTtjQUFFTyxLQUFLO2NBQUVSLE1BQU07Y0FBRUYsSUFBSTtjQUFFaUI7WUFBVSxDQUFFLEdBQUcsSUFBQUcsUUFBQSxDQUFBL0IsV0FBVyxFQUFDbUMsS0FBSyxDQUFDO1lBRXZGLE1BQU1FLEtBQUssR0FBRztjQUFFVCxVQUFVO2NBQUVkLFVBQVU7Y0FBRU8sS0FBSztjQUFFSyxXQUFXO2NBQUViLE1BQU07Y0FBRUY7WUFBSSxDQUFFO1lBRTFFLE9BQU9kLEtBQUEsQ0FBQXlDLGFBQUEsQ0FBQ04sZUFBZSxDQUFDTyxRQUFRO2NBQUNGLEtBQUssRUFBRUE7WUFBSyxHQUFHRCxRQUFRLENBQTRCO1VBQ3JGIn0=