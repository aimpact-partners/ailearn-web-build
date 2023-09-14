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
        hash: 465633993,
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
            if (useContext && context.selected === index) cls += ' pui-btn--active';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFPLEdBQUd2RCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlWLEdBQUcsR0FBVyxHQUFHVSxTQUFTLEdBQUcsR0FBR0EsU0FBUyxHQUFHLEdBQUcsRUFBRSxxQ0FBcUNxRCxJQUFJLEVBQUU7WUFDaEcsSUFBSVosTUFBTSxFQUFFbkQsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ0Y7Y0FBS1ksU0FBUyxFQUFFVixHQUFHO2NBQUVrQixHQUFHLEVBQUVBO1lBQUcsR0FDNUJwQjtjQUFLdUUsT0FBTyxFQUFDO1lBQWEsR0FDekJ2RTtjQUFRd0UsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUM7VUFDTTtVQUNQLE1BQU1qQixPQUFPLEdBQWtELHFCQUFVLEVBQUNXLFNBQVMsQ0FBQztVQUFDakQiLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInByb3BzIiwib3JpZW50YXRpb24iLCJjaGlsZHJlbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xzIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJCdXR0b25Hcm91cENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VCdXR0b25Hcm91cENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsInRzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsInRzL2J1dHRvbi1ncm91cC90eXBlLnRzIiwidHMvYnV0dG9uL2J1dHRvbi50c3giLCJ0cy9idXR0b24vaW50ZXJmYWNlLnRzIiwidHMvbGluay50c3giLCJ0cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==