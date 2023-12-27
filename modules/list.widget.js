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
        hash: 1042440512,
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
              console.log(59);
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
        hash: 785777849,
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
              this.#collection.deleteDraft(id);
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
        hash: 2332769976,
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
              setItems(collection?.items);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const isNotEmpty = items?.length;
            const Control = isNotEmpty ? _list.List : _empty.EmptyList;
            const cls = `flex-container flex-column${isNotEmpty ? '' : ' page__container--empty'}`;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                items
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 3524430911,
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
              store
            } = (0, _context.useListContext)();
            const onDelete = event => {
              event.stopPropagation();
              store.deleteDraft(module.id);
            };
            return _react.default.createElement("section", {
              className: "class-actions"
            }, _react.default.createElement(_icons.IconButton, {
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
        hash: 3021149315,
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
            }), React.createElement(_actions.default, {
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
        hash: 1058191939,
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
            }, _react.default.createElement("h4", null, item.title)));
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
        hash: 3363716735,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function List({}) {
            const {
              texts,
              items
            } = (0, _context.useListContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.ListContainer, {
              className: "mt-15",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiY29sbGVjdGlvbiIsImdjbGFzc3Jvb20iLCJhdXRob3JpemVkIiwicmVhZHkiLCJMZWFybmluZ01vZHVsZXMiLCJhZGRTZXNzaW9uIiwiaXRlbUlkIiwiZ2NsYXNzSWQiLCJpdGVtIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJ3YXJuIiwic2Vzc2lvbiIsImUiLCJlcnJvciIsImRlbGV0ZURyYWZ0IiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3Nlc3Npb24iLCJIZWFkZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJpc05vdEVtcHR5IiwibGVuZ3RoIiwiQ29udHJvbCIsIkxpc3QiLCJjbHMiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiX2ljb25zIiwiTGVhcm5pbmdNb2R1bGVBY3Rpb25zIiwib25EZWxldGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiUmVhY3QiLCJfdGl0bGUiLCJfYWN0aW9ucyIsIkl0ZW0iLCJkYXRhIiwiQ2FyZCIsInNpbXBsZSIsIkNhcmRDb250ZW50IiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJzeW50aGVzaXMiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50IiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJlbGVtZW50cyIsIk1vZHVsZURhdGEiLCJfY29sbGFwc2libGUiLCJUb3BpY3NMaXN0IiwidG9waWNzIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImlzT3BlbmVkIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJtYXAiLCJ0b3BpYyIsImtleSIsIl9saW5rIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIlJlcXVpcmVBY2Nlc3MiLCJlcnJvcnMiLCJFUlJPUl9HRVRUSU5HX1VSTCIsInNldEVycm9yIiwidXJsIiwiZ2V0VXJsIiwiRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIlJpZ2h0UGFuZWwiLCJ0ZXh0Q2xhc3Nyb29tIiwic3BhbkNsYXNzcm9vbSIsInRpdGxlSW5mbyIsInNwYW5JbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giLCIvdHMvdmlld3MvcmlnaHQtcGFuZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Y0FDZixJQUFJLENBQUMsQ0FBQVAsS0FB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