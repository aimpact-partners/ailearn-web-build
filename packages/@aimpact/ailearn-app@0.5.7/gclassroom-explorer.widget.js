System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.5.7/model/gclassroom", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/core", "dayjs@1.11.13", "react@18.3.1", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.5.7/model/wrapper", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Explorer: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_3 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactAilearnApp057ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp057ModelGclassroom;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Core) {
      dependency_6 = _aimpactChatSdk155Core;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi106Icons) {
      dependency_9 = _pragmateUi106Icons;
    }, function (_pragmateUi106Components) {
      dependency_10 = _pragmateUi106Components;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_12 = _aimpactAilearnApp057ModelWrapper;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/kernel/routing', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/gclassroom-explorer.widget');
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
        hash: 1285394067,
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
          /*bundle*/
          function Explorer({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9nY2xhc3Nyb29tIiwiX2RheWpzIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJjbGFzc2VzIiwidmFsdWVzIiwibGFzdFRpbWUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWRDbGFzc2VzIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiI2luaXQiLCJjdXJyZW50VGltZSIsImRlZmF1bHQiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsInNpemUiLCJyZWFkeSIsImRpZmYiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJfZW1wdHkiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwidGl0bGUiLCJJY29uQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJfd3JhcHBlciIsIl9hY3Rpb25zIiwiX3JvdXRpbmciLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwiaWQiLCJldmVudCIsIkFpbGVhcm5XcmFwcGVyIiwic2V0Q2xhc3Nyb29tIiwia2V5IiwiTGluayIsImhyZWYiLCJuYW1lIiwiX2l0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJtYXAiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaXRlbXMvYWN0aW9ucy50c3giLCIvL3RzL3ZpZXdzL2l0ZW1zL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxRQUFRO1lBQ2hCOztVQUNBQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxNQUFBLEdBQUFY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