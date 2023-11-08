System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/toast", "prismjs@1.29.0"], function (_export, _context) {
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
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }, function (_pragmateUi003Toast) {
      dependency_4 = _pragmateUi003Toast;
    }, function (_prismjs) {
      dependency_5 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/toast', dependency_4], ['prismjs', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 605344912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          function Clipboard({
            text,
            message
          }) {
            const ref = _react.default.useRef(null);
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
            return _react.default.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_toast.Toasts, {
              position: {
                bottom: '2rem',
                right: '2rem'
              }
            }), _react.default.createElement(_icons.IconButton, {
              title: "copy",
              icon: "copy"
            }), _react.default.createElement("span", {
              className: "action-copied"
            }, "Copied"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 1282507877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var _react = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return _react.default.createElement("div", {
              className: "code__box"
            }, _react.default.createElement("header", null, _react.default.createElement("div", {
              className: "tab active"
            }, title), _react.default.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            })), _react.default.createElement("section", {
              className: "box__code"
            }, _react.default.createElement(_code.Code, {
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
        hash: 3880841289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var _react = require("react");
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
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("pre", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            }), clipboard && _react.default.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 1462049212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var _react = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return _react.default.createElement("code", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3RvYXN0IiwiQ2xpcGJvYXJkIiwidGV4dCIsIm1lc3NhZ2UiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm9uQ2xpY2siLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ0b2FzdCIsImluZm8iLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJjbGFzc05hbWUiLCJUb2FzdHMiLCJib3R0b20iLCJyaWdodCIsIkljb25CdXR0b24iLCJ0aXRsZSIsImljb24iLCJfY29kZSIsIl9jbGlwYm9hcmQiLCJDb2RlQm94IiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsIkNvZGUiLCJQcmlzbSIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJJbmxpbmVDb2RlIl0sInNvdXJjZXMiOlsiL3RzL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS1ib3gudHN4IiwiL3RzL2NvZGUudHN4IiwiL3RzL2lubGluZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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