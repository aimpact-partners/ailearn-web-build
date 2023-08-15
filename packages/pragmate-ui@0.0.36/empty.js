System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Empty, __beyond_pkg, hmr;
  _export("Empty", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
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
          "vspecifier": "pragmate-ui@0.0.36/empty"
        },
        "type": "code",
        "name": "empty"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 3338372180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Empty(props) {
            const text = props.text ? props.text : "No hay registros";
            const cls = `${props.className ?? ""} pragmate-element-empty`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              className: "content"
            }, props.icon && React.createElement(_icons.Icon, {
              icon: props.icon
            }), React.createElement("h3", null, text), props.additionalElement ? props.additionalElement : null, props.children ? props.children : null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./empty",
        "from": "Empty",
        "name": "Empty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Empty') && _export("Empty", Empty = require ? require('./empty').Empty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJFbXB0eSIsInByb3BzIiwidGV4dCIsImNscyIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpY29uIiwiSWNvbiIsImFkZGl0aW9uYWxFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvY29kZS90cy9lbXB0eS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFRTztVQUFVLFNBQ1JFLEtBQUtBLENBQUNDLEtBQVk7WUFDekIsTUFBTUMsSUFBSSxHQUFXRCxLQUFLLENBQUNDLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJLEdBQUcsa0JBQWtCO1lBQ2pFLE1BQU1DLEdBQUcsR0FBRyxHQUFHRixLQUFLLENBQUNHLFNBQVMsSUFBSSxFQUFFLHlCQUF5QjtZQUM3RCxPQUNFUCxLQUFBLENBQUFRLGFBQUE7Y0FBS0QsU0FBUyxFQUFFRDtZQUFHLEdBQ2pCTixLQUFBLENBQUFRLGFBQUE7Y0FBS0QsU0FBUyxFQUFDO1lBQVMsR0FDckJILEtBQUssQ0FBQ0ssSUFBSSxJQUFJVCxLQUFBLENBQUFRLGFBQUEsQ0FBQ04sTUFBQSxDQUFBUSxJQUFJO2NBQUNELElBQUksRUFBRUwsS0FBSyxDQUFDSztZQUFJLEVBQUksRUFDekNULEtBQUEsQ0FBQVEsYUFBQSxhQUFLSCxJQUFJLENBQU0sRUFDZEQsS0FBSyxDQUFDTyxpQkFBaUIsR0FBR1AsS0FBSyxDQUFDTyxpQkFBaUIsR0FBRyxJQUFJLEVBQ3hEUCxLQUFLLENBQUNRLFFBQVEsR0FBR1IsS0FBSyxDQUFDUSxRQUFRLEdBQUcsSUFBSSxDQUNuQyxDQUNGO1VBRVYifQ==