System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sdkConfig, Environment, ISDKSettings, __beyond_pkg, hmr;
  _export({
    sdkConfig: void 0,
    Environment: void 0,
    ISDKSettings: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/startup"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1183478009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sdkConfig = void 0;
          var _model = require("@beyond-js/reactive/model");
          class SDKInitializer extends _model.ReactiveModel {
            #api;
            #project;
            get project() {
              return this.#project;
            }
            #environment;
            get environment() {
              return this.#environment;
            }
            get api() {
              return this.#api;
            }
            #pkg;
            get pkg() {
              return this.#pkg;
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
              pkg,
              api,
              project
            }) {
              this.#environment = environment;
              this.#userModel = userModel;
              this.#pkg = pkg;
              this.#api = api;
              this.#project = project;
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
        hash: 195144488,
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
      }, {
        "im": "./types",
        "from": "Environment",
        "name": "Environment"
      }, {
        "im": "./types",
        "from": "ISDKSettings",
        "name": "ISDKSettings"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sdkConfig') && _export("sdkConfig", sdkConfig = require ? require('./index').sdkConfig : value);
        (require || prop === 'Environment') && _export("Environment", Environment = require ? require('./types').Environment : value);
        (require || prop === 'ISDKSettings') && _export("ISDKSettings", ISDKSettings = require ? require('./types').ISDKSettings : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiU0RLSW5pdGlhbGl6ZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwicHJvamVjdCIsImVudmlyb25tZW50IiwicGtnIiwidXNlck1vZGVsIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJpbml0aWFsaXplIiwic2RrQ29uZmlnIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLE1BQU1DLGNBQWUsU0FBUUYsTUFBQSxDQUFBRyxhQUE2QjtZQUN6RCxDQUFBQyxHQUFJO1lBRUosQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsSUFBSUYsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxDQUFBRyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJQSxTQUFTQSxDQUFDQyxLQUFLO2NBQ2xCLElBQUksQ0FBQyxDQUFBRCxTQUFVLEdBQUdDLEtBQUs7Y0FDdkIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNQyxVQUFVQSxDQUFDO2NBQUVMLFdBQVc7Y0FBRUUsU0FBUztjQUFFRCxHQUFHO2NBQUVILEdBQUc7Y0FBRUM7WUFBTyxDQUFnQjtjQUMzRSxJQUFJLENBQUMsQ0FBQUMsV0FBWSxHQUFHQSxXQUFXO2NBQy9CLElBQUksQ0FBQyxDQUFBRSxTQUFVLEdBQUdBLFNBQVM7Y0FDM0IsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBR0EsR0FBRztjQUNmLElBQUksQ0FBQyxDQUFBSCxHQUFJLEdBQUdBLEdBQUc7Y0FDZixJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCO1lBQ0Q7O1VBR007VUFBVyxNQUFNTyxTQUFTLEdBQUFDLE9BQUEsQ0FBQUQsU0FBQSxHQUFHLElBQUlWLGNBQWMsRUFBRTs7Ozs7Ozs7Ozs7VUM1Q3hEOztVQUVBWSxNQUFBLENBQUFDLGNBQUEsQ0FBQUYsT0FBQTtZQUNBSixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=