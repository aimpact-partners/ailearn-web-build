System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.9/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/tabs", "pragmate-ui@0.0.3/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_10 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Link) {
      dependency_14 = _pragmateUi003Link;
    }, function (_pragmateUi003Tabs) {
      dependency_15 = _pragmateUi003Tabs;
    }, function (_pragmateUi003List) {
      dependency_16 = _pragmateUi003List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/list', dependency_16]]);
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
        hash: 2386505272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
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
              if (this.#modules) {
                console.log('Ya cargados');
                return;
              }
              this.#modules = new _core.LearningModules();
              await this.#modules.load();
            }
            async load() {
              if (!_gclassroom.gclassroom.authorized) {
                this.ready = true;
                return;
              }
              this.#draft = new _core.LearningModules();
              await this.#draft.load();
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
              // this.#collection.delete(id);
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
        hash: 933341378,
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
            if (itemsPublished?.length === 0 && itemsDrafts?.length === 0) isNotEmpty = false;
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
        hash: 3444477925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function LearningModuleActions({
            module
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const onDelete = async () => {
              await store.deleteDraft(module.id);
            };
            return _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
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
        hash: 3208328467,
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
              await store.deleteDraft(module.id);
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
        hash: 2266173081,
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
              modules,
              store
            } = (0, _context.useListContext)();
            const [tabSelect, useTabSelect] = _react.default.useState(store.tab === 'publish' ? 1 : 0);
            const onChange = (event, index) => {
              let urlActual = globalThis.location.href;
              let urlParams = new URLSearchParams(globalThis.location.search);
              urlParams.set('tab', index === 0 ? 'draft' : 'publish');
              let nuevaUrl = `${urlActual.split('?')[0]}?${urlParams.toString()}`;
              globalThis.history.replaceState({}, document.title, nuevaUrl);
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
              items: modules,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZE1vZHVsZXMiLCJsb2FkIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnQiLCJtb2R1bGVzIiwiY29uc29sZSIsImxvZyIsIkxlYXJuaW5nTW9kdWxlcyIsImdjbGFzc3Jvb20iLCJhdXRob3JpemVkIiwicmVhZHkiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJ3YXJuIiwic2Vzc2lvbiIsImUiLCJlcnJvciIsImRlbGV0ZURyYWZ0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIml0ZW1zRHJhZnRzIiwic2V0SXRlbXNEcmFmdHMiLCJpdGVtc1B1Ymxpc2hlZCIsInNldEl0ZW1zUHVibGlzaGVkIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImlzTm90RW1wdHkiLCJsZW5ndGgiLCJDb250cm9sIiwiTGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJkcmFmdHMiLCJwdWJsaXNoZWQiLCJ0b3RhbCIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJJdGVtIiwiZGF0YSIsIkNhcmQiLCJzaW1wbGUiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJJdGVtRHJhZnRzIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJNb2R1bGVEYXRhIiwiX2xpbmsiLCJCdXR0b25SZWRpcmVjdCIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfaXRlbSIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwidXJsQWN0dWFsIiwiZ2xvYmFsVGhpcyIsImxvY2F0aW9uIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic2V0IiwibnVldmFVcmwiLCJzcGxpdCIsInRvU3RyaW5nIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29udHJvbCIsInByZXZlbnRNZXNzYWdlIiwiX2J1dHRvblJlZGlyZWN0Iiwic2hvdWxkU2hvd0VtcHR5Q2FyZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2l0ZW0tZHJhZnRzLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC9idXR0b24tcmVkaXJlY3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJ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