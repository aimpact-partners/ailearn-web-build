System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "react@18.2.0", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/image", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/ailearn-app@0.0.45/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactChat101SharedComponents) {
      dependency_5 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Image) {
      dependency_6 = _pragmateUi011Image;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_9 = _aimpactAilearnApp0045Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/beta",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/config', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-beta-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/beta.widget",
        "is": "page",
        "route": "/",
        "layout": "ailearn-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/beta.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 253853004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1062978680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              title,
              detail,
              description,
              action
            } = texts;
            let url = 'https://app.rvd.ai';
            const onNavigate = event => {
              event.preventDefault();
              let pathname = globalThis.localStorage.getItem('app.pathname');
              url = [null, undefined, ''].includes(pathname) ? url : `https://app.rvd.ai${pathname}`;
              event.preventDefault();
              globalThis.localStorage.removeItem('app.pathname');
              globalThis.location.href = url;
            };
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("p", null, description), _react.default.createElement("p", null, detail), _react.default.createElement("a", {
              href: url,
              onClick: onNavigate,
              className: "btn btn-primary"
            }, action)), _react.default.createElement(_image.Image, {
              className: "404-image",
              src: "/assets/404.png",
              alt: "404",
              alt: "Page not found in RVD.AI"
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl91aSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkU2NyZWVuIiwidGl0bGUiLCJkZXRhaWwiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInVybCIsIm9uTmF2aWdhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGF0aG5hbWUiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVtb3ZlSXRlbSIsImxvY2F0aW9uIiwiaHJlZiIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxXQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxNQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxlQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxHQUFBLEdBQUFaLE9BQUE7VUFHTztVQUFVLFNBQ1JLLElBQUlBLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBbUMsSUFBQUosTUFBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEYsSUFBSSxDQUFDSixVQUFVLEVBQUUsT0FBT04sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxhQUFhLE9BQUc7WUFFekMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsV0FBVztjQUFFQztZQUFNLENBQUUsR0FBR1YsS0FBSztZQUVwRCxJQUFJVyxHQUFHLEdBQUcsb0JBQW9CO1lBQzlCLE1BQU1DLFVBQVUsR0FBR0MsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUV0QixJQUFJQyxRQUFRLEdBQUdDLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDO2NBRTlEUCxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUVRLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDTCxRQUFRLENBQUMsR0FBR0osR0FBRyxHQUFHLHFCQUFxQkksUUFBUSxFQUFFO2NBQ3RGRixLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkUsVUFBVSxDQUFDQyxZQUFZLENBQUNJLFVBQVUsQ0FBQyxjQUFjLENBQUM7Y0FFbERMLFVBQVUsQ0FBQ00sUUFBUSxDQUFDQyxJQUFJLEdBQUdaLEdBQUc7WUFDL0IsQ0FBQztZQUNELE9BQ0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxHQUFBLENBQUEwQixhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUErQixHQUN2RGhDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLRSxLQUFLLENBQU0sQ0FDUixFQUNUZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLb0IsU0FBUyxFQUFDO1lBQVMsR0FDdkJoQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSSxXQUFXLENBQUssRUFDcEJoQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxZQUFJRyxNQUFNLENBQUssRUFDZmYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBR2tCLElBQUksRUFBRVosR0FBRztjQUFFZSxPQUFPLEVBQUVkLFVBQVU7Y0FBRWEsU0FBUyxFQUFDO1lBQWlCLEdBQzVEZixNQUFNLENBQ0osQ0FDQyxFQUNOakIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBZ0MsS0FBSztjQUFDRixTQUFTLEVBQUMsV0FBVztjQUFDRyxHQUFHLEVBQUMsaUJBQWlCO2NBQUNDLEdBQUcsRUFBQyxLQUFLO2NBQUNBLEdBQUcsRUFBQztZQUEwQixFQUFHLENBQy9FO1VBRWxCIiwiaWdub3JlTGlzdCI6W119