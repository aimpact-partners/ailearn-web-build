System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sdkConfig, __beyond_pkg, hmr;
  _export("sdkConfig", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/startup"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./endpoints
      ***************************/
      ims.set('./endpoints', {
        hash: 540830039,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ENDPOINTS = void 0;
          const ENDPOINTS = exports.ENDPOINTS = {
            development: 'https://dev.agents.api.aimpact.partners',
            local: 'https://dev.agents.api.aimpact.partners',
            testing: 'https://test.agents.api.aimpact.partners',
            quality: 'https://beta.agents.api.aimpact.partners',
            production: 'https://agents.api.aimpact.partners'
          };
          let a = {
            development: {
              chatAPI: 'https://dev.agents.api.aimpact.partners',
              ailearnAPI: 'https://dev.ailearn.api.aimpact.partners'
            },
            testing: {
              chatAPI: 'https://test.agents.api.aimpact.partners',
              ailearnAPI: 'https://test.ailearn.api.aimpact.partners'
            },
            quality: {
              chatAPI: 'https://beta.agents.api.aimpact.partners',
              ailearnAPI: 'https://beta.ailearn.api.aimpact.partners'
            },
            production: {
              chatAPI: 'https://agents.api.aimpact.partners',
              ailearnAPI: 'https://ailearn.api.aimpact.partners'
            }
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3478478492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sdkConfig = void 0;
          var _model = require("@aimpact/reactive/model");
          var _endpoints = require("./endpoints");
          class SDKInitializer extends _model.ReactiveModel {
            #api;
            #environment;
            get environment() {
              return this.#environment;
            }
            #endpoints = _endpoints.ENDPOINTS;
            get api() {
              return this.#endpoints[this.#environment];
            }
            #userModel;
            get userModel() {
              return this.#userModel;
            }
            set userModel(value) {
              this.#userModel = value;
              this.triggerEvent();
            }
            async initialize({
              environment,
              userModel,
              localdb = true
            }) {
              this.#environment = environment;
              this.#userModel = userModel;
              // const model = new this.#userModel();
            }
          }
          /*bundle*/
          const sdkConfig = exports.sdkConfig = new SDKInitializer();
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 263068759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sdkConfig",
        "name": "sdkConfig"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sdkConfig') && _export("sdkConfig", sdkConfig = require ? require('./index').sdkConfig : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFTkRQT0lOVFMiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJsb2NhbCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImEiLCJjaGF0QVBJIiwiYWlsZWFybkFQSSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfZW5kcG9pbnRzIiwiU0RLSW5pdGlhbGl6ZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwiZW52aXJvbm1lbnQiLCJlbmRwb2ludHMiLCJ1c2VyTW9kZWwiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImluaXRpYWxpemUiLCJsb2NhbGRiIiwic2RrQ29uZmlnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvZW5kcG9pbnRzLnRzIiwiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLFNBQVMsR0FBQUMsT0FBQSxDQUFBRCxTQUFBLEdBQUc7WUFDeEJFLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdERDLEtBQUssRUFBRSx5Q0FBeUM7WUFDaERDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkRDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkRDLFVBQVUsRUFBRTtXQUNaO1VBRUQsSUFBSUMsQ0FBQyxHQUFHO1lBQ1BMLFdBQVcsRUFBRTtjQUNaTSxPQUFPLEVBQUUseUNBQXlDO2NBQ2xEQyxVQUFVLEVBQUU7YUFDWjtZQUNETCxPQUFPLEVBQUU7Y0FDUkksT0FBTyxFQUFFLDBDQUEwQztjQUNuREMsVUFBVSxFQUFFO2FBQ1o7WUFDREosT0FBTyxFQUFFO2NBQ1JHLE9BQU8sRUFBRSwwQ0FBMEM7Y0FDbkRDLFVBQVUsRUFBRTthQUNaO1lBQ0RILFVBQVUsRUFBRTtjQUNYRSxPQUFPLEVBQUUscUNBQXFDO2NBQzlDQyxVQUFVLEVBQUU7O1dBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUVBLE1BQU1FLGNBQWUsU0FBUUgsTUFBQSxDQUFBSSxhQUE2QjtZQUN6RCxDQUFBQyxHQUFJO1lBRUosQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsQ0FBQUMsU0FBVSxHQUFHTCxVQUFBLENBQUFaLFNBQVM7WUFDdEIsSUFBSWUsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFFLFNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQUQsV0FBWSxDQUFDO1lBQzFDO1lBRUEsQ0FBQUUsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSUEsU0FBU0EsQ0FBQ0MsS0FBSztjQUNsQixJQUFJLENBQUMsQ0FBQUQsU0FBVSxHQUFHQyxLQUFLO2NBQ3ZCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUMsVUFBVUEsQ0FBQztjQUFFTCxXQUFXO2NBQUVFLFNBQVM7Y0FBRUksT0FBTyxHQUFHO1lBQUksQ0FBZ0I7Y0FDeEUsSUFBSSxDQUFDLENBQUFOLFdBQVksR0FBR0EsV0FBVztjQUMvQixJQUFJLENBQUMsQ0FBQUUsU0FBVSxHQUFHQSxTQUFTO2NBQzNCO1lBQ0Q7O1VBR007VUFBVyxNQUFNSyxTQUFTLEdBQUF0QixPQUFBLENBQUFzQixTQUFBLEdBQUcsSUFBSVYsY0FBYyxFQUFFOzs7Ozs7Ozs7OztVQ25DeEQ7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBeEIsT0FBQTtZQUNBa0IsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119