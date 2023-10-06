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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 1011760523,
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
            let cls = `pragmate-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls,
              onClick: handleChange
            }, React.createElement("input", {
              style: {
                display: 'none'
              },
              ref: ref,
              type: 'checkbox',
              className: 'inp-cbx',
              id: name,
              name: name,
              checked: checked ?? state.checked,
              ...properties
            }), React.createElement("label", {
              className: 'cbx',
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: '12px',
              height: '9px',
              viewBox: '0 0 12 9'
            }, React.createElement("polyline", {
              points: '1 5 4 8 11 1'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBT087VUFBVyxNQUFNQSxRQUFRLEdBQXVELG9CQUFVLEVBQ2hHLENBQUNDLEtBQWEsRUFBRUMsR0FBZ0MsS0FBaUI7WUFDaEUsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUdQLEtBQUs7WUFDckUsTUFBTSxDQUFDUSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLGtCQUFRLEVBQUM7Y0FBRVAsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7WUFBTyxDQUFFLENBQUM7WUFDMUQsTUFBTVEsWUFBWSxHQUFJQyxLQUF5QyxJQUFVO2NBQ3hFRixRQUFRLENBQUM7Z0JBQUVQLE9BQU8sRUFBRSxDQUFDQTtjQUFPLENBQUUsQ0FBQztjQUMvQkksUUFBUSxJQUFJQSxRQUFRLENBQUNLLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBSUMsR0FBRyxHQUFXLHFCQUFxQlAsU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ25FTyxHQUFHLElBQUlSLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNsQyxNQUFNUyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRWYsS0FBSyxDQUFDO1lBRTNDLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUNnQixPQUFPLENBQUNDLElBQUksSUFBRztjQUMzRCxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixPQUNDQywwQ0FDQ0E7Y0FBS2IsU0FBUyxFQUFFTyxHQUFHO2NBQUVPLE9BQU8sRUFBRVQ7WUFBWSxHQUN6Q1E7Y0FDQ0UsS0FBSyxFQUFFO2dCQUFFQyxPQUFPLEVBQUU7Y0FBTSxDQUFFO2NBQzFCcEIsR0FBRyxFQUFFQSxHQUFHO2NBQ1JxQixJQUFJLEVBQUMsVUFBVTtjQUNmakIsU0FBUyxFQUFDLFNBQVM7Y0FDbkJrQixFQUFFLEVBQUVwQixJQUFJO2NBQ1JBLElBQUksRUFBRUEsSUFBSTtjQUNWRCxPQUFPLEVBQUVBLE9BQU8sSUFBSU0sS0FBSyxDQUFDTixPQUFPO2NBQUEsR0FDN0JXO1lBQVUsRUFDYixFQUNGSztjQUFPYixTQUFTLEVBQUMsS0FBSztjQUFDbUIsT0FBTyxFQUFFckI7WUFBSSxHQUNuQ2Usa0NBQ0NBO2NBQUtPLEtBQUssRUFBQyxNQUFNO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2hEVDtjQUFVVSxNQUFNLEVBQUM7WUFBYyxFQUFZLENBQ3RDLENBQ0EsRUFDUFYsa0NBQU9YLEtBQUssQ0FBUSxDQUNiLENBQ0gsQ0FDSjtVQUVMLENBQUMsQ0FDRDtVQUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERGO1VBR087VUFBVSxTQUFVQyxJQUFJLENBQUM5QixLQUErQjtZQUM5RCxNQUFNO2NBQUUrQixRQUFRO2NBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUdoQyxLQUFLO1lBQ3hDLE1BQU1pQyxZQUFZLEdBQUl0QixLQUFpQyxJQUFVO2NBQ2hFQSxLQUFLLENBQUN1QixjQUFjLEVBQUU7Y0FDdEJ2QixLQUFLLENBQUN3QixlQUFlLEVBQUU7Y0FDdkJuQyxLQUFLLENBQUMrQixRQUFRLENBQUNwQixLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0NPO2NBQU1hLFFBQVEsRUFBRUUsWUFBWTtjQUFBLEdBQU1EO1lBQVMsR0FDekNoQyxLQUFLLENBQUNvQyxRQUFRLENBQ1Q7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkE7VUFFQTtVQUNBO1VBY087VUFBVSxTQUNSQyxLQUFLLENBQUNyQyxLQUFZO1lBQzFCLE1BQU1zQyxLQUFLLEdBQXVDLGdCQUFNLEVBQUMsSUFBSSxDQUFDO1lBUzlELE1BQU0sQ0FBQzlCLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsa0JBQVEsRUFBUTtjQUN6QzhCLEtBQUssRUFBRXZDLEtBQUssQ0FBQ3VDLEtBQUssSUFBSSxFQUFFO2NBQ3hCQyxZQUFZLEVBQUV4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUd4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUcsb0JBQW9CO2NBQzVFQyxhQUFhLEVBQUUsbUJBQW1CO2NBQ2xDQyxZQUFZLEVBQUUseUJBQXlCO2NBQ3ZDcEIsSUFBSSxFQUFFdEIsS0FBSyxDQUFDc0IsSUFBSSxJQUFJO2FBQ3BCLENBQUM7WUFFRixNQUFNWixZQUFZLEdBQUlDLEtBQW9DLElBQVU7Y0FDbkUsSUFBSSxDQUFDLENBQUNYLEtBQUssQ0FBQ00sUUFBUSxJQUFJLE9BQU9OLEtBQUssQ0FBQ00sUUFBUSxLQUFLLFVBQVUsRUFBRU4sS0FBSyxDQUFDTSxRQUFRLENBQUNLLEtBQUssQ0FBQztjQUNuRkYsUUFBUSxDQUFDO2dCQUNSLEdBQUdELEtBQUs7Z0JBQ1JtQyxTQUFTLEVBQUUsS0FBSztnQkFDaEJKLEtBQUssRUFBRTVCLEtBQUssQ0FBQ2lDLE1BQU0sQ0FBQ0w7ZUFDcEIsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNTSxRQUFRLEdBQWNDLFFBQWlCLElBQW1DO2NBQy9FLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ21DLFNBQVMsSUFBSSxDQUFDRyxRQUFRLEVBQUU7Y0FFbkMsSUFBSU4sWUFBWSxHQUFXaEMsS0FBSyxDQUFDa0MsWUFBWTtjQUU3QyxJQUFJSSxRQUFRLElBQUlSLEtBQUssQ0FBQ1MsT0FBTyxDQUFDUixLQUFLLEtBQUssRUFBRSxFQUN6Q0MsWUFBWSxHQUFHeEMsS0FBSyxDQUFDd0MsWUFBWSxHQUFHeEMsS0FBSyxDQUFDd0MsWUFBWSxHQUFHaEMsS0FBSyxDQUFDZ0MsWUFBWTtjQUU1RSxJQUFJeEMsS0FBSyxDQUFDZ0QsR0FBRyxJQUFJQyxVQUFVLENBQUNYLEtBQUssQ0FBQ1MsT0FBTyxDQUFDUixLQUFLLENBQUMsR0FBR1csUUFBUSxDQUFDbEQsS0FBSyxDQUFDZ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZFUixZQUFZLEdBQUd4QyxLQUFLLENBQUN5QyxhQUFhLEdBQUd6QyxLQUFLLENBQUN5QyxhQUFhLEdBQUdqQyxLQUFLLENBQUNpQyxhQUFhLEdBQUcsU0FBU3pDLEtBQUssQ0FBQ2dELEdBQUcsR0FBRzs7Y0FHdkcsT0FBTzlCO2dCQUFNYixTQUFTLEVBQUM7Y0FBOEIsR0FBRW1DLFlBQVksQ0FBUTtZQUM1RSxDQUFDO1lBQ0QsTUFBTVcsVUFBVSxHQUFJeEMsS0FBK0MsSUFBVTtjQUM1RUEsS0FBSyxDQUFDd0IsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1TLE1BQU0sR0FBb0NqQyxLQUFLLENBQUN5QyxhQUFrQztjQUN4RjNDLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFYyxJQUFJLEVBQUVzQixNQUFNLENBQUNTLE9BQU8sQ0FBQy9CO2NBQUksQ0FBRSxDQUFDO1lBQ2xELENBQUM7WUFDRCxNQUFNZ0MsS0FBSyxHQUFrQ1QsUUFBUSxDQUFDN0MsS0FBSyxDQUFDOEMsUUFBUSxDQUFDO1lBQ3JFLElBQUlqQyxVQUFVLEdBQVU7Y0FBRSxHQUFHYjtZQUFLLENBQUU7WUFDcEMsSUFBSVksR0FBRyxHQUFXWixLQUFLLENBQUNLLFNBQVMsR0FBRyxHQUFHTCxLQUFLLENBQUNLLFNBQVMseUJBQXlCLEdBQUcsd0JBQXdCO1lBQzFHTyxHQUFHLElBQUlaLEtBQUssQ0FBQ3VELElBQUksSUFBSXZELEtBQUssQ0FBQ3dELE9BQU8sSUFBSXhELEtBQUssQ0FBQ3lELFFBQVEsSUFBSXpELEtBQUssQ0FBQzBELFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN6RjlDLEdBQUcsSUFBSVosS0FBSyxDQUFDSSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDeENRLEdBQUcsSUFBSVosS0FBSyxDQUFDOEMsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBQ3JDLENBQ0MsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsVUFBVSxFQUNWLFNBQVMsRUFDVCxjQUFjLENBQ2QsQ0FBQzlCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2NBQ2hCLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUNGLE1BQU0wQyxZQUFZLEdBQUczRCxLQUFLLENBQUMwRCxRQUFRLElBQUl4QztjQUFNYixTQUFTLEVBQUM7WUFBZ0MsU0FBVztZQUNsRyxNQUFNdUQsWUFBWSxHQUNqQjVELEtBQUssQ0FBQ3lELFFBQVEsS0FDYmpELEtBQUssQ0FBQ2MsSUFBSSxLQUFLLFVBQVUsR0FDekJKLG9CQUFDMkMsaUJBQVU7Y0FBQzFDLE9BQU8sRUFBRWdDLFVBQVU7Y0FBQSxhQUFZLE1BQU07Y0FBQzlDLFNBQVMsRUFBQyxLQUFLO2NBQUNrRCxJQUFJLEVBQUM7WUFBSyxFQUFHLEdBRS9FckMsb0JBQUMyQyxpQkFBVTtjQUFDMUMsT0FBTyxFQUFFZ0MsVUFBVTtjQUFFOUMsU0FBUyxFQUFDLEtBQUs7Y0FBQSxhQUFXLFVBQVU7Y0FBQ2tELElBQUksRUFBQztZQUFXLEVBQ3RGLENBQUM7WUFDSCxPQUNDckM7Y0FBS2IsU0FBUyxFQUFFTztZQUFHLEdBQ2xCTSwwQ0FDRWxCLEtBQUssQ0FBQ3VELElBQUksSUFBSXJDLG9CQUFDNEMsV0FBSTtjQUFDUCxJQUFJLEVBQUV2RCxLQUFLLENBQUN1RDtZQUFJLEVBQUksRUFDekNyQztjQUNDakIsR0FBRyxFQUFFcUMsS0FBSztjQUFBLEdBQ056QixVQUFVO2NBQ2RWLElBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUFJO2NBQ2hCRyxRQUFRLEVBQUVJLFlBQVk7Y0FDdEJZLElBQUksRUFBRWQsS0FBSyxDQUFDYyxJQUFJO2NBQ2hCaUIsS0FBSyxFQUFFLE9BQU92QyxLQUFLLENBQUN1QyxLQUFLLEtBQUssV0FBVyxHQUFHdkMsS0FBSyxDQUFDdUMsS0FBSyxHQUFHL0IsS0FBSyxDQUFDK0IsS0FBSztjQUNyRXdCLFdBQVcsRUFBRS9ELEtBQUssQ0FBQytELFdBQVcsSUFBSSxHQUFHO2NBQ3JDeEMsRUFBRSxFQUFFdkIsS0FBSyxDQUFDdUIsRUFBRSxJQUFJdkIsS0FBSyxDQUFDRztZQUFJLEVBQ3pCLEVBQ0RILEtBQUssQ0FBQ29DLFFBQVEsRUFDZGtCLEtBQUssRUFDTHRELEtBQUssQ0FBQ08sS0FBSyxJQUNYVztjQUFPTSxPQUFPLEVBQUV4QixLQUFLLENBQUN1QixFQUFFLElBQUl2QixLQUFLLENBQUNHO1lBQUksR0FDcENILEtBQUssQ0FBQ08sS0FBSyxPQUFHb0QsWUFBWSxFQUFFLEdBQUcsQ0FFakMsRUFDQTNELEtBQUssQ0FBQ3dELE9BQU8sSUFBSXRDLG9CQUFDOEMsZ0JBQU87Y0FBQ0MsS0FBSyxFQUFFakUsS0FBSyxDQUFDa0UsWUFBWSxJQUFJLGdCQUFnQjtjQUFFNUMsSUFBSSxFQUFDLFNBQVM7Y0FBQzZDLE1BQU07WUFBQSxFQUFHLEVBQ2pHUCxZQUFZLEVBQ1osQ0FBQzVELEtBQUssQ0FBQ08sS0FBSyxJQUFLUCxLQUFLLENBQUMwRCxRQUFRLElBQUl4QztjQUFNYixTQUFTLEVBQUM7WUFBZ0MsU0FBWSxDQUM5RixDQUNFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckhBO1VBT087VUFBVSxTQUFVK0QsS0FBSyxDQUFDcEUsS0FBWTtZQUM1QyxNQUFNc0MsS0FBSyxHQUF1QyxpQkFBTSxHQUFvQjtZQUU1RSxNQUFNbkIsT0FBTyxHQUFJUixLQUFLLElBQVU7Y0FDL0JBLEtBQUssQ0FBQ3dCLGVBQWUsRUFBRTtjQUN2QkcsS0FBSyxDQUFDUyxPQUFPLENBQUM3QyxPQUFPLEdBQUcsSUFBSTtjQUM1QixJQUFJLENBQUMsQ0FBQ0YsS0FBSyxDQUFDTSxRQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFBUSxDQUFDSyxLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1FLFVBQVUsR0FBVTtjQUFFLEdBQUdiO1lBQUssQ0FBRTtZQUN0QyxPQUFPYSxVQUFVLENBQUNQLFFBQVE7WUFFMUIsTUFBTU0sR0FBRyxHQUFXLDBCQUEwQkMsVUFBVSxDQUFDUixTQUFTLEdBQUdRLFVBQVUsQ0FBQ1IsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUVoRyxPQUNDYTtjQUFPYixTQUFTLEVBQUVPLEdBQUc7Y0FBRU8sT0FBTyxFQUFFQTtZQUFPLEdBQ3RDRDtjQUFPakIsR0FBRyxFQUFFcUMsS0FBSztjQUFBLEdBQU16QixVQUFVO2NBQUVTLElBQUksRUFBQyxPQUFPO2NBQUNoQixRQUFRLEVBQUVhO1lBQU8sRUFBSSxFQUNwRU4sVUFBVSxDQUFDTixLQUFLLElBQUlXLDJDQUFPTCxVQUFVLENBQUNOLEtBQUssQ0FBUSxDQUM3QztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQU9PO1VBQVksU0FBVThELE1BQU0sQ0FBQ3JFLEtBQVk7WUFDL0MsTUFBTTtjQUFFRSxPQUFPO2NBQUVJLFFBQVE7Y0FBRWdFLE9BQU8sR0FBRyxTQUFTO2NBQUVsRSxRQUFRO2NBQUVtRSxJQUFJLEdBQUcsSUFBSTtjQUFFbEUsU0FBUztjQUFFa0IsRUFBRTtjQUFFaUQsS0FBSztjQUFFZDtZQUFRLENBQUUsR0FBRzFELEtBQUs7WUFDL0csTUFBTSxDQUFDeUUsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3hELGNBQUssQ0FBQ3lELFFBQVEsQ0FBQ3pFLE9BQU8sQ0FBQztZQUV6RCxNQUFNUSxZQUFZLEdBQUdDLEtBQUssSUFBRztjQUM1QitELFlBQVksQ0FBQy9ELEtBQUssQ0FBQ3lDLGFBQWEsQ0FBQ2xELE9BQU8sQ0FBQztjQUN6QzBFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEUsS0FBSyxDQUFDO2NBQ2xCTCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFFRCxJQUFJbUUsZUFBZSxHQUFXLHNCQUFzQnpFLFNBQVMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUNoRnlFLGVBQWUsSUFBSTFFLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUU5QyxJQUFJUSxHQUFHLEdBQUc2RCxTQUFTLEdBQUcsa0NBQWtDLEdBQUcsMkJBQTJCO1lBQ3RGN0QsR0FBRyxJQUFJMEQsT0FBTyxHQUFHLElBQUlBLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbkMxRCxHQUFHLElBQUkyRCxJQUFJLEdBQUcsSUFBSUEsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUU3QixJQUFJUSxJQUFJLEdBQUcsQ0FBQ3hELEVBQUUsR0FBRyxvQkFBb0IsR0FBR0EsRUFBRTtZQUMxQyxPQUNDTDtjQUFLYixTQUFTLEVBQUV5RTtZQUFlLEdBQzlCNUQ7Y0FDQ2IsU0FBUyxFQUFDLDhCQUE4QjtjQUN4Q2tCLEVBQUUsRUFBRXdELElBQUk7Y0FDUlAsS0FBSyxFQUFFQSxLQUFLO2NBQ1pkLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnBDLElBQUksRUFBQyxVQUFVO2NBQ2ZsQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJGLE9BQU8sRUFBRXVFLFNBQVM7Y0FDbEJuRSxRQUFRLEVBQUVJO1lBQVksRUFDckIsRUFDRlE7Y0FBT2IsU0FBUyxFQUFFTyxHQUFHO2NBQUVZLE9BQU8sRUFBRXVEO1lBQUksR0FDbkM3RDtjQUFNYixTQUFTLEVBQUU7WUFBb0IsRUFBSSxDQUNsQyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBO1VBYU87VUFBVSxTQUFVMkUsUUFBUSxDQUFDaEYsS0FBWTtZQUMvQyxNQUFNc0MsS0FBSyxHQUFHdEMsS0FBSyxDQUFDQyxHQUFHLElBQUksZ0JBQU0sR0FBRTtZQVVuQyxNQUFNLENBQUNPLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsa0JBQVEsRUFBUTtjQUN6QzhCLEtBQUssRUFBRXZDLEtBQUssQ0FBQ3VDLEtBQUssSUFBSSxFQUFFO2NBQ3hCQyxZQUFZLEVBQUV4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUd4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUcsb0JBQW9CO2NBQzVFQyxhQUFhLEVBQUUsbUJBQW1CO2NBQ2xDQyxZQUFZLEVBQUU7YUFDZCxDQUFDO1lBRUYsTUFBTWhDLFlBQVksR0FBSUMsS0FBdUMsSUFBVTtjQUN0RSxJQUFJLENBQUMsQ0FBQ1gsS0FBSyxDQUFDTSxRQUFRLElBQUksT0FBT04sS0FBSyxDQUFDTSxRQUFRLEtBQUssVUFBVSxFQUFFTixLQUFLLENBQUNNLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDO2NBQ25GRixRQUFRLENBQUM7Z0JBQ1IsR0FBR0QsS0FBSztnQkFDUm1DLFNBQVMsRUFBRSxLQUFLO2dCQUNoQkosS0FBSyxFQUFFNUIsS0FBSyxDQUFDaUMsTUFBTSxDQUFDTDtlQUNwQixDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1NLFFBQVEsR0FBY0MsUUFBaUIsSUFBbUM7Y0FDL0UsSUFBSSxDQUFDdEMsS0FBSyxDQUFDbUMsU0FBUyxJQUFJLENBQUNHLFFBQVEsRUFBRTtjQUVuQyxJQUFJTixZQUFZLEdBQVdoQyxLQUFLLENBQUNrQyxZQUFZO2NBRTdDLElBQUlJLFFBQVEsSUFBSVIsS0FBSyxDQUFDQyxLQUFLLEtBQUssRUFBRSxFQUFFQyxZQUFZLEdBQUd4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUd4QyxLQUFLLENBQUN3QyxZQUFZLEdBQUdoQyxLQUFLLENBQUNnQyxZQUFZO2NBRS9HLElBQUl4QyxLQUFLLENBQUNnRCxHQUFHLElBQUlDLFVBQVUsQ0FBQ1gsS0FBSyxDQUFDQyxLQUFLLENBQUMsR0FBR1csUUFBUSxDQUFDbEQsS0FBSyxDQUFDZ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQy9EUixZQUFZLEdBQUd4QyxLQUFLLENBQUN5QyxhQUFhLEdBQUd6QyxLQUFLLENBQUN5QyxhQUFhLEdBQUdqQyxLQUFLLENBQUNpQyxhQUFhLEdBQUcsU0FBU3pDLEtBQUssQ0FBQ2dELEdBQUcsR0FBRzs7Y0FHdkcsT0FBTzlCO2dCQUFNYixTQUFTLEVBQUM7Y0FBNEIsR0FBRW1DLFlBQVksQ0FBUTtZQUMxRSxDQUFDO1lBRUQsTUFBTWMsS0FBSyxHQUFrQ1QsUUFBUSxDQUFDN0MsS0FBSyxDQUFDOEMsUUFBUSxDQUFDO1lBQ3JFLElBQUlqQyxVQUFVLEdBQVU7Y0FBRSxHQUFHYjtZQUFLLENBQUU7WUFDcEMsSUFBSVksR0FBRyxHQUFXWixLQUFLLENBQUNLLFNBQVMsR0FBRyxHQUFHTCxLQUFLLENBQUNLLFNBQVMsNEJBQTRCLEdBQUcsMkJBQTJCO1lBQ2hITyxHQUFHLElBQUlaLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQ3hDUSxHQUFHLElBQUlaLEtBQUssQ0FBQzhDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUVyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzlCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2NBQzdFLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLE9BQ0NDO2NBQUtiLFNBQVMsRUFBRU87WUFBRyxHQUNsQk0sMENBQ0NBO2NBQ0NqQixHQUFHLEVBQUVxQyxLQUFLO2NBQUEsR0FDTnpCLFVBQVU7Y0FDZFYsSUFBSSxFQUFFSCxLQUFLLENBQUNHLElBQUk7Y0FDaEJHLFFBQVEsRUFBRUksWUFBWTtjQUN0QjZCLEtBQUssRUFBRSxPQUFPdkMsS0FBSyxDQUFDdUMsS0FBSyxLQUFLLFdBQVcsR0FBR3ZDLEtBQUssQ0FBQ3VDLEtBQUssR0FBRy9CLEtBQUssQ0FBQytCLEtBQUs7Y0FDckV3QixXQUFXLEVBQUUvRCxLQUFLLENBQUMrRCxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEL0QsS0FBSyxDQUFDb0MsUUFBUSxFQUNka0IsS0FBSyxFQUNMdEQsS0FBSyxDQUFDTyxLQUFLLElBQUlXO2NBQU9NLE9BQU8sRUFBRXhCLEtBQUssQ0FBQ3VCO1lBQUUsR0FBR3ZCLEtBQUssQ0FBQ08sS0FBSyxDQUFTLEVBQzlEUCxLQUFLLENBQUMwRCxRQUFRLElBQUl4QztjQUFNYixTQUFTLEVBQUM7WUFBOEIsU0FBVyxDQUMxRSxDQUNFO1VBRVIiLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJSZWFjdCIsIm9uQ2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ0eXBlIiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiZXhwb3J0cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRyZW4iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsImljb24iLCJsb2FkaW5nIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInNwYW5SZXF1aXJlZCIsImNvbnRyb2xJbnB1dCIsIkljb25CdXR0b24iLCJJY29uIiwicGxhY2Vob2xkZXIiLCJTcGlubmVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJhY3RpdmUiLCJSYWRpbyIsIlN3aXRjaCIsInZhcmlhbnQiLCJzaXplIiwidGl0bGUiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWVTd2l0Y2giLCJpc0lkIiwiVGV4dGFyZWEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NoZWNrYm94LnRzeCIsInRzL2Zvcm0udHN4IiwidHMvaW5wdXQudHN4IiwidHMvcmFkaW8udHN4IiwidHMvc3dpdGNoLnRzeCIsInRzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=