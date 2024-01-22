System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CheckboxGroup, CheckboxJulio, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
    CheckboxJulio: void 0,
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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3119085511,
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

      /**************************************
      INTERNAL MODULE: ./checkbox/index-julio
      **************************************/

      ims.set('./checkbox/index-julio', {
        hash: 963481901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxJulio = void 0;
          var _react = require("react");
          /*bundle*/
          const CheckboxJulio = exports.CheckboxJulio = (0, _react.forwardRef)(function (props, ref) {
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

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 1391149151,
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
              disabled,
              className,
              onChange,
              label
            } = props;
            const [value, setValue] = (0, _react.useState)(!!checked);
            (0, _react.useEffect)(() => {
              setValue(!!checked);
            }, [checked]);
            const handleChange = event => {
              event.stopPropagation();
              setValue(!checked);
              onChange && onChange(event);
            };
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            const name = props.name ?? "pui-checkbox--name";
            const id = props.id ?? name;
            const handleClick = event => event.stopPropagation();
            const picked = checked === true || checked === false ? checked : value;
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: picked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: 'pui-checkbox--label',
              htmlFor: id
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              viewBox: '0 0 12 9'
            }, _react.default.createElement("polyline", {
              points: '1 5 4 8 11 1'
            }))), _react.default.createElement("span", null, label)));
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
        hash: 2658555804,
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
        hash: 534355326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          /*bundle*/
          function Error({
            show,
            message,
            className,
            children
          }) {
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
        hash: 3617273727,
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
            return _react.default.createElement(_react.default.Fragment, null, output);
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
        hash: 789869850,
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
            }, _react.default.createElement("span", {
              className: 'label-content'
            }, " ", children)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./input/components/password
      *******************************************/

      ims.set('./input/components/password', {
        hash: 1440208605,
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
        hash: 1517037860,
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
              placeholder: placeholder ?? '',
              value: value ?? ''
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
        hash: 1307943641,
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
        hash: 433402616,
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

      /**********************************
      INTERNAL MODULE: ./textarea/counter
      **********************************/

      ims.set('./textarea/counter', {
        hash: 1510952168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaCounter = TextareaCounter;
          var _react = require("react");
          function TextareaCounter({
            counter,
            length,
            maxlength
          }) {
            if (!counter) return null;
            let cls = 'pui-textarea-counter';
            if (maxlength && length > maxlength - 15) {
              cls += length > maxlength - 5 ? ' pui-textarea-counter--danger' : ' pui-textarea-counter--warning';
            }
            return _react.default.createElement("span", {
              className: cls
            }, length ?? 0);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/error
      ********************************/

      ims.set('./textarea/error', {
        hash: 2150596302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaError = TextareaError;
          var _react = require("react");
          function TextareaError({
            state,
            hasError,
            errorMessage,
            value
          }) {
            if (!state._hasError && !hasError) return null;
            if (hasError || value !== '') errorMessage = errorMessage ? errorMessage : state.errorMessage;
            return _react.default.createElement("span", {
              className: 'pui-element-input-error'
            }, errorMessage);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/index
      ********************************/

      ims.set('./textarea/index', {
        hash: 3408619916,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _error = require("./error");
          var _counter = require("./counter");
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, _react.useRef)();
            const {
              counter,
              errorMessage,
              value = ''
            } = props;
            const [state, setState] = (0, _react.useState)({
              value,
              errorMessage
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
            let cls = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'counter', 'errorMessage', 'children', 'label'].forEach(prop => delete properties[prop]);
            let clsLabel = '';
            if (props.required) cls += ' is-required';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: value,
              placeholder: props.placeholder ?? ' '
            }), props.children, _react.default.createElement(_error.TextareaError, {
              state: state,
              hasError: props.hasError,
              value: value,
              errorMessage: props.errorMessage
            }), props.label && _react.default.createElement("label", {
              className: clsLabel,
              htmlFor: props.id
            }, props.label), _react.default.createElement(_counter.TextareaCounter, {
              length: input?.current?.value.length,
              maxlength: props.maxLength,
              counter: counter
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/types
      ********************************/

      ims.set('./textarea/types', {
        hash: 3944418147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./checkbox/group",
        "from": "CheckboxGroup",
        "name": "CheckboxGroup"
      }, {
        "im": "./checkbox/index-julio",
        "from": "CheckboxJulio",
        "name": "CheckboxJulio"
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
        (require || prop === 'CheckboxJulio') && _export("CheckboxJulio", CheckboxJulio = require ? require('./checkbox/index-julio').CheckboxJulio : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibGFiZWwiLCJyZXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJDaGVja2JveCIsImtleSIsImRpcmVjdGlvbnMiLCJjb2x1bW4iLCJyb3ciLCJkaXJlY3Rpb24iLCJjbHMiLCJjbGFzc05hbWUiLCJDaGVja2JveEp1bGlvIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsInR5cGUiLCJ0aXRsZSIsInVzZUVmZmVjdCIsImlkIiwiaGFuZGxlQ2xpY2siLCJwaWNrZWQiLCJvbkNsaWNrIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJ1c2VJbnB1dENvbnRleHQiLCJJY29uIiwiaWNvbiIsImN1cnJlbnQiLCJzaG93UGlja2VyIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJpbnRlcm5hbFByb3BzIiwiY3VycmVudFZhbHVlIiwiY3VycmVudFRhcmdldCIsIl9oYXNFcnJvciIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VSZWYiLCJ1bnN0eWxlZCIsInByb3ZpZGVyVmFsdWUiLCJsYWJlbFNwZWNzIiwiUHJvdmlkZXIiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlJhZGlvIiwiX29wdGlvbiIsIlNlbGVjdCIsImF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsIml0ZW0iLCJPcHRpb25TZWxlY3QiLCJTd2l0Y2giLCJzaXplIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwidGFyZ2V0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgtanVsaW8udHN4IiwiL3RzL2NoZWNrYm94L2luZGV4LnRzeCIsIi90cy9mb3JtLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2RhdGUudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi1jb250YWluZXIudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9sYWJlbC50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9wYXNzd29yZC50c3giLCIvdHMvaW5wdXQvY29udGV4dC50cyIsIi90cy9pbnB1dC9jb250cm9sLnRzeCIsIi90cy9pbnB1dC9pbmRleC50c3giLCIvdHMvaW5wdXQvaW50ZXJmYWNlcy9pbmRleC50cyIsIi90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi90cy9tb2RlbC9tYW5hZ2VyLnRzIiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3NlbGVjdC9vcHRpb24udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEvY291bnRlci50c3giLCIvdHMvdGV4dGFyZWEvZXJyb3IudHN4IiwiL3RzL3RleHRhcmVhL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxhQUFhQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUM7WUFBTyxDQUFFLEdBQUdELEtBQUs7WUFFekIsTUFBTUUsTUFBTSxHQUFHRCxPQUFPLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssS0FBSTtjQUM1QyxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFLEdBQUdDO2NBQUksQ0FB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