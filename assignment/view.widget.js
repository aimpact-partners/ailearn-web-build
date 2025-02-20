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
        hash: 4254057311,
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
              return ['not_member', 'pending', 'invited'].includes(this.#model.access);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImlzQ29tbXVuaXR5IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tTGluayIsIm5hbWUiLCJjb21tdW5pdHlMaW5rIiwiZW50aXRpZXMiLCJjb21tdW5pdHkiLCJwYXJlbnQiLCJicmVhZGNydW1iIiwidGl0bGUiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsInRyYWNlIiwibWVzc2FnZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZXF1ZXN0QWNjZXNzIiwicmVzcG9uc2UiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiX3JlYWN0IiwiX2ltYWdlIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJBY2Nlc3NEZW5pZWQiLCJzdGF0dXMiLCJ0b0xvd2VyQ2FzZSIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkFzc2lnbm1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJzZXRGZXRjaGluZyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJvd25lciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlVzZXJEYXRhIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiYWNjZXNzZWQiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJhY2Nlc3NQZXJtaXNzaW9uIiwic2V0QWNjZXNzUGVybWlzc2lvbiIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJQcm92aWRlciIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NB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