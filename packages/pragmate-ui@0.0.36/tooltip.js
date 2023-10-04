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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tooltip"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlJlYWN0IiwicmVxdWlyZSIsIl90aXBweSIsIlRvb2x0aXAiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJzZXR0aW5ncyIsInJlZiIsInVzZVJlZiIsInBsYWNlbWVudHMiLCJpbmNsdWRlcyIsInNwZWNzIiwidXNlRWZmZWN0IiwiZGVmYXVsdCIsImN1cnJlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiL0lUaXBweVNldHRpbmdzLnRzIiwiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVFPO1VBQVUsU0FBVUUsT0FBT0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRUMsU0FBUyxHQUFHLEtBQUs7WUFBRUMsUUFBUSxHQUFHO1VBQUUsQ0FBVTtZQUNqRyxNQUFNQyxHQUFHLEdBQUdSLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNQyxVQUFVLEdBQWEsQ0FDNUIsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLGNBQWMsRUFDZCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLENBQ1Y7WUFFRCxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDTCxTQUFTLENBQUMsRUFBRUEsU0FBUyxHQUFHLEtBQUs7WUFDdEQsTUFBTU0sS0FBSyxHQUFtQjtjQUFFTixTQUFTO2NBQUVEO1lBQU8sQ0FBRTtZQUNwREwsS0FBSyxDQUFDYSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFBWCxNQUFBLENBQUFZLE9BQUssRUFBQ04sR0FBRyxDQUFDTyxPQUFPLEVBQUVILEtBQUssQ0FBQztZQUMxQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ1osS0FBQSxDQUFBZ0IsYUFBQTtjQUFNUixHQUFHLEVBQUVBLEdBQUc7Y0FBRVMsU0FBUyxFQUFDO1lBQWEsR0FDckNiLFFBQVEsQ0FDSDtVQUVUIn0=