System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/toast", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Toast) {
      dependency_4 = _pragmateUi0037Toast;
    }, function (_prismjs) {
      dependency_5 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/toast', dependency_4], ['prismjs', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 1481259571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              _toast.toast.info('copied');
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                window.setTimeout(() => {
                  span.classList.add('hide');
                  window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.log('some error', e);
              }
            };
            return React.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_toast.Toasts, {
              position: {
                bottom: '2rem',
                right: '2rem'
              }
            }), React.createElement(_icons.IconButton, {
              icon: "copy"
            }), React.createElement("span", {
              className: "action-copied"
            }, "Copied"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 3460354440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var React = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return React.createElement("div", {
              className: 'code__box'
            }, React.createElement("header", null, React.createElement("div", {
              className: 'tab active'
            }, title), React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            })), React.createElement("section", {
              className: 'box__code'
            }, React.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 85269146,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            }), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 2676581642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var React = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return React.createElement("code", {
              className: "inline__code"
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-box",
        "from": "CodeBox",
        "name": "CodeBox"
      }, {
        "im": "./code",
        "from": "Code",
        "name": "Code"
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJfdG9hc3QiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJvbkNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidG9hc3QiLCJpbmZvIiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiY2xhc3NOYW1lIiwiVG9hc3RzIiwiYm90dG9tIiwicmlnaHQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIl9jb2RlIiwiX2NsaXBib2FyZCIsIkNvZGVCb3giLCJ0aXRsZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJDb2RlIiwiUHJpc20iLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJodG1sIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiSW5saW5lQ29kZSJdLCJzb3VyY2VzIjpbIi90cy9jbGlwYm9hcmQudHN4IiwiL3RzL2NvZGUtYm94LnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9pbmxpbmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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