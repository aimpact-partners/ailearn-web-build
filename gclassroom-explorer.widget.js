System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/wrapper", "@aimpact/chat-sdk@0.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/ui/manager", "pragmate-ui@0.0.36/components", "@aimpact/chat@0.0.2/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk001Core) {
      dependency_6 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Wrapper) {
      dependency_7 = _aimpactChat002Wrapper;
    }, function (_aimpactChatSdk001Session) {
      dependency_8 = _aimpactChatSdk001Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_aimpactChat002UiManager) {
      dependency_11 = _aimpactChat002UiManager;
    }, function (_pragmateUi0036Components) {
      dependency_12 = _pragmateUi0036Components;
    }, function (_aimpactChat002SharedHooks) {
      dependency_13 = _aimpactChat002SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 732851253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function EmptyExplorer({}) {
            return React.createElement("div", {
              className: "sidebar__empty"
            }, React.createElement(_icons.Icon, {
              icon: "circle-exclamation"
            }), React.createElement("h4", null, "There are no items to show"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4198400759,
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
            if (isReady) return React.createElement("h3", null, "Cargando");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkdDbGFzcyIsIlJlYWN0aXZlTW9kZWwiLCJjb3Vyc2UiLCJuYW1lIiwiY29kZSIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJkZXNjcmlwdGlvbkhlYWRpbmciLCJlbnJvbGxtZW50Q29kZSIsIl9nY2xhc3Nyb29tIiwiX2djbGFzcyIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJ2YWx1ZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiY291cnNlcyIsImZvckVhY2giLCJpdGVtIiwic2V0IiwicmVhZHkiLCJSZWFjdCIsIkV4cGxvcmVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFeHBsb3JlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ljb25zIiwiRW1wdHlFeHBsb3JlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiaWNvbiIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfbGlzdCIsIl9ob29rczIiLCJfZW1wdHkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImRpYWxvZ1JlZiIsInVzZVJlZiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwidGl0bGUiLCJJdGVtQWN0aW9ucyIsImNoYXRJZCIsImlzQ3VycmVudCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX2FjdGlvbnMiLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwiZGVmYXVsdCIsImtleSIsIkxpbmsiLCJocmVmIiwiX2l0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJtYXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9nY2xhc3MudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLFFBQVE7WUFDaEI7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLE1BQUEsR0FBQVgsT0FB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