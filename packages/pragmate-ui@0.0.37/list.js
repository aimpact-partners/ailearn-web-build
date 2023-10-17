System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "pragmate-ui@0.0.37/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/list');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3540357429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          /*bundle */
          function List({
            items,
            className,
            index = 'id',
            Item
          }) {
            const output = items.map((item, index) => {
              React.createElement(Item, {
                key: item[index],
                item: item
              });
            });
            return React.createElement("ul", {
              className: className
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "List",
        "name": "List"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVyxTQUFVQSxJQUFJLENBQUM7WUFBRUMsS0FBSztZQUFFQyxTQUFTO1lBQUVDLEtBQUssR0FBRyxJQUFJO1lBQUVDO1VBQUksQ0FBRTtZQUN4RSxNQUFNQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUosS0FBSyxLQUFJO2NBQ3hDSyxvQkFBQ0osSUFBSTtnQkFBQ0ssR0FBRyxFQUFFRixJQUFJLENBQUNKLEtBQUssQ0FBQztnQkFBRUksSUFBSSxFQUFFQTtjQUFJLEVBQUk7WUFDdkMsQ0FBQyxDQUFDO1lBRUYsT0FBT0M7Y0FBSU4sU0FBUyxFQUFFQTtZQUFTLEdBQUdHLE1BQU0sQ0FBTTtVQUMvQyIsIm5hbWVzIjpbIkxpc3QiLCJpdGVtcyIsImNsYXNzTmFtZSIsImluZGV4IiwiSXRlbSIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsImtleSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19