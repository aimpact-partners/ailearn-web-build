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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.30"]]);
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
        hash: 4275489750,
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
            _internalProps.reactivePRops.forEach(prop => delete properties[prop]);
            Object.keys(properties).forEach(item => {
              if (typeof properties[item] === 'object') delete properties[item];
            });
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
        hash: 3267238725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.reactivePRops = exports.internalProps = void 0;
          /**
           * Internal props of the input component.
           * This array is used to filter the props passed to the input component.
           */
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type'];
          const reactivePRops = exports.reactivePRops = ['dependentOn', 'ready', 'fetched', 'triggerEvent', 'bind', 'unbind', 'initialize', 'clear', 'fetching', 'loading', 'loaded', 'processing', 'processed'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwia2V5IiwicGVyZm9ybWFuY2UiLCJub3ciLCJsYWJlbCIsInJlc3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkNoZWNrYm94IiwiZGlyZWN0aW9ucyIsImNvbHVtbiIsInJvdyIsImRpcmVjdGlvbiIsImNscyIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hlY2tlZCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsInJhbWRvbiIsIm5hbWUiLCJpZCIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInR5cGUiLCJodG1sRm9yIiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfaWNvbnMiLCJfY29udGV4dCIsIkRhdGUiLCJpbnB1dCIsInVzZUlucHV0Q29udGV4dCIsIkljb24iLCJpY29uIiwiY3VycmVudCIsInNob3dQaWNrZXIiLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwiQ29udHJvbCIsInB1c2giLCJGcmFnbWVudCIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFuZ2VUeXBlIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25Db250YWluZXIiLCJDb250cm9sU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsImludGVybmFsUHJvcHMiLCJyZWFjdGl2ZVBSb3BzIiwia2V5cyIsIml0ZW0iLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwib25JbnZhbGlkIiwidGFyZ2V0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJzZXRDdXN0b21WYWxpZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJPcHRpb25TZWxlY3QiLCJTd2l0Y2giLCJzaXplIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsYUFBYUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NB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