System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.2.0/tracking", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_4 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_5 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211Model) {
      dependency_6 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_8 = _aimpactAilearnSdk120Tracking;
    }, function (_react) {
      dependency_9 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/entities/collection', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['react', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-page",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/test",
        "is": "page",
        "route": "/dev/test",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/test');
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
        hash: 3327551805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TestCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
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
        hash: 3960757210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
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
        hash: 1000608760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 2831555185,
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
        hash: 2339039230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager {
            constructor() {
              const dashboard = new _tracking.TrackingDashboard({
                id: '7470db91-c4ed-49a2-98dd-9759fcf377ae'
              });
              globalThis.dashboard = dashboard;
              console.log(`TrackingDashboard is being exposed to the global scope as 'dashboard'`);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3004610855,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View() {
            return React.createElement("div", null, React.createElement("div", {
              className: "border-examples"
            }, React.createElement("div", null, React.createElement("div", {
              className: "div"
            }, "1"), React.createElement("button", null, "button vlue"), React.createElement("img", {
              src: "/assets/images/entities/activity/700.webp",
              alt: "placeholder"
            })), React.createElement("div", {
              className: "div"
            }, "background-card")), React.createElement("div", {
              className: "grid-container"
            }, React.createElement("div", {
              className: "header"
            }, "Header fijo"), React.createElement("div", {
              className: "child-2"
            }, "Contenido de Child 2 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo")), React.createElement("div", {
              className: "child-3"
            }, "Contenido de Child 3 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2NvbGxlY3Rpb24iLCJfaXRlbSIsIl9wcm92aWRlciIsIlRlc3RDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsIlVzZXIiLCJwcm92aWRlciIsIkNvbGxlY3Rpb25Qcm92aWRlciIsImxvYWQiLCJkYXRhIiwiZ2xvYmFsVGhpcyIsImNvbnNvbGUiLCJsb2ciLCJJdGVtIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm5hbWUiLCJNb2RlbCIsIl9jb3JlIiwibGlzdCIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiaWQiLCJfdHJhY2tpbmciLCJkYXNoYm9hcmQiLCJUcmFja2luZ0Rhc2hib2FyZCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvbW9kZWwvY29sbGVjdGlvbi50cyIsIi8vdHMvbW9kZWwvaXRlbS50cyIsIi8vdHMvbW9kZWwvbW9kZWwudHMiLCIvL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxH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