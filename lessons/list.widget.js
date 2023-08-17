System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
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
        hash: 3543604398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var React = require("react");
          const ListContext = React.createContext({});
          exports.ListContext = ListContext;
          const useListContext = () => React.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 472152997,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_empty.Empty, {
              message: texts.empty,
              icon: "info"
            }, React.createElement(_components.Link, {
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
        hash: 1634187468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            const [search, setSearch] = React.useState('');
            const handleSearch = event => {
              const {
                value
              } = event.target;
              setSearch(value);
            };
            return React.createElement(_components2.CollapsibleHeader, {
              collapsed: true,
              title: texts.classes.classes
            }, React.createElement(_components2.Input, {
              type: "search",
              value: search,
              onChange: handleSearch,
              label: texts.classes.search,
              required: true,
              className: "grow"
            }), React.createElement(_components.Link, {
              href: "/lessons/create",
              className: "grow"
            }, React.createElement(_components.Button, {
              icon: "class",
              label: texts.classes.create,
              className: "grow"
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 462295592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
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
            const [ready, setReady] = React.useState(store.ready);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [items, setItems] = React.useState(collection?.items);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setItems(collection?.items);
            });
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            const Control = store.authorized ? items.length ? _list.List : _empty.EmptyList : _requireAccess.RequireAccess;
            return React.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                store,
                fetching,
                items
              }
            }, React.createElement(_header.Header, null), React.createElement(Control, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 1728011201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _assign = require("@aimpact/ailearn-app/lessons/assign");
          var _context = require("../context");
          //import { ShareClass } from './share-modal';

          function LessonsActions({
            lesson
          }) {
            const shareDialog = React.useRef(null);
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [showModal, setShowModal] = React.useState(false);
            const handleClose = () => setShowModal(false);
            const handleOpen = () => setShowModal(true);
            return React.createElement("section", {
              className: "class-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: handleOpen
            }), React.createElement(_icons.IconButton, {
              icon: "delete"
            }), showModal && React.createElement(_assign.ShareLesson, {
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
        hash: 3383074688,
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
        hash: 3041278388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonTitle;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _actions = require("./actions");
          function LessonTitle({
            item
          }) {
            return React.createElement("section", {
              className: "list__item__header curriculum-objective"
            }, React.createElement("header", null, React.createElement(_components.Link, {
              href: `/lessons/management/${item.id}`
            }, React.createElement("h4", null, React.createElement(_icons.Icon, {
              icon: "class"
            }), item.curriculumObjective))), React.createElement(_actions.default, {
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
        hash: 2748180845,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _item = require("../item");
          var _context = require("../context");
          function List({}) {
            const {
              items
            } = (0, _context.useListContext)();
            const renderedItems = items.map((item, index) => React.createElement(_item.Item, {
              data: item,
              key: index
            }));
            return renderedItems;
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/list/require-access
      *******************************************/

      ims.set('./views/list/require-access', {
        hash: 2731356400,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequireAccess = RequireAccess;
          var React = require("react");
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
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            const onClick = async event => {
              try {
                setFetching(true);
                const url = await _gclassroom.gclassroom.getUrl();
                console.log(12, url);
                if (!url) {
                  throw new Error('ERROR_GETTING_URL');
                }
                setFetching(false);
                window.location.href = url;
              } catch (e) {
                console.log(3, ERROR_GETTING_URL, e);
                setError(ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return React.createElement("div", {
              className: "sidebar__list"
            }, React.createElement("div", {
              className: "empty-page__message-container"
            }, React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement("h3", null, text)), error && React.createElement(_alert.Alert, {
              type: "error"
            }, error), React.createElement("section", {
              className: "actions"
            }, React.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ3JDbEcsT0FBTyxDQUFDbUcsR0FBRyxDQUFDLEVBQUUsRUFBRUYsR0FBRyxDQUFDO2dCQUNwQixJQUFJLENBQUNBLEdBQUcsRUFBRTtrQkFDVCxNQUFNLElBQUlHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7Z0JBRXJDeEQsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEJ5RCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3JGLElBQUksR0FBR2dGLEdBQUc7ZUFDMUIsQ0FBQyxPQUFPOUYsQ0FBQyxFQUFFO2dCQUNYSCxPQUFPLENBQUNtRyxHQUFHLENBQUMsQ0FBQyxFQUFFUixpQkFBaUIsRUFBRXhGLENBQUMsQ0FBQztnQkFDcEM2RixRQUFRLENBQUNMLGlCQUFpQixDQUFDO2VBQzNCLFNBQVM7Z0JBQ1QvQyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ3RDO2NBQUtZLFNBQVMsRUFBQztZQUFlLEdBQzdCWjtjQUFLWSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NaLG9CQUFDaUcsWUFBSztjQUFDdEUsSUFBSSxFQUFDO1lBQU0sR0FDakIzQixnQ0FBS3VGLElBQUksQ0FBTSxDQUNSLEVBRVB6RixLQUFLLElBQUlFLG9CQUFDaUcsWUFBSztjQUFDdEUsSUFBSSxFQUFDO1lBQU8sR0FBRTdCLEtBQUssQ0FBUyxFQUU3Q0U7Y0FBU1ksU0FBUyxFQUFDO1lBQVMsR0FDM0JaLG9CQUFDK0Isa0JBQU07Y0FBQ3VCLE9BQU8sRUFBRUEsT0FBTztjQUFFNEMsT0FBTyxFQUFFN0QsUUFBUTtjQUFFekIsU0FBUyxFQUFDO1lBQWlCLEdBQ3RFNEUsTUFBTSxDQUNDLENBQ0EsQ0FDTCxDQUNEO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb2xsZWN0aW9uIiwiYXV0aG9yaXplZCIsImdjbGFzc3Jvb20iLCJnY2xhc3Nyb29tcyIsInJlYWR5IiwiTGVzc29ucyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImlkIiwiZ2xvYmFsVGhpcyIsImMiLCJjb3Vyc2VzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiZ2NsYXNzSWQiLCJsZXNzb24iLCJpdGVtcyIsImZpbmQiLCJpdGVtIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uIiwiZSIsImVycm9yIiwiTGlzdENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImNsYXNzZXMiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJzdG9yZSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIlJlcXVpcmVBY2Nlc3MiLCJQcm92aWRlciIsIkxlc3NvbnNBY3Rpb25zIiwic2hhcmVEaWFsb2ciLCJ1c2VSZWYiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJJY29uQnV0dG9uIiwib25DbGljayIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJMZXNzb25UaXRsZSIsIlRvcGljc0xpc3QiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIkljb24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiaXNPcGVuZWQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJtYXAiLCJ0b3BpYyIsImtleSIsInJlbmRlcmVkSXRlbXMiLCJpbmRleCIsImFjY2VzcyIsIkVSUk9SX0dFVFRJTkdfVVJMIiwidW5hdXRob3JpemVkIiwidGV4dCIsImFjdGlvbiIsImVycm9yTWVzc2FnZSIsInNldEVycm9yIiwidXJsIiwiZ2V0VXJsIiwibG9nIiwiRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkFsZXJ0IiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2VtcHR5LnRzeCIsInRzL3ZpZXdzL2hlYWRlci50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwidHMvdmlld3MvaXRlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCJ0cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsInRzL3ZpZXdzL2l0ZW0vdG9waWNzLWxpc3QudHN4IiwidHMvdmlld3MvbGlzdC9pbmRleC50c3giLCJ0cy92aWV3cy9saXN0L3JlcXVpcmUtYWNjZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==