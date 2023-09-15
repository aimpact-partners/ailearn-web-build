System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive115Model) {
      dependency_4 = _beyondJsReactive115Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Empty) {
      dependency_10 = _pragmateUi0036Empty;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Icons) {
      dependency_14 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_15 = _pragmateUi0036Link;
    }, function (_aimpactAilearnApp100LessonsAssign) {
      dependency_16 = _aimpactAilearnApp100LessonsAssign;
    }, function (_pragmateUi0036Collapsible) {
      dependency_17 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Alert) {
      dependency_18 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['@aimpact/ailearn-app/lessons/assign', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/alert', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/list.widget",
        "is": "page",
        "route": "/lessons/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/lessons/list.widget');
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
          const ListContext = _react.default.createContext({});
          exports.ListContext = ListContext;
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2071388959,
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
              href: "/lessons/create",
              className: "btn btn-primary"
            }, texts.create));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2604377606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
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
            return _react.default.createElement(_components2.CollapsibleHeader, {
              collapsed: true,
              title: texts.classes.classes
            }, _react.default.createElement(_components2.Input, {
              type: "search",
              value: search,
              onChange: handleSearch,
              label: texts.classes.search,
              required: true,
              className: "grow"
            }), _react.default.createElement(_components.Link, {
              href: "/lessons/create",
              className: "grow"
            }, texts.classes.create));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 498493959,
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
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 3030496233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _assign = require("@aimpact/ailearn-app/lessons/assign");
          var _context = require("../context");
          //import { ShareClass } from './share-modal';

          function LessonsActions({
            lesson
          }) {
            const shareDialog = _react.default.useRef(null);
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const handleClose = () => setShowModal(false);
            const handleOpen = () => setShowModal(true);
            return _react.default.createElement("section", {
              className: "class-actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: handleOpen
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete"
            }), showModal && _react.default.createElement(_assign.ShareLesson, {
              gclassrooms: store.gclassrooms,
              texts: texts.gclassrooms,
              lesson: lesson,
              onClose: handleClose
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 1236690488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _topicsList = require("./topics-list");
          var _title = require("./title");
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
            return React.createElement("div", {
              className: "list__item"
            }, React.createElement(_title.default, {
              item: data
            }), React.createElement(_topicsList.default, {
              topics: topics
            }));
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
        hash: 1390434475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonTitle;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _actions = require("./actions");
          function LessonTitle({
            item
          }) {
            return _react.default.createElement("section", {
              className: "list__item__header curriculum-objective"
            }, _react.default.createElement("header", null, _react.default.createElement(_components.Link, {
              href: `/lessons/management/${item.id}`
            }, _react.default.createElement("h4", null, _react.default.createElement(_icons.Icon, {
              icon: "class"
            }), item.curriculumObjective))), _react.default.createElement(_actions.default, {
              lesson: item
            }));
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
        hash: 2628451392,
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
            return _react.default.createElement(_react.default.Fragment, null, renderedItems, _react.default.createElement("div", {
              className: "actions flex-container flex-end"
            }, _react.default.createElement(_link.Link, {
              href: "/lessons/create",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiX2NvbXBvbmVudHMyIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImNsYXNzZXMiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9yZXF1aXJlQWNjZXNzIiwiX2xpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJpc05vdEVtcHR5IiwibGVuZ3RoIiwiQ29udHJvbCIsIkxpc3QiLCJSZXF1aXJlQWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJfaWNvbnMiLCJfYXNzaWduIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiUmVhY3QiLCJfdG9waWNzTGlzdCIsIl90aXRsZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIl9hY3Rpb25zIiwiTGVzc29uVGl0bGUiLCJJY29uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIm1hcCIsInRvcGljIiwia2V5IiwiX2xpbmsiLCJfaXRlbSIsInJlbmRlcmVkSXRlbXMiLCJpbmRleCIsIkZyYWdtZW50IiwiX2FsZXJ0IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJsb2FkaW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENB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