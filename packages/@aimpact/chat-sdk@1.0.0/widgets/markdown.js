System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "marked-mangle@1.1.4", "marked@5.1.2", "marked-highlight@2.0.6", "highlight.js@11.9.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Markdown, useMarked, __beyond_pkg, hmr;
  _export({
    Markdown: void 0,
    useMarked: void 0
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["firebase", "10.5.0"], ["dompurify", "3.0.6"], ["prismjs", "1.29.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/widgets/markdown"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['marked-mangle', dependency_2], ['marked', dependency_3], ['marked-highlight', dependency_4], ['highlight.js', dependency_5]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 2058702289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var _react = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown({
            content,
            children
          }) {
            const mark = (0, _useMarked.useMarked)();
            // console.log(0.1, content);
            return _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: mark(content)
              }
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/

      ims.set('./use-marked', {
        hash: 1749741654,
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
      __pkg.exports.descriptor = [{
        "im": "./markdown",
        "from": "Markdown",
        "name": "Markdown"
      }, {
        "im": "./use-marked",
        "from": "useMarked",
        "name": "useMarked"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Markdown') && _export("Markdown", Markdown = require ? require('./markdown').Markdown : value);
        (require || prop === 'useMarked') && _export("useMarked", useMarked = require ? require('./use-marked').useMarked : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwiY29udGVudCIsImNoaWxkcmVuIiwibWFyayIsInVzZU1hcmtlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfbWFya2VkTWFuZ2xlIiwiX21hcmtlZCIsIl9tYXJrZWRIaWdobGlnaHQiLCJfaGlnaGxpZ2h0IiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwibWFya2VkSGlnaGxpZ2h0IiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwidXNlRWZmZWN0IiwiaGlnaGxpZ2h0QWxsIiwibWFya0NvbnRlbnQiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiXSwic291cmNlcyI6WyIvbWFya2Rvd24udHN4IiwiL3VzZS1tYXJrZWQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsVUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxTQUFVRSxRQUFRQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBUSxDQUFFO1lBQ3pELE1BQU1DLElBQUksR0FBRyxJQUFBSixVQUFBLENBQUFLLFNBQVMsR0FBRTtZQUN4QjtZQUNBLE9BQU9QLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLHVCQUF1QixFQUFFO2dCQUFFQyxNQUFNLEVBQUVMLElBQUksQ0FBQ0YsT0FBTztjQUFDO1lBQUUsRUFBSTtVQUNwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBVyxhQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxPQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxnQkFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsVUFBQSxHQUFBZCxPQUFBO1VBRU87VUFBWSxTQUFVTSxTQUFTQSxDQUFBO1lBQ3JDTSxPQUFBLENBQUFHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxHQUFFLENBQUM7WUFDcEJMLE9BQUEsQ0FBQUcsTUFBTSxDQUFDQyxHQUFHLENBQ1QsSUFBQUgsZ0JBQUEsQ0FBQUssZUFBZSxFQUFDO2NBQ2ZDLFVBQVUsRUFBRSxnQkFBZ0I7Y0FDNUJDLFNBQVNBLENBQUNDLElBQUksRUFBRUMsSUFBSTtnQkFDbkIsTUFBTUMsUUFBUSxHQUFHVCxVQUFBLENBQUFQLE9BQUksQ0FBQ2lCLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRyxXQUFXO2dCQUM1RCxPQUFPUixVQUFBLENBQUFQLE9BQUksQ0FBQ2EsU0FBUyxDQUFDQyxJQUFJLEVBQUU7a0JBQUVFO2dCQUFRLENBQUUsQ0FBQyxDQUFDRSxLQUFLO2NBQ2hEO2FBQ0EsQ0FBQyxDQUNGO1lBRUQxQixNQUFBLENBQUFRLE9BQUssQ0FBQ21CLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCWixVQUFBLENBQUFQLE9BQUksQ0FBQ29CLFlBQVksRUFBRTtZQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sU0FBU0MsV0FBV0EsQ0FBQ3pCLE9BQWU7Y0FDbkMsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFO2NBQ3ZCLE9BQU8sSUFBQVMsT0FBQSxDQUFBRyxNQUFNLEVBQUNaLE9BQU8sRUFBRTtnQkFBRTBCLFNBQVMsRUFBRSxLQUFLO2dCQUFFQyxZQUFZLEVBQUU7Y0FBSyxDQUFFLENBQUM7WUFDbEU7WUFFQSxPQUFPRixXQUFXO1VBQ25CIn0=