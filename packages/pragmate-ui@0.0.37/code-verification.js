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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/code-verification');
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
          var _default = _react.default.forwardRef(function Input(props, ref) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztjQUFFa0MsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDMUcsQ0FBQyxDQUFDO1VBQUFnQiIsIm5hbWVzIjpbImRlZmF1bHRPbkNvZGVGdWxsIiwiSW5wdXRDb2RlIiwibGVuZ3RoIiwib25Db2RlRnVsbCIsImNsYXNzTmFtZSIsIm9ubHlOdW1iZXIiLCJyZXNldCIsImNvZGUiLCJzZXRDb2RlIiwicmVmcyIsIkFycmF5Iiwib25DbGVhbiIsImV2ZW50Iiwid2luZG93Iiwic2V0VGltZW91dCIsIndoaWNoIiwia2V5IiwidG9Mb3dlckNhc2UiLCJzbGljZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibWF0Y2giLCJyZXBsYWNlIiwiY3VycmVudENvZGUiLCJzZXRGb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsImNscyIsImpvaW4iLCJvdXRwdXQiLCJtYXAiLCJfIiwiaSIsIlJlYWN0IiwiSW5wdXQiLCJ0b1N0cmluZyIsInJlZiIsImVsIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJvbkZvY3VzIiwiZGVmYXVsdFByb3MiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJ1c2VNZW1vIiwicHJvcHNDbGFzc05hbWUiLCJmaWxsZWRDbGFzc05hbWUiLCJCb29sZWFuIiwiU3RyaW5nIiwibWF4TGVuZ3RoIiwidHlwZSIsImlucHV0TW9kZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29kZS1pbnB1dC50c3giLCJjb2RlL3RzL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19