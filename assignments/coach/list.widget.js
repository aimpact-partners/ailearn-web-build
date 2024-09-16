System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.2.0/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.31/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.6-dev.31/config", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk120Wrapper) {
      dependency_4 = _aimpactChatSdk120Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp016Dev31ComponentsUi) {
      dependency_8 = _aimpactAilearnApp016Dev31ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Components) {
      dependency_10 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp016Dev31Config) {
      dependency_11 = _aimpactAilearnApp016Dev31Config;
    }, function (_pragmateUi100Beta6List) {
      dependency_12 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.31"], ["@aimpact/ailearn-app", "0.1.6-dev.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.31/assignments/coach/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/list', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.31/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.31/assignments/coach/list.widget');
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
        hash: 3790138872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
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
        hash: 3893191733,
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
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [error, setError] = _react.default.useState(store.error);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState(store?.model?.assignments);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setError(store.error);
              setItems(store.model?.assignments);
            });
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
        hash: 3476004597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          function List() {
            const {
              items
            } = (0, _context.useListContext)();
            return _react.default.createElement(_list.List, {
              className: "list__container",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2NvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwiZGl2aWRlclRpdGxlIiwiX2NvbXBvbmVudHMiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiZGF0YSIsImluY2x1ZGVzIiwiaW1hZ2UiLCJwaWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJDYXJkQ29udGVudCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7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