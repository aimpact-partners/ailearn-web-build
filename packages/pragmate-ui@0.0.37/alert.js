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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2VDbGljayIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNsb3NlIiwiSWNvbiIsIkNvbnRlbnQiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJJVHlwZXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jb250ZW50LnRzeCIsIi90cy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLFNBQ1JHLEtBQUtBLENBQUM7WUFBRUMsT0FBTztZQUFFQyxTQUFTO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFQztVQUFJLENBQVU7WUFDNUYsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHZCxNQUFBLENBQUFlLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUU1QyxJQUFJLENBQUNI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