System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@beyond-js/reactive@1.1.2/examples/models", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Page, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_beyondJsReactive112ExamplesModels) {
      dependency_5 = _beyondJsReactive112ExamplesModels;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_7 = _beyondJsReact18Widgets101Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.2/home"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/reactive/examples/models', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page-reactive",
        "vspecifier": "@beyond-js/reactive@1.1.2/home",
        "is": "page",
        "route": "/home-reactive"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/reactive@1.1.2/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1218204421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
            #store;
            createStore(language) {
              this.#store = new _store.Store();
              return this.#store;
            }
            show() {
              // const user = new User(1);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3088020465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@beyond-js/reactive/examples/models");
          class Store extends _model.ReactiveModel {
            #list;
            get list() {
              return this.#list;
            }
            #users;
            get users() {
              return this.#users;
            }
            constructor() {
              super();
              this.#users = new _models.Users();
              // this.#users.setOffline(true);
              this.#users.on('change', this.triggerEvent.bind(this));
              this.load();
            }
            async load() {
              await this.#users.load();
              this.ready = true;
            }
            async deleteUser(id) {
              const user = new _models.User({
                id
              });
              await user.load();
              await user.delete();
              this.triggerEvent();
            }
            async deleteItems(ids) {
              await this.#users.delete(ids);
              this.triggerEvent();
            }
          }
          exports.Store = Store;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3100747665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTestContext = exports.TestContext = void 0;
          var React = require("react");
          const TestContext = React.createContext({});
          exports.TestContext = TestContext;
          const useTestContext = () => React.useContext(TestContext);
          exports.useTestContext = useTestContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1731185938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _items = require("./items");
          var _context = require("./context");
          /*bundle*/
          function Page({
            store
          }) {
            const ref = React.useRef(null);
            const [ready, setReady] = React.useState(false);
            const [selected, setSelected] = React.useState(new Set());
            const [count, setCount] = React.useState(store.users?.items?.length ?? 0);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setCount(store.users?.items?.length ?? 0);
            });
            if (!ready) return React.createElement("div", null, "cargando....");
            const onCheck = event => {
              if (!event.currentTarget) return;
              const {
                value
              } = event.currentTarget;
              setSelected(prev => new Set(prev.add(value)));
            };
            const onToggle = event => {
              const newset = new Set();
              if (selected.size === store.users.items.length) {
                setSelected(newset);
                return;
              }
              store.users.items.forEach(user => newset.add(user.id.toString()));
              setSelected(newset);
            };
            const users = store.users.items.map(user => React.createElement(_items.Item, {
              data: user,
              key: user.id
            }));
            const onBulkDelete = event => {
              event.stopPropagation();
              store.deleteItems(Array.from(selected));
            };
            const props = {
              disabled: selected.size === 0
            };
            return React.createElement(_context.TestContext.Provider, {
              value: {
                total: store.users.items?.length,
                totalSelected: selected.size,
                selected,
                onCheck,
                store
              }
            }, React.createElement("div", {
              className: 'page__container'
            }, React.createElement("header", null, React.createElement("h1", null, "P\u00E1gina de prueba")), React.createElement("button", {
              onClick: onToggle
            }, "Select all"), React.createElement("button", {
              ref: ref,
              onClick: onBulkDelete,
              ...props
            }, "Eliminar"), React.createElement("ul", null, users)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/items
      *****************************/

      ims.set('./views/items', {
        hash: 2440342923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function Item({
            data
          }) {
            const {
              selected,
              onCheck,
              store
            } = (0, _context.useTestContext)();
            function onDelete(e) {
              e.preventDefault();
              e.stopPropagation();
              store.deleteUser(data.id);
            }
            if (data.isDeleted) return null;
            const attrs = {
              checked: selected.has(data.id.toString())
            };
            return React.createElement("li", null, React.createElement("input", {
              type: "checkbox",
              ...attrs,
              onChange: onCheck,
              value: data.id
            }), React.createElement("div", null, data.name), React.createElement("section", null, React.createElement("button", {
              onClick: onDelete
            }, "delete")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }, {
        "im": "./views/items",
        "from": "Item",
        "name": "Item"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./views/items').Item : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZSIsInNob3ciLCJleHBvcnRzIiwiX21vZGVsIiwiX21vZGVscyIsIlJlYWN0aXZlTW9kZWwiLCJsaXN0IiwidXNlcnMiLCJjb25zdHJ1Y3RvciIsIlVzZXJzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJiaW5kIiwibG9hZCIsInJlYWR5IiwiZGVsZXRlVXNlciIsImlkIiwidXNlciIsIlVzZXIiLCJkZWxldGUiLCJkZWxldGVJdGVtcyIsImlkcyIsIlJlYWN0IiwiVGVzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVGVzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2l0ZW1zIiwiX2NvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIlNldCIsImNvdW50Iiwic2V0Q291bnQiLCJpdGVtcyIsImxlbmd0aCIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoZWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiYWRkIiwib25Ub2dnbGUiLCJuZXdzZXQiLCJzaXplIiwiZm9yRWFjaCIsInRvU3RyaW5nIiwibWFwIiwiSXRlbSIsImRhdGEiLCJrZXkiLCJvbkJ1bGtEZWxldGUiLCJzdG9wUHJvcGFnYXRpb24iLCJBcnJheSIsImZyb20iLCJwcm9wcyIsImRpc2FibGVkIiwiUHJvdmlkZXIiLCJ0b3RhbCIsInRvdGFsU2VsZWN0ZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25EZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0RlbGV0ZWQiLCJhdHRycyIsImNoZWNrZWQiLCJoYXMiLCJ0eXBlIiwib25DaGFuZ2UiLCJuYW1lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFBSyxJQUFJO1lBQ1o7WUFDQSxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUNDLFFBQWlCO2NBQzVCLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBUSxLQUFLLEVBQUU7Y0FDekIsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBSSxJQUFJQSxDQUFBO2NBQ0g7WUFBQTs7VUFFREMsT0FBQSxDQUFBVCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFVLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLE9BQUEsR0FBQWQsT0FBQTtVQUNNLE1BQU9VLEtBQU0sU0FBUUcsTUFBQSxDQUFBRSxhQUFvQjtZQUM5QyxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFF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