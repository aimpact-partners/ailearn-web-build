System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@0.0.1/core", "@aimpact/chat@0.0.2/session", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "@aimpact/chat@0.0.2/shared/components", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/empty", "@aimpact/chat@0.0.2/shared/hooks", "@beyond-js/react-18-widgets@0.0.6/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_3 = _beyondJsReact18Widgets006Page;
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk001Core) {
      dependency_5 = _aimpactAilearnSdk001Core;
    }, function (_aimpactChat002Session) {
      dependency_6 = _aimpactChat002Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_8 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_9 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_10 = _pragmateUi0036Form;
    }, function (_aimpactChat002SharedComponents) {
      dependency_11 = _aimpactChat002SharedComponents;
    }, function (_pragmateUi0036Toast) {
      dependency_12 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Components) {
      dependency_13 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Empty) {
      dependency_14 = _pragmateUi0036Empty;
    }, function (_aimpactChat002SharedHooks) {
      dependency_15 = _aimpactChat002SharedHooks;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_16 = _beyondJsReact18Widgets006Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat/session', dependency_6], ['react', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/link', dependency_9], ['pragmate-ui/form', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/toast', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/list.widget",
        "is": "page",
        "route": "/classes/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.1/classes/list.widget');
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
        hash: 1659883526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat/session");
          class StoreManager extends _model.ReactiveModel {
            #collection;
            get collection() {
              return this.#collection;
            }
            constructor() {
              super();
            }
            async load() {
              this.#collection = new _core.Classes();
              await this.#collection.load({
                userId: _session.sessionWrapper.user.id
              });
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/card/actions
      ************************************/

      ims.set('./views/card/actions', {
        hash: 6045369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ClassActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _share = require("./share");
          function ClassActions({
            classId
          }) {
            const shareDialog = _react.default.useRef(null);
            const handleClose = () => shareDialog.current.close();
            const handleOpen = () => shareDialog.current.showModal();
            return _react.default.createElement("footer", {
              className: 'class-actions'
            }, _react.default.createElement(_link.Link, {
              href: `/classes/management/${classId}`
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'edit'
            })), _react.default.createElement(_icons.IconButton, {
              icon: 'share-link',
              onClick: handleOpen
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'delete'
            }), _react.default.createElement(_share.ShareClass, {
              ref: shareDialog,
              classId: classId,
              onClose: handleClose
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/card/index
      **********************************/

      ims.set('./views/card/index', {
        hash: 330829652,
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
              className: 'class-item'
            }, React.createElement(_title.default, {
              title: curriculumObjective
            }), React.createElement(_status.default, {
              assessment: assessment,
              relevance: relevance,
              synthesis: synthesis
            }), React.createElement(_topicsList.default, {
              topics: topics
            }), React.createElement(_actions.default, {
              classId: data?.id
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/card/share
      **********************************/

      ims.set('./views/card/share', {
        hash: 1211050235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareClass = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          const ShareClass = (0, _react.forwardRef)((props, ref) => {
            const {
              onClose,
              classId
            } = props;
            const {
              texts
            } = (0, _context.useListContext)();
            const baseUrl = window.location.origin;
            const folderLink = `${baseUrl}/classes/access?id=${classId}`;
            function copyToClipboard() {
              navigator.clipboard.writeText(folderLink);
              _toast.toast.success('Class link copied to clipboard');
              onClose();
            }
            return _react.default.createElement("dialog", {
              ref: ref
            }, _react.default.createElement("div", {
              className: 'share__modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, texts.classes.share.header)), _react.default.createElement("div", {
              className: 'share__details'
            }, _react.default.createElement("h3", null, texts.classes.share.title), _react.default.createElement("p", null, texts.classes.share.description)), _react.default.createElement(_components.Input, {
              value: folderLink,
              disabled: true,
              className: 'share__input'
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link',
              onClick: onClose
            }, texts.classes.share.close), _react.default.createElement(_form.Button, {
              icon: 'copy-link',
              variant: 'primary',
              onClick: copyToClipboard
            }, texts.classes.share.copy))));
          });
          exports.ShareClass = ShareClass;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/card/status
      ***********************************/

      ims.set('./views/card/status', {
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
      INTERNAL MODULE: ./views/card/title
      **********************************/

      ims.set('./views/card/title', {
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
      INTERNAL MODULE: ./views/card/topics-list
      ****************************************/

      ims.set('./views/card/topics-list', {
        hash: 1207691251,
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
              className: 'topics'
            }, _react.default.createElement("article", {
              className: 'topics-header',
              onClick: handleHeaderClick
            }, _react.default.createElement("h5", null, texts.classes['topics-list']), _react.default.createElement(_icons.IconButton, {
              className: `collapse-topic ${visible ? 'visible' : ''}`,
              icon: 'left'
            })), _react.default.createElement("ul", {
              className: `topics-list ${visible ? 'visible' : ''}`
            }, topics.map((topic, index) => _react.default.createElement("li", {
              key: index
            }, _react.default.createElement("h5", null, topic)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2598631754,
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
        hash: 19650196,
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
            return React.createElement(_context.ListContext.Provider, {
              value: {
                texts
              }
            }, React.createElement(_list.List, {
              model: store
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 1441421918,
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
          function List({
            model
          }) {
            const {
              collection
            } = model;
            const {
              texts
            } = (0, _context.useListContext)();
            const [ready, setReady] = React.useState(model.ready);
            const [fetching, setFetching] = React.useState(false);
            const [items, setItems] = React.useState(collection.items);
            const [search, setSearch] = React.useState('');
            const handleSearch = event => {
              const {
                value
              } = event.target;
              setSearch(value);
            };
            (0, _hooks.useBinder)([model], () => {
              setFetching(model.fetching || model.ready);
              setReady(model.ready);
              setItems(collection.items);
            });
            if (!ready) return React.createElement(_components.PreloadScreen, null);
            const Control = items.length ? React.createElement(_route.Route, {
              items: items
            }) : React.createElement(_empty.EmptyElements, null);
            return React.createElement(React.Fragment, null, React.createElement(_components.CollapsibleHeader, {
              title: texts.classes.classes
            }, React.createElement(_components.Input, {
              type: 'search',
              value: search,
              onChange: handleSearch,
              label: texts.classes.search,
              required: true,
              className: 'grow'
            }), React.createElement(_components2.Link, {
              href: '/classes/management/new',
              className: 'grow'
            }, React.createElement(_components2.Button, {
              icon: 'class',
              label: texts.classes.create,
              className: 'grow'
            }))), Control);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/route
      *****************************/

      ims.set('./views/route', {
        hash: 145394218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Route = Route;
          var React = require("react");
          var _card = require("./card");
          function Route({
            items
          }) {
            const renderedItems = items.map((item, index) => React.createElement(_card.Item, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUsvRCxvQkFBQ2dCLFVBQUk7Y0FBQ0MsSUFBSSxFQUFFbUYsSUFBSTtjQUFFcEMsR0FBRyxFQUFFRDtZQUFLLEVBQUksQ0FBQztZQUVsRixPQUFPb0MsYUFBYTtVQUNyQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIkNsYXNzZXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsInJlYWR5IiwiQ2xhc3NBY3Rpb25zIiwiY2xhc3NJZCIsInNoYXJlRGlhbG9nIiwiUmVhY3QiLCJ1c2VSZWYiLCJoYW5kbGVDbG9zZSIsImN1cnJlbnQiLCJjbG9zZSIsImhhbmRsZU9wZW4iLCJzaG93TW9kYWwiLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlNoYXJlQ2xhc3MiLCJyZWYiLCJvbkNsb3NlIiwiSXRlbSIsImRhdGEiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNzIiwicmVsZXZhbmNlIiwiYXNzZXNzbWVudCIsInN5bnRoZXNpcyIsIkNsYXNzVGl0bGUiLCJ0aXRsZSIsIlN0YXR1cyIsIlRvcGljc0xpc3QiLCJwcm9wcyIsInRleHRzIiwiYmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZm9sZGVyTGluayIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImNsYXNzZXMiLCJzaGFyZSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiSW5wdXQiLCJ2YWx1ZSIsImRpc2FibGVkIiwiQnV0dG9uIiwidmFyaWFudCIsImNvcHkiLCJTVEFUVVNfQ09MT1JTIiwicHJvY2Vzc2luZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiY29sb3IiLCJlbGVtZW50cyIsIkljb24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwiaGFuZGxlSGVhZGVyQ2xpY2siLCJtYXAiLCJ0b3BpYyIsImluZGV4Iiwia2V5IiwiTGlzdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiRW1wdHlFbGVtZW50cyIsIkVtcHR5IiwibWVzc2FnZSIsInN0b3JlIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsIlByb3ZpZGVyIiwiTGlzdCIsIm1vZGVsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIml0ZW1zIiwic2V0SXRlbXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsIkNvbnRyb2wiLCJsZW5ndGgiLCJSb3V0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJyZXF1aXJlZCIsImNyZWF0ZSIsInJlbmRlcmVkSXRlbXMiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy92aWV3cy9jYXJkL2FjdGlvbnMudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NhcmQvc2hhcmUudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NhcmQvc3RhdHVzLnRzeCIsIndpZGdldC90cy92aWV3cy9jYXJkL3RpdGxlLnRzeCIsIndpZGdldC90cy92aWV3cy9jYXJkL3RvcGljcy1saXN0LnRzeCIsIndpZGdldC90cy92aWV3cy9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2VtcHR5LnRzeCIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvcm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19