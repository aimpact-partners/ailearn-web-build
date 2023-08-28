System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, __beyond_pkg, hmr;
  _export("Alert", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2475328760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alert = Alert;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _content = require("./content");
          /*bundle*/
          function Alert(props) {
            const {
              message,
              className,
              type,
              title,
              children,
              closable,
              onClose,
              icon
            } = props;
            const [show, setShow] = _react.default.useState(true);
            if (!show || !message && !children) {
              return null;
            }
            const onCloseClick = async () => {
              if (onClose) await onClose();
              setShow(false);
            };
            let cls = `${className ? '${className} ' : ''}alert${type ? ` alert--${type}` : ''}`;
            cls = icon ? `${cls} alert--icon` : cls;
            const icons = {
              error: 'error',
              warning: 'circle-exclamation',
              success: 'circle-check',
              info: 'info'
            };
            const defaultIcon = icons[type ?? 'success'];
            const hasIcon = !!defaultIcon;
            return _react.default.createElement("div", {
              className: cls,
              onClick: close
            }, icon && _react.default.createElement("section", null, _react.default.createElement(_icons.Icon, {
              icon: defaultIcon
            })), _react.default.createElement(_content.Content, {
              message: message,
              type: type,
              title: title,
              icon: hasIcon
            }, children), closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: onCloseClick
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 2478189849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var React = require("react");
          function Content({
            type,
            message,
            children,
            title,
            icon
          }) {
            let output = [];
            if (title) {
              output.push(React.createElement("header", {
                key: 'title',
                className: 'alert__title'
              }, React.createElement("h3", {
                className: 'alert__title-span',
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })));
            }
            if (message) {
              output.push(React.createElement("span", {
                key: 'message',
                dangerouslySetInnerHTML: {
                  __html: message
                }
              }));
            }
            const Control = icon ? 'section' : React.Fragment;
            return React.createElement(Control, null, output, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "Alert",
        "name": "Alert"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./alert').Alert : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQWtCTztVQUFVLFNBQ1JBLEtBQUssQ0FBQ0MsS0FBYTtZQUMzQixNQUFNO2NBQUVDLE9BQU87Y0FBRUMsU0FBUztjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxRQUFRO2NBQUVDLE9BQU87Y0FBRUM7WUFBSSxDQUFFLEdBQUdSLEtBQUs7WUFDcEYsTUFBTSxDQUFDUyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHQyxjQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFNUMsSUFBSSxDQUFDSCxJQUFJLElBQUssQ0FBQ1IsT0FBTyxJQUFJLENBQUNJLFFBQVMsRUFBRTtjQUNyQyxPQUFPLElBQUk7O1lBR1osTUFBTVEsWUFBWSxHQUFHLFlBQVc7Y0FDL0IsSUFBSU4sT0FBTyxFQUFFLE1BQU1BLE9BQU8sRUFBRTtjQUM1QkcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7WUFFRCxJQUFJSSxHQUFHLEdBQUcsR0FBR1osU0FBUyxHQUFHLGVBQWUsR0FBRyxFQUFFLFFBQVFDLElBQUksR0FBRyxXQUFXQSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEZXLEdBQUcsR0FBR04sSUFBSSxHQUFHLEdBQUdNLEdBQUcsY0FBYyxHQUFHQSxHQUFHO1lBRXZDLE1BQU1DLEtBQUssR0FBWTtjQUN0QkMsS0FBSyxFQUFFLE9BQU87Y0FDZEMsT0FBTyxFQUFFLG9CQUFvQjtjQUM3QkMsT0FBTyxFQUFFLGNBQWM7Y0FDdkJDLElBQUksRUFBRTthQUNOO1lBRUQsTUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNaLElBQUksSUFBSSxTQUFTLENBQUM7WUFDNUMsTUFBTWtCLE9BQU8sR0FBRyxDQUFDLENBQUNELFdBQVc7WUFDN0IsT0FDQ1Q7Y0FBS1QsU0FBUyxFQUFFWSxHQUFHO2NBQUVRLE9BQU8sRUFBRUM7WUFBSyxHQUNqQ2YsSUFBSSxJQUNKRyw4Q0FDQ0EsNkJBQUNhLFdBQUk7Y0FBQ2hCLElBQUksRUFBRVk7WUFBVyxFQUFJLENBRTVCLEVBRURULDZCQUFDYyxnQkFBTztjQUFDeEIsT0FBTyxFQUFFQSxPQUFPO2NBQUVFLElBQUksRUFBRUEsSUFBSTtjQUFFQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRUksSUFBSSxFQUFFYTtZQUFPLEdBQ2hFaEIsUUFBUSxDQUNBLEVBQ1RDLFFBQVEsSUFBSUssNkJBQUNlLGlCQUFVO2NBQUNsQixJQUFJLEVBQUMsT0FBTztjQUFDYyxPQUFPLEVBQUVUO1lBQVksRUFBSSxDQUMxRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQTtVQUVNLFNBQVVZLE9BQU8sQ0FBQztZQUFFdEIsSUFBSTtZQUFFRixPQUFPO1lBQUVJLFFBQVE7WUFBRUQsS0FBSztZQUFFSTtVQUFJLENBQUU7WUFDL0QsSUFBSW1CLE1BQU0sR0FBRyxFQUFFO1lBRWYsSUFBSXZCLEtBQUssRUFBRTtjQUNWdUIsTUFBTSxDQUFDQyxJQUFJLENBQ1ZqQjtnQkFBUWtCLEdBQUcsRUFBQyxPQUFPO2dCQUFDM0IsU0FBUyxFQUFDO2NBQWMsR0FDM0NTO2dCQUFJVCxTQUFTLEVBQUMsbUJBQW1CO2dCQUFDNEIsdUJBQXVCLEVBQUU7a0JBQUVDLE1BQU0sRUFBRTNCO2dCQUFLO2NBQUUsRUFBSSxDQUN4RSxDQUNUOztZQUdGLElBQUlILE9BQU8sRUFBRTtjQUNaMEIsTUFBTSxDQUFDQyxJQUFJLENBQUNqQjtnQkFBTWtCLEdBQUcsRUFBQyxTQUFTO2dCQUFDQyx1QkFBdUIsRUFBRTtrQkFBRUMsTUFBTSxFQUFFOUI7Z0JBQU87Y0FBRSxFQUFTLENBQUM7O1lBRXZGLE1BQU0rQixPQUFPLEdBQUd4QixJQUFJLEdBQUcsU0FBUyxHQUFHRyxLQUFLLENBQUNzQixRQUFRO1lBQ2pELE9BQ0N0QixvQkFBQ3FCLE9BQU8sUUFDTkwsTUFBTSxFQUNOdEIsUUFBUSxDQUNBO1VBRVoiLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwiaWNvbiIsInNob3ciLCJzZXRTaG93IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2VDbGljayIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJvbkNsaWNrIiwiY2xvc2UiLCJJY29uIiwiQ29udGVudCIsIkljb25CdXR0b24iLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDb250cm9sIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2FsZXJ0LnRzeCIsInRzL2NvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=