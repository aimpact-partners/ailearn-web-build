System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/i18n.ts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk141Session) {
      dependency_8 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_9 = _aimpactAilearnApp031I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_15 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_18 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/archive",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/module-card', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['pragmate-ui/empty', dependency_18], ['pragmate-ui/list', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-archive-app",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/archive.widget",
        "is": "page",
        "route": "/archive",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/archive.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
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
            get Widget() {
              return _views.View;
            }
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2543374575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #modules;
            get modules() {
              return this.#modules;
            }
            get published() {
              return this.#modules;
            }
            get assignments() {
              return _session.sessionWrapper.user.archive;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              //@ts-ignore
              this.#modules = new _learningModules.LearningModules();
              this.#modules.on('change', this.triggerEvent);
              this.#modules.on('items.changed', () => this.trigger('items.changed'));
              globalThis.store = this;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.setBreadcrumb();
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            setBreadcrumb() {
              _mainLayout.LayoutBroker.overlay = false;
            }
            load(type = 'assignments') {
              const types = {
                assignments: this.loadAssignments.bind(this),
                modules: this.loadModules.bind(this)
              };
              const titles = {
                modules: this.globalTexts.entities.modules,
                assignments: this.globalTexts.entities.assignments
              };
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[titles[type]]]
              });
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              return types[type]();
            }
            async loadModules() {
              this.#tab = 'modules';
              if (this.#modules.loaded) return;
              //@ts-ignore
              const response = await this.#modules.load({
                type: 'module',
                route: ''
              });
              super.ready = true;
              return response;
            }
            async loadAssignments() {
              this.#tab = 'assignments';
              //@ts-ignore
              const response = await _session.sessionWrapper.user.archive.load();
              super.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2708434875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var React = require("react");
          const ListContext = exports.ListContext = React.createContext({});
          const useListContext = () => React.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3311512184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2949303096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching] = React.useState(store.fetching);
            const [updated, setUpdated] = React.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
            }, ['items.changed']);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store,
              fetching
            };
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/assignments
      ****************************************/

      ims.set('./views/item/assignments', {
        hash: 2824649548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = Assignment;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../context");
          function Assignment({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: `/dashboard/${item.id}`,
              type: item.type,
              item: item.module,
              texts: texts,
              audience: false,
              archived: true,
              entity: "assignment"
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/module
      ***********************************/

      ims.set('./views/item/module', {
        hash: 870536348,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _context = require("../context");
          function ModuleItem({
            item
          }) {
            const {
              texts,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openClone, setOpenClone] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const [openDelete, setOpenDelete] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleDelete = event => {
              event?.stopPropagation();
              setOpenDelete(!openDelete);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              entity: "module",
              onClick: onAction,
              archived: true
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "unarchive",
              title: globalTexts.actions.archive,
              onClick: toggleDelete
            })))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2905226720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var React = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _assignments = require("../item/assignments");
          var _module = require("../item/module");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['modules', 'assignments'];
            const tabIndex = tabs.indexOf(store.tab);
            const [collection, setCollection] = React.useState(store[store.tab]);
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            const itemControls = {
              assignments: _assignments.Assignment,
              modules: _module.ModuleItem
            };
            const onChange = async event => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[parseInt(event.currentTarget.dataset.index)];
              urlParams.set('tab', tab);
              const target = event.currentTarget;
              target.closest('.pui-tabs-menu').querySelectorAll('.pui-tab').forEach(tab => tab.classList.remove('active'));
              target.classList.add('active');
              _routing.routing.replaceState({}, document.title, `/archive?${urlParams.toString()}`);
              useTabSelect(parseInt(event.currentTarget.dataset.index));
              setFetching(true);
              await store.load(tab);
              setCollection(store[tab]);
              setFetching(false);
            };
            if (fetching && !collection.items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_ui.AppLoader, null));
            }
            const ListTab = ({
              items
            }) => {
              if (!items.length) {
                return React.createElement(_ui.EmptyCard, {
                  text: emptyTexts.title,
                  description: emptyTexts.description,
                  icon: "info"
                });
              }
              return React.createElement(_list.List, {
                empty: _ui.EmptyCard,
                className: "entity__list mt-15",
                items: items,
                control: itemControls[store.tab]
              });
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "pui-tabs-container pui-page-tabs-container"
            }, React.createElement("header", {
              className: "pui-tabs-menu tabs page__tabs"
            }, React.createElement("div", {
              "data-index": "0",
              className: `pui-tab tab${tabSelect === 0 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.assignments), React.createElement("div", {
              "data-index": "1",
              className: `pui-tab tab${tabSelect === 1 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.modules))), fetching ? React.createElement(_empty.Empty, {
              className: "loading-list-page"
            }, React.createElement(_ui.AppLoader, null)) : React.createElement("div", {
              className: "pui-tab-panes"
            }, React.createElement(ListTab, {
              items: collection.items
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 12017522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwiYXNzaWdubWVudHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwidHlwZSIsInR5cGVzIiwibG9hZEFzc2lnbm1lbnRzIiwiYmluZCIsImxvYWRNb2R1bGVzIiwidGl0bGVzIiwiZW50aXRpZXMiLCJzZXQiLCJicmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkZWQiLCJyZXNwb25zZSIsInJvdXRlIiwiUmVhY3QiLCJMaXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9ob29rcyIsIl9saXN0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIl9tb2R1bGVDYXJkIiwiQXNzaWdubWVudCIsIml0ZW0iLCJnZXRQcm9wZXJ0aWVzIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsImlkIiwiYXVkaWVuY2UiLCJhcmNoaXZlZCIsImVudGl0eSIsIl9pY29ucyIsIk1vZHVsZUl0ZW0iLCJvcGVuQ2xvbmUiLCJzZXRPcGVuQ2xvbmUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvbkFjdGlvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJ0b2dnbGVEZWxldGUiLCJNb2R1bGVDYXJkIiwib25DbGljayIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJfcm91dGluZyIsIl9lbXB0eSIsIl9hc3NpZ25tZW50cyIsIl9tb2R1bGUiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJzZXRGZXRjaGluZyIsImVtcHR5VGV4dHMiLCJpdGVtQ29udHJvbHMiLCJvbkNoYW5nZSIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyc2VJbnQiLCJpbmRleCIsInRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIkFwcExvYWRlciIsIkxpc3RUYWIiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hc3NpZ25tZW50cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNa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