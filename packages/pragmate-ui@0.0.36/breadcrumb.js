System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/link"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/link', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 426196394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var React = require("react");
          var _link = require("pragmate-ui/link");
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
            let breadcrumbOutput = [];
            if (items) {
              breadcrumbOutput = items.map(([link, label]) => {
                return React.createElement("li", {
                  key: `${link} ${label}`
                }, React.createElement(_link.Link, {
                  className: "breadcrumbs__item",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNPO1VBQVksU0FBVUEsVUFBVSxDQUFDO1lBQ3RDQyxLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDO1VBQVEsQ0FDVDtZQUNDLElBQUlDLEdBQUcsR0FBRyx5QkFBeUJGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsSUFBSUQsTUFBTSxFQUFFRyxHQUFHLElBQUksZ0JBQWdCO1lBRW5DLElBQUlDLGdCQUFnQixHQUFHLEVBQUU7WUFFekIsSUFBSUwsS0FBSyxFQUFFO2NBQ1RLLGdCQUFnQixHQUFHTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxDQUFDLEtBQUk7Z0JBQzdDLE9BQ0VDO2tCQUFJQyxHQUFHLEVBQUUsR0FBR0gsSUFBSSxJQUFJQyxLQUFLO2dCQUFFLEdBQ3pCQyxvQkFBQ0UsVUFBSTtrQkFBQ1QsU0FBUyxFQUFDLG1CQUFtQjtrQkFBQ1UsSUFBSSxFQUFFTDtnQkFBSSxHQUMzQ0MsS0FBSyxDQUNELENBQ0o7Y0FFVCxDQUFDLENBQUM7O1lBR0osT0FDRUM7Y0FBUVAsU0FBUyxFQUFFRTtZQUFHLEdBQ3BCSyxnQ0FBS1YsS0FBSyxDQUFNLEVBQ2ZNLGdCQUFnQixDQUFDUSxNQUFNLEdBQUcsQ0FBQyxJQUMxQko7Y0FBSVAsU0FBUyxFQUFDO1lBQVksR0FBRUcsZ0JBQWdCLENBQzdDLEVBQ0RJLGlDQUFNTixRQUFRLENBQU8sQ0FDZDtVQUViIiwibmFtZXMiOlsiQnJlYWRDcnVtYiIsInRpdGxlIiwiaXRlbXMiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNscyIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsaW5rIiwibGFiZWwiLCJSZWFjdCIsImtleSIsIkxpbmsiLCJocmVmIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==