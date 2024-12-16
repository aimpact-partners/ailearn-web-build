System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Base) {
      dependency_2 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/base', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/form');
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
        hash: 2186145094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _error = require("./error");
          var _counter = require("./counter");
          let previousHeight = 0;
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
              const textarea = input.current;
              const {
                scrollHeight,
                offsetHeight
              } = textarea;
              // Temporarily cache the current height
              // const previousHeight = textarea.style.height;
              textarea.style.height = 'auto'; // Reset the height to auto to calculate the correct height
              // Avoid jumpy behavior by resetting the height only if necessary
              const lineHeight = parseFloat(globalThis.getComputedStyle(textarea).lineHeight);
              const minHeight = lineHeight * 2; // Example: Minimum 2 lines height
              if (previousHeight !== scrollHeight) {
                const height = scrollHeight > 0 ? scrollHeight : minHeight;
                textarea.style.height = `${height}px`;
              } else if (scrollHeight <= offsetHeight) {
                // Handle shrinking carefully to avoid abrupt resizing
                textarea.style.height = Math.max(scrollHeight, minHeight) + 'px';
              }
              previousHeight = offsetHeight;
            };
            function cleanExtraNewlines(text) {
              return text.replace(/\n+$/, '\n');
            }
            /**
             * If the textarea is created with a value, the height needs to be checked
             */
            _react.default.useEffect(checkSize, [value]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const value = cleanExtraNewlines(event.target.value);
              setState({
                ...state,
                _hasError: false,
                value
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
              value: cleanExtraNewlines(value),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidXNlRWZmZWN0IiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJvbkludmFsaWQiLCJ0YXJnZXQiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInNldEN1c3RvbVZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImRhdGVzIiwiaW5jbHVkZXMiLCJ1bnN0eWxlZCIsInByb3ZpZGVyVmFsdWUiLCJsYWJlbFNwZWNzIiwiUHJvdmlkZXIiLCJnZW5lcmF0ZUF0dHJpYnV0ZXMiLCJ0b1JlbW92ZSIsInByb3BzVG9SZW1vdmUiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlJhZGlvIiwiX29wdGlvbiIsIlNlbGVjdCIsImF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6aW5nIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsInByZXZpb3VzSGVpZ2h0IiwiVGV4dGFyZWEiLCJjaGVja1NpemUiLCJ0ZXh0YXJlYSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInBhcnNlRmxvYXQiLCJnbG9iYWxUaGlzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1pbkhlaWdodCIsIm1heCIsImNsZWFuRXh0cmFOZXdsaW5lcyIsInRleHQiLCJyZXBsYWNlIiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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LEdBQUcsSUFBSSxJQUFJZ0UsUUFBUSxDQUFDakYsS0FBSyxDQUFDc0gsT0FBTyxDQUFDLEVBQUU7WUFFbEYsSUFBSXFELFFBQVEsR0FBRyxFQUFFO1lBQ2pCLElBQUkzSyxLQUFLLENBQUMrRSxRQUFRLEVBQUU5RCxHQUFHLElBQUksY0FBYztZQUV6QyxPQUNDckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFRDtZQUFHLEdBQ2xCckIsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FDQ1UsR0FBRyxFQUFFaUMsS0FBSztjQUFBLEdBQ04xQixVQUFVO2NBQ2RyQixJQUFJLEVBQUVQLEtBQUssQ0FBQ08sSUFBSTtjQUNoQmlCLFFBQVEsRUFBRUMsWUFBWTtjQUN0QndFLEtBQUssRUFBRXVFLGtCQUFrQixDQUFDdkUsS0FBSyxDQUFDO2NBQ2hDRSxXQUFXLEVBQUVuRyxLQUFLLENBQUNtRyxXQUFXLElBQUk7WUFBRyxFQUNwQyxFQUNEbkcsS0FBSyxDQUFDa0QsUUFBUSxFQUNmdEQsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VHLE1BQUEsQ0FBQXNDLGFBQWE7Y0FBQ25FLEtBQUssRUFBRUEsS0FBSztjQUFFK0IsUUFBUSxFQUFFcEgsS0FBSyxDQUFDb0gsUUFBUTtjQUFFbkIsS0FBSyxFQUFFQSxLQUFLO2NBQUVvQixZQUFZLEVBQUVySCxLQUFLLENBQUNxSDtZQUFZLEVBQUksRUFDeEdySCxLQUFLLENBQUNRLEtBQUssSUFDWFosTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUE7Y0FBT08sU0FBUyxFQUFFeUosUUFBUTtjQUFFakksT0FBTyxFQUFFMUMsS0FBSyxDQUFDcUM7WUFBRSxHQUMzQ3JDLEtBQUssQ0FBQ1EsS0FBSyxDQUViLEVBQ0RaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUM4SSxRQUFBLENBQUFMLGVBQWU7Y0FBQ0UsTUFBTSxFQUFFaEcsS0FBSyxFQUFFTSxPQUFPLEVBQUVxQyxLQUFLLENBQUNxRCxNQUFNO2NBQUVDLFNBQVMsRUFBRXZKLEtBQUssQ0FBQzRLLFNBQVM7Y0FBRXZCLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ2xHO1VBRVI7Ozs7Ozs7Ozs7O1VDekZBOztVQUVBeEgsTUFBQSxDQUFBZ0osY0FBQSxDQUFBMUosT0FBQTtZQUNBOEUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBcEUsTUFBQSxDQUFBZ0osY0FBQSxDQUFBMUosT0FBQTtZQUNBOEUsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119