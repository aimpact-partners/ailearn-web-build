System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_aimpactMediaManager100Uploader) {
      dependency_2 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.0.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader-code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/media-manager/uploader', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1514890813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _uploader = require("@aimpact/media-manager/uploader");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdXBsb2FkZXIiLCJ1c2VVcGxvYWRlciIsInVybCIsIm5hbWUiLCJtdWx0aXBsZSIsInVwbG9hZGVyIiwic2V0VXBsb2FkZXIiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0b3RhbCIsInNldFRvdGFsRmlsZXMiLCJkcmFnIiwidXNlUmVmIiwiYnV0dG9uIiwiY2xlYXJGaWxlcyIsImNsZWFuIiwidXNlRWZmZWN0IiwiVXBsb2FkZXIiLCJjcmVhdGUiLCJjdXJyZW50Iiwib25DaGFuZ2UiLCJmaWxlcyIsIml0ZW1zIiwic2l6ZSIsIm9uIiwib2ZmIiwidXBsb2FkRmlsZXMiLCJwdWJsaXNoIiwiZGVsZXRlRmlsZSIsImRlbGV0ZSIsInRvdGFsRmlsZXMiLCJfY29udHJvbCIsIlVwbG9hZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVcGxvYWRlclByb3ZpZGVyIiwic3BlY3MiLCJjaGlsZHJlbiIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udHJvbC50cyIsIi9jb2RlL3RzL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLFdBQVdBLENBQUM7WUFBRUMsR0FBRztZQUFFQyxJQUFJLEdBQUcsTUFBTTtZQUFFQyxRQUFRLEdBQUc7VUFBSyxDQUFFO1lBQzlFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLEVBQUU7WUFDaEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHWCxLQUFLLENBQUNTLFFBQVEsRUFBRTtZ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