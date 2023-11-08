System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, ISpokenBaseData, IAnalysisBaseData, IDashboardParams, IParticipantData, IDashboardBaseData, __beyond_pkg, hmr;
  _export({
    ISpokenBaseData: void 0,
    IAnalysisBaseData: void 0,
    IDashboardParams: void 0,
    IParticipantData: void 0,
    IDashboardBaseData: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.1"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@google-cloud/tasks", "3.2.0"], ["@google-cloud/storage", "7.0.1"], ["form-data", "4.0.0"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["express-openapi-validator", "5.0.6"], ["firebase-admin", "11.10.1"], ["googleapis", "122.0.0"], ["node-fetch", "2.6.13"], ["openai", "4.2.0"], ["react", "18.2.0"], ["uuid", "9.0.0"], ["busboy", "1.6.0"], ["firebase", "9.23.0"], ["socket.io-client", "4.7.2"], ["@google-cloud/text-to-speech", "5.0.1"], ["@beyond-js/bee", "0.0.6"], ["@types/express", "4.17.17"], ["@types/node", "20.6.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-api@0.2.0/data/interfaces"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./assessments/interfaces
      ****************************************/
      ims.set('./assessments/interfaces', {
        hash: 839888884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./dashboard/interfaces
      **************************************/

      ims.set('./dashboard/interfaces', {
        hash: 3046788723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./dashboard/interfaces",
        "from": "ISpokenBaseData",
        "name": "ISpokenBaseData"
      }, {
        "im": "./dashboard/interfaces",
        "from": "IAnalysisBaseData",
        "name": "IAnalysisBaseData"
      }, {
        "im": "./dashboard/interfaces",
        "from": "IDashboardParams",
        "name": "IDashboardParams"
      }, {
        "im": "./dashboard/interfaces",
        "from": "IParticipantData",
        "name": "IParticipantData"
      }, {
        "im": "./dashboard/interfaces",
        "from": "IDashboardBaseData",
        "name": "IDashboardBaseData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ISpokenBaseData') && _export("ISpokenBaseData", ISpokenBaseData = require ? require('./dashboard/interfaces').ISpokenBaseData : value);
        (require || prop === 'IAnalysisBaseData') && _export("IAnalysisBaseData", IAnalysisBaseData = require ? require('./dashboard/interfaces').IAnalysisBaseData : value);
        (require || prop === 'IDashboardParams') && _export("IDashboardParams", IDashboardParams = require ? require('./dashboard/interfaces').IDashboardParams : value);
        (require || prop === 'IParticipantData') && _export("IParticipantData", IParticipantData = require ? require('./dashboard/interfaces').IParticipantData : value);
        (require || prop === 'IDashboardBaseData') && _export("IDashboardBaseData", IDashboardBaseData = require ? require('./dashboard/interfaces').IDashboardBaseData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VBSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSJ9