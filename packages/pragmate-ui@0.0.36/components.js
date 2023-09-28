System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, Link, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    Link: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_3 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Ripple) {
      dependency_4 = _pragmateUi0036Ripple;
    }, function (_tippyJs) {
      dependency_5 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['pragmate-ui/ripple', dependency_4], ['tippy.js', dependency_5], ['@beyond-js/kernel/routing', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 529259960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var React = require("react");
          var _context = require("./context");
          /* bundle */
          function ButtonGroup(props) {
            const {
              orientation = 'row',
              children
            } = props;
            const [selected, setSelected] = React.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            const childrenWithProps = React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                index
              }); // Passing the index as a prop
            });

            return React.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, React.createElement("div", {
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
        hash: 196687777,
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
        hash: 465633993,
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
            const useContext = typeof context?.setSelected === 'function';
            const onClickButton = event => {
              if (useContext) {
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
            if (useContext && context.selected === index) cls += ' pui-btn--active';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHdkQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRCxJQUFJVixHQUFHLEdBQVcsR0FBR1UsU0FBUyxHQUFHLEdBQUdBLFNBQVMsR0FBRyxHQUFHLEVBQUUscUNBQXFDcUQsSUFBSSxFQUFFO1lBQ2hHLElBQUlaLE1BQU0sRUFBRW5ELEdBQUcsSUFBSSxZQUFZO1lBRS9CLE9BQ0NGO2NBQUtZLFNBQVMsRUFBRVYsR0FBRztjQUFFa0IsR0FBRyxFQUFFQTtZQUFHLEdBQzVCcEI7Y0FBS3VFLE9BQU8sRUFBQztZQUFhLEdBQ3pCdkU7Y0FBUXdFLEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBQyxJQUFJO2NBQUNMLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzFDLENBQ0Q7VUFFUixDQUFDO1VBQ007VUFDUCxNQUFNakIsT0FBTyxHQUFrRCxxQkFBVSxFQUFDVyxTQUFTLENBQUM7VUFBQ2pEIiwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJwcm9wcyIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNscyIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiY2xvbmVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImZvcndhcmRSZWYiLCJCdXR0b24iLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImJsb2NrIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHNMb2FkaW5nIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiQ29tcG9uZW50IiwiY29sb3IiLCJzaXplIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCJ0cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCJ0cy9idXR0b24tZ3JvdXAvdHlwZS50cyIsInRzL2J1dHRvbi9idXR0b24udHN4IiwidHMvYnV0dG9uL2ludGVyZmFjZS50cyIsInRzL2xpbmsudHN4IiwidHMvc3Bpbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=