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
        hash: 765945223,
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
        hash: 1920991899,
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
              value: props.value ?? value,
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
        hash: 1324634335,
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
              autoresize = true,
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
              if (!autoresize) return;
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
        hash: 1171268489,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJkYXRlcyIsImluY2x1ZGVzIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZ2VuZXJhdGVBdHRyaWJ1dGVzIiwidG9SZW1vdmUiLCJwcm9wc1RvUmVtb3ZlIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemluZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsInVzZUVmZmVjdCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJwcmV2aW91c0hlaWdodCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsImNhbGN1bGF0ZUxpbmVzIiwidGV4dGFyZWEiLCJjb21wdXRlZFN0eWxlIiwiZ2xvYmFsVGhpcyIsImdldENvbXB1dGVkU3R5bGUiLCJlbGVtZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNhbnZhcyIsImRvY3VtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmb250IiwiYXZlcmFnZUNoYXJXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJtYXhDaGFyc1BlckxpbmUiLCJsaW5lSGVpZ2h0IiwicGFyc2VGbG9hdCIsImxpbmVzIiwicm91bmQiLCJjaGVja1NpemUiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJzdHlsZSIsImNsZWFuRXh0cmFOZXdsaW5lcyIsInRleHQiLCJyZXBsYWNlIiwidGFyZ2V0IiwiY2xzTGFiZWwiLCJtYXhMZW5ndGgiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jaGVja2JveC9ncm91cC50c3giLCIvdHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL3RzL2Zvcm0udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLWNvbnRhaW5lci50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2xhYmVsLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeCIsIi90cy9pbnB1dC9jb250ZXh0LnRzIiwiL3RzL2lucHV0L2NvbnRyb2wudHN4IiwiL3RzL2lucHV0L2luZGV4LnRzeCIsIi90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2lucHV0L2ludGVybmFsLXByb3BzLnRzIiwiL3RzL21vZGVsL21hbmFnZXIudHMiLCIvdHMvcmFkaW8udHN4IiwiL3RzL3NlbGVjdC9pbmRleC50c3giLCIvdHMvc2VsZWN0L29wdGlvbi50c3giLCIvdHMvc3dpdGNoLnRzeCIsIi90cy90ZXh0YXJlYS9jb3VudGVyLnRzeCIsIi90cy90ZXh0YXJlYS9lcnJvci50c3giLCIvdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiL3R5cGVzLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxhQUFhQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUM7WUFBTyxDQUFFLEdBQUdELEtBQUs7WUFDekIsTUFBTUUsTUFBTSxHQUFHRCxPQUFPLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssS0FBSTtjQUU1QyxNQUFNQyxHQUFHLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxJQUFJLElBQUlGLEtBQUssRUFBRTtjQUNyQyxNQUFNO2dCQUFFRyxLQUFLO2dCQUFFLEdBQUdDO2NBQUksQ0FBRSxHQUFHTCxNQUFNO2NBQ2pDLE9BQU9SLE1BQUEsQ0FBQWMsT0FBQSxDQUFBQyxhQUFBLENBQUNiLE1BQUEsQ0FBQWMsUUFBUTtnQkFBQ04sR0FBRyxFQUFFQSxHQUFHO2dCQUFFRSxLQUFLLEVBQUVBLEtBQUs7Z0JBQUEsR0FBTUM7Y0FBSSxFQUFJO1lBQ3RELENBQUMsQ0FBQztZQUVGLE1BQU1JLFVBQVUsR0FBRztjQUNsQkMsTUFBTSxFQUFFLFFBQVE7Y0FDaEJDLEdBQUcsRUFBRTthQUNMO1lBQ0QsTUFBTUMsU0FBUyxHQUFHaEIsS0FBSyxDQUFDZ0IsU0FBUyxJQUFJLEtBQUs7WUFDMUMsTUFBTUMsR0FBRyxHQUFHLDBDQUEwQ0osVUFBVSxDQUFDRyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0UsT0FDQ3BC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