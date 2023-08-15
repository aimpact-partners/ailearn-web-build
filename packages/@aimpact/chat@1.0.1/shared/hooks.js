System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "marked-mangle@1.1.0", "marked@5.1.2", "marked-highlight@2.0.1", "highlight.js@11.8.0", "dompurify@3.0.5", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, useMarked, useTexts, __beyond_pkg, hmr;
  _export({
    useMarked: void 0,
    useTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_markedMangle2) {
      dependency_2 = _markedMangle2;
    }, function (_marked2) {
      dependency_3 = _marked2;
    }, function (_markedHighlight2) {
      dependency_4 = _markedHighlight2;
    }, function (_highlightJs) {
      dependency_5 = _highlightJs;
    }, function (_dompurify) {
      dependency_6 = _dompurify;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/shared/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['marked-mangle', dependency_2], ['marked', dependency_3], ['marked-highlight', dependency_4], ['highlight.js', dependency_5], ['dompurify', dependency_6], ['@beyond-js/kernel/texts', dependency_7]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/
      ims.set('./use-marked', {
        hash: 3103541798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var React = require("react");
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedHighlight = require("marked-highlight");
          var _highlight = require("highlight.js");
          /* bundle */
          function useMarked() {
            _marked.marked.use((0, _markedMangle.mangle)());
            _marked.marked.use((0, _markedHighlight.markedHighlight)({
              langPrefix: 'hljs language-',
              highlight(code, lang) {
                const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                return _highlight.default.highlight(code, {
                  language
                }).value;
              }
            }));
            React.useEffect(() => {
              _highlight.default.highlightAll();
            }, []);
            function markContent(content) {
              if (!content) return '';
              return (0, _marked.marked)(content, {
                headerIds: false,
                headerPrefix: false
              });
            }
            return markContent;
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 2878044955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
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
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-marked",
        "from": "useMarked",
        "name": "useMarked"
      }, {
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
        (require || prop === 'useMarked') && _export("useMarked", useMarked = require ? require('./use-marked').useMarked : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbWFya2VkTWFuZ2xlIiwiX21hcmtlZCIsIl9tYXJrZWRIaWdobGlnaHQiLCJfaGlnaGxpZ2h0IiwidXNlTWFya2VkIiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwibWFya2VkSGlnaGxpZ2h0IiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwiZ2V0TGFuZ3VhZ2UiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImhpZ2hsaWdodEFsbCIsIm1hcmtDb250ZW50IiwiY29udGVudCIsImhlYWRlcklkcyIsImhlYWRlclByZWZpeCIsIl90ZXh0cyIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwia2V5IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvdXNlLW1hcmtlZC50cyIsIi9jb2RlL3RzL3VzZS10ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFVBQUEsR0FBQUosT0FBQTtVQUdPO1VBQVksU0FBVUssU0FBU0EsQ0FBQTtZQUNyQ0gsT0FBQSxDQUFBSSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxJQUFBTixhQUFBLENBQUFPLE1BQU0sR0FBRSxDQUFDO1lBQ3BCTixPQUFBLENBQUFJLE1BQU0sQ0FBQ0MsR0FBRyxDQUNULElBQUFKLGdCQUFBLENBQUFNLGVBQWUsRUFBQztjQUNmQyxVQUFVLEVBQUUsZ0JBQWdCO2NBQzVCQyxTQUFTQSxDQUFDQyxJQUFJLEVBQUVDLElBQUk7Z0JBQ25CLE1BQU1DLFFBQVEsR0FBR1YsVUFBQSxDQUFBVyxPQUFJLENBQUNDLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRyxXQUFXO2dCQUM1RCxPQUFPVCxVQUFBLENBQUFXLE9BQUksQ0FBQ0osU0FBUyxDQUFDQyxJQUFJLEVBQUU7a0JBQUVFO2dCQUFRLENBQUUsQ0FBQyxDQUFDRyxLQUFLO2NBQ2hEO2FBQ0EsQ0FBQyxDQUNGO1lBRURsQixLQUFLLENBQUNtQixTQUFTLENBQUMsTUFBSztjQUNwQmQsVUFBQSxDQUFBVyxPQUFJLENBQUNJLFlBQVksRUFBRTtZQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sU0FBU0MsV0FBV0EsQ0FBQ0MsT0FBZTtjQUNuQyxJQUFJLENBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUU7Y0FDdkIsT0FBTyxJQUFBbkIsT0FBQSxDQUFBSSxNQUFNLEVBQUNlLE9BQU8sRUFBRTtnQkFBRUMsU0FBUyxFQUFFLEtBQUs7Z0JBQUVDLFlBQVksRUFBRTtjQUFLLENBQUUsQ0FBQztZQUNsRTtZQUVBLE9BQU9ILFdBQVc7VUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFyQixLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVPO1VBQVUsU0FBVXlCLFFBQVFBLENBQUNDLFNBQWlCLEVBQUVDLEdBQVk7WUFDbEUsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHOUIsS0FBSyxDQUFDK0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdqQyxLQUFLLENBQUMrQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDL0IsS0FBSyxDQUFDbUIsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWUsVUFBVSxHQUFHLElBQUlULE1BQUEsQ0FBQVUsWUFBWSxDQUFDUixTQUFTLENBQUM7Y0FDOUMsTUFBTVMsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUlsQixLQUFLLEdBQUdnQixVQUFVLENBQUNoQixLQUFLO2dCQUM1QixJQUFJZ0IsVUFBVSxDQUFDTCxLQUFLLElBQUlELEdBQUcsRUFBRTtrQkFDNUIsSUFBSSxDQUFDVixLQUFLLENBQUNtQixjQUFjLENBQUNULEdBQUcsQ0FBQyxFQUFFO29CQUMvQlUsT0FBTyxDQUFDQyxJQUFJLENBQ1gsMERBQTBEWCxHQUFHLHVCQUF1QkQsU0FBUyxFQUFFLENBQy9GOztrQkFFRjtrQkFDQVQsS0FBSyxHQUFHZ0IsVUFBVSxDQUFDaEIsS0FBSyxDQUFDVSxHQUFHLENBQUM7O2dCQUU5QkssUUFBUSxDQUFDZixLQUFLLENBQUM7Z0JBQ2ZZLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDTCxLQUFLLENBQUM7Y0FDM0IsQ0FBQztjQUNESyxVQUFVLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYRixVQUFVLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1LLE9BQU8sR0FBR1osS0FBSyxJQUFJLENBQUMsQ0FBQ0csS0FBSztZQUNoQyxPQUFPLENBQUNTLE9BQU8sRUFBRVQsS0FBSyxDQUFDO1VBQ3hCIn0=