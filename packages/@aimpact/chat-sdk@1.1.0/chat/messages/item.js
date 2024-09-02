System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "dompurify@3.1.6", "markdown-it@14.1.0", "highlight.js@11.10.0", "markdown-it-katex@2.0.3", "react-syntax-highlighter@15.5.0", "react-katex@3.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
  _export("Message", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_dompurify2) {
      dependency_4 = _dompurify2;
    }, function (_markdownIt2) {
      dependency_5 = _markdownIt2;
    }, function (_highlightJs) {
      dependency_6 = _highlightJs;
    }, function (_markdownItKatex2) {
      dependency_7 = _markdownItKatex2;
    }, function (_reactSyntaxHighlighter2) {
      dependency_8 = _reactSyntaxHighlighter2;
    }, function (_reactKatex2) {
      dependency_9 = _reactKatex2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-texmath", "1.0.0"], ["mathjax-full", "3.2.2"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['dompurify', dependency_4], ['markdown-it', dependency_5], ['highlight.js', dependency_6], ['markdown-it-katex', dependency_7], ['react-syntax-highlighter', dependency_8], ['react-katex', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 630238096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdownIt = require("markdown-it");
          var _highlight = require("highlight.js");
          var _markdownItKatex = require("markdown-it-katex");
          const settings = {
            html: true,
            linkify: true,
            typographer: true,
            highlight: (str, lang) => {
              if (lang && _highlight.default.getLanguage(lang)) {
                try {
                  return '<hr><pre class="hljs"><code>' + _highlight.default.highlight(str, {
                    language: lang
                  }).value + '</code></pre><hr>';
                } catch (__) {}
              }
              return '<hr><pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre><hr>';
            }
          };
          const mdParser = new _markdownIt.default(settings).use(_markdownItKatex.default);
          // Confi
          /*bundle*/
          function Message({
            message
          }) {
            const [content, setContent] = React.useState(message.content ?? '');
            const sanitizedContent = mdParser.render(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: sanitizedContent
              }
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./parser
      ************************/

      ims.set('./parser', {
        hash: 3449808258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Parser = void 0;
          class Parser {
            static types = [{
              type: 'math-inline',
              regex: /\\\(.+?\\\)/g
            }, {
              type: 'text-inline',
              regex: /([^\\\(.+?\\\)]|[^`[^`]+`])+/g
            }, {
              type: 'code-inline',
              regex: /(?<!`)`[^`]+`(?!`)/g
            }];
            static blockTypes = [{
              type: 'math-block',
              regex: /\\\[.+?\\\]/g
            }, {
              type: 'code-block',
              regex: /```[\s\S]+?```/g
            }, {
              type: 'text-block',
              regex: /(.+?)(?=(\\\(.+?\\\)|\\\[.+?\\\]|`[^`]+`|```[\s\S]+?```|\n\n|$))/gs
            }];
            static parse(input) {
              if (!input) return [];
              const elements = [];
              // Primer paso: Identificar todos los bloques principales
              const mainBlocks = this.getBlocks(input);
              // Segundo paso: Procesar los bloques de texto para encontrar inline elements
              for (const block of mainBlocks) {
                if (block.type !== 'text-block') {
                  elements.push(block);
                  continue;
                }
                const parsedText = this.getTextBlock(block.content);
                elements.push(parsedText);
              }
              return elements;
            }
            static getBlocks(input) {
              const elements = [];
              let remainingInput = input;
              while (remainingInput.length > 0) {
                let matched = false;
                for (const {
                  type,
                  regex
                } of Parser.blockTypes) {
                  regex.lastIndex = 0; // Reiniciar el índice de búsqueda de la regex
                  const match = regex.exec(remainingInput);
                  if (match && match.index === 0) {
                    elements.push({
                      type,
                      content: match[0]
                    });
                    remainingInput = remainingInput.slice(match[0].length);
                    matched = true;
                    break;
                  }
                }
                if (!matched) {
                  const nextMatchIndex = this.findNextMatchIndex(remainingInput);
                  const substring = remainingInput.slice(0, nextMatchIndex);
                  elements.push({
                    type: 'text-inline',
                    content: substring
                  });
                  remainingInput = remainingInput.slice(substring.length);
                }
              }
              return elements;
            }
            static findNextMatchIndex(input) {
              let minIndex = input.length;
              for (const {
                regex
              } of Parser.types.filter(t => t.type !== 'text-block')) {
                regex.lastIndex = 0;
                const match = regex.exec(input);
                if (match && match.index < minIndex) {
                  minIndex = match.index;
                }
              }
              return minIndex;
            }
            static getTextBlock(text) {
              const content = [];
              let remainingText = text;
              while (remainingText.length > 0) {
                let matched = false;
                for (const {
                  type,
                  regex
                } of Parser.types) {
                  const match = regex.exec(remainingText);
                  if (!match) continue;
                  let string = match[0];
                  let limit = match[0].length;
                  if (match.index !== 0) {
                    string = remainingText.slice(0, match.index);
                    limit = match.index;
                  }
                  matched = true;
                  remainingText = remainingText.slice(limit);
                  content.push({
                    type,
                    content: string
                  });
                } //end for
                if (!matched) {
                  content.push({
                    type: 'text-inline',
                    content: remainingText
                  });
                  break;
                }
              }
              return {
                type: 'text-block',
                content
              };
            }
            static add(type, regex) {
              Parser.types.push({
                type,
                regex
              });
            }
          }
          exports.Parser = Parser;
        }
      });

      /**************************
      INTERNAL MODULE: ./renderer
      **************************/

      ims.set('./renderer', {
        hash: 1725444284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentRenderer = ContentRenderer;
          var _react = require("react");
          var _parser = require("./parser");
          var _inline = require("./renderers/inline");
          var _block = require("./renderers/block");
          // Importa la clase Parser que creamos anteriormente

          function ContentRenderer({
            content
          }) {
            const elements = (0, _react.useMemo)(() => _parser.Parser.parse(content), [content]);
            const output = elements.map((el, index) => {
              const isTextOrInline = el.type === 'text-block' || el.type.includes('-inline');
              const space = isTextOrInline && index > 0 ? ' ' : '';
              if (el.type === 'text-block') {
                return _react.default.createElement(_block.TextBlockRenderer, {
                  items: el.content,
                  key: index
                });
              }
              if (isTextOrInline) return _react.default.createElement(_inline.InlineRenderer, {
                type: el.type,
                content: el.content,
                key: index
              });
              const output = _react.default.createElement(_block.BlockRenderer, {
                type: el.type,
                content: el.content
              });
              return _react.default.createElement(_react.default.Fragment, {
                key: index
              }, space, output);
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./renderers/block
      *********************************/

      ims.set('./renderers/block', {
        hash: 1156784899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BlockRenderer = BlockRenderer;
          exports.TextBlockRenderer = TextBlockRenderer;
          var _react = require("react");
          var _inline = require("./inline");
          var _okaidia = require("./okaidia");
          var _reactSyntaxHighlighter = require("react-syntax-highlighter");
          var _reactKatex = require("react-katex");
          function BlockRenderer({
            type,
            content
          }) {
            const renders = {
              'math-block': content => {
                const process = expression => {
                  // Remover únicamente los delimitadores externos \[ y \]
                  const trimmedExpression = expression.trim();
                  if (trimmedExpression.startsWith('\\[') && trimmedExpression.endsWith('\\]')) {
                    return trimmedExpression.slice(2, -2); // Elimina \[ y \]
                  }
                  return expression;
                };
                return _react.default.createElement("div", {
                  className: "mathjax-container"
                }, _react.default.createElement(_reactKatex.BlockMath, {
                  math: process(content)
                }));
              },
              'code-block': content => _react.default.createElement("div", {
                className: "code-block__container"
              }, _react.default.createElement(_reactSyntaxHighlighter.Prism, {
                language: "typescript",
                style: _okaidia.default,
                className: "syntax-highlighter dark"
              }, content.slice(3, -3)), ' ', "// Eliminar los tres backticks (```) del inicio y fin")
            };
            return renders[type](content);
          }
          function TextBlockRenderer({
            items = []
          }) {
            return _react.default.createElement("p", null, items.map(({
              type,
              content
            }, index) => _react.default.createElement(_inline.InlineRenderer, {
              type: type,
              content: content,
              key: index
            })));
            // return <span>parsed text</span>;
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./renderers/inline
      **********************************/

      ims.set('./renderers/inline', {
        hash: 3244605796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineRenderer = InlineRenderer;
          var _react = require("react");
          var _text = require("./text");
          var _reactKatex = require("react-katex");
          function InlineRenderer({
            type,
            content
          }) {
            content = content.replace('\\n\\n', '');
            const renders = {
              // 'math-inline': content => <MathJax inline>{content}</MathJax>,
              'math-inline': content => {
                const process = text => {
                  // Replace double backslashes with single backslashes
                  return text.replaceAll(`\\`, '');
                };
                // console.log(20, content, process(content));
                return _react.default.createElement(_reactKatex.InlineMath, {
                  math: process(content)
                });
              },
              'code-inline': content => _react.default.createElement("code", null, content.slice(1, -1)),
              'text-inline': content => {
                return _react.default.createElement(_text.TextRenderer, {
                  content: content
                });
              }
            };
            console.log(0.4, type, content);
            return renders[type](content);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./renderers/okaidia
      ***********************************/

      ims.set('./renderers/okaidia', {
        hash: 1926034783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _default = exports.default = {
            "code[class*=\"language-\"]": {
              "color": "#f8f8f2",
              "background": "none",
              "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
              "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
              "fontSize": "1em",
              "textAlign": "left",
              "whiteSpace": "pre",
              "wordSpacing": "normal",
              "wordBreak": "normal",
              "wordWrap": "normal",
              "lineHeight": "1.5",
              "MozTabSize": "4",
              "OTabSize": "4",
              "tabSize": "4",
              "WebkitHyphens": "none",
              "MozHyphens": "none",
              "msHyphens": "none",
              "hyphens": "none"
            },
            "pre[class*=\"language-\"]": {
              "color": "#f8f8f2",
              "background": "#272822",
              "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
              "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
              "fontSize": "1em",
              "textAlign": "left",
              "whiteSpace": "pre",
              "wordSpacing": "normal",
              "wordBreak": "normal",
              "wordWrap": "normal",
              "lineHeight": "1.5",
              "MozTabSize": "4",
              "OTabSize": "4",
              "tabSize": "4",
              "WebkitHyphens": "none",
              "MozHyphens": "none",
              "msHyphens": "none",
              "hyphens": "none",
              "padding": "1em",
              "margin": ".5em 0",
              "overflow": "auto",
              "borderRadius": "0.3em"
            },
            ":not(pre) > code[class*=\"language-\"]": {
              "background": "#272822",
              "padding": ".1em",
              "borderRadius": ".3em",
              "whiteSpace": "normal"
            },
            "comment": {
              "color": "#8292a2"
            },
            "prolog": {
              "color": "#8292a2"
            },
            "doctype": {
              "color": "#8292a2"
            },
            "cdata": {
              "color": "#8292a2"
            },
            "punctuation": {
              "color": "#f8f8f2"
            },
            "namespace": {
              "Opacity": ".7"
            },
            "property": {
              "color": "#f92672"
            },
            "tag": {
              "color": "#f92672"
            },
            "constant": {
              "color": "#f92672"
            },
            "symbol": {
              "color": "#f92672"
            },
            "deleted": {
              "color": "#f92672"
            },
            "boolean": {
              "color": "#ae81ff"
            },
            "number": {
              "color": "#ae81ff"
            },
            "selector": {
              "color": "#a6e22e"
            },
            "attr-name": {
              "color": "#a6e22e"
            },
            "string": {
              "color": "#a6e22e"
            },
            "char": {
              "color": "#a6e22e"
            },
            "builtin": {
              "color": "#a6e22e"
            },
            "inserted": {
              "color": "#a6e22e"
            },
            "operator": {
              "color": "#f8f8f2"
            },
            "entity": {
              "color": "#f8f8f2",
              "cursor": "help"
            },
            "url": {
              "color": "#f8f8f2"
            },
            ".language-css .token.string": {
              "color": "#f8f8f2"
            },
            ".style .token.string": {
              "color": "#f8f8f2"
            },
            "variable": {
              "color": "#f8f8f2"
            },
            "atrule": {
              "color": "#e6db74"
            },
            "attr-value": {
              "color": "#e6db74"
            },
            "function": {
              "color": "#e6db74"
            },
            "class-name": {
              "color": "#e6db74"
            },
            "keyword": {
              "color": "#66d9ef"
            },
            "regex": {
              "color": "#fd971f"
            },
            "important": {
              "color": "#fd971f",
              "fontWeight": "bold"
            },
            "bold": {
              "fontWeight": "bold"
            },
            "italic": {
              "fontStyle": "italic"
            }
          };
        }
      });

      /********************************
      INTERNAL MODULE: ./renderers/text
      ********************************/

      ims.set('./renderers/text', {
        hash: 3723538662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextRenderer = TextRenderer;
          var _react = require("react");
          var _markdownIt = require("markdown-it");
          var _dompurify = require("dompurify");
          // import markdownItMath from 'markdown-it-math';

          const mdParser = new _markdownIt.default();
          function TextRenderer({
            content
          }) {
            console.log(0.5, content);
            const sanitizedContent = _dompurify.default.sanitize(mdParser.renderInline(content));
            return _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: sanitizedContent
              }
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3592763005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Message') && _export("Message", Message = require ? require('./index').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaG9va3MiLCJfbWFya2Rvd25JdCIsIl9oaWdobGlnaHQiLCJfbWFya2Rvd25JdEthdGV4Iiwic2V0dGluZ3MiLCJodG1sIiwibGlua2lmeSIsInR5cG9ncmFwaGVyIiwiaGlnaGxpZ2h0Iiwic3RyIiwibGFuZyIsImRlZmF1bHQiLCJnZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwidmFsdWUiLCJfXyIsIm1kUGFyc2VyIiwidXRpbHMiLCJlc2NhcGVIdG1sIiwidXNlIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwic2FuaXRpemVkQ29udGVudCIsInJlbmRlciIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiUGFyc2VyIiwidHlwZXMiLCJ0eXBlIiwicmVnZXgiLCJibG9ja1R5cGVzIiwicGFyc2UiLCJpbnB1dCIsImVsZW1lbnRzIiwibWFpbkJsb2NrcyIsImdldEJsb2NrcyIsImJsb2NrIiwicHVzaCIsInBhcnNlZFRleHQiLCJnZXRUZXh0QmxvY2siLCJyZW1haW5pbmdJbnB1dCIsImxlbmd0aCIsIm1hdGNoZWQiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImV4ZWMiLCJpbmRleCIsInNsaWNlIiwibmV4dE1hdGNoSW5kZXgiLCJmaW5kTmV4dE1hdGNoSW5kZXgiLCJzdWJzdHJpbmciLCJtaW5JbmRleCIsImZpbHRlciIsInQiLCJ0ZXh0IiwicmVtYWluaW5nVGV4dCIsInN0cmluZyIsImxpbWl0IiwiYWRkIiwiX3JlYWN0IiwiX3BhcnNlciIsIl9pbmxpbmUiLCJfYmxvY2siLCJDb250ZW50UmVuZGVyZXIiLCJ1c2VNZW1vIiwib3V0cHV0IiwibWFwIiwiZWwiLCJpc1RleHRPcklubGluZSIsImluY2x1ZGVzIiwic3BhY2UiLCJUZXh0QmxvY2tSZW5kZXJlciIsIml0ZW1zIiwia2V5IiwiSW5saW5lUmVuZGVyZXIiLCJCbG9ja1JlbmRlcmVyIiwiX29rYWlkaWEiLCJfcmVhY3RTeW50YXhIaWdobGlnaHRlciIsIl9yZWFjdEthdGV4IiwicmVuZGVycyIsInByb2Nlc3MiLCJleHByZXNzaW9uIiwidHJpbW1lZEV4cHJlc3Npb24iLCJ0cmltIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiY2xhc3NOYW1lIiwiQmxvY2tNYXRoIiwibWF0aCIsIlByaXNtIiwic3R5bGUiLCJfdGV4dCIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwiSW5saW5lTWF0aCIsIlRleHRSZW5kZXJlciIsImNvbnNvbGUiLCJsb2ciLCJfZG9tcHVyaWZ5Iiwic2FuaXRpemUiLCJyZW5kZXJJbmxpbmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL3BhcnNlci50cyIsIi90cy9yZW5kZXJlci50c3giLCIvdHMvcmVuZGVyZXJzL2Jsb2NrLnRzeCIsIi90cy9yZW5kZXJlcnMvaW5saW5lLnRzeCIsIi90cy9yZW5kZXJlcnMvb2thaWRpYS50c3giLCIvdHMvcmVuZGVyZXJzL3RleHQudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFVBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFJLGdCQUFBLEdBQUFKLE9BQUE7VUFFQSxNQUFNSyxRQUFRLEdBQUc7WUFDaEJDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFdBQVcsRUFBRSxJQUFJO1lBQ2pC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