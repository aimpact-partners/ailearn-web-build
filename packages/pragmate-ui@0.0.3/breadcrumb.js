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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 1198919866,
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
            separator,
            className,
            children,
            ...props
          }) {
            const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              index: index,
              separator: separator,
              link: link,
              label: label,
              currentRouting: currentRouting
            }));
            let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("header", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: 'breadcrumb'
            }, breadcrumbOutput), _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1761258708,
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
            currentRouting,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = link === currentRouting ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';
            return _react.default.createElement("li", {
              key: `${link} ${label}`
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              href: link
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
        hash: 3856179362,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwidjQiLCJjbHMiLCJfY29tcG9uZW50cyIsImlzQ2hlY2tlZCIsIkxpbmsiLCJocmVmIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9pdGVtLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUVPO1VBQVksU0FBVUssVUFBVUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDLFNBQVM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFVO1lBQ2xHLE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDYixRQUFB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