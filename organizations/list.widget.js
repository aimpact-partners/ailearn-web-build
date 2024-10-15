System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/hooks", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/dropdown", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsWidgets110Controller) {
      dependency_5 = _beyondJsWidgets110Controller;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_7 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_10 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp0113ComponentsHooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_13 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_15 = _pragmateUi100Beta6Dropdown;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_17 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6List) {
      dependency_18 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/entities/organizations', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/list', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/organizations/list.widget');
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
        hash: 3866018187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
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
              this.#model = new _organizations.Organizations();
              this.model.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                globalThis.store = this;
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
        hash: 3256945616,
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

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 3268937514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderMenu = HeaderMenu;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          function HeaderMenu({
            store: {
              texts
            }
          }) {
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'sm' || size === 'lg') {
              return _react.default.createElement("div", {
                className: "page-title__actions"
              }, _react.default.createElement(_components.Link, {
                href: `/organizations/join`
              }, texts.actions.join), _react.default.createElement(_components.Link, {
                href: "/organizations/management"
              }, _react.default.createElement(_icons.Icon, {
                icon: "add-circle"
              }), texts.actions.register));
            }
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "mobile-header-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "mobile-header-menu__toggle"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "moreVert"
            })), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_dropdown.DropdownItem, {
              href: `/organizations/join`
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: "community"
            }), texts.actions.join), _react.default.createElement(_dropdown.DropdownItem, {
              href: "/organizations/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.register)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1109157603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("./list");
          var _headerMenu = require("./header-menu");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              fetching
            }), [texts, store, fetching]);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_headerMenu.HeaderMenu, {
              store: store
            })), _react.default.createElement(_list.OrganizationsList, {
              store: store
            }))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/item/confirm-action
      *******************************************/

      ims.set('./views/item/confirm-action', {
        hash: 3004247769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ConfirmAction({
            icon,
            callback,
            title,
            description
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/i18n.txt');
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            // const actions = {
            // 	confirm: {
            // 		variant: 'primary',
            // 		label: texts.actions.confirm
            // 	},
            // 	cancel: { label: texts.actions.cancel, variant: 'primary', bordered: true }
            // };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: onClickButton
            }), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 4143250570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = Organization;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          function Organization({
            data
          }) {
            return _react.default.createElement(_components.Link, {
              href: `/organizations/view/${data.id}`
            }, _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "institution"
            }), _react.default.createElement("h3", null, data.name)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3902479519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationsList = OrganizationsList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _empty = require("./empty");
          function OrganizationsList({
            store
          }) {
            if (store.items.length < 1) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list__items",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9vcmdhbml6YXRpb25zIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJpdGVtcyIsIm1vZGVsIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJnbG9iYWxUaGlzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsIml0ZW0iLCJ0b2dnbGVJdGVtIiwiaGFzIiwiaWQiLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJyZWdpc3RlciIsIl9ob29rcyIsIl9pY29ucyIsIl9pY29uczIiLCJfZHJvcGRvd24iLCJIZWFkZXJNZW51Iiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJqb2luIiwiSWNvbiIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJJY29uQnV0dG9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQXBwSWNvbiIsIl9saXN0IiwiX2hlYWRlck1lbnUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJ1c2VNZW1vIiwiUGFnZUxvYWRlciIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJvcGVuIiwic2V0T3BlbiIsInVzZVRleHRzIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkFwcEljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwibmFtZSIsIl9pdGVtIiwiX2VtcHR5IiwibGVuZ3RoIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXItbWVudS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFG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