System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Radio, Form, Error, Label, Input, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    Radio: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
    Input: void 0,
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.21"]]);
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
        hash: 1019112771,
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
            const cls = `pui-input-radio ${properties.className ? properties.className : ''}`;
            return _react.default.createElement("span", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: 'radio',
              onChange: onClick
            }), _react.default.createElement("label", {
              className: 'pui-radio-label'
            }, properties.label));
          }
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
        hash: 676060169,
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
                      *	hasError
                         errorMessage="afkawmneofnawoiefa"
                      *
                      * <input type="text" pattern="/\d/"  />
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
        "from": "Radio",
        "name": "Radio"
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
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./checkbox').Radio : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmFkaW8iLCJwcm9wcyIsImlucHV0IiwidXNlUmVmIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInByb3BlcnRpZXMiLCJjbHMiLCJjbGFzc05hbWUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInJlZiIsInR5cGUiLCJsYWJlbCIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfY29udGV4dCIsIkVycm9yIiwic2hvdyIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInVzZUlucHV0Q29udGV4dCIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsIm5hbWUiLCJpZCIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsIkZyYWdtZW50IiwiaHRtbEZvciIsIklucHV0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25zIiwiQ29udHJvbFNlbGVjdG9yIiwic2V0U3RhdGUiLCJzdGF0ZSIsInNldFZhbHVlIiwicGxhY2Vob2xkZXIiLCJpbnRlcm5hbFByb3BzIiwiZm9yRWFjaCIsInByb3AiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwicHVzaCIsIkljb24iLCJrZXkiLCJpY29uIiwic2hvd1BpY2tlciIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VTdGF0ZSIsInVuc3R5bGVkIiwicHJvdmlkZXJWYWx1ZSIsImxhYmVsU3BlY3MiLCJhdHRycyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlN3aXRjaCIsImRpc2FibGVkIiwic2l6ZSIsInRpdGxlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZVN3aXRjaCIsImlzSWQiLCJUZXh0YXJlYSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJ0YXJnZXQiLCJnZXRFcnJvciIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImVycm9yIl0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94LnRzeCIsIi90cy9mb3JtLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi90eXBlcy50cyIsIi90cy9tb2RlbC9tYW5hZ2VyLnRzIiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBT087VUFBVSxTQUFVQyxLQUFLQSxDQUFDQyxLQUFZO1lBQzVDLE1BQU1DLEtBQUssR0FBdUMsSUFBQUosTUFBQSxDQUFBSyxNQUFNLEdBQW9CO1lBRTVFLE1BQU1DLE9BQU8sR0FBSUMsS0FBSyxJQUFVO2NBQy9CQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUV2Qkos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