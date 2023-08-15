System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Link) {
      dependency_3 = _pragmateUi0036Link;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_5 = _beyondJsReact18Widgets101Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/link', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1883707752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var React = require("react");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          function BreadCrumb({
            title,
            items,
            border,
            className,
            children
          }) {
            let cls = `breadcrumb-page-header${className ? ` ${className}` : ""}`;
            if (border) cls += " border-header";
            const [currentRouting, setCurrentRouting] = React.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            let breadcrumbOutput = [];
            if (items) {
              breadcrumbOutput = items.map(([link, label]) => {
                const isChecked = link === _routing.routing.uri.pathname ? "breadcrumbs__item--checked" : "breadcrumbs__item";
                return React.createElement("li", {
                  key: `${link} ${label}`
                }, React.createElement(_link.Link, {
                  className: isChecked,
                  href: link
                }, label));
              });
            }
            return React.createElement("header", {
              className: cls
            }, React.createElement("h2", null, title), breadcrumbOutput.length > 0 && React.createElement("ul", {
              className: "breadcrumb"
            }, breadcrumbOutput), React.createElement("div", null, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2102452935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BreadCrumb",
        "name": "BreadCrumb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BreadCrumb') && _export("BreadCrumb", BreadCrumb = require ? require('./index').BreadCrumb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBO1VBRU87VUFBWSxTQUFVQSxVQUFVLENBQUM7WUFDdENDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEM7VUFBUSxDQUNUO1lBQ0MsSUFBSUMsR0FBRyxHQUFHLHlCQUF5QkYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxJQUFJRCxNQUFNLEVBQUVHLEdBQUcsSUFBSSxnQkFBZ0I7WUFFbkMsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUN4REMsZ0JBQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQ3JCO1lBRUQsb0JBQVMsRUFBQyxDQUFDRixnQkFBTyxDQUFDLEVBQUUsTUFBTUgsaUJBQWlCLENBQUNHLGdCQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFFbkUsSUFBSUMsZ0JBQWdCLEdBQUcsRUFBRTtZQUV6QixJQUFJWixLQUFLLEVBQUU7Y0FDVFksZ0JBQWdCLEdBQUdaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLENBQUMsS0FBSTtnQkFDN0MsTUFBTUMsU0FBUyxHQUNiRixJQUFJLEtBQUtMLGdCQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxHQUN6Qiw0QkFBNEIsR0FDNUIsbUJBQW1CO2dCQUV6QixPQUNFSjtrQkFBSVUsR0FBRyxFQUFFLEdBQUdILElBQUksSUFBSUMsS0FBSztnQkFBRSxHQUN6QlIsb0JBQUNXLFVBQUk7a0JBQUNoQixTQUFTLEVBQUVjLFNBQVM7a0JBQUVHLElBQUksRUFBRUw7Z0JBQUksR0FDbkNDLEtBQUssQ0FDRCxDQUNKO2NBRVQsQ0FBQyxDQUFDOztZQUdKLE9BQ0VSO2NBQVFMLFNBQVMsRUFBRUU7WUFBRyxHQUNwQkcsZ0NBQUtSLEtBQUssQ0FBTSxFQUNmYSxnQkFBZ0IsQ0FBQ1EsTUFBTSxHQUFHLENBQUMsSUFDMUJiO2NBQUlMLFNBQVMsRUFBQztZQUFZLEdBQUVVLGdCQUFnQixDQUM3QyxFQUNETCxpQ0FBTUosUUFBUSxDQUFPLENBQ2Q7VUFFYjs7Ozs7Ozs7Ozs7VUNsREE7O1VBRUFrQjtZQUNBQztVQUNBIiwibmFtZXMiOlsiQnJlYWRDcnVtYiIsInRpdGxlIiwiaXRlbXMiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNscyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiYnJlYWRjcnVtYk91dHB1dCIsIm1hcCIsImxpbmsiLCJsYWJlbCIsImlzQ2hlY2tlZCIsImtleSIsIkxpbmsiLCJocmVmIiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19