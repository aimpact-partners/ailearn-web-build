System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactChat101UiManager) {
      dependency_10 = _aimpactChat101UiManager;
    }, function (_pragmateUi0036Components) {
      dependency_11 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['react', dependency_9], ['@aimpact/chat/ui/manager', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14]]);
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
        hash: 597030862,
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
            show() {}
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
        hash: 2841784997,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExplorerContext = exports.ExplorerContext = void 0;
          var React = require("react");
          const ExplorerContext = React.createContext({});
          exports.ExplorerContext = ExplorerContext;
          const useExplorerContext = () => React.useContext(ExplorerContext);
          exports.useExplorerContext = useExplorerContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2361241783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var React = require("react");
          function EmptyExplorer({}) {
            return React.createElement("div", {
              className: "sidebar__empty"
            }, React.createElement("h4", null, "There are no items to show"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4212044953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Explorer = Explorer;
          var React = require("react");
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
            const [search, setSearch] = React.useState('');
            const dialogRef = React.useRef(null);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            const isReady = !textsReady || !_gclassroom.gclassroom.ready || !ready;
            if (!isReady && fetching) return React.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            if (isReady) return null;
            const Control = !store.items.length ? _empty.EmptyExplorer : _list.List;
            return React.createElement(_context.ExplorerContext.Provider, {
              value: {
                store,
                texts
              }
            }, React.createElement("article", null, React.createElement("header", {
              className: "aside__top"
            }, React.createElement("h3", null, texts.title)), React.createElement(Control, null)));
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
        hash: 3733525451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _items = require("./items");
          function List({}) {
            const {
              store
            } = (0, _context.useExplorerContext)();
            const [items, setItems] = React.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems(store.items));
            const output = store.items.map(item => {
              return React.createElement(_items.Item, {
                item: item,
                key: item.id
              });
            });
            return React.createElement("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUVnRCxRQUFRLENBQUMsR0FBR3JDLEtBQUssQ0FBQ1MsUUFBUSxDQUFDSCxLQUFLLENBQUNqQixLQUFLLENBQUM7WUFFckQsb0JBQVMsRUFBQyxDQUFDaUIsS0FBSyxDQUFDLEVBQUUsTUFBTStCLFFBQVEsQ0FBQy9CLEtBQUssQ0FBQ2pCLEtBQUssQ0FBQyxDQUFDO1lBRS9DLE1BQU1pRCxNQUFNLEdBQUdoQyxLQUFLLENBQUNqQixLQUFLLENBQUNrRCxHQUFHLENBQUMzQyxJQUFJLElBQUc7Y0FDckMsT0FBT0ksb0JBQUM4QixXQUFJO2dCQUFDbEMsSUFBSSxFQUFFQSxJQUFJO2dCQUFFc0MsR0FBRyxFQUFFdEMsSUFBSSxDQUFDZjtjQUFFLEVBQUk7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsT0FBT21CO2NBQUlLLFNBQVMsRUFBQztZQUFlLEdBQUVpQyxNQUFNLENBQU07VUFDbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJFeHBsb3JlciIsInNob3ciLCJleHBvcnRzIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsIm5hbWUiLCJjb2RlIiwiaWQiLCJjb25zdHJ1Y3RvciIsImdjbGFzcyIsImRlc2NyaXB0aW9uSGVhZGluZyIsImVucm9sbG1lbnRDb2RlIiwiaXNSZWFkeSIsImdjbGFzc3Jvb20iLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXQiLCJyZWFkeSIsIkV4cGxvcmVyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUV4cGxvcmVyQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eUV4cGxvcmVyIiwiY2xhc3NOYW1lIiwic3RvcmUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImRpYWxvZ1JlZiIsInVzZVJlZiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiSXRlbUFjdGlvbnMiLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwia2V5IiwiTGluayIsImhyZWYiLCJzZXRJdGVtcyIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2djbGFzcy50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2VtcHR5LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwidHMvdmlld3MvaXRlbXMvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19