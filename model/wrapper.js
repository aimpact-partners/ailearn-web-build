System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, AiLearnWrapper, __beyond_pkg, hmr;
  _export("AiLearnWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.29"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/model/wrapper"
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