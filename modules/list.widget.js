System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Link) {
      dependency_13 = _pragmateUi011Link;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesAssign) {
      dependency_16 = _aimpactAilearnApp0032ModulesAssign;
    }, function (_pragmateUi011Image) {
      dependency_17 = _pragmateUi011Image;
    }, function (_pragmateUi011Tabs) {
      dependency_18 = _pragmateUi011Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_20 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4171271325,
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
        hash: 556959169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
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
            constructor() {
              super();
              globalThis.c = this;
              this.#drafts = new _learningModules.LearningModules();
              this.#modules = new _learningModules.LearningModules();
              globalThis.drafts = this.#drafts;
            }
            clear() {}
            async loadModules() {
              this.#tab = 'published';
              if (this.#modules.loaded) return;
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.ready = true;
            }
            async loadDrafts() {
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              this.ready = true;
            }
            load(type) {
              type === 'draft' ? this.loadDrafts() : this.loadModules();
            }
            async deleteDraft(id) {
              const item = this.#drafts.elements.get(id);
              await item.delete();
              // this.#drafts.load({ type: 'draft' });
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
        hash: 2945644013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching] = (0, _react.useState)(store.fetching);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              texts,
              store,
              fetching
            };
            return _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.modules, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
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
        hash: 2122662873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 4218449999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          function LearningModuleActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign), openModal && React.createElement(_assign.ModuleAssignments, {
              module: module,
              onClose: toggleModal,
              texts: texts.assign
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1031213725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _actions = require("./actions");
          var _context = require("../context");
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
              module: item
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/item-drafts
      ****************************************/

      ims.set('./views/item/item-drafts', {
        hash: 747643815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const onDelete = async () => {
              await store.deleteDraft(item.id);
            };
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, React.createElement("h4", null, title ?? objective), React.createElement("span", null, description))), React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            })));
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
        hash: 3068385237,
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
          var _item = require("../item");
          var _routing = require("@beyond-js/kernel/routing");
          var _itemDrafts = require("../item/item-drafts");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [tabSelect, useTabSelect] = _react.default.useState(store.tab === 'published' ? 1 : 0);
            const onChange = (event, index) => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = index === 0 ? 'draft' : 'published';
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(index);
              store.load(tab);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
              active: tabSelect
            }, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_manageList.ManageList, {
              collection: store.draft,
              control: _itemDrafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              collection: store.modules,
              control: _item.Item,
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
        hash: 603720868,
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
          var _components = require("pragmate-ui/components");
          function ManageList({
            className,
            collection,
            control,
            preventMessage
          }) {
            const [items, setItems] = React.useState(collection.items ?? []);
            const [fetching, setFetching] = React.useState(collection.fetching);
            (0, _hooks.useBinder)([collection], () => {
              setItems([...collection.items]);
              setFetching(collection.fetching);
            });
            if (fetching && !items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!items.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: "entity__list",
              items: items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiSXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsInB1Ymxpc2hlZCIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJjb250cm9sIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaXRlbS1kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L21hbmFnZS1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxP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