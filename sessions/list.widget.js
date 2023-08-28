System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_react) {
      dependency_7 = _react;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 3583088723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
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
            return React.createElement(_components.CollapsibleHeader, {
              collapsed: true,
              title: texts.title
            }, React.createElement(_components.Input, {
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
        hash: 2495939418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
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
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = React.useState(store.model.items);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model.items);
            });
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            const {
              sessions
            } = store.model;
            const Control = sessions.length ? _list.List : _empty.EmptyList;
            return React.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                fetching: store.fetching,
                store,
                items: sessions
              }
            }, React.createElement("main", {
              className: "page__container"
            }, React.createElement(_header.Header, null), React.createElement(Control, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/LessonInfo
      ***************************************/

      ims.set('./views/list/LessonInfo', {
        hash: 2949208133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonInfo = LessonInfo;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _config = require("@aimpact/ailearn-app/config");
          function LessonInfo({
            lesson
          }) {
            //todo: set correct url @everyone
            if (!lesson || !lesson.topics) return null;
            const url = `${_config.default.baseUrl}/${lesson.id}`;
            return React.createElement("section", {
              className: "item__actions"
            }, lesson.topics.map(topic => {
              return React.createElement(_components.Link, {
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
        hash: 3176540029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("../context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_empty.Empty, {
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
        hash: 2394034770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _item = require("./item");
          var _context = require("../context");
          function List() {
            const {
              items
            } = (0, _context.useListContext)();
            const renderedItems = items.map((item, index) => React.createElement(_item.Item, {
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
        hash: 1141512003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _LessonInfo = require("./LessonInfo");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function Item({
            item
          }) {
            const [lesson, setLesson] = React.useState();
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = React.useState(false);
            React.useEffect(() => {
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
            return React.createElement("div", {
              className: "list__item"
            }, React.createElement("section", {
              className: "list__item__header"
            }, React.createElement("header", null, React.createElement("h4", null, React.createElement(_icons.Icon, {
              icon: "class"
            }), item.lesson.name)), React.createElement("div", {
              className: "actions"
            }, !fetching && !lesson ? React.createElement(_components.Link, {
              className: "btn btn-bordered btn-primary",
              href: url
            }, texts.access) : React.createElement(_components.Spinner, {
              size: "xs",
              active: true,
              type: "primary"
            }))), React.createElement("section", null, React.createElement(_LessonInfo.LessonInfo, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO1lBQ04sTUFBTWhCLEdBQUcsR0FBRyxvQkFBb0J6QyxJQUFJLENBQUNiLEVBQUUsRUFBRTtZQUN6QyxPQUNDZ0I7Y0FBS3FCLFNBQVMsRUFBQztZQUFZLEdBQzFCckI7Y0FBU3FCLFNBQVMsRUFBQztZQUFvQixHQUN0Q3JCLG9DQUNDQSxnQ0FDQ0Esb0JBQUM0RCxXQUFJO2NBQUNaLElBQUksRUFBQztZQUFPLEVBQUcsRUFDcEJuRCxJQUFJLENBQUNMLE1BQU0sQ0FBQ3FFLElBQUksQ0FDYixDQUNHLEVBQ1Q3RDtjQUFLcUIsU0FBUyxFQUFDO1lBQVMsR0FDdEIsQ0FBQ2MsUUFBUSxJQUFJLENBQUMzQyxNQUFNLEdBQ3BCUSxvQkFBQzJDLGdCQUFJO2NBQUN0QixTQUFTLEVBQUMsOEJBQThCO2NBQUN1QixJQUFJLEVBQUVOO1lBQUcsR0FDdERqQyxLQUFLLENBQUN5RCxNQUFNLENBQ1AsR0FFUDlELG9CQUFDK0QsbUJBQU87Y0FBQ0MsSUFBSSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRWhELElBQUksRUFBQztZQUFTLEVBQy9DLENBQ0ksQ0FDRyxFQUNWakIscUNBQ0NBLG9CQUFDb0Msc0JBQVU7Y0FBQzVDLE1BQU0sRUFBRUE7WUFBTSxFQUFJLENBQ3JCLENBQ0w7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpZCIsIm9mZiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsIkdDbGFzcyIsIm9uIiwicmVhZHkiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJMaXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIkhlYWRlciIsInRleHRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJyZXF1aXJlZCIsImNsYXNzTmFtZSIsInN0b3JlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwic2Vzc2lvbnMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiZmV0Y2hpbmciLCJMZXNzb25JbmZvIiwidG9waWNzIiwidXJsIiwiY29uZmlnIiwiYmFzZVVybCIsIm1hcCIsInRvcGljIiwiTGluayIsImhyZWYiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsImljb24iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJJdGVtIiwia2V5Iiwic2V0TGVzc29uIiwic2V0RmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJMZXNzb24iLCJpc1JlYWR5IiwidGhlbiIsImRhdGEiLCJJY29uIiwibmFtZSIsImFjY2VzcyIsIlNwaW5uZXIiLCJzaXplIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCJ0cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsInRzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=