System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, AiLearnWrapper, __beyond_pkg, hmr;
  _export("AiLearnWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.17"], ["@aimpact/ailearn-app", "0.3.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.17/model/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3565213501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AiLearnWrapper = void 0;
          var _model = require("@aimpact/reactive/model");
          class Wrapper extends _model.ReactiveModel {
            #device;
            get device() {
              return this.#device;
            }
            constructor(args) {
              super(args);
              // todo: @jircdev view which props are needed and why.
              this.reactiveProps(['sessionModel', 'currentClassroom', 'sessionAssessment', 'currentAssignment', 'isTeacher']);
              this.#device = this.calculateSize();
              globalThis.addEventListener('resize', () => {
                this.#device = this.calculateSize();
              });
            }
            setClassroom = async data => {
              localStorage.setItem('classroom', JSON.stringify(data));
              this.currentClassroom = data;
            };
            calculateSize() {
              const width = globalThis.innerWidth;
              if (!width) {
                console.log('the app is running out of the browser');
                return;
              }
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            }
          }
          exports.Wrapper = Wrapper;
          /*bundle*/
          const AiLearnWrapper = exports.AiLearnWrapper = new Wrapper('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiV3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJkZXZpY2UiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJyZWFjdGl2ZVByb3BzIiwiY2FsY3VsYXRlU2l6ZSIsImdsb2JhbFRoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0Q2xhc3Nyb29tIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudENsYXNzcm9vbSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiQWlMZWFybldyYXBwZXIiLCJhaWxlYXJuIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR00sTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXVCO1lBSW5ELENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDQSxJQUFJLENBQUM7Y0FDWDtjQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2NBRS9HLElBQUksQ0FBQyxDQUFBSCxNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDbkNDLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQzFDLElBQUksQ0FBQyxDQUFBTixNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDcEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQUcsWUFBWSxHQUFHLE1BQU1DLElBQUksSUFBRztjQUMzQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Y0FDdkQsSUFBSSxDQUFDSyxnQkFBZ0IsR0FBR0wsSUFBSTtZQUM3QixDQUFDO1lBRURKLGFBQWFBLENBQUE7Y0FDWixNQUFNVSxLQUFLLEdBQUdULFVBQVUsQ0FBQ1UsVUFBVTtjQUNuQyxJQUFJLENBQUNELEtBQUssRUFBRTtnQkFDWEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDLENBQUM7Z0JBQ3BEOztjQUVELElBQUlILEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSTtlQUNYLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDdkMsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNO2dCQUNOLE9BQU8sSUFBSTs7WUFFYjs7VUFDQUksT0FBQSxDQUFBcEIsT0FBQSxHQUFBQSxPQUFBO1VBQ007VUFBVyxNQUFNcUIsY0FBYyxHQUFBRCxPQUFBLENBQUFDLGNBQUEsR0FBRyxJQUFJckIsT0FBTyxDQUFDLEVBQUUsQ0FBQztVQUN4RE8sVUFBVSxDQUFDZSxPQUFPLEdBQUdELGNBQWMiLCJpZ25vcmVMaXN0IjpbXX0=