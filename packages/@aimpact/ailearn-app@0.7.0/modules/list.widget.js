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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX2kxOG4iLCJfbWFpbkxheW91dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfdGV4dHMiLCJfbW9kZWwiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwibW9kdWxlcyIsInB1Ymxpc2hlZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwicm91dGUiLCJsb2FkRHJhZnRzIiwidmlldyIsInR5cGVzIiwiYmluZCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJtYXAiLCJkZWxldGUiLCJkZWxldGVNb2R1bGUiLCJkZWxldGVJdGVtIiwiYXJjaGl2ZUl0ZW0iLCJhcmNoaXZlIiwiUmVhY3QiLCJMaXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saXN0IiwiZmV0Y2hpbmciLCJ1c2VTdG9yZSIsIkNvbnRyb2xzIiwibGlzdCIsImdyaWQiLCJDb250cm9sIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidXNlU3RhdGUiLCJvbkNsaWNrQWN0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiRnJhZ21lbnQiLCJEcmFmdENhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJvbkNhbmNlbCIsIkFyY2hpdmVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiRGVsZXRlSXRlbU1vZGFsIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9kZWxldGUiLCJfYXJjaGl2ZSIsIkl0ZW0iLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuQXJjaGl2ZSIsInNldE9wZW5BcmNoaXZlIiwidXNlQmluZGVyIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVPd25lckZvcm0iLCJ0b2dnbGVEZWxldGUiLCJ0b2dnbGVBcmNoaXZlIiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIkFwcEljb25CdXR0b24iLCJhc3NpZ25Ub0NsYXNzcm9vbSIsImRhc2hib2FyZCIsInVzZSIsImFzc2lnbm1lbnRzIiwiaXRlbXMiLCJsZW5ndGgiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIk93bmVyQXNzaWduRm9ybSIsIl9yZWFjdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiZWxlbWVudHMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfZHJhZnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0IiwiZW1wdHlUZXh0cyIsIml0ZW1Db250cm9scyIsIm9uQ2hhbmdlIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZUludCIsImluZGV4Iiwic2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJMaXN0VGFiIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2FyY2hpdmUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNW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