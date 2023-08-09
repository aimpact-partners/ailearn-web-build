System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "marked-mangle@1.1.0", "marked@5.1.1", "marked-highlight@2.0.1", "highlight.js@11.8.0", "dompurify@3.0.5", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 804483483,
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
                console.log(55, language);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFHTztVQUFZLFNBQVVBLFNBQVM7WUFDckNDLGNBQU0sQ0FBQ0MsR0FBRyxDQUFDLHdCQUFNLEdBQUUsQ0FBQztZQUNwQkQsY0FBTSxDQUFDQyxHQUFHLENBQ1Qsb0NBQWUsRUFBQztjQUNmQyxVQUFVLEVBQUUsZ0JBQWdCO2NBQzVCQyxTQUFTLENBQUNDLElBQUksRUFBRUMsSUFBSTtnQkFDbkIsTUFBTUMsUUFBUSxHQUFHQyxrQkFBSSxDQUFDQyxXQUFXLENBQUNILElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsV0FBVztnQkFDNURJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRUosUUFBUSxDQUFDO2dCQUN6QixPQUFPQyxrQkFBSSxDQUFDSixTQUFTLENBQUNDLElBQUksRUFBRTtrQkFBRUU7Z0JBQVEsQ0FBRSxDQUFDLENBQUNLLEtBQUs7Y0FDaEQ7YUFDQSxDQUFDLENBQ0Y7WUFFREMsS0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNwQk4sa0JBQUksQ0FBQ08sWUFBWSxFQUFFO1lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixTQUFTQyxXQUFXLENBQUNDLE9BQWU7Y0FDbkMsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFO2NBQ3ZCLE9BQU8sa0JBQU0sRUFBQ0EsT0FBTyxFQUFFO2dCQUFFQyxTQUFTLEVBQUUsS0FBSztnQkFBRUMsWUFBWSxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQ2xFO1lBRUEsT0FBT0gsV0FBVztVQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTtVQUVPO1VBQVUsU0FBVUksUUFBUSxDQUFDQyxTQUFpQixFQUFFQyxHQUFZO1lBQ2xFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1gsS0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2QsS0FBSyxDQUFDWSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDWixLQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1jLFVBQVUsR0FBRyxJQUFJQyxtQkFBWSxDQUFDUixTQUFTLENBQUM7Y0FDOUMsTUFBTVMsWUFBWSxHQUFHLE1BQUs7Z0JBQ3pCLElBQUlsQixLQUFLLEdBQUdnQixVQUFVLENBQUNoQixLQUFLO2dCQUM1QixJQUFJZ0IsVUFBVSxDQUFDTCxLQUFLLElBQUlELEdBQUcsRUFBRTtrQkFDNUIsSUFBSSxDQUFDVixLQUFLLENBQUNtQixjQUFjLENBQUNULEdBQUcsQ0FBQyxFQUFFO29CQUMvQlosT0FBTyxDQUFDc0IsSUFBSSxDQUNYLDBEQUEwRFYsR0FBRyx1QkFBdUJELFNBQVMsRUFBRSxDQUMvRjs7a0JBRUY7a0JBQ0FULEtBQUssR0FBR2dCLFVBQVUsQ0FBQ2hCLEtBQUssQ0FBQ1UsR0FBRyxDQUFDOztnQkFFOUJLLFFBQVEsQ0FBQ2YsS0FBSyxDQUFDO2dCQUNmWSxRQUFRLENBQUNJLFVBQVUsQ0FBQ0wsS0FBSyxDQUFDO2NBQzNCLENBQUM7Y0FDREssVUFBVSxDQUFDSyxFQUFFLENBQUMsUUFBUSxFQUFFSCxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDSyxFQUFFLENBQUMsUUFBUSxFQUFFSCxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNSSxPQUFPLEdBQUdYLEtBQUssSUFBSSxDQUFDLENBQUNHLEtBQUs7WUFDaEMsT0FBTyxDQUFDUSxPQUFPLEVBQUVSLEtBQUssQ0FBQztVQUN4QiIsIm5hbWVzIjpbInVzZU1hcmtlZCIsIm1hcmtlZCIsInVzZSIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwibGFuZyIsImxhbmd1YWdlIiwiaGxqcyIsImdldExhbmd1YWdlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJoaWdobGlnaHRBbGwiLCJtYXJrQ29udGVudCIsImNvbnRlbnQiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwib24iLCJpc1JlYWR5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL3VzZS1tYXJrZWQudHMiLCJjb2RlL3RzL3VzZS10ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19