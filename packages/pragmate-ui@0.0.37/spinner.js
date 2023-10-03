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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/spinner');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./spinner
      *************************/
      ims.set('./spinner', {
        hash: 1129442560,
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
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = className ? `${className} pragmate-element-spinner` : 'pragmate-element-spinner';
            if (active) cls += ' is-active';
            const sizes = {
              xs: 30,
              md: 40,
              lg: 50,
              xl: 60
            };
            const circleSize = sizes[size] || 30;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3Bpbm5lciIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNvbG9yIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJhY3RpdmUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwiY2xzIiwic2l6ZXMiLCJ4cyIsIm1kIiwibGciLCJ4bCIsImNpcmNsZVNpemUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvY29kZS90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFRTztVQUNQLE1BQU1DLE9BQU8sR0FBa0QsSUFBQUYsTUFBQSxDQUFBRyxVQUFVLEVBQ3hFLENBQUNDLEtBQWlCLEVBQUVDLEdBQThCLEtBQWlCO1lBQ2xFLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsSUFBSTtjQUFFQztZQUFNLENBQUUsR0FBR04sS0FBSztZQUVwRCxNQUFNTyxLQUFLLEdBQUcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDMUcsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRyxTQUFTO1lBRXZELE1BQU1LLEtBQUssR0FBd0IsRUFBRTtZQUNyQyxJQUFJUixLQUFLLEVBQUVRLEtBQUssQ0FBQ0MsTUFBTSxHQUFHVCxLQUFLO1lBQy9CQyxTQUFTLEdBQUcsR0FBR0ssT0FBTyxHQUFHTCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlTLEdBQUcsR0FBV1QsU0FBUyxHQUFHLEdBQUdBLFNBQVMsMkJBQTJCLEdBQUcsMEJBQTBCO1lBQ2xHLElBQUlHLE1BQU0sRUFBRU0sR0FBRyxJQUFJLFlBQVk7WUFFL0IsTUFBTUMsS0FBSyxHQUFHO2NBQ2JDLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRTthQUNKO1lBQ0QsTUFBTUMsVUFBVSxHQUFHTCxLQUFLLENBQUNULElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFcEMsT0FDQ1IsTUFBQSxDQUFBdUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtqQixTQUFTLEVBQUVTLEdBQUc7Y0FBRVgsR0FBRyxFQUFFQTtZQUFHLEdBQzVCTCxNQUFBLENBQUF1QixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsT0FBTyxFQUFDO1lBQWEsR0FDekJ6QixNQUFBLENBQUF1QixPQUFBLENBQUFDLGFBQUE7Y0FBUUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFFTixVQUFVO2NBQUVSLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2xELENBQ0Q7VUFFUixDQUFDLENBQ0Q7VUFBQ2UsT0FBQSxDQUFBM0IsT0FBQSxHQUFBQSxPQUFBIn0=