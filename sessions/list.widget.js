System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3586140886,
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
            /**
             *
             * @param id Google Classroom id
             */
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
        hash: 3785449775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
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
        hash: 2380149727,
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
            }, _react.default.createElement("header", null, _react.default.createElement(_components.Link, {
              href: `/sessions/dashboard/${item.id}/lesson`
            }, _react.default.createElement("h4", null, _react.default.createElement(_icons.Icon, {
              icon: "class"
            }), item.lesson.name))), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFLENBQUM7WUFDTixNQUFNaEIsR0FBRyxHQUFHLG9CQUFvQnpDLElBQUksQ0FBQ2IsRUFBRSxFQUFFO1lBQ3pDLE9BQ0NnQjtjQUFLcUIsU0FBUyxFQUFDO1lBQVksR0FDMUJyQjtjQUFTcUIsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDckIsNkNBQ0NBLDZCQUFDMkMsZ0JBQUk7Y0FBQ0MsSUFBSSxFQUFFLHVCQUF1Qi9DLElBQUksQ0FBQ2IsRUFBRTtZQUFTLEdBQ2xEZ0IseUNBQ0NBLDZCQUFDNEQsV0FBSTtjQUFDWixJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQ3BCbkQsSUFBSSxDQUFDTCxNQUFNLENBQUNxRSxJQUFJLENBQ2IsQ0FDQyxDQUNDLEVBQ1Q3RDtjQUFLcUIsU0FBUyxFQUFDO1lBQVMsR0FDdEIsQ0FBQ2MsUUFBUSxJQUFJLENBQUMzQyxNQUFNLEdBQ3BCUSw2QkFBQzJDLGdCQUFJO2NBQUN0QixTQUFTLEVBQUMsOEJBQThCO2NBQUN1QixJQUFJLEVBQUVOO1lBQUcsR0FDdERqQyxLQUFLLENBQUN5RCxNQUFNLENBQ1AsR0FFUDlELDZCQUFDK0QsbUJBQU87Y0FBQ0MsSUFBSSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRWhELElBQUksRUFBQztZQUFTLEVBQy9DLENBQ0ksQ0FDRyxFQUNWakIsOENBQ0NBLDZCQUFDb0Msc0JBQVU7Y0FBQzVDLE1BQU0sRUFBRUE7WUFBTSxFQUFJLENBQ3JCLENBQ0w7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpZCIsIm9mZiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsIkdDbGFzcyIsIm9uIiwicmVhZHkiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJMaXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIkhlYWRlciIsInRleHRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJyZXF1aXJlZCIsImNsYXNzTmFtZSIsInN0b3JlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJQcmVsb2FkU2NyZWVuIiwic2Vzc2lvbnMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiZmV0Y2hpbmciLCJMZXNzb25JbmZvIiwidG9waWNzIiwidXJsIiwiY29uZmlnIiwiYmFzZVVybCIsIm1hcCIsInRvcGljIiwiTGluayIsImhyZWYiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsImljb24iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJJdGVtIiwia2V5Iiwic2V0TGVzc29uIiwic2V0RmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJMZXNzb24iLCJpc1JlYWR5IiwidGhlbiIsImRhdGEiLCJJY29uIiwibmFtZSIsImFjY2VzcyIsIlNwaW5uZXIiLCJzaXplIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCJ0cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsInRzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=