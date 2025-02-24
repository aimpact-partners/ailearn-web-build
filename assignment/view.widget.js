System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.8/main-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.8/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.8/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp038MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp038MainLayoutWidget;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_5 = _aimpactAilearnSdk110Tracking;
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
    }, function (_aimpactAilearnApp038ComponentsUi) {
      dependency_11 = _aimpactAilearnApp038ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_14 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp038ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp038ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.8"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.8/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.8/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.8/assignment/view.widget');
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
        hash: 994905093,
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
        hash: 850839619,
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
        hash: 404527828,
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
              url += `/chat/${item.chat?.id}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwidG9Mb3dlckNhc2UiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiaXNDb21tdW5pdHkiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21MaW5rIiwibmFtZSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsImNvbW11bml0eSIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJtZXNzYWdlIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50Iiwic2V0VGltZW91dCIsInJlc29sdmUiLCJlcnJvciIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkFzc2lnbm1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJzZXRGZXRjaGluZyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJvd25lciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlVzZXJEYXRhIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiYWNjZXNzZWQiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEFjY2VzcyIsImFjY2Vzc1Blcm1pc3Npb24iLCJzZXRBY2Nlc3NQZXJtaXNzaW9uIiwidXNlQmluZGVyIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiY29udHJvbCIsIkl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNoYXQiLCJBY3Rpdml0eUNhcmQiLCJocmVmIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjY2Vzcy1kZW5pZWQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUN6RCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBRyxPQUFBLENBQUFmLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWdCLFdBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsU0FBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLEtBQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUVBLElBQUF3QixlQUFBLEdBQUF4QixPQUFBO1VBQ00sTUFBT08sWUFBYSxTQUFRYyxNQUFBLENBQUFJLGFBQTJCO1lBQzVEQyxPQUFPO1lBQ1AsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsS0FBTSxHQUErQixJQUFJTCxNQUFBLENBQUFNLFlBQVksQ0FBQ0wsZUFBQSxDQUFBTSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBRUEsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUNGLEtBQUs7WUFDL0I7WUFDQSxJQUFJRyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQVIsS0FBTSxFQUFFUSxLQUFLO1lBQzFCO1lBQ0EsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBRixXQUFZLENBQUNFLEtBQUs7WUFDbkU7WUFDQSxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQSxJQUFJQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxNQUFNLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZGO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDZSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBVixXQUFZLEdBQUcsSUFBSVgsTUFBQSxDQUFBTSxZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFLLFdBQVksQ0FBQ1csS0FBSyxFQUFFO1lBQzFCO1lBRUEsTUFBTTdCLElBQUlBLENBQUNxQixFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQUEsRUFBRyxHQUFHQSxFQUFFO2dCQUNibEIsV0FBQSxDQUFBMkIsWUFBWSxDQUFDQyxLQUFLLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBZCxZQUFhLEdBQUdJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBVixLQUFNLEdBQUdQLFNBQUEsQ0FBQTRCLFFBQVEsQ0FBQ2pDLEdBQUcsQ0FBQztrQkFBRXNCO2dCQUFFLENBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBRTNDLE1BQU0sSUFBSSxDQUFDLENBQUFqQixLQUFNLENBQUNYLElBQUksQ0FBQztrQkFBRXFCO2dCQUFFLENBQUUsQ0FBQztnQkFFOUI7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxNQUFNLENBQUNDLFdBQVcsRUFBRSxDQUFDLEVBQUU7a0JBQ3BGLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLElBQUk7a0JBQ2xCOztnQkFHRCxNQUFNYSxXQUFXLEdBQUcsSUFBSSxDQUFDdEIsS0FBSyxDQUFDdUIsU0FBUyxDQUFDYixFQUFFLEtBQUssc0NBQXNDO2dCQUV0RixNQUFNYyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXhCLEtBQU0sQ0FBQ3VCLFNBQVMsQ0FBQ0UsSUFBSSxFQUFFLG9CQUFvQixJQUFJLENBQUMsQ0FBQXpCLEtBQU0sQ0FBQ3VCLFNBQVMsQ0FBQ2IsRUFBRSxFQUFFLENBQUM7Z0JBQ2xHLE1BQU1nQixhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixXQUFXLENBQUNvQixRQUFRLENBQUNDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0JBQ3pFLE1BQU1DLE1BQU0sR0FBR1AsV0FBVyxHQUFHSSxhQUFhLEdBQUdGLGFBQWE7Z0JBQzFELE1BQU1NLFVBQVUsR0FBRyxDQUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTdCLEtBQU0sQ0FBQ0csTUFBTSxDQUFDNEIsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZEdkMsV0FBQSxDQUFBMkIsWUFBWSxDQUFDYSxHQUFHLENBQUM7a0JBQ2hCQyxPQUFPLEVBQUUsSUFBSTtrQkFDYkgsVUFBVTtrQkFDVkksUUFBUSxFQUFFWixXQUFXLEdBQUcsR0FBRyxHQUFHLG9CQUFvQixJQUFJLENBQUMsQ0FBQXRCLEtBQU0sQ0FBQ3VCLFNBQVMsQ0FBQ2IsRUFBRTtpQkFDMUUsQ0FBQztlQUNGLENBQUMsT0FBT3lCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztnQkFDaEIsSUFBSUEsQ0FBQyxDQUFDRyxPQUFPLEtBQUssS0FBSyxFQUFFO2tCQUN4Qjs7Z0JBRUQsSUFBSUgsQ0FBQyxDQUFDRyxPQUFPLEtBQUssS0FBSyxFQUFFO2tCQUN4Qjs7ZUFFRCxTQUFTO2dCQUNULEtBQUssQ0FBQzdCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNRLFlBQVksRUFBRTs7WUFFckI7WUFFQSxNQUFNSixNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxNQUFNMEIsT0FBTyxHQUFHLElBQUk1QyxLQUFBLENBQUE2QyxjQUFjLEVBQUU7Z0JBRXBDLE1BQU0sSUFBSSxDQUFDLENBQUF4QyxLQUFNLENBQUN5QyxrQkFBa0IsRUFBRTtnQkFDdEM7Ozs7O2dCQUtBNUQsVUFBVSxDQUFDNkQsVUFBVSxDQUFDLE1BQUs7a0JBQzFCLElBQUksQ0FBQ3pCLFlBQVksRUFBRTtrQkFFbkJzQixPQUFPLENBQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQ1IsT0FBT0osT0FBTztlQUNkLENBQUMsT0FBT0osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNRLEtBQUssQ0FBQ1QsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1VLGFBQWFBLENBQUE7Y0FDbEIsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDOUMsS0FBSyxDQUFDK0Msc0JBQXNCLEVBQUU7Y0FFMUQsT0FBT0QsUUFBUTtZQUNoQjs7VUFDQXZELE9BQUEsQ0FBQVgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BIRCxJQUFBb0UsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxNQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLEdBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBOEUsV0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxNQUFBLEdBQUEvRSxPQUFBO1VBRU87VUFBVSxTQUNSZ0YsWUFBWUEsQ0FBQztZQUFFM0U7VUFBSyxDQUEyQjtZQUN2RCxNQUFNO2NBQUV1QjtZQUFLLENBQUUsR0FBR3ZCLEtBQUs7WUFFdkIsTUFBTTRFLE1BQU0sR0FBRzVFLEtBQUssQ0FBQ3NCLEtBQUssRUFBRWEsTUFBTSxFQUFFQyxXQUFXLEVBQUU7WUFDakQsTUFBTTtjQUFFaUIsS0FBSztjQUFFd0IsTUFBTTtjQUFFQyxXQUFXO2NBQUVDO1lBQVEsQ0FBRSxHQUFHeEQsS0FBSyxDQUFDcUQsTUFBTSxDQUFDLElBQUksYUFBYTtZQUUvRSxNQUFNLENBQUNWLEtBQUssRUFBRWMsUUFBUSxDQUFDLEdBQUdWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQVU7WUFDbEQsTUFBTSxDQUFDdEIsT0FBTyxFQUFFdUIsVUFBVSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQVU7WUFDdEQsTUFBTSxDQUFDRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHZixNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNSSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hELGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUlULE1BQU0sS0FBSyxTQUFTLEVBQUU7a0JBQ3pCLE1BQU01RSxLQUFLLENBQUNXLElBQUksQ0FBQ1gsS0FBSyxDQUFDZ0MsRUFBRSxDQUFDO2tCQUMxQjs7Z0JBR0QsTUFBTW9DLFFBQVEsR0FBRyxNQUFNcEUsS0FBSyxDQUFDbUUsYUFBYSxFQUFFO2dCQUU1QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFO2tCQUNyQkksUUFBUSxDQUFDWixRQUFRLENBQUNGLEtBQUssQ0FBQztrQkFDeEI7O2dCQUVEaUIsVUFBVSxDQUFDZixRQUFRLENBQUNtQixJQUFJLENBQUMzQixPQUFPLENBQUM7ZUFDakMsQ0FBQyxPQUFPSCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDVCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDRCLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1lBRXRCLENBQUM7WUFDRCxNQUFNRyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFSjtZQUFVLENBQUU7WUFDekMsTUFBTTtjQUFFdkMsU0FBUztjQUFFcEI7WUFBTSxDQUFFLEdBQUd6QixLQUFLLENBQUNzQixLQUFLLENBQUNtRSxVQUFVO1lBQ3BELE9BQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBbUIsYUFBYTtjQUFDQyxTQUFTLEVBQUM7WUFBK0IsR0FDdEQxQixLQUFLLElBQUlJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNoQixNQUFBLENBQUFtQixLQUFLO2NBQUNDLElBQUksRUFBQztZQUFRLEdBQUU1QixLQUFLLENBQVMsRUFDN0NOLE9BQU8sSUFBSVUsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2hCLE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQVMsR0FBRWxDLE9BQU8sQ0FBUyxFQUNuRFUsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJ0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxpQkFDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGFBQUtyQyxLQUFLLENBQU0sRUFDaEJpQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxhQUFLWCxRQUFRLENBQU0sQ0FDWCxFQUVSbEMsU0FBUyxJQUFJcEIsTUFBTSxJQUNuQjZDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUFwQixNQUFBLENBQUFXLE9BQUEsQ0FBQWMsUUFBQSxRQUNDekIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsa0JBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsTUFBQSxDQUFBeUIsS0FBSztjQUFDQyxHQUFHLEVBQUV4RSxNQUFNLENBQUN5RSxPQUFPO2NBQUVDLEdBQUcsRUFBRTFFLE1BQU0sQ0FBQ3NCO1lBQUksRUFBSSxDQUN2QyxFQUNWdUIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsa0JBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxhQUFLN0MsU0FBUyxFQUFFRSxJQUFJLENBQU0sRUFDMUJ1QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxhQUFLakUsTUFBTSxFQUFFNEIsS0FBSyxDQUFNLENBQ2YsQ0FDRCxDQUVYLEVBRURpQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxZQUFJWixXQUFXLENBQUssRUFFcEJSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGlCQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFaEIsU0FBUztjQUFFaUIsUUFBUSxFQUFFbkIsVUFBVTtjQUFBLEdBQU1JO1lBQVEsR0FDOUVYLE1BQU0sQ0FDQyxDQUNELENBQ0osRUFDTlAsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNuQixNQUFBLENBQUF5QixLQUFLO2NBQ0xDLEdBQUcsRUFBQywwQ0FBMEM7Y0FDOUNFLEdBQUcsRUFBQyw4QkFBOEI7Y0FDbENQLFNBQVMsRUFBQztZQUE0QixFQUNyQyxDQUNHLENBQ1M7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZBLElBQUF0QixNQUFBLEdBQUEzRSxPQUFBO1VBYU8sTUFBTTZHLGlCQUFpQixHQUFBM0YsT0FBQSxDQUFBMkYsaUJBQUEsR0FBR2xDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDd0IsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDdkUsTUFBTUMsb0JBQW9CLEdBQUdBLENBQUEsS0FBTXBDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDMEIsVUFBVSxDQUFDSCxpQkFBaUIsQ0FBQztVQUFDM0YsT0FBQSxDQUFBNkYsb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7O1VDZDlFOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQWhHLE9BQUE7WUFDQWMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE2QyxHQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQStFLE1BQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBOEUsV0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW1ILFFBQUEsR0FBQW5ILE9BQUE7VUFFTSxTQUFVb0gsTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUUvRyxLQUFLO2NBQUV1QixLQUFLO2NBQUVZO1lBQU0sQ0FBRSxHQUFHLElBQUEyRSxRQUFBLENBQUFKLG9CQUFvQixHQUFFO1lBQ3ZELE1BQU0sQ0FBQ0gsUUFBUSxFQUFFUyxXQUFXLENBQUMsR0FBRzFDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQytCLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUc1QyxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMzRCxNQUFNO2NBQUU3QixLQUFLO2NBQUV5QixXQUFXO2NBQUVvQixPQUFPO2NBQUVpQjtZQUFLLENBQUUsR0FBR25ILEtBQUssQ0FBQ3NCLEtBQUssQ0FBQ0csTUFBTTtZQUNqRSxNQUFNNkUsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQlUsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNaEgsS0FBSyxDQUFDbUMsTUFBTSxFQUFFO2NBQ3BCNkUsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkUsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDO1lBRUQsT0FDQzVDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUFwQixNQUFBLENBQUFXLE9BQUEsQ0FBQWMsUUFBQSxRQUNDekIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQTRDLFdBQVc7Y0FBQ0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ3BCLEdBQUcsRUFBRUMsT0FBTztjQUFFQyxHQUFHLEVBQUU5QyxLQUFLO2NBQUVpRSxJQUFJLEVBQUM7WUFBSSxFQUFHLEVBQ25FaEQsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsYUFBS3JDLEtBQUssQ0FBTSxFQUNoQmlCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGNBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFHRSxTQUFTLEVBQUM7WUFBSSxHQUFFZCxXQUFXLENBQUssRUFDbkNSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUErQyxRQUFRO2NBQUNoQyxJQUFJLEVBQUU0QjtZQUFLLEVBQUksQ0FDcEIsQ0FDRSxFQUVUN0MsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQWdELFNBQVM7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ3BFLEtBQUssRUFBRTlCLEtBQUssQ0FBQ21HLFVBQVUsQ0FBQ3JFO1lBQUssR0FDOUMsQ0FBQ2xCLE1BQU0sSUFBSSxDQUFDOEUsV0FBVyxJQUN2QjNDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNqQixXQUFBLENBQUEyQixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVEsRUFBRUEsUUFBUTtjQUFFRCxPQUFPLEVBQUVBO1lBQU8sR0FDNUQvRSxLQUFLLENBQUNZLE1BQU0sQ0FFZCxDQUNVLEVBRVg4RSxXQUFXLElBQ1gzQyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaEIsTUFBQSxDQUFBbUIsS0FBSztjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDRixTQUFTLEVBQUM7WUFBTyxHQUNyQ3JFLEtBQUssQ0FBQ29HLFFBQVEsQ0FFaEIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBckQsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE2RSxHQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQWlJLE1BQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBbUgsUUFBQSxHQUFBbkgsT0FBQTtVQUNBLElBQUFrSSxNQUFBLEdBQUFsSSxPQUFBO1VBQ0EsSUFBQW1JLE9BQUEsR0FBQW5JLE9BQUE7VUFDQSxJQUFBb0ksS0FBQSxHQUFBcEksT0FBQTtVQUVBLElBQUFxSSxRQUFBLEdBQUFySSxPQUFBO1VBQ0EsSUFBQXNJLGFBQUEsR0FBQXRJLE9BQUE7VUFFTztVQUFVLFNBQ1JVLElBQUlBLENBQUM7WUFBRUw7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUMrQixLQUFLLEVBQUVtRyxRQUFRLENBQUMsR0FBRzVELE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUNsRixLQUFLLENBQUMrQixLQUFLLENBQUM7WUFFckQ7Ozs7WUFJQSxNQUFNLENBQUNJLE1BQU0sRUFBRWdHLFNBQVMsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQ2xGLEtBQUssQ0FBQ3NCLEtBQUssRUFBRXFHLFFBQVEsQ0FBQztZQUNqRSxNQUFNLENBQUNTLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHL0QsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQ2xGLEtBQUssQ0FBQ3NCLEtBQUssRUFBRWEsTUFBTSxDQUFDO1lBQ25GLE1BQU07Y0FBRVo7WUFBSyxDQUFFLEdBQUd2QixLQUFLO1lBQ3ZCLElBQUE0SCxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDdEksS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QmtJLFFBQVEsQ0FBQ2xJLEtBQUssQ0FBQytCLEtBQUssQ0FBQztjQUVyQnNHLG1CQUFtQixDQUFDckksS0FBSyxDQUFDc0IsS0FBSyxFQUFFYSxNQUFNLENBQUM7Y0FDeENnRyxTQUFTLENBQUNuSSxLQUFLLEVBQUVzQixLQUFLLENBQUNxRyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDO1lBRUYsSUFBSTVGLEtBQUssSUFBSS9CLEtBQUssQ0FBQ2lDLFlBQVksRUFBRSxPQUFPcUMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VDLGFBQUEsQ0FBQXRELFlBQVk7Y0FBQzNFLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3RFLElBQUkrQixLQUFLLElBQUksQ0FBQy9CLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxPQUFPd0MsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsNkJBQXVCO1lBQ3pELElBQUksQ0FBQzNELEtBQUssRUFBRSxPQUFPdUMsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3NDLFFBQUEsQ0FBQU8sT0FBTyxPQUFHO1lBRTlCLE1BQU07Y0FBRWI7WUFBVSxDQUFFLEdBQUcxSCxLQUFLLENBQUNzQixLQUFLO1lBRWxDLE1BQU1rSCxZQUFZLEdBQUc7Y0FDcEJqSCxLQUFLO2NBQ0xnRixRQUFRLEVBQUV2RyxLQUFLLENBQUN1RyxRQUFRO2NBQ3hCdkcsS0FBSztjQUNMMEgsVUFBVTtjQUNWdkY7YUFDQTtZQUVELE1BQU1zRyxHQUFHLEdBQUcsa0JBQWtCO1lBQzlCLE9BQ0NuRSxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDb0IsUUFBQSxDQUFBTixpQkFBaUIsQ0FBQ2tDLFFBQVE7Y0FBQy9HLEtBQUssRUFBRTZHO1lBQVksR0FDOUNsRSxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBbUIsYUFBYTtjQUFDQyxTQUFTLEVBQUU2QztZQUFHLEdBQzVCbkUsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ29DLE9BQUEsQ0FBQWYsTUFBTSxPQUFHLEVBQ1RXLFVBQVUsQ0FBQ2lCLEtBQUssR0FBR3JFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNxQyxLQUFBLENBQUFhLElBQUksT0FBRyxHQUFHdEUsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ21DLE1BQUEsQ0FBQWdCLFNBQVMsT0FBRyxDQUN2QyxDQUNTLENBQ1k7VUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF2RSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTZFLEdBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBbUgsUUFBQSxHQUFBbkgsT0FBQTtVQUVPO1VBQVUsU0FBVWtKLFNBQVNBLENBQUE7WUFDbkMsTUFBTTtjQUFFdEg7WUFBSyxDQUFFLEdBQUcsSUFBQXVGLFFBQUEsQ0FBQUosb0JBQW9CLEdBQUU7WUFDeEMsT0FBT3BDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUFzRSxTQUFTO2NBQUNDLElBQUksRUFBRXhILEtBQUssQ0FBQ3lILEtBQUs7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sRUFBRztVQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBQyxLQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQTJFLE1BQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBbUgsUUFBQSxHQUFBbkgsT0FBQTtVQUVBLElBQUFvSSxLQUFBLEdBQUFwSSxPQUFBO1VBRU87VUFBVSxTQUFVaUosSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVsQjtZQUFVLENBQUUsR0FBRyxJQUFBWixRQUFBLENBQUFKLG9CQUFvQixHQUFFO1lBRTdDLE9BQU9wQyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcUMsS0FBQSxDQUFBYSxJQUFhO2NBQUNoRCxTQUFTLEVBQUMsY0FBYztjQUFDK0MsS0FBSyxFQUFFakIsVUFBVSxDQUFDaUIsS0FBSztjQUFFUSxPQUFPLEVBQUVELEtBQUEsQ0FBQUU7WUFBSSxFQUFJO1VBQzFGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFDLFdBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBMkUsTUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFtSCxRQUFBLEdBQUFuSCxPQUFBO1VBVU87VUFBVSxTQUFVeUosSUFBSUEsQ0FBQztZQUFFN0QsSUFBSSxFQUFFK0QsSUFBSTtZQUFFQztVQUFLLENBQUU7WUFDcEQsTUFBTTtjQUFFdkosS0FBSztjQUFFdUIsS0FBSztjQUFFWTtZQUFNLENBQUUsR0FBRyxJQUFBMkUsUUFBQSxDQUFBSixvQkFBb0IsR0FBRTtZQUV2RCxNQUFNWixJQUFJLEdBQUd3RCxJQUFJLENBQUN4RCxJQUFJLEtBQUssaUJBQWlCLEdBQUcsWUFBWSxHQUFHd0QsSUFBSSxDQUFDeEQsSUFBSTtZQUV2RSxJQUFJMEQsR0FBRyxHQUFHLGdCQUFnQnhKLEtBQUssQ0FBQzRCLFlBQVksSUFBSWtFLElBQUksSUFBSXdELElBQUksQ0FBQ3RILEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsQ0FBQ0csTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDRCxRQUFRLENBQUNvSCxJQUFJLENBQUN4RCxJQUFJLENBQUMsRUFBRTtjQUNuRzBELEdBQUcsSUFBSSxTQUFTRixJQUFJLENBQUNHLElBQUksRUFBRXpILEVBQUUsRUFBRTs7WUFHaEMsT0FDQ3NDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGFBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDMkQsV0FBQSxDQUFBSyxZQUFZO2NBQ1o1RCxJQUFJLEVBQUV3RCxJQUFJLENBQUN4RCxJQUFJO2NBQ2Y2RCxJQUFJLEVBQUVILEdBQUc7Y0FDVGhFLFFBQVEsRUFBRSxDQUFDckQsTUFBTTtjQUNqQm1ILElBQUksRUFBRUEsSUFBSTtjQUNWL0gsS0FBSyxFQUFFO2dCQUFFLEdBQUdBLEtBQUs7Z0JBQUVxSSxLQUFLLEVBQUU1SixLQUFLLENBQUM2QixXQUFXLENBQUM2RixVQUFVLENBQUNrQztjQUFLLENBQUU7Y0FDOURDLFFBQVEsRUFBRSxLQUFLO2NBQ2Z4QyxNQUFNLEVBQUM7WUFBVSxFQUNoQixDQUNFO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUE3QyxHQUFBLEdBQUE3RSxPQUFBO1VBRUEsSUFBQThFLFdBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBNEUsTUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW1ILFFBQUEsR0FBQW5ILE9BQUE7VUFFTSxTQUFVNEksT0FBT0EsQ0FBQTtZQUN0QixNQUFNO2NBQUV2SSxLQUFLO2NBQUV1QixLQUFLO2NBQUVZO1lBQU0sQ0FBRSxHQUFHLElBQUEyRSxRQUFBLENBQUFKLG9CQUFvQixHQUFFO1lBRXZELE9BQ0NwQyxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBbUIsYUFBYSxRQUNickIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLE1BQUEsQ0FBQXlCLEtBQUs7Y0FBQ0osU0FBUyxFQUFDO1lBQTZCLEVBQUcsRUFDakR0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBc0YsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLEVBQzNDMUYsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXNGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUNuQyxFQUNUMUYsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQWdELFNBQVM7Y0FBQ3lDLE9BQU87WUFBQSxHQUNqQjNGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNqQixXQUFBLENBQUEyQixNQUFNO2NBQUNSLFNBQVMsRUFBQyxhQUFhO2NBQUNTLE9BQU8sRUFBQztZQUFTLFlBRXhDLENBQ0UsQ0FDRztVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==