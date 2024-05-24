System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, UIManager, __beyond_pkg, hmr;
  _export("UIManager", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.40"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/ui/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3734448739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UIManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            #modalOpened = false;
            get modalOpened() {
              return this.#modalOpened;
            }
            set modalOpened(value) {
              if (value === this.#modalOpened) return;
              this.#modalOpened = value;
              this.triggerEvent('modalOpened');
            }
          }
          /*bundle */
          const UIManager = exports.UIManager = new Manager();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "UIManager",
        "name": "UIManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'UIManager') && _export("UIManager", UIManager = require ? require('./index').UIManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RhbE9wZW5lZCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiVUlNYW5hZ2VyIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLE1BQU1DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUMzQyxDQUFBQyxXQUFZLEdBQVksS0FBSztZQUM3QixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUNBLElBQUlBLFdBQVdBLENBQUNDLEtBQUs7Y0FDcEIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBRCxXQUFZLEVBQUU7Y0FFakMsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBR0MsS0FBSztjQUN6QixJQUFJLENBQUNDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDakM7O1VBR007VUFBWSxNQUFNQyxTQUFTLEdBQUFDLE9BQUEsQ0FBQUQsU0FBQSxHQUFHLElBQUlMLE9BQU8sRUFBRSJ9