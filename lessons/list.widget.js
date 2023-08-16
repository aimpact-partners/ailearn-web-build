System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@0.0.11/config", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Empty) {
      dependency_10 = _pragmateUi0036Empty;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Icons) {
      dependency_14 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_15 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_16 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Toast) {
      dependency_17 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_18 = _aimpactAilearnApp0011Config;
    }, function (_pragmateUi0036Collapsible) {
      dependency_19 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Alert) {
      dependency_20 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/list.widget",
        "is": "page",
        "route": "/lessons/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/lessons/list.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJMaXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5RWxlbWVudHMiLCJFbXB0eSIsIm1lc3NhZ2UiLCJpY29uIiwiTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJ0ZXh0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY29sbGFwc2VkIiwidGl0bGUiLCJjbGFzc2VzIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwiQnV0dG9uIiwiY3JlYXRlIiwic3RvcmUiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0SXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJSZXF1aXJlQWNjZXNzIiwiUHJvdmlkZXIiLCJMZXNzb25zQWN0aW9ucyIsInNoYXJlRGlhbG9nIiwidXNlUmVmIiwiaGFuZGxlQ2xvc2UiLCJjdXJyZW50IiwiY2xvc2UiLCJoYW5kbGVPcGVuIiwic2hvd01vZGFsIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJTaGFyZUNsYXNzIiwicmVmIiwib25DbG9zZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJMZXNzb25UaXRsZSIsIlRvcGljc0xpc3QiLCJHQ2xhc3Nyb29tc0xpc3QiLCJzZXRHQ2xhc3NTZWxlY3RlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvblNlbGVjdCIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiR0NsYXNzcm9vbUl0ZW0iLCJrZXkiLCJjb25maXJtIiwicHJvcHMiLCJnY2xhc3NTZWxlY3RlZCIsInVuZGVmaW5lZCIsIlNoYXJlQ29udGVudCIsImdjbGFzcyIsInNldEdjbGFzcyIsInNlc3Npb25VUkwiLCJzZXRTZXNzaW9uVVJMIiwiY29uZmlnIiwicGFyYW1zIiwiYmFzZVVybCIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwibG9hZGluZyIsImFzc2lnbiIsImZvbGRlckxpbmsiLCJzZXNzaW9ucyIsImNvcHlUb0NsaXBib2FyZCIsInNoYXJlIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJ2YXJpYW50IiwiU1RBVFVTX0NPTE9SUyIsInByb2Nlc3NpbmciLCJTdGF0dXMiLCJnZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsImNvbG9yIiwiZWxlbWVudHMiLCJJY29uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImlzT3BlbmVkIiwiQ29sbGFwc2libGVDb250ZW50IiwidG9waWMiLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJhY2Nlc3MiLCJFUlJPUl9HRVRUSU5HX1VSTCIsInVuYXV0aG9yaXplZCIsInRleHQiLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsImdldFVybCIsImxvZyIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJBbGVydCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2VtcHR5LnRzeCIsInRzL3ZpZXdzL2hlYWRlci50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4IiwidHMvdmlld3MvaXRlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL3NoYXJlLW1vZGFsL2NsYXNzcm9vbXMudHN4IiwidHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL3NoYXJlLW1vZGFsL2l0ZW0udHN4IiwidHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9zaGFyZS50c3giLCJ0cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCJ0cy92aWV3cy9pdGVtL3RpdGxlLnRzeCIsInRzL3ZpZXdzL2l0ZW0vdG9waWNzLWxpc3QudHN4IiwidHMvdmlld3MvbGlzdC9pbmRleC50c3giLCJ0cy92aWV3cy9saXN0L3JlcXVpcmUtYWNjZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19