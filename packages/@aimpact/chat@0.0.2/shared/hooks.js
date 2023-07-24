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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/shared/hooks"
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
        hash: 3399346009,
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
          var DOMPurify = require("dompurify");
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
              return DOMPurify.sanitize((0, _marked.marked)(content, {
                headerIds: false,
                headerPrefix: false
              }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVksU0FBVUEsU0FBUztZQUNyQ0MsY0FBTSxDQUFDQyxHQUFHLENBQUMsd0JBQU0sR0FBRSxDQUFDO1lBQ3BCRCxjQUFNLENBQUNDLEdBQUcsQ0FDVCxvQ0FBZSxFQUFDO2NBQ2ZDLFVBQVUsRUFBRSxnQkFBZ0I7Y0FDNUJDLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJO2dCQUNuQixNQUFNQyxRQUFRLEdBQUdDLGtCQUFJLENBQUNDLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRyxXQUFXO2dCQUM1RCxPQUFPRSxrQkFBSSxDQUFDSixTQUFTLENBQUNDLElBQUksRUFBRTtrQkFBRUU7Z0JBQVEsQ0FBRSxDQUFDLENBQUNHLEtBQUs7Y0FDaEQ7YUFDQSxDQUFDLENBQ0Y7WUFFREMsS0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNwQkosa0JBQUksQ0FBQ0ssWUFBWSxFQUFFO1lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixTQUFTQyxXQUFXLENBQUNDLE9BQWU7Y0FDbkMsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFO2NBQ3ZCLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGtCQUFNLEVBQUNGLE9BQU8sRUFBRTtnQkFBRUcsU0FBUyxFQUFFLEtBQUs7Z0JBQUVDLFlBQVksRUFBRTtjQUFLLENBQUUsQ0FBQyxDQUFDO1lBQ3RGO1lBRUEsT0FBT0wsV0FBVztVQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkE7VUFDQTtVQUVPO1VBQVUsU0FBVU0sUUFBUSxDQUFDQyxTQUFpQixFQUFFQyxHQUFZO1lBQ2xFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2IsS0FBSyxDQUFDYyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2hCLEtBQUssQ0FBQ2MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q2QsS0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNZ0IsVUFBVSxHQUFHLElBQUlDLG1CQUFZLENBQUNSLFNBQVMsQ0FBQztjQUM5QyxNQUFNUyxZQUFZLEdBQUcsTUFBSztnQkFDekIsSUFBSXBCLEtBQUssR0FBR2tCLFVBQVUsQ0FBQ2xCLEtBQUs7Z0JBQzVCLElBQUlrQixVQUFVLENBQUNMLEtBQUssSUFBSUQsR0FBRyxFQUFFO2tCQUM1QixJQUFJLENBQUNaLEtBQUssQ0FBQ3FCLGNBQWMsQ0FBQ1QsR0FBRyxDQUFDLEVBQUU7b0JBQy9CVSxPQUFPLENBQUNDLElBQUksQ0FDWCwwREFBMERYLEdBQUcsdUJBQXVCRCxTQUFTLEVBQUUsQ0FDL0Y7O2tCQUVGO2tCQUNBWCxLQUFLLEdBQUdrQixVQUFVLENBQUNsQixLQUFLLENBQUNZLEdBQUcsQ0FBQzs7Z0JBRTlCSyxRQUFRLENBQUNqQixLQUFLLENBQUM7Z0JBQ2ZjLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDTCxLQUFLLENBQUM7Y0FDM0IsQ0FBQztjQUNESyxVQUFVLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYRixVQUFVLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1LLE9BQU8sR0FBR1osS0FBSyxJQUFJLENBQUMsQ0FBQ0csS0FBSztZQUNoQyxPQUFPLENBQUNTLE9BQU8sRUFBRVQsS0FBSyxDQUFDO1VBQ3hCIiwibmFtZXMiOlsidXNlTWFya2VkIiwibWFya2VkIiwidXNlIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJobGpzIiwiZ2V0TGFuZ3VhZ2UiLCJ2YWx1ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiaGlnaGxpZ2h0QWxsIiwibWFya0NvbnRlbnQiLCJjb250ZW50IiwiRE9NUHVyaWZ5Iiwic2FuaXRpemUiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIm9uIiwiaXNSZWFkeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy91c2UtbWFya2VkLnRzIiwiY29kZS90cy91c2UtdGV4dHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==