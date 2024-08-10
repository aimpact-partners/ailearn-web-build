System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, limitDecimals, __beyond_pkg, hmr;
  _export("limitDecimals", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.01"], ["@aimpact/ailearn-app", "0.1.4-test.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.01/utils"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./numbers
      *************************/
      ims.set('./numbers', {
        hash: 3200269471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.limitDecimals = void 0;
          /*bundle */
          const limitDecimals = (number, decimalPlaces = 2) => {
            return Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
          };
          exports.limitDecimals = limitDecimals;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./numbers",
        "from": "limitDecimals",
        "name": "limitDecimals"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'limitDecimals') && _export("limitDecimals", limitDecimals = require ? require('./numbers').limitDecimals : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsaW1pdERlY2ltYWxzIiwibnVtYmVyIiwiZGVjaW1hbFBsYWNlcyIsIk1hdGgiLCJyb3VuZCIsInBvdyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvbnVtYmVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFZLE1BQU1BLGFBQWEsR0FBR0EsQ0FBQ0MsTUFBYyxFQUFFQyxhQUFBLEdBQXdCLENBQUMsS0FBWTtZQUM5RixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxHQUFHRSxJQUFJLENBQUNFLEdBQUcsQ0FBQyxFQUFFLEVBQUVILGFBQWEsQ0FBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEVBQUUsRUFBRUgsYUFBYSxDQUFDO1VBQ3RGLENBQUM7VUFBQ0ksT0FBQSxDQUFBTixhQUFBLEdBQUFBLGFBQUEiLCJpZ25vcmVMaXN0IjpbXX0=