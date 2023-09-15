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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsInVzZVN0YXRlIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiVGl0bGUiLCJjb250ZW50IiwiZXhwb3J0cyIsIl9mb3JtIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJjYW5jZWwiLCJzdWJtaXQiLCJCdXR0b24iLCJ2YXJpYW50IiwiTGFiZWxlZEljb25CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJJY29uIiwiSW5wdXQiLCJuYW1lIiwiZGlzYWJsZWQiLCJhdXRvQ29tcGxldGUiLCJodG1sRm9yIiwiX3NwaW5uZXIiLCJMb2FkaW5nIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJUaGVtZVN3aXRjaGVyIiwiZmV0Y2hpbmciLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSJdLCJzb3VyY2VzIjpbIi90cy9BdWRpb1BsYXllci50c3giLCIvdHMvY29sbGFwc2libGUudHN4IiwiL3RzL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvaWNvbi1idXR0b24udHN4IiwiL3RzL2lucHV0LnRzeCIsIi90cy9sb2FkaW5nLnRzeCIsIi90cy9wcmUtbG9hZC50c3giLCIvdHMvdGhlbWUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTyxhQUhQOztVQUdtQixTQUFVQyxXQUFXQSxDQUFDO1lBQUVDLEdBQUc7WUFBRUMsTUFBTSxHQUFHO1VBQUksQ0FBRTtZQUM5RCxJQUFJLENBQUNELEdBQUcsRUFBRTtjQUNURSxPQUFPLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1pILEdBQUcsR0FBR0MsTUFBTSxHQUFHRCxHQUFHLEdBQUdJLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDTCxHQUFHLENBQUM7WUFDN0MsTUFBTU0sR0FBRyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QlgsTUFBQSxDQUFBVSxPQUFLLENBQUNFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFPO2NBQzFCRCxNQUFNLENBQUNFLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQUs7Z0JBQzlDLElBQUlGLE1BQU0sQ0FBQ0cs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