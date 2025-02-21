System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.3/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useHmr, useMediaQuery, __beyond_pkg, hmr;
  _export({
    useHmr: void 0,
    useMediaQuery: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_2 = _beyondJsReact18Widgets113Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./use-hmr
      *************************/
      ims.set('./use-hmr', {
        hash: 2839122136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useHmr = useHmr;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function useHmr(hmr) {
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([hmr], () => {
              setUpdate({});
            });
            return [update, setUpdate];
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
        "im": "./use-hmr",
        "from": "useHmr",
        "name": "useHmr"
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
        (require || prop === 'useHmr') && _export("useHmr", useHmr = require ? require('./use-hmr').useHmr : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwidXNlSG1yIiwiaG1yIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwiY2FsY3VsYXRlU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIm5ld1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VzIjpbIi91c2UtaG1yLnRzeCIsIi91c2UtbWVkaWEtcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVSxTQUFVRSxNQUFNQSxDQUFDQyxHQUFHO1lBQ3BDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR04sTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFOUMsSUFBQU4sTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ0wsR0FBRyxDQUFDLEVBQUUsTUFBSztjQUNyQkUsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQ0QsTUFBTSxFQUFFQyxTQUFTLENBQUM7VUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVUyxhQUFhQSxDQUFBO1lBQ3ZDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRyxJQUFBWixNQUFBLENBQUFRLFFBQVEsRUFBQyxJQUFJLENBQUM7WUFFdEMsTUFBTUssYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7Y0FDL0IsSUFBSUYsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSTtlQUNYLE1BQU07Z0JBQ04sT0FBTyxJQUFJOztZQUViLENBQUM7WUFFRCxJQUFBZCxNQUFBLENBQUFpQixTQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QixNQUFNQyxPQUFPLEdBQUdOLGFBQWEsRUFBRTtnQkFDL0JELE9BQU8sQ0FBQ08sT0FBTyxDQUFDO2NBQ2pCLENBQUM7Y0FFRDtjQUNBRCxZQUFZLEVBQUU7Y0FDZDtjQUNBSCxNQUFNLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO2NBQy9DO2NBQ0EsT0FBTyxNQUFLO2dCQUNYSCxNQUFNLENBQUNNLG1CQUFtQixDQUFDLFFBQVEsRUFBRUgsWUFBWSxDQUFDO2NBQ25ELENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBT1AsSUFBSTtVQUNaIiwiaWdub3JlTGlzdCI6W119