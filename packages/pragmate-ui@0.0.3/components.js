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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.16"]]);
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
        hash: 2837335201,
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
            const childrenWithProps = _react.default.Children.map(children, (child, index) => {
              if (_react.default.isValidElement(child)) {
                return _react.default.cloneElement(child, {
                  index
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
        hash: 2389271503,
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
            let cls = `pui-button btn-${variant}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpbmRleCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUJ1dHRvbkdyb3VwQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9zcGlubmVyIiwiX3JpcHBsZSIsIl90aXBweSIsImZvcndhcmRSZWYiLCJCdXR0b24iLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImJsb2NrIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJ1c2luZ0NvbnRleHQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHNMb2FkaW5nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9saW5rLnRzeCIsIi90cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFDQyxXQUFXLEdBQUcsS0FBSztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFTO1lBQ3ZGLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBU0osS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDdEUsSUFBSUksR0FBRyxHQUFHLGtCQUFrQjtZQUM1QkEsR0FBRyxJQUFJUCxXQUFXLEdBQUcscUJBQXFCQSxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBRTVELE1BQU1RLGlCQUFpQixHQUFHWixNQUFBLENBQUFTLE9BQUssQ0FBQ0ksUUFBUSxDQUFDQyxHQUFHLENBQUNULFFBQVEsRUFBRSxDQUFDVSxLQUFLLEVBQUVDLEtBQUssS0FBSTtjQUN2RSxJQUFJaEIsTUFBQSxDQUFBUyxPQUFLLENBQUNRLGNBQWMsQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7Z0JB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