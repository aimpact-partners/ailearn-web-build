System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    CollapsibleHeader: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Form) {
      dependency_4 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Spinner) {
      dependency_5 = _pragmateUi0036Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/shared/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/shared/components');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./collapsible
      *****************************/
      ims.set('./collapsible', {
        hash: 1829891359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const CollapsibleHeader = ({
            title,
            subtitle,
            navigateBack,
            actions,
            children
          }) => {
            const [isCollapsed, setIsCollapsed] = (0, _react.useState)(!children);
            const handleCollapse = () => setIsCollapsed(!isCollapsed);
            const cls = `collapsible-wrapper ${isCollapsed ? 'collapsed' : ''}`;
            const btnCls = `collapse-button lg primary circle ${isCollapsed ? 'collapsed' : ''}`;
            const menuCls = `collapsible-menu ${isCollapsed ? 'collapsed' : ''}`;
            return _react.default.createElement("header", {
              className: 'collapsible-header'
            }, _react.default.createElement("nav", {
              className: menuCls
            }, _react.default.createElement("div", {
              className: 'collapsible-nav'
            }, navigateBack && _react.default.createElement(_icons.IconButton, {
              className: 'md',
              icon: 'backArrow',
              onClick: navigateBack
            }), _react.default.createElement("span", null, _react.default.createElement(Title, {
              content: title
            }), subtitle && _react.default.createElement("h3", null, subtitle))), _react.default.createElement("div", {
              className: 'collapsible-actions'
            }, actions, children && _react.default.createElement(_icons.IconButton, {
              className: btnCls,
              icon: 'expandMore',
              onClick: handleCollapse
            }))), _react.default.createElement("div", {
              className: cls
            }, children && _react.default.createElement("section", {
              className: 'collapsible-content'
            }, children)));
          };
          exports.CollapsibleHeader = CollapsibleHeader;
          const Title = ({
            content
          }) => typeof content === 'string' ? _react.default.createElement("h1", null, content) : content;
        }
      });

      /************************************
      INTERNAL MODULE: ./confirmation-modal
      ************************************/

      ims.set('./confirmation-modal', {
        hash: 4275696560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ConfirmationModal = _react.default.forwardRef((props, ref) => {
            const {
              content,
              cancel,
              submit
            } = props;
            return _react.default.createElement("dialog", {
              ref: ref,
              className: 'confirmation-modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: cancel
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Atention!")), _react.default.createElement("p", null, content), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: cancel
            }, "Cancel"), _react.default.createElement(_form.Button, {
              icon: 'save',
              variant: 'primary',
              onClick: submit
            }, "Submit")));
          });
          exports.ConfirmationModal = ConfirmationModal;
        }
      });

      /*****************************
      INTERNAL MODULE: ./icon-button
      *****************************/

      ims.set('./icon-button', {
        hash: 505396687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = React.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return React.createElement(_form.Button, {
              ref: ref,
              label: React.createElement("div", {
                className: 'icon-button'
              }, React.createElement(_icons.Icon, {
                icon: icon
              }), label),
              ...rest
            });
          });
          exports.LabeledIconButton = LabeledIconButton;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2709937976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = void 0;
          var React = require("react");
          /* bundle */
          const Input = ({
            name,
            label,
            disabled,
            className,
            ...rest
          }) => {
            return React.createElement("div", {
              className: `input-wrapper ${className} `
            }, React.createElement("input", {
              name: name,
              disabled: disabled,
              ...rest
            }), !disabled && React.createElement("label", {
              htmlFor: name
            }, label));
          };
          exports.Input = Input;
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 477427642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = void 0;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          const Loading = () => {
            return _react.default.createElement("div", {
              className: "spinner-container"
            }, _react.default.createElement(_spinner.Spinner, {
              className: "spinner",
              type: "primary",
              active: true
            }));
          };
          exports.Loading = Loading;
        }
      });

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
        hash: 2567925015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var React = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return React.createElement("div", {
              className: 'preload-screen active'
            }, React.createElement(_spinner.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 3429670935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = React.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return React.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, React.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collapsible",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./icon-button",
        "from": "LabeledIconButton",
        "name": "LabeledIconButton"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
      }, {
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./collapsible').CollapsibleHeader : value);
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./confirmation-modal').ConfirmationModal : value);
        (require || prop === 'LabeledIconButton') && _export("LabeledIconButton", LabeledIconButton = require ? require('./icon-button').LabeledIconButton : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsInVzZVN0YXRlIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJUaXRsZSIsImNvbnRlbnQiLCJleHBvcnRzIiwiX2Zvcm0iLCJDb25maXJtYXRpb25Nb2RhbCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNhbmNlbCIsInN1Ym1pdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJSZWFjdCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSWNvbiIsIklucHV0IiwibmFtZSIsImRpc2FibGVkIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJ0eXBlIiwiYWN0aXZlIiwiUHJlbG9hZFNjcmVlbiIsIlRoZW1lU3dpdGNoZXIiLCJmZXRjaGluZyIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwidXNlRWZmZWN0Il0sInNvdXJjZXMiOlsiL3RzL2NvbGxhcHNpYmxlLnRzeCIsIi90cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL2ljb24tYnV0dG9uLnRzeCIsIi90cy9pbnB1dC50c3giLCIvdHMvbG9hZGluZy50c3giLCIvdHMvcHJlLWxvYWQudHN4IiwiL3RzL3RoZW1lLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBV087VUFBYSxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQztZQUM5Q0MsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQztVQUFRLENBQ2dCLEtBQUk7WUFDNUIsTUFBTSxDQUFDQyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHLElBQUFWLE1BQUEsQ0FBQVcsUUFBUSxFQUFDLENBQUNILFFBQVEsQ0FBQztZQUN6RCxNQUFNSSxjQUFjLEdBQUdBLENBQUEsS0FBTUYsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUV6RCxNQUFNSSxHQUFHLEdBQUcsdUJBQXVCSixXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNuRSxNQUFNSyxNQUFNLEdBQUcscUNBQXFDTCxXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNwRixNQUFNTSxPQUFPLEdBQUcsb0JBQW9CTixXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUVwRSxPQUNDVCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDbEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRUg7WUFBTyxHQUN0QmYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUM5QlosWUFBWSxJQUFJTixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FB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