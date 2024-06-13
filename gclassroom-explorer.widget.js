System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.46.dev-20/model/gclassroom", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/core", "dayjs@1.11.10", "react@18.2.0", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.46.dev-20/model/wrapper", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Explorer: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnApp0046Dev20ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp0046Dev20ModelGclassroom;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_9 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0046Dev20ModelWrapper) {
      dependency_13 = _aimpactAilearnApp0046Dev20ModelWrapper;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-20"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/model/wrapper', dependency_13], ['@beyond-js/kernel/routing', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-20/gclassroom-explorer.widget');
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
        hash: 825742320,
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
        hash: 3368083101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Explorer = Explorer;
          var _empty = require("./empty");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("./list");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function Explorer({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => {
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
        hash: 3797049068,
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
              href: `/assignments/${item.id}/student/list`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9nY2xhc3Nyb29tIiwiX2RheWpzIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJjbGFzc2VzIiwidmFsdWVzIiwibGFzdFRpbWUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWRDbGFzc2VzIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiI2luaXQiLCJjdXJyZW50VGltZSIsImRlZmF1bHQiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsInNpemUiLCJyZWFkeSIsImRpZmYiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJfZW1wdHkiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiX3dyYXBwZXIiLCJfYWN0aW9ucyIsIl9yb3V0aW5nIiwiSXRlbSIsInBhdGhuYW1lIiwicm91dGluZyIsInVyaSIsImlkIiwiZXZlbnQiLCJBaWxlYXJuV3JhcHBlciIsInNldENsYXNzcm9vbSIsImtleSIsIkxpbmsiLCJocmVmIiwibmFtZSIsIl9pdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sUUFBUTtZQUNoQjs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxH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