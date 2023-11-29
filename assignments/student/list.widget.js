System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.15/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.15/config", "pragmate-ui@0.0.3/empty"], function (_export, _context2) {
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
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_6 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0015ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0015ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0015Config) {
      dependency_13 = _aimpactAilearnApp0015Config;
    }, function (_pragmateUi003Empty) {
      dependency_14 = _pragmateUi003Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.15"], ["@aimpact/ailearn-app", "0.0.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.15/assignments/student/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/empty', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.15/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.15/assignments/student/list.widget');
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
        hash: 2980597350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _wrapper = require("@aimpact/chat/wrapper");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
              try {
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
              } catch (error) {
                if (error === 'ERROR_DATA_QUERY') {
                  this.error = true;
                  this.ready = true;
                }
              }
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
        hash: 1095445565,
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
            const [error, setError] = _react.default.useState(store.error);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store?.model?.assignments);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setError(store.error);
              setItems(store.model?.assignments);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            if (error) return _react.default.createElement(_ui.NotFound, {
              texts: texts,
              textsReady: textsReady
            });
            const {
              assignments
            } = store.model;
            const Control = assignments?.length ? _list.List : _empty.EmptyList;
            return _react.default.createElement(_context.ListContext.Provider, {
              value: {
                store,
                items: assignments,
                texts,
                fetching: store.fetching
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("main", {
              className: "page__container"
            }, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
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
        hash: 207350619,
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
            return _react.default.createElement(_ui.ListContainer, {
              items: items,
              control: _item.Item
            });
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 1573124592,
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
              texts
            } = (0, _context.useListContext)();
            const url = `/assignment/${item.id}`;
            const data = {
              image: item.module.picture
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
            }, item.module.description), _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiTGlzdENvbnRhaW5lciIsImNvbnRyb2wiLCJJdGVtIiwiZGF0YSIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiQ2FyZENvbnRlbnQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtB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