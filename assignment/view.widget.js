System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.24/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, EmptyList, List, Item, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024Config) {
      dependency_13 = _aimpactAilearnApp0024Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13]]);
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
        hash: 4181626570,
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
          var _config = require("@aimpact/ailearn-app/config");
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
            }, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignment, '']]
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
        hash: 372601195,
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
            let url = `/assignments/${store.assignmentId}/${type}/${item.id}?`;
            if (!!access && ['conversation', 'content-theory', 'debate', 'character-talk'].includes(item.type)) {
              url = `/assignments/${store.assignmentId}/activity/${item.id}/chat/${item.chat.id}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX2NvcmUyIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWNjZXNzZWQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkFzc2lnbm1lbnQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsInRpdGxlIiwibW9kdWxlIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwidGl0bGVUZXh0IiwiZGl2aWRlclRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiQWxlcnQiLCJ0eXBlIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9saXN0IiwiX2NvbmZpZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJhY3Rpdml0aWVzIiwiQ29udHJvbCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiaW5jbHVkZXMiLCJjaGF0IiwiY2xhc3Nyb29tIiwiaW1hZ2UiLCJwaWN0dXJlIiwibnVtYmVyaW5nSXRlbSIsIkNhcmQiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsInRleHRDb3VudGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxD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