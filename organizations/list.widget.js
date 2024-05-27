System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.43/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.43/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/link", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0043CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0043CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0043ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0043ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Icons) {
      dependency_16 = _pragmateUi011Icons;
    }, function (_pragmateUi011List) {
      dependency_17 = _pragmateUi011List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.43"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.43/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.43/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.43/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3542939638,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 748708001,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _beyond_context = require("beyond_context");
          var _texts = require("@beyond-js/kernel/texts");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          class StoreManager extends _model.ReactiveModel {
            #items;
            get items() {
              return this.model.items;
            }
            #model;
            get model() {
              return this.#model;
            }
            #moduleTexts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            get texts() {
              return this.#moduleTexts.value;
            }
            get ready() {
              return super.ready && this.#moduleTexts.ready;
            }
            constructor() {
              super();
              this.#model = new _core.Organizations();
              this.model.on('change', this.triggerEvent);
              this.load();
              this.#moduleTexts.on('change', this.triggerEvent);
            }
            initialize() {
              _coinsLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '']];
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async delete(item) {
              await item.delete();
            }
            toggleItem(item) {
              if (this.itemsSelected.has(item.id)) {
                this.#itemsSelected.delete(item.id);
                this.triggerEvent();
                return;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 197669903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2357459609,
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
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/organizations/create",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2435326800,
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
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _routing = require("@beyond-js/kernel/routing");
          function Header() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useModuleContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const [loading, setLoading] = _react.default.useState(fetching);
            (0, _hooks.useBinder)([store], () => setLoading(store.fetching));
            const onNavigate = event => _routing.routing.pushState(event.currentTarget.dataset.href);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: texts.welcome.message.replace('%name', userName),
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }), store.items && _react.default.createElement(_ui.SubDivider, {
              title: texts.title
            }, _react.default.createElement("div", {
              className: "buttons-header__container"
            }, _react.default.createElement(_components.Button, {
              onClick: onNavigate,
              icon: "share-link",
              variant: "primary",
              "data-href": `/organizations/join`
            }, texts.actions.join), _react.default.createElement(_components.Button, {
              onClick: onNavigate,
              "data-href": "/organizations/create",
              icon: "add",
              variant: "primary"
            }, texts.actions.create))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4129544995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./empty");
          var _link = require("pragmate-ui/link");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("./list");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [totalItems, setTotalItems] = (0, _react.useState)(store.items.length);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setTotalItems(store.items.length);
            });
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              fetching,
              totalItems
            }), [texts, store, fetching, totalItems]);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const ListControl = totalItems < 1 ? _empty.EmptyList : _list.OrganizationsList;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create)), _react.default.createElement(ListControl, {
              store: store
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 1517931771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningItemActions;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function LearningItemActions({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const onDelete = async () => {
              await store.delete(item);
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
        hash: 1878075103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = Organization;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _actions = require("./actions");
          function Organization({
            data
          }) {
            return _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
              item: data
            })), _react.default.createElement(_ui.CardFooter, null, _react.default.createElement(_actions.default, {
              item: data
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/title
      **********************************/

      ims.set('./views/item/title', {
        hash: 1230832894,
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
            return _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "title-card__container flex-container flex-space-between"
            }, _react.default.createElement(_components.Link, {
              href: `/organizations/view/${item.id}`
            }, _react.default.createElement("h4", null, item.name))), _react.default.createElement("span", null, item.description));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3313635402,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationsList = OrganizationsList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          function OrganizationsList({
            store
          }) {
            return _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              items: store.items,
              control: _item.Organization
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJtb2R1bGVUZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJ0ZXh0cyIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIk9yZ2FuaXphdGlvbnMiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJpbml0aWFsaXplIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpdGVtIiwidG9nZ2xlSXRlbSIsImhhcyIsImlkIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJfaG9va3MiLCJfcm91dGluZyIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25OYXZpZ2F0ZSIsImV2ZW50Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwid2VsY29tZSIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiYWx0IiwiaW1hZ2UiLCJTdWJEaXZpZGVyIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJqb2luIiwiX2VtcHR5IiwiX2xpbmsiLCJfbGlzdCIsIl9pY29ucyIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsImxlbmd0aCIsInVzZU1lbW8iLCJQcmVsb2FkU2NyZWVuIiwiTGlzdENvbnRyb2wiLCJPcmdhbml6YXRpb25zTGlzdCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJuYW1lIiwiX2l0ZW0iLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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