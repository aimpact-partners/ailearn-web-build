System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.9/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/classworks/assign", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/empty"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive119Model) {
      dependency_4 = _beyondJsReactive119Model;
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
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_11 = _beyondJsReact18Widgets103Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 322564464,
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
        hash: 3577010195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/management/new",
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
        hash: 753823287,
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
            return _react.default.createElement(_ui.Card, {
              simple: true
            }, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
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
        hash: 622822404,
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
            return _react.default.createElement(_ui.Card, {
              simple: true
            }, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
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
        hash: 2725618302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function ModuleData({
            item
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/modules/management/${item.id}`
            }, _react.default.createElement("h4", null, item.title)), _react.default.createElement("span", null, item.description));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/list/button-redirect
      ********************************************/

      ims.set('./views/list/button-redirect', {
        hash: 3096452753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonRedirect = ButtonRedirect;
          var _react = require("react");
          var _context = require("../context");
          var _link = require("pragmate-ui/link");
          function ButtonRedirect({
            className
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement("div", {
              className: className
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management/new",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwibG9hZE1vZHVsZXMiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfc2Vzc2lvbiIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJhbHQiLCJpbWFnZSIsIndlbGNvbWUiLCJfaGVhZGVyIiwiX2xpc3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJTaGFyZUxlc3NvbiIsIm9uQ2xvc2UiLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkl0ZW0iLCJkYXRhIiwiQ2FyZCIsInNpbXBsZSIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfbGluayIsIkJ1dHRvblJlZGlyZWN0IiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9pdGVtIiwiX3JvdXRpbmciLCJfaXRlbURyYWZ0cyIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiZHJhZnRzIiwicHVibGlzaGVkIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsImNvbnRyb2wiLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIlJlYWN0IiwiX2J1dHRvblJlZGlyZWN0IiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFD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