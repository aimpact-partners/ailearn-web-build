System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/spinner", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, IButtonProps, ConditionalContainer, useMediaQuery, HtmlWrapper, Link, ResponsiveContainer, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    IButtonProps: void 0,
    ConditionalContainer: void 0,
    useMediaQuery: void 0,
    HtmlWrapper: void 0,
    Link: void 0,
    ResponsiveContainer: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Base) {
      dependency_3 = _pragmateUi108Base;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
    }, function (_pragmateUi108Spinner) {
      dependency_5 = _pragmateUi108Spinner;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Ripple) {
      dependency_7 = _pragmateUi108Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 686490675,
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
            _react.default.useEffect(() => {
              setSelected(props.selected);
            }, [props.selected]);
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
        hash: 918611175,
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
            // Crear una ref local
            const localRef = _react.default.useRef(null);
            // Usar useRipple solo para el efecto de ripple
            const ref = (0, _useRipple.useRipple)('', localRef);
            // Conectar la ref externa si existe
            _react.default.useImperativeHandle(reference, () => localRef.current, []);
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
            const spinnerVariant = bordered ? variant : `on-${variant}`;
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
              type: spinnerVariant,
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
      INTERNAL MODULE: ./conditional-container
      ***************************************/

      ims.set('./conditional-container', {
        hash: 1749837270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConditionalContainer = ConditionalContainer;
          /*bundle*/
          function ConditionalContainer({
            condition,
            options,
            placeholder,
            ternary
          }) {
            const evaluatedValue = typeof condition === 'function' ? condition() : condition;
            let Component;
            if (ternary && typeof evaluatedValue === 'boolean') {
              Component = evaluatedValue ? options.true : options.false;
            } else {
              Component = options[evaluatedValue] || placeholder;
            }
            return Component ? Component : null;
          }
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
        hash: 1413814841,
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
                const result = props.onClick(event);
                if (result === false) return;
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
        "im": "./conditional-container",
        "from": "ConditionalContainer",
        "name": "ConditionalContainer"
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
        (require || prop === 'ConditionalContainer') && _export("ConditionalContainer", ConditionalContainer = require ? require('./conditional-container').ConditionalContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwidXNlRWZmZWN0IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwibG9jYWxSZWYiLCJ1c2VSZWYiLCJyZWYiLCJ1c2VSaXBwbGUiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJzcGlubmVyVmFyaWFudCIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJ0ZXJuYXJ5IiwiZXZhbHVhdGVkVmFsdWUiLCJDb21wb25lbnQiLCJ0cnVlIiwiZmFsc2UiLCJ1c2VNZWRpYVF1ZXJ5Iiwic2l6ZSIsInNldFNpemUiLCJjYWxjdWxhdGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJ0YWciLCJhcyIsIkNvbnRyb2wiLCJrZXkiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVzdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJfdXNlTWVkaWFRdWVyeSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJzaXplcyIsImdldENvbXBvbmVudCIsImN1cnJlbnRTaXplIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsImkiLCJsZW5ndGgiLCJjb21wb25lbnQiLCJ1bmRlZmluZWQiLCJjb2xvciIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJfcmlwcGxlIiwiX3RpcHB5IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0Il0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9jb25kaXRpb25hbC1jb250YWluZXIudHN4IiwiL3RzL2hvb2tzL3VzZS1tZWRpYS1xdWVyeS50cyIsIi90cy9odG1sLXdyYXBwZXIudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL3Jlc3BvbnNpdmUtY29udGFpbmVyLnRzeCIsIi90cy9zcGlubmVyLnRzeCIsIi90cy91c2UtcmlwcGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQ3RDQyxXQUFXLEdBQUcsS0FBSztZQUNuQkMsUUFBUTtZQUNSQyxRQUFRO1lBQ1IsR0FBR0M7VUFBSyxDQUNXO1lBQ25CLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBU0osS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDdEUsSUFBSUksR0FBRyxHQUFHLGtCQUFrQjtZQUM1QkEsR0FBRyxJQUFJUixXQUFXLEdBQUcscUJBQXFCQSxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzVELElBQUlTLFFBQVEsR0FBRyxDQUFDLENBQUNOLEtBQUssQ0FBQ00sUUFBUTtZQUUvQmIsTUFBQSxDQUFBVSxPQUFLLENBQUNJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCTCxXQUFXLENBQUNGLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQzVCLENBQUMsRUFBRSxDQUFDRCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBRXBCLE1BQU1PLGlCQUFpQixHQUFHZixNQUFBLENBQUFVLE9BQUssQ0FBQ00sUUFBUSxDQUFDQyxHQUFHLENBQUNaLFFBQVEsRUFBRSxDQUFDYSxLQUFLLEVBQUVDLEtBQUssS0FBSTtjQUN2RSxJQUFJbkIsTUFBQSxDQUFBVSxP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