System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.0.36/components", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi0036Components) {
      dependency_1 = _pragmateUi0036Components;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_4 = _pragmateUi0036Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 2299267467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _module = require("pragmate-ui/components");
          /*bundle */
          const Button = _module.Button;
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
        hash: 1178208425,
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
              event.stopPropagation();
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ''}`;
            return _react.default.createElement("label", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: 'radio',
              onChange: onClick
            }), properties.label && _react.default.createElement("span", null, properties.label));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHTCxLQUFLLENBQUNLLFNBQVMsNEJBQTRCLEdBQUcsMkJBQTJCO1lBQ2hITyxHQUFHLElBQUlaLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQ3hDUSxHQUFHLElBQUlaLEtBQUssQ0FBQzRDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUVyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzVCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2NBQzdFLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLE9BQ0NDO2NBQUtiLFNBQVMsRUFBRU87WUFBRyxHQUNsQk0sMENBQ0NBO2NBQ0NqQixHQUFHLEVBQUVtQyxLQUFLO2NBQUEsR0FDTnZCLFVBQVU7Y0FDZFYsSUFBSSxFQUFFSCxLQUFLLENBQUNHLElBQUk7Y0FDaEJHLFFBQVEsRUFBRUksWUFBWTtjQUN0QjJCLEtBQUssRUFBRSxPQUFPckMsS0FBSyxDQUFDcUMsS0FBSyxLQUFLLFdBQVcsR0FBR3JDLEtBQUssQ0FBQ3FDLEtBQUssR0FBRzdCLEtBQUssQ0FBQzZCLEtBQUs7Y0FDckVxQixXQUFXLEVBQUUxRCxLQUFLLENBQUMwRCxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEMUQsS0FBSyxDQUFDa0MsUUFBUSxFQUNka0IsS0FBSyxFQUNMcEQsS0FBSyxDQUFDTyxLQUFLLElBQUlXO2NBQU9LLE9BQU8sRUFBRXZCLEtBQUssQ0FBQ3NCO1lBQUUsR0FBR3RCLEtBQUssQ0FBQ08sS0FBSyxDQUFTLEVBQzlEUCxLQUFLLENBQUN3RCxRQUFRLElBQUl0QztjQUFNYixTQUFTLEVBQUM7WUFBOEIsU0FBVyxDQUMxRSxDQUNFO1VBRVIiLCJuYW1lcyI6WyJCdXR0b24iLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2hlY2tib3giLCJwcm9wcyIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiY2xzIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiUmVhY3QiLCJzdHlsZSIsImRpc3BsYXkiLCJ0eXBlIiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiRm9ybSIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZHJlbiIsIklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJfaGFzRXJyb3IiLCJ0YXJnZXQiLCJnZXRFcnJvciIsImhhc0Vycm9yIiwiY3VycmVudCIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVycm9yIiwiaWNvbiIsImxvYWRpbmciLCJwYXNzd29yZCIsInJlcXVpcmVkIiwiSWNvbiIsInBsYWNlaG9sZGVyIiwiU3Bpbm5lciIsImNvbG9yIiwiY29sb3JTcGlubmVyIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJSYWRpbyIsIlN3aXRjaCIsImhhbmRsZUNsaWNrIiwiVGV4dGFyZWEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2J1dHRvbi50c3giLCJ0cy9jaGVja2JveC50c3giLCJ0cy9mb3JtLnRzeCIsInRzL2lucHV0LnRzeCIsInRzL3JhZGlvLnRzeCIsInRzL3N3aXRjaC50c3giLCJ0cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=