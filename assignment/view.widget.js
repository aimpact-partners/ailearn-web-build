System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.0-dev.02/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.0-dev.02/components/ui", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AccessDenied: void 0,
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
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp010Dev02MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp010Dev02MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta1Image) {
      dependency_11 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp010Dev02ComponentsUi) {
      dependency_12 = _aimpactAilearnApp010Dev02ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_14 = _pragmateUi100Beta1Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1List) {
      dependency_16 = _pragmateUi100Beta1List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.02"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.02/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['react', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/list', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.02/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.02/assignment/view.widget');
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
        hash: 3444569887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              return this.#model?.accessed;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            get accessDenied() {
              return ['not_member', 'pending', 'invited'].includes(this.#model?.access);
            }
            /**
             * the id returned in the assignment load method represents the tracking id.
             * we store the assignment id in this property.
             */
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            get found() {
              return this.#model.found;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                _mainLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  assignmentId: id
                });
                this.#model.on('change', this.triggerEvent);
                await this.#model.load({
                  id
                });
                globalThis.m = this.#model;
                // pending
                if (['not_member', 'pending', 'invited'].includes(this.#model.access)) {
                  super.ready = true;
                  return;
                }
              } catch (e) {
                console.error(e);
                if (e.message === '403') {
                  console.log('no cargo');
                  return;
                }
              } finally {
                super.ready = true;
                this.triggerEvent();
              }
            }
            async access() {
              try {
                const promise = new _core.PendingPromise();
                await this.#model.accessToAssignment();
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
            async requestAccess() {
              const response = this.model.requestClassroomAccess();
              if (response.data.status.toLowerCase() === 'authorized') {
                console.log(22, 'a', false);
              }
              return response;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/access-denied
      *************************************/

      ims.set('./views/access-denied', {
        hash: 481625782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccessDenied = AccessDenied;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          function AccessDenied({
            store
          }) {
            const {
              texts
            } = store;
            const {
              title,
              action,
              description,
              subtitle
            } = texts[store.model?.access] ?? 'not_allowed';
            const [error, setError] = _react.default.useState();
            const [message, setMessage] = _react.default.useState();
            const [processing, setProcessing] = _react.default.useState(false);
            const onRequest = async () => {
              setProcessing(true);
              try {
                const response = await store.requestAccess();
                if (!response.status) {
                  setError(response.error);
                  return;
                }
                setMessage(response.data.message);
              } catch (e) {} finally {
                setProcessing(false);
              }
            };
            const disabled = {
              disabled: processing
            };
            const {
              classroom,
              module
            } = store.model.assignment;
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, error && _react.default.createElement(_alert.Alert, {
              type: "danger"
            }, error), message && _react.default.createElement(_alert.Alert, {
              type: "success"
            }, message), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, title), _react.default.createElement("h5", null, subtitle)), classroom && module && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "access-classroom__container"
            }, _react.default.createElement("section", null, _react.default.createElement(_image.Image, {
              src: classroom.picture,
              alt: classroom.name
            })), _react.default.createElement("section", null, _react.default.createElement("h3", null, classroom?.name), _react.default.createElement("h6", null, module?.title)))), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onRequest,
              fetching: processing,
              ...disabled
            }, action))), _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: "/assets/images/students/not-allowed.webp",
              alt: "Student does not have access",
              className: "img-100"
            })));
          }
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
        hash: 2400834756,
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
            const {
              title,
              description,
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
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1"
            }, description)), _react.default.createElement(_ui.PageTitle, {
              as: "h3",
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
        hash: 1206388655,
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
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _preload = require("./preload");
          var _accessDenied = require("./access-denied");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [, setItems] = _react.default.useState(store.model.items);
            const [access, setAccess] = _react.default.useState(store.model.accessed);
            const [accessPermission, setAccessPermission] = _react.default.useState(store.model.access);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
              setAccessPermission(store.model.access);
              setAccess(store.accessed);
            });
            console.log('renderizamos', ready, store.found, store.accessDenied);
            if (ready && store.accessDenied) return _react.default.createElement(_accessDenied.AccessDenied, {
              store: store
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_preload.Preload, null);
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
        hash: 3947671626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function List() {
            const {
              activities
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_list.List, {
              className: "list__container",
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

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 3672949900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("./context");
          function Preload() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              className: "entity-image image--preload"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "100px"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "200px"
            })), _react.default.createElement(_ui.PageTitle, {
              preload: true
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/access-denied",
        "from": "AccessDenied",
        "name": "AccessDenied"
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
        (require || prop === 'AccessDenied') && _export("AccessDenied", AccessDenied = require ? require('./views/access-denied').AccessDenied : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFjY2Vzc2VkIiwicmVhZHkiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsImFzc2lnbm1lbnRJZCIsImZvdW5kIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsIm0iLCJlIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVxdWVzdEFjY2VzcyIsInJlc3BvbnNlIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJ0b0xvd2VyQ2FzZSIsIl9yZWFjdCIsIl9pbWFnZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiQWNjZXNzRGVuaWVkIiwidGl0bGUiLCJhY3Rpb24iLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwic2V0RXJyb3IiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRNZXNzYWdlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvblJlcXVlc3QiLCJkaXNhYmxlZCIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZmV0Y2hpbmciLCJBc3NpZ25tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX3ByZWxvYWQiLCJfYWNjZXNzRGVuaWVkIiwic2V0UmVhZHkiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwiYWNjZXNzUGVybWlzc2lvbiIsInNldEFjY2Vzc1Blcm1pc3Npb24iLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiQ29udHJvbCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIm51bWJlcmluZ0l0ZW0iLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByZWxvYWQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBYyxTQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQWtCLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIs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