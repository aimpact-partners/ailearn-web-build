System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
  _export({
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
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Spinner) {
      dependency_3 = _pragmateUi0037Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.37/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/form');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/
      ims.set('./checkbox', {
        hash: 3068273179,
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
            const [value, setValue] = (0, React.useState)(!!checked);
            const handleChange = event => {
              event.stopPropagation();
              setValue(!!checked);
              onChange && onChange(event);
            };
            let cls = `pragmate-checkbox ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "checked", "name", "onChange"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
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
              checked: checked ?? value,
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
            }))), React.createElement("span", null, label)));
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
        hash: 2565310938,
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
              value: props.value ?? '',
              errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
              lengthMessage: 'Cantidad máxima: ',
              emptyMessage: 'Este campo es requerido',
              type: props.type ?? 'text'
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
              if (hasError || input.current.value !== '') errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
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
            let cls = props.className ? `${props.className} pragmate-element-input` : 'pragmate-element-input';
            cls += props.icon || props.loading || props.password || props.required ? ' has-icon' : '';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'colorSpinner'].forEach(prop => {
              delete properties[prop];
            });
            const spanRequired = props.required && React.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)");
            const controlInput = props.password && (state.type === 'password' ? React.createElement(_icons.IconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icons.IconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            }));
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
              value: typeof props.value !== 'undefined' ? props.value : state.value,
              placeholder: props.placeholder ?? ' ',
              id: props.id ?? props.name
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label, " ", spanRequired, ' '), props.loading && React.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? 'var(--primary)',
              type: "primary",
              active: true
            }), controlInput, !props.label || props.required && React.createElement("span", {
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
        hash: 3322157745,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = Switch;
          var _react = require("react");
          /* bundle */
          function Switch(props) {
            const {
              checked,
              onChange,
              variant = 'primary',
              disabled,
              size = 'md',
              className,
              id,
              title,
              required
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(checked);
            const handleChange = event => {
              setIsChecked(event.currentTarget.checked);
              console.log(event);
              onChange && onChange(event);
            };
            let classNameSwitch = `pui-element-switch ${className ? className : ''}`;
            classNameSwitch += disabled ? ' disabled' : '';
            let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
            cls += variant ? ` ${variant}` : '';
            cls += size ? ` ${size}` : '';
            let isId = !id ? `pui-element-switch` : id;
            return _react.default.createElement("div", {
              className: classNameSwitch
            }, _react.default.createElement("input", {
              className: 'pui-element-switch__checkbox',
              id: isId,
              title: title,
              required: required,
              type: 'checkbox',
              disabled: disabled,
              checked: isChecked,
              onChange: handleChange
            }), _react.default.createElement("label", {
              className: cls,
              htmlFor: isId
            }, _react.default.createElement("span", {
              className: `label__btn--slider`
            })));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDeENTLEdBQUcsSUFBSWIsS0FBSyxDQUFDOEMsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBRXJDLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDN0IsT0FBTyxDQUFDQyxJQUFJLElBQUc7Y0FDN0UsT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsT0FDQ0M7Y0FBS2QsU0FBUyxFQUFFUTtZQUFHLEdBQ2xCTSwwQ0FDQ0E7Y0FDQ2xCLEdBQUcsRUFBRW9DLEtBQUs7Y0FBQSxHQUNOdkIsVUFBVTtjQUNkWCxJQUFJLEVBQUVILEtBQUssQ0FBQ0csSUFBSTtjQUNoQkcsUUFBUSxFQUFFSSxZQUFZO2NBQ3RCRixLQUFLLEVBQUUsT0FBT1IsS0FBSyxDQUFDUSxLQUFLLEtBQUssV0FBVyxHQUFHUixLQUFLLENBQUNRLEtBQUssR0FBRzhCLEtBQUssQ0FBQzlCLEtBQUs7Y0FDckV3RCxXQUFXLEVBQUVoRSxLQUFLLENBQUNnRSxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEaEUsS0FBSyxDQUFDbUMsUUFBUSxFQUNkbUIsS0FBSyxFQUNMdEQsS0FBSyxDQUFDTyxLQUFLLElBQUlZO2NBQU9LLE9BQU8sRUFBRXhCLEtBQUssQ0FBQ3VCO1lBQUUsR0FBR3ZCLEtBQUssQ0FBQ08sS0FBSyxDQUFTLEVBQzlEUCxLQUFLLENBQUMwRCxRQUFRLElBQUl2QztjQUFNZCxTQUFTLEVBQUM7WUFBOEIsU0FBVyxDQUMxRSxDQUNFO1VBRVIiLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJSZWFjdCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJleHBvcnRzIiwiRm9ybSIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsIklucHV0IiwiaW5wdXQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJpY29uIiwibG9hZGluZyIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJzcGFuUmVxdWlyZWQiLCJjb250cm9sSW5wdXQiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkljb24iLCJwbGFjZWhvbGRlciIsIlNwaW5uZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsImFjdGl2ZSIsIlJhZGlvIiwiU3dpdGNoIiwidmFyaWFudCIsInNpemUiLCJ0aXRsZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZVN3aXRjaCIsImlzSWQiLCJUZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY2hlY2tib3gudHN4IiwidHMvZm9ybS50c3giLCJ0cy9pbnB1dC50c3giLCJ0cy9yYWRpby50c3giLCJ0cy9zd2l0Y2gudHN4IiwidHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==