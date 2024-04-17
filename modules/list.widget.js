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
        hash: 4261694989,
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
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwiX2NvbmZpZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJfYWN0aW9ucyIsIkl0ZW0iLCJvYmplY3RpdmUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiX3RpdGxlIiwiSXRlbURyYWZ0cyIsImRhdGEiLCJvbkRlbGV0ZSIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsIk1vZHVsZURhdGEiLCJfdGFicyIsIl9tYW5hZ2VMaXN0IiwiX2l0ZW0iLCJfcm91dGluZyIsIl9pdGVtRHJhZnRzIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0Iiwib25DaGFuZ2UiLCJpbmRleCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJGcmFnbWVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwidGFicyIsInB1Ymxpc2hlZCIsIlBhbmVzIiwiTWFuYWdlTGlzdCIsImNvbGxlY3Rpb24iLCJjb250cm9sIiwicHJldmVudE1lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImxvYWRpbmciLCJfZW1wdHkiLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJsZW5ndGgiLCJFbXB0eSIsIlNwaW5uZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaXRlbS1kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsIi90cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L21hbmFnZS1saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFB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