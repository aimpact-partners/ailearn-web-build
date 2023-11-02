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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 2215099916,
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
            content
          }) {
            const mark = (0, _useMarked.useMarked)();
            // console.log(0.1, content);
            return _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwiY29udGVudCIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX21hcmtlZE1hbmdsZSIsIl9tYXJrZWQiLCJfbWFya2VkSGlnaGxpZ2h0IiwiX2hpZ2hsaWdodCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm1hcmtlZEhpZ2hsaWdodCIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwibGFuZyIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImhpZ2hsaWdodEFsbCIsIm1hcmtDb250ZW50IiwiaGVhZGVySWRzIiwiaGVhZGVyUHJlZml4Il0sInNvdXJjZXMiOlsiL21hcmtkb3duLnRzeCIsIi91c2UtbWFya2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsU0FBVUUsUUFBUUEsQ0FBQztZQUFFQztVQUFPLENBQUU7WUFDL0MsTUFBTUMsSUFBSSxHQUFHLElBQUFILFVBQUEsQ0FBQUksU0FBUyxHQUFFO1lBQ3hCO1lBQ0EsT0FBT04sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRUwsSUFBSSxDQUFDRCxPQUFPO2NBQUM7WUFBRSxFQUFJO1VBQ25FOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFVLGFBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLE9BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxVQUFBLEdBQUFiLE9BQUE7VUFFTztVQUFZLFNBQVVLLFNBQVNBLENBQUE7WUFDckNNLE9BQUEsQ0FBQUcsTUFBTSxDQUFDQyxHQUFHLENBQUMsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEdBQUUsQ0FBQztZQUNwQkwsT0FBQSxDQUFBRyxNQUFNLENBQUNDLEdBQUcsQ0FDVCxJQUFBSCxnQkFBQSxDQUFBSyxlQUFlLEVBQUM7Y0FDZkMsVUFBVSxFQUFFLGdCQUFnQjtjQUM1QkMsU0FBU0EsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJO2dCQUNuQixNQUFNQyxRQUFRLEdBQUdULFVBQUEsQ0FBQVAsT0FBSSxDQUFDaUIsV0FBVyxDQUFDRixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFdBQVc7Z0JBQzVELE9BQU9SLFVBQUEsQ0FBQVAsT0FBSSxDQUFDYSxTQUFTLENBQUNDLElBQUksRUFBRTtrQkFBRUU7Z0JBQVEsQ0FBRSxDQUFDLENBQUNFLEtBQUs7Y0FDaEQ7YUFDQSxDQUFDLENBQ0Y7WUFFRHpCLE1BQUEsQ0FBQU8sT0FBSyxDQUFDbUIsU0FBUyxDQUFDLE1BQUs7Y0FDcEJaLFVBQUEsQ0FBQVAsT0FBSSxDQUFDb0IsWUFBWSxFQUFFO1lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixTQUFTQyxXQUFXQSxDQUFDeEIsT0FBZTtjQUNuQyxJQUFJLENBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUU7Y0FDdkIsT0FBTyxJQUFBUSxPQUFBLENBQUFHLE1BQU0sRUFBQ1gsT0FBTyxFQUFFO2dCQUFFeUIsU0FBUyxFQUFFLEtBQUs7Z0JBQUVDLFlBQVksRUFBRTtjQUFLLENBQUUsQ0FBQztZQUNsRTtZQUVBLE9BQU9GLFdBQVc7VUFDbkIifQ==