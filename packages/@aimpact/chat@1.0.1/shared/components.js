System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, AudioPlayer, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      INTERNAL MODULE: ./AudioPlayer
      *****************************/
      ims.set('./AudioPlayer', {
        hash: 2007910221,
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
              className: 'audio-player'
            }, _react.default.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, _react.default.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./collapsible
      *****************************/

      ims.set('./collapsible', {
        hash: 1582048305,
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
        hash: 1517019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = _react.default.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return _react.default.createElement(_form.Button, {
              ref: ref,
              label: _react.default.createElement("div", {
                className: 'icon-button'
              }, _react.default.createElement(_icons.Icon, {
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
        hash: 524088998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksRUFBRTtjQUNuQixNQUFNVSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUViLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQzNEO2NBQUtVLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ21CLE9BQU8sRUFBRXFDO1lBQVksR0FDakVsRSw2QkFBQzJDLFdBQUk7Y0FBQ2YsSUFBSSxFQUFFQSxJQUFJO2NBQUVrQixRQUFRLEVBQUVRLFFBQVE7Y0FBRXpCLE9BQU8sRUFBRXFDO1lBQVksRUFBSSxDQUMxRDtVQUVSIiwibmFtZXMiOlsiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImhhbmRsZUNvbGxhcHNlIiwiY2xzIiwiYnRuQ2xzIiwibWVudUNscyIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlRpdGxlIiwiY29udGVudCIsImV4cG9ydHMiLCJDb25maXJtYXRpb25Nb2RhbCIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNhbmNlbCIsInN1Ym1pdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJMYWJlbGVkSWNvbkJ1dHRvbiIsImxhYmVsIiwicmVzdCIsIkljb24iLCJJbnB1dCIsIm5hbWUiLCJkaXNhYmxlZCIsImF1dG9Db21wbGV0ZSIsImh0bWxGb3IiLCJMb2FkaW5nIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJUaGVtZVN3aXRjaGVyIiwiZmV0Y2hpbmciLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9BdWRpb1BsYXllci50c3giLCJ0cy9jb2xsYXBzaWJsZS50c3giLCJ0cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwidHMvaWNvbi1idXR0b24udHN4IiwidHMvaW5wdXQudHN4IiwidHMvbG9hZGluZy50c3giLCJ0cy9wcmUtbG9hZC50c3giLCJ0cy90aGVtZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=