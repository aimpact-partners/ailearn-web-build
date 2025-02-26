System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.16/main-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.16/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.16/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0316MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0316MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_14 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0316ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp0316ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.16/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/assignment/view.widget');
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
        hash: 3812932298,
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
                const isCommunity = this.model.community || this.model.classroom.id === '8843c24a-e594-47ef-bed5-b6fd742c5758';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwidG9Mb3dlckNhc2UiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiaXNDb21tdW5pdHkiLCJjb21tdW5pdHkiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21MaW5rIiwibmFtZSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJtZXNzYWdlIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50Iiwic2V0VGltZW91dCIsInJlc29sdmUiLCJlcnJvciIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkFzc2lnbm1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJzZXRGZXRjaGluZyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJvd25lciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlVzZXJEYXRhIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiYWNjZXNzZWQiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEFjY2VzcyIsImFjY2Vzc1Blcm1pc3Npb24iLCJzZXRBY2Nlc3NQZXJtaXNzaW9uIiwidXNlQmluZGVyIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiY29udHJvbCIsIkl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNoYXQiLCJBY3Rpdml0eUNhcmQiLCJocmVmIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjY2Vzcy1kZW5pZWQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFB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