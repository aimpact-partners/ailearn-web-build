System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.0/icons", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.0/link", "pragmate-ui@0.1.0/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.0/list", "pragmate-ui@0.1.0/empty"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi010Components) {
      dependency_7 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_12 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_14 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi010Icons) {
      dependency_15 = _pragmateUi010Icons;
    }, function (_aimpactAilearnApp0032ModulesAssign) {
      dependency_16 = _aimpactAilearnApp0032ModulesAssign;
    }, function (_pragmateUi010Link) {
      dependency_17 = _pragmateUi010Link;
    }, function (_pragmateUi010Tabs) {
      dependency_18 = _pragmateUi010Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi010List) {
      dependency_20 = _pragmateUi010List;
    }, function (_pragmateUi010Empty) {
      dependency_21 = _pragmateUi010Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['pragmate-ui/link', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
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
        hash: 4247018117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJkcmFmdHMiLCJkcmFmdCIsIm1vZHVsZXMiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJjIiwiTGVhcm5pbmdNb2R1bGVzIiwibG9hZE1vZHVsZXMiLCJsb2FkZWQiLCJ0eXBlIiwicm91dGUiLCJyZWFkeSIsImxvYWREcmFmdHMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9uYXZiYXJIZWFkZXIiLCJfaGVhZGVyIiwiX2xpc3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvbmZpZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJzaGFyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlTW9kYWwiLCJJY29uQnV0dG9uIiwib25DbGljayIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiSXRlbSIsIm9iamVjdGl2ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJfdGl0bGUiLCJJdGVtRHJhZnRzIiwiZGF0YSIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIl9saW5rIiwiQnV0dG9uUmVkaXJlY3QiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsInRhYnMiLCJwdWJsaXNoZWQiLCJQYW5lcyIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJsb2FkaW5nIiwiX2J1dHRvblJlZGlyZWN0IiwiX2VtcHR5Iiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFD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