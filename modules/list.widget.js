System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/assign", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/tabs", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
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
    }, function (_pragmateUi011Image) {
      dependency_17 = _pragmateUi011Image;
    }, function (_pragmateUi011Tabs) {
      dependency_18 = _pragmateUi011Tabs;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_20 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_21 = _pragmateUi011Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/modules/assign', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21]]);
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
        hash: 4171271325,
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
        hash: 556959169,
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
            clear() {}
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
        hash: 2945644013,
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
              breadcrumb: [[texts.breadcrumb.modules, '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("section", {
              className: "title__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.create))), _react.default.createElement(_list.List, null)));
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
        hash: 4218449999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var React = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
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
            return React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: share
            }, texts.actions.assign), openModal && React.createElement(_assign.ModuleAssignments, {
              module: module,
              onClose: toggleModal,
              texts: texts.assign
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1031213725,
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
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h4", null, title), React.createElement("span", null, description)), React.createElement(_actions.default, {
              module: item
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/item-drafts
      ****************************************/

      ims.set('./views/item/item-drafts', {
        hash: 2192918489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemDrafts = ItemDrafts;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ItemDrafts({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const {
              title,
              description,
              objective
            } = item;
            const onDelete = async () => {
              await store.deleteDraft(item.id);
            };
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_image.Image, {
              className: "entity-cover",
              src: item.picture
            }), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, React.createElement("h4", null, title ?? objective), React.createElement("span", null, description))), React.createElement("footer", {
              className: "entity__footer entity__footer--right"
            }, React.createElement(_ui.ConfirmAction, {
              textPopUp: texts?.actions?.delete,
              icon: "delete",
              onConfirm: onDelete
            })));
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
        hash: 3068385237,
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
              collection: store.draft,
              control: _itemDrafts.ItemDrafts,
              preventMessage: texts.empty.drafts,
              loadingMessage: texts.loading
            }), _react.default.createElement(_manageList.ManageList, {
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
        hash: 603720868,
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
              className: "entity__list",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiUmVhY3RpdmVNb2RlbCIsImRyYWZ0cyIsImRyYWZ0IiwibW9kdWxlcyIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsImMiLCJMZWFybmluZ01vZHVsZXMiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsInR5cGUiLCJyb3V0ZSIsInJlYWR5IiwibG9hZERyYWZ0cyIsImRlbGV0ZURyYWZ0IiwiaWQiLCJpdGVtIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX25hdmJhckhlYWRlciIsIl9saXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9saW5rIiwiX2ljb25zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkljb24iLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYXNzaWduIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwic2hhcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImFzc2lnbiIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsIl9hY3Rpb25zIiwiSXRlbSIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIl9pbWFnZSIsIkl0ZW1EcmFmdHMiLCJvbkRlbGV0ZSIsIkltYWdlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsIl90YWJzIiwiX21hbmFnZUxpc3QiLCJfaXRlbSIsIl9yb3V0aW5nIiwiX2l0ZW1EcmFmdHMiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJvbkNoYW5nZSIsImluZGV4IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIkZyYWdtZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwicHVibGlzaGVkIiwiUGFuZXMiLCJNYW5hZ2VMaXN0IiwiY29sbGVjdGlvbiIsImNvbnRyb2wiLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9lbXB0eSIsIml0ZW1zIiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsImxlbmd0aCIsIkVtcHR5IiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9pdGVtLWRyYWZ0cy50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcs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