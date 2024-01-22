System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/spinner", "pragmate-ui@0.0.3/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }, function (_pragmateUi003Spinner) {
      dependency_4 = _pragmateUi003Spinner;
    }, function (_pragmateUi003Ripple) {
      dependency_5 = _pragmateUi003Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 376241524,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ButtonGroup({
            orientation = 'row',
            children,
            ...props
          }) {
            const [selected, setSelected] = _react.default.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            let disabled = !!props.disabled;
            const childrenWithProps = _react.default.Children.map(children, (child, index) => {
              if (_react.default.isValidElement(child)) {
                return _react.default.cloneElement(child, {
                  index,
                  disabled
                }); // Passing the index as a prop
              }
            });

            return _react.default.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, _react.default.createElement("div", {
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
          const ButtonGroupContext = exports.ButtonGroupContext = _react.default.createContext({});
          const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
          exports.useButtonGroupContext = useButtonGroupContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 3905061056,
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
        hash: 1596821255,
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
          const Button = exports.Button = forwardRef((props, ref) => {
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
              sizing = 'md',
              disabled = false,
              ...otherProps
            } = props;
            const context = _react.default.useContext(_context.ButtonGroupContext);
            const [processing, setProcessing] = _react.default.useState(fetching || loading);
            const refObject = _react.default.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);
              //@ts-ignore
              else if (ref) ref.current = instance;
            };
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = async event => {
              if (usingContext) {
                context.setSelected(index);
              }
              if (onClick && typeof onClick === 'function') {
                setProcessing(true);
                //@ts-ignore
                await onClick(event);
                setProcessing(false);
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
            let cls = `pui-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            cls += block ? ' btn--block' : '';
            cls += sizing ? ` btn--${sizing}` : '';
            cls += loading || fetching || processing ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading || processing ? 'button-label--loading' : ''}`;
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            console.log(12, variant, cls, children, label);
            return _react.default.createElement("button", {
              ref: combinedRef,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled || processing,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), label || children && _react.default.createElement("div", {
              className: clsLoading
            }, label || children), (loading || fetching || processing) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./button/interface
      **********************************/

      ims.set('./button/interface', {
        hash: 2902663847,
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
        hash: 1920375694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var _react = require("react");
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
            return _react.default.createElement("a", {
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
          const Spinner = exports.Spinner = (0, _react.forwardRef)(Component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiX3RpcHB5IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9saW5rLnRzeCIsIi90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsS0FBSztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFVO1lBQ3pGLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBU0osS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDdEUsSUFBSUksR0FBRyxHQUFHLGtCQUFrQjtZQUM1QkEsR0FBRyxJQUFJUCxXQUFXLEdBQUcscUJBQXFCQSxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzVELElBQUlRLFFBQVEsR0FBRyxDQUFDLENBQUNOLEtBQUssQ0FBQ00sUUFBUTtZQUMvQixNQUFNQyxpQkFBaUIsR0FBR2IsTUFBQSxDQUFBUyxPQUFLLENBQUNLLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDVixRQUFRLEVBQUUsQ0FBQ1csS0FBSyxFQUFFQyxLQUFLLEtBQUk7Y0FDdkUsSUFBSWpCLE1BQUEsQ0FBQVMsT0FBSyxDQUFDUyxjQUFjLENBQUNGLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxPQUFPaEIsTUFBQSxDQUFBUyxPQUFLLENBQUNVLFlBQVksQ0FBQ0gsS0FBSyxFQUFFO2tCQUFFQyxLQUFLO2tCQUFFTDtnQkFBUSxDQUFZLENBQUMsQ0FBQyxDQUFDOztZQUVuRSxDQUFDLENBQUM7O1lBRUYsT0FDQ1osTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUEsQ0FBQ2xCLFFBQUEsQ0FBQW1CLGtCQUFrQixDQUFDQyxRQUFRO2NBQUNDLEtBQUssRUFBRTtnQkFBRWhCLFFBQVE7Z0JBQUVDO2NBQVc7WUFBRSxHQUM1RFIsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUE7Y0FBS0ksU0FBUyxFQUFFYjtZQUFHLEdBQUdFLGlCQUFpQixDQUFPLENBQ2pCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBYixNQUFBLEdBQUFDLE9BQUE7VUFPTyxNQUFNb0Isa0JBQWtCLEdBQUFJLE9BQUEsQ0FBQUosa0JBQUEsR0FBR3JCLE1BQUEsQ0FBQVMsT0FBSyxDQUFDaUIsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFDekUsTUFBTUMscUJBQXFCLEdBQUdBLENBQUEsS0FBTTNCLE1BQUEsQ0FBQVMsT0FBSyxDQUFDbUIsVUFBVSxDQUFDUCxrQkFBa0IsQ0FBQztVQUFDSSxPQUFBLENBQUFFLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7OztVQ1JoRjs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFMLE9BQUE7WUFDQUYsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUF2QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEIsTUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixRQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWdDLE9BQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsTUFBQSxHQUFBakMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLE1BQU07WUFBRWtDO1VBQVUsQ0FBRSxHQUFHbkMsTUFBQSxDQUFBUyxPQUFLO1VBRXJCO1VBQVcsTUFBTTJCLE1BQU0sR0FBQVgsT0FBQSxDQUFBVyxNQUFBLEdBQUdELFVBQVUsQ0FBNEIsQ0FBQzdCLEtBQUssRUFBRStCLEdBQXFCLEtBQUk7WUFDdkcsTUFBTTtjQUNMYixTQUFTO2NBQ1RjLE9BQU87Y0FDUEMsSUFBSTtjQUNKQyxLQUFLO2NBQ0xDLEtBQUs7Y0FDTHBDLFFBQVE7Y0FDUnFDLElBQUk7Y0FDSkMsT0FBTztjQUNQQyxLQUFLO2NBQ0wzQixLQUFLO2NBQ0w0QixRQUFRLEdBQUcsS0FBSztjQUNoQkMsT0FBTyxHQUFHLFNBQVM7Y0FDbkJDLFFBQVEsR0FBRyxLQUFLO2NBQ2hCQyxNQUFNLEdBQUcsSUFBSTtjQUNicEMsUUFBUSxHQUFHLEtBQUs7Y0FFaEIsR0FBR3FDO1lBQVUsQ0FDYixHQUFHM0MsS0FBSztZQUVULE1BQU00QyxPQUFPLEdBQUdsRCxNQUFBLENBQUFTLE9BQUssQ0FBQ21CLFVBQVUsQ0FBQzFCLFFBQUEsQ0FBQW1CLGtCQUFrQixDQUFDO1lBRXBELE1BQU0sQ0FBQzhCLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdwRCxNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFDbUMsUUFBUSxJQUFJRixPQUFPLENBQUM7WUFDdkUsTUFBTVUsU0FBUyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQW9CLElBQUksQ0FBQztZQUN2RCxNQUFNQyxXQUFXLEdBQUlDLFFBQTJCLElBQUk7Y0FDbkRILFNBQVMsQ0FBQ0ksT0FBTyxHQUFHRCxRQUFRO2NBQzVCLElBQUksT0FBT25CLEdBQUcsS0FBSyxVQUFVLEVBQUVBLEdBQUcsQ0FBQ21CLFFBQVEsQ0FBQztjQUM1QztjQUFBLEtBQ0ssSUFBSW5CLEdBQUcsRUFBRUEsR0FBRyxDQUFDb0IsT0FBTyxHQUFHRCxRQUFRO1lBQ3JDLENBQUM7WUFDRCxNQUFNRSxZQUFZLEdBQUcsT0FBT1IsT0FBTyxFQUFFMUMsV0FBVyxLQUFLLFVBQVU7WUFDL0QsTUFBTW1ELGFBQWEsR0FBRyxNQUFPQyxLQUEwQyxJQUFtQjtjQUN6RixJQUFJRixZQUFZLEVBQUU7Z0JBQ2pCUixPQUFPLENBQUMxQyxXQUFXLENBQUNTLEtBQUssQ0FBQzs7Y0FFM0IsSUFBSXFCLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUM3Q2MsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDbkI7Z0JBQ0EsTUFBTWQsT0FBTyxDQUFDc0IsS0FBSyxDQUFDO2dCQUNwQlIsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDcEI7O1lBRUYsQ0FBQztZQUVEcEQsTUFBQSxDQUFBUyxPQUFLLENBQUNvRCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUcsSUFBSTdCLE9BQUEsQ0FBQThCLFlBQVksRUFBRTtjQUNqQ0QsTUFBTSxDQUFDRSxlQUFlLENBQUNYLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDO2NBRXpDLElBQUloQixLQUFLLEVBQUU7Z0JBQ1YsSUFBQVAsTUFBQSxDQUFBekIsT0FBSyxFQUFDNEMsU0FBUyxDQUFDSSxPQUFPLENBQUM7O1lBRTFCLENBQUMsRUFBRSxDQUFDaEIsS0FBSyxDQUFDLENBQUM7WUFFWCxNQUFNd0IsVUFBVSxHQUFXO2NBQzFCLEdBQUdoQixVQUFVO2NBQ2JpQixJQUFJLEVBQUU1RCxLQUFLLENBQUM0RCxJQUFJLEdBQUc1RCxLQUFLLENBQUM0RCxJQUFJLEdBQUc7YUFDaEM7WUFDRCxJQUFJekIsS0FBSyxFQUFFd0IsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEdBQUd4QixLQUFLO1lBQ25ELElBQUlGLElBQUksRUFBRTtjQUNUVixNQUFNLENBQUNzQyxJQUFJLENBQUM1QixJQUFJLENBQUMsQ0FBQzZCLE9BQU8sQ0FBRUMsS0FBYSxJQUFJO2dCQUMzQ0osVUFBVSxDQUFDLFFBQVFJLEtBQUssRUFBRSxDQUFDLEdBQUc5QixJQUFJLENBQUM4QixLQUFLLENBQUM7Y0FDMUMsQ0FBQyxDQUFDOztZQUdILElBQUkxRCxHQUFHLEdBQUcsa0JBQWtCbUMsT0FBTyxFQUFFO1lBQ3JDbkMsR0FBRyxJQUFJYSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUN2Q2IsR0FBRyxJQUFJb0MsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO1lBQ2pDcEMsR0FBRyxJQUFJK0IsSUFBSSxHQUFHLFdBQVcsR0FBRyxFQUFFO1lBQzlCL0IsR0FBRyxJQUFJaUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxFQUFFO1lBQ2pDakMsR0FBRyxJQUFJcUMsTUFBTSxHQUFHLFNBQVNBLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDdENyQyxHQUFHLElBQUlnQyxPQUFPLElBQUlFLFFBQVEsSUFBSU0sVUFBVSxHQUFHLGVBQWUsR0FBRyxFQUFFO1lBQy9ELE1BQU1tQixVQUFVLEdBQUcsZ0JBQWdCM0IsT0FBTyxJQUFJUSxVQUFVLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxFQUFFO1lBRXpGLElBQUlPLFlBQVksSUFBSVIsT0FBTyxDQUFDM0MsUUFBUSxLQUFLVSxLQUFLLEVBQUVOLEdBQUcsSUFBSSxrQkFBa0I7WUFDekUsSUFBSStDLFlBQVksRUFBRU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHaEQsS0FBSztZQUNsRHNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRTFCLE9BQU8sRUFBRW5DLEdBQUcsRUFBRU4sUUFBUSxFQUFFbUMsS0FBSyxDQUFDO1lBQzlDLE9BQ0N4QyxNQUFBLENBQUFTLE9BQUEsQ0FBQVcsYUFBQTtjQUNDaUIsR0FBRyxFQUFFa0IsV0FBVztjQUNoQi9CLFNBQVMsRUFBRWIsR0FBRztjQUNkMkIsT0FBTyxFQUFFcUIsYUFBYTtjQUN0Qi9DLFFBQVEsRUFBRStCLE9BQU8sSUFBSS9CLFFBQVEsSUFBSXVDLFVBQVU7Y0FBQSxHQUN2Q2M7WUFBVSxHQUVidkIsSUFBSSxJQUFJMUMsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUEsQ0FBQ1csTUFBQSxDQUFBMEMsSUFBSTtjQUFDL0IsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDNUJGLEtBQUssSUFBS25DLFFBQVEsSUFBSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUE7Y0FBS0ksU0FBUyxFQUFFOEM7WUFBVSxHQUFHOUIsS0FBSyxJQUFJbkMsUUFBUSxDQUFRLEVBRTVFLENBQUNzQyxPQUFPLElBQUlFLFFBQVEsSUFBSU0sVUFBVSxLQUFLbkQsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUEsQ0FBQ1ksUUFBQSxDQUFBMEMsT0FBTztjQUFDUixJQUFJLEVBQUUsTUFBTXBCLE9BQU8sRUFBRTtjQUFFNkIsTUFBTSxFQUFFO1lBQUksRUFBSSxDQUNoRjtVQUVYLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7VUNyR0Y7O1VBRUE5QyxNQUFBLENBQUFDLGNBQUEsQ0FBQUwsT0FBQTtZQUNBRixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXZCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU87VUFBVSxTQUNSNEUsSUFBSUEsQ0FBQztZQUFDQyxJQUFJO1lBQUUsR0FBR3hFO1VBQUssQ0FBZ0Q7WUFDNUUsTUFBTXlFLFVBQVUsR0FBR3pFLEtBQUssQ0FBQzBFLE1BQU0sS0FBSyxRQUFRO1lBRTVDLE1BQU0xQyxPQUFPLEdBQUcsTUFBT3NCLEtBQTBDLElBQW1CO2NBQ25GLElBQUltQixVQUFVLEVBQUU7Y0FFaEJuQixLQUFLLENBQUNxQixjQUFjLEVBQUU7Y0FDdEJyQixLQUFLLENBQUNzQixlQUFlLEVBQUU7Y0FFdkIsSUFBSTVFLEtBQUssQ0FBQ2dDLE9BQU8sSUFBSSxPQUFPaEMsS0FBSyxDQUFDZ0MsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDekQsTUFBTWhDLEtBQUssQ0FBQ2dDLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQzs7Y0FFM0IsSUFBSWtCLElBQUksRUFBRUYsUUFBQSxDQUFBTyxPQUFPLENBQUNDLFNBQVMsQ0FBQ04sSUFBSSxDQUFDO1lBQ2xDLENBQUM7WUFFRCxNQUFNYixVQUFVLEdBQUc7Y0FBQyxHQUFHM0Q7WUFBSyxDQUFDO1lBQzdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDOEQsT0FBTyxDQUFDaUIsSUFBSSxJQUFJLE9BQU9wQixVQUFVLENBQUNvQixJQUFJLENBQUMsQ0FBQztZQUU1RCxPQUNDckYsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUE7Y0FBQSxHQUFPNkMsVUFBVTtjQUFFYSxJQUFJLEVBQUVBLElBQUk7Y0FBRXhDLE9BQU8sRUFBRUEsT0FBTztjQUFFMEMsTUFBTSxFQUFFMUUsS0FBSyxDQUFDMEU7WUFBTSxHQUNuRTFFLEtBQUssQ0FBQ0QsUUFBUSxDQUNaO1VBRU47Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVNBLE1BQU1xRixTQUFTLEdBQUdBLENBQUNoRixLQUFpQixFQUFFK0IsR0FBOEIsS0FBaUI7WUFDcEYsSUFBSTtjQUFFa0QsS0FBSztjQUFFL0QsU0FBUztjQUFFZ0UsSUFBSTtjQUFFdEIsSUFBSTtjQUFFUztZQUFNLENBQUUsR0FBR3JFLEtBQUs7WUFDcERrRixJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUk7WUFDekIsTUFBTUMsS0FBSyxHQUFHLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQzFHLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUN6QixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFNBQVM7WUFFdkQsTUFBTTBCLEtBQUssR0FBd0IsRUFBRTtZQUNyQyxJQUFJTCxLQUFLLEVBQUVLLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixLQUFLO1lBQy9CL0QsU0FBUyxHQUFHLEdBQUdrRSxPQUFPLEdBQUdsRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUliLEdBQUcsR0FBVyxHQUFHYSxTQUFTLEdBQUcsR0FBR0EsU0FBUyxHQUFHLEdBQUcsRUFBRSxxQ0FBcUNnRSxJQUFJLEVBQUU7WUFDaEcsSUFBSWIsTUFBTSxFQUFFaEUsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ1gsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUE7Y0FBS0ksU0FBUyxFQUFFYixHQUFHO2NBQUUwQixHQUFHLEVBQUVBO1lBQUcsR0FDNUJyQyxNQUFBLENBQUFTLE9BQUEsQ0FBQVcsYUFBQTtjQUFLMEUsT0FBTyxFQUFDO1lBQWEsR0FDekI5RixNQUFBLENBQUFTLE9BQUEsQ0FBQVcsYUFBQTtjQUFRMkUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUM7VUFDTTtVQUNQLE1BQU1sQixPQUFPLEdBQUFqRCxPQUFBLENBQUFpRCxPQUFBLEdBQWtELElBQUExRSxNQUFBLENBQUFtQyxVQUFVLEVBQUNtRCxTQUFTLENBQUMifQ==