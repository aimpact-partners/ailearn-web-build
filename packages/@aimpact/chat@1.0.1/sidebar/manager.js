System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, IActivityBarItem, SidebarManageRegistry, SidebarManager, __beyond_pkg, hmr;
  _export({
    IActivityBarItem: void 0,
    SidebarManageRegistry: void 0,
    SidebarManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/sidebar/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./IActivityBarItem
      **********************************/
      ims.set('./IActivityBarItem', {
        hash: 2774377313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3347213881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarManager = exports.SidebarManageRegistry = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class SidebarManageRegistry extends _model.ReactiveModel {
            #items = new Map();
            get items() {
              return this.#items;
            }
            get total() {
              return this.#items.size;
            }
            #bottomItems = new Map();
            get bottomItems() {
              return this.#bottomItems;
            }
            get topItems() {
              return this.#items;
            }
            register(specs, position = 'top') {
              for (const spec of specs) {
                if (this.#items.has(spec.id)) {
                  throw new Error(`Module "${spec.id}" already registered`);
                }
                if (position === 'bottom') {
                  this.#bottomItems.set(spec.id, spec);
                } else {
                  this.#items.set(spec.id, spec);
                }
              }
            }
            update(id, data, position) {
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
          exports.SidebarManageRegistry = SidebarManageRegistry;
          /*bundle*/
          const SidebarManager = new SidebarManageRegistry();
          exports.SidebarManager = SidebarManager;
          globalThis.n = SidebarManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./IActivityBarItem",
        "from": "IActivityBarItem",
        "name": "IActivityBarItem"
      }, {
        "im": "./index",
        "from": "SidebarManageRegistry",
        "name": "SidebarManageRegistry"
      }, {
        "im": "./index",
        "from": "SidebarManager",
        "name": "SidebarManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IActivityBarItem') && _export("IActivityBarItem", IActivityBarItem = require ? require('./IActivityBarItem').IActivityBarItem : value);
        (require || prop === 'SidebarManageRegistry') && _export("SidebarManageRegistry", SidebarManageRegistry = require ? require('./index').SidebarManageRegistry : value);
        (require || prop === 'SidebarManager') && _export("SidebarManager", SidebarManager = require ? require('./index').SidebarManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUE7WUFDQUM7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUdPO1VBQVUsTUFBT0MscUJBQXNCLFNBQVFDLG9CQUErQjtZQUNwRixNQUFNLEdBQUcsSUFBSUMsR0FBRyxFQUE0QjtZQUU1QyxJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNDLElBQUk7WUFDeEI7WUFFQSxZQUFZLEdBQUcsSUFBSUgsR0FBRyxFQUE0QjtZQUNsRCxJQUFJSSxXQUFXO2NBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6QjtZQUVBLElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUFDLFFBQVEsQ0FBQ0MsS0FBeUIsRUFBRUMsUUFBUSxHQUFHLEtBQUs7Y0FDbkQsS0FBSyxNQUFNQyxJQUFJLElBQUlGLEtBQUssRUFBRTtnQkFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDRyxHQUFHLENBQUNELElBQUksQ0FBQ0UsRUFBRSxDQUFDLEVBQUU7a0JBQzdCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFdBQVdILElBQUksQ0FBQ0UsRUFBRSxzQkFBc0IsQ0FBQzs7Z0JBRTFELElBQUlILFFBQVEsS0FBSyxRQUFRLEVBQUU7a0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUNLLEdBQUcsQ0FBQ0osSUFBSSxDQUFDRSxFQUFFLEVBQUVGLElBQUksQ0FBQztpQkFDcEMsTUFBTTtrQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDSSxHQUFHLENBQUNKLElBQUksQ0FBQ0UsRUFBRSxFQUFFRixJQUFJLENBQUM7OztZQUdqQztZQUVBSyxNQUFNLENBQUNILEVBQUUsRUFBRUksSUFBSSxFQUFFUCxRQUFRO2NBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDQyxFQUFFLENBQUMsRUFBRTtnQkFDeEJJLElBQUksR0FBRztrQkFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUNDLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDO2tCQUFFLEdBQUdJO2dCQUFJLENBQUU7O2NBRTNDLElBQUksQ0FBQyxNQUFNLENBQUNGLEdBQUcsQ0FBQ0YsRUFBRSxFQUFFSSxJQUFJLENBQUM7Y0FFekIsSUFBSSxDQUFDRSxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCOztVQUNBQztVQUVNO1VBQVcsTUFBTUMsY0FBYyxHQUFHLElBQUlyQixxQkFBcUIsRUFBRTtVQUFDb0I7VUFDckVFLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHRixjQUFjIiwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiTWFwIiwiaXRlbXMiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwicmVnaXN0ZXIiLCJzcGVjcyIsInBvc2l0aW9uIiwic3BlYyIsImhhcyIsImlkIiwiRXJyb3IiLCJzZXQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsImV4cG9ydHMiLCJTaWRlYmFyTWFuYWdlciIsImdsb2JhbFRoaXMiLCJuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJJQWN0aXZpdHlCYXJJdGVtLnRzIiwiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==