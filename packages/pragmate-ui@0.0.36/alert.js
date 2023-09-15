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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q05QLE1BQU0sRUFDTnRCLFFBQVEsQ0FDQTtVQUVaOzs7Ozs7Ozs7OztVQ3hCQTs7VUFFQStCO1lBQ0FDO1VBQ0EiLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwiaWNvbiIsInNob3ciLCJzZXRTaG93IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2VDbGljayIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJvbkNsaWNrIiwiY2xvc2UiLCJJY29uIiwiQ29udGVudCIsIkljb25CdXR0b24iLCJvdXRwdXQiLCJwdXNoIiwia2V5IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb25zb2xlIiwibG9nIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiT2JqZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2FsZXJ0LnRzeCIsInRzL2NvbnRlbnQudHN4IiwidHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19