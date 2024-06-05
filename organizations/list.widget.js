System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-06/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/link", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev06MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev06MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev06ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1469291236,
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
        hash: 351965137,
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
              this.load();
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
        hash: 2064789772,
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
            const ListControl = totalItems < 1 || 1 === 1 ? _empty.EmptyList : _list.OrganizationsList;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_link.Link, {
              href: "/modules/create"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfYmV5b25kX2NvbnRleHQiLCJfdGV4dHMiLCJfbWFpbkxheW91dCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsIm1vZGVsIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImluaXRpYWxpemUiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwib3JnYW5pemF0aW9ucyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJ0b2dnbGVJdGVtIiwiaGFzIiwiaWQiLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJyZWdpc3RlciIsIl9zZXNzaW9uIiwiX2hvb2tzIiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uTmF2aWdhdGUiLCJldmVudCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiU3ViRGl2aWRlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50Iiwiam9pbiIsIl9lbXB0eSIsIl9saW5rIiwiX2xpc3QiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJsZW5ndGgiLCJ1c2VNZW1vIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwibmFtZSIsIl9pdGVtIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDSSxhQUFhLEVBQUU7WUFDNUI7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1QsTUFBQSxDQUFBVSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBVSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxLQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixXQUFBLEdBQUFqQixPQUFBO1VBQ00sTUFBT08sWUFBYSxTQUFRTSxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsS0FBSztZQUN4QjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NB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