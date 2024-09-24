System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta6Base) {
      dependency_2 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.6/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/base', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/form');
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
        hash: 599928777,
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
            const handleChange = event => {
              event.stopPropagation();
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
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleChange
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: checked,
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
        hash: 1837895848,
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
        hash: 3145852206,
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
        hash: 1700275994,
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
        hash: 1856187161,
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
            ['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(prop => delete properties[prop]);
            const variants = {
              unstyled: 'pui-textarea--unstyled',
              floating: 'pui-textarea--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
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
        hash: 1212479894,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidXNlRWZmZWN0IiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJvbkludmFsaWQiLCJ0YXJnZXQiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInNldEN1c3RvbVZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImRhdGVzIiwiaW5jbHVkZXMiLCJ1bnN0eWxlZCIsInByb3ZpZGVyVmFsdWUiLCJsYWJlbFNwZWNzIiwiUHJvdmlkZXIiLCJnZW5lcmF0ZUF0dHJpYnV0ZXMiLCJ0b1JlbW92ZSIsInByb3BzVG9SZW1vdmUiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlJhZGlvIiwiX29wdGlvbiIsIlNlbGVjdCIsImF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6aW5nIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBR0QsS0FBSztZQUN6QixNQUFNRSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxLQUFJO2NBRTVDLE1BQU1DLEdBQUcsR0FBRyxHQUFHRixNQUFNLENBQUNHLElBQUksSUFBSUYsS0FBSyxFQUFFO2NBQ3JDLE1BQU07Z0JBQUVHLEtBQUs7Z0JBQUUsR0FBR0M7Y0FBSSxDQUFFLEdBQUdMLE1BQU07Y0FDakMsT0FBT1IsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2IsTUFBQSxDQUFBYyxRQUFRO2dCQUFDTixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVFLEtBQUssRUFBRUEsS0FBSztnQkFBQSxHQUFNQztjQUFJLEVBQUk7WUFDdEQsQ0FBQyxDQUFDO1lBRUYsTUFBTUksVUFBVSxHQUFHO2NBQ2xCQyxNQUFNLEVBQUUsUUFBUTtjQUNoQkMsR0FBRyxFQUFFO2FBQ0w7WUFDRCxNQUFNQyxTQUFTLEdBQUdoQixLQUFLLENBQUNnQixTQUFTLElBQUksS0FBSztZQUMxQyxNQUFNQyxHQUFHLEdBQUcsMENBQTBDSixVQUFVLENBQUNHLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvRSxPQUNDcEIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2pCakIsS0FBSyxDQUFDUSxLQUFLLElBQUlaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBQztZQUFXLEdBQUVsQixLQUFLLENBQUNRLEtBQUssQ0FBUSxFQUNoRVosTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFDO1lBQTRCLEdBQUVoQixNQUFNLENBQU8sQ0FDckQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVyxNQUFNZSxRQUFRLEdBQUFPLE9BQUEsQ0FBQVAsUUFBQSxHQUEwRCxJQUFBaEIsTUFBQSxDQUFBd0IsVUFBVSxFQUFDLFVBQ3BHcEIsS0FBMEIsRUFDMUJxQixHQUFnQztZQUVoQyxNQUFNO2NBQUVDLE9BQU87Y0FBRUMsUUFBUTtjQUFFTCxTQUFTO2NBQUVNLFFBQVE7Y0FBRWhCO1lBQUssQ0FBRSxHQUFHUixLQUFLO1lBRS9ELE1BQU15QixZQUFZLEdBQUlDLEtBQXlDLElBQVU7Y0FDeEVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBRXZCSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFDRCxJQUFJVCxHQUFHLEdBQVcsZ0JBQWdCQyxTQUFTLEdBQUdBLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDOURELEdBQUcsSUFBSU0sUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQ2xDLE1BQU1LLFVBQVUsR0FBd0JDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRTlCLEtBQUssQ0FBQztZQUVoRSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDK0IsT0FBTyxDQUFFQyxJQUFZLElBQVU7Y0FDM0UsT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUM1RCxNQUFNN0IsSUFBSSxHQUFHUCxLQUFLLENBQUNPLElBQUksSUFBSSxvQkFBb0I7WUFDL0MsTUFBTThCLEVBQUUsR0FBR3JDLEtBQUssQ0FBQ3FDLEVBQUUsSUFBSSxHQUFHOUIsSUFBSSxJQUFJK0IsV0FBVyxDQUFDQyxHQUFHLEVBQUUsSUFBSU4sTUFBTSxFQUFFO1lBRS9ELE9BQ0NyQyxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVELEdBQUc7Y0FBRXVCLE9BQU8sRUFBRWY7WUFBWSxHQUN6QzdCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQ0NVLEdBQUcsRUFBRUEsR0FBRztjQUNSb0IsSUFBSSxFQUFDLFVBQVU7Y0FDZnZCLFNBQVMsRUFBQyxxQkFBcUI7Y0FDL0JtQixFQUFFLEVBQUVBLEVBQUU7Y0FDTjlCLElBQUksRUFBRUEsSUFBSTtjQUNWZSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJFLFFBQVEsRUFBRUMsWUFBWTtjQUFBLEdBQ2xCRztZQUFVLEVBQ2IsRUFDRmhDLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU9PLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ3dCLE9BQU8sRUFBRUw7WUFBRSxHQUNqRHpDLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLGVBQ0NmLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQUtnQyxPQUFPLEVBQUM7WUFBVSxHQUN0Qi9DLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQVVpQyxNQUFNLEVBQUM7WUFBYyxFQUFZLENBQ3RDLENBQ0EsRUFDUGhELE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLGVBQU9ILEtBQUssQ0FBUSxDQUNiLENBQ0g7VUFFUixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERGLElBQUFaLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVWdELElBQUlBLENBQUM3QyxLQUFnQjtZQUMvQyxNQUFNO2NBQUU4QyxRQUFRO2NBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcvQyxLQUFLO1lBQ3hDLE1BQU1nRCxZQUFZLEdBQUl0QixLQUFpQyxJQUFVO2NBQ2hFQSxLQUFLLENBQUN1QixjQUFjLEVBQUU7Y0FDdEJ2QixLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QjNCLEtBQUssQ0FBQzhDLFFBQVEsQ0FBQ3BCLEtBQUssQ0FBQztZQUN0QixDQUFDO1lBRUQsT0FDQzlCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU1tQyxRQUFRLEVBQUVFLFlBQVk7Y0FBQSxHQUFNRDtZQUFTLEdBQ3pDL0MsS0FBSyxDQUFDa0QsUUFBUSxDQUNUO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUF0RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxRQUFBLEdBQUF2RCxPQUFBO1VBS00sU0FBVXdELElBQUlBLENBQUE7WUFDbkIsTUFBTTtjQUFFQyxLQUFLO2NBQUV0RCxLQUFLO2NBQUV1RCxJQUFJO2NBQUVDO1lBQU0sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZUFBZSxHQUFFO1lBRXhELElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUN4QixNQUFNRSxTQUFTLEdBQUdILElBQUksR0FBR0EsSUFBSSxHQUFHLFVBQVU7WUFFMUMsTUFBTUksVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkIsSUFBSTNELEtBQUssQ0FBQ3VCLFFBQVEsRUFBRTtjQUNuQitCLEtBQUssQ0FBQ00sT0FBZSxDQUFDRCxVQUFVLEVBQUU7WUFDcEMsQ0FBQztZQUVELE9BQ0MvRCxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsTUFBQSxDQUFBVSxJQUFJO2NBQ0p2RCxHQUFHLEVBQUMsTUFBTTtjQUNWaUQsSUFBSSxFQUFFRyxTQUFTO2NBQ2Z4QyxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCc0IsT0FBTyxFQUFFbUI7WUFBVSxFQUNsQjtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBL0QsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVaUUsS0FBS0EsQ0FBQztZQUNoQ0MsSUFBSTtZQUNKQyxPQUFPO1lBQ1A5QyxTQUFTO1lBQ1RnQztVQUFRLENBTVI7WUFFQSxJQUFJLENBQUNhLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTlDLEdBQUcsR0FBRyx3QkFBd0JDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEUsT0FDQ3RCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQitDLE9BQU8sRSxLQUFHZCxRQUFRLENBQ2I7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQXRELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvRSxTQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXVELFFBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBcUUsS0FBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFzRSxLQUFBLEdBQUF0RSxPQUFBO1VBRU0sU0FBVXVFLGFBQWFBLENBQUE7WUFDekIsTUFBTTtjQUFFcEU7WUFBSyxDQUFFLEdBQUcsSUFBQW9ELFFBQUEsQ0FBQUssZUFBZSxHQUFFO1lBQ25DLE1BQU1ZLEtBQUssR0FBRztjQUNWQyxRQUFRLEVBQUVMLFNBQUEsQ0FBQU0sUUFBUTtjQUNsQkMsSUFBSSxFQUFFTixLQUFBLENBQUFiLElBQUk7Y0FDVjNDLE9BQU8sRUFBRSxJQUFJO2NBQ2IrRCxLQUFLLEVBQUVQLEtBQUEsQ0FBQWIsSUFBSTtjQUNYcUIsSUFBSSxFQUFFUixLQUFBLENBQUFiLElBQUk7Y0FDVixnQkFBZ0IsRUFBRWEsS0FBQSxDQUFBYjthQUNyQjtZQUNELE1BQU1uRCxNQUFNLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQ21FLEtBQUssQ0FBQ3JFLEtBQUssQ0FBQ3lDLElBQUksQ0FBQyxFQUFFO2NBQ3JCLE1BQU1rQyxPQUFPLEdBQUdOLEtBQUssQ0FBQ3JFLEtBQUssQ0FBQ3lDLElBQUksQ0FBQztjQUNqQ3ZDLE1BQU0sQ0FBQzBFLElBQUksQ0FBQ2hGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUNnRSxPQUFPO2dCQUFDckUsR0FBRyxFQUFDO2NBQVMsRUFBRyxDQUFDOztZQUN6QztZQUVELElBQUcsQ0FBQyxDQUFDTixLQUFLLENBQUN1RCxJQUFJLEVBQUU7Y0FDYnJELE1BQU0sQ0FBQzBFLElBQUksQ0FBQ2hGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUN3RCxLQUFBLENBQUFOLElBQUk7Z0JBQUN2RCxHQUFHLEVBQUM7Y0FBTSxFQUFHLENBQUM7O1lBRXBDLE9BQU9WLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUFmLE1BQUEsQ0FBQWMsT0FBQSxDQUFBbUUsUUFBQSxRQUFHM0UsTUFBTSxDQUFJO1VBQ3hCO1VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFOLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFzRCxNQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQXVELFFBQUEsR0FBQXZELE9BQUE7VUFDTSxTQUFVZ0UsSUFBSUEsQ0FBQTtZQUNoQixNQUFNO2NBQ0Y3RCxLQUFLLEVBQUU7Z0JBQUV1RDtjQUFJLENBQUU7Y0FDZkM7WUFBTSxDQUNULEdBQUcsSUFBQUosUUFBQSxDQUFBSyxlQUFlLEdBQUU7WUFDckIsSUFBSSxDQUFDRixJQUFJLElBQUlDLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDaEMsT0FBTzVELE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxNQUFBLENBQUFVLElBQU87Y0FBQ04sSUFBSSxFQUFFQSxJQUFJO2NBQUVyQyxTQUFTLEVBQUM7WUFBWSxFQUFHO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUF0QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUQsUUFBQSxHQUFBdkQsT0FBQTtVQUVPO1VBQVcsU0FBVWlGLEtBQUtBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxRQUFRO1lBQUU5QjtVQUFRLElBQWtCLEVBQUU7WUFDbkYsTUFBTTtjQUFFM0MsSUFBSTtjQUFFOEI7WUFBRSxDQUFFLEdBQUcsSUFBQWUsUUFBQSxDQUFBSyxlQUFlLEdBQUU7WUFFdEMsTUFBTXdCLFFBQVEsR0FBRztjQUNoQkMsUUFBUSxFQUFFLGdCQUFnQjtjQUMxQkMsS0FBSyxFQUFFLHlCQUF5QjtjQUNoQ0MsTUFBTSxFQUFFLDBCQUEwQjtjQUNsQyxjQUFjLEVBQUU7YUFDaEI7WUFFRCxJQUFJbkUsR0FBRyxHQUFHLG9CQUFvQmdFLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDLEdBQUcsSUFBSUMsUUFBUSxDQUFDRCxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsRixJQUFJRCxRQUFRLEVBQUU5RCxHQUFHLElBQUksY0FBYztZQUNuQyxPQUNDckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQWYsTUFBQSxDQUFBYyxPQUFBLENBQUFtRSxRQUFBLFFBQ0NqRixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFPK0IsT0FBTyxFQUFFTCxFQUFFLElBQUk5QixJQUFJO2NBQUVXLFNBQVMsRUFBRUQ7WUFBRyxHQUN6Q3JCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBQztZQUFlLEcsS0FBR2dDLFFBQVEsQ0FBUSxDQUMzQyxDQUNOO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUF0RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUQsUUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFzRCxNQUFBLEdBQUF0RCxPQUFBO1VBRU0sU0FBVTBFLFFBQVFBLENBQUE7WUFDcEIsTUFBTTtjQUNGYyxLQUFLO2NBQ0xDO1lBQVEsQ0FDWCxHQUFHLElBQUFsQyxRQUFBLENBQUFLLGVBQWUsR0FBRTtZQUNyQixNQUFNOEIsVUFBVSxHQUNaN0QsS0FBcUQsSUFDL0M7Y0FDTkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIyRCxRQUFRLENBQUM7Z0JBQ0wsR0FBR0QsS0FBSztnQkFDUjVDLElBQUksRUFBRTRDLEtBQUssQ0FBQzVDLElBQUksS0FBSyxVQUFVLEdBQUcsTUFBTSxHQUFHO2VBRTlDLENBQUM7WUFDTixDQUFDO1lBQ0QsTUFBTStDLEtBQUssR0FBRztjQUNWdEUsU0FBUyxFQUFFLFVBQVU7Y0FDckJzQixPQUFPLEVBQUUrQyxVQUFVO2NBQ25CaEMsSUFBSSxFQUFFOEIsS0FBSyxDQUFDNUMsSUFBSSxLQUFLLFVBQVUsR0FBRyxLQUFLLEdBQUc7YUFDN0M7WUFFRCxPQUFPN0MsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLE1BQUEsQ0FBQXNDLFVBQVU7Y0FBQSxHQUFLRDtZQUFLLEVBQUk7VUFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFFLEtBQUEsR0FBQTdGLE9BQUE7VUFHTyxNQUFNOEYsWUFBWSxHQUFBeEUsT0FBQSxDQUFBd0UsWUFBQSxHQUFzQ0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFBRSxDQUFDO1VBQy9FLE1BQU1uQyxlQUFlLEdBQUdBLENBQUEsS0FBMEJpQyxLQUFLLENBQUNHLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDO1VBQUN4RSxPQUFBLENBQUFzQyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSnhGLElBQUE3RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUQsUUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFpRyxjQUFBLEdBQUFqRyxPQUFBO1VBRUEsSUFBQWtHLGNBQUEsR0FBQWxHLE9BQUE7VUFHTSxTQUFVbUcsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQ0xWLFFBQVE7Y0FDUkQsS0FBSztjQUNMWSxLQUFLO2NBQ0xDLFFBQVE7Y0FDUmxHLEtBQUssRUFBRTtnQkFBRU8sSUFBSTtnQkFBRThCLEVBQUU7Z0JBQUU4RDtjQUFXLENBQUU7Y0FDaENuRyxLQUFLO2NBQ0xzRDtZQUFLLENBQ0wsR0FBRyxJQUFBRixRQUFBLENBQUFLLGVBQWUsR0FBRTtZQUNyQixJQUFJN0IsVUFBVSxHQUFXO2NBQUUsR0FBRzVCO1lBQUssQ0FBRTtZQUNyQyxJQUFBSixNQUFBLENBQUF3RyxTQUFTLEVBQUMsTUFBSztjQUNkRixRQUFRLENBQUNsRyxLQUFLLENBQUNpRyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUNqRyxLQUFLLENBQUNpRyxLQUFLLENBQUMsQ0FBQztZQUVqQkgsY0FBQSxDQUFBTyxhQUFhLENBQUN0RSxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDO1lBRXRELE1BQU1QLFlBQVksR0FBSUMsS0FBb0MsSUFBVTtjQUNuRSxJQUFJLENBQUMsQ0FBQzFCLEtBQUssQ0FBQ3dCLFFBQVEsSUFBSSxPQUFPeEIsS0FBSyxDQUFDd0IsUUFBUSxLQUFLLFVBQVUsRUFBRXhCLEtBQUssQ0FBQ3dCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO2NBQ25GLE1BQU00RSxZQUFZLEdBQUc1RSxLQUFLLENBQUM2RSxhQUFhLENBQUNOLEtBQUs7Y0FDOUNDLFFBQVEsQ0FBQ0ksWUFBWSxDQUFDO2NBQ3RCaEIsUUFBUSxDQUFDO2dCQUNSLEdBQUdELEtBQUs7Z0JBQ1JtQixTQUFTLEVBQUUsS0FBSztnQkFDaEJQLEtBQUssRUFBRUs7ZUFDUCxDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU1kLEtBQUssR0FBRztjQUNibkQsRUFBRSxFQUFFQSxFQUFFLElBQUk5QixJQUFJO2NBQ2Q0RixXQUFXLEVBQUVBLFdBQVcsSUFBSSxFQUFFO2NBQzlCRixLQUFLLEVBQUVBLEtBQUssSUFBSTthQUNoQjtZQUNELE9BQ0NyRyxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZixNQUFBLENBQUFjLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ2pGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQ0M4RixTQUFTLEVBQUcvRSxLQUEyQyxJQUFJO2dCQUMxRCxNQUFNO2tCQUFFZ0Y7Z0JBQU0sQ0FBRSxHQUFHaEYsS0FBSztnQkFDeEIsSUFBSWdGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLEVBQUU7a0JBQ2pDRixNQUFNLENBQUNHLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDOztnQkFFbkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRXhHLElBQUksRUFBRW1CLEtBQUssQ0FBQztjQUN2QyxDQUFDO2NBQ0RMLEdBQUcsRUFBRWlDLEtBQUs7Y0FBQSxHQUNOMUIsVUFBVTtjQUNkckIsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZpQixRQUFRLEVBQUVDLFlBQVk7Y0FDdEJnQixJQUFJLEVBQUU0QyxLQUFLLENBQUM1QyxJQUFJO2NBQUEsR0FDWitDO1lBQUssRUFDUixFQUNGNUYsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29GLGNBQUEsQ0FBQTNCLGFBQWEsT0FBRyxDQUNmO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUF4RSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBdUQsUUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFDQSxJQUFBcUgsTUFBQSxHQUFBckgsT0FBQTtVQWNPLFdBWFA7Ozs7Ozs7Ozs7VUFXaUIsU0FDUnNILEtBQUtBLENBQUNuSCxLQUFhO1lBQzNCLE1BQU07Y0FBRW9ILFFBQVE7Y0FBRUMsWUFBWTtjQUFFQyxPQUFPO2NBQUVwRyxTQUFTO2NBQUVWLEtBQUs7Y0FBRTBDLFFBQVE7Y0FBRUssSUFBSTtjQUFFZDtZQUFJLENBQUUsR0FBR3pDLEtBQUs7WUFDekYsTUFBTSxDQUFDaUcsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3RHLE1BQUEsQ0FBQWMsT0FBSyxDQUFDNkcsUUFBUSxDQUFTdkgsS0FBSyxDQUFDaUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuRSxNQUFNLENBQUNaLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQTFGLE1BQUEsQ0FBQTJILFFBQVEsRUFBUztjQUFFOUU7WUFBSSxDQUFFLENBQUM7WUFDcEQsTUFBTWEsS0FBSyxHQUF1QyxJQUFBMUQsTUFBQSxDQUFBNEgsTUFBTSxFQUFDLElBQUksQ0FBQztZQUM5RCxJQUFJdkcsR0FBRyxHQUFXLFlBQVlDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEUsTUFBTXVHLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRSxNQUFNakUsTUFBTSxHQUFHaUUsS0FBSyxDQUFDQyxRQUFRLENBQUMxSCxLQUFLLENBQUN5QyxJQUFJLENBQUM7WUFDekMsSUFBSWUsTUFBTSxFQUFFdkMsR0FBRyxJQUFJLGtCQUFrQjtZQUNyQyxJQUFJLENBQUMsQ0FBQ3NDLElBQUksRUFBRXRDLEdBQUcsSUFBSSxrQkFBa0I7WUFDckMsSUFBSSxDQUFDLENBQUNzQyxJQUFJLElBQUkrRCxPQUFPLEtBQUssVUFBVSxFQUFFckcsR0FBRyxJQUFJLGlCQUFpQjtZQUM5RCxJQUFJakIsS0FBSyxDQUFDeUMsSUFBSSxLQUFLLFVBQVUsRUFBRXhCLEdBQUcsSUFBSSxzQkFBc0I7WUFDNUQsTUFBTWdFLFFBQVEsR0FBRztjQUNoQjBDLFFBQVEsRUFBRSxxQkFBcUI7Y0FDL0J6QyxRQUFRLEVBQUU7YUFDVjtZQUVELElBQUlsRixLQUFLLENBQUNzSCxPQUFPLElBQUlyQyxRQUFRLENBQUNqRixLQUFLLENBQUNzSCxPQUFPLENBQUMsRUFBRXJHLEdBQUcsSUFBSSxJQUFJZ0UsUUFBUSxDQUFDakYsS0FBSyxDQUFDc0gsT0FBTyxDQUFDLEVBQUU7WUFFbEYsTUFBTU0sYUFBYSxHQUF1QjtjQUFFNUgsS0FBSztjQUFFcUYsS0FBSztjQUFFQyxRQUFRO2NBQUVXLEtBQUs7Y0FBRUMsUUFBUTtjQUFFNUMsS0FBSztjQUFFQyxJQUFJO2NBQUVDO1lBQU0sQ0FBRTtZQUMxRyxNQUFNcUUsVUFBVSxHQUFnQjtjQUFFOUMsUUFBUSxFQUFFL0UsS0FBSyxDQUFDK0U7WUFBUSxDQUFFO1lBQzVELE1BQU1TLEtBQUssR0FBb0IsRUFBRTtZQUNqQzs7O1lBR0EsSUFBSThCLE9BQU8sS0FBSyxVQUFVLEVBQUVPLFVBQVUsQ0FBQzdDLFFBQVEsR0FBR3NDLE9BQU87WUFDekQsSUFBSUEsT0FBTyxLQUFLLFVBQVUsRUFBRTlCLEtBQUssQ0FBQ3RFLFNBQVMsR0FBR0QsR0FBRztZQUVqRCxPQUNDckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lDLFFBQUEsQ0FBQXVDLFlBQVksQ0FBQ21DLFFBQVE7Y0FBQzdCLEtBQUssRUFBRTJCO1lBQWEsR0FDMUNoSSxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUVEO1lBQUcsR0FDbEJyQixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0csUUFBQSxDQUFBakIsZUFBZSxPQUFHLEVBQ2xCOUMsUUFBUSxFQUNSMUMsS0FBSyxJQUFJWixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUcsTUFBQSxDQUFBbEMsS0FBSztjQUFBLEdBQUsrQztZQUFVLEdBQUdySCxLQUFLLENBQVMsRUFDL0M2RyxZQUFZLElBQUl6SCxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUcsTUFBQSxDQUFBcEQsS0FBSztjQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDcUQsUUFBUTtjQUFFcEQsT0FBTyxFQUFFcUQ7WUFBWSxFQUFJLENBQzlELENBQ2lCO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7O1VDdENDO1VBTUE7VUFLQTtVQWFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRDs7OztVQUlPLE1BQU1oQixhQUFhLEdBQUFsRixPQUFBLENBQUFrRixhQUFBLEdBQUcsQ0FDNUIsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsRUFDVCxTQUFTLENBQ1Q7VUFFRCxTQUFTMEIsa0JBQWtCQSxDQUFDdkMsS0FBSyxFQUFFd0MsUUFBUSxHQUFHLEVBQUU7WUFDL0MsTUFBTUMsYUFBYSxHQUFHLENBQUMsR0FBRzVCLGFBQWEsRUFBRSxHQUFHMkIsUUFBUSxDQUFDO1lBQ3JELE1BQU1wRyxVQUFVLEdBQUc7Y0FBRSxHQUFHNEQ7WUFBSyxDQUFFO1lBQy9CeUMsYUFBYSxDQUFDbEcsT0FBTyxDQUFDQyxJQUFJLElBQUksT0FBT0osVUFBVSxDQUFDSSxJQUFJLENBQUMsQ0FBQztZQUV0RCxPQUFPSixVQUFVO1VBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCTSxNQUFPc0csZUFBZTtZQUMzQixPQUFPLENBQUFDLFFBQVM7WUFFaEIsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0FDLFlBQVlELFFBQVEsR0FBRztZQUV2QkUsUUFBUUEsQ0FBQSxHQUFJO1lBQ1osT0FBT0MsR0FBR0EsQ0FBQ0gsUUFBUTtjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFELFFBQVMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxJQUFJRCxlQUFlLENBQUNFLFFBQVEsQ0FBQzs7Y0FFL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUQsUUFBUztZQUN0Qjs7VUFDQWhILE9BQUEsQ0FBQStHLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmRCxJQUFBdEksTUFBQSxHQUFBQyxPQUFBO1VBU087VUFBVSxTQUFVMkksS0FBS0EsQ0FBQ3hJLEtBQW9CO1lBQ3BELE1BQU1zRCxLQUFLLEdBQXVDLElBQUExRCxNQUFBLENBQUE0SCxNQUFNLEVBQW1CLElBQUksQ0FBQztZQUVoRixNQUFNaEYsT0FBTyxHQUFJZCxLQUFLLElBQVU7Y0FDL0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCMkIsS0FBSyxDQUFDTSxPQUFPLENBQUN0QyxPQUFPLEdBQUcsSUFBSTtjQUM1QixJQUFJLENBQUMsQ0FBQ3RCLEtBQUssQ0FBQ3dCLFFBQVEsRUFBRXhCLEtBQUssQ0FBQ3dCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFFRCxNQUFNRSxVQUFVLEdBQWU7Y0FBRSxHQUFHNUI7WUFBSyxDQUFFO1lBQzNDLE9BQU80QixVQUFVLENBQUNKLFFBQVE7WUFFMUIsTUFBTVAsR0FBRyxHQUFXLDBCQUEwQlcsVUFBVSxDQUFDVixTQUFTLEdBQUdVLFVBQVUsQ0FBQ1YsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUVoRyxPQUNDdEIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBT08sU0FBUyxFQUFFRCxHQUFHO2NBQUV1QixPQUFPLEVBQUVBO1lBQU8sR0FDdEM1QyxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFPVSxHQUFHLEVBQUVpQyxLQUFLO2NBQUEsR0FBTTFCLFVBQVU7Y0FBRWEsSUFBSSxFQUFDLE9BQU87Y0FBQ2pCLFFBQVEsRUFBRWdCO1lBQU8sRUFBSSxFQUNwRVosVUFBVSxDQUFDcEIsS0FBSyxJQUFJWixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxlQUFPaUIsVUFBVSxDQUFDcEIsS0FBSyxDQUFRLENBQzdDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFaLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0SSxPQUFBLEdBQUE1SSxPQUFBO1VBRU87VUFBVyxTQUFVNkksTUFBTUEsQ0FBQzFJLEtBQUs7WUFDdkMsTUFBTTtjQUFFa0Q7WUFBUSxDQUFFLEdBQUdsRCxLQUFLO1lBQzFCLE1BQU0ySSxVQUFVLEdBQUc7Y0FBRSxHQUFHM0k7WUFBSyxDQUFFO1lBQy9CLE9BQU8ySSxVQUFVLENBQUN6RixRQUFRO1lBQzFCLE9BQU95RixVQUFVLENBQUMxSSxPQUFPO1lBRXpCLE1BQU1nRyxLQUFLLEdBQUcsQ0FBQyxDQUFDMkMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDbEIsUUFBUSxDQUFDMUgsS0FBSyxDQUFDaUcsS0FBSyxDQUFDLElBQUksRUFBRTtZQUU1RCxJQUFJL0YsTUFBTSxHQUFHLEVBQUU7WUFDZixJQUFJRixLQUFLLENBQUNDLE9BQU8sRUFBRTtjQUNsQkQsS0FBSyxDQUFDQyxPQUFPLENBQUM4QixPQUFPLENBQUMsQ0FBQzhHLElBQUksRUFBRXZJLEdBQUcsS0FBSTtnQkFDbkNKLE1BQU0sQ0FBQzBFLElBQUksQ0FBQ2hGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUM4SCxPQUFBLENBQUFLLFlBQVk7a0JBQUEsR0FBS0QsSUFBSTtrQkFBRXZJLEdBQUcsRUFBRUE7Z0JBQUcsRUFBSSxDQUFDO2NBQ2xELENBQUMsQ0FBQzs7WUFFSCxNQUFNMkIsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUM1RCxNQUFNQyxFQUFFLEdBQUdyQyxLQUFLLENBQUNxQyxFQUFFLElBQUksR0FBRzlCLElBQUksSUFBSStCLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUlOLE1BQU0sRUFBRTtZQUMvRCxNQUFNaEIsR0FBRyxHQUFHLGtCQUFrQjtZQUU5QixPQUNDckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2xCckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBTytCLE9BQU8sRUFBRUw7WUFBRSxHQUFHckMsS0FBSyxDQUFDUSxLQUFLLENBQVMsRUFDekNaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQVFPLFNBQVMsRUFBRUQsR0FBRztjQUFBLEdBQU0wSDtZQUFVLEdBQ3BDekksTUFBTSxFQUNOZ0QsUUFBUSxDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQXRELE1BQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVcsU0FBVWlKLFlBQVlBLENBQUM5SSxLQUFLO1lBQzdDLE1BQU07Y0FBRWtEO1lBQVEsQ0FBRSxHQUFHbEQsS0FBSztZQUMxQixNQUFNMkksVUFBVSxHQUFHO2NBQUUsR0FBRzNJO1lBQUssQ0FBRTtZQUMvQixPQUFPMkksVUFBVSxDQUFDekYsUUFBUTtZQUUxQixPQUFPdEQsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBQSxHQUFZZ0k7WUFBVSxHQUFHekYsUUFBUSxDQUFVO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF0RCxNQUFBLEdBQUFDLE9BQUE7VUFHTztVQUFZLFNBQVVrSixNQUFNQSxDQUFDL0ksS0FBMEI7WUFDN0QsTUFBTTtjQUFFc0IsT0FBTztjQUFFRSxRQUFRO2NBQUU4RixPQUFPLEdBQUcsU0FBUztjQUFFL0YsUUFBUTtjQUFFeUgsTUFBTSxHQUFHLElBQUk7Y0FBRTlIO1lBQVMsQ0FBRSxHQUFHbEIsS0FBSztZQUU1RixNQUFNLENBQUNpSixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdEosTUFBQSxDQUFBYyxPQUFLLENBQUM2RyxRQUFRLENBQVUsQ0FBQyxDQUFDakcsT0FBTyxDQUFDO1lBRXBFMUIsTUFBQSxDQUFBYyxPQUFLLENBQUMwRixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJNkMsU0FBUyxLQUFLM0gsT0FBTyxFQUFFO2NBQzNCNEgsWUFBWSxDQUFDNUgsT0FBTyxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDQSxPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1HLFlBQVksR0FBSUMsS0FBMEMsSUFBVTtjQUN6RUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJ1SCxZQUFZLENBQUN4SCxLQUFLLENBQUM2RSxhQUFhLENBQUNqRixPQUFPLENBQUM7Y0FDekNFLFFBQVEsSUFBSUEsUUFBUSxDQUFDRSxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUVELElBQUl5SCxlQUFlLEdBQVcsc0JBQXNCakksU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ2hGaUksZUFBZSxJQUFJNUgsUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBRTlDLElBQUlOLEdBQUcsR0FBV2dJLFNBQVMsR0FBRyxrQ0FBa0MsR0FBRywyQkFBMkI7WUFDOUZoSSxHQUFHLElBQUlxRyxPQUFPLEdBQUcsSUFBSUEsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNuQ3JHLEdBQUcsSUFBSStILE1BQU0sR0FBRyxJQUFJQSxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBRWpDLE1BQU1wSCxVQUFVLEdBQXdCO2NBQUUsR0FBRzVCO1lBQUssQ0FBRTtZQUVwRCxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMrQixPQUFPLENBQUNDLElBQUksSUFBRztjQUM5RSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixNQUFNSyxFQUFFLEdBQUdyQyxLQUFLLENBQUNxQyxFQUFFLElBQUlyQyxLQUFLLENBQUNPLElBQUksSUFBSSxvQkFBb0I7WUFFekQsT0FDQ1gsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFaUk7WUFBZSxHQUM5QnZKLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQ0NPLFNBQVMsRUFBQyw4QkFBOEI7Y0FDeENtQixFQUFFLEVBQUVBLEVBQUU7Y0FDTkksSUFBSSxFQUFDLFVBQVU7Y0FDZm5CLE9BQU8sRUFBRTJILFNBQVM7Y0FDbEJ6SCxRQUFRLEVBQUVDLFlBQVk7Y0FBQSxHQUNsQkc7WUFBVSxFQUNiLEVBQ0ZoQyxNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTyxTQUFTLEVBQUVELEdBQUc7Y0FBRXlCLE9BQU8sRUFBRUw7WUFBRSxHQUNqQ3pDLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBO2NBQU1PLFNBQVMsRUFBRTtZQUFvQixFQUFJLENBQ2xDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQXRCLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVV1SixlQUFlQSxDQUFDO1lBQUVDLE9BQU87WUFBRUMsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDN0QsSUFBSSxDQUFDRixPQUFPLEVBQUUsT0FBTyxJQUFJO1lBRXpCLElBQUlwSSxHQUFHLEdBQUcsc0JBQXNCO1lBRWhDLElBQUlzSSxTQUFTLElBQUlELE1BQU0sR0FBR0MsU0FBUyxHQUFHLEVBQUUsRUFBRTtjQUN6Q3RJLEdBQUcsSUFBSXFJLE1BQU0sR0FBR0MsU0FBUyxHQUFHLENBQUMsR0FBRywrQkFBK0IsR0FBRyxnQ0FBZ0M7O1lBRW5HLE9BQU8zSixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTyxTQUFTLEVBQUVEO1lBQUcsR0FBR3FJLE1BQU0sSUFBSSxDQUFDLENBQVE7VUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQTFKLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVUySixhQUFhQSxDQUFDO1lBQUVuRSxLQUFLO1lBQUUrQixRQUFRO1lBQUVDLFlBQVk7WUFBRXBCO1VBQUssQ0FBRTtZQUNyRSxJQUFJLENBQUNaLEtBQUssQ0FBQ21CLFNBQVMsSUFBSSxDQUFDWSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBRTlDLElBQUlBLFFBQVEsSUFBSW5CLEtBQUssS0FBSyxFQUFFLEVBQUVvQixZQUFZLEdBQUdBLFlBQVksR0FBR0EsWUFBWSxHQUFHaEMsS0FBSyxDQUFDZ0MsWUFBWTtZQUU3RixPQUFPekgsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBTU8sU0FBUyxFQUFDO1lBQXlCLEdBQUVtRyxZQUFZLENBQVE7VUFDdkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXpILE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFxSCxNQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQTRKLFFBQUEsR0FBQTVKLE9BQUE7VUFFTztVQUFVLFNBQVU2SixRQUFRQSxDQUFDMUosS0FBYTtZQUNoRCxNQUFNc0QsS0FBSyxHQUFHdEQsS0FBSyxDQUFDcUIsR0FBRyxJQUFJLElBQUF6QixNQUFBLENBQUE0SCxNQUFNLEdBQUU7WUFDbkMsTUFBTTtjQUFFNkIsT0FBTztjQUFFaEMsWUFBWTtjQUFFcEIsS0FBSyxHQUFHO1lBQUUsQ0FBRSxHQUFHakcsS0FBSztZQUNuRCxNQUFNLENBQUNxRixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUExRixNQUFBLENBQUEySCxRQUFRLEVBQVM7Y0FBRXRCLEtBQUs7Y0FBRW9CO1lBQVksQ0FBRSxDQUFDO1lBRW5FLE1BQU1zQyxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixNQUFNO2dCQUFFQyxZQUFZO2dCQUFFQztjQUFZLENBQUUsR0FBR3ZHLEtBQUssQ0FBQ00sT0FBTztjQUVwRCxJQUFJZ0csWUFBWSxHQUFHQyxZQUFZLEVBQUU7Z0JBQ2hDdkcsS0FBSyxDQUFDTSxPQUFPLENBQUNrRyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHSCxZQUFZLElBQUk7O1lBRWxELENBQUM7WUFDRDs7O1lBR0FoSyxNQUFBLENBQUFjLE9BQUssQ0FBQzBGLFNBQVMsQ0FBQ3VELFNBQVMsRUFBRSxDQUFDMUQsS0FBSyxDQUFDLENBQUM7WUFDbkMsTUFBTXhFLFlBQVksR0FBSUMsS0FBdUMsSUFBVTtjQUN0RSxJQUFJLENBQUMsQ0FBQzFCLEtBQUssQ0FBQ3dCLFFBQVEsSUFBSSxPQUFPeEIsS0FBSyxDQUFDd0IsUUFBUSxLQUFLLFVBQVUsRUFBRXhCLEtBQUssQ0FBQ3dCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO2NBQ25GNEQsUUFBUSxDQUFDO2dCQUNSLEdBQUdELEtBQUs7Z0JBQ1JtQixTQUFTLEVBQUUsS0FBSztnQkFDaEJQLEtBQUssRUFBRXZFLEtBQUssQ0FBQ2dGLE1BQU0sQ0FBQ1Q7ZUFDcEIsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJckUsVUFBVSxHQUFXO2NBQUUsR0FBRzVCO1lBQUssQ0FBRTtZQUNyQyxJQUFJaUIsR0FBRyxHQUFXakIsS0FBSyxDQUFDa0IsU0FBUyxHQUFHLEdBQUdsQixLQUFLLENBQUNrQixTQUFTLGVBQWUsR0FBRyxjQUFjO1lBQ3RGRCxHQUFHLElBQUlqQixLQUFLLENBQUN1QixRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDeENOLEdBQUcsSUFBSWpCLEtBQUssQ0FBQ29ILFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUNyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDckYsT0FBTyxDQUM1RkMsSUFBSSxJQUFJLE9BQU9KLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDLENBQy9CO1lBQ0QsTUFBTWlELFFBQVEsR0FBRztjQUNoQjBDLFFBQVEsRUFBRSx3QkFBd0I7Y0FDbEN6QyxRQUFRLEVBQUU7YUFDVjtZQUVELElBQUlsRixLQUFLLENBQUNzSCxPQUFPLElBQUlyQyxRQUFRLENBQUNqRixLQUFLLENBQUNzSCxPQUFPLENBQUMsRUFBRXJHLEdBQUcsSUFBSSxJQUFJZ0UsUUFBUSxDQUFDakYsS0FBSyxDQUFDc0gsT0FBTyxDQUFDLEVBQUU7WUFFbEYsSUFBSTBDLFFBQVEsR0FBRyxFQUFFO1lBQ2pCLElBQUloSyxLQUFLLENBQUMrRSxRQUFRLEVBQUU5RCxHQUFHLElBQUksY0FBYztZQUV6QyxPQUNDckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2xCckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FDQ1UsR0FBRyxFQUFFaUMsS0FBSztjQUFBLEdBQ04xQixVQUFVO2NBQ2RyQixJQUFJLEVBQUVQLEtBQUssQ0FBQ08sSUFBSTtjQUNoQmlCLFFBQVEsRUFBRUMsWUFBWTtjQUN0QndFLEtBQUssRUFBRUEsS0FBSztjQUNaRSxXQUFXLEVBQUVuRyxLQUFLLENBQUNtRyxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEbkcsS0FBSyxDQUFDa0QsUUFBUSxFQUNmdEQsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VHLE1BQUEsQ0FBQXNDLGFBQWE7Y0FBQ25FLEtBQUssRUFBRUEsS0FBSztjQUFFK0IsUUFBUSxFQUFFcEgsS0FBSyxDQUFDb0gsUUFBUTtjQUFFbkIsS0FBSyxFQUFFQSxLQUFLO2NBQUVvQixZQUFZLEVBQUVySCxLQUFLLENBQUNxSDtZQUFZLEVBQUksRUFDeEdySCxLQUFLLENBQUNRLEtBQUssSUFDWFosTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBT08sU0FBUyxFQUFFOEksUUFBUTtjQUFFdEgsT0FBTyxFQUFFMUMsS0FBSyxDQUFDcUM7WUFBRSxHQUMzQ3JDLEtBQUssQ0FBQ1EsS0FBSyxDQUViLEVBQ0RaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUM4SSxRQUFBLENBQUFMLGVBQWU7Y0FBQ0UsTUFBTSxFQUFFaEcsS0FBSyxFQUFFTSxPQUFPLEVBQUVxQyxLQUFLLENBQUNxRCxNQUFNO2NBQUVDLFNBQVMsRUFBRXZKLEtBQUssQ0FBQ2lLLFNBQVM7Y0FBRVosT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDbEc7VUFFUjs7Ozs7Ozs7Ozs7VUNwRUE7O1VBRUF4SCxNQUFBLENBQUFxSSxjQUFBLENBQUEvSSxPQUFBO1lBQ0E4RSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFwRSxNQUFBLENBQUFxSSxjQUFBLENBQUEvSSxPQUFBO1lBQ0E4RSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=