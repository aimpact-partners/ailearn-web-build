System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.6/base", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/spinner", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/ripple"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, IButtonProps, ConditionalContainer, useMediaQuery, HtmlWrapper, Link, ResponsiveContainer, Spinner, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi106Base) {
      dependency_3 = _pragmateUi106Base;
    }, function (_pragmateUi106Icons) {
      dependency_4 = _pragmateUi106Icons;
    }, function (_pragmateUi106Spinner) {
      dependency_5 = _pragmateUi106Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi106Ripple) {
      dependency_7 = _pragmateUi106Ripple;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.6"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.6/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.6/components');
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
        hash: 4236114006,
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
            // Usar useTooltip para el tooltip
            const {
              tooltipJSX
            } = (0, _useRipple.useTooltip)(title, localRef);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
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
            })), tooltipJSX);
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
        hash: 2760836370,
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
        hash: 2195799580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRipple = useRipple;
          exports.useTooltip = useTooltip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          function useRipple(title, ref) {
            ref = ref ?? _react.default.useRef(null);
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(ref.current);
            }, [title]);
            return ref;
          }
          // Hook separado para el tooltip que retorna el JSX del tooltip
          function useTooltip(title, ref) {
            const [isVisible, setIsVisible] = _react.default.useState(false);
            const [placement, setPlacement] = _react.default.useState('top');
            _react.default.useEffect(() => {
              if (!title || !ref?.current) return;
              const element = ref.current;
              // Leer el atributo data-placement del elemento
              const dataPlacement = element.getAttribute('data-placement');
              if (dataPlacement) {
                setPlacement(dataPlacement);
              }
              const handleMouseEnter = () => {
                setIsVisible(true);
              };
              const handleMouseLeave = () => {
                setIsVisible(false);
              };
              element.addEventListener('mouseenter', handleMouseEnter);
              element.addEventListener('mouseleave', handleMouseLeave);
              return () => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
              };
            }, [title, ref]);
            // Función para calcular la posición del tooltip basada en el placement
            const getTooltipPosition = placement => {
              switch (placement) {
                case 'top':
                  return {
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    arrowTop: '100%',
                    arrowLeft: '50%',
                    arrowTransform: 'translateX(-50%)',
                    arrowBorder: '4px solid transparent',
                    arrowBorderTop: '4px solid #222'
                  };
                case 'bottom':
                  return {
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '8px',
                    arrowTop: '-8px',
                    arrowLeft: '50%',
                    arrowTransform: 'translateX(-50%)',
                    arrowBorder: '4px solid transparent',
                    arrowBorderBottom: '4px solid #222'
                  };
                case 'left':
                  return {
                    top: '50%',
                    left: '-100%',
                    transform: 'translateY(-50%)',
                    marginRight: '8px',
                    arrowTop: '50%',
                    arrowLeft: '100%',
                    arrowTransform: 'translateY(-50%)',
                    arrowBorder: '4px solid transparent',
                    arrowBorderLeft: '4px solid #222'
                  };
                case 'right':
                  return {
                    top: '50%',
                    left: '100%',
                    transform: 'translateY(-50%)',
                    marginLeft: '8px',
                    arrowTop: '50%',
                    arrowLeft: '-8px',
                    arrowTransform: 'translateY(-50%)',
                    arrowBorder: '4px solid transparent',
                    arrowBorderRight: '4px solid #222'
                  };
                default:
                  return {
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    arrowTop: '100%',
                    arrowLeft: '50%',
                    arrowTransform: 'translateX(-50%)',
                    arrowBorder: '4px solid transparent',
                    arrowBorderTop: '4px solid #222'
                  };
              }
            };
            const position = getTooltipPosition(placement);
            const tooltipJSX = isVisible ? _react.default.createElement("div", {
              className: "floating-ui-tooltip",
              style: {
                position: 'absolute',
                ...position,
                zIndex: 9999
              }
            }, title, _react.default.createElement("div", {
              className: "floating-ui-arrow",
              style: {
                position: 'absolute',
                top: position.arrowTop,
                left: position.arrowLeft,
                transform: position.arrowTransform,
                width: 0,
                height: 0,
                border: position.arrowBorder,
                ...(position.arrowBorderTop && {
                  borderTop: position.arrowBorderTop
                }),
                ...(position.arrowBorderBottom && {
                  borderBottom: position.arrowBorderBottom
                }),
                ...(position.arrowBorderLeft && {
                  borderLeft: position.arrowBorderLeft
                }),
                ...(position.arrowBorderRight && {
                  borderRight: position.arrowBorderRight
                })
              }
            })) : null;
            return {
              tooltipJSX,
              isVisible,
              placement
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwidXNlRWZmZWN0IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwibG9jYWxSZWYiLCJ1c2VSZWYiLCJyZWYiLCJ1c2VSaXBwbGUiLCJ0b29sdGlwSlNYIiwidXNlVG9vbHRpcCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjdXJyZW50IiwidXNpbmdDb250ZXh0Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkZyYWdtZW50IiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInRlcm5hcnkiLCJldmFsdWF0ZWRWYWx1ZSIsIkNvbXBvbmVudCIsInRydWUiLCJmYWxzZSIsInVzZU1lZGlhUXVlcnkiLCJzaXplIiwic2V0U2l6ZSIsImNhbGN1bGF0ZVNpemUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJuZXdTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIdG1sV3JhcHBlciIsInBhcmFtcyIsInRhZyIsImFzIiwiQ29udHJvbCIsImtleSIsInJlcGxhY2UiLCJSZWdFeHAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9yb3V0aW5nIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXN1bHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsIl91c2VNZWRpYVF1ZXJ5IiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsInNpemVzIiwiZ2V0Q29tcG9uZW50IiwiY3VycmVudFNpemUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwiaSIsImxlbmd0aCIsImNvbXBvbmVudCIsInVuZGVmaW5lZCIsImNvbG9yIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsIl9yaXBwbGUiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJwbGFjZW1lbnQiLCJzZXRQbGFjZW1lbnQiLCJlbGVtZW50IiwiZGF0YVBsYWNlbWVudCIsImdldEF0dHJpYnV0ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZ2V0VG9vbHRpcFBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImFycm93VG9wIiwiYXJyb3dMZWZ0IiwiYXJyb3dUcmFuc2Zvcm0iLCJhcnJvd0JvcmRlciIsImFycm93Qm9yZGVyVG9wIiwibWFyZ2luVG9wIiwiYXJyb3dCb3JkZXJCb3R0b20iLCJtYXJnaW5SaWdodCIsImFycm93Qm9yZGVyTGVmdCIsIm1hcmdpbkxlZnQiLCJhcnJvd0JvcmRlclJpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiXSwic291cmNlcyI6WyIvL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiLy90cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCIvL3R5cGUudHMvIiwiLy90cy9idXR0b24vYnV0dG9uLnRzeCIsIi8vaW50ZXJmYWNlLnRzLyIsIi8vdHMvY29uZGl0aW9uYWwtY29udGFpbmVyLnRzeCIsIi8vdHMvaG9va3MvdXNlLW1lZGlhLXF1ZXJ5LnRzIiwiLy90cy9odG1sLXdyYXBwZXIudHN4IiwiLy90cy9saW5rLnRzeCIsIi8vdHMvcmVzcG9uc2l2ZS1jb250YWluZXIudHN4IiwiLy90cy9zcGlubmVyLnRzeCIsIi8vdHMvdXNlLXJpcHBsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLFdBQVdBLENBQUM7WUFDdENDLFdBQVcsR0FBRyxLQUFLO1lBQ25CQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUixHQUFHQztVQUFLLENBQ1c7WUFDbkIsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcs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