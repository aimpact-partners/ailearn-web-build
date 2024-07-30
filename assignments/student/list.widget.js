System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat@1.0.2/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-dev.06/components/navbar-header.code", "@aimpact/ailearn-app@0.1.0-dev.06/config", "@aimpact/ailearn-app@0.1.0-dev.06/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp010Dev06ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp010Dev06ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp010Dev06Config) {
      dependency_9 = _aimpactAilearnApp010Dev06Config;
    }, function (_aimpactAilearnApp010Dev06ComponentsUi) {
      dependency_10 = _aimpactAilearnApp010Dev06ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_11 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_13 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_14 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_15 = _pragmateUi100Beta1List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.06"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/assignments/student/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.06/assignments/student/list.widget');
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
        hash: 2410908791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              texts
            } = (0, _context.useListContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [['Assignment List']]
            });
          }
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
        hash: 253696287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          function List() {
            const {
              items
            } = useListContext();
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
        hash: 2807436029,
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
              className: "card__subtitle p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaWQiLCJvZmYiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJDbGFzc3Jvb20iLCJvbiIsInJlYWR5IiwiZXJyb3IiLCJnZXRMZXNzb25EYXRhIiwibGVzc29uIiwiaXRlbXMiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmaWx0ZXIiLCJpdGVtIiwibWV0YWRhdGEiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIl91aSIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwiYXNzaWdubWVudHMiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiTm90Rm91bmQiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsImNsYXNzTmFtZSIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlN1YkRpdmlkZXIiLCJkaXZpZGVyVGl0bGUiLCJMZXNzb25JbmZvIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJfaXRlbSIsImNvbnRyb2wiLCJJdGVtIiwiZGF0YSIsImluY2x1ZGVzIiwiaW1hZ2UiLCJwaWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJDYXJkQ29udGVudCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9MZXNzb25JbmZvLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFB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