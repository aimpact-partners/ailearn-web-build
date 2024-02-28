System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/form');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 589128285,
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
              const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
              const key = `${performance.now()}-${random}`;
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
        hash: 796843459,
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
              if (checked === value) return;
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
        hash: 2997764764,
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
            if (props.type !== 'date') return null;
            return _react.default.createElement(_icons.Icon, {
              key: 'icon',
              icon: 'calendar',
              className: 'pui-input__icon',
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
        hash: 3240620941,
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
        hash: 1106803106,
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
            _react.default.useEffect(checkSize, []);
            const handleChange = event => {
              checkSize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwia2V5IiwicGVyZm9ybWFuY2UiLCJub3ciLCJsYWJlbCIsInJlc3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkNoZWNrYm94IiwiZGlyZWN0aW9ucyIsImNvbHVtbiIsInJvdyIsImRpcmVjdGlvbiIsImNscyIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hlY2tlZCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsInJhbWRvbiIsIm5hbWUiLCJpZCIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInR5cGUiLCJodG1sRm9yIiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfaWNvbnMiLCJfY29udGV4dCIsIkRhdGUiLCJpbnB1dCIsInVzZUlucHV0Q29udGV4dCIsIkljb24iLCJpY29uIiwiY3VycmVudCIsInNob3dQaWNrZXIiLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwiQ29udHJvbCIsInB1c2giLCJGcmFnbWVudCIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFuZ2VUeXBlIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25Db250YWluZXIiLCJDb250cm9sU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsImludGVybmFsUHJvcHMiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwib25JbnZhbGlkIiwidGFyZ2V0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJzZXRDdXN0b21WYWxpZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6ZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJUZXh0YXJlYSIsImNoZWNrU2l6ZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBR0QsS0FBSztZQUV6QixNQUFNRSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxLQUFJO2NBQzVDLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0QsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Y0FDNUQsTUFBTUcsR0FBRyxHQUFHLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUlMLE1BQU0sRUFBRTtjQUM1QyxNQUFNO2dCQUFFTSxLQUFLO2dCQUFFLEdBQUdDO2NBQUksQ0FBRSxHQUFHVCxNQUFNO2NBQ2pDLE9BQU9SLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDakIsTUFBQSxDQUFBa0IsUUFBUTtnQkFBQ1AsR0FBRyxFQUFFQSxHQUFHO2dCQUFFRyxLQUFLLEVBQUVBLEtBQUs7Z0JBQUEsR0FBTUM7Y0FBSSxFQUFJO1lBQ3RELENBQUMsQ0FBQztZQUVGLE1BQU1JLFVBQVUsR0FBRztjQUNsQkMsTUFBTSxFQUFFLFFBQVE7Y0FDaEJDLEdBQUcsRUFBRTthQUNMO1lBQ0QsTUFBTUMsU0FBUyxHQUFHcEIsS0FBSyxDQUFDb0IsU0FBUyxJQUFJLEtBQUs7WUFDMUMsTUFBTUMsR0FBRyxHQUFHLDBDQUEwQ0osVUFBVSxDQUFDRyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0UsT0FDQ3hCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVEO1lBQUcsR0FDakJyQixLQUFLLENBQUNZLEtBQUssSUFBSWhCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTyxTQUFTLEVBQUM7WUFBVyxHQUFFdEIsS0FBSyxDQUFDWSxLQUFLLENBQVEsRUFDaEVoQixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFDO1lBQTRCLEdBQUVwQixNQUFNLENBQU8sQ0FDckQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBS087VUFBVyxNQUFNbUIsUUFBUSxHQUFBTyxPQUFBLENBQUFQLFFBQUEsR0FBdUQsSUFBQXBCLE1BQUEsQ0FBQTRCLFVBQVUsRUFBQyxVQUNqR3hCLEtBQWEsRUFDYnlCLEdBQWdDO1lBRWhDLE1BQU07Y0FBRUMsT0FBTztjQUFFQyxRQUFRO2NBQUVMLFNBQVM7Y0FBRU0sUUFBUTtjQUFFaEI7WUFBSyxDQUFFLEdBQUdaLEtBQUs7WUFDL0QsTUFBTSxDQUFDNkIsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBbEMsTUFBQSxDQUFBbUMsUUFBUSxFQUFVLENBQUMsQ0FBQ0wsT0FBTyxDQUFDO1lBRXRELElBQUE5QixNQUFBLENBQUFvQyxTQUFTLEVBQUMsTUFBSztjQUNkLElBQUlOLE9BQU8sS0FBS0csS0FBSyxFQUFFO2NBQ3ZCQyxRQUFRLENBQUMsQ0FBQyxDQUFDSixPQUFPLENBQUM7WUFDcEIsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsTUFBTU8sWUFBWSxHQUFJQyxLQUEwQyxJQUFVO2NBQ3pFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkwsUUFBUSxDQUFDLENBQUNELEtBQUssQ0FBQztjQUNoQkQsUUFBUSxJQUFJQSxRQUFRLENBQUNNLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBSWIsR0FBRyxHQUFXLGdCQUFnQkMsU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQzlERCxHQUFHLElBQUlNLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNsQyxNQUFNUyxVQUFVLEdBQVdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRXRDLEtBQUssQ0FBQztZQUVuRCxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDdUMsT0FBTyxDQUFFQyxJQUFZLElBQVU7Y0FDM0UsT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsTUFBTSxHQUFHbEMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0QsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUQsTUFBTW9DLElBQUksR0FBRzFDLEtBQUssQ0FBQzBDLElBQUksSUFBSSxvQkFBb0I7WUFDL0MsTUFBTUMsRUFBRSxHQUFHM0MsS0FBSyxDQUFDMkMsRUFBRSxJQUFJLEdBQUdELElBQUksSUFBSWhDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUk4QixNQUFNLEVBQUU7WUFFL0QsTUFBTUcsV0FBVyxHQUFJVixLQUFpQixJQUFLQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtZQUNsRSxPQUNDdkMsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBRUQsR0FBRztjQUFFd0IsT0FBTyxFQUFFRDtZQUFXLEdBQ3hDaEQsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQ0NVLEdBQUcsRUFBRUEsR0FBRztjQUNScUIsSUFBSSxFQUFDLFVBQVU7Y0FDZnhCLFNBQVMsRUFBQyxxQkFBcUI7Y0FDL0JxQixFQUFFLEVBQUVBLEVBQUU7Y0FDTkQsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZoQixPQUFPLEVBQUVHLEtBQUs7Y0FDZEQsUUFBUSxFQUFFSyxZQUFZO2NBQUEsR0FDbEJHO1lBQVUsRUFDYixFQUNGeEMsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9PLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ3lCLE9BQU8sRUFBRUo7WUFBRSxHQUNqRC9DLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxlQUNDbkIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtpQyxPQUFPLEVBQUM7WUFBVSxHQUN0QnBELE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFVa0MsTUFBTSxFQUFDO1lBQWMsRUFBWSxDQUN0QyxDQUNBLEVBQ1ByRCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsZUFBT0gsS0FBSyxDQUFRLENBQ2IsQ0FDSDtVQUVSLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REYsSUFBQWhCLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsU0FBVXFELElBQUlBLENBQUNsRCxLQUErQjtZQUM5RCxNQUFNO2NBQUVtRCxRQUFRO2NBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUdwRCxLQUFLO1lBQ3hDLE1BQU1xRCxZQUFZLEdBQUluQixLQUFpQyxJQUFVO2NBQ2hFQSxLQUFLLENBQUNvQixjQUFjLEVBQUU7Y0FDdEJwQixLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2Qm5DLEtBQUssQ0FBQ21ELFFBQVEsQ0FBQ2pCLEtBQUssQ0FBQztZQUN0QixDQUFDO1lBRUQsT0FDQ3RDLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFNb0MsUUFBUSxFQUFFRSxZQUFZO2NBQUEsR0FBTUQ7WUFBUyxHQUN6Q3BELEtBQUssQ0FBQ3VELFFBQVEsQ0FDVDtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBM0QsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJELE1BQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNEQsUUFBQSxHQUFBNUQsT0FBQTtVQUtNLFNBQVU2RCxJQUFJQSxDQUFBO1lBQ25CLE1BQU07Y0FBRUMsS0FBSztjQUFFM0Q7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQUcsZUFBZSxHQUFFO1lBQzFDLElBQUk1RCxLQUFLLENBQUM4QyxJQUFJLEtBQUssTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUV0QyxPQUNDbEQsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFBLENBQUFLLElBQUk7Y0FDSnBELEdBQUcsRUFBQyxNQUFNO2NBQ1ZxRCxJQUFJLEVBQUMsVUFBVTtjQUNmeEMsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQnVCLE9BQU8sRUFBRUEsQ0FBQSxLQUFPYyxLQUFLLENBQUNJLE9BQWUsQ0FBQ0MsVUFBVTtZQUFFLEVBQ2pEO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVvRSxLQUFLQSxDQUFDO1lBQ2hDQyxJQUFJO1lBQ0pDLE9BQU87WUFDUDdDLFNBQVM7WUFDVGlDO1VBQVEsQ0FNUjtZQUVBLElBQUksQ0FBQ1csSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNN0MsR0FBRyxHQUFHLHdCQUF3QkMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN0RSxPQUNDMUIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQjhDLE9BQU8sRSxLQUFHWixRQUFRLENBQ2I7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQTNELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxTQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQTRELFFBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBd0UsS0FBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF5RSxLQUFBLEdBQUF6RSxPQUFBO1VBRU0sU0FBVTBFLGFBQWFBLENBQUE7WUFDekIsTUFBTTtjQUFFdkU7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQUcsZUFBZSxHQUFFO1lBQ25DLE1BQU1ZLEtBQUssR0FBRztjQUNWQyxRQUFRLEVBQUVMLFNBQUEsQ0FBQU0sUUFBUTtjQUNsQkMsSUFBSSxFQUFFTixLQUFBLENBQUFYLElBQUk7Y0FDVjVDLE9BQU8sRUFBRTthQUNaO1lBQ0QsTUFBTVosTUFBTSxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUNzRSxLQUFLLENBQUN4RSxLQUFLLENBQUM4QyxJQUFJLENBQUMsRUFBRTtjQUNyQixNQUFNOEIsT0FBTyxHQUFHSixLQUFLLENBQUN4RSxLQUFLLENBQUM4QyxJQUFJLENBQUM7Y0FDakM1QyxNQUFNLENBQUMyRSxJQUFJLENBQUNqRixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQzZELE9BQU87Z0JBQUNuRSxHQUFHLEVBQUM7Y0FBUyxFQUFHLENBQUM7O1lBQ3pDO1lBQ0QsSUFBSSxDQUFDLENBQUNULEtBQUssQ0FBQzhELElBQUksRUFBRTtjQUNkNUQsTUFBTSxDQUFDMkUsSUFBSSxDQUFDakYsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxLQUFBLENBQUFULElBQUk7Z0JBQUNwRCxHQUFHLEVBQUM7Y0FBTSxFQUFHLENBQUM7O1lBQ25DO1lBRUQsT0FBT2IsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUFuQixNQUFBLENBQUFrQixPQUFBLENBQUFnRSxRQUFBLFFBQUc1RSxNQUFNLENBQUk7VUFDeEI7VUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJELE1BQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNEQsUUFBQSxHQUFBNUQsT0FBQTtVQUNNLFNBQVVnRSxJQUFJQSxDQUFBO1lBQ2hCLE1BQU07Y0FDRjdELEtBQUssRUFBRTtnQkFBRThEO2NBQUk7WUFBRSxDQUNsQixHQUFHLElBQUFMLFFBQUEsQ0FBQUcsZUFBZSxHQUFFO1lBQ3JCLElBQUksQ0FBQ0UsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixPQUFPbEUsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFBLENBQUFLLElBQU87Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUV4QyxTQUFTLEVBQUM7WUFBWSxFQUFHO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUExQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEQsUUFBQSxHQUFBNUQsT0FBQTtVQUdPO1VBQVcsU0FBVWtGLEtBQUtBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxRQUFRO1lBQUUxQjtVQUFRLElBQWtCLEVBQUU7WUFDbkYsTUFBTTtjQUFFYixJQUFJO2NBQUVDO1lBQUUsQ0FBRSxHQUFHLElBQUFjLFFBQUEsQ0FBQUcsZUFBZSxHQUFFO1lBRXRDLE1BQU1zQixRQUFRLEdBQUc7Y0FDaEJDLFFBQVEsRUFBRSxnQkFBZ0I7Y0FDMUJDLEtBQUssRUFBRSx5QkFBeUI7Y0FDaENDLE1BQU0sRUFBRSwwQkFBMEI7Y0FDbEMsY0FBYyxFQUFFO2FBQ2hCO1lBRUQsSUFBSWhFLEdBQUcsR0FBRyxvQkFBb0I2RCxRQUFRLENBQUNELFFBQVEsQ0FBQyxHQUFHLElBQUlDLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbEYsSUFBSUQsUUFBUSxFQUFFM0QsR0FBRyxJQUFJLGNBQWM7WUFDbkMsT0FDQ3pCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFBbkIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBZ0UsUUFBQSxRQUNDbEYsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9nQyxPQUFPLEVBQUVKLEVBQUUsSUFBSUQsSUFBSTtjQUFFcEIsU0FBUyxFQUFFRDtZQUFHLEdBQ3pDekIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBQztZQUFlLEcsS0FBR2lDLFFBQVEsQ0FBUSxDQUMzQyxDQUNOO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUEzRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEQsUUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUEyRCxNQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTZFLFFBQVFBLENBQUE7WUFDcEIsTUFBTTtjQUNGWSxLQUFLO2NBQ0xDO1lBQVEsQ0FDWCxHQUFHLElBQUE5QixRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUNyQixNQUFNNEIsVUFBVSxHQUNadEQsS0FBcUQsSUFDL0M7Y0FDTkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJvRCxRQUFRLENBQUM7Z0JBQ0wsR0FBR0QsS0FBSztnQkFDUnhDLElBQUksRUFBRXdDLEtBQUssQ0FBQ3hDLElBQUksS0FBSyxVQUFVLEdBQUcsTUFBTSxHQUFHO2VBRTlDLENBQUM7WUFDTixDQUFDO1lBQ0QsTUFBTTJDLEtBQUssR0FBRztjQUNWbkUsU0FBUyxFQUFFLFVBQVU7Y0FDckJ1QixPQUFPLEVBQUUyQyxVQUFVO2NBQ25CMUIsSUFBSSxFQUFFd0IsS0FBSyxDQUFDeEMsSUFBSSxLQUFLLFVBQVUsR0FBRyxLQUFLLEdBQUc7YUFDN0M7WUFFRCxPQUFPbEQsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFBLENBQUFrQyxVQUFVO2NBQUEsR0FBS0Q7WUFBSyxFQUFJO1VBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBRSxLQUFBLEdBQUE5RixPQUFBO1VBR08sTUFBTStGLFlBQVksR0FBQXJFLE9BQUEsQ0FBQXFFLFlBQUEsR0FBc0NELEtBQUssQ0FBQ0UsYUFBYSxDQUFDLEVBQUUsQ0FBQztVQUMvRSxNQUFNakMsZUFBZSxHQUFHQSxDQUFBLEtBQTBCK0IsS0FBSyxDQUFDRyxVQUFVLENBQUNGLFlBQVksQ0FBQztVQUFDckUsT0FBQSxDQUFBcUMsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0p4RixJQUFBaEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRELFFBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBa0csY0FBQSxHQUFBbEcsT0FBQTtVQUVBLElBQUFtRyxjQUFBLEdBQUFuRyxPQUFBO1VBRU0sU0FBVW9HLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUNMVixRQUFRO2NBQ1JELEtBQUs7Y0FDTHpELEtBQUs7Y0FDTEMsUUFBUTtjQUNSOUIsS0FBSyxFQUFFO2dCQUFFMEMsSUFBSTtnQkFBRUMsRUFBRTtnQkFBRXVEO2NBQVcsQ0FBRTtjQUNoQ2xHLEtBQUs7Y0FDTDJEO1lBQUssQ0FDTCxHQUFHLElBQUFGLFFBQUEsQ0FBQUcsZUFBZSxHQUFFO1lBQ3JCLElBQUl4QixVQUFVLEdBQVc7Y0FBRSxHQUFHcEM7WUFBSyxDQUFFO1lBQ3JDLElBQUFKLE1BQUEsQ0FBQW9DLFNBQVMsRUFBQyxNQUFLO2NBQ2RGLFFBQVEsQ0FBQzlCLEtBQUssQ0FBQzZCLEtBQUssQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQzdCLEtBQUssQ0FBQzZCLEtBQUssQ0FBQyxDQUFDO1lBRWpCa0UsY0FBQSxDQUFBSSxhQUFhLENBQUM1RCxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDO1lBRXRELE1BQU1QLFlBQVksR0FBSUMsS0FBb0MsSUFBVTtjQUNuRSxJQUFJLENBQUMsQ0FBQ2xDLEtBQUssQ0FBQzRCLFFBQVEsSUFBSSxPQUFPNUIsS0FBSyxDQUFDNEIsUUFBUSxLQUFLLFVBQVUsRUFBRTVCLEtBQUssQ0FBQzRCLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO2NBQ25GLE1BQU1rRSxZQUFZLEdBQUdsRSxLQUFLLENBQUNtRSxhQUFhLENBQUN4RSxLQUFLO2NBQzlDQyxRQUFRLENBQUNzRSxZQUFZLENBQUM7Y0FDdEJiLFFBQVEsQ0FBQztnQkFDUixHQUFHRCxLQUFLO2dCQUNSZ0IsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCekUsS0FBSyxFQUFFdUU7ZUFDUCxDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU1YLEtBQUssR0FBRztjQUNiOUMsRUFBRSxFQUFFQSxFQUFFLElBQUlELElBQUk7Y0FDZHdELFdBQVcsRUFBRUEsV0FBVyxJQUFJLEVBQUU7Y0FDOUJyRSxLQUFLLEVBQUVBLEtBQUssSUFBSTthQUNoQjtZQUNELE9BQ0NqQyxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQWdFLFFBQUEsUUFDQ2xGLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUNDd0YsU0FBUyxFQUFHckUsS0FBMkMsSUFBSTtnQkFDMUQsTUFBTTtrQkFBRXNFO2dCQUFNLENBQUUsR0FBR3RFLEtBQUs7Z0JBQ3hCLElBQUlzRSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsWUFBWSxFQUFFO2tCQUNqQ0YsTUFBTSxDQUFDRyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQzs7Z0JBRW5EQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVuRSxJQUFJLEVBQUVSLEtBQUssQ0FBQztjQUN2QyxDQUFDO2NBQ0RULEdBQUcsRUFBRWtDLEtBQUs7Y0FBQSxHQUNOdkIsVUFBVTtjQUNkTSxJQUFJLEVBQUVBLElBQUk7Y0FDVmQsUUFBUSxFQUFFSyxZQUFZO2NBQ3RCYSxJQUFJLEVBQUV3QyxLQUFLLENBQUN4QyxJQUFJO2NBQUEsR0FDWjJDO1lBQUssRUFDUixFQUNGN0YsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRixjQUFBLENBQUF6QixhQUFhLE9BQUcsQ0FDZjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBM0UsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQTRELFFBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBaUgsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFrSCxRQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQW1ILE1BQUEsR0FBQW5ILE9BQUE7VUFZTyxXQVZQOzs7Ozs7Ozs7O1VBVWlCLFNBQ1JvSCxLQUFLQSxDQUFDakgsS0FBYTtZQUMzQixNQUFNO2NBQUVrSCxRQUFRO2NBQUVDLFlBQVk7Y0FBRUMsT0FBTztjQUFFOUYsU0FBUztjQUFFVixLQUFLO2NBQUUyQyxRQUFRO2NBQUVPLElBQUk7Y0FBRWhCO1lBQUksQ0FBRSxHQUFHOUMsS0FBSztZQUN6RixNQUFNLENBQUM2QixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbEMsTUFBQSxDQUFBa0IsT0FBSyxDQUFDaUIsUUFBUSxDQUFTL0IsS0FBSyxDQUFDNkIsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuRSxNQUFNLENBQUN5RCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUEzRixNQUFBLENBQUFtQyxRQUFRLEVBQVM7Y0FBRWU7WUFBSSxDQUFFLENBQUM7WUFDcEQsTUFBTWEsS0FBSyxHQUF1QyxJQUFBL0QsTUFBQSxDQUFBeUgsTUFBTSxFQUFDLElBQUksQ0FBQztZQUM5RCxJQUFJaEcsR0FBRyxHQUFXLFlBQVlDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEUsSUFBSXRCLEtBQUssQ0FBQzhDLElBQUksS0FBSyxNQUFNLEVBQUV6QixHQUFHLElBQUksa0JBQWtCO1lBQ3BELElBQUksQ0FBQyxDQUFDeUMsSUFBSSxFQUFFekMsR0FBRyxJQUFJLGtCQUFrQjtZQUNyQyxJQUFJLENBQUMsQ0FBQ3lDLElBQUksSUFBSXNELE9BQU8sS0FBSyxVQUFVLEVBQUUvRixHQUFHLElBQUksaUJBQWlCO1lBQzlELElBQUlyQixLQUFLLENBQUM4QyxJQUFJLEtBQUssVUFBVSxFQUFFekIsR0FBRyxJQUFJLHNCQUFzQjtZQUM1RCxNQUFNNkQsUUFBUSxHQUFHO2NBQ2hCb0MsUUFBUSxFQUFFLHFCQUFxQjtjQUMvQm5DLFFBQVEsRUFBRTthQUNWO1lBRUQsSUFBSW5GLEtBQUssQ0FBQ29ILE9BQU8sSUFBSWxDLFFBQVEsQ0FBQ2xGLEtBQUssQ0FBQ29ILE9BQU8sQ0FBQyxFQUFFL0YsR0FBRyxJQUFJLElBQUk2RCxRQUFRLENBQUNsRixLQUFLLENBQUNvSCxPQUFPLENBQUMsRUFBRTtZQUVsRixNQUFNRyxhQUFhLEdBQXVCO2NBQUV2SCxLQUFLO2NBQUVzRixLQUFLO2NBQUVDLFFBQVE7Y0FBRTFELEtBQUs7Y0FBRUMsUUFBUTtjQUFFNkI7WUFBSyxDQUFFO1lBQzVGLE1BQU02RCxVQUFVLEdBQWdCO2NBQUV4QyxRQUFRLEVBQUVoRixLQUFLLENBQUNnRjtZQUFRLENBQUU7WUFDNUQsTUFBTVMsS0FBSyxHQUFvQixFQUFFO1lBQ2pDOzs7WUFHQSxJQUFJMkIsT0FBTyxLQUFLLFVBQVUsRUFBRUksVUFBVSxDQUFDdkMsUUFBUSxHQUFHbUMsT0FBTztZQUN6RCxJQUFJQSxPQUFPLEtBQUssVUFBVSxFQUFFM0IsS0FBSyxDQUFDbkUsU0FBUyxHQUFHRCxHQUFHO1lBRWpELE9BQ0N6QixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQzBDLFFBQUEsQ0FBQW1DLFlBQVksQ0FBQzZCLFFBQVE7Y0FBQzVGLEtBQUssRUFBRTBGO1lBQWEsR0FDMUMzSCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2xCekIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUNnRyxRQUFBLENBQUFkLGVBQWUsT0FBRyxFQUNsQjFDLFFBQVEsRUFDUjNDLEtBQUssSUFBSWhCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsTUFBQSxDQUFBL0IsS0FBSztjQUFBLEdBQUt5QztZQUFVLEdBQUc1RyxLQUFLLENBQVMsRUFDL0N1RyxZQUFZLElBQUl2SCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQS9DLEtBQUs7Y0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQ2dELFFBQVE7Y0FBRS9DLE9BQU8sRUFBRWdEO1lBQVksRUFBSSxDQUM5RCxDQUNpQjtVQUUxQjs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQztVQUtBO1VBS0E7VUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0Q7Ozs7VUFJTyxNQUFNaEIsYUFBYSxHQUFBNUUsT0FBQSxDQUFBNEUsYUFBQSxHQUFHLENBQzVCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmSyxNQUFPdUIsZUFBZTtZQUMzQixPQUFPLENBQUFDLFFBQVM7WUFFaEIsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0FDLFlBQVlELFFBQVEsR0FBRztZQUV2QkUsUUFBUUEsQ0FBQSxHQUFJO1lBQ1osT0FBT0MsR0FBR0EsQ0FBQ0gsUUFBUTtjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFELFFBQVMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxJQUFJRCxlQUFlLENBQUNFLFFBQVEsQ0FBQzs7Y0FFL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUQsUUFBUztZQUN0Qjs7VUFDQXBHLE9BQUEsQ0FBQW1HLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQTlILE1BQUEsR0FBQUMsT0FBQTtVQU9PO1VBQVUsU0FBVW1JLEtBQUtBLENBQUNoSSxLQUFZO1lBQzVDLE1BQU0yRCxLQUFLLEdBQXVDLElBQUEvRCxNQUFBLENBQUF5SCxNQUFNLEdBQW9CO1lBRzVFLE1BQU14RSxPQUFPLEdBQUlYLEtBQUssSUFBVTtjQUMvQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJ3QixLQUFLLENBQUNJLE9BQU8sQ0FBQ3JDLE9BQU8sR0FBRyxJQUFJO2NBQzVCLElBQUksQ0FBQyxDQUFDMUIsS0FBSyxDQUFDNEIsUUFBUSxFQUFFNUIsS0FBSyxDQUFDNEIsUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1FLFVBQVUsR0FBVTtjQUFFLEdBQUdwQztZQUFLLENBQUU7WUFDdEMsT0FBT29DLFVBQVUsQ0FBQ1IsUUFBUTtZQUUxQixNQUFNUCxHQUFHLEdBQVcsMEJBQTBCZSxVQUFVLENBQUNkLFNBQVMsR0FBR2MsVUFBVSxDQUFDZCxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBRWhHLE9BQ0MxQixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBT08sU0FBUyxFQUFFRCxHQUFHO2NBQUV3QixPQUFPLEVBQUVBO1lBQU8sR0FDdENqRCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBT1UsR0FBRyxFQUFFa0MsS0FBSztjQUFBLEdBQU12QixVQUFVO2NBQUVVLElBQUksRUFBQyxPQUFPO2NBQUNsQixRQUFRLEVBQUVpQjtZQUFPLEVBQUksRUFDcEVULFVBQVUsQ0FBQ3hCLEtBQUssSUFBSWhCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPcUIsVUFBVSxDQUFDeEIsS0FBSyxDQUFRLENBQzdDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFoQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0ksT0FBQSxHQUFBcEksT0FBQTtVQUVPO1VBQVcsU0FBVXFJLE1BQU1BLENBQUNsSSxLQUFLO1lBQ3ZDLE1BQU07Y0FBRXVEO1lBQVEsQ0FBRSxHQUFHdkQsS0FBSztZQUMxQixNQUFNbUksVUFBVSxHQUFHO2NBQUUsR0FBR25JO1lBQUssQ0FBRTtZQUMvQixPQUFPbUksVUFBVSxDQUFDNUUsUUFBUTtZQUMxQixPQUFPNEUsVUFBVSxDQUFDbEksT0FBTztZQUV6QixNQUFNNEIsS0FBSyxHQUFHLENBQUMsQ0FBQ3VHLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDckksS0FBSyxDQUFDNkIsS0FBSyxDQUFDLElBQUksRUFBRTtZQUU1RCxJQUFJM0IsTUFBTSxHQUFHLEVBQUU7WUFDZixJQUFJRixLQUFLLENBQUNDLE9BQU8sRUFBRTtjQUNsQkQsS0FBSyxDQUFDQyxPQUFPLENBQUNzQyxPQUFPLENBQUMsQ0FBQytGLElBQUksRUFBRTdILEdBQUcsS0FBSTtnQkFDbkNQLE1BQU0sQ0FBQzJFLElBQUksQ0FBQ2pGLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0gsT0FBQSxDQUFBTSxZQUFZO2tCQUFBLEdBQUtELElBQUk7a0JBQUU3SCxHQUFHLEVBQUVBO2dCQUFHLEVBQUksQ0FBQztjQUNsRCxDQUFDLENBQUM7O1lBRUgsTUFBTWdDLE1BQU0sR0FBR2xDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNELE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVELE1BQU1xQyxFQUFFLEdBQUczQyxLQUFLLENBQUMyQyxFQUFFLElBQUksR0FBR0QsSUFBSSxJQUFJaEMsV0FBVyxDQUFDQyxHQUFHLEVBQUUsSUFBSThCLE1BQU0sRUFBRTtZQUMvRCxNQUFNcEIsR0FBRyxHQUFHLGtCQUFrQjtZQUU5QixPQUNDekIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQnpCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFPZ0MsT0FBTyxFQUFFSjtZQUFFLEdBQUczQyxLQUFLLENBQUNZLEtBQUssQ0FBUyxFQUN6Q2hCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTyxTQUFTLEVBQUVELEdBQUc7Y0FBQSxHQUFNOEc7WUFBVSxHQUNwQ2pJLE1BQU0sRUFDTnFELFFBQVEsQ0FDRCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUEzRCxNQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFXLFNBQVUwSSxZQUFZQSxDQUFDdkksS0FBSztZQUM3QyxNQUFNO2NBQUV1RDtZQUFRLENBQUUsR0FBR3ZELEtBQUs7WUFDMUIsTUFBTW1JLFVBQVUsR0FBRztjQUFFLEdBQUduSTtZQUFLLENBQUU7WUFDL0IsT0FBT21JLFVBQVUsQ0FBQzVFLFFBQVE7WUFFMUIsT0FBTzNELE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLEdBQVlvSDtZQUFVLEdBQUc1RSxRQUFRLENBQVU7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQTNELE1BQUEsR0FBQUMsT0FBQTtVQU9PO1VBQVksU0FBVTJJLE1BQU1BLENBQUN4SSxLQUFhO1lBQ2hELE1BQU07Y0FBRTBCLE9BQU87Y0FBRUUsUUFBUTtjQUFFd0YsT0FBTyxHQUFHLFNBQVM7Y0FBRXpGLFFBQVE7Y0FBRThHLElBQUksR0FBRyxJQUFJO2NBQUVuSDtZQUFTLENBQUcsR0FBR3RCLEtBQUs7WUFFM0YsTUFBTSxDQUFDMEksU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRy9JLE1BQUEsQ0FBQWtCLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBVUwsT0FBTyxDQUFDO1lBRWxFOUIsTUFBQSxDQUFBa0IsT0FBSyxDQUFDa0IsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSTBHLFNBQVMsS0FBS2hILE9BQU8sRUFBRTtjQUMzQmlILFlBQVksQ0FBQ2pILE9BQU8sQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQ0EsT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNTyxZQUFZLEdBQUlDLEtBQW9DLElBQVU7Y0FDbkVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCd0csWUFBWSxDQUFDekcsS0FBSyxDQUFDbUUsYUFBYSxDQUFDM0UsT0FBTyxDQUFDO2NBQ3pDRSxRQUFRLElBQUlBLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFFRCxJQUFJMEcsZUFBZSxHQUFXLHNCQUFzQnRILFNBQVMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUNoRnNILGVBQWUsSUFBSWpILFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUU5QyxJQUFJTixHQUFHLEdBQVdxSCxTQUFTLEdBQUcsa0NBQWtDLEdBQUcsMkJBQTJCO1lBQzlGckgsR0FBRyxJQUFJK0YsT0FBTyxHQUFHLElBQUlBLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbkMvRixHQUFHLElBQUlvSCxJQUFJLEdBQUcsSUFBSUEsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUU3QixNQUFNckcsVUFBVSxHQUFXO2NBQUUsR0FBR3BDO1lBQUssQ0FBRTtZQUV2QyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFFLENBQUN1QyxPQUFPLENBQUNDLElBQUksSUFBRztjQUM3RSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixNQUFNRyxFQUFFLEdBQUczQyxLQUFLLENBQUMyQyxFQUFFLElBQUkzQyxLQUFLLENBQUMwQyxJQUFJLElBQUksb0JBQW9CO1lBRXpELE9BQ0M5QyxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFc0g7WUFBZSxHQUM5QmhKLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUNDTyxTQUFTLEVBQUMsOEJBQThCO2NBQ3hDcUIsRUFBRSxFQUFFQSxFQUFFO2NBQ05HLElBQUksRUFBQyxVQUFVO2NBQ2ZwQixPQUFPLEVBQUVnSCxTQUFTO2NBQ2xCOUcsUUFBUSxFQUFFSyxZQUFZO2NBQUEsR0FDbEJHO1lBQVUsRUFDYixFQUNGeEMsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9PLFNBQVMsRUFBRUQsR0FBRztjQUFFMEIsT0FBTyxFQUFFSjtZQUFFLEdBQ2pDL0MsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBRTtZQUFvQixFQUFJLENBQ2xDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTFCLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVnSixlQUFlQSxDQUFDO1lBQUVDLE9BQU87WUFBRUMsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDN0QsSUFBSSxDQUFDRixPQUFPLEVBQUUsT0FBTyxJQUFJO1lBRXpCLElBQUl6SCxHQUFHLEdBQUcsc0JBQXNCO1lBRWhDLElBQUkySCxTQUFTLElBQUlELE1BQU0sR0FBR0MsU0FBUyxHQUFHLEVBQUUsRUFBRTtjQUN6QzNILEdBQUcsSUFBSTBILE1BQU0sR0FBR0MsU0FBUyxHQUFHLENBQUMsR0FBRywrQkFBK0IsR0FBRyxnQ0FBZ0M7O1lBRW5HLE9BQU9wSixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBTU8sU0FBUyxFQUFFRDtZQUFHLEdBQUcwSCxNQUFNLElBQUksQ0FBQyxDQUFRO1VBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUFuSixNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVb0osYUFBYUEsQ0FBQztZQUFFM0QsS0FBSztZQUFFNEIsUUFBUTtZQUFFQyxZQUFZO1lBQUV0RjtVQUFLLENBQUU7WUFDckUsSUFBSSxDQUFDeUQsS0FBSyxDQUFDZ0IsU0FBUyxJQUFJLENBQUNZLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFOUMsSUFBSUEsUUFBUSxJQUFJckYsS0FBSyxLQUFLLEVBQUUsRUFBRXNGLFlBQVksR0FBR0EsWUFBWSxHQUFHQSxZQUFZLEdBQUc3QixLQUFLLENBQUM2QixZQUFZO1lBRTdGLE9BQU92SCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBTU8sU0FBUyxFQUFDO1lBQXlCLEdBQUU2RixZQUFZLENBQVE7VUFDdkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXZILE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQXFKLFFBQUEsR0FBQXJKLE9BQUE7VUFFTztVQUFVLFNBQVVzSixRQUFRQSxDQUFDbkosS0FBYTtZQUNoRCxNQUFNMkQsS0FBSyxHQUFHM0QsS0FBSyxDQUFDeUIsR0FBRyxJQUFJLElBQUE3QixNQUFBLENBQUF5SCxNQUFNLEdBQUU7WUFDbkMsTUFBTTtjQUFFeUIsT0FBTztjQUFFM0IsWUFBWTtjQUFFdEYsS0FBSyxHQUFHO1lBQUUsQ0FBRSxHQUFHN0IsS0FBSztZQUNuRCxNQUFNLENBQUNzRixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUEzRixNQUFBLENBQUFtQyxRQUFRLEVBQVM7Y0FBRUYsS0FBSztjQUFFc0Y7WUFBWSxDQUFFLENBQUM7WUFFbkUsTUFBTWlDLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLE1BQU07Z0JBQUVDLFlBQVk7Z0JBQUVDO2NBQVksQ0FBRSxHQUFHM0YsS0FBSyxDQUFDSSxPQUFPO2NBRXBELElBQUlzRixZQUFZLEdBQUdDLFlBQVksRUFBRTtnQkFDaEMzRixLQUFLLENBQUNJLE9BQU8sQ0FBQ3dGLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUdILFlBQVksSUFBSTs7WUFFbEQsQ0FBQztZQUNEOzs7WUFHQXpKLE1BQUEsQ0FBQWtCLE9BQUssQ0FBQ2tCLFNBQVMsQ0FBQ29ILFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDOUIsTUFBTW5ILFlBQVksR0FBSUMsS0FBdUMsSUFBVTtjQUN0RWtILFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxDQUFDcEosS0FBSyxDQUFDNEIsUUFBUSxJQUFJLE9BQU81QixLQUFLLENBQUM0QixRQUFRLEtBQUssVUFBVSxFQUFFNUIsS0FBSyxDQUFDNEIsUUFBUSxDQUFDTSxLQUFLLENBQUM7Y0FDbkZxRCxRQUFRLENBQUM7Z0JBQ1IsR0FBR0QsS0FBSztnQkFDUmdCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQnpFLEtBQUssRUFBRUssS0FBSyxDQUFDc0UsTUFBTSxDQUFDM0U7ZUFDcEIsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJTyxVQUFVLEdBQVc7Y0FBRSxHQUFHcEM7WUFBSyxDQUFFO1lBQ3JDLElBQUlxQixHQUFHLEdBQVdyQixLQUFLLENBQUNzQixTQUFTLEdBQUcsR0FBR3RCLEtBQUssQ0FBQ3NCLFNBQVMsZUFBZSxHQUFHLGNBQWM7WUFDdEZELEdBQUcsSUFBSXJCLEtBQUssQ0FBQzJCLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN4Q04sR0FBRyxJQUFJckIsS0FBSyxDQUFDa0gsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBQ3JDLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzNFLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7WUFDbEgsSUFBSWlILFFBQVEsR0FBRyxFQUFFO1lBQ2pCLElBQUl6SixLQUFLLENBQUNnRixRQUFRLEVBQUUzRCxHQUFHLElBQUksY0FBYztZQUV6QyxPQUNDekIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQnpCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUNDVSxHQUFHLEVBQUVrQyxLQUFLO2NBQUEsR0FDTnZCLFVBQVU7Y0FDZE0sSUFBSSxFQUFFMUMsS0FBSyxDQUFDMEMsSUFBSTtjQUNoQmQsUUFBUSxFQUFFSyxZQUFZO2NBQ3RCSixLQUFLLEVBQUVBLEtBQUs7Y0FDWnFFLFdBQVcsRUFBRWxHLEtBQUssQ0FBQ2tHLFdBQVcsSUFBSTtZQUFHLEVBQ3BDLEVBQ0RsRyxLQUFLLENBQUN1RCxRQUFRLEVBQ2YzRCxNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQWlDLGFBQWE7Y0FBQzNELEtBQUssRUFBRUEsS0FBSztjQUFFNEIsUUFBUSxFQUFFbEgsS0FBSyxDQUFDa0gsUUFBUTtjQUFFckYsS0FBSyxFQUFFQSxLQUFLO2NBQUVzRixZQUFZLEVBQUVuSCxLQUFLLENBQUNtSDtZQUFZLEVBQUksRUFDeEduSCxLQUFLLENBQUNZLEtBQUssSUFDWGhCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTyxTQUFTLEVBQUVtSSxRQUFRO2NBQUUxRyxPQUFPLEVBQUUvQyxLQUFLLENBQUMyQztZQUFFLEdBQzNDM0MsS0FBSyxDQUFDWSxLQUFLLENBRWIsRUFDRGhCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUksUUFBQSxDQUFBTCxlQUFlO2NBQUNFLE1BQU0sRUFBRXBGLEtBQUssRUFBRUksT0FBTyxFQUFFbEMsS0FBSyxDQUFDa0gsTUFBTTtjQUFFQyxTQUFTLEVBQUVoSixLQUFLLENBQUMwSixTQUFTO2NBQUVaLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ2xHO1VBRVI7Ozs7Ozs7Ozs7O1VDNURBOztVQUVBekcsTUFBQSxDQUFBc0gsY0FBQSxDQUFBcEksT0FBQTtZQUNBTSxLQUFBO1VBQ0EifQ==