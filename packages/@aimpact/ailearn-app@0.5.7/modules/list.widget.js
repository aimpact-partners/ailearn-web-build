System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/i18n.ts", "@aimpact/ailearn-app@0.5.7/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "pragmate-ui@1.0.6/components", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/icons", "@aimpact/ailearn-app@0.5.7/components/module-card", "pragmate-ui@1.0.6/modal", "@aimpact/ailearn-app@0.5.7/components/icons", "@aimpact/ailearn-app@0.5.7/modules/assign", "@aimpact/ailearn-app@0.5.7/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/empty", "pragmate-ui@1.0.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp057I18nTs) {
      dependency_4 = _aimpactAilearnApp057I18nTs;
    }, function (_aimpactAilearnApp057MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp057MainLayoutWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_8 = _beyondJsReactive211Model;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi106Components) {
      dependency_10 = _pragmateUi106Components;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_11 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_12 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Icons) {
      dependency_13 = _pragmateUi106Icons;
    }, function (_aimpactAilearnApp057ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp057ComponentsModuleCard;
    }, function (_pragmateUi106Modal) {
      dependency_15 = _pragmateUi106Modal;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_aimpactAilearnApp057ModulesAssign) {
      dependency_17 = _aimpactAilearnApp057ModulesAssign;
    }, function (_aimpactAilearnApp057ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp057ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_19 = _beyondJsReact18Widgets114Hooks;
    }, function (_beyondJsKernel0112Routing) {
      dependency_20 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi106Empty) {
      dependency_21 = _pragmateUi106Empty;
    }, function (_pragmateUi106List) {
      dependency_22 = _pragmateUi106List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/shared/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/modules/assign', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/list', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/modules/list.widget');
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
        hash: 1246839645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            get drafts() {
              return this.#drafts;
            }
            #modules;
            get modules() {
              return this.#modules;
            }
            get published() {
              return this.#modules;
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
              this.#drafts = new _learningModules.LearningModules({
                type: 'drafts'
              });
              //@ts-ignore
              this.#modules = new _learningModules.LearningModules({
                type: 'modules'
              });
              this.#modules.on('change', this.triggerEvent);
              this.#modules.on('items.changed', () => this.trigger('items.changed'));
              this.#drafts.on('change', this.triggerEvent);
              this.#drafts.on('items.changed', () => this.trigger('items.changed'));
              globalThis.store = this;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.setBreadcrumb();
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            setBreadcrumb() {
              _mainLayout.LayoutBroker.overlay = false;
            }
            async loadModules() {
              this.#tab = 'published';
              if (this.#modules.loaded) return;
              //@ts-ignore
              const response = await this.#modules.load({
                type: 'module',
                route: ''
              });
              super.ready = true;
              return response;
            }
            async loadDrafts() {
              this.#tab = 'drafts';
              if (this.#drafts.loaded) return;
              //@ts-ignore
              const response = await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              super.ready = true;
              return response;
            }
            load(type = 'published') {
              const types = {
                drafts: this.loadDrafts.bind(this),
                published: this.loadModules.bind(this)
              };
              const titles = {
                drafts: this.globalTexts.entities.drafts,
                published: this.globalTexts.entities.modules
              };
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[titles[type]]]
              });
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              return types[type]();
            }
            async deleteDraft(id) {
              //@ts-ignore
              const item = this.#drafts.map.get(id);
              await item.delete();
              // this.trigger('items.changed');
            }
            async deleteModule(item) {
              await item.deleteItem();
              //@ts-ignore
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.triggerEvent('items.changed');
            }
            async archiveItem(item) {
              await item.archive();
              //@ts-ignore
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.triggerEvent('items.changed');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1619761816,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var React = require("react");
          const ListContext = exports.ListContext = React.createContext({});
          const useListContext = () => React.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3311512184,
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
            } = (0, _context.useListContext)();
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
        hash: 2663932324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _list = require("./list");
          function View({
            store
          }) {
            const {
              fetching,
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
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }, React.createElement("section", {
              className: "title__actions"
            }, React.createElement(_components.Link, {
              href: "/modules/management"
            }, React.createElement(_icons.Icon, {
              icon: "add-circle"
            }), store.globalTexts.actions.create))), React.createElement(_list.List, null)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/drafts
      ***********************************/

      ims.set('./views/item/drafts', {
        hash: 140471851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var React = require("react");
          var _context = require("../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          function ItemDrafts({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [showDeleteModal, setShowDeleteModal] = React.useState(false);
            const onClickAction = event => {
              event.preventDefault();
              event.stopPropagation();
              setShowDeleteModal(true);
            };
            const onDelete = async event => {
              await store.deleteDraft(item.id);
              setShowDeleteModal(false);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.DraftCard, {
              className: "draft--card",
              item: item,
              texts: texts,
              href: `/modules/management?id=${item.id}`
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: onClickAction,
              title: texts.actions.delete
            })))), showDeleteModal && React.createElement(_modal.ConfirmModal, {
              title: texts.delete.title,
              show: true,
              onConfirm: onDelete,
              btnConfirm: {
                label: store.globalTexts.actions.confirm
              },
              btnCancel: {
                label: store.globalTexts.actions.cancel
              },
              onCancel: () => setShowDeleteModal(false)
            }, React.createElement("span", null, texts.delete.description)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/item/module/archive
      *******************************************/

      ims.set('./views/item/module/archive', {
        hash: 686578010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveItemModal = ArchiveItemModal;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          function ArchiveItemModal({
            onClose,
            item,
            texts
          }) {
            const [, setOpenConfirm] = React.useState(false);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            const {
              store
            } = (0, _context.useListContext)();
            const globalTexts = store.globalTexts;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await store.archiveItem(item);
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
            }, React.createElement("h2", null, texts.archive.title)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement("div", {
              className: "modal__content"
            }, React.createElement("p", null, texts.archive.description)), React.createElement("footer", {
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

      /******************************************
      INTERNAL MODULE: ./views/item/module/delete
      ******************************************/

      ims.set('./views/item/module/delete', {
        hash: 2137978036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteItemModal = DeleteItemModal;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          function DeleteItemModal({
            onClose,
            item,
            texts
          }) {
            const [, setOpenConfirm] = React.useState(false);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            const {
              store
            } = (0, _context.useListContext)();
            const globalTexts = store.globalTexts;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await store.deleteModule(item);
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
            }, React.createElement("h2", null, texts.delete.title)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement("div", {
              className: "modal__content"
            }, React.createElement("p", null, texts.delete.description)), React.createElement("footer", {
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

      /******************************************
      INTERNAL MODULE: ./views/item/module/module
      ******************************************/

      ims.set('./views/item/module/module', {
        hash: 80907646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _delete = require("./delete");
          var _archive = require("./archive");
          function Item({
            item
          }) {
            const {
              texts,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openClone, setOpenClone] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const [openDelete, setOpenDelete] = React.useState(false);
            const [openArchive, setOpenArchive] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const onUse = event => {
              event.stopPropagation();
              setOpenClone(true);
            };
            const toggleModal = event => {
              event?.stopPropagation();
              setActionSelected(undefined);
              setOpenModal(!openModal);
            };
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleOwnerForm = () => setOpenClone(!openClone);
            const toggleDelete = event => {
              event?.stopPropagation();
              setOpenDelete(!openDelete);
            };
            const toggleArchive = event => {
              event?.stopPropagation();
              setOpenArchive(!openArchive);
            };
            const onDelete = () => {
              console.log('delete');
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              entity: "module",
              actions: {
                delete: onDelete
              }
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "assign",
              title: globalTexts.actions.assignToClassroom
            }), React.createElement(_icons.AppIconButton, {
              "data-action": "dashboard",
              onClick: onAction,
              icon: "statistic",
              title: globalTexts.actions.dashboard
            }), React.createElement(_icons.AppIconButton, {
              icon: "clone",
              title: texts.actions.use,
              onClick: onUse
            }), item.assignments.items.length === 0 ? React.createElement(_icons.AppIconButton, {
              icon: "delete",
              title: globalTexts.actions.delete,
              onClick: toggleDelete
            }) : React.createElement(_icons.AppIconButton, {
              icon: "toArchive",
              title: globalTexts.actions.archive,
              onClick: toggleArchive
            })))), (openModal || actionSelected) && React.createElement(_assign.ModuleAssignments, {
              item: item,
              action: actionSelected,
              onClose: toggleModal,
              texts: texts.assign
            }), openClone && React.createElement(_ownerAssign.OwnerAssignForm, {
              item: item,
              onClose: toggleOwnerForm,
              texts: texts.assign
            }), openDelete && React.createElement(_delete.DeleteItemModal, {
              store: store,
              item: item,
              onClose: toggleDelete,
              texts: texts
            }), openArchive && React.createElement(_archive.ArchiveItemModal, {
              store: store,
              item: item,
              onClose: toggleArchive,
              texts: texts
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/status
      ***********************************/

      ims.set('./views/item/status', {
        hash: 3172238619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Status;
          var _react = require("react");
          var _context = require("../context");
          const STATUS_COLORS = {
            ready: 'green',
            processing: 'yellow'
          };
          function Status({
            synthesis,
            relevance,
            assessment
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const getStatusColor = status => {
              let color = STATUS_COLORS[status];
              return color ?? 'red';
            };
            return _react.default.createElement("section", {
              className: 'statuses'
            }, _react.default.createElement("div", {
              className: 'status'
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(relevance?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.relevance)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(synthesis?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.synthesis)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(assessment?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.assessment))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/title
      **********************************/

      ims.set('./views/item/title', {
        hash: 2842038646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ModuleData({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, _react.default.createElement("h4", null, title)), _react.default.createElement("span", null, description));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 3259215709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var React = require("react");
          var _context = require("../context");
          var _drafts = require("../item/drafts");
          var _module = require("../item/module/module");
          var _list = require("pragmate-ui/list");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['drafts', 'published'];
            const tabIndex = tabs.indexOf(store.tab);
            const [collection, setCollection] = React.useState(store[store.tab]);
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [mounted, setMounted] = React.useState(false);
            React.useEffect(() => setMounted(true), []);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            const itemControls = {
              drafts: _drafts.ItemDrafts,
              published: _module.Item
            };
            const onChange = async event => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[parseInt(event.currentTarget.dataset.index)];
              urlParams.set('tab', tab);
              const target = event.currentTarget;
              target.closest('.pui-tabs-menu').querySelectorAll('.pui-tab').forEach(tab => tab.classList.remove('active'));
              target.classList.add('active');
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(parseInt(event.currentTarget.dataset.index));
              setFetching(true);
              await store.load(tab);
              setCollection(store[tab]);
              setFetching(false);
            };
            if (fetching && !collection.items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_ui.AppLoader, null));
            }
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
                initial: mounted ? false : {
                  opacity: 0,
                  y: 15
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.25,
                  ease: 'easeOut'
                },
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
            }, texts.tabs.drafts), React.createElement("div", {
              "data-index": "1",
              className: `pui-tab tab${tabSelect === 1 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.published))), fetching ? React.createElement(_empty.Empty, {
              className: "loading-list-page"
            }, React.createElement(_ui.AppLoader, null)) : React.createElement("div", {
              className: "pui-tab-panes"
            }, React.createElement(ListTab, {
              items: collection.items
            })));
          }
          {
            /* <TabsContainer className="pui-page-tabs-container" onChange={onChange} active={tabSelect}>
                        <Tabs className="page__tabs">
                            <Tab>{texts.tabs.drafts}</Tab>
                            <Tab>{texts.tabs.published}</Tab>
                            <Tab>{texts.tabs.trash}</Tab>
                        </Tabs>
                        <Panes className="module-list__panes">
                            <ListTab items={collection.items} />
                            <ListTab items={collection.items} />
                            <ListTab items={collection.items} />
                        </Panes>
                    </TabsContainer> */
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX2kxOG4iLCJfbWFpbkxheW91dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfbW9kZWwiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwibW9kdWxlcyIsInB1Ymxpc2hlZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwicm91dGUiLCJsb2FkRHJhZnRzIiwidHlwZXMiLCJiaW5kIiwidGl0bGVzIiwiZW50aXRpZXMiLCJzZXQiLCJicmVhZGNydW1iIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsImRlbGV0ZU1vZHVsZSIsImRlbGV0ZUl0ZW0iLCJhcmNoaXZlSXRlbSIsImFyY2hpdmUiLCJSZWFjdCIsIkxpc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2ljb25zIiwiX2xpc3QiLCJmZXRjaGluZyIsInVzZVN0b3JlIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidXNlU3RhdGUiLCJvbkNsaWNrQWN0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiRnJhZ21lbnQiLCJEcmFmdENhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJvbkNhbmNlbCIsIkFyY2hpdmVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiRGVsZXRlSXRlbU1vZGFsIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9kZWxldGUiLCJfYXJjaGl2ZSIsIkl0ZW0iLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuQXJjaGl2ZSIsInNldE9wZW5BcmNoaXZlIiwidXNlQmluZGVyIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVPd25lckZvcm0iLCJ0b2dnbGVEZWxldGUiLCJ0b2dnbGVBcmNoaXZlIiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIkFwcEljb25CdXR0b24iLCJhc3NpZ25Ub0NsYXNzcm9vbSIsImRhc2hib2FyZCIsInVzZSIsImFzc2lnbm1lbnRzIiwiaXRlbXMiLCJsZW5ndGgiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIk93bmVyQXNzaWduRm9ybSIsIl9yZWFjdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiZWxlbWVudHMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfZHJhZnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0IiwiZW1wdHlUZXh0cyIsIml0ZW1Db250cm9scyIsIm9uQ2hhbmdlIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZUludCIsImluZGV4IiwidGFyZ2V0IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJMaXN0VGFiIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiLy90cy92aWV3cy9pdGVtL21vZHVsZS9hcmNoaXZlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9tb2R1bGUvZGVsZXRlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiLy90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENB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