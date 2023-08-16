System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tooltip"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tooltip');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4105411953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = void 0;
          var _react = require("react");
          /*bundle*/
          const Tooltip = ({
            children,
            text,
            position = 'bottom'
          }) => {
            const [showTooltip, setShowTooltip] = _react.default.useState(false);
            const handleMouseEnter = () => setShowTooltip(true);
            const handleMouseLeave = () => setShowTooltip(false);
            const cls = `tooltip ${position} ${showTooltip ? 'visible' : ''}`;
            return _react.default.createElement("div", {
              className: 'tooltip-container',
              onMouseLeave: handleMouseLeave,
              onMouseEnter: handleMouseEnter
            }, children, _react.default.createElement("div", {
              className: cls
            }, text));
          };
          exports.Tooltip = Tooltip;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Tooltip",
        "name": "Tooltip"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Tooltip') && _export("Tooltip", Tooltip = require ? require('./index').Tooltip : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVG9vbHRpcCIsImNoaWxkcmVuIiwidGV4dCIsInBvc2l0aW9uIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VFbnRlciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFRTztVQUFXLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLElBQUk7WUFBRUMsUUFBUSxHQUFHO1VBQVEsQ0FBaUIsS0FBSTtZQUM1RixNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdQLE1BQUEsQ0FBQVEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTNELE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1ILGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDbkQsTUFBTUksZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUosY0FBYyxDQUFDLEtBQUssQ0FBQztZQUNwRCxNQUFNSyxHQUFHLEdBQUcsV0FBV1AsUUFBUSxJQUFJQyxXQUFXLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUVqRSxPQUNDTixNQUFBLENBQUFRLE9BQUEsQ0FBQUssYUFBQTtjQUFLQyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNDLFlBQVksRUFBRUosZ0JBQWdCO2NBQUVLLFlBQVksRUFBRU47WUFBZ0IsR0FLL0ZQLFFBQVEsRUFDVEgsTUFBQSxDQUFBUSxPQUFBLENBQUFLLGFBQUE7Y0FBS0MsU0FBUyxFQUFFRjtZQUFHLEdBQUdSLElBQUksQ0FBTyxDQUM1QjtVQUVSLENBQUM7VUFBQ2EsT0FBQSxDQUFBZixPQUFBLEdBQUFBLE9BQUEifQ==