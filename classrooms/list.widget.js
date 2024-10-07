System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/hooks", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/dropdown", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_10 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Components) {
      dependency_11 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0113ComponentsHooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_14 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_16 = _pragmateUi100Beta6Dropdown;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_18 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/list', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/classrooms/list.widget');
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
        hash: 3551502678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            get state() {
              return {
                ready: this.ready,
                fetching: this.fetching,
                items: this.items,
                totalItems: this.items.length
              };
            }
            constructor() {
              super();
              this.#model = new _classrooms.Classrooms();
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
            async deleteItem(item) {
              await item.delete();
              await this.model.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3362648760,
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

      /******************************
      INTERNAL MODULE: ./views/delete
      ******************************/

      ims.set('./views/delete', {
        hash: 1340823263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteItemModal = DeleteItemModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function DeleteItemModal({
            onClose,
            item,
            texts,
            store
          }) {
            const [, setOpenConfirm] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            const onConfirm = async () => {
              try {
                setFetching(true);
                await store.deleteItem(item);
                onClose();
              } catch (e) {
                setError(texts.delete.errors[e.code.toString()] ?? texts.delete.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("header", {
              className: "modal__header"
            }, _react.default.createElement("h2", null, texts.delete.title)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement("div", {
              className: "modal__content"
            }, _react.default.createElement("p", null, texts.delete.description)), _react.default.createElement("footer", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClose,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              onClick: onConfirm,
              variant: "primary"
            }, texts.actions.confirm)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1218374095,
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
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, texts.actions.register)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 3829175575,
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
                href: `/classrooms/join`
              }, texts.actions.join), _react.default.createElement(_components.Link, {
                href: "/classrooms/management"
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
              href: `/classrooms/join`
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: "community"
            }), texts.actions.join), _react.default.createElement(_dropdown.DropdownItem, {
              href: "/classrooms/management"
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
        hash: 2255715334,
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
          var _delete = require("./delete");
          /*bundle*/
          function View({
            store
          }) {
            const [fetching, setFetching] = (0, _react.useState)(store.fetching || store.state?.fetching);
            const [state, setState] = (0, _react.useState)(store.state);
            const [selectedItem, setSelectedItem] = (0, _react.useState)(null);
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = store;
            const toggleOpen = () => {
              if (open) setSelectedItem(null);
              setOpen(!open);
              setSelectedItem(null);
            };
            (0, _hooks.useBinder)([store], () => setState(store.state));
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              fetching,
              selectedItem,
              setSelectedItem,
              ...state
            }), [texts, store, fetching, selectedItem, state]);
            if (!state.ready) return _react.default.createElement(_ui.PageLoader, {
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
            }))), selectedItem && _react.default.createElement(_delete.DeleteItemModal, {
              item: selectedItem,
              store: store,
              texts: texts,
              onClose: toggleOpen
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3710485703,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = Organization;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _context = require("../context");
          function Organization({
            data
          }) {
            const {
              setSelectedItem
            } = (0, _context.useModuleContext)();
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              setSelectedItem(data);
            };
            return _react.default.createElement(_components.Link, {
              href: `/classrooms/view/${data.id}`
            }, _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("h3", null, data.name)), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_icons2.IconButton, {
              icon: "delete",
              onClick: onClick,
              className: "circle"
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jbGFzc3Jvb21zIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJpdGVtcyIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5Iiwic3RhdGUiLCJmZXRjaGluZyIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwib25Db25maXJtIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYWN0aW9ucyIsImNhbmNlbCIsImNvbmZpcm0iLCJQcm9jZXNzQ29udGFpbmVyIiwiX2NvbnRleHQiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiTGluayIsImhyZWYiLCJyZWdpc3RlciIsIl9ob29rcyIsIl9pY29ucyIsIl9pY29uczIiLCJfZHJvcGRvd24iLCJIZWFkZXJNZW51Iiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJqb2luIiwiSWNvbiIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJJY29uQnV0dG9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQXBwSWNvbiIsIl9saXN0IiwiX2hlYWRlck1lbnUiLCJfZGVsZXRlIiwic2V0U3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJ1c2VCaW5kZXIiLCJ1c2VNZW1vIiwiUGFnZUxvYWRlciIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwibmFtZSIsIl9pdGVtIiwiX2VtcHR5IiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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