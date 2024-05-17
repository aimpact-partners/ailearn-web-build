System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "react@18.2.0", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32-beta.5/components/ui"], function (_export, _context) {
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
    }, function (_pragmateUi011Alert) {
      dependency_7 = _pragmateUi011Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_8 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032Beta5ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032Beta5ComponentsUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.5"], ["@aimpact/ailearn-app", "0.0.32-beta.5"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.5/missing",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/chat/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-missing-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.5/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.5/missing.widget');
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
        hash: 1210899119,
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
              conclusion,
              description
            } = texts;
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, "404"), _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("p", null, description), _react.default.createElement("p", null, conclusion)), _react.default.createElement(_image.Image, {
              className: "404-image",
              src: "/assets/404.png",
              alt: "404",
              className: "Page not found in RVD.AI"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl91aSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkU2NyZWVuIiwidGl0bGUiLCJjb25jbHVzaW9uIiwiZGVzY3JpcHRpb24iLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxXQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFFQSxJQUFBVSxNQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxlQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxHQUFBLEdBQUFaLE9BQUE7VUFFTztVQUFVLFNBQ1JLLElBQUlBLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBbUMsSUFBQUosTUFBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEYsSUFBSSxDQUFDSixVQUFVLEVBQUUsT0FBT04sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxhQUFhLE9BQUc7WUFFekMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLFVBQVU7Y0FBRUM7WUFBVyxDQUFFLEdBQUdULEtBQUs7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsR0FBQSxDQUFBWSxhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUErQixHQUN2RGxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxtQkFBWSxFQUNaWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLRSxLQUFLLENBQU0sQ0FDUixFQUNUZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBUyxHQUN2QmxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLFlBQUlJLFdBQVcsQ0FBSyxFQUNwQmhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLFlBQUlHLFVBQVUsQ0FBSyxDQUNkLEVBQ05mLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNWLE1BQUEsQ0FBQWlCLEtBQUs7Y0FBQ0QsU0FBUyxFQUFDLFdBQVc7Y0FBQ0UsR0FBRyxFQUFDLGlCQUFpQjtjQUFDQyxHQUFHLEVBQUMsS0FBSztjQUFDSCxTQUFTLEVBQUM7WUFBMEIsRUFBRyxDQUNyRjtVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==