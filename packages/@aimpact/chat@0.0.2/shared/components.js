System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, Tab, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    CollapsibleHeader: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    Tab: void 0,
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/shared/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/shared/components');
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
        hash: 2899614746,
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
              variant: 'link',
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

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 1768157778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /* bundle  */
          const Tab = ({
            panes,
            setURL = true
          }) => {
            const activeIndex = setURL ? Number(_routing.routing.uri.qs.get('tab')) || 0 : 0;
            const [activeTab, setActiveTab] = (0, _react.useState)(activeIndex);
            const tabRef = _react.default.useRef(null);
            const handleTabClick = index => {
              setActiveTab(index);
              const url = new URLSearchParams(window.location.search);
              url.set('tab', index.toString());
              _routing.routing.replaceState({}, null, `?${url.toString()}`);
            };
            _react.default.useEffect(() => {
              const scrollToTab = index => {
                const tabElement = tabRef.current?.querySelectorAll('.tab')[index];
                if (tabElement) {
                  const container = tabRef.current;
                  const containerRect = container.getBoundingClientRect();
                  const tabRect = tabElement.getBoundingClientRect();
                  const scrollLeft = container.scrollLeft;
                  if (tabRect.left < containerRect.left) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.left - containerRect.left,
                      behavior: 'smooth'
                    });
                  } else if (tabRect.right > containerRect.right) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.right - containerRect.right,
                      behavior: 'smooth'
                    });
                  }
                }
              };
              scrollToTab(activeTab);
            }, [activeTab]);
            const renderTabs = () => {
              return panes.map((pane, index) => _react.default.createElement("div", {
                key: index,
                className: `tab ${index === activeTab ? 'active' : ''}`,
                onClick: () => handleTabClick(index)
              }, pane.tab));
            };
            const navigateNext = () => activeTab < panes.length - 1 ? setActiveTab(activeTab + 1) : null;
            const navigateBack = () => activeTab > 0 ? setActiveTab(activeTab - 1) : null;
            const renderContent = () => panes[activeTab].content;
            return _react.default.createElement("section", {
              className: 'tab-container'
            }, _react.default.createElement("header", {
              className: 'tab-menu'
            }, _react.default.createElement("div", {
              className: 'tabs',
              ref: tabRef
            }, renderTabs())), _react.default.createElement("div", {
              className: 'tab-content'
            }, _react.default.createElement("div", {
              className: 'tab-content-wrapper'
            }, renderContent())));
          };
          exports.Tab = Tab;
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
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
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
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNHLFlBQVksQ0FBQ0MsQ0FBQztjQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FFbEIsTUFBTWhDLFNBQVMsR0FBR2lDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRCxNQUFNZixLQUFLLEdBQUd6RSxJQUFJLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQy9Dc0QsU0FBUyxDQUFDbUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFaEIsS0FBSyxDQUFDO2NBQ2pESyxZQUFZLENBQUNZLE9BQU8sQ0FBQyxPQUFPLEVBQUVqQixLQUFLLENBQUM7Y0FDcENTLE9BQU8sQ0FBQ1QsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNDO1lBRUE1RSxLQUFLLENBQUNvRCxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUM0QixZQUFZLEVBQUU7Y0FDbkIsTUFBTXZCLFNBQVMsR0FBR2lDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRGxDLFNBQVMsQ0FBQ21DLFlBQVksQ0FBQyxrQkFBa0IsRUFBRVosWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDaEY7Y0FBS0MsU0FBUyxFQUFDLDZCQUE2QjtjQUFDRyxPQUFPLEVBQUVtRjtZQUFZLEdBQ2pFdkYsb0JBQUNtQixXQUFJO2NBQUNoQixJQUFJLEVBQUVBLElBQUk7Y0FBRW1CLFFBQVEsRUFBRXFELFFBQVE7Y0FBRXZFLE9BQU8sRUFBRW1GO1lBQVksRUFBSSxDQUMxRDtVQUVSIiwibmFtZXMiOlsiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImhhbmRsZUNvbGxhcHNlIiwiY2xzIiwiYnRuQ2xzIiwibWVudUNscyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiVGl0bGUiLCJjb250ZW50IiwiZXhwb3J0cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2FuY2VsIiwic3VibWl0IiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSWNvbiIsIklucHV0IiwibmFtZSIsImRpc2FibGVkIiwiaHRtbEZvciIsIkxvYWRpbmciLCJTcGlubmVyIiwidHlwZSIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJUYWIiLCJwYW5lcyIsInNldFVSTCIsImFjdGl2ZUluZGV4IiwiTnVtYmVyIiwicm91dGluZyIsInVyaSIsInFzIiwiZ2V0IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidGFiUmVmIiwidXNlUmVmIiwiaGFuZGxlVGFiQ2xpY2siLCJpbmRleCIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwidG9TdHJpbmciLCJyZXBsYWNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiLCJyZW5kZXJUYWJzIiwibWFwIiwicGFuZSIsImtleSIsInRhYiIsIm5hdmlnYXRlTmV4dCIsImxlbmd0aCIsInJlbmRlckNvbnRlbnQiLCJUaGVtZVN3aXRjaGVyIiwiZmV0Y2hpbmciLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbGxhcHNpYmxlLnRzeCIsImNvZGUvdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsImNvZGUvdHMvaWNvbi1idXR0b24udHN4IiwiY29kZS90cy9pbnB1dC50c3giLCJjb2RlL3RzL2xvYWRpbmcudHN4IiwiY29kZS90cy9wcmUtbG9hZC50c3giLCJjb2RlL3RzL3RhYi50c3giLCJjb2RlL3RzL3RoZW1lLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==