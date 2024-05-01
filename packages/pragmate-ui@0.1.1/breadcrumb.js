System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "uuid@9.0.1", "pragmate-ui@0.1.1/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_uuid2) {
      dependency_4 = _uuid2;
    }, function (_pragmateUi011Components) {
      dependency_5 = _pragmateUi011Components;
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
          "vspecifier": "pragmate-ui@0.1.1/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['uuid', dependency_4], ['pragmate-ui/components', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3573087857,
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
            return _react.default.createElement("div", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: 'breadcrumb'
            }, breadcrumbOutput), children && _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1944588473,
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
            const isChecked = link === currentRouting ? 'breadcrumb__item--current' : 'breadcrumb__item';
            return _react.default.createElement("li", {
              key: `${link} ${label}`,
              className: "pui-breadcrumb-item__container"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwidjQiLCJjbHMiLCJfY29tcG9uZW50cyIsImlzQ2hlY2tlZCIsIkxpbmsiLCJocmVmIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUVPO1VBQVksU0FBVUssVUFBVUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDLFNBQVMsR0FBRyxHQUFHO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUssQ0FBVTtZQUN4RyxNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2IsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsQ0FBQ2IsUUFBQSxD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