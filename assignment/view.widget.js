System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.9/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.9/components/ui", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.9/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp019MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp019MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_10 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp019ComponentsUi) {
      dependency_11 = _aimpactAilearnApp019ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_13 = _pragmateUi100Beta6Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_15 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp019ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp019ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.9"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.9/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/tracking', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.9/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.9/assignment/view.widget');
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
        hash: 2781572507,
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
              alt: title,
              size: "xs"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfY29yZSIsIl9tb2RlbCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFjY2Vzc2VkIiwicmVhZHkiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiYXNzaWdubWVudElkIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwibSIsImUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZXF1ZXN0QWNjZXNzIiwicmVzcG9uc2UiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiX3JlYWN0IiwiX2ltYWdlIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJBY2Nlc3NEZW5pZWQiLCJzdGF0dXMiLCJ0aXRsZSIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZmV0Y2hpbmciLCJBc3NpZ25tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlBhZ2VUaXRsZSIsImFzIiwiYWN0aXZpdGllcyIsIl9ob29rcyIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsImFjY2Vzc1Blcm1pc3Npb24iLCJzZXRBY2Nlc3NQZXJtaXNzaW9uIiwidXNlQmluZGVyIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiTGlzdCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiX21vZHVsZUNhcmQiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJjaGF0IiwiYXR0cnMiLCJocmVmIiwiTW9kdWxlQ2FyZCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjY2Vzcy1kZW5pZWQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQzs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFjLFNBQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBa0IsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0Es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