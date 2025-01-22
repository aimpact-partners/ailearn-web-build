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
        hash: 4213727525,
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
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              return types[type]();
            }
            async deleteDraft(id) {
              //@ts-ignore
              const item = this.#drafts.elements.get(id);
              await item.delete();
              //@ts-ignore
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
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
        hash: 1929529437,
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
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return React.createElement(_ui.PageLoader, {
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
        hash: 1652116784,
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
        hash: 996936114,
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
            if (!collection.items.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: emptyTexts.title,
                description: emptyTexts.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_tabs.TabsContainer, {
              className: "pui-page-tabs-container",
              onChange: onChange,
              active: tabSelect
            }, React.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, React.createElement(_tabs.Tab, null, texts.tabs.drafts), React.createElement(_tabs.Tab, null, texts.tabs.published), React.createElement(_tabs.Tab, null, texts.tabs.trash)), React.createElement(_tabs.Panes, {
              className: "module-list__panes"
            }, React.createElement(_list.List, {
              className: "entity__list mt-15",
              items: collection.items,
              control: ItemControl
            }), React.createElement(_list.List, {
              className: "entity__list mt-15",
              items: collection.items,
              control: ItemControl
            }), React.createElement(_list.List, {
              className: "entity__list mt-15",
              items: collection.items,
              control: ItemControl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwidHJhc2giLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsImdsb2JhbFRoaXMiLCJvbiIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInJlc3BvbnNlIiwidHlwZSIsInJvdXRlIiwibG9hZERyYWZ0cyIsInR5cGVzIiwiYmluZCIsImxvYWRUcmFzaCIsIkVycm9yIiwiZGVsZXRlRHJhZnQiLCJpZCIsIml0ZW0iLCJlbGVtZW50cyIsImRlbGV0ZSIsImRlbGV0ZU1vZHVsZSIsImRlbGV0ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJMaXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saXN0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib25DbGlja0FjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm9uQ2FuY2VsIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJNb2RhbCIsIkVycm9yUmVuZGVyZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Fzc2lnbiIsIl9vd25lckFzc2lnbiIsIl9pY29uczIiLCJfZGVsZXRlIiwiSXRlbSIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiZ2V0UHJvcGVydGllcyIsIm9wZW5DbG9uZSIsInNldE9wZW5DbG9uZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsImFjdGlvblNlbGVjdGVkIiwic2V0QWN0aW9uU2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJvcGVuRGVsZXRlIiwic2V0T3BlbkRlbGV0ZSIsInNoYXJlIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVPd25lckZvcm0iLCJ0b2dnbGVEZWxldGUiLCJlbnRpdHkiLCJBcHBJY29uQnV0dG9uIiwiZGFzaGJvYXJkIiwidXNlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJPd25lckFzc2lnbkZvcm0iLCJfcmVhY3QiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJvYmplY3RpdmUiLCJfcm91dGluZyIsIl9lbXB0eSIsIl90YWJzIiwiX2RyYWZ0cyIsIl9tb2R1bGUiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwiY29sbGVjdGlvbiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsImVtcHR5VGV4dHMiLCJJdGVtQ29udHJvbCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJBcHBMb2FkZXIiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiY29udHJvbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL21vZHVsZS9kZWxldGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJ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