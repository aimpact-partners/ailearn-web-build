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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 4210698978,
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
                if (event.which === 8 || event.key?.toLowerCase() === "backspace") {
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
                target.value = target.value.replace(/[^0-9.]+/g, "");
                event.preventDefault();
                return;
              }
              setCode(currentCode => [...currentCode, target.value]);
            };
            const setFocus = () => refs.current[code.length]?.focus();
            const cls = className ? `${className} code-inputs` : "code-inputs";
            (0, _react.useEffect)(() => {
              if (refs.current[code.length]) refs.current[code.length].focus();
              onCodeFull(code.join(""));
            }, [code, length]);
            (0, _react.useEffect)(() => {
              setCode([]);
            }, [reset]);
            const output = [...Array(length)].map((_, i) => _react.default.createElement(_input.default, {
              value: code[i] ?? "",
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
        hash: 340004181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _default = (0, React.forwardRef)(function Input(props, ref) {
            const className = (0, React.useMemo)(() => {
              const propsClassName = props.className ?? "";
              const filledClassName = Boolean(String(props.value ?? "").length) ? "filled" : "";
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return React.createElement("input", {
              ...props,
              maxLength: 1,
              type: "text",
              inputMode: "numeric",
              className: className,
              ref: ref
            });
          });
          exports.default = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiY2xhc3NOYW1lIiwib25seU51bWJlciIsInJlc2V0IiwiY29kZSIsInNldENvZGUiLCJ1c2VTdGF0ZSIsInJlZnMiLCJ1c2VSZWYiLCJBcnJheSIsIm9uQ2xlYW4iLCJldmVudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicmVwbGFjZSIsImN1cnJlbnRDb2RlIiwic2V0Rm9jdXMiLCJjdXJyZW50IiwiZm9jdXMiLCJjbHMiLCJ1c2VFZmZlY3QiLCJqb2luIiwib3V0cHV0IiwibWFwIiwiXyIsImkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInRvU3RyaW5nIiwicmVmIiwiZWwiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsIm9uRm9jdXMiLCJkZWZhdWx0UHJvcyIsIlJlYWN0IiwiX2RlZmF1bHQiLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJwcm9wcyIsInVzZU1lbW8iLCJwcm9wc0NsYXNzTmFtZSIsImZpbGxlZENsYXNzTmFtZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJtYXhMZW5ndGgiLCJ0eXBlIiwiaW5wdXRNb2RlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvZGUtaW5wdXQudHN4IiwiL2NvZGUvdHMvaW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBUUEsTUFBTUUsaUJBQWlCLEdBQW1CQSxDQUFB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