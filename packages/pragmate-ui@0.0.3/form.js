System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CheckboxGroup, CheckboxFran, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
    CheckboxFran: void 0,
    Checkbox: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
    Input: void 0,
    Radio: void 0,
    Select: void 0,
    OptionSelect: void 0,
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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.2.37"], ["@types/react-dom", "18.2.15"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.21"]]);
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
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 465800590,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxGroup = CheckboxGroup;
          var _react = require("react");
          var _index = require("./index");
          /*bundle*/
          function CheckboxGroup(props) {
            const {
              options
            } = props;
            const output = options.map((option, index) => {
              const {
                label,
                ...rest
              } = option;
              return _react.default.createElement(_index.Checkbox, {
                key: index,
                label: label,
                ...rest
              });
            });
            const directions = {
              column: 'column',
              row: 'row'
            };
            const direction = props.direction ?? `row`;
            const cls = `pui-checkbox-group pui-checkbox-group--${directions[direction]}`; // `pui-checkbox-group $;
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./checkbox/index copy
      *************************************/

      ims.set('./checkbox/index copy', {
        hash: 3521839215,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxFran = void 0;
          var _react = require("react");
          /*bundle*/
          const CheckboxFran = exports.CheckboxFran = (0, _react.forwardRef)(function (props, ref) {
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
            let cls = `pragmate-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("input", {
              style: {
                display: 'none'
              },
              ref: ref,
              type: 'checkbox',
              className: 'inp-cbx',
              id: name,
              name: name,
              checked: checked ?? value,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: 'cbx',
              htmlFor: name
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              width: '12px',
              height: '9px',
              viewBox: '0 0 12 9'
            }, _react.default.createElement("polyline", {
              points: '1 5 4 8 11 1'
            }))), _react.default.createElement("span", null, label)));
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 2751475196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var _react = require("react");
          /*bundle*/
          const Checkbox = exports.Checkbox = (0, _react.forwardRef)(function (props, ref) {
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
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            return _react.default.createElement("label", {
              className: 'pui-checkbox'
            }, _react.default.createElement("input", {
              type: 'checkbox',
              title: 'checkbox',
              onChange: handleChange
            }), _react.default.createElement("span", {
              className: 'checkmark'
            }), label);
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

      /***************************************
      INTERNAL MODULE: ./input/components/date
      ***************************************/

      ims.set('./input/components/date', {
        hash: 3019164823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Date = Date;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Date() {
            const {
              input,
              props
            } = (0, _context.useInputContext)();
            if (props.type !== "date") return null;
            return _react.default.createElement(_icons.Icon, {
              key: "icon",
              icon: "calendar",
              className: "pui-input__icon",
              onClick: () => input.current.showPicker()
            });
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

      /*************************************************
      INTERNAL MODULE: ./input/components/icon-container
      *************************************************/

      ims.set('./input/components/icon-container', {
        hash: 1203587392,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconContainer = IconContainer;
          var _react = require("react");
          var _password = require("./password");
          var _context = require("../context");
          var _date = require("./date");
          var _icon = require("./icon");
          function IconContainer() {
            const {
              props
            } = (0, _context.useInputContext)();
            const types = {
              password: _password.Password,
              date: _date.Date,
              default: null
            };
            const output = [];
            if (!!types[props.type]) {
              const Control = types[props.type];
              output.push(_react.default.createElement(Control, {
                key: "control"
              }));
            }
            ;
            if (!!props.icon) {
              output.push(_react.default.createElement(_icon.Icon, {
                key: "icon"
              }));
            }
            ;
            return output;
          }
          ;
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/icon
      ***************************************/

      ims.set('./input/components/icon', {
        hash: 2543760012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icon = Icon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Icon() {
            const {
              props: {
                icon
              }
            } = (0, _context.useInputContext)();
            if (!icon) return null;
            return _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "input-icon"
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/label
      ****************************************/

      ims.set('./input/components/label', {
        hash: 3851777372,
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

      /*******************************************
      INTERNAL MODULE: ./input/components/password
      *******************************************/

      ims.set('./input/components/password', {
        hash: 2188707379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Password = Password;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Password() {
            const {
              props: {
                password
              },
              state,
              setState
            } = (0, _context.useInputContext)();
            const changeType = event => {
              event.stopPropagation();
              setState({
                ...state,
                type: state.type === "password" ? "text" : "password"
              });
            };
            const attrs = {
              className: "icon-eye",
              onClick: changeType,
              icon: state.type === "password" ? "eye" : "eye-slash"
            };
            if (!password) return null;
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 902539138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = exports.InputContext = React.createContext({});
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/control
      *******************************/

      ims.set('./input/control', {
        hash: 1784409600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlSelector = ControlSelector;
          var _react = require("react");
          var _context = require("./context");
          var _internalProps = require("./internal-props");
          var _iconContainer = require("./components/icon-container");
          function ControlSelector() {
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
              props,
              input
            } = (0, _context.useInputContext)();
            let properties = {
              ...props
            };
            (0, _react.useEffect)(() => {
              setValue(props.value);
            }, [props.value]);
            _internalProps.internalProps.forEach(prop => delete properties[prop]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const currentValue = event.currentTarget.value;
              setValue(currentValue);
              setState({
                ...state,
                _hasError: false,
                value: currentValue
              });
            };
            const attrs = {
              id: id ?? name,
              placeholder: placeholder ?? ' ',
              value: value ?? ' '
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              type: state.type,
              ...attrs
            }), _react.default.createElement(_iconContainer.IconContainer, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 2415183884,
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
              icon,
              type
            } = props;
            const [value, setValue] = _react.default.useState(props.value ?? '');
            const [state, setState] = (0, _react.useState)({
              type
            });
            const input = (0, _react.useRef)(null);
            let cls = `pui-input${className ? ` ${className}` : ''}`;
            if (props.type === 'date') cls += ' pui-input--date';
            if (!!icon) cls += ' pui-input--icon';
            if (!!icon && variant === "floating") cls += " icon__floating";
            if (props.type === "password") cls += " pui-input--password";
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
              setValue,
              input
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

      /****************************************
      INTERNAL MODULE: ./input/interfaces/index
      ****************************************/

      ims.set('./input/interfaces/index', {
        hash: 469020286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
        }
      });

      /**************************************
      INTERNAL MODULE: ./input/internal-props
      **************************************/

      ims.set('./input/internal-props', {
        hash: 3254431444,
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
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type'];
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
        hash: 679055454,
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

      /******************************
      INTERNAL MODULE: ./select/index
      ******************************/

      ims.set('./select/index', {
        hash: 944359037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _option = require("./option");
          /*bundle */
          function Select(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            const value = ![undefined, null].includes(props.value) ?? '';
            let output = [];
            if (props.options) {
              props.options.forEach((item, key) => {
                output.push(_react.default.createElement(_option.OptionSelect, {
                  ...item,
                  key: key
                }));
              });
            }
            return _react.default.createElement("select", {
              ...attributes
            }, output, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./select/option
      *******************************/

      ims.set('./select/option', {
        hash: 2324332836,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionSelect = OptionSelect;
          var _react = require("react");
          /*bundle */
          function OptionSelect(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            return _react.default.createElement("option", {
              ...attributes
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 188471994,
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
            const id = props.id ?? props.name ?? "pui-element-switch";
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

      /********************************
      INTERNAL MODULE: ./textarea/index
      ********************************/

      ims.set('./textarea/index', {
        hash: 3000114198,
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
            let clsLabel = "";
            if (props.required) cls += ' is-required';
            const value = typeof props.value !== 'undefined' ? props.value ?? "" : state.value ?? "";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: value,
              placeholder: props.placeholder ?? ' '
            }), props.children, error, props.label && _react.default.createElement("label", {
              className: clsLabel,
              htmlFor: props.id
            }, props.label)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/types
      ********************************/

      ims.set('./textarea/types', {
        hash: 3578376899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./checkbox/group",
        "from": "CheckboxGroup",
        "name": "CheckboxGroup"
      }, {
        "im": "./checkbox/index copy",
        "from": "CheckboxFran",
        "name": "CheckboxFran"
      }, {
        "im": "./checkbox/index",
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
        "im": "./select/index",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./select/option",
        "from": "OptionSelect",
        "name": "OptionSelect"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea/index",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CheckboxGroup') && _export("CheckboxGroup", CheckboxGroup = require ? require('./checkbox/group').CheckboxGroup : value);
        (require || prop === 'CheckboxFran') && _export("CheckboxFran", CheckboxFran = require ? require('./checkbox/index copy').CheckboxFran : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox/index').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Error') && _export("Error", Error = require ? require('./input/components/error').Error : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./input/components/label').Label : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input/index').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select/index').Select : value);
        (require || prop === 'OptionSelect') && _export("OptionSelect", OptionSelect = require ? require('./select/option').OptionSelect : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea/index').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibGFiZWwiLCJyZXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJDaGVja2JveCIsImtleSIsImRpcmVjdGlvbnMiLCJjb2x1bW4iLCJyb3ciLCJkaXJlY3Rpb24iLCJjbHMiLCJjbGFzc05hbWUiLCJDaGVja2JveEZyYW4iLCJleHBvcnRzIiwiZm9yd2FyZFJlZiIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwic3R5bGUiLCJkaXNwbGF5IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsInRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl9jb250ZXh0IiwiRGF0ZSIsImlucHV0IiwidXNlSW5wdXRDb250ZXh0IiwiSWNvbiIsImljb24iLCJvbkNsaWNrIiwiY3VycmVudCIsInNob3dQaWNrZXIiLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwiQ29udHJvbCIsInB1c2giLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJGcmFnbWVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFuZ2VUeXBlIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25Db250YWluZXIiLCJDb250cm9sU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsInVzZUVmZmVjdCIsImludGVybmFsUHJvcHMiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwiX2xhYmVsIiwiX2NvbnRyb2wiLCJfZXJyb3IiLCJJbnB1dCIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwidmFyaWFudCIsInVzZVJlZiIsInVuc3R5bGVkIiwicHJvdmlkZXJWYWx1ZSIsImxhYmVsU3BlY3MiLCJQcm92aWRlciIsIlNlbGVjdG9yTWFuYWdlciIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiZ2V0IiwiUmFkaW8iLCJfb3B0aW9uIiwiU2VsZWN0IiwiYXR0cmlidXRlcyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemUiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjbGFzc05hbWVTd2l0Y2giLCJUZXh0YXJlYSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJ0YXJnZXQiLCJnZXRFcnJvciIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImVycm9yIiwiY2xzTGFiZWwiXSwic291cmNlcyI6WyIvdHMvY2hlY2tib3gvZ3JvdXAudHN4IiwiL3RzL2NoZWNrYm94L2luZGV4IGNvcHkudHN4IiwiL3RzL2NoZWNrYm94L2luZGV4LnRzeCIsIi90cy9mb3JtLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2RhdGUudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi1jb250YWluZXIudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9sYWJlbC50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9wYXNzd29yZC50c3giLCIvdHMvaW5wdXQvY29udGV4dC50cyIsIi90cy9pbnB1dC9jb250cm9sLnRzeCIsIi90cy9pbnB1dC9pbmRleC50c3giLCIvdHMvaW5wdXQvaW50ZXJmYWNlcy9pbmRleC50cyIsIi90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi90cy9tb2RlbC9tYW5hZ2VyLnRzIiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3NlbGVjdC9vcHRpb24udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3RzL3RleHRhcmVhL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsYUFBYUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDO1lBQU8sQ0FBRSxHQUFHRCxLQUFLO1lBRXpCLE1BQU1FLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEtBQUk7Y0FDNUMsTUFBTTtnQkFBRUMsS0FBSztnQkFBRSxHQUFHQztjQUFJLENBQUUsR0FBR0gsTUFBTTtjQUNqQyxPQUFPUixNQUFBLENBQUFZLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENB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