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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21hcmtlZE1hbmdsZSIsIl9tYXJrZWQiLCJfbWFya2VkSGlnaGxpZ2h0IiwiX2hpZ2hsaWdodCIsInVzZU1hcmtlZCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm1hcmtlZEhpZ2hsaWdodCIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwibGFuZyIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImdldExhbmd1YWdlIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJoaWdobGlnaHRBbGwiLCJtYXJrQ29udGVudCIsImNvbnRlbnQiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJfdGV4dHMiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIm9uIiwib2ZmIiwiaXNSZWFkeSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL3VzZS1tYXJrZWQudHMiLCIvY29kZS90cy91c2UtdGV4dHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxVQUFBLEdBQUFKLE9BQUE7VUFHTztVQUFZLFNBQVVLLFNBQVNBLENBQUE7WUFDckNILE9BQUEsQ0FBQUksTUFBTSxDQUFDQyxHQUFHLENBQUMsSUFBQU4sYUFBQSxDQUFBTyxNQUFNLEdBQUUsQ0FBQztZQUNwQk4sT0FB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