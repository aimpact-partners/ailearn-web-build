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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQTBCUSxRQUFRLEVBQUU7Y0FBRVcsdUJBQXVCLEVBQUVSLFlBQVk7WUFBRSxFQUFJLEVBQ2hHdEIsU0FBUyxJQUFJOUIsb0JBQUNKLG9CQUFTO2NBQUNDLElBQUksRUFBRXFELFFBQVE7Y0FBRXBELE9BQU8sRUFBQztZQUFFLEVBQUcsQ0FDakQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFFTztVQUFVLFNBQVUrRCxVQUFVLENBQUM7WUFBRVg7VUFBUSxDQUFFO1lBQ2pELE9BQU9sRDtjQUFNeUMsU0FBUyxFQUFDO1lBQWMsR0FBRVMsUUFBUSxDQUFRO1VBQ3hEIiwibmFtZXMiOlsiQ2xpcGJvYXJkIiwidGV4dCIsIm1lc3NhZ2UiLCJyZWYiLCJSZWFjdCIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJvbkNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidG9hc3QiLCJpbmZvIiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiY2xhc3NOYW1lIiwiVG9hc3RzIiwiYm90dG9tIiwicmlnaHQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkNvZGVCb3giLCJ0aXRsZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJDb2RlIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiSW5saW5lQ29kZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY2xpcGJvYXJkLnRzeCIsInRzL2NvZGUtYm94LnRzeCIsInRzL2NvZGUudHN4IiwidHMvaW5saW5lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==