System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3184122068,
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
        hash: 145043657,
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
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const name = props.name ?? 'pui-checkbox--name';
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
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
        hash: 4019433515,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJrZXkiLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmFtZSIsImlkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJoYW5kbGVDbGljayIsInBpY2tlZCIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJ1c2VJbnB1dENvbnRleHQiLCJJY29uIiwiaWNvbiIsImN1cnJlbnQiLCJzaG93UGlja2VyIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJpbnRlcm5hbFByb3BzIiwiY3VycmVudFZhbHVlIiwiY3VycmVudFRhcmdldCIsIl9oYXNFcnJvciIsIm9uSW52YWxpZCIsInRhcmdldCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6ZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJUZXh0YXJlYSIsImNoZWNrU2l6ZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQztZQUFPLENBQUUs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