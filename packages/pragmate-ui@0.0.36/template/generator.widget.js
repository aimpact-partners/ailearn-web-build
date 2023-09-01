System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "pragmate-ui@0.0.36/template/manager", "@beyond-js/reactive@1.1.4/model", "react@18.2.0", "pragmate-ui@0.0.36/code", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/tooltip"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_pragmateUi0036TemplateManager) {
      dependency_4 = _pragmateUi0036TemplateManager;
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0036Code) {
      dependency_7 = _pragmateUi0036Code;
    }, function (_pragmateUi0036Form) {
      dependency_8 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Tooltip) {
      dependency_11 = _pragmateUi0036Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/template/generator",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/code', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/tooltip', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-palette-page",
        "vspecifier": "pragmate-ui@0.0.36/template/generator.widget",
        "is": "page",
        "route": "/pui/palette/generator"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/template/generator.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3788948358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /**********************************
      INTERNAL MODULE: ./store/calculator
      **********************************/

      ims.set('./store/calculator', {
        hash: 4110960658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.generatePalette = void 0;
          const hexToRgb = hex => {
            const bigint = parseInt(hex.replace('#', ''), 16);
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return [r, g, b];
          };
          const calcPercentageToBlack = rgb => {
            return Math.round(Math.min(...rgb) / 255 * 100);
          };
          const getPalettePosition = percentageToBlack => {
            const step = Math.ceil(100 / 14);
            return Math.ceil((100 - percentageToBlack) / step);
          };
          const rgbToHex = rgb => {
            const [r, g, b] = rgb;
            return '#' + [r, g, b].map(x => {
              const hex = x.toString(16);
              return hex.length === 1 ? '0' + hex : hex;
            }).join('');
          };
          const generatePalette = color => {
            let rgb = typeof color === 'string' ? hexToRgb(color) : color;
            const percentageToBlack = calcPercentageToBlack(rgb);
            const position = getPalettePosition(percentageToBlack);
            const palette = Array.from({
              length: 13
            }, (_, i) => {
              if (i === 0) return rgbToHex([0, 0, 0]);
              if (i === 12) return rgbToHex([255, 255, 255]);
              const factor = i / 12;
              const calc = (x, pos) => {
                let rounded = Math.round(x * factor);
                return rounded > 255 ? 255 : rounded;
              };
              const r = calc(rgb[0], 0);
              const g = calc(rgb[1], 1);
              const b = calc(rgb[2], 2);
              const newTone = [r, g, b];
              const MaxTone = Math.max(...newTone);
              if (i > 3) {
                const multiplier = i < 7 ? i < 5 ? 1.5 : 2 : 2.4;
                newTone[0] = Math.round(newTone[0] * multiplier) > 255 ? 255 : Math.round(newTone[0] * multiplier);
                newTone[1] = Math.round(newTone[1] * multiplier) > 255 ? 255 : Math.round(newTone[1] * multiplier);
                newTone[2] = Math.round(newTone[2] * multiplier) > 255 ? 255 : Math.round(newTone[2] * multiplier);
              }
              return rgbToHex(newTone);
            });
            if (position < 12) {
              //palette[position] = rgbToHex(rgb);
            }
            return palette;
          };
          exports.generatePalette = generatePalette;
          const rgbToHsl = ([r, g, b]) => {
            r /= 255;
            g /= 255;
            b /= 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h,
              s,
              l = (max + min) / 2;
            if (max === min) {
              h = s = 0;
            } else {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
                case g:
                  h = (b - r) / d + 2;
                  break;
                case b:
                  h = (r - g) / d + 4;
                  break;
              }
              h /= 6;
            }
            return [h * 360, s * 100, l * 100];
          };
          const hslToHex = (h, s, l) => {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0');
            };
            return `#${f(0)}${f(8)}${f(4)}`;
          };
          const generateHSLPalette = hsl => {
            const [h, s, l] = hsl;
            const step = 100 / 12;
            const palette = [];
            for (let i = 0; i <= 12; i++) {
              let newL = l + (step * i - l);
              newL = Math.min(100, Math.max(0, newL));
              palette.push(hslToHex(h, s, newL));
            }
            return palette;
          };
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 946010910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _calculator = require("./calculator");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #values;
            get values() {
              return this.#values;
            }
            #properties = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'error'];
            get properties() {
              return this.#properties;
            }
            #colors = new Map();
            get palettes() {
              return this.#colors;
            }
            #customProperties = new Map();
            get customProperties() {
              return this.#customProperties;
            }
            #tones = {
              primary: '#660000',
              secondary: '#006600',
              tertiary: '#000066',
              error: '#660000',
              success: '#006600',
              info: '#000055',
              warning: '#505000'
            };
            get tones() {
              return this.#tones;
            }
            constructor() {
              super();
              const tones = Object.keys(this.tones);
              tones.forEach(tone => this.generateColorData(tone, this.tones[tone]));
            }
            setColor(property, color) {
              this.#tones[property] = color;
              this.triggerEvent();
            }
            generatePalettes() {
              const palettes = Object.keys(this.#tones);
              palettes.forEach(palette => this.generateColorData(palette, this.#tones[palette]));
              this.triggerEvent();
            }
            generateColorData(propertyTones, color) {
              const palette = (0, _calculator.generatePalette)(color);
              this.#customProperties.set(propertyTones, this.getCustomProperties(propertyTones, palette));
              this.#colors.set(propertyTones, palette);
            }
            getCustomProperties(property, palette) {
              const values = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
              const output = palette.map((value, index) => {
                return `--${property}-${values[index]}: ${value};`;
              }).join('\n');
              return `--${property}: ${this.#tones[property]};\n${output}`;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/AllCustomProperties
      *******************************************/

      ims.set('./views/AllCustomProperties', {
        hash: 4151510284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AllCustomProperties = AllCustomProperties;
          var React = require("react");
          var _code = require("pragmate-ui/code");
          function AllCustomProperties({
            store
          }) {
            let output = '';
            [...store.customProperties.entries()].forEach(([key, value]) => {
              output += `\n//${key}\n\n ${value}`;
            });
            return React.createElement("section", {
              className: 'properties__container'
            }, React.createElement(_code.Code, {
              language: 'css'
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/ColorControl
      ************************************/

      ims.set('./views/ColorControl', {
        hash: 3956788062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ColorControl = ColorControl;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function ColorControl({
            store,
            label,
            name,
            value
          }) {
            const [currentValue, setCurrentValue] = _react.default.useState(value);
            const onSelectColor = event => {
              console.log(10, event.target.value);
              store.setColor(name, event.target.value);
              setCurrentValue(event.target.value);
            };
            return _react.default.createElement("label", {
              htmlFor: 'primary'
            }, label, _react.default.createElement(_form.Input, {
              type: 'text',
              onChange: onSelectColor,
              value: currentValue
            }), _react.default.createElement("input", {
              type: 'color',
              value: currentValue,
              onChange: onSelectColor,
              name: 'primary'
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/CustomProperties
      ****************************************/

      ims.set('./views/CustomProperties', {
        hash: 3623476266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomProperties = CustomProperties;
          var React = require("react");
          var _code = require("pragmate-ui/code");
          function CustomProperties({
            properties
          }) {
            return React.createElement("section", {
              className: 'properties__container'
            }, React.createElement(_code.Code, {
              language: 'css'
            }, properties));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4254789981,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _palettes = require("./palettes");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ColorControl = require("./ColorControl");
          var _AllCustomProperties = require("./AllCustomProperties");
          /*bundle*/
          function View({
            store
          }) {
            const [colors, setColors] = _react.default.useState(store.tones);
            (0, _hooks.useBinder)([store], () => {
              setColors({
                ...store.tones
              });
            });
            const onSubmit = event => {
              event.preventDefault();
              store.generatePalettes();
            };
            return _react.default.createElement("div", {
              className: 'page__container'
            }, _react.default.createElement("h2", null, "Template tones"), _react.default.createElement("form", {
              className: 'form__color__container',
              onSubmit: onSubmit
            }, _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Primary',
              name: 'primary',
              value: colors.primary
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Secondary',
              name: 'secondary',
              value: colors.secondary
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Tertiary',
              name: 'tertiary',
              value: colors.tertiary
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Success',
              name: 'success',
              value: colors.success
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Info',
              name: 'info',
              value: colors.info
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Warning',
              name: 'warning',
              value: colors.warning
            }), _react.default.createElement(_ColorControl.ColorControl, {
              store: store,
              label: 'Error',
              name: 'error',
              value: colors.error
            }), _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: onSubmit
            }, "Generate")), _react.default.createElement(_palettes.Palettes, {
              store: store
            }), _react.default.createElement(_AllCustomProperties.AllCustomProperties, {
              store: store
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/palette
      *******************************/

      ims.set('./views/palette', {
        hash: 584288003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palette = Palette;
          var React = require("react");
          var _tooltip = require("pragmate-ui/tooltip");
          function Palette({
            property,
            palette
          }) {
            return React.createElement("section", {
              className: 'palette__container'
            }, palette.map((value, index) => {
              const color = value;
              return React.createElement(_tooltip.Tooltip, {
                key: `tone.${property}.${value}.${index}`,
                content: color
              }, React.createElement("div", {
                className: `palette__color-container color-${value}`,
                style: {
                  backgroundColor: value
                }
              }, value));
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/palettes
      ********************************/

      ims.set('./views/palettes', {
        hash: 2655641550,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palettes = Palettes;
          var React = require("react");
          var _palette = require("./palette");
          function Palettes({
            store
          }) {
            const colors = Object.keys(store.tones);
            return React.createElement(React.Fragment, null, colors.map((color, index) => {
              const palette = store.palettes.get(color);
              return React.createElement(React.Fragment, {
                key: `${color}.${index}`
              }, React.createElement(_palette.Palette, {
                property: color,
                palette: palette
              }));
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcvRCxLQUFLLElBQUkyRCxLQUFLO2NBQUUsR0FDdkNLLG9CQUFDNEIsZ0JBQU87Z0JBQUN6QyxRQUFRLEVBQUVuRCxLQUFLO2dCQUFFRSxPQUFPLEVBQUVBO2NBQU8sRUFBSSxDQUU5QjtZQUVuQixDQUFDLENBQUMsQ0FDQTtVQUVMIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiaGV4VG9SZ2IiLCJoZXgiLCJiaWdpbnQiLCJwYXJzZUludCIsInJlcGxhY2UiLCJyIiwiZyIsImIiLCJjYWxjUGVyY2VudGFnZVRvQmxhY2siLCJyZ2IiLCJNYXRoIiwicm91bmQiLCJtaW4iLCJnZXRQYWxldHRlUG9zaXRpb24iLCJwZXJjZW50YWdlVG9CbGFjayIsInN0ZXAiLCJjZWlsIiwicmdiVG9IZXgiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJqb2luIiwiZ2VuZXJhdGVQYWxldHRlIiwiY29sb3IiLCJwb3NpdGlvbiIsInBhbGV0dGUiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImZhY3RvciIsImNhbGMiLCJwb3MiLCJyb3VuZGVkIiwibmV3VG9uZSIsIk1heFRvbmUiLCJtYXgiLCJtdWx0aXBsaWVyIiwicmdiVG9Ic2wiLCJoIiwicyIsImwiLCJkIiwiaHNsVG9IZXgiLCJhIiwiZiIsIm4iLCJrIiwicGFkU3RhcnQiLCJnZW5lcmF0ZUhTTFBhbGV0dGUiLCJoc2wiLCJuZXdMIiwicHVzaCIsIlJlYWN0aXZlTW9kZWwiLCJ2YWx1ZXMiLCJwcm9wZXJ0aWVzIiwiTWFwIiwicGFsZXR0ZXMiLCJjdXN0b21Qcm9wZXJ0aWVzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwiZXJyb3IiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJ0b25lcyIsImNvbnN0cnVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ0b25lIiwiZ2VuZXJhdGVDb2xvckRhdGEiLCJzZXRDb2xvciIsInByb3BlcnR5IiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGVQYWxldHRlcyIsInByb3BlcnR5VG9uZXMiLCJzZXQiLCJnZXRDdXN0b21Qcm9wZXJ0aWVzIiwib3V0cHV0IiwidmFsdWUiLCJpbmRleCIsIkFsbEN1c3RvbVByb3BlcnRpZXMiLCJzdG9yZSIsImVudHJpZXMiLCJrZXkiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkNvZGUiLCJsYW5ndWFnZSIsIkNvbG9yQ29udHJvbCIsImxhYmVsIiwibmFtZSIsImN1cnJlbnRWYWx1ZSIsInNldEN1cnJlbnRWYWx1ZSIsInVzZVN0YXRlIiwib25TZWxlY3RDb2xvciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImh0bWxGb3IiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIkN1c3RvbVByb3BlcnRpZXMiLCJjb2xvcnMiLCJzZXRDb2xvcnMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQYWxldHRlcyIsIlBhbGV0dGUiLCJUb29sdGlwIiwiY29udGVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0IiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9jYWxjdWxhdG9yLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9BbGxDdXN0b21Qcm9wZXJ0aWVzLnRzeCIsInRzL3ZpZXdzL0NvbG9yQ29udHJvbC50c3giLCJ0cy92aWV3cy9DdXN0b21Qcm9wZXJ0aWVzLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3BhbGV0dGUudHN4IiwidHMvdmlld3MvcGFsZXR0ZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==