System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/spinner", "pragmate-ui@0.1.1/image", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, AudioPlayer, ThemeSwitch, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, WelcomeBoard, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    ThemeSwitch: void 0,
    CollapsibleHeader: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    ThemeSwitcher: void 0,
    WelcomeBoard: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_beyondJsWidgets110Render) {
      dependency_3 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Components) {
      dependency_5 = _pragmateUi011Components;
    }, function (_pragmateUi011Spinner) {
      dependency_6 = _pragmateUi011Spinner;
    }, function (_pragmateUi011Image) {
      dependency_7 = _pragmateUi011Image;
    }, function (_beyondJsKernel019Styles) {
      dependency_8 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.33.dev-01"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/widgets/render', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/spinner', dependency_6], ['pragmate-ui/image', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
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
        hash: 2462171743,
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
              active: true,
              type: 'primary'
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 1327465984,
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
              className: '',
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./welcome-board
      *******************************/

      ims.set('./welcome-board', {
        hash: 3618433111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WelcomeBoard = WelcomeBoard;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function WelcomeBoard({
            image = 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/white-logo',
            title,
            description,
            children
          }) {
            return _react.default.createElement("div", {
              className: "board-container"
            }, _react.default.createElement("div", {
              className: "board-header__container"
            }, _react.default.createElement("div", {
              className: "logo__container"
            }, _react.default.createElement(_image.Image, {
              src: image
            }))), !!children && children, title | description && _react.default.createElement("div", {
              className: "board-content__container"
            }, !!title && _react.default.createElement("p", {
              className: "board-content__title h1"
            }, title), !!description && _react.default.createElement("p", {
              className: "board-content__description h4"
            }, description)));
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
      }, {
        "im": "./welcome-board",
        "from": "WelcomeBoard",
        "name": "WelcomeBoard"
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
        (require || prop === 'WelcomeBoard') && _export("WelcomeBoard", WelcomeBoard = require ? require('./welcome-board').WelcomeBoard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdUaGVtZSIsIm9uQ2xpY2siLCJJY29uIiwiZGlzYWJsZWQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJuYXZpZ2F0ZUJhY2siLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsIlRpdGxlIiwiY29udGVudCIsImV4cG9ydHMiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiY2FuY2VsIiwic3VibWl0IiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIl9pbWFnZSIsIldlbGNvbWVCb2FyZCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9BdWRpb1BsYXllci50c3giLCIvdHMvY2hhbmdlLXRoZW1lLnRzeCIsIi90cy9jb2xsYXBzaWJsZS50c3giLCIvdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy9pY29uLWJ1dHRvbi50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL2xvYWRpbmcudHN4IiwiL3RzL3ByZS1sb2FkLnRzeCIsIi90cy90aGVtZS1idXR0b24udHN4IiwiL3RzL3dlbGNvbWUtYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTyxhQUhQOztVQUdtQixTQUFVQyxXQUFXQSxDQUFDO1lBQUVDLEdBQUc7WUFBRUMsTUFBTSxHQUFHO1VBQUksQ0FBRTtZQUM5RCxJQUFJLENBQUNELEdBQUcsRUFBRTtjQUNURSxPQUFPLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxP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