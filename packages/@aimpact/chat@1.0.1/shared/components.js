System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AudioPlayer, ThemeSwitch, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    ThemeSwitch: void 0,
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_beyondJsWidgets015Render) {
      dependency_3 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_pragmateUi003Components) {
      dependency_5 = _pragmateUi003Components;
    }, function (_pragmateUi003Spinner) {
      dependency_6 = _pragmateUi003Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/widgets/render', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/spinner', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/shared/components');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./AudioPlayer
      *****************************/
      ims.set('./AudioPlayer', {
        hash: 1215290757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            create = true
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = create ? src : URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./change-theme
      ******************************/

      ims.set('./change-theme', {
        hash: 1133681995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitch = ThemeSwitch;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitch({
            fetching,
            text
          }) {
            const prefersDarkMode = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const [icon, setIcon] = (0, _react.useState)(prefersDarkMode ? 'sun' : 'moon');
            const [currentTheme, setCurrentTheme] = (0, _react.useState)(localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light'));
            const [printText, setPrintText] = (0, _react.useState)(text?.replace('%them', currentTheme));
            (0, _react.useEffect)(() => {
              document.documentElement.setAttribute('data-beyond-mode', currentTheme);
              localStorage.setItem('theme', currentTheme);
              _render.widgets.attributes.add('data-beyond-mode', currentTheme);
              setPrintText(text?.replace('%them', currentTheme));
            }, [currentTheme, text]);
            const handleChange = () => {
              const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
              setCurrentTheme(newTheme);
              setIcon(newTheme === 'dark' ? 'sun' : 'moon');
            };
            return _react.default.createElement("div", {
              className: "theme-switch__container",
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }), text && printText);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./collapsible
      *****************************/

      ims.set('./collapsible', {
        hash: 4076329207,
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
            children,
            collapsed = true
          }) => {
            const [isCollapsed, setIsCollapsed] = (0, _react.useState)(!children || collapsed);
            const handleCollapse = () => setIsCollapsed(!isCollapsed);
            const cls = `collapsible-wrapper ${isCollapsed ? 'collapsed' : ''}`;
            const btnCls = `collapse-button lg primary circle ${isCollapsed || collapsed ? 'collapsed' : ''}`;
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
        hash: 4087826673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ConfirmationModal = exports.ConfirmationModal = _react.default.forwardRef((props, ref) => {
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
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Atention!")), _react.default.createElement("p", null, content), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: cancel
            }, "Cancel"), _react.default.createElement(_components.Button, {
              icon: 'save',
              variant: 'primary',
              onClick: submit
            }, "Submit")));
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./icon-button
      *****************************/

      ims.set('./icon-button', {
        hash: 1737455888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = exports.LabeledIconButton = _react.default.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return _react.default.createElement(_components.Button, {
              ref: ref,
              label: _react.default.createElement("div", {
                className: 'icon-button'
              }, _react.default.createElement(_icons.Icon, {
                icon: icon
              }), label),
              ...rest
            });
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2171317613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = void 0;
          var _react = require("react");
          /* bundle */
          const Input = ({
            name,
            label,
            disabled,
            className,
            ...rest
          }) => {
            return _react.default.createElement("div", {
              className: `input-wrapper ${className} `
            }, _react.default.createElement("input", {
              name: name,
              disabled: disabled,
              ...rest,
              autoComplete: 'off'
            }), !disabled && _react.default.createElement("label", {
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
        hash: 3189844793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 3254668438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./change-theme",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }, {
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./AudioPlayer').AudioPlayer : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./change-theme').ThemeSwitch : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdUaGVtZSIsIm9uQ2xpY2siLCJJY29uIiwiZGlzYWJsZWQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJuYXZpZ2F0ZUJhY2siLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsIlRpdGxlIiwiY29udGVudCIsImV4cG9ydHMiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiY2FuY2VsIiwic3VibWl0IiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VzIjpbIi90cy9BdWRpb1BsYXllci50c3giLCIvdHMvY2hhbmdlLXRoZW1lLnRzeCIsIi90cy9jb2xsYXBzaWJsZS50c3giLCIvdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy9pY29uLWJ1dHRvbi50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL2xvYWRpbmcudHN4IiwiL3RzL3ByZS1sb2FkLnRzeCIsIi90cy90aGVtZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVUMsV0FBV0EsQ0FBQztZQUFFQyxHQUFHO1lBQUVDLE1BQU0sR0FBRztVQUFJLENBQUU7WUFDOUQsSUFBSSxDQUFDRCxHQUFHLEVBQUU7Y0FDVEUsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaSCxHQUFHLEdBQUdDLE1BQU0sR0FBR0QsR0FBRyxHQUFHSSxHQUFHLENBQUNDLGVBQWUsQ0FBQ0wsR0FBRyxDQUFDO1lBQzdD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