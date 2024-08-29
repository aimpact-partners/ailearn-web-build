System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.07/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev07MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev07MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_9 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_10 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_aimpactChatSdk110Session) {
      dependency_11 = _aimpactChatSdk110Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2List) {
      dependency_15 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1165081270,
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
            hide() {}
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
        hash: 609699119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./empty");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const ListControl = totalItems < 1 ? _empty.EmptyList : _list.OrganizationsList;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_components.Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93Iiwic2V0QnJlYWRjcnVtYiIsImxvYWQiLCJXaWRnZXQiLCJWaWV3IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9iZXlvbmRfY29udGV4dCIsIl90ZXh0cyIsIl9tYWluTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwibW9kZWwiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJPcmdhbml6YXRpb25zIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpbml0aWFsaXplIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJmZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpdGVtIiwidG9nZ2xlSXRlbSIsImhhcyIsImlkIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwicmVnaXN0ZXIiLCJfc2Vzc2lvbiIsIl9ob29rcyIsIl9yb3V0aW5nIiwiSGVhZGVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsInJlcGxhY2UiLCJhbHQiLCJpbWFnZSIsIlN1YkRpdmlkZXIiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImpvaW4iLCJfZW1wdHkiLCJfbGlzdCIsIl9pY29ucyIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsImxlbmd0aCIsInVzZU1lbW8iLCJQYWdlTG9hZGVyIiwiTGlzdENvbnRyb2wiLCJPcmdhbml6YXRpb25zTGlzdCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMZWFybmluZ0l0ZW1BY3Rpb25zIiwib25EZWxldGUiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIk1vZHVsZURhdGEiLCJuYW1lIiwiX2l0ZW0iLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksYUFBYSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksRUFBRTtZQUNuQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPVixNQUFBLENBQUFXLElBQUk7WUFDWjtZQUNBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVgsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRCxJQUFBWSxNQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsS0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixlQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsV0FBQSxHQUFBbkIsT0FBQTtVQUNNLE1BQU9PLFlBQWEsU0FBUVEsTUFBQSxDQUFBSyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDQyxL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