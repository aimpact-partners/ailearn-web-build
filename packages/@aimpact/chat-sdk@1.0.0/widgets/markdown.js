System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "marked-mangle@1.1.0", "marked@5.1.2", "marked-highlight@2.0.1", "highlight.js@11.8.0", "dompurify@3.0.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Markdown, useMarked, __beyond_pkg, hmr;
  _export({
    Markdown: void 0,
    useMarked: void 0
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['marked-mangle', dependency_2], ['marked', dependency_3], ['marked-highlight', dependency_4], ['highlight.js', dependency_5], ['dompurify', dependency_6]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 2656800581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var React = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown({
            content
          }) {
            const mark = (0, _useMarked.useMarked)();
            return React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdXNlTWFya2VkIiwiTWFya2Rvd24iLCJjb250ZW50IiwibWFyayIsInVzZU1hcmtlZCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEhpZ2hsaWdodCIsIl9oaWdobGlnaHQiLCJtYXJrZWQiLCJ1c2UiLCJtYW5nbGUiLCJtYXJrZWRIaWdobGlnaHQiLCJsYW5nUHJlZml4IiwiaGlnaGxpZ2h0IiwiY29kZSIsImxhbmciLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwidXNlRWZmZWN0IiwiaGlnaGxpZ2h0QWxsIiwibWFya0NvbnRlbnQiLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiXSwic291cmNlcyI6WyIvbWFya2Rvd24udHN4IiwiL3VzZS1tYXJrZWQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxVQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLFNBQVVFLFFBQVFBLENBQUM7WUFBRUM7VUFBTyxDQUFFO1lBQy9DLE1BQU1DLElBQUksR0FBRyxJQUFBSCxVQUFBLENBQUFJLFNBQVMsR0FBRTtZQUV4QixPQUFPTixLQUFBLENBQUFPLGFBQUE7Y0FBS0MsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRUosSUFBSSxDQUFDRCxPQUFPO2NBQUM7WUFBRSxFQUFJO1VBQ25FOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFKLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFTLGFBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE9BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLGdCQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxVQUFBLEdBQUFaLE9BQUE7VUFHTztVQUFZLFNBQVVLLFNBQVNBLENBQUE7WUFDckNLLE9BQUEsQ0FBQUcsTUFBTSxDQUFDQyxHQUFHLENBQUMsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEdBQUUsQ0FBQztZQUNwQkwsT0FBQSxDQUFBRyxNQUFNLENBQUNDLEdBQUcsQ0FDVCxJQUFBSCxnQkFBQSxDQUFBSyxlQUFlLEVBQUM7Y0FDZkMsVUFBVSxFQUFFLGdCQUFnQjtjQUM1QkMsU0FBU0EsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJO2dCQUNuQixNQUFNQyxRQUFRLEdBQUdULFVBQUEsQ0FBQVUsT0FBSSxDQUFDQyxXQUFXLENBQUNILElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsV0FBVztnQkFDNUQsT0FBT1IsVUFBQSxDQUFBVSxPQUFJLENBQUNKLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFO2tCQUFFRTtnQkFBUSxDQUFFLENBQUMsQ0FBQ0csS0FBSztjQUNoRDthQUNBLENBQUMsQ0FDRjtZQUVEekIsS0FBSyxDQUFDMEIsU0FBUyxDQUFDLE1BQUs7Y0FDcEJiLFVBQUEsQ0FBQVUsT0FBSSxDQUFDSSxZQUFZLEVBQUU7WUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLFNBQVNDLFdBQVdBLENBQUN4QixPQUFlO2NBQ25DLElBQUksQ0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRTtjQUN2QixPQUFPLElBQUFPLE9BQUEsQ0FBQUcsTUFBTSxFQUFDVixPQUFPLEVBQUU7Z0JBQUV5QixTQUFTLEVBQUUsS0FBSztnQkFBRUMsWUFBWSxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQ2xFO1lBRUEsT0FBT0YsV0FBVztVQUNuQiJ9