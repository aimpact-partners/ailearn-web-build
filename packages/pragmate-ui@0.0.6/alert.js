System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, __beyond_pkg, hmr;
  _export("Alert", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2270589349,
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
            const onClick = async event => {
              event.stopPropagation();
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
            const attributes = {
              className: cls
            };
            if (closable) attributes.onClick = onClick;
            return _react.default.createElement("div", {
              ...attributes
            }, icon && _react.default.createElement("section", null, _react.default.createElement(_icons.Icon, {
              icon: defaultIcon
            })), _react.default.createElement(_content.Content, {
              message: message,
              title: title,
              icon: hasIcon
            }, children), closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: onClick
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
        hash: 3348065065,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJDb250ZW50IiwiSWNvbkJ1dHRvbiIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jb250ZW50LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLFNBQ1JHLEtBQUtBLENBQUM7WUFBRUMsT0FBTztZQUFFQyxTQUFTO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFQztVQUFJLENBQVU7WUFDNUYsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHZCxNQUFBLENBQUFlLE9BQUssQ0FBQ0MsUUFBUSxDQUFD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