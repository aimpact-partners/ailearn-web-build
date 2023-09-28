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
        hash: 1892198874,
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
              className: cls
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
              onChange: handleChange,
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
        hash: 1738327283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = void 0;
          var _react = require("react");
          /*bundle*/
          const Switch = (0, _react.forwardRef)((props, ref) => {
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
            const [state, setState] = (0, _react.useState)({
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
            let cls = `pragmate-element-switch ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'disabled', 'checked', 'name', 'required', 'onChange', 'onClick', 'value'].forEach(prop => {
              delete properties[prop];
            });
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, _react.default.createElement("label", {
              className: 'switch'
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange,
              placeholder: name
            }), _react.default.createElement("span", {
              className: 'slider'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVMsRUFDOURQLEtBQUssQ0FBQ3dELFFBQVEsSUFBSXRDO2NBQU1iLFNBQVMsRUFBQztZQUE4QixTQUFXLENBQzFFLENBQ0U7VUFFUiIsIm5hbWVzIjpbIkJ1dHRvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaGVja2JveCIsInByb3BzIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJSZWFjdCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkcmVuIiwiSW5wdXQiLCJpbnB1dCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJpY29uIiwibG9hZGluZyIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJzcGFuUmVxdWlyZWQiLCJjb250cm9sSW5wdXQiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkljb24iLCJwbGFjZWhvbGRlciIsIlNwaW5uZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsImFjdGl2ZSIsIlJhZGlvIiwiU3dpdGNoIiwiaGFuZGxlQ2xpY2siLCJUZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYnV0dG9uLnRzeCIsInRzL2NoZWNrYm94LnRzeCIsInRzL2Zvcm0udHN4IiwidHMvaW5wdXQudHN4IiwidHMvcmFkaW8udHN4IiwidHMvc3dpdGNoLnRzeCIsInRzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==