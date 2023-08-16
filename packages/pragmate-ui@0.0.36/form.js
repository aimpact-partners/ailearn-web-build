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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxDQUFDLENBQUN4QyxPQUFPLENBQUNnQixJQUFJLElBQUc7Y0FDN0UsT0FBT3BCLFVBQVUsQ0FBQ29CLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixPQUNDN0I7Y0FBS1osU0FBUyxFQUFFMkI7WUFBRyxHQUNsQmYsMENBQ0NBO2NBQ0NiLEdBQUcsRUFBRTBELEtBQUs7Y0FBQSxHQUNOcEMsVUFBVTtjQUNkYyxJQUFJLEVBQUVyQyxLQUFLLENBQUNxQyxJQUFJO2NBQ2hCQyxRQUFRLEVBQUVHLFlBQVk7Y0FDdEJtQixLQUFLLEVBQUUsT0FBTzVELEtBQUssQ0FBQzRELEtBQUssS0FBSyxXQUFXLEdBQUc1RCxLQUFLLENBQUM0RCxLQUFLLEdBQUdyQixLQUFLLENBQUNxQixLQUFLO2NBQ3JFaUIsV0FBVyxFQUFFN0UsS0FBSyxDQUFDNkUsV0FBVyxJQUFJO1lBQUcsRUFDcEMsRUFDRDdFLEtBQUssQ0FBQ00sUUFBUSxFQUNkb0UsS0FBSyxFQUNMMUUsS0FBSyxDQUFDSyxLQUFLLElBQUlTO2NBQU9pQyxPQUFPLEVBQUUvQyxLQUFLLENBQUM4QztZQUFFLEdBQUc5QyxLQUFLLENBQUNLLEtBQUssQ0FBUyxFQUM5REwsS0FBSyxDQUFDNEUsUUFBUSxJQUFJOUQ7Y0FBTVosU0FBUyxFQUFDO1lBQThCLFNBQVcsQ0FDMUUsQ0FDRTtVQUVSIiwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwiY2hpbGRyZW4iLCJpY29uIiwibG9hZGluZyIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwiUmVhY3QiLCJ1c2VSZWYiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGQiLCJjdXJyZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzIiwiaXNMb2FkaW5nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJleHBvcnRzIiwiQ2hlY2tib3giLCJjaGVja2VkIiwibmFtZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImFzc2lnbiIsInByb3AiLCJzdHlsZSIsImRpc3BsYXkiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJfaGFzRXJyb3IiLCJ0YXJnZXQiLCJnZXRFcnJvciIsImhhc0Vycm9yIiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsIkljb25CdXR0b24iLCJSYWRpbyIsIlN3aXRjaCIsImhhbmRsZUNsaWNrIiwiVGV4dGFyZWEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2J1dHRvbi50c3giLCJ0cy9jaGVja2JveC50c3giLCJ0cy9mb3JtLnRzeCIsInRzL2lucHV0LnRzeCIsInRzL3JhZGlvLnRzeCIsInRzL3N3aXRjaC50c3giLCJ0cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=