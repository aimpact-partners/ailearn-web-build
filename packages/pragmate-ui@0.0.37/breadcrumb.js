System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "uuid@9.0.0", "pragmate-ui@0.0.37/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_4 = _beyondJsReact18Widgets101Hooks;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi0037Components) {
      dependency_6 = _pragmateUi0037Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2268399524,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uuid = require("uuid");
          var _item = require("./item");
          /* bundle */
          function BreadCrumb({
            items,
            border,
            className,
            children,
            ...props
          }) {
            const [currentRouting, setCurrentRouting] = React.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const breadcrumbOutput = items.map(([link, label]) => React.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              link: link,
              label: label,
              currentRouting: currentRouting
            }));
            let cls = `breadcrumb-page-header${className ? ` ${className}` : ''}`;
            if (border) cls += ' border-header';
            return React.createElement("header", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && React.createElement("ul", {
              className: "breadcrumb"
            }, breadcrumbOutput), React.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1706273909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Item({
            link,
            label,
            currentRouting
          }) {
            const isChecked = link === currentRouting ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';
            return _react.default.createElement("li", {
              key: `${link} ${label}`
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              href: link
            }, label));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3495484268,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcm91dGluZyIsIl9ob29rcyIsIl91dWlkIiwiX2l0ZW0iLCJCcmVhZENydW1iIiwiaXRlbXMiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiY3VycmVudFJvdXRpbmciLCJzZXRDdXJyZW50Um91dGluZyIsInVzZVN0YXRlIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwidXNlQmluZGVyIiwiYnJlYWRjcnVtYk91dHB1dCIsIm1hcCIsImxpbmsiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwidjQiLCJjbHMiLCJsZW5ndGgiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsImlzQ2hlY2tlZCIsImRlZmF1bHQiLCJMaW5rIiwiaHJlZiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvaXRlbS50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFZLFNBQVVLLFVBQVVBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxNQUFNO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUssQ0FBVTtZQUMvRixNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2IsS0FBSyxDQUFDYyxRQUFRLENBQUNaLFFBQUEsQ0FBQWEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztZQUVoRixJQUFBZCxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDaEIsUUFBQSxDQUFBYSxPQUFPLENBQUMsRUFBRSxNQUFNRixpQkFBaUIsQ0FBQ1gsUUFBQSxDQUFBYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFDbkUsTUFBTUUsZ0JBQWdCLEdBQUdaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLENBQUMsS0FDaER0QixLQUFBLENBQUF1QixhQUFBLENBQUNsQixLQUFBLENBQUFtQixJQUFJO2NBQUNDLEdBQUcsRUFBRSxJQUFBckIsS0FBQSxDQUFBc0IsRUFBSSxHQUFFO2NBQUVMLElBQUksRUFBRUEsSUFBSTtjQUFFQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRVYsY0FBYyxFQUFFQTtZQUFjLEVBQzNFLENBQUM7WUFFRixJQUFJZSxHQUFHLEdBQUcseUJBQXlCbEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxJQUFJRCxNQUFNLEVBQUVtQixHQUFHLElBQUksZ0JBQWdCO1lBRW5DLE9BQ0MzQixLQUFBLENBQUF1QixhQUFBO2NBQVFkLFNBQVMsRUFBRWtCLEdBQUc7Y0FBQSxHQUFNaEI7WUFBSyxHQUMvQlEsZ0JBQWdCLENBQUNTLE1BQU0sR0FBRyxDQUFDLElBQUk1QixLQUFBLENBQUF1QixhQUFBO2NBQUlkLFNBQVMsRUFBQztZQUFZLEdBQUVVLGdCQUFnQixDQUFNLEVBQ2xGbkIsS0FBQSxDQUFBdUIsYUFBQSxjQUFNYixRQUFRLENBQU8sQ0FDYjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBbUIsTUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixXQUFBLEdBQUE3QixPQUFBO1VBR00sU0FBVXVCLElBQUlBLENBQUM7WUFBRUgsSUFBSTtZQUFFQyxLQUFLO1lBQUVWO1VBQWMsQ0FBUztZQUMxRCxNQUFNbUIsU0FBUyxHQUFHVixJQUFJLEtBQUtULGNBQWMsR0FBRyw0QkFBNEIsR0FBRyxtQkFBbUI7WUFFOUYsT0FDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBVCxhQUFBO2NBQUlFLEdBQUcsRUFBRSxHQUFHSixJQUFJLElBQUlDLEtBQUs7WUFBRSxHQUMxQk8sTUFBQSxDQUFBRyxPQUFBLENBQUFULGFBQUEsQ0FBQ08sV0FBQSxDQUFBRyxJQUFJO2NBQUN4QixTQUFTLEVBQUVzQixTQUFTO2NBQUVHLElBQUksRUFBRWI7WUFBSSxHQUNwQ0MsS0FBSyxDQUNBLENBQ0g7VUFFUDs7Ozs7Ozs7Ozs7VUNkQTs7VUFFQWEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIn0=