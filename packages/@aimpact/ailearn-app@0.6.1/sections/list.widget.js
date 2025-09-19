System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "react@18.3.1", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/components/icons", "pragmate-ui@1.0.8/dropdown", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.6.1/components/module-card", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_6 = _aimpactAilearnSdk120EntitiesSections;
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
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_15 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp061ComponentsModuleCard;
    }, function (_pragmateUi108List) {
      dependency_17 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/sections', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sections-list",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/list.widget",
        "is": "page",
        "route": "/kb/sections/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/sections/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3556241192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3887814600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _sections = require("@aimpact/ailearn-sdk/entities/sections");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.ListStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, _sections.Sections);
            }
            async load() {
              await super.load();
              console.log(0, 2);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.kbSections]]
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
        hash: 2715486957,
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
          var _context = require("./context");
          function DeleteItemModal({
            onClose,
            item,
            store
          }) {
            const [, setOpenConfirm] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            const {
              texts
            } = (0, _context.useModuleContext)();
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
        hash: 3121283669,
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
              texts,
              store
            } = (0, _context.useModuleContext)();
            const textsActions = store.globalTexts.actions;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/kb/sections/management",
              className: "grow btn btn-primary"
            }, textsActions.register)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 91886294,
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
              globalTexts: texts,
              isTeacher
            } = store;
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'sm' || size === 'lg') {
              return _react.default.createElement("div", {
                className: "page-title__actions"
              }, _react.default.createElement(_components.Link, {
                href: `/kb/sections/join`
              }, texts.actions.join), isTeacher && _react.default.createElement(_components.Link, {
                href: "/kb/sections/management"
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
              href: `/kb/sections/join`
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: "community"
            }), texts.actions.join), isTeacher && _react.default.createElement(_dropdown.DropdownItem, {
              href: "/kb/sections/management"
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
        hash: 523943986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _delete = require("./delete");
          var _headerMenu = require("./header-menu");
          var _list = require("./list");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
            })), _react.default.createElement(_list.SectionList, null))), selectedItem && _react.default.createElement(_delete.DeleteItemModal, {
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
        hash: 2338878577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionList = SectionList;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          var _empty = require("./empty");
          function SectionList() {
            const {
              store,
              setSelectedItem
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model, ['items.changed']);
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
              return _react.default.createElement(_moduleCard.SectionCard, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfYmFzZSIsIl9zZWN0aW9ucyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNlY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIkxheW91dEJyb2tlciIsInNldCIsIm92ZXJsYXkiLCJicmVhZGNydW1iIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsImtiU2VjdGlvbnMiLCJkZWxldGUiLCJpdGVtIiwiZGVsZXRlSXRlbSIsIm1vZGVsIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInRleHRzIiwib25Db25maXJtIiwiZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJib3JkZXJlZCIsImFjdGlvbnMiLCJjYW5jZWwiLCJjb25maXJtIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkVtcHR5TGlzdCIsInRleHRzQWN0aW9ucyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJpc1RlYWNoZXIiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2RlbGV0ZSIsIl9oZWFkZXJNZW51IiwiX2xpc3QiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0b3JlIiwidG9nZ2xlT3BlbiIsInZhbHVlIiwidXNlTWVtbyIsInN0YXRlIiwicmVhZHkiLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJTZWN0aW9uTGlzdCIsIl9tb2R1bGVDYXJkIiwiX2VtcHR5IiwiaXRlbXMiLCJsZW5ndGgiLCJJdGVtIiwicHJvcHMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlNlY3Rpb25DYXJkIiwia2V5IiwiaWQiLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2RlbGV0ZS50c3giLCIvL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvaGVhZGVyLW1lbnUvaW5kZXgudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dkUsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUFxSCxXQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQWtGLE1BQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBb0csS0FBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUE0QyxRQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXNILE1BQUEsR0FBQXRILE9BQUE7VUFFTSxTQUFVb0gsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUUvRyxLQUFLO2NBQUVpRztZQUFlLENBQUUsR0FBRyxJQUFBMUQsUUFBQSxDQUFBTCxnQkFBZ0IsR0FBRTtZQUNyRCxJQUFBMkMsTUFBQSxDQUFBdUIsUUFBUSxFQUFDcEcsS0FBSyxDQUFDNkIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFeEMsSUFBSTdCLEtBQUssQ0FBQ2tILEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPckYsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUMyRCxNQUFBLENBQUE3QyxTQUFTLE9BQUc7WUFFaEQsTUFBTWdELElBQUksR0FBR0EsQ0FBQztjQUFFekYsSUFBSTtjQUFFLEdBQUcwRjtZQUFLLENBQUUsS0FBSTtjQUNuQyxNQUFNckQsT0FBTyxHQUFHO2dCQUNmdEMsTUFBTSxFQUFFNEYsS0FBSyxJQUFHO2tCQUNmQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtrQkFDdkJ0QixlQUFlLENBQUN0RSxJQUFJLENBQUM7Z0JBQ3RCO2VBQ0E7Y0FFRCxPQUFPRyxNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQzBELFdBQUEsQ0FBQVEsV0FBVztnQkFBQ0MsR0FBRyxFQUFFOUYsSUFBSSxDQUFDK0YsRUFBRTtnQkFBRS9GLElBQUksRUFBRUEsSUFBSTtnQkFBRXFDLE9BQU8sRUFBRUEsT0FBTztnQkFBRWhCLEtBQUssRUFBRWhELEtBQUssQ0FBQ3VCO2NBQVcsRUFBSTtZQUM3RixDQUFDO1lBRUQsT0FDQ08sTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBLENBQUF4QixNQUFBLENBQUFFLE9BQUEsQ0FBQTJFLFFBQUEsUUFDQzdFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBOEIsR0FDaEQxQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQ3lDLEtBQUEsQ0FBQTRCLElBQUk7Y0FBQ25FLFNBQVMsRUFBQyxhQUFhO2NBQUMwRCxLQUFLLEVBQUVsSCxLQUFLLENBQUNrSCxLQUFLO2NBQUVVLE9BQU8sRUFBRVI7WUFBSSxFQUFJLENBQzFELENBQ1I7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==