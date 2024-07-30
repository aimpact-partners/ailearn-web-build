System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "marked-mangle@1.1.7", "marked@5.1.2", "marked-gfm-heading-id@3.1.3", "highlight.js@11.9.0", "marked-highlight@2.1.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Markdown, useMarked, __beyond_pkg, hmr;
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
    }, function (_markedGfmHeadingId2) {
      dependency_4 = _markedGfmHeadingId2;
    }, function (_highlightJs) {
      dependency_5 = _highlightJs;
    }, function (_markedHighlight) {
      dependency_6 = _markedHighlight;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.0-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/widgets/markdown"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['marked-mangle', dependency_2], ['marked', dependency_3], ['marked-gfm-heading-id', dependency_4], ['highlight.js', dependency_5], ['marked-highlight', dependency_6]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 2061977363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var _react = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown(props) {
            const mark = (0, _useMarked.useMarked)();
            const attrs = {
              ...props
            };
            const content = attrs.children ?? attrs.content;
            ['content', 'children'].forEach(key => delete attrs[key]);
            // console.log(0.1, content);
            return _react.default.createElement("div", {
              ...attrs,
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
        hash: 3120761384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedGfmHeadingId = require("marked-gfm-heading-id");
          _marked.marked.use((0, _markedMangle.mangle)());
          const options = {
            prefix: 'my-prefix-'
          };
          _marked.marked.use((0, _markedGfmHeadingId.gfmHeadingId)(options));
          /* bundle */
          function useMarked() {
            // React.useEffect(() => {
            // 	marked.use(
            // 		markedHighlight({
            // 			langPrefix: 'hljs language-',
            // 			highlight(code, lang) {
            // 				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            // 				return hljs.highlight(code, { language }).value;
            // 			},
            // 		})
            // 	);
            // 	hljs.highlightAll();
            // }, []);
            function markContent(content) {
              if (!content) return '';
              const result = _marked.marked.parse(content);
              return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwicHJvcHMiLCJtYXJrIiwidXNlTWFya2VkIiwiYXR0cnMiLCJjb250ZW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwia2V5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEdmbUhlYWRpbmdJZCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm9wdGlvbnMiLCJwcmVmaXgiLCJnZm1IZWFkaW5nSWQiLCJtYXJrQ29udGVudCIsInJlc3VsdCIsInBhcnNlIl0sInNvdXJjZXMiOlsiL21hcmtkb3duLnRzeCIsIi91c2UtbWFya2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsVUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxTQUFVRSxRQUFRQSxDQUFDQyxLQUFLO1lBQ3pDLE1BQU1DLElBQUksR0FBRyxJQUFBSCxVQUFBLENBQUFJLFNBQVMsR0FBRTtZQUN4QixNQUFNQyxLQUFLLEdBQUc7Y0FBRSxHQUFHSDtZQUFLLENBQUU7WUFDMUIsTUFBTUksT0FBTyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsSUFBSUYsS0FBSyxDQUFDQyxPQUFPO1lBQy9DLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDRSxPQUFPLENBQUNDLEdBQUcsSUFBSSxPQUFPSixLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDO1lBQ3pEO1lBQ0EsT0FBT1gsTUFBQSxDQUFBWSxPQUFBLENBQUFDLGFBQUE7Y0FBQSxHQUFTTixLQUFLO2NBQUVPLHVCQUF1QixFQUFFO2dCQUFFQyxNQUFNLEVBQUVWLElBQUksQ0FBQ0csT0FBTztjQUFDO1lBQUUsRUFBSTtVQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBUSxhQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsT0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixtQkFBQSxHQUFBakIsT0FBQTtVQUdBZ0IsT0FBQSxDQUFBRSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxJQUFBSixhQUFBLENBQUFLLE1BQU0sR0FBRSxDQUFDO1VBRXBCLE1BQU1DLE9BQU8sR0FBRztZQUNmQyxNQUFNLEVBQUU7V0FDUjtVQUVETixPQUFBLENBQUFFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLElBQUFGLG1CQUFBLENBQUFNLFlBQVksRUFBQ0YsT0FBTyxDQUFDLENBQUM7VUFFMUI7VUFBWSxTQUFVaEIsU0FBU0EsQ0FBQTtZQUNyQztZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQSxTQUFTbUIsV0FBV0EsQ0FBQ2pCLE9BQWU7Y0FDbkMsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFO2NBRXZCLE1BQU1rQixNQUFNLEdBQUdULE9BQUEsQ0FBQUUsTUFBTSxDQUFDUSxLQUFLLENBQUNuQixPQUFPLENBQUM7Y0FFcEMsT0FBT2tCLE1BQU07WUFDZDtZQUVBLE9BQU9ELFdBQVc7VUFDbkIiLCJpZ25vcmVMaXN0IjpbXX0=