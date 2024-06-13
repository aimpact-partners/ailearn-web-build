System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, AiLearnWrapper, __beyond_pkg, hmr;
  _export("AiLearnWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-20"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/model/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3107487842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AiLearnWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          const AiLearnWrapper = exports.AiLearnWrapper = new class extends _model.ReactiveModel {
            constructor(args) {
              super(args);
              // todo: @jircdev view which props are needed and why.
              this.reactiveProps(['sessionModel', 'sessionAssessment', 'currentAssignment', 'isTeacher', 'currentClassroom']);
            }
            setClassroom = async data => {
              localStorage.setItem('classroom', JSON.stringify(data));
              this.currentClassroom = data;
            };
          }('');
          globalThis.ailearn = AiLearnWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AiLearnWrapper",
        "name": "AiLearnWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AiLearnWrapper') && _export("AiLearnWrapper", AiLearnWrapper = require ? require('./index').AiLearnWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQWlMZWFybldyYXBwZXIiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiYXJncyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDbGFzc3Jvb20iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50Q2xhc3Nyb29tIiwiZ2xvYmFsVGhpcyIsImFpbGVhcm4iXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUcsSUFBSyxjQUFjRixNQUFBLENBQUFJLGFBQXVCO1lBRWxGQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDQSxJQUFJLENBQUM7Y0FDWDtjQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hIO1lBRUFDLFlBQVksR0FBRyxNQUFNQyxJQUFJLElBQUc7Y0FDM0JDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQyxDQUFDO2NBQ3ZELElBQUksQ0FBQ0ssZ0JBQWdCLEdBQUdMLElBQUk7WUFDN0IsQ0FBQztXQUNELENBQUUsRUFBRSxDQUFDO1VBQ05NLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHZCxjQUFjIn0=