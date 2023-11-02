System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
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
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/empty"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 584763668,
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
            const text = props.text ? props.text : 'No hay registros';
            const cls = `${props.className ?? ''} pui-empty-section`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              className: "content"
            }, props.icon && React.createElement(_icons.Icon, {
              icon: props.icon
            }), React.createElement("h3", null, text), props.additionalElement && props.additionalElement, props.children && props.children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQVFPO1VBQVUsU0FDUkEsS0FBSyxDQUFDQyxLQUFhO1lBQzNCLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLGtCQUFrQjtZQUN6RCxNQUFNQyxHQUFHLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxTQUFTLElBQUksRUFBRSxvQkFBb0I7WUFFeEQsT0FDQ0M7Y0FBS0QsU0FBUyxFQUFFRDtZQUFHLEdBQ2xCRTtjQUFLRCxTQUFTLEVBQUM7WUFBUyxHQUN0QkgsS0FBSyxDQUFDSyxJQUFJLElBQUlELG9CQUFDRSxXQUFJO2NBQUNELElBQUksRUFBRUwsS0FBSyxDQUFDSztZQUFJLEVBQUksRUFDekNELGdDQUFLSCxJQUFJLENBQU0sRUFDZEQsS0FBSyxDQUFDTyxpQkFBaUIsSUFBSVAsS0FBSyxDQUFDTyxpQkFBaUIsRUFDbERQLEtBQUssQ0FBQ1EsUUFBUSxJQUFJUixLQUFLLENBQUNRLFFBQVEsQ0FDNUIsQ0FDRDtVQUVSIiwibmFtZXMiOlsiRW1wdHkiLCJwcm9wcyIsInRleHQiLCJjbHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImljb24iLCJJY29uIiwiYWRkaXRpb25hbEVsZW1lbnQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvZW1wdHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19