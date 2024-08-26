System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/config", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/link", "@aimpact/ailearn-app@0.1.6-dev.04/components/module-card", "@aimpact/ailearn-app@0.1.6-dev.04/modules/assign", "@aimpact/ailearn-app@0.1.6-dev.04/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.2/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev04Config) {
      dependency_8 = _aimpactAilearnApp016Dev04Config;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_13 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Link) {
      dependency_14 = _pragmateUi100Beta2Link;
    }, function (_aimpactAilearnApp016Dev04ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp016Dev04ComponentsModuleCard;
    }, function (_aimpactAilearnApp016Dev04ModulesAssign) {
      dependency_16 = _aimpactAilearnApp016Dev04ModulesAssign;
    }, function (_aimpactAilearnApp016Dev04ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp016Dev04ModulesOwnerAssignCode;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/modules/list.widget');
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
        hash: 3346642018,
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
            get ready() {
              return super.ready && this.#texts.ready;
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
        hash: 485354692,
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
          var _link = require("pragmate-ui/link");
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
            }, _react.default.createElement(_link.Link, {
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
        hash: 154478594,
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
          function ItemDrafts({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const {
              title,
              description,
              objective
            } = item;
            const onDelete = async event => {
              event.preventDefault();
              event.stopPropagation();
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
              onClick: onDelete
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiTGVhcm5pbmdNb2R1bGVzIiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJnbG9iYWxUaGlzIiwibSIsImxvYWREcmFmdHMiLCJ0eXBlcyIsImJpbmQiLCJwdWJsaXNoZWQiLCJFcnJvciIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9pY29ucyIsIl9saW5rIiwiX2xpc3QiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9tb2R1bGVDYXJkIiwiSXRlbURyYWZ0cyIsIm9iamVjdGl2ZSIsIm9uRGVsZXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsIk1vZHVsZUNhcmRGb290ZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIl9hc3NpZ24iLCJfb3duZXJBc3NpZ24iLCJJdGVtIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnZXRQcm9wZXJ0aWVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwic2hhcmUiLCJvblVzZSIsInRvZ2dsZU1vZGFsIiwidG9nZ2xlT3duZXJGb3JtIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwidXNlIiwiYXNzaWduIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwiT3duZXJBc3NpZ25Gb3JtIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9tb2R1bGUiLCJfcm91dGluZyIsIl9kcmFmdHMiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2VtcHR5IiwiZGF0YSIsInNldERhdGEiLCJpdGVtcyIsInRvdGFsIiwibGVuZ3RoIiwiRW1wdHkiLCJBcHBMb2FkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2RyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxD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