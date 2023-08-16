System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Button, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    Button: void 0,
    Checkbox: void 0,
    Form: void 0,
    Input: void 0,
    Radio: void 0,
    Switch: void 0,
    Textarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_3 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Ripple) {
      dependency_4 = _pragmateUi0036Ripple;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['pragmate-ui/ripple', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 1274726585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          const /*bundle */Button = (0, _react.forwardRef)((props, ref) => {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon,
              loading,
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            if (!ref) ref = _react.default.useRef();
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(ref.current);
            }, []);
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pragmate-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            const isLoading = loading || fetching;
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: isLoading || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), (label || children) && _react.default.createElement("div", {
              className: `button-label ${isLoading ? 'loading' : ''}`
            }, label ?? children), isLoading && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
          exports.Button = Button;
        }
      });

      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/

      ims.set('./checkbox', {
        hash: 3112645513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var React = require("react");
          /*bundle*/
          const Checkbox = (0, React.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            let cls = `pragmate-checkbox ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "checked", "name", "onChange"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("input", {
              style: {
                display: "none"
              },
              ref: ref,
              type: "checkbox",
              className: "inp-cbx",
              id: name,
              name: name,
              checked: checked ?? state.checked,
              onChange: handleChange,
              ...properties
            }), React.createElement("label", {
              className: "cbx",
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, React.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), React.createElement("span", null, label))));
          });
          exports.Checkbox = Checkbox;
        }
      });

      /**********************
      INTERNAL MODULE: ./form
      **********************/

      ims.set('./form', {
        hash: 278710587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps
            }, props.children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3305850540,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          /*bundle*/
          function Input(props) {
            const input = (0, React.useRef)(null);
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido",
              type: props.type ?? "text"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "pragmate-element-input-error"
              }, errorMessage);
            };
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pragmate-element-input` : "pragmate-element-input";
            cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            ["className", "hasError", "errorMessage", "children", "icon", "label", "password", "loading", "colorSpinner"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.Icon, {
              icon: props.icon
            }), React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " ",
              id: props.id ?? props.name
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label), props.loading && React.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? "var(--primary)"
            }), props.password && (state.type === "password" ? React.createElement(_icons.IconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icons.IconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            })), props.required && React.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)")));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 1097693139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)();
            const onClick = event => {
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ""}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: "radio",
              onChange: onClick
            }), properties.label && _react.default.createElement("label", {
              htmlFor: properties.id
            }, properties.label));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 3581251854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = void 0;
          var React = require("react");
          /*bundle*/
          const Switch = (0, React.forwardRef)((props, ref) => {
            const {
              value,
              checked,
              required,
              name,
              disabled,
              className,
              onChange,
              onClick
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            const handleClick = event => {
              onClick && onClick(event);
            };
            let cls = `pragmate-element-switch ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "disabled", "checked", "name", "required", "onChange", "onClick", "value"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, React.createElement("label", {
              className: "switch"
            }, React.createElement("input", {
              ref: ref,
              type: "checkbox",
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange,
              placeholder: name
            }), React.createElement("span", {
              className: "slider"
            })));
          });
          exports.Switch = Switch;
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 407748015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var React = require("react");
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? '',
              errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
              lengthMessage: 'Cantidad máxima: ',
              emptyMessage: 'Este campo es requerido'
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== '') errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: 'beyond-element-input-error'
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pragmate-element-textarea` : 'pragmate-element-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'errorMessage', 'children', 'label'].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== 'undefined' ? props.value : state.value,
              placeholder: props.placeholder ?? ' '
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && React.createElement("span", {
              className: 'beyond-input__required-label'
            }, "(*)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./checkbox",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button').Button : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiQnV0dG9uIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsImNoaWxkcmVuIiwiaWNvbiIsImxvYWRpbmciLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsImRlZmF1bHQiLCJ1c2VSZWYiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGQiLCJjdXJyZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzIiwiaXNMb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsIlJlYWN0IiwiQ2hlY2tib3giLCJjaGVja2VkIiwibmFtZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduIiwicHJvcCIsIkZyYWdtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiRm9ybSIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVycm9yIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJJY29uQnV0dG9uIiwiUmFkaW8iLCJTd2l0Y2giLCJoYW5kbGVDbGljayIsIlRleHRhcmVhIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi50c3giLCIvdHMvY2hlY2tib3gudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0LnRzeCIsIi90cy9yYWRpby50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFhTyxNQUFNLFdBQVlJLE1BQU0sR0FBRyxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBMkIsQ0FBQ0MsS0FBSyxFQUFFQyxHQUFHLEtBQUk7WUFDcEYsTUFBTTtjQUNMQyxTQUFTO2NBQ1RDLE9BQU87Y0FDUEMsSUFBSTtjQUNKQyxLQUFLO2NBQ0xDLFFBQVE7Y0FDUkMsSUFBSTtjQUNKQyxPQUFPO2NBQ1BDLFFBQVEsR0FBRyxLQUFLO2NBQ2hCQyxPQUFPLEdBQUcsU0FBUztjQUNuQkMsUUFBUSxHQUFHLEtBQUs7Y0FDaEJDLFFBQVEsR0FBRyxLQUFLO2NBQ2hCLEdBQUdDO1lBQVUsQ0FDYixHQUFHYixLQUFLO1lBRVQsSUFBSSxDQUFDQyxHQUFHLEVBQUVBLEdBQUcsR0FBR1IsTUFBQSxDQUFBcUIsT0FBSyxDQUFDQyxNQUFNLEVBQXFCO1lBQ2pELE1BQU1DLGFBQWEsR0FBSUMsS0FBb0MsSUFBVTtjQUNwRSxJQUFJZCxPQUFPLElBQUks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