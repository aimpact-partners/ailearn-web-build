System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/modules/assign", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['pragmate-ui/modal', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/ailearn-app/modules/assign', dependency_18], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/tabs', dependency_22], ['pragmate-ui/list', dependency_23]]);
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
        hash: 1848201895,
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
        hash: 4230987909,
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
              title: globalTexts.actions.share
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwidHJhc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJyZXNwb25zZSIsInR5cGUiLCJyb3V0ZSIsImxvYWREcmFmdHMiLCJ0eXBlcyIsImJpbmQiLCJsb2FkVHJhc2giLCJ0aXRsZXMiLCJlbnRpdGllcyIsInNldCIsImJyZWFkY3J1bWIiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwibWFwIiwiZGVsZXRlIiwiZGVsZXRlTW9kdWxlIiwiZGVsZXRlSXRlbSIsImFyY2hpdmVJdGVtIiwiUmVhY3QiLCJMaXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saXN0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJfbW9kdWxlQ2FyZCIsIl9tb2RhbCIsIkl0ZW1EcmFmdHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJvbkNsaWNrQWN0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiRnJhZ21lbnQiLCJEcmFmdENhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJvbkNhbmNlbCIsIkFyY2hpdmVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiRGVsZXRlSXRlbU1vZGFsIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9kZWxldGUiLCJfYXJjaGl2ZSIsIkl0ZW0iLCJnZXRQcm9wZXJ0aWVzIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9wZW5EZWxldGUiLCJzZXRPcGVuRGVsZXRlIiwib3BlbkFyY2hpdmUiLCJzZXRPcGVuQXJjaGl2ZSIsIm9uVXNlIiwidG9nZ2xlTW9kYWwiLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWN0aW9uIiwidG9nZ2xlT3duZXJGb3JtIiwidG9nZ2xlRGVsZXRlIiwidG9nZ2xlQXJjaGl2ZSIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJBcHBJY29uQnV0dG9uIiwic2hhcmUiLCJkYXNoYm9hcmQiLCJ1c2UiLCJhc3NpZ25tZW50cyIsImxlbmd0aCIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwiT3duZXJBc3NpZ25Gb3JtIiwiVHJhc2hJdGVtIiwiQXNzaWdubWVudENhcmQiLCJhdWRpZW5jZSIsIl9yZWFjdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiZWxlbWVudHMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfZHJhZnRzIiwiX21vZHVsZSIsIl90cmFzaCIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImVtcHR5VGV4dHMiLCJpdGVtQ29udHJvbHMiLCJvbkNoYW5nZSIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyc2VJbnQiLCJpbmRleCIsInRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIml0ZW1zIiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJMaXN0VGFiIiwiY29udHJvbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9hcmNoaXZlLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9kZWxldGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvdHJhc2gudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FB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