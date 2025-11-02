System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.2/model", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/components/module-card"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive212Model) {
      dependency_6 = _beyondJsReactive212Model;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi108Image) {
      dependency_9 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_10 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_pragmateUi108Alert) {
      dependency_12 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_14 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108List) {
      dependency_15 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp070ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/assignment/view.widget');
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
        hash: 3125353785,
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
            #error;
            get error() {
              return this.#error;
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
                if (e.message === '403' || e.code === 403) {
                  return;
                }
                this.#error = e;
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
        hash: 20606963,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            if (ready && store.error) return _react.default.createElement("app-system-error-control", {
              error: JSON.stringify(store.error?.getProperties())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibmFtZSIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFzc2lnbm1lbnRJZCIsImdsb2JhbFRleHRzIiwiZm91bmQiLCJyZWFkeSIsImlkIiwiZXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImlzQ29tbXVuaXR5IiwiY29tbXVuaXR5IiwiY2xhc3Nyb29tTGluayIsImNsYXNzcm9vbSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwicmVxdWVzdEFjY2VzcyIsInJlc3BvbnNlIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsIl9yZWFjdCIsIl9pbWFnZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiQWNjZXNzRGVuaWVkIiwic3RhdHVzIiwiYWN0aW9uIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsInNldEVycm9yIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJzaXplIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkltYWdlIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIl9pY29ucyIsIkhlYWRlciIsIm93bmVyIiwiQXBwSWNvbiIsImljb24iLCJVc2VyRGF0YSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsIl9ob29rcyIsInVzZVN0b3JlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFByb3BlcnRpZXMiLCJQcmVsb2FkIiwiYWN0aXZpdGllcyIsImNvbnRleHRWYWx1ZSIsImFjY2Vzc2VkIiwiUHJvdmlkZXIiLCJmdWxsSGVpZ2h0IiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX2l0ZW0iLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwic2V0RmV0Y2hpbmciLCJQYWdlVGl0bGUiLCJhcyIsImVycm9ycyIsIkRFRkFVTFRfRVJST1IiLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFH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LEVBQUM7WUFBaUIsR0FDekN0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNkIsR0FDM0N0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBa0IsR0FDbkN0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDd0IsTUFBQSxDQUFBRyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFXLEVBQUcsRUFDNUJoRCxNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBeUYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsTUFBTTtjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQ3BDLENBQ0osRUFDTjdGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3RCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNuQixNQUFBLENBQUFtQyxLQUFLO2NBQUNkLFNBQVMsRUFBQztZQUE2QixFQUFHLEVBRWpEdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGNBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBeUYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQ3RDLEVBQ043RixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxjQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXlGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUN0QyxFQUNON0YsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUF5RixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDdEMsRUFDTjdGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGNBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBeUYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQ3RDLENBQ0QsQ0FDRCxDQUNTO1VBRWxCIiwiaWdub3JlTGlzdCI6W119