System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.1.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.0/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_10 = _beyondJsReact18Widgets111Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_12 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi010List) {
      dependency_16 = _pragmateUi010List;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/list', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/organizations/list.widget');
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
        hash: 3368023227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
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
            constructor() {
              super();
              this.#model = new _core.Organizations();
              globalThis.c = this.#model;
              this.model.on('change', this.triggerEvent);
              this.load();
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                this.ready = true;
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
        hash: 1729047346,
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
              titleText: texts.title
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
        hash: 1004766343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _empty = require("./empty");
          var _header = require("./header");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _config = require("@aimpact/ailearn-app/config");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [totalItems, setTotalItems] = (0, _react.useState)(store.items.length);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setTotalItems(store.items.length);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const ListControl = totalItems < 1 ? _empty.EmptyList : _list.OrganizationsList;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems
              }
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(ListControl, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJPcmdhbml6YXRpb25zIiwiZ2xvYmFsVGhpcyIsImMiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJ0b2dnbGVJdGVtIiwiaGFzIiwiaWQiLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2hvb2tzIiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uTmF2aWdhdGUiLCJldmVudCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50Iiwiam9pbiIsIl9uYXZiYXJIZWFkZXIiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9jb25maWciLCJfbGlzdCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsImxlbmd0aCIsIlByZWxvYWRTY3JlZW4iLCJMaXN0Q29udHJvbCIsIk9yZ2FuaXphdGlvbnNMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJQYWdlQ29udGFpbmVyIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwibmFtZSIsIl9pdGVtIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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