System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "react-syntax-highlighter@15.5.0", "react-katex@3.0.1", "markdown-it@14.1.0", "dompurify@3.1.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
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
    }, function (_reactSyntaxHighlighter2) {
      dependency_4 = _reactSyntaxHighlighter2;
    }, function (_reactKatex2) {
      dependency_5 = _reactKatex2;
    }, function (_markdownIt2) {
      dependency_6 = _markdownIt2;
    }, function (_dompurify2) {
      dependency_7 = _dompurify2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-texmath", "1.0.0"], ["mathjax-full", "3.2.2"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['react-syntax-highlighter', dependency_4], ['react-katex', dependency_5], ['markdown-it', dependency_6], ['dompurify', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 341813722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _renderer = require("./renderer");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Message({
            message
          }) {
            const [content, setContent] = React.useState(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
            });
            return React.createElement(_renderer.ContentRenderer, {
              content: content
            });
          }
        }
      });

      /************************
      INTERNAL MODULE: ./parser
      ************************/

      ims.set('./parser', {
        hash: 4177422423,
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
              type: 'math-block',
              regex: /\\\[.+?\\\]/g
            }, {
              type: 'code-inline',
              regex: /(?<!`)`[^`]+`(?!`)/g
            }, {
              type: 'code-block',
              regex: /```[\s\S]+?```/g
            }, {
              type: 'text',
              regex: /(.+?)(?=(\\\(.+?\\\)|\\\[.+?\\\]|`[^`]+`|```[\s\S]+?```|$))/gs
            }];
            static parse(input) {
              if (!input) return [];
              const elements = [];
              // Primer paso: Identificar todos los bloques principales
              const mainBlocks = this.getBlocks(input);
              // Segundo paso: Procesar los bloques de texto para encontrar inline elements
              for (const block of mainBlocks) {
                if (block.type !== 'text') {
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
                } of Parser.types) {
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
                    type: 'text',
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
              } of Parser.types.filter(t => t.type !== 'text')) {
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
                } of Parser.types.filter(t => t.type !== 'text')) {
                  const match = regex.exec(remainingText);
                  if (!match) continue;
                  let string = match[0];
                  let limit = match[0].length;
                  content.push({
                    type,
                    content: string
                  });
                  matched = true;
                  if (match.index !== 0) {
                    string = remainingText.slice(0, match.index);
                    limit = match.index;
                  }
                  remainingText = remainingText.slice(limit);
                  content.push({
                    type: 'text',
                    content: string
                  });
                } //end for
                if (!matched) {
                  content.push({
                    type: 'text',
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
        hash: 2811364146,
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
            console.log(0.1, elements);
            const output = elements.map((el, index) => {
              const isTextOrInline = el.type === 'text' || el.type.includes('-inline');
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
        hash: 3320758633,
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
              text: content => {
                return _react.default.createElement(_text.TextRenderer, {
                  content: content
                });
              }
            };
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
        hash: 1688335830,
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
        hash: 18071104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmVuZGVyZXIiLCJfaG9va3MiLCJNZXNzYWdlIiwibWVzc2FnZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiQ29udGVudFJlbmRlcmVyIiwiUGFyc2VyIiwidHlwZXMiLCJ0eXBlIiwicmVnZXgiLCJwYXJzZSIsImlucHV0IiwiZWxlbWVudHMiLCJtYWluQmxvY2tzIiwiZ2V0QmxvY2tzIiwiYmxvY2siLCJwdXNoIiwicGFyc2VkVGV4dCIsImdldFRleHRCbG9jayIsInJlbWFpbmluZ0lucHV0IiwibGVuZ3RoIiwibWF0Y2hlZCIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsImluZGV4Iiwic2xpY2UiLCJuZXh0TWF0Y2hJbmRleCIsImZpbmROZXh0TWF0Y2hJbmRleCIsInN1YnN0cmluZyIsIm1pbkluZGV4IiwiZmlsdGVyIiwidCIsInRleHQiLCJyZW1haW5pbmdUZXh0Iiwic3RyaW5nIiwibGltaXQiLCJhZGQiLCJfcmVhY3QiLCJfcGFyc2VyIiwiX2lubGluZSIsIl9ibG9jayIsInVzZU1lbW8iLCJjb25zb2xlIiwibG9nIiwib3V0cHV0IiwibWFwIiwiZWwiLCJpc1RleHRPcklubGluZSIsImluY2x1ZGVzIiwic3BhY2UiLCJkZWZhdWx0IiwiVGV4dEJsb2NrUmVuZGVyZXIiLCJpdGVtcyIsImtleSIsIklubGluZVJlbmRlcmVyIiwiQmxvY2tSZW5kZXJlciIsIkZyYWdtZW50IiwiX29rYWlkaWEiLCJfcmVhY3RTeW50YXhIaWdobGlnaHRlciIsIl9yZWFjdEthdGV4IiwicmVuZGVycyIsInByb2Nlc3MiLCJleHByZXNzaW9uIiwidHJpbW1lZEV4cHJlc3Npb24iLCJ0cmltIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiY2xhc3NOYW1lIiwiQmxvY2tNYXRoIiwibWF0aCIsIlByaXNtIiwibGFuZ3VhZ2UiLCJzdHlsZSIsIl90ZXh0IiwicmVwbGFjZUFsbCIsIklubGluZU1hdGgiLCJUZXh0UmVuZGVyZXIiLCJfbWFya2Rvd25JdCIsIl9kb21wdXJpZnkiLCJtZFBhcnNlciIsInNhbml0aXplZENvbnRlbnQiLCJzYW5pdGl6ZSIsInJlbmRlcklubGluZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL3BhcnNlci50cyIsIi90cy9yZW5kZXJlci50c3giLCIvdHMvcmVuZGVyZXJzL2Jsb2NrLnRzeCIsIi90cy9yZW5kZXJlcnMvaW5saW5lLnRzeCIsIi90cy9yZW5kZXJlcnMvb2thaWRpYS50c3giLCIvdHMvcmVuZGVyZXJzL3RleHQudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUNSRyxPQUFPQSxDQUFDO1lBQUVDO1VBQU8sQ0FBb0I7WUFDN0MsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ25FLElBQUFILE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNKLE9BQU8sQ0FBQyxFQUFFLE1BQUs7Y0FDekJFLFVBQVUsQ0FBQ0YsT0FBTyxDQUFDQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE9BQU9OLEtBQUEsQ0FBQVUsYUFBQSxDQUFDUixTQUFBLENBQUFTLGVBQWU7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