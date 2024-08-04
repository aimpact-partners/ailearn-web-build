System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/base", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/spinner", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, HtmlWrapper, Link, Spinner, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta1Base) {
      dependency_3 = _pragmateUi100Beta1Base;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_4 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Spinner) {
      dependency_5 = _pragmateUi100Beta1Spinner;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Ripple) {
      dependency_7 = _pragmateUi100Beta1Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/components');
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
        hash: 2774588843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./html-wrapper
      ******************************/

      ims.set('./html-wrapper', {
        hash: 3493652725,
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
              children = children.replace(`{${key}}`, value);
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
        "im": "./html-wrapper",
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
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-wrapper').HtmlWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0Iiwic2V0UHJvY2Vzc2luZyIsInJlZiIsInVzZVJpcHBsZSIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyIiwicGFyYW1zIiwidGFnIiwiYXMiLCJDb250cm9sIiwia2V5IiwicmVwbGFjZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiQ29tcG9uZW50IiwiY29sb3IiLCJzaXplIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsIl9yaXBwbGUiLCJfdGlwcHkiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50Il0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9odG1sLXdyYXBwZXIudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL3NwaW5uZXIudHN4IiwiL3RzL3VzZS1yaXBwbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsS0FBSztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFxQjtZQUNwRyxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdSLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQVNKLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQ3RFLElBQUlJLEdBQUcsR0FBRyxrQkFBa0I7WUFDNUJBLEdBQUcsSUFBSVAsV0FBVyxHQUFHLHFCQUFxQkEsV0FBVyxFQUFFLEdB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