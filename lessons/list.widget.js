System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
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
    }, function (_pragmateUi0036Alert) {
      dependency_19 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/link', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/alert', dependency_19]]);
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
        hash: 4134013396,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ClassActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _shareModal = require("./share-modal");
          function ClassActions({
            lesson
          }) {
            const shareDialog = _react.default.useRef(null);
            const handleClose = () => shareDialog.current.close();
            const handleOpen = () => shareDialog.current.showModal();
            return _react.default.createElement("footer", {
              className: "class-actions"
            }, _react.default.createElement(_link.Link, {
              href: `/classes/management/${lesson.id}`
            }, _react.default.createElement(_icons.IconButton, {
              icon: "edit"
            })), _react.default.createElement(_icons.IconButton, {
              icon: "share-link",
              onClick: handleOpen
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete"
            }), _react.default.createElement(_shareModal.ShareClass, {
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
        hash: 3214240990,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _actions = require("./actions");
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
              className: "class-item"
            }, React.createElement(_title.default, {
              title: curriculumObjective
            }), React.createElement(_status.default, {
              assessment: assessment,
              relevance: relevance,
              synthesis: synthesis
            }), React.createElement(_topicsList.default, {
              topics: topics
            }), React.createElement(_actions.default, {
              lesson: data
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
        hash: 2671839676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ClassTitle;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function ClassTitle({
            title
          }) {
            return _react.default.createElement("section", {
              className: 'curriculum-objective'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'class'
            }), _react.default.createElement("h4", null, title));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/topics-list
      ****************************************/

      ims.set('./views/item/topics-list', {
        hash: 1280257034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = TopicsList;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function TopicsList({
            topics
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [visible, setVisible] = _react.default.useState(false);
            const handleHeaderClick = () => setVisible(!visible);
            return _react.default.createElement("section", {
              className: "topics"
            }, _react.default.createElement("article", {
              className: "topics-header",
              onClick: handleHeaderClick
            }, _react.default.createElement("h5", null, texts.classes['topics-list']), _react.default.createElement(_icons.IconButton, {
              className: `collapse-topic ${visible ? 'visible' : ''}`,
              icon: 'left'
            })), _react.default.createElement("ul", {
              className: `topics-list ${visible ? 'visible' : ''}`
            }, topics.items.map(topic => _react.default.createElement("li", {
              key: topic.id
            }, _react.default.createElement("h5", null, topic.title)))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 1721228814,
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
              href: "/classes/management/new",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLENBQUM5RCxJQUFJLEVBQUU2SSxLQUFLLEtBQUt0SSxvQkFBQ3FDLFVBQUk7Y0FBQ0MsSUFBSSxFQUFFN0MsSUFBSTtjQUFFZ0UsR0FBRyxFQUFFNkU7WUFBSyxFQUFJLENBQUM7WUFFbEYsT0FBT0QsYUFBYTtVQUNyQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwicmVhZHkiLCJMZXNzb25zIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJnbG9iYWxUaGlzIiwiYyIsImNvdXJzZXMiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnY2xhc3NJZCIsImxlc3NvbiIsIml0ZW1zIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwid2FybiIsInNlc3Npb24iLCJlIiwiZXJyb3IiLCJMaXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5RWxlbWVudHMiLCJFbXB0eSIsIm1lc3NhZ2UiLCJpY29uIiwiTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJzdG9yZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJQcmVsb2FkU2NyZWVuIiwiQ29udHJvbCIsIkxpc3QiLCJSZXF1aXJlQWNjZXNzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkNsYXNzQWN0aW9ucyIsInNoYXJlRGlhbG9nIiwidXNlUmVmIiwiaGFuZGxlQ2xvc2UiLCJjdXJyZW50IiwiY2xvc2UiLCJoYW5kbGVPcGVuIiwic2hvd01vZGFsIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJTaGFyZUNsYXNzIiwicmVmIiwib25DbG9zZSIsIkl0ZW0iLCJkYXRhIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJzeW50aGVzaXMiLCJDbGFzc1RpdGxlIiwidGl0bGUiLCJTdGF0dXMiLCJUb3BpY3NMaXN0IiwiR0NsYXNzcm9vbXNMaXN0Iiwic2V0R0NsYXNzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25TZWxlY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiR0NsYXNzcm9vbUl0ZW0iLCJrZXkiLCJCdXR0b24iLCJjb25maXJtIiwicHJvcHMiLCJnY2xhc3NTZWxlY3RlZCIsInVuZGVmaW5lZCIsIlNoYXJlQ29udGVudCIsImdjbGFzcyIsInNldEdjbGFzcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXNzaW9uVVJMIiwic2V0U2Vzc2lvblVSTCIsImNvbmZpZyIsInBhcmFtcyIsImJhc2VVcmwiLCJuYW1lIiwic2VjdGlvbiIsImxpbmsiLCJzZXNzaW9uc01hcCIsImhhcyIsImdldCIsInVybCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJJbnB1dCIsImRpc2FibGVkIiwibG9hZGluZyIsImFzc2lnbiIsImZvbGRlckxpbmsiLCJzZXNzaW9ucyIsImNvcHlUb0NsaXBib2FyZCIsInNoYXJlIiwiY2xhc3NlcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsIlNUQVRVU19DT0xPUlMiLCJwcm9jZXNzaW5nIiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJjb2xvciIsImVsZW1lbnRzIiwiSWNvbiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlSGVhZGVyQ2xpY2siLCJ0b3BpYyIsInNldEl0ZW1zIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwibGVuZ3RoIiwiUm91dGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsInR5cGUiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJjcmVhdGUiLCJhY2Nlc3MiLCJ1bmF1dGhvcml6ZWQiLCJ0ZXh0IiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiQWxlcnQiLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHMiLCJ3aWRnZXQvdHMvdmlld3MvZW1wdHkudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL2FjdGlvbnMudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2l0ZW0vc2hhcmUtbW9kYWwvY2xhc3Nyb29tcy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS9zaGFyZS1tb2RhbC9pdGVtLnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL3NoYXJlLW1vZGFsL3NoYXJlLnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtL3N0YXR1cy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaXRlbS90b3BpY3MtbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVxdWlyZS1hY2Nlc3MudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3JvdXRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19