System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useTexts, __beyond_pkg, hmr;
  _export("useTexts", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/shared/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/
      ims.set('./use-texts', {
        hash: 1600604292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
            const [ready, setReady] = _react.default.useState(false);
            const [texts, setTexts] = _react.default.useState({});
            _react.default.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                if (modelTexts.ready && key) {
                  if (!value.hasOwnProperty(key)) {
                    console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
                  }
                  //@ts-ignore
                  value = modelTexts.value[key];
                }
                setTexts(value);
                setReady(modelTexts.ready);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.off('change', triggerEvent); // Corrected 'on' to 'off'
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3RleHRzIiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidGV4dHMiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJvbiIsIm9mZiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvdXNlLXRleHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFLTztVQUFVLFNBQVVFLFFBQVFBLENBQUNDLFNBQWlCLEVBQUVDLEdBQVk7WUFDbEUsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxNQUFBLENBQUFRLE9BQUssQ0FBQ0MsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUN4RCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdYLE1BQUEsQ0FBQVEsT0FBSyxDQUFDQyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBRXBEVCxNQUFBLENBQUFRLE9BQUssQ0FBQ0ksU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsVUFBVSxHQUFHLElBQUlYLE1BQUEsQ0FBQVksWUFBWSxDQUFDVixTQUFTLENBQUM7Y0FDOUMsTUFBTVcsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUlDLEtBQUssR0FBR0gsVUFBVSxDQUFDRyxLQUFlO2dCQUN0QyxJQUFJSCxVQUFVLENBQUNQLEtBQUssSUFBSUQsR0FBRyxFQUFFO2tCQUM1QixJQUFJLENBQUNXLEtBQUssQ0FBQ0MsY0FBYyxDQUFDWixHQUFHLENBQUMsRUFBRTtvQkFDL0JhLE9BQU8sQ0FBQ0MsSUFBSSxDQUNYLDBEQUEwRGQsR0FBRyx1QkFBdUJELFNBQVMsRUFBRSxDQUMvRjs7a0JBRUY7a0JBQ0FZLEtBQUssR0FBR0gsVUFBVSxDQUFDRyxLQUFLLENBQUNYLEdBQUcsQ0FBQzs7Z0JBRTlCTSxRQUFRLENBQUNLLEtBQUssQ0FBQztnQkFDZlQsUUFBUSxDQUFDTSxVQUFVLENBQUNQLEtBQUssQ0FBQztjQUMzQixDQUFDO2NBQ0RPLFVBQVUsQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ3JDQSxZQUFZLEVBQUU7Y0FDZCxPQUFPLE1BQUs7Z0JBQ1hGLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsRUFBRU4sWUFBWSxDQUFDLENBQUMsQ0FBQztjQUN6QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1PLE9BQU8sR0FBWWhCLEtBQUssSUFBSSxDQUFDLENBQUNJLEtBQUs7WUFDekMsT0FBTyxDQUFDWSxPQUFPLEVBQUVaLEtBQUssQ0FBQztVQUN4QiIsImlnbm9yZUxpc3QiOltdfQ==