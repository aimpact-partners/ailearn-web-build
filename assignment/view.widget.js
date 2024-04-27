System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget"], function (_export, _context2) {
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
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_9 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_14 = _aimpactAilearnApp0032CoinsLayoutWidget;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/image', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/ailearn-app/coins-layout.widget', dependency_14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfY29yZSIsIl9jb3JlMiIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFjY2Vzc2VkIiwiYXNzaWdubWVudElkIiwiaWQiLCJBc3NpZ25tZW50IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXNzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9pbWFnZSIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJwaWN0dXJlIiwibW9kdWxlIiwib25DbGljayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiU3ViRGl2aWRlciIsImFjdGl2aXRpZXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiQWxlcnQiLCJ0eXBlIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9saXN0IiwiX2NvaW5zTGF5b3V0Iiwic2V0UmVhZHkiLCJzZXRCcmVhZGNydW1iIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiaW5jbHVkZXMiLCJjaGF0IiwiY2xhc3Nyb29tIiwiaW1hZ2UiLCJudW1iZXJpbmdJdGVtIiwiQ2FyZCIsImxpbmsiLCJkaXNhYmxlZCIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUdNLE1BQU9PLFlBQWEsU0FBUVksTUFBQSxDQUFBQyxhQUFxQjtZQUN0RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQTs7OztZQUtBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLE1BQU1YLElBQUlBLENBQUNZLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBRCxZQUFhLEdBQUdDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosS0FBQSxDQUFBUSxVQUFVLENBQUM7a0JBQUVEO2dCQUFFLENBQUUsQ0FBQztnQkFFcEMsTUFBTSxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDVCxJQUFJLENBQUM7a0JBQUVZO2dCQUFFLENBQUUsQ0FBQztnQkFFOUIsSUFBSSxDQUFDLENBQUFGLFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxRQUFRO2dCQUVyQyxJQUFJLENBQUNJLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxNQUFNQyxPQUFPLEdBQUcsSUFBSWQsTUFBQSxDQUFBZSxjQUFjLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ1UsTUFBTSxFQUFFO2dCQUMxQjs7Ozs7Z0JBS0F2QixVQUFVLENBQUMwQixVQUFVLENBQUMsTUFBSztrQkFDMUIsSUFBSSxDQUFDLENBQUFaLFFBQVMsR0FBRyxJQUFJO2tCQUNyQixJQUFJLENBQUNLLFlBQVksRUFBRTtrQkFDbkJLLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDUixPQUFPSCxPQUFPO2VBQ2QsQ0FBQyxPQUFPSixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBWixPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REQsSUFBQTZCLE1BQUEsR0FBQXBDLE9BQUE7VUFhTyxNQUFNcUMsaUJBQWlCLEdBQUFyQixPQUFBLENBQUFxQixpQkFBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDdkUsTUFBTUMsb0JBQW9CLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osaUJBQWlCLENBQUM7VUFBQ3JCLE9BQUEsQ0FBQXdCLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2Q5RSxJQUFBRSxHQUFBLEdBQUExQyxPQUFBO1VBRUEsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBNEMsV0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFvQyxNQUFBLEdBQUFwQyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBOEMsTUFBQSxHQUFBOUMsT0FBQTtVQUVNLFNBQVUrQyxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRTFDLEtBQUs7Y0FBRTJDLEtBQUs7Y0FBRWpCO1lBQU0sQ0FBRSxHQUFHLElBQUFjLFFBQUEsQ0FBQUwsb0JBQW9CLEdBQUU7WUFDdkQsTUFBTSxDQUFDUyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHZCxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdqQixNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMzRCxNQUFNO2NBQUVHLEtBQUs7Y0FBRUMsV0FBVztjQUFFQyxTQUFTO2NBQUVDO1lBQU8sQ0FBRSxHQUFHcEQsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDcUMsTUFBTTtZQUNyRSxNQUFNQyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCVCxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU03QyxLQUFLLENBQUMwQixNQUFNLEVBQUU7Y0FDcEJtQixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCRyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxPQUNDakIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUF4QixNQUFBLENBQUFFLE9BQUEsQ0FBQXVCLFFBQUEsUUFDQ3pCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBa0IsR0FDbkMxQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2QsTUFBQSxDQUFBaUIsS0FBSztjQUFDQyxHQUFHLEVBQUVQLE9BQU87Y0FBRVEsR0FBRyxFQUFFWDtZQUFLLEVBQUksRUFDbkNsQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsYUFBS04sS0FBSyxDQUFNLEVBQ2hCbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFJLEdBQUVQLFdBQVcsQ0FBSyxDQUMzQixFQUVUbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUNsQixHQUFBLENBQUF3QixVQUFVO2NBQUNaLEtBQUssRUFBRU4sS0FBSyxDQUFDbUIsVUFBVSxDQUFDYjtZQUFLLEdBQ3ZDLENBQUN2QixNQUFNLElBQUksQ0FBQ3FCLFdBQVcsSUFDdkJoQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQXdCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3BCLFFBQVEsRUFBRUEsUUFBUTtjQUFFVSxPQUFPLEVBQUVBO1lBQU8sR0FDNURYLEtBQUssQ0FBQ2pCLE1BQU0sQ0FFZCxDQUNXLEVBRVpxQixXQUFXLElBQ1hoQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2pCLE1BQUEsQ0FBQTJCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ1QsU0FBUyxFQUFDO1lBQU8sR0FDckNkLEtBQUssQ0FBQzFCLFFBQVEsQ0FFaEIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBYyxNQUFBLEdBQUFwQyxPQUFBO1VBQ0EsSUFBQTBDLEdBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQTRDLFdBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBeUUsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxPQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLGVBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsS0FBQSxHQUFBNUUsT0FBQTtVQUVBLElBQUE2RSxZQUFBLEdBQUE3RSxPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVMO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDcUIsS0FBSyxFQUFFb0QsUUFBUSxDQUFDLEdBQUcxQyxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDOUMsS0FBSyxDQUFDcUIsS0FBSyxDQUFDO1lBQ3JELE1BQU1xRCxhQUFhLEdBQUcvQixLQUFLLElBQUc7Y0FDN0I2QixZQUFBLENBQUFHLFlBQVksQ0FBQ0MsVUFBVSxHQUFHLENBQ3pCLENBQUNqQyxLQUFLLENBQUNpQyxVQUFVLENBQUNDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQ2xDLEtBQUssQ0FBQ2lDLFVBQVUsQ0FBQ0UsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUNqQztZQUNGLENBQUM7WUFDRCxNQUFNLENBQUNDLFVBQVUsRUFBRXBDLEtBQUssQ0FBQyxHQUFHLElBQUFOLEdBQUEsQ0FBQTJDLGdCQUFnQixFQUFDVixlQUFBLENBQUFqQixNQUFNLENBQUM0QixTQUFTLEVBQUVQLGFBQWEsQ0FBQztZQUM3RSxNQUFNLEdBQUdRLFFBQVEsQ0FBQyxHQUFHbkQsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQzlDLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ21FLEtBQUssQ0FBQztZQUN0RCxNQUFNLENBQUN6RCxNQUFNLEVBQUUwRCxTQUFTLENBQUMsR0FBR3JELE1BQUEsQ0FBQUUsT0FBSyxDQUFDYSxRQUFRLENBQUM5QyxLQUFLLENBQUNnQixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUNoRSxJQUFBa0QsTUFBQSxDQUFBa0IsU0FBUyxFQUFDLENBQUNyRixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCeUUsUUFBUSxDQUFDekUsS0FBSyxDQUFDcUIsS0FBSyxDQUFDO2NBQ3JCNkQsUUFBUSxDQUFDbEYsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDbUUsS0FBSyxDQUFDO2NBQzNCQyxTQUFTLENBQUNwRixLQUFLLENBQUNpQixRQUFRLENBQUM7WUFDMUIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDSSxLQUFLLElBQUksQ0FBQzBELFVBQVUsRUFBRSxPQUFPaEQsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUNoQixXQUFBLENBQUErQyxhQUFhLE9BQUc7WUFFbkQsTUFBTTtjQUFFeEI7WUFBVSxDQUFFLEdBQUc5RCxLQUFLLENBQUNnQixLQUFLO1lBRWxDLE1BQU11RSxPQUFPLEdBQUd6QixVQUFVLENBQUNxQixLQUFLLEdBQUdaLEtBQUEsQ0FBQWlCLElBQUksR0FBR3BCLE1BQUEsQ0FBQXFCLFNBQVM7WUFDbkQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCL0MsS0FBSztjQUNMQyxRQUFRLEVBQUU1QyxLQUFLLENBQUM0QyxRQUFRO2NBQ3hCNUMsS0FBSztjQUNMOEQsVUFBVTtjQUNWcEM7YUFDQTtZQUVELE9BQ0NLLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQSxDQUFDZixRQUFBLENBQUFSLGlCQUFpQixDQUFDMkQsUUFBUTtjQUFDQyxLQUFLLEVBQUVGO1lBQVksR0FDOUMzRCxNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXdELGFBQWEsUUFDYjlELE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakMxQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBM0IsTUFBTSxPQUFHLEVBQ1ZYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQSxDQUFDZ0MsT0FBTyxPQUFHLENBQ04sQ0FDUyxDQUNZO1VBRS9COzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBeEQsTUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUEwQyxHQUFBLEdBQUExQyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFFTztVQUFVLFNBQVU4RixTQUFTQSxDQUFBO1lBQ25DLE1BQU07Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUwsb0JBQW9CLEdBQUU7WUFDeEMsT0FBT0osTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUNsQixHQUFBLENBQUF5RCxTQUFTO2NBQUNDLElBQUksRUFBRXBELEtBQUssQ0FBQ3FELEtBQUs7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sRUFBRztVQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBQyxLQUFBLEdBQUF2RyxPQUFBO1VBQ0EsSUFBQW9DLE1BQUEsR0FBQXBDLE9BQUE7VUFDQSxJQUFBNkMsUUFBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUEwQyxHQUFBLEdBQUExQyxPQUFBO1VBQ087VUFBVSxTQUFVNkYsSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUUxQjtZQUFVLENBQUUsR0FBRyxJQUFBdEIsUUFBQSxDQUFBTCxvQkFBb0IsR0FBRTtZQUU3QyxPQUFPSixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQThELGFBQWE7Y0FBQ2hCLEtBQUssRUFBRXJCLFVBQVUsQ0FBQ3FCLEtBQUs7Y0FBRWlCLE9BQU8sRUFBRUYsS0FBQSxDQUFBRztZQUFJLEVBQUk7VUFDakU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQWhFLEdBQUEsR0FBQTFDLE9BQUE7VUFFQSxJQUFBb0MsTUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBRU87VUFBVSxTQUFVMEcsSUFBSUEsQ0FBQztZQUFFQyxJQUFJLEVBQUVDLElBQUk7WUFBRUM7VUFBSyxDQUFFO1lBQ3BELE1BQU07Y0FBRXhHLEtBQUs7Y0FBRTJDLEtBQUs7Y0FBRWpCO1lBQU0sQ0FBRSxHQUFHLElBQUFjLFFBQUEsQ0FBQUwsb0JBQW9CLEdBQUU7WUFFdkQsTUFBTStCLElBQUksR0FBR3FDLElBQUksQ0FBQ3JDLElBQUksS0FBSyxpQkFBaUIsR0FBRyxZQUFZLEdBQUdxQyxJQUFJLENBQUNyQyxJQUFJO1lBQ3ZFLElBQUl1QyxHQUFHLEdBQUcsZ0JBQWdCekcsS0FBSyxDQUFDa0IsWUFBWSxJQUFJZ0QsSUFBSSxJQUFJcUMsSUFBSSxDQUFDcEYsRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxDQUFDTyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUNnRixRQUFRLENBQUNILElBQUksQ0FBQ3JDLElBQUksQ0FBQyxFQUFFO2NBQ25HdUMsR0FBRyxJQUFJLFNBQVNGLElBQUksQ0FBQ0ksSUFBSSxDQUFDeEYsRUFBRSxFQUFFOztZQUUvQixNQUFNbUYsSUFBSSxHQUFHO2NBQ1pNLFNBQVMsRUFBRSxXQUFXO2NBQ3RCQyxLQUFLLEVBQUVOLElBQUksQ0FBQ25EO2FBQ1o7WUFFRCxNQUFNMEQsYUFBYSxHQUFHTixLQUFLLEdBQUcsQ0FBQztZQUUvQixPQUNDekUsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUNsQixHQUFBLENBQUEwRSxJQUFJO2NBQUNULElBQUksRUFBRUEsSUFBSTtjQUFFVSxJQUFJLEVBQUVQLEdBQUc7Y0FBRVEsUUFBUSxFQUFFLENBQUN2RjtZQUFNLEdBQzdDSyxNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQTZFLFdBQVc7Y0FBQ0MsTUFBTSxFQUFDO1lBQVEsR0FDM0JwRixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQXdCLEdBQzFDMUIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFvQixHQUNsQzFCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENkLEtBQUssQ0FBQ3lFLFdBQVcsRUFDakJOLGFBQWEsQ0FDUixFQUNQL0UsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFtQixHQUFFOEMsSUFBSSxDQUFDdEQsS0FBSyxDQUFNLEVBQ25EbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFpQyxHQUFFOEMsSUFBSSxDQUFDckQsV0FBVyxDQUFRLENBQ3RFLENBQ0csQ0FDRyxDQUNSO1VBRVQiLCJpZ25vcmVMaXN0IjpbXX0=