System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.14/components/ui", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_7 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/session', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/home.widget",
        "is": "page",
        "route": "/home",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/home.widget');
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
        hash: 844238308,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
                this.#model = new _core.Classroom();
                const id = '620726382544';
                // if (!status) throw new Error('Error loading prompts');
                this.#model = await this.#model.load({
                  id
                });
                this.ready = true;
                // this.triggerEvent();
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
        hash: 3754943255,
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
            }, _react.default.createElement("h2", {
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
        hash: 1006534610,
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
            console.log(_session.sessionWrapper.user);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!textsReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const {
              sessions
            } = store.model;
            const contextValue = {
              store,
              fetching: store.fetching,
              texts,
              items: sessions
            };
            return _react.default.createElement(_context.ProjectsContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/']]
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              title: texts.greeting.replace('%name', userName),
              alt: "card-robot",
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", null, texts.greetingIntro)), _react.default.createElement(_divider.ModuleDivider, null), _react.default.createElement(_ui.ListContainer, {
              items: store.items,
              control: _module2.Module
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/module
      ******************************/

      ims.set('./views/module', {
        hash: 1836701335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Module = Module;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          function applyEllipsis(text, maxLength) {
            return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
          }
          /**bundle*/
          function Module({
            data
          }) {
            const {
              texts
            } = (0, _context.useProjectsContext)();
            const attrs = {
              image: 'https://img.freepik.com/free-vector/classroom-mathematics-learning_107791-1354.jpg',
              classroom: 'Classroom'
            };
            const staticDescription = 'Missing: Descripción del objetivo de aprendizaje';
            return _react.default.createElement(_ui.Card, {
              data: data,
              link: `/assignment/${data.id}`
            }, _react.default.createElement(_ui.CardImage, {
              src: attrs.image,
              alt: data.module.title
            }, _react.default.createElement("div", {
              className: "card__top_text"
            }, attrs.classroom)), _react.default.createElement(_ui.CardContent, {
              option: 1,
              className: 'theme-0'
            }, _react.default.createElement("h5", {
              className: "card__title h3"
            }, applyEllipsis(data.module.title, 55)), _react.default.createElement("span", {
              className: "card__subtitle disabled-text"
            }, applyEllipsis(staticDescription, 135)), _react.default.createElement("div", {
              className: 'card__footer-actions'
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
              className: "cart__text-non-hover"
            }, data.module?.activities?.length, " ", texts.moduleSubtitleText, ' '), _react.default.createElement("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsIkNsYXNzcm9vbSIsImlkIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiUHJvamVjdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9qZWN0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJNb2R1bGVEaXZpZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGl2aWRlclRpdGxlIiwiX3VpIiwiX2hvb2tzIiwiX21vZHVsZTIiLCJfZGl2aWRlciIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImxvZyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJzZXNzaW9ucyIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImdyZWV0aW5nIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiZ3JlZXRpbmdJbnRybyIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiTW9kdWxlIiwiYXBwbHlFbGxpcHNpcyIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsImRhdGEiLCJhdHRycyIsImNsYXNzcm9vbSIsInN0YXRpY0Rlc2NyaXB0aW9uIiwiQ2FyZCIsImxpbmsiLCJDYXJkSW1hZ2UiLCJzcmMiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsImFjdGl2aXRpZXMiLCJtb2R1bGVTdWJ0aXRsZVRleHQiLCJtb2R1bGVBY2Nlc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RpdmlkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFW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