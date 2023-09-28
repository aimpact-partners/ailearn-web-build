System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Alert, __beyond_pkg, hmr;
  _export("Alert", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2]]);
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
        hash: 1154160063,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtZQUNBQztVQUNBIiwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvbkNsb3NlQ2xpY2siLCJjbHMiLCJpY29ucyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJpbmZvIiwiZGVmYXVsdEljb24iLCJoYXNJY29uIiwib25DbGljayIsImNsb3NlIiwiSWNvbiIsIkNvbnRlbnQiLCJJY29uQnV0dG9uIiwib3V0cHV0IiwicHVzaCIsImtleSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiT2JqZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2FsZXJ0LnRzeCIsInRzL2NvbnRlbnQudHN4IiwidHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19