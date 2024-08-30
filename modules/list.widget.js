System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.09/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.09/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.09/components/module-card", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.09/modules/assign", "@aimpact/ailearn-app@0.1.6-dev.09/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.2/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev09MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev09MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev09I18nTs) {
      dependency_8 = _aimpactAilearnApp016Dev09I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev09ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev09ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_13 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev09ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp016Dev09ComponentsModuleCard;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_15 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev09ModulesAssign) {
      dependency_16 = _aimpactAilearnApp016Dev09ModulesAssign;
    }, function (_aimpactAilearnApp016Dev09ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp016Dev09ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_18 = _pragmateUi100Beta2Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2List) {
      dependency_20 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_21 = _pragmateUi100Beta2Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.09/modules/list.widget');
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
        hash: 3631708832,
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
      INTERNAL MODULE: ./views/item/module/module
      ******************************************/

      ims.set('./views/item/module/module', {
        hash: 284885108,
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
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openModal, setOpenModal] = React.useState(false);
            const [openClone, setOpenClone] = React.useState(false);
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
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onUse
            }, texts.actions.use), React.createElement(_components.Button, {
              variant: "primary",
              onClick: share
            }, texts.actions.assign))), openModal && React.createElement(_assign.ModuleAssignments, {
              item: item,
              onClose: toggleModal,
              texts: texts.assign
            }), openClone && React.createElement(_ownerAssign.OwnerAssignForm, {
              item: item,
              onClose: toggleOwnerForm,
              texts: texts.assign
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiZHJhZnQiLCJtb2R1bGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJzZXRCcmVhZGNydW1iIiwidHJpZ2dlckV2ZW50Iiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImxvYWRNb2R1bGVzIiwibG9hZGVkIiwidHlwZSIsInJvdXRlIiwiZ2xvYmFsVGhpcyIsIm0iLCJsb2FkRHJhZnRzIiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiaXRlbSIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaG9va3MiLCJfaWNvbnMiLCJfbGlzdCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX21vZHVsZUNhcmQiLCJfbW9kYWwiLCJJdGVtRHJhZnRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib25DbGlja0FjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImRlbGV0ZUl0ZW0iLCJvbkNvbmZpcm0iLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwib25DYW5jZWwiLCJfYXNzaWduIiwiX293bmVyQXNzaWduIiwiSXRlbSIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiZ2V0UHJvcGVydGllcyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW5DbG9uZSIsInNldE9wZW5DbG9uZSIsInNoYXJlIiwib25Vc2UiLCJ0b2dnbGVNb2RhbCIsInRvZ2dsZU93bmVyRm9ybSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsInVzZSIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsIk93bmVyQXNzaWduRm9ybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfbW9kdWxlIiwiX3JvdXRpbmciLCJfZHJhZnRzIiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJuYW1lIiwiY29sbGVjdGlvbiIsImNvbnRyb2wiLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsImRhdGEiLCJzZXREYXRhIiwiaXRlbXMiLCJ0b3RhbCIsImxlbmd0aCIsIkVtcHR5IiwiQXBwTG9hZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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