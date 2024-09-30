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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 1998615426,
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
            get entity() {
              return this.#entity;
            }
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
              if (dataProvider && typeof dataProvider !== 'function') {
                throw new Error('DataProvider must be a class/constructor');
              }
              if (dataProvider) {
                this.#dataProvider = new dataProvider(this);
              }
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
        hash: 1740336354,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJlbnRpdHkiLCJkYXRhUHJvdmlkZXIiLCJpdGVtIiwiSXRlbSIsIm1hcCIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwiY29uc3RydWN0b3IiLCJFcnJvciIsImxvYWQiLCJhcmdzIiwiZGF0YSIsImxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJpbnN0YW5jZSIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPQyxVQUF3RSxTQUFRRixNQUFBLENBQUFHLGFBRXZHO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUMsWUFBYTtZQUViLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUUsR0FBSSxHQUFtQixJQUFJQyxHQUFHLEVBQUU7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDL0I7WUFFQUMsWUFBWTtjQUFFUixNQUFNO2NBQUVDLFlBQVk7Y0FBRUM7WUFBSSxDQUE0QjtjQUNuRSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUYsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUlDLFlBQVksSUFBSSxPQUFPQSxZQUFZLEtBQUssVUFBVSxFQUFFO2dCQUN2RCxNQUFNLElBQUlRLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQzs7Y0FFNUQsSUFBSVIsWUFBWSxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUlBLFlBQVksQ0FBQyxJQUFJLENBQUM7O2NBRzVDLElBQUksQ0FBQyxDQUFBQyxJQUFLLEdBQUdBLElBQUk7WUFDbEI7WUFFQSxNQUFNUSxJQUFJQSxDQUFDQyxJQUFJO2NBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBVixZQUFhLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYSxDQUFDUyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUN6RSxNQUFNLElBQUlELEtBQUssQ0FBQyxzRUFBc0UsQ0FBQzs7Y0FHeEYsSUFBSTtnQkFDSCxNQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVgsWUFBYSxDQUFDWSxJQUFJLENBQUNGLElBQUksQ0FBQztnQkFFaEQsSUFBSUcsS0FBSyxDQUFDQyxPQUFPLENBQUNILElBQUksQ0FBQyxFQUFFO2tCQUN4QixJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDWSxLQUFLLEVBQUU7a0JBQ2pCSixJQUFJLENBQUNLLE9BQU8sQ0FBQ2YsSUFBSSxJQUFHO29CQUNuQixNQUFNZ0IsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFoQixJQUFLLENBQUNBLElBQUksQ0FBQztvQkFDckMsSUFBSSxDQUFDLENBQUFFLEdBQUksQ0FBQ2UsR0FBRyxDQUFDakIsSUFBSSxDQUFDa0IsRUFBRSxFQUFFRixRQUFRLENBQUM7a0JBQ2pDLENBQUMsQ0FBQztpQkFDRixNQUFNO2tCQUNOLE1BQU0sSUFBSVQsS0FBSyxDQUFDLHVEQUF1RCxDQUFDOztnQkFHekUsSUFBSSxDQUFDWSxZQUFZLENBQUMsTUFBTSxFQUFFO2tCQUFFZixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFGO2dCQUFJLENBQUUsQ0FBQztlQUMvQyxDQUFDLE9BQU9rQixLQUFLLEVBQUU7Z0JBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHFCQUFxQixFQUFFQSxLQUFLLENBQUM7Z0JBQzNDLE1BQU1BLEtBQUs7O1lBRWI7O1VBQ0FFLE9BQUEsQ0FBQTFCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUNuRUQ7O1VBRUEyQixNQUFBLENBQUFDLGNBQUEsQ0FBQUYsT0FBQTtZQUNBRyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=