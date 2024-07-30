System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.08/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.0-dev.08/components/ui", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/link", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp010Dev08MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev08MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_9 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp010Dev08ComponentsUi) {
      dependency_10 = _aimpactAilearnApp010Dev08ComponentsUi;
    }, function (_aimpactChatSdk101Session) {
      dependency_11 = _aimpactChatSdk101Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_aimpactChat102SharedComponents) {
      dependency_15 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_16 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1List) {
      dependency_17 = _pragmateUi100Beta1List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.08"], ["@aimpact/ailearn-app", "0.1.0-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.08/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2145457564,
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
            show() {
              this.#store.setBreadcrumb();
              this.#store.load();
            }
            get Widget() {
              return _views.View;
            }
            hide() {
              console.log('nop');
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 129744444,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          class StoreManager extends _model.ReactiveModel {
            #items;
            get items() {
              return this.model.items;
            }
            #model;
            get model() {
              return this.#model;
            }
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#model = new _core.Organizations();
              this.model.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            }
            initialize() {
              _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '']];
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations]];
              }, 100);
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
        hash: 543647172,
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
            }, texts.actions.register)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 140426853,
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
            }, texts.actions.register))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3239981451,
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
              href: "/organizations/create"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.register)), _react.default.createElement(ListControl, {
              store: store
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 3332734905,
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
            return null;
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
        hash: 527795951,
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
              className: "list-unstyled grid-container g-2-columns mt-1",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfYmV5b25kX2NvbnRleHQiLCJfdGV4dHMiLCJfbWFpbkxheW91dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdGlhbGl6ZSIsIkxheW91dEJyb2tlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiZmV0Y2hpbmciLCJlIiwiZXJyb3IiLCJkZWxldGUiLCJpdGVtIiwidG9nZ2xlSXRlbSIsImhhcyIsImlkIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwicmVnaXN0ZXIiLCJfc2Vzc2lvbiIsIl9ob29rcyIsIl9yb3V0aW5nIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsInJlcGxhY2UiLCJhbHQiLCJpbWFnZSIsIlN1YkRpdmlkZXIiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImpvaW4iLCJfZW1wdHkiLCJfbGluayIsIl9saXN0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwibGVuZ3RoIiwidXNlTWVtbyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIk9yZ2FuaXphdGlvbnNMaXN0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIk9yZ2FuaXphdGlvbiIsImRhdGEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsIm5hbWUiLCJfaXRlbSIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksYUFBYSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksRUFBRTtZQUNuQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPVixNQUFBLENBQUFXLElBQUk7WUFDWjtZQUNBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNuQjs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFjLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixlQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsV0FBQSxHQUFBckIsT0FBQTtVQUNNLE1BQU9PLFlBQWEsU0FBUVUsTUFBQSxDQUFBSyxhQUEyQjtZ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