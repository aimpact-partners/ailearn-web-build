System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card"], function (_export, _context2) {
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
        hash: 2399046716,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiVHJhY2tpbmciLCJpbmNsdWRlcyIsImFjY2VzcyIsImlzQ29tbXVuaXR5IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tTGluayIsIm5hbWUiLCJjb21tdW5pdHlMaW5rIiwiZW50aXRpZXMiLCJjb21tdW5pdHkiLCJwYXJlbnQiLCJicmVhZGNydW1iIiwidGl0bGUiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsInRyYWNlIiwibWVzc2FnZSIsImxvZyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZXF1ZXN0QWNjZXNzIiwicmVzcG9uc2UiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiX3JlYWN0IiwiX2ltYWdlIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJBY2Nlc3NEZW5pZWQiLCJzdGF0dXMiLCJ0b0xvd2VyQ2FzZSIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImFzc2lnbm1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkFzc2lnbm1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJzZXRGZXRjaGluZyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJvd25lciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic2l6ZSIsIlVzZXJEYXRhIiwiUGFnZVRpdGxlIiwiYXMiLCJhY3Rpdml0aWVzIiwiYWNjZXNzZWQiLCJfaG9va3MiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfcHJlbG9hZCIsIl9hY2Nlc3NEZW5pZWQiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRBY2Nlc3MiLCJhY2Nlc3NQZXJtaXNzaW9uIiwic2V0QWNjZXNzUGVybWlzc2lvbiIsInVzZUJpbmRlciIsImFjY2Vzc0RlbmllZCIsIlByZWxvYWQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJQcm92aWRlciIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsImF0dHJzIiwiaHJlZiIsIkFjdGl2aXR5Q2FyZCIsInR5cGVzIiwiYXVkaWVuY2UiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByZWxvYWQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJ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LElBQUksRUFBRUgsR0FBRztjQUNUbEUsUUFBUSxFQUFFLENBQUMvQyxNQUFNO2NBQ2pCK0csSUFBSSxFQUFFQSxJQUFJO2NBQ1ZqSSxLQUFLLEVBQUU7Z0JBQUUsR0FBR0EsS0FBSztnQkFBRXdJLEtBQUssRUFBRTdKLEtBQUssQ0FBQzJCLFdBQVcsQ0FBQzZGLFVBQVUsQ0FBQ3FDO2NBQUssQ0FBRTtjQUM5REMsUUFBUSxFQUFFLEtBQUs7Y0FDZjNDLE1BQU0sRUFBQztZQUFZLEVBQ2xCLENBQ0U7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQTlDLEdBQUEsR0FBQTFFLE9BQUE7VUFFQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUVNLFNBQVU2SSxPQUFPQSxDQUFBO1lBQ3RCLE1BQU07Y0FBRXhJLEtBQUs7Y0FBRXFCLEtBQUs7Y0FBRWtCO1lBQU0sQ0FBRSxHQUFHLElBQUFxRSxRQUFBLENBQUFKLG9CQUFvQixHQUFFO1lBRXZELE9BQ0NyQyxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsR0FBQSxDQUFBb0IsYUFBYSxRQUNidEIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DdkIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQTBCLEtBQUs7Y0FBQ0osU0FBUyxFQUFDO1lBQTZCLEVBQUcsRUFDakR2QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsR0FBQSxDQUFBMEYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLEVBQzNDOUYsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLEdBQUEsQ0FBQTBGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUNuQyxFQUNUOUYsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLEdBQUEsQ0FBQWlELFNBQVM7Y0FBQzRDLE9BQU87WUFBQSxHQUNqQi9GLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNsQixXQUFBLENBQUE0QixNQUFNO2NBQUNSLFNBQVMsRUFBQyxhQUFhO2NBQUNTLE9BQU8sRUFBQztZQUFTLFlBRXhDLENBQ0UsQ0FDRztVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==