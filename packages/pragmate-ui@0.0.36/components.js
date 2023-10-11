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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 196687777,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY29udGV4dCIsIkJ1dHRvbkdyb3VwIiwicHJvcHMiLCJvcmllbnRhdGlvbiIsImNoaWxkcmVuIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiY2xzIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIl9yZWFjdCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJ1dHRvbkdyb3VwQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9zcGlubmVyIiwiX3JpcHBsZSIsIl90aXBweSIsImZvcndhcmRSZWYiLCJCdXR0b24iLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImJsb2NrIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHNMb2FkaW5nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9saW5rLnRzeCIsIi90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVksU0FBVUUsV0FBV0EsQ0FBQ0MsS0FBYTtZQUNyRCxNQUFNO2NBQUVDLFdBQVcsR0FBRyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHRixLQUFLO1lBQy9DLE1BQU0sQ0FBQ0csUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQVNMLEtBQUssQ0FBQ0csUUFBUSxDQUFDO1lBQ3RFLElBQUlHLEdBQUcsR0FBRyxrQkFBa0I7WUFDNUJBLEdBQUcsSUFBSUwsV0FBVyxHQUFHLHFCQUFxQkEsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUU1RCxNQUFNTSxpQkFBaUIsR0FBR1gsS0FBSyxDQUFDWSxRQUFRLENBQUNDLEdBQUcsQ0FBQ1AsUUFBUSxFQUFFLENBQUNRLEtBQUssRUFBRUMsS0FBSyxLQUFJO2NBQ3ZFLE9BQU9mLEtBQUssQ0FBQ2dCLFlBQVksQ0FBQ0YsS0FBSyxFQUFFO2dCQUFFQztjQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDOztZQUVGLE9BQ0NmLEtBQUEsQ0FBQWlCLGFBQUEsQ0FBQ2YsUUFBQSxDQUFBZ0Isa0JBQWtCLENBQUNDLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFO2dCQUFFYixRQUFRO2dCQUFFQztjQUFXO1lBQUUsR0FDNURSLEtBQUEsQ0FBQWlCLGFBQUE7Y0FBS0ksU0FBUyxFQUFFWDtZQUFHLEdBQUdDLGlCQUFpQixDQUFPLENBQ2pCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBVyxNQUFBLEdBQUFyQixPQUFBO1VBT08sTUFBTWlCLGtCQUFrQixHQUFHSSxNQUFBLENBQUFDLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQ0MsT0FBQSxDQUFBUCxrQkFBQSxHQUFBQSxrQkFBQTtVQUMxRSxNQUFNUSxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNSixNQUFBLENBQUFDLE9BQUssQ0FBQ0ksVUFBVSxDQUFDVCxrQkFBa0IsQ0FBQztVQUFDTyxPQUFBLENBQUFDLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7OztVQ1JoRjs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFKLE9BQUE7WUFDQUwsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFFLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLE9BQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBZ0MsTUFBQSxHQUFBaEMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLE1BQU07WUFBRWlDO1VBQVUsQ0FBRSxHQUFHWixNQUFBLENBQUFDLE9BQUs7VUFFckI7VUFBVyxNQUFNWSxNQUFNLEdBQUdELFVBQVUsQ0FBNEIsQ0FBQzlCLEtBQUssRUFBRWdDLEdBQXFCLEtBQUk7WUFDdkcsTUFBTTtjQUNMZixTQUFTO2NBQ1RnQixPQUFPO2NBQ1BDLElBQUk7Y0FDSkMsS0FBSztjQUNMQyxLQUFLO2NBQ0xsQyxRQUFRO2NBQ1JtQyxJQUFJO2NBQ0pDLE9BQU87Y0FDUEMsS0FBSztjQUNMNUIsS0FBSztjQUNMNkIsUUFBUSxHQUFHLEtBQUs7Y0FDaEJDLE9BQU8sR0FBRyxTQUFTO2NBQ25CQyxRQUFRLEdBQUcsS0FBSztjQUNoQkMsUUFBUSxHQUFHLEtBQUs7Y0FFaEIsR0FBR0M7WUFBVSxDQUNiLEdBQUc1QyxLQUFLO1lBRVQsTUFBTTZDLE9BQU8sR0FBRzNCLE1BQUEsQ0FBQUMsT0FBSyxDQUFDSSxVQUFVLENBQUN6QixRQUFBLENBQUFnQixrQkFBa0IsQ0FBQztZQUVwRCxNQUFNZ0MsU0FBUyxHQUFHNUIsTUFBQSxDQUFBQyxPQUFLLENBQUM0QixNQUFNLENBQW9CLElBQUksQ0FBQztZQUN2RCxNQUFNQyxXQUFXLEdBQUlDLFFBQTJCLElBQUk7Y0FDbkRILFNBQVMsQ0FBQ0ksT0FBTyxHQUFHRCxRQUFRO2NBQzVCLElBQUksT0FBT2pCLEdBQUcsS0FBSyxVQUFVLEVBQUVBLEdBQUcsQ0FBQ2lCLFFBQVEsQ0FBQztjQUM1QztjQUFBLEtBQ0ssSUFBSWpCLEdBQUcsRUFBRUEsR0FBRyxDQUFDa0IsT0FBTyxHQUFHRCxRQUFRO1lBQ3JDLENBQUM7WUFDRCxNQUFNMUIsVUFBVSxHQUFHLE9BQU9zQixPQUFPLEVBQUV6QyxXQUFXLEtBQUssVUFBVTtZQUM3RCxNQUFNK0MsYUFBYSxHQUFJQyxLQUEwQyxJQUFVO2NBQzFFLElBQUk3QixVQUFVLEVBQUU7Z0JBQ2ZzQixPQUFPLENBQUN6QyxXQUFXLENBQUNPLEtBQUssQ0FBQzs7Y0FFM0IsSUFBSXNCLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUM3Q0EsT0FBTyxDQUFDbUIsS0FBSyxDQUFDO2dCQUNkOztZQUVGLENBQUM7WUFFRGxDLE1BQUEsQ0FBQUMsT0FBSyxDQUFDa0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHLElBQUkxQixPQUFBLENBQUEyQixZQUFZLEVBQUU7Y0FDakNELE1BQU0sQ0FBQ0UsZUFBZSxDQUFDVixTQUFTLENBQUNJLE9BQU8sQ0FBQztjQUV6QyxJQUFJZCxLQUFLLEVBQUU7Z0JBQ1YsSUFBQVAsTUFBQSxDQUFBVixPQUFLLEVBQUMyQixTQUFTLENBQUNJLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQyxFQUFFLENBQUNkLEtBQUssQ0FBQyxDQUFDO1lBRVgsTUFBTXFCLFVBQVUsR0FBVztjQUMxQixHQUFHYixVQUFVO2NBQ2JjLElBQUksRUFBRTFELEtBQUssQ0FBQzBELElBQUksR0FBRzFELEtBQUssQ0FBQzBELElBQUksR0FBRzthQUNoQztZQUNELElBQUl0QixLQUFLLEVBQUVxQixVQUFVLENBQUMsb0JBQW9CLENBQUMsR0FBR3JCLEtBQUs7WUFDbkQsSUFBSUYsSUFBSSxFQUFFO2NBQ1RWLE1BQU0sQ0FBQ21DLElBQUksQ0FBQ3pCLElBQUksQ0FBQyxDQUFDMEIsT0FBTyxDQUFFQyxLQUFhLElBQUk7Z0JBQzNDSixVQUFVLENBQUMsUUFBUUksS0FBSyxFQUFFLENBQUMsR0FBRzNCLElBQUksQ0FBQzJCLEtBQUssQ0FBQztjQUMxQyxDQUFDLENBQUM7O1lBR0gsSUFBSXZELEdBQUcsR0FBRyx1QkFBdUJtQyxPQUFPLEVBQUU7WUFDMUNuQyxHQUFHLElBQUlXLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDWCxHQUFHLElBQUlvQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUU7WUFDakNwQyxHQUFHLElBQUkrQixJQUFJLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDOUIvQixHQUFHLElBQUlpQyxLQUFLLEdBQUcsYUFBYSxHQUFHLEVBQUU7WUFDakNqQyxHQUFHLElBQUlnQyxPQUFPLElBQUlFLFFBQVEsR0FBRyxlQUFlLEdBQUcsRUFBRTtZQUNqRCxNQUFNc0IsVUFBVSxHQUFHLGdCQUFnQnhCLE9BQU8sR0FBRyx1QkFBdUIsR0FBRyxFQUFFLEVBQUU7WUFDM0UsSUFBSWYsVUFBVSxJQUFJc0IsT0FBTyxDQUFDMUMsUUFBUSxLQUFLUSxLQUFLLEVBQUVMLEdBQUcsSUFBSSxrQkFBa0I7WUFDdkUsT0FDQ1ksTUFBQSxDQUFBQyxPQUFBLENBQUFOLGFBQUE7Y0FDQ21CLEdBQUcsRUFBRWdCLFdBQVc7Y0FDaEIvQixTQUFTLEVBQUVYLEdBQUc7Y0FDZDJCLE9BQU8sRUFBRWtCLGFBQWE7Y0FDdEJSLFFBQVEsRUFBRUwsT0FBTyxJQUFJSyxRQUFRO2NBQUEsR0FDekJjO1lBQVUsR0FFYnBCLElBQUksSUFBSW5CLE1BQUEsQ0FBQUMsT0FBQSxDQUFBTixhQUFBLENBQUNhLE1BQUEsQ0FBQXFDLElBQUk7Y0FBQzFCLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzVCRixLQUFLLElBQUtqQyxRQUFRLElBQUlnQixNQUFBLENBQUFDLE9BQUEsQ0FBQU4sYUFBQTtjQUFLSSxTQUFTLEVBQUU2QztZQUFVLEdBQUczQixLQUFLLElBQUlqQyxRQUFRLENBQVEsRUFFNUUsQ0FBQ29DLE9BQU8sSUFBSUUsUUFBUSxLQUFLdEIsTUFBQSxDQUFBQyxPQUFBLENBQUFOLGFBQUEsQ0FBQ2MsUUFBQSxDQUFBcUMsT0FBTztjQUFDTixJQUFJLEVBQUUsTUFBTWpCLE9BQU8sRUFBRTtjQUFFd0IsTUFBTSxFQUFFO1lBQUksRUFBSSxDQUNsRTtVQUVYLENBQUMsQ0FBQztVQUFDNUMsT0FBQSxDQUFBVSxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7O1VDNUZIOztVQUVBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosT0FBQTtZQUNBTCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXBCLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxRSxRQUFBLEdBQUFyRSxPQUFBO1VBRU87VUFBVSxTQUNSc0UsSUFBSUEsQ0FBQztZQUFFQyxJQUFJO1lBQUUsR0FBR3BFO1VBQUssQ0FBaUQ7WUFDOUUsTUFBTXFFLFVBQVUsR0FBR3JFLEtBQUssQ0FBQ3NFLE1BQU0sS0FBSyxRQUFRO1lBRTVDLE1BQU1yQyxPQUFPLEdBQUcsTUFBT21CLEtBQTBDLElBQW1CO2NBQ25GLElBQUlpQixVQUFVLEVBQUU7Y0FFaEJqQixLQUFLLENBQUNtQixjQUFjLEVBQUU7Y0FDdEJuQixLQUFLLENBQUNvQixlQUFlLEVBQUU7Y0FFdkIsSUFBSXhFLEtBQUssQ0FBQ2lDLE9BQU8sSUFBSSxPQUFPakMsS0FBSyxDQUFDaUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDekQsTUFBTWpDLEtBQUssQ0FBQ2lDLE9BQU8sQ0FBQ21CLEtBQUssQ0FBQzs7Y0FFM0IsSUFBSWdCLElBQUksRUFBRUYsUUFBQSxDQUFBTyxPQUFPLENBQUNDLFNBQVMsQ0FBQ04sSUFBSSxDQUFDO1lBQ2xDLENBQUM7WUFFRCxNQUFNWCxVQUFVLEdBQUc7Y0FBRSxHQUFHekQ7WUFBSyxDQUFFO1lBQy9CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDNEQsT0FBTyxDQUFDZSxJQUFJLElBQUksT0FBT2xCLFVBQVUsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDO1lBRTVELE9BQ0MvRSxLQUFBLENBQUFpQixhQUFBO2NBQUEsR0FBTzRDLFVBQVU7Y0FBRVcsSUFBSSxFQUFFQSxJQUFJO2NBQUVuQyxPQUFPLEVBQUVBLE9BQU87Y0FBRXFDLE1BQU0sRUFBRXRFLEtBQUssQ0FBQ3NFO1lBQU0sR0FDbkV0RSxLQUFLLENBQUNFLFFBQVEsQ0FDWjtVQUVOOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBZ0IsTUFBQSxHQUFBckIsT0FBQTtVQVNBLE1BQU0rRSxTQUFTLEdBQUdBLENBQUM1RSxLQUFpQixFQUFFZ0MsR0FBOEIsS0FBaUI7WUFDcEYsSUFBSTtjQUFFNkMsS0FBSztjQUFFNUQsU0FBUztjQUFFNkQsSUFBSTtjQUFFcEIsSUFBSTtjQUFFTztZQUFNLENBQUUsR0FBR2pFLEtBQUs7WUFDcEQ4RSxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUk7WUFDekIsTUFBTUMsS0FBSyxHQUFHLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQzFHLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUN2QixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFNBQVM7WUFFdkQsTUFBTXdCLEtBQUssR0FBd0IsRUFBRTtZQUNyQyxJQUFJTCxLQUFLLEVBQUVLLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixLQUFLO1lBQy9CNUQsU0FBUyxHQUFHLEdBQUcrRCxPQUFPLEdBQUcvRCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlYLEdBQUcsR0FBVyxHQUFHVyxTQUFTLEdBQUcsR0FBR0EsU0FBUyxHQUFHLEdBQUcsRUFBRSxxQ0FBcUM2RCxJQUFJLEVBQUU7WUFDaEcsSUFBSWIsTUFBTSxFQUFFM0QsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ1ksTUFBQSxDQUFBQyxPQUFBLENBQUFOLGFBQUE7Y0FBS0ksU0FBUyxFQUFFWCxHQUFHO2NBQUUwQixHQUFHLEVBQUVBO1lBQUcsR0FDNUJkLE1BQUEsQ0FBQUMsT0FBQSxDQUFBTixhQUFBO2NBQUt1RSxPQUFPLEVBQUM7WUFBYSxHQUN6QmxFLE1BQUEsQ0FBQUMsT0FBQSxDQUFBTixhQUFBO2NBQVF3RSxFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUMsSUFBSTtjQUFDTCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMxQyxDQUNEO1VBRVIsQ0FBQztVQUNNO1VBQ1AsTUFBTWxCLE9BQU8sR0FBa0QsSUFBQTlDLE1BQUEsQ0FBQVksVUFBVSxFQUFDOEMsU0FBUyxDQUFDO1VBQUN2RCxPQUFBLENBQUEyQyxPQUFBLEdBQUFBLE9BQUEifQ==