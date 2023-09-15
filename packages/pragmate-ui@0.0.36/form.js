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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2357917262,
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
            }, props.label), props.loading && React.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? 'var(--primary)',
              type: "primary",
              active: true
            }), props.password && (state.type === 'password' ? React.createElement(_icons.IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kdWxlIiwicmVxdWlyZSIsIkJ1dHRvbiIsImV4cG9ydHMiLCJSZWFjdCIsIkNoZWNrYm94IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNscyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJfcmVhY3QiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl9zcGlubmVyIiwiSW5wdXQiLCJpbnB1dCIsInVzZVJlZiIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJpY29uIiwibG9hZGluZyIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJJY29uIiwicGxhY2Vob2xkZXIiLCJTcGlubmVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJhY3RpdmUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIlJhZGlvIiwiU3dpdGNoIiwiaGFuZGxlQ2xpY2siLCJUZXh0YXJlYSJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24udHN4IiwiL3RzL2NoZWNrYm94LnRzeCIsIi90cy9mb3JtLnRzeCIsIi90cy9pbnB1dC50c3giLCIvdHMvcmFkaW8udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBRU87VUFBWSxNQUFNQyxNQUFNLEdBQUdGLE9BQU0sQ0FBQ0UsTUFBTTtVQUFDQyxPQUFBLENBQUFELE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNGaEQsSUFBQUUsS0FBQSxHQUFBSCxPQUFBO1VBZU87VUFBVyxNQUFNSSxRQUFRLEdBQXNELElBQUFELEtBQUEsQ0FBQUUsVUFBVSxFQUMvRixDQUFDQyxLQUFZLEVBQUVDLEdBQWdDLEtBQWlCO1lBQy9ELE1BQU07Y0FBRUMsT0FBTztjQUFFQyxJQUFJO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFQyxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHUCxLQUFLO1lBQ3JFLE1BQU0sQ0FBQ1EsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBWixLQUFBLENBQUFhLFFBQVEsRUFBQztjQUFFUixPQUFPLEVBQUUsQ0FBQyxDQUFDQTtZQUFPLENBQUUsQ0FBQztZQUMxRCxNQUFNUyxZQUFZLEdBQUlDLEtBQW9DLElBQVU7Y0FDbkVILFFBQVEsQ0FBQztnQkFBRVAsT0FBTyxFQUFFLENBQUNBO2NBQU8sQ0FBRSxDQUFDO2NBQy9CSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFDRCxJQUFJQyxHQUFHLEdBQVcscUJBQXFCUixTQUFTLEdBQUdBLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDbkVRLEdBQUcsSUFBSVQsUUFBUSxHQUFH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