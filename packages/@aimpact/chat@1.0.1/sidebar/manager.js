System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
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
        hash: 437418164,
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
        hash: 2089100632,
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
            addToStart(targetMap, spec) {
              const newMap = new Map();
              newMap.set(spec.id, spec);
              targetMap.forEach((value, key) => {
                newMap.set(key, value);
              });
              targetMap.clear();
              newMap.forEach((value, key) => {
                targetMap.set(key, value);
              });
            }
            register(specs, position = 'top') {
              for (const spec of specs) {
                const targetMap = position === 'bottom' ? this.#bottomItems : this.#items;
                if (spec.order === 'start') {
                  this.addToStart(targetMap, spec);
                } else {
                  targetMap.set(spec.id, spec);
                }
              }
              this.triggerEvent();
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
            clear() {
              this.#items = new Map();
              this.#bottomItems = new Map();
              console.log('limpiamos el menu');
            }
          }
          exports.SidebarManageRegistry = SidebarManageRegistry;
          /*bundle*/
          const SidebarManager = exports.SidebarManager = new SidebarManageRegistry();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwiYWRkVG9TdGFydCIsInRhcmdldE1hcCIsInNwZWMiLCJuZXdNYXAiLCJzZXQiLCJpZCIsImZvckVhY2giLCJrZXkiLCJjbGVhciIsInJlZ2lzdGVyIiwic3BlY3MiLCJwb3NpdGlvbiIsIm9yZGVyIiwidHJpZ2dlckV2ZW50IiwidXBkYXRlIiwiZGF0YSIsImhhcyIsImdldCIsInRyaWdnZXIiLCJjb25zb2xlIiwibG9nIiwiU2lkZWJhck1hbmFnZXIiXSwic291cmNlcyI6WyIvSUFjdGl2aXR5QmFySXRlbS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPQyxxQkFBc0IsU0FBUUYsTUFBQSxDQUFBRyxhQUErQjtZQUNwRixDQUFBQyxLQUFNLEdBQUcsSUFBSUMsR0FBRyxFQUE0QjtZQUU1QyxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNHLElBQUk7WUFDeEI7WUFFQSxDQUFBQyxXQUFZLEdBQUcsSUFBSUgsR0FBRyxFQUE0QjtZQUNsRCxJQUFJRyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUFNLFVBQVVBLENBQUNDLFNBQXdDLEVBQUVDLElBQXNCO2NBQzFFLE1BQU1DLE1BQU0sR0FBRyxJQUFJUixHQUFHLEVBQTRCO2NBQ2xEUSxNQUFNLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxFQUFFLEVBQUVILElBQUksQ0FBQztjQUV6QkQsU0FBUyxDQUFDSyxPQUFPLENBQUMsQ0FBQ2pCLEtBQUssRUFBRWtCLEdBQUcsS0FBSTtnQkFDaENKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRyxHQUFHLEVBQUVsQixLQUFLLENBQUM7Y0FDdkIsQ0FBQyxDQUFDO2NBRUZZLFNBQVMsQ0FBQ08sS0FBSyxFQUFFO2NBQ2pCTCxNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDakIsS0FBSyxFQUFFa0IsR0FBRyxLQUFJO2dCQUM3Qk4sU0FBUyxDQUFDRyxHQUFHLENBQUNHLEdBQUcsRUFBRWxCLEtBQUssQ0FBQztjQUMxQixDQUFDLENBQUM7WUFDSDtZQUVBb0IsUUFBUUEsQ0FBQ0MsS0FBeUIsRUFBRUMsUUFBUSxHQUFHLEtBQUs7Y0FDbkQsS0FBSyxNQUFNVCxJQUFJLElBQUlRLEtBQUssRUFBRTtnQkFDekIsTUFBTVQsU0FBUyxHQUFHVSxRQUFRLEtBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBYixXQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFKLEtBQU07Z0JBRXpFLElBQUlRLElBQUksQ0FBQ1UsS0FBSyxLQUFLLE9BQU8sRUFBRTtrQkFDM0IsSUFBSSxDQUFDWixVQUFVLENBQUNDLFNBQVMsRUFBRUMsSUFBSSxDQUFDO2lCQUNoQyxNQUFNO2tCQUNORCxTQUFTLENBQUNHLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxFQUFFLEVBQUVILElBQUksQ0FBQzs7O2NBRzlCLElBQUksQ0FBQ1csWUFBWSxFQUFFO1lBQ3BCO1lBRUFDLE1BQU1BLENBQUNULEVBQUUsRUFBRVUsSUFBSSxFQUFFSixRQUFRO2NBQ3hCLElBQUksSUFBSSxDQUFDLENBQUFqQixLQUFNLENBQUNzQixHQUFHLENBQUNYLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QlUsSUFBSSxHQUFHO2tCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFyQixLQUFNLENBQUN1QixHQUFHLENBQUNaLEVBQUUsQ0FBQztrQkFBRSxHQUFHVTtnQkFBSSxDQUFFOztjQUUzQyxJQUFJLENBQUMsQ0FBQXJCLEtBQU0sQ0FBQ1UsR0FBRyxDQUFDQyxFQUFFLEVBQUVVLElBQUksQ0FBQztjQUV6QixJQUFJLENBQUNHLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUI7WUFFQVYsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBZCxLQUFNLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2NBQ3ZCLElBQUksQ0FBQyxDQUFBRyxXQUFZLEdBQUcsSUFBSUgsR0FBRyxFQUFFO2NBQzdCd0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDakM7O1VBQ0FoQyxPQUFBLENBQUFJLHFCQUFBLEdBQUFBLHFCQUFBO1VBRU07VUFBVyxNQUFNNkIsY0FBYyxHQUFBakMsT0FBQSxDQUFBaUMsY0FBQSxHQUFHLElBQUk3QixxQkFBcUIsRUFBRSJ9