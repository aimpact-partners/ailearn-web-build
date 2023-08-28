System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.0.36/components", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Button, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    Button: void 0,
    Checkbox: void 0,
    Form: void 0,
    Input: void 0,
    Radio: void 0,
    Switch: void 0,
    Textarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_pragmateUi0036Components) {
      dependency_1 = _pragmateUi0036Components;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_4 = _pragmateUi0036Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 2299267467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _module = require("pragmate-ui/components");
          /*bundle */
          const Button = _module.Button;
          exports.Button = Button;
        }
      });

      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/

      ims.set('./checkbox', {
        hash: 3112645513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var React = require("react");
          /*bundle*/
          const Checkbox = (0, React.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            let cls = `pragmate-checkbox ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "checked", "name", "onChange"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("input", {
              style: {
                display: "none"
              },
              ref: ref,
              type: "checkbox",
              className: "inp-cbx",
              id: name,
              name: name,
              checked: checked ?? state.checked,
              onChange: handleChange,
              ...properties
            }), React.createElement("label", {
              className: "cbx",
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, React.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), React.createElement("span", null, label))));
          });
          exports.Checkbox = Checkbox;
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

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3305850540,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          /*bundle*/
          function Input(props) {
            const input = (0, React.useRef)(null);
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido",
              type: props.type ?? "text"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "pragmate-element-input-error"
              }, errorMessage);
            };
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pragmate-element-input` : "pragmate-element-input";
            cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            ["className", "hasError", "errorMessage", "children", "icon", "label", "password", "loading", "colorSpinner"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.Icon, {
              icon: props.icon
            }), React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " ",
              id: props.id ?? props.name
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label), props.loading && React.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? "var(--primary)"
            }), props.password && (state.type === "password" ? React.createElement(_icons.IconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icons.IconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            })), props.required && React.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)")));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 1178208425,
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

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 3581251854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = void 0;
          var React = require("react");
          /*bundle*/
          const Switch = (0, React.forwardRef)((props, ref) => {
            const {
              value,
              checked,
              required,
              name,
              disabled,
              className,
              onChange,
              onClick
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            const handleClick = event => {
              onClick && onClick(event);
            };
            let cls = `pragmate-element-switch ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "disabled", "checked", "name", "required", "onChange", "onClick", "value"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, React.createElement("label", {
              className: "switch"
            }, React.createElement("input", {
              ref: ref,
              type: "checkbox",
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange,
              placeholder: name
            }), React.createElement("span", {
              className: "slider"
            })));
          });
          exports.Switch = Switch;
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 407748015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var React = require("react");
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? '',
              errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
              lengthMessage: 'Cantidad máxima: ',
              emptyMessage: 'Este campo es requerido'
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== '') errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: 'beyond-element-input-error'
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pragmate-element-textarea` : 'pragmate-element-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'errorMessage', 'children', 'label'].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== 'undefined' ? props.value : state.value,
              placeholder: props.placeholder ?? ' '
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && React.createElement("span", {
              className: 'beyond-input__required-label'
            }, "(*)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./checkbox",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button').Button : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBR0wsS0FBSyxDQUFDSyxTQUFTLDRCQUE0QixHQUFHLDJCQUEyQjtZQUNoSE8sR0FBRyxJQUFJWixLQUFLLENBQUNJLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN4Q1EsR0FBRyxJQUFJWixLQUFLLENBQUM0QyxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUU7WUFFckMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM1QixPQUFPLENBQUNDLElBQUksSUFBRztjQUM3RSxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixPQUNDQztjQUFLYixTQUFTLEVBQUVPO1lBQUcsR0FDbEJNLDBDQUNDQTtjQUNDakIsR0FBRyxFQUFFbUMsS0FBSztjQUFBLEdBQ052QixVQUFVO2NBQ2RWLElBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUFJO2NBQ2hCRyxRQUFRLEVBQUVJLFlBQVk7Y0FDdEIyQixLQUFLLEVBQUUsT0FBT3JDLEtBQUssQ0FBQ3FDLEtBQUssS0FBSyxXQUFXLEdBQUdyQyxLQUFLLENBQUNxQyxLQUFLLEdBQUc3QixLQUFLLENBQUM2QixLQUFLO2NBQ3JFcUIsV0FBVyxFQUFFMUQsS0FBSyxDQUFDMEQsV0FBVyxJQUFJO1lBQUcsRUFDcEMsRUFDRDFELEtBQUssQ0FBQ2tDLFFBQVEsRUFDZGtCLEtBQUssRUFDTHBELEtBQUssQ0FBQ08sS0FBSyxJQUFJVztjQUFPSyxPQUFPLEVBQUV2QixLQUFLLENBQUNzQjtZQUFFLEdBQUd0QixLQUFLLENBQUNPLEtBQUssQ0FBUyxFQUM5RFAsS0FBSyxDQUFDd0QsUUFBUSxJQUFJdEM7Y0FBTWIsU0FBUyxFQUFDO1lBQThCLFNBQVcsQ0FDMUUsQ0FDRTtVQUVSIiwibmFtZXMiOlsiQnV0dG9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNoZWNrYm94IiwicHJvcHMiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNscyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsIlJlYWN0Iiwic3R5bGUiLCJkaXNwbGF5IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRyZW4iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsImljb24iLCJsb2FkaW5nIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkljb24iLCJwbGFjZWhvbGRlciIsIlNwaW5uZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiUmFkaW8iLCJTd2l0Y2giLCJoYW5kbGVDbGljayIsIlRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24udHN4IiwidHMvY2hlY2tib3gudHN4IiwidHMvZm9ybS50c3giLCJ0cy9pbnB1dC50c3giLCJ0cy9yYWRpby50c3giLCJ0cy9zd2l0Y2gudHN4IiwidHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19