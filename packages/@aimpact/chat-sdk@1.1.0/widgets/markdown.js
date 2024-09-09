System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "marked-mangle@1.1.7", "marked@5.1.2", "marked-gfm-heading-id@3.1.3", "katex@0.6.0", "highlight.js@11.10.0", "marked-highlight@2.1.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Markdown, __beyond_pkg, hmr;
  _export("Markdown", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_markedMangle2) {
      dependency_3 = _markedMangle2;
    }, function (_marked2) {
      dependency_4 = _marked2;
    }, function (_markedGfmHeadingId2) {
      dependency_5 = _markedGfmHeadingId2;
    }, function (_katex2) {
      dependency_6 = _katex2;
    }, function (_highlightJs) {
      dependency_7 = _highlightJs;
    }, function (_markedHighlight2) {
      dependency_8 = _markedHighlight2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/widgets/markdown"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['marked-mangle', dependency_3], ['marked', dependency_4], ['marked-gfm-heading-id', dependency_5], ['katex', dependency_6], ['highlight.js', dependency_7], ['marked-highlight', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/widgets/markdown');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 3629865041,
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
            const {
              ready,
              output
            } = (0, _useMarked.useMarked)(props.content ?? props.children);
            const attrs = {
              ...props
            };
            if (output === '') return null;
            // const content = attrs.children ?? attrs.content;
            // ['content', 'children'].forEach(key => delete attrs[key]);
            // console.log(0.1, content);
            return _react.default.createElement("div", {
              ...attrs,
              dangerouslySetInnerHTML: {
                __html: output
              }
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/

      ims.set('./use-marked', {
        hash: 2750981756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _react = require("react");
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedGfmHeadingId = require("marked-gfm-heading-id");
          var _katex = require("katex");
          var _highlight = require("highlight.js");
          var _markedHighlight = require("marked-highlight");
          // Import highlight.js
          // Import marked-highlight
          _marked.marked.use((0, _markedMangle.mangle)());
          const options = {
            prefix: 'my-prefix-'
          };
          _marked.marked.use((0, _markedGfmHeadingId.gfmHeadingId)(options));
          function useMarked(content) {
            const [output, setOutput] = _react.default.useState('');
            async function render(content) {
              const options = {
                breaks: true // Enable line breaks for Markdown
                // highlight: (code, lang) => {
                // 	// Check if the language is valid, otherwise fall back to 'plaintext'
                // 	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                // 	return hljs.highlight(code, { language }).value; // Return the highlighted code
                // }
              };

              _marked.marked.setOptions(options);
              _marked.marked.use((0, _markedHighlight.markedHighlight)({
                async: true,
                langPrefix: 'language-',
                highlight(code, lang) {
                  // Check if the language is valid, otherwise fall back to 'plaintext'
                  const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                  return _highlight.default.highlight(code, {
                    language
                  }).value;
                }
              }));
              let output = await (0, _marked.marked)(content, {
                breaks: true
              });
              // Adjusted regex to match the processed block math delimiters `[ ... ]`
              output = output.replace(/\[([\s\S]+?)\]/g, (match, mathContent) => {
                try {
                  return _katex.default.renderToString(mathContent, {
                    displayMode: true
                  });
                } catch (error) {
                  console.error('Error rendering block KaTeX:', error);
                  return match; // Return the original text if there is an error
                }
              })
              // Match inline math (if needed)
              .replace(/\\\((.+?)\\\)/g, (match, mathContent) => {
                try {
                  return _katex.default.renderToString(mathContent, {
                    displayMode: false
                  });
                } catch (error) {
                  console.error('Error rendering inline KaTeX:', error);
                  return match;
                }
              });
              setOutput(output);
            }
            _react.default.useEffect(() => {
              render(content ?? '');
            }, [content]);
            return {
              ready: !!output,
              output
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./markdown",
        "from": "Markdown",
        "name": "Markdown"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Markdown') && _export("Markdown", Markdown = require ? require('./markdown').Markdown : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwicHJvcHMiLCJyZWFkeSIsIm91dHB1dCIsInVzZU1hcmtlZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImF0dHJzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEdmbUhlYWRpbmdJZCIsIl9rYXRleCIsIl9oaWdobGlnaHQiLCJfbWFya2VkSGlnaGxpZ2h0IiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwib3B0aW9ucyIsInByZWZpeCIsImdmbUhlYWRpbmdJZCIsInNldE91dHB1dCIsInVzZVN0YXRlIiwicmVuZGVyIiwiYnJlYWtzIiwic2V0T3B0aW9ucyIsIm1hcmtlZEhpZ2hsaWdodCIsImFzeW5jIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsImRpc3BsYXlNb2RlIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0Il0sInNvdXJjZXMiOlsiL3RzL21hcmtkb3duLnRzeCIsIi90cy91c2UtbWFya2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxVQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLFNBQVVFLFFBQVFBLENBQUNDLEtBQUs7WUFDekMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQU0sQ0FBRSxHQUFHLElBQUFKLFVBQUEsQ0FBQUssU0FBUyxFQUFDSCxLQUFLLENBQUNJ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