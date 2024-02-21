System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/classworks/assign", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006Icons) {
      dependency_13 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ClassworksAssign) {
      dependency_14 = _aimpactAilearnApp0024ClassworksAssign;
    }, function (_pragmateUi006Link) {
      dependency_15 = _pragmateUi006Link;
    }, function (_pragmateUi006Tabs) {
      dependency_16 = _pragmateUi006Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006List) {
      dependency_18 = _pragmateUi006List;
    }, function (_pragmateUi006Empty) {
      dependency_19 = _pragmateUi006Empty;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/classworks/assign', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/tabs', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/empty', dependency_19]]);
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
        hash: 3313591063,
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
              breadcrumb: [['AI-Learn', '/'], ['Modules', '']]
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
        hash: 230031548,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwiZHJhZnRzIiwibG9hZE1vZHVsZXMiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwidmFsdWUiLCJQcm92aWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJzaGFyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiSXRlbSIsImRhdGEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIm9iamVjdGl2ZSIsIl9saW5rIiwiQnV0dG9uUmVkaXJlY3QiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsInRhYnMiLCJwdWJsaXNoZWQiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2J1dHRvblJlZGlyZWN0IiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUs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