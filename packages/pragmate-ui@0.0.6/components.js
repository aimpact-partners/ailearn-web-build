System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/spinner", "pragmate-ui@0.0.6/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, HtmlWrapper, Link, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    HtmlWrapper: void 0,
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
    }, function (_pragmateUi006Icons) {
      dependency_3 = _pragmateUi006Icons;
    }, function (_pragmateUi006Spinner) {
      dependency_4 = _pragmateUi006Spinner;
    }, function (_pragmateUi006Ripple) {
      dependency_5 = _pragmateUi006Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/components');
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
        hash: 3462486768,
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
              variant = 'default',
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
        hash: 187373585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./html-render
      *****************************/

      ims.set('./html-render', {
        hash: 1778164068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlWrapper = HtmlWrapper;
          var _react = require("react");
          /*bundle*/
          function HtmlWrapper({
            children,
            tag = 'span'
          }) {
            const Control = tag;
            return _react.default.createElement(Control, {
              dangerouslySetInnerHTML: {
                __html: children
              }
            });
          }
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
        "im": "./html-render",
        "from": "HtmlWrapper",
        "name": "HtmlWrapper"
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
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-render').HtmlWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiX3RpcHB5IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiQ29tcG9uZW50IiwiY29sb3IiLCJzaXplIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsIi90cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCIvdHlwZS50cyIsIi90cy9idXR0b24vYnV0dG9uLnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFdBQVcsR0FBRyxLQUFLO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDekYsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFTSixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUN0RSxJQUFJSSxHQUFHLEdBQUcsa0JBQWtCO1lBQzVCQSxHQUFHLElBQUlQLFdBQVcsR0FBRyxxQkFBcUJBLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDNUQsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQ04sS0FBSyxD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