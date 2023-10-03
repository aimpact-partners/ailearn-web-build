System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_10 = _pragmateUi0037Icons;
    }, function (_aimpactChat101UiManager) {
      dependency_11 = _aimpactChat101UiManager;
    }, function (_pragmateUi0037Components) {
      dependency_12 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 1137698438,
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
            const isReady = textsReady && _gclassroom.gclassroom.ready && ready;
            if (!isReady && fetching) return _react.default.createElement(_components.Spinner, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkdDbGFzcyIsIlJlYWN0aXZlTW9kZWwiLCJjb3Vyc2UiLCJuYW1lIiwiY29kZSIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJkZXNjcmlwdGlvbkhlYWRpbmciLCJlbnJvbGxtZW50Q29kZSIsIl9nY2xhc3Nyb29tIiwiX2djbGFzcyIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJ2YWx1ZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiY291cnNlcyIsImZvckVhY2giLCJpdGVtIiwic2V0IiwicmVhZHkiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUV4cGxvcmVyQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaWNvbnMiLCJFbXB0eUV4cGxvcmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9saXN0IiwiX2hvb2tzMiIsIl9lbXB0eSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0aXRsZSIsIkl0ZW1BY3Rpb25zIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiX3JvdXRpbmciLCJfYWN0aW9ucyIsIkl0ZW0iLCJwYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJrZXkiLCJMaW5rIiwiaHJlZiIsIl9pdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvZ2NsYXNzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtcy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtcy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxRQUFRO1lBQ2hCOztVQUNBQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxNQUFBLEdBQUFYLE9BQUE7VUFFTSxN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