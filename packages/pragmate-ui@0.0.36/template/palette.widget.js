System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "pragmate-ui@0.0.36/template/manager", "react@18.2.0", "pragmate-ui@0.0.36/tooltip", "pragmate-ui@0.0.36/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_5 = _react;
    }, function (_pragmateUi0036Tooltip) {
      dependency_6 = _pragmateUi0036Tooltip;
    }, function (_pragmateUi0036Code) {
      dependency_7 = _pragmateUi0036Code;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['react', dependency_5], ['pragmate-ui/tooltip', dependency_6], ['pragmate-ui/code', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-palette-page",
        "vspecifier": "pragmate-ui@0.0.36/template/palette.widget",
        "is": "page",
        "route": "/pui/palette"
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
        hash: 70007257,
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
            console.log('calculo', 100 - percentageToBlack, step);
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
              console.log(0.2, newTone);
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
          console.log(palette);
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1074319895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _manager = require("pragmate-ui/template/manager");
          var _calculator = require("./calculator");
          class StoreManager {
            #values;
            get values() {
              return this.#values;
            }
            #properties = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'error'];
            get properties() {
              return this.#properties;
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1487917330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _palette = require("./palette");
          /*bundle*/
          function View({
            store
          }) {
            const output = store.properties.map((tone, i) => {
              console.log(1, tone);
              return React.createElement(_palette.Palette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            return React.createElement("div", null, React.createElement("h2", null, "Template tones"), React.createElement("main", {
              className: 'page__container'
            }, output));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/palette
      *******************************/

      ims.set('./views/palette', {
        hash: 685085968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palette = void 0;
          var React = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          var _code = require("pragmate-ui/code");
          globalThis.tplManager = _manager.TplManager;
          const Palette = ({
            property,
            store
          }) => {
            const values = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
            const item = store.colors.get(property);
            if (!item) return null;
            const variables = item.map((value, index) => {
              console.log(0.1, value, property);
              return `--${property}-${values[index]}: ${value};`;
            }).join('\n');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: `palette-container palette-${property}`
            }, item.map(value => {
              const color = value;
              return React.createElement(_tooltip.Tooltip, {
                content: color
              }, React.createElement("div", {
                key: `${property}.${value}`,
                className: `palette__color-container color-${value}`,
                style: {
                  backgroundColor: value
                }
              }, value));
            })), React.createElement("div", null, React.createElement(_code.Code, {
              language: 'css'
            }, variables)));
          };
          exports.Palette = Palette;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsS0FBSyxLQUFJO2NBQ3JCbEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFaUUsS0FBSyxFQUFFakIsUUFBUSxDQUFDO2NBQ2pDLE9BQU8sS0FBS0EsUUFBUSxJQUFJUixNQUFNLENBQUNTLEtBQUssQ0FBQyxLQUFLZ0IsS0FBSyxHQUFHO1lBQ25ELENBQUMsQ0FBQyxDQUNEM0QsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVaLE9BQ0NrRCwwQ0FDQ0E7Y0FBS0csU0FBUyxFQUFFLDZCQUE2QlgsUUFBUTtZQUFFLEdBQ3JEYyxJQUFJLENBQUM1RCxHQUFHLENBQUMrRCxLQUFLLElBQUc7Y0FDakIsTUFBTXpELEtBQUssR0FBR3lELEtBQUs7Y0FFbkIsT0FDQ1Qsb0JBQUNVLGdCQUFPO2dCQUFDQyxPQUFPLEVBQUUzRDtjQUFLLEdBQ3RCZ0Q7Z0JBQ0NFLEdBQUcsRUFBRSxHQUFHVixRQUFRLElBQUlpQixLQUFLLEVBQUU7Z0JBQzNCTixTQUFTLEVBQUUsa0NBQWtDTSxLQUFLLEVBQUU7Z0JBQ3BERyxLQUFLLEVBQUU7a0JBQUVDLGVBQWUsRUFBRUo7Z0JBQUs7Y0FBRSxHQUVoQ0EsS0FBSyxDQUNELENBQ0c7WUFFWixDQUFDLENBQUMsQ0FDRyxFQUNOVCxpQ0FDQ0Esb0JBQUNjLFVBQUk7Y0FBQ0MsUUFBUSxFQUFDO1lBQUssR0FBRVAsU0FBUyxDQUFRLENBQ2xDLENBQ0o7VUFFTCxDQUFDO1VBQUNuRiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiaGV4VG9SZ2IiLCJoZXgiLCJiaWdpbnQiLCJwYXJzZUludCIsInJlcGxhY2UiLCJyIiwiZyIsImIiLCJjYWxjUGVyY2VudGFnZVRvQmxhY2siLCJyZ2IiLCJNYXRoIiwicm91bmQiLCJtaW4iLCJnZXRQYWxldHRlUG9zaXRpb24iLCJwZXJjZW50YWdlVG9CbGFjayIsInN0ZXAiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsInJnYlRvSGV4IiwibWFwIiwieCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiam9pbiIsImdlbmVyYXRlUGFsZXR0ZSIsImNvbG9yIiwicG9zaXRpb24iLCJwYWxldHRlIiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJmYWN0b3IiLCJjYWxjIiwicG9zIiwicm91bmRlZCIsIm5ld1RvbmUiLCJNYXhUb25lIiwibWF4IiwibXVsdGlwbGllciIsInJnYlRvSHNsIiwiaCIsInMiLCJsIiwiZCIsImhzbFRvSGV4IiwiYSIsImYiLCJuIiwiayIsInBhZFN0YXJ0IiwiZ2VuZXJhdGVIU0xQYWxldHRlIiwiaHNsIiwibmV3TCIsInB1c2giLCJpbml0aWFsQ29sb3IiLCJpbml0aWFsSFNMIiwidmFsdWVzIiwicHJvcGVydGllcyIsIk1hcCIsImNvbG9ycyIsIml0ZW1zIiwiZW50cmllcyIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiaW5kZXgiLCJzZXQiLCJUcGxNYW5hZ2VyIiwicm9vdCIsInN0b3JlIiwib3V0cHV0IiwidG9uZSIsIlJlYWN0IiwiUGFsZXR0ZSIsImtleSIsImNsYXNzTmFtZSIsImdsb2JhbFRoaXMiLCJ0cGxNYW5hZ2VyIiwiaXRlbSIsImdldCIsInZhcmlhYmxlcyIsInZhbHVlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkNvZGUiLCJsYW5ndWFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2NhbGN1bGF0b3IudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3BhbGV0dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=