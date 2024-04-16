System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.1/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_11 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Link) {
      dependency_13 = _pragmateUi011Link;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesAssign) {
      dependency_16 = _aimpactAilearnApp0032ModulesAssign;
    }, function (_pragmateUi011Tabs) {
      dependency_17 = _pragmateUi011Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_20 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 301523666,
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
              this.#store.load(tab);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3077721217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            get draft() {
              return this.#drafts;
            }
            #modules;
            get modules() {
              return this.#modules;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            constructor() {
              super();
              globalThis.c = this;
              this.#drafts = new _learningModules.LearningModules();
              this.#modules = new _learningModules.LearningModules();
              globalThis.drafts = this.#drafts;
            }
            async loadModules() {
              this.#tab = 'published';
              if (this.#modules.loaded) return;
              await this.#modules.load({
                type: 'module',
                route: ''
              });
              this.ready = true;
            }
            async loadDrafts() {
              if (this.#drafts.loaded) return;
              await this.#drafts.load({
                type: 'draft',
                route: '/drafts'
              });
              this.ready = true;
            }
            load(type) {
              type === 'draft' ? this.loadDrafts() : this.loadModules();
            }
            async deleteDraft(id) {
              const item = this.#drafts.elements.get(id);
              await item.delete();
              // this.#drafts.load({ type: 'draft' });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 515844683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
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
              texts
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
            }, texts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 872371627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching] = (0, _react.useState)(store.fetching);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              texts,
              store,
              fetching
            };
            return _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create)), _react.default.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 2122662873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 1063903095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          function LearningModuleActions({
            module
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState(false);
            const share = event => {
              event.stopPropagation();
              setOpenModal(true);
            };
            const toggleModal = () => setOpenModal(!openModal);
            return React.createElement("section", {
              className: "card-footer__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: share
            }), openModal && React.createElement(_assign.ModuleAssignments, {
              texts: texts.actions,
              module: module,
              onClose: toggleModal,
              texts: texts
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3645273600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _actions = require("./actions");
          var _context = require("../context");
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return React.createElement(_ui.Card, null, React.createElement(_ui.CardContent, null, React.createElement("section", null, React.createElement("h4", null, title), React.createElement("span", null, description))), React.createElement(_ui.CardFooter, null, React.createElement(_actions.default, {
              module: item
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/item-drafts
      ****************************************/

      ims.set('./views/item/item-drafts', {
        hash: 1743642048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _context = require("../context");
          function ItemDrafts({
            data
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const onDelete = async () => {
              await store.deleteDraft(data.id);
            };
            return _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardContent, null, _react.default.createElement(_title.default, {
              item: data
            })), _react.default.createElement(_ui.CardFooter, null, _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            }))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/status
      ***********************************/

      ims.set('./views/item/status', {
        hash: 3172238619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Status;
          var _react = require("react");
          var _context = require("../context");
          const STATUS_COLORS = {
            ready: 'green',
            processing: 'yellow'
          };
          function Status({
            synthesis,
            relevance,
            assessment
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const getStatusColor = status => {
              let color = STATUS_COLORS[status];
              return color ?? 'red';
            };
            return _react.default.createElement("section", {
              className: 'statuses'
            }, _react.default.createElement("div", {
              className: 'status'
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(relevance?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.relevance)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(synthesis?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.synthesis)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: `status-circle ${getStatusColor(assessment?.status)}`
            }), _react.default.createElement("h5", null, texts.classes.elements.assessment))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/title
      **********************************/

      ims.set('./views/item/title', {
        hash: 2842038646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ModuleData({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, _react.default.createElement("h4", null, title)), _react.default.createElement("span", null, description));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 230031548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _context = require("../context");
          var _tabs = require("pragmate-ui/tabs");
          var _manageList = require("./manage-list");
          var _item = require("../item");
          var _routing = require("@beyond-js/kernel/routing");
          var _itemDrafts = require("../item/item-drafts");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [tabSelect, useTabSelect] = _react.default.useState(store.tab === 'published' ? 1 : 0);
            const onChange = (event, index) => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = index === 0 ? 'draft' : 'published';
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/modules/list?${urlParams.toString()}`);
              useTabSelect(index);
              store.load(tab);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
              active: tabSelect
            }, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.drafts), _react.default.createElement(_tabs.Tab, null, texts.tabs.published)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_manageList.ManageList, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              collection: store.draft,
              control: _itemDrafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              collection: store.modules,
              control: _item.Item,
              preventMessage: texts.empty.published,
              loadingMessage: texts.loading
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/manage-list
      ****************************************/

      ims.set('./views/list/manage-list', {
        hash: 127092385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManageList = ManageList;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function ManageList({
            className,
            collection,
            control,
            preventMessage
          }) {
            const [items, setItems] = React.useState(collection.items ?? []);
            const [fetching, setFetching] = React.useState(collection.fetching);
            (0, _hooks.useBinder)([collection], () => {
              setItems([...collection.items]);
              setFetching(collection.fetching);
            });
            if (fetching && !items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!items.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              }, React.createElement(ButtonRedirect, {
                className: 'actions flex-container flex-center'
              }));
            }
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: className,
              items: items,
              control: control
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwiX2NvbmZpZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkl0ZW0iLCJvYmplY3RpdmUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiX3RpdGxlIiwiSXRlbURyYWZ0cyIsImRhdGEiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsInB1Ymxpc2hlZCIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJjb250cm9sIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiLCJCdXR0b25SZWRpcmVjdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9pdGVtLWRyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENB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