System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "apexcharts@3.44.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Control, Chart, __beyond_pkg, hmr;
  _export({
    Control: void 0,
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/shared/charts"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['apexcharts', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/shared/charts');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1043499290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUNYQSxPQUFPO1lBQ1pDLGVBQWU7O1VBQ2ZDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hEO1VBQ0E7VUFFTztVQUFXLFNBQVVDLEtBQUssQ0FBQ0MsS0FBSztZQUN0QyxNQUFNQyxHQUFHLEdBQUdDLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdILGNBQUssQ0FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5Q0osY0FBSyxDQUFDSyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBSUMsbUJBQVUsQ0FBQ1IsR0FBRyxDQUFDUyxPQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FBTyxDQUFDO2NBQzNESCxRQUFRLENBQUNJLE1BQU0sRUFBRTtjQUNqQlAsUUFBUSxDQUFDRyxRQUFRLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUNQLEdBQUcsQ0FBQyxDQUFDO1lBRVQsT0FBT0M7Y0FBS0QsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDekIiLCJuYW1lcyI6WyJDb250cm9sIiwiY29uc3RydWN0b3IiLCJleHBvcnRzIiwiQ2hhcnQiLCJwcm9wcyIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY2hhcnQiLCJzZXRDaGFydCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJBcGV4Q2hhcnRzIiwiY3VycmVudCIsIm9wdGlvbnMiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2wudHMiLCJ0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==