System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Application, __beyond_pkg, hmr;
  _export("Application", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_1 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_2 = _aimpactChatSdk155Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsReactive211Model) {
      dependency_4 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/application"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/startup', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@beyond-js/reactive/model', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1460778365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Application = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class Application extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async policies() {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.get('/application/metadata/policy');
                if (!response.status) throw new Error('Error fetching policies');
                return response.data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Application = Application;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Application",
        "name": "Application"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Application') && _export("Application", Application = require ? require('./index').Application : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfbW9kZWwiLCJBcHBsaWNhdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwicG9saWNpZXMiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLElBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVcsTUFBT0ksV0FBWSxTQUFRRCxNQUFBLENBQUFFLGFBQTJCO1lBQ3ZFLENBQUFDLEdBQUk7WUFFSkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNULFFBQUEsQ0FBQVUsU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUM1QztZQUVBLE1BQU1DLFFBQVFBLENBQUE7Y0FDYixJQUFJO2dCQUNILE1BQU1DLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2dCQUM3QyxJQUFJLENBQUMsQ0FBQVAsR0FBSSxDQUFDVSxNQUFNLENBQUNILEtBQUssQ0FBQztnQkFDdkIsTUFBTUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFYLEdBQUksQ0FBQ1ksR0FBRyxDQUFDLDhCQUE4QixDQUFDO2dCQUNwRSxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2dCQUNoRSxPQUFPSCxRQUFRLENBQUNJLElBQUk7ZUFDcEIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBRyxPQUFBLENBQUFyQixXQUFBLEdBQUFBLFdBQUEiLCJpZ25vcmVMaXN0IjpbXX0=