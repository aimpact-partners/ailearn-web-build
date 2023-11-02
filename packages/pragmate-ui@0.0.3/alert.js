System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/alert');
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
        hash: 205551790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          function Content({
            message,
            children,
            title,
            icon
          }) {
            let output = [];
            if (title) {
              output.push(_react.default.createElement("header", {
                key: "title",
                className: "alert__title"
              }, _react.default.createElement("h3", {
                className: "alert__title-span",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })));
            }
            if (message) {
              output.push(_react.default.createElement("span", {
                key: "message",
                dangerouslySetInnerHTML: {
                  __html: message
                }
              }));
            }
            const Control = icon ? 'section' : _react.default.Fragment;
            return _react.default.createElement(Control, null, output, children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2VDbGljayIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNsb3NlIiwiSWNvbiIsIkNvbnRlbnQiLCJJY29uQnV0dG9uIiwib3V0cHV0IiwicHVzaCIsImtleSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiSVR5cGVzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY29udGVudC50c3giLCIvdHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxLQUFLQSxDQUFDO1lBQUVDLE9BQU87WUFBRUMsU0FBUztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRUM7VUFBSSxDQUFVO1lBQzVGLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2QsTUFBQSxDQUFBZSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFNUMsSUFBSSxDQUFDSCxJQUFJLElB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