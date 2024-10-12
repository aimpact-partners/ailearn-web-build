System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "apexcharts@3.53.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Control, ALGO, ALGO2, Chart, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    ALGO: void 0,
    ALGO2: void 0,
    Chart: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_apexcharts2) {
      dependency_3 = _apexcharts2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/shared/charts"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['apexcharts', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/shared/charts');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3537212923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = exports.ALGO2 = exports.ALGO = void 0;
          /*bundle*/
          class Control {
            constructor() {}
            testing() {
              console.log('testing');
            }
          }
          exports.Control = Control;
          /*bundle*/
          const ALGO = exports.ALGO = '11';
          /*bundle*/
          const ALGO2 = exports.ALGO2 = '11';
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3643900951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chart = Chart;
          var _react = require("react");
          var _apexcharts = require("apexcharts");
          /*bundle */
          function Chart(props) {
            const ref = _react.default.useRef(null);
            const [chart, setChart] = _react.default.useState(null);
            _react.default.useEffect(() => {
              const instance = new _apexcharts.default(ref.current, props.options);
              instance.render();
              setChart(instance);
            }, [ref]);
            return _react.default.createElement("div", {
              ref: ref
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./control",
        "from": "ALGO",
        "name": "ALGO"
      }, {
        "im": "./control",
        "from": "ALGO2",
        "name": "ALGO2"
      }, {
        "im": "./index",
        "from": "Chart",
        "name": "Chart"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'ALGO') && _export("ALGO", ALGO = require ? require('./control').ALGO : value);
        (require || prop === 'ALGO2') && _export("ALGO2", ALGO2 = require ? require('./control').ALGO2 : value);
        (require || prop === 'Chart') && _export("Chart", Chart = require ? require('./index').Chart : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cm9sIiwiY29uc3RydWN0b3IiLCJ0ZXN0aW5nIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiLCJBTEdPIiwiQUxHTzIiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2FwZXhjaGFydHMiLCJDaGFydCIsInByb3BzIiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsImNoYXJ0Iiwic2V0Q2hhcnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwiY3VycmVudCIsIm9wdGlvbnMiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2wudHMiLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUNYQSxPQUFPO1lBQ1pDLFlBQUEsR0FBZTtZQUVmQyxPQUFPQSxDQUFBO2NBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUN2Qjs7VUFDQUMsT0FBQSxDQUFBTCxPQUFBLEdBQUFBLE9BQUE7VUFFTTtVQUFXLE1BQU1NLElBQUksR0FBQUQsT0FBQSxDQUFBQyxJQUFBLEdBQUcsSUFBSTtVQUM1QjtVQUFXLE1BQU1DLEtBQUssR0FBQUYsT0FBQSxDQUFBRSxLQUFBLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWcEMsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxTQUFVRSxLQUFLQSxDQUFDQyxLQUFLO1lBQ3RDLE1BQU1DLEdBQUcsR0FBR0wsTUFBQSxDQUFBTSxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVCxNQUFBLENBQUFNLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5Q1YsTUFBQSxDQUFBTSxPQUFLLENBQUNLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFFBQVEsR0FBRyxJQUFJVixXQUFBLENBQUFJLE9BQVUsQ0FBQ0QsR0FBRyxDQUFDUSxPQUFPLEVBQUVULEtBQUssQ0FBQ1UsT0FBTyxDQUFDO2NBQzNERixRQUFRLENBQUNHLE1BQU0sRUFBRTtjQUNqQk4sUUFBUSxDQUFDRyxRQUFRLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUNQLEdBQUcsQ0FBQyxDQUFDO1lBRVQsT0FBT0wsTUFBQSxDQUFBTSxPQUFBLENBQUFVLGFBQUE7Y0FBS1gsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDekIiLCJpZ25vcmVMaXN0IjpbXX0=