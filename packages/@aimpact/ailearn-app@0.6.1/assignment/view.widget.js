System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.6.1/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/components/module-card"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive211Model) {
      dependency_6 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi108Image) {
      dependency_9 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_10 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_pragmateUi108Alert) {
      dependency_12 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_14 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108List) {
      dependency_15 = _pragmateUi108List;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp061ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
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
        hash: 1825710504,
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
                if (e.message === '403') {
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
        hash: 4057749487,
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
              error: JSON.stringify(store.error.getProperties())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibmFtZSIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImFzc2lnbm1lbnRJZCIsImdsb2JhbFRleHRzIiwiZm91bmQiLCJyZWFkeSIsImlkIiwiZXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImlzQ29tbXVuaXR5IiwiY29tbXVuaXR5IiwiY2xhc3Nyb29tTGluayIsImNsYXNzcm9vbSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwicmVxdWVzdEFjY2VzcyIsInJlc3BvbnNlIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsIl9yZWFjdCIsIl9pbWFnZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiQWNjZXNzRGVuaWVkIiwic3RhdHVzIiwiYWN0aW9uIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsInNldEVycm9yIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJzaXplIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJmZXRjaGluZyIsIkltYWdlIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIl9pY29ucyIsIkhlYWRlciIsIm93bmVyIiwiQXBwSWNvbiIsImljb24iLCJVc2VyRGF0YSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsIl9ob29rcyIsInVzZVN0b3JlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFByb3BlcnRpZXMiLCJQcmVsb2FkIiwiYWN0aXZpdGllcyIsImNvbnRleHRWYWx1ZSIsImFjY2Vzc2VkIiwiUHJvdmlkZXIiLCJmdWxsSGVpZ2h0IiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiX2l0ZW0iLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwic2V0RmV0Y2hpbmciLCJQYWdlVGl0bGUiLCJhcyIsImVycm9ycyIsIkRFRkFVTFRfRVJST1IiLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hY2Nlc3MtZGVuaWVkLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0udHN4IiwiLy90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxPQUFPLEdBQUcsSUFB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TUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTZCLEdBQzNDdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtCLEdBQ25DdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQUcsT0FBTztjQUFDQyxJQUFJLEVBQUM7WUFBVyxFQUFHLEVBQzVCaEQsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXlGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLE1BQU07Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUNwQyxDQUNKLEVBQ043RixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUN0QixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsTUFBQSxDQUFBbUMsS0FBSztjQUFDZCxTQUFTLEVBQUM7WUFBNkIsRUFBRyxFQUVqRHRCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGNBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxjQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXlGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUN0QyxFQUNON0YsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLENBQUNsQixHQUFBLENBQUF5RixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDdEMsRUFDTjdGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBUyxhQUFBLGNBQ0NwQixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsR0FBQSxDQUFBeUYsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQ3RDLEVBQ043RixNQUFBLENBQUFXLE9BQUEsQ0FBQVMsYUFBQSxjQUNDcEIsTUFBQSxDQUFBVyxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXlGLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLEtBQUs7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUN0QyxDQUNELENBQ0QsQ0FDUztVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==