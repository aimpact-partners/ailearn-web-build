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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlZLEdBQUcsR0FBV1osS0FBSyxDQUFDSyxTQUFTLEdBQUcsR0FBR0wsS0FBSyxDQUFDSyxTQUFTLDRCQUE0QixHQUFHLDJCQUEyQjtZQUNoSE8sR0FBRyxJQUFJWixLQUFLLENBQUNJLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN4Q1EsR0FBRyxJQUFJWixLQUFLLENBQUM0QyxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUU7WUFFckMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM1QixPQUFPLENBQUNDLElBQUksSUFBRztjQUM3RSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixPQUNDQztjQUFLYixTQUFTLEVBQUVPO1lBQUcsR0FDbEJNLDBDQUNDQTtjQUNDakIsR0FBRyxFQUFFbUMsS0FBSztjQUFBLEdBQ052QixVQUFVO2NBQ2RWLElBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUFJO2NBQ2hCRyxRQUFRLEVBQUVJLFlBQVk7Y0FDdEIyQixLQUFLLEVBQUUsT0FBT3JDLEtBQUssQ0FBQ3FDLEtBQUssS0FBSyxXQUFXLEdBQUdyQyxLQUFLLENBQUNxQyxLQUFLLEdBQUc3QixLQUFLLENBQUM2QixLQUFLO2NBQ3JFcUIsV0FBVyxFQUFFMUQsS0FBSyxDQUFDMEQsV0FBVyxJQUFJO1lBQUcsRUFDcEMsRUFDRDFELEtBQUssQ0FBQ2tDLFFBQVEsRUFDZGtCLEtBQUssRUFDTHBELEtBQUssQ0FBQ08sS0FBSyxJQUFJVztjQUFPSyxPQUFPLEVBQUV2QixLQUFLLENBQUNzQjtZQUFFLEdBQUd0QixLQUFLLENBQUNPLEtBQUssQ0FBUyxFQUM5RFAsS0FBSyxDQUFDd0QsUUFBUSxJQUFJdEM7Y0FBTWIsU0FBUyxFQUFDO1lBQThCLFNBQVcsQ0FDMUUsQ0FDRTtVQUVSIiwibmFtZXMiOlsiQnV0dG9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNoZWNrYm94IiwicHJvcHMiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNscyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsIlJlYWN0Iiwic3R5bGUiLCJkaXNwbGF5IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRyZW4iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsImljb24iLCJsb2FkaW5nIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkljb24iLCJwbGFjZWhvbGRlciIsIlNwaW5uZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsImFjdGl2ZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiUmFkaW8iLCJTd2l0Y2giLCJoYW5kbGVDbGljayIsIlRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24udHN4IiwidHMvY2hlY2tib3gudHN4IiwidHMvZm9ybS50c3giLCJ0cy9pbnB1dC50c3giLCJ0cy9yYWRpby50c3giLCJ0cy9zd2l0Y2gudHN4IiwidHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19