System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, RightPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    RightPanel: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Icons) {
      dependency_14 = _pragmateUi003Icons;
    }, function (_pragmateUi003Collapsible) {
      dependency_15 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Link) {
      dependency_16 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_17 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_18 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/alert', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3389289793,
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
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1144124024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            #collection;
            get collection() {
              return this.#collection;
            }
            get model() {
              return this.#collection;
            }
            async load() {
              if (!_gclassroom.gclassroom.authorized) {
                this.ready = true;
                return;
              }
              this.#collection = new _core.LearningModules();
              await this.#collection.load();
              this.ready = true;
            }
            async addSession(itemId, gclassId) {
              try {
                const item = this.#collection.items.find(item => item.id === itemId);
                if (!item) {
                  console.warn('item not found');
                  return false;
                }
                const session = await item.addSession(gclassId);
                return session;
              } catch (e) {
                console.error(e);
              }
            }
            async deleteDraft(id) {
              const item = this.#collection.elements.get(id);
              await item.delete();
              this.load();
              // this.#collection.delete(id);
            }
          }

          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3962165658,
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
        hash: 407144853,
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
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty,
              icon: "info"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/management/new",
              className: "btn btn-primary"
            }, texts.actions.create));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1738608410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            const [search, setSearch] = _react.default.useState('');
            const userName = _session.sessionWrapper.user.displayName;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: userName,
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.welcome)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3260202470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./empty");
          var _header = require("./header");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const {
              collection
            } = store;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [items, setItems] = _react.default.useState(collection?.items);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setItems([...collection?.items]);
            });
            (0, _hooks.useBinder)([store.model], () => {
              setItems([...collection?.items]);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const isNotEmpty = items?.length;
            const Control = isNotEmpty ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                items,
                total: items.length
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 3344663835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LearningModuleActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function LearningModuleActions({
            module
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const onDelete = event => {
              event.stopPropagation();
              store.deleteDraft(module.id);
            };
            return _react.default.createElement("section", {
              className: "card-footer__actions"
            }, _react.default.createElement(_icons.IconButton, {
              title: texts.actions.delete,
              icon: "delete",
              onClick: onDelete,
              className: "circle"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1057335346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _title = require("./title");
          var _actions = require("./actions");
          function Item({
            data
          }) {
            return React.createElement(_ui.Card, {
              simple: true
            }, React.createElement(_ui.CardContent, {
              className: "actions"
            }, React.createElement(_title.default, {
              item: data
            })), React.createElement(_ui.CardFooter, null, React.createElement(_actions.default, {
              module: data
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
        hash: 3962719717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ModuleData;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function ModuleData({
            item
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/modules/management/${item.id}`
            }, _react.default.createElement("h4", null, item.title)), _react.default.createElement("span", null, item.description));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/topics-list
      ****************************************/

      ims.set('./views/item/topics-list', {
        hash: 4101405080,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = TopicsList;
          var _react = require("react");
          var _context = require("../context");
          var _collapsible = require("pragmate-ui/collapsible");
          function TopicsList({
            topics
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [visible, setVisible] = _react.default.useState(false);
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "topics",
              isOpened: false
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "topics-header"
            }, _react.default.createElement("h5", null, texts.classes['topics-list'])), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "topics-content"
            }, _react.default.createElement("ul", {
              className: `topics-list ${visible ? 'visible' : ''}`
            }, topics.items.map(topic => _react.default.createElement("li", {
              key: topic.id
            }, _react.default.createElement("h5", null, topic.title))))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 1360164228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _item = require("../item");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          function List({}) {
            const {
              texts,
              items
            } = (0, _context.useListContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              className: "list-unstyled grid-container g-2-columns mt-15",
              items: items,
              control: _item.Item
            }), _react.default.createElement("div", {
              className: "actions flex-container flex-end"
            }, _react.default.createElement(_link.Link, {
              href: "/modules/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/list/require-access
      *******************************************/

      ims.set('./views/list/require-access', {
        hash: 3901695856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequireAccess = RequireAccess;
          var _react = require("react");
          var _context = require("../context");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function RequireAccess({}) {
            const {
              store,
              texts: {
                errors: {
                  ERROR_GETTING_URL
                }
              }
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            const onClick = async event => {
              try {
                setFetching(true);
                const url = await _gclassroom.gclassroom.getUrl();
                if (!url) {
                  throw new Error('ERROR_GETTING_URL');
                }
                setFetching(false);
                window.location.href = url;
              } catch (e) {
                console.error(3, ERROR_GETTING_URL, e);
                setError(ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("div", {
              className: "sidebar__list"
            }, _react.default.createElement("div", {
              className: "empty-page__message-container"
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/right-panel
      ***********************************/

      ims.set('./views/right-panel', {
        hash: 1845784498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RightPanel = RightPanel;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function RightPanel({
            store
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement("div", {
              className: "content-container__right"
            }, _react.default.createElement("div", {
              className: "text-container__classroom"
            }, _react.default.createElement("h5", {
              className: "text-title__content pt-20 h3"
            }, "Google Classroom"), _react.default.createElement("br", null), _react.default.createElement("p", {
              className: "text-p__content "
            }, texts.textClassroom), _react.default.createElement("p", {
              className: "text-pb__content pt-5 pb-40"
            }, texts.spanClassroom)), _react.default.createElement("div", {
              className: "text-container__info"
            }, _react.default.createElement("h5", {
              className: "text-title__content h3"
            }, texts.titleInfo), _react.default.createElement("br", null), _react.default.createElement("p", {
              className: "text-p__content"
            }, texts.spanInfo)));
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
      }, {
        "im": "./views/right-panel",
        "from": "RightPanel",
        "name": "RightPanel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RightPanel') && _export("RightPanel", RightPanel = require ? require('./views/right-panel').RightPanel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfZ2NsYXNzcm9vbSIsIlJlYWN0aXZlTW9kZWwiLCJjb2xsZWN0aW9uIiwibW9kZWwiLCJnY2xhc3Nyb29tIiwiYXV0aG9yaXplZCIsInJlYWR5IiwiTGVhcm5pbmdNb2R1bGVzIiwiYWRkU2Vzc2lvbiIsIml0ZW1JZCIsImdjbGFzc0lkIiwiaXRlbSIsIml0ZW1zIiwiZmluZCIsImlkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uIiwiZSIsImVycm9yIiwiZGVsZXRlRHJhZnQiLCJlbGVtZW50cyIsImdldCIsImRlbGV0ZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9zZXNzaW9uIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiRnJhZ21lbnQiLCJIZWFkZXJDYXJkIiwidGl0bGUiLCJhbHQiLCJpbWFnZSIsIndlbGNvbWUiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaXNOb3RFbXB0eSIsImxlbmd0aCIsIkNvbnRyb2wiLCJMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRvdGFsIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiX2ljb25zIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib25EZWxldGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiUmVhY3QiLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkl0ZW0iLCJkYXRhIiwiQ2FyZCIsInNpbXBsZSIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwic3ludGhlc2lzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJjbGFzc2VzIiwiTW9kdWxlRGF0YSIsImRlc2NyaXB0aW9uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInRvcGljcyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwibWFwIiwidG9waWMiLCJrZXkiLCJfbGluayIsIl9pdGVtIiwiY29udHJvbCIsIlJlcXVpcmVBY2Nlc3MiLCJlcnJvcnMiLCJFUlJPUl9HRVRUSU5HX1VSTCIsInNldEVycm9yIiwidXJsIiwiZ2V0VXJsIiwiRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIlJpZ2h0UGFuZWwiLCJ0ZXh0Q2xhc3Nyb29tIiwic3BhbkNsYXNzcm9vbSIsInRpdGxlSW5mbyIsInNwYW5JbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giLCIvdHMvdmlld3MvcmlnaHQtcGFuZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNN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