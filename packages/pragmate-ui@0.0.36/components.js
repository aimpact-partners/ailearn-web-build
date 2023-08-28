System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
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
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_4 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Ripple) {
      dependency_5 = _pragmateUi0036Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
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
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/components');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./button-group
      ******************************/
      ims.set('./button-group', {
        hash: 2735495167,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var React = require("react");
          /* bundle */
          function ButtonGroup({
            variant = "primary",
            size = "medium",
            orientation = "row",
            bordered = false,
            children
          }) {
            let cls = `pragmate-button-group`;
            cls += orientation ? ` ${orientation}` : "";
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 2948815373,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          const {
            forwardRef
          } = React;
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
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            const refObject = React.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);else if (ref) ref.current = instance;
            };
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            React.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(refObject.current);
              if (title) {
                console.log(11, title);
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
            return React.createElement("button", {
              ref: combinedRef,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled,
              ...properties
            }, icon && React.createElement(_icons.Icon, {
              icon: icon
            }), label || children && React.createElement("div", {
              className: `button-label ${loading ? 'loading' : ''}`
            }, label || children), (loading || fetching) && React.createElement(_spinner.Spinner, {
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
        hash: 2412629453,
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
        hash: 3853113460,
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
        hash: 1366424420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = (0, _react.forwardRef)((props, ref) => {
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
          });
          exports.Spinner = Spinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button-group",
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
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group').ButtonGroup : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRCxJQUFJRixHQUFHLEdBQVcsR0FBR0UsU0FBUyxHQUFHLEdBQUdBLFNBQVMsR0FBRyxHQUFHLEVBQUUscUNBQXFDTixJQUFJLEVBQUU7WUFDaEcsSUFBSXlDLE1BQU0sRUFBRXJDLEdBQUcsSUFBSSxZQUFZO1lBRS9CLE9BQ0NDO2NBQUtDLFNBQVMsRUFBRUYsR0FBRztjQUFFTSxHQUFHLEVBQUVBO1lBQUcsR0FDNUJMO2NBQUtzRCxPQUFPLEVBQUM7WUFBYSxHQUN6QnREO2NBQVF1RCxFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUMsSUFBSTtjQUFDTCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMxQyxDQUNEO1VBRVIsQ0FBQyxDQUNEO1VBQUNmIiwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJ2YXJpYW50Iiwic2l6ZSIsIm9yaWVudGF0aW9uIiwiYm9yZGVyZWQiLCJjaGlsZHJlbiIsImNscyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInByb3BzIiwicmVmIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJmZXRjaGluZyIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsInJlZk9iamVjdCIsInVzZVJlZiIsImNvbWJpbmVkUmVmIiwiaW5zdGFuY2UiLCJjdXJyZW50Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsInZhbHVlIiwiTGluayIsImhyZWYiLCJpc0V4dGVybmFsIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcCIsImNvbG9yIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsInZpZXdCb3giLCJjeCIsImN5IiwiciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYnV0dG9uLWdyb3VwLnRzeCIsInRzL2J1dHRvbi9idXR0b24udHN4IiwidHMvYnV0dG9uL2ludGVyZmFjZS50cyIsInRzL2xpbmsudHN4IiwidHMvc3Bpbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==