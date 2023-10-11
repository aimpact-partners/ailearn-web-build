System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "pragmate-ui@0.0.37/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Spinner) {
      dependency_4 = _pragmateUi0037Spinner;
    }, function (_pragmateUi0037Ripple) {
      dependency_5 = _pragmateUi0037Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 2674380665,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpbmRleCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJ1dHRvbkdyb3VwQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9zcGlubmVyIiwiX3JpcHBsZSIsIl90aXBweSIsImZvcndhcmRSZWYiLCJCdXR0b24iLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImJsb2NrIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJ1c2luZ0NvbnRleHQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHNMb2FkaW5nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJSZWFjdCIsIl9yb3V0aW5nIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsIkNvbXBvbmVudCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIvdHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwiL3R5cGUudHMiLCIvdHMvYnV0dG9uL2J1dHRvbi50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xpbmsudHN4IiwiL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFdBQVcsR0FBRyxLQUFLO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDekYsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFTSixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUN0RSxJQUFJSSxHQUFHLEdBQUcsa0JBQWtCO1lBQzVCQSxHQUFHLElBQUlQLFdBQVcsR0FBRyxxQkFBcUJBLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFFNUQsTUFBTVEsaUJBQWlCLEdBQUdaLE1BQUEsQ0FBQVMsT0FBSyxDQUFDSSxRQUFRLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxFQUFFLENBQUNVLEtBQUssRUFBRUMsS0FBSyxLQUFJO2NBQ3ZFLElBQUloQixNQUFBLENBQUFTLE9BQUssQ0FBQ1EsY0FBYyxDQUFDRixLQUFLLENBQUMs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