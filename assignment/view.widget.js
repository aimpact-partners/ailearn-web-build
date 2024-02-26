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
        hash: 1018961349,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX2NvcmUyIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWNjZXNzZWQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkFzc2lnbm1lbnQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY2Nlc3MiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsInRpdGxlIiwibW9kdWxlIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwidGl0bGVUZXh0IiwiZGl2aWRlclRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiQWxlcnQiLCJ0eXBlIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9saXN0Iiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImFjdGl2aXRpZXMiLCJDb250cm9sIiwiTGlzdCIsIkVtcHR5TGlzdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiaW5jbHVkZXMiLCJjaGF0IiwiY2xhc3Nyb29tIiwiaW1hZ2UiLCJwaWN0dXJlIiwibnVtYmVyaW5nSXRlbSIsIkNhcmQiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsInRleHRDb3VudGVyIiwidG9waWNzIiwibGVuZ3RoIiwibW9kdWxlU3VidGl0bGVUZXh0IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFK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