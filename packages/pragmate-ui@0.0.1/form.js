System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.1/icons", "pragmate-ui@0.0.1/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi001Icons) {
      dependency_2 = _pragmateUi001Icons;
    }, function (_pragmateUi001Spinner) {
      dependency_3 = _pragmateUi001Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.1/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.1/form');
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
        hash: 2389610057,
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
            // const handleClick = event => {
            // 	onClick && onClick(event);
            // };
            let cls = `pragmate-element-switch ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'disabled', 'checked', 'name', 'required', 'onChange', 'onClick', 'value'].forEach(prop => {
              delete properties[prop];
            });
            return _react.default.createElement("span", {
              className: cls,
              ...properties
            }, _react.default.createElement("label", {
              className: 'switch'
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              required: required,
              name: name,
              value: value,
              checked: checked !== undefined ? checked : state.checked,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXNzTmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJSZWFjdCIsIm9uQ2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ0eXBlIiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiZXhwb3J0cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRyZW4iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsImljb24iLCJsb2FkaW5nIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInNwYW5SZXF1aXJlZCIsImNvbnRyb2xJbnB1dCIsIkljb25CdXR0b24iLCJJY29uIiwicGxhY2Vob2xkZXIiLCJTcGlubmVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJhY3RpdmUiLCJSYWRpbyIsIlN3aXRjaCIsInVuZGVmaW5lZCIsIlRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jaGVja2JveC50c3giLCJ0cy9mb3JtLnRzeCIsInRzL2lucHV0LnRzeCIsInRzL3JhZGlvLnRzeCIsInRzL3N3aXRjaC50c3giLCJ0cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19