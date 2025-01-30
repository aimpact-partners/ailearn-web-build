System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/assign", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 1842332067,
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
              this.#drafts.on('change', this.triggerEvent);
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
              //@ts-ignore
              // await this.#drafts.load({ type: 'draft', route: '/drafts' });
              this.triggerEvent();
            }
            async deleteModule(item) {
              await item.deleteItem();
              //@ts-ignore
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.triggerEvent();
            }
            async loadTrash() {
              this.#tab = 'trash';
              const response = await _session.sessionWrapper.user.archive.load();
              console.log('cargamos');
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
        hash: 3846736895,
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
            (0, _hooks.useBinder)([store], () => setUpdated({}));
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
        hash: 2716898308,
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
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
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
        hash: 4023675974,
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
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const onUse = () => setOpenClone(true);
            const toggleModal = () => {
              setActionSelected(undefined);
              setOpenModal(!openModal);
            };
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleOwnerForm = () => setOpenClone(!openClone);
            const toggleDelete = () => setOpenDelete(!openDelete);
            const onDelete = () => {
              console.log('delete');
            };
            const onCardClick = () => setActionSelected('share');
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
              variant: "primary",
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
        hash: 2411758986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var _tabs = require("pragmate-ui/tabs");
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
            const tabs = ['drafts', 'published', 'trash'];
            const tabIndex = tabs.indexOf(store.tab);
            const collection = store[store.tab];
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            const ItemControl = tabs[tabIndex] === 'drafts' ? _drafts.ItemDrafts : _module.Item;
            const onChange = async (event, index) => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[index];
              urlParams.set('tab', tab);
              useTabSelect(index);
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(index);
              setFetching(true);
              await store.load(tab);
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
                control: ItemControl
              });
            };
            return React.createElement(React.Fragment, null, React.createElement(_tabs.TabsContainer, {
              className: "pui-page-tabs-container",
              onChange: onChange,
              active: tabSelect
            }, React.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, React.createElement(_tabs.Tab, null, texts.tabs.drafts), React.createElement(_tabs.Tab, null, texts.tabs.published), React.createElement(_tabs.Tab, null, texts.tabs.trash)), React.createElement(_tabs.Panes, {
              className: "module-list__panes"
            }, React.createElement(ListTab, {
              items: collection.items
            }), React.createElement(ListTab, {
              items: collection.items
            }), React.createElement(ListTab, {
              items: collection.items
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwidHJhc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwidHlwZSIsInJvdXRlIiwibG9hZERyYWZ0cyIsInR5cGVzIiwiYmluZCIsImxvYWRUcmFzaCIsInRpdGxlcyIsImVudGl0aWVzIiwic2V0IiwiYnJlYWRjcnVtYiIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJtYXAiLCJkZWxldGUiLCJkZWxldGVNb2R1bGUiLCJkZWxldGVJdGVtIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiTGlzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaG9va3MiLCJfaWNvbnMiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib25DbGlja0FjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm9uQ2FuY2VsIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9pY29uczIiLCJfZGVsZXRlIiwiSXRlbSIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJzaGFyZSIsIm9uVXNlIiwidG9nZ2xlTW9kYWwiLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWN0aW9uIiwidG9nZ2xlT3duZXJGb3JtIiwidG9nZ2xlRGVsZXRlIiwib25DYXJkQ2xpY2siLCJlbnRpdHkiLCJBcHBJY29uQnV0dG9uIiwiZGFzaGJvYXJkIiwidXNlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJPd25lckFzc2lnbkZvcm0iLCJfcmVhY3QiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsImVsZW1lbnRzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX3RhYnMiLCJfZHJhZnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0IiwiZW1wdHlUZXh0cyIsIkl0ZW1Db250cm9sIiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIkFwcExvYWRlciIsIkxpc3RUYWIiLCJjb250cm9sIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9kZWxldGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FB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