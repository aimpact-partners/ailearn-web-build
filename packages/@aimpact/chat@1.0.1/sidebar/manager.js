System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive1111Model) {
      dependency_1 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
        hash: 292533517,
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
                if (this.#items.has(spec.id)) {
                  throw new Error(`Module "${spec.id}" already registered`);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwiYWRkVG9TdGFydCIsInRhcmdldE1hcCIsInNwZWMiLCJuZXdNYXAiLCJzZXQiLCJpZCIsImZvckVhY2giLCJrZXkiLCJjbGVhciIsInJlZ2lzdGVyIiwic3BlY3MiLCJwb3NpdGlvbiIsImhhcyIsIkVycm9yIiwib3JkZXIiLCJ0cmlnZ2VyRXZlbnQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsIlNpZGViYXJNYW5hZ2VyIl0sInNvdXJjZXMiOlsiL0lBY3Rpdml0eUJhckl0ZW0udHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsTUFBT0MscUJBQXNCLFNBQVFGLE1BQUEsQ0FBQUcsYUFBK0I7WUFDcEYsQ0FBQUMsS0FBTSxHQUFHLElBQUlDLEdBQUcsRUFBNEI7WUFFNUMsSUFBSUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDRyxJQUFJO1lBQ3hCO1lBRUEsQ0FBQUMsV0FBWSxHQUFHLElBQUlILEdBQUcsRUFBNEI7WUFDbEQsSUFBSUcsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUwsS0FBTTtZQUNuQjtZQUVBTSxVQUFVQSxDQUFDQyxTQUF3QyxFQUFFQyxJQUFzQjtjQUMxRSxNQUFNQyxNQUFNLEdBQUcsSUFBSVIsR0FBRyxFQUE0QjtjQUNsRFEsTUFBTSxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0csRUFBRSxFQUFFSCxJQUFJLENBQUM7Y0FFekJELFNBQVMsQ0FBQ0ssT0FBTyxDQUFDLENBQUNqQixLQUFLLEVBQUVrQixHQUFHLEtBQUk7Z0JBQ2hDSixNQUFNLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxFQUFFbEIsS0FBSyxDQUFDO2NBQ3ZCLENBQUMsQ0FBQztjQUVGWSxTQUFTLENBQUNPLEtBQUssRUFBRTtjQUNqQkwsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQ2pCLEtBQUssRUFBRWtCLEdBQUcsS0FBSTtnQkFDN0JOLFNBQVMsQ0FBQ0csR0FBRyxDQUFDRyxHQUFHLEVBQUVsQixLQUFLLENBQUM7Y0FDMUIsQ0FBQyxDQUFDO1lBQ0g7WUFFQW9CLFFBQVFBLENBQUNDLEtBQXlCLEVBQUVDLFFBQVEsR0FBRyxLQUFLO2NBQ25ELEtBQUssTUFBTVQsSUFBSSxJQUFJUSxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNrQixHQUFHLENBQUNWLElBQUksQ0FBQ0csRUFBRSxDQUFDLEVBQUU7a0JBQzdCLE1BQU0sSUFBSVEsS0FBSyxDQUFDLFdBQVdYLElBQUksQ0FBQ0csRUFBRSxzQkFBc0IsQ0FBQzs7Z0JBRzFELE1BQU1KLFNBQVMsR0FBR1UsUUFBUSxLQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQWIsV0FBWSxHQUFHLElBQUksQ0FBQyxDQUFBSixLQUFNO2dCQUV6RSxJQUFJUSxJQUFJLENBQUNZLEtBQUssS0FBSyxPQUFPLEVBQUU7a0JBQzNCLElBQUksQ0FBQ2QsVUFBVSxDQUFDQyxTQUFTLEVBQUVDLElBQUksQ0FBQztpQkFDaEMsTUFBTTtrQkFDTkQsU0FBUyxDQUFDRyxHQUFHLENBQUNGLElBQUksQ0FBQ0csRUFBRSxFQUFFSCxJQUFJLENBQUM7OztjQUc5QixJQUFJLENBQUNhLFlBQVksRUFBRTtZQUNwQjtZQUVBQyxNQUFNQSxDQUFDWCxFQUFFLEVBQUVZLElBQUksRUFBRU4sUUFBUTtjQUN4QixJQUFJLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDa0IsR0FBRyxDQUFDUCxFQUFFLENBQUMsRUFBRTtnQkFDeEJZLElBQUksR0FBRztrQkFBRSxHQUFHLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxDQUFDd0IsR0FBRyxDQUFDYixFQUFFLENBQUM7a0JBQUUsR0FBR1k7Z0JBQUksQ0FBRTs7Y0FFM0MsSUFBSSxDQUFDLENBQUF2QixLQUFNLENBQUNVLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFWSxJQUFJLENBQUM7Y0FFekIsSUFBSSxDQUFDRSxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCOztVQUNBL0IsT0FBQSxDQUFBSSxxQkFBQSxHQUFBQSxxQkFBQTtVQUVNO1VBQVcsTUFBTTRCLGNBQWMsR0FBQWhDLE9BQUEsQ0FBQWdDLGNBQUEsR0FBRyxJQUFJNUIscUJBQXFCLEVBQUUifQ==