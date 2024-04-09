System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.0/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CheckboxGroup, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
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
    }, function (_pragmateUi010Icons) {
      dependency_2 = _pragmateUi010Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.0/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.0/form');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 4232336252,
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
              const key = `${option.name}-${index}`;
              const {
                label,
                ...rest
              } = option;
              return _react.default.createElement(_index.Checkbox, {
                key: key,
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
            }, props.label && _react.default.createElement("span", {
              className: 'pui-label'
            }, props.label), _react.default.createElement("div", {
              className: 'pui-group__items-container'
            }, output));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 2430323307,
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
              setValue(!value);
              onChange && onChange(event);
            };
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const name = props.name ?? 'pui-checkbox--name';
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const handleClick = event => event.stopPropagation();
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: value,
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
        hash: 1670941471,
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
              props,
              icon
            } = (0, _context.useInputContext)();
            if (props.type !== 'date') return null;
            const iconValue = icon ? icon : 'calendar';
            const showPicker = () => {
              if (props.disabled) return;
              input.current.showPicker();
            };
            return _react.default.createElement(_icons.Icon, {
              key: 'icon',
              icon: iconValue,
              className: 'pui-input__icon',
              onClick: showPicker
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
        hash: 1673454850,
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
              default: null,
              month: _date.Date,
              week: _date.Date
            };
            const output = [];
            if (!!types[props.type]) {
              const Control = types[props.type];
              output.push(_react.default.createElement(Control, {
                key: "control"
              }));
            }
            ;
            if (props.type !== 'date' && !!props.icon) {
              output.push(_react.default.createElement(_icon.Icon, {
                key: "icon"
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
          ;
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/icon
      ***************************************/

      ims.set('./input/components/icon', {
        hash: 2806631327,
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
              },
              isDate
            } = (0, _context.useInputContext)();
            if (!icon || isDate) return null;
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
        hash: 1459325288,
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
              onInvalid: event => {
                const {
                  target
                } = event;
                if (target.validity.valueMissing) {
                  target.setCustomValidity('Please enter your name');
                }
                console.log('is invalid', name, event);
              },
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
        hash: 3108496707,
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
            const dates = ['date', 'week', 'month', 'time', 'datetime-local'];
            const isDate = dates.includes(props.type);
            if (isDate) cls += ' pui-input--date';
            if (!!icon) cls += ' pui-input--icon';
            if (!!icon && variant === 'floating') cls += ' icon__floating';
            if (props.type === 'password') cls += ' pui-input--password';
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
              input,
              icon,
              isDate
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
        hash: 239822135,
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
        hash: 912006739,
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
            delete attributes.options;
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
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const cls = `pui-input-select`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              htmlFor: id
            }, props.label), _react.default.createElement("select", {
              className: cls,
              ...attributes
            }, output, children));
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
        hash: 1859698391,
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
            _react.default.useEffect(() => {
              if (isChecked === checked) return;
              setIsChecked(checked);
            }, [checked]);
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
        hash: 1061580412,
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
            const checkSize = () => {
              const {
                scrollHeight,
                offsetHeight
              } = input.current;
              if (scrollHeight > offsetHeight) {
                input.current.style.height = `${scrollHeight}px`;
              }
            };
            /**
             * If the textarea is created with a value, the height needs to be checked
             */
            _react.default.useEffect(checkSize, [value]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInR5cGUiLCJodG1sRm9yIiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfaWNvbnMiLCJfY29udGV4dCIsIkRhdGUiLCJpbnB1dCIsImljb24iLCJ1c2VJbnB1dENvbnRleHQiLCJpY29uVmFsdWUiLCJzaG93UGlja2VyIiwiY3VycmVudCIsIkljb24iLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwibW9udGgiLCJ3ZWVrIiwiQ29udHJvbCIsInB1c2giLCJGcmFnbWVudCIsImlzRGF0ZSIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFuZ2VUeXBlIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25Db250YWluZXIiLCJDb250cm9sU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsImludGVybmFsUHJvcHMiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwib25JbnZhbGlkIiwidGFyZ2V0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJzZXRDdXN0b21WYWxpZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwiZGF0ZXMiLCJpbmNsdWRlcyIsInVuc3R5bGVkIiwicHJvdmlkZXJWYWx1ZSIsImxhYmVsU3BlY3MiLCJQcm92aWRlciIsIlNlbGVjdG9yTWFuYWdlciIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiZ2V0IiwiUmFkaW8iLCJfb3B0aW9uIiwiU2VsZWN0IiwiYXR0cmlidXRlcyIsInVuZGVmaW5lZCIsIml0ZW0iLCJPcHRpb25TZWxlY3QiLCJTd2l0Y2giLCJzaXplIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsYUFBYUEsQ0FB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