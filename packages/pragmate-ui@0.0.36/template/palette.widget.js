System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "pragmate-ui@0.0.36/template/manager", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/theme-switcher", "pragmate-ui@0.0.36/tooltip"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi0036Components) {
      dependency_6 = _pragmateUi0036Components;
    }, function (_pragmateUi0036ThemeSwitcher) {
      dependency_7 = _pragmateUi0036ThemeSwitcher;
    }, function (_pragmateUi0036Tooltip) {
      dependency_8 = _pragmateUi0036Tooltip;
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
          "vspecifier": "pragmate-ui@0.0.36/template/palette",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/theme-switcher', dependency_7], ['pragmate-ui/tooltip', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-palette-page",
        "vspecifier": "pragmate-ui@0.0.36/template/palette.widget",
        "is": "page",
        "route": "/pui/palette/view"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/template/palette.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 516348069,
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
        hash: 2623334074,
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
            #tones = ['neutral', 'neutralVariant'];
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
        hash: 117806494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SurfacesPanel = SurfacesPanel;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          function SurfacesPanel() {
            const surfaces = Object.keys(_manager.TplManager.root).filter(name => name.includes('surface'));
            console.log(0.1, surfaces);
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, "Surfaces"), _react.default.createElement("section", {
              className: 'surface__container'
            }, surfaces.map((surface, i) => {
              return _react.default.createElement("div", {
                key: `surface.${surface}.${i}`,
                className: 'surface__item',
                style: {
                  backgroundColor: _manager.TplManager.root[surface]
                }
              }, surface);
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2422634778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _palettes = require("./palettes");
          var _SurfacesPanel = require("./SurfacesPanel");
          var _components = require("pragmate-ui/components");
          var _themeSwitcher = require("pragmate-ui/theme-switcher");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = React.useState("palettes");
            const Views = {
              palettes: _palettes.Palettes,
              surfaces: _SurfacesPanel.SurfacesPanel
            };
            const onClick = event => {
              event.preventDefault();
              setView(event.currentTarget.dataset.view);
            };
            const Control = Views[view];
            console.log(12, Control, view);
            return React.createElement("main", {
              className: "page__container"
            }, React.createElement("h2", null, "Template tones"), React.createElement("div", {
              className: "contents"
            }, React.createElement("div", {
              className: "contents__buttons"
            }, React.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary",
              "data-view": "palettes"
            }, "Palettes"), React.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary",
              "data-view": "surfaces"
            }, "Surfaces")), React.createElement(_themeSwitcher.ThemeSwitcher, null)), React.createElement(Control, {
              store: store
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/palette
      *******************************/

      ims.set('./views/palette', {
        hash: 1672721810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palette = void 0;
          var React = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          globalThis.tplManager = _manager.TplManager;
          const Palette = ({
            property,
            store
          }) => {
            const values = ['', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
            return React.createElement(React.Fragment, null, React.createElement("h4", null, property), React.createElement("div", {
              className: `palette-container palette-${property}`
            }, values.map((value, index) => {
              const color = _manager.TplManager.root[`${property}${value}`];
              return React.createElement(_tooltip.Tooltip, {
                key: `${property}.${value}.${index}`,
                content: color
              }, React.createElement("div", {
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
        hash: 1356859574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palettes = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _palette = require("./palette");
          globalThis.tplManager = _manager.TplManager;
          const Palettes = ({
            store
          }) => {
            const output = store.properties.map((tone, i) => {
              return _react.default.createElement(_palette.Palette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            const output2 = store.tones.map((tone, i) => {
              return _react.default.createElement(_palette.Palette, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLEVBQUU7Z0JBQUVxQyxRQUFRLEVBQUV5QyxJQUFJO2dCQUFFdEIsS0FBSyxFQUFFQTtjQUFLLEVBQUk7WUFDdEUsQ0FBQyxDQUFDO1lBRUYsT0FDQ04sNERBQ0UyQixNQUFNLE9BQUdFLE9BQU8sQ0FDZjtVQUVMLENBQUM7VUFBQzlHIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJoZXhUb1JnYiIsImhleCIsImJpZ2ludCIsInBhcnNlSW50IiwicmVwbGFjZSIsInIiLCJnIiwiYiIsImNhbGNQZXJjZW50YWdlVG9CbGFjayIsInJnYiIsIk1hdGgiLCJyb3VuZCIsIm1pbiIsImdldFBhbGV0dGVQb3NpdGlvbiIsInBlcmNlbnRhZ2VUb0JsYWNrIiwic3RlcCIsImNlaWwiLCJyZ2JUb0hleCIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImxlbmd0aCIsImpvaW4iLCJnZW5lcmF0ZVBhbGV0dGUiLCJjb2xvciIsInBvc2l0aW9uIiwicGFsZXR0ZSIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiZmFjdG9yIiwiY2FsYyIsInBvcyIsInJvdW5kZWQiLCJuZXdUb25lIiwiTWF4VG9uZSIsIm1heCIsIm11bHRpcGxpZXIiLCJyZ2JUb0hzbCIsImgiLCJzIiwibCIsImQiLCJoc2xUb0hleCIsImEiLCJmIiwibiIsImsiLCJwYWRTdGFydCIsImdlbmVyYXRlSFNMUGFsZXR0ZSIsImhzbCIsIm5ld0wiLCJwdXNoIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbEhTTCIsImdsb2JhbFRoaXMiLCJUcGxNYW5hZ2VyIiwidmFsdWVzIiwicHJvcGVydGllcyIsInRvbmVzIiwiTWFwIiwiY29sb3JzIiwiaXRlbXMiLCJlbnRyaWVzIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJpbmRleCIsInNldCIsInJvb3QiLCJTdXJmYWNlc1BhbmVsIiwic3VyZmFjZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwibmFtZSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwic3VyZmFjZSIsImtleSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3RvcmUiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwiVmlld3MiLCJwYWxldHRlcyIsIlBhbGV0dGVzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkNvbnRyb2wiLCJCdXR0b24iLCJ2YXJpYW50IiwiVGhlbWVTd2l0Y2hlciIsInRwbE1hbmFnZXIiLCJQYWxldHRlIiwidmFsdWUiLCJUb29sdGlwIiwiY29udGVudCIsIm91dHB1dCIsInRvbmUiLCJvdXRwdXQyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvY2FsY3VsYXRvci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvU3VyZmFjZXNQYW5lbC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9wYWxldHRlLnRzeCIsInRzL3ZpZXdzL3BhbGV0dGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==