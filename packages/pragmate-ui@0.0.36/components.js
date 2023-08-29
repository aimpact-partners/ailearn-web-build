System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, Link, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    Link: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_4 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Ripple) {
      dependency_5 = _pragmateUi0036Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.0.36/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/components');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./button-group
      ******************************/
      ims.set('./button-group', {
        hash: 2836328429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var React = require("react");
          /* bundle */
          function ButtonGroup({
            variant = "primary",
            size = "medium",
            orientation = "row",
            children
          }) {
            let cls = `pragmate-button-group`;
            cls += orientation ? ` ${orientation}` : "";
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 2948815373,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          const {
            forwardRef
          } = React;
          /*bundle*/
          const Button = forwardRef((props, ref) => {
            const {
              className,
              onClick,
              data,
              label,
              title,
              children,
              icon,
              loading,
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            const refObject = React.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);else if (ref) ref.current = instance;
            };
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            React.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(refObject.current);
              if (title) {
                console.log(11, title);
                (0, _tippy.default)(refObject.current);
              }
            }, [title]);
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (title) properties['data-tippy-content'] = title;
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pragmate-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            return React.createElement("button", {
              ref: combinedRef,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled,
              ...properties
            }, icon && React.createElement(_icons.Icon, {
              icon: icon
            }), label || children && React.createElement("div", {
              className: `button-label ${loading ? 'loading' : ''}`
            }, label || children), (loading || fetching) && React.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
          exports.Button = Button;
        }
      });

      /**********************************
      INTERNAL MODULE: ./button/interface
      **********************************/

      ims.set('./button/interface', {
        hash: 2412629453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 3853113460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            const onClick = async event => {
              if (isExternal) return;
              event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                await props.onClick(event);
              }
              if (href) _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return React.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target
            }, props.children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./spinner
      *************************/

      ims.set('./spinner', {
        hash: 1366424420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = (0, _react.forwardRef)((props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            size = size ? size : 'xs';
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = `${className ? `${className} ` : ''}pragmate-element-spinner spinner--${size}`;
            if (active) cls += ' is-active';
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: '30',
              style: style
            })));
          });
          exports.Spinner = Spinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button-group",
        "from": "ButtonGroup",
        "name": "ButtonGroup"
      }, {
        "im": "./button/button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group').ButtonGroup : value);
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button/button').Button : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSUYsR0FBRyxHQUFXLEdBQUdFLFNBQVMsR0FBRyxHQUFHQSxTQUFTLEdBQUcsR0FBRyxFQUFFLHFDQUFxQ0wsSUFBSSxFQUFFO1lBQ2hHLElBQUl5QyxNQUFNLEVBQUV0QyxHQUFHLElBQUksWUFBWTtZQUUvQixPQUNDQztjQUFLQyxTQUFTLEVBQUVGLEdBQUc7Y0FBRU0sR0FBRyxFQUFFQTtZQUFHLEdBQzVCTDtjQUFLdUQsT0FBTyxFQUFDO1lBQWEsR0FDekJ2RDtjQUFRd0QsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUMsQ0FDRDtVQUFDZiIsIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwidmFyaWFudCIsInNpemUiLCJvcmllbnRhdGlvbiIsImNoaWxkcmVuIiwiY2xzIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJmb3J3YXJkUmVmIiwiQnV0dG9uIiwicHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImZldGNoaW5nIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJjb2xvciIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2J1dHRvbi1ncm91cC50c3giLCJ0cy9idXR0b24vYnV0dG9uLnRzeCIsInRzL2J1dHRvbi9pbnRlcmZhY2UudHMiLCJ0cy9saW5rLnRzeCIsInRzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=