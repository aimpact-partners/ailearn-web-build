System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Checkbox, Form, Error, Label, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    Checkbox: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
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
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.15"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
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

      /****************************************
      INTERNAL MODULE: ./input/components/error
      ****************************************/

      ims.set('./input/components/error', {
        hash: 280265354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Error({
            show,
            message,
            className,
            children
          }) {
            const {
              value
            } = (0, _context.useInputContext)();
            if (!show) return null;
            const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
            return _react.default.createElement("span", {
              className: cls
            }, message, " ", children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/label
      ****************************************/

      ims.set('./input/components/label', {
        hash: 3579854098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("../context");
          /*bundle */
          function Label({
            required,
            position,
            children
          } = {}) {
            const {
              name,
              id
            } = (0, _context.useInputContext)();
            const variants = {
              floating: 'floating-label',
              right: 'pui-input__label--right',
              bottom: 'pui-input__label--bottom',
              'bottom-right': 'pui-input__label--bottom-right'
            };
            let cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;
            if (required) cls += ' is-required';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: id ?? name,
              className: cls
            }, _react.default.createElement("span", null, " ", children)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 4215830211,
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

      /*******************************
      INTERNAL MODULE: ./input/control
      *******************************/

      ims.set('./input/control', {
        hash: 3540147954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlSelector = ControlSelector;
          var _react = require("react");
          var _context = require("./context");
          var _internalProps = require("./internal-props");
          var _icons = require("pragmate-ui/icons");
          function ControlSelector() {
            const input = (0, _react.useRef)(null);
            const {
              setState,
              state,
              value,
              setValue,
              props: {
                name,
                id,
                placeholder
              },
              props
            } = (0, _context.useInputContext)();
            let properties = {
              ...props
            };
            _internalProps.internalProps.forEach(prop => delete properties[prop]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const currentValue = event.currentTarget.value;
              setValue(currentValue);
              setState({
                ...state,
                _hasError: false,
                value: event.currentTarget.value
              });
            };
            const {
              type
            } = props;
            const children = [];
            if (type === 'date') {
              children.push(_react.default.createElement(_icons.Icon, {
                key: 'icon',
                icon: 'calendar',
                className: 'pui-input__icon',
                onClick: () => input.current.showPicker()
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              value: value,
              placeholder: placeholder ?? ' ',
              id: id ?? name
            }), children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 3225629628,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _context = require("./context");
          var _label = require("./components/label");
          var _control = require("./control");
          var _error = require("./components/error");
          /*bundle*/ /**
                      *
                      * @param props
                      *
                      * 1. pattern property + existing error.
                      * 2. Controlled Input where the implementer defines the error.
                      * 3. Automated Input with multiple validations and error management.
                      *
                      * @returns
                      */
          function Input(props) {
            const {
              hasError,
              errorMessage,
              variant,
              className,
              label,
              children,
              type
            } = props;
            const [value, setValue] = _react.default.useState(props.value ?? '');
            const [state, setState] = (0, _react.useState)({});
            let cls = `pui-input${className ? ` ${className}` : ''}`;
            if (props.type === 'date') cls += ' pui-input--date';
            const variants = {
              unstyled: 'pui-input--unstyled',
              floating: 'pui-input--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            const providerValue = {
              props,
              state,
              setState,
              value,
              setValue
            };
            const labelSpecs = {
              required: props.required
            };
            const attrs = {};
            /**
             * todo: review it.
             */
            if (variant === 'floating') labelSpecs.position = variant;
            if (variant !== 'unstyled') attrs.className = cls;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: providerValue
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_control.ControlSelector, null), children, label && _react.default.createElement(_label.Label, {
              ...labelSpecs
            }, label), errorMessage && _react.default.createElement(_error.Error, {
              show: !!hasError,
              message: errorMessage
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./input/internal-props
      **************************************/

      ims.set('./input/internal-props', {
        hash: 100120639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.internalProps = void 0;
          /**
           * Internal props of the input component.
           * This array is used to filter the props passed to the input component.
           */
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'colorSpinner', 'variant'];
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/types
      *****************************/

      ims.set('./input/types', {
        hash: 3733937293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./model/manager
      *******************************/

      ims.set('./model/manager', {
        hash: 3171752923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectorManager = void 0;
          class SelectorManager {
            static #instance;
            #selector;
            get selector() {
              return this.#selector;
            }
            constructor(selector) {}
            validate() {}
            static get(selector) {
              if (!this.#instance) {
                this.#instance = new SelectorManager(selector);
              }
              return this.#instance;
            }
          }
          exports.SelectorManager = SelectorManager;
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
        "im": "./input/components/error",
        "from": "Error",
        "name": "Error"
      }, {
        "im": "./input/components/label",
        "from": "Label",
        "name": "Label"
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
        (require || prop === 'Error') && _export("Error", Error = require ? require('./input/components/error').Error : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./input/components/label').Label : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJDaGVja2JveCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xzIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIl9jb250ZXh0IiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsInVzZUlucHV0Q29udGV4dCIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsIkZyYWdtZW50IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29ucyIsIkNvbnRyb2xTZWxlY3RvciIsImlucHV0IiwidXNlUmVmIiwic2V0U3RhdGUiLCJzdGF0ZSIsInBsYWNlaG9sZGVyIiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJwdXNoIiwiSWNvbiIsImtleSIsImljb24iLCJvbkNsaWNrIiwiY3VycmVudCIsInNob3dQaWNrZXIiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsImF0dHJzIiwiUHJvdmlkZXIiLCJkZWZpbmVQcm9wZXJ0eSIsIlNlbGVjdG9yTWFuYWdlciIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiZ2V0IiwiUmFkaW8iLCJTd2l0Y2giLCJzaXplIiwidGl0bGUiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lU3dpdGNoIiwiaXNJZCIsIlRleHRhcmVhIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsInRhcmdldCIsImdldEVycm9yIiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiZXJyb3IiXSwic291cmNlcyI6WyIvdHMvY2hlY2tib3gudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQStCLElBQUFDLEtBQUEsR0FBQUYsTUFBQTtVQVd4QjtVQUFXLE1BQU1HLFFBQVEsR0FBQUMs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