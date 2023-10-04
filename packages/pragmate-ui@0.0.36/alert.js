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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3589641291,
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
            let cls = `${className ? `${className} ` : ''} alert${type ? ` alert--${type}` : ''}`;
            cls = icon ? `${cls} alert--icon` : cls;
            const icons = {
              error: 'error',
              warning: 'circle-exclamation',
              success: 'circle-check',
              info: 'info'
            };
            const defaultIcon = icons[type ?? 'success'];
            const hasIcon = !!icon;
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
        hash: 3918005414,
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
            console.log(0.1, icon);
            const Control = icon ? 'section' : React.Fragment;
            return React.createElement(Control, null, output, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3209310194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsInByb3BzIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwiaWNvbiIsInNob3ciLCJzZXRTaG93IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25DbG9zZUNsaWNrIiwiY2xzIiwiaWNvbnMiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiaW5mbyIsImRlZmF1bHRJY29uIiwiaGFzSWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiY2xvc2UiLCJJY29uIiwiQ29udGVudCIsIkljb25CdXR0b24iLCJSZWFjdCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnNvbGUiLCJsb2ciLCJDb250cm9sIiwiRnJhZ21lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY29udGVudC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxLQUFLQSxDQUFDQyxLQUFhO1lBQzNCLE1BQU07Y0FBRUMsT0FBTztjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDLFFBQVE7Y0FBRUMsT0FBTztjQUFFQztZQUFJLENBQUUsR0FBR1IsS0FBSztZQUNwRixNQUFNLENBQUNTLElBQUksRUFBRUMsT0FB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