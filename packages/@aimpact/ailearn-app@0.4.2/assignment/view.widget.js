System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/list", "@aimpact/ailearn-app@0.4.2/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive210Model) {
      dependency_6 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi102Image) {
      dependency_10 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_11 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi102Components) {
      dependency_12 = _pragmateUi102Components;
    }, function (_pragmateUi102Alert) {
      dependency_13 = _pragmateUi102Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102List) {
      dependency_16 = _pragmateUi102List;
    }, function (_aimpactAilearnApp042ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp042ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/assignment/view.widget');
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
        hash: 757583212,
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
            name = 'assignment-view';
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
                globalThis.setTimeout(() => {
                  super.ready = true;
                  this.trigger('change');
                }, 100);
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
        hash: 2914624921,
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
            console.log(module.picture);
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
            }, _react.default.createElement("section", null, _react.default.createElement(_ui.EntityImage, {
              src: module.picture,
              entity: module,
              alt: module.name,
              size: "xs"
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
        hash: 3283073233,
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
            if (!!access && ['conversation', 'content-theory', 'debate', 'character-talk', 'free-conversation', 'exercise'].includes(item.type)) {
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
        hash: 2783713030,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          function Preload() {
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              className: "entity-image image--preload"
            }), _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "100px"
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "300px"
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "300px"
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "300px"
            })))), _react.default.createElement(_ui.PageTitle, {
              preload: true,
              style: {
                height: '42px'
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJuYW1lIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiYXNzaWdubWVudElkIiwiZ2xvYmFsVGV4dHMiLCJmb3VuZCIsInJlYWR5IiwiaWQiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImlzQ29tbXVuaXR5IiwiY29tbXVuaXR5IiwiY2xhc3Nyb29tTGluayIsImNsYXNzcm9vbSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwicmVzb2x2ZSIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImxvZyIsInBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJlbnRpdHkiLCJhbHQiLCJzaXplIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkltYWdlIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm93bmVyIiwiVXNlckRhdGEiLCJQYWdlVGl0bGUiLCJhcyIsImFjdGl2aXRpZXMiLCJhY2Nlc3NlZCIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsIl9ob29rcyIsInVzZVN0b3JlIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiY29udHJvbCIsIkl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNoYXQiLCJBY3Rpdml0eUNhcmQiLCJocmVmIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCIsInN0eWxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FB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