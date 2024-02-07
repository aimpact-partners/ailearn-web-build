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
        hash: 2870933569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImtleSIsInBlcmZvcm1hbmNlIiwibm93IiwibGFiZWwiLCJyZXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJDaGVja2JveCIsImRpcmVjdGlvbnMiLCJjb2x1bW4iLCJyb3ciLCJkaXJlY3Rpb24iLCJjbHMiLCJjbGFzc05hbWUiLCJleHBvcnRzIiwiZm9yd2FyZFJlZiIsInJlZiIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJyYW1kb24iLCJuYW1lIiwiaWQiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJ1c2VJbnB1dENvbnRleHQiLCJJY29uIiwiaWNvbiIsImN1cnJlbnQiLCJzaG93UGlja2VyIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJpbnRlcm5hbFByb3BzIiwiY3VycmVudFZhbHVlIiwiY3VycmVudFRhcmdldCIsIl9oYXNFcnJvciIsIm9uSW52YWxpZCIsInRhcmdldCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZGVmaW5lUHJvcGVydHkiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlJhZGlvIiwiX29wdGlvbiIsIlNlbGVjdCIsImF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsIml0ZW0iLCJPcHRpb25TZWxlY3QiLCJTd2l0Y2giLCJzaXplIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi90cy9tb2RlbC9tYW5hZ2VyLnRzIiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3NlbGVjdC9vcHRpb24udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEvY291bnRlci50c3giLCIvdHMvdGV4dGFyZWEvZXJyb3IudHN4IiwiL3RzL3RleHRhcmVhL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxhQUFhQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUM7WUFBTyxDQUFFLEdBQUdELEtBQUs7WUFDekJFLE9BQU8sQ0FBQ0Ms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