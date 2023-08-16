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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFYixZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0NuQztjQUFLQyxTQUFTLEVBQUMsNkJBQTZCO2NBQUNHLE9BQU8sRUFBRXNDO1lBQVksR0FDakUxQyxvQkFBQ21CLFdBQUk7Y0FBQ2hCLElBQUksRUFBRUEsSUFBSTtjQUFFbUIsUUFBUSxFQUFFUSxRQUFRO2NBQUUxQixPQUFPLEVBQUVzQztZQUFZLEVBQUksQ0FDMUQ7VUFFUiIsIm5hbWVzIjpbIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm5hdmlnYXRlQmFjayIsImFjdGlvbnMiLCJjaGlsZHJlbiIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZSIsImNscyIsImJ0bkNscyIsIm1lbnVDbHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlRpdGxlIiwiY29udGVudCIsImV4cG9ydHMiLCJDb25maXJtYXRpb25Nb2RhbCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNhbmNlbCIsInN1Ym1pdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJMYWJlbGVkSWNvbkJ1dHRvbiIsImxhYmVsIiwicmVzdCIsIkljb24iLCJJbnB1dCIsIm5hbWUiLCJkaXNhYmxlZCIsImh0bWxGb3IiLCJMb2FkaW5nIiwiU3Bpbm5lciIsInR5cGUiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGhlbWVTd2l0Y2hlciIsImZldGNoaW5nIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29sbGFwc2libGUudHN4IiwidHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsInRzL2ljb24tYnV0dG9uLnRzeCIsInRzL2lucHV0LnRzeCIsInRzL2xvYWRpbmcudHN4IiwidHMvcHJlLWxvYWQudHN4IiwidHMvdGhlbWUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==