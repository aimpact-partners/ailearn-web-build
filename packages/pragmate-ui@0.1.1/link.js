System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Link, __beyond_pkg, hmr;
  _export("Link", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/link"
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
        hash: 1400209474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            console.log(100, 'aja');
            const onClick = event => {
              console.log(100, 'aja');
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              console.log(12, isExternal, href);
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return _react.default.createElement("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsInByb3BzIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUNSRSxJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQWlEO1lBQzlFLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEtBQUssUUFBUTtZQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUN2QixNQUFNQyxPQUFPLEdBQUlDLEtBQTBDLElBQVU7Y0FDcEVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7Y0FDdkIsSUFBSSxDQUFDSCxVQUFVLEVBQUVLLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3ZDRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUV2QixJQUFJUixLQUFLLENBQUNLLE9BQU8sSUFBSSxPQUFPTCxLQUFLLENBQUNLLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ3pETCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDOztjQUVyQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFSCxVQUFVLEVBQUVGLElBQUksQ0FBQztjQUNqQyxDQUFDRSxVQUFVLElBQUlKLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxTQUFTLENBQUNYLElBQUksQ0FBQztZQUN2QyxDQUFDO1lBRUQsTUFBTVksVUFBVSxHQUFHO2NBQUUsR0FBR1g7WUFBSyxDQUFFO1lBQy9CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDWSxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPRixVQUFVLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBRTVELE9BQ0NsQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBQSxHQUFPSixVQUFVO2NBQUVaLElBQUksRUFBRUEsSUFBSTtjQUFFTSxPQUFPLEVBQUVBLE9BQU87Y0FBRUgsTUFBTSxFQUFFRixLQUFLLENBQUNFO1lBQU0sR0FDbkVGLEtBQUssQ0FBQ2dCLFFBQVEsQ0FDWjtVQUVOIiwiaWdub3JlTGlzdCI6W119