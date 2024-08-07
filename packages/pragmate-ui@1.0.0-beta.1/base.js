System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "framer-motion@10.18.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BaseComponent, IPUIProps, __beyond_pkg, hmr;
  _export({
    BaseComponent: void 0,
    IPUIProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.3-test.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 749252255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseComponent = BaseComponent;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // Create the base component using a function with a constructor
          function BaseComponent({
            as = 'div',
            motion: useMotion = false,
            children,
            ...restProps
          }) {
            // Create the element dynamically
            const Element = useMotion ? _framerMotion.motion[as] : as;
            return _react.default.createElement(Element, restProps, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1461510006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BaseComponent",
        "name": "BaseComponent"
      }, {
        "im": "./types",
        "from": "IPUIProps",
        "name": "IPUIProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BaseComponent') && _export("BaseComponent", BaseComponent = require ? require('./index').BaseComponent : value);
        (require || prop === 'IPUIProps') && _export("IPUIProps", IPUIProps = require ? require('./types').IPUIProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkJhc2VDb21wb25lbnQiLCJhcyIsIm1vdGlvbiIsInVzZU1vdGlvbiIsImNoaWxkcmVuIiwicmVzdFByb3BzIiwiRWxlbWVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQVVPLFdBRFA7VUFDaUIsU0FBVUUsYUFBYUEsQ0FBa0I7WUFDekRDLEVBQUUsR0FBRyxLQUFLO1lBQ1ZDLE1BQU0sRUFBRUMsU0FBUyxHQUFHLEtBQUs7WUFDekJDLFFBQVE7WUFDUixHQUFHQztVQUFTLENBQ1c7WUFDdkI7WUFDQSxNQUFNQyxPQUFPLEdBQUdILFNBQVMsR0FBR0osYUFBQSxDQUFBRyxNQUFNLENBQUNELEVBQUUsQ0FBQyxHQUFHQSxFQUFFO1lBRTNDLE9BQU9KLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxhQUFhLENBQUNGLE9BQU8sRUFBRUQsU0FBUyxFQUFFRCxRQUFRLENBQUM7VUFDekQ7Ozs7Ozs7Ozs7O1VDckJBOztVQUVBSyxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=