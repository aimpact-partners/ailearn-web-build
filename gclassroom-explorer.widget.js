System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_aimpactChat101UiManager) {
      dependency_11 = _aimpactChat101UiManager;
    }, function (_pragmateUi0036Components) {
      dependency_12 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", null], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/chat/ui/manager', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/gclassroom-explorer.widget');
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

      /************************
      INTERNAL MODULE: ./gclass
      ************************/

      ims.set('./gclass', {
        hash: 1820026526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _model = require("@beyond-js/reactive/model");
          class GClass extends _model.ReactiveModel {
            #course;
            #name;
            get name() {
              return this.#name;
            }
            #code;
            get code() {
              return this.#code;
            }
            get id() {
              return this.#course.id;
            }
            constructor(gclass) {
              super();
              this.#course = gclass;
              this.#init();
            }
            #init() {
              this.#name = this.#course.descriptionHeading;
              this.#code = this.#course.enrollmentCode;
            }
          }
          exports.GClass = GClass;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1702906868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _gclass = require("./gclass");
          class StoreManager extends _model.ReactiveModel {
            get isReady() {
              return _gclassroom.gclassroom.isReady;
            }
            #items = new Map();
            get items() {
              return [...this.#items.values()];
            }
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
            }
            async #init() {
              this.fetching = true;
              const courses = await _gclassroom.gclassroom.courses();
              courses.forEach(item => {
                const gclass = new _gclass.GClass(item);
                this.#items.set(item.id, gclass);
              });
              this.fetching = false;
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
        hash: 584569275,
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
            const isReady = !textsReady || !_gclassroom.gclassroom.ready || !ready;
            if (!isReady && fetching) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            if (isReady) return _react.default.createElement("h3", null, "Cargando");
            const Control = !store.items.length ? _empty.EmptyExplorer : _list.List;
            return _react.default.createElement(_context.ExplorerContext.Provider, {
              value: {
                store,
                texts
              }
            }, _react.default.createElement("article", null, _react.default.createElement("header", {
              className: "aside__top"
            }, _react.default.createElement("h3", null, texts.title)), _react.default.createElement(Control, null)));
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
        hash: 2185142307,
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
              href: `/sessions/list/${item.id}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsR0FBRywrQkFBa0IsR0FBRTtZQUN0QyxNQUFNLENBQUNuQixLQUFLLEVBQUVrRCxRQUFRLENBQUMsR0FBR3ZDLGNBQUssQ0FBQ1csUUFBUSxDQUFDSCxLQUFLLENBQUNuQixLQUFLLENBQUM7WUFFckQsb0JBQVMsRUFBQyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTStCLFFBQVEsQ0FBQy9CLEtBQUssQ0FBQ25CLEtBQUssQ0FBQyxDQUFDO1lBRS9DLE1BQU1tRCxNQUFNLEdBQUdoQyxLQUFLLENBQUNuQixLQUFLLENBQUNvRCxHQUFHLENBQUM3QyxJQUFJLElBQUc7Y0FDckMsT0FBT0ksNkJBQUNnQyxXQUFJO2dCQUFDcEMsSUFBSSxFQUFFQSxJQUFJO2dCQUFFd0MsR0FBRyxFQUFFeEMsSUFBSSxDQUFDZjtjQUFFLEVBQUk7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsT0FBT21CO2NBQUlLLFNBQVMsRUFBQztZQUFlLEdBQUVtQyxNQUFNLENBQU07VUFDbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJFeHBsb3JlciIsImV4cG9ydHMiLCJHQ2xhc3MiLCJSZWFjdGl2ZU1vZGVsIiwibmFtZSIsImNvZGUiLCJpZCIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzIiwiZGVzY3JpcHRpb25IZWFkaW5nIiwiZW5yb2xsbWVudENvZGUiLCJpc1JlYWR5IiwiZ2NsYXNzcm9vbSIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImNvdXJzZXMiLCJmb3JFYWNoIiwiaXRlbSIsInNldCIsInJlYWR5IiwiRXhwbG9yZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5RXhwbG9yZXIiLCJjbGFzc05hbWUiLCJJY29uIiwiaWNvbiIsInN0b3JlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJkaWFsb2dSZWYiLCJ1c2VSZWYiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0aXRsZSIsIkl0ZW1BY3Rpb25zIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiSXRlbSIsInBhdGhuYW1lIiwicm91dGluZyIsInVyaSIsImtleSIsIkxpbmsiLCJocmVmIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJtYXAiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9nY2xhc3MudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9lbXB0eS50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtcy9hY3Rpb25zLnRzeCIsInRzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==