System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/spinner", "pragmate-ui@0.1.1/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_pragmateUi011Icons) {
      dependency_3 = _pragmateUi011Icons;
    }, function (_pragmateUi011Spinner) {
      dependency_4 = _pragmateUi011Spinner;
    }, function (_pragmateUi011Ripple) {
      dependency_5 = _pragmateUi011Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 3592527677,
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
        hash: 872288252,
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
        hash: 1458553199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _context = require("../button-group/context");
          var _useRipple = require("../use-ripple");
          const {
            forwardRef
          } = _react.default;
          /*bundle*/
          const Button = exports.Button = forwardRef((props, reference) => {
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
            const [, setProcessing] = _react.default.useState(fetching || loading);
            const ref = (0, _useRipple.useRipple)(title, reference);
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = async event => {
              try {
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
              } finally {
                setProcessing(false);
              }
            };
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
            cls += loading || fetching ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading || fetching ? 'button-label--loading' : ''}`;
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: loading || fetching || disabled,
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
        hash: 2774588843,
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
        hash: 1915531432,
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
            tag = 'span',
            as = 'span'
          }) {
            const Control = as || tag;
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
        hash: 3979789248,
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
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              !isExternal && _routing.routing.pushState(href);
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

      /****************************
      INTERNAL MODULE: ./use-ripple
      ****************************/

      ims.set('./use-ripple', {
        hash: 3650051192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRipple = useRipple;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          function useRipple(title, ref) {
            ref = ref ?? _react.default.useRef(null);
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(ref.current);
              if (title) {
                (0, _tippy.default)(ref.current);
              }
            }, [title]);
            return ref;
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0Iiwic2V0UHJvY2Vzc2luZyIsInJlZiIsInVzZVJpcHBsZSIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyIiwidGFnIiwiYXMiLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiX3JpcHBsZSIsIl90aXBweSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsImN1cnJlbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIvdHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwiL3R5cGUudHMiLCIvdHMvYnV0dG9uL2J1dHRvbi50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy9saW5rLnRzeCIsIi90cy9zcGlubmVyLnRzeCIsIi90cy91c2UtcmlwcGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFdBQVcsR0FBRyxLQUFLO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQXFCO1lBQ3BHLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBU0osS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDdEUsSUFBSUksR0FBRyxHQUFHLGtCQUFrQjtZQUM1QkEsR0FBRyxJQUFJUCxXQUFXLEdBQUcscUJBQXFCQSxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzVELElBQUlRLFFBQVEsR0FB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