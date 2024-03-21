System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.27/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_7 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_12 = _aimpactAilearnApp0027Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/config', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/home.widget",
        "is": "page",
        "route": "/home",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4016487452,
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
              console.log('show home');
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              console.log('show home');
            }
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
        hash: 1897111207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _module2 = require("./module");
          var _divider = require("./divider");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const userName = _session.sessionWrapper.user.displayName;
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
            }, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              title: texts.greeting.replace('%name', userName),
              alt: "card-robot",
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.greetingIntro)), _react.default.createElement(_divider.ModuleDivider, null), _react.default.createElement(Control, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJTdHVkZW50c0hvbWUiLCJyZWFkeSIsImUiLCJlcnJvciIsIl9yZWFjdCIsIlByb2plY3RzQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvamVjdHNDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiTW9kdWxlRGl2aWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRpdmlkZXJUaXRsZSIsIl91aSIsIl9ob29rcyIsIl9tb2R1bGUyIiwiX2RpdmlkZXIiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3RDb250YWluZXIiLCJFbXB0eUNhcmQiLCJQcm92aWRlciIsInZhbHVlIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImdyZWV0aW5nIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiZ3JlZXRpbmdJbnRybyIsImNvbnRyb2wiLCJNb2R1bGUiLCJ0ZXh0IiwiYmxhY2tMaXN0IiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZGF0YSIsIkNhcmQiLCJsaW5rIiwiaWQiLCJzcGxpdCIsIkNhcmRJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJjbGFzc3Jvb20iLCJuYW1lIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJtb2R1bGVTdWJ0aXRsZVRleHQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RpdmlkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztjQUN4QixJ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