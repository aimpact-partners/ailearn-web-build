System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/i18n.ts", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/components/module-card", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/modules/assign", "@aimpact/ailearn-app@0.7.0/modules/owner-assign.code", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_4 = _aimpactAilearnApp070I18nTs;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_8 = _beyondJsReactive211Model;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_11 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_12 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Icons) {
      dependency_13 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_pragmateUi108Modal) {
      dependency_15 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ModulesAssign) {
      dependency_17 = _aimpactAilearnApp070ModulesAssign;
    }, function (_aimpactAilearnApp070ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp070ModulesOwnerAssignCode;
    }, function (_beyondJsKernel0114Routing) {
      dependency_19 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Empty) {
      dependency_20 = _pragmateUi108Empty;
    }, function (_pragmateUi108List) {
      dependency_21 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/modules/assign', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/modules/list.widget');
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
        hash: 3289893576,
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
              this.view = type;
              const types = {
                drafts: this.loadDrafts.bind(this),
                published: this.loadModules.bind(this)
              };
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
        hash: 4271104973,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const Controls = {
              list: 'ListControl',
              grid: 'GridControl'
            };
            const Control = Controls[store.view];
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
        hash: 758024129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX2kxOG4iLCJfbWFpbkxheW91dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfbW9kZWwiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwibW9kdWxlcyIsInB1Ymxpc2hlZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwicm91dGUiLCJsb2FkRHJhZnRzIiwidmlldyIsInR5cGVzIiwiYmluZCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJtYXAiLCJkZWxldGUiLCJkZWxldGVNb2R1bGUiLCJkZWxldGVJdGVtIiwiYXJjaGl2ZUl0ZW0iLCJhcmNoaXZlIiwiUmVhY3QiLCJMaXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saXN0IiwiZmV0Y2hpbmciLCJ1c2VTdG9yZSIsIkNvbnRyb2xzIiwibGlzdCIsImdyaWQiLCJDb250cm9sIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidXNlU3RhdGUiLCJvbkNsaWNrQWN0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiRnJhZ21lbnQiLCJEcmFmdENhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJvbkNhbmNlbCIsIkFyY2hpdmVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiRGVsZXRlSXRlbU1vZGFsIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9kZWxldGUiLCJfYXJjaGl2ZSIsIkl0ZW0iLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuQXJjaGl2ZSIsInNldE9wZW5BcmNoaXZlIiwidXNlQmluZGVyIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVPd25lckZvcm0iLCJ0b2dnbGVEZWxldGUiLCJ0b2dnbGVBcmNoaXZlIiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIkFwcEljb25CdXR0b24iLCJhc3NpZ25Ub0NsYXNzcm9vbSIsImRhc2hib2FyZCIsInVzZSIsImFzc2lnbm1lbnRzIiwiaXRlbXMiLCJsZW5ndGgiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIk93bmVyQXNzaWduRm9ybSIsIl9yZWFjdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiZWxlbWVudHMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfZHJhZnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0IiwiZW1wdHlUZXh0cyIsIml0ZW1Db250cm9scyIsIm9uQ2hhbmdlIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZUludCIsImluZGV4Iiwic2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJMaXN0VGFiIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiLy90cy92aWV3cy9pdGVtL21vZHVsZS9hcmNoaXZlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9tb2R1bGUvZGVsZXRlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi8vdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiLy90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxX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