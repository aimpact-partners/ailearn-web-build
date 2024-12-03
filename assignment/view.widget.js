System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.2.15/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.2.15/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.15/components/module-card"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
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
    }, function (_aimpactAilearnApp0215MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0215MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp0215ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0215ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0215ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp0215ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.15"], ["@aimpact/ailearn-app", "0.2.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.15/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.2.15/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.15/assignment/view.widget');
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
        hash: 2615005985,
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
              picture,
              owner
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
              alt: title,
              size: "xs"
            }), _react.default.createElement("h1", null, title), _react.default.createElement("div", null, _react.default.createElement("p", {
              className: "p1"
            }, description), _react.default.createElement(_ui.UserData, {
              data: owner
            }))), _react.default.createElement(_ui.PageTitle, {
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
        hash: 1981362032,
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
            /**
             * access property defines if the student had access to the assignment
             * accessPermission property defines if the student has permission to access the assignment
             */
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
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              activities,
              access
            };
            const cls = `assignment-view `;
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_header.Header, null), activities.items ? _react.default.createElement(_list.List, null) : _react.default.createElement(_empty.EmptyList, null))));
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
        hash: 1256273350,
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
              className: "entity__list",
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
        hash: 3565528966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
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
            const attrs = {
              disabled: !access,
              texts,
              entity: 'activity',
              item,
              type: item.type
            };
            if (access) attrs.href = url;
            return _react.default.createElement(_moduleCard.ModuleCard, {
              ...attrs
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 2134062602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement(_components.Button, {
              className: "preload-btn",
              variant: "primary"
            }, "\u00A0")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFjY2Vzc2VkIiwicmVhZHkiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiYXNzaWdubWVudElkIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwibSIsImUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZXF1ZXN0QWNjZXNzIiwicmVzcG9uc2UiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiX3JlYWN0IiwiX2ltYWdlIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJBY2Nlc3NEZW5pZWQiLCJzdGF0dXMiLCJ0aXRsZSIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZmV0Y2hpbmciLCJBc3NpZ25tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJzaXplIiwiVXNlckRhdGEiLCJQYWdlVGl0bGUiLCJhcyIsImFjdGl2aXRpZXMiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJhY2Nlc3NQZXJtaXNzaW9uIiwic2V0QWNjZXNzUGVybWlzc2lvbiIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJQcm92aWRlciIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsImF0dHJzIiwiaHJlZiIsIk1vZHVsZUNhcmQiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByZWxvYWQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBYyxTQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQWtCLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixXQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsZUFBQSxHQUFBdEIsT0FBQTtVQVBBOztVQVFNLE1BQU9PLFlBQWEsU0FBUVksTUFBQSxDQUFBSSxhQUFxQjtZQUN0RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxLQUFNLEdBQStCLElBQUlKLE1BQUEsQ0FBQUssWUFBWSxDQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFOLEtBQU0sRUFBRU0sUUFBUTtZQUM3QjtZQUNBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNNLEtBQUs7WUFDeEM7WUFFQSxJQUFJQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxFQUFFVSxNQUFNLEVBQUVDLFdBQVcsRUFBRSxDQUFDO1lBQ3pGO1lBQ0E7Ozs7WUFLQSxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDYSxLQUFLO1lBQ3pCO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDYyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQzVDO1lBRUEsQ0FBQUMsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsTUFBTTdCLElBQUlBLENBQUM2QixFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQUEsRUFBRyxHQUFHQSxFQUFFO2dCQUNickIsV0FBQSxDQUFBc0IsWUFBWSxDQUFDQyxLQUFLLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBUCxZQUFhLEdBQUdLLEVBQUU7Z0JBRXZCLElBQUksQ0FBQyxDQUFBakIsS0FBTSxHQUFHUCxTQUFBLENBQUEyQixRQUFRLENBQUM3QixHQUFHLENBQUM7a0JBQUVxQixZQUFZLEVBQUVLO2dCQUFFLENBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLENBQUFqQixLQUFNLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNaLElBQUksQ0FBQztrQkFBRTZCO2dCQUFFLENBQUUsQ0FBQztnQkFDOUJqQyxVQUFVLENBQUNxQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFyQixLQUFNO2dCQUMxQjtnQkFDQSxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLE1BQU0sQ0FBQyxFQUFFO2tCQUN0RSxLQUFLLENBQUNILEtBQUssR0FBRyxJQUFJO2tCQUNsQjs7ZUFFRCxDQUFDLE9BQU9lLENBQUMsRUFBRTtnQkFDWCxJQUFJQSxDQUFDLENBQUNDLE9BQU8sS0FBSyxLQUFLLEVBQUU7a0JBQ3hCOztnQkFFRCxJQUFJRCxDQUFDLENBQUNDLE9BQU8sS0FBSyxLQUFLLEVBQUU7a0JBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7a0JBRXZCOztlQUVELFNBQVM7Z0JBQ1QsS0FBSyxDQUFDbEIsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1MsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1OLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILE1BQU1nQixPQUFPLEdBQUcsSUFBSWhDLEtBQUEsQ0FBQWlDLGNBQWMsRUFBRTtnQkFFcEMsTUFBTSxJQUFJLENBQUMsQ0FBQTNCLEtBQU0sQ0FBQzRCLGtCQUFrQixFQUFFO2dCQUN0Qzs7Ozs7Z0JBS0E1QyxVQUFVLENBQUM2QyxVQUFVLENBQUMsTUFBSztrQkFDMUIsSUFBSSxDQUFDLENBQUF2QixRQUFTLEdBQUcsSUFBSTtrQkFDckIsSUFBSSxDQUFDVSxZQUFZLEVBQUU7a0JBQ25CVSxPQUFPLENBQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQ1IsT0FBT0osT0FBTztlQUNkLENBQUMsT0FBT0osQ0FBQyxFQUFFO2dCQUNYRSxPQUFPLENBQUNPLEtBQUssQ0FBQ1QsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1VLGFBQWFBLENBQUE7Y0FDbEIsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDakMsS0FBSyxDQUFDa0Msc0JBQXNCLEVBQUU7Y0FFMUQsT0FBT0QsUUFBUTtZQUNoQjs7VUFDQXpDLE9BQUEsQ0FBQVQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHRCxJQUFBb0QsTUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxNQUFBLEdBQUE1RCxPQUFBO1VBQ0EsSUFBQTZELEdBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsV0FBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxNQUFBLEdBQUEvRCxPQUFBO1VBRU87VUFBVSxTQUNSZ0UsWUFBWUEsQ0FBQztZQUFFM0Q7VUFBSyxDQUEyQjtZQUN2RCxNQUFNO2NBQUVvQjtZQUFLLENBQUUsR0FBR3BCLEtBQUs7WUFFdkIsTUFBTTRELE1BQU0sR0FBRzVELEtBQUssQ0FBQ21CLEtBQUssRUFBRVUsTUFBTSxFQUFFQyxXQUFXLEVBQUU7WUFDakQsTUFBTTtjQUFFK0IsS0FBSztjQUFFQyxNQUFNO2NBQUVDLFdBQVc7Y0FBRUM7WUFBUSxDQUFFLEdBQUc1QyxLQUFLLENBQUN3QyxNQUFNLENBQUMsSUFBSSxhQUFhO1lBRS9FLE1BQU0sQ0FBQ1YsS0FBSyxFQUFFZSxRQUFRLENBQUMsR0FBR1gsTUFBQSxDQUFBWSxPQUFLLENBQUNDLFFBQVEsRUFBVTtZQUNsRCxNQUFNLENBQUN6QixPQUFPLEVBQUUwQixVQUFVLENBQUMsR0FBR2QsTUFBQSxDQUFBWSxPQUFLLENBQUNDLFFBQVEsRUFBVTtZQUN0RCxNQUFNLENBQUNFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdoQixNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNSSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hELGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUlWLE1BQU0sS0FBSyxTQUFTLEVBQUU7a0JBQ3pCLE1BQU01RCxLQUFLLENBQUNPLElBQUksQ0FBQ1AsS0FBSyxDQUFDb0MsRUFBRSxDQUFDO2tCQUMxQjs7Z0JBR0QsTUFBTWdCLFFBQVEsR0FBRyxNQUFNcEQsS0FBSyxDQUFDbUQsYUFBYSxFQUFFO2dCQUU1QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFO2tCQUNyQkssUUFBUSxDQUFDYixRQUFRLENBQUNGLEtBQUssQ0FBQztrQkFDeEI7O2dCQUVEa0IsVUFBVSxDQUFDaEIsUUFBUSxDQUFDb0IsSUFBSSxDQUFDOUIsT0FBTyxDQUFDO2VBQ2pDLENBQUMsT0FBT0QsQ0FBQyxFQUFFO2dCQUNYRSxPQUFPLENBQUNPLEtBQUssQ0FBQ1QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q2QixhQUFhLENBQUMsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBQ0QsTUFBTUcsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRUo7WUFBVSxDQUFFO1lBQ3pDLE1BQU07Y0FBRUssU0FBUztjQUFFcEQ7WUFBTSxDQUFFLEdBQUd0QixLQUFLLENBQUNtQixLQUFLLENBQUN3RCxVQUFVO1lBQ3BELE9BQ0NyQixNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDcEIsR0FBQSxDQUFBcUIsYUFBYTtjQUFDQyxTQUFTLEVBQUM7WUFBK0IsR0FDdEQ1QixLQUFLLElBQUlJLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUNsQixNQUFBLENBQUFxQixLQUFLO2NBQUNDLElBQUksRUFBQztZQUFRLEdBQUU5QixLQUFLLENBQVMsRUFDN0NSLE9BQU8sSUFBSVksTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQXFCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQVMsR0FBRXRDLE9BQU8sQ0FBUyxFQUNuRFksTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJ4QixNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxpQkFDQ3RCLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLGFBQUtmLEtBQUssQ0FBTSxFQUNoQlAsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsYUFBS1osUUFBUSxDQUFNLENBQ1gsRUFFUlUsU0FBUyxJQUFJcEQsTUFBTSxJQUNuQmdDLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUF0QixNQUFBLENBQUFZLE9BQUEsQ0FBQWUsUUFBQSxRQUNDM0IsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DeEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsa0JBQ0N0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDckIsTUFBQSxDQUFBMkIsS0FBSztjQUFDQyxHQUFHLEVBQUVULFNBQVMsQ0FBQ1UsT0FBTztjQUFFQyxHQUFHLEVBQUVYLFNBQVMsQ0FBQ1k7WUFBSSxFQUFJLENBQzdDLEVBQ1ZoQyxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxrQkFDQ3RCLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLGFBQUtGLFNBQVMsRUFBRVksSUFBSSxDQUFNLEVBQzFCaEMsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsYUFBS3RELE1BQU0sRUFBRXVDLEtBQUssQ0FBTSxDQUNmLENBQ0QsQ0FFWCxFQUVEUCxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxZQUFJYixXQUFXLENBQUssRUFFcEJULE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLGlCQUNDdEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ25CLFdBQUEsQ0FBQThCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFbEIsU0FBUztjQUFFbUIsUUFBUSxFQUFFckIsVUFBVTtjQUFBLEdBQU1JO1lBQVEsR0FDOUVYLE1BQU0sQ0FDQyxDQUNELENBQ0osRUFDTlIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsY0FDQ3RCLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUNyQixNQUFBLENBQUEyQixLQUFLO2NBQ0xDLEdBQUcsRUFBQywwQ0FBMEM7Y0FDOUNFLEdBQUcsRUFBQyw4QkFBOEI7Y0FDbENQLFNBQVMsRUFBQztZQUFTLEVBQ2xCLENBQ0csQ0FDUztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQXhCLE1BQUEsR0FBQTNELE9BQUE7VUFhTyxNQUFNZ0csaUJBQWlCLEdBQUFoRixPQUFBLENBQUFnRixpQkFBQSxHQUFHckMsTUFBQSxDQUFBWSxPQUFLLENBQUMwQixhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUN2RSxNQUFNQyxvQkFBb0IsR0FBR0EsQ0FBQSxLQUFNdkMsTUFBQSxDQUFBWSxPQUFLLENBQUM0QixVQUFVLENBQUNILGlCQUFpQixDQUFDO1VBQUNoRixPQUFBLENBQUFrRixvQkFBQSxHQUFBQSxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkOUUsSUFBQXJDLEdBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBK0QsTUFBQSxHQUFBL0QsT0FBQTtVQUNBLElBQUE4RCxXQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQTJELE1BQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBb0csUUFBQSxHQUFBcEcsT0FBQTtVQUdNLFNBQVVxRyxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRWhHLEtBQUs7Y0FBRW9CLEtBQUs7Y0FBRVM7WUFBTSxDQUFFLEdBQUcsSUFBQWtFLFFBQUEsQ0FBQUYsb0JBQW9CLEdBQUU7WUFDdkQsTUFBTSxDQUFDSCxRQUFRLEVBQUVPLFdBQVcsQ0FBQyxHQUFHM0MsTUFBQSxDQUFBWSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDK0IsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRzdDLE1BQUEsQ0FBQVksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNELE1BQU07Y0FBRU4sS0FBSztjQUFFRSxXQUFXO2NBQUVxQixPQUFPO2NBQUVnQjtZQUFLLENBQUUsR0FBR3BHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0csTUFBTTtZQUNqRSxNQUFNbUUsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQlEsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNakcsS0FBSyxDQUFDNkIsTUFBTSxFQUFFO2NBQ3BCb0UsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkUsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDO1lBRUQsT0FDQzdDLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUF0QixNQUFBLENBQUFZLE9BQUEsQ0FBQWUsUUFBQSxRQUNDM0IsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DeEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3BCLEdBQUEsQ0FBQTZDLFdBQVc7Y0FBQ0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ25CLEdBQUcsRUFBRUMsT0FBTztjQUFFQyxHQUFHLEVBQUV4QixLQUFLO2NBQUUwQyxJQUFJLEVBQUM7WUFBSSxFQUFHLEVBQ25FakQsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsYUFBS2YsS0FBSyxDQUFNLEVBQ2hCUCxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxjQUNDdEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBR0UsU0FBUyxFQUFDO1lBQUksR0FBRWYsV0FBVyxDQUFLLEVBQ25DVCxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDcEIsR0FBQSxDQUFBZ0QsUUFBUTtjQUFDaEMsSUFBSSxFQUFFNEI7WUFBSyxFQUFJLENBQ3BCLENBQ0UsRUFFVDlDLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUNwQixHQUFBLENBQUFpRCxTQUFTO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUM3QyxLQUFLLEVBQUV6QyxLQUFLLENBQUN1RixVQUFVLENBQUM5QztZQUFLLEdBQzlDLENBQUNoQyxNQUFNLElBQUksQ0FBQ3FFLFdBQVcsSUFDdkI1QyxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDbkIsV0FBQSxDQUFBOEIsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRLEVBQUVBLFFBQVE7Y0FBRUQsT0FBTyxFQUFFQTtZQUFPLEdBQzVEckUsS0FBSyxDQUFDUyxNQUFNLENBRWQsQ0FDVSxFQUVYcUUsV0FBVyxJQUNYNUMsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQXFCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0YsU0FBUyxFQUFDO1lBQU8sR0FDckMxRCxLQUFLLENBQUNLLFFBQVEsQ0FFaEIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBNkIsTUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE2RCxHQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlILE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBb0csUUFBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQW1ILE9BQUEsR0FBQW5ILE9BQUE7VUFDQSxJQUFBb0gsS0FBQSxHQUFBcEgsT0FBQTtVQUVBLElBQUFxSCxRQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQXNILGFBQUEsR0FBQXRILE9BQUE7VUFXTztVQUFVLFNBQ1JVLElBQUlBLENBQUM7WUFBRUw7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUMwQixLQUFLLEVBQUV3RixRQUFRLENBQUMsR0FBRzVELE1BQUEsQ0FBQVksT0FBSyxDQUFDQyxRQUFRLENBQUNuRSxLQUFLLENBQUMwQixLQUFLLENBQUM7WUFDckQsTUFBTSxHQUFHeUYsUUFBUSxDQUFDLEdBQUc3RCxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDbkUsS0FBSyxDQUFDbUIsS0FBSyxDQUFDaUcsS0FBSyxDQUFDO1lBQ3REOzs7O1lBSUEsTUFBTSxDQUFDdkYsTUFBTSxFQUFFd0YsU0FBUyxDQUFDLEdBQUcvRCxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDbkUsS0FBSyxDQUFDbUIsS0FBSyxDQUFDTSxRQUFRLENBQUM7WUFDaEUsTUFBTSxDQUFDNkYsZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFDLEdBQUdqRSxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDbkUsS0FBSyxDQUFDbUIsS0FBSyxDQUFDVSxNQUFNLENBQUM7WUFDbEYsTUFBTTtjQUFFVDtZQUFLLENBQUUsR0FBR3BCLEtBQUs7WUFDdkIsSUFBQTRHLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUN4SCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCa0gsUUFBUSxDQUFDbEgsS0FBSyxDQUFDMEIsS0FBSyxDQUFDO2NBQ3JCeUYsUUFBUSxDQUFDbkgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDaUcsS0FBSyxDQUFDO2NBQzNCRyxtQkFBbUIsQ0FBQ3ZILEtBQUssQ0FBQ21CLEtBQUssQ0FBQ1UsTUFBTSxDQUFDO2NBQ3ZDd0YsU0FBUyxDQUFDckgsS0FBSyxDQUFDeUIsUUFBUSxDQUFDO1lBQzFCLENBQUMsQ0FBQztZQUVGLElBQUlDLEtBQUssSUFBSTFCLEtBQUssQ0FBQzJCLFlBQVksRUFBRSxPQUFPMkIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3FDLGFBQUEsQ0FBQXRELFlBQVk7Y0FBQzNELEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3RFLElBQUkwQixLQUFLLElBQUksQ0FBQzFCLEtBQUssQ0FBQ2dDLEtBQUssRUFBRSxPQUFPc0IsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsNkJBQXVCO1lBQ3pELElBQUksQ0FBQ2xELEtBQUssRUFBRSxPQUFPNEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ29DLFFBQUEsQ0FBQVMsT0FBTyxPQUFHO1lBRTlCLE1BQU07Y0FBRWQ7WUFBVSxDQUFFLEdBQUczRyxLQUFLLENBQUNtQixLQUFLO1lBRWxDLE1BQU11RyxZQUFZLEdBQUc7Y0FDcEJ0RyxLQUFLO2NBQ0xzRSxRQUFRLEVBQUUxRixLQUFLLENBQUMwRixRQUFRO2NBQ3hCMUYsS0FBSztjQUNMMkcsVUFBVTtjQUNWOUU7YUFDQTtZQUVELE1BQU04RixHQUFHLEdBQUcsa0JBQWtCO1lBQzlCLE9BQ0NyRSxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDbUIsUUFBQSxDQUFBSixpQkFBaUIsQ0FBQ2lDLFFBQVE7Y0FBQ3BHLEtBQUssRUFBRWtHO1lBQVksR0FDOUNwRSxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDcEIsR0FBQSxDQUFBcUIsYUFBYTtjQUFDQyxTQUFTLEVBQUU2QztZQUFHLEdBQzVCckUsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDeEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ2tDLE9BQUEsQ0FBQWQsTUFBTSxPQUFHLEVBQ1RXLFVBQVUsQ0FBQ1MsS0FBSyxHQUFHOUQsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ21DLEtBQUEsQ0FBQWMsSUFBSSxPQUFHLEdBQUd2RSxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDaUMsTUFBQSxDQUFBaUIsU0FBUyxPQUFHLENBQ3ZDLENBQ1MsQ0FDWTtVQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQXhFLE1BQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNkQsR0FBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFvRyxRQUFBLEdBQUFwRyxPQUFBO1VBRU87VUFBVSxTQUFVbUksU0FBU0EsQ0FBQTtZQUNuQyxNQUFNO2NBQUUxRztZQUFLLENBQUUsR0FBRyxJQUFBMkUsUUFBQSxDQUFBRixvQkFBb0IsR0FBRTtZQUN4QyxPQUFPdkMsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3BCLEdBQUEsQ0FBQXVFLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFNUcsS0FBSyxDQUFDNkcsS0FBSztjQUFFQyxJQUFJLEVBQUM7WUFBTSxFQUFHO1VBQ3BEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFDLEtBQUEsR0FBQXhJLE9BQUE7VUFDQSxJQUFBMkQsTUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFvRyxRQUFBLEdBQUFwRyxPQUFBO1VBRUEsSUFBQW9ILEtBQUEsR0FBQXBILE9BQUE7VUFFTztVQUFVLFNBQVVrSSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRWxCO1lBQVUsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQUYsb0JBQW9CLEdBQUU7WUFFN0MsT0FBT3ZDLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUNtQyxLQUFBLENBQUFjLElBQWE7Y0FBQy9DLFNBQVMsRUFBQyxjQUFjO2NBQUNzQyxLQUFLLEVBQUVULFVBQVUsQ0FBQ1MsS0FBSztjQUFFZ0IsT0FBTyxFQUFFRCxLQUFBLENBQUFFO1lBQUksRUFBSTtVQUMxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBQyxXQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQTJELE1BQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBb0csUUFBQSxHQUFBcEcsT0FBQTtVQVVPO1VBQVUsU0FBVTBJLElBQUlBLENBQUM7WUFBRTdELElBQUksRUFBRStELElBQUk7WUFBRUM7VUFBSyxDQUFFO1lBQ3BELE1BQU07Y0FBRXhJLEtBQUs7Y0FBRW9CLEtBQUs7Y0FBRVM7WUFBTSxDQUFFLEdBQUcsSUFBQWtFLFFBQUEsQ0FBQUYsb0JBQW9CLEdBQUU7WUFFdkQsTUFBTWIsSUFBSSxHQUFHdUQsSUFBSSxDQUFDdkQsSUFBSSxLQUFLLGlCQUFpQixHQUFHLFlBQVksR0FBR3VELElBQUksQ0FBQ3ZELElBQUk7WUFFdkUsSUFBSXlELEdBQUcsR0FBRyxnQkFBZ0J6SSxLQUFLLENBQUMrQixZQUFZLElBQUlpRCxJQUFJLElBQUl1RCxJQUFJLENBQUNuRyxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLENBQUNQLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDMkcsSUFBSSxDQUFDdkQsSUFBSSxDQUFDLEVBQUU7Y0FDbkd5RCxHQUFHLElBQUksU0FBU0YsSUFBSSxDQUFDRyxJQUFJLENBQUN0RyxFQUFFLEVBQUU7O1lBRy9CLE1BQU11RyxLQUFLLEdBQXFCO2NBQy9CbEUsUUFBUSxFQUFFLENBQUM1QyxNQUFNO2NBQ2pCVCxLQUFLO2NBQ0xrRixNQUFNLEVBQUUsVUFBVTtjQUNsQmlDLElBQUk7Y0FDSnZELElBQUksRUFBRXVELElBQUksQ0FBQ3ZEO2FBQ1g7WUFFRCxJQUFJbkQsTUFBTSxFQUFFOEcsS0FBSyxDQUFDQyxJQUFJLEdBQUdILEdBQUc7WUFFNUIsT0FBT25GLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUMwRCxXQUFBLENBQUFPLFVBQVU7Y0FBQSxHQUFLRjtZQUFLLEVBQUk7VUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFuRixHQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQThELFdBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBNEQsTUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUEyRCxNQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQW9HLFFBQUEsR0FBQXBHLE9BQUE7VUFFTSxTQUFVOEgsT0FBT0EsQ0FBQTtZQUN0QixNQUFNO2NBQUV6SCxLQUFLO2NBQUVvQixLQUFLO2NBQUVTO1lBQU0sQ0FBRSxHQUFHLElBQUFrRSxRQUFBLENBQUFGLG9CQUFvQixHQUFFO1lBRXZELE9BQ0N2QyxNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDcEIsR0FBQSxDQUFBcUIsYUFBYSxRQUNidkIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DeEIsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3JCLE1BQUEsQ0FBQTJCLEtBQUs7Y0FBQ0osU0FBUyxFQUFDO1lBQTZCLEVBQUcsRUFDakR4QixNQUFBLENBQUFZLE9BQUEsQ0FBQVUsYUFBQSxDQUFDcEIsR0FBQSxDQUFBc0YsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLEVBQzNDMUYsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3BCLEdBQUEsQ0FBQXNGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUNuQyxFQUNUMUYsTUFBQSxDQUFBWSxPQUFBLENBQUFVLGFBQUEsQ0FBQ3BCLEdBQUEsQ0FBQWlELFNBQVM7Y0FBQ3dDLE9BQU87WUFBQSxHQUNqQjNGLE1BQUEsQ0FBQVksT0FBQSxDQUFBVSxhQUFBLENBQUNuQixXQUFBLENBQUE4QixNQUFNO2NBQUNULFNBQVMsRUFBQyxhQUFhO2NBQUNVLE9BQU8sRUFBQztZQUFTLFlBRXhDLENBQ0UsQ0FDRztVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==