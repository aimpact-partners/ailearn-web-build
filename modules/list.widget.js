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
        hash: 3039106473,
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
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              entity: "module",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwidHJhc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwidHlwZSIsInJvdXRlIiwibG9hZERyYWZ0cyIsInR5cGVzIiwiYmluZCIsImxvYWRUcmFzaCIsInRpdGxlcyIsImVudGl0aWVzIiwic2V0IiwiYnJlYWRjcnVtYiIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJtYXAiLCJkZWxldGUiLCJkZWxldGVNb2R1bGUiLCJkZWxldGVJdGVtIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiTGlzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaG9va3MiLCJfaWNvbnMiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib25DbGlja0FjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm9uQ2FuY2VsIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9pY29uczIiLCJfZGVsZXRlIiwiSXRlbSIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJzaGFyZSIsIm9uVXNlIiwidG9nZ2xlTW9kYWwiLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWN0aW9uIiwidG9nZ2xlT3duZXJGb3JtIiwidG9nZ2xlRGVsZXRlIiwiZW50aXR5IiwiQXBwSWNvbkJ1dHRvbiIsImRhc2hib2FyZCIsInVzZSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiYXNzaWduIiwiT3duZXJBc3NpZ25Gb3JtIiwiX3JlYWN0IiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJlbGVtZW50cyIsIk1vZHVsZURhdGEiLCJvYmplY3RpdmUiLCJfcm91dGluZyIsIl9lbXB0eSIsIl90YWJzIiwiX2RyYWZ0cyIsIl9tb2R1bGUiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwiY29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImVtcHR5VGV4dHMiLCJJdGVtQ29udHJvbCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJMaXN0VGFiIiwiY29udHJvbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvZGVsZXRlLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxD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QUFDO2dCQUFNLEVBQUc7O2NBRzlGLE9BQU9oQixLQUFBLENBQUFTLGFBQUEsQ0FBQ2UsS0FBQSxDQUFBWSxJQUFZO2dCQUFDeEIsS0FBSyxFQUFFTCxHQUFBLENBQUFHLFNBQVM7Z0JBQUNPLFNBQVMsRUFBQyxvQkFBb0I7Z0JBQUNnSSxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVLLE9BQU8sRUFBRWY7Y0FBVyxFQUFJO1lBQzVHLENBQUM7WUFDRCxPQUNDdkksS0FBQSxDQUFBUyxhQUFBLENBQUFULEtBQUEsQ0FBQStDLFFBQUEsUUFDQy9DLEtBQUEsQ0FBQVMsYUFBQSxDQUFDb0gsS0FBQSxDQUFBMEIsYUFBYTtjQUFDdEksU0FBUyxFQUFDLHlCQUF5QjtjQUFDdUgsUUFBUSxFQUFFQSxRQUFRO2NBQUVnQixNQUFNLEVBQUVwQjtZQUFTLEdBQ3ZGcEksS0FBQSxDQUFBUyxhQUFBLENBQUNvSCxLQUFBLENBQUE0QixJQUFJO2NBQUN4SSxTQUFTLEVBQUM7WUFBWSxHQUMzQmpCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDb0gsS0FBQSxDQUFBNkIsR0FBRyxRQUFFbE0sS0FBSyxDQUFDd0ssSUFBSSxDQUFDL0ssTUFBTSxDQUFPLEVBQzlCK0MsS0FBQSxDQUFBUyxhQUFBLENBQUNvSCxLQUFBLENBQUE2QixHQUFHLFFBQUVsTSxLQUFLLENBQUN3SyxJQUFJLENBQUM3SyxTQUFTLENBQU8sRUFDakM2QyxLQUFBLENBQUFTLGFBQUEsQ0FBQ29ILEtBQUEsQ0FBQTZCLEdBQUcsUUFBRWxNLEtBQUssQ0FBQ3dLLElBQUksQ0FBQzVLLEtBQUssQ0FBTyxDQUN2QixFQUNQNEMsS0FBQSxDQUFBUyxhQUFBLENBQUNvSCxLQUFBLENBQUE4QixLQUFLO2NBQUMxSSxTQUFTLEVBQUM7WUFBb0IsR0FDcENqQixLQUFBLENBQUFTLGFBQUEsQ0FBQzRJLE9BQU87Y0FBQ0osS0FBSyxFQUFFZCxVQUFVLENBQUNjO1lBQUssRUFBSSxFQUNwQ2pKLEtBQUEsQ0FBQVMsYUFBQSxDQUFDNEksT0FBTztjQUFDSixLQUFLLEVBQUVkLFVBQVUsQ0FBQ2M7WUFBSyxFQUFJLEVBQ3BDakosS0FBQSxDQUFBUyxhQUFBLENBQUM0SSxPQUFPO2NBQUNKLEtBQUssRUFBRWQsVUFBVSxDQUFDYztZQUFLLEVBQUksQ0FDN0IsQ0FDTyxDQUNkO1VBRUw7Ozs7Ozs7Ozs7O1VDakVBOztVQUVBVyxNQUFBLENBQUFDLGNBQUEsQ0FBQXJOLE9BQUE7WUFDQW9CLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==