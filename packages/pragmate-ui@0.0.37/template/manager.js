System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, hslToHex, TplManager, getCSSCustomPropIndex, __beyond_pkg, hmr;
  _export({
    hslToHex: void 0,
    TplManager: void 0,
    getCSSCustomPropIndex: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/template/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./colors/converters
      ***********************************/
      ims.set('./colors/converters', {
        hash: 3901188594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.hexToRgb = hexToRgb;
          exports.hslToHex = hslToHex;
          exports.rgbToHex = rgbToHex;
          function hexToRgb(hex) {
            // Remove the '#' symbol if present
            hex = hex.replace(/^#/, '');
            // Convert the hexadecimal values to decimal
            const bigint = parseInt(hex, 16);
            // Extract the RGB components
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return {
              r,
              g,
              b
            };
          }
          function rgbToHex(r, g, b) {
            return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
          }
          /*bundle */
          function hslToHex(h, s, l) {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
            };

            return `#${f(0)}${f(8)}${f(4)}`;
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./colors/darken
      *******************************/

      ims.set('./colors/darken', {
        hash: 3264955651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.darkenHexColor = darkenHexColor;
          var _converters = require("./converters");
          function darkenHexColor(hex, percentage) {
            const {
              r,
              g,
              b
            } = (0, _converters.hexToRgb)(hex);
            const darkenAmount = Math.floor(255 * (percentage / 100));
            const newR = Math.max(0, r - darkenAmount);
            const newG = Math.max(0, g - darkenAmount);
            const newB = Math.max(0, b - darkenAmount);
            return (0, _converters.rgbToHex)(newR, newG, newB);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./colors/lighen
      *******************************/

      ims.set('./colors/lighen', {
        hash: 4269504386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.lightenHexColor = lightenHexColor;
          var _converters = require("./converters");
          function lightenHexColor(hex, percentage) {
            const {
              r,
              g,
              b
            } = (0, _converters.hexToRgb)(hex);
            const lightenAmount = Math.floor(255 * (percentage / 100));
            const newR = Math.min(255, r + lightenAmount);
            const newG = Math.min(255, g + lightenAmount);
            const newB = Math.min(255, b + lightenAmount);
            return (0, _converters.rgbToHex)(newR, newG, newB);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4097915562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TplManager = exports.TemplateManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _properties = require("./properties");
          class TemplateManager extends _model.ReactiveModel {
            #root;
            get root() {
              return this.#root;
            }
            #rootSelector;
            #theme;
            #stylesheet;
            #dark;
            get dark() {
              return this.#dark;
            }
            #light;
            get light() {
              return this.#light;
            }
            constructor() {
              super();
              this.#rootSelector = document.querySelector('html');
              this.#theme = this.#rootSelector.dataset.beyondMode ?? 'light';
              const properties = this.getCustomProperties(this.#theme);
              this.#root = properties;
              this.initialise();
            }
            getCustomProperties(theme) {
              const stylesheetHref = new URL('./styles.css', window.location.origin).href;
              const cssPropsObject = (0, _properties.getCSSCustomPropsObjectFromStylesheet)(stylesheetHref, theme);
              return cssPropsObject;
            }
            #getProperties() {
              const stylesheetHref = new URL('./styles.css', window.location.origin).href;
              const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.href.split('?')[0] === stylesheetHref);
              const rules = Array.from(stylesheet.cssRules);
              const filter = (rule, property) => rule instanceof CSSStyleRule && rule.selectorText === property;
              this.#dark = rules.find(rule => filter(rule, ':root[data-beyond-mode="dark"]'));
              this.#light = rules.find(rule => filter(rule, ':root[data-beyond-mode="light"]'));
              this.#stylesheet = stylesheet;
            }
            initialise() {
              this.#getProperties();
              const observe = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'data-beyond-mode') {
                    this.#theme = this.#rootSelector.dataset.beyondMode ?? 'light';
                    this.#getProperties();
                    this.#root = this.getCustomProperties(this.#theme);
                    this.trigger('change');
                  }
                });
              });
              observe.observe(this.#rootSelector, {
                attributes: true
              });
            }
          }
          exports.TemplateManager = TemplateManager;
          /*bundle */
          const TplManager = new TemplateManager();
          exports.TplManager = TplManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./properties
      ****************************/

      ims.set('./properties', {
        hash: 3007273995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toCamelCase = exports.getCSSCustomPropsObjectFromStylesheet = exports.getCSSCustomPropsObject = exports.getCSSCustomPropIndexFromStylesheet = exports.getCSSCustomPropIndex = void 0;
          /*
           Check if the stylesheet is internal or hosted on the current domain.
           If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
           See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes
           
           NOTE: One problem this could raise is hosting stylesheets on a CDN with a
           different domain. Those would be cross origin, so you can't access them.
          */
          const isSameDomain = styleSheet => {
            // Internal style blocks won't have an href value
            if (!styleSheet.href) {
              return true;
            }
            return styleSheet.href.indexOf(window.location.origin) === 0;
          };
          /*
             Determine if the given rule is a CSSStyleRule
             See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
            */
          const isStyleRule = rule => rule.type === 1;
          /**
           * Get all custom properties on a page
           * @return array<array[string, string]>
           * ex; [["--color-accent", "#b9f500"], ["--color-text", "#252525"], ...]
           */
          /*bundle*/
          const getCSSCustomPropIndex = () => {
            // styleSheets is array-like, so we convert it to an array.
            // Filter out any stylesheets not on this domain
            return Array.from(document.styleSheets).filter(isSameDomain).reduce((finalArr, sheet) => {
              // cssRules is array-like, so we convert it to an array
              const ruleProps = Array.from(sheet.cssRules).filter(isStyleRule).reduce((propValArr, rule) => {
                const styleRule = rule; // Assert rule as CSSStyleRule
                //@ts-ignore
                const props = Array.from(styleRule.style).map(propName => [propName.trim(), styleRule.style.getPropertyValue(propName).trim()])
                // Discard any props that don't start with "--". Custom props are required to.
                .filter(([propName]) => propName.startsWith('--'));
                return propValArr.concat(props);
              }, []);
              return finalArr.concat(ruleProps);
            }, []);
          };
          exports.getCSSCustomPropIndex = getCSSCustomPropIndex;
          const toCamelCase = str => {
            return str.replace(/-([a-z0-9])/g, function (_, g1) {
              return /\d/.test(g1) ? g1 : g1.toUpperCase();
            });
          };
          exports.toCamelCase = toCamelCase;
          const getCSSCustomPropsObject = () => {
            const index = getCSSCustomPropIndex();
            const obj = {};
            index.forEach(([propName, value]) => {
              // Remove the leading "--" and convert to camel case
              const camelCasedPropName = toCamelCase(propName.slice(2));
              obj[camelCasedPropName] = value;
            });
            return obj;
          };
          exports.getCSSCustomPropsObject = getCSSCustomPropsObject;
          const getCSSCustomPropIndexFromStylesheet = (stylesheetHref, theme) => {
            // Find the specified stylesheet in the document's stylesheets collection
            const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.href.split('?')[0] === stylesheetHref);
            if (!stylesheet) {
              return [];
            }
            const getCustomPropForTheme = (propName, theme, styleSheet) => {
              const targetSelector = `:root[data-beyond-mode="${theme}"]`;
              for (const rule of Array.from(styleSheet.cssRules)) {
                if (isStyleRule(rule) && rule.selectorText === targetSelector) {
                  // console.log(121, rule);
                  const styleRule = rule;
                  const propValue = styleRule.style.getPropertyValue(propName).trim();
                  return propValue;
                }
              }
              return null;
            };
            // cssRules is array-like, so we convert it to an array
            const ruleProps = Array.from(stylesheet.cssRules).filter(isStyleRule).reduce((propValArr, rule) => {
              const styleRule = rule; // Assert rule as CSSStyleRule
              //@ts-ignore
              const props = Array.from(styleRule.style).map(propName => {
                // getComputedStyle
                propName = propName.trim();
                // const value = getCustomPropForTheme(propName, theme, stylesheet);
                const value = styleRule.style.getPropertyValue(propName).trim();
                return [propName, value.trim()];
              })
              // Discard any props that don't start with "--". Custom props are required to.
              .filter(([propName]) => propName.startsWith('--'));
              // console.log(100, props);
              return propValArr.concat(props);
            }, []);
            return ruleProps;
          };
          exports.getCSSCustomPropIndexFromStylesheet = getCSSCustomPropIndexFromStylesheet;
          const getCSSCustomPropsObjectFromStylesheet = (stylesheetHref, theme) => {
            const index = getCSSCustomPropIndexFromStylesheet(stylesheetHref, theme);
            const obj = {};
            index.forEach(([propName, value]) => {
              // Remove the leading "--" and convert to camel case
              const camelCasedPropName = toCamelCase(propName.slice(2));
              obj[camelCasedPropName] = value;
            });
            return obj;
          };
          // const cssCustomPropIndex: Array<[string, string]> = getCSSCustomPropIndex();
          // Add the swatches to the DOM
          exports.getCSSCustomPropsObjectFromStylesheet = getCSSCustomPropsObjectFromStylesheet;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./colors/converters",
        "from": "hslToHex",
        "name": "hslToHex"
      }, {
        "im": "./index",
        "from": "TplManager",
        "name": "TplManager"
      }, {
        "im": "./properties",
        "from": "getCSSCustomPropIndex",
        "name": "getCSSCustomPropIndex"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'hslToHex') && _export("hslToHex", hslToHex = require ? require('./colors/converters').hslToHex : value);
        (require || prop === 'TplManager') && _export("TplManager", TplManager = require ? require('./index').TplManager : value);
        (require || prop === 'getCSSCustomPropIndex') && _export("getCSSCustomPropIndex", getCSSCustomPropIndex = require ? require('./properties').getCSSCustomPropIndex : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDQUFDNkIsUUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ25EO2NBQ0EsT0FBT1IsVUFBVSxDQUFDUyxNQUFNLENBQUNQLEtBQUssQ0FBQztZQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRVAsT0FBT0gsU0FBUztVQUNqQixDQUFDO1VBQUNUO1VBRUssTUFBTW9DLHFDQUFxQyxHQUFHLENBQ3BEbEUsY0FBc0IsRUFDdEJELEtBQWEsS0FDZ0M7WUFDN0MsTUFBTTBELEtBQUssR0FBR0ssbUNBQW1DLENBQUM5RCxjQUFjLEVBQUVELEtBQUssQ0FBQztZQUN4RSxNQUFNMkQsR0FBRyxHQUE4QixFQUFFO1lBRXpDRCxLQUFLLENBQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDcUIsUUFBUSxFQUFFYyxLQUFLLENBQUMsS0FBSTtjQUNuQztjQUNBLE1BQU1DLGtCQUFrQixHQUFHVixXQUFXLENBQUNMLFFBQVEsQ0FBQ2dCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUN6REgsR0FBRyxDQUFDRSxrQkFBa0IsQ0FBQyxHQUFHRCxLQUFLO1lBQ2hDLENBQUMsQ0FBQztZQUVGLE9BQU9ELEdBQUc7VUFDWCxDQUFDO1VBRUQ7VUFFQTtVQUFBNUIiLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsInJlcGxhY2UiLCJiaWdpbnQiLCJwYXJzZUludCIsInIiLCJnIiwiYiIsInJnYlRvSGV4IiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhzbFRvSGV4IiwiaCIsInMiLCJsIiwiYSIsIk1hdGgiLCJtaW4iLCJmIiwibiIsImsiLCJjb2xvciIsIm1heCIsInJvdW5kIiwiZGFya2VuSGV4Q29sb3IiLCJwZXJjZW50YWdlIiwiZGFya2VuQW1vdW50IiwiZmxvb3IiLCJuZXdSIiwibmV3RyIsIm5ld0IiLCJsaWdodGVuSGV4Q29sb3IiLCJsaWdodGVuQW1vdW50IiwiVGVtcGxhdGVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJvb3QiLCJkYXJrIiwibGlnaHQiLCJjb25zdHJ1Y3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJiZXlvbmRNb2RlIiwicHJvcGVydGllcyIsImdldEN1c3RvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwidGhlbWUiLCJzdHlsZXNoZWV0SHJlZiIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaHJlZiIsImNzc1Byb3BzT2JqZWN0Iiwic3R5bGVzaGVldCIsIkFycmF5IiwiZnJvbSIsInN0eWxlU2hlZXRzIiwiZmluZCIsInNoZWV0Iiwic3BsaXQiLCJydWxlcyIsImNzc1J1bGVzIiwiZmlsdGVyIiwicnVsZSIsInByb3BlcnR5IiwiQ1NTU3R5bGVSdWxlIiwic2VsZWN0b3JUZXh0Iiwib2JzZXJ2ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJ0eXBlIiwiYXR0cmlidXRlTmFtZSIsInRyaWdnZXIiLCJhdHRyaWJ1dGVzIiwiZXhwb3J0cyIsIlRwbE1hbmFnZXIiLCJpc1NhbWVEb21haW4iLCJzdHlsZVNoZWV0IiwiaW5kZXhPZiIsImlzU3R5bGVSdWxlIiwiZ2V0Q1NTQ3VzdG9tUHJvcEluZGV4IiwicmVkdWNlIiwiZmluYWxBcnIiLCJydWxlUHJvcHMiLCJwcm9wVmFsQXJyIiwic3R5bGVSdWxlIiwicHJvcHMiLCJzdHlsZSIsIm1hcCIsInByb3BOYW1lIiwidHJpbSIsImdldFByb3BlcnR5VmFsdWUiLCJzdGFydHNXaXRoIiwiY29uY2F0IiwidG9DYW1lbENhc2UiLCJzdHIiLCJfIiwiZzEiLCJ0ZXN0IiwidG9VcHBlckNhc2UiLCJnZXRDU1NDdXN0b21Qcm9wc09iamVjdCIsImluZGV4Iiwib2JqIiwidmFsdWUiLCJjYW1lbENhc2VkUHJvcE5hbWUiLCJzbGljZSIsImdldENTU0N1c3RvbVByb3BJbmRleEZyb21TdHlsZXNoZWV0IiwiZ2V0Q3VzdG9tUHJvcEZvclRoZW1lIiwidGFyZ2V0U2VsZWN0b3IiLCJwcm9wVmFsdWUiLCJnZXRDU1NDdXN0b21Qcm9wc09iamVjdEZyb21TdHlsZXNoZWV0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2xvcnMvY29udmVydGVycy50cyIsImNvbG9ycy9kYXJrZW4udHMiLCJjb2xvcnMvbGlnaGVuLnRzIiwiaW5kZXgudHMiLCJwcm9wZXJ0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=