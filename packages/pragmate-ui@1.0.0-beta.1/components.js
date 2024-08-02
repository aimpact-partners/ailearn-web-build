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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.0-dev.09"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0Iiwic2V0UHJvY2Vzc2luZyIsInJlZiIsInVzZVJpcHBsZSIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyIiwicGFyYW1zIiwidGFnIiwiYXMiLCJDb250cm9sIiwia2V5IiwicmVwbGFjZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiQ29tcG9uZW50IiwiY29sb3IiLCJzaXplIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsIl9yaXBwbGUiLCJfdGlwcHkiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50Il0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9odG1sLXdyYXBwZXIudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL3NwaW5uZXIudHN4IiwiL3RzL3VzZS1yaXBwbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsS0FBSztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFxQjtZQUNwRyxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdSLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQVNKLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQ3RFLElBQUlJLEdBQUcsR0FBRyxrQkFBa0I7WUFDNUJBLEdBQUcsSUFBSVAsV0FBVyxHQUFHLHFCQUFxQkEsV0FBVyxFQUFFLEdB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QUssRUFBRUssS0FBSyxDQUFDQyxNQUFNLEdBQUdOLEtBQUs7WUFDL0I3RCxTQUFTLEdBQUcsR0FBR2dFLE9BQU8sR0FBR2hFLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSWIsR0FBRyxHQUFXLEdBQUdhLFNBQVMsR0FBRyxHQUFHQSxTQUFTLEdBQUcsR0FBRyxFQUFFLHFDQUFxQzhELElBQUksRUFBRTtZQUNoRyxJQUFJdEIsTUFBTSxFQUFFckQsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ1gsTUFBQSxDQUFBUyxPQUFBLENBQUFXLGFBQUE7Y0FBS0ksU0FBUyxFQUFFYixHQUFHO2NBQUV3QyxHQUFHLEVBQUVBO1lBQUcsR0FDNUJuRCxNQUFBLENBQUFTLE9BQUEsQ0FBQVcsYUFBQTtjQUFLd0UsT0FBTyxFQUFDO1lBQWEsR0FDekI1RixNQUFBLENBQUFTLE9BQUEsQ0FBQVcsYUFBQTtjQUFReUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUM7VUFDTTtVQUNQLE1BQU0zQixPQUFPLEdBQUF0QyxPQUFBLENBQUFzQyxPQUFBLEdBQThDLElBQUEvRCxNQUFBLENBQUFrQyxVQUFVLEVBQUNrRCxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JoRixJQUFBcEYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStGLE9BQUEsR0FBQS9GLE9BQUE7VUFDQSxJQUFBZ0csTUFBQSxHQUFBaEcsT0FBQTtVQUVNLFNBQVVtRCxTQUFTQSxDQUFDWixLQUFhLEVBQUVXLEdBQXdDO1lBQ2hGQSxHQUFHLEdBQUdBLEdBQUcsSUFBSW5ELE1BQUEsQ0FBQVMsT0FBSyxDQUFDeUYsTUFBTSxDQUFvQixJQUFJLENBQUM7WUFDbERsRyxNQUFBLENBQUFTLE9BQUssQ0FBQzBGLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLE1BQU0sR0FBRyxJQUFJSixPQUFBLENBQUFLLFlBQVksRUFBRTtjQUNqQ0QsTUFBTSxDQUFDRSxlQUFlLENBQUNuRCxHQUFHLENBQUNvRCxPQUFPLENBQUM7Y0FFbkMsSUFBSS9ELEtBQUssRUFBRTtnQkFDVixJQUFBeUQsTUFBQSxDQUFBeEYsT0FBSyxFQUFDMEMsR0FBRyxDQUFDb0QsT0FBTyxDQUFDOztZQUVwQixDQUFDLEVBQUUsQ0FBQy9ELEtBQUssQ0FBQyxDQUFDO1lBRVgsT0FBT1csR0FBRztVQUNYIiwiaWdub3JlTGlzdCI6W119