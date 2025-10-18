System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "react@18.3.1", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/dropdown", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/module-card", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_5 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_6 = _aimpactAilearnSdk120EntitiesSections;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_8 = _pragmateUi108Modal;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_10 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_11 = _aimpactAilearnApp070SharedHooks;
    }, function (_pragmateUi108Icons) {
      dependency_12 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Dropdown) {
      dependency_14 = _pragmateUi108Dropdown;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_15 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_pragmateUi108List) {
      dependency_17 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/sections/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/sections', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sections-list",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/sections/list.widget",
        "is": "page",
        "route": "/kb/sections/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/sections/list.widget');
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
        hash: 2855633518,
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
        hash: 1070851726,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 88329626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionList = SectionList;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfYmFzZSIsIl9zZWN0aW9ucyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNlY3Rpb25zIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JTZWN0aW9ucyIsImRlbGV0ZSIsIml0ZW0iLCJkZWxldGVJdGVtIiwibW9kZWwiLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX2NvbnRleHQiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwidGV4dHMiLCJvbkNvbmZpcm0iLCJlIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYWN0aW9ucyIsImNhbmNlbCIsImNvbmZpcm0iLCJQcm9jZXNzQ29udGFpbmVyIiwiRW1wdHlMaXN0IiwidGV4dHNBY3Rpb25zIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwicmVnaXN0ZXIiLCJfaG9va3MiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2Ryb3Bkb3duIiwiSGVhZGVyTWVudSIsImlzVGVhY2hlciIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwiam9pbiIsIkljb24iLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiSWNvbkJ1dHRvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIkFwcEljb24iLCJfZGVsZXRlIiwiX2hlYWRlck1lbnUiLCJfbGlzdCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RvcmUiLCJ0b2dnbGVPcGVuIiwidmFsdWUiLCJ1c2VNZW1vIiwic3RhdGUiLCJyZWFkeSIsIlBhZ2VMb2FkZXIiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIlNlY3Rpb25MaXN0IiwiX21vZHVsZUNhcmQiLCJfZW1wdHkiLCJpdGVtcyIsImxlbmd0aCIsIkl0ZW0iLCJwcm9wcyIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiU2VjdGlvbkNhcmQiLCJrZXkiLCJpZCIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZGVsZXRlLnRzeCIsIi8vdHMvdmlld3MvZW1wdHkudHN4IiwiLy90cy92aWV3cy9oZWFkZXItbWVudS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxHQUFBaEYsT0FBQTtVQUNBLElBQUFrRyxLQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTBDLFFBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBb0gsTUFBQSxHQUFBcEgsT0FBQTtVQUVNLFNBQVVrSCxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRTdHLEtBQUs7Y0FBRStGO1lBQWUsQ0FBRSxHQUFHLElBQUExRCxRQUFBLENBQUFMLGdCQUFnQixHQUFFO1lBQ3JELElBQUEyQyxNQUFBLENBQUF1QixRQUFRLEVBQUNsRyxLQUFLLENBQUMyQixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV4QyxJQUFJM0IsS0FBSyxDQUFDZ0gsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU9yRixNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQTdDLFNBQVMsT0FBRztZQUVoRCxNQUFNZ0QsSUFBSSxHQUFHQSxDQUFDO2NBQUV6RixJQUFJO2NBQUUsR0FBRzBGO1lBQUssQ0FBRSxLQUFJO2NBQ25DLE1BQU1yRCxPQUFPLEdBQUc7Z0JBQ2Z0QyxNQUFNLEVBQUU0RixLQUFLLElBQUc7a0JBQ2ZBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2tCQUN2QnRCLGVBQWUsQ0FBQ3RFLElBQUksQ0FBQztnQkFDdEI7ZUFDQTtjQUVELE9BQU9HLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQSxDQUFDMEQsV0FBQSxDQUFBUSxXQUFXO2dCQUFDQyxHQUFHLEVBQUU5RixJQUFJLENBQUMrRixFQUFFO2dCQUFFL0YsSUFBSSxFQUFFQSxJQUFJO2dCQUFFcUMsT0FBTyxFQUFFQSxPQUFPO2dCQUFFaEIsS0FBSyxFQUFFOUMsS0FBSyxDQUFDcUI7Y0FBVyxFQUFJO1lBQzdGLENBQUM7WUFFRCxPQUNDTyxNQUFBLENBQUFFLE9BQUEsQ0FBQXNCLGFBQUEsQ0FBQXhCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBMkUsUUFBQSxRQUNDN0UsTUFBQSxDQUFBRSxPQUFBLENBQUFzQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE4QixHQUNoRDFCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0IsYUFBQSxDQUFDeUMsS0FBQSxDQUFBNEIsSUFBSTtjQUFDbkUsU0FBUyxFQUFDLGFBQWE7Y0FBQzBELEtBQUssRUFBRWhILEtBQUssQ0FBQ2dILEtBQUs7Y0FBRVUsT0FBTyxFQUFFUjtZQUFJLEVBQUksQ0FDMUQsQ0FDUjtVQUVMIiwiaWdub3JlTGlzdCI6W119