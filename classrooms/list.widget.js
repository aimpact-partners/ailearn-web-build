System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/widgets@1.1.1/controller", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsWidgets111Controller) {
      dependency_5 = _beyondJsWidgets111Controller;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_16 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_18 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_19 = _aimpactAilearnApp031ComponentsModuleCard;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/components/module-card', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/classrooms/list.widget');
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
        hash: 81874218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 3896645082,
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
                setError(texts.delete.errors[e.code?.toString()] ?? texts.delete.errors.default);
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
        hash: 1589163414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
          var _delete = require("./delete");
          var _headerMenu = require("./header-menu");
          var _list = require("./list");
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

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2036038623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationsList = OrganizationsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _empty = require("./empty");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          function OrganizationsList({
            store
          }) {
            if (store.items.length < 1) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list__items",
              items: store.items,
              control: _moduleCard.ClassroomCard
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jbGFzc3Jvb21zIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJpdGVtcyIsIm1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5Iiwic3RhdGUiLCJmZXRjaGluZyIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwib25Db25maXJtIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYWN0aW9ucyIsImNhbmNlbCIsImNvbmZpcm0iLCJQcm9jZXNzQ29udGFpbmVyIiwiX2NvbnRleHQiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiTGluayIsImhyZWYiLCJyZWdpc3RlciIsIl9ob29rcyIsIl9pY29ucyIsIl9pY29uczIiLCJfZHJvcGRvd24iLCJIZWFkZXJNZW51Iiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJqb2luIiwiSWNvbiIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJJY29uQnV0dG9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQXBwSWNvbiIsIl9kZWxldGUiLCJfaGVhZGVyTWVudSIsIl9saXN0Iiwic2V0U3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJ1c2VCaW5kZXIiLCJ1c2VNZW1vIiwiUGFnZUxvYWRlciIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiT3JnYW5pemF0aW9uc0xpc3QiLCJfZW1wdHkiLCJfbW9kdWxlQ2FyZCIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tQ2FyZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVsZXRlLnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFB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