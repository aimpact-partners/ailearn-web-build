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
    }, function (_react2) {
      dependency_1 = _react2;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3845509890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _react = require("react");
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
            _react.default.useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21hcmtlZE1hbmdsZSIsIl9tYXJrZWQiLCJfbWFya2VkSGlnaGxpZ2h0IiwiX2hpZ2hsaWdodCIsInVzZU1hcmtlZCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm1hcmtlZEhpZ2hsaWdodCIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwibGFuZyIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImdldExhbmd1YWdlIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJoaWdobGlnaHRBbGwiLCJtYXJrQ29udGVudCIsImNvbnRlbnQiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJfdGV4dHMiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIm9uIiwib2ZmIiwiaXNSZWFkeSJdLCJzb3VyY2VzIjpbIi90cy91c2UtbWFya2VkLnRzIiwiL3RzL3VzZS10ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFVBQUEsR0FBQUosT0FBQTtVQUdPO1VBQVksU0FBVUssU0FBU0EsQ0FBQTtZQUNyQ0gsT0FBQSxDQUFBSSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxJQUFBTixhQUFBLENBQUFPLE1BQU0sR0FBRSxDQUFDO1lBQ3BCTixPQUFBLENBQUFJLE1B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