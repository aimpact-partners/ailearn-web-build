System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_6 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_9 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Components) {
      dependency_13 = _pragmateUi006Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/student/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/components', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/student/list.widget');
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
        hash: 3356723674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignment List']]
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
        hash: 2968858380,
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
            }, _react.default.createElement("h3", null, "hola"), _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("h4", {
              className: "card__title"
            }, item.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, item.module.description))), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiSXRlbSIsImRhdGEiLCJpbmNsdWRlcyIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiQ2FyZENvbnRlbnQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFN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