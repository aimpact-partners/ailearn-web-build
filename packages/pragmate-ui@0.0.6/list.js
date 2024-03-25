System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/list');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1674754363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          /*bundle */
          function List({
            items,
            className,
            children,
            index = 'id',
            specs,
            childrenPosition = 'top',
            control,
            container = 'ul'
          }) {
            const Container = container;
            const Control = control;
            try {
              const output = items.map((item, idx) => {
                const element = _react.default.createElement(Control, {
                  key: item[index] || idx,
                  index: idx,
                  data: item,
                  item,
                  specs
                });
                // if (container === 'ul') return <li key={idx}>{element}</li>;
                return element;
              });
              return _react.default.createElement(Container, {
                className: className
              }, childrenPosition === 'top' && children ? children : null, output, childrenPosition === 'bottom' && children ? children : null);
            } catch (e) {
              console.error(`invalid items in list0`, items);
            }
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1342560892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTGlzdCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpbmRleCIsInNwZWNzIiwiY2hpbGRyZW5Qb3NpdGlvbiIsImNvbnRyb2wiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJDb250cm9sIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImlkeCIsImVsZW1lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHTztVQUFXLFNBQVVDLElBQUlBLENBQUk7WUFDbkNDLEtBQUs7WUFDTEMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLEtBQUssR0FBRyxJQUFJO1lBQ1pDLEtBQUs7WUFDTEMsZ0JBQWdCLEdBQUcsS0FBSztZQUN4QkMsT0FBTztZQUNQQyxTQUFTLEdBQUc7VUFBSSxDQUNGO1lBQ2QsTUFBTUMsU0FBUyxHQUFHRCxTQUFTO1lBQzNCLE1BQU1FLE9BQU8sR0FBR0gsT0FBTztZQUV2QixJQUFJO2NBQ0gsTUFBTUksTUFBTSxHQUFnQlYsS0FBSyxDQUFDVyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEtBQUk7Z0JBQ25ELE1BQU1DLE9BQU8sR0FBR2pCLE1BQUEsQ0FBQWtCLE9BQUssQ0FBQ0MsYUFBYSxDQUNsQ1AsT0FBNkYsRUFDN0Y7a0JBQ0NRLEdBQUcsRUFBR0wsSUFBWSxDQUFDVCxLQUFLLENBQUMsSUFBSVUsR0FBRztrQkFDaENWLEtBQUssRUFBRVUsR0FBRztrQkFDVkssSUFBSSxFQUFFTixJQUFJO2tCQUNWQSxJQUFJO2tCQUNKUjtpQkFDQSxDQUNEO2dCQUNEO2dCQUNBLE9BQU9VLE9BQU87Y0FDZixDQUFDLENBQUM7Y0FDRixPQUNDakIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFNBQVM7Z0JBQUNQLFNBQVMsRUFBRUE7Y0FBUyxHQUM3QkksZ0JBQWdCLEtBQUssS0FBSyxJQUFJSCxRQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUFJLEVBQ3hEUSxNQUFNLEVBQ05MLGdCQUFnQixLQUFLLFFBQVEsSUFBSUgsUUFBUSxHQUFHQSxRQUFRLEdBQUcsSUFBSSxDQUNqRDthQUViLENBQUMsT0FBT2lCLENBQUMsRUFBRTtjQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRXJCLEtBQUssQ0FBQzs7VUFFaEQ7Ozs7Ozs7Ozs7O1VDekNBOztVQUVBc0IsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIn0=