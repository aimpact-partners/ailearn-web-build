System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, ITypes, __beyond_pkg, hmr;
  _export({
    Alert: void 0,
    ITypes: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2023066641,
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
          function Alert({
            message,
            className,
            type,
            title,
            children,
            closable,
            onClose,
            icon
          }) {
            const [show, setShow] = _react.default.useState(true);
            if (!show || !message && !children) return null;
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
              title: title,
              icon: hasIcon
            }, children), closable && _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onCloseClick
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 4009112568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var React = require("react");
          function Content({
            message,
            children,
            title,
            icon
          }) {
            let output = [];
            if (title) {
              output.push(React.createElement("header", {
                key: "title",
                className: "alert__title"
              }, React.createElement("h3", {
                className: "alert__title-span",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })));
            }
            if (message) {
              output.push(React.createElement("span", {
                key: "message",
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

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1849509278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ITypes = void 0;
          /*bundle*/
          var ITypes;
          exports.ITypes = ITypes;
          (function (ITypes) {
            ITypes["Error"] = "error";
            ITypes["Warning"] = "warning";
            ITypes["Success"] = "success";
            ITypes["Info"] = "info";
          })(ITypes || (exports.ITypes = ITypes = {}));
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "Alert",
        "name": "Alert"
      }, {
        "im": "./types",
        "from": "ITypes",
        "name": "ITypes"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./alert').Alert : value);
        (require || prop === 'ITypes') && _export("ITypes", ITypes = require ? require('./types').ITypes : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjtZQUNuQkEsNkJBQW1CO1lBQ25CQSx1QkFBYTtVQUNkLENBQUMsRUFMc0JBLE1BQU0sc0JBQU5BLE1BQU0iLCJuYW1lcyI6WyJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvbkNsb3NlQ2xpY2siLCJjbHMiLCJpY29ucyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJpbmZvIiwiZGVmYXVsdEljb24iLCJoYXNJY29uIiwib25DbGljayIsImNsb3NlIiwiSWNvbiIsIkNvbnRlbnQiLCJJY29uQnV0dG9uIiwib3V0cHV0IiwicHVzaCIsImtleSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiSVR5cGVzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYWxlcnQudHN4IiwidHMvY29udGVudC50c3giLCJ0cy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=