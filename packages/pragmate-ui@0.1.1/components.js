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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.1.3"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.2.79"], ["@types/react-dom", "18.2.25"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.52"]]);
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