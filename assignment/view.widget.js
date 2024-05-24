System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, EmptyList, List, Item, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_4 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnApp0034Dev01CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0034Dev01CoinsLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0034Dev01ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_11 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_13 = _pragmateUi011Image;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.34.dev-01"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/alert', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.34.dev-01/assignment/view.widget');
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
        hash: 2512761122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          // import { Assignment } from '@aimpact/ailearn-sdk/core';

          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            /**
             * the id returned in the assignment load method represents the tracking id.
             * we store the assignment id in this property.
             */
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #found;
            get found() {
              return this.#found;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                _coinsLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = new _tracking.Tracking({
                  id
                });
                await this.#model.load({
                  id
                });
                this.#accessed = this.#model.accessed;
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
                super.ready = true;
                this.#found = false;
              }
            }
            async access() {
              try {
                const promise = new _core.PendingPromise();
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
        hash: 225749186,
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
        hash: 390390848,
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
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [, setItems] = _react.default.useState(store.model.items);
            const [access, setAccess] = _react.default.useState(store.model.accessed);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
              setAccess(store.accessed);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
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
        hash: 1960730437,
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
            // const data = {
            // 	classroom: 'Classroom',
            // 	image: item.picture
            // };
            const numberingItem = index + 1;
            return _react.default.createElement(_ui.Card, {
              data: item,
              type: item.type,
              entity: "activity",
              link: url,
              disabled: !access
            }, _react.default.createElement(_ui.CardContent, {
              option: "column"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("span", {
              className: "p2"
            }, texts.textCounter, numberingItem), _react.default.createElement("h6", {
              className: "card__title mt-10"
            }, item.title, " "), _react.default.createElement("span", {
              className: "card__subtitle p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhY2Nlc3NlZCIsInJlYWR5IiwiYXNzaWdubWVudElkIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VzcyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiX3JlYWN0IiwiQXNzaWdubWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaW1hZ2UiLCJIZWFkZXIiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInBpY3R1cmUiLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJTdWJEaXZpZGVyIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiQ29udHJvbCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaXRlbSIsImluZGV4IiwidXJsIiwiaW5jbHVkZXMiLCJjaGF0IiwibnVtYmVyaW5nSXRlbSIsIkNhcmQiLCJlbnRpdHkiLCJsaW5rIiwiZGlzYWJsZWQiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInRleHRDb3VudGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlC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