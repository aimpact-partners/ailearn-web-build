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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGluayIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiQnJlYWRDcnVtYiIsInRpdGxlIiwiaXRlbXMiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNscyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsInVzZUJpbmRlciIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsaW5rIiwibGFiZWwiLCJpc0NoZWNrZWQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiTGluayIsImhyZWYiLCJsZW5ndGgiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBRU87VUFBWSxTQUFVSSxVQUFVQSxDQUFDO1lBQ3RDQyxLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDO1VBQVEsQ0FDVDtZQUNDLElBQUlDLEdBQUcsR0FBRyx5QkFBeUJGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsSUFBSUQsTUFBTSxFQUFFRyxHQUFHLElBQUksZ0JBQWdCO1lBRW5DLE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHYixLQUFLLENBQUNjLFFBQVEsQ0FDeERYLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FDckI7WUFFRCxJQUFBYixNQUFBLENBQUFjLFNBQVMsRUFBQyxDQUFDZixRQUFBLENBQUFZLE9BQU8sQ0FBQyxFQUFFLE1BQU1GLGlCQUFpQixDQUFDVixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQztZQUVuRSxJQUFJRSxnQkFBZ0IsR0FBRyxFQUFFO1lBRXpCLElBQUlaLEtBQUssRUFBRTtjQUNUWSxnQkFBZ0IsR0FBR1osS0FBSyxDQUFDYSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssQ0FBQyxLQUFJO2dCQUM3QyxNQUFNQyxTQUFTLEdBQ2JGLElBQUksS0FBS2xCLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsR0FDekIsNEJBQTRCLEdBQzVCLG1CQUFtQjtnQkFFekIsT0FDRWpCLEtBQUEsQ0FBQXdCLGFBQUE7a0JBQUlDLEdBQUcsRUFBRSxHQUFHSixJQUFJLElBQUlDLEtBQUs7Z0JBQUUsR0FDekJ0QixLQUFBLENBQUF3QixhQUFBLENBQUN0QixLQUFBLENBQUF3QixJQUFJO2tCQUFDakIsU0FBUyxFQUFFYyxTQUFTO2tCQUFFSSxJQUFJLEVBQUVOO2dCQUFJLEdBQ25DQyxLQUFLLENBQ0QsQ0FDSjtjQUVULENBQUMsQ0FBQzs7WUFHSixPQUNFdEIsS0FBQSxDQUFBd0IsYUFBQTtjQUFRZixTQUFTLEVBQUVFO1lBQUcsR0FDcEJYLEtBQUEsQ0FBQXdCLGFBQUEsYUFBS2xCLEtBQUssQ0FBTSxFQUNmYSxnQkFBZ0IsQ0FBQ1MsTUFBTSxHQUFHLENBQUMsSUFDMUI1QixLQUFBLENBQUF3QixhQUFBO2NBQUlmLFNBQVMsRUFBQztZQUFZLEdBQUVVLGdCQUFnQixDQUM3QyxFQUNEbkIsS0FBQSxDQUFBd0IsYUFBQSxjQUFNZCxRQUFRLENBQU8sQ0FDZDtVQUViOzs7Ozs7Ozs7OztVQ2xEQTs7VUFFQW1CLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSJ9