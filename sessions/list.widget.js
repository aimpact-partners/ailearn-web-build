System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.37/empty", "pragmate-ui@0.0.37/icons"], function (_export, _context2) {
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
    }, function (_pragmateUi0037Components) {
      dependency_8 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp100Config) {
      dependency_12 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0037Empty) {
      dependency_13 = _pragmateUi0037Empty;
    }, function (_pragmateUi0037Icons) {
      dependency_14 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJHQ2xhc3MiLCJvbiIsInJlYWR5IiwiZ2V0TGVzc29uRGF0YSIsImxlc3NvbiIsIml0ZW1zIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGFkYXRhIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJIZWFkZXIiLCJ0ZXh0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJDb2xsYXBzaWJsZUhlYWRlciIsImNvbGxhcHNlZCIsInRpdGxlIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9oZWFkZXIiLCJfbGlzdCIsIl9lbXB0eSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwic2Vzc2lvbnMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiZmV0Y2hpbmciLCJfY29uZmlnIiwiTGVzc29uSW5mbyIsInRvcGljcyIsInVybCIsImJhc2VVcmwiLCJtYXAiLCJ0b3BpYyIsIkxpbmsiLCJocmVmIiwiRW1wdHkiLCJtZXNzYWdlIiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJJdGVtIiwia2V5IiwiX2ljb25zIiwiX0xlc3NvbkluZm8iLCJzZXRMZXNzb24iLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIkxlc3NvbiIsImlzUmVhZHkiLCJ0aGVuIiwiZGF0YSIsIkljb24iLCJuYW1lIiwiYWNjZXNzIiwiU3Bpbm5lciIsInNpemUiLCJhY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFH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