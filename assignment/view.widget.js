System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/reactive@0.0.1/model", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_11 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp031ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/reactive/model', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignment/view.widget');
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
        hash: 2968486893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@aimpact/reactive/model");
          var _beyond_context = require("beyond_context");
          // import { Assignment } from '@aimpact/ailearn-sdk/core';

          class StoreManager extends _model.ReactiveModel {
            isStore;
            #model;
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get found() {
              return this.#model?.found;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #id;
            get id() {
              return this.#id;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
            }
            async load(id) {
              try {
                this.#id = id;
                _mainLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  id
                });
                this.#model.on('change', this.triggerEvent);
                await this.#model.load({
                  id
                });
                // pending
                if (['not_member', 'pending', 'invited'].includes(this.#model.access)) {
                  super.ready = true;
                  return;
                }
              } catch (e) {
                console.trace(e);
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
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 31807288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1657991703,
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
        hash: 2450239278,
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
            const [, setItems] = _react.default.useState(store.model?.items);
            /**
             * access property defines if the student had access to the assignment
             * accessPermission property defines if the student has permission to access the assignment
             */
            const [access, setAccess] = _react.default.useState(store.model?.accessed);
            const [accessPermission, setAccessPermission] = _react.default.useState(store.model?.access);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model?.items);
              setAccessPermission(store.model?.access);
              setAccess(store?.model.accessed);
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
        hash: 3643910632,
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
        hash: 2019869392,
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
            return _react.default.createElement("li", null, _react.default.createElement(_moduleCard.ActivityCard, {
              type: type,
              href: url,
              disabled: !access,
              item: item,
              texts: {
                ...texts,
                types: store.globalTexts.activities.types
              },
              audience: false,
              entity: "assignment"
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9jb3JlIiwiX3RleHRzIiwiX21vZGVsIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiVHJhY2tpbmciLCJpbmNsdWRlcyIsImFjY2VzcyIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJtZXNzYWdlIiwibG9nIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50Iiwic2V0VGltZW91dCIsInJlc29sdmUiLCJlcnJvciIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsInRvTG93ZXJDYXNlIiwidGl0bGUiLCJhY3Rpb24iLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwic2V0RXJyb3IiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRNZXNzYWdlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvblJlcXVlc3QiLCJkYXRhIiwiZGlzYWJsZWQiLCJjbGFzc3Jvb20iLCJhc3NpZ25tZW50IiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJBbGVydCIsInR5cGUiLCJGcmFnbWVudCIsIkltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImZldGNoaW5nIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJzaXplIiwiVXNlckRhdGEiLCJQYWdlVGl0bGUiLCJhcyIsImFjdGl2aXRpZXMiLCJhY2Nlc3NlZCIsIl9ob29rcyIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsImFjY2Vzc1Blcm1pc3Npb24iLCJzZXRBY2Nlc3NQZXJtaXNzaW9uIiwidXNlQmluZGVyIiwiYWNjZXNzRGVuaWVkIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiTGlzdCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiX21vZHVsZUNhcmQiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJjaGF0IiwiYXR0cnMiLCJocmVmIiwiQWN0aXZpdHlDYXJkIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjY2Vzcy1kZW5pZWQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFB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