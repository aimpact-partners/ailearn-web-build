System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "pragmate-ui@0.0.37/template/manager", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/theme-switcher", "pragmate-ui@0.0.37/tooltip", "@beyond-js/react-18-widgets@1.0.1/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_pragmateUi0037TemplateManager) {
      dependency_4 = _pragmateUi0037TemplateManager;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_6 = _pragmateUi0037Components;
    }, function (_pragmateUi0037ThemeSwitcher) {
      dependency_7 = _pragmateUi0037ThemeSwitcher;
    }, function (_pragmateUi0037Tooltip) {
      dependency_8 = _pragmateUi0037Tooltip;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/pui/template/palette"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/theme-switcher', dependency_7], ['pragmate-ui/tooltip', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.0.37/pui/template/palette"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/pui/template/palette');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3287896070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            load() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /**********************************
      INTERNAL MODULE: ./store/calculator
      **********************************/

      ims.set('./store/calculator', {
        hash: 1781491306,
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
          const initialColor = [255, 165, 0];
          const initialHSL = rgbToHsl(initialColor);
          const palette = generateHSLPalette(initialHSL);
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1422469136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _manager = require("pragmate-ui/template/manager");
          var _calculator = require("./calculator");
          globalThis.TplManager = _manager.TplManager;
          class StoreManager {
            #values;
            get values() {
              return this.#values;
            }
            #properties = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'error'];
            get properties() {
              return this.#properties;
            }
            #tones = ['neutral'];
            get tones() {
              return this.#tones;
            }
            #colors = new Map();
            get colors() {
              return this.#colors;
            }
            get items() {
              return [...this.colors.entries()];
            }
            constructor() {
              this.properties.forEach((property, index) => {
                this.#colors.set(property, (0, _calculator.generatePalette)(_manager.TplManager.root[property]));
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/SurfacesPanel
      *************************************/

      ims.set('./views/SurfacesPanel', {
        hash: 1638992548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SurfacesPanel = SurfacesPanel;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          console.log(0.1, _manager.TplManager);
          function SurfacesPanel() {
            // const surfaces = Object.keys(TplManager.root).filter(name => name.includes('surface'));
            const lightSurfaces = Array.from(_manager.TplManager.light.style).filter(ele => ele.startsWith('--surface'));
            const darkSurfaces = Array.from(_manager.TplManager.dark.style).filter(ele => ele.startsWith('--surface'));
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, "Light Surfaces"), _react.default.createElement("section", {
              className: 'surface__container surface__container--light'
            }, lightSurfaces.map((surface, i) => {
              return _react.default.createElement("div", {
                key: `surface.${surface}.${i}`,
                className: 'surface__item',
                style: {
                  backgroundColor: _manager.TplManager.light.style.getPropertyValue(surface)
                }
              }, surface);
            })), _react.default.createElement("h3", null, "Dark Surfaces"), _react.default.createElement("section", {
              className: 'surface__container surface__container--dark'
            }, darkSurfaces.map((surface, i) => {
              return _react.default.createElement("div", {
                key: `surface.${surface}.${i}`,
                className: 'surface__item',
                style: {
                  backgroundColor: _manager.TplManager.dark.style.getPropertyValue(surface)
                }
              }, surface);
            })), _react.default.createElement("hr", null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3677613095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _palettes = require("./palettes");
          var _SurfacesPanel = require("./SurfacesPanel");
          var _components = require("pragmate-ui/components");
          var _themeSwitcher = require("pragmate-ui/theme-switcher");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState('palettes');
            const Views = {
              palettes: _palettes.Palettes,
              surfaces: _SurfacesPanel.SurfacesPanel
            };
            const onClick = event => {
              event.preventDefault();
              setView(event.currentTarget.dataset.view);
            };
            const Control = Views[view];
            return _react.default.createElement("main", {
              className: 'component__container'
            }, _react.default.createElement("h2", null, "Template tones"), _react.default.createElement("div", {
              className: 'contents'
            }, _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: 'primary',
              "data-view": 'palettes'
            }, "Palettes"), _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: 'primary',
              "data-view": 'surfaces'
            }, "Surfaces")), _react.default.createElement(_themeSwitcher.ThemeSwitcher, null)), _react.default.createElement(Control, {
              store: store
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/neutral-pallete
      ***************************************/

      ims.set('./views/neutral-pallete', {
        hash: 3951672452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NeutralPalette = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          globalThis.tplManager = _manager.TplManager;
          const NeutralPalette = ({
            property,
            store
          }) => {
            const elements = Object.keys(_manager.TplManager.root).filter(i => i.startsWith(property));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, property), _react.default.createElement("div", {
              className: `palette-container--neutral palette-${property}`
            }, elements.map((value, index) => {
              const color = _manager.TplManager.root[value];
              if (value === '') return null;
              return _react.default.createElement("div", {
                key: `${property}.${value}.${index}`
              }, _react.default.createElement("h5", null, value), _react.default.createElement(_tooltip.Tooltip, {
                key: `${property}.${value}.${index}`,
                content: color
              }, _react.default.createElement("div", {
                className: `palette__color-container color-${value}`,
                "data-color": color,
                "data-name": value,
                style: {
                  backgroundColor: color
                }
              })));
            })));
          };
          exports.NeutralPalette = NeutralPalette;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/palette
      *******************************/

      ims.set('./views/palette', {
        hash: 1269297561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palette = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          globalThis.tplManager = _manager.TplManager;
          const Palette = ({
            property,
            store
          }) => {
            const values = ['', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, property), _react.default.createElement("div", {
              className: `palette-container palette-${property}`
            }, values.map((value, index) => {
              const color = _manager.TplManager.root[`${property}${value}`];
              if (value === '') return null;
              return _react.default.createElement(_tooltip.Tooltip, {
                key: `${property}.${value}.${index}`,
                content: color
              }, _react.default.createElement("div", {
                className: `palette__color-container color-${value}`,
                "data-color": color,
                "data-name": `${property}${value}`,
                style: {
                  backgroundColor: color
                }
              }, value));
            })));
          };
          exports.Palette = Palette;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/palettes
      ********************************/

      ims.set('./views/palettes', {
        hash: 401120785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palettes = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _palette = require("./palette");
          var _neutralPallete = require("./neutral-pallete");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          globalThis.tplManager = _manager.TplManager;
          const Palettes = ({
            store
          }) => {
            (0, _hooks.useBinder)([_manager.TplManager], () => {
              const surfaces = Object.keys(_manager.TplManager.root).filter(name => name.includes('surface'));
              console.log('TplManager updated', _manager.TplManager.root.surface);
            });
            const output = store.properties.map((tone, i) => {
              return _react.default.createElement(_palette.Palette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            const output2 = store.tones.map((tone, i) => {
              return _react.default.createElement(_neutralPallete.NeutralPalette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, " ", output2);
          };
          exports.Palettes = Palettes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsImhleFRvUmdiIiwiaGV4IiwiYmlnaW50IiwicGFyc2VJbnQiLCJyZXBsYWNlIiwiciIsImciLCJiIiwiY2FsY1BlcmNlbnRhZ2VUb0JsYWNrIiwicmdiIiwiTWF0aCIsInJvdW5kIiwibWluIiwiZ2V0UGFsZXR0ZVBvc2l0aW9uIiwicGVyY2VudGFnZVRvQmxhY2siLCJzdGVwIiwiY2VpbCIsInJnYlRvSGV4IiwibWFwIiwieCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiam9pbiIsImdlbmVyYXRlUGFsZXR0ZSIsImNvbG9yIiwicG9zaXRpb24iLCJwYWxldHRlIiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJmYWN0b3IiLCJjYWxjIiwicG9zIiwicm91bmRlZCIsIm5ld1RvbmUiLCJNYXhUb25lIiwibWF4IiwibXVsdGlwbGllciIsInJnYlRvSHNsIiwiaCIsInMiLCJsIiwiZCIsImhzbFRvSGV4IiwiYSIsImYiLCJuIiwiayIsInBhZFN0YXJ0IiwiZ2VuZXJhdGVIU0xQYWxldHRlIiwiaHNsIiwibmV3TCIsInB1c2giLCJpbml0aWFsQ29sb3IiLCJpbml0aWFsSFNMIiwiZ2xvYmFsVGhpcyIsIlRwbE1hbmFnZXIiLCJ2YWx1ZXMiLCJwcm9wZXJ0aWVzIiwidG9uZXMiLCJNYXAiLCJjb2xvcnMiLCJpdGVtcyIsImVudHJpZXMiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJwcm9wZXJ0eSIsImluZGV4Iiwic2V0Iiwicm9vdCIsImNvbnNvbGUiLCJsb2ciLCJTdXJmYWNlc1BhbmVsIiwibGlnaHRTdXJmYWNlcyIsImxpZ2h0Iiwic3R5bGUiLCJmaWx0ZXIiLCJlbGUiLCJzdGFydHNXaXRoIiwiZGFya1N1cmZhY2VzIiwiZGFyayIsIlJlYWN0IiwiY2xhc3NOYW1lIiwic3VyZmFjZSIsImtleSIsImJhY2tncm91bmRDb2xvciIsImdldFByb3BlcnR5VmFsdWUiLCJzdG9yZSIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJWaWV3cyIsInBhbGV0dGVzIiwiUGFsZXR0ZXMiLCJzdXJmYWNlcyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJ2YXJpYW50IiwiVGhlbWVTd2l0Y2hlciIsInRwbE1hbmFnZXIiLCJOZXV0cmFsUGFsZXR0ZSIsImVsZW1lbnRzIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJQYWxldHRlIiwibmFtZSIsImluY2x1ZGVzIiwib3V0cHV0IiwidG9uZSIsIm91dHB1dDIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9jYWxjdWxhdG9yLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9TdXJmYWNlc1BhbmVsLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL25ldXRyYWwtcGFsbGV0ZS50c3giLCJ0cy92aWV3cy9wYWxldHRlLnRzeCIsInRzL3ZpZXdzL3BhbGV0dGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19