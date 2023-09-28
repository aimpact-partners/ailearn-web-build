System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Spinner, __beyond_pkg, hmr;
  _export("Spinner", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
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
          "vspecifier": "pragmate-ui@0.0.36/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/spinner');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFRTztVQUNQLE1BQU1BLE9BQU8sR0FBa0QscUJBQVUsRUFDeEUsQ0FBQ0MsS0FBaUIsRUFBRUMsR0FBOEIsS0FBaUI7WUFDbEUsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxJQUFJO2NBQUVDO1lBQU0sQ0FBRSxHQUFHTixLQUFLO1lBRXBELE1BQU1PLEtBQUssR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUMxRyxNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDSixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFNBQVM7WUFFdkQsTUFBTUssS0FBSyxHQUF3QixFQUFFO1lBQ3JDLElBQUlSLEtBQUssRUFBRVEsS0FBSyxDQUFDQyxNQUFNLEdBQUdULEtBQUs7WUFDL0JDLFNBQVMsR0FBRyxHQUFHSyxPQUFPLEdBQUdMLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSVMsR0FBRyxHQUFXVCxTQUFTLEdBQUcsR0FBR0EsU0FBUywyQkFBMkIsR0FBRywwQkFBMEI7WUFDbEcsSUFBSUcsTUFBTSxFQUFFTSxHQUFHLElBQUksWUFBWTtZQUUvQixNQUFNQyxLQUFLLEdBQUc7Y0FDYkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFO2FBQ0o7WUFDRCxNQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRTtZQUVwQyxPQUNDZTtjQUFLaEIsU0FBUyxFQUFFUyxHQUFHO2NBQUVYLEdBQUcsRUFBRUE7WUFBRyxHQUM1QmtCO2NBQUtDLE9BQU8sRUFBQztZQUFhLEdBQ3pCRDtjQUFRRSxFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUVMLFVBQVU7Y0FBRVIsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDbEQsQ0FDRDtVQUVSLENBQUMsQ0FDRDtVQUFDYyIsIm5hbWVzIjpbIlNwaW5uZXIiLCJwcm9wcyIsInJlZiIsImNvbG9yIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJhY3RpdmUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwiY2xzIiwic2l6ZXMiLCJ4cyIsIm1kIiwibGciLCJ4bCIsImNpcmNsZVNpemUiLCJSZWFjdCIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvc3Bpbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=