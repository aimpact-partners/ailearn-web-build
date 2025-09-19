System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.6.1/components/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/components/module-card"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive211Model) {
      dependency_6 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi108Image) {
      dependency_10 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_11 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_pragmateUi108Alert) {
      dependency_13 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_15 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_16 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108List) {
      dependency_17 = _pragmateUi108List;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_18 = _aimpactAilearnApp061ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/shared/hooks', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/ailearn-app/components/module-card', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/assignment/view.widget');
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
        hash: 90931320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
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
              return await this.#model.accessToAssignment();
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
        hash: 2944529261,
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
        hash: 3997665499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Header() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const {
              title,
              description,
              picture,
              owner
            } = store.model.module;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "assigment-header__container"
            }, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("div", {
              className: "flex flex-container space-between"
            }, _react.default.createElement("h1", null, title))), _react.default.createElement("div", {
              className: "assignment-header__detail flex"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title,
              size: "xs"
            }), _react.default.createElement("div", null, _react.default.createElement("p", {
              className: "p1"
            }, description), _react.default.createElement(_ui.UserData, {
              data: owner
            })))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3251983904,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, {
              fullHeight: false,
              className: "assignment-view"
            }, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_header.Header, null))), _react.default.createElement("div", {
              className: "neutral-container"
            }, _react.default.createElement(_ui.PageContainer, {
              fullHeight: false
            }, activities.items ? _react.default.createElement(_list.List, null) : _react.default.createElement(_empty.EmptyList, null))));
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
        hash: 3297260875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function List() {
            const {
              activities,
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const [showMessage, setShowMessage] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(false);
            const onClick = async () => {
              try {
                setFetching(true);
                await store.access();
                setShowMessage(true);
              } catch (e) {
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageTitle, {
              as: "h3",
              title: texts.activities.title
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: fetching,
              onClick: onClick
            }, texts.access)), showMessage && _react.default.createElement(_alert.Alert, {
              type: "success",
              className: "mt-10"
            }, texts.accessed), error && _react.default.createElement(_alert.Alert, {
              type: "error",
              className: "mt-10 mb-15"
            }, store.globalTexts.errors.DEFAULT_ERROR), _react.default.createElement(_list.List, {
              className: "entity__list mt-15",
              items: activities.items,
              control: _item.Item
            }));
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
        hash: 1889368645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Preload() {
            return _react.default.createElement(_ui.PageContainer, {
              className: "assignment-view"
            }, _react.default.createElement("div", {
              className: "assigment-header__container"
            }, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "22px",
              width: "100px"
            }))), _react.default.createElement("div", {
              className: "assignment-header__detail flex"
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
            })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibmFtZSIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFzc2lnbm1lbnRJZCIsImdsb2JhbFRleHRzIiwiZm91bmQiLCJyZWFkeSIsImlkIiwiYWNjZXNzRGVuaWVkIiwiaW5jbHVkZXMiLCJhY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiVHJhY2tpbmciLCJpc0NvbW11bml0eSIsImNvbW11bml0eSIsImNsYXNzcm9vbUxpbmsiLCJjbGFzc3Jvb20iLCJjb21tdW5pdHlMaW5rIiwiZW50aXRpZXMiLCJwYXJlbnQiLCJicmVhZGNydW1iIiwidGl0bGUiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwibWVzc2FnZSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsImFjY2Vzc1RvQXNzaWdubWVudCIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJzaXplIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkltYWdlIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIl9pY29ucyIsIkhlYWRlciIsIm93bmVyIiwiQXBwSWNvbiIsImljb24iLCJVc2VyRGF0YSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsIl9ob29rcyIsInVzZVN0b3JlIiwiUHJlbG9hZCIsImFjdGl2aXRpZXMiLCJjb250ZXh0VmFsdWUiLCJhY2Nlc3NlZCIsIlByb3ZpZGVyIiwiZnVsbEhlaWdodCIsIml0ZW1zIiwiTGlzdCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsIl9pdGVtIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsInNldEZldGNoaW5nIiwiUGFnZVRpdGxlIiwiYXMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29udHJvbCIsIkl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNoYXQiLCJBY3Rpdml0eUNhcmQiLCJocmVmIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3cy9oZWFkZXIudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiLy90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi8vdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUN6RCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBRyxPQUFBLENBQUFmLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWdCLFdBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsU0FBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBRUEsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFFQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUWMsTUFBQSxDQUFBRyxhQUEyQjtZQUM1REMsT0FBTztZQUNQQyxJQUFJLEdBQUcsaUJBQWlCO1lBQ3hCLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLEtBQU0sR0FBK0IsSUFBSU4sTUFBQSxDQUFBTyxZQUFZLENBQUNOLGVBQUEsQ0FBQU8sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLENBQUFDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDRixLQUFLO1lBQy9CO1lBQ0EsSUFBSUcsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFSLEtBQU0sRUFBRVEsS0FBSztZQUMxQjtZQUNBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNRLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUYsV0FBWSxDQUFDRSxLQUFLO1lBQ25FO1lBQ0EsQ0FBQUMsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBRUEsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxNQUFNLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQzNHO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDZSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBVixXQUFZLEdBQUcsSUFBSVosTUFBQSxDQUFBTyxZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFLLFdBQVksQ0FBQ1csS0FBSyxFQUFFO1lBQzFCO1lBRUEsTUFBTTdCLElBQUlBLENBQUNxQixFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQUEsRUFBRyxHQUFHQSxFQUFFO2dCQUNibEIsV0FBQSxDQUFBMkIsWUFBWSxDQUFDQyxLQUFLLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBZCxZQUFhLEdBQUdJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBVixLQUFNLEdBQUdQLFNBQUEsQ0FBQTRCLFFBQVEsQ0FBQ2pDLEdBQUcsQ0FBQztrQkFBRXNCO2dCQUFFLENBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBRTNDLE1BQU0sSUFBSSxDQUFDLENBQUFqQixLQUFNLENBQUNYLElBQUksQ0FBQztrQkFBRXFCO2dCQUFFLENBQUUsQ0FBQztnQkFFOUI7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxNQUFNLENBQUNDLFdBQVcsRUFBRSxDQUFDLEVBQUU7a0JBQ3BGLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLElBQUk7a0JBQ2xCOztnQkFHRCxNQUFNYSxXQUFXLEdBQUcsSUFBSSxDQUFDdEIsS0FBSyxDQUFDdUIsU0FBUztnQkFFeEMsTUFBTUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUF4QixLQUFNLENBQUN5QixTQUFTLENBQUMxQixJQUFJLEVBQUUsb0JBQW9CLElBQUksQ0FBQyxDQUFBQyxLQUFNLENBQUN5QixTQUFTLENBQUNmLEVBQUUsRUFBRSxDQUFDO2dCQUNsRyxNQUFNZ0IsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDbkIsV0FBVyxDQUFDb0IsUUFBUSxDQUFDSixTQUFTLEVBQUUsWUFBWSxDQUFDO2dCQUN6RSxNQUFNSyxNQUFNLEdBQUdOLFdBQVcsR0FBR0ksYUFBYSxHQUFHRixhQUFhO2dCQUMxRCxNQUFNSyxVQUFVLEdBQUcsQ0FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE1QixLQUFNLENBQUNHLE1BQU0sQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO2dCQUV2RHRDLFdBQUEsQ0FBQTJCLFlBQVksQ0FBQ1ksR0FBRyxDQUFDO2tCQUNoQkMsT0FBTyxFQUFFLElBQUk7a0JBQ2JILFVBQVU7a0JBQ1ZJLFFBQVEsRUFBRVgsV0FBVyxHQUFHLEdBQUcsR0FBRyxvQkFBb0IsSUFBSSxDQUFDLENBQUF0QixLQUFNLENBQUN5QixTQUFTLENBQUNmLEVBQUU7aUJBQzFFLENBQUM7ZUFDRixDQUFDLE9BQU93QixDQUFDLEVBQUU7Z0JBQ1gsSUFBSUEsQ0FBQyxDQUFDQyxPQUFPLEtBQUssS0FBSyxJQUFJRCxDQUFDLENBQUNFLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQzFDOztnQkFFRCxJQUFJRixDQUFDLENBQUNDLE9BQU8sS0FBSyxLQUFLLEVBQUU7a0JBQ3hCOztnQkFFREUsT0FBTyxDQUFDQyxLQUFLLENBQUNKLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUckQsVUFBVSxDQUFDMEQsVUFBVSxDQUFDLE1BQUs7a0JBQzFCLEtBQUssQ0FBQzlCLEtBQUssR0FBRyxJQUFJO2tCQUVsQixJQUFJLENBQUMrQixPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDOztZQUVUO1lBRUEsTUFBTTNCLE1BQU1BLENBQUE7Y0FDWCxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ3lDLGtCQUFrQixFQUFFO1lBQzlDO1lBQ0EsTUFBTUMsYUFBYUEsQ0FBQTtjQUNsQixNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMzQyxLQUFLLENBQUM0QyxzQkFBc0IsRUFBRTtjQUUxRCxPQUFPRCxRQUFRO1lBQ2hCOztVQUNBcEQsT0FBQSxDQUFBWCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEdELElBQUFpRSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsR0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLE1BQUEsR0FBQTVFLE9BQUE7VUFHTztVQUFVLFNBQ1I2RSxZQUFZQSxDQUFDO1lBQUV4RTtVQUFLLENBQTJCO1lBQ3ZELE1BQU07Y0FBRXVCO1lBQUssQ0FBRSxHQUFHdkIsS0FBSztZQUV2QixNQUFNeUUsTUFBTSxHQUFHekUsS0FBSyxDQUFDc0IsS0FBSyxFQUFFYSxNQUFNLEVBQUVDLFdBQVcsRUFBRTtZQUNqRCxNQUFNO2NBQUVnQixLQUFLO2NBQUVzQixNQUFNO2NBQUVDLFdBQVc7Y0FBRUM7WUFBUSxDQUFFLEdBQUdyRCxLQUFLLENBQUNrRCxNQUFNLENBQUMsSUFBSSxhQUFhO1lBRS9FLE1BQU0sQ0FBQ2IsS0FBSyxFQUFFaUIsUUFBUSxDQUFDLEdBQUdWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQVU7WUFDbEQsTUFBTSxDQUFDdEIsT0FBTyxFQUFFdUIsVUFBVSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQVU7WUFDdEQsTUFBTSxDQUFDRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHZixNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNSSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hELGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUlULE1BQU0sS0FBSyxTQUFTLEVBQUU7a0JBQ3pCLE1BQU16RSxLQUFLLENBQUNXLElBQUksQ0FBQ1gsS0FBSyxDQUFDZ0MsRUFBRSxDQUFDO2tCQUMxQjs7Z0JBR0QsTUFBTWlDLFFBQVEsR0FBRyxNQUFNakUsS0FBSyxDQUFDZ0UsYUFBYSxFQUFFO2dCQUU1QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFO2tCQUNyQkksUUFBUSxDQUFDWixRQUFRLENBQUNMLEtBQUssQ0FBQztrQkFDeEI7O2dCQUVEb0IsVUFBVSxDQUFDZixRQUFRLENBQUNtQixJQUFJLENBQUMzQixPQUFPLENBQUM7ZUFDakMsQ0FBQyxPQUFPRCxDQUFDLEVBQUU7Z0JBQ1hHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDBCLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1lBRXRCLENBQUM7WUFDRCxNQUFNRyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFSjtZQUFVLENBQUU7WUFDekMsTUFBTTtjQUFFbEMsU0FBUztjQUFFdEI7WUFBTSxDQUFFLEdBQUd6QixLQUFLLENBQUNzQixLQUFLO1lBRXpDLE9BQ0M2QyxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDakIsR0FBQSxDQUFBa0IsYUFBYTtjQUFDQyxTQUFTLEVBQUM7WUFBK0IsR0FDdEQ1QixLQUFLLElBQUlPLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNmLE1BQUEsQ0FBQWtCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQVEsR0FBRTlCLEtBQUssQ0FBUyxFQUM3Q0gsT0FBTyxJQUFJVSxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZixNQUFBLENBQUFrQixLQUFLO2NBQUNDLElBQUksRUFBQztZQUFTLEdBQUVqQyxPQUFPLENBQVMsRUFDbkRVLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCckIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsaUJBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxhQUFLbEMsS0FBSyxDQUFNLEVBQ2hCZSxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxhQUFLVixRQUFRLENBQU0sQ0FDWCxFQUVSN0IsU0FBUyxJQUFJdEIsTUFBTSxJQUNuQjBDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUFuQixNQUFBLENBQUFXLE9BQUEsQ0FBQWEsUUFBQSxRQUNDeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DckIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsa0JBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDakIsR0FBQSxDQUFBdUIsV0FBVztjQUFDQyxHQUFHLEVBQUVwRSxNQUFNLENBQUNxRSxPQUFPO2NBQUVDLE1BQU0sRUFBRXRFLE1BQU07Y0FBRXVFLEdBQUcsRUFBRXZFLE1BQU0sQ0FBQ0osSUFBSTtjQUFFNEUsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN2RSxFQUNWOUIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsa0JBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxhQUFLdkMsU0FBUyxFQUFFMUIsSUFBSSxDQUFNLEVBQzFCOEMsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsYUFBSzdELE1BQU0sRUFBRTJCLEtBQUssQ0FBTSxDQUNmLENBQ0QsQ0FFWCxFQUVEZSxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxZQUFJWCxXQUFXLENBQUssRUFFcEJSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLGlCQUNDbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFakIsU0FBUztjQUFFa0IsUUFBUSxFQUFFcEIsVUFBVTtjQUFBLEdBQU1JO1lBQVEsR0FDOUVYLE1BQU0sQ0FDQyxDQUNELENBQ0osRUFDTlAsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsY0FDQ25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNsQixNQUFBLENBQUFrQyxLQUFLO2NBQ0xULEdBQUcsRUFBQywwQ0FBMEM7Y0FDOUNHLEdBQUcsRUFBQyw4QkFBOEI7Y0FDbENSLFNBQVMsRUFBQztZQUE0QixFQUNyQyxDQUNHLENBQ1M7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkZBLElBQUFyQixNQUFBLEdBQUF4RSxPQUFBO1VBYU8sTUFBTTRHLGlCQUFpQixHQUFBMUYsT0FBQSxDQUFBMEYsaUJBQUEsR0FBR3BDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDMEIsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDdkUsTUFBTUMsb0JBQW9CLEdBQUdBLENBQUEsS0FBTXRDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDNEIsVUFBVSxDQUFDSCxpQkFBaUIsQ0FBQztVQUFDMUYsT0FBQSxDQUFBNEYsb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7O1VDZDlFOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUEwQyxHQUFBLEdBQUExRSxPQUFBO1VBRUEsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBa0gsUUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBRU0sU0FBVW9ILE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFL0csS0FBSztjQUFFdUIsS0FBSztjQUFFWTtZQUFNLENBQUUsR0FBRyxJQUFBMEUsUUFBQSxDQUFBSixvQkFBb0IsR0FBRTtZQUV2RCxNQUFNO2NBQUVyRCxLQUFLO2NBQUV1QixXQUFXO2NBQUVtQixPQUFPO2NBQUVrQjtZQUFLLENBQUUsR0FBR2hILEtBQUssQ0FBQ3NCLEtBQUssQ0FBQ0csTUFBTTtZQUVqRSxPQUNDMEMsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYSxRQUFBLFFBQ0N4QixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNkIsR0FDM0NyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBa0IsR0FDbkNyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDd0IsTUFBQSxDQUFBRyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFXLEVBQUcsRUFDNUIvQyxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUMsR0FDakRyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxhQUFLbEMsS0FBSyxDQUFNLENBQ1gsQ0FDRSxFQUVUZSxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDakIsR0FBQSxDQUFBdUIsV0FBVztjQUFDRyxNQUFNLEVBQUMsUUFBUTtjQUFDRixHQUFHLEVBQUVDLE9BQU87Y0FBRUUsR0FBRyxFQUFFNUMsS0FBSztjQUFFNkMsSUFBSSxFQUFDO1lBQUksRUFBRyxFQUNuRTlCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLGNBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFHRSxTQUFTLEVBQUM7WUFBSSxHQUFFYixXQUFXLENBQUssRUFDbkNSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUE4QyxRQUFRO2NBQUMvQixJQUFJLEVBQUU0QjtZQUFLLEVBQUksQ0FDcEIsQ0FDRCxDQUNELENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQTdDLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMEUsR0FBQSxHQUFBMUUsT0FBQTtVQUVBLElBQUFrSCxRQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQXlILE1BQUEsR0FBQXpILE9BQUE7VUFDQSxJQUFBMEgsT0FBQSxHQUFBMUgsT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBRUEsSUFBQTRILFFBQUEsR0FBQTVILE9BQUE7VUFDQSxJQUFBNkgsYUFBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBVU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVMO1VBQUssQ0FBMkI7WUFDL0MsSUFBQXlILE1BQUEsQ0FBQUMsUUFBUSxFQUFDMUgsS0FBSyxDQUFDO1lBQ2YsTUFBTTtjQUFFdUIsS0FBSztjQUFFUTtZQUFLLENBQUUsR0FBRy9CLEtBQUs7WUFFOUIsSUFBSStCLEtBQUssSUFBSS9CLEtBQUssQ0FBQ2lDLFlBQVksRUFBRSxPQUFPa0MsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2tDLGFBQUEsQ0FBQWhELFlBQVk7Y0FBQ3hFLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3RFLElBQUkrQixLQUFLLElBQUksQ0FBQy9CLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxPQUFPcUMsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsNkJBQXVCO1lBQ3pELElBQUksQ0FBQ3ZELEtBQUssRUFBRSxPQUFPb0MsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2lDLFFBQUEsQ0FBQUksT0FBTyxPQUFHO1lBRTlCLE1BQU07Y0FBRUM7WUFBVSxDQUFFLEdBQUc1SCxLQUFLLENBQUNzQixLQUFLO1lBRWxDLE1BQU11RyxZQUFZLEdBQUc7Y0FDcEJ0RyxLQUFLO2NBQ0w4RSxRQUFRLEVBQUVyRyxLQUFLLENBQUNxRyxRQUFRO2NBQ3hCckcsS0FBSztjQUNMNEgsVUFBVTtjQUNWekYsTUFBTSxFQUFFbkMsS0FBSyxDQUFDc0IsS0FBSyxFQUFFd0c7YUFDckI7WUFFRCxPQUNDM0QsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ3VCLFFBQUEsQ0FBQU4saUJBQWlCLENBQUN3QixRQUFRO2NBQUNwRyxLQUFLLEVBQUVrRztZQUFZLEdBQzlDMUQsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2pCLEdBQUEsQ0FBQWtCLGFBQWE7Y0FBQ3lDLFVBQVUsRUFBRSxLQUFLO2NBQUV4QyxTQUFTLEVBQUM7WUFBaUIsR0FDNURyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakNyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDK0IsT0FBQSxDQUFBTixNQUFNLE9BQUcsQ0FDTCxDQUNTLEVBQ2hCNUMsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDckIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2pCLEdBQUEsQ0FBQWtCLGFBQWE7Y0FBQ3lDLFVBQVUsRUFBRTtZQUFLLEdBQUdKLFVBQVUsQ0FBQ0ssS0FBSyxHQUFHOUQsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQVksSUFBSSxPQUFHLEdBQUcvRCxNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDOEIsTUFBQSxDQUFBZSxTQUFTLE9BQUcsQ0FBaUIsQ0FDMUYsQ0FDc0I7VUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUFoRSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQTBFLEdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBa0gsUUFBQSxHQUFBbEgsT0FBQTtVQUVPO1VBQVUsU0FBVXdJLFNBQVNBLENBQUE7WUFDbkMsTUFBTTtjQUFFNUc7WUFBSyxDQUFFLEdBQUcsSUFBQXNGLFFBQUEsQ0FBQUosb0JBQW9CLEdBQUU7WUFDeEMsT0FBT3RDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUErRCxTQUFTO2NBQUNDLElBQUksRUFBRTlHLEtBQUssQ0FBQytHLEtBQUs7Y0FBRXBCLElBQUksRUFBQztZQUFNLEVBQUc7VUFDcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXFCLEtBQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFrSCxRQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQTRFLE1BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUEwRSxHQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJILEtBQUEsR0FBQTNILE9BQUE7VUFFTztVQUFVLFNBQVV1SSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRU4sVUFBVTtjQUFFNUgsS0FBSztjQUFFdUIsS0FBSztjQUFFWTtZQUFNLENBQUUsR0FBRyxJQUFBMEUsUUFBQSxDQUFBSixvQkFBb0IsR0FBRTtZQUNuRSxNQUFNLENBQUMrQixXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHdEUsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0QsTUFBTSxDQUFDc0IsUUFBUSxFQUFFcUMsV0FBVyxDQUFDLEdBQUd2RSxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNuQixLQUFLLEVBQUVpQixRQUFRLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFL0MsTUFBTXFCLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDMUIsSUFBSTtnQkFDSHNDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0xSSxLQUFLLENBQUNtQyxNQUFNLEVBQUU7Z0JBQ3BCc0csY0FBYyxDQUFDLElBQUksQ0FBQztlQUNwQixDQUFDLE9BQU9qRixDQUFDLEVBQUU7Z0JBQ1hxQixRQUFRLENBQUMsSUFBSSxDQUFDO2VBQ2QsU0FBUztnQkFDVDZELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDdkUsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYSxRQUFBLFFBQ0N4QixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDakIsR0FBQSxDQUFBc0UsU0FBUztjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDeEYsS0FBSyxFQUFFN0IsS0FBSyxDQUFDcUcsVUFBVSxDQUFDeEU7WUFBSyxHQUM5QyxDQUFDakIsTUFBTSxJQUFJLENBQUNxRyxXQUFXLElBQ3ZCckUsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUSxFQUFFQSxRQUFRO2NBQUVELE9BQU8sRUFBRUE7WUFBTyxHQUM1RDdFLEtBQUssQ0FBQ1ksTUFBTSxDQUVkLENBQ1UsRUFDWHFHLFdBQVcsSUFDWHJFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNmLE1BQUEsQ0FBQWtCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0YsU0FBUyxFQUFDO1lBQU8sR0FDckNqRSxLQUFLLENBQUN1RyxRQUFRLENBRWhCLEVBQ0FsRSxLQUFLLElBQ0xPLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNmLE1BQUEsQ0FBQWtCLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ0YsU0FBUyxFQUFDO1lBQWEsR0FDekN4RixLQUFLLENBQUM2QixXQUFXLENBQUNnSCxNQUFNLENBQUNDLGFBQWEsQ0FFeEMsRUFDRDNFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNnQyxLQUFBLENBQUFZLElBQWE7Y0FBQzFDLFNBQVMsRUFBQyxvQkFBb0I7Y0FBQ3lDLEtBQUssRUFBRUwsVUFBVSxDQUFDSyxLQUFLO2NBQUVjLE9BQU8sRUFBRVIsS0FBQSxDQUFBUztZQUFJLEVBQUksQ0FDdEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQUMsV0FBQSxHQUFBdEosT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWtILFFBQUEsR0FBQWxILE9BQUE7VUFVTztVQUFVLFNBQVVxSixJQUFJQSxDQUFDO1lBQUU1RCxJQUFJLEVBQUU4RCxJQUFJO1lBQUVDO1VBQUssQ0FBRTtZQUNwRCxNQUFNO2NBQUVuSixLQUFLO2NBQUV1QixLQUFLO2NBQUVZO1lBQU0sQ0FBRSxHQUFHLElBQUEwRSxRQUFBLENBQUFKLG9CQUFvQixHQUFFO1lBRXZELE1BQU1mLElBQUksR0FBR3dELElBQUksQ0FBQ3hELElBQUksS0FBSyxpQkFBaUIsR0FBRyxZQUFZLEdBQUd3RCxJQUFJLENBQUN4RCxJQUFJO1lBRXZFLElBQUkwRCxHQUFHLEdBQUcsZ0JBQWdCcEosS0FBSyxDQUFDNEIsWUFBWSxJQUFJOEQsSUFBSSxJQUFJd0QsSUFBSSxDQUFDbEgsRUFBRSxFQUFFO1lBQ2pFLElBQ0MsQ0FBQyxDQUFDRyxNQUFNLElBQ1IsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDRCxRQUFRLENBQ3ZHZ0gsSUFBSSxDQUFDeEQsSUFBSSxDQUNULEVBQ0E7Y0FDRDBELEdBQUcsSUFBSSxTQUFTRixJQUFJLENBQUNHLElBQUksRUFBRXJILEVBQUUsRUFBRTs7WUFHaEMsT0FDQ21DLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLGFBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDMkQsV0FBQSxDQUFBSyxZQUFZO2NBQ1o1RCxJQUFJLEVBQUV3RCxJQUFJLENBQUN4RCxJQUFJO2NBQ2Y2RCxJQUFJLEVBQUVILEdBQUc7Y0FDVC9ELFFBQVEsRUFBRSxDQUFDbEQsTUFBTTtjQUNqQitHLElBQUksRUFBRUEsSUFBSTtjQUNWM0gsS0FBSyxFQUFFO2dCQUFFLEdBQUdBLEtBQUs7Z0JBQUVpSSxLQUFLLEVBQUV4SixLQUFLLENBQUM2QixXQUFXLENBQUMrRixVQUFVLENBQUM0QjtjQUFLLENBQUU7Y0FDOURDLFFBQVEsRUFBRSxLQUFLO2NBQ2YxRCxNQUFNLEVBQUM7WUFBVSxFQUNoQixDQUNFO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUExQixHQUFBLEdBQUExRSxPQUFBO1VBRUEsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBRU0sU0FBVWdJLE9BQU9BLENBQUE7WUFDdEIsT0FDQ3hELE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUFrQixhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUFpQixHQUN6Q3JCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE2QixHQUMzQ3JCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFrQixHQUNuQ3JCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUN3QixNQUFBLENBQUFHLE9BQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUM1Qi9DLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUFxRixZQUFZO2NBQUNDLE1BQU0sRUFBQyxNQUFNO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDcEMsQ0FDSixFQUNOekYsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdDLEdBQzlDckIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQWtDLEtBQUs7Y0FBQ2QsU0FBUyxFQUFDO1lBQTZCLEVBQUcsRUFFakRyQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxjQUNDbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsY0FDQ25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUFxRixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDdEMsRUFDTnpGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLGNBQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxDQUFDakIsR0FBQSxDQUFBcUYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQ3RDLEVBQ056RixNQUFBLENBQUFXLE9BQUEsQ0FBQVEsYUFBQSxjQUNDbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsQ0FBQ2pCLEdBQUEsQ0FBQXFGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUN0QyxFQUNOekYsTUFBQSxDQUFBVyxPQUFBLENBQUFRLGFBQUEsY0FDQ25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUSxhQUFBLENBQUNqQixHQUFBLENBQUFxRixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDdEMsQ0FDRCxDQUNELENBQ1M7VUFFbEIiLCJpZ25vcmVMaXN0IjpbXX0=