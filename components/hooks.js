System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.44/coins-layout.widget"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBroker, useMediaQuery, __beyond_pkg, hmr;
  _export({
    useBroker: void 0,
    useMediaQuery: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp0032Dev44CoinsLayoutWidget) {
      dependency_2 = _aimpactAilearnApp0032Dev44CoinsLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/components/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/coins-layout.widget', dependency_2]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./use-breadcrumb
      ********************************/
      ims.set('./use-breadcrumb', {
        hash: 2734007038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBroker = useBroker;
          var _react = require("react");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle */
          function useBroker({
            breadcrumb,
            onChange
          }, dependencies = []) {
            const broker = _coinsLayout.LayoutBroker;
            _react.default.useEffect(() => {
              _coinsLayout.LayoutBroker.breadcrumb = breadcrumb;
              if (onChange) {
                _coinsLayout.LayoutBroker.on('change', onChange);
              }
              return () => {
                if (onChange) _coinsLayout.LayoutBroker.off('change', onChange);
              };
            }, dependencies);
            return broker;
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-media-query
      *********************************/

      ims.set('./use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-breadcrumb",
        "from": "useBroker",
        "name": "useBroker"
      }, {
        "im": "./use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useBroker') && _export("useBroker", useBroker = require ? require('./use-breadcrumb').useBroker : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./use-media-query').useMediaQuery : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvaW5zTGF5b3V0IiwidXNlQnJva2VyIiwiYnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiZGVwZW5kZW5jaWVzIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiZGVmYXVsdCIsInVzZUVmZmVjdCIsIm9uIiwib2ZmIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwidXNlU3RhdGUiLCJjYWxjdWxhdGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiL3VzZS1icmVhZGNydW1iLnRzeCIsIi91c2UtbWVkaWEtcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVyxTQUFVRSxTQUFTQSxDQUFDO1lBQUVDLFVBQVU7WUFBRUM7VUFBUSxDQUFvQixFQUFFQyxZQUFBLEdBQXNCLEVBQUU7WUFDekcsTUFBTUMsTUFBTSxHQUFHTCxZQUFBLENBQUFNLFlBQVk7WUFDM0JSLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNwQlIsWUFBQSxDQUFBTSxZQUFZLENBQUNKLFVBQVUsR0FBR0EsVUFBVTtjQUNwQyxJQUFJQyxRQUFRLEVBQUU7Z0JBQ2JILFlBQUEsQ0FBQU0sWUFBWSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFTixRQUFRLENBQUM7O2NBRXBDLE9BQU8sTUFBSztnQkFDWCxJQUFJQSxRQUFRLEVBQUVILFlBQUEsQ0FBQU0sWUFBWSxDQUFDSSxHQUFHLENBQUMsUUFBUSxFQUFFUCxRQUFRLENBQUM7Y0FDbkQsQ0FBQztZQUNGLENBQUMsRUFBRUMsWUFBWSxDQUFDO1lBRWhCLE9BQU9DLE1BQU07VUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQVAsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVWSxhQUFhQSxDQUFBO1lBQ3ZDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRyxJQUFBZixNQUFBLENBQUFnQixRQUFRLEVBQUMsSUFBSSxDQUFDO1lBRXRDLE1BQU1DLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVO2NBQy9CLElBQUlGLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSTtlQUNYLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDdkMsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNO2dCQUNOLE9BQU8sSUFBSTs7WUFFYixDQUFDO1lBRUQsSUFBQWxCLE1BQUEsQ0FBQVUsU0FBUyxFQUFDLE1BQUs7Y0FDZCxNQUFNVyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsTUFBTUMsT0FBTyxHQUFHTCxhQUFhLEVBQUU7Z0JBQy9CRixPQUFPLENBQUNPLE9BQU8sQ0FBQztjQUNqQixDQUFDO2NBRUQ7Y0FDQUQsWUFBWSxFQUFFO2NBQ2Q7Y0FDQUYsTUFBTSxDQUFDSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVGLFlBQVksQ0FBQztjQUMvQztjQUNBLE9BQU8sTUFBSztnQkFDWEYsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVILFlBQVksQ0FBQztjQUNuRCxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQU9QLElBQUk7VUFDWiIsImlnbm9yZUxpc3QiOltdfQ==