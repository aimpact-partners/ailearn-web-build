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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.25"], ["@aimpact/ailearn-app", "0.0.25"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.25/utils"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsaW1pdERlY2ltYWxzIiwibnVtYmVyIiwiZGVjaW1hbFBsYWNlcyIsIk1hdGgiLCJyb3VuZCIsInBvdyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvbnVtYmVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFZLE1BQU1BLGFBQWEsR0FBR0EsQ0FBQ0MsTUFBYyxFQUFFQyxhQUFBLEdBQXdCLENBQUMsS0FBWTtZQUM5RixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxHQUFHRSxJQUFJLENBQUNFLEdBQUcsQ0FBQyxFQUFFLEVBQUVILGFBQWEsQ0FBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEVBQUUsRUFBRUgsYUFBYSxDQUFDO1VBQ3RGLENBQUM7VUFBQ0ksT0FBQSxDQUFBTixhQUFBLEdBQUFBLGFBQUEifQ==