System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "react-syntax-highlighter@15.5.0", "react-katex@3.0.1", "markdown-it@14.1.0", "markdown-it-math@4.1.1", "dompurify@3.1.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
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
    }, function (_markdownItMath2) {
      dependency_7 = _markdownItMath2;
    }, function (_dompurify2) {
      dependency_8 = _dompurify2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.0"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.4"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['react-syntax-highlighter', dependency_4], ['react-katex', dependency_5], ['markdown-it', dependency_6], ['markdown-it-math', dependency_7], ['dompurify', dependency_8]]);
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
        hash: 800724850,
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
        hash: 2354001483,
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
              'code-block': content => _react.default.createElement(_reactSyntaxHighlighter.Prism, {
                language: "typescript",
                style: _okaidia.default,
                className: "syntax-highlighter dark"
              }, content.slice(3, -3)) // Eliminar los tres backticks (```) del inicio y fin
            };
            return renders[type](content);
          }
          function TextBlockRenderer({
            items = []
          }) {
            return _react.default.createElement(_react.default.Fragment, null, items.map(({
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
        hash: 2728932386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextRenderer = TextRenderer;
          var _react = require("react");
          var _markdownIt = require("markdown-it");
          var _markdownItMath = require("markdown-it-math");
          var _dompurify = require("dompurify");
          const mdParser = new _markdownIt.default().use(_markdownItMath.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmVuZGVyZXIiLCJfaG9va3MiLCJNZXNzYWdlIiwibWVzc2FnZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiQ29udGVudFJlbmRlcmVyIiwiUGFyc2VyIiwidHlwZXMiLCJ0eXBlIiwicmVnZXgiLCJwYXJzZSIsImlucHV0IiwiZWxlbWVudHMiLCJtYWluQmxvY2tzIiwiZ2V0QmxvY2tzIiwiYmxvY2siLCJwdXNoIiwicGFyc2VkVGV4dCIsImdldFRleHRCbG9jayIsInJlbWFpbmluZ0lucHV0IiwibGVuZ3RoIiwibWF0Y2hlZCIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsImluZGV4Iiwic2xpY2UiLCJuZXh0TWF0Y2hJbmRleCIsImZpbmROZXh0TWF0Y2hJbmRleCIsInN1YnN0cmluZyIsIm1pbkluZGV4IiwiZmlsdGVyIiwidCIsInRleHQiLCJyZW1haW5pbmdUZXh0Iiwic3RyaW5nIiwibGltaXQiLCJhZGQiLCJfcmVhY3QiLCJfcGFyc2VyIiwiX2lubGluZSIsIl9ibG9jayIsInVzZU1lbW8iLCJvdXRwdXQiLCJtYXAiLCJlbCIsImlzVGV4dE9ySW5saW5lIiwiaW5jbHVkZXMiLCJzcGFjZSIsImRlZmF1bHQiLCJUZXh0QmxvY2tSZW5kZXJlciIsIml0ZW1zIiwia2V5IiwiSW5saW5lUmVuZGVyZXIiLCJCbG9ja1JlbmRlcmVyIiwiRnJhZ21lbnQiLCJfb2thaWRpYSIsIl9yZWFjdFN5bnRheEhpZ2hsaWdodGVyIiwiX3JlYWN0S2F0ZXgiLCJyZW5kZXJzIiwicHJvY2VzcyIsImV4cHJlc3Npb24iLCJ0cmltbWVkRXhwcmVzc2lvbiIsInRyaW0iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJjbGFzc05hbWUiLCJCbG9ja01hdGgiLCJtYXRoIiwiUHJpc20iLCJsYW5ndWFnZSIsInN0eWxlIiwiX3RleHQiLCJyZXBsYWNlQWxsIiwiSW5saW5lTWF0aCIsIlRleHRSZW5kZXJlciIsIl9tYXJrZG93bkl0IiwiX21hcmtkb3duSXRNYXRoIiwiX2RvbXB1cmlmeSIsIm1kUGFyc2VyIiwidXNlIiwic2FuaXRpemVkQ29udGVudCIsInNhbml0aXplIiwicmVuZGVySW5saW5lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvcGFyc2VyLnRzIiwiL3RzL3JlbmRlcmVyLnRzeCIsIi90cy9yZW5kZXJlcnMvYmxvY2sudHN4IiwiL3RzL3JlbmRlcmVycy9pbmxpbmUudHN4IiwiL3RzL3JlbmRlcmVycy9va2FpZGlhLnRzeCIsIi90cy9yZW5kZXJlcnMvdGV4dC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsU0FDUkcsT0FBT0EsQ0FBQztZQUFFQztVQUFPLENBQW9CO1lBQzdDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUNILE9BQU8sQ0FBQ0MsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNuRSxJQUFBSCxNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDSixPQUFPLENBQUMsRUFBRSxNQUFLO2NBQ3pCRSxVQUFVLENBQUNGLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFDRixPQUFPTixLQUFBLENBQUFVLGFBQUEsQ0FBQ1IsU0FBQSxD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