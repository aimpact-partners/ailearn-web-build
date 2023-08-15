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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwic2hvdyIsImV4cG9ydHMiLCJfbW9kZWwiLCJHQ2xhc3MiLCJSZWFjdGl2ZU1vZGVsIiwiY291cnNlIiwibmFtZSIsImNvZGUiLCJpZCIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzIiwiaW5pdCIsIiNpbml0IiwiZGVzY3JpcHRpb25IZWFkaW5nIiwiZW5yb2xsbWVudENvZGUiLCJfZ2NsYXNzcm9vbSIsIl9nY2xhc3MiLCJpc1JlYWR5IiwiZ2NsYXNzcm9vbSIsIml0ZW1zIiwiTWFwIiwidmFsdWVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImNvdXJzZXMiLCJmb3JFYWNoIiwiaXRlbSIsInNldCIsInJlYWR5IiwiUmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9saXN0IiwiX2hvb2tzMiIsIl9lbXB0eSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0aXRsZSIsIkl0ZW1BY3Rpb25zIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfYWN0aW9ucyIsIkl0ZW0iLCJwYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJkZWZhdWx0Iiwia2V5IiwiTGluayIsImhyZWYiLCJfaXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2djbGFzcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbXMvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLFFBQVE7WUFDaEI7WUFFQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQVMsTUFBQSxHQUFB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