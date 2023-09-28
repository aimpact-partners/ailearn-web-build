System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.1/icons", "pragmate-ui@0.0.1/spinner", "pragmate-ui@0.0.1/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_pragmateUi001Icons) {
      dependency_3 = _pragmateUi001Icons;
    }, function (_pragmateUi001Spinner) {
      dependency_4 = _pragmateUi001Spinner;
    }, function (_pragmateUi001Ripple) {
      dependency_5 = _pragmateUi001Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.1/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.1/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 2416244518,
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
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  index
                }); // Passing the index as a prop
              }
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
        hash: 2334034533,
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
        hash: 2931630009,
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
          var _tippy = require("tippy.js");
          var _context = require("../button-group/context");
          const {
            forwardRef
          } = _react.default;
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
            const context = _react.default.useContext(_context.ButtonGroupContext);
            const refObject = _react.default.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);
              //@ts-ignore
              else if (ref) ref.current = instance;
            };
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = event => {
              if (usingContext) {
                context.setSelected(index);
              }
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(refObject.current);
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
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            return _react.default.createElement("button", {
              ref: combinedRef,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), label || children && _react.default.createElement("div", {
              className: clsLoading
            }, label || children), (loading || fetching) && _react.default.createElement(_spinner.Spinner, {
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
        hash: 2893662941,
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
        hash: 4243581074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          const Component = (props, ref) => {
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
          };
          /*bundle*/
          const Spinner = (0, _react.forwardRef)(Component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7WUFFdkQsTUFBTXVCLEtBQUssR0FBd0IsRUFBRTtZQUNyQyxJQUFJTCxLQUFLLEVBQUVLLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixLQUFLO1lBQy9CckQsU0FBUyxHQUFHLEdBQUd3RCxPQUFPLEdBQUd4RCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlYLEdBQUcsR0FBVyxHQUFHVyxTQUFTLEdBQUcsR0FBR0EsU0FBUyxHQUFHLEdBQUcsRUFBRSxxQ0FBcUNzRCxJQUFJLEVBQUU7WUFDaEcsSUFBSVosTUFBTSxFQUFFckQsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ0Y7Y0FBS2EsU0FBUyxFQUFFWCxHQUFHO2NBQUVtQixHQUFHLEVBQUVBO1lBQUcsR0FDNUJyQjtjQUFLeUUsT0FBTyxFQUFDO1lBQWEsR0FDekJ6RTtjQUFRMEUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUM7VUFDTTtVQUNQLE1BQU1qQixPQUFPLEdBQWtELHFCQUFVLEVBQUNXLFNBQVMsQ0FBQztVQUFDbEQiLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInByb3BzIiwib3JpZW50YXRpb24iLCJjaGlsZHJlbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xzIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJ1dHRvbkdyb3VwQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJmb3J3YXJkUmVmIiwiQnV0dG9uIiwicmVmIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwiY29udGV4dCIsInJlZk9iamVjdCIsInVzZVJlZiIsImNvbWJpbmVkUmVmIiwiaW5zdGFuY2UiLCJjdXJyZW50IiwidXNpbmdDb250ZXh0Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0IiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsIkNvbXBvbmVudCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwidHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwidHMvYnV0dG9uLWdyb3VwL3R5cGUudHMiLCJ0cy9idXR0b24vYnV0dG9uLnRzeCIsInRzL2J1dHRvbi9pbnRlcmZhY2UudHMiLCJ0cy9saW5rLnRzeCIsInRzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19