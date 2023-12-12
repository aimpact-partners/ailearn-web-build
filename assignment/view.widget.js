System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.21/components/ui", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    EmptyList: void 0,
    List: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive116Model) {
      dependency_6 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0021ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0021ComponentsUi;
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.21/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.21/assignment/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3781797263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1179330627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _core2 = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            /**
             * the id returned in the assignment load method represents the tracking id.
             * we store the assignment id in this property.
             */
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            async load(id) {
              try {
                this.#assignmentId = id;
                this.#model = new _core.Assignment({
                  id
                });
                await this.#model.load({
                  id
                });
                this.#accessed = this.#model.accessed;
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            async access() {
              try {
                const promise = new _core2.PendingPromise();
                await this.#model.access();
                /**
                 * TODO: Analyze if the setTimeout it's necessary
                 * The original idea is show a loading screen to show
                 * the processing action of the access method.
                 */
                globalThis.setTimeout(() => {
                  this.#accessed = true;
                  this.triggerEvent();
                  promise.resolve(true);
                }, 1500);
                return promise;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 254260041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssignmentContext = exports.AssignmentContext = void 0;
          var _react = require("react");
          const AssignmentContext = exports.AssignmentContext = _react.default.createContext({});
          const useAssignmentContext = () => _react.default.useContext(AssignmentContext);
          exports.useAssignmentContext = useAssignmentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 311896621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [showMessage, setShowMessage] = _react.default.useState(false);
            const onClick = async () => {
              setFetching(true);
              await store.access();
              setFetching(false);
              setShowMessage(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              option: 'light',
              title: store.model.module.title
            }, _react.default.createElement("p", {
              className: "header-container__subtitle"
            }, _react.default.createElement("span", {
              className: "header-container__subtitle-span"
            }, store.model.module.description))), _react.default.createElement(_ui.SubDivider, {
              titleText: texts.dividerTitle
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              fetching: fetching,
              onClick: onClick
            }, texts.access)), showMessage && _react.default.createElement(_alert.Alert, {
              type: "success",
              className: "mt-10"
            }, texts.accessed));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1308355001,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _beyond_context = require("beyond_context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store.model.items);
            const [access, setAccess] = _react.default.useState(store.model.accessed);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
              setAccess(store.accessed);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              activities
            } = store.model;
            const Control = activities.items ? _list.List : _empty.EmptyList;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              activities,
              access
            };
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 2641747395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          /*bundle*/
          function EmptyList() {
            const {
              texts
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2279752466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function List() {
            const {
              activities
            } = (0, _context.useAssignmentContext)();
            const renderedItems = activities.items.map((activity, index) => _react.default.createElement(_item.Item, {
              item: activity,
              key: activity.id,
              index: index + 1
            }));
            return _react.default.createElement("div", {
              className: "list__container"
            }, renderedItems);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 2836296388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Item({
            item,
            index
          }) {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            let url = `/assignments/${store.assignmentId}/${item.type}/${item.id}?`;
            if (!!access && item.type === 'conversation') url = `/assignments/${store.assignmentId}/activity/${item.id}/chat/${item.chat.id}`;
            const data = {
              classroom: 'Classroom',
              image: item.picture
            };
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url,
              disabled: !access
            }, _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover"
            }, texts.textCounter, index), _react.default.createElement("h5", {
              className: "card__title h3 mt-10"
            }, item.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, item.description))), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
              className: "cart__text-non-hover"
            }, item?.topics?.length, " ", texts.moduleSubtitleText), access && _react.default.createElement("p", {
              className: "card__text-hover"
            }, texts.moduleAccess)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/list/empty",
        "from": "EmptyList",
        "name": "EmptyList"
      }, {
        "im": "./views/list/index",
        "from": "List",
        "name": "List"
      }, {
        "im": "./views/list/item",
        "from": "Item",
        "name": "Item"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'EmptyList') && _export("EmptyList", EmptyList = require ? require('./views/list/empty').EmptyList : value);
        (require || prop === 'List') && _export("List", List = require ? require('./views/list/index').List : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./views/list/item').Item : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX2NvcmUyIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWNjZXNzZWQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkFzc2lnbm1lbnQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwidGl0bGUiLCJtb2R1bGUiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJCdXR0b24iLCJBbGVydCIsInR5cGUiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2xpc3QiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIml0ZW1zIiwic2V0SXRlbXMiLCJzZXRBY2Nlc3MiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiYWN0aXZpdGllcyIsIkNvbnRyb2wiLCJMaXN0IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJhY3Rpdml0eSIsImluZGV4IiwiSXRlbSIsIml0ZW0iLCJrZXkiLCJ1cmwiLCJjaGF0IiwiZGF0YSIsImNsYXNzcm9vbSIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsInRleHRDb3VudGVyIiwidG9waWNzIiwibGVuZ3RoIiwibW9kdWxlU3VidGl0bGVUZXh0IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pE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