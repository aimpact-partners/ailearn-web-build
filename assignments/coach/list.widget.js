System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-10/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev10ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0046Dev10ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev10Config) {
      dependency_13 = _aimpactAilearnApp0046Dev10Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-10"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/assignments/coach/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-10/assignments/coach/list.widget');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2967773448,
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
              title: texts.dividerTitle
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
        hash: 3554530366,
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
              className: "card__subtitle p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsIk5vdEZvdW5kIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwiZmV0Y2hpbmciLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwiZGl2aWRlclRpdGxlIiwiTGVzc29uSW5mbyIsImFzc2lnbm1lbnRJZCIsInRvcGljcyIsIm1hcCIsInRvcGljIiwidXJsIiwiTGluayIsImtleSIsImhyZWYiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIkl0ZW0iLCJkYXRhIiwiaW5jbHVkZXMiLCJpbWFnZSIsInBpY3R1cmUiLCJDYXJkIiwibGluayIsIkNhcmRDb250ZW50IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9MZXNzb25JbmZvLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFB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