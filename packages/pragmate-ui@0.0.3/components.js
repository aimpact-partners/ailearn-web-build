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
        hash: 2194678240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiX3RpcHB5IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9yb3V0aW5nIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsIkNvbXBvbmVudCIsImNvbG9yIiwic2l6ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIvdHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwiL3R5cGUudHMiLCIvdHMvYnV0dG9uL2J1dHRvbi50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xpbmsudHN4IiwiL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFdBQVcsR0FBRyxLQUFLO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDekYsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFTSixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUN0RSxJQUFJSSxHQUFHLEdBQUcsa0JBQWtCO1lBQzVCQSxHQUFHLElBQUlQLFdBQVcsR0FBRyxxQkFBcUJBLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDNUQsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQ04sS0FBSyxDQUFDTSxRQUFRO1lBQy9CLE1BQU1DLGlCQUFpQixHQUFHYixNQUFBLENBQUFTLE9BQUssQ0FBQ0ssUUFBUSxDQUFDQyxHQUFHLENBQUNWLFFBQVEsRUFBRSxDQUFD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