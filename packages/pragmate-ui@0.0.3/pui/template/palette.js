System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "pragmate-ui@0.0.3/template/manager", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/theme-switcher", "pragmate-ui@0.0.3/tooltip", "@beyond-js/react-18-widgets@1.0.3/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
    }, function (_pragmateUi003TemplateManager) {
      dependency_4 = _pragmateUi003TemplateManager;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_6 = _pragmateUi003Components;
    }, function (_pragmateUi003ThemeSwitcher) {
      dependency_7 = _pragmateUi003ThemeSwitcher;
    }, function (_pragmateUi003Tooltip) {
      dependency_8 = _pragmateUi003Tooltip;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/pui/template/palette"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/theme-switcher', dependency_7], ['pragmate-ui/tooltip', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.0.3/pui/template/palette"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/pui/template/palette');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJoZXhUb1JnYiIsImhleCIsImJpZ2ludCIsInBhcnNlSW50IiwicmVwbGFjZSIsInIiLCJnIiwiYiIsImNhbGNQZXJjZW50YWdlVG9CbGFjayIsInJnYiIsIk1hdGgiLCJyb3VuZCIsIm1pbiIsImdldFBhbGV0dGVQb3NpdGlvbiIsInBlcmNlbnRhZ2VUb0JsYWNrIiwic3RlcCIsImNlaWwiLCJyZ2JUb0hleCIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImxlbmd0aCIsImpvaW4iLCJnZW5lcmF0ZVBhbGV0dGUiLCJjb2xvciIsInBvc2l0aW9uIiwicGFsZXR0ZSIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiZmFjdG9yIiwiY2FsYyIsInBvcyIsInJvdW5kZWQiLCJuZXdUb25lIiwiTWF4VG9uZSIsIm1heCIsIm11bHRpcGxpZXIiLCJyZ2JUb0hzbCIsImgiLCJzIiwibCIsImQiLCJoc2xUb0hleCIsImEiLCJmIiwibiIsImsiLCJwYWRTdGFydCIsImdlbmVyYXRlSFNMUGFsZXR0ZSIsImhzbCIsIm5ld0wiLCJwdXNoIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbEhTTCIsIl9tYW5hZ2VyIiwiX2NhbGN1bGF0b3IiLCJnbG9iYWxUaGlzIiwiVHBsTWFuYWdlciIsInZhbHVlcyIsInByb3BlcnRpZXMiLCJ0b25lcyIsImNvbG9ycyIsIk1hcCIsIml0ZW1zIiwiZW50cmllcyIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiaW5kZXgiLCJzZXQiLCJyb290IiwiX3JlYWN0IiwiY29uc29sZSIsImxvZyIsIlN1cmZhY2VzUGFuZWwiLCJsaWdodFN1cmZhY2VzIiwibGlnaHQiLCJzdHlsZSIsImZpbHRlciIsImVsZSIsInN0YXJ0c1dpdGgiLCJkYXJrU3VyZmFjZXMiLCJkYXJrIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdXJmYWNlIiwia2V5IiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIl9wYWxldHRlcyIsIl9TdXJmYWNlc1BhbmVsIiwiX2NvbXBvbmVudHMiLCJfdGhlbWVTd2l0Y2hlciIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJWaWV3cyIsInBhbGV0dGVzIiwiUGFsZXR0ZXMiLCJzdXJmYWNlcyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJ2YXJpYW50IiwiVGhlbWVTd2l0Y2hlciIsIl90b29sdGlwIiwidHBsTWFuYWdlciIsIk5ldXRyYWxQYWxldHRlIiwiZWxlbWVudHMiLCJPYmplY3QiLCJrZXlzIiwiRnJhZ21lbnQiLCJ2YWx1ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiUGFsZXR0ZSIsIl9wYWxldHRlIiwiX25ldXRyYWxQYWxsZXRlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwibmFtZSIsImluY2x1ZGVzIiwib3V0cHV0IiwidG9uZSIsIm91dHB1dDIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9jYWxjdWxhdG9yLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL1N1cmZhY2VzUGFuZWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uZXV0cmFsLXBhbGxldGUudHN4IiwiL3RzL3ZpZXdzL3BhbGV0dGUudHN4IiwiL3RzL3ZpZXdzL3BhbGV0dGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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