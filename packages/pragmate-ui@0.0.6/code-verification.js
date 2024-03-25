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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.29"]]);
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
        hash: 2984388976,
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
                console.log(105, pastedData.split(''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJ1cHBlciIsIm9uQ29kZUZ1bGwiLCJjbGFzc05hbWUiLCJvbmx5TnVtYmVyIiwicmVzZXQiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwicmVmcyIsInVzZVJlZiIsIkFycmF5Iiwib25DbGVhbiIsImV2ZW50IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJzZXRGb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsImNscyIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibWF0Y2giLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJjdXJyZW50Q29kZSIsInVzZUVmZmVjdCIsIm9uQ29weSIsInBhc3RlZERhdGEiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsIm91dHB1dCIsIm1hcCIsIl8iLCJpIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ0b1N0cmluZyIsInJlZiIsImVsIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJvbkZvY3VzIiwiZGVmYXVsdFByb3MiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJwcm9wcyIsInVzZU1lbW8iLCJwcm9wc0NsYXNzTmFtZSIsImZpbGxlZENsYXNzTmFtZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJtYXhMZW5ndGgiLCJ0eXBlIiwiaW5wdXRNb2RlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29kZS1pbnB1dC50c3giLCIvY29kZS90cy9pbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5n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