System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ProgressBar, __beyond_pkg, hmr;
  _export("ProgressBar", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/progress-bar"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/progress-bar');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2075919460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          /* bundle */
          function ProgressBar(props) {
            const {
              currentValue,
              maxValue = 100,
              variant = 'primary',
              label
            } = props;
            const percentage = currentValue / maxValue * 100;
            const cls = variant ? `progress-bar__progress ${variant}` : 'progress-bar__progress';
            return _react.default.createElement("div", {
              className: "pui-progress-bar"
            }, _react.default.createElement("span", {
              className: cls,
              style: {
                width: `${percentage}%`
              }
            }, currentValue, "%"));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1065967873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ProgressBar",
        "name": "ProgressBar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ProgressBar') && _export("ProgressBar", ProgressBar = require ? require('./index').ProgressBar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBWSxTQUFVQSxXQUFXLENBQUNDLEtBQWE7WUFDckQsTUFBTTtjQUFFQyxZQUFZO2NBQUVDLFFBQVEsR0FBRyxHQUFHO2NBQUVDLE9BQU8sR0FBRyxTQUFTO2NBQUVDO1lBQUssQ0FBRSxHQUFHSixLQUFLO1lBRTFFLE1BQU1LLFVBQVUsR0FBSUosWUFBWSxHQUFHQyxRQUFRLEdBQUksR0FBRztZQUVsRCxNQUFNSSxHQUFHLEdBQUdILE9BQU8sR0FBRywwQkFBMEJBLE9BQU8sRUFBRSxHQUFHLHdCQUF3QjtZQUNwRixPQUNDSTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENEO2NBQU1DLFNBQVMsRUFBRUYsR0FBRztjQUFFRyxLQUFLLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxHQUFHTCxVQUFVO2NBQUc7WUFBRSxHQUN0REosWUFBWSxNQUNQLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7VUNmQTs7VUFFQVU7WUFDQUM7VUFDQSIsIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvcHMiLCJjdXJyZW50VmFsdWUiLCJtYXhWYWx1ZSIsInZhcmlhbnQiLCJsYWJlbCIsInBlcmNlbnRhZ2UiLCJjbHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJPYmplY3QiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=