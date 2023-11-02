System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Badge, __beyond_pkg, hmr;
  _export("Badge", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@0.0.37/badge"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/badge');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4044578100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Badge = Badge;
          var _react = require("react");
          /*bundle*/
          function Badge({
            children,
            value,
            visible = false,
            variant = 'default'
          }) {
            const classes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default'];
            let cls = `pui-badge${classes.includes(variant) ? ` pui-badge--${variant}` : ''}`;
            if (visible) cls += ' pui-badge--visible';
            if (value) cls += ' pui-badge--has-value';
            return _react.default.createElement("div", {
              className: 'pui-badge__container'
            }, children, _react.default.createElement("span", {
              className: cls
            }, value));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Badge",
        "name": "Badge"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Badge') && _export("Badge", Badge = require ? require('./index').Badge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVSxTQUNSQSxLQUFLLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxLQUFLO1lBQUVDLE9BQU8sR0FBRyxLQUFLO1lBQUVDLE9BQU8sR0FBRztVQUFTLENBQUU7WUFDdkUsTUFBTUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO1lBQzNGLElBQUlDLEdBQUcsR0FBRyxZQUFZRCxPQUFPLENBQUNFLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDLEdBQUcsZUFBZUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pGLElBQUlELE9BQU8sRUFBRUcsR0FBRyxJQUFJLHFCQUFxQjtZQUN6QyxJQUFHSixLQUFLLEVBQUVJLEdBQUcsSUFBSSx1QkFBdUI7WUFDeEMsT0FDQ0U7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ25DUixRQUFRLEVBQ1RPO2NBQU1DLFNBQVMsRUFBRUg7WUFBRyxHQUFHSixLQUFLLENBQVEsQ0FDL0I7VUFFUiIsIm5hbWVzIjpbIkJhZGdlIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInZpc2libGUiLCJ2YXJpYW50IiwiY2xhc3NlcyIsImNscyIsImluY2x1ZGVzIiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==