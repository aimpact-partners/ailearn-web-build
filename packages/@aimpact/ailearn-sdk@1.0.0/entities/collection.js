System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, __beyond_pkg, hmr;
  _export("Collection", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120EntitiesItem) {
      dependency_2 = _beyondJsReactive120EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 255634415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/ // Abstract Collection class with generic return types
          class Collection extends _model.ReactiveModel {
            #item;
            service;
            constructor({
              Item,
              service,
              ...props
            }) {
              super();
              this.#item = Item;
              this.service = new service(); // Correctly instantiate the service here
            }
            // Generic abstract methods for subclasses to define return types
            async load(params) {
              const response = await this.service.load(params);
              return response;
            }
          }
          exports.Collection = Collection;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 4001081916,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Collection",
        "name": "Collection"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./index').Collection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtIiwic2VydmljZSIsImNvbnN0cnVjdG9yIiwiSXRlbSIsInByb3BzIiwibG9hZCIsInBhcmFtcyIsInJlc3BvbnNlIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBSU8sV0FEUDtVQUNpQixNQUFnQkMsVUFBK0MsU0FBUUYsTUFBQSxDQUFBRyxhQUV2RjtZQUNBLENBQUFDLElBQUs7WUFDS0MsT0FBTztZQUVqQkMsWUFBWTtjQUFFQyxJQUFJO2NBQUVGLE9BQU87Y0FBRSxHQUFHRztZQUFLLENBQTJCO2NBQy9ELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBSixJQUFLLEdBQUdHLElBQUk7Y0FDakIsSUFBSSxDQUFDRixPQUFPLEdBQUcsSUFBSUEsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMvQjtZQUVBO1lBQ0EsTUFBTUksSUFBSUEsQ0FBNEJDLE1BQWtCO2NBQ3ZELE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ04sT0FBTyxDQUFDSSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNoRCxPQUFPQyxRQUFhO1lBQ3JCOztVQUlBQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUN4QkQ7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==