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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 426076955,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHRlbnNpb25zIiwiTWFwIiwibG9hZCIsIml0ZW1zIiwibWV0YWRhdGEiLCJwcm9taXNlcyIsIm1hcCIsIml0ZW0iLCJyZXNvbHZlIiwiY29tcG9uZW50cyIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJleHRlbnNpb25Qb2ludCIsInBhcmFtcyIsImhhcyIsImNhbGxiYWNrIiwiZ2V0IiwicmVnaXN0ZXIiLCJmbmMiLCJFcnJvciIsInNldCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU87VUFBVyxNQUFNQSxVQUFVLEdBQUcsSUFBSyxjQUFjQyxHQUEwQztZQUNqRyxNQUFNQyxJQUFJQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVM7Y0FDMUIsTUFBTUMsUUFBUSxHQUFrQkYsS0FBSyxDQUFDRyxHQUFHLENBQUNDLElBQUksSUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsSUFBSSxFQUFFSCxRQUFRLENBQUMsQ0FBQztjQUMvRSxJQUFJSyxVQUFVLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFFBQVEsQ0FBQztjQUU1Q0ksVUFBVSxHQUFHQSxVQUFVLENBQUNHLE1BQU0sQ0FBQ0wsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDO2NBRTlDLE9BQU9FLFVBQVU7WUFDbEI7WUFDQSxNQUFNRCxPQUFPQSxDQUFDSyxjQUFzQixFQUFFLEdBQUdDLE1BQVc7Y0FDbkQsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixjQUFjLENBQUMsRUFBRTtjQUMvQixNQUFNRyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNKLGNBQWMsQ0FBQztjQUV6QyxPQUFPLE1BQU1HLFFBQVEsQ0FBQyxHQUFHRixNQUFNLENBQUM7WUFDakM7WUFFQUksUUFBUUEsQ0FBQ0wsY0FBc0IsRUFBRU0sR0FBa0M7Y0FDbEUsSUFBSSxJQUFJLENBQUNKLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSU8sS0FBSyxDQUFDLG9CQUFvQlAsY0FBYyxzQkFBc0IsQ0FBQzs7Y0FFMUUsSUFBSSxPQUFPTSxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM5QixNQUFNLElBQUlDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsSUFBSSxDQUFDQyxHQUFHLENBQUNSLGNBQWMsRUFBRU0sR0FBRyxDQUFDO1lBQzlCO1dBQ0EsQ0FBQyxDQUFFO1VBQUNHLE9BQUEsQ0FBQXRCLFVBQUEsR0FBQUEsVUFBQSJ9