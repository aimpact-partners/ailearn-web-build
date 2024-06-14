System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-22/main-layout.widget"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0046Dev22MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp0046Dev22MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-22"], ["@aimpact/ailearn-app", "0.0.46.dev-22"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-22/components/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./use-breadcrumb
      ********************************/
      ims.set('./use-breadcrumb', {
        hash: 813885386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBroker = useBroker;
          var _react = require("react");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle */
          function useBroker({
            breadcrumb,
            onChange
          }, dependencies = []) {
            const broker = _mainLayout.LayoutBroker;
            _react.default.useEffect(() => {
              _mainLayout.LayoutBroker.breadcrumb = breadcrumb;
              if (onChange) {
                _mainLayout.LayoutBroker.on('change', onChange);
              }
              return () => {
                if (onChange) _mainLayout.LayoutBroker.off('change', onChange);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21haW5MYXlvdXQiLCJ1c2VCcm9rZXIiLCJicmVhZGNydW1iIiwib25DaGFuZ2UiLCJkZXBlbmRlbmNpZXMiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJkZWZhdWx0IiwidXNlRWZmZWN0Iiwib24iLCJvZmYiLCJ1c2VNZWRpYVF1ZXJ5Iiwic2l6ZSIsInNldFNpemUiLCJ1c2VTdGF0ZSIsImNhbGN1bGF0ZVNpemUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJuZXdTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyIvdXNlLWJyZWFkY3J1bWIudHN4IiwiL3VzZS1tZWRpYS1xdWVyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFNTztVQUFXLFNBQVVFLFNBQVNBLENBQUM7WUFBRUMsVUFBVTtZQUFFQztVQUFRLENBQW9CLEVBQUVDLFlBQUEsR0FBc0IsRUFBRTtZQUN6RyxNQUFNQyxNQUFNLEdBQUdMLFdBQUEsQ0FBQU0sWUFBWTtZQUMzQlIsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCUixXQUFBLENBQUFNLFlBQVksQ0FBQ0osVUFBVSxHQUFHQSxVQUFVO2NBQ3BDLElBQUlDLFFBQVEsRUFBRTtnQkFDYkgsV0FBQSxDQUFBTSxZQUFZLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVOLFFBQVEsQ0FBQzs7Y0FFcEMsT0FBTyxNQUFLO2dCQUNYLElBQUlBLFFBQVEsRUFBRUgsV0FBQSxDQUFBTSxZQUFZLENBQUNJLEdBQUcsQ0FBQyxRQUFRLEVBQUVQLFFBQVEsQ0FBQztjQUNuRCxDQUFDO1lBQ0YsQ0FBQyxFQUFFQyxZQUFZLENBQUM7WUFFaEIsT0FBT0MsTUFBTTtVQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBUCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVZLGFBQWFBLENBQUE7WUFDdkMsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLElBQUFmLE1BQUEsQ0FBQWdCLFFBQVEsRUFBQyxJQUFJLENBQUM7WUFFdEMsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7Y0FDL0IsSUFBSUYsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSTtlQUNYLE1BQU07Z0JBQ04sT0FBTyxJQUFJOztZQUViLENBQUM7WUFFRCxJQUFBbEIsTUFBQSxDQUFBVSxTQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1XLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QixNQUFNQyxPQUFPLEdBQUdMLGFBQWEsRUFBRTtnQkFDL0JGLE9BQU8sQ0FBQ08sT0FBTyxDQUFDO2NBQ2pCLENBQUM7Y0FFRDtjQUNBRCxZQUFZLEVBQUU7Y0FDZDtjQUNBRixNQUFNLENBQUNJLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO2NBQy9DO2NBQ0EsT0FBTyxNQUFLO2dCQUNYRixNQUFNLENBQUNLLG1CQUFtQixDQUFDLFFBQVEsRUFBRUgsWUFBWSxDQUFDO2NBQ25ELENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBT1AsSUFBSTtVQUNaIn0=