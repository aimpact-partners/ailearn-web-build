System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.14/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "@aimpact/ailearn-app@0.0.14/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.14/classworks/assign", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
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
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_13 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/classworks/assign', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
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
        hash: 3995559411,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./empty");
          var _header = require("./header");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiX3VpIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwidXNlck5hbWUiLCJkaXNwbGF5TmFtZSIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiYWx0IiwiaW1hZ2UiLCJ3ZWxjb21lIiwiX2hlYWRlciIsIl9saXN0IiwiX3JlcXVpcmVBY2Nlc3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaXNOb3RFbXB0eSIsImxlbmd0aCIsIkNvbnRyb2wiLCJMaXN0IiwiUmVxdWlyZUFjY2VzcyIsImNscyIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwidGV4dENsYXNzcm9vbSIsInNwYW5DbGFzc3Jvb20iLCJ0aXRsZUluZm8iLCJzcGFuSW5mbyIsIl9pY29ucyIsIkxlc3NvbnNBY3Rpb25zIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiX3RpdGxlIiwiX2FjdGlvbnMiLCJfYXNzaWduIiwiSXRlbSIsImRhdGEiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsInN5bnRoZXNpcyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25zIiwiYXNzaWdubWVudHMiLCJmb290ZXJUZXh0IiwidGV4dCIsInF1YW50aXR5IiwibnVtYmVyIiwicmVwbGFjZSIsIkNhcmQiLCJzaW1wbGUiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFzc2lnbiIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiU3RhdHVzIiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImNsYXNzZXMiLCJlbGVtZW50cyIsIkxlc3NvblRpdGxlIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwibWFwIiwidG9waWMiLCJrZXkiLCJfbGluayIsIl9pdGVtIiwicmVuZGVyZWRJdGVtcyIsImluZGV4IiwiY29udHJvbCIsIl9hbGVydCIsImFjY2VzcyIsIkVSUk9SX0dFVFRJTkdfVVJMIiwidW5hdXRob3JpemVkIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJ0eXBlIiwibG9hZGluZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdG9waWNzLWxpc3QudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcmVxdWlyZS1hY2Nlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9B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