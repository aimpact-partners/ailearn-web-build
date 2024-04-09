System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.1.0/icons", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.0/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi010Icons) {
      dependency_7 = _pragmateUi010Icons;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_10 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi010Components) {
      dependency_11 = _pragmateUi010Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_13 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@aimpact/ailearn-app/config', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/home.widget",
        "is": "page",
        "route": "/",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747464748,
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
              this.#store.load();
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
        hash: 3619417985,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#model.assignments;
            }
            async load() {
              try {
                this.#model = new _core.StudentsHome();
                await this.#model.load();
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2750163565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProjectsContext = exports.ProjectsContext = void 0;
          var _react = require("react");
          const ProjectsContext = exports.ProjectsContext = _react.default.createContext({});
          const useProjectsContext = () => _react.default.useContext(ProjectsContext);
          exports.useProjectsContext = useProjectsContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/divider
      *******************************/

      ims.set('./views/divider', {
        hash: 1105280235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDivider = ModuleDivider;
          var _react = require("react");
          var _context = require("./context");
          function ModuleDivider() {
            const {
              texts
            } = (0, _context.useProjectsContext)();
            return _react.default.createElement("div", {
              className: "divider__container"
            }, _react.default.createElement("h3", {
              className: "divider__title"
            }, texts.dividerTitle), _react.default.createElement("div", {
              className: "divider__bar"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3667934010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _module2 = require("./module");
          var _divider = require("./divider");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!textsReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const {
              assignments
            } = store.model;
            const contextValue = {
              store,
              fetching: store.fetching,
              texts,
              items: assignments
            };
            const Control = assignments.length > 0 ? _ui.ListContainer : _ui.EmptyCard;
            return _react.default.createElement(_context.ProjectsContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_divider.ModuleDivider, null), _react.default.createElement(Control, {
              items: store.items,
              control: _module2.Module,
              text: texts.blackList.title,
              description: texts.blackList.description,
              icon: "generate"
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/module
      ******************************/

      ims.set('./views/module', {
        hash: 3943642384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Module = Module;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /**bundle*/
          function Module({
            data
          }) {
            const {
              texts
            } = (0, _context.useProjectsContext)();
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: `/assignments/${data.id.split('.')[0]}`
            }, _react.default.createElement(_ui.CardImage, {
              src: data.module.picture,
              alt: data.module.title
            }, _react.default.createElement("div", {
              className: "card__top_text secondary"
            }, data.classroom.name)), _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("h4", {
              className: "card__title"
            }, data.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, data.module.description)), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover p2"
            }, data.module?.activities?.count, " ", texts.moduleSubtitleText, ' '), _react.default.createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsIlN0dWRlbnRzSG9tZSIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIlByb2plY3RzQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvamVjdHNDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiTW9kdWxlRGl2aWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRpdmlkZXJUaXRsZSIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaG9va3MiLCJfbW9kdWxlMiIsIl9kaXZpZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29uZmlnIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIkNvbnRyb2wiLCJsZW5ndGgiLCJMaXN0Q29udGFpbmVyIiwiRW1wdHlDYXJkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjb250cm9sIiwiTW9kdWxlIiwidGV4dCIsImJsYWNrTGlzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZGF0YSIsIkNhcmQiLCJsaW5rIiwiaWQiLCJzcGxpdCIsIkNhcmRJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJjbGFzc3Jvb20iLCJuYW1lIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJtb2R1bGVTdWJ0aXRsZVRleHQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RpdmlkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFXLE1BQUEsR0FBQWQs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