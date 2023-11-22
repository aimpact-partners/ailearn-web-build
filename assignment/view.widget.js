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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
        hash: 905382602,
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
            console.log(100, `/assignments/list/${store.model.id}`);
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'],
              /**
               * the assignment list is not available now. so we don't add the link to the assignment list
               */
              // ['Assignment', `/assignments/list/${store.assignmentId}`]
              ['Assignment', `/`]]
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
        hash: 3356637032,
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
            }, applyEllipsis(item.description, 85)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJBc3NpZ25tZW50IiwiUmVhY3RpdmVNb2RlbCIsImFjdGl2aXRpZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZmV0Y2hpbmciLCJzZXRUaW1lb3V0IiwiZ2V0SXRlbXMiLCJyZWFkeSIsImlkIiwidHlwZSIsInRpdGxlIiwic3VidHlwZSIsIl9jb3JlIiwiX2NvcmUyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwicmVzb2x2ZSIsIl9yZWFjdCIsIkFzc2lnbm1lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwibW9kdWxlIiwiY2xhc3NOYW1lIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCIsImRpdmlkZXJUaXRsZSIsIkJ1dHRvbiIsIkFsZXJ0IiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwicmVuZGVyZWRJdGVtcyIsIm9yZGVyIiwibWFwIiwiaW5kZXgiLCJJdGVtIiwiaXRlbSIsImtleSIsImFwcGx5RWxsaXBzaXMiLCJ0ZXh0IiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic2xpY2UiLCJ1cmwiLCJjaGF0IiwiZGF0YSIsImNsYXNzcm9vbSIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsInRleHRDb3VudGVyIiwidG9waWNzIiwibW9kdWxlU3VidGl0bGVUZXh0IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJ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