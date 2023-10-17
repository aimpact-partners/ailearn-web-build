System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Link, __beyond_pkg, hmr;
  _export("Link", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.0.37/link"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1276259973,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return React.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Link",
        "name": "Link"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Link') && _export("Link", Link = require ? require('./index').Link : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsU0FDUkEsSUFBSSxDQUFDO1lBQUVDLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQWlEO1lBQzlFLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEtBQUssUUFBUTtZQUU1QyxNQUFNQyxPQUFPLEdBQUlDLEtBQTBDLElBQVU7Y0FDcEUsSUFBSSxDQUFDSCxVQUFVLEVBQUVHLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3ZDRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUV2QixJQUFJTixLQUFLLENBQUNHLE9BQU8sSUFBSSxPQUFPSCxLQUFLLENBQUNHLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ3pESCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDOztjQUdyQixDQUFDSCxVQUFVLElBQUlNLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNVSxVQUFVLEdBQUc7Y0FBRSxHQUFHVDtZQUFLLENBQUU7WUFDL0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUNVLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJLE9BQU9GLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFFNUQsT0FDQ0M7Y0FBQSxHQUFPSCxVQUFVO2NBQUVWLElBQUksRUFBRUEsSUFBSTtjQUFFSSxPQUFPLEVBQUVBLE9BQU87Y0FBRUQsTUFBTSxFQUFFRixLQUFLLENBQUNFO1lBQU0sR0FDbkVGLEtBQUssQ0FBQ2EsUUFBUSxDQUNaO1VBRU4iLCJuYW1lcyI6WyJMaW5rIiwiaHJlZiIsInByb3BzIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsIlJlYWN0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==