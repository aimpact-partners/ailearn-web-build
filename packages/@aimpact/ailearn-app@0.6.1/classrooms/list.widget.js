System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/components/icons", "pragmate-ui@1.0.8/dropdown", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.6.1/components/module-card", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_5 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_8 = _pragmateUi108Modal;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_10 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_11 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Icons) {
      dependency_12 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_pragmateUi108Dropdown) {
      dependency_14 = _pragmateUi108Dropdown;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_15 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp061ComponentsModuleCard;
    }, function (_pragmateUi108List) {
      dependency_17 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/classrooms/list.widget');
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
        hash: 4037546233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.ListStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classrooms);
            }
            async load() {
              await super.load();
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.classrooms]]
              });
            }
            async delete(item) {
              await item.delete();
            }
            async deleteItem(item) {
              await item.delete();
              await this.model?.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4178569911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/delete
      ******************************/

      ims.set('./views/delete', {
        hash: 710116189,
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
            const texts = store.globalTexts;
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
        hash: 1902260436,
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
              store
            } = (0, _context.useModuleContext)();
            const texts = store.globalTexts;
            const textsActions = store.globalTexts.actions;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, textsActions.register)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 2073037483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderMenu = HeaderMenu;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          function HeaderMenu({
            store
          }) {
            const {
              globalTexts,
              isTeacher
            } = store;
            const texts = globalTexts;
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'sm' || size === 'lg') {
              return _react.default.createElement("div", {
                className: "page-title__actions"
              }, _react.default.createElement(_components.Link, {
                href: `/classrooms/join`
              }, texts.actions.join), isTeacher && _react.default.createElement(_components.Link, {
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
            }), texts.actions.join), isTeacher && _react.default.createElement(_dropdown.DropdownItem, {
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
        hash: 1219128125,
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
            const [selectedItem, setSelectedItem] = (0, _react.useState)(null);
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = store;
            (0, _hooks.useStore)(store);
            const toggleOpen = () => {
              if (open) setSelectedItem(null);
              setOpen(!open);
              setSelectedItem(null);
            };
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              selectedItem,
              setSelectedItem,
              ...store.state
            }), [texts, store.state, selectedItem]);
            if (!store.state.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: `${texts.title}`
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
        hash: 2805803972,
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
            const {
              store,
              setSelectedItem
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store, ['items.changed']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX2Jhc2UiLCJfY2xhc3Nyb29tcyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIkNsYXNzcm9vbXMiLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJtb2RlbCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yZWFjdCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ0ZXh0cyIsIm9uQ29uZmlybSIsImUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY29uZmlybSIsIlByb2Nlc3NDb250YWluZXIiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzQWN0aW9ucyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJpc1RlYWNoZXIiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2RlbGV0ZSIsIl9oZWFkZXJNZW51IiwiX2xpc3QiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0b3JlIiwidG9nZ2xlT3BlbiIsInZhbHVlIiwidXNlTWVtbyIsInN0YXRlIiwicmVhZHkiLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJDbGFzc3Jvb21MaXN0IiwiX21vZHVsZUNhcmQiLCJfZW1wdHkiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJpdGVtcyIsImxlbmd0aCIsIkl0ZW0iLCJwcm9wcyIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiQ2xhc3Nyb29tQ2FyZCIsImtleSIsImlkIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9kZWxldGUudHN4IiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDSSxJQUFJLEVBQUU7WUFDbkI7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1QsTUFBQSxDQUFBVSxJQUFJO1lBQ1o7WUFDQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQVcsV0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsS0FBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLFdBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsZUFBQSxHQUFBakIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVEsS0FBQSxDQUFBRyxnQkFBNEI7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUNGLGVBQUEsQ0FBQUcsTUFBTSxDQUFDQyxTQUFTLEVBQUVMLFdBQUEsQ0FBQU0sVUFBVSxDQUFDO1lBQ3BDO1lBRUEsTUFBTWIsSUFBSUEsQ0FBQTtjQUNULE1BQU0sS0FBSyxDQUFDQSxJQUFJLEVBQUU7Y0FFbEJLLFdBQUEsQ0FBQVMsWUFBWSxDQUFDQyxHQUFHLENBQUM7Z0JBQ2hCQyxPQUFPLEVBQUUsS0FBSztnQkFDZEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUM7ZUFDbkQsQ0FBQztZQUNIO1lBRUEsTUFBTUMsTUFBTUEsQ0FBQ0MsSUFBSTtjQUNoQixNQUFNQSxJQUFJLENBQUNELE1BQU0sRUFBRTtZQUNwQjtZQUVBLE1BQU1FLFVBQVVBLENBQUNELElBQUk7Y0FDcEIsTUFBTUEsSUFBSSxDQUFDRCxNQUFNLEVBQUU7Y0FDbkIsTUFBTSxJQUFJLENBQUNHLEtBQUssRUFBRXhCLElBQUksRUFBRTtZQUN6Qjs7VUFDQUksT0FBQSxDQUFBTixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUEyQixLQUFBLEdBQUFsQyxPQUFBO1VBUU8sTUFBTW1DLGFBQWEsR0FBQXRCLE9BQUEsQ0FBQXNCLGFBQUEsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0gsYUFBYSxDQUFDO1VBQUN0QixPQUFBLENBQUF3QixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUdEUsSUFBQUUsTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUF3QyxNQUFBLEdBQUF4QyxPQUFBO1VBQ0EsSUFBQXlDLFdBQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBMEMsR0FBQSxHQUFBMUMsT0FBQTtVQVNNLFNBQVUyQyxlQUFlQSxDQUFDO1lBQUVDLE9BQU87WUFBRWIsSUFBSTtZQUFFMUI7VUFBSyxDQUFVO1lBQy9ELE1BQU0sR0FBR3dDLGNBQWMsQ0FBQyxHQUFHTixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNoRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdWLE1BQUEsQ0FBQU8sT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0csS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1osTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUMsTUFBTUssS0FBSyxHQUFHL0MsS0FBSyxDQUFDc0IsV0FBVztZQUUvQixNQUFNMEIsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNISixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNNUMsS0FBSyxDQUFDMkIsVUFBVSxDQUFDRCxJQUFJLENBQUM7Z0JBQzVCYSxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU9VLENBQUMsRUFBRTtnQkFDWEgsUUFBUSxDQUFDQyxLQUFLLENBQUN0QixNQUFNLENBQUN5QixNQUFNLENBQUNELENBQUMsQ0FBQ0UsSUFBSSxFQUFFQyxRQUFRLEVBQUUsQ0FBQyxJQUFJTCxLQUFLLENBQUN0QixNQUFNLENBQUN5QixNQUFNLENBQUNULE9BQU8sQ0FBQztlQUNoRixTQUFTO2dCQUNURyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ1YsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ25ELElBQUk7Y0FBQ29DLE9BQU8sRUFBRUE7WUFBTyxHQUMzQkwsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWUsR0FDaENyQixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxhQUFLTixLQUFLLENBQUN0QixNQUFNLENBQUMrQixLQUFLLENBQU0sQ0FDckIsRUFDVHRCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNoQixHQUFBLENBQUFvQixhQUFhO2NBQUNaLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CWCxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJyQixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxZQUFJTixLQUFLLENBQUN0QixNQUFNLENBQUNpQyxXQUFXLENBQUssQ0FDNUIsRUFDTnhCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFnQixHQUNqQ3JCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNqQixXQUFBLENBQUF1QixNQUFNO2NBQUNDLE9BQU8sRUFBRXJCLE9BQU87Y0FBRXNCLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7WUFBQSxHQUNsRGYsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDQyxNQUFNLENBQ2IsRUFDVDlCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNqQixXQUFBLENBQUF1QixNQUFNO2NBQUNDLE9BQU8sRUFBRVosU0FBUztjQUFFYSxPQUFPLEVBQUM7WUFBUyxHQUMzQ2QsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDRSxPQUFPLENBQ2QsQ0FDRCxFQUNUL0IsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2hCLEdBQUEsQ0FBQTZCLGdCQUFnQjtjQUFDdkIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQVQsTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUF5QyxXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMEMsR0FBQSxHQUFBMUMsT0FBQTtVQUVNLFNBQVV5RSxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRXBFO1lBQUssQ0FBRSxHQUFHLElBQUFtRSxRQUFBLENBQUFuQyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNZSxLQUFLLEdBQUcvQyxLQUFLLENBQUNzQixXQUFXO1lBQy9CLE1BQU0rQyxZQUFZLEdBQUdyRSxLQUFLLENBQUNzQixXQUFXLENBQUN5QyxPQUFPO1lBQzlDLE9BQ0M3QixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDaEIsR0FBQSxDQUFBaUMsU0FBUztjQUFDQyxJQUFJLEVBQUV4QixLQUFLLENBQUN5QixLQUFLLENBQUNoQixLQUFLO2NBQUVFLFdBQVcsRUFBRVgsS0FBSyxDQUFDeUIsS0FBSyxDQUFDZCxXQUFXO2NBQUVlLElBQUksRUFBQztZQUFNLEdBQ3BGdkMsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9DLEdBQ2xEckIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQXNDLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHdCQUF3QjtjQUFDcEIsU0FBUyxFQUFDO1lBQXNCLEdBQ2xFYyxZQUFZLENBQUNPLFFBQVEsQ0FDaEIsQ0FDRixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUExQyxNQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQWtGLE1BQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBeUMsV0FBQSxHQUFBekMsT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLE9BQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBcUYsU0FBQSxHQUFBckYsT0FBQTtVQUVNLFNBQVVzRixVQUFVQSxDQUFDO1lBQUVqRjtVQUFLLENBQUU7WUFDbkMsTUFBTTtjQUFFc0IsV0FBVztjQUFFNEQ7WUFBUyxDQUFFLEdBQUdsRixLQUFLO1lBQ3hDLE1BQU0rQyxLQUFLLEdBQUd6QixXQUFXO1lBQ3pCLE1BQU02RCxJQUFJLEdBQUcsSUFBQU4sTUFBQSxDQUFBTyxhQUFhLEdBQUU7WUFFNUIsSUFBSUQsSUFBSSxLQUFLLElBQUksSUFBSUEsSUFBSSxLQUFLLElBQUksSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRTtjQUNwRCxPQUNDakQsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUE7Z0JBQUtFLFNBQVMsRUFBQztjQUFxQixHQUNuQ3JCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNqQixXQUFBLENBQUFzQyxJQUFJO2dCQUFDQyxJQUFJLEVBQUU7Y0FBa0IsR0FBRzVCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ3NCLElBQUksQ0FBUSxFQUMxREgsU0FBUyxJQUNUaEQsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQXNDLElBQUk7Z0JBQUNDLElBQUksRUFBQztjQUF3QixHQUNsQ3pDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUN5QixNQUFBLENBQUFRLElBQUk7Z0JBQUNiLElBQUksRUFBQztjQUFZLEVBQUcsRUFDekIxQixLQUFLLENBQUNnQixPQUFPLENBQUNhLFFBQVEsQ0FFeEIsQ0FDSTs7WUFJUixPQUNDMUMsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzJCLFNBQUEsQ0FBQU8sUUFBUTtjQUFDaEMsU0FBUyxFQUFDO1lBQW9CLEdBQ3ZDckIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzJCLFNBQUEsQ0FBQVEsY0FBYztjQUFDakMsU0FBUyxFQUFDO1lBQTRCLEdBQ3JEckIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ3lCLE1BQUEsQ0FBQVcsVUFBVTtjQUFDaEIsSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUNkLEVBQ2pCdkMsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzJCLFNBQUEsQ0FBQVUsWUFBWSxRQUNaeEQsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzJCLFNBQUEsQ0FBQVcsWUFBWTtjQUFDaEIsSUFBSSxFQUFFO1lBQWtCLEdBQ3JDekMsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzBCLE9BQUEsQ0FBQWEsT0FBTztjQUFDbkIsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUMzQjFCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ3NCLElBQUksQ0FDTCxFQUNkSCxTQUFTLElBQ1RoRCxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDMkIsU0FBQSxDQUFBVyxZQUFZO2NBQUNoQixJQUFJLEVBQUM7WUFBd0IsR0FDMUN6QyxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDeUIsTUFBQSxDQUFBUSxJQUFJO2NBQUNiLElBQUksRUFBQztZQUFZLEVBQUcsRUFDekIxQixLQUFLLENBQUNnQixPQUFPLENBQUNhLFFBQVEsQ0FFeEIsQ0FDYSxDQUNMO1VBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUF2QyxHQUFBLEdBQUExQyxPQUFBO1VBQ0EsSUFBQWtGLE1BQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBdUMsTUFBQSxHQUFBdkMsT0FBQTtVQUVBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWtHLE9BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsV0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFvRyxLQUFBLEdBQUFwRyxPQUFBO1VBRU87VUFBVSxTQUNSVyxJQUFJQSxDQUFDO1lBQUVOO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDZ0csWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRyxJQUFBL0QsTUFBQSxDQUFBUSxRQUFRLEVBQU0sSUFBSSxDQUFDO1lBQzNELE1BQU0sQ0FBQ3dELElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdqRSxNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNO2NBQUVLO1lBQUssQ0FBRSxHQUFHL0MsS0FBSztZQUV2QixJQUFBNkUsTUFBQSxDQUFBdUIsUUFBUSxFQUFDcEcsS0FBSyxDQUFDO1lBRWYsTUFBTXFHLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLElBQUlILElBQUksRUFBRUQsZUFBZSxDQUFDLElBQUksQ0FBQztjQUMvQkUsT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztjQUNkRCxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNSyxLQUFLLEdBQUdwRSxNQUFBLENBQUFPLE9BQUssQ0FBQzhELE9BQU8sQ0FDMUIsT0FBTztjQUNOeEQsS0FBSztjQUNML0MsS0FBSztjQUNMZ0csWUFBWTtjQUNaQyxlQUFlO2NBQ2YsR0FBR2pHLEtBQUssQ0FBQ3dHO2FBQ1QsQ0FBQyxFQUNGLENBQUN6RCxLQUFLLEVBQUUvQyxLQUFLLENBQUN3RyxLQUFLLEVBQUVSLFlBQVksQ0FBQyxDQUNsQztZQUNELElBQUksQ0FBQ2hHLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLE9BQU92RSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDaEIsR0FBQSxDQUFBcUUsVUFBVTtjQUFDL0QsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUU3RCxPQUNDVCxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFBbkIsTUFBQSxDQUFBTyxPQUFBLENBQUFrRSxRQUFBLFFBQ0N6RSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDYyxRQUFBLENBQUFyQyxhQUFhLENBQUM4RSxRQUFRO2NBQUNOLEtBQUssRUFBRUE7WUFBSyxHQUNuQ3BFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNoQixHQUFBLENBQUF3RSxhQUFhLFFBQ2IzRSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDaEIsR0FBQSxDQUFBeUUsU0FBUztjQUFDdEQsS0FBSyxFQUFFLEdBQUdULEtBQUssQ0FBQ1MsS0FBSztZQUFFLEdBQ2pDdEIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ3lDLFdBQUEsQ0FBQWIsVUFBVTtjQUFDakYsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDakIsRUFDWmtDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMwQyxLQUFBLENBQUFnQixhQUFhLE9BQUcsQ0FDRixDQUNRLEVBQ3hCZixZQUFZLElBQUk5RCxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDd0MsT0FBQSxDQUFBdkQsZUFBZTtjQUFDWixJQUFJLEVBQUVzRSxZQUFZO2NBQUVoRyxLQUFLLEVBQUVBLEtBQUs7Y0FBRStDLEtBQUssRUFBRUEsS0FBSztjQUFFUixPQUFPLEVBQUU4RDtZQUFVLEVBQUksQ0FDdkc7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQW5FLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBcUgsV0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW9HLEtBQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFzSCxNQUFBLEdBQUF0SCxPQUFBO1VBRU0sU0FBVW9ILGFBQWFBLENBQUE7WUFDNUIsTUFBTSxDQUFDRyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqRixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNO2NBQUUxQyxLQUFLO2NBQUVpRztZQUFlLENBQUUsR0FBRyxJQUFBOUIsUUFBQSxDQUFBbkMsZ0JBQWdCLEdBQUU7WUFFckQsSUFBQTZDLE1BQUEsQ0FBQXVCLFFBQVEsRUFBQ3BHLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRWxDLElBQUlBLEtBQUssQ0FBQ29ILEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPbkYsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQTdDLFNBQVMsT0FBRztZQUVoRCxNQUFNa0QsSUFBSSxHQUFHQSxDQUFDO2NBQUU1RixJQUFJO2NBQUUsR0FBRzZGO1lBQUssQ0FBRSxLQUFJO2NBQ25DLE1BQU14RCxPQUFPLEdBQUc7Z0JBQ2Z0QyxNQUFNLEVBQUUrRixLQUFLLElBQUc7a0JBQ2ZBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2tCQUN2QnhCLGVBQWUsQ0FBQ3ZFLElBQUksQ0FBQztnQkFDdEI7ZUFDQTtjQUVELE9BQU9RLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMyRCxXQUFBLENBQUFVLGFBQWE7Z0JBQUNDLEdBQUcsRUFBRWpHLElBQUksQ0FBQ2tHLEVBQUU7Z0JBQUVsRyxJQUFJLEVBQUVBLElBQUk7Z0JBQUVxQyxPQUFPLEVBQUVBLE9BQU87Z0JBQUVoQixLQUFLLEVBQUUvQyxLQUFLLENBQUNzQjtjQUFXLEVBQUk7WUFDL0YsQ0FBQztZQUVELE9BQ0NZLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUFuQixNQUFBLENBQUFPLE9BQUEsQ0FBQWtFLFFBQUEsUUFDQ3pFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE4QixHQUNoRHJCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMwQyxLQUFBLENBQUE4QixJQUFJO2NBQUN0RSxTQUFTLEVBQUMsYUFBYTtjQUFDNkQsS0FBSyxFQUFFcEgsS0FBSyxDQUFDb0gsS0FBSztjQUFFVSxPQUFPLEVBQUVSO1lBQUksRUFBSSxDQUMxRCxDQUNSO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=