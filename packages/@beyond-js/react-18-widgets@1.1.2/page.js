System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/widgets@1.1.0/routing", "@beyond-js/react-18-widgets@1.1.2/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, PageReactWidgetController, __beyond_pkg, hmr;
  _export("PageReactWidgetController", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsWidgets110Routing) {
      dependency_1 = _beyondJsWidgets110Routing;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/react-18-widgets@1.1.2/page"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/routing', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./page
      **********************/
      ims.set('./page', {
        hash: 953195477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageReactWidgetController = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _routing = require("@beyond-js/widgets/routing");
          /*bundle*/
          class PageReactWidgetController extends _base.ReactWidgetController {
            #uri;
            get uri() {
              return this.#uri;
            }
            mount() {
              return super.mount({
                uri: this.#uri
              });
            }
            onQueryStringChange({
              qs
            }) {
              void qs;
            }
            async initialise() {
              const {
                widget
              } = this;
              const {
                uri
              } = _routing.manager.pages.obtain({
                widget: widget
              });
              uri.on('change', this.onQueryStringChange.bind(this));
              this.#uri = uri;
              await super.initialise();
            }
          }
          exports.PageReactWidgetController = PageReactWidgetController;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./page",
        "from": "PageReactWidgetController",
        "name": "PageReactWidgetController"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PageReactWidgetController') && _export("PageReactWidgetController", PageReactWidgetController = require ? require('./page').PageReactWidgetController : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfcm91dGluZyIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJ1cmkiLCJtb3VudCIsIm9uUXVlcnlTdHJpbmdDaGFuZ2UiLCJxcyIsImluaXRpYWxpc2UiLCJ3aWRnZXQiLCJtYW5hZ2VyIiwicGFnZXMiLCJvYnRhaW4iLCJvbiIsImJpbmQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3BhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUlBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDRkUseUJBQTBCLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQ3JFLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVBQyxLQUFLQSxDQUFBO2NBQ0osT0FBTyxLQUFLLENBQUNBLEtBQUssQ0FBQztnQkFBRUQsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBQTtjQUFJLENBQUUsQ0FBQztZQUN2QztZQUVBRSxtQkFBbUJBLENBQUM7Y0FBRUM7WUFBRSxDQUFxQjtjQUM1QyxLQUFLQSxFQUFFO1lBQ1I7WUFFQSxNQUFNQyxVQUFVQSxDQUFBO2NBQ2YsTUFBTTtnQkFBRUM7Y0FBTSxDQUFFLEdBQUcsSUFBSTtjQUN2QixNQUFNO2dCQUFFTDtjQUFHLENBQUUsR0FBR0gsUUFBQSxDQUFBUyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDO2dCQUFFSCxNQUFNLEVBQWdCQTtjQUFNLENBQUUsQ0FBQztjQUN0RUwsR0FBRyxDQUFDUyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1AsbUJBQW1CLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUNyRCxJQUFJLENBQUMsQ0FBQVYsR0FBSSxHQUFHQSxHQUFHO2NBRWYsTUFBTSxLQUFLLENBQUNJLFVBQVUsRUFBRTtZQUN6Qjs7VUFDQU8sT0FBQSxDQUFBYix5QkFBQSxHQUFBQSx5QkFBQSIsImlnbm9yZUxpc3QiOltdfQ==