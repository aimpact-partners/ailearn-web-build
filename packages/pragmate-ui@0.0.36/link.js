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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/link"
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
        hash: 4032292245,
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
            const isExternal = href?.startsWith('http');
            const target = isExternal ? '_blank' : '';
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
              target: props.target || target
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwicHJvcHMiLCJpc0V4dGVybmFsIiwic3RhcnRzV2l0aCIsInRhcmdldCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FDUkUsSUFBSUEsQ0FBQztZQUFFQyxJQUFJO1lBQUUsR0FBR0M7VUFBSyxDQUFpRDtZQUM5RSxNQUFNQyxVQUFVLEdBQUdGLElBQUksRUFBRUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxNQUFNQyxNQUFNLEdBQUdGLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUV6QyxNQUFNRyxPQUFPLEdBQUlDLEtBQTBDLElBQVU7Y0FDcEUsSUFBSSxDQUFDSixVQUFVLEVBQUVJLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3ZDRCxLQUFLLENBQUNFLGVBQWUsRUFBRTtjQUV2QixJQUFJUCxLQUFLLENBQUNJLE9BQU8sSUFBSSxPQUFPSixLQUFLLENBQUNJLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ3pESixLQUFLLENBQUNJLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDOztjQUdyQixDQUFDSixVQUFVLElBQUlKLFFBQUEsQ0FBQVcsT0FBTyxDQUFDQyxTQUFTLENBQUNWLElBQUksQ0FBQztZQUN2QyxDQUFDO1lBRUQsTUFBTVcsVUFBVSxHQUFHO2NBQUUsR0FBR1Y7WUFBSyxDQUFFO1lBQy9CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDVyxPQUFPLENBQUNDLElBQUksSUFBSSxPQUFPRixVQUFVLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBRTVELE9BQ0NqQixLQUFBLENBQUFrQixhQUFBO2NBQUEsR0FBT0gsVUFBVTtjQUFFWCxJQUFJLEVBQUVBLElBQUk7Y0FBRUssT0FBTyxFQUFFQSxPQUFPO2NBQUVELE1BQU0sRUFBRUgsS0FBSyxDQUFDRyxNQUFNLElBQUlBO1lBQU0sR0FDN0VILEtBQUssQ0FBQ2MsUUFBUSxDQUNaO1VBRU4ifQ==