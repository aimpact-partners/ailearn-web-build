System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, InputCode, __beyond_pkg, hmr;
  _export("InputCode", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 2680993359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputCode = InputCode;
          var _react = require("react");
          var _input = require("./input");
          const defaultOnCodeFull = () => null;
          /**
           * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
           * inputs, each of which is limited to one character. When the user enters a character, the component
           * updates the state with the character and focuses the next input. When the user presses backspace,
           * the component removes the last character from the state and focuses the previous input. When the
           * user enters the last character, the component calls the onCodeFull prop with the code as a string.
           * @param {props}  - props
           */
          /*bundle*/
          function InputCode({
            length,
            upper = false,
            onCodeFull,
            className,
            onlyNumber,
            reset
          }) {
            const [code, setCode] = (0, _react.useState)([]);
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              globalThis.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === 'backspace') {
                  if (code.length) setCode(code.slice(0, code.length - 1));
                  return;
                }
              }, 0);
            };
            const setFocus = () => refs.current[code.length]?.focus();
            const cls = className ? `${className} code-inputs` : 'code-inputs';
            const preventDefault = event => {
              const target = event.currentTarget;
              if (target.value.length > 1) {
                target.value = target.value[1];
                event.preventDefault();
                return;
              }
              if (!target.value.match(/\d/g) && onlyNumber) {
                target.value = target.value.replace(/[^0-9.]+/g, '');
                event.preventDefault();
                return;
              }
              const value = upper ? target.value.toUpperCase() : target.value;
              setCode(currentCode => [...currentCode, value]);
            };
            (0, _react.useEffect)(() => {
              const onCopy = event => {
                const pastedData = event.clipboardData.getData('text');
                setCode(pastedData.split(''));
              };
              refs.current[0]?.addEventListener('paste', onCopy);
              return () => {
                refs.current[0]?.removeEventListener('paste', onCopy);
              };
            }, []);
            (0, _react.useEffect)(() => {
              if (refs.current[code.length]) refs.current[code.length].focus();
              onCodeFull(code.join(''));
            }, [code, length]);
            (0, _react.useEffect)(() => {
              setCode([]);
            }, [reset]);
            const output = [...Array(length)].map((_, i) => _react.default.createElement(_input.default, {
              value: code[i] ?? '',
              key: i.toString(),
              ref: el => {
                refs.current[i] = el;
              },
              onChange: preventDefault,
              onKeyDown: onClean,
              onFocus: setFocus
            }));
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
          InputCode.defaultPros = {
            onCodeFull: defaultOnCodeFull,
            length: 6
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 31162077,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _default = exports.default = _react.default.forwardRef(function Input(props, ref) {
            const className = _react.default.useMemo(() => {
              const propsClassName = props.className ?? '';
              const filledClassName = Boolean(String(props.value ?? '').length) ? 'filled' : '';
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return _react.default.createElement("input", {
              ...props,
              maxLength: 1,
              type: "text",
              inputMode: "numeric",
              className: className,
              ref: ref
            });
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-input",
        "from": "InputCode",
        "name": "InputCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputCode') && _export("InputCode", InputCode = require ? require('./code-input').InputCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJ1cHBlciIsIm9uQ29kZUZ1bGwiLCJjbGFzc05hbWUiLCJvbmx5TnVtYmVyIiwicmVzZXQiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwicmVmcyIsInVzZVJlZiIsIkFycmF5Iiwib25DbGVhbiIsImV2ZW50IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJzZXRGb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsImNscyIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibWF0Y2giLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJjdXJyZW50Q29kZSIsInVzZUVmZmVjdCIsIm9uQ29weSIsInBhc3RlZERhdGEiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsInNwbGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luIiwib3V0cHV0IiwibWFwIiwiXyIsImkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInRvU3RyaW5nIiwicmVmIiwiZWwiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsIm9uRm9jdXMiLCJkZWZhdWx0UHJvcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJJbnB1dCIsInByb3BzIiwidXNlTWVtbyIsInByb3BzQ2xhc3NOYW1lIiwiZmlsbGVkQ2xhc3NOYW1lIiwiQm9vbGVhbiIsIlN0cmluZyIsIm1heExlbmd0aCIsInR5cGUiLCJpbnB1dE1vZGUiXSwic291cmNlcyI6WyIvY29kZS90cy9jb2RlLWlucHV0LnRzeCIsIi9jb2RlL3RzL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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