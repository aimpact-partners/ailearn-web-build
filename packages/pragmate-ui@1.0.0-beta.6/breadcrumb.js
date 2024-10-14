System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "uuid@10.0.0", "pragmate-ui@1.0.0-beta.6/components"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.6/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3992629647,
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
            separator = '/',
            className,
            children,
            ...props
          }) {
            const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link, onClick], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              onClick: onClick,
              index: index,
              separator: separator,
              link: link,
              label: label,
              currentRouting: currentRouting
            }));
            let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: 'pui-breadcrumb'
            }, breadcrumbOutput), children && _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2614307414,
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
            onClick,
            currentRouting,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = link === currentRouting ? 'breadcrumb__item--current' : 'breadcrumb__item';
            const isFunction = typeof link === 'function';
            const attrs = {};
            if (isFunction) {
              attrs.onClick = onClick;
            } else {
              attrs.href = link;
            }
            return _react.default.createElement("li", {
              key: `${link} ${label}`,
              className: 'pui-breadcrumb-item__container'
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              ...attrs
            }, label, total > index + 1 && _react.default.createElement("span", {
              className: 'pui-breadcrumb__separator'
            }, separator)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3681079238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJvbkNsaWNrIiwiaW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiSXRlbSIsImtleSIsInY0IiwiY2xzIiwiX2NvbXBvbmVudHMiLCJpc0NoZWNrZWQiLCJpc0Z1bmN0aW9uIiwiYXR0cnMiLCJocmVmIiwiTGluayIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUVPO1VBQVksU0FBVUssVUFBVUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDLFNBQVMsR0FBRyxHQUFHO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUssQ0FBVTtZQUN4RyxNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2IsTUFBQSxD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