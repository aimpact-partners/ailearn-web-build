System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.10/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/link", "@aimpact/ailearn-app@0.0.10/classworks/assign", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0010ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp0010ModelGclassroom;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_pragmateUi003Empty) {
      dependency_9 = _pragmateUi003Empty;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Icons) {
      dependency_13 = _pragmateUi003Icons;
    }, function (_pragmateUi003Link) {
      dependency_14 = _pragmateUi003Link;
    }, function (_aimpactAilearnApp0010ClassworksAssign) {
      dependency_15 = _aimpactAilearnApp0010ClassworksAssign;
    }, function (_pragmateUi003Collapsible) {
      dependency_16 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Alert) {
      dependency_17 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/empty', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/ailearn-app/classworks/assign', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/alert', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/list.widget",
        "is": "page",
        "route": "/classworks/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/classworks/list.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiX2NvbXBvbmVudHMyIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImNsYXNzZXMiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9yZXF1aXJlQWNjZXNzIiwiX2xpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJpc05vdEVtcHR5IiwibGVuZ3RoIiwiQ29udHJvbCIsIkxpc3QiLCJSZXF1aXJlQWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJfaWNvbnMiLCJfYXNzaWduIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiUmVhY3QiLCJfdG9waWNzTGlzdCIsIl90aXRsZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIl9hY3Rpb25zIiwiTGVzc29uVGl0bGUiLCJJY29uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIm1hcCIsInRvcGljIiwia2V5IiwiX2xpbmsiLCJfaXRlbSIsInJlbmRlcmVkSXRlbXMiLCJpbmRleCIsIkZyYWdtZW50IiwiX2FsZXJ0IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJsb2FkaW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFB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