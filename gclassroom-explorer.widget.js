System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.3/hooks", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_9 = _pragmateUi003Icons;
    }, function (_aimpactChat101UiManager) {
      dependency_10 = _aimpactChat101UiManager;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_13 = _beyondJsReact18Widgets103Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
          const ExplorerContext = exports.ExplorerContext = _react.default.createContext({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9nY2xhc3Nyb29tIiwiX2RheWpzIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJjbGFzc2VzIiwidmFsdWVzIiwibGFzdFRpbWUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWRDbGFzc2VzIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiI2luaXQiLCJjdXJyZW50VGltZSIsImRlZmF1bHQiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsInNpemUiLCJyZWFkeSIsImRpZmYiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2xpc3QiLCJfaG9va3MyIiwiX2VtcHR5Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJkaWFsb2dSZWYiLCJ1c2VSZWYiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiX3JvdXRpbmciLCJfYWN0aW9ucyIsIkl0ZW0iLCJwYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJpZCIsImtleSIsIkxpbmsiLCJocmVmIiwibmFtZSIsIl9pdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sUUFBUTtZQUNoQjs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFB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