System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/components/ui", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Assignment, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Assignment: void 0,
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Empty) {
      dependency_13 = _pragmateUi003Empty;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/empty', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignment/view.widget",
        "is": "page",
        "route": "/assignment/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignment/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2972444672,
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1972001805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class Assignment extends _model.ReactiveModel {
            #activities;
            name;
            description;
            get activities() {
              return this.#activities;
            }
            constructor(props) {
              super(props);
            }
            load() {
              this.fetching = true;
              setTimeout(() => {
                this.#activities = this.getItems();
                this.ready = true;
                this.fetching = false;
              }, 1400);
            }
            getItems() {
              return [{
                id: 'q&a',
                type: 'conversation',
                title: 'conversation',
                description: 'A short description heree',
                subtype: 'any subtype'
              }, {
                id: 'all-in-one',
                type: 'all-in-one',
                subtype: 'any subtype',
                description: 'A short description heree',
                name: 'Exercise all in one'
              }, {
                id: 'assessment',
                type: 'assessment',
                description: 'A short description heree',
                name: 'Name of asssessment evaluation',
                subtype: 'any subtype'
              }];
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2125175883,
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
        hash: 2328404117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
          var _beyond_context = require("beyond_context");
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
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/list/${store.model.id}`], ['Class', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: 'content-container'
            }, _react.default.createElement("div", {
              className: 'content-container__left'
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)), _react.default.createElement("div", {
              className: 'content-container__right'
            }, _react.default.createElement("div", {
              className: 'text-container__classroom'
            }, _react.default.createElement("h5", {
              className: 'text-title__content pt-20 h3'
            }, "Google Classroom"), _react.default.createElement("br", null), _react.default.createElement("p", {
              className: 'text-p__content '
            }, texts.textClassroom), _react.default.createElement("p", {
              className: 'text-pb__content pt-10 pb-40'
            }, texts.spanClassroom)), _react.default.createElement("div", {
              className: 'text-container__info'
            }, _react.default.createElement("h5", {
              className: 'text-title__content h3'
            }, texts.titleInfo), _react.default.createElement("br", null), _react.default.createElement("p", {
              className: 'text-p__content'
            }, texts.spanInfo))))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 2545339384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("../context");
          /*bundle*/
          function EmptyList() {
            const {
              texts
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_empty.Empty, {
              message: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 720379765,
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
            const renderedItems = activities.order.map((id, index) => _react.default.createElement(_item.Item, {
              item: activities.items[id],
              key: id,
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
        hash: 3925116320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          function applyEllipsis(text, maxLength) {
            return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
          }
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
            if (!!access && item.type === 'conversation') url = `/chat/${item.chat.id}`;
            const data = {
              classroom: 'Classroom',
              image: item.picture
            };
            const staticDescription = 'Missing: Descripción del objetivo de aprendizaje';
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url,
              disabled: !access
            }, _react.default.createElement(_ui.CardContent, {
              option: 1,
              className: 'theme-0'
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover"
            }, texts.textCounter, index), _react.default.createElement("h5", {
              className: "card__title h3 mt-10"
            }, applyEllipsis(item.title, 55)), _react.default.createElement("span", {
              className: "card__subtitle disabled-text"
            }, applyEllipsis(staticDescription, 135)), _react.default.createElement("div", {
              className: 'card__footer-actions'
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
        "im": "./model",
        "from": "Assignment",
        "name": "Assignment"
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
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./model').Assignment : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJBc3NpZ25tZW50IiwiUmVhY3RpdmVNb2RlbCIsImFjdGl2aXRpZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZmV0Y2hpbmciLCJzZXRUaW1lb3V0IiwiZ2V0SXRlbXMiLCJyZWFkeSIsImlkIiwidHlwZSIsInRpdGxlIiwic3VidHlwZSIsIl9jb3JlIiwiX2NvcmUyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwicmVzb2x2ZSIsIl9yZWFjdCIsIkFzc2lnbm1lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwibW9kdWxlIiwiY2xhc3NOYW1lIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCIsImRpdmlkZXJUaXRsZSIsIkJ1dHRvbiIsIkFsZXJ0IiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsInRleHRDbGFzc3Jvb20iLCJzcGFuQ2xhc3Nyb29tIiwidGl0bGVJbmZvIiwic3BhbkluZm8iLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsInJlbmRlcmVkSXRlbXMiLCJvcmRlciIsIm1hcCIsImluZGV4IiwiSXRlbSIsIml0ZW0iLCJrZXkiLCJhcHBseUVsbGlwc2lzIiwidGV4dCIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwidXJsIiwiY2hhdCIsImRhdGEiLCJjbGFzc3Jvb20iLCJpbWFnZSIsInBpY3R1cmUiLCJzdGF0aWNEZXNjcmlwdGlvbiIsIkNhcmQiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsInRleHRDb3VudGVyIiwidG9waWNzIiwibW9kdWxlU3VidGl0bGVUZXh0IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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