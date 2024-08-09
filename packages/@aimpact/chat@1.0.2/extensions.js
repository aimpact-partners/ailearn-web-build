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
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.3-test.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/extensions"
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
        hash: 426076955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.extensions = void 0;
          /*bundle*/
          const extensions = exports.extensions = new class extends Map {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHRlbnNpb25zIiwiZXhwb3J0cyIsIk1hcCIsImxvYWQiLCJpdGVtcyIsIm1ldGFkYXRhIiwicHJvbWlzZXMiLCJtYXAiLCJpdGVtIiwicmVzb2x2ZSIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwiYWxsIiwiZmlsdGVyIiwiZXh0ZW5zaW9uUG9pbnQiLCJwYXJhbXMiLCJoYXMiLCJjYWxsYmFjayIsImdldCIsInJlZ2lzdGVyIiwiZm5jIiwiRXJyb3IiLCJzZXQiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU87VUFBVyxNQUFNQSxVQUFVLEdBQUFDLE9BQUEsQ0FBQUQsVUFBQSxHQUFHLElBQUssY0FBY0UsR0FBMEM7WUFDakcsTUFBTUMsSUFBSUEsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFTO2NBQzFCLE1BQU1DLFFBQVEsR0FBa0JGLEtBQUssQ0FBQ0csR0FBRyxDQUFDQyxJQUFJLElBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNELElBQUksRUFBRUgsUUFBUSxDQUFDLENBQUM7Y0FDL0UsSUFBSUssVUFBVSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUM7Y0FFNUNJLFVBQVUsR0FBR0EsVUFBVSxDQUFDRyxNQUFNLENBQUNMLElBQUksSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQztjQUU5QyxPQUFPRSxVQUFVO1lBQ2xCO1lBQ0EsTUFBTUQsT0FBT0EsQ0FBQ0ssY0FBc0IsRUFBRSxHQUFHQyxNQUFXO2NBQ25ELElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLEVBQUU7Y0FDL0IsTUFBTUcsUUFBUSxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixjQUFjLENBQUM7Y0FFekMsT0FBTyxNQUFNRyxRQUFRLENBQUMsR0FBR0YsTUFBTSxDQUFDO1lBQ2pDO1lBRUFJLFFBQVFBLENBQUNMLGNBQXNCLEVBQUVNLEdBQWtDO2NBQ2xFLElBQUksSUFBSSxDQUFDSixHQUFHLENBQUNGLGNBQWMsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLElBQUlPLEtBQUssQ0FBQyxvQkFBb0JQLGNBQWMsc0JBQXNCLENBQUM7O2NBRTFFLElBQUksT0FBT00sR0FBRyxLQUFLLFVBQVUsRUFBRTtnQkFDOUIsTUFBTSxJQUFJQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBR3RDLElBQUksQ0FBQ0MsR0FBRyxDQUFDUixjQUFjLEVBQUVNLEdBQUcsQ0FBQztZQUM5QjtXQUNBLENBQUMsQ0FBRSIsImlnbm9yZUxpc3QiOltdfQ==