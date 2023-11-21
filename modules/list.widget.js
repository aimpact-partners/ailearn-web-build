System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.14/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "@aimpact/ailearn-app@0.0.14/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.14/classworks/assign", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0014ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0014ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_pragmateUi003Empty) {
      dependency_10 = _pragmateUi003Empty;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi003Icons) {
      dependency_15 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0014ClassworksAssign) {
      dependency_16 = _aimpactAilearnApp0014ClassworksAssign;
    }, function (_pragmateUi003Collapsible) {
      dependency_17 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Link) {
      dependency_18 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_19 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_20 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/classworks/assign', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/modules/list.widget');
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
        hash: 26998666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            #collection;
            get collection() {
              return this.#collection;
            }
            get authorized() {
              return _gclassroom.gclassroom.authorized;
            }
            #gclassrooms = [];
            get gclassrooms() {
              return this.#gclassrooms;
            }
            async load() {
              if (!_gclassroom.gclassroom.authorized) {
                this.ready = true;
                return;
              }
              this.#collection = new _core.Lessons();
              await this.#collection.load({
                userId: _session.sessionWrapper.user.id
              });
              globalThis.c = this.#collection;
              const courses = await _gclassroom.gclassroom.courses();
              this.#gclassrooms = courses;
              this.ready = true;
            }
            async addSession(lessonId, gclassId) {
              try {
                const lesson = this.#collection.items.find(item => item.id === lessonId);
                if (!lesson) {
                  console.warn('Lesson not found');
                  return false;
                }
                const session = await lesson.addSession(gclassId);
                return session;
              } catch (e) {
                console.error(e);
              }
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
        hash: 1844011847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_empty.Empty, {
              message: texts.empty,
              icon: "info"
            }, _react.default.createElement(_components.Link, {
              href: "/classworks/create",
              className: "btn btn-primary"
            }, texts.create));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1630978233,
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
            const handleSearch = event => {
              const {
                value
              } = event.target;
              setSearch(value);
            };
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
        hash: 270797095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _header = require("./header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _requireAccess = require("./list/require-access");
          var _list = require("./list");
          var _empty = require("./empty");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function View({
            store
          }) {
            const {
              collection
            } = store;
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [items, setItems] = _react.default.useState(collection?.items);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setItems(collection?.items);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const isNotEmpty = items?.length;
            const Control = store.authorized ? isNotEmpty ? _list.List : _empty.EmptyList : _requireAccess.RequireAccess;
            const cls = `page__container flex-container flex-column${isNotEmpty ? '' : ' page__container--empty'}`;
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
              className: cls
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 878552313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function LessonsActions({
            lesson
          }) {
            return _react.default.createElement("section", {
              className: "class-actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "list-menu"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1089931802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _title = require("./title");
          var _actions = require("./actions");
          var _assign = require("@aimpact/ailearn-app/classworks/assign");
          var _context = require("../context");
          function Item({
            data
          }) {
            const {
              curriculumObjective,
              topics,
              relevance,
              assessment,
              synthesis
            } = data;
            const [showModal, setShowModal] = React.useState(false);
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const handleClose = () => setShowModal(false);
            const handleOpen = event => {
              event.stopPropagation();
              setShowModal(true);
            };
            const {
              sessions: assignments
            } = data;
            const footerText = {
              className: assignments?.length > 0 ? 'primary' : 'disabled-text',
              text: assignments?.length > 0 ? texts.gclassroom.quantity.number.replace('%s', assignments?.length) : texts.gclassroom.quantity.empty
            };
            return (
              // TODO: link={`/classworks/management/${data.id}`}
              React.createElement(_ui.Card, {
                simple: true
              }, React.createElement(_ui.CardContent, {
                className: "actions"
              }, React.createElement(_title.default, {
                item: data
              }), React.createElement(_actions.default, {
                lesson: data
              })), React.createElement(_ui.CardFooter, {
                className: "flex-container flex-space-between"
              }, React.createElement("section", {
                className: "details"
              }, React.createElement("span", {
                className: footerText.className
              }, footerText.text)), React.createElement("section", {
                className: "actions"
              }, React.createElement(_components.Button, {
                variant: "primary",
                onClick: handleOpen
              }, texts.gclassroom.assign), showModal && React.createElement(_assign.ShareLesson, {
                gclassrooms: store.gclassrooms,
                texts: texts.gclassroom,
                lesson: data,
                onClose: handleClose
              }))))
            );
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
        hash: 3936149880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonTitle;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function LessonTitle({
            item
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_components.Link, {
              href: `/classworks/management/${item.id}`
            }, _react.default.createElement("h4", null, item.curriculumObjective)));
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
        hash: 2152883981,
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
              items
            } = (0, _context.useListContext)();
            const renderedItems = items.map((item, index) => _react.default.createElement(_item.Item, {
              data: item,
              key: index
            }));
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              className: "card__list",
              items: items,
              control: _item.Item
            }), _react.default.createElement("div", {
              className: "actions flex-container flex-end"
            }, _react.default.createElement(_link.Link, {
              href: "/classworks/create",
              className: "grow btn btn-primary"
            }, texts.classes.create)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/list/require-access
      *******************************************/

      ims.set('./views/list/require-access', {
        hash: 2805901127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequireAccess = RequireAccess;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function RequireAccess({}) {
            const {
              store,
              texts: {
                access: {
                  ERROR_GETTING_URL,
                  unauthorized: {
                    text,
                    action,
                    error: errorMessage
                  }
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
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h3", null, text)), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error), _react.default.createElement("section", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, action))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiX3VpIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwidXNlck5hbWUiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiYWx0IiwiaW1hZ2UiLCJ3ZWxjb21lIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hlYWRlciIsIl9ob29rczIiLCJfcmVxdWlyZUFjY2VzcyIsIl9saXN0IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaXNOb3RFbXB0eSIsImxlbmd0aCIsIkNvbnRyb2wiLCJMaXN0IiwiUmVxdWlyZUFjY2VzcyIsImNscyIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiX2ljb25zIiwiTGVzc29uc0FjdGlvbnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJfdGl0bGUiLCJfYWN0aW9ucyIsIl9hc3NpZ24iLCJJdGVtIiwiZGF0YSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY3MiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50Iiwic3ludGhlc2lzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwic3RvcFByb3BhZ2F0aW9uIiwic2Vzc2lvbnMiLCJhc3NpZ25tZW50cyIsImZvb3RlclRleHQiLCJ0ZXh0IiwicXVhbnRpdHkiLCJudW1iZXIiLCJyZXBsYWNlIiwiQ2FyZCIsInNpbXBsZSIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYXNzaWduIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiY2xhc3NlcyIsImVsZW1lbnRzIiwiTGVzc29uVGl0bGUiLCJfY29sbGFwc2libGUiLCJUb3BpY3NMaXN0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImlzT3BlbmVkIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJtYXAiLCJ0b3BpYyIsImtleSIsIl9saW5rIiwiX2l0ZW0iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJjb250cm9sIiwiX2FsZXJ0IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsInVybCIsImdldFVybCIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJBbGVydCIsInR5cGUiLCJsb2FkaW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBVCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFVLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLEtBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLFFBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRTSxNQUFBLENBQUFJLGFBQTJCO1lBQzVELENBQUFDLFVBQVc7WUFFWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPSCxXQUFBLENBQUFJLFVBQVUsQ0FBQ0QsVUFBVTtZQUM3QjtZQUNBLENBQUFFLFdBQVksR0FBVSxFQUFFO1lBQ3hCLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsTUFBTVYsSUFBSUEsQ0FBQTtjQUNULElBQUksQ0FBQ0ssV0FBQSxDQUFBSSxVQUFVLENBQUNELFVBQVUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDRyxLQUFLLEdBQUcsSUFBSTtnQkFDakI7O2NBRUQsSUFBSSxDQUFDLENBQUFKLFVBQVcsR0FBRyxJQUFJSixLQUFBLENBQUFTLE9BQU8sRUFBRTtjQUNoQyxNQUFNLElBQUksQ0FBQyxDQUFBTCxVQUFXLENBQUNQLElBQUksQ0FBQztnQkFBRWEsTUFBTSxFQUFFVCxRQUFBLENBQUFVLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQztjQUFFLENBQUUsQ0FBQztjQUMvREMsVUFBVSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFYLFVBQVc7Y0FDL0IsTUFBTVksT0FBTyxHQUFHLE1BQU1kLFdBQUEsQ0FBQUksVUFBVSxDQUFDVSxPQUFPLEVBQUU7Y0FDMUMsSUFBSSxDQUFDLENBQUFULFdBQVksR0FBR1MsT0FBTztjQUUzQixJQUFJLENBQUNSLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUEsTUFBTVMsVUFBVUEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRO2NBQ2xDLElBQUk7Z0JBQ0gsTUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBaEIsVUFBVyxDQUFDaUIsS0FBSyxDQUFDQyxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDVixFQUFFLEtBQUtLLFFBQVEsQ0FBQztnQkFFeEUsSUFBSSxDQUFDRSxNQUFNLEVBQUU7a0JBQ1pJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2tCQUNoQyxPQUFPLEtBQUs7O2dCQUdiLE1BQU1DLE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNILFVBQVUsQ0FBQ0UsUUFBUSxDQUFDO2dCQUNqRCxPQUFPTyxPQUFPO2VBQ2QsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCOztVQUNBN0IsT0FBQSxDQUFBTCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRELElBQUFvQyxNQUFBLEdBQUEzQyxPQUFBO1VBU08sTUFBTTRDLFdBQVcsR0FBQWhDLE9BQUEsQ0FBQWdDLFdBQUEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFNSixNQUFBLENBQUFFLE9BQUssQ0FBQ0csVUFBVSxDQUFDSixXQUFXLENBQUM7VUFBQ2hDLE9BQUEsQ0FBQW1DLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWbEUsSUFBQUosTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFpRCxXQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELE1BQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUVNLFNBQVVvRCxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsT0FDQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ0osTUFBQSxDQUFBSyxLQUFLO2NBQUNDLE9BQU8sRUFBRUgsS0FBSyxDQUFDSSxLQUFLO2NBQUVDLElBQUksRUFBQztZQUFNLEdBQ3ZDZixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDTCxXQUFBLENBQUFVLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLG9CQUFvQjtjQUFDQyxTQUFTLEVBQUM7WUFBaUIsR0FDekRSLEtBQUssQ0FBQ1MsTUFBTSxDQUNQLENBQ0E7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBbkIsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBR0EsSUFBQStELEdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBZSxRQUFBLEdBQUFmLE9BQUE7VUFFTSxTQUFVZ0UsTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUVYO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd2QixNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTUMsWUFBWSxHQUFHQyxLQUFLLElBQUc7Y0FDNUIsTUFBTTtnQkFBRUM7Y0FBSyxDQUFFLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtjQUM5QkwsU0FBUyxDQUFDSSxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVELE1BQU1FLFFBQVEsR0FBR3pELFFBQUEsQ0FBQVUsY0FBYyxDQUFDQyxJQUFJLENBQUMrQyxXQUFXO1lBQ2hELE9BQ0M5QixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFBWCxNQUFBLENBQUFFLE9BQUEsQ0FBQTZCLFFBQUEsUUFDQy9CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNTLEdBQUEsQ0FBQVksVUFBVTtjQUFDQyxLQUFLLEVBQUVKLFFBQVE7Y0FBRUssR0FBRyxFQUFFLFlBQVk7Y0FBRUMsS0FBSyxFQUFDO1lBQXVCLEdBQzVFbkMsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsWUFBSUQsS0FBSyxDQUFDMEIsT0FBTyxDQUFLLENBQ1YsQ0FDWDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBcEMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFnRixlQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLE1BQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBaUQsV0FBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFrRixPQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLE9BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFvRixjQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXFGLEtBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBa0QsTUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUErRCxHQUFBLEdBQUEvRCxPQUFBO1VBQ087VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNO2NBQUVhO1lBQVUsQ0FBRSxHQUFHYixLQUFLO1lBQzVCLE1BQU0sQ0FBQ2lGLFVBQVUsRUFBRWpDLEtBQUssQ0FBQyxHQUFHLElBQUE0QixNQUFBLENBQUFNLFFBQVEsRUFBQ1AsZUFBQSxDQUFBUSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNuRSxLQUFLLEVBQUVvRSxRQUFRLENBQUMsR0FBRy9DLE1BQUEsQ0FBQUUsT0FBSyxDQUFDc0IsUUFBUSxDQUFDOUQsS0FBSyxDQUFDaUIsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3FFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdqRCxNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQzlELEtBQUssQ0FBQ3NGLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUN4RCxLQUFLLEVBQUUwRCxRQUFRLENBQUMsR0FBR2xELE1BQUEsQ0FBQUUsT0FBSyxDQUFDc0IsUUFBUSxDQUFDakQsVUFBVSxFQUFFaUIsS0FBSyxDQUFDO1lBRTNELElBQUFnRCxPQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDekYsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnFGLFFBQVEsQ0FBQ3JGLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQztjQUNyQnNFLFdBQVcsQ0FBQ3ZGLEtBQUssQ0FBQ3NGLFFBQVEsQ0FBQztjQUMzQkUsUUFBUSxDQUFDM0UsVUFBVSxFQUFFaUIsS0FBSyxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ2IsS0FBSyxJQUFJLENBQUNnRSxVQUFVLEVBQUUsT0FBTzNDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNMLFdBQUEsQ0FBQThDLGFBQWEsT0FBRztZQUVuRCxNQUFNQyxVQUFVLEdBQUc3RCxLQUFLLEVBQUU4RCxNQUFNO1lBQ2hDLE1BQU1DLE9BQU8sR0FBRzdGLEtBQUssQ0FBQ2MsVUFBVSxHQUFJNkUsVUFBVSxHQUFHWCxLQUFBLENBQUFjLElBQUksR0FBR2pELE1BQUEsQ0FBQUUsU0FBUyxHQUFJZ0MsY0FBQSxDQUFBZ0IsYUFBYTtZQUNsRixNQUFNQyxHQUFHLEdBQUcsNkNBQTZDTCxVQUFVLEdBQUcsRUFBRSxHQUFHLHlCQUF5QixFQUFFO1lBQ3RHLE9BQ0NyRCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDSCxRQUFBLENBQUFQLFdBQVcsQ0FBQzBELFFBQVE7Y0FBQ2hDLEtBQUssRUFBRTtnQkFBRWpCLEtBQUs7Z0JBQUVoRCxLQUFLO2dCQUFFc0YsUUFBUTtnQkFBRXhEO2NBQUs7WUFBRSxHQUM3RFEsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBd0MsVUFBVTtjQUNWQyxVQUFVLEVBQUUsQ0FDWCxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFDakIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ2YsRUFDQSxFQUVGN0QsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBMEMsYUFBYSxRQUNiOUQsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBS08sU0FBUyxFQUFFd0M7WUFBRyxHQUNsQjFELE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUM0QixPQUFBLENBQUFsQixNQUFNLE9BQUcsRUFDVnJCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUM0QyxPQUFPLE9BQUcsQ0FDTixDQUNTLENBQ007VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUF2RCxNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFFYyxTQUFVMkcsY0FBY0EsQ0FBQztZQUFFekU7VUFBTSxDQUFFO1lBQ2hELE9BQ0NTLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQVNPLFNBQVMsRUFBQztZQUFlLEdBQ2pDbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ29ELE1BQUEsQ0FBQUUsVUFBVTtjQUFDbEQsSUFBSSxFQUFDO1lBQVcsRUFBRyxDQUN0QjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFtRCxLQUFBLEdBQUE3RyxPQUFBO1VBRUEsSUFBQStELEdBQUEsR0FBQS9ELE9BQUE7VUFFQSxJQUFBaUQsV0FBQSxHQUFBakQsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQStHLFFBQUEsR0FBQS9HLE9BQUE7VUFDQSxJQUFBZ0gsT0FBQSxHQUFBaEgsT0FBQTtVQUdBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBRU0sU0FBVWlILElBQUlBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRUMsbUJBQW1CO2NBQUVDLE1BQU07Y0FBRUMsU0FBUztjQUFFQyxVQUFVO2NBQUVDO1lBQVMsQ0FBRSxHQUFHTCxJQUFJO1lBQzlFLE1BQU0sQ0FBQ00sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR1osS0FBSyxDQUFDMUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNO2NBQUVkLEtBQUs7Y0FBRWhEO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUN6QyxNQUFNMkUsV0FBVyxHQUFHQSxDQUFBLEtBQU1ELFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTUUsVUFBVSxHQUFHdEQsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUN1RCxlQUFlLEVBQUU7Y0FDdkJILFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUNELE1BQU07Y0FBRUksUUFBUSxFQUFFQztZQUFXLENBQUUsR0FBR1osSUFBSTtZQUV0QyxNQUFNYSxVQUFVLEdBQUc7Y0FDbEJsRSxTQUFTLEVBQUVpRSxXQUFXLEVBQUU3QixNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxlQUFlO2NBQ2hFK0IsSUFBSSxFQUNIRixXQUFXLEVBQUU3QixNQUFNLEdBQUcsQ0FBQyxHQUNwQjVDLEtBQUssQ0FBQ2pDLFVBQVUsQ0FBQzZHLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFTCxXQUFXLEVBQUU3QixNQUFNLENBQUMsR0FDbkU1QyxLQUFLLENBQUNqQyxVQUFVLENBQUM2RyxRQUFRLENBQUN4RTthQUM5QjtZQUVEO2NBQ0M7Y0FDQW9ELEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ1MsR0FBQSxDQUFBcUUsSUFBSTtnQkFBQ0MsTUFBTSxFQUFFO2NBQUksR0FDakJ4QixLQUFBLENBQUF2RCxhQUFBLENBQUNTLEdBQUEsQ0FBQXVFLFdBQVc7Z0JBQUN6RSxTQUFTLEVBQUM7Y0FBUyxHQUMvQmdELEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ3dELE1BQUEsQ0FBQWpFLE9BQVc7Z0JBQUNSLElBQUksRUFBRTZFO2NBQUksRUFBSSxFQUMzQkwsS0FBQSxDQUFBdkQsYUFBQSxDQUFDeUQsUUFBQSxDQUFBbEUsT0FBYztnQkFBQ1gsTUFBTSxFQUFFZ0Y7Y0FBSSxFQUFJLENBQ25CLEVBQ2RMLEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ1MsR0FBQSxDQUFBd0UsVUFBVTtnQkFBQzFFLFNBQVMsRUFBQztjQUFtQyxHQUN4RGdELEtBQUEsQ0FBQXZELGFBQUE7Z0JBQVNPLFNBQVMsRUFBQztjQUFTLEdBQzNCZ0QsS0FBQSxDQUFBdkQsYUFBQTtnQkFBTU8sU0FBUyxFQUFFa0UsVUFBVSxDQUFDbEU7Y0FBUyxHQUFHa0UsVUFBVSxDQUFDQyxJQUFJLENBQVEsQ0FDdEQsRUFDVm5CLEtBQUEsQ0FBQXZELGFBQUE7Z0JBQVNPLFNBQVMsRUFBQztjQUFTLEdBQzNCZ0QsS0FBQSxDQUFBdkQsYUFBQSxDQUFDTCxXQUFBLENBQUF1RixNQUFNO2dCQUFDQyxPQUFPLEVBQUMsU0FBUztnQkFBQ0MsT0FBTyxFQUFFZjtjQUFVLEdBQzNDdEUsS0FBSyxDQUFDakMsVUFBVSxDQUFDdUgsTUFBTSxDQUNoQixFQUNSbkIsU0FBUyxJQUNUWCxLQUFBLENBQUF2RCxhQUFBLENBQUMwRCxPQUFBLENBQUE0QixXQUFXO2dCQUNYdkgsV0FBVyxFQUFFaEIsS0FBSyxDQUFDZ0IsV0FBVztnQkFDOUJnQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ2pDLFVBQVU7Z0JBQ3ZCYyxNQUFNLEVBQUVnRixJQUFJO2dCQUNaMkIsT0FBTyxFQUFFbkI7Y0FBVyxFQUVyQixDQUNRLENBQ0U7WUFBQTtVQUdoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQS9FLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUVBLE1BQU04SSxhQUFhLEdBQUc7WUFDckJ4SCxLQUFLLEVBQUUsT0FBTztZQUNkeUgsVUFBVSxFQUFFO1dBQ1o7VUFDYSxTQUFVQyxNQUFNQSxDQUFDO1lBQUV6QixTQUFTO1lBQUVGLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQ2xFLE1BQU07Y0FBRWpFO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE1BQU1rRyxjQUFjLEdBQUdDLE1BQU0sSUFBRztjQUMvQixJQUFJQyxLQUFLLEdBQUdMLGFBQWEsQ0FBQ0ksTUFBTSxDQUFDO2NBQ2pDLE9BQU9DLEtBQUssSUFBSSxLQUFLO1lBQ3RCLENBQUM7WUFDRCxPQUNDeEcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBU08sU0FBUyxFQUFDO1lBQVUsR0FDNUJsQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBUSxHQUN0QmxCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtPLFNBQVMsRUFBRSxpQkFBaUJvRixjQUFjLENBQUM1QixTQUFTLEVBQUU2QixNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzVFdkcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBS0QsS0FBSyxDQUFDK0YsT0FBTyxDQUFDQyxRQUFRLENBQUNoQyxTQUFTLENBQU0sQ0FDdEMsRUFDTjFFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtPLFNBQVMsRUFBRSxpQkFBaUJvRixjQUFjLENBQUMxQixTQUFTLEVBQUUyQixNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzVFdkcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBS0QsS0FBSyxDQUFDK0YsT0FBTyxDQUFDQyxRQUFRLENBQUM5QixTQUFTLENBQU0sQ0FDdEMsRUFDTjVFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtPLFNBQVMsRUFBRSxpQkFBaUJvRixjQUFjLENBQUMzQixVQUFVLEVBQUU0QixNQUFNLENBQUM7WUFBRSxFQUFRLEVBQzdFdkcsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBS0QsS0FBSyxDQUFDK0YsT0FBTyxDQUFDQyxRQUFRLENBQUMvQixVQUFVLENBQU0sQ0FDdkMsQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUEzRSxNQUFBLEdBQUEzQyxPQUFBO1VBRUEsSUFBQWlELFdBQUEsR0FBQWpELE9BQUE7VUFFYyxTQUFVc0osV0FBV0EsQ0FBQztZQUFFakg7VUFBSSxDQUFFO1lBQzNDLE9BQ0NNLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGtCQUNDWCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDTCxXQUFBLENBQUFVLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLDBCQUEwQnZCLElBQUksQ0FBQ1YsRUFBRTtZQUFFLEdBQzlDZ0IsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsYUFBS2pCLElBQUksQ0FBQzhFLG1CQUFtQixDQUFNLENBQzdCLENBQ0U7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBeEUsTUFBQSxHQUFBM0MsT0FBQTtVQUVBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQXVKLFlBQUEsR0FBQXZKLE9BQUE7VUFFYyxTQUFVd0osVUFBVUEsQ0FBQztZQUFFcEM7VUFBTSxDQUFFO1lBQzVDLE1BQU07Y0FBRS9EO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQzBHLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcvRyxNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkQsT0FDQ3hCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNpRyxZQUFBLENBQUFJLG9CQUFvQjtjQUFDOUYsU0FBUyxFQUFDLFFBQVE7Y0FBQytGLFFBQVEsRUFBRTtZQUFLLEdBQ3ZEakgsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lHLFlBQUEsQ0FBQU0saUJBQWlCO2NBQUNoRyxTQUFTLEVBQUM7WUFBZSxHQUMzQ2xCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLGFBQUtELEtBQUssQ0FBQytGLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBTSxDQUNwQixFQUNwQnpHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNpRyxZQUFBLENBQUFPLGtCQUFrQjtjQUFDakcsU0FBUyxFQUFDO1lBQWdCLEdBQzdDbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUE7Y0FBSU8sU0FBUyxFQUFFLGVBQWU0RixPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUU7WUFBRSxHQUN0RHJDLE1BQU0sQ0FBQ2pGLEtBQUssQ0FBQzRILEdBQUcsQ0FBQ0MsS0FBSyxJQUN0QnJILE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUkyRyxHQUFHLEVBQUVELEtBQUssQ0FBQ3JJO1lBQUUsR0FDaEJnQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxhQUFLMEcsS0FBSyxDQUFDcEYsS0FBSyxDQUFNLENBRXZCLENBQUMsQ0FDRSxDQUNlLENBQ0M7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFqQyxNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQWtLLEtBQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBbUssS0FBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQXFGLEtBQUEsR0FBQXJGLE9BQUE7VUFFTSxTQUFVbUcsSUFBSUEsQ0FBQyxFQUFFO1lBQ3RCLE1BQU07Y0FBRWhFO1lBQUssQ0FBRSxHQUFHLElBQUFnQixRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNcUgsYUFBYSxHQUFHakksS0FBSyxDQUFDNEgsR0FBRyxDQUFDLENBQUMxSCxJQUFJLEVBQUVnSSxLQUFLLEtBQUsxSCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDNkcsS0FBQSxDQUFBbEQsSUFBSTtjQUFDQyxJQUFJLEVBQUU3RSxJQUFJO2NBQUU0SCxHQUFHLEVBQUVJO1lBQUssRUFBSSxDQUFDO1lBQ2xGLE1BQU07Y0FBRWhIO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ2xDLE9BQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUFYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBNkIsUUFBQSxRQUNDL0IsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQytCLEtBQUEsQ0FBQWMsSUFBWTtjQUFDdEMsU0FBUyxFQUFDLFlBQVk7Y0FBQzFCLEtBQUssRUFBRUEsS0FBSztjQUFFbUksT0FBTyxFQUFFSCxLQUFBLENBQUFsRDtZQUFJLEVBQUksRUFFcEV0RSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBaUMsR0FDL0NsQixNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxDQUFDNEcsS0FBQSxDQUFBdkcsSUFBSTtjQUFDQyxJQUFJLEVBQUMsb0JBQW9CO2NBQUNDLFNBQVMsRUFBQztZQUFzQixHQUM5RFIsS0FBSyxDQUFDK0YsT0FBTyxDQUFDdEYsTUFBTSxDQUNmLENBQ0YsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBbkIsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQWlELFdBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBdUssTUFBQSxHQUFBdkssT0FBQTtVQUVBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBRU0sU0FBVW9HLGFBQWFBLENBQUMsRUFBRTtZQUMvQixNQUFNO2NBQ0wvRixLQUFLO2NBQ0xnRCxLQUFLLEVBQUU7Z0JBQ05tSCxNQUFNLEVBQUU7a0JBQ1BDLGlCQUFpQjtrQkFDakJDLFlBQVksRUFBRTtvQkFBRTFDLElBQUk7b0JBQUUyQyxNQUFNO29CQUFFakksS0FBSyxFQUFFa0k7a0JBQVk7Z0JBQUU7Y0FDbkQ7WUFDRCxDQUNELEdBQUcsSUFBQXpILFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3BCLE1BQU0sQ0FBQzRDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdqRCxNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDekIsS0FBSyxFQUFFbUksUUFBUSxDQUFDLEdBQUdsSSxNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUMsTUFBTXVFLE9BQU8sR0FBRyxNQUFNckUsS0FBSyxJQUFHO2NBQzdCLElBQUk7Z0JBQ0h1QixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNa0YsR0FBRyxHQUFHLE1BQU05SixXQUFBLENBQUFJLFVBQVUsQ0FBQzJKLE1BQU0sRUFBRTtnQkFDckMsSUFBSSxDQUFDRCxHQUFHLEVBQUU7a0JBQ1QsTUFBTSxJQUFJRSxLQUFLLENBQUMsbUJBQW1CLENBQUM7O2dCQUVyQ3BGLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCcUYsTUFBTSxDQUFDQyxRQUFRLENBQUN0SCxJQUFJLEdBQUdrSCxHQUFHO2VBQzFCLENBQUMsT0FBT3JJLENBQUMsRUFBRTtnQkFDWEgsT0FBTyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxFQUFFK0gsaUJBQWlCLEVBQUVoSSxDQUFDLENBQUM7Z0JBQ3RDb0ksUUFBUSxDQUFDSixpQkFBaUIsQ0FBQztlQUMzQixTQUFTO2dCQUNUN0UsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0NqRCxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBZSxHQUM3QmxCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBO2NBQUtPLFNBQVMsRUFBQztZQUErQixHQUM3Q2xCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNpSCxNQUFBLENBQUFZLEtBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FDakJ6SSxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQSxhQUFLMEUsSUFBSSxDQUFNLENBQ1IsRUFFUHRGLEtBQUssSUFBSUMsTUFBQSxDQUFBRSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lILE1BQUEsQ0FBQVksS0FBSztjQUFDQyxJQUFJLEVBQUM7WUFBTyxHQUFFMUksS0FBSyxDQUFTLEVBRTdDQyxNQUFBLENBQUFFLE9BQUEsQ0FBQVMsYUFBQTtjQUFTTyxTQUFTLEVBQUM7WUFBUyxHQUMzQmxCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBUyxhQUFBLENBQUNMLFdBQUEsQ0FBQXVGLE1BQU07Y0FBQ0UsT0FBTyxFQUFFQSxPQUFPO2NBQUUyQyxPQUFPLEVBQUUxRixRQUFRO2NBQUU5QixTQUFTLEVBQUM7WUFBaUIsR0FDdEU4RyxNQUFNLENBQ0MsQ0FDQSxDQUNMLENBQ0Q7VUFFUiJ9