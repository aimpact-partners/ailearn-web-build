System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, GoogleImages, GoogleImage, ImagesProvider, IImageData, IImageDetails, IImage, IImageSearchSpecs, IImageSearchResponse, __beyond_pkg, hmr;
  _export({
    GoogleImages: void 0,
    GoogleImage: void 0,
    ImagesProvider: void 0,
    IImageData: void 0,
    IImageDetails: void 0,
    IImage: void 0,
    IImageSearchSpecs: void 0,
    IImageSearchResponse: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_2 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/images"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 2250879116,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GoogleImages = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class GoogleImages extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'Image',
                provider: _provider.ImagesProvider,
                item: _item.GoogleImage,
                ...args,
                properties: ['credits']
              });
            }
          }
          exports.GoogleImages = GoogleImages;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2744662340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GoogleImage = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class GoogleImage extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'Image',
                provider: _provider.ImagesProvider,
                properties: ['link', 'title', 'mime', 'image', 'id']
              });
            }
          }
          exports.GoogleImage = GoogleImage;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 1923947878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImagesProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uuid = require("uuid");
          /*bundle*/
          class ImagesProvider {
            #api;
            #model;
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#model = model;
            }
            /**
             * Search images within a draft
             * @param specs - Search specifications including draft id, query, num, and start
             * @returns Promise with image search response
             */
            async list(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                id,
                query,
                num,
                start
              } = specs;
              if (!id) {
                throw new Error('Draft ID is required for image search');
              }
              if (!query) {
                throw new Error('Search query is required');
              }
              const queryParams = {
                query
              };
              if (num !== undefined) queryParams.num = num;
              if (start !== undefined) queryParams.start = start;
              const response = await this.#api.get(`/drafts/${id}/images/search`, queryParams);
              if (!response.status) {
                throw new Error('Failed to search images');
              }
              const items = response.data?.items.map(item => ({
                ...item,
                id: (0, _uuid.v4)()
              })) || [];
              return {
                items,
                credits: response.data?.credits
              };
            }
          }
          exports.ImagesProvider = ImagesProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3689504231,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "GoogleImages",
        "name": "GoogleImages"
      }, {
        "im": "./item",
        "from": "GoogleImage",
        "name": "GoogleImage"
      }, {
        "im": "./provider",
        "from": "ImagesProvider",
        "name": "ImagesProvider"
      }, {
        "im": "./types",
        "from": "IImageData",
        "name": "IImageData"
      }, {
        "im": "./types",
        "from": "IImageDetails",
        "name": "IImageDetails"
      }, {
        "im": "./types",
        "from": "IImage",
        "name": "IImage"
      }, {
        "im": "./types",
        "from": "IImageSearchSpecs",
        "name": "IImageSearchSpecs"
      }, {
        "im": "./types",
        "from": "IImageSearchResponse",
        "name": "IImageSearchResponse"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'GoogleImages') && _export("GoogleImages", GoogleImages = require ? require('./collection').GoogleImages : value);
        (require || prop === 'GoogleImage') && _export("GoogleImage", GoogleImage = require ? require('./item').GoogleImage : value);
        (require || prop === 'ImagesProvider') && _export("ImagesProvider", ImagesProvider = require ? require('./provider').ImagesProvider : value);
        (require || prop === 'IImageData') && _export("IImageData", IImageData = require ? require('./types').IImageData : value);
        (require || prop === 'IImageDetails') && _export("IImageDetails", IImageDetails = require ? require('./types').IImageDetails : value);
        (require || prop === 'IImage') && _export("IImage", IImage = require ? require('./types').IImage : value);
        (require || prop === 'IImageSearchSpecs') && _export("IImageSearchSpecs", IImageSearchSpecs = require ? require('./types').IImageSearchSpecs : value);
        (require || prop === 'IImageSearchResponse') && _export("IImageSearchResponse", IImageSearchResponse = require ? require('./types').IImageSearchResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkdvb2dsZUltYWdlcyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJlbnRpdHkiLCJwcm92aWRlciIsIkltYWdlc1Byb3ZpZGVyIiwiaXRlbSIsIkdvb2dsZUltYWdlIiwicHJvcGVydGllcyIsImV4cG9ydHMiLCJJdGVtIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJfdXVpZCIsImFwaSIsIm1vZGVsIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImlkIiwicXVlcnkiLCJudW0iLCJzdGFydCIsIkVycm9yIiwicXVlcnlQYXJhbXMiLCJ1bmRlZmluZWQiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsInY0IiwiY3JlZGl0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csWUFBYSxTQUFRSixXQUFBLENBQUFLLFVBQXVDO1lBTW5GQyxZQUFZQyxJQUFVO2NBQ3JCLEtBQUssQ0FBQztnQkFDTEMsTUFBTSxFQUFFLE9BQU87Z0JBQ2ZDLFFBQVEsRUFBRU4sU0FBQSxDQUFBTyxjQUFjO2dCQUN4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