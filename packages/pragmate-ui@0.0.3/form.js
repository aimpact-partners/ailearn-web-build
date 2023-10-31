System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_pragmateUi003Spinner) {
      dependency_3 = _pragmateUi003Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/form');
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
          var _react = require("react");
          var React = _react;
          /*bundle*/
          const Checkbox = exports.Checkbox = (0, _react.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [value, setValue] = (0, _react.useState)(!!checked);
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

      /**********************************
      INTERNAL MODULE: ./input/class-list
      **********************************/

      ims.set('./input/class-list', {
        hash: 3929296419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.listClassName = void 0;
          const listClassName = exports.listClassName = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'floating', 'label', 'password', 'loading', 'colorSpinner'];
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 4275197622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var _react = require("react");
          const InputContext = exports.InputContext = _react.default.createContext({});
          const useInputContext = () => _react.default.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./input/get-error
      *********************************/

      ims.set('./input/get-error', {
        hash: 2901727103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getError = getError;
          var _react = require("react");
          function getError(state, inputRef, props) {
            const {
              hasError,
              max,
              lengthMessage,
              errorMessage
            } = props;
            if (!state._hasError && !hasError) return null;
            let messageError = state.emptyMessage;
            if (hasError || inputRef.current.value !== '') {
              messageError = errorMessage ? errorMessage : state.errorMessage;
            }
            if (max && parseFloat(inputRef.current.value) > parseInt(max)) {
              messageError = lengthMessage ? lengthMessage : state.lengthMessage + ` (max ${props.max})`;
            }
            return _react.default.createElement("span", {
              className: "pui-element-input-error"
            }, errorMessage);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 1180496239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _classList = require("./class-list");
          var _context = require("./context");
          var _renderingProps = require("./rendering-props");
          /*bundle*/
          function Input(props) {
            const input = (0, _react.useRef)(null);
            const {
              value,
              errorMessage,
              floating,
              hasError,
              disabled,
              icon,
              className,
              password,
              required,
              loading,
              children,
              id,
              name,
              placeholder
            } = props;
            const [state, setState] = (0, _react.useState)({
              value: value ?? '',
              errorMessage: errorMessage ?? 'Formato incorrecto',
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
            let properties = {
              ...props
            };
            let cls = className ? `${className} pui-element-input` : 'pui-element-input';
            cls += icon || loading || password || required ? ' has-icon' : '';
            cls += disabled ? ' disabled' : '';
            cls += hasError ? ' error' : '';
            cls += floating ? ' floating--label' : '';
            _classList.listClassName.forEach(prop => {
              delete properties[prop];
            });
            const listValue = {
              state,
              props,
              setState,
              input
            };
            const isValue = typeof value !== 'undefined' ? value : state.value;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: listValue
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              type: state.type,
              value: isValue,
              placeholder: placeholder ?? ' ',
              id: id ?? name
            }), _react.default.createElement(_renderingProps.RenderingProps, null), children));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/label
      *****************************/

      ims.set('./input/label', {
        hash: 2254490969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("./context");
          function Label() {
            const {
              props
            } = (0, _context.useInputContext)();
            const {
              required,
              label,
              id,
              name
            } = props;
            const spanRequired = required && _react.default.createElement("span", {
              className: "pui-input__required-label"
            }, "(*)");
            const showLabel = label && _react.default.createElement("label", {
              htmlFor: id ?? name
            }, label, " ", spanRequired, ' ');
            return _react.default.createElement(_react.default.Fragment, null, showLabel);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/props-rendering
      ***************************************/

      ims.set('./input/props-rendering', {
        hash: 1192986606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PropsRendering = PropsRendering;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _getError = require("./get-error");
          function PropsRendering() {
            const {
              state,
              props,
              setState,
              input
            } = (0, _context.useInputContext)();
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const spanRequired = props.required && _react.default.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)");
            const controlInput = props.password && (state.type === 'password' ? _react.default.createElement(_icons.IconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : _react.default.createElement(_icons.IconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            }));
            const isLabel = props.label && _react.default.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label, " ", spanRequired, ' ');
            const isIcon = props.icon && _react.default.createElement(_icons.Icon, {
              icon: props.icon
            });
            const isLoading = props.loading && _react.default.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? 'var(--primary)',
              type: "primary",
              active: true
            });
            const isRequiredWidthLabel = !props.label && props.required && _react.default.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)");
            const error = (0, _getError.getError)(state, props.hasError, input);
            return _react.default.createElement(_react.default.Fragment, null, isIcon, isLabel, isLoading, controlInput, isRequiredWidthLabel, error);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/rendering-props
      ***************************************/

      ims.set('./input/rendering-props', {
        hash: 4168891464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RenderingProps = RenderingProps;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _getError = require("./get-error");
          var _label = require("./label");
          function RenderingProps() {
            const {
              state,
              props,
              setState,
              input
            } = (0, _context.useInputContext)();
            const {
              password,
              required,
              label,
              icon,
              hasError,
              loading
            } = props;
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const iconButtonAttrs = {
              className: 'eye',
              onClick: changeType,
              'data-type': state.type === 'password' ? 'text' : 'password',
              icon: state.type === 'password' ? 'eye' : 'eye-slash'
            };
            const handleClick = () => {
              input.current.focus();
            };
            const defaultIcon = !icon ? 'user' : icon;
            const showIcon = state.type === 'date' ? _react.default.createElement(_icons.IconButton, {
              onClick: handleClick,
              icon: defaultIcon
            }) : icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            });
            const controlInput = password && _react.default.createElement(_icons.IconButton, {
              ...iconButtonAttrs
            });
            const showLoading = loading && _react.default.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? 'var(--primary)',
              type: "primary",
              active: true
            });
            const showRequiredWidthLabel = !label && required && _react.default.createElement("span", {
              className: "pui-input__required-label"
            }, "(*)");
            const error = (0, _getError.getError)(state, hasError, input);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_label.Label, null), showLoading, controlInput, showIcon, showRequiredWidthLabel, error);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./input/type
      ****************************/

      ims.set('./input/type', {
        hash: 4265042366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
        hash: 882731919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
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
              return _react.default.createElement("span", {
                className: "pui-element-input-error"
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
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== 'undefined' ? props.value : state.value,
              placeholder: props.placeholder ?? ' '
            }), props.children, error, props.label && _react.default.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && _react.default.createElement("span", {
              className: "pui-input__required-label"
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
        "im": "./input/index",
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
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input/index').Input : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJDaGVja2JveCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xzIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHQiLCJjaGlsZHJlbiIsImxpc3RDbGFzc05hbWUiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsImdldEVycm9yIiwic3RhdGUiLCJpbnB1dFJlZiIsImhhc0Vycm9yIiwibWF4IiwibGVuZ3RoTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsIl9oYXNFcnJvciIsIm1lc3NhZ2VFcnJvciIsImVtcHR5TWVzc2FnZSIsImN1cnJlbnQiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJfY2xhc3NMaXN0IiwiX2NvbnRleHQiLCJfcmVuZGVyaW5nUHJvcHMiLCJJbnB1dCIsImlucHV0IiwidXNlUmVmIiwiZmxvYXRpbmciLCJpY29uIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsImxvYWRpbmciLCJwbGFjZWhvbGRlciIsInNldFN0YXRlIiwidGFyZ2V0IiwibGlzdFZhbHVlIiwiaXNWYWx1ZSIsIlByb3ZpZGVyIiwiUmVuZGVyaW5nUHJvcHMiLCJMYWJlbCIsInNwYW5SZXF1aXJlZCIsInNob3dMYWJlbCIsIkZyYWdtZW50IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfZ2V0RXJyb3IiLCJQcm9wc1JlbmRlcmluZyIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnRyb2xJbnB1dCIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiaXNMYWJlbCIsImlzSWNvbiIsIkljb24iLCJpc0xvYWRpbmciLCJTcGlubmVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJhY3RpdmUiLCJpc1JlcXVpcmVkV2lkdGhMYWJlbCIsImVycm9yIiwiX2xhYmVsIiwiaWNvbkJ1dHRvbkF0dHJzIiwiaGFuZGxlQ2xpY2siLCJmb2N1cyIsImRlZmF1bHRJY29uIiwic2hvd0ljb24iLCJzaG93TG9hZGluZyIsInNob3dSZXF1aXJlZFdpZHRoTGFiZWwiLCJkZWZpbmVQcm9wZXJ0eSIsIlJhZGlvIiwiU3dpdGNoIiwidmFyaWFudCIsInNpemUiLCJ0aXRsZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWVTd2l0Y2giLCJpc0lkIiwiVGV4dGFyZWEiXSwic291cmNlcyI6WyIvdHMvY2hlY2tib3gudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NsYXNzLWxpc3QudHMiLCIvdHMvaW5wdXQvY29udGV4dC50cyIsIi90cy9pbnB1dC9nZXQtZXJyb3IudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9sYWJlbC50c3giLCIvdHMvaW5wdXQvcHJvcHMtcmVuZGVyaW5nLnRzeCIsIi90cy9pbnB1dC9yZW5kZXJpbmctcHJvcHMudHN4IiwiL3R5cGUudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQStCLElBQUFDLEtBQUEsR0FBQUYsTUFBQTtVQVd4QjtVQUFXLE1BQU1HLFFBQVEsR0FBQUMsT0FBQSxDQUFBRCxRQUFBLEdBRTVCLElBQUFILE1BQUEsQ0FBQUssVUFBVSxFQUNiLENBQUNDLEtBQWEsRUFBRUMsR0FBZ0MsS0FBaUI7WUFDaEUsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUdQLEtBQUs7WUFDckUsTUFBTSxDQUFDUSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUFmLE1BQUEsQ0FBQWdCLFFBQVEsRUFBVSxDQUFDLENBQUNSLE9BQU8sQ0FBQztZQUN0RCxNQUFNUyxZQUFZLEdBQUlDLEtBQTBDLElBQVU7Y0FDekVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCSixRQUFRLENBQUMsQ0FBQyxDQUFDUCxPQUFPLENBQUM7Y0FDbkJJLFFBQVEsSUFBSUEsUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUlFLEdBQUcsR0FBVyxxQkFBcUJULFNBQVMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUNuRVMsR0FBRyxJQUFJVixRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDbEMsTUFBTVcsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVqQixLQUFLLENBQUM7WUFFbkQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQ2tCLE9BQU8sQ0FBRUMsSUFBWSxJQUFVO2NBQzNFLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLE9BQ0N2QixLQUFBLENBQUF3QixhQUFBO2NBQUtmLFNBQVMsRUFBRVM7WUFBRyxHQUNsQmxCLEtBQUEsQ0FBQXdCLGFBQUE7Y0FDQ0MsS0FBSyxFQUFFO2dCQUFFQyxPQUFPLEVBQUU7Y0FBTSxDQUFFO2NBQzFCckIsR0FBRyxFQUFFQSxHQUFHO2NBQ1JzQixJQUFJLEVBQUMsVUFBVTtjQUNmbEIsU0FBUyxFQUFDLFNBQVM7Y0FDbkJtQixFQUFFLEVBQUVyQixJQUFJO2NBQ1JBLElBQUksRUFBRUEsSUFBSTtjQUNWRCxPQUFPLEVBQUVBLE9BQU8sSUFBSU0sS0FBSztjQUN6QkYsUUFBUSxFQUFFSyxZQUFZO2NBQUEsR0FDbEJJO1lBQVUsRUFDYixFQUNGbkIsS0FBQSxDQUFBd0IsYUFBQTtjQUFPZixTQUFTLEVBQUMsS0FBSztjQUFDb0IsT0FBTyxFQUFFdEI7WUFBSSxHQUNuQ1AsS0FBQSxDQUFBd0IsYUFBQSxlQUNDeEIsS0FBQSxDQUFBd0IsYUFBQTtjQUFLTSxLQUFLLEVBQUMsTUFBTTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNoRGhDLEtBQUEsQ0FBQXdCLGFBQUE7Y0FBVVMsTUFBTSxFQUFDO1lBQWMsRUFBWSxDQUN0QyxDQUNBLEVBQ1BqQyxLQUFBLENBQUF3QixhQUFBLGVBQU9iLEtBQUssQ0FBUSxDQUNiLENBQ0g7VUFFUixDQUFDLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERELElBQUFiLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsU0FBVW1DLElBQUlBLENBQUM5QixLQUErQjtZQUM5RCxNQUFNO2NBQUUrQixRQUFRO2NBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUdoQyxLQUFLO1lBQ3hDLE1BQU1pQyxZQUFZLEdBQUlyQixLQUFpQyxJQUFVO2NBQ2hFQSxLQUFLLENBQUNzQixjQUFjLEVBQUU7Y0FDdEJ0QixLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QmIsS0FBSyxDQUFDK0IsUUFBUSxDQUFDbkIsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFFRCxPQUNDbEIsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBO2NBQU1XLFFBQVEsRUFBRUUsWUFBWTtjQUFBLEdBQU1EO1lBQVMsR0FDekNoQyxLQUFLLENBQUNvQyxRQUFRLENBQ1Q7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQk8sTUFBTUMsYUFBYSxHQUFBdkMsT0FBQSxDQUFBdUMsYUFBQSxHQUFHLENBQzVCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxFQUNULGNBQWMsQ0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYRCxJQUFBM0MsTUFBQSxHQUFBQyxPQUFBO1VBa0JPLE1BQU0yQyxZQUFZLEdBQUF4QyxPQUFBLENBQUF3QyxZQUFBLEdBQUc1QyxNQUFBLENBQUF5QyxPQUFLLENBQUNJLGFBQWEsQ0FBQyxFQUF3QixDQUFDO1VBQ2xFLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNOUMsTUFBQSxDQUFBeUMsT0FBSyxDQUFDTSxVQUFVLENBQUNILFlBQVksQ0FBQztVQUFDeEMsT0FBQSxDQUFBMEMsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CcEUsSUFBQTlDLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVUrQyxRQUFRQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTVDLEtBQUs7WUFDOUMsTUFBTTtjQUFDNkMsUUFBUTtjQUFFQyxHQUFHO2NBQUVDLGFBQWE7Y0FBRUM7WUFBWSxDQUFDLEdBQUdoRCxLQUFLO1lBQzFELElBQUksQ0FBQzJDLEtBQUssQ0FBQ00sU0FBUyxJQUFJLENBQUNKLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFOUMsSUFBSUssWUFBWSxHQUFXUCxLQUFLLENBQUNRLFlBQVk7WUFFN0MsSUFBSU4sUUFBUSxJQUFJRCxRQUFRLENBQUNRLE9BQU8sQ0FBQzVDLEtBQUssS0FBSyxFQUFFLEVBQUU7Y0FDOUMwQyxZQUFZLEdBQUdGLFlBQVksR0FBR0EsWUFBWSxHQUFHTCxLQUFLLENBQUNLLFlBQVk7O1lBR2hFLElBQUlGLEdBQUcsSUFBSU8sVUFBVSxDQUFDVCxRQUFRLENBQUNRLE9BQU8sQ0FBQzVDLEtBQUssQ0FBQyxHQUFHOEMsUUFBUSxDQUFDUixHQUFHLENBQUMsRUFBRTtjQUM5REksWUFBWSxHQUFHSCxhQUFhLEdBQUdBLGFBQWEsR0FBR0osS0FBSyxDQUFDSSxhQUFhLEdBQUcsU0FBUy9DLEtBQUssQ0FBQzhDLEdBQUcsR0FBRzs7WUFHM0YsT0FBT3BELE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFNZixTQUFTLEVBQUM7WUFBeUIsR0FBRTJDLFlBQVksQ0FBUTtVQUN2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXRELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE0RCxVQUFBLEdBQUE1RCxPQUFBO1VBRUEsSUFBQTZELFFBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsZUFBQSxHQUFBOUQsT0FBQTtVQUVPO1VBQVUsU0FDUitELEtBQUtBLENBQUMxRCxLQUFhO1lBQzNCLE1BQU0yRCxLQUFLLEdBQXVDLElBQUFqRSxNQUFBLENBQUFrRSxNQUFNLEVBQUMsSUFBSSxDQUFDO1lBRTlELE1BQU07Y0FDTHBELEtBQUs7Y0FDTHdDLFlBQVk7Y0FDWmEsUUFBUTtjQUNSaEIsUUFBUTtjQUNSekMsUUFBUTtjQUNSMEQsSUFBSTtjQUNKekQsU0FBUztjQUNUMEQsUUFBUTtjQUNSQyxRQUFRO2NBQ1JDLE9BQU87Y0FDUDdCLFFBQVE7Y0FDUlosRUFBRTtjQUNGckIsSUFBSTtjQUNKK0Q7WUFBVyxDQUNYLEdBQUdsRSxLQUFLO1lBRVQsTUFBTSxDQUFDMkMsS0FBSyxFQUFFd0IsUUFBUSxDQUFDLEdBQUcsSUFBQXpFLE1BQUEsQ0FBQWdCLFFBQVEsRUFBYTtjQUM5Q0YsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRTtjQUNsQndDLFlBQVksRUFBRUEsWUFBWSxJQUFJLG9CQUFvQjtjQUNsREQsYUFBYSxFQUFFLG1CQUFtQjtjQUNsQ0ksWUFBWSxFQUFFLHlCQUF5QjtjQUN2QzVCLElBQUksRUFBRXZCLEtBQUssQ0FBQ3VCLElBQUksSUFBSTthQUNwQixDQUFDO1lBRUYsTUFBTVosWUFBWSxHQUFJQyxLQUFvQyxJQUFVO2NBQ25FLElBQUksQ0FBQyxDQUFDWixLQUFLLENBQUNNLFFBQVEsSUFBSSxPQUFPTixLQUFLLENBQUNNLFFBQVEsS0FBSyxVQUFVLEVBQUVOLEtBQUssQ0FBQ00sUUFBUSxDQUFDTSxLQUFLLENBQUM7Y0FDbkZ1RCxRQUFRLENBQUM7Z0JBQ1IsR0FBR3hCLEtBQUs7Z0JBQ1JNLFNBQVMsRUFBRSxLQUFLO2dCQUNoQnpDLEtBQUssRUFBRUksS0FBSyxDQUFDd0QsTUFBTSxDQUFDNUQ7ZUFDcEIsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJTyxVQUFVLEdBQVc7Y0FBQyxHQUFHZjtZQUFLLENBQUM7WUFDbkMsSUFBSWMsR0FBRyxHQUFXVCxTQUFTLEdBQUcsR0FBR0EsU0FBUyxvQkFBb0IsR0FBRyxtQkFBbUI7WUFDcEZTLEdBQUcsSUFBSWdELElBQUksSUFBSUcsT0FBTyxJQUFJRixRQUFRLElBQUlDLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNqRWxELEdBQUcsSUFBSVYsUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQ2xDVSxHQUFHLElBQUkrQixRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUU7WUFDL0IvQixHQUFHLElBQUkrQyxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsRUFBRTtZQUV6Q04sVUFBQSxDQUFBbEIsYUFBYSxDQUFDbkIsT0FBTyxDQUFDQyxJQUFJLElBQUc7Y0FDNUIsT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsTUFBTWtELFNBQVMsR0FBRztjQUFDMUIsS0FBSztjQUFFM0MsS0FBSztjQUFFbUUsUUFBUTtjQUFFUjtZQUFLLENBQUM7WUFDakQsTUFBTVcsT0FBTyxHQUFHLE9BQU85RCxLQUFLLEtBQUssV0FBVyxHQUFHQSxLQUFLLEdBQUdtQyxLQUFLLENBQUNuQyxLQUFLO1lBQ2xFLE9BQ0NkLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxDQUFDb0MsUUFBQSxDQUFBbEIsWUFBWSxDQUFDaUMsUUFBUTtjQUFDL0QsS0FBSyxFQUFFNkQ7WUFBUyxHQUN0QzNFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFLZixTQUFTLEVBQUVTO1lBQUcsR0FDbEJwQixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FDQ25CLEdBQUcsRUFBRTBELEtBQUs7Y0FBQSxHQUNONUMsVUFBVTtjQUNkWixJQUFJLEVBQUVBLElBQUk7Y0FDVkcsUUFBUSxFQUFFSyxZQUFZO2NBQ3RCWSxJQUFJLEVBQUVvQixLQUFLLENBQUNwQixJQUFJO2NBQ2hCZixLQUFLLEVBQUU4RCxPQUFPO2NBQ2RKLFdBQVcsRUFBRUEsV0FBVyxJQUFJLEdBQUc7Y0FDL0IxQyxFQUFFLEVBQUVBLEVBQUUsSUFBSXJCO1lBQUksRUFDYixFQUNGVCxNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUEsQ0FBQ3FDLGVBQUEsQ0FBQWUsY0FBYyxPQUFHLEVBQ2pCcEMsUUFBUSxDQUNKLENBQ2lCO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVFQSxJQUFBMUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZELFFBQUEsR0FBQTdELE9BQUE7VUFFTSxTQUFVOEUsS0FBS0EsQ0FBQTtZQUNwQixNQUFNO2NBQUN6RTtZQUFLLENBQUMsR0FBRyxJQUFBd0QsUUFBQSxDQUFBaEIsZUFBZSxHQUFFO1lBQ2pDLE1BQU07Y0FBQ3dCLFFBQVE7Y0FBRXpELEtBQUs7Y0FBRWlCLEVBQUU7Y0FBRXJCO1lBQUksQ0FBQyxHQUFHSCxLQUFLO1lBRXpDLE1BQU0wRSxZQUFZLEdBQUdWLFFBQVEsSUFBSXRFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFNZixTQUFTLEVBQUM7WUFBMkIsU0FBVztZQUN2RixNQUFNc0UsU0FBUyxHQUFHcEUsS0FBSyxJQUN0QmIsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBO2NBQU9LLE9BQU8sRUFBRUQsRUFBRSxJQUFJckI7WUFBSSxHQUN4QkksS0FBSyxFLEtBQUdtRSxZQUFZLEVBQUUsR0FBRyxDQUUzQjtZQUNELE9BQU9oRixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUEsQ0FBQTFCLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQXlDLFFBQUEsUUFBR0QsU0FBUyxDQUFJO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUFqRixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkQsUUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFFQSxJQUFBb0YsU0FBQSxHQUFBcEYsT0FBQTtVQUVNLFNBQVVxRixjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBQ3JDLEtBQUs7Y0FBRTNDLEtBQUs7Y0FBRW1FLFFBQVE7Y0FBRVI7WUFBSyxDQUFDLEdBQUcsSUFBQUgsUUFBQSxDQUFBaEIsZUFBZSxHQUFFO1lBRXpELE1BQU15QyxVQUFVLEdBQUlyRSxLQUErQyxJQUFVO2NBQzVFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNdUQsTUFBTSxHQUFvQ3hELEtBQUssQ0FBQ3NFLGFBQWtDO2NBQ3hGZixRQUFRLENBQUM7Z0JBQUMsR0FBR3hCLEtBQUs7Z0JBQUVwQixJQUFJLEVBQUU2QyxNQUFNLENBQUNlLE9BQU8sQ0FBQzVEO2NBQUksQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFRCxNQUFNbUQsWUFBWSxHQUFHMUUsS0FBSyxDQUFDZ0UsUUFBUSxJQUFJdEUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBO2NBQU1mLFNBQVMsRUFBQztZQUFnQyxTQUFXO1lBRWxHLE1BQU0rRSxZQUFZLEdBQ2pCcEYsS0FBSyxDQUFDK0QsUUFBUSxLQUNicEIsS0FBSyxDQUFDcEIsSUFBSSxLQUFLLFVBQVUsR0FDekI3QixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUEsQ0FBQ3lELE1BQUEsQ0FBQVEsVUFBVTtjQUFDQyxPQUFPLEVBQUVMLFVBQVU7Y0FBQSxhQUFZLE1BQU07Y0FBQzVFLFNBQVMsRUFBQyxLQUFLO2NBQUN5RCxJQUFJLEVBQUM7WUFBSyxFQUFHLEdBRS9FcEUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUN5RCxNQUFBLENBQUFRLFVBQVU7Y0FBQ0MsT0FBTyxFQUFFTCxVQUFVO2NBQUU1RSxTQUFTLEVBQUMsS0FBSztjQUFBLGFBQVcsVUFBVTtjQUFDeUQsSUFBSSxFQUFDO1lBQVcsRUFDdEYsQ0FBQztZQUVILE1BQU15QixPQUFPLEdBQUd2RixLQUFLLENBQUNPLEtBQUssSUFDMUJiLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFPSyxPQUFPLEVBQUV6QixLQUFLLENBQUN3QixFQUFFLElBQUl4QixLQUFLLENBQUNHO1lBQUksR0FDcENILEtBQUssQ0FBQ08sS0FBSyxFLEtBQUdtRSxZQUFZLEVBQUUsR0FBRyxDQUVqQztZQUVELE1BQU1jLE1BQU0sR0FBR3hGLEtBQUssQ0FBQzhELElBQUksSUFBSXBFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxDQUFDeUQsTUFBQSxDQUFBWSxJQUFJO2NBQUMzQixJQUFJLEVBQUU5RCxLQUFLLENBQUM4RDtZQUFJLEVBQUk7WUFDdkQsTUFBTTRCLFNBQVMsR0FBRzFGLEtBQUssQ0FBQ2lFLE9BQU8sSUFBSXZFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxDQUFDMEQsUUFBQSxDQUFBYSxPQUFPO2NBQUNDLEtBQUssRUFBRTVGLEtBQUssQ0FBQzZGLFlBQVksSUFBSSxnQkFBZ0I7Y0FBRXRFLElBQUksRUFBQyxTQUFTO2NBQUN1RSxNQUFNO1lBQUEsRUFBRztZQUVuSCxNQUFNQyxvQkFBb0IsR0FBRyxDQUFDL0YsS0FBSyxDQUFDTyxLQUFLLElBQUlQLEtBQUssQ0FBQ2dFLFFBQVEsSUFDMUR0RSxNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBTWYsU0FBUyxFQUFDO1lBQWdDLFNBQ2hEO1lBRUQsTUFBTTJGLEtBQUssR0FBa0MsSUFBQWpCLFNBQUEsQ0FBQXJDLFFBQVEsRUFBQ0MsS0FBSyxFQUFFM0MsS0FBSyxDQUFDNkMsUUFBUSxFQUFFYyxLQUFLLENBQUM7WUFDbkYsT0FDQ2pFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxDQUFBMUIsTUFBQSxDQUFBeUMsT0FBQSxDQUFBeUMsUUFBQSxRQUNFWSxNQUFNLEVBQ05ELE9BQU8sRUFDUEcsU0FBUyxFQUNUTixZQUFZLEVBQ1pXLG9CQUFvQixFQUNwQkMsS0FBSyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUF0RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkQsUUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFFQSxJQUFBb0YsU0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBRU0sU0FBVTZFLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFDN0IsS0FBSztjQUFFM0MsS0FBSztjQUFFbUUsUUFBUTtjQUFFUjtZQUFLLENBQUMsR0FBRyxJQUFBSCxRQUFBLENBQUFoQixlQUFlLEdBQUU7WUFDekQsTUFBTTtjQUFDdUIsUUFBUTtjQUFFQyxRQUFRO2NBQUV6RCxLQUFLO2NBQUV1RCxJQUFJO2NBQUVqQixRQUFRO2NBQUVvQjtZQUFPLENBQUMsR0FBR2pFLEtBQUs7WUFFbEUsTUFBTWlGLFVBQVUsR0FBSXJFLEtBQStDLElBQVU7Y0FDNUVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU11RCxNQUFNLEdBQW9DeEQsS0FBSyxDQUFDc0UsYUFBa0M7Y0FDeEZmLFFBQVEsQ0FBQztnQkFBQyxHQUFHeEIsS0FBSztnQkFBRXBCLElBQUksRUFBRTZDLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDNUQ7Y0FBSSxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELE1BQU0yRSxlQUFlLEdBQUc7Y0FDdkI3RixTQUFTLEVBQUUsS0FBSztjQUNoQmlGLE9BQU8sRUFBRUwsVUFBVTtjQUNuQixXQUFXLEVBQUV0QyxLQUFLLENBQUNwQixJQUFJLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVO2NBQzVEdUMsSUFBSSxFQUFFbkIsS0FBSyxDQUFDcEIsSUFBSSxLQUFLLFVBQVUsR0FBRyxLQUFLLEdBQUc7YUFDMUM7WUFDRCxNQUFNNEUsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJ4QyxLQUFLLENBQUNQLE9BQU8sQ0FBQ2dELEtBQUssRUFBRTtZQUN0QixDQUFDO1lBRUQsTUFBTUMsV0FBVyxHQUFHLENBQUN2QyxJQUFJLEdBQUcsTUFBTSxHQUFHQSxJQUFJO1lBQ3pDLE1BQU13QyxRQUFRLEdBQ2IzRCxLQUFLLENBQUNwQixJQUFJLEtBQUssTUFBTSxHQUFHN0IsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUN5RCxNQUFBLENBQUFRLFVBQVU7Y0FBQ0MsT0FBTyxFQUFFYSxXQUFXO2NBQUVyQyxJQUFJLEVBQUV1QztZQUFXLEVBQUksR0FBR3ZDLElBQUksSUFBSXBFLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxDQUFDeUQsTUFBQSxDQUFBWSxJQUFJO2NBQUMzQixJQUFJLEVBQUVBO1lBQUksRUFBSTtZQUMvRyxNQUFNc0IsWUFBWSxHQUFHckIsUUFBUSxJQUFJckUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUN5RCxNQUFBLENBQUFRLFVBQVU7Y0FBQSxHQUFLYTtZQUFlLEVBQUk7WUFDcEUsTUFBTUssV0FBVyxHQUFHdEMsT0FBTyxJQUFJdkUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUMwRCxRQUFBLENBQUFhLE9BQU87Y0FBQ0MsS0FBSyxFQUFFNUYsS0FBSyxDQUFDNkYsWUFBWSxJQUFJLGdCQUFnQjtjQUFFdEUsSUFBSSxFQUFDLFNBQVM7Y0FBQ3VFLE1BQU07WUFBQSxFQUFHO1lBQy9HLE1BQU1VLHNCQUFzQixHQUFHLENBQUNqRyxLQUFLLElBQUl5RCxRQUFRLElBQUl0RSxNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBTWYsU0FBUyxFQUFDO1lBQTJCLFNBQVc7WUFDM0csTUFBTTJGLEtBQUssR0FBa0MsSUFBQWpCLFNBQUEsQ0FBQXJDLFFBQVEsRUFBQ0MsS0FBSyxFQUFFRSxRQUFRLEVBQUVjLEtBQUssQ0FBQztZQUU3RSxPQUNDakUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUExQixNQUFBLENBQUF5QyxPQUFBLENBQUF5QyxRQUFBLFFBQ0NsRixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUEsQ0FBQzZFLE1BQUEsQ0FBQXhCLEtBQUssT0FBRyxFQUNSOEIsV0FBVyxFQUNYbkIsWUFBWSxFQUNaa0IsUUFBUSxFQUNSRSxzQkFBc0IsRUFDdEJSLEtBQUssQ0FDSjtVQUVMOzs7Ozs7Ozs7OztVQzdDQTs7VUFFQWhGLE1BQUEsQ0FBQXlGLGNBQUEsQ0FBQTNHLE9BQUE7WUFDQVUsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFkLE1BQUEsR0FBQUMsT0FBQTtVQU9PO1VBQVUsU0FBVStHLEtBQUtBLENBQUMxRyxLQUFZO1lBQzVDLE1BQU0yRCxLQUFLLEdBQXVDLElBQUFqRSxNQUFBLENBQUFrRSxNQUFNLEdBQW9CO1lBRTVFLE1BQU0wQixPQUFPLEdBQUkxRSxLQUFLLElBQVU7Y0FDL0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCOEMsS0FBSyxDQUFDUCxPQUFPLENBQUNsRCxPQUFPLEdBQUcsSUFBSTtjQUM1QixJQUFJLENBQUMsQ0FBQ0YsS0FBSyxDQUFDTSxRQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1HLFVBQVUsR0FBVTtjQUFFLEdBQUdmO1lBQUssQ0FBRTtZQUN0QyxPQUFPZSxVQUFVLENBQUNULFFBQVE7WUFFMUIsTUFBTVEsR0FBRyxHQUFXLDBCQUEwQkMsVUFBVSxDQUFDVixTQUFTLEdBQUdVLFVBQVUsQ0FBQ1YsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUVoRyxPQUNDWCxNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBT2YsU0FBUyxFQUFFUyxHQUFHO2NBQUV3RSxPQUFPLEVBQUVBO1lBQU8sR0FDdEM1RixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBT25CLEdBQUcsRUFBRTBELEtBQUs7Y0FBQSxHQUFNNUMsVUFBVTtjQUFFUSxJQUFJLEVBQUMsT0FBTztjQUFDakIsUUFBUSxFQUFFZ0Y7WUFBTyxFQUFJLEVBQ3BFdkUsVUFBVSxDQUFDUixLQUFLLElBQUliLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQSxlQUFPTCxVQUFVLENBQUNSLEtBQUssQ0FBUSxDQUM3QztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBYixNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFZLFNBQVVnSCxNQUFNQSxDQUFDM0csS0FBWTtZQUMvQyxNQUFNO2NBQUVFLE9BQU87Y0FBRUksUUFBUTtjQUFFc0csT0FBTyxHQUFHLFNBQVM7Y0FBRXhHLFFBQVE7Y0FBRXlHLElBQUksR0FBRyxJQUFJO2NBQUV4RyxTQUFTO2NBQUVtQixFQUFFO2NBQUVzRixLQUFLO2NBQUU5QztZQUFRLENBQUUsR0FBR2hFLEtBQUs7WUFDL0csTUFBTSxDQUFDK0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3RILE1BQUEsQ0FBQXlDLE9BQUssQ0FBQ3pCLFFBQVEsQ0FBQ1IsT0FBTyxDQUFDO1lBRXpELE1BQU1TLFlBQVksR0FBR0MsS0FBSyxJQUFHO2NBQzVCb0csWUFBWSxDQUFDcEcsS0FBSyxDQUFDc0UsYUFBYSxDQUFDaEYsT0FBTyxDQUFDO2NBQ3pDK0csT0FBTyxDQUFDQyxHQUFHLENBQUN0RyxLQUFLLENBQUM7Y0FDbEJOLFFBQVEsSUFBSUEsUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUVELElBQUl1RyxlQUFlLEdBQVcsc0JBQXNCOUcsU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ2hGOEcsZUFBZSxJQUFJL0csUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBRTlDLElBQUlVLEdBQUcsR0FBR2lHLFNBQVMsR0FBRyxrQ0FBa0MsR0FBRywyQkFBMkI7WUFDdEZqRyxHQUFHLElBQUk4RixPQUFPLEdBQUcsSUFBSUEsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNuQzlGLEdBQUcsSUFBSStGLElBQUksR0FBRyxJQUFJQSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBRTdCLElBQUlPLElBQUksR0FBRyxDQUFDNUYsRUFBRSxHQUFHLG9CQUFvQixHQUFHQSxFQUFFO1lBQzFDLE9BQ0M5QixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBS2YsU0FBUyxFQUFFOEc7WUFBZSxHQUM5QnpILE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUNDZixTQUFTLEVBQUMsOEJBQThCO2NBQ3hDbUIsRUFBRSxFQUFFNEYsSUFBSTtjQUNSTixLQUFLLEVBQUVBLEtBQUs7Y0FDWjlDLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnpDLElBQUksRUFBQyxVQUFVO2NBQ2ZuQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJGLE9BQU8sRUFBRTZHLFNBQVM7Y0FDbEJ6RyxRQUFRLEVBQUVLO1lBQVksRUFDckIsRUFDRmpCLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFPZixTQUFTLEVBQUVTLEdBQUc7Y0FBRVcsT0FBTyxFQUFFMkY7WUFBSSxHQUNuQzFILE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFNZixTQUFTLEVBQUU7WUFBb0IsRUFBSSxDQUNsQyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFYLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVUsU0FBVTBILFFBQVFBLENBQUNySCxLQUFZO1lBQy9DLE1BQU0yRCxLQUFLLEdBQUczRCxLQUFLLENBQUNDLEdBQUcsSUFBSSxJQUFBUCxNQUFBLENBQUFrRSxNQUFNLEdBQUU7WUFVbkMsTUFBTSxDQUFDakIsS0FBSyxFQUFFd0IsUUFBUSxDQUFDLEdBQUcsSUFBQXpFLE1BQUEsQ0FBQWdCLFFBQVEsRUFBUTtjQUN6Q0YsS0FBSyxFQUFFUixLQUFLLENBQUNRLEtBQUssSUFBSSxFQUFFO2NBQ3hCd0MsWUFBWSxFQUFFaEQsS0FBSyxDQUFDZ0QsWUFBWSxHQUFHaEQsS0FBSyxDQUFDZ0QsWUFBWSxHQUFHLG9CQUFvQjtjQUM1RUQsYUFBYSxFQUFFLG1CQUFtQjtjQUNsQ0ksWUFBWSxFQUFFO2FBQ2QsQ0FBQztZQUVGLE1BQU14QyxZQUFZLEdBQUlDLEtBQXVDLElBQVU7Y0FDdEUsSUFBSSxDQUFDLENBQUNaLEtBQUssQ0FBQ00sUUFBUSxJQUFJLE9BQU9OLEtBQUssQ0FBQ00sUUFBUSxLQUFLLFVBQVUsRUFBRU4sS0FBSyxDQUFDTSxRQUFRLENBQUNNLEtBQUssQ0FBQztjQUNuRnVELFFBQVEsQ0FBQztnQkFDUixHQUFHeEIsS0FBSztnQkFDUk0sU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCekMsS0FBSyxFQUFFSSxLQUFLLENBQUN3RCxNQUFNLENBQUM1RDtlQUNwQixDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1rQyxRQUFRLEdBQWNHLFFBQWlCLElBQW1DO2NBQy9FLElBQUksQ0FBQ0YsS0FBSyxDQUFDTSxTQUFTLElBQUksQ0FBQ0osUUFBUSxFQUFFO2NBRW5DLElBQUlHLFlBQVksR0FBV0wsS0FBSyxDQUFDUSxZQUFZO2NBRTdDLElBQUlOLFFBQVEsSUFBSWMsS0FBSyxDQUFDbkQsS0FBSyxLQUFLLEVBQUUsRUFBRXdDLFlBQVksR0FBR2hELEtBQUssQ0FBQ2dELFlBQVksR0FBR2hELEtBQUssQ0FBQ2dELFlBQVksR0FBR0wsS0FBSyxDQUFDSyxZQUFZO2NBRS9HLElBQUloRCxLQUFLLENBQUM4QyxHQUFHLElBQUlPLFVBQVUsQ0FBQ00sS0FBSyxDQUFDbkQsS0FBSyxDQUFDLEdBQUc4QyxRQUFRLENBQUN0RCxLQUFLLENBQUM4QyxHQUFHLENBQUMsRUFBRTtnQkFDL0RFLFlBQVksR0FBR2hELEtBQUssQ0FBQytDLGFBQWEsR0FBRy9DLEtBQUssQ0FBQytDLGFBQWEsR0FBR0osS0FBSyxDQUFDSSxhQUFhLEdBQUcsU0FBUy9DLEtBQUssQ0FBQzhDLEdBQUcsR0FBRzs7Y0FHdkcsT0FBT3BELE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtnQkFBTWYsU0FBUyxFQUFDO2NBQXlCLEdBQUUyQyxZQUFZLENBQVE7WUFDdkUsQ0FBQztZQUVELE1BQU1nRCxLQUFLLEdBQWtDdEQsUUFBUSxDQUFDMUMsS0FBSyxDQUFDNkMsUUFBUSxDQUFDO1lBQ3JFLElBQUk5QixVQUFVLEdBQVU7Y0FBQyxHQUFHZjtZQUFLLENBQUM7WUFDbEMsSUFBSWMsR0FBRyxHQUFXZCxLQUFLLENBQUNLLFNBQVMsR0FBRyxHQUFHTCxLQUFLLENBQUNLLFNBQVMsNEJBQTRCLEdBQUcsMkJBQTJCO1lBQ2hIUyxHQUFHLElBQUlkLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQ3hDVSxHQUFHLElBQUlkLEtBQUssQ0FBQzZDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUVyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzNCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2NBQzdFLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLE9BQ0N6QixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FBS2YsU0FBUyxFQUFFUztZQUFHLEdBQ2xCcEIsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBLENBQUExQixNQUFBLENBQUF5QyxPQUFBLENBQUF5QyxRQUFBLFFBQ0NsRixNQUFBLENBQUF5QyxPQUFBLENBQUFmLGFBQUE7Y0FDQ25CLEdBQUcsRUFBRTBELEtBQUs7Y0FBQSxHQUNONUMsVUFBVTtjQUNkWixJQUFJLEVBQUVILEtBQUssQ0FBQ0csSUFBSTtjQUNoQkcsUUFBUSxFQUFFSyxZQUFZO2NBQ3RCSCxLQUFLLEVBQUUsT0FBT1IsS0FBSyxDQUFDUSxLQUFLLEtBQUssV0FBVyxHQUFHUixLQUFLLENBQUNRLEtBQUssR0FBR21DLEtBQUssQ0FBQ25DLEtBQUs7Y0FDckUwRCxXQUFXLEVBQUVsRSxLQUFLLENBQUNrRSxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEbEUsS0FBSyxDQUFDb0MsUUFBUSxFQUNkNEQsS0FBSyxFQUNMaEcsS0FBSyxDQUFDTyxLQUFLLElBQUliLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBQWYsYUFBQTtjQUFPSyxPQUFPLEVBQUV6QixLQUFLLENBQUN3QjtZQUFFLEdBQUd4QixLQUFLLENBQUNPLEtBQUssQ0FBUyxFQUM5RFAsS0FBSyxDQUFDZ0UsUUFBUSxJQUFJdEUsTUFBQSxDQUFBeUMsT0FBQSxDQUFBZixhQUFBO2NBQU1mLFNBQVMsRUFBQztZQUEyQixTQUFXLENBQ3ZFLENBQ0U7VUFFUiJ9