System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Preload, __beyond_pkg, hmr;
  _export("Preload", void 0);
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/preload"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/preload');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2002719117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          /*bundle */
          function Preload(props) {
            const {
              width,
              height,
              color,
              stopAnimation,
              radio
            } = props;
            return _react.default.createElement("span", {
              className: 'pui-preload',
              style: {
                width: width || '100%',
                height: height || '14px',
                background: color || '',
                borderRadius: radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Preload",
        "name": "Preload"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Preload') && _export("Preload", Preload = require ? require('./index').Preload : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVyxTQUFVQSxPQUFPLENBQUNDLEtBQUs7WUFDeEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxhQUFhO2NBQUVDO1lBQUssQ0FBRSxHQUFHTCxLQUFLO1lBRTVELE9BQ0NNO2NBQ0NDLFNBQVMsRUFBQyxhQUFhO2NBQ3ZCQyxLQUFLLEVBQUU7Z0JBQ05QLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU07Z0JBQ3RCQyxNQUFNLEVBQUVBLE1BQU0sSUFBSSxNQUFNO2dCQUN4Qk8sVUFBVSxFQUFFTixLQUFLLElBQUksRUFBRTtnQkFDdkJPLFlBQVksRUFBRUwsS0FBSyxJQUFJOztZQUN2QixHQUVEQztjQUFNRSxLQUFLLEVBQUU7Z0JBQUVHLE9BQU8sRUFBRVAsYUFBYSxHQUFHLE1BQU0sR0FBRztjQUFPO1lBQUUsRUFBSSxDQUN4RDtVQUVUIiwibmFtZXMiOlsiUHJlbG9hZCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInN0b3BBbmltYXRpb24iLCJyYWRpbyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19