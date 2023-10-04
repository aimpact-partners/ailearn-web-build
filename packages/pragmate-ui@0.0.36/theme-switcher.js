System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ThemeSwitcher, __beyond_pkg, hmr;
  _export("ThemeSwitcher", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/theme-switcher"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/theme-switcher');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1179637385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia("(prefers-color-scheme: dark)").matches;
            const themeStorage = localStorage.getItem("theme");
            const defaultTheme = theme ? "dark" : "light";
            const userTheme = themeStorage ? themeStorage === "dark" : defaultTheme === "dark";
            const [isDark, setIsDark] = React.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector("html");
              const theme = isDark ? "light" : "dark";
              container.setAttribute("data-beyond-mode", theme);
              localStorage.setItem("theme", theme);
              setIsDark(target.checked);
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector("html");
              container.setAttribute("data-beyond-mode", themeStorage);
            }, []);
            const icon = isDark ? "moon" : "sun";
            return React.createElement("div", {
              className: "theme"
            }, React.createElement("div", {
              className: "container-theme"
            }, React.createElement(_icons.Icon, {
              icon: icon
            }), React.createElement(_form.Switch, {
              className: "checkbox",
              checked: isDark,
              onChange: handleChange
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./index').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZm9ybSIsIl9pY29ucyIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJjaGVja2VkIiwidXNlRWZmZWN0IiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsU0FBVUcsYUFBYUEsQ0FBQTtZQUN0QyxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXUCxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTVEsU0FBUyxHQUFZSixZQUFZLEdBQ25DQSxZQUFZLEtBQUssTUFBTSxHQUN2QkcsWUFBWSxLQUFLLE1BQU07WUFDM0IsTUFBTSxDQUFDRSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHZixLQUFLLENBQUNnQixRQUFRLENBQVVILFNBQVMsQ0FBQztZQUU5RCxTQUFTSSxZQUFZQSxDQUFDO2NBQUVDO1lBQU0sQ0FBRTtjQUM5QixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRCxNQUFNaEIsS0FBSyxHQUFHUyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07Y0FDdkNLLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFakIsS0FBSyxDQUFDO2NBQ2pESyxZQUFZLENBQUNhLE9BQU8sQ0FBQyxPQUFPLEVBQUVsQixLQUFLLENBQUM7Y0FDcENVLFNBQVMsQ0FBQ0csTUFBTSxDQUFDTSxPQUFPLENBQUM7WUFDM0I7WUFFQXhCLEtBQUssQ0FBQ3lCLFNBQVMsQ0FBQyxNQUFLO2NBQ25CLElBQUksQ0FBQ2hCLFlBQVksRUFBRTtjQUNuQixNQUFNVSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUViLFlBQVksQ0FBQztZQUMxRCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTWlCLElBQUksR0FBV1osTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLO1lBQzVDLE9BQ0VkLEtBQUEsQ0FBQTJCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQU8sR0FDcEI1QixLQUFBLENBQUEyQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUM5QjVCLEtBQUEsQ0FBQTJCLGFBQUEsQ0FBQ3hCLE1BQUEsQ0FBQTBCLElBQUk7Y0FBQ0gsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDcEIxQixLQUFBLENBQUEyQixhQUFBLENBQUN6QixLQUFBLENBQUE0QixNQUFNO2NBQUNGLFNBQVMsRUFBQyxVQUFVO2NBQUNKLE9BQU8sRUFBRVYsTUFBTTtjQUFFaUIsUUFBUSxFQUFFZDtZQUFZLEVBQUksQ0FDcEUsQ0FDRjtVQUVWIn0=