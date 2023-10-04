System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
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
    }, function (_pragmateUi0037Form) {
      dependency_3 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Icons) {
      dependency_4 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/theme-switcher"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/theme-switcher');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1839249894,
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
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
            const [isDark, setIsDark] = React.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector('html');
              const theme = isDark ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIsDark(target.checked);
              console.log(target.checked);
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            const icon = isDark ? 'moon' : 'sun';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZm9ybSIsIl9pY29ucyIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsIlN3aXRjaCIsIm9uQ2hhbmdlIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLFNBQVVHLGFBQWFBLENBQUE7WUFDdkMsTUFBTUMsS0FBSyxHQUFHQyxVQUFVLEVBQUVDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPO1lBQzVFLE1BQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xELE1BQU1DLFlBQVksR0FBV1AsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPO1lBQ3JELE1BQU1RLFNBQVMsR0FBWUosWUFBWSxHQUFHQSxZQUFZLEtBQUssTUFBTSxHQUFHRyxZQUFZLEtBQUssTUFBTTtZQUMzRixNQUFNLENBQUNFLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdmLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBVUgsU0FBUyxDQUFDO1lBRTlELFNBQVNJLFlBQVlBLENBQUM7Y0FBRUM7WUFBTSxDQUFFO2NBQy9CLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1oQixLQUFLLEdBQUdTLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN2Q0ssU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVqQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2EsT0FBTyxDQUFDLE9BQU8sRUFBRWxCLEtBQUssQ0FBQztjQUNwQ1UsU0FBUyxDQUFDRyxNQUFNLENBQUNNLE9BQU8sQ0FBQztjQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE1BQU0sQ0FBQ00sT0FBTyxDQUFDO1lBQzVCO1lBRUF4QixLQUFLLENBQUMyQixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNsQixZQUFZLEVBQUU7Y0FDbkIsTUFBTVUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFYixZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE1BQU1tQixJQUFJLEdBQVdkLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSztZQUM1QyxPQUNDZCxLQUFBLENBQUE2QixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCOUIsS0FBQSxDQUFBNkIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0I5QixLQUFBLENBQUE2QixhQUFBLENBQUMxQixNQUFBLENBQUE0QixJQUFJO2NBQUNILElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3BCNUIsS0FBQSxDQUFBNkIsYUFBQSxDQUFDM0IsS0FBQSxDQUFBOEIsTUFBTTtjQUFDRixTQUFTLEVBQUMsVUFBVTtjQUFDTixPQUFPLEVBQUVWLE1BQU07Y0FBRW1CLFFBQVEsRUFBRWhCO1lBQVksRUFBSSxDQUNuRSxDQUNEO1VBRVIifQ==