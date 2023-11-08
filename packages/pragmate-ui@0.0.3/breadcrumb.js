System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.3/hooks", "uuid@9.0.1", "pragmate-ui@0.0.3/components"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_4 = _beyondJsReact18Widgets103Hooks;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi003Components) {
      dependency_6 = _pragmateUi003Components;
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
          "vspecifier": "pragmate-ui@0.0.3/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 141844739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var _react = require("react");
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
            const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const breadcrumbOutput = items.map(([link, label]) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              link: link,
              label: label,
              currentRouting: currentRouting
            }));
            let cls = `breadcrumb-page-header${className ? ` ${className}` : ''}`;
            if (border) cls += ' border-header';
            return _react.default.createElement("header", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: "breadcrumb"
            }, breadcrumbOutput), _react.default.createElement("div", null, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwiYm9yZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJicmVhZGNydW1iT3V0cHV0IiwibWFwIiwibGluayIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsIkl0ZW0iLCJrZXkiLCJ2NCIsImNscyIsImxlbmd0aCIsIl9jb21wb25lbnRzIiwiaXNDaGVja2VkIiwiTGluayIsImhyZWYiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2l0ZW0udHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO1VBRU87VUFBWSxTQUFVSyxVQUFVQSxDQUFDO1lBQUNDLEtBQUs7WUFBRUMsTUFBTTtZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVM7WUFDN0YsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUNiLFFBQUEsQ0FBQWMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztZQUVoRixJQUFBZixNQUFBLENBQUFnQixTQUFTLEVBQUMsQ0FBQ2pCLFFBQUEsQ0FBQWMsT0FBTyxDQUFDLEVBQUUsTUFBTUgsaUJBQWlCLENBQUNYLFFBQUEsQ0FBQWMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLE1BQU1FLGdCQUFnQixHQUFHYixLQUFLLENBQUNjLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxDQUFDLEtBQ2hEdkIsTUFBQSxDQUFBYyxPQUFBLENBQUFVLGFBQUEsQ0FBQ25CLEtBQUEsQ0FBQW9CLElBQUk7Y0FBQ0MsR0FBRyxFQUFFLElBQUF0QixLQUFBLENBQUF1QixFQUFJLEdBQUU7Y0FBRUwsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLEtBQUssRUFBRUEsS0FBSztjQUFFWCxjQUFjLEVBQUVBO1lBQWMsRUFDM0UsQ0FBQztZQUVGLElBQUlnQixHQUFHLEdBQUcseUJBQXlCbkIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxJQUFJRCxNQUFNLEVBQUVvQixHQUFHLElBQUksZ0JBQWdCO1lBRW5DLE9BQ0M1QixNQUFBLENBQUFjLE9BQUEsQ0FBQVUsYUFBQTtjQUFRZixTQUFTLEVBQUVtQixHQUFHO2NBQUEsR0FBTWpCO1lBQUssR0FDL0JTLGdCQUFnQixDQUFDUyxNQUFNLEdBQUcsQ0FBQyxJQUFJN0IsTUFBQSxDQUFBYyxPQUFBLENBQUFVLGFBQUE7Y0FBSWYsU0FBUyxFQUFDO1lBQVksR0FBRVcsZ0JBQWdCLENBQU0sRUFDbEZwQixNQUFBLENBQUFjLE9BQUEsQ0FBQVUsYUFBQSxjQUFNZCxRQUFRLENBQU8sQ0FDYjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBVixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkIsV0FBQSxHQUFBN0IsT0FBQTtVQUdNLFNBQVV3QixJQUFJQSxDQUFDO1lBQUVILElBQUk7WUFBRUMsS0FBSztZQUFFWDtVQUFjLENBQVM7WUFDMUQsTUFBTW1CLFNBQVMsR0FBR1QsSUFBSSxLQUFLVixjQUFjLEdBQUcsNEJBQTRCLEdBQUcsbUJBQW1CO1lBRTlGLE9BQ0NaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBVSxhQUFBO2NBQUlFLEdBQUcsRUFBRSxHQUFHSixJQUFJLElBQUlDLEtBQUs7WUFBRSxHQUMxQnZCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBVSxhQUFBLENBQUNNLFdBQUEsQ0FBQUUsSUFBSTtjQUFDdkIsU0FBUyxFQUFFc0IsU0FBUztjQUFFRSxJQUFJLEVBQUVYO1lBQUksR0FDcENDLEtBQUssQ0FDQSxDQUNIO1VBRVA7Ozs7Ozs7Ozs7O1VDZEE7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSJ9