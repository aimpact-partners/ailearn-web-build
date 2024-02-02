System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.9/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/classworks/assign", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006List) {
      dependency_17 = _pragmateUi006List;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/classworks/assign', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/list', dependency_17]]);
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
        hash: 1775629452,
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
              if (tab === 'publish') {
                this.#store.loadModules();
              } else {
                this.#store.load();
              }
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 256087551,
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
            async loadModules() {
              this.#tab = 'publish';
              this.#modules = new _core.LearningModules();
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.ready = true;
            }
            async load() {
              this.#draft = new _core.LearningModules();
              await this.#draft.load({
                type: 'draft',
                route: '/drafts'
              });
              this.ready = true;
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
        hash: 1535684516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./empty");
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
            const {
              draft,
              modules
            } = store;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [itemsDrafts, setItemsDrafts] = (0, _react.useState)([]);
            const [itemsPublished, setItemsPublished] = (0, _react.useState)([]);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setItemsDrafts(!!draft?.items ? [...draft?.items] : []);
              setItemsPublished(!!modules?.items ? [...modules?.items] : []);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            let isNotEmpty = true;
            if (modules?.items?.length === 0 && itemsDrafts?.length === 0) isNotEmpty = false;
            const Control = isNotEmpty ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                drafts: itemsDrafts,
                published: itemsPublished,
                total: itemsDrafts.length
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 4192974598,
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
        hash: 2825154397,
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
          var _itemDrafts = require("../item/item-drafts");
          function List({}) {
            const {
              texts,
              drafts,
              published,
              store
            } = (0, _context.useListContext)();
            const [tabSelect, useTabSelect] = _react.default.useState(store.tab === 'publish' ? 1 : 0);
            const onChange = (event, index) => {
              let urlActual = globalThis.location.href;
              let urlParams = new URLSearchParams(globalThis.location.search);
              urlParams.set('tab', index === 0 ? 'draft' : 'publish');
              let url = `${urlActual.split('?')[0]}?${urlParams.toString()}`;
              globalThis.history.replaceState({}, document.title, url);
              useTabSelect(index);
              if (index === 1) {
                store.loadModules();
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
              active: tabSelect
            }, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_manageList.ManageList, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              items: drafts,
              control: _itemDrafts.ItemDrafts,
              preventMessage: texts.empty.drafts
            }), _react.default.createElement(_manageList.ManageList, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              items: published,
              control: _item.Item,
              preventMessage: texts.empty.published
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/manage-list
      ****************************************/

      ims.set('./views/list/manage-list', {
        hash: 3124620480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManageList = ManageList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _buttonRedirect = require("./button-redirect");
          function ManageList({
            className,
            items,
            control,
            preventMessage
          }) {
            const shouldShowEmptyCard = items?.length > 0;
            if (!shouldShowEmptyCard) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              }, _react.default.createElement(_buttonRedirect.ButtonRedirect, {
                className: 'actions flex-container flex-center'
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              className: className,
              items: items,
              control: control
            }), _react.default.createElement(_buttonRedirect.ButtonRedirect, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZE1vZHVsZXMiLCJsb2FkIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0IiwibW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwiYWRkU2Vzc2lvbiIsIml0ZW1JZCIsImdjbGFzc0lkIiwiaXRlbSIsIml0ZW1zIiwiZmluZCIsImlkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uIiwiZSIsImVycm9yIiwiZGVsZXRlRHJhZnQiLCJlbGVtZW50cyIsImRlbGV0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwiYWx0IiwiaW1hZ2UiLCJ3ZWxjb21lIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaXRlbXNEcmFmdHMiLCJzZXRJdGVtc0RyYWZ0cyIsIml0ZW1zUHVibGlzaGVkIiwic2V0SXRlbXNQdWJsaXNoZWQiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaXNOb3RFbXB0eSIsImxlbmd0aCIsIkNvbnRyb2wiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRyYWZ0cyIsInB1Ymxpc2hlZCIsInRvdGFsIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJTaGFyZUxlc3NvbiIsIm9uQ2xvc2UiLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkl0ZW0iLCJkYXRhIiwiQ2FyZCIsInNpbXBsZSIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfbGluayIsIkJ1dHRvblJlZGlyZWN0IiwiX3RhYnMiLCJfbWFuYWdlTGlzdCIsIl9pdGVtIiwiX2l0ZW1EcmFmdHMiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsQWN0dWFsIiwiZ2xvYmFsVGhpcyIsImxvY2F0aW9uIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic2V0IiwidXJsIiwic3BsaXQiLCJ0b1N0cmluZyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbnRyb2wiLCJwcmV2ZW50TWVzc2FnZSIsIl9idXR0b25SZWRpcmVjdCIsInNob3VsZFNob3dFbXB0eUNhcmQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9pdGVtLWRyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYnV0dG9uLXJlZGlyZWN0LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L21hbmFnZS1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEs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