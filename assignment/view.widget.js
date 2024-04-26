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
        hash: 571660727,
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
            }), _react.default.createElement("h1", null, title)), _react.default.createElement("div", {
              className: "module-description__container"
            }, _react.default.createElement("h4", null, texts.module.objective), _react.default.createElement("span", {
              className: "p1"
            }, objective), _react.default.createElement("h4", null, texts.module.description), _react.default.createElement("span", {
              className: "p1"
            }, description)), _react.default.createElement("div", {
              className: "mt-15 flex-vertical-center flex"
            }, _react.default.createElement(_ui.SubDivider, {
              title: texts.activities.title
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
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
        hash: 1160400029,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfY29yZSIsIl9jb3JlMiIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFjY2Vzc2VkIiwiYXNzaWdubWVudElkIiwiaWQiLCJBc3NpZ25tZW50IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXNzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9pbWFnZSIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJwaWN0dXJlIiwibW9kdWxlIiwib25DbGljayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiU3ViRGl2aWRlciIsImFjdGl2aXRpZXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiQWxlcnQiLCJ0eXBlIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9saXN0IiwiX2NvaW5zTGF5b3V0Iiwic2V0UmVhZHkiLCJzZXRCcmVhZGNydW1iIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiaW5jbHVkZXMiLCJjaGF0IiwiY2xhc3Nyb29tIiwiaW1hZ2UiLCJudW1iZXJpbmdJdGVtIiwiQ2FyZCIsImxpbmsiLCJkaXNhYmxlZCIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxN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