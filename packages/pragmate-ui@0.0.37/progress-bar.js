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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/progress-bar"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/progress-bar');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1193690543,
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
              value,
              maxValue = 100,
              variant = 'primary'
            } = props;
            const percentage = value / maxValue * 100;
            const cls = variant ? `progress-bar__progress ${variant}` : 'progress-bar__progress';
            return _react.default.createElement("div", {
              className: "pui-progress-bar"
            }, _react.default.createElement("span", {
              className: cls,
              style: {
                width: `${percentage}%`
              }
            }, value, "%"));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2062575629,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBWSxTQUFVQSxXQUFXLENBQUNDLEtBQWE7WUFDckQsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLFFBQVEsR0FBRyxHQUFHO2NBQUVDLE9BQU8sR0FBRztZQUFTLENBQUUsR0FBR0gsS0FBSztZQUU1RCxNQUFNSSxVQUFVLEdBQUlILEtBQUssR0FBR0MsUUFBUSxHQUFJLEdBQUc7WUFFM0MsTUFBTUcsR0FBRyxHQUFHRixPQUFPLEdBQUcsMEJBQTBCQSxPQUFPLEVBQUUsR0FBRyx3QkFBd0I7WUFDcEYsT0FDQ0c7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRDtjQUFNQyxTQUFTLEVBQUVGLEdBQUc7Y0FBRUcsS0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsR0FBR0wsVUFBVTtjQUFHO1lBQUUsR0FDdERILEtBQUssTUFDQSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7O1VDZkE7O1VBRUFTO1lBQ0FUO1VBQ0EiLCJuYW1lcyI6WyJQcm9ncmVzc0JhciIsInByb3BzIiwidmFsdWUiLCJtYXhWYWx1ZSIsInZhcmlhbnQiLCJwZXJjZW50YWdlIiwiY2xzIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzeCIsImNvZGUvdHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==