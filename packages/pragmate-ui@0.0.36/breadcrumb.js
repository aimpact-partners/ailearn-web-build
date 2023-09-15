System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi0036Components) {
      dependency_3 = _pragmateUi0036Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_5 = _beyondJsReact18Widgets101Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3947651463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          function BreadCrumb({
            items,
            border,
            className,
            children
          }) {
            let cls = `breadcrumb-page-header${className ? ` ${className}` : ''}`;
            if (border) cls += ' border-header';
            const [currentRouting, setCurrentRouting] = React.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            let breadcrumbOutput = [];
            if (items) {
              breadcrumbOutput = items.map(([link, label]) => {
                const isChecked = link === _routing.routing.uri.pathname ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';
                return React.createElement("li", {
                  key: `${link} ${label}`
                }, React.createElement(_components.Link, {
                  className: isChecked,
                  href: link
                }, label));
              });
            }
            return React.createElement("header", {
              className: cls
            }, breadcrumbOutput.length > 0 && React.createElement("ul", {
              className: 'breadcrumb'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY29tcG9uZW50cyIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwiYm9yZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbHMiLCJjdXJyZW50Um91dGluZyIsInNldEN1cnJlbnRSb3V0aW5nIiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJicmVhZGNydW1iT3V0cHV0IiwibWFwIiwibGluayIsImxhYmVsIiwiaXNDaGVja2VkIiwiY3JlYXRlRWxlbWVudCIsImtleSIsIkxpbmsiLCJocmVmIiwibGVuZ3RoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVksU0FBVUksVUFBVUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDLE1BQU07WUFBRUMsU0FBUztZQUFFQztVQUFRLENBQUU7WUFDN0UsSUFBSUMsR0FBRyxHQUFHLHlCQUF5QkYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxJQUFJRCxNQUFNLEVBQUVHLEdBQUcsSUFBSSxnQkFBZ0I7WUFFbkMsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdaLEtBQUssQ0FBQ2EsUUFBUSxDQUFDVixRQUFBLENBQUFXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUM7WUFFaEYsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQ2QsUUFBQSxDQUFBVyxPQUFPLENBQUMsRUFBRSxNQUFNRixpQkFBaUIsQ0FBQ1QsUUFBQSxDQUFBVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFFbkUsSUFBSUUsZ0JBQWdCLEdBQUcsRUFBRTtZQUV6QixJQUFJWixLQUFLLEVBQUU7Y0FDVlksZ0JBQWdCLEdBQUdaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLENBQUMsS0FBSTtnQkFDOUMsTUFBTUMsU0FBUyxHQUFHRixJQUFJLEtBQUtqQixRQUFBLENBQUFXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEdBQUcsNEJBQTRCLEdBQUcsbUJBQW1CO2dCQUVwRyxPQUNDaEIsS0FBQSxDQUFBdUIsYUFBQTtrQkFBSUMsR0FBRyxFQUFFLEdBQUdKLElBQUksSUFBSUMsS0FBSztnQkFBRSxHQUMxQnJCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3JCLFdBQUEsQ0FBQXVCLElBQUk7a0JBQUNqQixTQUFTLEVBQUVjLFNBQVM7a0JBQUVJLElBQUksRUFBRU47Z0JBQUksR0FDcENDLEtBQUssQ0FDQSxDQUNIO2NBRVAsQ0FBQyxDQUFDOztZQUdILE9BQ0NyQixLQUFBLENBQUF1QixhQUFBO2NBQVFmLFNBQVMsRUFBRUU7WUFBRyxHQUNwQlEsZ0JBQWdCLENBQUNTLE1BQU0sR0FBRyxDQUFDLElBQUkzQixLQUFBLENBQUF1QixhQUFBO2NBQUlmLFNBQVMsRUFBQztZQUFZLEdBQUVVLGdCQUFnQixDQUFNLEVBQ2xGbEIsS0FBQSxDQUFBdUIsYUFBQSxjQUFNZCxRQUFRLENBQU8sQ0FDYjtVQUVYOzs7Ozs7Ozs7OztVQ3BDQTs7VUFFQW1CLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSJ9