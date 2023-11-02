System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.0/core", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Explorer: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_9 = _pragmateUi0037Icons;
    }, function (_aimpactChat101UiManager) {
      dependency_10 = _aimpactChat101UiManager;
    }, function (_pragmateUi0037Components) {
      dependency_11 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/ui/manager', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/gclassroom-explorer.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4293631984,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Explorer;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 699880654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _dayjs = require("dayjs");
          class StoreManager extends _model.ReactiveModel {
            get isReady() {
              return _gclassroom.gclassroom.isReady;
            }
            #items = new Map();
            get items() {
              return [..._gclassroom.gclassroom.classes.values()];
            }
            #lastTime;
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
            }
            loadClasses = async () => {
              this.fetching = true;
              await _gclassroom.gclassroom.courses();
              this.fetching = false;
            };
            async #init() {
              const currentTime = (0, _dayjs.default)();
              if (_gclassroom.gclassroom.lastClassesQueryTime && _gclassroom.gclassroom.classes.size) {
                this.ready = true;
                if (currentTime.diff(_gclassroom.gclassroom.lastClassesQueryTime, 'minutes') > 5) {
                  this.loadClasses();
                }
                return;
              }
              await this.loadClasses();
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3686089905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExplorerContext = exports.ExplorerContext = void 0;
          var _react = require("react");
          const ExplorerContext = _react.default.createContext({});
          exports.ExplorerContext = ExplorerContext;
          const useExplorerContext = () => _react.default.useContext(ExplorerContext);
          exports.useExplorerContext = useExplorerContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2813385547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function EmptyExplorer({}) {
            return _react.default.createElement("div", {
              className: "sidebar__empty"
            }, _react.default.createElement(_icons.Icon, {
              icon: "circle-exclamation"
            }), _react.default.createElement("h4", null, "There are no items to show"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 896526283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Explorer = Explorer;
          var _react = require("react");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _icons = require("pragmate-ui/icons");
          var _list = require("./list");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("./empty");
          /*bundle*/
          function Explorer({
            store
          }) {
            const [search, setSearch] = _react.default.useState('');
            const dialogRef = _react.default.useRef(null);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            const isReady = textsReady && _gclassroom.gclassroom.ready && ready;
            if (!isReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const Control = !store.items.length ? _empty.EmptyExplorer : _list.List;
            return _react.default.createElement(_context.ExplorerContext.Provider, {
              value: {
                store,
                texts
              }
            }, _react.default.createElement("article", null, _react.default.createElement("header", {
              className: "aside__top"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_icons.IconButton, {
              onClick: store.loadClasses,
              variant: "default",
              className: "circle",
              icon: "refresh"
            })), _react.default.createElement(Control, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/items/actions
      *************************************/

      ims.set('./views/items/actions', {
        hash: 4062573251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          function ItemActions({
            item,
            chatId,
            isCurrent
          }) {
            return null;
            //todo: define actions
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/items/index
      ***********************************/

      ims.set('./views/items/index', {
        hash: 1881741457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          const Item = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            //const chatId = pathname.split('/')[2];
            let chatId = 'any';
            const isCurrent = chatId === item.id;
            return _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_components.Link, {
              href: `/assigments/list/${item.id}`
            }, item.name), _react.default.createElement(_actions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            }));
          };
          exports.Item = Item;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2807483691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _items = require("./items");
          function List({}) {
            const {
              store
            } = (0, _context.useExplorerContext)();
            const [items, setItems] = _react.default.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems(store.items));
            const output = store.items.map(item => {
              return _react.default.createElement(_items.Item, {
                item: item,
                key: item.id
              });
            });
            return _react.default.createElement("ul", {
              className: "sidebar__list"
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Explorer",
        "name": "Explorer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Explorer') && _export("Explorer", Explorer = require ? require('./views/index').Explorer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksSUFBRztjQUNyQyxPQUFPakMsNkJBQUNvQyxXQUFJO2dCQUFDSCxJQUFJLEVBQUVBLElBQUk7Z0JBQUVRLEdBQUcsRUFBRVIsSUFBSSxDQUFDTztjQUFFLEVBQUk7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsT0FBT3hDO2NBQUlLLFNBQVMsRUFBQztZQUFlLEdBQUV5QyxNQUFNLENBQU07VUFDbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJFeHBsb3JlciIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXNSZWFkeSIsImdjbGFzc3Jvb20iLCJNYXAiLCJpdGVtcyIsImNsYXNzZXMiLCJ2YWx1ZXMiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZENsYXNzZXMiLCJmZXRjaGluZyIsImNvdXJzZXMiLCJjdXJyZW50VGltZSIsImxhc3RDbGFzc2VzUXVlcnlUaW1lIiwic2l6ZSIsInJlYWR5IiwiZGlmZiIsIkV4cGxvcmVyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUV4cGxvcmVyQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eUV4cGxvcmVyIiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJzdG9yZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwidGl0bGUiLCJJY29uQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwiaWQiLCJrZXkiLCJMaW5rIiwiaHJlZiIsIm5hbWUiLCJzZXRJdGVtcyIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2VtcHR5LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwidHMvdmlld3MvaXRlbXMvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==