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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/list');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2996862726,
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
            // const output: ReactNode[] = items.map((data, idx) => {
            // 	return <Control key={(data as any)[index as string] || idx} data={data} />;
            // });
            try {
              const output = items.map((item, idx) => {
                return _react.default.createElement(Control, {
                  key: item[index] || idx,
                  index: idx,
                  data: item,
                  item,
                  specs
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTGlzdCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpbmRleCIsInNwZWNzIiwiY2hpbGRyZW5Qb3NpdGlvbiIsImNvbnRyb2wiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJDb250cm9sIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImlkeCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBWU87VUFBVyxTQUFVQyxJQUFJQSxDQUFJO1lBQ25DQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxLQUFLLEdBQUcsSUFBSTtZQUNaQyxLQUFLO1lBQ0xDLGdCQUFnQixHQUFHLEtBQUs7WUFDeEJDLE9BQU87WUFDUEMsU0FBUyxHQUFHO1VBQUksQ0FDRjtZQUNkLE1BQU1DLFNBQVMsR0FBR0QsU0FBUztZQUMzQixNQUFNRSxPQUFPLEdBQUdILE9BQU87WUFFdkI7WUFDQTtZQUNBO1lBQ0EsSUFBSTtjQUNILE1BQU1JLE1BQU0sR0FBZ0JWLEtBQUssQ0FBQ1csR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsR0FBRyxLQUFJO2dCQUNuRCxPQUFPaEIsTUFBQSxDQUFBaUIsT0FBSyxDQUFDQyxhQUFhLENBQ3pCTixPQUE2RixFQUM3RjtrQkFDQ08sR0FBRyxFQUFHSixJQUFZLENBQUNULEtBQUssQ0FBQyxJQUFJVSxHQUFHO2tCQUNoQ1YsS0FBSyxFQUFFVSxHQUFHO2tCQUNWSSxJQUFJLEVBQUVMLElBQUk7a0JBQ1ZBLElBQUk7a0JBQ0pSO2lCQUNBLENBQ0Q7Y0FDRixDQUFDLENBQUM7Y0FDRixPQUNDUCxNQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsU0FBUztnQkFBQ1AsU0FBUyxFQUFFQTtjQUFTLEdBQzdCSSxnQkFBZ0IsS0FBSyxLQUFLLElBQUlILFFBQVEsR0FBR0EsUUFBUSxHQUFHLElBQUksRUFDeERRLE1BQU0sRUFDTkwsZ0JBQWdCLEtBQUssUUFBUSxJQUFJSCxRQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUFJLENBQ2pEO2FBRWIsQ0FBQyxPQUFPZ0IsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFcEIsS0FBSyxDQUFDOztVQUVoRCJ9