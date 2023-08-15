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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWdKLGFBQWEsR0FBR2hKLEtBQUssQ0FBQytELEdBQUcsQ0FBQyxDQUFDN0QsSUFBSSxFQUFFK0ksS0FBSyxLQUFLeEksb0JBQUNxQyxVQUFJO2NBQUNDLElBQUksRUFBRTdDLElBQUk7Y0FBRStELEdBQUcsRUFBRWdGO1lBQUssRUFBSSxDQUFDO1lBRWxGLE9BQU9ELGFBQWE7VUFDckIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb2xsZWN0aW9uIiwiYXV0aG9yaXplZCIsImdjbGFzc3Jvb20iLCJnY2xhc3Nyb29tcyIsInJlYWR5IiwiTGVzc29ucyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImlkIiwiZ2xvYmFsVGhpcyIsImMiLCJjb3Vyc2VzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiZ2NsYXNzSWQiLCJsZXNzb24iLCJpdGVtcyIsImZpbmQiLCJpdGVtIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uIiwiZSIsImVycm9yIiwiTGlzdENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eUVsZW1lbnRzIiwiRW1wdHkiLCJtZXNzYWdlIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwic3RvcmUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJMaXN0IiwiUmVxdWlyZUFjY2VzcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJMZXNzb25zQWN0aW9ucyIsInNoYXJlRGlhbG9nIiwidXNlUmVmIiwiaGFuZGxlQ2xvc2UiLCJjdXJyZW50IiwiY2xvc2UiLCJoYW5kbGVPcGVuIiwic2hvd01vZGFsIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJTaGFyZUNsYXNzIiwicmVmIiwib25DbG9zZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJMZXNzb25UaXRsZSIsIlN0YXR1cyIsIlRvcGljc0xpc3QiLCJHQ2xhc3Nyb29tc0xpc3QiLCJzZXRHQ2xhc3NTZWxlY3RlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvblNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsInRpdGxlIiwiQnV0dG9uIiwiY29uZmlybSIsInByb3BzIiwiZ2NsYXNzU2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJTaGFyZUNvbnRlbnQiLCJnY2xhc3MiLCJzZXRHY2xhc3MiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2Vzc2lvblVSTCIsInNldFNlc3Npb25VUkwiLCJjb25maWciLCJwYXJhbXMiLCJiYXNlVXJsIiwibmFtZSIsInNlY3Rpb24iLCJsaW5rIiwic2Vzc2lvbnNNYXAiLCJoYXMiLCJnZXQiLCJ1cmwiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiSW5wdXQiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJhc3NpZ24iLCJmb2xkZXJMaW5rIiwic2Vzc2lvbnMiLCJjb3B5VG9DbGlwYm9hcmQiLCJzaGFyZSIsImNsYXNzZXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIkljb24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiaXNPcGVuZWQiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRvcGljIiwic2V0SXRlbXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJ0YXJnZXQiLCJsZW5ndGgiLCJSb3V0ZSIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJjcmVhdGUiLCJhY2Nlc3MiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHMiLCJ3aWRnZXQvdHMvdmlld3MvZW1wdHkudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vc2hhcmUtbW9kYWwvY2xhc3Nyb29tcy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pdGVtLnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL3NoYXJlLW1vZGFsL3NoYXJlLnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVxdWlyZS1hY2Nlc3MudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3JvdXRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19