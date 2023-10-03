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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwicHJvcHMiLCJpc0V4dGVybmFsIiwidGFyZ2V0Iiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUNSRSxJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQWlEO1lBQzlFLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEtBQUssUUFBUTtZQUU1QyxNQUFNQyxPQUFPLEdBQUlDLEtBQTBDLElBQVU7Y0FDcEUsSUFBSSxDQUFDSCxVQUFVLEVBQUVHLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3ZDRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUV2QixJQUFJTixLQUFLLENBQUNHLE9BQU8sSUFBSSxPQUFPSCxLQUFLLENBQUNHLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ3pESCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDOztjQUdyQixDQUFDSCxVQUFVLElBQUlKLFFBQUEsQ0FBQVUsT0FBTyxDQUFDQyxTQUFTLENBQUNULElBQUksQ0FBQztZQUN2QyxDQUFDO1lBRUQsTUFBTVUsVUFBVSxHQUFHO2NBQUUsR0FBR1Q7WUFBSyxDQUFFO1lBQy9CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDVSxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPRixVQUFVLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBRTVELE9BQ0NoQixLQUFBLENBQUFpQixhQUFBO2NBQUEsR0FBT0gsVUFBVTtjQUFFVixJQUFJLEVBQUVBLElBQUk7Y0FBRUksT0FBTyxFQUFFQSxPQUFPO2NBQUVELE1BQU0sRUFBRUYsS0FBSyxDQUFDRTtZQUFNLEdBQ25FRixLQUFLLENBQUNhLFFBQVEsQ0FDWjtVQUVOIn0=