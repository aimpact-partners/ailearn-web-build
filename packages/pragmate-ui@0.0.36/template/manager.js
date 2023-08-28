System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_1 = _beyondJsReactive113Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/template/manager"
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
        hash: 1059155255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.lightenHexColor = lightenHexColor;
          function lightenHexColor(hex, percentage) {
            const {
              r,
              g,
              b
            } = hexToRgb(hex);
            const lightenAmount = Math.floor(255 * (percentage / 100));
            const newR = Math.min(255, r + lightenAmount);
            const newG = Math.min(255, g + lightenAmount);
            const newB = Math.min(255, b + lightenAmount);
            return rgbToHex(newR, newG, newB);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1267497722,
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
            constructor() {
              super();
              const properties = this.getCustomProperties();
              this.#root = properties;
            }
            getCustomProperties() {
              const stylesheetHref = new URL('./styles.css', window.location.origin).href;
              const cssPropsObject = (0, _properties.getCSSCustomPropsObjectFromStylesheet)(stylesheetHref);
              console.log(10, stylesheetHref);
              return cssPropsObject;
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
        hash: 1639769540,
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
          const getCSSCustomPropIndexFromStylesheet = stylesheetHref => {
            // Find the specified stylesheet in the document's stylesheets collection
            const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.href === stylesheetHref);
            if (!stylesheet) {
              return [];
            }
            // cssRules is array-like, so we convert it to an array
            const ruleProps = Array.from(stylesheet.cssRules).filter(isStyleRule).reduce((propValArr, rule) => {
              const styleRule = rule; // Assert rule as CSSStyleRule
              //@ts-ignore
              const props = Array.from(styleRule.style).map(propName => [propName.trim(), styleRule.style.getPropertyValue(propName).trim()])
              // Discard any props that don't start with "--". Custom props are required to.
              .filter(([propName]) => propName.startsWith('--'));
              return propValArr.concat(props);
            }, []);
            return ruleProps;
          };
          exports.getCSSCustomPropIndexFromStylesheet = getCSSCustomPropIndexFromStylesheet;
          const getCSSCustomPropsObjectFromStylesheet = stylesheetHref => {
            const index = getCSSCustomPropIndexFromStylesheet(stylesheetHref);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVlLEtBQUssQ0FBQyxLQUFJO2NBQ25DO2NBQ0EsTUFBTUMsa0JBQWtCLEdBQUdYLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDaUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3pESixHQUFHLENBQUNHLGtCQUFrQixDQUFDLEdBQUdELEtBQUs7WUFDaEMsQ0FBQyxDQUFDO1lBRUYsT0FBT0YsR0FBRztVQUNYLENBQUM7VUFFRDtVQUVBO1VBQUFyQyIsIm5hbWVzIjpbImhleFRvUmdiIiwiaGV4IiwicmVwbGFjZSIsImJpZ2ludCIsInBhcnNlSW50IiwiciIsImciLCJiIiwicmdiVG9IZXgiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiaHNsVG9IZXgiLCJoIiwicyIsImwiLCJhIiwiTWF0aCIsIm1pbiIsImYiLCJuIiwiayIsImNvbG9yIiwibWF4Iiwicm91bmQiLCJkYXJrZW5IZXhDb2xvciIsInBlcmNlbnRhZ2UiLCJkYXJrZW5BbW91bnQiLCJmbG9vciIsIm5ld1IiLCJuZXdHIiwibmV3QiIsImxpZ2h0ZW5IZXhDb2xvciIsImxpZ2h0ZW5BbW91bnQiLCJUZW1wbGF0ZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicm9vdCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldEN1c3RvbVByb3BlcnRpZXMiLCJzdHlsZXNoZWV0SHJlZiIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaHJlZiIsImNzc1Byb3BzT2JqZWN0IiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiLCJUcGxNYW5hZ2VyIiwiaXNTYW1lRG9tYWluIiwic3R5bGVTaGVldCIsImluZGV4T2YiLCJpc1N0eWxlUnVsZSIsInJ1bGUiLCJ0eXBlIiwiZ2V0Q1NTQ3VzdG9tUHJvcEluZGV4IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsImZpbHRlciIsInJlZHVjZSIsImZpbmFsQXJyIiwic2hlZXQiLCJydWxlUHJvcHMiLCJjc3NSdWxlcyIsInByb3BWYWxBcnIiLCJzdHlsZVJ1bGUiLCJwcm9wcyIsInN0eWxlIiwibWFwIiwicHJvcE5hbWUiLCJ0cmltIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0YXJ0c1dpdGgiLCJjb25jYXQiLCJ0b0NhbWVsQ2FzZSIsInN0ciIsIl8iLCJnMSIsInRlc3QiLCJ0b1VwcGVyQ2FzZSIsImdldENTU0N1c3RvbVByb3BzT2JqZWN0IiwiaW5kZXgiLCJvYmoiLCJmb3JFYWNoIiwidmFsdWUiLCJjYW1lbENhc2VkUHJvcE5hbWUiLCJzbGljZSIsImdldENTU0N1c3RvbVByb3BJbmRleEZyb21TdHlsZXNoZWV0Iiwic3R5bGVzaGVldCIsImZpbmQiLCJnZXRDU1NDdXN0b21Qcm9wc09iamVjdEZyb21TdHlsZXNoZWV0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2xvcnMvY29udmVydGVycy50cyIsImNvbG9ycy9kYXJrZW4udHMiLCJjb2xvcnMvbGlnaGVuLnRzIiwiaW5kZXgudHMiLCJwcm9wZXJ0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=