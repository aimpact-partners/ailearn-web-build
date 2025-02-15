System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/assign", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_17 = _aimpactAilearnApp031ModulesAssign;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_21 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_22 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7List) {
      dependency_23 = _pragmateUi100Beta7List;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['pragmate-ui/modal', dependency_16], ['@aimpact/ailearn-app/modules/assign', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/tabs', dependency_22], ['pragmate-ui/list', dependency_23]]);
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
        hash: 4052204807,
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
          var _session = require("@aimpact/chat-sdk/session");
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
            get trash() {
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
                published: this.loadModules.bind(this),
                trash: this.loadTrash.bind(this)
              };
              const titles = {
                drafts: this.globalTexts.entities.drafts,
                published: this.globalTexts.entities.modules,
                trash: this.globalTexts.entities.trash
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
            async loadTrash() {
              this.#tab = 'trash';
              const response = await _session.sessionWrapper.user.archive.load();
              super.ready = true;
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
        hash: 1842733932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _delete = require("./delete");
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
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons2.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "share",
              title: globalTexts.actions.share
            }), React.createElement(_icons2.AppIconButton, {
              "data-action": "dashboard",
              onClick: onAction,
              icon: "statistic",
              title: globalTexts.actions.dashboard
            }), React.createElement(_icons2.AppIconButton, {
              icon: "clone",
              title: texts.actions.use,
              onClick: onUse
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              title: globalTexts.actions.delete,
              onClick: toggleDelete
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
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/item/module/trash
      *****************************************/

      ims.set('./views/item/module/trash', {
        hash: 2991413759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrashItem = TrashItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          function TrashItem({
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
            const onDelete = () => {
              console.log('delete');
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: `/dashboard/${item.id}`,
              type: item.type,
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
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
        hash: 3616655887,
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
          var _trash = require("../item/module/trash");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['drafts', 'published', 'trash'];
            const tabIndex = tabs.indexOf(store.tab);
            const [collection, setCollection] = React.useState(store[store.tab]);
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            const itemControls = {
              drafts: _drafts.ItemDrafts,
              published: _module.Item,
              trash: _trash.TrashItem
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
            }, texts.tabs.published), React.createElement("div", {
              "data-index": "2",
              className: `pui-tab tab${tabSelect === 2 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.trash))), fetching ? React.createElement(_empty.Empty, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwidHJhc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJyZXNwb25zZSIsInR5cGUiLCJyb3V0ZSIsImxvYWREcmFmdHMiLCJ0eXBlcyIsImJpbmQiLCJsb2FkVHJhc2giLCJ0aXRsZXMiLCJlbnRpdGllcyIsInNldCIsImJyZWFkY3J1bWIiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwibWFwIiwiZGVsZXRlIiwiZGVsZXRlTW9kdWxlIiwiZGVsZXRlSXRlbSIsIlJlYWN0IiwiTGlzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaG9va3MiLCJfaWNvbnMiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib25DbGlja0FjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsIkZyYWdtZW50IiwiRHJhZnRDYXJkIiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwib25DYW5jZWwiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9pY29uczIiLCJfZGVsZXRlIiwiSXRlbSIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvblVzZSIsInRvZ2dsZU1vZGFsIiwib25BY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFjdGlvbiIsInRvZ2dsZU93bmVyRm9ybSIsInRvZ2dsZURlbGV0ZSIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJBcHBJY29uQnV0dG9uIiwic2hhcmUiLCJkYXNoYm9hcmQiLCJ1c2UiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIk93bmVyQXNzaWduRm9ybSIsIlRyYXNoSXRlbSIsIkFzc2lnbm1lbnRDYXJkIiwiYXVkaWVuY2UiLCJfcmVhY3QiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsImVsZW1lbnRzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX2RyYWZ0cyIsIl9tb2R1bGUiLCJfdHJhc2giLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJlbXB0eVRleHRzIiwiaXRlbUNvbnRyb2xzIiwib25DaGFuZ2UiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlSW50IiwiaW5kZXgiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJpdGVtcyIsImxlbmd0aCIsIkVtcHR5IiwiQXBwTG9hZGVyIiwiTGlzdFRhYiIsImNvbnRyb2wiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvZGVsZXRlLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL3RyYXNoLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFB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