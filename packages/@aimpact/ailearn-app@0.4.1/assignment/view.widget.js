System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.4.1/components/module-card"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AccessDenied: void 0,
    View: void 0,
    EmptyList: void 0,
    List: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_11 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp041ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/rvd", "0.4.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/assignment/view.widget');
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
        hash: 778901761,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
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
              return this.model.found && ['not_member', 'pending', 'invited'].includes(this.#model.access.toLowerCase());
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
                const isCommunity = this.model.community;
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
                if (e.message === '404' || e.code === 404) {
                  return;
                }
                if (e.message === '403') {
                  return;
                }
                console.error(e);
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
        hash: 1569462442,
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
            } = store.model;
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
        hash: 3510865615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _preload = require("./preload");
          var _accessDenied = require("./access-denied");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function View({
            store
          }) {
            (0, _hooks.useStore)(store);
            const {
              texts,
              ready
            } = store;
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
              access: store.model?.accessed
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
        hash: 4164586609,
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
          function Preload() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwidG9Mb3dlckNhc2UiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiaXNDb21tdW5pdHkiLCJjb21tdW5pdHkiLCJjbGFzc3Jvb21MaW5rIiwiY2xhc3Nyb29tIiwibmFtZSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVxdWVzdEFjY2VzcyIsInJlc3BvbnNlIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsIl9yZWFjdCIsIl9pbWFnZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiQWNjZXNzRGVuaWVkIiwic3RhdHVzIiwiYWN0aW9uIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsInNldEVycm9yIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiZGF0YSIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJBbGVydCIsInR5cGUiLCJGcmFnbWVudCIsIkltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZmV0Y2hpbmciLCJBc3NpZ25tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ25tZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jb250ZXh0IiwiSGVhZGVyIiwic2V0RmV0Y2hpbmciLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwib3duZXIiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNpemUiLCJVc2VyRGF0YSIsIlBhZ2VUaXRsZSIsImFzIiwiYWN0aXZpdGllcyIsImFjY2Vzc2VkIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX3ByZWxvYWQiLCJfYWNjZXNzRGVuaWVkIiwiX2hvb2tzIiwidXNlU3RvcmUiLCJQcmVsb2FkIiwiY29udGV4dFZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJpdGVtcyIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxL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