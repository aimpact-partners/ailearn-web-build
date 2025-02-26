System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_4 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_8 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/entities/collection', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.16/test",
        "is": "page",
        "route": "/dev/test",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/test');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /**********************************
      INTERNAL MODULE: ./model/collection
      **********************************/

      ims.set('./model/collection', {
        hash: 3343852926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TestCollection = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          class TestCollection extends _collection.Collection {
            constructor() {
              super({
                entity: 'User',
                item: _item.User,
                provider: _provider.CollectionProvider
              });
            }
            async load() {
              const data = await super.load();
              return data;
            }
          }
          exports.TestCollection = TestCollection;
          globalThis.Collection = TestCollection;
          console.log(`Collection is being exposed as TestCollection in globaThis`);
        }
      });

      /****************************
      INTERNAL MODULE: ./model/item
      ****************************/

      ims.set('./model/item', {
        hash: 1561702700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          class User extends _item.Item {
            constructor(specs = {}) {
              super({
                entity: 'User',
                properties: ['id', 'name'],
                ...specs
              });
            }
          }
          exports.User = User;
          globalThis.Item = User;
          console.log(`Item is being exposed as User in globaThis`);
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/model
      *****************************/

      ims.set('./model/model', {
        hash: 1875801609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@aimpact/reactive/model");
          class User extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['id', 'name', {
                  name: 'data'
                }]
              });
            }
          }
          exports.User = User;
          globalThis.Model = User;
          console.log(`Model is being exposed as User in globaThis`);
        }
      });

      /********************************
      INTERNAL MODULE: ./model/provider
      ********************************/

      ims.set('./model/provider', {
        hash: 2594497335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionProvider = void 0;
          var _core = require("@beyond-js/kernel/core");
          class CollectionProvider {
            async list() {
              const promise = new _core.PendingPromise();
              setTimeout(() => {
                promise.resolve([{
                  id: 1,
                  name: 'Julio'
                }, {
                  id: 2,
                  name: 'Julia'
                }]);
              }, 1000);
              return promise;
            }
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2083624824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {
            constructor() {}
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2049386435,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View() {
            return React.createElement("div", {
              className: "grid-container"
            }, React.createElement("div", {
              className: "header"
            }, "Header fijo"), React.createElement("div", {
              className: "child-2"
            }, "Contenido de Child 2 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo")), React.createElement("div", {
              className: "child-3"
            }, "Contenido de Child 3 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2NvbGxlY3Rpb24iLCJfaXRlbSIsIl9wcm92aWRlciIsIlRlc3RDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsIlVzZXIiLCJwcm92aWRlciIsIkNvbGxlY3Rpb25Qcm92aWRlciIsImxvYWQiLCJkYXRhIiwiZ2xvYmFsVGhpcyIsImNvbnNvbGUiLCJsb2ciLCJJdGVtIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm5hbWUiLCJNb2RlbCIsIl9jb3JlIiwibGlzdCIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiaWQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL2l0ZW0udHMiLCIvdHMvbW9kZWwvbW9kZWwudHMiLCIvdHMvbW9kZWwvcHJvdmlkZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtV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Ozs7Ozs7Ozs7Ozs7OztVQ25CSyxNQUFPaEIsWUFBWTtZQUN4QlcsWUFBQSxHQUFlOztVQUNmTixPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKRCxJQUFBb0MsS0FBQSxHQUFBM0MsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQTtZQUNaLE9BQ0NrQyxLQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixLQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVEsaUJBQWtCLEVBQ3pDRixLQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsRyxxQ0FFdkJGLEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsQ0FDWixFQUNORCxLQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsRyxxQ0FFdkJGLEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsRUFDakJELEtBQUEsQ0FBQUMsYUFBQSx5QkFBaUIsQ0FDWixDQUNEO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=