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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZm9ybSIsIl9pY29ucyIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJjaGVja2VkIiwidXNlRWZmZWN0IiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxTQUFVRyxhQUFhQSxDQUFBO1lBQ3RDLE1BQU1DLEtBQUssR0FBR0MsVUFBVSxFQUFFQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTztZQUM1RSxNQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNsRCxNQUFNQyxZQUFZLEdBQVdQLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTztZQUNyRCxNQUFNUSxTQUFTLEdBQVlKLFlBQVksR0FDbkNBLFlBQVksS0FBSyxNQUFNLEdBQ3ZCRyxZQUFZLEtBQUssTUFBTTtZQUMzQixNQUFNLENBQUNFLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdmLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBVUgsU0FBUyxDQUFDO1lBRTlELFNBQVNJLFlBQVlBLENBQUM7Y0FBRUM7WUFBTSxDQUFFO2NBQzlCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1oQixLQUFLLEdBQUdTLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN2Q0ssU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVqQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2EsT0FBTyxDQUFDLE9BQU8sRUFBRWxCLEtBQUssQ0FBQztjQUNwQ1UsU0FBUyxDQUFDRyxNQUFNLENBQUNNLE9BQU8sQ0FBQztZQUMzQjtZQUVBeEIsS0FBSyxDQUFDeUIsU0FBUyxDQUFDLE1BQUs7Y0FDbkIsSUFBSSxDQUFDaEIsWUFBWSxFQUFFO2NBQ25CLE1BQU1VLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hERixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRWIsWUFBWSxDQUFDO1lBQzFELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNaUIsSUFBSSxHQUFXWixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDNUMsT0FDRWQsS0FBQSxDQUFBMkIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNwQjVCLEtBQUEsQ0FBQTJCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQzlCNUIsS0FBQSxDQUFBMkIsYUFBQSxDQUFDeEIsTUFBQSxDQUFBMEIsSUFBSTtjQUFDSCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUNwQjFCLEtBQUEsQ0FBQTJCLGFBQUEsQ0FBQ3pCLEtBQUEsQ0FBQTRCLE1BQU07Y0FBQ0YsU0FBUyxFQUFDLFVBQVU7Y0FBQ0osT0FBTyxFQUFFVixNQUFNO2NBQUVpQixRQUFRLEVBQUVkO1lBQVksRUFBSSxDQUNwRSxDQUNGO1VBRVYifQ==