System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "tippy.js@6.3.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_tippyJs) {
      dependency_2 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/tooltip"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['tippy.js', dependency_2]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./ITippySettings
      ********************************/
      ims.set('./ITippySettings', {
        hash: 3730348027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4248594600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var React = require("react");
          var _tippy = require("tippy.js");
          /*bundle*/
          function Tooltip({
            children,
            content,
            placement = 'top',
            settings = {}
          }) {
            const ref = React.useRef(null);
            const placements = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'];
            if (!placements.includes(placement)) placement = 'top';
            const specs = {
              placement,
              content
            };
            React.useEffect(() => {
              (0, _tippy.default)(ref.current, specs);
            }, []);
            return React.createElement("span", {
              ref: ref,
              className: 'pui-tooltip'
            }, children);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBO1lBQ0FDO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFDQTtVQVFPO1VBQVUsU0FBVUMsT0FBTyxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFQyxTQUFTLEdBQUcsS0FBSztZQUFFQyxRQUFRLEdBQUc7VUFBRSxDQUFVO1lBQ2pHLE1BQU1DLEdBQUcsR0FBR0MsS0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU1DLFVBQVUsR0FBYSxDQUM1QixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsYUFBYSxFQUNiLFdBQVcsRUFDWCxRQUFRLEVBQ1IsY0FBYyxFQUNkLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsQ0FDVjtZQUVELElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxRQUFRLENBQUNOLFNBQVMsQ0FBQyxFQUFFQSxTQUFTLEdBQUcsS0FBSztZQUN0RCxNQUFNTyxLQUFLLEdBQW1CO2NBQUVQLFNBQVM7Y0FBRUQ7WUFBTyxDQUFFO1lBQ3BESSxLQUFLLENBQUNLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLGtCQUFLLEVBQUNOLEdBQUcsQ0FBQ08sT0FBTyxFQUFFRixLQUFLLENBQUM7WUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0NKO2NBQU1ELEdBQUcsRUFBRUEsR0FBRztjQUFFUSxTQUFTLEVBQUM7WUFBYSxHQUNyQ1osUUFBUSxDQUNIO1VBRVQiLCJuYW1lcyI6WyJPYmplY3QiLCJ2YWx1ZSIsIlRvb2x0aXAiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJzZXR0aW5ncyIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwicGxhY2VtZW50cyIsImluY2x1ZGVzIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJJVGlwcHlTZXR0aW5ncy50cyIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19