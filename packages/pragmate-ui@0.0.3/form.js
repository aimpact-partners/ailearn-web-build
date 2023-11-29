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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
        hash: 2308429459,
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
              className
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(checked);
            const handleChange = event => {
              event.stopPropagation();
              setIsChecked(event.currentTarget.checked);
              onChange && onChange(event);
            };
            let classNameSwitch = `pui-element-switch ${className ? className : ''}`;
            classNameSwitch += disabled ? ' disabled' : '';
            let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
            cls += variant ? ` ${variant}` : '';
            cls += size ? ` ${size}` : '';
            const properties = {
              ...props
            };
            ['className', 'checked', 'onChange', 'variant', 'size', "id"].forEach(prop => {
              delete properties[prop];
            });
            const id = !!props.id ? props.id : props.name ?? "pui-element-switch";
            return _react.default.createElement("div", {
              className: classNameSwitch
            }, _react.default.createElement("input", {
              className: 'pui-element-switch__checkbox',
              id: id,
              type: 'checkbox',
              checked: isChecked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: cls,
              htmlFor: id
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
        hash: 2617489727,
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
                className: 'pui-element-input-error'
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
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
              className: 'pui-input__required-label'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJDaGVja2JveCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xzIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHQiLCJjaGlsZHJlbiIsImxpc3RDbGFzc05hbWUiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsImdldEVycm9yIiwic3RhdGUiLCJpbnB1dFJlZiIsImhhc0Vycm9yIiwibWF4IiwibGVuZ3RoTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsIl9oYXNFcnJvciIsIm1lc3NhZ2VFcnJvciIsImVtcHR5TWVzc2FnZSIsImN1cnJlbnQiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJfY2xhc3NMaXN0IiwiX2NvbnRleHQiLCJfcmVuZGVyaW5nUHJvcHMiLCJJbnB1dCIsImlucHV0IiwidXNlUmVmIiwiZmxvYXRpbmciLCJpY29uIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsImxvYWRpbmciLCJwbGFjZWhvbGRlciIsInNldFN0YXRlIiwidGFyZ2V0IiwibGlzdFZhbHVlIiwiaXNWYWx1ZSIsIlByb3ZpZGVyIiwiUmVuZGVyaW5nUHJvcHMiLCJMYWJlbCIsInNwYW5SZXF1aXJlZCIsInNob3dMYWJlbCIsIkZyYWdtZW50IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfZ2V0RXJyb3IiLCJQcm9wc1JlbmRlcmluZyIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnRyb2xJbnB1dCIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiaXNMYWJlbCIsImlzSWNvbiIsIkljb24iLCJpc0xvYWRpbmciLCJTcGlubmVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJhY3RpdmUiLCJpc1JlcXVpcmVkV2lkdGhMYWJlbCIsImVycm9yIiwiX2xhYmVsIiwiaWNvbkJ1dHRvbkF0dHJzIiwiaGFuZGxlQ2xpY2siLCJmb2N1cyIsImRlZmF1bHRJY29uIiwic2hvd0ljb24iLCJzaG93TG9hZGluZyIsInNob3dSZXF1aXJlZFdpZHRoTGFiZWwiLCJkZWZpbmVQcm9wZXJ0eSIsIlJhZGlvIiwiU3dpdGNoIiwidmFyaWFudCIsInNpemUiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjbGFzc05hbWVTd2l0Y2giLCJUZXh0YXJlYSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY2xhc3MtbGlzdC50cyIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2dldC1lcnJvci50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2xhYmVsLnRzeCIsIi90cy9pbnB1dC9wcm9wcy1yZW5kZXJpbmcudHN4IiwiL3RzL2lucHV0L3JlbmRlcmluZy1wcm9wcy50c3giLCIvdHlwZS50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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