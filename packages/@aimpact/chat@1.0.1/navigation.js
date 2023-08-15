System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, IModule, MenuManager, AppNavigation, __beyond_pkg, hmr;
  _export({
    IModule: void 0,
    MenuManager: void 0,
    AppNavigation: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Model) {
      dependency_1 = _beyondJsReactive112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/navigation"
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
        hash: 4113960174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuManager = exports.AppNavigation = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class MenuManager extends _model.ReactiveModel {
            #items = new Map();
            get items() {
              return this.#items;
            }
            get total() {
              return this.#items.size;
            }
            #modules = this;
            get modules() {
              return this.#modules;
            }
            register(specs) {
              for (const spec of specs) {
                if (this.#items.has(spec.id)) {
                  throw new Error(`Module "${spec.id}" already registered`);
                }
                this.#items.set(spec.id, spec);
              }
            }
            update(id, data) {
              if (this.#items.has(id)) {
                data = {
                  ...this.#items.get(id),
                  ...data
                };
              }
              this.#items.set(id, data);
              this.trigger('update.item');
            }
          }
          exports.MenuManager = MenuManager;
          /*bundle*/
          const AppNavigation = new MenuManager();
          exports.AppNavigation = AppNavigation;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IModule",
        "name": "IModule"
      }, {
        "im": "./index",
        "from": "MenuManager",
        "name": "MenuManager"
      }, {
        "im": "./index",
        "from": "AppNavigation",
        "name": "AppNavigation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IModule') && _export("IModule", IModule = require ? require('./index').IModule : value);
        (require || prop === 'MenuManager') && _export("MenuManager", MenuManager = require ? require('./index').MenuManager : value);
        (require || prop === 'AppNavigation') && _export("AppNavigation", AppNavigation = require ? require('./index').AppNavigation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQVFPO1VBQVUsTUFBT0EsV0FBWSxTQUFRQyxvQkFBc0I7WUFDakUsTUFBTSxHQUFHLElBQUlDLEdBQUcsRUFBbUI7WUFFbkMsSUFBSUMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJO1lBQ3hCO1lBRUEsUUFBUSxHQUFHLElBQUk7WUFDZixJQUFJQyxPQUFPO2NBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNyQjtZQUVBQyxRQUFRLENBQUNDLEtBQWdCO2NBQ3hCLEtBQUssTUFBTUMsSUFBSSxJQUFJRCxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEVBQUUsQ0FBQyxFQUFFO2tCQUM3QixNQUFNLElBQUlDLEtBQUssQ0FBQyxXQUFXSCxJQUFJLENBQUNFLEVBQUUsc0JBQXNCLENBQUM7O2dCQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDRSxHQUFHLENBQUNKLElBQUksQ0FBQ0UsRUFBRSxFQUFFRixJQUFJLENBQUM7O1lBRWhDO1lBRUFLLE1BQU0sQ0FBQ0gsRUFBRSxFQUFFSSxJQUFJO2NBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDTCxHQUFHLENBQUNDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QkksSUFBSSxHQUFHO2tCQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDTCxFQUFFLENBQUM7a0JBQUUsR0FBR0k7Z0JBQUksQ0FBRTs7Y0FFM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDRixFQUFFLEVBQUVJLElBQUksQ0FBQztjQUV6QixJQUFJLENBQUNFLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUI7O1VBQ0FDO1VBRU07VUFBVyxNQUFNQyxhQUFhLEdBQUcsSUFBSW5CLFdBQVcsRUFBRTtVQUFDa0IiLCJuYW1lcyI6WyJNZW51TWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJNYXAiLCJpdGVtcyIsInRvdGFsIiwic2l6ZSIsIm1vZHVsZXMiLCJyZWdpc3RlciIsInNwZWNzIiwic3BlYyIsImhhcyIsImlkIiwiRXJyb3IiLCJzZXQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsImV4cG9ydHMiLCJBcHBOYXZpZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==