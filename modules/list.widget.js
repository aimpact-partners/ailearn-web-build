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
        hash: 4200924887,
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
              }
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3851566032,
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
                route: ''
              });
              this.ready = true;
            }
            async load() {
              this.#draft = new _core.LearningModules();
              await this.#draft.load({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZE1vZHVsZXMiLCJsb2FkIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0IiwibW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsInJvdXRlIiwicmVhZHkiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJkZWxldGVEcmFmdCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfc2Vzc2lvbiIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJhbHQiLCJpbWFnZSIsIndlbGNvbWUiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJpdGVtc0RyYWZ0cyIsInNldEl0ZW1zRHJhZnRzIiwiaXRlbXNQdWJsaXNoZWQiLCJzZXRJdGVtc1B1Ymxpc2hlZCIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJpc05vdEVtcHR5IiwibGVuZ3RoIiwiQ29udHJvbCIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwiZHJhZnRzIiwicHVibGlzaGVkIiwidG90YWwiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VDb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9hc3NpZ24iLCJMZWFybmluZ01vZHVsZUFjdGlvbnMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJzaGFyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiSXRlbSIsImRhdGEiLCJDYXJkIiwic2ltcGxlIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiSXRlbURyYWZ0cyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIl9saW5rIiwiQnV0dG9uUmVkaXJlY3QiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfaXRlbURyYWZ0cyIsInRhYlNlbGVjdCIsInVzZVRhYlNlbGVjdCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJ1cmxBY3R1YWwiLCJnbG9iYWxUaGlzIiwibG9jYXRpb24iLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzZXQiLCJ1cmwiLCJzcGxpdCIsInRvU3RyaW5nIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwiX2J1dHRvblJlZGlyZWN0Iiwic2hvdWxkU2hvd0VtcHR5Q2FyZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSUgsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ1UsV0FBVyxFQUFFOztjQUcxQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBZSxNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLEtBQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFXLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUVOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQVgsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsTUFBTUksV0FBV0EsQ0FBQTtjQUNoQixJQUFJLENBQUMsQ0FBQUosR0FBSSxHQUFHLFNBQVM7Y0FDckIsSUFBSSxDQUFDLENBQUFXLE9BQVEsR0FBRyxJQUFJSCxLQUFBLENBQUFJLGVBQWUsRUFBRTtjQUNyQyxNQUFNLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNOLElBQUksQ0FBQztnQkFBRVEsS0FBSyxFQUFFO2NBQUUsQ0FBRSxDQUFDO2NBRXZDLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFFQSxNQUFNVCxJQUFJQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUFLLEtBQU0sR0FBRyxJQUFJRixLQUFBLENBQUFJLGVBQWUsRUFBRTtjQUNuQyxNQUFNLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNMLElBQUksQ0FBQztnQkFBRVEsS0FBSyxFQUFFO2NBQVMsQ0FBRSxDQUFDO2NBRTVDLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFDQSxNQUFNQyxVQUFVQSxDQUFDQyxNQUFNLEVBQUVDLFFBQVE7Y0FDaEMsSUFBSTtnQkFDSCxNQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsS0FBSyxDQUFDQyxJQUFJLENBQUNGLElBQUksSUFBSUEsSUFBSSxDQUFDRyxFQUFFLEtBQUtMLE1BQU0sQ0FBQztnQkFFL0QsSUFBSSxDQUFDRSxJQUFJLEVBQUU7a0JBQ1ZJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2tCQUM5QixPQUFPLEtBQUs7O2dCQUdiLE1BQU1DLE9BQU8sR0FBRyxNQUFNTixJQUFJLENBQUNILFVBQVUsQ0FBQ0UsUUFBUSxDQUFDO2dCQUMvQyxPQUFPTyxPQUFPO2VBQ2QsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUUsV0FBV0EsQ0FBQ04sRUFBRTtjQUNuQixNQUFNSCxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ2tCLFFBQVEsQ0FBQ3pCLEdBQUcsQ0FBQ2tCLEVBQUUsQ0FBQztjQUN6QyxNQUFNSCxJQUFJLENBQUNXLE1BQU0sRUFBRTtjQUNuQixJQUFJLENBQUN4QixJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERELElBQUFrQyxNQUFBLEdBQUF6QyxPQUFBO1VBV08sTUFBTTBDLFdBQVcsR0FBQXpCLE9BQUEsQ0FBQXlCLFdBQUEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFNSixNQUFBLENBQUFFLE9BQUssQ0FBQ0csVUFBVSxDQUFDSixXQUFXLENBQUM7VUFBQ3pCLE9BQUEsQ0FBQTRCLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNabEUsSUFBQUosTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUErQyxXQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWdELFFBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsR0FBQSxHQUFBakQsT0FBQTtVQUVNLFNBQVVrRCxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFDbEMsT0FDQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBSSxTQUFTO2NBQUNDLElBQUksRUFBRUgsS0FBSyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUVQLEtBQUssQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUNFLFdBQVc7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sR0FDcEdsQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBb0MsR0FDbERuQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDTCxXQUFBLENBQUFjLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHlCQUF5QjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDbkVULEtBQUssQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQ2YsQ0FDRixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUF2QixNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQWdELFFBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsR0FBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBRU0sU0FBVWtFLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFZjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUVsQyxNQUFNc0IsUUFBUSxHQUFHRixRQUFBLENBQUFHLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ2hELE9BQ0M3QixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFBWCxNQUFBLENBQUFFLE9BQUEsQ0FBQTRCLFFBQUEsUUFDQzlCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQXVCLFVBQVU7Y0FBQ2YsS0FBSyxFQUFFVSxRQUFRO2NBQUVNLEdBQUcsRUFBRSxZQUFZO2NBQUVDLEtBQUssRUFBQztZQUF1QixHQUM1RWpDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLFlBQUlELEtBQUssQ0FBQ3dCLE9BQU8sQ0FBSyxDQUNWLENBQ1g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWxDLE1BQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBaUQsR0FBQSxHQUFBakQsT0FBQTtVQUNBLElBQUE0RSxNQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLE9BQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBOEUsS0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFnRCxRQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQStDLFdBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBK0UsZUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFnRixNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLE9BQUEsR0FBQWpGLE9BQUE7VUFJTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNO2NBQUVnQixLQUFLO2NBQUVDO1lBQU8sQ0FBRSxHQUFHakIsS0FBSztZQUNoQyxNQUFNLENBQUM2RSxVQUFVLEVBQUUvQixLQUFLLENBQUMsR0FBRyxJQUFBOEIsT0FBQSxDQUFBRSxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDNUQsS0FBSyxFQUFFNkQsUUFBUSxDQUFDLEdBQUcsSUFBQTdDLE1BQUEsQ0FBQThDLFFBQVEsRUFBVWxGLEtBQUssQ0FBQ29CLEtBQUssQ0FBQztZQUN4RCxNQUFNLENBQUMrRCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFoRCxNQUFBLENBQUE4QyxRQUFRLEVBQVVsRixLQUFLLENBQUNtRixRQUFRLENBQUM7WUFDakUsTUFBTSxDQUFDRSxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHLElBQUFsRCxNQUFBLENBQUE4QyxRQUFRLEVBQW9CLEVBQUUsQ0FBQztZQUNyRSxNQUFNLENBQUNLLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBRyxJQUFBcEQsTUFBQSxDQUFBOEMsUUFBUSxFQUFvQixFQUFFLENBQUM7WUFFM0UsSUFBQVAsTUFBQSxDQUFBYyxTQUFTLEVBQUMsQ0FBQ3pGLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJpRixRQUFRLENBQUNqRixLQUFLLENBQUNvQixLQUFLLENBQUM7Y0FDckJnRSxXQUFXLENBQUNwRixLQUFLLENBQUNtRixRQUFRLENBQUM7Y0FDM0JHLGNBQWMsQ0FBQyxDQUFDLENBQUN0RSxLQUFLLEVBQUVTLEtBQUssR0FBRyxDQUFDLEdBQUdULEtBQUssRUFBRVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2NBQ3ZEK0QsaUJBQWlCLENBQUMsQ0FBQyxDQUFDdkUsT0FBTyxFQUFFUSxLQUFLLEdBQUcsQ0FBQyxHQUFHUixPQUFPLEVBQUVRLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMvRCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNMLEtBQUssSUFBSSxDQUFDeUQsVUFBVSxFQUFFLE9BQU96QyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDTCxXQUFBLENBQUFnRCxhQUFhLE9BQUc7WUFFbkQsSUFBSUMsVUFBVSxHQUFHLElBQUk7WUFDckIsSUFBSTFFLE9BQU8sRUFBRVEsS0FBSyxFQUFFbUUsTUFBTSxLQUFLLENBQUMsSUFBSVAsV0FBVyxFQUFFTyxNQUFNLEtBQUssQ0FBQyxFQUFFRCxVQUFVLEdBQUcsS0FBSztZQUVqRixNQUFNRSxPQUFPLEdBQUdGLFVBQVUsR0FBR2xCLEtBQUEsQ0FBQXFCLElBQUksR0FBR3ZCLE1BQUEsQ0FBQTFCLFNBQVM7WUFFN0MsT0FDQ1QsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0osUUFBQSxDQUFBTixXQUFXLENBQUMwRCxRQUFRO2NBQ3BCQyxLQUFLLEVBQUU7Z0JBQ05sRCxLQUFLO2dCQUNMOUMsS0FBSztnQkFDTG1GLFFBQVE7Z0JBQ1JjLE1BQU0sRUFBRVosV0FBVztnQkFDbkJhLFNBQVMsRUFBRVgsY0FBYztnQkFDekJZLEtBQUssRUFBRWQsV0FBVyxDQUFDTzs7WUFDbkIsR0FFRHhELE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQXdELFVBQVU7Y0FDVkMsVUFBVSxFQUFFLENBQ1gsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQ2pCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLEVBQ0EsRUFFRmpFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQTBELGFBQWEsUUFDYmxFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN5QixPQUFBLENBQUFYLE1BQU0sT0FBRyxFQUNWekIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQzhDLE9BQU8sT0FBRyxDQUNJLENBQ007VUFFekI7Ozs7Ozs7Ozs7O1VDNURBOztVQUVBVSxNQUFBLENBQUFDLGNBQUEsQ0FBQTVGLE9BQUE7WUFDQW9GLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBNUQsTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFnRCxRQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBK0csT0FBQSxHQUFBL0csT0FBQTtVQUNjLFNBQVVnSCxxQkFBcUJBLENBQUM7WUFBRTVCO1VBQU0sQ0FBRTtZQUN2RCxNQUFNO2NBQUVqQyxLQUFLO2NBQUU5QztZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFDekMsTUFBTSxDQUFDb0UsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3pFLE1BQUEsQ0FBQUUsT0FBSyxDQUFDNEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNNEIsS0FBSyxHQUFHQyxLQUFLLElBQUc7Y0FDckJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCSCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFDRCxPQUNDekUsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQzBELE1BQUEsQ0FBQVEsVUFBVTtjQUFDM0QsSUFBSSxFQUFDLE1BQU07Y0FBQzRELFFBQVE7WUFBQSxFQUFHLEVBQ25DOUUsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQzBELE1BQUEsQ0FBQVEsVUFBVTtjQUFDM0QsSUFBSSxFQUFDLFlBQVk7Y0FBQzZELE9BQU8sRUFBRUw7WUFBSyxFQUFJLEVBQy9DRixTQUFTLElBQ1R4RSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDMkQsT0FBQSxDQUFBVSxXQUFXO2NBQUN0RSxLQUFLLEVBQUVBLEtBQUssQ0FBQ1ksT0FBTztjQUFFcUIsTUFBTSxFQUFFQSxNQUFNO2NBQUVzQyxPQUFPLEVBQUVBLENBQUEsS0FBTVIsWUFBWSxDQUFDLEtBQUssQ0FBQztjQUFFL0QsS0FBSyxFQUFFQTtZQUFLLEVBQ25HLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQVYsTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFpRCxHQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQTJILE1BQUEsR0FBQTNILE9BQUE7VUFDQSxJQUFBNEgsUUFBQSxHQUFBNUgsT0FBQTtVQUVNLFNBQVU2SCxJQUFJQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUM1QixPQUNDckYsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBOEUsSUFBSTtjQUFDQyxNQUFNO1lBQUEsR0FDWHZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQWdGLFdBQVcsUUFDWHhGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUN1RSxNQUFBLENBQUFoRixPQUFVO2NBQUNkLElBQUksRUFBRWlHO1lBQUksRUFBSSxDQUNiLEVBQ2RyRixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDSCxHQUFBLENBQUFpRixVQUFVLFFBQ1Z6RixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDd0UsUUFBQSxDQUFBakYsT0FBcUI7Y0FBQ3lDLE1BQU0sRUFBRTBDO1lBQUksRUFBSSxDQUMzQixDQUNQO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFyRixNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQWlELEdBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBMkgsTUFBQSxHQUFBM0gsT0FBQTtVQUNBLElBQUFnRCxRQUFBLEdBQUFoRCxPQUFBO1VBR00sU0FBVW1JLFVBQVVBLENBQUM7WUFBRUw7VUFBSSxDQUFFO1lBQ2xDLE1BQU07Y0FBRTNFLEtBQUs7Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFILGNBQWMsR0FBRTtZQUV6QyxNQUFNdUYsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixNQUFNL0gsS0FBSyxDQUFDaUMsV0FBVyxDQUFDd0YsSUFBSSxDQUFDOUYsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCxPQUNDUyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDSCxHQUFBLENBQUE4RSxJQUFJO2NBQUNDLE1BQU07WUFBQSxHQUNYdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBZ0YsV0FBVyxRQUNYeEYsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3VFLE1BQUEsQ0FBQWhGLE9BQVU7Y0FBQ2QsSUFBSSxFQUFFaUc7WUFBSSxFQUFJLENBQ2IsRUFDZHJGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQWlGLFVBQVUsUUFDVnpGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQVNRLFNBQVMsRUFBQztZQUFzQixHQUN4Q25CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQW9GLGFBQWE7Y0FBQ0MsU0FBUyxFQUFFbkYsS0FBSyxFQUFFWSxPQUFPLEVBQUV2QixNQUFNO2NBQUVtQixJQUFJLEVBQUMsUUFBUTtjQUFDNEUsU0FBUyxFQUFFSDtZQUFRLEVBQUksQ0FDOUUsQ0FDRSxDQUNQO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUEzRixNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQWdELFFBQUEsR0FBQWhELE9BQUE7VUFFQSxNQUFNd0ksYUFBYSxHQUFHO1lBQ3JCL0csS0FBSyxFQUFFLE9BQU87WUFDZGdILFVBQVUsRUFBRTtXQUNaO1VBQ2EsU0FBVUMsTUFBTUEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQ2xFLE1BQU07Y0FBRTFGO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUgsY0FBYyxHQUFFO1lBQ2xDLE1BQU1pRyxjQUFjLEdBQUdDLE1BQU0sSUFBRztjQUMvQixJQUFJQyxLQUFLLEdBQUdSLGFBQWEsQ0FBQ08sTUFBTSxDQUFDO2NBQ2pDLE9BQU9DLEtBQUssSUFBSSxLQUFLO1lBQ3RCLENBQUM7WUFDRCxPQUNDdkcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBU1EsU0FBUyxFQUFDO1lBQVUsR0FDNUJuQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBUSxHQUN0Qm5CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtRLFNBQVMsRUFBRSxpQkFBaUJrRixjQUFjLENBQUNGLFNBQVMsRUFBRUcsTUFBTSxDQUFDO1lBQUUsRUFBUSxFQUM1RXRHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGFBQUtELEtBQUssQ0FBQzhGLE9BQU8sQ0FBQzFHLFFBQVEsQ0FBQ3FHLFNBQVMsQ0FBTSxDQUN0QyxFQUNObkcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsY0FDQ1gsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFFLGlCQUFpQmtGLGNBQWMsQ0FBQ0gsU0FBUyxFQUFFSSxNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzVFdEcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBS0QsS0FBSyxDQUFDOEYsT0FBTyxDQUFDMUcsUUFBUSxDQUFDb0csU0FBUyxDQUFNLENBQ3RDLEVBQ05sRyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxjQUNDWCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLUSxTQUFTLEVBQUUsaUJBQWlCa0YsY0FBYyxDQUFDRCxVQUFVLEVBQUVFLE1BQU0sQ0FBQztZQUFFLEVBQVEsRUFDN0V0RyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxhQUFLRCxLQUFLLENBQUM4RixPQUFPLENBQUMxRyxRQUFRLENBQUNzRyxVQUFVLENBQU0sQ0FDdkMsQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUFwRyxNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQStDLFdBQUEsR0FBQS9DLE9BQUE7VUFFYyxTQUFVa0osVUFBVUEsQ0FBQztZQUFFckg7VUFBSSxDQUFFO1lBQzFDLE9BQ0NZLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGtCQUNDWCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDTCxXQUFBLENBQUFjLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLHVCQUF1QmpDLElBQUksQ0FBQ0csRUFBRTtZQUFFLEdBQzNDUyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxhQUFLdkIsSUFBSSxDQUFDNEIsS0FBSyxDQUFNLENBQ2YsRUFDUGhCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGVBQU92QixJQUFJLENBQUM2QixXQUFXLENBQVEsQ0FDdEI7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBakIsTUFBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFnRCxRQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQW1KLEtBQUEsR0FBQW5KLE9BQUE7VUFFTSxTQUFVb0osY0FBY0EsQ0FBQztZQUFFeEY7VUFBUyxDQUFFO1lBQzNDLE1BQU07Y0FBRVQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFFbEMsT0FDQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBS1EsU0FBUyxFQUFFQTtZQUFTLEdBQ3hCbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQytGLEtBQUEsQ0FBQXRGLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHlCQUF5QjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDbkVULEtBQUssQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQ2YsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUF2QixNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQWdELFFBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBcUosS0FBQSxHQUFBckosT0FBQTtVQUNBLElBQUFzSixXQUFBLEdBQUF0SixPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBd0osV0FBQSxHQUFBeEosT0FBQTtVQUVNLFNBQVVtRyxJQUFJQSxDQUFDLEVBQUU7WUFDdEIsTUFBTTtjQUFFaEQsS0FBSztjQUFFbUQsTUFBTTtjQUFFQyxTQUFTO2NBQUVsRztZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBSCxjQUFjLEdBQUU7WUFDNUQsTUFBTSxDQUFDNEcsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2pILE1BQUEsQ0FBQUUsT0FBSyxDQUFDNEMsUUFBUSxDQUFTbEYsS0FBSyxDQUFDTSxHQUFHLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekYsTUFBTWdKLFFBQVEsR0FBR0EsQ0FBQ3ZDLEtBQUssRUFBRXdDLEtBQUssS0FBSTtjQUNqQyxJQUFJQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDakcsSUFBSTtjQUN4QyxJQUFJa0csU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQ0gsVUFBVSxDQUFDQyxRQUFRLENBQUNHLE1BQU0sQ0FBQztjQUMvREYsU0FBUyxDQUFDRyxHQUFHLENBQUMsS0FBSyxFQUFFUCxLQUFLLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUM7Y0FFdkQsSUFBSVEsR0FBRyxHQUFHLEdBQUdQLFNBQVMsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJTCxTQUFTLENBQUNNLFFBQVEsRUFBRSxFQUFFO2NBQzlEUixVQUFVLENBQUNTLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRUMsUUFBUSxDQUFDaEgsS0FBSyxFQUFFMkcsR0FBRyxDQUFDO2NBQ3hEVixZQUFZLENBQUNFLEtBQUssQ0FBQztjQUVuQixJQUFJQSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNoQnZKLEtBQUssQ0FBQ1UsV0FBVyxFQUFFOztZQUVyQixDQUFDO1lBRUQsT0FDQzBCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUFYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBNEIsUUFBQSxRQUNDOUIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQXFCLGFBQWE7Y0FBQ2YsUUFBUSxFQUFFQSxRQUFRO2NBQUVnQixNQUFNLEVBQUVsQjtZQUFTLEdBQ25EaEgsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQXVCLElBQUksUUFDSm5JLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNpRyxLQUFBLENBQUF3QixHQUFHLFFBQUUxSCxLQUFLLENBQUMySCxJQUFJLENBQUN4RSxNQUFNLENBQU8sRUFDOUI3RCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaUcsS0FBQSxDQUFBd0IsR0FBRyxRQUFFMUgsS0FBSyxDQUFDMkgsSUFBSSxDQUFDdkUsU0FBUyxDQUFPLENBQzNCLEVBQ1A5RCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaUcsS0FBQSxDQUFBMEIsS0FBSyxRQUNMdEksTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2tHLFdBQUEsQ0FBQTBCLFVBQVU7Y0FDVnBILFNBQVMsRUFBQyxnREFBZ0Q7Y0FDMUQ5QixLQUFLLEVBQUV3RSxNQUFNO2NBQ2IyRSxPQUFPLEVBQUV6QixXQUFBLENBQUFyQixVQUFVO2NBQ25CK0MsY0FBYyxFQUFFL0gsS0FBSyxDQUFDSSxLQUFLLENBQUMrQztZQUFNLEVBQ2pDLEVBQ0Y3RCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDa0csV0FBQSxDQUFBMEIsVUFBVTtjQUNWcEgsU0FBUyxFQUFDLGdEQUFnRDtjQUMxRDlCLEtBQUssRUFBRXlFLFNBQVM7Y0FDaEIwRSxPQUFPLEVBQUUxQixLQUFBLENBQUExQixJQUFJO2NBQ2JxRCxjQUFjLEVBQUUvSCxLQUFLLENBQUNJLEtBQUssQ0FBQ2dEO1lBQVMsRUFDcEMsQ0FDSyxDQUNPLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQTlELE1BQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBOEUsS0FBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFpRCxHQUFBLEdBQUFqRCxPQUFBO1VBRUEsSUFBQW1MLGVBQUEsR0FBQW5MLE9BQUE7VUFFTSxTQUFVZ0wsVUFBVUEsQ0FBQztZQUFFcEgsU0FBUztZQUFFOUIsS0FBSztZQUFFbUosT0FBTztZQUFFQztVQUFjLENBQW9CO1lBQ3pGLE1BQU1FLG1CQUFtQixHQUFHdEosS0FBSyxFQUFFbUUsTUFBTSxHQUFHLENBQUM7WUFFN0MsSUFBSSxDQUFDbUYsbUJBQW1CLEVBQUU7Y0FDekIsT0FDQzNJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNILEdBQUEsQ0FBQUksU0FBUztnQkFBQ0MsSUFBSSxFQUFFNEgsY0FBYyxDQUFDekgsS0FBSztnQkFBRUMsV0FBVyxFQUFFd0gsY0FBYyxDQUFDeEgsV0FBVztnQkFBRUMsSUFBSSxFQUFDO2NBQU0sR0FDMUZsQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDK0gsZUFBQSxDQUFBL0IsY0FBYztnQkFBQ3hGLFNBQVMsRUFBRTtjQUFvQyxFQUFJLENBQ3hEOztZQUlkLE9BQ0NuQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFBWCxNQUFBLENBQUFFLE9BQUEsQ0FBQTRCLFFBQUEsUUFDQzlCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUMwQixLQUFBLENBQUFxQixJQUFZO2NBQUN2QyxTQUFTLEVBQUVBLFNBQVM7Y0FBRTlCLEtBQUssRUFBRUEsS0FBSztjQUFFbUosT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDdEV4SSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDK0gsZUFBQSxDQUFBL0IsY0FBYztjQUFDeEYsU0FBUyxFQUFFO1lBQWlDLEVBQUksQ0FDOUQ7VUFFTCJ9