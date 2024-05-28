System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.45/components/ui"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
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
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0045ComponentsUi;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.45/missing",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/chat/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-missing",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/missing.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/missing.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1999589969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
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
        hash: 101340784,
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
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h1", null, "404"), _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description), _react.default.createElement("p", null, conclusion)), _react.default.createElement(_image.Image, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfaW1hZ2UiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfdWkiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsInRpdGxlIiwiY29uY2x1c2lvbiIsImRlc2NyaXB0aW9uIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsV0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBRUEsSUFBQVUsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsZUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksR0FBQSxHQUFBWixPQUFBO1VBRU87VUFBVSxTQUNSSyxJQUFJQSxDQUFDLEVBQUU7WUFDZixNQUFNLENBQUNRLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQW1DLElBQUFKLE1BQUEsQ0FBQUssUUFBUSxFQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRGLElBQUksQ0FBQ0osVUFBVSxFQUFFLE9BQU9OLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksYUFBYSxPQUFHO1lBRXpDLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxVQUFVO2NBQUVDO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNQLEdBQUEsQ0FBQVksYUFBYTtjQUFDQyxTQUFTLEVBQUM7WUFBK0IsR0FDdkRsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBUyxHQUN2QmxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLG1CQUFZLEVBQ1paLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUtFLEtBQUssQ0FBTSxFQUNoQmQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsWUFBSUksV0FBVyxDQUFLLEVBQ3BCaEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsWUFBSUcsVUFBVSxDQUFLLENBQ2QsRUFDTmYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBaUIsS0FBSztjQUFDQyxHQUFHLEVBQUMsaUJBQWlCO2NBQUNDLEdBQUcsRUFBQyxLQUFLO2NBQUNILFNBQVMsRUFBQztZQUEwQixFQUFHLENBQy9EO1VBRWxCIiwiaWdub3JlTGlzdCI6W119