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
        hash: 421473625,
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
              last: total === index + 1,
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
        hash: 1201410241,
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
            last,
            currentRouting,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = link === currentRouting || last ? 'breadcrumb__item--current' : 'breadcrumb__item';
            const isFunction = typeof link === 'function';
            const attrs = {};
            if (isFunction) {
              attrs.onClick = link;
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
        hash: 2303835339,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJvbkNsaWNrIiwiaW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiSXRlbSIsImtleSIsInY0IiwibGFzdCIsImNscyIsIl9jb21wb25lbnRzIiwiaXNDaGVja2VkIiwiaXNGdW5jdGlvbiIsImF0dHJzIiwiaHJlZiIsIkxpbmsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFZLFNBQVVLLFVBQVVBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxTQUFTLEdBQUcsR0FBRztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDeEcsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdi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