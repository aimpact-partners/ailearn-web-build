System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/base", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CheckboxGroup, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta1Base) {
      dependency_2 = _pragmateUi100Beta1Base;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_3 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.3-test.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/base', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/form');
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
        hash: 3497942411,
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
        hash: 99719699,
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
        hash: 4016619854,
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
              icon,
              isDate
            } = (0, _context.useInputContext)();
            if (!isDate) return null;
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
        hash: 168038464,
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
              week: _date.Date,
              'datetime-local': _date.Date
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
        hash: 347486124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("../context");
          var _base = require("pragmate-ui/base");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_base.BaseComponent, {
              as: 'label',
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
        hash: 2541454012,
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
        hash: 772801948,
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
        hash: 240084044,
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
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type', 'size', 'loading', 'error', 'sources', 'onError'];
          function generateAttributes(attrs, toRemove = []) {
            const propsToRemove = [...internalProps, ...toRemove];
            const properties = {
              ...attrs
            };
            propsToRemove.forEach(prop => delete properties[prop]);
            return properties;
          }
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
        hash: 1253201499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)(null);
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
        hash: 872227154,
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
              sizing = 'md',
              className
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(!!checked);
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
            cls += sizing ? ` ${sizing}` : '';
            const properties = {
              ...props
            };
            ['className', 'checked', 'onChange', 'variant', 'sizing', 'id'].forEach(prop => {
              delete properties[prop];
            });
            const id = props.id ?? props.name ?? 'pui-element-switch';
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
        hash: 3812134839,
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

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 4163527322,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInR5cGUiLCJodG1sRm9yIiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfaWNvbnMiLCJfY29udGV4dCIsIkRhdGUiLCJpbnB1dCIsImljb24iLCJpc0RhdGUiLCJ1c2VJbnB1dENvbnRleHQiLCJpY29uVmFsdWUiLCJzaG93UGlja2VyIiwiY3VycmVudCIsIkljb24iLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwibW9udGgiLCJ3ZWVrIiwiQ29udHJvbCIsInB1c2giLCJGcmFnbWVudCIsIl9iYXNlIiwiTGFiZWwiLCJyZXF1aXJlZCIsInBvc2l0aW9uIiwidmFyaWFudHMiLCJmbG9hdGluZyIsInJpZ2h0IiwiYm90dG9tIiwiQmFzZUNvbXBvbmVudCIsImFzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNoYW5nZVR5cGUiLCJhdHRycyIsIkljb25CdXR0b24iLCJSZWFjdCIsIklucHV0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ludGVybmFsUHJvcHMiLCJfaWNvbkNvbnRhaW5lciIsIkNvbnRyb2xTZWxlY3RvciIsInBsYWNlaG9sZGVyIiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJvbkludmFsaWQiLCJ0YXJnZXQiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInNldEN1c3RvbVZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VSZWYiLCJkYXRlcyIsImluY2x1ZGVzIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZ2VuZXJhdGVBdHRyaWJ1dGVzIiwidG9SZW1vdmUiLCJwcm9wc1RvUmVtb3ZlIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemluZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJUZXh0YXJlYSIsImNoZWNrU2l6ZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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