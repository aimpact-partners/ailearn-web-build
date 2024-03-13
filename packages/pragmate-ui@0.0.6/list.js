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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.25"]]);
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
        hash: 571331918,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTGlzdCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpbmRleCIsInNwZWNzIiwiY2hpbGRyZW5Qb3NpdGlvbiIsImNvbnRyb2wiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJDb250cm9sIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImlkeCIsImVsZW1lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsU0FBVUMsSUFBSUEsQ0FBSTtZQUNuQ0MsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsS0FBSyxHQUFHLElBQUk7WUFDWkMsS0FBSztZQUNMQyxnQkFBZ0IsR0FBRyxLQUFLO1lBQ3hCQyxPQUFPO1lBQ1BDLFNBQVMsR0FBRztVQUFJLENBQ0Y7WUFDZCxNQUFNQyxTQUFTLEdBQUdELFNBQVM7WUFDM0IsTUFBTUUsT0FBTyxHQUFHSCxPQUFPO1lBRXZCLElBQUk7Y0FDSCxNQUFNSSxNQUFNLEdBQWdCVixLQUFLLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEdBQUcsS0FBSTtnQkFDbkQsTUFBTUMsT0FBTyxHQUFHakIsTUFBQSxDQUFBa0IsT0FBSyxDQUFDQyxhQUFhLENBQ2xDUCxPQUE2RixFQUM3RjtrQkFDQ1EsR0FBRyxFQUFHTCxJQUFZLENBQUNULEtBQUssQ0FBQyxJQUFJVSxHQUFHO2tCQUNoQ1YsS0FBSyxFQUFFVSxHQUFHO2tCQUNWSyxJQUFJLEVBQUVOLElBQUk7a0JBQ1ZBLElBQUk7a0JBQ0pSO2lCQUNBLENBQ0Q7Z0JBQ0Q7Z0JBQ0EsT0FBT1UsT0FBTztjQUNmLENBQUMsQ0FBQztjQUNGLE9BQ0NqQixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsU0FBUztnQkFBQ1AsU0FBUyxFQUFFQTtjQUFTLEdBQzdCSSxnQkFBZ0IsS0FBSyxLQUFLLElBQUlILFFBQVEsR0FBR0EsUUFBUSxHQUFHLElBQUksRUFDeERRLE1BQU0sRUFDTkwsZ0JBQWdCLEtBQUssUUFBUSxJQUFJSCxRQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUFJLENBQ2pEO2FBRWIsQ0FBQyxPQUFPaUIsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFckIsS0FBSyxDQUFDOztVQUVoRCJ9