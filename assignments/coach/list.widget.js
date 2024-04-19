System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_9 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/coach/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/components', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/coach/list.widget');
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
        hash: 3772212810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'],, ['Assignment List']]
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1074378071,
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
        hash: 1244498565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty,
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
        hash: 1610861483,
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
            let id = ['conversation', 'debate', 'character-talk', 'content-theory'].includes(item.id) ? item.id : item.id === 'multiple-choice' ? 'assessment' : item.id;
            const url = `/assignments/${id}`;
            const data = {
              image: item.module.picture
            };
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: url
            }, _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("h4", {
              className: "card__title"
            }, item.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, item.module.description)), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("span", {
              className: "card__text-hover p2"
            }, texts.moduleAccess)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2NvbmZpZyIsIkhlYWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIl91aSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpbmNsdWRlcyIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiQ2FyZENvbnRlbnQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxH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