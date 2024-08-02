System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.0-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/sidebar/manager"
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
        hash: 1672430815,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwiYWRkVG9TdGFydCIsInRhcmdldE1hcCIsInNwZWMiLCJuZXdNYXAiLCJzZXQiLCJpZCIsImZvckVhY2giLCJrZXkiLCJjbGVhciIsInJlZ2lzdGVyIiwic3BlY3MiLCJwb3NpdGlvbiIsIm9yZGVyIiwidHJpZ2dlckV2ZW50IiwidXBkYXRlIiwiZGF0YSIsImhhcyIsImdldCIsInRyaWdnZXIiLCJTaWRlYmFyTWFuYWdlciJdLCJzb3VyY2VzIjpbIi9JQWN0aXZpdHlCYXJJdGVtLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFHTztVQUFVLE1BQU9DLHFCQUFzQixTQUFRRixNQUFBLENBQUFHLGFBQStCO1lBQ3BGLENBQUFDLEtBQU0sR0FBRyxJQUFJQyxHQUFHLEVBQTRCO1lBRTVDLElBQUlELEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ0csSUFBSTtZQUN4QjtZQUVBLENBQUFDLFdBQVksR0FBRyxJQUFJSCxHQUFHLEVBQTRCO1lBQ2xELElBQUlHLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFMLEtBQU07WUFDbkI7WUFFQU0sVUFBVUEsQ0FBQ0MsU0FBd0MsRUFBRUMsSUFBc0I7Y0FDMUUsTUFBTUMsTUFBTSxHQUFHLElBQUlSLEdBQUcsRUFBNEI7Y0FDbERRLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLEVBQUUsRUFBRUgsSUFBSSxDQUFDO2NBRXpCRCxTQUFTLENBQUNLLE9BQU8sQ0FBQyxDQUFDakIsS0FBSyxFQUFFa0IsR0FBRyxLQUFJO2dCQUNoQ0osTUFBTSxDQUFDQyxHQUFHLENBQUNHLEdBQUcsRUFBRWxCLEtBQUssQ0FBQztjQUN2QixDQUFDLENBQUM7Y0FFRlksU0FBUyxDQUFDTyxLQUFLLEVBQUU7Y0FDakJMLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUNqQixLQUFLLEVBQUVrQixHQUFHLEtBQUk7Z0JBQzdCTixTQUFTLENBQUNHLEdBQUcsQ0FBQ0csR0FBRyxFQUFFbEIsS0FBSyxDQUFDO2NBQzFCLENBQUMsQ0FBQztZQUNIO1lBRUFvQixRQUFRQSxDQUFDQyxLQUF5QixFQUFFQyxRQUFRLEdBQUcsS0FBSztjQUNuRCxLQUFLLE1BQU1ULElBQUksSUFBSVEsS0FBSyxFQUFFO2dCQUN6QixNQUFNVCxTQUFTLEdBQUdVLFFBQVEsS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFiLFdBQVksR0FBRyxJQUFJLENBQUMsQ0FBQUosS0FBTTtnQkFFekUsSUFBSVEsSUFBSSxDQUFDVSxLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUMzQixJQUFJLENBQUNaLFVBQVUsQ0FBQ0MsU0FBUyxFQUFFQyxJQUFJLENBQUM7aUJBQ2hDLE1BQU07a0JBQ05ELFNBQVMsQ0FBQ0csR0FBRyxDQUFDRixJQUFJLENBQUNHLEVBQUUsRUFBRUgsSUFBSSxDQUFDOzs7Y0FHOUIsSUFBSSxDQUFDVyxZQUFZLEVBQUU7WUFDcEI7WUFFQUMsTUFBTUEsQ0FBQ1QsRUFBRSxFQUFFVSxJQUFJLEVBQUVKLFFBQVE7Y0FDeEIsSUFBSSxJQUFJLENBQUMsQ0FBQWpCLEtBQU0sQ0FBQ3NCLEdBQUcsQ0FBQ1gsRUFBRSxDQUFDLEVBQUU7Z0JBQ3hCVSxJQUFJLEdBQUc7a0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQXJCLEtBQU0sQ0FBQ3VCLEdBQUcsQ0FBQ1osRUFBRSxDQUFDO2tCQUFFLEdBQUdVO2dCQUFJLENBQUU7O2NBRTNDLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDVSxHQUFHLENBQUNDLEVBQUUsRUFBRVUsSUFBSSxDQUFDO2NBRXpCLElBQUksQ0FBQ0csT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUM1QjtZQUVBVixLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFkLEtBQU0sR0FBRyxJQUFJQyxHQUFHLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFHLFdBQVksR0FBRyxJQUFJSCxHQUFHLEVBQUU7WUFDOUI7O1VBQ0FQLE9BQUEsQ0FBQUkscUJBQUEsR0FBQUEscUJBQUE7VUFFTTtVQUFXLE1BQU0yQixjQUFjLEdBQUEvQixPQUFBLENBQUErQixjQUFBLEdBQUcsSUFBSTNCLHFCQUFxQixFQUFFIiwiaWdub3JlTGlzdCI6W119