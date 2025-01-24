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
        hash: 4273992553,
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
            }, [value]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidXNlRWZmZWN0IiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJkYXRlcyIsImluY2x1ZGVzIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZ2VuZXJhdGVBdHRyaWJ1dGVzIiwidG9SZW1vdmUiLCJwcm9wc1RvUmVtb3ZlIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemluZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJwcmV2aW91c0hlaWdodCIsIlRleHRhcmVhIiwiY2FsY3VsYXRlTGluZXMiLCJ0ZXh0YXJlYSIsImNvbXB1dGVkU3R5bGUiLCJnbG9iYWxUaGlzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsZW1lbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJhdmVyYWdlQ2hhcldpZHRoIiwibWVhc3VyZVRleHQiLCJ3aWR0aCIsIm1heENoYXJzUGVyTGluZSIsImxpbmVIZWlnaHQiLCJwYXJzZUZsb2F0IiwibGluZXMiLCJyb3VuZCIsImNoZWNrU2l6ZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsInN0eWxlIiwiY2xlYW5FeHRyYU5ld2xpbmVzIiwidGV4dCIsInJlcGxhY2UiLCJ0YXJnZXQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBR0QsS0FBSztZQUN6QixNQUFNRSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxLQUFJO2NBRTVDLE1BQU1DLEdBQUcsR0FBRyxHQUFHRixNQUFNLENBQUNHLElBQUksSUFBSUYsS0FBSyxFQUFFO2NBQ3JDLE1BQU07Z0JBQUVHLEtBQUs7Z0JBQUUsR0FBR0M7Y0FBSSxDQUFFLEdBQUdMLE1BQU07Y0FDakMsT0FBT1IsTUFBQSxDQUFBYyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2IsTUFBQSxDQUFBYyxRQUFRO2dCQUFDTixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVFLEtBQUssRUFBRUEsS0FBSztnQkFBQSxHQUFNQztjQUFJLEVBQUk7WUFDdEQsQ0FBQyxDQUFDO1lBRUYsTUFBTUksVUFBVSxHQUFHO2NBQ2xCQyxNQUFNLEVBQUUsUUFBUTtjQUNoQkMsR0FBRyxFQUFFO2FBQ0w7WUFDRCxNQUFNQyxTQUFTLEdBQUdoQixLQUFLLENBQUNnQixTQUFTLElBQUksS0FBSztZQUMxQyxNQUFNQyxHQUFHLEdBQUcsMENBQTBDSixVQUFVLENBQUNHLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvRSxPQUNDcEIsTUFBQSxDQUFBYyxP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