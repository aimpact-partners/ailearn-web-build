System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    EmptyList: void 0,
    List: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/image', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignment/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2589136423,
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
              globalThis.store = this.#store;
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
        hash: 1617333252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _core2 = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                _coinsLayout.LayoutBroker.clear();
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
        hash: 1178746335,
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
          var _image = require("pragmate-ui/image");
          function Header() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [showMessage, setShowMessage] = _react.default.useState(false);
            const {
              title,
              description,
              objective,
              picture
            } = store.model.module;
            const onClick = async () => {
              setFetching(true);
              await store.access();
              setFetching(false);
              setShowMessage(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1"
            }, description)), _react.default.createElement(_ui.SubDivider, {
              title: texts.activities.title
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
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
        hash: 1940669299,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const setBreadcrumb = texts => {
              _coinsLayout.LayoutBroker.breadcrumb = [[texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']];
            };
            const [textsReady, texts] = (0, _ui.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            const [, setItems] = _react.default.useState(store.model.items);
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
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
        hash: 394293936,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function List() {
            const {
              activities
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.ListContainer, {
              items: activities.items,
              control: _item.Item
            });
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 723364855,
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
            data: item,
            index
          }) {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const type = item.type === 'multiple-choice' ? 'assessment' : item.type;
            let url = `/assignments/${store.assignmentId}/${type}/${item.id}`;
            if (!!access && ['conversation', 'content-theory', 'debate', 'character-talk'].includes(item.type)) {
              url += `/chat/${item.chat.id}`;
            }
            const data = {
              classroom: 'Classroom',
              image: item.picture
            };
            const numberingItem = index + 1;
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url,
              disabled: !access
            }, _react.default.createElement(_ui.CardContent, {
              option: "column"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover"
            }, texts.textCounter, numberingItem), _react.default.createElement("h4", {
              className: "card__title mt-10"
            }, item.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, item.description)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfY29yZSIsIl9jb3JlMiIsIl9tb2RlbCIsIl9jb2luc0xheW91dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFjY2Vzc2VkIiwiYXNzaWdubWVudElkIiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIkFzc2lnbm1lbnQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIl9yZWFjdCIsIkFzc2lnbm1lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2ltYWdlIiwiSGVhZGVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInBpY3R1cmUiLCJtb2R1bGUiLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJTdWJEaXZpZGVyIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2xpc3QiLCJzZXRSZWFkeSIsInNldEJyZWFkY3J1bWIiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiQ29udHJvbCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZUNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJpbmNsdWRlcyIsImNoYXQiLCJjbGFzc3Jvb20iLCJpbWFnZSIsIm51bWJlcmluZ0l0ZW0iLCJDYXJkIiwibGluayIsImRpc2FibGVkIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJ0ZXh0Q291bnRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFF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