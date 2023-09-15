System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/toast", "prismjs@1.29.0"], function (_export, _context) {
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
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Toast) {
      dependency_4 = _pragmateUi0036Toast;
    }, function (_prismjs) {
      dependency_5 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/toast', dependency_4], ['prismjs', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 2409774466,
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
              const textArea = document.createElement("textarea");
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = "0";
              textArea.style.left = "0";
              textArea.style.position = "fixed";
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand("copy");
                const msg = successful ? "successful" : "unsuccessful";
                console.log("Fallback: Copying text command was " + msg);
              } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              _toast.toast.info("copied");
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector(".action-copied");
                span.classList.add("show");
                window.setTimeout(() => {
                  span.classList.add("hide");
                  window.setTimeout(() => span.classList.remove("show", "hide"), 300);
                }, 500);
              } catch (e) {
                console.log("some error", e);
              }
            };
            return React.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_toast.Toasts, {
              position: {
                bottom: "2rem",
                right: "2rem"
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