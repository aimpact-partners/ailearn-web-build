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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJib3JkZXJlZCIsImNoaWxkcmVuIiwiY2xzIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJwcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJpY29uIiwibG9hZGluZyIsImZldGNoaW5nIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwidXNlUmVmIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkIiwiY3VycmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiY29sb3IiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2J1dHRvbi1ncm91cC50c3giLCJjb2RlL3RzL2J1dHRvbi50c3giLCJjb2RlL3RzL2xpbmsudHN4IiwiY29kZS90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==