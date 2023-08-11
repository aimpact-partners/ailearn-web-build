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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsQ0FBQ3hCLElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsU0FBUztZQUV2RCxNQUFNeUIsS0FBSyxHQUF3QixFQUFFO1lBQ3JDLElBQUlMLEtBQUssRUFBRUssS0FBSyxDQUFDQyxNQUFNLEdBQUdOLEtBQUs7WUFDL0IxQyxTQUFTLEdBQUcsR0FBRzZDLE9BQU8sR0FBRzdDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSTJCLEdBQUcsR0FBVyxHQUFHM0IsU0FBUyxHQUFHLEdBQUdBLFNBQVMsR0FBRyxHQUFHLEVBQUUscUNBQXFDMkMsSUFBSSxFQUFFO1lBQ2hHLElBQUliLE1BQU0sRUFBRUgsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ2Y7Y0FBS1osU0FBUyxFQUFFMkIsR0FBRztjQUFFNUIsR0FBRyxFQUFFQTtZQUFHLEdBQzVCYTtjQUFLcUMsT0FBTyxFQUFDO1lBQWEsR0FDekJyQztjQUFRc0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUMsQ0FDRDtVQUFDaEIiLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsInJlZiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJjaGlsZHJlbiIsImljb24iLCJsb2FkaW5nIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJSZWFjdCIsInVzZVJlZiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZCIsImN1cnJlbnQiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHMiLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsImV4cG9ydHMiLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJzdGFydHNXaXRoIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvYnV0dG9uLnRzeCIsImNvZGUvdHMvbGluay50c3giLCJjb2RlL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==