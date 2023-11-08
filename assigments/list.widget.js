System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_12 = _aimpactAilearnApp0014Config;
    }, function (_pragmateUi003Empty) {
      dependency_13 = _pragmateUi003Empty;
    }, function (_pragmateUi003Icons) {
      dependency_14 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assigments/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/icons', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assigments-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assigments/list.widget",
        "is": "page",
        "route": "/assigments/list/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assigments/list.widget');
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
          const ListContext = exports.ListContext = _react.default.createContext({});
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
        hash: 376426310,
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
            const Control = sessions?.length ? _list.List : _empty.EmptyList;
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
        hash: 2884584821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonInfo = LessonInfo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function LessonInfo({
            assigmentId,
            topics
          }) {
            //todo: set correct url @everyone
            if (!assigmentId || !topics) return null;
            return _react.default.createElement("section", {
              className: "item__actions"
            }, topics.map(topic => {
              let url = `/assignments/dashboard/${assigmentId}.${topic.id}/classwork`;
              return _react.default.createElement(_components.Link, {
                key: url,
                href: url
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
        hash: 1587666566,
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
          var _wrapper = require("@aimpact/chat/wrapper");
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
              //todo: @jircdev move it to a model or store.
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
            const onClick = event => {
              _wrapper.AppWrapper.currentAssignment = item;
              //hack
              localStorage.setItem('currentAssignment', JSON.stringify(item));
              return true;
            };
            return _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("section", {
              className: "list__item__header"
            }, _react.default.createElement("header", null, _react.default.createElement(_components.Link, {
              onClick: onClick,
              href: `/assignments/dashboard/${item.id}.${item.lesson?.id}/classwork`
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
              assigmentId: item.id,
              topics: item.topics
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJHQ2xhc3MiLCJvbiIsInJlYWR5IiwiZ2V0TGVzc29uRGF0YSIsImxlc3NvbiIsIml0ZW1zIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGFkYXRhIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJIZWFkZXIiLCJ0ZXh0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJDb2xsYXBzaWJsZUhlYWRlciIsImNvbGxhcHNlZCIsInRpdGxlIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9oZWFkZXIiLCJfbGlzdCIsIl9lbXB0eSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwic2Vzc2lvbnMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiZmV0Y2hpbmciLCJMZXNzb25JbmZvIiwiYXNzaWdtZW50SWQiLCJ0b3BpY3MiLCJtYXAiLCJ0b3BpYyIsInVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwiRW1wdHkiLCJtZXNzYWdlIiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJyZW5kZXJlZEl0ZW1zIiwiaW5kZXgiLCJJdGVtIiwiX2ljb25zIiwiX0xlc3NvbkluZm8iLCJzZXRMZXNzb24iLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIkxlc3NvbiIsImlzUmVhZHkiLCJ0aGVuIiwiZGF0YSIsIm9uQ2xpY2siLCJjdXJyZW50QXNzaWdubWVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiSWNvbiIsIm5hbWUiLCJhY2Nlc3MiLCJTcGlubmVyIiwic2l6ZSIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9MZXNzb25JbmZvLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJB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