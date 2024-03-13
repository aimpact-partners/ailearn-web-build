System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/classworks/assign", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_7 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_13 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ClassworksAssign) {
      dependency_15 = _aimpactAilearnApp0024ClassworksAssign;
    }, function (_pragmateUi006Link) {
      dependency_16 = _pragmateUi006Link;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006List) {
      dependency_19 = _pragmateUi006List;
    }, function (_pragmateUi006Empty) {
      dependency_20 = _pragmateUi006Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/classworks/assign', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1876380951,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 360361193,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #draft;
            get draft() {
              return this.#draft;
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
              this.#draft = new _core.LearningModules();
              this.#modules = new _core.LearningModules();
              globalThis.drafts = this.#draft;
            }
            async loadModules() {
              this.#tab = 'published';
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.ready = true;
            }
            async loadDrafts() {
              await this.#draft.load({
                type: 'draft',
                route: '/drafts'
              });
              this.ready = true;
            }
            load(type) {
              type === 'draft' ? this.loadDrafts() : this.loadModules();
            }
            async addSession(itemId, gclassId) {
              try {
                const item = this.#draft.items.find(item => item.id === itemId);
                if (!item) {
                  console.warn('item not found');
                  return false;
                }
                const session = await item.addSession(gclassId);
                return session;
              } catch (e) {
                console.error(e);
              }
            }
            async deleteDraft(id) {
              const item = this.#draft.elements.get(id);
              await item.delete();
              this.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4185984715,
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 228173506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            const userName = _session.sessionWrapper.user.displayName;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: userName,
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.welcome)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 59892465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _config = require("@aimpact/ailearn-app/config");
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
            }, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 1034975789,
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
        hash: 905846842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _assign = require("@aimpact/ailearn-app/classworks/assign");
          function LearningModuleActions({
            module
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = _react.default.useState(false);
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            return _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              disabled: true
            }), _react.default.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: share
            }), openModal && _react.default.createElement(_assign.ShareLesson, {
              texts: texts.actions,
              module: module,
              onClose: () => setOpenModal(false),
              texts: texts
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 4028270393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _actions = require("./actions");
          function Item({
            data
          }) {
            return _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
              item: data
            })), _react.default.createElement(_ui.CardFooter, null, _react.default.createElement(_actions.default, {
              module: data
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/item-drafts
      ****************************************/

      ims.set('./views/item/item-drafts', {
        hash: 1743642048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _context = require("../context");
          function ItemDrafts({
            data
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const onDelete = async () => {
              await store.deleteDraft(data.id);
            };
            return _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
              item: data
            })), _react.default.createElement(_ui.CardFooter, null, _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            }))));
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

      /********************************************
      INTERNAL MODULE: ./views/list/button-redirect
      ********************************************/

      ims.set('./views/list/button-redirect', {
        hash: 528731220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonRedirect = ButtonRedirect;
          var React = require("react");
          var _context = require("../context");
          var _link = require("pragmate-ui/link");
          function ButtonRedirect({
            className
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement("div", {
              className: className
            }, React.createElement(_link.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, texts.actions.create));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 836994908,
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
              className: "list-unstyled grid-container g-2-columns mt-15",
              collection: store.draft,
              control: _itemDrafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              className: "list-unstyled grid-container g-2-columns mt-15",
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
        hash: 1715894452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManageList = ManageList;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _buttonRedirect = require("./button-redirect");
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
              setItems(collection.items);
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
              }, React.createElement(_buttonRedirect.ButtonRedirect, {
                className: 'actions flex-container flex-center'
              }));
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: className,
              items: items,
              control: control
            }), React.createElement(_buttonRedirect.ButtonRedirect, {
              className: 'actions flex-container flex-end'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwiZHJhZnRzIiwibG9hZE1vZHVsZXMiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfY29uZmlnIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInNoYXJlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJJdGVtIiwiZGF0YSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJJdGVtRHJhZnRzIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwib2JqZWN0aXZlIiwiX2xpbmsiLCJCdXR0b25SZWRpcmVjdCIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfaXRlbSIsIl9yb3V0aW5nIiwiX2l0ZW1EcmFmdHMiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsInB1Ymxpc2hlZCIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJjb250cm9sIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfYnV0dG9uUmVkaXJlY3QiLCJfZW1wdHkiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaXRlbS1kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2J1dHRvbi1yZWRpcmVjdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFD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