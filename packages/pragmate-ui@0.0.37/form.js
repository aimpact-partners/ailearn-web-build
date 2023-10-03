System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJDaGVja2JveCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsImV4cG9ydHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl9zcGlubmVyIiwiSW5wdXQiLCJpbnB1dCIsInVzZVJlZiIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJpY29uIiwibG9hZGluZyIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJzcGFuUmVxdWlyZWQiLCJjb250cm9sSW5wdXQiLCJJY29uQnV0dG9uIiwiSWNvbiIsInBsYWNlaG9sZGVyIiwiU3Bpbm5lciIsImNvbG9yIiwiY29sb3JTcGlubmVyIiwiYWN0aXZlIiwiUmFkaW8iLCJTd2l0Y2giLCJ2YXJpYW50Iiwic2l6ZSIsInRpdGxlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZVN3aXRjaCIsImlzSWQiLCJUZXh0YXJlYSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQStCLElBQUFDLEtBQUEsR0FBQUYsTUFBQTtVQU94QjtVQUFXLE1BQU1HLFFBQVEsR0FBdUQsSUFBQUgsTUFBQSxDQUFBSSxVQUFVLEVBQ2hHLENBQUNDLEtBQWEsRUFBRUMsR0FBZ0MsS0FBaUI7WUFDaEUsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUdQLEtBQUs7WUFDckUsTUFBTSxDQUFDUSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUFkLE1BQUEsQ0FBQWUsUUFBUSxFQUFDO2NBQUVSLE9BQU8sRUFBRSxDQUFDLENBQUNBO1lBQU8sQ0FBRSxDQUFDO1lBQzFELE1BQU1TLFlBQVksR0FBSUMsS0FBeUMsSUFBVTtjQUN4RUgsUUFBUSxDQUFDO2dCQUFFUCxPQUFPLEVBQUUsQ0FBQ0E7Y0FBTyxDQUFFLENBQUM7Y0FDL0JJLFFBQVEsSUFBSUEsUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUlDLEdBQUcsR0FBVyxxQkFBcUJSLFNBQVMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUNuRVEsR0FBRyxJQUFJVCxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDbEMsTUFBTVUs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