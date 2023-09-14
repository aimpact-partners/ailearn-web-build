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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", null], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/extensions"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3544930332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.extensions = void 0;
          /*bundle*/
          const extensions = new class extends Map {
            async load(items, metadata) {
              const promises = items.map(item => this.resolve(item, metadata));
              let components = await Promise.all(promises);
              components = components.filter(item => !!item);
              return components;
            }
            async resolve(extensionPoint, ...params) {
              if (!this.has(extensionPoint)) return;
              const callback = this.get(extensionPoint);
              return await callback(...params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTztVQUFXLE1BQU1BLFVBQVUsR0FBRyxJQUFLLGNBQWNDLEdBQTBDO1lBQ2pHLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRO2NBQ3pCLE1BQU1DLFFBQVEsR0FBa0JGLEtBQUssQ0FBQ0csR0FBRyxDQUFDQyxJQUFJLElBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNELElBQUksRUFBRUgsUUFBUSxDQUFDLENBQUM7Y0FDL0UsSUFBSUssVUFBVSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUM7Y0FFNUNJLFVBQVUsR0FBR0EsVUFBVSxDQUFDRyxNQUFNLENBQUNMLElBQUksSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQztjQUU5QyxPQUFPRSxVQUFVO1lBQ2xCO1lBQ0EsTUFBTUQsT0FBTyxDQUFDSyxjQUFzQixFQUFFLEdBQUdDLE1BQVc7Y0FDbkQsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixjQUFjLENBQUMsRUFBRTtjQUMvQixNQUFNRyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNKLGNBQWMsQ0FBQztjQUV6QyxPQUFPLE1BQU1HLFFBQVEsQ0FBQyxHQUFHRixNQUFNLENBQUM7WUFDakM7WUFFQUksUUFBUSxDQUFDTCxjQUFzQixFQUFFTSxHQUFrQztjQUNsRSxJQUFJLElBQUksQ0FBQ0osR0FBRyxDQUFDRixjQUFjLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxJQUFJTyxLQUFLLENBQUMsb0JBQW9CUCxjQUFjLHNCQUFzQixDQUFDOztjQUUxRSxJQUFJLE9BQU9NLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztjQUd0QyxJQUFJLENBQUNDLEdBQUcsQ0FBQ1IsY0FBYyxFQUFFTSxHQUFHLENBQUM7WUFDOUI7V0FDQSxFQUFHO1VBQUNHIiwibmFtZXMiOlsiZXh0ZW5zaW9ucyIsIk1hcCIsImxvYWQiLCJpdGVtcyIsIm1ldGFkYXRhIiwicHJvbWlzZXMiLCJtYXAiLCJpdGVtIiwicmVzb2x2ZSIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwiYWxsIiwiZmlsdGVyIiwiZXh0ZW5zaW9uUG9pbnQiLCJwYXJhbXMiLCJoYXMiLCJjYWxsYmFjayIsImdldCIsInJlZ2lzdGVyIiwiZm5jIiwiRXJyb3IiLCJzZXQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==