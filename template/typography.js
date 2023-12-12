System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "pragmate-ui@0.0.3/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_5 = _pragmateUi003Components;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.21/template/typography"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-template-tipography",
        "vspecifier": "@aimpact/ailearn-app@0.0.21/template/typography",
        "is": "page",
        "route": "/template/typography",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.21/template/typography');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
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
            show() {}
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
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/backgrounds
      ***********************************/

      ims.set('./views/backgrounds', {
        hash: 1161471450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Backgrounds = Backgrounds;
          var _react = require("react");
          function Backgrounds() {
            const backgrounds = ['primary-container', 'secondary-container', 'primary-dark-container', 'secondary-dark-container', 'primary-light-container', 'secondary-light-container', 'background', 'surface', 'surface-variant'];
            return _react.default.createElement("div", null, backgrounds.map(item => {
              return _react.default.createElement("div", {
                key: item
              }, _react.default.createElement("h3", null, item), _react.default.createElement("div", {
                className: `bg-box bg-${item}`
              }));
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/buttons
      *******************************/

      ims.set('./views/buttons', {
        hash: 504127515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "user"
            }, "Primary button")), _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary",
              icon: "user"
            }, "Primary button")));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 569158903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _backgrounds = require("./backgrounds");
          var _buttons = require("./buttons");
          /*bundle*/
          function View() {
            return React.createElement("div", {
              className: "template__container"
            }, React.createElement("h1", null, "Header 1"), React.createElement("h2", null, "Header 2"), React.createElement("h3", null, "Header 3"), React.createElement("h4", null, "Header 4"), React.createElement("h5", null, "Header 5"), React.createElement("h6", null, "Header 6"), React.createElement("div", {
              className: "caption title"
            }, "Caption title"), React.createElement("label", {
              className: "label\t title"
            }, "Caption title"), React.createElement(_backgrounds.Backgrounds, null), React.createElement(_buttons.Buttons, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQmFja2dyb3VuZHMiLCJiYWNrZ3JvdW5kcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaXRlbSIsImtleSIsImNsYXNzTmFtZSIsIl9jb21wb25lbnRzIiwiQnV0dG9ucyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwiYm9yZGVyZWQiLCJSZWFjdCIsIl9iYWNrZ3JvdW5kcyIsIl9idXR0b25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYmFja2dyb3VuZHMudHN4IiwiL3RzL3ZpZXdzL2J1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTtZQUVSOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFULFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkssTUFBT0ksWUFBWTtVQUEyQkssT0FBQSxDQUFBTCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRHBELElBQUFNLE1BQUEsR0FBQWIsT0FBQTtVQUNNLFNBQVVjLFdBQVdBLENBQUE7WUFDMUIsTUFBTUMsV0FBVyxHQUFHLENBQ25CLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLFlBQVksRUFDWixTQUFTLEVBQ1QsaUJBQWlCLENBQ2pCO1lBRUQsT0FDQ0YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsY0FDRUYsV0FBVyxDQUFDRyxHQUFHLENBQUNDLElBQUksSUFBRztjQUN2QixPQUNDTixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS0csR0FBRyxFQUFFRDtjQUFJLEdBQ2JOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGFBQUtFLElBQUksQ0FBTSxFQUNmTixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS0ksU0FBUyxFQUFFLGFBQWFGLElBQUk7Y0FBRSxFQUFRLENBQ3RDO1lBRVIsQ0FBQyxDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQU4sTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQXNCLFdBQUEsR0FBQXRCLE9BQUE7VUFDTSxTQUFVdUIsT0FBT0EsQ0FBQTtZQUN0QixPQUNDVixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBWSxHQUMxQlIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBRSxNQUFNO2NBQUNDLE9BQU8sRUFBQztZQUFTLG9CQUF3QixFQUNqRFosTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBRSxNQUFNO2NBQUNDLE9BQU8sRUFBQztZQUFXLG9CQUF3QixFQUNuRFosTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBRSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLElBQUksRUFBQztZQUFNLG9CQUU1QixFQUNUYixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFFLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sb0JBRTlCLENBQ0osRUFDTmIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQVksR0FDMUJSLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNLLFdBQUEsQ0FBQUUsTUFBTTtjQUFDRyxRQUFRO2NBQUNGLE9BQU8sRUFBQztZQUFTLG9CQUV6QixFQUNUWixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFFLE1BQU07Y0FBQ0csUUFBUTtjQUFDRixPQUFPLEVBQUM7WUFBVyxvQkFFM0IsRUFDVFosTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBRSxNQUFNO2NBQUNHLFFBQVE7Y0FBQ0YsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sb0JBRXJDLEVBQ1RiLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNLLFdBQUEsQ0FBQUUsTUFBTTtjQUFDRyxRQUFRO2NBQUNGLE9BQU8sRUFBQyxXQUFXO2NBQUNDLElBQUksRUFBQztZQUFNLG9CQUV2QyxDQUNKLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQUUsS0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixZQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQThCLFFBQUEsR0FBQTlCLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUE7WUFDWixPQUNDbUIsS0FBQSxDQUFBWCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFxQixHQUNuQ08sS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUNqQlcsS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUNqQlcsS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUNqQlcsS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUNqQlcsS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUNqQlcsS0FBQSxDQUFBWCxhQUFBLHdCQUFpQixFQUVqQlcsS0FBQSxDQUFBWCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFlLG1CQUFvQixFQUNsRE8sS0FBQSxDQUFBWCxhQUFBO2NBQU9JLFNBQVMsRUFBQztZQUFjLG1CQUFzQixFQUNyRE8sS0FBQSxDQUFBWCxhQUFBLENBQUNZLFlBQUEsQ0FBQWYsV0FBVyxPQUFHLEVBQ2ZjLEtBQUEsQ0FBQVgsYUFBQSxDQUFDYSxRQUFBLENBQUFQLE9BQU8sT0FBRyxDQUNOO1VBRVIifQ==