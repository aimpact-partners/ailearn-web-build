System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive115Model) {
      dependency_5 = _beyondJsReactive115Model;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Components) {
      dependency_8 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp100Config) {
      dependency_12 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0036Empty) {
      dependency_13 = _pragmateUi0036Empty;
    }, function (_pragmateUi0036Icons) {
      dependency_14 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/icons', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-list",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/list.widget",
        "is": "page",
        "route": "/sessions/list/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/sessions/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2972444672,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4271712203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model.off('change', this.triggerEvent);
                this.#model = undefined;
              }
              this.#model = new _core.GClass();
              this.#model.on('change', this.triggerEvent);
              await this.#model.load({
                id
              });
              this.ready = true;
              this.triggerEvent();
            };
            async getLessonData(lesson) {
              await lesson.load();
              const {
                items: chats
              } = _wrapper.AppWrapper.chats;
              const items = chats.filter(item => {
                if (!item.metadata) return;
                if (item.metadata.lesson?.id !== lesson.id) return;
                return true;
              });
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2641903694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
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
            return _react.default.createElement(_components.CollapsibleHeader, {
              collapsed: true,
              title: texts.title
            }, _react.default.createElement(_components.Input, {
              type: "search",
              value: search,
              onChange: handleSearch,
              label: texts.search,
              required: true,
              className: "grow"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3065310114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _header = require("./header");
          var _context = require("./context");
          var _list = require("./list");
          var _empty = require("./list/empty");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store.model.items);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              sessions
            } = store.model;
            const Control = sessions.length ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                fetching: store.fetching,
                store,
                items: sessions
              }
            }, _react.default.createElement("main", {
              className: "page__container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(Control, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/LessonInfo
      ***************************************/

      ims.set('./views/list/LessonInfo', {
        hash: 1759159590,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonInfo = LessonInfo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _config = require("@aimpact/ailearn-app/config");
          function LessonInfo({
            lesson
          }) {
            //todo: set correct url @everyone
            if (!lesson || !lesson.topics) return null;
            const url = `${_config.default.baseUrl}/${lesson.id}`;
            return _react.default.createElement("section", {
              className: "item__actions"
            }, lesson.topics.map(topic => {
              return _react.default.createElement(_components.Link, {
                href: url,
                className: "btn btn-outline btn-primary"
              }, topic.title);
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 2019721767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("../context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_empty.Empty, {
              message: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 105439319,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _context = require("../context");
          function List() {
            const {
              items
            } = (0, _context.useListContext)();
            const renderedItems = items.map((item, index) => _react.default.createElement(_item.Item, {
              item: item,
              key: index
            }));
            return renderedItems;
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 2454274332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _LessonInfo = require("./LessonInfo");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function Item({
            item
          }) {
            const [lesson, setLesson] = _react.default.useState();
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => {
              setFetching(true);
              const lesson = new _core.Lesson({
                id: item.lesson.id
              });
              lesson.isReady.then(async () => {
                const data = await store.getLessonData(lesson);
                setLesson(data);
                setFetching(false);
              });
            }, []);
            const url = `/sessions/access/${item.id}`;
            return _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("section", {
              className: "list__item__header"
            }, _react.default.createElement("header", null, _react.default.createElement("h4", null, _react.default.createElement(_icons.Icon, {
              icon: "class"
            }), item.lesson.name)), _react.default.createElement("div", {
              className: "actions"
            }, !fetching && !lesson ? _react.default.createElement(_components.Link, {
              className: "btn btn-bordered btn-primary",
              href: url
            }, texts.access) : _react.default.createElement(_components.Spinner, {
              size: "xs",
              active: true,
              type: "primary"
            }))), _react.default.createElement("section", null, _react.default.createElement(_LessonInfo.LessonInfo, {
              lesson: lesson
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJHQ2xhc3MiLCJvbiIsInJlYWR5IiwiZ2V0TGVzc29uRGF0YSIsImxlc3NvbiIsIml0ZW1zIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGFkYXRhIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJIZWFkZXIiLCJ0ZXh0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJDb2xsYXBzaWJsZUhlYWRlciIsImNvbGxhcHNlZCIsInRpdGxlIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9oZWFkZXIiLCJfbGlzdCIsIl9lbXB0eSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwic2Vzc2lvbnMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiZmV0Y2hpbmciLCJfY29uZmlnIiwiTGVzc29uSW5mbyIsInRvcGljcyIsInVybCIsImJhc2VVcmwiLCJtYXAiLCJ0b3BpYyIsIkxpbmsiLCJocmVmIiwiRW1wdHkiLCJtZXNzYWdlIiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJJdGVtIiwia2V5IiwiX2ljb25zIiwiX0xlc3NvbkluZm8iLCJzZXRMZXNzb24iLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIkxlc3NvbiIsImlzUmVhZHkiLCJ0aGVuIiwiZGF0YSIsIkljb24iLCJuYW1lIiwiYWNjZXNzIiwiU3Bpbm5lciIsInNpemUiLCJhY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFH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