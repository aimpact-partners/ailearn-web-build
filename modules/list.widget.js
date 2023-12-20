System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.24/classworks/assign", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024ClassworksAssign) {
      dependency_15 = _aimpactAilearnApp0024ClassworksAssign;
    }, function (_pragmateUi003Collapsible) {
      dependency_16 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Link) {
      dependency_17 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_18 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_19 = _pragmateUi003Alert;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.23/modules/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/classworks/assign', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/link', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/alert', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.23/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.23/modules/list.widget');
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
        hash: 3562177307,
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
        hash: 914635631,
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
          var _requireAccess = require("./list/require-access");
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
            const Control = store.authorized ? isNotEmpty ? _list.List : _empty.EmptyList : _requireAccess.RequireAccess;
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)), _react.default.createElement("div", {
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
            }, texts.spanInfo))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaW5rIiwiaHJlZiIsImNsYXNzTmFtZSIsImNyZWF0ZSIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInVzZXJOYW1lIiwiZGlzcGxheU5hbWUiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImFsdCIsImltYWdlIiwid2VsY29tZSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9yZXF1aXJlQWNjZXNzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEl0ZW1zIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImlzTm90RW1wdHkiLCJsZW5ndGgiLCJDb250cm9sIiwiTGlzdCIsIlJlcXVpcmVBY2Nlc3MiLCJjbHMiLCJQcm92aWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsInRleHRDbGFzc3Jvb20iLCJzcGFuQ2xhc3Nyb29tIiwidGl0bGVJbmZvIiwic3BhbkluZm8iLCJfaWNvbnMiLCJMZXNzb25zQWN0aW9ucyIsIkljb25CdXR0b24iLCJSZWFjdCIsIl90aXRsZSIsIl9hY3Rpb25zIiwiX2Fzc2lnbiIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJzZXNzaW9ucyIsImFzc2lnbm1lbnRzIiwiZm9vdGVyVGV4dCIsInF1YW50aXR5IiwibnVtYmVyIiwicmVwbGFjZSIsIkNhcmQiLCJzaW1wbGUiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFzc2lnbiIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJlbGVtZW50cyIsIkxlc3NvblRpdGxlIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwibWFwIiwidG9waWMiLCJrZXkiLCJfbGluayIsIl9pdGVtIiwicmVuZGVyZWRJdGVtcyIsImluZGV4IiwiY29udHJvbCIsIl9hbGVydCIsImFjY2VzcyIsIkVSUk9SX0dFVFRJTkdfVVJMIiwidW5hdXRob3JpemVkIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJ0eXBlIiwibG9hZGluZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdG9waWNzLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcmVxdWlyZS1hY2Nlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87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