System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/spinner", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, IButtonProps, useMediaQuery, HtmlWrapper, Link, ResponsiveContainer, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    IButtonProps: void 0,
    useMediaQuery: void 0,
    HtmlWrapper: void 0,
    Link: void 0,
    ResponsiveContainer: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta6Base) {
      dependency_3 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_4 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Spinner) {
      dependency_5 = _pragmateUi100Beta6Spinner;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Ripple) {
      dependency_7 = _pragmateUi100Beta6Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.6/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 3092106105,
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
            onChange,
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
                  disabled,
                  onClick: onChange
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
        hash: 3900894228,
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
        hash: 28591129,
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
        hash: 694968353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-media-query
      ***************************************/

      ims.set('./hooks/use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./html-wrapper
      ******************************/

      ims.set('./html-wrapper', {
        hash: 4059971987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlWrapper = HtmlWrapper;
          var _react = require("react");
          /*bundle*/
          function HtmlWrapper({
            className,
            children,
            params = {},
            tag = 'span',
            as = 'span'
          }) {
            const Control = as || tag;
            const keys = Object.keys(params);
            keys.forEach(key => {
              const value = params[key];
              children = children.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            });
            return _react.default.createElement(Control, {
              className: className,
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

      /**************************************
      INTERNAL MODULE: ./responsive-container
      **************************************/

      ims.set('./responsive-container', {
        hash: 285431686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponsiveContainer = ResponsiveContainer;
          var _react = require("react");
          var _useMediaQuery = require("./hooks/use-media-query");
          /*bundle*/
          function ResponsiveContainer(props) {
            const size = (0, _useMediaQuery.useMediaQuery)();
            // Ordered sizes, from smallest to largest.
            const sizes = ['xs', 'sm', 'md', 'lg'];
            // Function to find the first available component for the current or larger screen size.
            const getComponent = currentSize => {
              const currentIndex = sizes.indexOf(currentSize);
              for (let i = currentIndex; i < sizes.length; i++) {
                const component = props[sizes[i]];
                if (component !== undefined && component !== null) {
                  return component;
                }
              }
              return null;
            };
            const Component = getComponent(size);
            // Return null if no matching component is found.
            if (!Component) {
              return null;
            }
            // Render the component matching the current or closest screen size.
            return _react.default.createElement(Component, null);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./spinner
      *************************/

      ims.set('./spinner', {
        hash: 3026278285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          ;
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
        hash: 3800109915,
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
        "im": "./button/interface",
        "from": "IButtonProps",
        "name": "IButtonProps"
      }, {
        "im": "./hooks/use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./html-wrapper",
        "from": "HtmlWrapper",
        "name": "HtmlWrapper"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./responsive-container",
        "from": "ResponsiveContainer",
        "name": "ResponsiveContainer"
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
        (require || prop === 'IButtonProps') && _export("IButtonProps", IButtonProps = require ? require('./button/interface').IButtonProps : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./hooks/use-media-query').useMediaQuery : value);
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-wrapper').HtmlWrapper : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'ResponsiveContainer') && _export("ResponsiveContainer", ResponsiveContainer = require ? require('./responsive-container').ResponsiveContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwicmVmIiwidXNlUmlwcGxlIiwidXNpbmdDb250ZXh0Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwiY2FsY3VsYXRlU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIm5ld1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkh0bWxXcmFwcGVyIiwicGFyYW1zIiwidGFnIiwiYXMiLCJDb250cm9sIiwia2V5IiwicmVwbGFjZSIsIlJlZ0V4cCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiX3VzZU1lZGlhUXVlcnkiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwic2l6ZXMiLCJnZXRDb21wb25lbnQiLCJjdXJyZW50U2l6ZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJpIiwibGVuZ3RoIiwiY29tcG9uZW50IiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwiY29sb3IiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiX3JpcHBsZSIsIl90aXBweSIsInVzZVJlZiIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsImN1cnJlbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIvdHMvYnV0dG9uLWdyb3VwL2NvbnRleHQudHN4IiwiL3R5cGUudHMiLCIvdHMvYnV0dG9uL2J1dHRvbi50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2hvb2tzL3VzZS1tZWRpYS1xdWVyeS50cyIsIi90cy9odG1sLXdyYXBwZXIudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL3Jlc3BvbnNpdmUtY29udGFpbmVyLnRzeCIsIi90cy9zcGlubmVyLnRzeCIsIi90cy91c2UtcmlwcGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7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