System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_14 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp031ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
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
        hash: 663962876,
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
              this.#store.testing = this.uri.qs.get('type') === 'draft';
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
        hash: 2625450106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@aimpact/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
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
            get accessDenied() {
              return ['not_member', 'pending', 'invited'].includes(this.#model.access.toLowerCase());
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
                if (['not_member', 'pending', 'invited'].includes(this.#model.access.toLowerCase())) {
                  super.ready = true;
                  return;
                }
                const isCommunity = this.model.classroom.id === '8843c24a-e594-47ef-bed5-b6fd742c5758';
                const classroomLink = [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`];
                const communityLink = [this.globalTexts.entities.community, `/community`];
                const parent = isCommunity ? communityLink : classroomLink;
                const breadcrumb = [parent, [this.#model.module.title]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  breadcrumb,
                  backLink: isCommunity ? '/' : `/classrooms/view/${this.#model.classroom.id}`
                });
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
        hash: 662181399,
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
              src: module.picture,
              alt: module.name
            })), _react.default.createElement("section", null, _react.default.createElement("h3", null, classroom?.name), _react.default.createElement("h6", null, module?.title)))), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onRequest,
              fetching: processing,
              ...disabled
            }, action))), _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: "/assets/images/students/not-allowed.webp",
              alt: "Student does not have access",
              className: "img-100 img-move-animation"
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
        hash: 163186067,
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
            return _react.default.createElement("li", null, _react.default.createElement(_moduleCard.ActivityCard, {
              type: item.type,
              href: url,
              disabled: !access,
              item: item,
              texts: {
                ...texts,
                types: store.globalTexts.activities.types
              },
              audience: false,
              entity: "activity"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwidG9Mb3dlckNhc2UiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiaXNDb21tdW5pdHkiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21MaW5rIiwibmFtZSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsImNvbW11bml0eSIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJtZXNzYWdlIiwibG9nIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50Iiwic2V0VGltZW91dCIsInJlc29sdmUiLCJlcnJvciIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkFzc2lnbm1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJzZXRGZXRjaGluZyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJvd25lciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlVzZXJEYXRhIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiYWNjZXNzZWQiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJhY2Nlc3NQZXJtaXNzaW9uIiwic2V0QWNjZXNzUGVybWlzc2lvbiIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJQcm92aWRlciIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FHLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRCxJQUFBZ0IsV0FBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixTQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsS0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRUEsSUFBQXdCLGVBQUEsR0FBQXhCLE9BQUE7VUFQQTs7VUFRTSxNQUFPTyxZQUFhLFNBQVFjLE1BQUEsQ0FBQUksYUFBMkI7WUFDNURDLE9BQU87WUFDUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxLQUFNLEdBQStCLElBQUlMLE1BQUEsQ0FBQU0sWUFBWSxDQUFDTCxlQUFBLENBQUFNLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFFQSxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ0YsS0FBSztZQUMvQjtZQUNBLElBQUlHLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBUixLQUFNLEVBQUVRLEtBQUs7WUFDMUI7WUFDQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFGLFdBQVksQ0FBQ0UsS0FBSztZQUNuRTtZQUNBLENBQUFDLEVBQUc7WUFDSCxJQUFJQSxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUEsRUFBRztZQUNoQjtZQUVBLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFLENBQUM7WUFDdkY7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFWLFdBQVksR0FBRyxJQUFJWCxNQUFBLENBQUFNLFlBQVksQ0FBQywyQkFBMkIsQ0FBQztjQUNqRSxJQUFJLENBQUMsQ0FBQUssV0FBWSxDQUFDVyxLQUFLLEVBQUU7WUFDMUI7WUFFQSxNQUFNN0IsSUFBSUEsQ0FBQ3FCLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBQSxFQUFHLEdBQUdBLEVBQUU7Z0JBQ2JsQixXQUFBLENBQUEyQixZQUFZLENBQUNDLEtBQUssRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFkLFlBQWEsR0FBR0ksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUFWLEtBQU0sR0FBR1AsU0FBQSxDQUFBNEIsUUFBUSxDQUFDakMsR0FBRyxDQUFDO2tCQUFFc0I7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztnQkFFM0MsTUFBTSxJQUFJLENBQUMsQ0FBQWpCLEtBQU0sQ0FBQ1gsSUFBSSxDQUFDO2tCQUFFcUI7Z0JBQUUsQ0FBRSxDQUFDO2dCQUU5QjtnQkFDQSxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFLENBQUMsRUFBRTtrQkFDcEYsS0FBSyxDQUFDTCxLQUFLLEdBQUcsSUFBSTtrQkFDbEI7O2dCQUdELE1BQU1hLFdBQVcsR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUN1QixTQUFTLENBQUNiLEVBQUUsS0FBSyxzQ0FBc0M7Z0JBRXRGLE1BQU1jLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBeEIsS0FBTSxDQUFDdUIsU0FBUyxDQUFDRSxJQUFJLEVBQUUsb0JBQW9CLElBQUksQ0FBQyxDQUFBekIsS0FBTSxDQUFDdUIsU0FBUyxDQUFDYixFQUFFLEVBQUUsQ0FBQztnQkFDbEcsTUFBTWdCLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ29CLFFBQVEsQ0FBQ0MsU0FBUyxFQUFFLFlBQVksQ0FBQztnQkFDekUsTUFBTUMsTUFBTSxHQUFHUCxXQUFXLEdBQUdJLGFBQWEsR0FBR0YsYUFBYTtnQkFDMUQsTUFBTU0sVUFBVSxHQUFHLENBQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBN0IsS0FBTSxDQUFDRyxNQUFNLENBQUM0QixLQUFLLENBQUMsQ0FBQztnQkFDdkR2QyxXQUFBLENBQUEyQixZQUFZLENBQUNhLEdBQUcsQ0FBQztrQkFDaEJDLE9BQU8sRUFBRSxJQUFJO2tCQUNiSCxVQUFVO2tCQUNWSSxRQUFRLEVBQUVaLFdBQVcsR0FBRyxHQUFHLEdBQUcsb0JBQW9CLElBQUksQ0FBQyxDQUFBdEIsS0FBTSxDQUFDdUIsU0FBUyxDQUFDYixFQUFFO2lCQUMxRSxDQUFDO2VBQ0YsQ0FBQyxPQUFPeUIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2dCQUNoQixJQUFJQSxDQUFDLENBQUNHLE9BQU8sS0FBSyxLQUFLLEVBQUU7a0JBQ3hCOztnQkFFRCxJQUFJSCxDQUFDLENBQUNHLE9BQU8sS0FBSyxLQUFLLEVBQUU7a0JBQ3hCRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUM7a0JBRXZCOztlQUVELFNBQVM7Z0JBQ1QsS0FBSyxDQUFDOUIsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1EsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1KLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILE1BQU0yQixPQUFPLEdBQUcsSUFBSTdDLEtBQUEsQ0FBQThDLGNBQWMsRUFBRTtnQkFFcEMsTUFBTSxJQUFJLENBQUMsQ0FBQXpDLEtBQU0sQ0FBQzBDLGtCQUFrQixFQUFFO2dCQUN0Qzs7Ozs7Z0JBS0E3RCxVQUFVLENBQUM4RCxVQUFVLENBQUMsTUFBSztrQkFDMUIsSUFBSSxDQUFDMUIsWUFBWSxFQUFFO2tCQUVuQnVCLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDUixPQUFPSixPQUFPO2VBQ2QsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1MsS0FBSyxDQUFDVixDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTVcsYUFBYUEsQ0FBQTtjQUNsQixNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMvQyxLQUFLLENBQUNnRCxzQkFBc0IsRUFBRTtjQUUxRCxPQUFPRCxRQUFRO1lBQ2hCOztVQUNBeEQsT0FBQSxDQUFBWCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkhELElBQUFxRSxNQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLE1BQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBOEUsR0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxXQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQWdGLE1BQUEsR0FBQWhGLE9BQUE7VUFFTztVQUFVLFNBQ1JpRixZQUFZQSxDQUFDO1lBQUU1RTtVQUFLLENBQTJCO1lBQ3ZELE1BQU07Y0FBRXVCO1lBQUssQ0FBRSxHQUFHdkIsS0FBSztZQUV2QixNQUFNNkUsTUFBTSxHQUFHN0UsS0FBSyxDQUFDc0IsS0FBSyxFQUFFYSxNQUFNLEVBQUVDLFdBQVcsRUFBRTtZQUNqRCxNQUFNO2NBQUVpQixLQUFLO2NBQUV5QixNQUFNO2NBQUVDLFdBQVc7Y0FBRUM7WUFBUSxDQUFFLEdBQUd6RCxLQUFLLENBQUNzRCxNQUFNLENBQUMsSUFBSSxhQUFhO1lBRS9FLE1BQU0sQ0FBQ1YsS0FBSyxFQUFFYyxRQUFRLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBVTtZQUNsRCxNQUFNLENBQUN2QixPQUFPLEVBQUV3QixVQUFVLENBQUMsR0FBR2IsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBVTtZQUN0RCxNQUFNLENBQUNFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdmLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1JLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSEQsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFFbkIsSUFBSVQsTUFBTSxLQUFLLFNBQVMsRUFBRTtrQkFDekIsTUFBTTdFLEtBQUssQ0FBQ1csSUFBSSxDQUFDWCxLQUFLLENBQUNnQyxFQUFFLENBQUM7a0JBQzFCOztnQkFHRCxNQUFNcUMsUUFBUSxHQUFHLE1BQU1yRSxLQUFLLENBQUNvRSxhQUFhLEVBQUU7Z0JBRTVDLElBQUksQ0FBQ0MsUUFBUSxDQUFDUSxNQUFNLEVBQUU7a0JBQ3JCSSxRQUFRLENBQUNaLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO2tCQUN4Qjs7Z0JBRURpQixVQUFVLENBQUNmLFFBQVEsQ0FBQ21CLElBQUksQ0FBQzVCLE9BQU8sQ0FBQztlQUNqQyxDQUFDLE9BQU9ILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUyxLQUFLLENBQUNWLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUNkIsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFFdEIsQ0FBQztZQUNELE1BQU1HLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUVKO1lBQVUsQ0FBRTtZQUN6QyxNQUFNO2NBQUV4QyxTQUFTO2NBQUVwQjtZQUFNLENBQUUsR0FBR3pCLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQ29FLFVBQVU7WUFDcEQsT0FDQ25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUFtQixhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUErQixHQUN0RDFCLEtBQUssSUFBSUksTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2hCLE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQVEsR0FBRTVCLEtBQUssQ0FBUyxFQUM3Q1AsT0FBTyxJQUFJVyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaEIsTUFBQSxDQUFBbUIsS0FBSztjQUFDQyxJQUFJLEVBQUM7WUFBUyxHQUFFbkMsT0FBTyxDQUFTLEVBQ25EVyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QnRCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGlCQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsYUFBS3RDLEtBQUssQ0FBTSxFQUNoQmtCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGFBQUtYLFFBQVEsQ0FBTSxDQUNYLEVBRVJuQyxTQUFTLElBQUlwQixNQUFNLElBQ25COEMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYyxRQUFBLFFBQ0N6QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxrQkFDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNuQixNQUFBLENBQUF5QixLQUFLO2NBQUNDLEdBQUcsRUFBRXpFLE1BQU0sQ0FBQzBFLE9BQU87Y0FBRUMsR0FBRyxFQUFFM0UsTUFBTSxDQUFDc0I7WUFBSSxFQUFJLENBQ3ZDLEVBQ1Z3QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxrQkFDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGFBQUs5QyxTQUFTLEVBQUVFLElBQUksQ0FBTSxFQUMxQndCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGFBQUtsRSxNQUFNLEVBQUU0QixLQUFLLENBQU0sQ0FDZixDQUNELENBRVgsRUFFRGtCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLFlBQUlaLFdBQVcsQ0FBSyxFQUVwQlIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsaUJBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDakIsV0FBQSxDQUFBMkIsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVoQixTQUFTO2NBQUVpQixRQUFRLEVBQUVuQixVQUFVO2NBQUEsR0FBTUk7WUFBUSxHQUM5RVgsTUFBTSxDQUNDLENBQ0QsQ0FDSixFQUNOUCxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxjQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLE1BQUEsQ0FBQXlCLEtBQUs7Y0FDTEMsR0FBRyxFQUFDLDBDQUEwQztjQUM5Q0UsR0FBRyxFQUFDLDhCQUE4QjtjQUNsQ1AsU0FBUyxFQUFDO1lBQTRCLEVBQ3JDLENBQ0csQ0FDUztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQXRCLE1BQUEsR0FBQTVFLE9BQUE7VUFhTyxNQUFNOEcsaUJBQWlCLEdBQUE1RixPQUFBLENBQUE0RixpQkFBQSxHQUFHbEMsTUFBQSxDQUFBVyxPQUFLLENBQUN3QixhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUN2RSxNQUFNQyxvQkFBb0IsR0FBR0EsQ0FBQSxLQUFNcEMsTUFBQSxDQUFBVyxPQUFLLENBQUMwQixVQUFVLENBQUNILGlCQUFpQixDQUFDO1VBQUM1RixPQUFBLENBQUE4RixvQkFBQSxHQUFBQSxvQkFBQTs7Ozs7Ozs7Ozs7VUNkOUU7O1VBRUFFLE1BQUEsQ0FBQUMsY0FBQSxDQUFBakcsT0FBQTtZQUNBYyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQThDLEdBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBZ0YsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUErRSxXQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQTRFLE1BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUVNLFNBQVVxSCxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRWhILEtBQUs7Y0FBRXVCLEtBQUs7Y0FBRVk7WUFBTSxDQUFFLEdBQUcsSUFBQTRFLFFBQUEsQ0FBQUosb0JBQW9CLEdBQUU7WUFDdkQsTUFBTSxDQUFDSCxRQUFRLEVBQUVTLFdBQVcsQ0FBQyxHQUFHMUMsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDK0IsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRzVDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNELE1BQU07Y0FBRTlCLEtBQUs7Y0FBRTBCLFdBQVc7Y0FBRW9CLE9BQU87Y0FBRWlCO1lBQUssQ0FBRSxHQUFHcEgsS0FBSyxDQUFDc0IsS0FBSyxDQUFDRyxNQUFNO1lBQ2pFLE1BQU04RSxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCVSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1qSCxLQUFLLENBQUNtQyxNQUFNLEVBQUU7Y0FDcEI4RSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCRSxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxPQUNDNUMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYyxRQUFBLFFBQ0N6QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBa0IsR0FDbkN0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBNEMsV0FBVztjQUFDQyxNQUFNLEVBQUMsUUFBUTtjQUFDcEIsR0FBRyxFQUFFQyxPQUFPO2NBQUVDLEdBQUcsRUFBRS9DLEtBQUs7Y0FBRWtFLElBQUksRUFBQztZQUFJLEVBQUcsRUFDbkVoRCxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxhQUFLdEMsS0FBSyxDQUFNLEVBQ2hCa0IsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFJLEdBQUVkLFdBQVcsQ0FBSyxFQUNuQ1IsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQStDLFFBQVE7Y0FBQ2hDLElBQUksRUFBRTRCO1lBQUssRUFBSSxDQUNwQixDQUNFLEVBRVQ3QyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBZ0QsU0FBUztjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDckUsS0FBSyxFQUFFOUIsS0FBSyxDQUFDb0csVUFBVSxDQUFDdEU7WUFBSyxHQUM5QyxDQUFDbEIsTUFBTSxJQUFJLENBQUMrRSxXQUFXLElBQ3ZCM0MsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUSxFQUFFQSxRQUFRO2NBQUVELE9BQU8sRUFBRUE7WUFBTyxHQUM1RGhGLEtBQUssQ0FBQ1ksTUFBTSxDQUVkLENBQ1UsRUFFWCtFLFdBQVcsSUFDWDNDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNoQixNQUFBLENBQUFtQixLQUFLO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNGLFNBQVMsRUFBQztZQUFPLEdBQ3JDdEUsS0FBSyxDQUFDcUcsUUFBUSxDQUVoQixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFyRCxNQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQThFLEdBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBa0ksTUFBQSxHQUFBbEksT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBQ0EsSUFBQW1JLE1BQUEsR0FBQW5JLE9BQUE7VUFDQSxJQUFBb0ksT0FBQSxHQUFBcEksT0FBQTtVQUNBLElBQUFxSSxLQUFBLEdBQUFySSxPQUFBO1VBRUEsSUFBQXNJLFFBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBdUksYUFBQSxHQUFBdkksT0FBQTtVQUVPO1VBQVUsU0FDUlUsSUFBSUEsQ0FBQztZQUFFTDtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQytCLEtBQUssRUFBRW9HLFFBQVEsQ0FBQyxHQUFHNUQsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQ25GLEtBQUssQ0FBQytCLEtBQUssQ0FBQztZQUNyRCxNQUFNLEdBQUdxRyxRQUFRLENBQUMsR0FBRzdELE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUNuRixLQUFLLENBQUNzQixLQUFLLEVBQUUrRyxLQUFLLENBQUM7WUFDdkQ7Ozs7WUFJQSxNQUFNLENBQUNsRyxNQUFNLEVBQUVtRyxTQUFTLENBQUMsR0FBRy9ELE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUNuRixLQUFLLENBQUNzQixLQUFLLEVBQUVzRyxRQUFRLENBQUM7WUFDakUsTUFBTSxDQUFDVyxnQkFBZ0IsRUFBRUMsbUJBQW1CLENBQUMsR0FBR2pFLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUNuRixLQUFLLENBQUNzQixLQUFLLEVBQUVhLE1BQU0sQ0FBQztZQUNuRixNQUFNO2NBQUVaO1lBQUssQ0FBRSxHQUFHdkIsS0FBSztZQUN2QixJQUFBNkgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQ3pJLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJtSSxRQUFRLENBQUNuSSxLQUFLLENBQUMrQixLQUFLLENBQUM7Y0FDckJxRyxRQUFRLENBQUNwSSxLQUFLLENBQUNzQixLQUFLLEVBQUUrRyxLQUFLLENBQUM7Y0FDNUJHLG1CQUFtQixDQUFDeEksS0FBSyxDQUFDc0IsS0FBSyxFQUFFYSxNQUFNLENBQUM7Y0FDeENtRyxTQUFTLENBQUN0SSxLQUFLLEVBQUVzQixLQUFLLENBQUNzRyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDO1lBRUYsSUFBSTdGLEtBQUssSUFBSS9CLEtBQUssQ0FBQ2lDLFlBQVksRUFBRSxPQUFPc0MsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VDLGFBQUEsQ0FBQXRELFlBQVk7Y0FBQzVFLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3RFLElBQUkrQixLQUFLLElBQUksQ0FBQy9CLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxPQUFPeUMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsNkJBQXVCO1lBQ3pELElBQUksQ0FBQzVELEtBQUssRUFBRSxPQUFPd0MsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3NDLFFBQUEsQ0FBQVMsT0FBTyxPQUFHO1lBRTlCLE1BQU07Y0FBRWY7WUFBVSxDQUFFLEdBQUczSCxLQUFLLENBQUNzQixLQUFLO1lBRWxDLE1BQU1xSCxZQUFZLEdBQUc7Y0FDcEJwSCxLQUFLO2NBQ0xpRixRQUFRLEVBQUV4RyxLQUFLLENBQUN3RyxRQUFRO2NBQ3hCeEcsS0FBSztjQUNMMkgsVUFBVTtjQUNWeEY7YUFDQTtZQUVELE1BQU15RyxHQUFHLEdBQUcsa0JBQWtCO1lBQzlCLE9BQ0NyRSxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDb0IsUUFBQSxDQUFBTixpQkFBaUIsQ0FBQ29DLFFBQVE7Y0FBQ2xILEtBQUssRUFBRWdIO1lBQVksR0FDOUNwRSxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBbUIsYUFBYTtjQUFDQyxTQUFTLEVBQUUrQztZQUFHLEdBQzVCckUsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ29DLE9BQUEsQ0FBQWYsTUFBTSxPQUFHLEVBQ1RXLFVBQVUsQ0FBQ1UsS0FBSyxHQUFHOUQsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3FDLEtBQUEsQ0FBQWMsSUFBSSxPQUFHLEdBQUd2RSxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbUMsTUFBQSxDQUFBaUIsU0FBUyxPQUFHLENBQ3ZDLENBQ1MsQ0FDWTtVQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REEsSUFBQXhFLE1BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBOEUsR0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBRU87VUFBVSxTQUFVb0osU0FBU0EsQ0FBQTtZQUNuQyxNQUFNO2NBQUV4SDtZQUFLLENBQUUsR0FBRyxJQUFBd0YsUUFBQSxDQUFBSixvQkFBb0IsR0FBRTtZQUN4QyxPQUFPcEMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXVFLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFMUgsS0FBSyxDQUFDMkgsS0FBSztjQUFFQyxJQUFJLEVBQUM7WUFBTSxFQUFHO1VBQ3BEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFDLEtBQUEsR0FBQXpKLE9BQUE7VUFDQSxJQUFBNEUsTUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBRUEsSUFBQXFJLEtBQUEsR0FBQXJJLE9BQUE7VUFFTztVQUFVLFNBQVVtSixJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRW5CO1lBQVUsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQUosb0JBQW9CLEdBQUU7WUFFN0MsT0FBT3BDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNxQyxLQUFBLENBQUFjLElBQWE7Y0FBQ2pELFNBQVMsRUFBQyxjQUFjO2NBQUN3QyxLQUFLLEVBQUVWLFVBQVUsQ0FBQ1UsS0FBSztjQUFFZ0IsT0FBTyxFQUFFRCxLQUFBLENBQUFFO1lBQUksRUFBSTtVQUMxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBQyxXQUFBLEdBQUE1SixPQUFBO1VBQ0EsSUFBQTRFLE1BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQVVPO1VBQVUsU0FBVTJKLElBQUlBLENBQUM7WUFBRTlELElBQUksRUFBRWdFLElBQUk7WUFBRUM7VUFBSyxDQUFFO1lBQ3BELE1BQU07Y0FBRXpKLEtBQUs7Y0FBRXVCLEtBQUs7Y0FBRVk7WUFBTSxDQUFFLEdBQUcsSUFBQTRFLFFBQUEsQ0FBQUosb0JBQW9CLEdBQUU7WUFFdkQsTUFBTVosSUFBSSxHQUFHeUQsSUFBSSxDQUFDekQsSUFBSSxLQUFLLGlCQUFpQixHQUFHLFlBQVksR0FBR3lELElBQUksQ0FBQ3pELElBQUk7WUFFdkUsSUFBSTJELEdBQUcsR0FBRyxnQkFBZ0IxSixLQUFLLENBQUM0QixZQUFZLElBQUltRSxJQUFJLElBQUl5RCxJQUFJLENBQUN4SCxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLENBQUNHLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDc0gsSUFBSSxDQUFDekQsSUFBSSxDQUFDLEVBQUU7Y0FDbkcyRCxHQUFHLElBQUksU0FBU0YsSUFBSSxDQUFDRyxJQUFJLENBQUMzSCxFQUFFLEVBQUU7O1lBRy9CLE9BQ0N1QyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxhQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQzRELFdBQUEsQ0FBQUssWUFBWTtjQUNaN0QsSUFBSSxFQUFFeUQsSUFBSSxDQUFDekQsSUFBSTtjQUNmOEQsSUFBSSxFQUFFSCxHQUFHO2NBQ1RqRSxRQUFRLEVBQUUsQ0FBQ3RELE1BQU07Y0FDakJxSCxJQUFJLEVBQUVBLElBQUk7Y0FDVmpJLEtBQUssRUFBRTtnQkFBRSxHQUFHQSxLQUFLO2dCQUFFdUksS0FBSyxFQUFFOUosS0FBSyxDQUFDNkIsV0FBVyxDQUFDOEYsVUFBVSxDQUFDbUM7Y0FBSyxDQUFFO2NBQzlEQyxRQUFRLEVBQUUsS0FBSztjQUNmekMsTUFBTSxFQUFDO1lBQVUsRUFDaEIsQ0FDRTtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBN0MsR0FBQSxHQUFBOUUsT0FBQTtVQUVBLElBQUErRSxXQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQTZFLE1BQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBNEUsTUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBRU0sU0FBVStJLE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUFFMUksS0FBSztjQUFFdUIsS0FBSztjQUFFWTtZQUFNLENBQUUsR0FBRyxJQUFBNEUsUUFBQSxDQUFBSixvQkFBb0IsR0FBRTtZQUV2RCxPQUNDcEMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQW1CLGFBQWEsUUFDYnJCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFrQixHQUNuQ3RCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNuQixNQUFBLENBQUF5QixLQUFLO2NBQUNKLFNBQVMsRUFBQztZQUE2QixFQUFHLEVBQ2pEdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXVGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxFQUMzQzNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUF1RixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDbkMsRUFDVDNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUFnRCxTQUFTO2NBQUMwQyxPQUFPO1lBQUEsR0FDakI1RixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDakIsV0FBQSxDQUFBMkIsTUFBTTtjQUFDUixTQUFTLEVBQUMsYUFBYTtjQUFDUyxPQUFPLEVBQUM7WUFBUyxZQUV4QyxDQUNFLENBQ0c7VUFFbEIiLCJpZ25vcmVMaXN0IjpbXX0=