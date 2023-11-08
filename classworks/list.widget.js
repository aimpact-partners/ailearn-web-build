System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/link", "@aimpact/ailearn-app@0.0.11/classworks/assign", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_pragmateUi003Empty) {
      dependency_10 = _pragmateUi003Empty;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_13 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Icons) {
      dependency_14 = _pragmateUi003Icons;
    }, function (_pragmateUi003Link) {
      dependency_15 = _pragmateUi003Link;
    }, function (_aimpactAilearnApp0011ClassworksAssign) {
      dependency_16 = _aimpactAilearnApp0011ClassworksAssign;
    }, function (_pragmateUi003Collapsible) {
      dependency_17 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Alert) {
      dependency_18 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['@aimpact/ailearn-app/classworks/assign', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/alert', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/list.widget",
        "is": "page",
        "route": "/classworks/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/classworks/list.widget');
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
        hash: 2518030801,
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
              href: "/classworks/create",
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
        hash: 491719225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _assign = require("@aimpact/ailearn-app/classworks/assign");
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
        hash: 1437078380,
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
              href: `/classworks/management/${item.id}`
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
        hash: 2126856041,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiX2NvbXBvbmVudHMyIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImNsYXNzZXMiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9yZXF1aXJlQWNjZXNzIiwiX2xpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJpc05vdEVtcHR5IiwibGVuZ3RoIiwiQ29udHJvbCIsIkxpc3QiLCJSZXF1aXJlQWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJfaWNvbnMiLCJfYXNzaWduIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiUmVhY3QiLCJfdG9waWNzTGlzdCIsIl90aXRsZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIl9hY3Rpb25zIiwiTGVzc29uVGl0bGUiLCJJY29uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIm1hcCIsInRvcGljIiwia2V5IiwiX2xpbmsiLCJfaXRlbSIsInJlbmRlcmVkSXRlbXMiLCJpbmRleCIsIkZyYWdtZW50IiwiX2FsZXJ0IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJsb2FkaW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENB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