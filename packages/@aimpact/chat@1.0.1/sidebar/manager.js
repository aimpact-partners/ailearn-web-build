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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
          const SidebarManager = exports.SidebarManager = new SidebarManageRegistry();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwicmVnaXN0ZXIiLCJzcGVjcyIsInBvc2l0aW9uIiwic3BlYyIsImhhcyIsImlkIiwiRXJyb3IiLCJzZXQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsIlNpZGViYXJNYW5hZ2VyIiwiZ2xvYmFsVGhpcyIsIm4iXSwic291cmNlcyI6WyIvSUFjdGl2aXR5QmFySXRlbS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPQyxxQkFBc0IsU0FBUUYsTUFBQSxDQUFBRyxhQUErQjtZQUNwRixDQUFBQyxLQUFNLEdBQUcsSUFBSUMsR0FBRyxFQUE0QjtZQUU1QyxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNHLElBQUk7WUFDeEI7WUFFQSxDQUFBQyxXQUFZLEdBQUcsSUFBSUgsR0FBRyxFQUE0QjtZQUNsRCxJQUFJRyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUFNLFFBQVFBLENBQUNDLEtBQXlCLEVBQUVDLFFBQVEsR0FBRyxLQUFLO2NBQ25ELEtBQUssTUFBTUMsSUFBSSxJQUFJRixLQUFLLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1UsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEVBQUUsQ0FBQyxFQUFFO2tCQUM3QixNQUFNLElBQUlDLEtBQUssQ0FBQyxXQUFXSCxJQUFJLENBQUNFLEVBQUUsc0JBQXNCLENBQUM7O2dCQUUxRCxJQUFJSCxRQUFRLEtBQUssUUFBUSxFQUFFO2tCQUMxQixJQUFJLENBQUMsQ0FBQUosV0FBWSxDQUFDUyxHQUFHLENBQUNKLElBQUksQ0FBQ0UsRUFBRSxFQUFFRixJQUFJLENBQUM7aUJBQ3BDLE1BQU07a0JBQ04sSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ2EsR0FBRyxDQUFDSixJQUFJLENBQUNFLEVBQUUsRUFBRUYsSUFBSSxDQUFDOzs7WUFHakM7WUFFQUssTUFBTUEsQ0FBQ0gsRUFBRSxFQUFFSSxJQUFJLEVBQUVQLFFBQVE7Y0FDeEIsSUFBSSxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDVSxHQUFHLENBQUNDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QkksSUFBSSxHQUFHO2tCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFmLEtBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDO2tCQUFFLEdBQUdJO2dCQUFJLENBQUU7O2NBRTNDLElBQUksQ0FBQyxDQUFBZixLQUFNLENBQUNhLEdBQUcsQ0FBQ0YsRUFBRSxFQUFFSSxJQUFJLENBQUM7Y0FFekIsSUFBSSxDQUFDRSxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCOztVQUNBdkIsT0FBQSxDQUFBSSxxQkFBQSxHQUFBQSxxQkFBQTtVQUVNO1VBQVcsTUFBTW9CLGNBQWMsR0FBQXhCLE9BQUEsQ0FBQXdCLGNBQUEsR0FBRyxJQUFJcEIscUJBQXFCLEVBQUU7VUFDcEVxQixVQUFVLENBQUNDLENBQUMsR0FBR0YsY0FBYyJ9