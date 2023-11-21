System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_13 = _aimpactAilearnApp0014Config;
    }, function (_pragmateUi003Empty) {
      dependency_14 = _pragmateUi003Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/empty', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/list.widget",
        "is": "page",
        "route": "/assignments/list/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/list.widget');
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
        hash: 2634752429,
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
              this.#model = new _core.Classroom({
                id
              });
              this.#model.on('change', this.triggerEvent);
              await this.#model.load({
                id
              });
              this.ready = true;
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
        hash: 3128837205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment List']]
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2235629801,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store?.model?.assignments);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setItems(store.model?.assignments);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              assignments
            } = store.model;
            const Control = assignments?.length ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                texts,
                fetching: store.fetching,
                store,
                items: assignments
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("main", {
              className: "page__container"
            }, _react.default.createElement(_ui.HeaderCard, {
              option: 'light',
              title: store.model.name
            }, _react.default.createElement("p", {
              className: "header-container__subtitle"
            }, " ", texts.description, " ")), _react.default.createElement(_ui.SubDivider, {
              titleText: texts.dividerTitle
            }), _react.default.createElement(Control, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/LessonInfo
      ***************************************/

      ims.set('./views/list/LessonInfo', {
        hash: 1155994592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonInfo = LessonInfo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function LessonInfo({
            assignmentId,
            topics
          }) {
            //todo: set correct url @everyone
            if (!assignmentId || !topics) return null;
            return _react.default.createElement("section", {
              className: "item__actions"
            }, topics.map(topic => {
              let url = `/assignments/dashboard/${assignmentId}.${topic.id}/classwork`;
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
        hash: 179169570,
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
        hash: 2152647731,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function List() {
            const {
              items
            } = (0, _context.useListContext)();
            // const renderedItems = items.map((item, index) => <Item item={item} key={index} />);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.ListContainer, {
              items: items,
              control: _item.Item
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 3773072097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Item({
            data: item
          }) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const url = `/assignment/${item.id}`;
            const data = {
              classroom: 'Classroom',
              image: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/geometric'
            };
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url
            }, _react.default.createElement(_ui.CardContent, {
              option: 1
            }, _react.default.createElement("h3", {
              className: "card__title"
            }, item.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text"
            }, "Missing: Descripcion del objetivo de aprendizaje"), _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
              className: "cart__text-non-hover"
            }, item.module.activities.length, " ", texts.moduleSubtitleText), _react.default.createElement("p", {
              className: "card__text-hover"
            }, texts.moduleAccess))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZ2V0TGVzc29uRGF0YSIsImxlc3NvbiIsIml0ZW1zIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGFkYXRhIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJfZW1wdHkiLCJfaGVhZGVyIiwiX2xpc3QiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJhc3NpZ25tZW50cyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiRnJhZ21lbnQiLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiY2xhc3Nyb29tIiwiaW1hZ2UiLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50IiwiYWN0aXZpdGllcyIsIm1vZHVsZVN1YnRpdGxlVGV4dCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9MZXNzb25JbmZvLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJ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