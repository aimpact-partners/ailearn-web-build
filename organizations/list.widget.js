System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.10/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.10/components/ui", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp016Dev10MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev10MainLayoutWidget;
    }, function (_beyondJsWidgets110Controller) {
      dependency_5 = _beyondJsWidgets110Controller;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev10ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev10ComponentsUi;
    }, function (_aimpactChatSdk110Session) {
      dependency_12 = _aimpactChatSdk110Session;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_15 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2List) {
      dependency_16 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.10"], ["@aimpact/ailearn-app", "0.1.6-dev.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.10/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.10/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.10/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1968607220,
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
        hash: 2258581121,
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
          class StoreManager extends _model.ReactiveModel {
            isStore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJpdGVtcyIsIm1vZGVsIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsInRvZ2dsZUl0ZW0iLCJoYXMiLCJpZCIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsInJlZ2lzdGVyIiwiX3Nlc3Npb24iLCJfaG9va3MiLCJfcm91dGluZyIsIkhlYWRlciIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25OYXZpZ2F0ZSIsImV2ZW50Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwid2VsY29tZSIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiYWx0IiwiaW1hZ2UiLCJTdWJEaXZpZGVyIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJqb2luIiwiX2VtcHR5IiwiX2xpc3QiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJsZW5ndGgiLCJ1c2VNZW1vIiwiUGFnZUxvYWRlciIsIkxpc3RDb250cm9sIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJJY29uIiwiTGVhcm5pbmdJdGVtQWN0aW9ucyIsIm9uRGVsZXRlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIl90aXRsZSIsIl9hY3Rpb25zIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJNb2R1bGVEYXRhIiwibmFtZSIsIl9pdGVtIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksSUFBSSxFQUFFO1lBQ25CO1lBQ0EsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ULE1BQUEsQ0FBQVUsSUFBSTtZQUNaO1lBQ0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFXLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixlQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFPLE1BQUEsQ0FBQUksYUFBMkI7WUFDNURDLE9BQU87WUFDUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUs7WUFDeEI7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlELGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUVBLENBQUFFLEtBQU0sR0FBRyxJQUFJUCxNQUFBLENBQUFRLFlBQVksQ0FBQ1QsZUFBQSxDQUFBVSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUMzQyxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDSSxLQUFLO1lBQ3pCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ0ssS0FBSztZQUN4QztZQUVBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFULEtBQU0sR0FBRyxJQUFJTixLQUFBLENBQUFnQixhQUFhLEVBQUU7Y0FDakMsSUFBSSxDQUFDVixLQUFLLENBQUNXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDMUMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUM1QztZQUVBLE1BQU14QixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTSxJQUFJLENBQUNiLEtBQUssQ0FBQ1osSUFBSSxFQUFFO2dCQUN2QixLQUFLLENBQUNvQixLQUFLLEdBQUcsSUFBSTtlQUNsQixDQUFDLE9BQU9NLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0QsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUksTUFBTUEsQ0FBQ0MsSUFBSTtjQUNoQixNQUFNQSxJQUFJLENBQUNELE1BQU0sRUFBRTtZQUNwQjtZQUVBRSxVQUFVQSxDQUFDRCxJQUFJO2NBQ2QsSUFBSSxJQUFJLENBQUNqQixhQUFhLENBQUNtQixHQUFHLENBQUNGLElBQUksQ0FBQ0csRUFBRSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBcEIsYUFBYyxDQUFDZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUNHLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDVCxZQUFZLEVBQUU7Z0JBQ25COztZQUVGOztVQUNBcEIsT0FBQSxDQUFBTixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVELElBQUFvQyxNQUFBLEdBQUEzQyxPQUFBO1VBU08sTUFBTTRDLGFBQWEsR0FBQS9CLE9BQUEsQ0FBQStCLGFBQUEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBaUIsRUFBb0IsQ0FBQztVQUMvRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSixNQUFBLENBQUFFLE9BQUssQ0FBQ0csVUFBVSxDQUFDSixhQUFhLENBQUM7VUFBQy9CLE9BQUEsQ0FBQWtDLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Z0RSxJQUFBSixNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQWlELFdBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBa0QsUUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFtRCxHQUFBLEdBQUFuRCxPQUFBO1VBRU0sU0FBVW9ELFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFNUI7WUFBSyxDQUFFLEdBQUcsSUFBQTBCLFFBQUEsQ0FBQUgsZ0JBQWdCLEdBQUU7WUFDcEMsT0FDQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBRyxTQUFTO2NBQUNDLElBQUksRUFBRS9CLEtBQUssQ0FBQ2dDLEtBQUssQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUVsQyxLQUFLLENBQUNnQyxLQUFLLENBQUNFLFdBQVc7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sR0FDcEZoQixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBb0MsR0FDbERqQixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSixXQUFBLENBQUFZLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHVCQUF1QjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDakVwQyxLQUFLLENBQUN1QyxPQUFPLENBQUNDLFFBQVEsQ0FDakIsQ0FDRixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFyQixNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQWtELFFBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBbUQsR0FBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWlELFdBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBa0UsTUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBQ00sU0FBVW9FLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFNUMsS0FBSztjQUFFVSxRQUFRO2NBQUU3QjtZQUFLLENBQUUsR0FBRyxJQUFBNkMsUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUNyRCxNQUFNc0IsUUFBUSxHQUFHSixRQUFBLENBQUFLLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ2hELE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRy9CLE1BQUEsQ0FBQUUsT0FBSyxDQUFDOEIsUUFBUSxDQUFDekMsUUFBUSxDQUFDO1lBRXRELElBQUFnQyxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDdkUsS0FBSyxDQUFDLEVBQUUsTUFBTXFFLFVBQVUsQ0FBQ3JFLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0yQyxVQUFVLEdBQUdDLEtBQUssSUFBSVgsUUFBQSxDQUFBWSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDRyxhQUFhLENBQUNDLE9BQU8sQ0FBQ3BCLElBQUksQ0FBQztZQUMvRSxPQUNDbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQVYsTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxRQUFBLFFBQ0N4QyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDRixHQUFBLENBQUFpQyxVQUFVO2NBQ1YzQixLQUFLLEVBQUVqQyxLQUFLLENBQUM2RCxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRWxCLFFBQVEsQ0FBQztjQUN2RG1CLEdBQUcsRUFBRSxZQUFZO2NBQ2pCQyxLQUFLLEVBQUM7WUFBdUIsRUFDaEIsRUFDYnBGLEtBQUssQ0FBQ2UsS0FBSyxJQUNYdUIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBdUMsVUFBVTtjQUFDakMsS0FBSyxFQUFFakMsS0FBSyxDQUFDaUM7WUFBSyxHQUM3QmQsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBS08sU0FBUyxFQUFDO1lBQTJCLEdBQ3pDakIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osV0FBQSxDQUFBMEMsTUFBTTtjQUNOQyxPQUFPLEVBQUVmLFVBQVU7Y0FDbkJsQixJQUFJLEVBQUMsWUFBWTtjQUNqQmtDLE9BQU8sRUFBQyxTQUFTO2NBQUEsYUFDTjtZQUFxQixHQUUvQnJFLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQytCLElBQUksQ0FDWCxFQUNUbkQsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0osV0FBQSxDQUFBMEMsTUFBTTtjQUFDQyxPQUFPLEVBQUVmLFVBQVU7Y0FBQSxhQUFZLHVCQUF1QjtjQUFDbEIsSUFBSSxFQUFDLEtBQUs7Y0FBQ2tDLE9BQU8sRUFBQztZQUFTLEdBQ3pGckUsS0FBSyxDQUFDdUMsT0FBTyxDQUFDQyxRQUFRLENBQ2YsQ0FDSixDQUVQLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQXJCLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBbUQsR0FBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUErRixNQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQWlELFdBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBa0QsUUFBQSxHQUFBbEQsT0FBQTtVQUVBLElBQUFrRSxNQUFBLEdBQUFsRSxPQUFBO1VBRUEsSUFBQWdHLEtBQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBaUcsTUFBQSxHQUFBakcsT0FBQTtVQUNPO1VBQVUsU0FDUlcsSUFBSUEsQ0FBQztZQUFFTjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ3dCLEtBQUssRUFBRXFFLFFBQVEsQ0FBQyxHQUFHLElBQUF2RCxNQUFBLENBQUFnQyxRQUFRLEVBQVV0RSxLQUFLLENBQUN3QixLQUFLLENBQUM7WUFDeEQsTUFBTSxDQUFDSyxRQUFRLEVBQUVpRSxXQUFXLENBQUMsR0FBRyxJQUFBeEQsTUFBQSxDQUFBZ0MsUUFBUSxFQUFVdEUsS0FBSyxDQUFDNkIsUUFBUSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ2tFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQTFELE1BQUEsQ0FBQWdDLFFBQVEsRUFBU3RFLEtBQUssQ0FBQ2UsS0FBSyxDQUFDa0YsTUFBTSxDQUFDO1lBQ3hFLE1BQU07Y0FBRTlFO1lBQUssQ0FBRSxHQUFHbkIsS0FBSztZQUV2QixJQUFBNkQsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3ZFLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkI2RixRQUFRLENBQUM3RixLQUFLLENBQUN3QixLQUFLLENBQUM7Y0FDckJzRSxXQUFXLENBQUM5RixLQUFLLENBQUM2QixRQUFRLENBQUM7Y0FDM0JtRSxhQUFhLENBQUNoRyxLQUFLLENBQUNlLEtBQUssQ0FBQ2tGLE1BQU0sQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFDRixNQUFNMUUsS0FBSyxHQUFHZSxNQUFBLENBQUFFLE9BQUssQ0FBQzBELE9BQU8sQ0FDMUIsT0FBTztjQUNOL0UsS0FBSztjQUNMbkIsS0FBSztjQUNMNkIsUUFBUTtjQUNSa0U7YUFDQSxDQUFDLEVBQ0YsQ0FBQzVFLEtBQUssRUFBRW5CLEtBQUssRUFBRTZCLFFBQVEsRUFBRWtFLFVBQVUsQ0FBQyxDQUNwQztZQUNELElBQUksQ0FBQ3ZFLEtBQUssRUFBRSxPQUFPYyxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDRixHQUFBLENBQUFxRCxVQUFVO2NBQUN0RSxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU11RSxXQUFXLEdBQUdMLFVBQVUsR0FBRyxDQUFDLEdBQUdMLE1BQUEsQ0FBQTNDLFNBQVMsR0FBRzRDLEtBQUEsQ0FBQVUsaUJBQWlCO1lBRWxFLE9BQ0MvRCxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFBVixNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLFFBQUEsUUFDQ3hDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNILFFBQUEsQ0FBQU4sYUFBYSxDQUFDK0QsUUFBUTtjQUFDL0UsS0FBSyxFQUFFQTtZQUFLLEdBQ25DZSxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDRixHQUFBLENBQUF5RCxhQUFhLFFBQ2JqRSxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDRixHQUFBLENBQUEwRCxTQUFTO2NBQUNwRCxLQUFLLEVBQUVqQyxLQUFLLENBQUNpQztZQUFLLEdBQzVCZCxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSixXQUFBLENBQUFZLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQXVCLEdBQ2pDbkIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQzRDLE1BQUEsQ0FBQWEsSUFBSTtjQUFDbkQsSUFBSSxFQUFDO1lBQVksRUFBRyxFQUN6Qm5DLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ0MsUUFBUSxDQUNqQixDQUNJLEVBQ1pyQixNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDb0QsV0FBVztjQUFDcEcsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDZCxDQUNRLENBQ3ZCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFzQyxNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQWtELFFBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBbUQsR0FBQSxHQUFBbkQsT0FBQTtVQUVjLFNBQVUrRyxtQkFBbUJBLENBQUM7WUFBRXhFO1VBQUksQ0FBRTtZQUNuRCxNQUFNO2NBQUVmLEtBQUs7Y0FBRW5CO1lBQUssQ0FBRSxHQUFHLElBQUE2QyxRQUFBLENBQUFILGdCQUFnQixHQUFFO1lBRTNDLE1BQU1pRSxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLE1BQU0zRyxLQUFLLENBQUNpQyxNQUFNLENBQUNDLElBQUksQ0FBQztZQUN6QixDQUFDO1lBRUQsT0FBTyxJQUFJO1lBQ1gsT0FDQ0ksTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBU08sU0FBUyxFQUFDO1lBQXNCLEdBQ3hDakIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBOEQsYUFBYTtjQUFDQyxTQUFTLEVBQUUxRixLQUFLLEVBQUV1QyxPQUFPLEVBQUV6QixNQUFNO2NBQUVxQixJQUFJLEVBQUMsUUFBUTtjQUFDd0QsU0FBUyxFQUFFSDtZQUFRLEVBQUksQ0FDOUU7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXJFLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBbUQsR0FBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFvSCxNQUFBLEdBQUFwSCxPQUFBO1VBQ0EsSUFBQXFILFFBQUEsR0FBQXJILE9BQUE7VUFFTSxTQUFVc0gsWUFBWUEsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDcEMsT0FDQzVFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNGLEdBQUEsQ0FBQXFFLElBQUksUUFDSjdFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNGLEdBQUEsQ0FBQXNFLFdBQVcsUUFDWDlFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUMrRCxNQUFBLENBQUF2RSxPQUFVO2NBQUNOLElBQUksRUFBRWdGO1lBQUksRUFBSSxDQUNiLEVBQ2Q1RSxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDRixHQUFBLENBQUF1RSxVQUFVLFFBQ1YvRSxNQUFBLENBQUFFLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZ0UsUUFBQSxDQUFBeEUsT0FBbUI7Y0FBQ04sSUFBSSxFQUFFZ0Y7WUFBSSxFQUFJLENBQ3ZCLENBQ1A7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQTVFLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBaUQsV0FBQSxHQUFBakQsT0FBQTtVQUVjLFNBQVUySCxVQUFVQSxDQUFDO1lBQUVwRjtVQUFJLENBQUU7WUFDMUMsT0FDQ0ksTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsa0JBQ0NWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBO2NBQUtPLFNBQVMsRUFBQztZQUF5RCxHQUN2RWpCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLENBQUNKLFdBQUEsQ0FBQVksSUFBSTtjQUFDQyxJQUFJLEVBQUUsdUJBQXVCdkIsSUFBSSxDQUFDRyxFQUFFO1lBQUUsR0FDM0NDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLGFBQUtkLElBQUksQ0FBQ3FGLElBQUksQ0FBTSxDQUNkLENBQ0YsRUFFTmpGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUSxhQUFBLGVBQU9kLElBQUksQ0FBQ21CLFdBQVcsQ0FBUSxDQUN0QjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFmLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBNkgsS0FBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBR00sU0FBVTBHLGlCQUFpQkEsQ0FBQztZQUFFckc7VUFBSyxDQUEyQjtZQUNuRSxPQUNDc0MsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUE7Y0FBU08sU0FBUyxFQUFDO1lBQThCLEdBQ2hEakIsTUFBQSxDQUFBRSxPQUFBLENBQUFRLGFBQUEsQ0FBQzJDLEtBQUEsQ0FBQThCLElBQUk7Y0FDSmxFLFNBQVMsRUFBQywrQ0FBK0M7Y0FDekR4QyxLQUFLLEVBQUVmLEtBQUssQ0FBQ2UsS0FBSztjQUNsQjJHLE9BQU8sRUFBRUYsS0FBQSxDQUFBUDtZQUFZLEVBQ3BCLENBQ087VUFFWiIsImlnbm9yZUxpc3QiOltdfQ==