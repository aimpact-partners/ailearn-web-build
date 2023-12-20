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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 4102986032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _useClick = require("./use-click");
          function Clipboard({
            text
          }) {
            const [ref, onClick] = (0, _useClick.useClick)();
            return _react.default.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_icons.IconButton, {
              title: 'copy',
              icon: 'copy'
            }), _react.default.createElement("span", {
              className: 'action-copied'
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
        hash: 592390784,
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
              message: ''
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

      /***************************
      INTERNAL MODULE: ./use-click
      ***************************/

      ims.set('./use-click', {
        hash: 118304014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClick = useClick;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          function useClick() {
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
            return [ref, onClick];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VzZUNsaWNrIiwiQ2xpcGJvYXJkIiwidGV4dCIsInJlZiIsIm9uQ2xpY2siLCJ1c2VDbGljayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInRpdGxlIiwiaWNvbiIsIl9jb2RlIiwiX2NsaXBib2FyZCIsIkNvZGVCb3giLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwibWVzc2FnZSIsIkNvZGUiLCJjbGlwYm9hcmQiLCJQcmlzbSIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJJbmxpbmVDb2RlIiwiX3RvYXN0IiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwidmFsdWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwibXNnIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidG9hc3QiLCJpbmZvIiwiZGF0YXNldCIsIm5hdmlnYXRvciIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIl0sInNvdXJjZXMiOlsiL3RzL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS1ib3gudHN4IiwiL3RzL2NvZGUudHN4IiwiL3RzL2lubGluZS50c3giLCIvdHMvdXNlLWNsaWNrLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7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