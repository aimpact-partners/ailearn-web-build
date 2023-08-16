System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, Link, Spinner, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['@beyond-js/kernel/routing', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/components');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./button-group
      ******************************/
      ims.set('./button-group', {
        hash: 2735495167,
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
            bordered = false,
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

      /************************
      INTERNAL MODULE: ./button
      ************************/

      ims.set('./button', {
        hash: 3907557150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          const /*bundle */Button = (0, _react.forwardRef)((props, ref) => {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon,
              loading,
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            if (!ref) ref = _react.default.useRef();
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(ref.current);
            }, []);
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pragmate-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("div", {
              className: `button-label ${loading ? 'loading' : ''}`
            }, label || children), (loading || fetching) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
          exports.Button = Button;
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 4032292245,
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
            const isExternal = href?.startsWith('http');
            const target = isExternal ? '_blank' : '';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return React.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target || target
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
        "im": "./button",
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
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button').Button : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJCdXR0b25Hcm91cCIsInZhcmlhbnQiLCJzaXplIiwib3JpZW50YXRpb24iLCJib3JkZXJlZCIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIl9yZWFjdCIsIl9pY29ucyIsIl9zcGlubmVyIiwiX3JpcHBsZSIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJpY29uIiwibG9hZGluZyIsImZldGNoaW5nIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwiZGVmYXVsdCIsInVzZVJlZiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZCIsImN1cnJlbnQiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsImV4cG9ydHMiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiY29sb3IiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYnV0dG9uLWdyb3VwLnRzeCIsIi9jb2RlL3RzL2J1dHRvbi50c3giLCIvY29kZS90cy9saW5rLnRzeCIsIi9jb2RlL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElB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