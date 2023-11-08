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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
        hash: 2737622715,
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
            index = 'id',
            control,
            container = 'ul'
          }) {
            const Container = container;
            const Control = control;
            // const output: ReactNode[] = items.map((data, idx) => {
            // 	return <Control key={(data as any)[index as string] || idx} data={data} />;
            // });
            const output = items.map((item, idx) => {
              return _react.default.createElement(Control, {
                key: item[index] || idx,
                data: item
              });
            });
            return _react.default.createElement(Container, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTGlzdCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJjb250cm9sIiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwiQ29udHJvbCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImRhdGEiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBVU87VUFBVyxTQUFVQyxJQUFJQSxDQUFJO1lBQ25DQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsS0FBSyxHQUFHLElBQUk7WUFDWkMsT0FBTztZQUNQQyxTQUFTLEdBQUc7VUFBSSxDQUNGO1lBQ2QsTUFBTUMsU0FBUyxHQUFHRCxTQUFTO1lBQzNCLE1BQU1FLE9BQU8sR0FBR0gsT0FBTztZQUV2QjtZQUNBO1lBQ0E7WUFFQSxNQUFNSSxNQUFNLEdBQWdCUCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEdBQUcsS0FBSTtjQUNuRCxPQUFPYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsYUFBYSxDQUFDTixPQUF5QyxFQUFFO2dCQUNyRU8sR0FBRyxFQUFHSixJQUFZLENBQUNQLEtBQUssQ0FBQyxJQUFJUSxHQUFHO2dCQUNoQ0ksSUFBSSxFQUFFTDtlQUNOLENBQUM7WUFDSCxDQUFDLENBQUM7WUFFRixPQUFPWixNQUFBLENBQUFjLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxTQUFTO2NBQUNKLFNBQVMsRUFBRUE7WUFBUyxHQUFHTSxNQUFNLENBQWE7VUFDN0QifQ==