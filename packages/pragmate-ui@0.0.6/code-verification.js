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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3993237636,
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
            onCodeFull,
            className,
            onlyNumber,
            reset
          }) {
            const [code, setCode] = (0, _react.useState)([]);
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              window.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === 'backspace') {
                  if (code.length) setCode(code.slice(0, code.length - 1));
                  return;
                }
              }, 0);
            };
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
              setCode(currentCode => [...currentCode, target.value]);
            };
            const setFocus = () => refs.current[code.length]?.focus();
            const cls = className ? `${className} code-inputs` : 'code-inputs';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiY2xhc3NOYW1lIiwib25seU51bWJlciIsInJlc2V0IiwiY29kZSIsInNldENvZGUiLCJ1c2VTdGF0ZSIsInJlZnMiLCJ1c2VSZWYiLCJBcnJheSIsIm9uQ2xlYW4iLCJldmVudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicmVwbGFjZSIsImN1cnJlbnRDb2RlIiwic2V0Rm9jdXMiLCJjdXJyZW50IiwiZm9jdXMiLCJjbHMiLCJ1c2VFZmZlY3QiLCJqb2luIiwib3V0cHV0IiwibWFwIiwiXyIsImkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInRvU3RyaW5nIiwicmVmIiwiZWwiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsIm9uRm9jdXMiLCJkZWZhdWx0UHJvcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJJbnB1dCIsInByb3BzIiwidXNlTWVtbyIsInByb3BzQ2xhc3NOYW1lIiwiZmlsbGVkQ2xhc3NOYW1lIiwiQm9vbGVhbiIsIlN0cmluZyIsIm1heExlbmd0aCIsInR5cGUiLCJpbnB1dE1vZGUiXSwic291cmNlcyI6WyIvY29kZS90cy9jb2RlLWlucHV0LnRzeCIsIi9jb2RlL3RzL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVFBLE1BQU1FLGlCQUFpQixHQUFtQkEsQ0FBQSxLQUFNLElB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