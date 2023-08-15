System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Icons) {
      dependency_14 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_15 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_16 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Toast) {
      dependency_17 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp100Config) {
      dependency_18 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0036Collapsible) {
      dependency_19 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Alert) {
      dependency_20 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/alert', dependency_20]]);
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
        hash: 2553137039,
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
        hash: 3188948037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyElements = EmptyElements;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _empty = require("pragmate-ui/empty");
          function EmptyElements() {
            return React.createElement(_empty.Empty, {
              message: 'No creaste clases todav\u00EDa',
              icon: 'info'
            }, React.createElement(_components.Link, {
              href: '/classes/management/new',
              className: 'btn btn-primary'
            }, "Crear"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4266731709,
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
          var _list = require("./list");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _requireAccess = require("./require-access");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            const Control = store.authorized ? _list.List : _requireAccess.RequireAccess;
            return React.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(Control, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/actions
      ************************************/

      ims.set('./views/item/actions', {
        hash: 2767408479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _shareModal = require("./share-modal");
          function LessonsActions({
            lesson
          }) {
            const shareDialog = React.useRef(null);
            const handleClose = () => shareDialog.current.close();
            const handleOpen = () => shareDialog.current.showModal();
            return React.createElement("section", {
              className: "class-actions"
            }, React.createElement(_link.Link, {
              href: `/classes/management/${lesson.id}`
            }, React.createElement(_icons.IconButton, {
              icon: "edit"
            })), React.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: handleOpen
            }), React.createElement(_icons.IconButton, {
              icon: "delete"
            }), React.createElement(_shareModal.ShareClass, {
              ref: shareDialog,
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
        hash: 2031844989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _topicsList = require("./topics-list");
          var _status = require("./status");
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
            }), React.createElement(_status.default, {
              assessment: assessment,
              relevance: relevance,
              synthesis: synthesis
            }), React.createElement(_topicsList.default, {
              topics: topics
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/item/share-modal/classrooms
      ***************************************************/

      ims.set('./views/item/share-modal/classrooms', {
        hash: 483618934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomsList = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _item = require("./item");
          const GClassroomsList = ({
            lesson,
            setGClassSelected
          }) => {
            const {
              texts: {
                gclassrooms: texts
              },
              store: {
                gclassrooms
              }
            } = (0, _context.useListContext)();
            const [selected, setSelected] = (0, _react.useState)();
            const onSelect = event => {
              event.preventDefault();
              setGClassSelected(selected);
            };
            const items = gclassrooms.map(item => {
              return _react.default.createElement(_item.GClassroomItem, {
                key: item.id,
                lesson: lesson,
                item: item
              });
            });
            return _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement("ul", {
              className: "classroom__list"
            }, items), selected && _react.default.createElement(_form.Button, {
              onClick: onSelect
            }, texts.confirm)));
          };
          exports.GClassroomsList = GClassroomsList;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/item/share-modal/index
      **********************************************/

      ims.set('./views/item/share-modal/index', {
        hash: 2838800386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareClass = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _share = require("./share");
          var _classrooms = require("./classrooms");
          const ShareClass = (0, _react.forwardRef)((props, ref) => {
            const {
              onClose,
              lesson
            } = props;
            const [gclassSelected, setGClassSelected] = (0, _react.useState)(undefined);
            const Control = gclassSelected ? _share.ShareContent : _classrooms.GClassroomsList;
            return _react.default.createElement("dialog", {
              ref: ref
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: "close",
              onClick: onClose
            }), _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(Control, {
              lesson: lesson,
              gclass: gclassSelected,
              onClose: onClose,
              setGclass: setGClassSelected
            })));
          });
          exports.ShareClass = ShareClass;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/item/share-modal/item
      *********************************************/

      ims.set('./views/item/share-modal/item', {
        hash: 150870633,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomItem = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../../context");
          const GClassroomItem = ({
            item,
            lesson
          }) => {
            const {
              texts: {
                gclassrooms: texts
              },
              store,
              store: {
                gclassrooms
              }
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [sessionURL, setSessionURL] = (0, _react.useState)(null);
            const onClick = async event => {
              setFetching(true);
              event.preventDefault();
              const session = await store.addSession(lesson.id, item.id);
              setFetching(false);
              setSessionURL(`${_config.default.params.baseUrl}/sessions/access/${session.id}`);
            };
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            let link = sessionURL;
            if (!sessionURL) {
              link = lesson.sessionsMap.has(item.id) ? lesson.sessionsMap.get(item.id).url : undefined;
            }
            const copy = () => {
              navigator.clipboard.writeText(link);
              _toast.toast.success('Class link copied to clipboard');
            };
            return _react.default.createElement("li", {
              key: item.id
            }, name, _react.default.createElement("div", {
              className: "item__actions"
            }, link ? _react.default.createElement("div", {
              className: "copy__container"
            }, _react.default.createElement(_components.Input, {
              value: link,
              disabled: true,
              className: "share__input"
            }), _react.default.createElement(_icons.IconButton, {
              onClick: copy,
              icon: "copy-link"
            })) : _react.default.createElement(_form.Button, {
              loading: fetching,
              onClick: onClick
            }, texts.assign)));
          };
          exports.GClassroomItem = GClassroomItem;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/item/share-modal/share
      **********************************************/

      ims.set('./views/item/share-modal/share', {
        hash: 4249479981,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareContent = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          const ShareContent = (props, ref) => {
            const {
              lesson,
              gclass,
              onClose
            } = props;
            const {
              texts
            } = (0, _context.useListContext)();
            const folderLink = lesson.sessions.has(gclass) ? lesson.sessions.get(gclass) : undefined;
            function copyToClipboard() {
              navigator.clipboard.writeText(folderLink);
              _toast.toast.success('Class link copied to clipboard');
              onClose();
            }
            const {
              share
            } = texts.classes;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h1", null, share.header)), _react.default.createElement("div", {
              className: "share__details"
            }, _react.default.createElement("h3", null, share.title), _react.default.createElement("p", null, share.description)), _react.default.createElement(_components.Input, {
              value: folderLink,
              disabled: true,
              className: "share__input"
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: "close-circle",
              variant: "link",
              onClick: onClose
            }, share.close), _react.default.createElement(_form.Button, {
              icon: "copy-link",
              variant: "primary",
              onClick: copyToClipboard
            }, share.copy)));
          };
          exports.ShareContent = ShareContent;
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

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3179964717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _route = require("./route");
          var _empty = require("./empty");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("./context");
          var _components2 = require("pragmate-ui/components");
          function List({}) {
            const {
              texts,
              store,
              store: {
                collection
              }
            } = (0, _context.useListContext)();
            const [ready, setReady] = React.useState(store.ready);
            const [fetching, setFetching] = React.useState(false);
            const [items, setItems] = React.useState(collection.items);
            const [search, setSearch] = React.useState('');
            const handleSearch = event => {
              const {
                value
              } = event.target;
              setSearch(value);
            };
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching || store.ready);
              setReady(store.ready);
              setItems(collection.items);
            });
            if (!ready) return React.createElement(_components.PreloadScreen, null);
            const Control = items.length ? React.createElement(_route.Route, {
              items: items
            }) : React.createElement(_empty.EmptyElements, null);
            return React.createElement(React.Fragment, null, React.createElement(_components.CollapsibleHeader, {
              title: texts.classes.classes
            }, React.createElement(_components.Input, {
              type: "search",
              value: search,
              onChange: handleSearch,
              label: texts.classes.search,
              required: true,
              className: "grow"
            }), React.createElement(_components2.Link, {
              href: "/lessons/management/new",
              className: "grow"
            }, React.createElement(_components2.Button, {
              icon: "class",
              label: texts.classes.create,
              className: "grow"
            }))), Control);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/require-access
      **************************************/

      ims.set('./views/require-access', {
        hash: 117299562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequireAccess = RequireAccess;
          var React = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function RequireAccess({}) {
            const {
              store,
              texts: {
                access: {
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
                if (!url) {
                  throw new Error('Unable to get url');
                }
                setFetching(false);
                window.location.href = url;
              } catch (e) {
                setError(errorMessage);
              }
            };
            return React.createElement("div", {
              className: "sidebar__list"
            }, React.createElement("h3", null, text), error && React.createElement(_alert.Alert, null, errorMessage), React.createElement(_components.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, action));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/route
      *****************************/

      ims.set('./views/route', {
        hash: 2711746754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Route = Route;
          var React = require("react");
          var _item = require("./item");
          function Route({
            items
          }) {
            const renderedItems = items.map((item, index) => React.createElement(_item.Item, {
              data: item,
              key: index
            }));
            return renderedItems;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJSZWFjdCIsIkxpc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2VtcHR5IiwiRW1wdHlFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eSIsIm1lc3NhZ2UiLCJpY29uIiwiTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfbGlzdCIsIl9ob29rczIiLCJfY29udGV4dCIsIl9yZXF1aXJlQWNjZXNzIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiUmVxdWlyZUFjY2VzcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJfaWNvbnMiLCJfbGluayIsIl9zaGFyZU1vZGFsIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsImhhbmRsZUNsb3NlIiwiY3VycmVudCIsImNsb3NlIiwiaGFuZGxlT3BlbiIsInNob3dNb2RhbCIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVDbGFzcyIsInJlZiIsIm9uQ2xvc2UiLCJfdG9waWNzTGlzdCIsIl9zdGF0dXMiLCJfdGl0bGUiLCJJdGVtIiwiZGF0YSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY3MiLCJyZWxldmFuY2UiLCJhc3Nlc3NtZW50Iiwic3ludGhlc2lzIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9mb3JtIiwiX2l0ZW0iLCJHQ2xhc3Nyb29tc0xpc3QiLCJzZXRHQ2xhc3NTZWxlY3RlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvblNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsInRpdGxlIiwiQnV0dG9uIiwiY29uZmlybSIsIl9zaGFyZSIsIl9jbGFzc3Jvb21zIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiZ2NsYXNzU2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJTaGFyZUNvbnRlbnQiLCJnY2xhc3MiLCJzZXRHY2xhc3MiLCJfdG9hc3QiLCJfY29uZmlnIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNlc3Npb25VUkwiLCJzZXRTZXNzaW9uVVJMIiwicGFyYW1zIiwiYmFzZVVybCIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIklucHV0IiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiYXNzaWduIiwiZm9sZGVyTGluayIsInNlc3Npb25zIiwiY29weVRvQ2xpcGJvYXJkIiwic2hhcmUiLCJjbGFzc2VzIiwiRnJhZ21lbnQiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIl9hY3Rpb25zIiwiTGVzc29uVGl0bGUiLCJJY29uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwidG9waWMiLCJfcm91dGUiLCJfY29tcG9uZW50czIiLCJzZXRJdGVtcyIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsImxlbmd0aCIsIlJvdXRlIiwidHlwZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJyZXF1aXJlZCIsImNyZWF0ZSIsIl9hbGVydCIsImFjY2VzcyIsInVuYXV0aG9yaXplZCIsInRleHQiLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsImdldFVybCIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJBbGVydCIsInJlbmRlcmVkSXRlbXMiLCJpbmRleCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3dpZGdldC90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9jbGFzc3Jvb21zLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vc2hhcmUtbW9kYWwvaXRlbS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vc2hhcmUtbW9kYWwvc2hhcmUudHN4IiwiL3dpZGdldC90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3dpZGdldC90cy92aWV3cy9pdGVtL3RvcGljcy1saXN0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvbGlzdC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3JlcXVpcmUtYWNjZXNzLnRzeCIsIi93aWRnZXQvdHMvdmlld3Mvcm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBVCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7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