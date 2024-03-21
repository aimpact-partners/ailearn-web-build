System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/modules/assign", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_13 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0027ModulesAssign) {
      dependency_15 = _aimpactAilearnApp0027ModulesAssign;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/modules/assign', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 301523666,
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
        hash: 1921834710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
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
              this.#drafts = new _core.LearningModules();
              this.#modules = new _core.LearningModules();
              globalThis.drafts = this.#drafts;
            }
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
            async addSession(itemId, gclassId) {
              try {
                const item = this.#drafts.items.find(item => item.id === itemId);
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
        hash: 1063903095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
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
            return React.createElement("section", {
              className: "card-footer__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: share
            }), openModal && React.createElement(_assign.ModuleAssignments, {
              texts: texts.actions,
              module: module,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3645273600,
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
            return React.createElement(_ui.Card, null, React.createElement(_ui.CardContent, null, React.createElement("section", null, React.createElement("h4", null, title), React.createElement("span", null, description))), React.createElement(_ui.CardFooter, null, React.createElement(_actions.default, {
              module: item
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
        hash: 596787215,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfY29uZmlnIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2Fzc2lnbiIsIkxlYXJuaW5nTW9kdWxlQWN0aW9ucyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInNoYXJlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNb2RhbCIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwiX2FjdGlvbnMiLCJJdGVtIiwib2JqZWN0aXZlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIl90aXRsZSIsIkl0ZW1EcmFmdHMiLCJkYXRhIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX2xpbmsiLCJCdXR0b25SZWRpcmVjdCIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfaXRlbSIsIl9yb3V0aW5nIiwiX2l0ZW1EcmFmdHMiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsInB1Ymxpc2hlZCIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJjb250cm9sIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfYnV0dG9uUmVkaXJlY3QiLCJfZW1wdHkiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwibGVuZ3RoIiwiRW1wdHkiLCJTcGlubmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaXRlbS1kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2J1dHRvbi1yZWRpcmVjdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9tYW5hZ2UtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxN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