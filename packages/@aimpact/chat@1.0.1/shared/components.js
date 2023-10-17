System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/spinner", "@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AudioPlayer, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0037Components) {
      dependency_4 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Spinner) {
      dependency_5 = _pragmateUi0037Spinner;
    }, function (_beyondJsWidgets015Render) {
      dependency_6 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/widgets/render', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
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
          exports.ConfirmationModal = ConfirmationModal;
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
          const LabeledIconButton = _react.default.forwardRef((props, ref) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUMzQztZQUVBdkQsY0FBSyxDQUFDRSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUN5RCxZQUFZLEVBQUU7Y0FDbkIsTUFBTVUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFYixZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0MzRDtjQUFLVSxTQUFTLEVBQUMsNkJBQTZCO2NBQUNtQixPQUFPLEVBQUVxQztZQUFZLEdBQ2pFbEUsNkJBQUMyQyxXQUFJO2NBQUNmLElBQUksRUFBRUEsSUFBSTtjQUFFa0IsUUFBUSxFQUFFUSxRQUFRO2NBQUV6QixPQUFPLEVBQUVxQztZQUFZLEVBQUksQ0FDMUQ7VUFFUiIsIm5hbWVzIjpbIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm5hdmlnYXRlQmFjayIsImFjdGlvbnMiLCJjaGlsZHJlbiIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZSIsImNscyIsImJ0bkNscyIsIm1lbnVDbHMiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJUaXRsZSIsImNvbnRlbnQiLCJleHBvcnRzIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJjYW5jZWwiLCJzdWJtaXQiLCJCdXR0b24iLCJ2YXJpYW50IiwiTGFiZWxlZEljb25CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJJY29uIiwiSW5wdXQiLCJuYW1lIiwiZGlzYWJsZWQiLCJhdXRvQ29tcGxldGUiLCJodG1sRm9yIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGhlbWVTd2l0Y2hlciIsImZldGNoaW5nIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9BdWRpb1BsYXllci50c3giLCJ0cy9jb2xsYXBzaWJsZS50c3giLCJ0cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwidHMvaWNvbi1idXR0b24udHN4IiwidHMvaW5wdXQudHN4IiwidHMvbG9hZGluZy50c3giLCJ0cy9wcmUtbG9hZC50c3giLCJ0cy90aGVtZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=