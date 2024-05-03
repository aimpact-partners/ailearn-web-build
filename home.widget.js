System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_7 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_13 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2493611569,
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
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.dividerTitle
            }), _react.default.createElement(Control, {
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
        hash: 1690324347,
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
              className: "card__subtitle  p2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsIlN0dWRlbnRzSG9tZSIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIlByb2plY3RzQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvamVjdHNDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiTW9kdWxlRGl2aWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRpdmlkZXJUaXRsZSIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaG9va3MiLCJfbW9kdWxlMiIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbmZpZyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdENvbnRhaW5lciIsIkVtcHR5Q2FyZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJjb250cm9sIiwiTW9kdWxlIiwidGV4dCIsImJsYWNrTGlzdCIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImRhdGEiLCJDYXJkIiwibGluayIsImlkIiwic3BsaXQiLCJDYXJkSW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwiY2xhc3Nyb29tIiwibmFtZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwiYWN0aXZpdGllcyIsImNvdW50IiwibW9kdWxlU3VidGl0bGVUZXh0IiwibW9kdWxlQWNjZXNzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kaXZpZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBVyxNQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxLQUFBLEdBQUFmLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFPLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUdOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0UsV0FBVztZQUMvQjtZQUVBLE1BQU1SLElBQUlBLENBQUE7Y0FDVCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBTSxLQUFNLEdBQUcsSUFBSUYsS0FBQSxDQUFBSyxZQUFZLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ04sSUFBSSxFQUFFO2dCQUV4QixJQUFJLENBQUNVLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQVQsT0FBQSxDQUFBTixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFrQixNQUFBLEdBQUF6QixPQUFBO1VBUU8sTUFBTTBCLGVBQWUsR0FBQWIsT0FBQSxDQUFBYSxlQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQW1CLEVBQXNCLENBQUM7VUFDckYsTUFBTUMsa0JBQWtCLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osZUFBZSxDQUFDO1VBQUNiLE9BQUEsQ0FBQWdCLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1IxRSxJQUFBSixNQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQStCLFFBQUEsR0FBQS9CLE9BQUE7VUFFTSxTQUFVZ0MsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUYsa0JBQWtCLEdBQUU7WUFFdEMsT0FDQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBZ0IsR0FBRUYsS0FBSyxDQUFDRyxZQUFZLENBQU0sRUFDeERYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEVBQUcsQ0FDM0I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBRSxHQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQXNDLGFBQUEsR0FBQXRDLE9BQUE7VUFDQSxJQUFBeUIsTUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUF1QyxNQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQXdDLFFBQUEsR0FBQXhDLE9BQUE7VUFFQSxJQUFBK0IsUUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUF5QyxXQUFBLEdBQUF6QyxPQUFBO1VBRUEsSUFBQTBDLGVBQUEsR0FBQTFDLE9BQUE7VUFFQSxJQUFBMkMsT0FBQSxHQUFBM0MsT0FBQTtVQUNPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ2dCLEtBQUssRUFBRXVCLFFBQVEsQ0FBQyxHQUFHLElBQUFuQixNQUFBLENBQUFvQixRQUFRLEVBQVV4QyxLQUFLLENBQUNnQixLQUFLLENBQUM7WUFDeEQsTUFBTSxDQUFDeUIsVUFBVSxFQUFFYixLQUFLLENBQUMsR0FBbUMsSUFBQU0sTUFBQSxDQUFBUSxRQUFRLEVBQUNMLGVBQUEsQ0FBQU0sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEYsSUFBQVYsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQzdDLEtBQUssQ0FBQyxFQUFFLE1BQU11QyxRQUFRLENBQUN2QyxLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUN5QixVQUFVLElBQUksQ0FBQ3pCLEtBQUssRUFBRSxPQUFPSSxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDTyxXQUFBLENBQUFVLE9BQU87Y0FBQ0MsTUFBTTtZQUFBLEVBQUc7WUFFcEQsTUFBTTtjQUFFakM7WUFBVyxDQUFFLEdBQUdkLEtBQUssQ0FBQ1ksS0FBSztZQUNuQyxNQUFNb0MsWUFBWSxHQUFHO2NBQ3BCaEQsS0FBSztjQUNMaUQsUUFBUSxFQUFFakQsS0FBSyxDQUFDaUQsUUFBUTtjQUN4QnJCLEtBQUs7Y0FDTGYsS0FBSyxFQUFFQzthQUNQO1lBRUQsTUFBTW9DLE9BQU8sR0FBR3BDLFdBQVcsQ0FBQ3FDLE1BQU0sR0FBRyxDQUFDLEdBQUduQixHQUFBLENBQUFvQixhQUFhLEdBQUdwQixHQUFBLENBQUFxQixTQUFTO1lBRWxFLE9BQ0NqQyxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDSCxRQUFBLENBQUFMLGVBQWUsQ0FBQ2lDLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFUDtZQUFZLEdBQzVDNUIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ0ksYUFBQSxDQUFBdUIsWUFBWTtjQUFDQyxVQUFVLEVBQUUsQ0FBQyxDQUFDbkIsT0FBQSxDQUFBaEIsT0FBTSxDQUFDb0MsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1lBQUMsRUFBSSxFQUM3RHZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNHLEdBQUEsQ0FBQTRCLGFBQWEsUUFDYnhDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNHLEdBQUEsQ0FBQTZCLFNBQVM7Y0FBQ0MsS0FBSyxFQUFFbEMsS0FBSyxDQUFDRztZQUFZLEVBQUksRUFDeENYLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNxQixPQUFPO2NBQ1ByQyxLQUFLLEVBQUViLEtBQUssQ0FBQ2EsS0FBSztjQUNsQmtELE9BQU8sRUFBRTVCLFFBQUEsQ0FBQTZCLE1BQU07Y0FDZkMsSUFBSSxFQUFFckMsS0FBSyxDQUFDc0MsU0FBUyxDQUFDSixLQUFLO2NBQzNCSyxXQUFXLEVBQUV2QyxLQUFLLENBQUNzQyxTQUFTLENBQUNDLFdBQVc7Y0FDeENDLElBQUksRUFBQztZQUFVLEVBQ2QsQ0FDYSxDQUNVO1VBRTdCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBcEMsR0FBQSxHQUFBckMsT0FBQTtVQUVBLElBQUF5QixNQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQStCLFFBQUEsR0FBQS9CLE9BQUE7VUFFTztVQUFXLFNBQVVxRSxNQUFNQSxDQUFDO1lBQUVLO1VBQUksQ0FBRTtZQUMxQyxNQUFNO2NBQUV6QztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFGLGtCQUFrQixHQUFFO1lBRXRDLE9BQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNHLEdBQUEsQ0FBQXNDLElBQUk7Y0FBQ0QsSUFBSSxFQUFFQSxJQUFJO2NBQUVFLElBQUksRUFBRSxnQkFBZ0JGLElBQUksQ0FBQ0csRUFBRSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsR0FDOURyRCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDRyxHQUFBLENBQUEwQyxTQUFTO2NBQUNDLEdBQUcsRUFBRU4sSUFBSSxDQUFDMUIsTUFBTSxDQUFDaUMsT0FBTztjQUFFQyxHQUFHLEVBQUVSLElBQUksQ0FBQzFCLE1BQU0sQ0FBQ21CO1lBQUssR0FDMUQxQyxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FBRXVDLElBQUksQ0FBQ1MsU0FBUyxDQUFDQyxJQUFJLENBQU8sQ0FDMUQsRUFDWjNELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNHLEdBQUEsQ0FBQWdELFdBQVc7Y0FBQ0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ25ELFNBQVMsRUFBQztZQUFTLEdBQy9DVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBd0IsR0FDMUNWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFhLEdBQUV1QyxJQUFJLENBQUMxQixNQUFNLENBQUNtQixLQUFLLENBQU0sRUFDcEQxQyxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBb0IsR0FBRXVDLElBQUksQ0FBQzFCLE1BQU0sQ0FBQ3dCLFdBQVcsQ0FBUSxDQUM1RCxFQUNWL0MsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBZSxFQUFHLEVBQ2hDVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlYsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdUMsSUFBSSxDQUFDMUIsTUFBTSxFQUFFdUMsVUFBVSxFQUFFQyxLQUFLLEUsS0FBR3ZELEtBQUssQ0FBQ3dELGtCQUFrQixFQUFFLEdBQUcsQ0FDekQsRUFDUGhFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFxQixHQUFFRixLQUFLLENBQUN5RCxZQUFZLENBQVEsQ0FDNUQsQ0FDRCxDQUNPLENBQ1I7VUFFVCJ9