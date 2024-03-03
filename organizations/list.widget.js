System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/link", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_pragmateUi006Link) {
      dependency_10 = _pragmateUi006Link;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_14 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['pragmate-ui/link', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/organizations/list.widget');
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
        hash: 220543043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOrganizationContext = exports.OrganizationContext = void 0;
          var _react = require("react");
          const OrganizationContext = exports.OrganizationContext = _react.default.createContext({});
          const useOrganizationContext = () => _react.default.useContext(OrganizationContext);
          exports.useOrganizationContext = useOrganizationContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2194062311,
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
            } = (0, _context.useOrganizationContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/organization/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1130461556,
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
          var _link = require("pragmate-ui/link");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Header() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useOrganizationContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const [loading, setLoading] = _react.default.useState(fetching);
            (0, _hooks.useBinder)([store], () => setLoading(store.fetching));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: texts.welcome.message.replace('%name', userName),
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.welcome.actionInfo)), store.items && _react.default.createElement(_ui.SubDivider, {
              titleText: texts.title
            }, _react.default.createElement("div", {
              className: "buttons-header__container"
            }, _react.default.createElement(_link.Link, {
              className: "add-item",
              href: `/organizations/join`
            }, _react.default.createElement(_components.Button, {
              icon: "share-link",
              variant: "primary"
            }, texts.actions.join)), _react.default.createElement(_link.Link, {
              className: "add-item",
              href: `/organization/management/new`
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary"
            }, texts.actions.create)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1890278882,
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
            return _react.default.createElement(_context.OrganizationContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                totalItems
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Organizations', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(ListControl, {
              store: store
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 3974049838,
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
            } = (0, _context.useOrganizationContext)();
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
        hash: 1150578988,
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
              href: `/organization/management/${item.id}`
            }, _react.default.createElement("h4", null, item.name))), _react.default.createElement("span", null, item.description));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 4056048802,
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
              control: _item.Organization,
              specs: undefined
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJPcmdhbml6YXRpb25zIiwiZ2xvYmFsVGhpcyIsImMiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJ0b2dnbGVJdGVtIiwiaGFzIiwiaWQiLCJfcmVhY3QiLCJPcmdhbml6YXRpb25Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VPcmdhbml6YXRpb25Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiX2xpbmsiLCJfaG9va3MiLCJIZWFkZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsIndlbGNvbWUiLCJtZXNzYWdlIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiYWN0aW9uSW5mbyIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJCdXR0b24iLCJ2YXJpYW50Iiwiam9pbiIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2NvbmZpZyIsIl9saXN0IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwibGVuZ3RoIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJuYW1lIiwiX2l0ZW0iLCJMaXN0IiwiY29udHJvbCIsInNwZWNzIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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