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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwiYXNzaWdubWVudHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsImFyY2hpdmVkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwib2ZmIiwidHlwZSIsInR5cGVzIiwibG9hZEFzc2lnbm1lbnRzIiwiYmluZCIsImxvYWRNb2R1bGVzIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIkVycm9yIiwibG9hZGVkIiwicmVzcG9uc2UiLCJyZXN0b3JlTW9kdWxlIiwiaXRlbSIsInJlc3RvcmUiLCJyZXN0b3JlQXNzaWdubWVudCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2xpc3QiLCJmZXRjaGluZyIsInVzZVN0YXRlIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIl9tb2R1bGVDYXJkIiwiX3Jlc3RvcmUiLCJBc3NpZ25tZW50IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnZXRQcm9wZXJ0aWVzIiwib3BlblJlc3RvcmUiLCJzZXRPcGVuUmVzdG9yZSIsInVzZUJpbmRlciIsInRvZ2dsZVJlc3RvcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVzdG9yZSIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJpZCIsImNsYXNzcm9vbSIsImF1ZGllbmNlIiwiZW50aXR5IiwiUmVzdG9yZUl0ZW1Nb2RhbCIsIm9uQ2xvc2UiLCJfaWNvbnMiLCJNb2R1bGVJdGVtIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJNb2R1bGVDYXJkIiwib25DbGljayIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJfbW9kYWwiLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNvbmZpcm0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb25maXJtIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX2Fzc2lnbm1lbnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImVtcHR5VGV4dHMiLCJpdGVtQ29udHJvbHMiLCJvbkNoYW5nZSIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyc2VJbnQiLCJpbmRleCIsInRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIkxpc3RUYWIiLCJpdGVtcyIsImxlbmd0aCIsImNvbnRyb2wiLCJFbXB0eSIsIkFwcExvYWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZW1wdHkudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2l0ZW0vYXNzaWdubWVudHMudHN4IiwiLy90cy92aWV3cy9pdGVtL21vZHVsZS50c3giLCIvL3RzL3ZpZXdzL2l0ZW0vcmVzdG9yZS50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBQztnQkFBTSxFQUFHOztjQUc5RixPQUNDaEIsS0FBQSxDQUFBUyxhQUFBLENBQUNjLEtBQUEsQ0FBQVEsSUFBWTtnQkFDWm5CLEtBQUssRUFBRUwsR0FBQSxDQUFBRyxTQUFTO2dCQUNoQk8sU0FBUyxFQUFDLG9CQUFvQjtnQkFDOUIwRyxLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pFLE9BQU8sRUFBRXJCLFlBQVksQ0FBQ3RLLEtBQUssQ0FBQ00sR0FBRztjQUFDLEVBQy9CO1lBRUosQ0FBQztZQUVELE9BQ0N3RCxLQUFBLENBQUFTLGFBQUEsQ0FBQVQsS0FBQSxDQUFBNkMsUUFBQSxRQUNDN0MsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE0QyxHQUMxRGpCLEtBQUEsQ0FBQVMsYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBK0IsR0FDaERqQixLQUFBLENBQUFTLGFBQUE7Y0FBQSxjQUFnQixHQUFHO2NBQUNRLFNBQVMsRUFBRSxjQUFjb0YsU0FBUyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO2NBQUVsQyxPQUFPLEVBQUVzQztZQUFRLEdBQ2hHMUksS0FBSyxDQUFDaUksSUFBSSxDQUFDdkksT0FBTyxDQUNkLEVBQ051QyxLQUFBLENBQUFTLGFBQUE7Y0FBQSxjQUFnQixHQUFHO2NBQUNRLFNBQVMsRUFBRSxjQUFjb0YsU0FBUyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO2NBQUVsQyxPQUFPLEVBQUVzQztZQUFRLEdBQ2hHMUksS0FBSyxDQUFDaUksSUFBSSxDQUFDckksV0FBVyxDQUNsQixDQUNFLENBQ0osRUFDTDZELFFBQVEsR0FDUnhCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDb0YsTUFBQSxDQUFBaUMsS0FBSztjQUFDN0csU0FBUyxFQUFDO1lBQW1CLEdBQ25DakIsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQXdILFNBQVMsT0FBRyxDQUNOLEdBRVIvSCxLQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQWUsR0FDN0JqQixLQUFBLENBQUFTLGFBQUEsQ0FBQ2lILE9BQU87Y0FBQ0MsS0FBSyxFQUFFeEIsVUFBVSxDQUFDd0I7WUFBSyxFQUFJLENBRXJDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7VUNuRkE7O1VBRUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBakwsT0FBQTtZQUNBbUIsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119