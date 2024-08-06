System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat@1.0.2/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@aimpact/ailearn-app@0.1.1/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.1/config", "pragmate-ui@1.0.0-beta.1/list"], function (_export, _context2) {
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
    }, function (_aimpactChat102Wrapper) {
      dependency_4 = _aimpactChat102Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_8 = _aimpactAilearnApp011ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_9 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_11 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_12 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp011Config) {
      dependency_13 = _aimpactAilearnApp011Config;
    }, function (_pragmateUi100Beta1List) {
      dependency_14 = _pragmateUi100Beta1List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/assignments/coach/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/list', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/assignments/coach/list.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9saXN0IiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsIk5vdEZvdW5kIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwiZmV0Y2hpbmciLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwiZGl2aWRlclRpdGxlIiwiTGVzc29uSW5mbyIsImFzc2lnbm1lbnRJZCIsInRvcGljcyIsIm1hcCIsInRvcGljIiwidXJsIiwiTGluayIsImtleSIsImhyZWYiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpbmNsdWRlcyIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiQ2FyZENvbnRlbnQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L0xlc3NvbkluZm8udHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7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