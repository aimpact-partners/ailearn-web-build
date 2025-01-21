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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 337417917,
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
            function calculateLines(textarea) {
              if (!textarea) {
                throw new Error('Input element not found.');
              }
              const computedStyle = globalThis.getComputedStyle(textarea);
              const elementWidth = textarea.clientWidth;
              const fontSize = computedStyle.fontSize;
              const fontFamily = computedStyle.fontFamily;
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d');
              if (!context) {
                throw new Error('Unable to get canvas rendering context.');
              }
              context.font = `${fontSize} ${fontFamily}`;
              const averageCharWidth = context.measureText('M').width;
              const maxCharsPerLine = Math.floor(elementWidth / averageCharWidth);
              // Calculate visible line count
              const lineHeight = parseFloat(computedStyle.lineHeight) || parseFloat(fontSize) * 1.2; // Estimate if lineHeight is 'normal'
              const lines = Math.round(textarea.value.length / maxCharsPerLine) + 1;
              return {
                maxCharsPerLine,
                lines
              };
            }
            const checkSize = () => {
              const textarea = input.current;
              const {
                scrollHeight,
                offsetHeight
              } = textarea;
              const {
                maxCharsPerLine,
                lines
              } = calculateLines(textarea);
              const lineHeight = parseFloat(globalThis.getComputedStyle(textarea).lineHeight);
              const height = lineHeight * lines; // Example: Minimum 2 lines height
              if (maxCharsPerLine < textarea.value.length) {
                textarea.style.height = (height === 1 ? height + 1 : height) + 'px';
                previousHeight = offsetHeight;
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidXNlRWZmZWN0IiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJvbkludmFsaWQiLCJ0YXJnZXQiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInNldEN1c3RvbVZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsIl9sYWJlbCIsIl9jb250cm9sIiwiX2Vycm9yIiwiSW5wdXQiLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsInZhcmlhbnQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImRhdGVzIiwiaW5jbHVkZXMiLCJ1bnN0eWxlZCIsInByb3ZpZGVyVmFsdWUiLCJsYWJlbFNwZWNzIiwiUHJvdmlkZXIiLCJnZW5lcmF0ZUF0dHJpYnV0ZXMiLCJ0b1JlbW92ZSIsInByb3BzVG9SZW1vdmUiLCJTZWxlY3Rvck1hbmFnZXIiLCJpbnN0YW5jZSIsInNlbGVjdG9yIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImdldCIsIlJhZGlvIiwiX29wdGlvbiIsIlNlbGVjdCIsImF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJpdGVtIiwiT3B0aW9uU2VsZWN0IiwiU3dpdGNoIiwic2l6aW5nIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsInByZXZpb3VzSGVpZ2h0IiwiVGV4dGFyZWEiLCJjYWxjdWxhdGVMaW5lcyIsInRleHRhcmVhIiwiY29tcHV0ZWRTdHlsZSIsImdsb2JhbFRoaXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxlbWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjYW52YXMiLCJkb2N1bWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZm9udCIsImF2ZXJhZ2VDaGFyV2lkdGgiLCJtZWFzdXJlVGV4dCIsIndpZHRoIiwibWF4Q2hhcnNQZXJMaW5lIiwibGluZUhlaWdodCIsInBhcnNlRmxvYXQiLCJsaW5lcyIsInJvdW5kIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic3R5bGUiLCJjbGVhbkV4dHJhTmV3bGluZXMiLCJ0ZXh0IiwicmVwbGFjZSIsImNsc0xhYmVsIiwibWF4TGVuZ3RoIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY2hlY2tib3gvZ3JvdXAudHN4IiwiL3RzL2NoZWNrYm94L2luZGV4LnRzeCIsIi90cy9mb3JtLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2RhdGUudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi1jb250YWluZXIudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvaWNvbi50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9sYWJlbC50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9wYXNzd29yZC50c3giLCIvdHMvaW5wdXQvY29udGV4dC50cyIsIi90cy9pbnB1dC9jb250cm9sLnRzeCIsIi90cy9pbnB1dC9pbmRleC50c3giLCIvdHMvaW5wdXQvaW50ZXJmYWNlcy9pbmRleC50cyIsIi90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi90cy9tb2RlbC9tYW5hZ2VyLnRzIiwiL3RzL3JhZGlvLnRzeCIsIi90cy9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3NlbGVjdC9vcHRpb24udHN4IiwiL3RzL3N3aXRjaC50c3giLCIvdHMvdGV4dGFyZWEvY291bnRlci50c3giLCIvdHMvdGV4dGFyZWEvZXJyb3IudHN4IiwiL3RzL3RleHRhcmVhL2luZGV4LnRzeCIsIi90eXBlcy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsYUFBYUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDO1lBQU8sQ0FBRSxHQUFHRCxLQUFLO1lBQ3pCLE1BQU1FLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEtBQUk7Y0FFNUMsTUFBTUMsR0FBRyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csSUFBSSxJQUFJRixLQUFLLEVBQUU7Y0FDckMsTUFBTTtnQkFBRUcsS0FBSztnQkFBRSxHQUFHQztjQUFJLENBQUUsR0FBR0wsTUFBTTtjQUNqQyxPQUFPUixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYixNQUFBLENBQUFjLFFBQVE7Z0JBQUNOLEdBQUcsRUFBRUEsR0FBRztnQkFBRUUsS0FBSyxFQUFFQSxLQUFLO2dCQUFBLEdBQU1DO2NBQUksRUFBSTtZQUN0RCxDQUFDLENBQUM7WUFFRixNQUFNSSxVQUFVLEdBQUc7Y0FDbEJDLE1BQU0sRUFBRSxRQUFRO2NBQ2hCQyxHQUFHLEVBQUU7YUFDTDtZQUNELE1BQU1DLFNBQVMsR0FBR2hCLEtBQUssQ0FBQ2dCLFNBQVMsSUFBSSxLQUFLO1lBQzFDLE1BQU1DLEdBQUcs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