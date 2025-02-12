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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 2184653884,
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
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
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
        hash: 2485190801,
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
              control: _moduleCard.ClassroomCard,
              specs: {
                texts: store.globalTexts
              },
              texts: store.globalTexts
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX21vZGVsIiwiX2NsYXNzcm9vbXMiLCJfYmV5b25kX2NvbnRleHQiLCJfdGV4dHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwibW9kZWwiLCJnbG9iYWxUZXh0cyIsInZhbHVlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsInN0YXRlIiwiZmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb21zIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpdGVtIiwiZGVsZXRlSXRlbSIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJvbkNvbmZpcm0iLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY29uZmlybSIsIlByb2Nlc3NDb250YWluZXIiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2RlbGV0ZSIsIl9oZWFkZXJNZW51IiwiX2xpc3QiLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsInVzZUJpbmRlciIsInVzZU1lbW8iLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJPcmdhbml6YXRpb25zTGlzdCIsIl9lbXB0eSIsIl9tb2R1bGVDYXJkIiwiTGlzdCIsImNvbnRyb2wiLCJDbGFzc3Jvb21DYXJkIiwic3BlY3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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