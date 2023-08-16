System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@0.0.1/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk001Session) {
      dependency_6 = _aimpactChatSdk001Session;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Empty) {
      dependency_10 = _pragmateUi0036Empty;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat002SharedComponents) {
      dependency_12 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002SharedHooks) {
      dependency_13 = _aimpactChat002SharedHooks;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/alert', dependency_20]]);
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
        hash: 1245600707,
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
              message: "No creaste clases todav\u00EDa",
              icon: "info"
            }, React.createElement(_components.Link, {
              href: "/lessons/create",
              className: "btn btn-primary"
            }, "Crear"));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2211053767,
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
        hash: 4130909017,
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
            const Control = store.authorized ? items.length ? _list.List : _empty.EmptyElements : _requireAccess.RequireAccess;
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
        hash: 3217991098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = LessonsActions;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _shareModal = require("./share-modal");
          function LessonsActions({
            lesson
          }) {
            const shareDialog = React.useRef(null);
            const handleClose = () => shareDialog.current.close();
            const handleOpen = () => shareDialog.current.showModal();
            return React.createElement("section", {
              className: "class-actions"
            }, React.createElement(_icons.IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJSZWFjdCIsIkxpc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2VtcHR5IiwiRW1wdHlFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eSIsIm1lc3NhZ2UiLCJpY29uIiwiTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJfY29udGV4dCIsIl9jb21wb25lbnRzMiIsIkhlYWRlciIsInRleHRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImNsYXNzZXMiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJjcmVhdGUiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9yZXF1aXJlQWNjZXNzIiwiX2xpc3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRJdGVtcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIlJlcXVpcmVBY2Nlc3MiLCJQcm92aWRlciIsIl9pY29ucyIsIl9zaGFyZU1vZGFsIiwiTGVzc29uc0FjdGlvbnMiLCJzaGFyZURpYWxvZyIsInVzZVJlZiIsImhhbmRsZUNsb3NlIiwiY3VycmVudCIsImNsb3NlIiwiaGFuZGxlT3BlbiIsInNob3dNb2RhbCIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiU2hhcmVDbGFzcyIsInJlZiIsIm9uQ2xvc2UiLCJfdG9waWNzTGlzdCIsIl90aXRsZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2Zvcm0iLCJfaXRlbSIsIkdDbGFzc3Jvb21zTGlzdCIsInNldEdDbGFzc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9uU2VsZWN0IiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsImNvbmZpcm0iLCJfc2hhcmUiLCJfY2xhc3Nyb29tcyIsImZvcndhcmRSZWYiLCJwcm9wcyIsImdjbGFzc1NlbGVjdGVkIiwidW5kZWZpbmVkIiwiU2hhcmVDb250ZW50IiwiZ2NsYXNzIiwic2V0R2NsYXNzIiwiX3RvYXN0IiwiX2NvbmZpZyIsInNlc3Npb25VUkwiLCJzZXRTZXNzaW9uVVJMIiwicGFyYW1zIiwiYmFzZVVybCIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwibG9hZGluZyIsImFzc2lnbiIsImZvbGRlckxpbmsiLCJzZXNzaW9ucyIsImNvcHlUb0NsaXBib2FyZCIsInNoYXJlIiwiRnJhZ21lbnQiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsIlN0YXR1cyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIl9hY3Rpb25zIiwiTGVzc29uVGl0bGUiLCJJY29uIiwiX2NvbGxhcHNpYmxlIiwiVG9waWNzTGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJpc09wZW5lZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRvcGljIiwicmVuZGVyZWRJdGVtcyIsImluZGV4IiwiX2FsZXJ0IiwiYWNjZXNzIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJnZXRVcmwiLCJsb2ciLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc2hhcmUtbW9kYWwvY2xhc3Nyb29tcy50c3giLCIvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9pdGVtL3NoYXJlLW1vZGFsL3NoYXJlLnRzeCIsIi90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9yZXF1aXJlLWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFULFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQVUsTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsS0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsUUFBQSxHQUFBZixP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