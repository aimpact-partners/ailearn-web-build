System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.2/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/empty", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/link", "@aimpact/ailearn-app@0.0.2/lessons/assign", "pragmate-ui@0.0.37/collapsible", "pragmate-ui@0.0.37/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp002ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp002ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Empty) {
      dependency_10 = _pragmateUi0037Empty;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Icons) {
      dependency_14 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Link) {
      dependency_15 = _pragmateUi0037Link;
    }, function (_aimpactAilearnApp002LessonsAssign) {
      dependency_16 = _aimpactAilearnApp002LessonsAssign;
    }, function (_pragmateUi0037Collapsible) {
      dependency_17 = _pragmateUi0037Collapsible;
    }, function (_pragmateUi0037Alert) {
      dependency_18 = _pragmateUi0037Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['@aimpact/ailearn-app/lessons/assign', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/alert', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/list.widget",
        "is": "page",
        "route": "/lessons/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/lessons/list.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FDQyxDQUNBLENBQ0wsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY29sbGVjdGlvbiIsImF1dGhvcml6ZWQiLCJnY2xhc3Nyb29tIiwiZ2NsYXNzcm9vbXMiLCJyZWFkeSIsIkxlc3NvbnMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImdsb2JhbFRoaXMiLCJjIiwiY291cnNlcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImdjbGFzc0lkIiwibGVzc29uIiwiaXRlbXMiLCJmaW5kIiwiaXRlbSIsImNvbnNvbGUiLCJ3YXJuIiwic2Vzc2lvbiIsImUiLCJlcnJvciIsIkxpc3RDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiRW1wdHlMaXN0IiwidGV4dHMiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsImNsYXNzTmFtZSIsImNyZWF0ZSIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY29sbGFwc2VkIiwidGl0bGUiLCJjbGFzc2VzIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwic3RvcmUiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0SXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwiaXNOb3RFbXB0eSIsImxlbmd0aCIsIkNvbnRyb2wiLCJMaXN0IiwiUmVxdWlyZUFjY2VzcyIsImNscyIsIlByb3ZpZGVyIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiSXRlbSIsImRhdGEiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsInN5bnRoZXNpcyIsIkxlc3NvblRpdGxlIiwiVG9waWNzTGlzdCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImVsZW1lbnRzIiwiSWNvbiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIm1hcCIsInRvcGljIiwia2V5IiwicmVuZGVyZWRJdGVtcyIsImluZGV4IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZW1wdHkudHN4IiwidHMvdmlld3MvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCJ0cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW0vc3RhdHVzLnRzeCIsInRzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwidHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCJ0cy92aWV3cy9saXN0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2xpc3QvcmVxdWlyZS1hY2Nlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19