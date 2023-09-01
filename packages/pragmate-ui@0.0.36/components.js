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
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 673452868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var React = require("react");
          /* bundle */
          function ButtonGroup(props) {
            const {
              orientation = 'row',
              children
            } = props;
            let cls = `pragmate-button-group`;
            cls += orientation ? ` pragmate-button-group ${orientation}` : '';
            return React.createElement("div", {
              className: "content-group"
            }, React.createElement("div", {
              className: cls
            }, children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 3404518904,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixLQUFLO1lBQy9CaEQsU0FBUyxHQUFHLEdBQUdtRCxPQUFPLEdBQUduRCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlGLEdBQUcsR0FBVyxHQUFHRSxTQUFTLEdBQUcsR0FBR0EsU0FBUyxHQUFHLEdBQUcsRUFBRSxxQ0FBcUNpRCxJQUFJLEVBQUU7WUFDaEcsSUFBSVosTUFBTSxFQUFFdkMsR0FBRyxJQUFJLFlBQVk7WUFFL0IsT0FDQ0M7Y0FBS0MsU0FBUyxFQUFFRixHQUFHO2NBQUVPLEdBQUcsRUFBRUE7WUFBRyxHQUM1Qk47Y0FBS3dELE9BQU8sRUFBQztZQUFhLEdBQ3pCeEQ7Y0FBUXlELEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBQyxJQUFJO2NBQUNMLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzFDLENBQ0Q7VUFFUixDQUFDLENBQ0Q7VUFBQ2YiLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInByb3BzIiwib3JpZW50YXRpb24iLCJjaGlsZHJlbiIsImNscyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwidmFsdWUiLCJmb3J3YXJkUmVmIiwiQnV0dG9uIiwicmVmIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsInJlZk9iamVjdCIsInVzZVJlZiIsImNvbWJpbmVkUmVmIiwiaW5zdGFuY2UiLCJjdXJyZW50Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsInRzL2J1dHRvbi1ncm91cC90eXBlLnRzIiwidHMvYnV0dG9uL2J1dHRvbi50c3giLCJ0cy9idXR0b24vaW50ZXJmYWNlLnRzIiwidHMvbGluay50c3giLCJ0cy9zcGlubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=