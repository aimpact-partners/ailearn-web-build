System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/components/icons", "pragmate-ui@1.0.8/dropdown", "@aimpact/ailearn-app@0.6.1/components/module-card", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
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
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp061ComponentsModuleCard;
    }, function (_pragmateUi108List) {
      dependency_16 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['pragmate-ui/list', dependency_16]]);
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
        hash: 2653245694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 393658499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomList = ClassroomList;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX2Jhc2UiLCJfY2xhc3Nyb29tcyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIkNsYXNzcm9vbXMiLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJtb2RlbCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yZWFjdCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ0ZXh0cyIsIm9uQ29uZmlybSIsImUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY29uZmlybSIsIlByb2Nlc3NDb250YWluZXIiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzQWN0aW9ucyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJpc1RlYWNoZXIiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2RlbGV0ZSIsIl9oZWFkZXJNZW51IiwiX2xpc3QiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0b3JlIiwidG9nZ2xlT3BlbiIsInZhbHVlIiwidXNlTWVtbyIsInN0YXRlIiwicmVhZHkiLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJDbGFzc3Jvb21MaXN0IiwiX21vZHVsZUNhcmQiLCJfZW1wdHkiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJpdGVtcyIsImxlbmd0aCIsIkl0ZW0iLCJwcm9wcyIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiQ2xhc3Nyb29tQ2FyZCIsImtleSIsImlkIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9kZWxldGUudHN4IiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksSUFBSSxFQUFFO1lBQ25CO1lBQ0EsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ULE1BQUEsQ0FBQVUsSUFBSTtZQUNaO1lBQ0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJELElBQUFXLFdBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLGVBQUEsR0FBQWpCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFRLEtBQUEsQ0FBQUcsZ0JBQTRCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDRixlQUFBLENBQUFHLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFTCxXQUFBLENBQUFNLFVBQVUsQ0FBQztZQUNwQztZQUVBLE1BQU1iLElBQUlBLENBQUE7Y0FDVCxNQUFNLEtBQUssQ0FBQ0EsSUFBSSxFQUFFO2NBRWxCSyxXQUFBLENBQUFTLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO2dCQUNoQkMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO2VBQ25ELENBQUM7WUFDSDtZQUVBLE1BQU1DLE1BQU1BLENBQUNDLElBQUk7Y0FDaEIsTUFBTUEsSUFBSSxDQUFDRCxNQUFNLEVBQUU7WUFDcEI7WUFFQSxNQUFNRSxVQUFVQSxDQUFDRCxJQUFJO2NBQ3BCLE1BQU1BLElBQUksQ0FBQ0QsTUFBTSxFQUFFO2NBQ25CLE1BQU0sSUFBSSxDQUFDRyxLQUFLLEVBQUV4QixJQUFJLEVBQUU7WUFDekI7O1VBQ0FJLE9BQUEsQ0FBQU4sWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBMkIsS0FBQSxHQUFBbEMsT0FBQTtVQVFPLE1BQU1tQyxhQUFhLEdBQUF0QixPQUFBLENBQUFzQixhQUFBLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUNILGFBQWEsQ0FBQztVQUFDdEIsT0FBQSxDQUFBd0IsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHRFLElBQUFFLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBd0MsTUFBQSxHQUFBeEMsT0FBQTtVQUNBLElBQUF5QyxXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQTBDLEdBQUEsR0FBQTFDLE9BQUE7VUFTTSxTQUFVMkMsZUFBZUEsQ0FBQztZQUFFQyxPQUFPO1lBQUViLElBQUk7WUFBRTFCO1VBQUssQ0FBVTtZQUMvRCxNQUFNLEdBQUd3QyxjQUFjLENBQUMsR0FBR04sTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDaEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHVixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNHLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdaLE1BQUEsQ0FBQU8sT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU1LLEtBQUssR0FBRy9DLEtBQUssQ0FBQ3NCLFdBQVc7WUFFL0IsTUFBTTBCLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSEosV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTVDLEtBQUssQ0FBQzJCLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDO2dCQUM1QmEsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPVSxDQUFDLEVBQUU7Z0JBQ1hILFFBQVEsQ0FBQ0MsS0FBSyxDQUFDdEIsTUFBTSxDQUFDeUIsTUFBTSxDQUFDRCxDQUFDLENBQUNFLElBQUksRUFBRUMsUUFBUSxFQUFFLENBQUMsSUFBSUwsS0FBSyxDQUFDdEIsTUFBTSxDQUFDeUIsTUFBTSxDQUFDVCxPQUFPLENBQUM7ZUFDaEYsU0FBUztnQkFDVEcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE9BQ0NWLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNsQixNQUFBLENBQUFtQixLQUFLO2NBQUNuRCxJQUFJO2NBQUNvQyxPQUFPLEVBQUVBO1lBQU8sR0FDM0JMLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFlLEdBQ2hDckIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsYUFBS04sS0FBSyxDQUFDdEIsTUFBTSxDQUFDK0IsS0FBSyxDQUFNLENBQ3JCLEVBQ1R0QixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDaEIsR0FBQSxDQUFBb0IsYUFBYTtjQUFDWixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUMvQlgsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCckIsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsWUFBSU4sS0FBSyxDQUFDdEIsTUFBTSxDQUFDaUMsV0FBVyxDQUFLLENBQzVCLEVBQ054QixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBZ0IsR0FDakNyQixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDakIsV0FBQSxDQUFBdUIsTUFBTTtjQUFDQyxPQUFPLEVBQUVyQixPQUFPO2NBQUVzQixPQUFPLEVBQUMsU0FBUztjQUFDQyxRQUFRO1lBQUEsR0FDbERmLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUNiLEVBQ1Q5QixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDakIsV0FBQSxDQUFBdUIsTUFBTTtjQUFDQyxPQUFPLEVBQUVaLFNBQVM7Y0FBRWEsT0FBTyxFQUFDO1lBQVMsR0FDM0NkLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ0UsT0FBTyxDQUNkLENBQ0QsRUFDVC9CLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNoQixHQUFBLENBQUE2QixnQkFBZ0I7Y0FBQ3ZCLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFULE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBeUMsV0FBQSxHQUFBekMsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQTBDLEdBQUEsR0FBQTFDLE9BQUE7VUFFTSxTQUFVeUUsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVwRTtZQUFLLENBQUUsR0FBRyxJQUFBbUUsUUFBQSxDQUFBbkMsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTWUsS0FBSyxHQUFHL0MsS0FBSyxDQUFDc0IsV0FBVztZQUMvQixNQUFNK0MsWUFBWSxHQUFHckUsS0FBSyxDQUFDc0IsV0FBVyxDQUFDeUMsT0FBTztZQUM5QyxPQUNDN0IsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2hCLEdBQUEsQ0FBQWlDLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFeEIsS0FBSyxDQUFDeUIsS0FBSyxDQUFDaEIsS0FBSztjQUFFRSxXQUFXLEVBQUVYLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2QsV0FBVztjQUFFZSxJQUFJLEVBQUM7WUFBTSxHQUNwRnZDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFvQyxHQUNsRHJCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNqQixXQUFBLENBQUFzQyxJQUFJO2NBQUNDLElBQUksRUFBQyx3QkFBd0I7Y0FBQ3BCLFNBQVMsRUFBQztZQUFzQixHQUNsRWMsWUFBWSxDQUFDTyxRQUFRLENBQ2hCLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBMUMsTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXlDLFdBQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixPQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXFGLFNBQUEsR0FBQXJGLE9BQUE7VUFFTSxTQUFVc0YsVUFBVUEsQ0FBQztZQUFFakY7VUFBSyxDQUFFO1lBQ25DLE1BQU07Y0FBRXNCLFdBQVc7Y0FBRTREO1lBQVMsQ0FBRSxHQUFHbEYsS0FBSztZQUN4QyxNQUFNK0MsS0FBSyxHQUFHekIsV0FBVztZQUN6QixNQUFNNkQsSUFBSSxHQUFHLElBQUFOLE1BQUEsQ0FBQU8sYUFBYSxHQUFFO1lBRTVCLElBQUlELElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUU7Y0FDcEQsT0FDQ2pELE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBO2dCQUFLRSxTQUFTLEVBQUM7Y0FBcUIsR0FDbkNyQixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDakIsV0FBQSxDQUFBc0MsSUFBSTtnQkFBQ0MsSUFBSSxFQUFFO2NBQWtCLEdBQUc1QixLQUFLLENBQUNnQixPQUFPLENBQUNzQixJQUFJLENBQVEsRUFDMURILFNBQVMsSUFDVGhELE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUNqQixXQUFBLENBQUFzQyxJQUFJO2dCQUFDQyxJQUFJLEVBQUM7Y0FBd0IsR0FDbEN6QyxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDeUIsTUFBQSxDQUFBUSxJQUFJO2dCQUFDYixJQUFJLEVBQUM7Y0FBWSxFQUFHLEVBQ3pCMUIsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDYSxRQUFRLENBRXhCLENBQ0k7O1lBSVIsT0FDQzFDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMyQixTQUFBLENBQUFPLFFBQVE7Y0FBQ2hDLFNBQVMsRUFBQztZQUFvQixHQUN2Q3JCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMyQixTQUFBLENBQUFRLGNBQWM7Y0FBQ2pDLFNBQVMsRUFBQztZQUE0QixHQUNyRHJCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUN5QixNQUFBLENBQUFXLFVBQVU7Y0FBQ2hCLElBQUksRUFBQztZQUFVLEVBQUcsQ0FDZCxFQUNqQnZDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMyQixTQUFBLENBQUFVLFlBQVksUUFDWnhELE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMyQixTQUFBLENBQUFXLFlBQVk7Y0FBQ2hCLElBQUksRUFBRTtZQUFrQixHQUNyQ3pDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUMwQixPQUFBLENBQUFhLE9BQU87Y0FBQ25CLElBQUksRUFBQztZQUFXLEVBQUcsRUFDM0IxQixLQUFLLENBQUNnQixPQUFPLENBQUNzQixJQUFJLENBQ0wsRUFDZEgsU0FBUyxJQUNUaEQsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQzJCLFNBQUEsQ0FBQVcsWUFBWTtjQUFDaEIsSUFBSSxFQUFDO1lBQXdCLEdBQzFDekMsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ3lCLE1BQUEsQ0FBQVEsSUFBSTtjQUFDYixJQUFJLEVBQUM7WUFBWSxFQUFHLEVBQ3pCMUIsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDYSxRQUFRLENBRXhCLENBQ2EsQ0FDTDtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBdkMsR0FBQSxHQUFBMUMsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFFQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFrRyxPQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFdBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBb0csS0FBQSxHQUFBcEcsT0FBQTtVQUVPO1VBQVUsU0FDUlcsSUFBSUEsQ0FBQztZQUFFTjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ2dHLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUcsSUFBQS9ELE1BQUEsQ0FBQVEsUUFBUSxFQUFNLElBQUksQ0FBQztZQUMzRCxNQUFNLENBQUN3RCxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHakUsTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTTtjQUFFSztZQUFLLENBQUUsR0FBRy9DLEtBQUs7WUFFdkIsSUFBQTZFLE1BQUEsQ0FBQXVCLFFBQVEsRUFBQ3BHLEtBQUssQ0FBQztZQUVmLE1BQU1xRyxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QixJQUFJSCxJQUFJLEVBQUVELGVBQWUsQ0FBQyxJQUFJLENBQUM7Y0FDL0JFLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7Y0FDZEQsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN0QixDQUFDO1lBRUQsTUFBTUssS0FBSyxHQUFHcEUsTUFBQSxDQUFBTyxPQUFLLENBQUM4RCxPQUFPLENBQzFCLE9BQU87Y0FDTnhELEtBQUs7Y0FDTC9DLEtBQUs7Y0FDTGdHLFlBQVk7Y0FDWkMsZUFBZTtjQUNmLEdBQUdqRyxLQUFLLENBQUN3RzthQUNULENBQUMsRUFDRixDQUFDekQsS0FBSyxFQUFFL0MsS0FBSyxDQUFDd0csS0FBSyxFQUFFUixZQUFZLENBQUMsQ0FDbEM7WUFDRCxJQUFJLENBQUNoRyxLQUFLLENBQUN3RyxLQUFLLENBQUNDLEtBQUssRUFBRSxPQUFPdkUsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2hCLEdBQUEsQ0FBQXFFLFVBQVU7Y0FBQy9ELFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFN0QsT0FDQ1QsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQU8sT0FBQSxDQUFBa0UsUUFBQSxRQUNDekUsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2MsUUFBQSxDQUFBckMsYUFBYSxDQUFDOEUsUUFBUTtjQUFDTixLQUFLLEVBQUVBO1lBQUssR0FDbkNwRSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDaEIsR0FBQSxDQUFBd0UsYUFBYSxRQUNiM0UsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ2hCLEdBQUEsQ0FBQXlFLFNBQVM7Y0FBQ3RELEtBQUssRUFBRSxHQUFHVCxLQUFLLENBQUNTLEtBQUs7WUFBRSxHQUNqQ3RCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUN5QyxXQUFBLENBQUFiLFVBQVU7Y0FBQ2pGLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2pCLEVBQ1prQyxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDMEMsS0FBQSxDQUFBZ0IsYUFBYSxPQUFHLENBQ0YsQ0FDUSxFQUN4QmYsWUFBWSxJQUFJOUQsTUFBQSxDQUFBTyxPQUFBLENBQUFZLGFBQUEsQ0FBQ3dDLE9BQUEsQ0FBQXZELGVBQWU7Y0FBQ1osSUFBSSxFQUFFc0UsWUFBWTtjQUFFaEcsS0FBSyxFQUFFQSxLQUFLO2NBQUUrQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRVIsT0FBTyxFQUFFOEQ7WUFBVSxFQUFJLENBQ3ZHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBLElBQUFuRSxNQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQXFILFdBQUEsR0FBQXJILE9BQUE7VUFDQSxJQUFBa0YsTUFBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFvRyxLQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBc0gsTUFBQSxHQUFBdEgsT0FBQTtVQUVNLFNBQVVvSCxhQUFhQSxDQUFBO1lBQzVCLE1BQU0sQ0FBQ0csZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHakYsTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTtjQUFFMUMsS0FBSztjQUFFaUc7WUFBZSxDQUFFLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQW5DLGdCQUFnQixHQUFFO1lBRXJELElBQUE2QyxNQUFBLENBQUF1QixRQUFRLEVBQUNwRyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVsQyxJQUFJQSxLQUFLLENBQUNvSCxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBT25GLE1BQUEsQ0FBQU8sT0FBQSxDQUFBWSxhQUFBLENBQUM0RCxNQUFBLENBQUE3QyxTQUFTLE9BQUc7WUFFaEQsTUFBTWtELElBQUksR0FBR0EsQ0FBQztjQUFFNUYsSUFBSTtjQUFFLEdBQUc2RjtZQUFLLENBQUUsS0FBSTtjQUNuQyxNQUFNeEQsT0FBTyxHQUFHO2dCQUNmdEMsTUFBTSxFQUFFK0YsS0FBSyxJQUFHO2tCQUNmQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtrQkFDdkJ4QixlQUFlLENBQUN2RSxJQUFJLENBQUM7Z0JBQ3RCO2VBQ0E7Y0FFRCxPQUFPUSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDMkQsV0FBQSxDQUFBVSxhQUFhO2dCQUFDQyxHQUFHLEVBQUVqRyxJQUFJLENBQUNrRyxFQUFFO2dCQUFFbEcsSUFBSSxFQUFFQSxJQUFJO2dCQUFFcUMsT0FBTyxFQUFFQSxPQUFPO2dCQUFFaEIsS0FBSyxFQUFFL0MsS0FBSyxDQUFDc0I7Y0FBVyxFQUFJO1lBQy9GLENBQUM7WUFFRCxPQUNDWSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFBbkIsTUFBQSxDQUFBTyxPQUFBLENBQUFrRSxRQUFBLFFBQ0N6RSxNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBOEIsR0FDaERyQixNQUFBLENBQUFPLE9BQUEsQ0FBQVksYUFBQSxDQUFDMEMsS0FBQSxDQUFBOEIsSUFBSTtjQUFDdEUsU0FBUyxFQUFDLGFBQWE7Y0FBQzZELEtBQUssRUFBRXBILEtBQUssQ0FBQ29ILEtBQUs7Y0FBRVUsT0FBTyxFQUFFUjtZQUFJLEVBQUksQ0FDMUQsQ0FDUjtVQUVMIiwiaWdub3JlTGlzdCI6W119