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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 1753877339,
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
              globalThis.modules = this.#modules;
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
        hash: 2836021478,
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
            }, _react.default.createElement(_ui.PageHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwiZHJhZnRzIiwibG9hZE1vZHVsZXMiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfY29uZmlnIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJzaGFyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiSXRlbSIsImRhdGEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9saW5rIiwiQnV0dG9uUmVkaXJlY3QiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsInRhYnMiLCJwdWJsaXNoZWQiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2J1dHRvblJlZGlyZWN0IiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0Es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