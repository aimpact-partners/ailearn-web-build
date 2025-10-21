System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.14/texts", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/module-card", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/modal", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
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
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_aimpactChatSdk155Session) {
      dependency_8 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_9 = _aimpactAilearnApp070I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_12 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_pragmateUi108Icons) {
      dependency_15 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Modal) {
      dependency_17 = _pragmateUi108Modal;
    }, function (_beyondJsKernel0114Routing) {
      dependency_18 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Empty) {
      dependency_19 = _pragmateUi108Empty;
    }, function (_pragmateUi108List) {
      dependency_20 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/archive",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/modal', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-archive-app",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/archive.widget",
        "is": "page",
        "route": "/archive",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/archive.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3564942708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #modules;
            get modules() {
              return this.#modules;
            }
            get published() {
              return this.#modules;
            }
            get assignments() {
              return _session.sessionWrapper.user.archive;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              //@ts-ignore
              this.#modules = new _learningModules.LearningModules({
                archived: true
              });
              this.#modules.on('change', this.triggerEvent);
              this.#modules.on('items.changed', () => this.trigger('items.changed'));
              globalThis.store = this;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            load(type = 'modules') {
              const types = {
                assignments: this.loadAssignments.bind(this),
                modules: this.loadModules.bind(this)
              };
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.archive]]
              });
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              return types[type]();
            }
            async loadModules() {
              this.#tab = 'modules';
              if (this.#modules.loaded) return;
              //@ts-ignore
              const response = await this.#modules.load();
              super.ready = true;
              this.trigger('items.changed');
              return response;
            }
            async loadAssignments() {
              this.#tab = 'assignments';
              //@ts-ignore
              const response = await _session.sessionWrapper.user.archive.load();
              super.ready = true;
              this.trigger('items.changed');
            }
            async restoreModule(item) {
              await item.restore();
              await this.#modules.load();
              this.trigger('items.changed');
              return;
            }
            async restoreAssignment(item) {
              await item.restore();
              //@ts-ignore
              await _session.sessionWrapper.user.archive.load();
              this.trigger('items.changed');
              return;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2980848648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3143612737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2318566226,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [fetching] = React.useState(store.fetching);
            const {
              ready,
              texts
            } = store;
            (0, _hooks.useStore)(store, ['change', 'items.changed']);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store,
              fetching
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/assignments
      ****************************************/

      ims.set('./views/item/assignments', {
        hash: 3515919338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = Assignment;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../context");
          var _restore = require("./restore");
          function Assignment({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openRestore, setOpenRestore] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const toggleRestore = event => {
              event?.stopPropagation();
              setOpenRestore(!openRestore);
            };
            const onRestore = event => {
              event.stopPropagation();
              setOpenRestore(!openRestore);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: `/dashboard/${item.id}`,
              type: item.type,
              item: item.module,
              texts: {
                texts,
                actions: store.globalTexts.actions
              },
              actions: {
                restore: onRestore
              },
              classroom: item.classroom,
              audience: false,
              archived: true,
              entity: "assignment"
            }), openRestore && React.createElement(_restore.RestoreItemModal, {
              type: "assignments",
              onClose: toggleRestore,
              item: item,
              texts: texts,
              store: store
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/module
      ***********************************/

      ims.set('./views/item/module', {
        hash: 95391420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _context = require("../context");
          var _restore = require("./restore");
          function ModuleItem({
            item
          }) {
            const {
              texts,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openClone, setOpenClone] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const [openRestore, setOpenRestore] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleRestore = event => {
              event?.stopPropagation();
              setOpenRestore(!openRestore);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              entity: "module",
              onClick: onAction,
              archived: true
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "restore",
              title: globalTexts.actions.restore,
              onClick: toggleRestore
            })))), openRestore && React.createElement(_restore.RestoreItemModal, {
              onClose: toggleRestore,
              item: item,
              texts: texts,
              store: store
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/restore
      ************************************/

      ims.set('./views/item/restore', {
        hash: 3629041878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RestoreItemModal = RestoreItemModal;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function RestoreItemModal({
            type = 'modules',
            onClose,
            item,
            texts
          }) {
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            const {
              store
            } = (0, _context.useModuleContext)();
            const globalTexts = store.globalTexts;
            const onConfirm = async () => {
              try {
                setFetching(true);
                if (type === 'modules') {
                  await store.restoreModule(item);
                } else {
                  await store.restoreAssignment(item);
                }
                onClose();
              } catch (e) {
                console.log(e);
                setError(texts.delete.errors[e.code.toString()] ?? texts.delete.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              className: "pui-modal-delete"
            }, React.createElement("header", {
              className: "modal__header"
            }, React.createElement("h2", null, texts.restore[type].title)), React.createElement(_ui.ErrorRenderer, {
              variant: "error",
              error: error
            }), React.createElement("div", {
              className: "modal__content"
            }, React.createElement("p", null, texts.restore[type].description)), React.createElement("footer", {
              className: "modal__actions"
            }, React.createElement(_components.Button, {
              onClick: onClose,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), React.createElement(_components.Button, {
              onClick: onConfirm,
              variant: "primary"
            }, globalTexts.actions.confirm)), React.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2521949619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../context");
          var _assignments = require("../item/assignments");
          var _module = require("../item/module");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const tabs = ['modules', 'assignments'];
            const tabIndex = tabs.indexOf(store.tab);
            const [collection, setCollection] = React.useState(store[store.tab]);
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            console.log(1, texts);
            const itemControls = {
              assignments: _assignments.Assignment,
              modules: _module.ModuleItem
            };
            (0, _hooks.useStore)(store, ['items.changed']);
            const onChange = async event => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[parseInt(event.currentTarget.dataset.index)];
              urlParams.set('tab', tab);
              const target = event.currentTarget;
              target.closest('.pui-tabs-menu').querySelectorAll('.pui-tab').forEach(tab => tab.classList.remove('active'));
              target.classList.add('active');
              _routing.routing.replaceState({}, document.title, `/archive?${urlParams.toString()}`);
              useTabSelect(parseInt(event.currentTarget.dataset.index));
              setFetching(true);
              await store.load(tab);
              setCollection(store[tab]);
              setFetching(false);
            };
            const ListTab = ({
              items
            }) => {
              if (!items.length) {
                return React.createElement(_ui.EmptyCard, {
                  text: emptyTexts.title,
                  description: emptyTexts.description,
                  icon: "info"
                });
              }
              return React.createElement(_list.List, {
                empty: _ui.EmptyCard,
                className: "entity__list mt-15",
                items: items,
                control: itemControls[store.tab]
              });
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "pui-tabs-container pui-page-tabs-container"
            }, React.createElement("header", {
              className: "pui-tabs-menu tabs page__tabs"
            }, React.createElement("div", {
              "data-index": "0",
              className: `pui-tab tab${tabSelect === 0 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.modules), React.createElement("div", {
              "data-index": "1",
              className: `pui-tab tab${tabSelect === 1 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.assignments))), fetching ? React.createElement(_empty.Empty, {
              className: "loading-list-page"
            }, React.createElement(_ui.AppLoader, null)) : React.createElement("div", {
              className: "pui-tab-panes"
            }, React.createElement(ListTab, {
              items: collection.items
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 12017522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwiYXNzaWdubWVudHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsImFyY2hpdmVkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwib2ZmIiwidHlwZSIsInR5cGVzIiwibG9hZEFzc2lnbm1lbnRzIiwiYmluZCIsImxvYWRNb2R1bGVzIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIkVycm9yIiwibG9hZGVkIiwicmVzcG9uc2UiLCJyZXN0b3JlTW9kdWxlIiwiaXRlbSIsInJlc3RvcmUiLCJyZXN0b3JlQXNzaWdubWVudCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2xpc3QiLCJmZXRjaGluZyIsInVzZVN0YXRlIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIl9tb2R1bGVDYXJkIiwiX3Jlc3RvcmUiLCJBc3NpZ25tZW50IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnZXRQcm9wZXJ0aWVzIiwib3BlblJlc3RvcmUiLCJzZXRPcGVuUmVzdG9yZSIsInVzZUJpbmRlciIsInRvZ2dsZVJlc3RvcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVzdG9yZSIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJpZCIsImNsYXNzcm9vbSIsImF1ZGllbmNlIiwiZW50aXR5IiwiUmVzdG9yZUl0ZW1Nb2RhbCIsIm9uQ2xvc2UiLCJfaWNvbnMiLCJNb2R1bGVJdGVtIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJNb2R1bGVDYXJkIiwib25DbGljayIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJfbW9kYWwiLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNvbmZpcm0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb25maXJtIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX2Fzc2lnbm1lbnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImVtcHR5VGV4dHMiLCJpdGVtQ29udHJvbHMiLCJvbkNoYW5nZSIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyc2VJbnQiLCJpbmRleCIsInRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIkxpc3RUYWIiLCJpdGVtcyIsImxlbmd0aCIsImNvbnRyb2wiLCJFbXB0eSIsIkFwcExvYWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYXNzaWdubWVudHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3Jlc3RvcmUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFB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RUFBRzs7Y0FHOUYsT0FDQ2hCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDYyxLQUFBLENBQUFRLElBQVk7Z0JBQ1puQixLQUFLLEVBQUVMLEdBQUEsQ0FBQUcsU0FBUztnQkFDaEJPLFNBQVMsRUFBQyxvQkFBb0I7Z0JBQzlCMEcsS0FBSyxFQUFFQSxLQUFLO2dCQUNaRSxPQUFPLEVBQUVyQixZQUFZLENBQUN0SyxLQUFLLENBQUNNLEdBQUc7Y0FBQyxFQUMvQjtZQUVKLENBQUM7WUFFRCxPQUNDd0QsS0FBQSxDQUFBUyxhQUFBLENBQUFULEtBQUEsQ0FBQTZDLFFBQUEsUUFDQzdDLEtBQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBNEMsR0FDMURqQixLQUFBLENBQUFTLGFBQUE7Y0FBUVEsU0FBUyxFQUFDO1lBQStCLEdBQ2hEakIsS0FBQSxDQUFBUyxhQUFBO2NBQUEsY0FBZ0IsR0FBRztjQUFDUSxTQUFTLEVBQUUsY0FBY29GLFNBQVMsS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRTtjQUFFbEMsT0FBTyxFQUFFc0M7WUFBUSxHQUNoRzFJLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ3ZJLE9BQU8sQ0FDZCxFQUNOdUMsS0FBQSxDQUFBUyxhQUFBO2NBQUEsY0FBZ0IsR0FBRztjQUFDUSxTQUFTLEVBQUUsY0FBY29GLFNBQVMsS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRTtjQUFFbEMsT0FBTyxFQUFFc0M7WUFBUSxHQUNoRzFJLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ3JJLFdBQVcsQ0FDbEIsQ0FDRSxDQUNKLEVBQ0w2RCxRQUFRLEdBQ1J4QixLQUFBLENBQUFTLGFBQUEsQ0FBQ29GLE1BQUEsQ0FBQWlDLEtBQUs7Y0FBQzdHLFNBQVMsRUFBQztZQUFtQixHQUNuQ2pCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUF3SCxTQUFTLE9BQUcsQ0FDTixHQUVSL0gsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFlLEdBQzdCakIsS0FBQSxDQUFBUyxhQUFBLENBQUNpSCxPQUFPO2NBQUNDLEtBQUssRUFBRXhCLFVBQVUsQ0FBQ3dCO1lBQUssRUFBSSxDQUVyQyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7O1VDbkZBOztVQUVBSyxNQUFBLENBQUFDLGNBQUEsQ0FBQWpMLE9BQUE7WUFDQW1CLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==