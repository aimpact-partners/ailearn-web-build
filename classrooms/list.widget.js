System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.29/main-layout.widget", "@beyond-js/widgets@1.1.1/controller", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.29/components/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.29/components/module-card", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp0329MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0329MainLayoutWidget;
    }, function (_beyondJsWidgets111Controller) {
      dependency_5 = _beyondJsWidgets111Controller;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0329ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_16 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_17 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0329ComponentsModuleCard) {
      dependency_18 = _aimpactAilearnApp0329ComponentsModuleCard;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/ailearn-app/components/module-card', dependency_18], ['pragmate-ui/list', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.29/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/classrooms/list.widget');
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
        hash: 1053286702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
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
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#globalTexts.on('change', this.triggerEvent);
              this.model.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                _mainLayout.LayoutBroker.set({
                  overlay: false,
                  breadcrumb: [[this.globalTexts.entities.classrooms]]
                });
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
        hash: 3437555610,
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
            store
          }) {
            const [, setOpenConfirm] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            const texts = store.texts;
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
        hash: 376394056,
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
            })), _react.default.createElement(_list.ClassroomList, null))), selectedItem && _react.default.createElement(_delete.DeleteItemModal, {
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
        hash: 2415622617,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomList = ClassroomList;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          var _empty = require("./empty");
          function ClassroomList() {
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [update, setUpdate] = _react.default.useState({});
            const {
              store,
              setSelectedItem
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {
              setUpdate({});
            }, 'items.changed');
            if (store.items.length < 1) return _react.default.createElement(_empty.EmptyList, null);
            const Item = ({
              item,
              ...props
            }) => {
              const actions = {
                delete: event => {
                  event.stopPropagation();
                  setSelectedItem(item);
                }
              };
              return _react.default.createElement(_moduleCard.ClassroomCard, {
                key: item.id,
                item: item,
                actions: actions,
                texts: store.globalTexts
              });
            };
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list__items",
              items: store.items,
              control: Item
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX21vZGVsIiwiX2NsYXNzcm9vbXMiLCJfYmV5b25kX2NvbnRleHQiLCJfdGV4dHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwibW9kZWwiLCJnbG9iYWxUZXh0cyIsInZhbHVlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsInN0YXRlIiwiZmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpdGVtIiwiZGVsZXRlSXRlbSIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJvbkNvbmZpcm0iLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY29uZmlybSIsIlByb2Nlc3NDb250YWluZXIiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2RlbGV0ZSIsIl9oZWFkZXJNZW51IiwiX2xpc3QiLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsInVzZUJpbmRlciIsInVzZU1lbW8iLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJDbGFzc3Jvb21MaXN0IiwiX21vZHVsZUNhcmQiLCJfZW1wdHkiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJJdGVtIiwicHJvcHMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkNsYXNzcm9vbUNhcmQiLCJrZXkiLCJpZCIsInRvZ2dsZU1vZGFsIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUNJLElBQUksRUFBRTtZQUNuQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPVCxNQUFBLENBQUFVLElBQUk7WUFDWjtZQUNBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRCxJQUFBVyxXQUFBLEdBQUFkLE9BQUE7VUFFQSxJQUFBZSxNQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixlQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFRLE1BQUEsQ0FBQUksYUFBMkI7WUFDNURDLE9BQU87WUFDUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUs7WUFDeEI7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