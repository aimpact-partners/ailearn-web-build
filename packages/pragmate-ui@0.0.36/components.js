System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 529259960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var React = require("react");
          var _context = require("./context");
          /* bundle */
          function ButtonGroup(props) {
            const {
              orientation = 'row',
              children
            } = props;
            const [selected, setSelected] = React.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            const childrenWithProps = React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                index
              }); // Passing the index as a prop
            });

            return React.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, React.createElement("div", {
              className: cls
            }, childrenWithProps));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./button-group/context
      **************************************/

      ims.set('./button-group/context', {
        hash: 2338960457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useButtonGroupContext = exports.ButtonGroupContext = void 0;
          var _react = require("react");
          const ButtonGroupContext = _react.default.createContext({});
          exports.ButtonGroupContext = ButtonGroupContext;
          const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
          exports.useButtonGroupContext = useButtonGroupContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 540619799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 2572317219,
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
          var _context = require("../button-group/context");
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
              index,
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            const context = React.useContext(_context.ButtonGroupContext);
            const refObject = React.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);else if (ref) ref.current = instance;
            };
            const useContext = typeof context?.setSelected === 'function';
            const onClickButton = event => {
              if (useContext) {
                context.setSelected(index);
              }
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            React.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(refObject.current);
              if (title) {
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
            if (useContext && context.selected === index) cls += ' pui-btn--active';
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
        hash: 3436412541,
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
        "im": "./button-group/button-group",
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
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group/button-group').ButtonGroup : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDaEcsSUFBSVgsTUFBTSxFQUFFakQsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ0Y7Y0FBS1ksU0FBUyxFQUFFVixHQUFHO2NBQUVrQixHQUFHLEVBQUVBO1lBQUcsR0FDNUJwQjtjQUFLb0UsT0FBTyxFQUFDO1lBQWEsR0FDekJwRTtjQUFRcUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUMsQ0FDRDtVQUFDcEQiLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInByb3BzIiwib3JpZW50YXRpb24iLCJjaGlsZHJlbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xzIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJCdXR0b25Hcm91cENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VCdXR0b25Hcm91cENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGQiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsInRzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsInRzL2J1dHRvbi1ncm91cC90eXBlLnRzIiwidHMvYnV0dG9uL2J1dHRvbi50c3giLCJ0cy9idXR0b24vaW50ZXJmYWNlLnRzIiwidHMvbGluay50c3giLCJ0cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==