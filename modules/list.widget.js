System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/assign", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_8 = _aimpactAilearnApp031I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_11 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ModulesAssign) {
      dependency_16 = _aimpactAilearnApp031ModulesAssign;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_21 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7List) {
      dependency_22 = _pragmateUi100Beta7List;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/tabs', dependency_21], ['pragmate-ui/list', dependency_22]]);
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
        hash: 4124243081,
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
              globalThis.m = this.#modules;
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
        hash: 880801600,
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
            const tabs = ['drafts', 'published'];
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
            }, React.createElement(_tabs.Tab, null, texts.tabs.drafts), React.createElement(_tabs.Tab, null, texts.tabs.published)), React.createElement(_tabs.Panes, {
              className: "module-list__panes"
            }, React.createElement(_list.List, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwibW9kdWxlcyIsInB1Ymxpc2hlZCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJnbG9iYWxUaGlzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJyZXNwb25zZSIsInR5cGUiLCJyb3V0ZSIsIm0iLCJsb2FkRHJhZnRzIiwidHlwZXMiLCJiaW5kIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwiZGVsZXRlTW9kdWxlIiwiZGVsZXRlSXRlbSIsIlJlYWN0IiwiTGlzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaG9va3MiLCJfaWNvbnMiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIl9tb2R1bGVDYXJkIiwiX21vZGFsIiwiSXRlbURyYWZ0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsIm9uQ2xpY2tBY3Rpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJvbkNhbmNlbCIsIkRlbGV0ZUl0ZW1Nb2RhbCIsIm9uQ2xvc2UiLCJzZXRPcGVuQ29uZmlybSIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiZGVmYXVsdCIsIk1vZGFsIiwiRXJyb3JSZW5kZXJlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJfYXNzaWduIiwiX293bmVyQXNzaWduIiwiX2ljb25zMiIsIl9kZWxldGUiLCJJdGVtIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnZXRQcm9wZXJ0aWVzIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9wZW5EZWxldGUiLCJzZXRPcGVuRGVsZXRlIiwic2hhcmUiLCJvblVzZSIsInRvZ2dsZU1vZGFsIiwib25BY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFjdGlvbiIsInRvZ2dsZU93bmVyRm9ybSIsInRvZ2dsZURlbGV0ZSIsImVudGl0eSIsIkFwcEljb25CdXR0b24iLCJkYXNoYm9hcmQiLCJ1c2UiLCJNb2R1bGVBc3NpZ25tZW50cyIsImFzc2lnbiIsIk93bmVyQXNzaWduRm9ybSIsIl9yZWFjdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2VtcHR5IiwiX3RhYnMiLCJfZHJhZnRzIiwiX21vZHVsZSIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJjb2xsZWN0aW9uIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0IiwiZW1wdHlUZXh0cyIsIkl0ZW1Db250cm9sIiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIkFwcExvYWRlciIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiUGFuZXMiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUNMLEdBQUcsQ0FBQztZQUN0QjtZQUVBTSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFpQixXQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsZ0JBQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixlQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLEtBQUEsR0FBQXpCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFjLE1BQUEsQ0FBQUssYUFBMkI7WUFDNUQsQ0FBQUMsTUFBTztZQUVQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVE7WUFDckI7WUFFQSxDQUFBakIsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsQ0FBQW1CLEtBQU0sR0FBK0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUNBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPVixLQUFBLENBQUFVLFdBQVcsQ0FBQ0wsS0FBSztZQUN6QjtZQUNBLElBQUlNLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNNLEtBQUssSUFBSVgsS0FBQSxDQUFBVSxXQUFXLENBQUNDLEtBQUs7WUFDN0Q7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQO2NBQ0EsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBRyxJQUFJTCxnQkFBQSxDQUFBZ0IsZUFBZSxFQUFFO2NBQ3BDO2NBQ0EsSUFBSSxDQUFDLENBQUFWLE9BQVEsR0FBRyxJQUFJTixnQkFBQSxDQUFBZ0IsZUFBZSxFQUFFO2NBQ3JDQyxVQUFVLENBQUNsQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBVSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFlLEtBQU0sQ0FBQ1UsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQztjQUMxQyxJQUFJLENBQUNBLFdBQVcsRUFBRTtZQUNuQjtZQUNBQSxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ00sS0FBSyxFQUFFO2NBRXhCLElBQUksQ0FBQ00sYUFBYSxFQUFFO2NBQ3BCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCLENBQUM7WUFDRHpCLEtBQUtBLENBQUE7Y0FDSixLQUFLLENBQUNrQixLQUFLLEdBQUcsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDYyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0gsV0FBVyxDQUFDO1lBQzVDO1lBRUFDLGFBQWFBLENBQUE7Y0FDWnRCLFdBQUEsQ0FBQXlCLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7WUFDN0I7WUFFQSxNQUFNQyxXQUFXQSxDQUFBO2NBQ2hCLElBQUksQ0FBQyxDQUFBcEMsR0FBSSxHQUFHLFdBQVc7Y0FFdkIsSUFBSSxJQUFJLENBQUMsQ0FBQWlCLE9BQVEsQ0FBQ29CLE1BQU0sRUFBRTtjQUMxQjtjQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBckIsT0FBUSxDQUFDWixJQUFJLENBQUM7Z0JBQUVrQyxJQUFJLEVBQUUsUUFBUTtnQkFBRUMsS0FBSyxFQUFFO2NBQUUsQ0FBRSxDQUFDO2NBQ3hFWixVQUFVLENBQUNhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXhCLE9BQVE7Y0FDNUIsS0FBSyxDQUFDUSxLQUFLLEdBQUcsSUFBSTtjQUNsQixPQUFPYSxRQUFRO1lBQ2hCO1lBRUEsTUFBTUksVUFBVUEsQ0FBQTtjQUNmLElBQUksQ0FBQyxDQUFBMUMsR0FBSSxHQUFHLFFBQVE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQWdCLE1BQU8sQ0FBQ3FCLE1BQU0sRUFBRTtjQUN6QjtjQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBdEIsTUFBTyxDQUFDWCxJQUFJLENBQUM7Z0JBQUVrQyxJQUFJLEVBQUUsT0FBTztnQkFBRUMsS0FBSyxFQUFFO2NBQVMsQ0FBRSxDQUFDO2NBQzdFLEtBQUssQ0FBQ2YsS0FBSyxHQUFHLElBQUk7Y0FDbEIsT0FBT2EsUUFBUTtZQUNoQjtZQUVBakMsSUFBSUEsQ0FBQ2tDLElBQUksR0FBRyxXQUFXO2NBQ3RCLE1BQU1JLEtBQUssR0FBRztnQkFDYjNCLE1BQU0sRUFBRSxJQUFJLENBQUMwQixVQUFVLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ2tCLFdBQVcsQ0FBQ1EsSUFBSSxDQUFDLElBQUk7ZUFDckM7Y0FDRCxJQUFJLENBQUNELEtBQUssQ0FBQ0osSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSU0sS0FBSyxDQUFDLGlCQUFpQk4sSUFBSSxFQUFFLENBQUM7O2NBRXpDLE9BQU9JLEtBQUssQ0FBQ0osSUFBSSxDQUFDLEVBQUU7WUFDckI7WUFFQSxNQUFNTyxXQUFXQSxDQUFDQyxFQUFFO2NBQ25CO2NBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBaEMsTUFBTyxDQUFDaUMsUUFBUSxDQUFDOUMsR0FBRyxDQUFDNEMsRUFBRSxDQUFDO2NBQzFDLE1BQU1DLElBQUksQ0FBQ0UsTUFBTSxFQUFFO2NBQ25CO2NBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQWxDLE1BQU8sQ0FBQ1gsSUFBSSxDQUFDO2dCQUFFa0MsSUFBSSxFQUFFLE9BQU87Z0JBQUVDLEtBQUssRUFBRTtjQUFTLENBQUUsQ0FBQztjQUM1RCxJQUFJLENBQUNSLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU1tQixZQUFZQSxDQUFDSCxJQUFJO2NBQ3RCLE1BQU1BLElBQUksQ0FBQ0ksVUFBVSxFQUFFO2NBQ3ZCO2NBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQW5DLE9BQVEsQ0FBQ1osSUFBSSxDQUFDO2dCQUFFa0MsSUFBSSxFQUFFLFFBQVE7Z0JBQUVDLEtBQUssRUFBRTtjQUFFLENBQUUsQ0FBQztjQUN2RCxJQUFJLENBQUNSLFlBQVksRUFBRTtZQUNwQjs7VUFDQXhCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9HRCxJQUFBeUQsS0FBQSxHQUFBaEUsT0FBQTtVQVdPLE1BQU1pRSxXQUFXLEdBQUE5QyxPQUFBLENBQUE4QyxXQUFBLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFDM0QsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU1ILEtBQUssQ0FBQ0ksVUFBVSxDQUFDSCxXQUFXLENBQUM7VUFBQzlDLE9BQUEsQ0FBQWdELGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNabEUsSUFBQUgsS0FBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFxRSxXQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXNFLFFBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBdUUsR0FBQSxHQUFBdkUsT0FBQTtVQUVNLFNBQVV3RSxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRTFDLEtBQUs7Y0FBRXpCO1lBQUssQ0FBRSxHQUFHLElBQUFpRSxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUN6QyxPQUNDSCxLQUFBLENBQUFTLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBRyxTQUFTO2NBQUNDLElBQUksRUFBRTdDLEtBQUssQ0FBQzhDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLO2NBQUVDLFdBQVcsRUFBRWpELEtBQUssQ0FBQzhDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRSxXQUFXO2NBQUVDLElBQUksRUFBQztZQUFNLEdBQ3BHaEIsS0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFvQyxHQUNsRGpCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDSixXQUFBLENBQUFhLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHFCQUFxQjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDL0Q1RSxLQUFLLENBQUM4QixXQUFXLENBQUNpRCxPQUFPLENBQUNDLE1BQU0sQ0FDM0IsQ0FDRixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFkLEdBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBZ0UsS0FBQSxHQUFBaEUsT0FBQTtVQUdBLElBQUFzRixNQUFBLEdBQUF0RixPQUFBO1VBQ0EsSUFBQXVGLE1BQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBcUUsV0FBQSxHQUFBckUsT0FBQTtVQUVBLElBQUFzRSxRQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQXdGLEtBQUEsR0FBQXhGLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUMrQixLQUFLLEVBQUVxRCxRQUFRLENBQUMsR0FBR3pCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBVXJGLEtBQUssQ0FBQytCLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUN1RCxRQUFRLENBQUMsR0FBRzNCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBVXJGLEtBQUssQ0FBQ3NGLFFBQVEsQ0FBQztZQUMxRCxNQUFNO2NBQUU3RDtZQUFLLENBQUUsR0FBR3pCLEtBQUs7WUFDdkIsSUFBQWlGLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUN2RixLQUFLLENBQUMsRUFBRSxNQUFNb0YsUUFBUSxDQUFDcEYsS0FBSyxDQUFDK0IsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTzRCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUFzQixVQUFVO2NBQUNGLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTXpELEtBQUssR0FBRztjQUFFSixLQUFLO2NBQUV6QixLQUFLO2NBQUVzRjtZQUFRLENBQUU7WUFFeEMsT0FDQzNCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDSCxRQUFBLENBQUFMLFdBQVcsQ0FBQzZCLFFBQVE7Y0FBQzVELEtBQUssRUFBRUE7WUFBSyxHQUNqQzhCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDRixHQUFBLENBQUF3QixhQUFhLFFBQ2IvQixLQUFBLENBQUFTLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBeUIsU0FBUztjQUFDbEIsS0FBSyxFQUFFaEQsS0FBSyxDQUFDZ0Q7WUFBSyxHQUM1QmQsS0FBQSxDQUFBUyxhQUFBO2NBQVNRLFNBQVMsRUFBQztZQUFnQixHQUNsQ2pCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDSixXQUFBLENBQUFhLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQXFCLEdBQy9CbkIsS0FBQSxDQUFBUyxhQUFBLENBQUNjLE1BQUEsQ0FBQVUsSUFBSTtjQUFDakIsSUFBSSxFQUFDO1lBQVksRUFBRyxFQUN6QjNFLEtBQUssQ0FBQzhCLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQ0MsTUFBTSxDQUMzQixDQUNFLENBQ0MsRUFDWnJCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDZSxLQUFBLENBQUFVLElBQUksT0FBRyxDQUNPLENBQ007VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFsQyxLQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQXNFLFFBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBbUcsV0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF1RixNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQW9HLE1BQUEsR0FBQXBHLE9BQUE7VUFFTSxTQUFVcUcsVUFBVUEsQ0FBQztZQUFFMUM7VUFBSSxDQUFFO1lBQ2xDLE1BQU07Y0FBRTdCLEtBQUs7Y0FBRXpCO1lBQUssQ0FBRSxHQUFHLElBQUFpRSxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUN6QyxNQUFNLENBQUNtQyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd2QyxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1jLGFBQWEsR0FBR0MsS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkJKLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTUssUUFBUSxHQUFHLE1BQU1ILEtBQUssSUFBRztjQUM5QixNQUFNcEcsS0FBSyxDQUFDb0QsV0FBVyxDQUFDRSxJQUFJLENBQUNELEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBRUQsT0FDQ00sS0FBQSxDQUFBUyxhQUFBLENBQUFULEtBQUEsQ0FBQTZDLFFBQUEsUUFDQzdDLEtBQUEsQ0FBQVMsYUFBQSxDQUFDMEIsV0FBQSxDQUFBVyxVQUFVO2NBQUM3QixTQUFTLEVBQUMsYUFBYTtjQUFDdEIsSUFBSSxFQUFFQSxJQUFJO2NBQUU3QixLQUFLLEVBQUVBLEtBQUs7Y0FBRXFELElBQUksRUFBRSwwQkFBMEJ4QixJQUFJLENBQUNELEVBQUU7WUFBRSxHQUN0R00sS0FBQSxDQUFBUyxhQUFBLENBQUMwQixXQUFBLENBQUFZLGdCQUFnQjtjQUFDcEQsSUFBSSxFQUFFQTtZQUFJLEdBQzNCSyxLQUFBLENBQUFTLGFBQUEsQ0FBQzBCLFdBQUEsQ0FBQWEsdUJBQXVCLFFBQ3ZCaEQsS0FBQSxDQUFBUyxhQUFBLENBQUNjLE1BQUEsQ0FBQTBCLFVBQVU7Y0FBQ2pDLElBQUksRUFBQyxRQUFRO2NBQUNrQyxPQUFPLEVBQUVWLGFBQWE7Y0FBRTFCLEtBQUssRUFBRWhELEtBQUssQ0FBQ3NELE9BQU8sQ0FBQ3ZCO1lBQU0sRUFBSSxDQUN4RCxDQUNSLENBQ1AsRUFDWnlDLGVBQWUsSUFDZnRDLEtBQUEsQ0FBQVMsYUFBQSxDQUFDMkIsTUFBQSxDQUFBZSxZQUFZO2NBQ1pyQyxLQUFLLEVBQUVoRCxLQUFLLENBQUMrQixNQUFNLENBQUNpQixLQUFLO2NBQ3pCcEUsSUFBSTtjQUNKMEcsU0FBUyxFQUFFUixRQUFRO2NBQ25CUyxVQUFVLEVBQUU7Z0JBQUVDLEtBQUssRUFBRWpILEtBQUssQ0FBQzhCLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQ21DO2NBQU8sQ0FBRTtjQUN4REMsU0FBUyxFQUFFO2dCQUFFRixLQUFLLEVBQUVqSCxLQUFLLENBQUM4QixXQUFXLENBQUNpRCxPQUFPLENBQUNxQztjQUFNLENBQUU7Y0FDdERDLFFBQVEsRUFBRUEsQ0FBQSxLQUFNbkIsa0JBQWtCLENBQUMsS0FBSztZQUFDLEdBRXpDdkMsS0FBQSxDQUFBUyxhQUFBLGVBQU8zQyxLQUFLLENBQUMrQixNQUFNLENBQUNrQixXQUFXLENBQVEsQ0FFeEMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBZixLQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQW9HLE1BQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBcUUsV0FBQSxHQUFBckUsT0FBQTtVQUNBLElBQUF1RSxHQUFBLEdBQUF2RSxPQUFBO1VBRUEsSUFBQXNFLFFBQUEsR0FBQXRFLE9BQUE7VUFRTSxTQUFVMkgsZUFBZUEsQ0FBQztZQUFFQyxPQUFPO1lBQUVqRSxJQUFJO1lBQUU3QjtVQUFLLENBQVU7WUFDL0QsTUFBTSxHQUFHK0YsY0FBYyxDQUFDLEdBQUc3RCxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFbUMsV0FBVyxDQUFDLEdBQUc5RCxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3FDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdoRSxLQUFLLENBQUMwQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU07Y0FBRXJGO1lBQUssQ0FBRSxHQUFHLElBQUFpRSxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUNsQyxNQUFNaEMsV0FBVyxHQUFHOUIsS0FBSyxDQUFDOEIsV0FBVztZQUNyQyxNQUFNaUYsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIVSxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNekgsS0FBSyxDQUFDeUQsWUFBWSxDQUFDSCxJQUFJLENBQUM7Z0JBRTlCaUUsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7Z0JBQ2RELFFBQVEsQ0FBQ2xHLEtBQUssQ0FBQytCLE1BQU0sQ0FBQ3VFLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDSSxJQUFJLENBQUNDLFFBQVEsRUFBRSxDQUFDLElBQUl4RyxLQUFLLENBQUMrQixNQUFNLENBQUN1RSxNQUFNLENBQUNHLE9BQU8sQ0FBQztlQUMvRSxTQUFTO2dCQUNUVCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQzlELEtBQUEsQ0FBQVMsYUFBQSxDQUFDMkIsTUFBQSxDQUFBb0MsS0FBSztjQUFDOUgsSUFBSTtjQUFDa0gsT0FBTyxFQUFFQSxPQUFPO2NBQUUzQyxTQUFTLEVBQUM7WUFBa0IsR0FDekRqQixLQUFBLENBQUFTLGFBQUE7Y0FBUVEsU0FBUyxFQUFDO1lBQWUsR0FDaENqQixLQUFBLENBQUFTLGFBQUEsYUFBSzNDLEtBQUssQ0FBQytCLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBTSxDQUNyQixFQUNUZCxLQUFBLENBQUFTLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBa0UsYUFBYTtjQUFDVixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUMvQi9ELEtBQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJqQixLQUFBLENBQUFTLGFBQUEsWUFBSTNDLEtBQUssQ0FBQytCLE1BQU0sQ0FBQ2tCLFdBQVcsQ0FBSyxDQUM1QixFQUNOZixLQUFBLENBQUFTLGFBQUE7Y0FBUVEsU0FBUyxFQUFDO1lBQWdCLEdBQ2pDakIsS0FBQSxDQUFBUyxhQUFBLENBQUNKLFdBQUEsQ0FBQXFFLE1BQU07Y0FBQ3hCLE9BQU8sRUFBRVUsT0FBTztjQUFFZSxPQUFPLEVBQUMsU0FBUztjQUFDQyxRQUFRO1lBQUEsR0FDbER6RyxXQUFXLENBQUNpRCxPQUFPLENBQUNxQyxNQUFNLENBQ25CLEVBQ1R6RCxLQUFBLENBQUFTLGFBQUEsQ0FBQ0osV0FBQSxDQUFBcUUsTUFBTTtjQUFDeEIsT0FBTyxFQUFFRSxTQUFTO2NBQUV1QixPQUFPLEVBQUM7WUFBUyxHQUMzQ3hHLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQ21DLE9BQU8sQ0FDcEIsQ0FDRCxFQUNUdkQsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQXNFLGdCQUFnQjtjQUFDbEQsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTNCLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBOEksT0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFzRixNQUFBLEdBQUF0RixPQUFBO1VBQ0EsSUFBQXNFLFFBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBbUcsV0FBQSxHQUFBbkcsT0FBQTtVQUVBLElBQUErSSxZQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQXVGLE1BQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBZ0osT0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUFpSixPQUFBLEdBQUFqSixPQUFBO1VBRU0sU0FBVWtKLElBQUlBLENBQUM7WUFBRXZGO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQ0w3QixLQUFLO2NBQ0x6QixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRThCO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFtQyxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUVwQixNQUFNLENBQUNnRixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEYsS0FBSyxDQUFDMEIsUUFBUSxDQUFDL0IsSUFBSSxDQUFDMEYsYUFBYSxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdkYsS0FBSyxDQUFDMEIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUM4RCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHekYsS0FBSyxDQUFDMEIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNnRSxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUczRixLQUFLLENBQUMwQixRQUFRLENBQUNrRSxTQUFTLENBQUM7WUFDckUsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHOUYsS0FBSyxDQUFDMEIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RCxJQUFBSixNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDakMsSUFBSSxDQUFDLEVBQUUsTUFBSztjQUN0QnBCLFVBQVUsQ0FBQ29CLElBQUksR0FBR0EsSUFBSTtjQUN0QnlGLFVBQVUsQ0FBQ3pGLElBQUksQ0FBQzBGLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLENBQUMsQ0FBQztZQUNGLE1BQU1VLEtBQUssR0FBR3RELEtBQUssSUFBRztjQUNyQkEsS0FBSyxDQUFDRSxlQUFlLEVBQUU7Y0FDdkI4QyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNTyxLQUFLLEdBQUdBLENBQUEsS0FBTVQsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxNQUFNVSxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4Qk4saUJBQWlCLENBQUNDLFNBQVMsQ0FBQztjQUM1QkgsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTVUsUUFBUSxHQUFHekQsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUN2QjhDLFlBQVksQ0FBQyxJQUFJLENBQUM7Y0FDbEJFLGlCQUFpQixDQUFDbEQsS0FBSyxDQUFDMEQsYUFBYSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztZQUN0RCxDQUFDO1lBQ0QsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1mLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDdEQsTUFBTWlCLFlBQVksR0FBR0EsQ0FBQSxLQUFNVCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQ3JELE1BQU1qRCxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQnNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN0QixDQUFDO1lBRUQsT0FDQ25FLEtBQUEsQ0FBQVMsYUFBQSxDQUFBVCxLQUFBLENBQUE2QyxRQUFBLFFBQ0M3QyxLQUFBLENBQUFTLGFBQUEsQ0FBQzBCLFdBQUEsQ0FBQVcsVUFBVTtjQUNWbkQsSUFBSSxFQUFFQSxJQUFJO2NBQ1Y3QixLQUFLLEVBQUVBLEtBQUs7Y0FDWjBJLE1BQU0sRUFBQyxRQUFRO2NBQ2ZwRixPQUFPLEVBQUU7Z0JBQ1J2QixNQUFNLEVBQUUrQzs7WUFDUixHQUVENUMsS0FBQSxDQUFBUyxhQUFBLENBQUMwQixXQUFBLENBQUFZLGdCQUFnQjtjQUFDcEQsSUFBSSxFQUFFQTtZQUFJLEdBQzNCSyxLQUFBLENBQUFTLGFBQUEsQ0FBQzBCLFdBQUEsQ0FBQWEsdUJBQXVCLFFBQ3ZCaEQsS0FBQSxDQUFBUyxhQUFBLENBQUN1RSxPQUFBLENBQUF5QixhQUFhO2NBQUEsZUFDRCxPQUFPO2NBQ25CdkQsT0FBTyxFQUFFZ0QsUUFBUTtjQUNqQmxGLElBQUksRUFBQyxPQUFPO2NBQ1pGLEtBQUssRUFBRTNDLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQzJFO1lBQUssRUFDL0IsRUFDRi9GLEtBQUEsQ0FBQVMsYUFBQSxDQUFDdUUsT0FBQSxDQUFBeUIsYUFBYTtjQUFBLGVBQ0QsV0FBVztjQUN2QnZELE9BQU8sRUFBRWdELFFBQVE7Y0FDakJsRixJQUFJLEVBQUMsV0FBVztjQUNoQkYsS0FBSyxFQUFFM0MsV0FBVyxDQUFDaUQsT0FBTyxDQUFDc0Y7WUFBUyxFQUNuQyxFQUNGMUcsS0FBQSxDQUFBUyxhQUFBLENBQUN1RSxPQUFBLENBQUF5QixhQUFhO2NBQUM5QixPQUFPLEVBQUMsU0FBUztjQUFDM0QsSUFBSSxFQUFDLE9BQU87Y0FBQ0YsS0FBSyxFQUFFaEQsS0FBSyxDQUFDc0QsT0FBTyxDQUFDdUYsR0FBRztjQUFFekQsT0FBTyxFQUFFOEM7WUFBSyxFQUFJLEVBRTFGaEcsS0FBQSxDQUFBUyxhQUFBLENBQUNjLE1BQUEsQ0FBQTBCLFVBQVU7Y0FBQ2pDLElBQUksRUFBQyxRQUFRO2NBQUNGLEtBQUssRUFBRTNDLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQ3ZCLE1BQU07Y0FBRXFELE9BQU8sRUFBRXFEO1lBQVksRUFBSSxDQUM3RCxDQUNSLENBQ1AsRUFFWixDQUFDZixTQUFTLElBQUlFLGNBQWMsS0FDNUIxRixLQUFBLENBQUFTLGFBQUEsQ0FBQ3FFLE9BQUEsQ0FBQThCLGlCQUFpQjtjQUFDakgsSUFBSSxFQUFFQSxJQUFJO2NBQUUwRyxNQUFNLEVBQUVYLGNBQWM7Y0FBRTlCLE9BQU8sRUFBRXFDLFdBQVc7Y0FBRW5JLEtBQUssRUFBRUEsS0FBSyxDQUFDK0k7WUFBTSxFQUNoRyxFQUNBdkIsU0FBUyxJQUFJdEYsS0FBQSxDQUFBUyxhQUFBLENBQUNzRSxZQUFBLENBQUErQixlQUFlO2NBQUNuSCxJQUFJLEVBQUVBLElBQUk7Y0FBRWlFLE9BQU8sRUFBRTBDLGVBQWU7Y0FBRXhJLEtBQUssRUFBRUEsS0FBSyxDQUFDK0k7WUFBTSxFQUFJLEVBQzNGaEIsVUFBVSxJQUFJN0YsS0FBQSxDQUFBUyxhQUFBLENBQUN3RSxPQUFBLENBQUF0QixlQUFlO2NBQUN0SCxLQUFLLEVBQUVBLEtBQUs7Y0FBRXNELElBQUksRUFBRUEsSUFBSTtjQUFFaUUsT0FBTyxFQUFFMkMsWUFBWTtjQUFFekksS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDL0Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RkEsSUFBQWlKLE1BQUEsR0FBQS9LLE9BQUE7VUFDQSxJQUFBc0UsUUFBQSxHQUFBdEUsT0FBQTtVQUVBLE1BQU1nTCxhQUFhLEdBQUc7WUFDckI1SSxLQUFLLEVBQUUsT0FBTztZQUNkNkksVUFBVSxFQUFFO1dBQ1o7VUFDYSxTQUFVQyxNQUFNQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsU0FBUztZQUFFQztVQUFVLENBQUU7WUFDbEUsTUFBTTtjQUFFdko7WUFBSyxDQUFFLEdBQUcsSUFBQXdDLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ2xDLE1BQU1tSCxjQUFjLEdBQUdDLE1BQU0sSUFBRztjQUMvQixJQUFJQyxLQUFLLEdBQUdSLGFBQWEsQ0FBQ08sTUFBTSxDQUFDO2NBQ2pDLE9BQU9DLEtBQUssSUFBSSxLQUFLO1lBQ3RCLENBQUM7WUFDRCxPQUNDVCxNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBO2NBQVNRLFNBQVMsRUFBQztZQUFVLEdBQzVCOEYsTUFBQSxDQUFBeEMsT0FBQSxDQUFBOUQsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBUSxHQUN0QjhGLE1BQUEsQ0FBQXhDLE9BQUEsQ0FBQTlELGFBQUEsY0FDQ3NHLE1BQUEsQ0FBQXhDLE9BQUEsQ0FBQTlELGFBQUE7Y0FBS1EsU0FBUyxFQUFFLGlCQUFpQnFHLGNBQWMsQ0FBQ0YsU0FBUyxFQUFFRyxNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzVFUixNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBLGFBQUszQyxLQUFLLENBQUMySixPQUFPLENBQUM3SCxRQUFRLENBQUN3SCxTQUFTLENBQU0sQ0FDdEMsRUFDTkwsTUFBQSxDQUFBeEMsT0FBQSxDQUFBOUQsYUFBQSxjQUNDc0csTUFBQSxDQUFBeEMsT0FBQSxDQUFBOUQsYUFBQTtjQUFLUSxTQUFTLEVBQUUsaUJBQWlCcUcsY0FBYyxDQUFDSCxTQUFTLEVBQUVJLE1BQU0sQ0FBQztZQUFFLEVBQVEsRUFDNUVSLE1BQUEsQ0FBQXhDLE9BQUEsQ0FBQTlELGFBQUEsYUFBSzNDLEtBQUssQ0FBQzJKLE9BQU8sQ0FBQzdILFFBQVEsQ0FBQ3VILFNBQVMsQ0FBTSxDQUN0QyxFQUNOSixNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBLGNBQ0NzRyxNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUJxRyxjQUFjLENBQUNELFVBQVUsRUFBRUUsTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM3RVIsTUFBQSxDQUFBeEMsT0FBQSxDQUFBOUQsYUFBQSxhQUFLM0MsS0FBSyxDQUFDMkosT0FBTyxDQUFDN0gsUUFBUSxDQUFDeUgsVUFBVSxDQUFNLENBQ3ZDLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBTixNQUFBLEdBQUEvSyxPQUFBO1VBQ0EsSUFBQXFFLFdBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBc0UsUUFBQSxHQUFBdEUsT0FBQTtVQUVjLFNBQVUwTCxVQUFVQSxDQUFDO1lBQUUvSDtVQUFJLENBQUU7WUFDMUMsTUFBTTtjQUFFN0I7WUFBSyxDQUFFLEdBQUcsSUFBQXdDLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ2xDLE1BQU1XLEtBQUssR0FBR25CLElBQUksQ0FBQ21CLEtBQUssSUFBSW5CLElBQUksQ0FBQ2dJLFNBQVM7WUFDMUMsTUFBTTVHLFdBQVcsR0FBR3BCLElBQUksQ0FBQ29CLFdBQVcsSUFBSWpELEtBQUssQ0FBQzZCLElBQUksQ0FBQ29CLFdBQVc7WUFDOUQsT0FDQ2dHLE1BQUEsQ0FBQXhDLE9BQUEsQ0FBQTlELGFBQUEsa0JBQ0NzRyxNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUUsMEJBQTBCeEIsSUFBSSxDQUFDRCxFQUFFO1lBQUUsR0FDOUNxSCxNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBLGFBQUtLLEtBQUssQ0FBTSxDQUNWLEVBQ1BpRyxNQUFBLENBQUF4QyxPQUFBLENBQUE5RCxhQUFBLGVBQU9NLFdBQVcsQ0FBUSxDQUNqQjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBUixHQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQTRMLFFBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBNkwsTUFBQSxHQUFBN0wsT0FBQTtVQUNBLElBQUE4TCxLQUFBLEdBQUE5TCxPQUFBO1VBQ0EsSUFBQWdFLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBc0UsUUFBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUErTCxPQUFBLEdBQUEvTCxPQUFBO1VBQ0EsSUFBQWdNLE9BQUEsR0FBQWhNLE9BQUE7VUFFQSxJQUFBd0YsS0FBQSxHQUFBeEYsT0FBQTtVQUNNLFNBQVVrRyxJQUFJQSxDQUFDLEVBQUU7WUFDdEIsTUFBTTtjQUFFcEUsS0FBSztjQUFFekI7WUFBSyxDQUFFLEdBQUcsSUFBQWlFLFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ3pDLE1BQU04SCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBQ3BDLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLENBQUM5TCxLQUFLLENBQUNNLEdBQUcsQ0FBQztZQUV4QyxNQUFNeUwsVUFBVSxHQUFHL0wsS0FBSyxDQUFDQSxLQUFLLENBQUNNLEdBQUcsQ0FBQztZQUNuQyxNQUFNLENBQUMwTCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdEksS0FBSyxDQUFDMEIsUUFBUSxDQUFTd0csUUFBUSxDQUFDO1lBQ2xFLE1BQU0sQ0FBQ3ZHLFFBQVEsRUFBRW1DLFdBQVcsQ0FBQyxHQUFHOUQsS0FBSyxDQUFDMEIsUUFBUSxDQUFVckYsS0FBSyxDQUFDc0YsUUFBUSxDQUFDO1lBRXZFLE1BQU00RyxVQUFVLEdBQUd6SyxLQUFLLENBQUM4QyxLQUFLLENBQUNxSCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU1NLFdBQVcsR0FBR1AsSUFBSSxDQUFDQyxRQUFRLENBQUMsS0FBSyxRQUFRLEdBQUdILE9BQUEsQ0FBQTFGLFVBQVUsR0FBRzJGLE9BQUEsQ0FBQTlDLElBQUk7WUFFbkUsTUFBTXVELFFBQVEsR0FBRyxNQUFBQSxDQUFPaEcsS0FBSyxFQUFFaUcsS0FBSyxLQUFJO2NBQ3ZDLElBQUlDLFNBQVMsR0FBRyxJQUFJQyxlQUFlLENBQUNySyxVQUFVLENBQUNzSyxRQUFRLENBQUNDLE1BQU0sQ0FBQztjQUMvRCxNQUFNbk0sR0FBRyxHQUFHc0wsSUFBSSxDQUFDUyxLQUFLLENBQUM7Y0FDdkJDLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLEtBQUssRUFBRXBNLEdBQUcsQ0FBQztjQUN6QjJMLFlBQVksQ0FBQ0ksS0FBSyxDQUFDO2NBQ25CZCxRQUFBLENBQUFvQixPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ3BJLEtBQUssRUFBRSxpQkFBaUI2SCxTQUFTLENBQUNyRSxRQUFRLEVBQUUsRUFBRSxDQUFDO2NBQ2pGZ0UsWUFBWSxDQUFDSSxLQUFLLENBQUM7Y0FDbkI1RSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU16SCxLQUFLLENBQUNXLElBQUksQ0FBQ0wsR0FBRyxDQUFDO2NBQ3JCbUgsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsSUFBSW5DLFFBQVEsSUFBSSxDQUFDeUcsVUFBVSxDQUFDZSxLQUFLLENBQUNDLE1BQU0sRUFBRTtjQUN6QyxPQUNDcEosS0FBQSxDQUFBUyxhQUFBLENBQUNvSCxNQUFBLENBQUF3QixLQUFLO2dCQUFDcEksU0FBUyxFQUFDO2NBQW1CLEdBQ25DakIsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQStJLFNBQVMsT0FBRyxDQUNOOztZQUlWLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ2UsS0FBSyxDQUFDQyxNQUFNLElBQUksQ0FBQ3pILFFBQVEsRUFBRTtjQUMxQyxPQUFPM0IsS0FBQSxDQUFBUyxhQUFBLENBQUNGLEdBQUEsQ0FBQUcsU0FBUztnQkFBQ0MsSUFBSSxFQUFFNEgsVUFBVSxDQUFDekgsS0FBSztnQkFBRUMsV0FBVyxFQUFFd0gsVUFBVSxDQUFDeEgsV0FBVztnQkFBRUMsSUFBSSxFQUFDO2NBQU0sRUFBRzs7WUFHOUYsT0FDQ2hCLEtBQUEsQ0FBQVMsYUFBQSxDQUFBVCxLQUFBLENBQUE2QyxRQUFBLFFBQ0M3QyxLQUFBLENBQUFTLGFBQUEsQ0FBQ3FILEtBQUEsQ0FBQXlCLGFBQWE7Y0FBQ3RJLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ3dILFFBQVEsRUFBRUEsUUFBUTtjQUFFZSxNQUFNLEVBQUVuQjtZQUFTLEdBQ3ZGckksS0FBQSxDQUFBUyxhQUFBLENBQUNxSCxLQUFBLENBQUEyQixJQUFJO2NBQUN4SSxTQUFTLEVBQUM7WUFBWSxHQUMzQmpCLEtBQUEsQ0FBQVMsYUFBQSxDQUFDcUgsS0FBQSxDQUFBNEIsR0FBRyxRQUFFNUwsS0FBSyxDQUFDbUssSUFBSSxDQUFDdEssTUFBTSxDQUFPLEVBQzlCcUMsS0FBQSxDQUFBUyxhQUFBLENBQUNxSCxLQUFBLENBQUE0QixHQUFHLFFBQUU1TCxLQUFLLENBQUNtSyxJQUFJLENBQUNwSyxTQUFTLENBQU8sQ0FDM0IsRUFDUG1DLEtBQUEsQ0FBQVMsYUFBQSxDQUFDcUgsS0FBQSxDQUFBNkIsS0FBSztjQUFDMUksU0FBUyxFQUFDO1lBQW9CLEdBQ3BDakIsS0FBQSxDQUFBUyxhQUFBLENBQUNlLEtBQUEsQ0FBQVUsSUFBWTtjQUFDakIsU0FBUyxFQUFDLG9CQUFvQjtjQUFDa0ksS0FBSyxFQUFFZixVQUFVLENBQUNlLEtBQUs7Y0FBRVMsT0FBTyxFQUFFcEI7WUFBVyxFQUFJLEVBQzlGeEksS0FBQSxDQUFBUyxhQUFBLENBQUNlLEtBQUEsQ0FBQVUsSUFBWTtjQUFDakIsU0FBUyxFQUFDLG9CQUFvQjtjQUFDa0ksS0FBSyxFQUFFZixVQUFVLENBQUNlLEtBQUs7Y0FBRVMsT0FBTyxFQUFFcEI7WUFBVyxFQUFJLENBQ3ZGLENBQ08sQ0FDZDtVQUVMOzs7Ozs7Ozs7OztVQzVEQTs7VUFFQXFCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBM00sT0FBQTtZQUNBZSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=