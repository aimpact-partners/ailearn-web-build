System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/ailearn-app@0.0.14/model/gclassroom", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/ailearn-app@0.0.14/model/wrapper", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0014ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp0014ModelGclassroom;
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
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactAilearnApp0014ModelWrapper) {
      dependency_14 = _aimpactAilearnApp0014ModelWrapper;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/ui/manager', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/model/wrapper', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/gclassroom-explorer.widget');
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
        hash: 977238362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          const Item = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            //const chatId = pathname.split('/')[2];
            let chatId = 'any';
            const isCurrent = chatId === item.id;
            const onClick = event => {
              _wrapper.AilearnWrapper.setClassroom(item);
            };
            return _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/list/${item.id}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9nY2xhc3Nyb29tIiwiX2RheWpzIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJjbGFzc2VzIiwidmFsdWVzIiwibGFzdFRpbWUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWRDbGFzc2VzIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiI2luaXQiLCJjdXJyZW50VGltZSIsImRlZmF1bHQiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsInNpemUiLCJyZWFkeSIsImRpZmYiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2xpc3QiLCJfaG9va3MyIiwiX2VtcHR5Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJkaWFsb2dSZWYiLCJ1c2VSZWYiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiX3dyYXBwZXIiLCJfYWN0aW9ucyIsIl9yb3V0aW5nIiwiSXRlbSIsInBhdGhuYW1lIiwicm91dGluZyIsInVyaSIsImlkIiwiZXZlbnQiLCJBaWxlYXJuV3JhcHBlciIsInNldENsYXNzcm9vbSIsImtleSIsIkxpbmsiLCJocmVmIiwibmFtZSIsIl9pdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxRQUFRO1lBQ2hCOztVQUNBQyxPQUFBLENBQUFQLFVBQUEs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