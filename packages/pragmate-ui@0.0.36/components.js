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
        hash: 3074773656,
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
              block,
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
            cls += block ? ' btn--block' : '';
            cls += loading || fetching ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading ? 'button-label--loading' : ''}`;
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
              className: clsLoading
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
        hash: 978277631,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsR0FBR3NELE9BQU8sR0FBR3RELFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSVYsR0FBRyxHQUFXLEdBQUdVLFNBQVMsR0FBRyxHQUFHQSxTQUFTLEdBQUcsR0FBRyxFQUFFLHFDQUFxQ29ELElBQUksRUFBRTtZQUNoRyxJQUFJWCxNQUFNLEVBQUVuRCxHQUFHLElBQUksWUFBWTtZQUUvQixPQUNDRjtjQUFLWSxTQUFTLEVBQUVWLEdBQUc7Y0FBRWtCLEdBQUcsRUFBRUE7WUFBRyxHQUM1QnBCO2NBQUtzRSxPQUFPLEVBQUM7WUFBYSxHQUN6QnRFO2NBQVF1RSxFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUMsSUFBSTtjQUFDTCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMxQyxDQUNEO1VBRVIsQ0FBQyxDQUNEO1VBQUN0RCIsIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwicHJvcHMiLCJvcmllbnRhdGlvbiIsImNoaWxkcmVuIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJjbHMiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpbmRleCIsImNsb25lRWxlbWVudCIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJ1dHRvbkdyb3VwQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJmb3J3YXJkUmVmIiwiQnV0dG9uIiwicmVmIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwiY29udGV4dCIsInJlZk9iamVjdCIsInVzZVJlZiIsImNvbWJpbmVkUmVmIiwiaW5zdGFuY2UiLCJjdXJyZW50Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkIiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwidHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwidHMvYnV0dG9uLWdyb3VwL3R5cGUudHMiLCJ0cy9idXR0b24vYnV0dG9uLnRzeCIsInRzL2J1dHRvbi9pbnRlcmZhY2UudHMiLCJ0cy9saW5rLnRzeCIsInRzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19