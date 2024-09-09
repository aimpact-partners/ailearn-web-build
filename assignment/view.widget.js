System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.21/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev21MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp016Dev21MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_10 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_13 = _pragmateUi100Beta6Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_15 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/assignment/view.widget');
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
        hash: 1785392806,
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
              return ['not_member', 'pending', 'invited'].includes(this.#model?.access?.toLowerCase());
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
            #id;
            get id() {
              return this.#id;
            }
            async load(id) {
              try {
                this.#id = id;
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
                if (e.message === '404') {
                  return;
                }
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
              const response = await this.model.requestClassroomAccess();
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
        hash: 3652787582,
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
            const status = store.model?.access?.toLowerCase();
            const {
              title,
              action,
              description,
              subtitle
            } = texts[status] ?? 'not_allowed';
            const [error, setError] = _react.default.useState();
            const [message, setMessage] = _react.default.useState();
            const [processing, setProcessing] = _react.default.useState(false);
            const onRequest = async () => {
              try {
                setProcessing(true);
                if (status === 'pending') {
                  await store.load(store.id);
                  return;
                }
                const response = await store.requestAccess();
                if (!response.status) {
                  setError(response.error);
                  return;
                }
                setMessage(response.data.message);
              } catch (e) {
                console.error(e);
              } finally {
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
        hash: 2341613247,
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
            if (ready && store.accessDenied) return _react.default.createElement(_accessDenied.AccessDenied, {
              store: store
            });
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFjY2Vzc2VkIiwicmVhZHkiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiYXNzaWdubWVudElkIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwibSIsImUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZXF1ZXN0QWNjZXNzIiwicmVzcG9uc2UiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiX3JlYWN0IiwiX2ltYWdlIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJBY2Nlc3NEZW5pZWQiLCJzdGF0dXMiLCJ0aXRsZSIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZmV0Y2hpbmciLCJBc3NpZ25tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiX2hvb2tzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX3ByZWxvYWQiLCJfYWNjZXNzRGVuaWVkIiwic2V0UmVhZHkiLCJzZXRJdGVtcyIsIml0ZW1zIiwic2V0QWNjZXNzIiwiYWNjZXNzUGVybWlzc2lvbiIsInNldEFjY2Vzc1Blcm1pc3Npb24iLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiQ29udHJvbCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIm51bWJlcmluZ0l0ZW0iLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByZWxvYWQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQWMsU0FBQSxHQUFBakIsT0FBQTtVQUVBLElBQUFrQixLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1B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