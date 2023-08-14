System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Button, Link, Spinner, __beyond_pkg, hmr;
  _export({
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiQnV0dG9uIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsImNoaWxkcmVuIiwiaWNvbiIsImxvYWRpbmciLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsImRlZmF1bHQiLCJ1c2VSZWYiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGQiLCJjdXJyZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsIlJlYWN0IiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJzdGFydHNXaXRoIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlcyI6WyIvY29kZS90cy9idXR0b24udHN4IiwiL2NvZGUvdHMvbGluay50c3giLCIvY29kZS90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFB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