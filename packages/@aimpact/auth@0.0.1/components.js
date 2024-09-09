System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/widgets@1.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, EmptyCard, ICONS, Input, ThemeSwitch, __beyond_pkg, hmr;
  _export({
    EmptyCard: void 0,
    ICONS: void 0,
    Input: void 0,
    ThemeSwitch: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_3 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_4 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsWidgets110Render) {
      dependency_5 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.1.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/widgets/render', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/components');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 3774354544,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _icons = require("./icons");
          /*bundle */
          function EmptyCard({
            text,
            icon = _icons.ICONS.classworks,
            className,
            description,
            children
          }) {
            const cls = `empty-section__container ${className ? `${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              icon: icon,
              className: cls,
              text: text
            }, _react.default.createElement("p", {
              className: 'description__text'
            }, description), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3083475196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /* bundle */
          const ICONS = exports.ICONS = {
            classworks: {
              icon: `<g>
    
    <path id="Unión_4" data-name="Unión 4" d="M2.507,24A2.6,2.6,0,0,1,0,21.335V2.67A2.6,2.6,0,0,1,2.507,0h20.8a2.6,2.6,0,0,1,2.507,2.67v4H23.312v-4H2.507V21.335H9.521V24Zm9.08-.011V19.535l7.764-8.2,1.667-1.763a1.862,1.862,0,0,1,2.743,0l1.486,1.573a2.114,2.114,0,0,1,0,2.9l-.878.93L24.344,15l-.751.792-7.759,8.2ZM13.6,20.424V21.9h1.4L22.159,14.3l-1.386-1.465ZM5.573,14V11.335h6.91V14Zm0-5.333V6H20.179V8.669Z" transform="translate(1.179 1.998)"/>
  </g>`,
              viewBox: '0 0 28 28'
            }
          };
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

      /********************************
      INTERNAL MODULE: ./theme-switcher
      ********************************/

      ims.set('./theme-switcher', {
        hash: 4092300503,
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
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./theme-switcher",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./theme-switcher').ThemeSwitch : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2ljb25zIiwiRW1wdHlDYXJkIiwidGV4dCIsImljb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiY2xzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eSIsImV4cG9ydHMiLCJ2aWV3Qm94IiwiSW5wdXQiLCJuYW1lIiwibGFiZWwiLCJkaXNhYmxlZCIsInJlc3QiLCJhdXRvQ29tcGxldGUiLCJodG1sRm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrIiwiSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9lbXB0eS50c3giLCIvdHMvaWNvbnMudHMiLCIvdHMvaW5wdXQudHN4IiwiL3RzL3RoZW1lLXN3aXRjaGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVyxTQUFVRyxTQUFTQSxDQUFDO1lBQUVDLElB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