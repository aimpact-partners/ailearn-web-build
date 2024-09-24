System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_1 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/entities/item', dependency_1], ['@aimpact/ailearn-sdk/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3138149566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          /*bundle*/
          class Collection extends _model.ReactiveModel {
            #entity;
            #dataProvider;
            get dataProvider() {
              return this.#dataProvider;
            }
            #item;
            get Item() {
              return this.#item;
            }
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            constructor({
              entity,
              dataProvider,
              item
            }) {
              super();
              this.#entity = entity;
              this.#dataProvider = dataProvider;
              this.#item = item;
            }
            async load(args) {
              if (!this.#dataProvider || typeof this.#dataProvider.load !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the load() method.');
              }
              try {
                const data = await this.#dataProvider.list(args);
                if (Array.isArray(data)) {
                  this.#map.clear();
                  data.forEach(item => {
                    const instance = new this.#item(item);
                    this.#map.set(item.id, instance);
                  });
                } else {
                  throw new Error('DataProvider.load() did not return an array of items.');
                }
                this.triggerEvent('load', {
                  items: this.#map
                });
              } catch (error) {
                console.error('Error loading data:', error);
                throw error;
              }
            }
          }
          exports.Collection = Collection;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2178724378,
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
      }, {
        "im": "./types",
        "from": "ICollectionProvider",
        "name": "ICollectionProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./index').Collection : value);
        (require || prop === 'ICollectionProvider') && _export("ICollectionProvider", ICollectionProvider = require ? require('./types').ICollectionProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJlbnRpdHkiLCJkYXRhUHJvdmlkZXIiLCJpdGVtIiwiSXRlbSIsIm1hcCIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwiY29uc3RydWN0b3IiLCJsb2FkIiwiYXJncyIsIkVycm9yIiwiZGF0YSIsImxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJpbnN0YW5jZSIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPQyxVQUFzRCxTQUFRRixNQUFBLENBQUFHLGFBQStCO1lBQ3BILENBQUFDLE1BQU87WUFDUCxDQUFBQyxZQUFhO1lBRWIsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFELElBQUs7WUFDbEI7WUFFQSxDQUFBRSxHQUFJLEdBQW1CLElBQUlDLEdBQUcsRUFBRTtZQUNoQyxJQUFJRCxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUMvQjtZQUVBQyxZQUFZO2NBQUVSLE1BQU07Y0FBRUMsWUFBWTtjQUFFQztZQUFJLENBQTRCO2NBQ25FLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFDLFlBQWEsR0FBR0EsWUFBWTtjQUNqQyxJQUFJLENBQUMsQ0FBQUMsSUFBSyxHQUFHQSxJQUFJO1lBQ2xCO1lBRUEsTUFBTU8sSUFBSUEsQ0FBQ0MsSUFBSTtjQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVQsWUFBYSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWEsQ0FBQ1EsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDekUsTUFBTSxJQUFJRSxLQUFLLENBQUMsc0VBQXNFLENBQUM7O2NBR3hGLElBQUk7Z0JBQ0gsTUFBTUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFYLFlBQWEsQ0FBQ1ksSUFBSSxDQUFDSCxJQUFJLENBQUM7Z0JBRWhELElBQUlJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFBRTtrQkFDeEIsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1ksS0FBSyxFQUFFO2tCQUNqQkosSUFBSSxDQUFDSyxPQUFPLENBQUNmLElBQUksSUFBRztvQkFDbkIsTUFBTWdCLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBaEIsSUFBSyxDQUFDQSxJQUFJLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxDQUFBRSxHQUFJLENBQUNlLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQ2tCLEVBQUUsRUFBRUYsUUFBUSxDQUFDO2tCQUNqQyxDQUFDLENBQUM7aUJBQ0YsTUFBTTtrQkFDTixNQUFNLElBQUlQLEtBQUssQ0FBQyx1REFBdUQsQ0FBQzs7Z0JBR3pFLElBQUksQ0FBQ1UsWUFBWSxDQUFDLE1BQU0sRUFBRTtrQkFBRWYsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBRjtnQkFBSSxDQUFFLENBQUM7ZUFDL0MsQ0FBQyxPQUFPa0IsS0FBSyxFQUFFO2dCQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDO2dCQUMzQyxNQUFNQSxLQUFLOztZQUViOztVQUNBRSxPQUFBLENBQUExQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7O1VDeEREOztVQUVBMkIsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119