System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/modules/assign", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk141Session) {
      dependency_8 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_9 = _aimpactAilearnApp031I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_16 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_18 = _aimpactAilearnApp031ModulesAssign;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_19 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_21 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7List) {
      dependency_22 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['pragmate-ui/modal', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/ailearn-app/modules/assign', dependency_18], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/list', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/list.widget');
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
        hash: 2143199324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
              this.#drafts = new _learningModules.LearningModules();
              //@ts-ignore
              this.#modules = new _learningModules.LearningModules();
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
              this.trigger('items.changed');
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
        hash: 2708434875,
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
        hash: 521305570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching] = React.useState(store.fetching);
            const [updated, setUpdated] = React.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
            }, ['items.changed']);
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
        hash: 1824811694,
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
              onClick: onAction,
              actions: {
                delete: onDelete
              }
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "share",
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
            }), item.assignments.length === 0 ? React.createElement(_icons.AppIconButton, {
              icon: "delete",
              title: globalTexts.actions.delete,
              onClick: toggleDelete
            }) : React.createElement(_icons.AppIconButton, {
              icon: "archive",
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
        hash: 1035261155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwibW9kdWxlcyIsInB1Ymxpc2hlZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsInRyaWdnZXIiLCJnbG9iYWxUaGlzIiwibGlzdGVuVGV4dHMiLCJzZXRCcmVhZGNydW1iIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwicmVzcG9uc2UiLCJ0eXBlIiwicm91dGUiLCJsb2FkRHJhZnRzIiwidHlwZXMiLCJiaW5kIiwidGl0bGVzIiwiZW50aXRpZXMiLCJzZXQiLCJicmVhZGNydW1iIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsImRlbGV0ZU1vZHVsZSIsImRlbGV0ZUl0ZW0iLCJhcmNoaXZlSXRlbSIsImFyY2hpdmUiLCJSZWFjdCIsIkxpc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2ljb25zIiwiX2xpc3QiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIl9tb2R1bGVDYXJkIiwiX21vZGFsIiwiSXRlbURyYWZ0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsIm9uQ2xpY2tBY3Rpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJGcmFnbWVudCIsIkRyYWZ0Q2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm9uQ2FuY2VsIiwiQXJjaGl2ZUl0ZW1Nb2RhbCIsIm9uQ2xvc2UiLCJzZXRPcGVuQ29uZmlybSIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiZGVmYXVsdCIsIk1vZGFsIiwiRXJyb3JSZW5kZXJlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJEZWxldGVJdGVtTW9kYWwiLCJfYXNzaWduIiwiX293bmVyQXNzaWduIiwiX2RlbGV0ZSIsIl9hcmNoaXZlIiwiSXRlbSIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuQXJjaGl2ZSIsInNldE9wZW5BcmNoaXZlIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVPd25lckZvcm0iLCJ0b2dnbGVEZWxldGUiLCJ0b2dnbGVBcmNoaXZlIiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIkFwcEljb25CdXR0b24iLCJhc3NpZ25Ub0NsYXNzcm9vbSIsImRhc2hib2FyZCIsInVzZSIsImFzc2lnbm1lbnRzIiwibGVuZ3RoIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJPd25lckFzc2lnbkZvcm0iLCJfcmVhY3QiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsImVsZW1lbnRzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX2RyYWZ0cyIsIl9tb2R1bGUiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJlbXB0eVRleHRzIiwiaXRlbUNvbnRyb2xzIiwib25DaGFuZ2UiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlSW50IiwiaW5kZXgiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJpdGVtcyIsIkVtcHR5IiwiQXBwTG9hZGVyIiwiTGlzdFRhYiIsImNvbnRyb2wiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvYXJjaGl2ZS50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvZGVsZXRlLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDTCxHQUFHLENBQUM7WUFDdEI7WUFFQU0sSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBaEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBaUIsV0FBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLGdCQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsZUFBQSxHQUFBeEIsT0FBQTtVQUVBLElBQUF5QixLQUFBLEdBQUF6QixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRYyxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLE1BQU87WUFFUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUlDLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRO1lBQ3JCO1lBRUEsQ0FBQWpCLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUNBLENBQUFtQixLQUFNLEdBQStCLElBQUlQLE1BQUEsQ0FBQVEsWUFBWSxDQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFDQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT1YsS0FBQSxDQUFBVSxXQUFXLENBQUNMLEtBQUs7WUFDekI7WUFDQSxJQUFJTSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTSxLQUFLLElBQUlYLEtBQUEsQ0FBQVUsV0FBVyxDQUFDQyxLQUFLO1lBQzdEO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUDtjQUNBLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUcsSUFBSUwsZ0JBQUEsQ0FBQWdCLGVBQWUsRUFBRTtjQUNwQztjQUNBLElBQUksQ0FBQyxDQUFBVixPQUFRLEdBQUcsSUFBSU4sZ0JBQUEsQ0FBQWdCLGVBQWUsRUFBRTtjQUNyQyxJQUFJLENBQUMsQ0FBQVYsT0FBUSxDQUFDVyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzdDLElBQUksQ0FBQyxDQUFBWixPQUFRLENBQUNXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUN0RSxJQUFJLENBQUMsQ0FBQWQsTUFBTyxDQUFDWSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzVDLElBQUksQ0FBQyxDQUFBYixNQUFPLENBQUNZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUNyRUMsVUFBVSxDQUFDckMsS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFFQVUsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBZSxLQUFNLENBQUNTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDSSxXQUFXLENBQUM7Y0FDMUMsSUFBSSxDQUFDQSxXQUFXLEVBQUU7WUFDbkI7WUFDQUEsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBYixLQUFNLENBQUNNLEtBQUssRUFBRTtjQUV4QixJQUFJLENBQUNRLGFBQWEsRUFBRTtjQUNwQixJQUFJLENBQUNKLFlBQVksRUFBRTtZQUNwQixDQUFDO1lBQ0R0QixLQUFLQSxDQUFBO2NBQ0osS0FBSyxDQUFDa0IsS0FBSyxHQUFHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ2UsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNGLFdBQVcsQ0FBQztZQUM1QztZQUVBQyxhQUFhQSxDQUFBO2NBQ1p4QixXQUFBLENBQUEwQixZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO1lBQzdCO1lBRUEsTUFBTUMsV0FBV0EsQ0FBQTtjQUNoQixJQUFJLENBQUMsQ0FBQXJDLEdBQUksR0FBRyxXQUFXO2NBRXZCLElBQUksSUFBSSxDQUFDLENBQUFpQixPQUFRLENBQUNxQixNQUFNLEVBQUU7Y0FDMUI7Y0FDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXRCLE9BQVEsQ0FBQ1osSUFBSSxDQUFDO2dCQUFFbUMsSUFBSSxFQUFFLFFBQVE7Z0JBQUVDLEtBQUssRUFBRTtjQUFFLENBQUUsQ0FBQztjQUV4RSxLQUFLLENBQUNoQixLQUFLLEdBQUcsSUFBSTtjQUNsQixPQUFPYyxRQUFRO1lBQ2hCO1lBRUEsTUFBTUcsVUFBVUEsQ0FBQTtjQUNmLElBQUksQ0FBQyxDQUFBMUMsR0FBSSxHQUFHLFFBQVE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQWdCLE1BQU8sQ0FBQ3NCLE1BQU0sRUFBRTtjQUN6QjtjQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDWCxJQUFJLENBQUM7Z0JBQUVtQyxJQUFJLEVBQUUsT0FBTztnQkFBRUMsS0FBSyxFQUFFO2NBQVMsQ0FBRSxDQUFDO2NBQzdFLEtBQUssQ0FBQ2hCLEtBQUssR0FBRyxJQUFJO2NBQ2xCLE9BQU9jLFFBQVE7WUFDaEI7WUFFQWxDLElBQUlBLENBQUNtQyxJQUFJLEdBQUcsV0FBVztjQUN0QixNQUFNRyxLQUFLLEdBQUc7Z0JBQ2IzQixNQUFNLEVBQUUsSUFBSSxDQUFDMEIsVUFBVSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNsQzFCLFNBQVMsRUFBRSxJQUFJLENBQUNtQixXQUFXLENBQUNPLElBQUksQ0FBQyxJQUFJO2VBQ3JDO2NBRUQsTUFBTUMsTUFBTSxHQUFHO2dCQUNkN0IsTUFBTSxFQUFFLElBQUksQ0FBQ1EsV0FBVyxDQUFDc0IsUUFBUSxDQUFDOUIsTUFBTTtnQkFDeENFLFNBQVMsRUFBRSxJQUFJLENBQUNNLFdBQVcsQ0FBQ3NCLFFBQVEsQ0FBQzdCO2VBQ3JDO2NBQ0RSLFdBQUEsQ0FBQTBCLFlBQVksQ0FBQ1ksR0FBRyxDQUFDO2dCQUNoQlgsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RZLFVBQVUsRUFBRSxDQUFDLENBQUNILE1BQU0sQ0FBQ0wsSUFBSSxDQUFDLENBQUM7ZUFDM0IsQ0FBQztjQUNGLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxJQUFJLENBQUMsRUFBRTtnQkFDakIsTUFBTSxJQUFJUyxLQUFLLENBQUMsaUJBQWlCVCxJQUFJLEVBQUUsQ0FBQzs7Y0FFekMsT0FBT0csS0FBSyxDQUFDSCxJQUFJLENBQUMsRUFBRTtZQUNyQjtZQUVBLE1BQU1VLFdBQVdBLENBQUNDLEVBQUU7Y0FDbkI7Y0FDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFwQyxNQUFPLENBQUNxQyxHQUFHLENBQUNsRCxHQUFHLENBQUNnRCxFQUFFLENBQUM7Y0FDckMsTUFBTUMsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Y0FDbkIsSUFBSSxDQUFDeEIsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM5QjtZQUVBLE1BQU15QixZQUFZQSxDQUFDSCxJQUFJO2NBQ3RCLE1BQU1BLElBQUksQ0FBQ0ksVUFBVSxFQUFFO2NBQ3ZCO2NBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQXZDLE9BQVEsQ0FBQ1osSUFBSSxDQUFDO2dCQUFFbUMsSUFBSSxFQUFFLFFBQVE7Z0JBQUVDLEtBQUssRUFBRTtjQUFFLENBQUUsQ0FBQztjQUN2RCxJQUFJLENBQUNaLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDbkM7WUFFQSxNQUFNNEIsV0FBV0EsQ0FBQ0wsSUFBSTtjQUNyQixNQUFNQSxJQUFJLENBQUNNLE9BQU8sRUFBRTtjQUNwQjtjQUNBLE1BQU0sSUFBSSxDQUFDLENBQUF6QyxPQUFRLENBQUNaLElBQUksQ0FBQztnQkFBRW1DLElBQUksRUFBRSxRQUFRO2dCQUFFQyxLQUFLLEVBQUU7Y0FBRSxDQUFFLENBQUM7Y0FDdkQsSUFBSSxDQUFDWixZQUFZLENBQUMsZUFBZSxDQUFDO1lBQ25DOztVQUNBckIsT0FBQSxDQUFBWixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklELElBQUErRCxLQUFBLEdBQUF0RSxPQUFBO1VBV08sTUFBTXVFLFdBQVcsR0FBQXBELE9BQUEsQ0FBQW9ELFdBQUEsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUNILFdBQVcsQ0FBQztVQUFDcEQsT0FBQSxDQUFBc0QsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1psRSxJQUFBSCxLQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxHQUFBLEdBQUE3RSxPQUFBO1VBRU0sU0FBVThFLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFaEQsS0FBSztjQUFFekI7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ3pDLE9BQ0NILEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUFHLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFbkQsS0FBSyxDQUFDb0QsS0FBSyxDQUFDQyxPQUFPLENBQUNDLEtBQUs7Y0FBRUMsV0FBVyxFQUFFdkQsS0FBSyxDQUFDb0QsS0FBSyxDQUFDQyxPQUFPLENBQUNFLFdBQVc7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sR0FDcEdoQixLQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQW9DLEdBQ2xEakIsS0FBQSxDQUFBUyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUMscUJBQXFCO2NBQUNGLFNBQVMsRUFBQztZQUFzQixHQUMvRGxGLEtBQUssQ0FBQzhCLFdBQVcsQ0FBQ3VELE9BQU8sQ0FBQ0MsTUFBTSxDQUMzQixDQUNGLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWQsR0FBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUFzRSxLQUFBLEdBQUF0RSxPQUFBO1VBR0EsSUFBQTRGLE1BQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBNkYsTUFBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBRUEsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBOEYsS0FBQSxHQUFBOUYsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQytCLEtBQUssRUFBRTJELFFBQVEsQ0FBQyxHQUFHekIsS0FBSyxDQUFDMEIsUUFBUSxDQUFVM0YsS0FBSyxDQUFDK0IsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQzZELFFBQVEsQ0FBQyxHQUFHM0IsS0FBSyxDQUFDMEIsUUFBUSxDQUFVM0YsS0FBSyxDQUFDNEYsUUFBUSxDQUFDO1lBQzFELE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzdCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTTtjQUFFbEU7WUFBSyxDQUFFLEdBQUd6QixLQUFLO1lBQ3ZCLElBQUF1RixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDL0YsS0FBSyxDQUFDLEVBQUUsTUFBTTBGLFFBQVEsQ0FBQzFGLEtBQUssQ0FBQytCLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUF3RCxNQUFBLENBQUFRLFNBQVMsRUFDUixDQUFDL0YsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKOEYsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFDRCxDQUFDLGVBQWUsQ0FBQyxDQUNqQjtZQUVELElBQUksQ0FBQzlGLEtBQUssQ0FBQytCLEtBQUssRUFBRSxPQUFPa0MsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQXdCLFVBQVU7Y0FBQ0osUUFBUSxFQUFFO1lBQUksRUFBSTtZQUV2RCxNQUFNL0QsS0FBSyxHQUFHO2NBQUVKLEtBQUs7Y0FBRXpCLEtBQUs7Y0FBRTRGO1lBQVEsQ0FBRTtZQUV4QyxPQUNDM0IsS0FBQSxDQUFBUyxhQUFBLENBQUNILFFBQUEsQ0FBQUwsV0FBVyxDQUFDK0IsUUFBUTtjQUFDcEUsS0FBSyxFQUFFQTtZQUFLLEdBQ2pDb0MsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQTBCLGFBQWEsUUFDYmpDLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUEyQixTQUFTO2NBQUNwQixLQUFLLEVBQUV0RCxLQUFLLENBQUNzRDtZQUFLLEdBQzVCZCxLQUFBLENBQUFTLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDakIsS0FBQSxDQUFBUyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBcUIsR0FDL0JuQixLQUFBLENBQUFTLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBWSxJQUFJO2NBQUNuQixJQUFJLEVBQUM7WUFBWSxFQUFHLEVBQ3pCakYsS0FBSyxDQUFDOEIsV0FBVyxDQUFDdUQsT0FBTyxDQUFDQyxNQUFNLENBQzNCLENBQ0UsQ0FDQyxFQUNackIsS0FBQSxDQUFBUyxhQUFBLENBQUNlLEtBQUEsQ0FBQVksSUFBSSxPQUFHLENBQ08sQ0FDTTtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQXBDLEtBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRyxXQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTZGLE1BQUEsR0FBQTdGLE9BQUE7VUFDQSxJQUFBNEcsTUFBQSxHQUFBNUcsT0FBQTtVQUVNLFNBQVU2RyxVQUFVQSxDQUFDO1lBQUU5QztVQUFJLENBQUU7WUFDbEMsTUFBTTtjQUFFakMsS0FBSztjQUFFekI7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ3pDLE1BQU0sQ0FBQ3FDLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3pDLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTWdCLGFBQWEsR0FBR0MsS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJKLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTUssUUFBUSxHQUFHLE1BQU1ILEtBQUssSUFBRztjQUM5QixNQUFNNUcsS0FBSyxDQUFDd0QsV0FBVyxDQUFDRSxJQUFJLENBQUNELEVBQUUsQ0FBQztjQUNoQ2lELGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsT0FDQ3pDLEtBQUEsQ0FBQVMsYUFBQSxDQUFBVCxLQUFBLENBQUErQyxRQUFBLFFBQ0MvQyxLQUFBLENBQUFTLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQVcsU0FBUztjQUFDL0IsU0FBUyxFQUFDLGFBQWE7Y0FBQ3hCLElBQUksRUFBRUEsSUFBSTtjQUFFakMsS0FBSyxFQUFFQSxLQUFLO2NBQUUyRCxJQUFJLEVBQUUsMEJBQTBCMUIsSUFBSSxDQUFDRCxFQUFFO1lBQUUsR0FDckdRLEtBQUEsQ0FBQVMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBWSxnQkFBZ0I7Y0FBQ3hELElBQUksRUFBRUE7WUFBSSxHQUMzQk8sS0FBQSxDQUFBUyxhQUFBLENBQUM0QixXQUFBLENBQUFhLHVCQUF1QixRQUN2QmxELEtBQUEsQ0FBQVMsYUFBQSxDQUFDYyxNQUFBLENBQUE0QixVQUFVO2NBQUNuQyxJQUFJLEVBQUMsUUFBUTtjQUFDb0MsT0FBTyxFQUFFVixhQUFhO2NBQUU1QixLQUFLLEVBQUV0RCxLQUFLLENBQUM0RCxPQUFPLENBQUN6QjtZQUFNLEVBQUksQ0FDeEQsQ0FDUixDQUNSLEVBQ1g2QyxlQUFlLElBQ2Z4QyxLQUFBLENBQUFTLGFBQUEsQ0FBQzZCLE1BQUEsQ0FBQWUsWUFBWTtjQUNadkMsS0FBSyxFQUFFdEQsS0FBSyxDQUFDbUMsTUFBTSxDQUFDbUIsS0FBSztjQUN6QjFFLElBQUk7Y0FDSmtILFNBQVMsRUFBRVIsUUFBUTtjQUNuQlMsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUV6SCxLQUFLLENBQUM4QixXQUFXLENBQUN1RCxPQUFPLENBQUNxQztjQUFPLENBQUU7Y0FDeERDLFNBQVMsRUFBRTtnQkFBRUYsS0FBSyxFQUFFekgsS0FBSyxDQUFDOEIsV0FBVyxDQUFDdUQsT0FBTyxDQUFDdUM7Y0FBTSxDQUFFO2NBQ3REQyxRQUFRLEVBQUVBLENBQUEsS0FBTW5CLGtCQUFrQixDQUFDLEtBQUs7WUFBQyxHQUV6Q3pDLEtBQUEsQ0FBQVMsYUFBQSxlQUFPakQsS0FBSyxDQUFDbUMsTUFBTSxDQUFDb0IsV0FBVyxDQUFRLENBRXhDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQWYsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNkUsR0FBQSxHQUFBN0UsT0FBQTtVQUVBLElBQUE0RSxRQUFBLEdBQUE1RSxPQUFBO1VBUU0sU0FBVW1JLGdCQUFnQkEsQ0FBQztZQUFFQyxPQUFPO1lBQUVyRSxJQUFJO1lBQUVqQztVQUFLLENBQVU7WUFDaEUsTUFBTSxHQUFHdUcsY0FBYyxDQUFDLEdBQUcvRCxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFcUMsV0FBVyxDQUFDLEdBQUdoRSxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3VDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdsRSxLQUFLLENBQUMwQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU07Y0FBRTNGO1lBQUssQ0FBRSxHQUFHLElBQUF1RSxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxNQUFNdEMsV0FBVyxHQUFHOUIsS0FBSyxDQUFDOEIsV0FBVztZQUNyQyxNQUFNeUYsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIVSxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNakksS0FBSyxDQUFDK0QsV0FBVyxDQUFDTCxJQUFJLENBQUM7Z0JBRTdCcUUsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7Z0JBQ2RELFFBQVEsQ0FBQzFHLEtBQUssQ0FBQ21DLE1BQU0sQ0FBQzJFLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDSSxJQUFJLENBQUNDLFFBQVEsRUFBRSxDQUFDLElBQUloSCxLQUFLLENBQUNtQyxNQUFNLENBQUMyRSxNQUFNLENBQUNHLE9BQU8sQ0FBQztlQUMvRSxTQUFTO2dCQUNUVCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ2hFLEtBQUEsQ0FBQVMsYUFBQSxDQUFDNkIsTUFBQSxDQUFBb0MsS0FBSztjQUFDdEksSUFBSTtjQUFDMEgsT0FBTyxFQUFFQSxPQUFPO2NBQUU3QyxTQUFTLEVBQUM7WUFBa0IsR0FDekRqQixLQUFBLENBQUFTLGFBQUE7Y0FBUVEsU0FBUyxFQUFDO1lBQWUsR0FDaENqQixLQUFBLENBQUFTLGFBQUEsYUFBS2pELEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ2UsS0FBSyxDQUFNLENBQ3RCLEVBQ1RkLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUFvRSxhQUFhO2NBQUNWLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CakUsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUM5QmpCLEtBQUEsQ0FBQVMsYUFBQSxZQUFJakQsS0FBSyxDQUFDdUMsT0FBTyxDQUFDZ0IsV0FBVyxDQUFLLENBQzdCLEVBQ05mLEtBQUEsQ0FBQVMsYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBZ0IsR0FDakNqQixLQUFBLENBQUFTLGFBQUEsQ0FBQ0osV0FBQSxDQUFBdUUsTUFBTTtjQUFDeEIsT0FBTyxFQUFFVSxPQUFPO2NBQUVlLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7WUFBQSxHQUNsRGpILFdBQVcsQ0FBQ3VELE9BQU8sQ0FBQ3VDLE1BQU0sQ0FDbkIsRUFFVDNELEtBQUEsQ0FBQVMsYUFBQSxDQUFDSixXQUFBLENBQUF1RSxNQUFNO2NBQUN4QixPQUFPLEVBQUVFLFNBQVM7Y0FBRXVCLE9BQU8sRUFBQztZQUFTLEdBQzNDaEgsV0FBVyxDQUFDdUQsT0FBTyxDQUFDcUMsT0FBTyxDQUNwQixDQUNELEVBQ1R6RCxLQUFBLENBQUFTLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBd0UsZ0JBQWdCO2NBQUNwRCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBM0IsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNkUsR0FBQSxHQUFBN0UsT0FBQTtVQUVBLElBQUE0RSxRQUFBLEdBQUE1RSxPQUFBO1VBUU0sU0FBVXNKLGVBQWVBLENBQUM7WUFBRWxCLE9BQU87WUFBRXJFLElBQUk7WUFBRWpDO1VBQUssQ0FBVTtZQUMvRCxNQUFNLEdBQUd1RyxjQUFjLENBQUMsR0FBRy9ELEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDaEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVxQyxXQUFXLENBQUMsR0FBR2hFLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDdUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2xFLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUMsTUFBTTtjQUFFM0Y7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ2xDLE1BQU10QyxXQUFXLEdBQUc5QixLQUFLLENBQUM4QixXQUFXO1lBQ3JDLE1BQU15RixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hVLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1qSSxLQUFLLENBQUM2RCxZQUFZLENBQUNILElBQUksQ0FBQztnQkFFOUJxRSxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQztnQkFDZEQsUUFBUSxDQUFDMUcsS0FBSyxDQUFDbUMsTUFBTSxDQUFDMkUsTUFBTSxDQUFDSCxDQUFDLENBQUNJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLENBQUMsSUFBSWhILEtBQUssQ0FBQ21DLE1BQU0sQ0FBQzJFLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO2VBQy9FLFNBQVM7Z0JBQ1RULFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDaEUsS0FBQSxDQUFBUyxhQUFBLENBQUM2QixNQUFBLENBQUFvQyxLQUFLO2NBQUN0SSxJQUFJO2NBQUMwSCxPQUFPLEVBQUVBLE9BQU87Y0FBRTdDLFNBQVMsRUFBQztZQUFrQixHQUN6RGpCLEtBQUEsQ0FBQVMsYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBZSxHQUNoQ2pCLEtBQUEsQ0FBQVMsYUFBQSxhQUFLakQsS0FBSyxDQUFDbUMsTUFBTSxDQUFDbUIsS0FBSyxDQUFNLENBQ3JCLEVBQ1RkLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUFvRSxhQUFhO2NBQUNWLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CakUsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUM5QmpCLEtBQUEsQ0FBQVMsYUFBQSxZQUFJakQsS0FBSyxDQUFDbUMsTUFBTSxDQUFDb0IsV0FBVyxDQUFLLENBQzVCLEVBQ05mLEtBQUEsQ0FBQVMsYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBZ0IsR0FDakNqQixLQUFBLENBQUFTLGFBQUEsQ0FBQ0osV0FBQSxDQUFBdUUsTUFBTTtjQUFDeEIsT0FBTyxFQUFFVSxPQUFPO2NBQUVlLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7WUFBQSxHQUNsRGpILFdBQVcsQ0FBQ3VELE9BQU8sQ0FBQ3VDLE1BQU0sQ0FDbkIsRUFDVDNELEtBQUEsQ0FBQVMsYUFBQSxDQUFDSixXQUFBLENBQUF1RSxNQUFNO2NBQUN4QixPQUFPLEVBQUVFLFNBQVM7Y0FBRXVCLE9BQU8sRUFBQztZQUFTLEdBQzNDaEgsV0FBVyxDQUFDdUQsT0FBTyxDQUFDcUMsT0FBTyxDQUNwQixDQUNELEVBQ1R6RCxLQUFBLENBQUFTLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBd0UsZ0JBQWdCO2NBQUNwRCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBSixNQUFBLEdBQUE3RixPQUFBO1VBQ0EsSUFBQTJHLFdBQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBdUosT0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUF3SixZQUFBLEdBQUF4SixPQUFBO1VBQ0EsSUFBQTRGLE1BQUEsR0FBQTVGLE9BQUE7VUFFQSxJQUFBc0UsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUE0RSxRQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQXlKLE9BQUEsR0FBQXpKLE9BQUE7VUFDQSxJQUFBMEosUUFBQSxHQUFBMUosT0FBQTtVQUVNLFNBQVUySixJQUFJQSxDQUFDO1lBQUU1RjtVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUNMakMsS0FBSztjQUNMekIsS0FBSztjQUNMQSxLQUFLLEVBQUU7Z0JBQUU4QjtjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBeUMsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFFcEIsTUFBTSxDQUFDeUIsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzdCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQ2pDLElBQUksQ0FBQzZGLGFBQWEsRUFBRSxDQUFDO1lBQ2xFLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3hGLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDK0QsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzFGLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDaUUsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHNUYsS0FBSyxDQUFDMEIsUUFBUSxDQUFDbUUsU0FBUyxDQUFDO1lBQ3JFLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRy9GLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDc0UsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR2pHLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBQUosTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ3JDLElBQUksQ0FBQyxFQUFFLE1BQUs7Y0FDdEJyQixVQUFVLENBQUNxQixJQUFJLEdBQUdBLElBQUk7Y0FDdEJvQyxVQUFVLENBQUNwQyxJQUFJLENBQUM2RixhQUFhLEVBQUUsQ0FBQztZQUNqQyxDQUFDLENBQUM7WUFFRixNQUFNWSxLQUFLLEdBQUd2RCxLQUFLLElBQUc7Y0FDckJBLEtBQUssQ0FBQ0UsZUFBZSxFQUFFO2NBQ3ZCMkMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTVcsV0FBVyxHQUFHeEQsS0FBSyxJQUFHO2NBQzNCQSxLQUFLLEVBQUVFLGVBQWUsRUFBRTtjQUN4QitDLGlCQUFpQixDQUFDQyxTQUFTLENBQUM7Y0FDNUJILFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDekIsQ0FBQztZQUNELE1BQU1XLFFBQVEsR0FBR3pELEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkI2QyxZQUFZLENBQUMsSUFBSSxDQUFDO2NBQ2xCRSxpQkFBaUIsQ0FBQ2pELEtBQUssQ0FBQzBELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUM7WUFDdEQsQ0FBQztZQUNELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNaEIsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUN0RCxNQUFNa0IsWUFBWSxHQUFHOUQsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLEVBQUVFLGVBQWUsRUFBRTtjQUN4QmtELGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU1ZLGFBQWEsR0FBRy9ELEtBQUssSUFBRztjQUM3QkEsS0FBSyxFQUFFRSxlQUFlLEVBQUU7Y0FDeEJvRCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBQzdCLENBQUM7WUFDRCxNQUFNbEQsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0NyRSxLQUFBLENBQUFTLGFBQUEsQ0FBQVQsS0FBQSxDQUFBK0MsUUFBQSxRQUNDL0MsS0FBQSxDQUFBUyxhQUFBLENBQUM0QixXQUFBLENBQUFzRSxVQUFVO2NBQ1ZsSCxJQUFJLEVBQUVBLElBQUk7Y0FDVmpDLEtBQUssRUFBRUEsS0FBSztjQUNab0osTUFBTSxFQUFDLFFBQVE7Y0FDZnhELE9BQU8sRUFBRWdELFFBQVE7Y0FDakJoRixPQUFPLEVBQUU7Z0JBQ1J6QixNQUFNLEVBQUVtRDs7WUFDUixHQUVEOUMsS0FBQSxDQUFBUyxhQUFBLENBQUM0QixXQUFBLENBQUFZLGdCQUFnQjtjQUFDeEQsSUFBSSxFQUFFQTtZQUFJLEdBQzNCTyxLQUFBLENBQUFTLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQWEsdUJBQXVCLFFBQ3ZCbEQsS0FBQSxDQUFBUyxhQUFBLENBQUNjLE1BQUEsQ0FBQXNGLGFBQWE7Y0FBQSxlQUNELE9BQU87Y0FDbkJ6RCxPQUFPLEVBQUVnRCxRQUFRO2NBQ2pCcEYsSUFBSSxFQUFDLE9BQU87Y0FDWkYsS0FBSyxFQUFFakQsV0FBVyxDQUFDdUQsT0FBTyxDQUFDMEY7WUFBaUIsRUFDM0MsRUFDRjlHLEtBQUEsQ0FBQVMsYUFBQSxDQUFDYyxNQUFBLENBQUFzRixhQUFhO2NBQUEsZUFDRCxXQUFXO2NBQ3ZCekQsT0FBTyxFQUFFZ0QsUUFBUTtjQUNqQnBGLElBQUksRUFBQyxXQUFXO2NBQ2hCRixLQUFLLEVBQUVqRCxXQUFXLENBQUN1RCxPQUFPLENBQUMyRjtZQUFTLEVBQ25DLEVBQ0YvRyxLQUFBLENBQUFTLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBc0YsYUFBYTtjQUFDN0YsSUFBSSxFQUFDLE9BQU87Y0FBQ0YsS0FBSyxFQUFFdEQsS0FBSyxDQUFDNEQsT0FBTyxDQUFDNEYsR0FBRztjQUFFNUQsT0FBTyxFQUFFOEM7WUFBSyxFQUFJLEVBQ3ZFekcsSUFBSSxDQUFDd0gsV0FBVyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxHQUM3QmxILEtBQUEsQ0FBQVMsYUFBQSxDQUFDYyxNQUFBLENBQUFzRixhQUFhO2NBQUM3RixJQUFJLEVBQUMsUUFBUTtjQUFDRixLQUFLLEVBQUVqRCxXQUFXLENBQUN1RCxPQUFPLENBQUN6QixNQUFNO2NBQUV5RCxPQUFPLEVBQUVxRDtZQUFZLEVBQUksR0FFekZ6RyxLQUFBLENBQUFTLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBc0YsYUFBYTtjQUFDN0YsSUFBSSxFQUFDLFNBQVM7Y0FBQ0YsS0FBSyxFQUFFakQsV0FBVyxDQUFDdUQsT0FBTyxDQUFDckIsT0FBTztjQUFFcUQsT0FBTyxFQUFFc0Q7WUFBYSxFQUN4RixDQUN3QixDQUNSLENBQ1AsRUFFWixDQUFDakIsU0FBUyxJQUFJRSxjQUFjLEtBQzVCM0YsS0FBQSxDQUFBUyxhQUFBLENBQUN3RSxPQUFBLENBQUFrQyxpQkFBaUI7Y0FBQzFILElBQUksRUFBRUEsSUFBSTtjQUFFOEcsTUFBTSxFQUFFWixjQUFjO2NBQUU3QixPQUFPLEVBQUVxQyxXQUFXO2NBQUUzSSxLQUFLLEVBQUVBLEtBQUssQ0FBQzRKO1lBQU0sRUFDaEcsRUFDQTdCLFNBQVMsSUFBSXZGLEtBQUEsQ0FBQVMsYUFBQSxDQUFDeUUsWUFBQSxDQUFBbUMsZUFBZTtjQUFDNUgsSUFBSSxFQUFFQSxJQUFJO2NBQUVxRSxPQUFPLEVBQUUwQyxlQUFlO2NBQUVoSixLQUFLLEVBQUVBLEtBQUssQ0FBQzRKO1lBQU0sRUFBSSxFQUMzRnRCLFVBQVUsSUFBSTlGLEtBQUEsQ0FBQVMsYUFBQSxDQUFDMEUsT0FBQSxDQUFBSCxlQUFlO2NBQUNqSixLQUFLLEVBQUVBLEtBQUs7Y0FBRTBELElBQUksRUFBRUEsSUFBSTtjQUFFcUUsT0FBTyxFQUFFMkMsWUFBWTtjQUFFakosS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDaEd3SSxXQUFXLElBQUloRyxLQUFBLENBQUFTLGFBQUEsQ0FBQzJFLFFBQUEsQ0FBQXZCLGdCQUFnQjtjQUFDOUgsS0FBSyxFQUFFQSxLQUFLO2NBQUUwRCxJQUFJLEVBQUVBLElBQUk7Y0FBRXFFLE9BQU8sRUFBRTRDLGFBQWE7Y0FBRWxKLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2xHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEdBLElBQUE4SixNQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFFQSxNQUFNNkwsYUFBYSxHQUFHO1lBQ3JCekosS0FBSyxFQUFFLE9BQU87WUFDZDBKLFVBQVUsRUFBRTtXQUNaO1VBQ2EsU0FBVUMsTUFBTUEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQ2xFLE1BQU07Y0FBRXBLO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxNQUFNMEgsY0FBYyxHQUFHQyxNQUFNLElBQUc7Y0FDL0IsSUFBSUMsS0FBSyxHQUFHUixhQUFhLENBQUNPLE1BQU0sQ0FBQztjQUNqQyxPQUFPQyxLQUFLLElBQUksS0FBSztZQUN0QixDQUFDO1lBQ0QsT0FDQ1QsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQTtjQUFTUSxTQUFTLEVBQUM7WUFBVSxHQUM1QnFHLE1BQUEsQ0FBQTdDLE9BQUEsQ0FBQWhFLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQVEsR0FDdEJxRyxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBLGNBQ0M2RyxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUI0RyxjQUFjLENBQUNGLFNBQVMsRUFBRUcsTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM1RVIsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxhQUFLakQsS0FBSyxDQUFDd0ssT0FBTyxDQUFDQyxRQUFRLENBQUNOLFNBQVMsQ0FBTSxDQUN0QyxFQUNOTCxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBLGNBQ0M2RyxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUI0RyxjQUFjLENBQUNILFNBQVMsRUFBRUksTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM1RVIsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxhQUFLakQsS0FBSyxDQUFDd0ssT0FBTyxDQUFDQyxRQUFRLENBQUNQLFNBQVMsQ0FBTSxDQUN0QyxFQUNOSixNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBLGNBQ0M2RyxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUI0RyxjQUFjLENBQUNELFVBQVUsRUFBRUUsTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM3RVIsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxhQUFLakQsS0FBSyxDQUFDd0ssT0FBTyxDQUFDQyxRQUFRLENBQUNMLFVBQVUsQ0FBTSxDQUN2QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQU4sTUFBQSxHQUFBNUwsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFFYyxTQUFVd00sVUFBVUEsQ0FBQztZQUFFekk7VUFBSSxDQUFFO1lBQzFDLE1BQU07Y0FBRWpDO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxNQUFNVyxLQUFLLEdBQUdyQixJQUFJLENBQUNxQixLQUFLLElBQUlyQixJQUFJLENBQUMwSSxTQUFTO1lBQzFDLE1BQU1wSCxXQUFXLEdBQUd0QixJQUFJLENBQUNzQixXQUFXLElBQUl2RCxLQUFLLENBQUNpQyxJQUFJLENBQUNzQixXQUFXO1lBQzlELE9BQ0N1RyxNQUFBLENBQUE3QyxPQUFBLENBQUFoRSxhQUFBLGtCQUNDNkcsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxDQUFDSixXQUFBLENBQUFhLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLDBCQUEwQjFCLElBQUksQ0FBQ0QsRUFBRTtZQUFFLEdBQzlDOEgsTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxhQUFLSyxLQUFLLENBQU0sQ0FDVixFQUNQd0csTUFBQSxDQUFBN0MsT0FBQSxDQUFBaEUsYUFBQSxlQUFPTSxXQUFXLENBQVEsQ0FDakI7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQVIsR0FBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUEwTSxRQUFBLEdBQUExTSxPQUFBO1VBQ0EsSUFBQTJNLE1BQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBc0UsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUE0RSxRQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTRNLE9BQUEsR0FBQTVNLE9BQUE7VUFDQSxJQUFBNk0sT0FBQSxHQUFBN00sT0FBQTtVQUNBLElBQUE4RixLQUFBLEdBQUE5RixPQUFBO1VBRU0sU0FBVTBHLElBQUlBLENBQUMsRUFBRTtZQUN0QixNQUFNO2NBQUU1RSxLQUFLO2NBQUV6QjtZQUFLLENBQUUsR0FBRyxJQUFBdUUsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFDekMsTUFBTXFJLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7WUFDcEMsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQzNNLEtBQUssQ0FBQ00sR0FBRyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQ3NNLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc1SSxLQUFLLENBQUMwQixRQUFRLENBQUMzRixLQUFLLENBQUNBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUM7WUFFcEUsTUFBTSxDQUFDd00sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzlJLEtBQUssQ0FBQzBCLFFBQVEsQ0FBUytHLFFBQVEsQ0FBQztZQUNsRSxNQUFNLENBQUM5RyxRQUFRLEVBQUVxQyxXQUFXLENBQUMsR0FBR2hFLEtBQUssQ0FBQzBCLFFBQVEsQ0FBVTNGLEtBQUssQ0FBQzRGLFFBQVEsQ0FBQztZQUV2RSxNQUFNb0gsVUFBVSxHQUFHdkwsS0FBSyxDQUFDb0QsS0FBSyxDQUFDNEgsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNTyxZQUFZLEdBQUc7Y0FDcEIzTCxNQUFNLEVBQUVpTCxPQUFBLENBQUEvRixVQUFVO2NBQ2xCaEYsU0FBUyxFQUFFZ0wsT0FBQSxDQUFBbEQ7YUFDWDtZQUVELE1BQU00RCxRQUFRLEdBQUcsTUFBTXRHLEtBQUssSUFBRztjQUM5QixJQUFJdUcsU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQy9LLFVBQVUsQ0FBQ2dMLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2NBQy9ELE1BQU1oTixHQUFHLEdBQUdtTSxJQUFJLENBQUNjLFFBQVEsQ0FBQzNHLEtBQUssQ0FBQzBELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDaUQsS0FBSyxDQUFDLENBQUM7Y0FDN0RMLFNBQVMsQ0FBQzlKLEdBQUcsQ0FBQyxLQUFLLEVBQUUvQyxHQUFHLENBQUM7Y0FDekIsTUFBTW1OLE1BQU0sR0FBRzdHLEtBQUssQ0FBQzBELGFBQWE7Y0FDbENtRCxNQUFNLENBQ0pDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6QkMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQzVCQyxPQUFPLENBQUN0TixHQUFHLElBQUlBLEdBQUcsQ0FBQ3VOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ2hETCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUM5QjFCLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRUMsUUFBUSxDQUFDbkosS0FBSyxFQUFFLGlCQUFpQm9JLFNBQVMsQ0FBQzFFLFFBQVEsRUFBRSxFQUFFLENBQUM7Y0FDakZzRSxZQUFZLENBQUNRLFFBQVEsQ0FBQzNHLEtBQUssQ0FBQzBELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDaUQsS0FBSyxDQUFDLENBQUM7Y0FDekR2RixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1qSSxLQUFLLENBQUNXLElBQUksQ0FBQ0wsR0FBRyxDQUFDO2NBQ3JCdU0sYUFBYSxDQUFDN00sS0FBSyxDQUFDTSxHQUFHLENBQUMsQ0FBQztjQUV6QjJILFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELElBQUlyQyxRQUFRLElBQUksQ0FBQ2dILFVBQVUsQ0FBQ3VCLEtBQUssQ0FBQ2hELE1BQU0sRUFBRTtjQUN6QyxPQUNDbEgsS0FBQSxDQUFBUyxhQUFBLENBQUM0SCxNQUFBLENBQUE4QixLQUFLO2dCQUFDbEosU0FBUyxFQUFDO2NBQW1CLEdBQ25DakIsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQTZKLFNBQVMsT0FBRyxDQUNOOztZQUlWLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQztjQUFFSDtZQUFLLENBQUUsS0FBSTtjQUM3QixJQUFJLENBQUNBLEtBQUssQ0FBQ2hELE1BQU0sRUFBRTtnQkFDbEIsT0FBT2xILEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUFHLFNBQVM7a0JBQUNDLElBQUksRUFBRW9JLFVBQVUsQ0FBQ2pJLEtBQUs7a0JBQUVDLFdBQVcsRUFBRWdJLFVBQVUsQ0FBQ2hJLFdBQVc7a0JBQUVDLElBQUksRUFBQztnQkFBTSxFQUFHOztjQUc5RixPQUNDaEIsS0FBQSxDQUFBUyxhQUFBLENBQUNlLEtBQUEsQ0FBQVksSUFBWTtnQkFDWnhCLEtBQUssRUFBRUwsR0FBQSxDQUFBRyxTQUFTO2dCQUNoQk8sU0FBUyxFQUFDLG9CQUFvQjtnQkFDOUJpSixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pJLE9BQU8sRUFBRXRCLFlBQVksQ0FBQ2pOLEtBQUssQ0FBQ00sR0FBRztjQUFDLEVBQy9CO1lBRUosQ0FBQztZQUVELE9BQ0MyRCxLQUFBLENBQUFTLGFBQUEsQ0FBQVQsS0FBQSxDQUFBK0MsUUFBQSxRQUNDL0MsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE0QyxHQUMxRGpCLEtBQUEsQ0FBQVMsYUFBQTtjQUFRUSxTQUFTLEVBQUM7WUFBK0IsR0FDaERqQixLQUFBLENBQUFTLGFBQUE7Y0FBQSxjQUFnQixHQUFHO2NBQUNRLFNBQVMsRUFBRSxjQUFjNEgsU0FBUyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO2NBQUV6RixPQUFPLEVBQUU2RjtZQUFRLEdBQ2hHekwsS0FBSyxDQUFDZ0wsSUFBSSxDQUFDbkwsTUFBTSxDQUNiLEVBQ04yQyxLQUFBLENBQUFTLGFBQUE7Y0FBQSxjQUFnQixHQUFHO2NBQUNRLFNBQVMsRUFBRSxjQUFjNEgsU0FBUyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO2NBQUV6RixPQUFPLEVBQUU2RjtZQUFRLEdBQ2hHekwsS0FBSyxDQUFDZ0wsSUFBSSxDQUFDakwsU0FBUyxDQUNoQixDQUNFLENBQ0osRUFDTG9FLFFBQVEsR0FDUjNCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDNEgsTUFBQSxDQUFBOEIsS0FBSztjQUFDbEosU0FBUyxFQUFDO1lBQW1CLEdBQ25DakIsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQTZKLFNBQVMsT0FBRyxDQUNOLEdBRVJwSyxLQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQWUsR0FDN0JqQixLQUFBLENBQUFTLGFBQUEsQ0FBQzRKLE9BQU87Y0FBQ0gsS0FBSyxFQUFFdkIsVUFBVSxDQUFDdUI7WUFBSyxFQUFJLENBRXJDLENBQ0M7VUFFTDtVQUVBO1lBQ0M7Ozs7Ozs7Ozs7OztVQUFBOzs7Ozs7Ozs7OztVQzVGRDs7VUFFQUssTUFBQSxDQUFBQyxjQUFBLENBQUEzTixPQUFBO1lBQ0FlLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==