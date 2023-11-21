System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/spinner", "@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_pragmateUi003Components) {
      dependency_4 = _pragmateUi003Components;
    }, function (_pragmateUi003Spinner) {
      dependency_5 = _pragmateUi003Spinner;
    }, function (_beyondJsWidgets015Render) {
      dependency_6 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsInVzZVN0YXRlIiwiaGFuZGxlQ29sbGFwc2UiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiVGl0bGUiLCJjb250ZW50IiwiZXhwb3J0cyIsIl9jb21wb25lbnRzIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJjYW5jZWwiLCJzdWJtaXQiLCJCdXR0b24iLCJ2YXJpYW50IiwiTGFiZWxlZEljb25CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJJY29uIiwiSW5wdXQiLCJuYW1lIiwiZGlzYWJsZWQiLCJhdXRvQ29tcGxldGUiLCJodG1sRm9yIiwiX3NwaW5uZXIiLCJMb2FkaW5nIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsImZldGNoaW5nIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCJdLCJzb3VyY2VzIjpbIi90cy9BdWRpb1BsYXllci50c3giLCIvdHMvY29sbGFwc2libGUudHN4IiwiL3RzL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvaWNvbi1idXR0b24udHN4IiwiL3RzL2lucHV0LnRzeCIsIi90cy9sb2FkaW5nLnRzeCIsIi90cy9wcmUtbG9hZC50c3giLCIvdHMvdGhlbWUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVVDLFdBQVdBLENBQUM7WUFBRUMsR0FBRztZQUFFQyxNQUFNLEdBQUc7VUFBSSxDQUFFO1lBQzlELElBQUksQ0FBQ0QsR0FBRyxFQUFFO2NBQ1RFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWkgsR0FBRyxHQUFHQyxNQUFNLEdBQUdELEdBQUcsR0FBR0ksR0FBRyxDQUFDQyxlQUFlLENBQUNMLEdBQUcsQ0FBQztZQUM3QyxNQUFNTSxHQUFHLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCWCxNQUFBLENBQUFVLE9BQUssQ0FBQ0UsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLE9BQU87Y0FDMUJELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSUYsTUFBTSxDQUFDRyxRQUFRLEtBQUtDLFFBQVEsRUFBRTtrQkFDakNKLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLEtBQUs7a0JBQzFCTCxNQUFNLENBQUNNLFlBQVksR0FBRyxNQUFLO29CQUMxQk4sTUFBTSxDQUFDTSxZQUFZLEdBQUcsSUFBSTtvQkFDMUJOLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLENBQUM7a0JBQ3ZCLENBQUM7O2NBRUgsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUNmLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0NILE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCckIsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3ZCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBO2NBQVFqQixHQUFHLEVBQUVBLEdBQUc7Y0FBRXFCLElBQUksRUFBQyxXQUFXO2NBQUNmLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQVQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFZTztVQUFhLE1BQU15QixpQkFBaUIsR0FBR0EsQ0FBQztZQUM5Q0MsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFNBQVMsR0FBRztVQUFJLENBQ1EsS0FBSTtZQUM1QixNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUcsSUFBQWxDLE1BQUEsQ0FBQW1DLFFBQVEsRUFBQyxDQUFDSixRQUFRLElBQUlDLFNBQVMsQ0FBQztZQUN0RSxNQUFNSSxjQUFjLEdBQUdBLENBQUEsS0FBTUYsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUV6RCxNQUFNSSxHQUFHLEdBQUcsdUJBQXVCSixXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNuRSxNQUFNSyxNQUFNLEdBQUcscUNBQXFDTCxXQUFXLElBQUlELFNBQVMsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBQ2pHLE1BQU1PLE9BQU8sR0FBRyxvQkFBb0JOLFdBQVcsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBRXBFLE9BQ0NqQyxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBb0IsR0FDckNyQixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUVrQjtZQUFPLEdBQ3RCdkMsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQzlCUSxZQUFZLElBQUk3QixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDSyxNQUFBLENBQUFlLFVBQVU7Y0FBQ25CLFNBQVMsRUFBQyxJQUFJO2NBQUNvQixJQUFJLEVBQUMsV0FBVztjQUFDQyxPQUFPLEVBQUViO1lBQVksRUFBSSxFQUN0RjdCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLGVBQ0NwQixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDdUIsS0FBSztjQUFDQyxPQUFPLEVBQUVqQjtZQUFLLEVBQUksRUFDeEJDLFFBQVEsSUFBSTVCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLGFBQUtRLFFBQVEsQ0FBTSxDQUMxQixDQUNGLEVBQ041QixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENTLE9BQU8sRUFDUEMsUUFBUSxJQUFJL0IsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUEsQ0FBQ0ssTUFBQSxDQUFBZSxVQUFVO2NBQUNuQixTQUFTLEVBQUVpQixNQUFNO2NBQUVHLElBQUksRUFBQyxZQUFZO2NBQUNDLE9BQU8sRUFBRU47WUFBYyxFQUFJLENBQ3BGLENBQ0QsRUFDTnBDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBRWdCO1lBQUcsR0FBR04sUUFBUSxJQUFJL0IsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXFCLEdBQUVVLFFBQVEsQ0FBVyxDQUFPLENBQzlGO1VBRVgsQ0FBQztVQUFDYyxPQUFBLENBQUFuQixpQkFBQSxHQUFBQSxpQkFBQTtVQUVGLE1BQU1pQixLQUFLLEdBQUdBLENBQUM7WUFBRUM7VUFBTyxDQUFFLEtBQU0sT0FBT0EsT0FBTyxLQUFLLFFBQVEsR0FBRzVDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLGFBQUt3QixPQUFPLENBQU0sR0FBR0EsT0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRDNGLElBQUE1QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkMsV0FBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBUU87VUFBVyxNQUFNOEMsaUJBQWlCLEdBQUFGLE9BQUEsQ0FBQUUsaUJBQUEsR0FBRy9DLE1BQUEsQ0FBQVUsT0FBSyxDQUFDc0MsVUFBVSxDQUMzRCxDQUFDQyxLQUFLLEVBQUV4QyxHQUFHLEtBQUk7WUFDZCxNQUFNO2NBQUVtQyxPQUFPO2NBQUVNLE1BQU07Y0FBRUM7WUFBTSxDQUFFLEdBQUdGLEtBQUs7WUFDekMsT0FDQ2pELE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBO2NBQVFYLEdBQUcsRUFBRUEsR0FBRztjQUFFWSxTQUFTLEVBQUM7WUFBb0IsR0FDL0NyQixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDSyxNQUFBLENBQUFlLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ3BCLFNBQVMsRUFBQyxPQUFPO2NBQUNxQixPQUFPLEVBQUVRO1lBQU0sRUFBSSxFQUM5RGxELE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLGlCQUNDcEIsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUEseUJBQWtCLENBQ1YsRUFFVHBCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLFlBQUl3QixPQUFPLENBQUssRUFDaEI1QyxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxpQkFDQ3BCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBVSxhQUFBLENBQUMwQixXQUFBLENBQUFNLE1BQU07Y0FBQ1gsSUFBSSxFQUFDLGNBQWM7Y0FBQ1ksT0FBTyxFQUFDLGNBQWM7Y0FBQ1gsT0FBTyxFQUFFUTtZQUFNLFlBRXpELEVBQ1RsRCxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDMEIsV0FBQSxDQUFBTSxNQUFNO2NBQUNYLElBQUksRUFBQyxNQUFNO2NBQUNZLE9BQU8sRUFBQyxTQUFTO2NBQUNYLE9BQU8sRUFBRVM7WUFBTSxZQUU1QyxDQUNELENBQ0Q7VUFFWCxDQUFDLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENELElBQUFuRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkMsV0FBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBT087VUFBYSxNQUFNcUQsaUJBQWlCLEdBQUFULE9BQUEsQ0FBQVMsaUJBQUEsR0FBR3RELE1BQUEsQ0FBQVUsT0FBSyxDQUFDc0MsVUFBVSxDQUM3RCxDQUFDQyxLQUFLLEVBQUV4QyxHQUFJLEtBQUk7WUFDZixNQUFNO2NBQUVnQyxJQUFJO2NBQUVjLEtBQUs7Y0FBRSxHQUFHQztZQUFJLENBQUUsR0FBR1AsS0FBSztZQUV0QyxPQUNDakQsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUEsQ0FBQzBCLFdBQUEsQ0FBQU0sTUFBTTtjQUNOM0MsR0FBRyxFQUFFQSxHQUFHO2NBQ1I4QyxLQUFLLEVBQ0p2RCxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQWEsR0FDM0JyQixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDSyxNQUFBLENBQUFnQyxJQUFJO2dCQUFDaEIsSUFBSSxFQUFFQTtjQUFJLEVBQUksRUFDbkJjLEtBQUssQ0FDRDtjQUFBLEdBRUhDO1lBQUksRUFDUDtVQUVKLENBQUMsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsSUFBQXhELE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQWEsTUFBTXlELEtBQUssR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVKLEtBQUs7WUFBRUssUUFBUTtZQUFFdkMsU0FBUztZQUFFLEdBQUdtQztVQUFJLENBQUUsS0FBSTtZQUNuRixPQUNDeEQsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFFLGlCQUFpQkEsU0FBUztZQUFHLEdBQzVDckIsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBT3VDLElBQUksRUFBRUEsSUFBSTtjQUFFQyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNSixJQUFJO2NBQUVLLFlBQVksRUFBQztZQUFLLEVBQUcsRUFDckUsQ0FBQ0QsUUFBUSxJQUFJNUQsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBTzBDLE9BQU8sRUFBRUg7WUFBSSxHQUFHSixLQUFLLENBQVMsQ0FDOUM7VUFFUixDQUFDO1VBQUNWLE9BQUEsQ0FBQWEsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RGLElBQUExRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEQsUUFBQSxHQUFBOUQsT0FBQTtVQUVPO1VBQWEsTUFBTStELE9BQU8sR0FBR0EsQ0FBQSxLQUFLO1lBQ3ZDLE9BQ0VoRSxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDaENyQixNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQSxDQUFDMkMsUUFBQSxDQUFBRSxPQUFPO2NBQUM1QyxTQUFTLEVBQUMsU0FBUztjQUFDRyxJQUFJLEVBQUMsU0FBUztjQUFDMEMsTUFBTTtZQUFBLEVBQUcsQ0FDakQ7VUFFVixDQUFDO1VBQUNyQixPQUFBLENBQUFtQixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEYsSUFBQWhFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4RCxRQUFBLEdBQUE5RCxPQUFBO1VBQ087VUFBWSxTQUFVa0UsYUFBYUEsQ0FBQTtZQUN6QyxPQUNDbkUsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDckIsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUEsQ0FBQzJDLFFBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQWxFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQW1FLE9BQUEsR0FBQW5FLE9BQUE7VUFFTztVQUFVLFNBQVVvRSxhQUFhQSxDQUFDO1lBQUVDO1VBQVEsQ0FBRTtZQUNwRCxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXUCxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTVEsU0FBUyxHQUFXSixZQUFZLElBQUlHLFlBQVk7WUFDdEQsTUFBTSxDQUFDckMsSUFBSSxFQUFFdUMsT0FBTyxDQUFDLEdBQUdoRixNQUFBLENBQUFVLE9BQUssQ0FBQ3lCLFFBQVEsQ0FBUzRDLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUVyRixTQUFTRSxZQUFZQSxDQUFDQyxDQUFDO2NBQ3RCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtjQUVsQixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRCxNQUFNZixLQUFLLEdBQUc5QixJQUFJLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQy9DMkMsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVoQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ1ksT0FBTyxDQUFDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQztjQUNwQ0gsT0FBQSxDQUFBcUIsT0FBTyxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRXBCLEtBQUssQ0FBQztjQUVqRFMsT0FBTyxDQUFDVCxLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDM0M7WUFFQXZFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDRSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUMrRCxZQUFZLEVBQUU7Y0FDbkIsTUFBTVMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFWixZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0MzRSxNQUFBLENBQUFVLE9BQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUMsNkJBQTZCO2NBQUNxQixPQUFPLEVBQUV1QztZQUFZLEdBQ2pFakYsTUFBQSxDQUFBVSxPQUFBLENBQUFVLGFBQUEsQ0FBQ0ssTUFBQSxDQUFBZ0MsSUFBSTtjQUFDaEIsSUFBSSxFQUFFQSxJQUFJO2NBQUVtQixRQUFRLEVBQUVVLFFBQVE7Y0FBRTVCLE9BQU8sRUFBRXVDO1lBQVksRUFBSSxDQUMxRDtVQUVSIn0=