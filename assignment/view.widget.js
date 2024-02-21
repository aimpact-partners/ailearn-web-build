System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_6 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Alert) {
      dependency_9 = _pragmateUi006Alert;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignment/view.widget');
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
        hash: 624435540,
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
            return _react.default.createElement("div", null, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: store.model.module.title
            }, _react.default.createElement("p", {
              className: "header-container__subtitle"
            }, _react.default.createElement("span", {
              className: "header-container__subtitle-span"
            }, store.model.module.description))), _react.default.createElement("div", {
              className: "mt-15 flex-vertical-center flex"
            }, _react.default.createElement(_ui.SubDivider, {
              titleText: texts.dividerTitle
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              fetching: fetching,
              onClick: onClick
            }, texts.access))), showMessage && _react.default.createElement(_alert.Alert, {
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
        hash: 3347090886,
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
        hash: 1949161408,
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
            let url = `/assignments/${store.assignmentId}/${item.type}/${item.id}?`;
            if (!!access && item.type === 'conversation') url = `/assignments/${store.assignmentId}/activity/${item.id}/chat/${item.chat.id}`;
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
              option: "column",
              className: "theme-0"
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
            }, item.description))), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover p2"
            }, item?.topics?.length, " ", texts.moduleSubtitleText), access && _react.default.createElement("span", {
              className: "card__text-hover p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX2NvcmUyIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWNjZXNzZWQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkFzc2lnbm1lbnQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsInRpdGxlIiwibW9kdWxlIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwidGl0bGVUZXh0IiwiZGl2aWRlclRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiQWxlcnQiLCJ0eXBlIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9saXN0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImFjdGl2aXRpZXMiLCJDb250cm9sIiwiTGlzdCIsIkVtcHR5TGlzdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsImNsYXNzcm9vbSIsImltYWdlIiwicGljdHVyZSIsIm51bWJlcmluZ0l0ZW0iLCJDYXJkIiwibGluayIsImRpc2FibGVkIiwiQ2FyZENvbnRlbnQiLCJ0ZXh0Q291bnRlciIsInRvcGljcyIsImxlbmd0aCIsIm1vZHVsZVN1YnRpdGxlVGV4dCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFL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