System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useModuleContext, ModuleContextProvider, useHmr, useMediaQuery, useStore, __beyond_pkg, hmr;
  _export({
    useModuleContext: void 0,
    ModuleContextProvider: void 0,
    useHmr: void 0,
    useMediaQuery: void 0,
    useStore: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_2 = _beyondJsReact18Widgets118Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/shared/hooks"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2]]);
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./ts/module-context
      ***********************************/
      ims.set('./ts/module-context', {
        hash: 2289943177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleContext = void 0;
          exports.ModuleContextProvider = ModuleContextProvider;
          exports.useModuleContext = useModuleContext;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          /*bundle*/
          function useModuleContext() {
            return React.useContext(ModuleContext);
          }
          /**
           * Generic Module Context Provider component that extends the base module context
           * with additional properties specific to each module.
           *
           * @template T - Type extending IModuleContext with additional properties (must be an object)
           * @param props.children - React children to be wrapped by the context provider
           * @param props.value - The context value that combines base and extended properties
           *
           * @see README.md for detailed examples and usage patterns
           */
          /*bundle*/
          function ModuleContextProvider({
            children,
            value
          }) {
            return React.createElement(ModuleContext.Provider, {
              value: value
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./ts/use-hmr
      ****************************/

      ims.set('./ts/use-hmr', {
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

      /************************************
      INTERNAL MODULE: ./ts/use-media-query
      ************************************/

      ims.set('./ts/use-media-query', {
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

      /******************************
      INTERNAL MODULE: ./ts/use-store
      ******************************/

      ims.set('./ts/use-store', {
        hash: 4171293876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          /*bundle*/ /**
                      * A generic React hook that subscribes to a reactive store.
                      * The store must implement `.on(event, handler)` and `.off(event, handler)`
                      * to manage subscriptions, and emit events to trigger re-renders.
                      * @param store The reactive store to subscribe to
                      * @param events Array of event names to subscribe to. Defaults to ['change']
                      */
          function useStore(store, events = ['change'], onListen) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => {
                setVersion(v => v + 1);
                onListen?.();
              };
              // Subscribe to all specified events
              events.forEach(event => store.on(event, handler));
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => store.off(event, handler));
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ts/module-context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }, {
        "im": "./ts/module-context",
        "from": "ModuleContextProvider",
        "name": "ModuleContextProvider"
      }, {
        "im": "./ts/use-hmr",
        "from": "useHmr",
        "name": "useHmr"
      }, {
        "im": "./ts/use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./ts/use-store",
        "from": "useStore",
        "name": "useStore"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./ts/module-context').useModuleContext : value);
        (require || prop === 'ModuleContextProvider') && _export("ModuleContextProvider", ModuleContextProvider = require ? require('./ts/module-context').ModuleContextProvider : value);
        (require || prop === 'useHmr') && _export("useHmr", useHmr = require ? require('./ts/use-hmr').useHmr : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./ts/use-media-query').useMediaQuery : value);
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./ts/use-store').useStore : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk1vZHVsZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJfcmVhY3QiLCJfaG9va3MiLCJ1c2VIbXIiLCJobXIiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJ1c2VNZWRpYVF1ZXJ5Iiwic2l6ZSIsInNldFNpemUiLCJjYWxjdWxhdGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlU3RvcmUiLCJzdG9yZSIsImV2ZW50cyIsIm9uTGlzdGVuIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJzZXRWZXJzaW9uIiwiaGFuZGxlciIsInYiLCJmb3JFYWNoIiwiZXZlbnQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi8vdHMvbW9kdWxlLWNvbnRleHQudHN4IiwiLy90cy91c2UtaG1yLnRzeCIsIi8vdHMvdXNlLW1lZGlhLXF1ZXJ5LnRzIiwiLy90cy91c2Utc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBVU8sTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsS0FBSyxDQUFDSSxhQUFhLENBQStCLEVBQWtDLENBQUM7VUFFM0c7VUFBVSxTQUFVQyxnQkFBZ0JBLENBQUE7WUFDMUMsT0FBT0ws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