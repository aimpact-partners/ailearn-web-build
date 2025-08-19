System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/image", "@aimpact/ailearn-app@0.5.7/model/wrapper"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_3 = _beyondJsReact18Widgets114Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_5 = _aimpactAilearnApp057ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_6 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106Image) {
      dependency_7 = _pragmateUi106Image;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_8 = _aimpactAilearnApp057ModelWrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/missing",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['pragmate-ui/image', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-missing-control",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/missing.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/missing.widget');
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
        hash: 3813446972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              title,
              conclusion,
              description
            } = texts;
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, "404"), _react.default.createElement("h3", null, title)), _react.default.createElement("p", null, description), _react.default.createElement("p", null, conclusion)), _react.default.createElement(_image.Image, {
              src: "/assets/images/errors/404.webp",
              alt: `404 in ${_wrapper.settings.APP_NAME}`,
              className: "img-error__banner"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaW1hZ2UiLCJfd3JhcHBlciIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJ0aXRsZSIsImNvbmNsdXNpb24iLCJkZXNjcmlwdGlvbiIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImFsdCIsInNldHRpbmdzIiwiQVBQX05BTUUiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxHQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxlQUFBLEdBQUFWLE9BQUE7VUFFQSxJQUFBVyxNQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxRQUFBLEdBQUFaLE9BQUE7VUFDTztVQUFVLFNBQ1JLLElBQUlBLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBbUMsSUFBQUwsTUFBQSxDQUFBTSxRQUFRLEVBQUNMLGVBQUEsQ0FBQU0sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEYsSUFBSSxDQUFDSixVQUFVLEVBQUUsT0FBT04sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsR0FBQSxDQUFBWSxVQUFVO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFdEQsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLFVBQVU7Y0FBRUM7WUFBVyxDQUFFLEdBQUdWLEtBQUs7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsR0FBQSxDQUFBaUIsYUFBYTtjQUFDQyxTQUFTLEVBQUM7WUFBK0IsR0FDdkRuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBUyxHQUN2Qm5CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxtQkFBWSxFQUNaWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLRyxLQUFLLENBQU0sQ0FDUixFQUVUZixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSyxXQUFXLENBQUssRUFDcEJqQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSSxVQUFVLENBQUssQ0FDZCxFQUNOaEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBZ0IsS0FBSztjQUNMQyxHQUFHLEVBQUMsZ0NBQWdDO2NBQ3BDQyxHQUFHLEVBQUUsVUFBVWpCLFFBQUEsQ0FBQWtCLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFO2NBQ2xDTCxTQUFTLEVBQUM7WUFBbUIsRUFDNUIsQ0FDYTtVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==