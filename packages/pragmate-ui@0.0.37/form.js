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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
          var _react = require("react");
          var React = _react;
          /*bundle*/
          const Checkbox = (0, _react.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, _react.useState)({
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
          var _react = require("react");
          var React = _react;
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          /*bundle*/
          function Input(props) {
            const input = (0, _react.useRef)(null);
            const [state, setState] = (0, _react.useState)({
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
          var _react = require("react");
          var React = _react;
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, _react.useRef)();
            const [state, setState] = (0, _react.useState)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJDaGVja2JveCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsImV4cG9ydHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl9zcGlubmVyIiwiSW5wdXQiLCJpbnB1dCIsInVzZVJlZiIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJpY29uIiwibG9hZGluZyIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJzcGFuUmVxdWlyZWQiLCJjb250cm9sSW5wdXQiLCJJY29uQnV0dG9uIiwiSWNvbiIsInBsYWNlaG9sZGVyIiwiU3Bpbm5lciIsImNvbG9yIiwiY29sb3JTcGlubmVyIiwiYWN0aXZlIiwiUmFkaW8iLCJTd2l0Y2giLCJ2YXJpYW50Iiwic2l6ZSIsInRpdGxlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZVN3aXRjaCIsImlzSWQiLCJUZXh0YXJlYSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFBK0IsSUFBQUMsS0FBQSxHQUFBRixNQUFBO1VBT3hCO1VBQVcsTUFBTUcsUUFBUSxHQUF1RCxJQUFBSCxNQUFBLENBQUFJLFVBQVUsRUFDaEcsQ0FBQ0MsS0FBYSxFQUFFQyxHQUFnQyxLQUFpQjtZQUNoRSxNQUFNO2NBQUVDLE9BQU87Y0FBRUMsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLFNBQVM7Y0FBRUMsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBR1AsS0FBSztZQUNyRSxNQUFNLENBQUNRLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQWQsTUFBQSxDQUFBZSxRQUFRLEVBQUM7Y0FBRVIsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7WUFBTyxDQUFFLENBQUM7WUFDMUQsTUFBTVMsWUFBWSxHQUFJQyxLQUF5QyxJQUFVO2NBQ3hFSCxRQUFRLENBQUM7Z0JBQUVQLE9BQU8sRUFBRSxDQUFDQTtjQUFPLENBQUUsQ0FBQztjQUMvQkksUUFBUSxJQUFJQSxRQUFRLENBQUNNLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBSUMsR0FBRyxHQUFXLHFCQUFxQlIsU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ25FUSxHQUFHLElBQUlULFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNsQyxNQUFN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