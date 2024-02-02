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
        hash: 2723302190,
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
            console.log(100, props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImtleSIsInBlcmZvcm1hbmNlIiwibm93IiwibGFiZWwiLCJyZXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJDaGVja2JveCIsImRpcmVjdGlvbnMiLCJjb2x1bW4iLCJyb3ciLCJkaXJlY3Rpb24iLCJjbHMiLCJjbGFzc05hbWUiLCJleHBvcnRzIiwiZm9yd2FyZFJlZiIsInJlZiIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJyYW1kb24iLCJuYW1lIiwiaWQiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJ1c2VJbnB1dENvbnRleHQiLCJJY29uIiwiaWNvbiIsImN1cnJlbnQiLCJzaG93UGlja2VyIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJpbnRlcm5hbFByb3BzIiwiY3VycmVudFZhbHVlIiwiY3VycmVudFRhcmdldCIsIl9oYXNFcnJvciIsIm9uSW52YWxpZCIsInRhcmdldCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6ZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJUZXh0YXJlYSIsImNoZWNrU2l6ZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBR0QsS0FBSztZQUN6QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFSCxLQUFLLENBQUM7WUFDdkIsTUFBTUksTUFBTSxHQUFHSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssS0FBSTtjQUM1QyxNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNELE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2NBQzVELE1BQU1HLEdBQUcsR0FBRyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxJQUFJTCxNQUFNLEVBQUU7Y0FDNUMsTUFBTTtnQkFBRU0sS0FBSztnQkFBRSxHQUFHQztjQUFJLENBQUUsR0FBR1QsTUFBTTtjQUNqQyxPQUFPVixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ25CLE1BQUEsQ0FBQW9CLFFBQVE7Z0JBQUNQLEdBQUcsRUFBRUEsR0FBRztnQkFBRUcsS0FBSyxFQUFFQSxLQUFLO2dCQUFBLEdBQU1DO2NBQUksRUFBSTtZQUN0RCxDQUFDLENBQUM7WUFFRixNQUFNSSxVQUFVLEdBQUc7Y0FDbEJDLE1BQU0sRUFBRSxRQUFRO2NBQ2hCQyxHQUFHLEVBQUU7YUFDTDtZQUNELE1BQU1DLFNBQVMsR0FBR3RCLEtBQUssQ0FBQ3NCLFNBQVMsSUFBSSxLQUFLO1lBQzFDLE1BQU1DLEdBQUcsR0FBRywwQ0FBMENKLFVBQVUsQ0FBQ0csU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRS9FLE9BQ0MxQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2pCdkIsS0FBSyxDQUFDYyxLQUFLLElBQUlsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBTU8sU0FBUyxFQUFDO1lBQVcsR0FBRXhCLEtBQUssQ0FBQ2MsS0FBSyxDQUFRLEVBQ2hFbEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBQztZQUE0QixHQUFFcEIsTUFBTSxDQUFPLENBQ3JEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFSLE1BQUEsR0FBQUMsT0FBQTtVQUtPO1VBQVcsTUFBTXFCLFFBQVEsR0FBQU8sT0FBQSxDQUFBUCxRQUFBLEdBQXVELElBQUF0QixNQUFBLENBQUE4QixVQUFVLEVBQUMsVUFDakcxQixLQUFhLEVBQ2IyQixHQUFnQztZQUVoQyxNQUFNO2NBQUVDLE9BQU87Y0FBRUMsUUFBUTtjQUFFTCxTQUFTO2NBQUVNLFFBQVE7Y0FBRWhCO1lBQUssQ0FBRSxHQUFHZCxLQUFLO1lBQy9ELE1BQU0sQ0FBQytCLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQXBDLE1BQUEsQ0FBQXFDLFFBQVEsRUFBVSxDQUFDLENBQUNMLE9BQU8sQ0FBQztZQUV0RCxJQUFBaEMsTUFBQSxDQUFBc0MsU0FBUyxFQUFDLE1BQUs7Y0FDZCxJQUFJTixPQUFPLEtBQUtHLEtBQUssRUFBRTtjQUN2QkMsUUFBUSxDQUFDLENBQUMsQ0FBQ0osT0FBTyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDQSxPQUFPLENBQUMsQ0FBQztZQUNiLE1BQU1PLFlBQVksR0FBSUMsS0FBMEMsSUFBVTtjQUN6RUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJMLFFBQVEsQ0FBQyxDQUFDRCxLQUFLLENBQUM7Y0FDaEJELFFBQVEsSUFBSUEsUUFBUSxDQUFDTSxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUliLEdBQUcsR0FBVyxnQkFBZ0JDLFNBQVMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUM5REQsR0FBRyxJQUFJTSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDbEMsTUFBTVMsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUV4QyxLQUFLLENBQUM7WUFFbkQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQ3lDLE9BQU8sQ0FBRUMsSUFBWSxJQUFVO2NBQzNFLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLE1BQU1DLE1BQU0sR0FBR2xDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNELE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVELE1BQU1vQyxJQUFJLEdBQUc1QyxLQUFLLENBQUM0QyxJQUFJLElBQUksb0JBQW9CO1lBQy9DLE1BQU1DLEVBQUUsR0FBRzdDLEtBQUssQ0FBQzZDLEVBQUUsSUFBSSxHQUFHRCxJQUFJLElBQUloQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxJQUFJOEIsTUFBTSxFQUFFO1lBRS9ELE1BQU1HLFdBQVcsR0FBSVYsS0FBaUIsSUFBS0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7WUFDbEUsT0FDQ3pDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVELEdBQUc7Y0FBRXdCLE9BQU8sRUFBRUQ7WUFBVyxHQUN4Q2xELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUNDVSxHQUFHLEVBQUVBLEdBQUc7Y0FDUnFCLElBQUksRUFBQyxVQUFVO2NBQ2Z4QixTQUFTLEVBQUMscUJBQXFCO2NBQy9CcUIsRUFBRSxFQUFFQSxFQUFFO2NBQ05ELElBQUksRUFBRUEsSUFBSTtjQUNWaEIsT0FBTyxFQUFFRyxLQUFLO2NBQ2RELFFBQVEsRUFBRUssWUFBWTtjQUFBLEdBQ2xCRztZQUFVLEVBQ2IsRUFDRjFDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTyxTQUFTLEVBQUMscUJBQXFCO2NBQUN5QixPQUFPLEVBQUVKO1lBQUUsR0FDakRqRCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUMsT0FBTyxFQUFDO1lBQVUsR0FDdEJ0RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBVWtDLE1BQU0sRUFBQztZQUFjLEVBQVksQ0FDdEMsQ0FDQSxFQUNQdkQsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU9ILEtBQUssQ0FBUSxDQUNiLENBQ0g7VUFFUixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERGLElBQUFsQixNQUFBLEdBQUFDLE9BQUE7VUFHTztVQUFVLFNBQVV1RCxJQUFJQSxDQUFDcEQsS0FBK0I7WUFDOUQsTUFBTTtjQUFFcUQsUUFBUTtjQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHdEQsS0FBSztZQUN4QyxNQUFNdUQsWUFBWSxHQUFJbkIsS0FBaUMsSUFBVTtjQUNoRUEsS0FBSyxDQUFDb0IsY0FBYyxFQUFFO2NBQ3RCcEIsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJyQyxLQUFLLENBQUNxRCxRQUFRLENBQUNqQixLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0N4QyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBTW9DLFFBQVEsRUFBRUUsWUFBWTtjQUFBLEdBQU1EO1lBQVMsR0FDekN0RCxLQUFLLENBQUN5RCxRQUFRLENBQ1Q7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQTdELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFLTSxTQUFVK0QsSUFBSUEsQ0FBQTtZQUNuQixNQUFNO2NBQUVDLEtBQUs7Y0FBRTdEO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUMxQyxJQUFJOUQsS0FBSyxDQUFDZ0QsSUFBSSxLQUFLLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFFdEMsT0FDQ3BELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBSyxJQUFJO2NBQ0pwRCxHQUFHLEVBQUMsTUFBTTtjQUNWcUQsSUFBSSxFQUFDLFVBQVU7Y0FDZnhDLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0J1QixPQUFPLEVBQUVBLENBQUEsS0FBT2MsS0FBSyxDQUFDSSxPQUFlLENBQUNDLFVBQVU7WUFBRSxFQUNqRDtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdEUsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVc0UsS0FBS0EsQ0FBQztZQUNoQ0MsSUFBSTtZQUNKQyxPQUFPO1lBQ1A3QyxTQUFTO1lBQ1RpQztVQUFRLENBTVI7WUFFQSxJQUFJLENBQUNXLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTdDLEdBQUcsR0FBRyx3QkFBd0JDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEUsT0FDQzVCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTyxTQUFTLEVBQUVEO1lBQUcsR0FDbEI4QyxPQUFPLEUsS0FBR1osUUFBUSxDQUNiO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUE3RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUUsU0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUE4RCxRQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQTBFLEtBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBMkUsS0FBQSxHQUFBM0UsT0FBQTtVQUVNLFNBQVU0RSxhQUFhQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXpFO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUNuQyxNQUFNWSxLQUFLLEdBQUc7Y0FDVkMsUUFBUSxFQUFFTCxTQUFBLENBQUFNLFFBQVE7Y0FDbEJDLElBQUksRUFBRU4sS0FBQSxDQUFBWCxJQUFJO2NBQ1Y1QyxPQUFPLEVBQUU7YUFDWjtZQUNELE1BQU1aLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDc0UsS0FBSyxDQUFDMUUsS0FBSyxDQUFDZ0QsSUFBSSxDQUFDLEVBQUU7Y0FDckIsTUFBTThCLE9BQU8sR0FBR0osS0FBSyxDQUFDMUUsS0FBSyxDQUFDZ0QsSUFBSSxDQUFDO2NBQ2pDNUMsTUFBTSxDQUFDMkUsSUFBSSxDQUFDbkYsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUM2RCxPQUFPO2dCQUFDbkUsR0FBRyxFQUFDO2NBQVMsRUFBRyxDQUFDOztZQUN6QztZQUNELElBQUksQ0FBQyxDQUFDWCxLQUFLLENBQUNnRSxJQUFJLEVBQUU7Y0FDZDVELE1BQU0sQ0FBQzJFLElBQUksQ0FBQ25GLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUQsS0FBQSxDQUFBVCxJQUFJO2dCQUFDcEQsR0FBRyxFQUFDO2NBQU0sRUFBRyxDQUFDOztZQUNuQztZQUVELE9BQU9mLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFBckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBZ0UsUUFBQSxRQUFHNUUsTUFBTSxDQUFJO1VBQ3hCO1VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJELElBQUFSLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFDTSxTQUFVa0UsSUFBSUEsQ0FBQTtZQUNoQixNQUFNO2NBQ0YvRCxLQUFLLEVBQUU7Z0JBQUVnRTtjQUFJO1lBQUUsQ0FDbEIsR0FBRyxJQUFBTCxRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUNyQixJQUFJLENBQUNFLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsT0FBT3BFLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBSyxJQUFPO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFeEMsU0FBUyxFQUFDO1lBQVksRUFBRztVQUN6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBNUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFHTztVQUFXLFNBQVVvRixLQUFLQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtZQUFFMUI7VUFBUSxJQUFrQixFQUFFO1lBQ25GLE1BQU07Y0FBRWIsSUFBSTtjQUFFQztZQUFFLENBQUUsR0FBRyxJQUFBYyxRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUV0QyxNQUFNc0IsUUFBUSxHQUFHO2NBQ2hCQyxRQUFRLEVBQUUsZ0JBQWdCO2NBQzFCQyxLQUFLLEVBQUUseUJBQXlCO2NBQ2hDQyxNQUFNLEVBQUUsMEJBQTBCO2NBQ2xDLGNBQWMsRUFBRTthQUNoQjtZQUVELElBQUloRSxHQUFHLEdBQUcsb0JBQW9CNkQsUUFBUSxDQUFDRCxRQUFRLENBQUMsR0FBRyxJQUFJQyxRQUFRLENBQUNELFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xGLElBQUlELFFBQVEsRUFBRTNELEdBQUcsSUFBSSxjQUFjO1lBQ25DLE9BQ0MzQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQXJCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQWdFLFFBQUEsUUFDQ3BGLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFPZ0MsT0FBTyxFQUFFSixFQUFFLElBQUlELElBQUk7Y0FBRXBCLFNBQVMsRUFBRUQ7WUFBRyxHQUN6QzNCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTyxTQUFTLEVBQUM7WUFBZSxHLEtBQUdpQyxRQUFRLENBQVEsQ0FDM0MsQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBN0QsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBNkQsTUFBQSxHQUFBN0QsT0FBQTtVQUVNLFNBQVUrRSxRQUFRQSxDQUFBO1lBQ3BCLE1BQU07Y0FDRlksS0FBSztjQUNMQztZQUFRLENBQ1gsR0FBRyxJQUFBOUIsUUFBQSxDQUFBRyxlQUFlLEdBQUU7WUFDckIsTUFBTTRCLFVBQVUsR0FDWnRELEtBQXFELElBQy9DO2NBQ05BLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCb0QsUUFBUSxDQUFDO2dCQUNMLEdBQUdELEtBQUs7Z0JBQ1J4QyxJQUFJLEVBQUV3QyxLQUFLLENBQUN4QyxJQUFJLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRztlQUU5QyxDQUFDO1lBQ04sQ0FBQztZQUNELE1BQU0yQyxLQUFLLEdBQUc7Y0FDVm5FLFNBQVMsRUFBRSxVQUFVO2NBQ3JCdUIsT0FBTyxFQUFFMkMsVUFBVTtjQUNuQjFCLElBQUksRUFBRXdCLEtBQUssQ0FBQ3hDLElBQUksS0FBSyxVQUFVLEdBQUcsS0FBSyxHQUFHO2FBQzdDO1lBRUQsT0FBT3BELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBa0MsVUFBVTtjQUFBLEdBQUtEO1lBQUssRUFBSTtVQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQUUsS0FBQSxHQUFBaEcsT0FBQTtVQUdPLE1BQU1pRyxZQUFZLEdBQUFyRSxPQUFBLENBQUFxRSxZQUFBLEdBQXNDRCxLQUFLLENBQUNFLGFBQWEsQ0FBQyxFQUFFLENBQUM7VUFDL0UsTUFBTWpDLGVBQWUsR0FBR0EsQ0FBQSxLQUEwQitCLEtBQUssQ0FBQ0csVUFBVSxDQUFDRixZQUFZLENBQUM7VUFBQ3JFLE9BQUEsQ0FBQXFDLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKeEYsSUFBQWxFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4RCxRQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQW9HLGNBQUEsR0FBQXBHLE9BQUE7VUFFQSxJQUFBcUcsY0FBQSxHQUFBckcsT0FBQTtVQUVNLFNBQVVzRyxlQUFlQSxDQUFBO1lBQzlCLE1BQU07Y0FDTFYsUUFBUTtjQUNSRCxLQUFLO2NBQ0x6RCxLQUFLO2NBQ0xDLFFBQVE7Y0FDUmhDLEtBQUssRUFBRTtnQkFBRTRDLElBQUk7Z0JBQUVDLEVBQUU7Z0JBQUV1RDtjQUFXLENBQUU7Y0FDaENwRyxLQUFLO2NBQ0w2RDtZQUFLLENBQ0wsR0FBRyxJQUFBRixRQUFBLENBQUFHLGVBQWUsR0FBRTtZQUNyQixJQUFJeEIsVUFBVSxHQUFXO2NBQUUsR0FBR3RDO1lBQUssQ0FBRTtZQUNyQyxJQUFBSixNQUFBLENBQUFzQyxTQUFTLEVBQUMsTUFBSztjQUNkRixRQUFRLENBQUNoQyxLQUFLLENBQUMrQixLQUFLLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUMvQixLQUFLLENBQUMrQixLQUFLLENBQUMsQ0FBQztZQUVqQmtFLGNBQUEsQ0FBQUksYUFBYSxDQUFDNUQsT0FBTyxDQUFDQyxJQUFJLElBQUksT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUMsQ0FBQztZQUV0RCxNQUFNUCxZQUFZLEdBQUlDLEtBQW9DLElBQVU7Y0FDbkUsSUFBSSxDQUFDLENBQUNwQyxLQUFLLENBQUM4QixRQUFRLElBQUksT0FBTzlCLEtBQUssQ0FBQzhCLFFBQVEsS0FBSyxVQUFVLEVBQUU5QixLQUFLLENBQUM4QixRQUFRLENBQUNNLEtBQUssQ0FBQztjQUNuRixNQUFNa0UsWUFBWSxHQUFHbEUsS0FBSyxDQUFDbUUsYUFBYSxDQUFDeEUsS0FBSztjQUM5Q0MsUUFBUSxDQUFDc0UsWUFBWSxDQUFDO2NBQ3RCYixRQUFRLENBQUM7Z0JBQ1IsR0FBR0QsS0FBSztnQkFDUmdCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQnpFLEtBQUssRUFBRXVFO2VBQ1AsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNWCxLQUFLLEdBQUc7Y0FDYjlDLEVBQUUsRUFBRUEsRUFBRSxJQUFJRCxJQUFJO2NBQ2R3RCxXQUFXLEVBQUVBLFdBQVcsSUFBSSxFQUFFO2NBQzlCckUsS0FBSyxFQUFFQSxLQUFLLElBQUk7YUFDaEI7WUFDRCxPQUNDbkMsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUFyQixNQUFBLENBQUFvQixPQUFBLENBQUFnRSxRQUFBLFFBQ0NwRixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FDQ3dGLFNBQVMsRUFBR3JFLEtBQTJDLElBQUk7Z0JBQzFELE1BQU07a0JBQUVzRTtnQkFBTSxDQUFFLEdBQUd0RSxLQUFLO2dCQUN4QixJQUFJc0UsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFlBQVksRUFBRTtrQkFDakNGLE1BQU0sQ0FBQ0csaUJBQWlCLENBQUMsd0JBQXdCLENBQUM7O2dCQUVuRDNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRXlDLElBQUksRUFBRVIsS0FBSyxDQUFDO2NBQ3ZDLENBQUM7Y0FDRFQsR0FBRyxFQUFFa0MsS0FBSztjQUFBLEdBQ052QixVQUFVO2NBQ2RNLElBQUksRUFBRUEsSUFBSTtjQUNWZCxRQUFRLEVBQUVLLFlBQVk7Y0FDdEJhLElBQUksRUFBRXdDLEtBQUssQ0FBQ3hDLElBQUk7Y0FBQSxHQUNaMkM7WUFBSyxFQUNSLEVBQ0YvRixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lGLGNBQUEsQ0FBQXpCLGFBQWEsT0FBRyxDQUNmO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUE3RSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBOEQsUUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUFpSCxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQWtILFFBQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBbUgsTUFBQSxHQUFBbkgsT0FBQTtVQVlPLFdBVlA7Ozs7Ozs7Ozs7VUFVaUIsU0FDUm9ILEtBQUtBLENBQUNqSCxLQUFhO1lBQzNCLE1BQU07Y0FBRWtILFFBQVE7Y0FBRUMsWUFBWTtjQUFFQyxPQUFPO2NBQUU1RixTQUFTO2NBQUVWLEtBQUs7Y0FBRTJDLFFBQVE7Y0FBRU8sSUFBSTtjQUFFaEI7WUFBSSxDQUFFLEdBQUdoRCxLQUFLO1lBQ3pGLE1BQU0sQ0FBQytCLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdwQyxNQUFBLENBQUFvQixPQUFLLENBQUNpQixRQUFRLENBQVNqQyxLQUFLLENBQUMrQixLQUFLLElBQUksRUFBRSxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3lELEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQTdGLE1BQUEsQ0FBQXFDLFFBQVEsRUFBUztjQUFFZTtZQUFJLENBQUUsQ0FBQztZQUNwRCxNQUFNYSxLQUFLLEdBQXVDLElBQUFqRSxNQUFBLENBQUF5SCxNQUFNLEVBQUMsSUFBSSxDQUFDO1lBQzlELElBQUk5RixHQUFHLEdBQVcsWUFBWUMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoRSxJQUFJeEIsS0FBSyxDQUFDZ0QsSUFBSSxLQUFLLE1BQU0sRUFBRXpCLEdBQUcsSUFBSSxrQkFBa0I7WUFDcEQsSUFBSSxDQUFDLENBQUN5QyxJQUFJLEVBQUV6QyxHQUFHLElBQUksa0JBQWtCO1lBQ3JDLElBQUksQ0FBQyxDQUFDeUMsSUFBSSxJQUFJb0QsT0FBTyxLQUFLLFVBQVUsRUFBRTdGLEdBQUcsSUFBSSxpQkFBaUI7WUFDOUQsSUFBSXZCLEtBQUssQ0FBQ2dELElBQUksS0FBSyxVQUFVLEVBQUV6QixHQUFHLElBQUksc0JBQXNCO1lBQzVELE1BQU02RCxRQUFRLEdBQUc7Y0FDaEJrQyxRQUFRLEVBQUUscUJBQXFCO2NBQy9CakMsUUFBUSxFQUFFO2FBQ1Y7WUFFRCxJQUFJckYsS0FBSyxDQUFDb0gsT0FBTyxJQUFJaEMsUUFBUSxDQUFDcEYsS0FBSyxDQUFDb0gsT0FBTyxDQUFDLEVBQUU3RixHQUFHLElBQUksSUFBSTZELFFBQVEsQ0FBQ3BGLEtBQUssQ0FBQ29ILE9BQU8sQ0FBQyxFQUFFO1lBRWxGLE1BQU1HLGFBQWEsR0FBdUI7Y0FBRXZILEtBQUs7Y0FBRXdGLEtBQUs7Y0FBRUMsUUFBUTtjQUFFMUQsS0FBSztjQUFFQyxRQUFRO2NBQUU2QjtZQUFLLENBQUU7WUFDNUYsTUFBTTJELFVBQVUsR0FBZ0I7Y0FBRXRDLFFBQVEsRUFBRWxGLEtBQUssQ0FBQ2tGO1lBQVEsQ0FBRTtZQUM1RCxNQUFNUyxLQUFLLEdBQW9CLEVBQUU7WUFDakM7OztZQUdBLElBQUl5QixPQUFPLEtBQUssVUFBVSxFQUFFSSxVQUFVLENBQUNyQyxRQUFRLEdBQUdpQyxPQUFPO1lBQ3pELElBQUlBLE9BQU8sS0FBSyxVQUFVLEVBQUV6QixLQUFLLENBQUNuRSxTQUFTLEdBQUdELEdBQUc7WUFFakQsT0FDQzNCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEMsUUFBQSxDQUFBbUMsWUFBWSxDQUFDMkIsUUFBUTtjQUFDMUYsS0FBSyxFQUFFd0Y7WUFBYSxHQUMxQzNILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVEO1lBQUcsR0FDbEIzQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzhGLFFBQUEsQ0FBQVosZUFBZSxPQUFHLEVBQ2xCMUMsUUFBUSxFQUNSM0MsS0FBSyxJQUFJbEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUM2RixNQUFBLENBQUE3QixLQUFLO2NBQUEsR0FBS3VDO1lBQVUsR0FBRzFHLEtBQUssQ0FBUyxFQUMvQ3FHLFlBQVksSUFBSXZILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsTUFBQSxDQUFBN0MsS0FBSztjQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOEMsUUFBUTtjQUFFN0MsT0FBTyxFQUFFOEM7WUFBWSxFQUFJLENBQzlELENBQ2lCO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7O1VDbENDO1VBS0E7VUFLQTtVQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDRDs7OztVQUlPLE1BQU1kLGFBQWEsR0FBQTVFLE9BQUEsQ0FBQTRFLGFBQUEsR0FBRyxDQUM1QixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkssTUFBT3FCLGVBQWU7WUFDM0IsT0FBTyxDQUFBQyxRQUFTO1lBRWhCLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBQyxZQUFZRCxRQUFRLEdBQUc7WUFFdkJFLFFBQVFBLENBQUEsR0FBSTtZQUNaLE9BQU9DLEdBQUdBLENBQUNILFFBQVE7Y0FDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBRCxRQUFTLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUcsSUFBSUQsZUFBZSxDQUFDRSxRQUFRLENBQUM7O2NBRS9DLE9BQU8sSUFBSSxDQUFDLENBQUFELFFBQVM7WUFDdEI7O1VBQ0FsRyxPQUFBLENBQUFpRyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJELElBQUE5SCxNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFVLFNBQVVtSSxLQUFLQSxDQUFDaEksS0FBWTtZQUM1QyxNQUFNNkQsS0FBSyxHQUF1QyxJQUFBakUsTUFBQSxDQUFBeUgsTUFBTSxHQUFvQjtZQUc1RSxNQUFNdEUsT0FBTyxHQUFJWCxLQUFLLElBQVU7Y0FDL0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCd0IsS0FBSyxDQUFDSSxPQUFPLENBQUNyQyxPQUFPLEdBQUcsSUFBSTtjQUM1QixJQUFJLENBQUMsQ0FBQzVCLEtBQUssQ0FBQzhCLFFBQVEsRUFBRTlCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFFRCxNQUFNRSxVQUFVLEdBQVU7Y0FBRSxHQUFHdEM7WUFBSyxDQUFFO1lBQ3RDLE9BQU9zQyxVQUFVLENBQUNSLFFBQVE7WUFFMUIsTUFBTVAsR0FBRyxHQUFXLDBCQUEwQmUsVUFBVSxDQUFDZCxTQUFTLEdBQUdjLFVBQVUsQ0FBQ2QsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUVoRyxPQUNDNUIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9PLFNBQVMsRUFBRUQsR0FBRztjQUFFd0IsT0FBTyxFQUFFQTtZQUFPLEdBQ3RDbkQsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9VLEdBQUcsRUFBRWtDLEtBQUs7Y0FBQSxHQUFNdkIsVUFBVTtjQUFFVSxJQUFJLEVBQUMsT0FBTztjQUFDbEIsUUFBUSxFQUFFaUI7WUFBTyxFQUFJLEVBQ3BFVCxVQUFVLENBQUN4QixLQUFLLElBQUlsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFBT3FCLFVBQVUsQ0FBQ3hCLEtBQUssQ0FBUSxDQUM3QztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBbEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9JLE9BQUEsR0FBQXBJLE9BQUE7VUFFTztVQUFXLFNBQVVxSSxNQUFNQSxDQUFDbEksS0FBSztZQUN2QyxNQUFNO2NBQUV5RDtZQUFRLENBQUUsR0FBR3pELEtBQUs7WUFDMUIsTUFBTW1JLFVBQVUsR0FBRztjQUFFLEdBQUduSTtZQUFLLENBQUU7WUFDL0IsT0FBT21JLFVBQVUsQ0FBQzFFLFFBQVE7WUFDMUIsT0FBTzBFLFVBQVUsQ0FBQ2xJLE9BQU87WUFFekIsTUFBTThCLEtBQUssR0FBRyxDQUFDLENBQUNxRyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3JJLEtBQUssQ0FBQytCLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFFNUQsSUFBSTNCLE1BQU0sR0FBRyxFQUFFO1lBQ2YsSUFBSUosS0FBSyxDQUFDQyxPQUFPLEVBQUU7Y0FDbEJELEtBQUssQ0FBQ0MsT0FBTyxDQUFDd0MsT0FBTyxDQUFDLENBQUM2RixJQUFJLEVBQUUzSCxHQUFHLEtBQUk7Z0JBQ25DUCxNQUFNLENBQUMyRSxJQUFJLENBQUNuRixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2dILE9BQUEsQ0FBQU0sWUFBWTtrQkFBQSxHQUFLRCxJQUFJO2tCQUFFM0gsR0FBRyxFQUFFQTtnQkFBRyxFQUFJLENBQUM7Y0FDbEQsQ0FBQyxDQUFDOztZQUVILE1BQU1nQyxNQUFNLEdBQUdsQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRCxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUM1RCxNQUFNcUMsRUFBRSxHQUFHN0MsS0FBSyxDQUFDNkMsRUFBRSxJQUFJLEdBQUdELElBQUksSUFBSWhDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUk4QixNQUFNLEVBQUU7WUFDL0QsTUFBTXBCLEdBQUcsR0FBRyxrQkFBa0I7WUFFOUIsT0FDQzNCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVEO1lBQUcsR0FDbEIzQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBT2dDLE9BQU8sRUFBRUo7WUFBRSxHQUFHN0MsS0FBSyxDQUFDYyxLQUFLLENBQVMsRUFDekNsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBUU8sU0FBUyxFQUFFRCxHQUFHO2NBQUEsR0FBTTRHO1lBQVUsR0FDcEMvSCxNQUFNLEVBQ05xRCxRQUFRLENBQ0QsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBN0QsTUFBQSxHQUFBQyxPQUFBO1VBQ087VUFBVyxTQUFVMEksWUFBWUEsQ0FBQ3ZJLEtBQUs7WUFDN0MsTUFBTTtjQUFFeUQ7WUFBUSxDQUFFLEdBQUd6RCxLQUFLO1lBQzFCLE1BQU1tSSxVQUFVLEdBQUc7Y0FBRSxHQUFHbkk7WUFBSyxDQUFFO1lBQy9CLE9BQU9tSSxVQUFVLENBQUMxRSxRQUFRO1lBRTFCLE9BQU83RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBQSxHQUFZa0g7WUFBVSxHQUFHMUUsUUFBUSxDQUFVO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUE3RCxNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFZLFNBQVUySSxNQUFNQSxDQUFDeEksS0FBYTtZQUNoRCxNQUFNO2NBQUU0QixPQUFPO2NBQUVFLFFBQVE7Y0FBRXNGLE9BQU8sR0FBRyxTQUFTO2NBQUV2RixRQUFRO2NBQUU0RyxJQUFJLEdBQUcsSUFBSTtjQUFFakg7WUFBUyxDQUFHLEdBQUd4QixLQUFLO1lBRTNGLE1BQU0sQ0FBQzBJLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcvSSxNQUFBLENBQUFvQixPQUFLLENBQUNpQixRQUFRLENBQVVMLE9BQU8sQ0FBQztZQUVsRWhDLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ2tCLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUl3RyxTQUFTLEtBQUs5RyxPQUFPLEVBQUU7Y0FDM0IrRyxZQUFZLENBQUMvRyxPQUFPLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTU8sWUFBWSxHQUFJQyxLQUFvQyxJQUFVO2NBQ25FQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QnNHLFlBQVksQ0FBQ3ZHLEtBQUssQ0FBQ21FLGFBQWEsQ0FBQzNFLE9BQU8sQ0FBQztjQUN6Q0UsUUFBUSxJQUFJQSxRQUFRLENBQUNNLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBRUQsSUFBSXdHLGVBQWUsR0FBVyxzQkFBc0JwSCxTQUFTLEdBQUdBLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDaEZvSCxlQUFlLElBQUkvRyxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFFOUMsSUFBSU4sR0FBRyxHQUFXbUgsU0FBUyxHQUFHLGtDQUFrQyxHQUFHLDJCQUEyQjtZQUM5Rm5ILEdBQUcsSUFBSTZGLE9BQU8sR0FBRyxJQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ25DN0YsR0FBRyxJQUFJa0gsSUFBSSxHQUFHLElBQUlBLElBQUksRUFBRSxHQUFHLEVBQUU7WUFFN0IsTUFBTW5HLFVBQVUsR0FBVztjQUFFLEdBQUd0QztZQUFLLENBQUU7WUFFdkMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBRSxDQUFDeUMsT0FBTyxDQUFDQyxJQUFJLElBQUc7Y0FDN0UsT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsTUFBTUcsRUFBRSxHQUFHN0MsS0FBSyxDQUFDNkMsRUFBRSxJQUFJN0MsS0FBSyxDQUFDNEMsSUFBSSxJQUFJLG9CQUFvQjtZQUV6RCxPQUNDaEQsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBRW9IO1lBQWUsR0FDOUJoSixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FDQ08sU0FBUyxFQUFDLDhCQUE4QjtjQUN4Q3FCLEVBQUUsRUFBRUEsRUFBRTtjQUNORyxJQUFJLEVBQUMsVUFBVTtjQUNmcEIsT0FBTyxFQUFFOEcsU0FBUztjQUNsQjVHLFFBQVEsRUFBRUssWUFBWTtjQUFBLEdBQ2xCRztZQUFVLEVBQ2IsRUFDRjFDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTyxTQUFTLEVBQUVELEdBQUc7Y0FBRTBCLE9BQU8sRUFBRUo7WUFBRSxHQUNqQ2pELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTyxTQUFTLEVBQUU7WUFBb0IsRUFBSSxDQUNsQyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUE1QixNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVZ0osZUFBZUEsQ0FBQztZQUFFQyxPQUFPO1lBQUVDLE1BQU07WUFBRUM7VUFBUyxDQUFFO1lBQzdELElBQUksQ0FBQ0YsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUV6QixJQUFJdkgsR0FBRyxHQUFHLHNCQUFzQjtZQUVoQyxJQUFJeUgsU0FBUyxJQUFJRCxNQUFNLEdBQUdDLFNBQVMsR0FBRyxFQUFFLEVBQUU7Y0FDekN6SCxHQUFHLElBQUl3SCxNQUFNLEdBQUdDLFNBQVMsR0FBRyxDQUFDLEdBQUcsK0JBQStCLEdBQUcsZ0NBQWdDOztZQUVuRyxPQUFPcEosTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBRUQ7WUFBRyxHQUFHd0gsTUFBTSxJQUFJLENBQUMsQ0FBUTtVQUNsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBbkosTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVW9KLGFBQWFBLENBQUM7WUFBRXpELEtBQUs7WUFBRTBCLFFBQVE7WUFBRUMsWUFBWTtZQUFFcEY7VUFBSyxDQUFFO1lBQ3JFLElBQUksQ0FBQ3lELEtBQUssQ0FBQ2dCLFNBQVMsSUFBSSxDQUFDVSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBRTlDLElBQUlBLFFBQVEsSUFBSW5GLEtBQUssS0FBSyxFQUFFLEVBQUVvRixZQUFZLEdBQUdBLFlBQVksR0FBR0EsWUFBWSxHQUFHM0IsS0FBSyxDQUFDMkIsWUFBWTtZQUU3RixPQUFPdkgsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBQztZQUF5QixHQUFFMkYsWUFBWSxDQUFRO1VBQ3ZFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUF2SCxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBbUgsTUFBQSxHQUFBbkgsT0FBQTtVQUNBLElBQUFxSixRQUFBLEdBQUFySixPQUFBO1VBRU87VUFBVSxTQUFVc0osUUFBUUEsQ0FBQ25KLEtBQWE7WUFDaEQsTUFBTTZELEtBQUssR0FBRzdELEtBQUssQ0FBQzJCLEdBQUcsSUFBSSxJQUFBL0IsTUFBQSxDQUFBeUgsTUFBTSxHQUFFO1lBQ25DLE1BQU07Y0FBRXlCLE9BQU87Y0FBRTNCLFlBQVk7Y0FBRXBGLEtBQUssR0FBRztZQUFFLENBQUUsR0FBRy9CLEtBQUs7WUFDbkQsTUFBTSxDQUFDd0YsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBN0YsTUFBQSxDQUFBcUMsUUFBUSxFQUFTO2NBQUVGLEtBQUs7Y0FBRW9GO1lBQVksQ0FBRSxDQUFDO1lBRW5FLE1BQU1pQyxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixNQUFNO2dCQUFFQyxZQUFZO2dCQUFFQztjQUFZLENBQUUsR0FBR3pGLEtBQUssQ0FBQ0ksT0FBTztjQUVwRCxJQUFJb0YsWUFBWSxHQUFHQyxZQUFZLEVBQUU7Z0JBQ2hDekYsS0FBSyxDQUFDSSxPQUFPLENBQUNzRixLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHSCxZQUFZLElBQUk7O1lBRWxELENBQUM7WUFDRDs7O1lBR0F6SixNQUFBLENBQUFvQixPQUFLLENBQUNrQixTQUFTLENBQUNrSCxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzlCLE1BQU1qSCxZQUFZLEdBQUlDLEtBQXVDLElBQVU7Y0FDdEVnSCxTQUFTLEVBQUU7Y0FDWCxJQUFJLENBQUMsQ0FBQ3BKLEtBQUssQ0FBQzhCLFFBQVEsSUFBSSxPQUFPOUIsS0FBSyxDQUFDOEIsUUFBUSxLQUFLLFVBQVUsRUFBRTlCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO2NBQ25GcUQsUUFBUSxDQUFDO2dCQUNSLEdBQUdELEtBQUs7Z0JBQ1JnQixTQUFTLEVBQUUsS0FBSztnQkFDaEJ6RSxLQUFLLEVBQUVLLEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQzNFO2VBQ3BCLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSU8sVUFBVSxHQUFXO2NBQUUsR0FBR3RDO1lBQUssQ0FBRTtZQUNyQyxJQUFJdUIsR0FBRyxHQUFXdkIsS0FBSyxDQUFDd0IsU0FBUyxHQUFHLEdBQUd4QixLQUFLLENBQUN3QixTQUFTLGVBQWUsR0FBRyxjQUFjO1lBQ3RGRCxHQUFHLElBQUl2QixLQUFLLENBQUM2QixRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDeENOLEdBQUcsSUFBSXZCLEtBQUssQ0FBQ2tILFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUNyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUN6RSxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDO1lBQ2xILElBQUkrRyxRQUFRLEdBQUcsRUFBRTtZQUNqQixJQUFJekosS0FBSyxDQUFDa0YsUUFBUSxFQUFFM0QsR0FBRyxJQUFJLGNBQWM7WUFFekMsT0FDQzNCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVEO1lBQUcsR0FDbEIzQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FDQ1UsR0FBRyxFQUFFa0MsS0FBSztjQUFBLEdBQ052QixVQUFVO2NBQ2RNLElBQUksRUFBRTVDLEtBQUssQ0FBQzRDLElBQUk7Y0FDaEJkLFFBQVEsRUFBRUssWUFBWTtjQUN0QkosS0FBSyxFQUFFQSxLQUFLO2NBQ1pxRSxXQUFXLEVBQUVwRyxLQUFLLENBQUNvRyxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEcEcsS0FBSyxDQUFDeUQsUUFBUSxFQUNmN0QsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixNQUFBLENBQUFpQyxhQUFhO2NBQUN6RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRTBCLFFBQVEsRUFBRWxILEtBQUssQ0FBQ2tILFFBQVE7Y0FBRW5GLEtBQUssRUFBRUEsS0FBSztjQUFFb0YsWUFBWSxFQUFFbkgsS0FBSyxDQUFDbUg7WUFBWSxFQUFJLEVBQ3hHbkgsS0FBSyxDQUFDYyxLQUFLLElBQ1hsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBT08sU0FBUyxFQUFFaUksUUFBUTtjQUFFeEcsT0FBTyxFQUFFakQsS0FBSyxDQUFDNkM7WUFBRSxHQUMzQzdDLEtBQUssQ0FBQ2MsS0FBSyxDQUViLEVBQ0RsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lJLFFBQUEsQ0FBQUwsZUFBZTtjQUFDRSxNQUFNLEVBQUVsRixLQUFLLEVBQUVJLE9BQU8sRUFBRWxDLEtBQUssQ0FBQ2dILE1BQU07Y0FBRUMsU0FBUyxFQUFFaEosS0FBSyxDQUFDMEosU0FBUztjQUFFWixPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUNsRztVQUVSOzs7Ozs7Ozs7OztVQzVEQTs7VUFFQXZHLE1BQUEsQ0FBQW9ILGNBQUEsQ0FBQWxJLE9BQUE7WUFDQU0sS0FBQTtVQUNBIn0=