System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.23/components/ui", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_7 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0023ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0023ComponentsUi;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.21/home.widget",
        "is": "page",
        "route": "/home",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.21/home.widget');
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
        hash: 3425151762,
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
                const r = await this.#model.load();
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
        hash: 4053983652,
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
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const userName = _session.sessionWrapper.user.displayName;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
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
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/']]
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
        hash: 2667645924,
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
            }, _react.default.createElement("h5", {
              className: "card__title h3"
            }, data.module.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, data.module.description), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
              className: "cart__text-non-hover"
            }, data.module?.activities?.count, " ", texts.moduleSubtitleText, ' '), _react.default.createElement("p", {
              className: "card__text-hover"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsIlN0dWRlbnRzSG9tZSIsInIiLCJyZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJQcm9qZWN0c0NvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb2plY3RzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIk1vZHVsZURpdmlkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkaXZpZGVyVGl0bGUiLCJfdWkiLCJfaG9va3MiLCJfbW9kdWxlMiIsIl9kaXZpZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfc2Vzc2lvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3RDb250YWluZXIiLCJFbXB0eUNhcmQiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiZ3JlZXRpbmciLCJyZXBsYWNlIiwiYWx0IiwiaW1hZ2UiLCJncmVldGluZ0ludHJvIiwiY29udHJvbCIsIk1vZHVsZSIsInRleHQiLCJibGFja0xpc3QiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkYXRhIiwiQ2FyZCIsImxpbmsiLCJpZCIsInNwbGl0IiwiQ2FyZEltYWdlIiwic3JjIiwicGljdHVyZSIsImNsYXNzcm9vbSIsIm5hbWUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsImFjdGl2aXRpZXMiLCJjb3VudCIsIm1vZHVsZVN1YnRpdGxlVGV4dCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGl2aWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VB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