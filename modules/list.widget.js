System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.13/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/module-card", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/modules/assign", "@aimpact/ailearn-app@0.1.13/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.6/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0113I18nTs) {
      dependency_8 = _aimpactAilearnApp0113I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_10 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_13 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp0113ComponentsModuleCard;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_15 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ModulesAssign) {
      dependency_16 = _aimpactAilearnApp0113ModulesAssign;
    }, function (_aimpactAilearnApp0113ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp0113ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_18 = _pragmateUi100Beta6Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6List) {
      dependency_20 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_21 = _pragmateUi100Beta6Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/list.widget');
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
        hash: 3782673124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            get draft() {
              return this.#drafts;
            }
            #modules;
            get modules() {
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
              this.#drafts = new _learningModules.LearningModules();
              this.#modules = new _learningModules.LearningModules();
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
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              globalThis.m = this.#modules;
              super.ready = true;
            }
            async loadDrafts() {
              this.#tab = 'draft';
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              super.ready = true;
            }
            load(type = 'published') {
              const types = {
                draft: this.loadDrafts.bind(this),
                published: this.loadModules.bind(this)
              };
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              types[type]();
            }
            async deleteDraft(id) {
              const item = this.#drafts.elements.get(id);
              await item.delete();
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              this.triggerEvent();
            }
            async deleteModule(item) {
              await item.deleteItem();
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
        hash: 515844683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
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
              texts
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
            }, texts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 820208469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store,
              fetching
            };
            return _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("section", {
              className: "title__actions"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create))), _react.default.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 12017522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/drafts
      ***********************************/

      ims.set('./views/item/drafts', {
        hash: 4141982947,
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
              item: item,
              texts: texts,
              href: `/modules/management?id=${item.id}`
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: onClickAction,
              title: texts.actions.delete
            }))), showDeleteModal && React.createElement(_modal.ConfirmModal, {
              title: texts.deleteItem.title,
              show: true,
              onConfirm: onDelete,
              btnConfirm: {
                label: store.globalTexts.actions.confirm
              },
              btnCancel: {
                label: store.globalTexts.actions.cancel
              },
              onCancel: () => setShowDeleteModal(false)
            }, React.createElement("span", null, texts.deleteItem.description)));
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
        hash: 2048369212,
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
          var _components = require("pragmate-ui/components");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var _icons = require("pragmate-ui/icons");
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
            const toggleModal = () => setOpenModal(!openModal);
            const toggleOwnerForm = () => setOpenClone(!openClone);
            const toggleDelete = () => setOpenDelete(!openDelete);
            const onDelete = () => {
              console.log('delete');
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              actions: {
                delete: onDelete
              }
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement("div", {
              className: "flex-container gap-05"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onUse
            }, texts.actions.use), React.createElement(_components.Button, {
              variant: "primary",
              onClick: share
            }, texts.actions.assign)), React.createElement("div", {
              className: "flex-container gap-05"
            }, React.createElement(_icons.IconButton, {
              icon: "delete",
              title: globalTexts.actions.delete,
              onClick: toggleDelete
            })))), openModal && React.createElement(_assign.ModuleAssignments, {
              item: item,
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
        hash: 40682162,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _context = require("../context");
          var _tabs = require("pragmate-ui/tabs");
          var _manageList = require("./manage-list");
          var _module = require("../item/module/module");
          var _routing = require("@beyond-js/kernel/routing");
          var _drafts = require("../item/drafts");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['draft', 'published'];
            const tabIndex = tabs.indexOf(store.tab);
            const [tabSelect, useTabSelect] = _react.default.useState(tabIndex);
            const onChange = (event, index) => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[index];
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(index);
              store.load(tab);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
              active: tabSelect
            }, _react.default.createElement(_tabs.Tabs, {
              className: "module-list__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published)), _react.default.createElement(_tabs.Panes, {
              className: "module-list__panes"
            }, _react.default.createElement(_manageList.ManageList, {
              className: "module-list",
              name: "draft",
              collection: store.draft,
              control: _drafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.modules,
              name: "modules",
              control: _module.Item,
              className: "module-list",
              preventMessage: texts.empty.published,
              loadingMessage: texts.loading
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/manage-list
      ****************************************/

      ims.set('./views/list/manage-list', {
        hash: 683784199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManageList = ManageList;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _context = require("../context");
          function ManageList({
            name,
            className,
            control,
            preventMessage
          }) {
            const {
              store
            } = (0, _context.useListContext)();
            if (!store[name]) {
              throw new Error(`The store ${name} is not defined`);
            }
            const collection = store[name];
            const [data, setData] = React.useState({
              items: collection.items,
              fetching: collection.fetching,
              total: collection.items?.length
            }); // [1
            (0, _hooks.useBinder)([store[name]], () => {
              setData({
                ...data,
                items: store[name].items,
                fetching: store[name].fetching,
                total: store[name].items?.length
              });
            });
            if (data.fetching && !data.total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_ui.AppLoader, {
                fetching: true
              }));
            }
            if (!store[name].items?.length && !store[name].fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: "entity__list mt-15",
              items: store[name].items,
              control: control
            }));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiZHJhZnQiLCJtb2R1bGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJzZXRCcmVhZGNydW1iIiwidHJpZ2dlckV2ZW50Iiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwidHlwZSIsInJvdXRlIiwiZ2xvYmFsVGhpcyIsIm0iLCJsb2FkRHJhZnRzIiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwiZGVsZXRlTW9kdWxlIiwiZGVsZXRlSXRlbSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2ljb25zIiwiX2xpc3QiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9tb2R1bGVDYXJkIiwiX21vZGFsIiwiSXRlbURyYWZ0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsIm9uQ2xpY2tBY3Rpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwib25DYW5jZWwiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsIk1vZGFsIiwiRXJyb3JSZW5kZXJlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJfYXNzaWduIiwiX293bmVyQXNzaWduIiwiX2RlbGV0ZSIsIkl0ZW0iLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdldFByb3BlcnRpZXMiLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvcGVuRGVsZXRlIiwic2V0T3BlbkRlbGV0ZSIsInNoYXJlIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsInRvZ2dsZU93bmVyRm9ybSIsInRvZ2dsZURlbGV0ZSIsInVzZSIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiT3duZXJBc3NpZ25Gb3JtIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfcm91dGluZyIsIl9kcmFmdHMiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJuYW1lIiwiY29sbGVjdGlvbiIsImNvbnRyb2wiLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsImRhdGEiLCJzZXREYXRhIiwiaXRlbXMiLCJ0b3RhbCIsImxlbmd0aCIsIkVtcHR5IiwiQXBwTG9hZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUNMLEdBQUcsQ0FBQztZQUN0QjtZQUVBTSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdB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dkJ4SCxRQUFRLEVBQUVnSCxVQUFVLENBQUNoSCxRQUFRO2NBQzdCeUgsS0FBSyxFQUFFVCxVQUFVLENBQUNRLEtBQUssRUFBRUU7YUFDekIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFBL0gsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ3pGLEtBQUssQ0FBQ3VNLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBSztjQUM3QlEsT0FBTyxDQUFDO2dCQUNQLEdBQUdELElBQUk7Z0JBQ1BFLEtBQUssRUFBRWhOLEtBQUssQ0FBQ3VNLElBQUksQ0FBQyxDQUFDUyxLQUFLO2dCQUN4QnhILFFBQVEsRUFBRXhGLEtBQUssQ0FBQ3VNLElBQUksQ0FBQyxDQUFDL0csUUFBUTtnQkFDOUJ5SCxLQUFLLEVBQUVqTixLQUFLLENBQUN1TSxJQUFJLENBQUMsQ0FBQ1MsS0FBSyxFQUFFRTtlQUMxQixDQUFDO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsSUFBSUosSUFBSSxDQUFDdEgsUUFBUSxJQUFJLENBQUNzSCxJQUFJLENBQUNHLEtBQUssRUFBRTtjQUNqQyxPQUNDaEosS0FBQSxDQUFBSyxhQUFBLENBQUN1SSxNQUFBLENBQUFNLEtBQUs7Z0JBQUNySSxTQUFTLEVBQUM7Y0FBbUIsR0FDbkNiLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFnSixTQUFTO2dCQUFDNUgsUUFBUSxFQUFFO2NBQUksRUFBSSxDQUN0Qjs7WUFJVixJQUFJLENBQUN4RixLQUFLLENBQUN1TSxJQUFJLENBQUMsQ0FBQ1MsS0FBSyxFQUFFRSxNQUFNLElBQUksQ0FBQ2xOLEtBQUssQ0FBQ3VNLElBQUksQ0FBQyxDQUFDL0csUUFBUSxFQUFFO2NBQ3hELE9BQU92QixLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBRyxTQUFTO2dCQUFDQyxJQUFJLEVBQUVrSSxjQUFjLENBQUMvSCxLQUFLO2dCQUFFQyxXQUFXLEVBQUU4SCxjQUFjLENBQUM5SCxXQUFXO2dCQUFFQyxJQUFJLEVBQUM7Y0FBTSxFQUFHOztZQUd0RyxPQUNDWixLQUFBLENBQUFLLGFBQUEsQ0FBQUwsS0FBQSxDQUFBMkMsUUFBQSxRQUNDM0MsS0FBQSxDQUFBSyxhQUFBLENBQUNlLEtBQUEsQ0FBQVUsSUFBWTtjQUFDakIsU0FBUyxFQUFDLG9CQUFvQjtjQUFDa0ksS0FBSyxFQUFFaE4sS0FBSyxDQUFDdU0sSUFBSSxDQUFDLENBQUNTLEtBQUs7Y0FBRVAsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDekY7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==