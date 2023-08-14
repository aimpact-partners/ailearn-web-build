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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsInByb3BzIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwiaWNvbiIsInNob3ciLCJzZXRTaG93IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25DbG9zZUNsaWNrIiwiY2xzIiwiaWNvbnMiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiaW5mbyIsImRlZmF1bHRJY29uIiwiaGFzSWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiY2xvc2UiLCJJY29uIiwiQ29udGVudCIsIkljb25CdXR0b24iLCJSZWFjdCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbnRyb2wiLCJGcmFnbWVudCJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY29udGVudC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQWtCTztVQUFVLFNBQ1JHLEtBQUtBLENBQUNDLEtBQWE7WUFDM0IsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUMsUUFBUTtjQUFFQyxPQUFPO2NBQUVDO1lBQUksQ0FBRSxHQUFHUixLQUFLO1lBQ3BGLE1BQU0sQ0FBQ1MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2YsTUFBQSxDQUFBZ0IsT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRTVDLElBQUksQ0FBQ0gsSUFB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