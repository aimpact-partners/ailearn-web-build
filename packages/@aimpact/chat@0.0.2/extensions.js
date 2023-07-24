System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, extensions, __beyond_pkg, hmr;
  _export("extensions", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/extensions"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3786059290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.extensions = void 0;
          /*bundle*/
          const extensions = new class extends Map {
            async resolve(extensionPoint, ...params) {
              if (!this.has(extensionPoint)) return;
              const fnc = this.get(extensionPoint);
              return await fnc(...params);
            }
            register(extensionPoint, fnc) {
              if (this.has(extensionPoint)) {
                throw new Error(`Extension point "${extensionPoint}" already registered`);
              }
              if (typeof fnc !== 'function') {
                throw new Error('Invalid parameters');
              }
              this.set(extensionPoint, fnc);
            }
          }();
          exports.extensions = extensions;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "extensions",
        "name": "extensions"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'extensions') && _export("extensions", extensions = require ? require('./index').extensions : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTztVQUFXLE1BQU1BLFVBQVUsR0FBRyxJQUFLLGNBQWNDLEdBQTBDO1lBQ2pHLE1BQU1DLE9BQU8sQ0FBQ0MsY0FBc0IsRUFBRSxHQUFHQyxNQUFXO2NBQ25ELElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLEVBQUU7Y0FDL0IsTUFBTUcsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixjQUFjLENBQUM7Y0FFcEMsT0FBTyxNQUFNRyxHQUFHLENBQUMsR0FBR0YsTUFBTSxDQUFDO1lBQzVCO1lBRUFJLFFBQVEsQ0FBQ0wsY0FBc0IsRUFBRUcsR0FBa0M7Y0FDbEUsSUFBSSxJQUFJLENBQUNELEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSU0sS0FBSyxDQUFDLG9CQUFvQk4sY0FBYyxzQkFBc0IsQ0FBQzs7Y0FFMUUsSUFBSSxPQUFPRyxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM5QixNQUFNLElBQUlHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsSUFBSSxDQUFDQyxHQUFHLENBQUNQLGNBQWMsRUFBRUcsR0FBRyxDQUFDO1lBQzlCO1dBQ0EsRUFBRztVQUFDSyIsIm5hbWVzIjpbImV4dGVuc2lvbnMiLCJNYXAiLCJyZXNvbHZlIiwiZXh0ZW5zaW9uUG9pbnQiLCJwYXJhbXMiLCJoYXMiLCJmbmMiLCJnZXQiLCJyZWdpc3RlciIsIkVycm9yIiwic2V0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==