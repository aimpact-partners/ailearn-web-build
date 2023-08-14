System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Spinner, __beyond_pkg, hmr;
  _export("Spinner", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/spinner');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./spinner
      *************************/
      ims.set('./spinner', {
        hash: 3687874229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = (0, _react.forwardRef)((props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            const types = ["on-primary", "on-secondary", "on-surface", "on-error", "primary", "secondary", "tertiary"];
            const clsType = types.includes(type) ? type : "primary";
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ""}`;
            let cls = className ? `${className} pragmate-element-spinner` : "pragmate-element-spinner";
            if (active) cls += " is-active";
            const circleSize = size === "xs" ? 30 : size === "md" ? 40 : size === "lg" ? 50 : size === "xl" ? 60 : 30;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: "0 0 100 100"
            }, _react.default.createElement("circle", {
              cx: "50",
              cy: "50",
              r: circleSize,
              style: style
            })));
          });
          exports.Spinner = Spinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3Bpbm5lciIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNvbG9yIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJhY3RpdmUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwiY2xzIiwiY2lyY2xlU2l6ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQ1AsTUFBTUMsT0FBTyxHQUNYLElBQUFGLE1BQUEsQ0FBQUcsVUFBVSxFQUNSLENBQUNDLEtBQWlCLEVBQUVDLEdBQThCLEtBQWlCO1lBQ2pFLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsSUFBSTtjQUFFQztZQUFNLENBQUUsR0FBR04sS0FBSztZQUVwRCxNQUFNTyxLQUFLLEdBQUcsQ0FDWixZQUFZLEVBQ1osY0FBYyxFQUNkLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxVQUFVLENBQ1g7WUFDRCxNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDSixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFNBQVM7WUFFdkQsTUFBTUssS0FBSyxHQUF3QixFQUFFO1lBQ3JDLElBQUlSLEtBQUssRUFBRVEsS0FBSyxDQUFDQyxNQUFNLEdBQUdULEtBQUs7WUFDL0JDLFNBQVMsR0FBRyxHQUFHSyxPQUFPLEdBQUdMLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSVMsR0FBRyxHQUFXVCxTQUFTLEdBQ3ZCLEdBQUdBLFNBQVMsMkJBQTJCLEdBQ3ZDLDBCQUEwQjtZQUM5QixJQUFJRyxNQUFNLEVBQUVNLEdBQUcsSUFBSSxZQUFZO1lBRS9CLE1BQU1DLFVBQVUsR0FDZFQsSUFBSSxLQUFLLElBQUksR0FDVCxFQUFFLEdBQ0ZBLElBQUksS0FBSyxJQUFJLEdBQ2IsRUFBRSxHQUNGQSxJQUFJLEtBQUssSUFBSSxHQUNiLEVBQUUsR0FDRkEsSUFBSSxLQUFLLElBQUksR0FDYixFQUFFLEdBQ0YsRUFBRTtZQUVSLE9BQ0VSLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLWixTQUFTLEVBQUVTLEdBQUc7Y0FBRVgsR0FBRyxFQUFFQTtZQUFHLEdBQzNCTCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsT0FBTyxFQUFDO1lBQWEsR0FDeEJwQixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBUUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFFTixVQUFVO2NBQUVILEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ25ELENBQ0Y7VUFFVixDQUFDLENBQ0Y7VUFBQ1UsT0FBQSxDQUFBdEIsT0FBQSxHQUFBQSxPQUFBIn0=