System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.45/main-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/link", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0045MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0045MainLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0045ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/organizations/list.widget');
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
        hash: 2395466533,
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
              _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '']];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiX21haW5MYXlvdXQiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJtb2RlbCIsIm1vZHVsZVRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImluaXRpYWxpemUiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwib3JnYW5pemF0aW9ucyIsImZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJ0b2dnbGVJdGVtIiwiaGFzIiwiaWQiLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfc2Vzc2lvbiIsIl9ob29rcyIsIl9yb3V0aW5nIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsInJlcGxhY2UiLCJhbHQiLCJpbWFnZSIsIlN1YkRpdmlkZXIiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImpvaW4iLCJfZW1wdHkiLCJfbGluayIsIl9saXN0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwibGVuZ3RoIiwidXNlTWVtbyIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIk9yZ2FuaXphdGlvbnNMaXN0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiSWNvbiIsIkxlYXJuaW5nSXRlbUFjdGlvbnMiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJfdGl0bGUiLCJfYWN0aW9ucyIsIk9yZ2FuaXphdGlvbiIsImRhdGEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiTW9kdWxlRGF0YSIsIm5hbWUiLCJfaXRlbSIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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