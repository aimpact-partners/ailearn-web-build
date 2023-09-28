System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi0036Components) {
      dependency_4 = _pragmateUi0036Components;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0E7VUFFTyxhQUhQOztVQUdtQixTQUFVQSxXQUFXLENBQUM7WUFBRUMsR0FBRztZQUFFQyxNQUFNLEdBQUc7VUFBSSxDQUFFO1lBQzlELElBQUksQ0FBQ0QsR0FBRyxFQUFFO2NBQ1RFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWkgsR0FBRyxHQUFHQyxNQUFNLEdBQUdELEdBQUcsR0FBR0ksR0FBRyxDQUFDQyxlQUFlLENBQUNMLEdBQUcsQ0FBQztZQUM3QyxNQUFNTSxHQUFHLEdBQUdDLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QkQsY0FBSyxDQUFDRSxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBTztjQUMxQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJRixNQUFNLENBQUNHLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQ0osTUFBTSxDQUFDSyxXQUFXLEdBQUcsS0FBSztrQkFDMUJMLE1BQU0sQ0FBQ00sWUFBWSxHQUFHLE1BQUs7b0JBQzFCTixNQUFNLENBQUNNLFlBQVksR0FBRyxJQUFJO29CQUMxQk4sTUFBTSxDQUFDSyxXQUFXLEdBQUcsQ0FBQztrQkFDdkIsQ0FBQzs7Y0FFSCxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQ2YsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ087Y0FBS1UsU0FBUyxFQUFDO1lBQWMsR0FDNUJWO2NBQU9XLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakNaO2NBQVFQLEdBQUcsRUFBRUEsR0FBRztjQUFFb0IsSUFBSSxFQUFDLFdBQVc7Y0FBQ2QsR0FBRyxFQUFFQTtZQUFHLEVBQUkscURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTtVQVlPO1VBQWEsTUFBTWUsaUJBQWlCLEdBQUcsQ0FBQztZQUM5Q0MsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFNBQVMsR0FBRztVQUFJLENBQ1EsS0FBSTtZQUM1QixNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUcsbUJBQVEsRUFBQyxDQUFDSCxRQUFRLElBQUlDLFNBQVMsQ0FBQztZQUN0RSxNQUFNRyxjQUFjLEdBQUcsTUFBTUQsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUV6RCxNQUFNRyxHQUFHLEdBQUcsdUJBQXVCSCxXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNuRSxNQUFNSSxNQUFNLEdBQUcscUNBQXFDSixXQUFXLElBQUlELFNBQVMsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBQ2pHLE1BQU1NLE9BQU8sR0FBRyxvQkFBb0JMLFdBQVcsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBRXBFLE9BQ0NyQjtjQUFRVSxTQUFTLEVBQUM7WUFBb0IsR0FDckNWO2NBQUtVLFNBQVMsRUFBRWdCO1lBQU8sR0FDdEIxQjtjQUFLVSxTQUFTLEVBQUM7WUFBaUIsR0FDOUJPLFlBQVksSUFBSWpCLDZCQUFDMkIsaUJBQVU7Y0FBQ2pCLFNBQVMsRUFBQyxJQUFJO2NBQUNrQixJQUFJLEVBQUMsV0FBVztjQUFDQyxPQUFPLEVBQUVaO1lBQVksRUFBSSxFQUN0RmpCLDJDQUNDQSw2QkFBQzhCLEtBQUs7Y0FBQ0MsT0FBTyxFQUFFaEI7WUFBSyxFQUFJLEVBQ3hCQyxRQUFRLElBQUloQix5Q0FBS2dCLFFBQVEsQ0FBTSxDQUMxQixDQUNGLEVBQ05oQjtjQUFLVSxTQUFTLEVBQUM7WUFBcUIsR0FDbENRLE9BQU8sRUFDUEMsUUFBUSxJQUFJbkIsNkJBQUMyQixpQkFBVTtjQUFDakIsU0FBUyxFQUFFZSxNQUFNO2NBQUVHLElBQUksRUFBQyxZQUFZO2NBQUNDLE9BQU8sRUFBRU47WUFBYyxFQUFJLENBQ3BGLENBQ0QsRUFDTnZCO2NBQUtVLFNBQVMsRUFBRWM7WUFBRyxHQUFHTCxRQUFRLElBQUluQjtjQUFTVSxTQUFTLEVBQUM7WUFBcUIsR0FBRVMsUUFBUSxDQUFXLENBQU8sQ0FDOUY7VUFFWCxDQUFDO1VBQUNhO1VBRUYsTUFBTUYsS0FBSyxHQUFHLENBQUM7WUFBRUM7VUFBTyxDQUFFLEtBQU0sT0FBT0EsT0FBTyxLQUFLLFFBQVEsR0FBRy9CLHlDQUFLK0IsT0FBTyxDQUFNLEdBQUdBLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEQzRjtVQUNBO1VBQ0E7VUFRTztVQUFXLE1BQU1FLGlCQUFpQixHQUFHakMsY0FBSyxDQUFDa0MsVUFBVSxDQUMzRCxDQUFDQyxLQUFLLEVBQUVwQyxHQUFHLEtBQUk7WUFDZCxNQUFNO2NBQUVnQyxPQUFPO2NBQUVLLE1BQU07Y0FBRUM7WUFBTSxDQUFFLEdBQUdGLEtBQUs7WUFDekMsT0FDQ25DO2NBQVFELEdBQUcsRUFBRUEsR0FBRztjQUFFVyxTQUFTLEVBQUM7WUFBb0IsR0FDL0NWLDZCQUFDMkIsaUJBQVU7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ2xCLFNBQVMsRUFBQyxPQUFPO2NBQUNtQixPQUFPLEVBQUVPO1lBQU0sRUFBSSxFQUM5RHBDLDZDQUNDQSxxREFBa0IsQ0FDVixFQUVUQSx3Q0FBSStCLE9BQU8sQ0FBSyxFQUNoQi9CLDZDQUNDQSw2QkFBQ3NDLGtCQUFNO2NBQUNWLElBQUksRUFBQyxjQUFjO2NBQUNXLE9BQU8sRUFBQyxjQUFjO2NBQUNWLE9BQU8sRUFBRU87WUFBTSxZQUV6RCxFQUNUcEMsNkJBQUNzQyxrQkFBTTtjQUFDVixJQUFJLEVBQUMsTUFBTTtjQUFDVyxPQUFPLEVBQUMsU0FBUztjQUFDVixPQUFPLEVBQUVRO1lBQU0sWUFFNUMsQ0FDRCxDQUNEO1VBRVgsQ0FBQyxDQUNEO1VBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDRjtVQUNBO1VBQ0E7VUFPTztVQUFhLE1BQU1RLGlCQUFpQixHQUFHeEMsY0FBSyxDQUFDa0MsVUFBVSxDQUM3RCxDQUFDQyxLQUFLLEVBQUVwQyxHQUFJLEtBQUk7WUFDZixNQUFNO2NBQUU2QixJQUFJO2NBQUVhLEtBQUs7Y0FBRSxHQUFHQztZQUFJLENBQUUsR0FBR1AsS0FBSztZQUV0QyxPQUNDbkMsNkJBQUNzQyxrQkFBTTtjQUNOdkMsR0FBRyxFQUFFQSxHQUFHO2NBQ1IwQyxLQUFLLEVBQ0p6QztnQkFBS1UsU0FBUyxFQUFDO2NBQWEsR0FDM0JWLDZCQUFDMkMsV0FBSTtnQkFBQ2YsSUFBSSxFQUFFQTtjQUFJLEVBQUksRUFDbkJhLEtBQUssQ0FDRDtjQUFBLEdBRUhDO1lBQUksRUFDUDtVQUVKLENBQUMsQ0FDRDtVQUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkY7VUFFTztVQUFhLE1BQU1ZLEtBQUssR0FBRyxDQUFDO1lBQUVDLElBQUk7WUFBRUosS0FBSztZQUFFSyxRQUFRO1lBQUVwQyxTQUFTO1lBQUUsR0FBR2dDO1VBQUksQ0FBRSxLQUFJO1lBQ25GLE9BQ0MxQztjQUFLVSxTQUFTLEVBQUUsaUJBQWlCQSxTQUFTO1lBQUcsR0FDNUNWO2NBQU82QyxJQUFJLEVBQUVBLElBQUk7Y0FBRUMsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTUosSUFBSTtjQUFFSyxZQUFZLEVBQUM7WUFBSyxFQUFHLEVBQ3JFLENBQUNELFFBQVEsSUFBSTlDO2NBQU9nRCxPQUFPLEVBQUVIO1lBQUksR0FBR0osS0FBSyxDQUFTLENBQzlDO1VBRVIsQ0FBQztVQUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURjtVQUNBO1VBRU87VUFBYSxNQUFNaUIsT0FBTyxHQUFHLE1BQUs7WUFDdkMsT0FDRWpEO2NBQUtVLFNBQVMsRUFBQztZQUFtQixHQUNoQ1YsNkJBQUNrRCxnQkFBTztjQUFDeEMsU0FBUyxFQUFDLFNBQVM7Y0FBQ0csSUFBSSxFQUFDLFNBQVM7Y0FBQ3NDLE1BQU07WUFBQSxFQUFHLENBQ2pEO1VBRVYsQ0FBQztVQUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEY7VUFDQTtVQUNPO1VBQVksU0FBVW9CLGFBQWE7WUFDekMsT0FDQ3BEO2NBQUtVLFNBQVMsRUFBQztZQUF1QixHQUNyQ1YsNkJBQUNrRCxnQkFBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkE7VUFDQTtVQUVPO1VBQVUsU0FBVUUsYUFBYSxDQUFDO1lBQUVDO1VBQVEsQ0FBRTtZQUNwRCxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXUCxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTVEsU0FBUyxHQUFXSixZQUFZLElBQUlHLFlBQVk7WUFDdEQsTUFBTSxDQUFDbEMsSUFBSSxFQUFFb0MsT0FBTyxDQUFDLEdBQUdoRSxjQUFLLENBQUNpRSxRQUFRLENBQVNGLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUVyRixTQUFTRyxZQUFZLENBQUNDLENBQUM7Y0FDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2NBRWxCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1oQixLQUFLLEdBQUczQixJQUFJLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQy9DeUMsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVqQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2EsT0FBTyxDQUFDLE9BQU8sRUFBRWxCLEtBQUssQ0FBQztjQUNwQ1MsT0FBTyxDQUFDVCxLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDM0M7WUFFQXZELGNBQUssQ0FBQ0UsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDeUQsWUFBWSxFQUFFO2NBQ25CLE1BQU1VLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hERixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRWIsWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDM0Q7Y0FBS1UsU0FBUyxFQUFDLDZCQUE2QjtjQUFDbUIsT0FBTyxFQUFFcUM7WUFBWSxHQUNqRWxFLDZCQUFDMkMsV0FBSTtjQUFDZixJQUFJLEVBQUVBLElBQUk7Y0FBRWtCLFFBQVEsRUFBRVEsUUFBUTtjQUFFekIsT0FBTyxFQUFFcUM7WUFBWSxFQUFJLENBQzFEO1VBRVIiLCJuYW1lcyI6WyJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNsYXNzTmFtZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJuYXZpZ2F0ZUJhY2siLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiVGl0bGUiLCJjb250ZW50IiwiZXhwb3J0cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiY2FuY2VsIiwic3VibWl0IiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSWNvbiIsIklucHV0IiwibmFtZSIsImRpc2FibGVkIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIkxvYWRpbmciLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJlbG9hZFNjcmVlbiIsIlRoZW1lU3dpdGNoZXIiLCJmZXRjaGluZyIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL0F1ZGlvUGxheWVyLnRzeCIsInRzL2NvbGxhcHNpYmxlLnRzeCIsInRzL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCJ0cy9pY29uLWJ1dHRvbi50c3giLCJ0cy9pbnB1dC50c3giLCJ0cy9sb2FkaW5nLnRzeCIsInRzL3ByZS1sb2FkLnRzeCIsInRzL3RoZW1lLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==