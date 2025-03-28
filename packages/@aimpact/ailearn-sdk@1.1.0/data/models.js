System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.1.0/data/interfaces", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-app@0.3.32/config", "@beyond-js/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.3/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ActivityClosing, __beyond_pkg, hmr;
  _export("ActivityClosing", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk110DataInterfaces) {
      dependency_1 = _aimpactAilearnSdk110DataInterfaces;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_2 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_3 = _aimpactAilearnApp0332Config;
    }, function (_beyondJsHttpSuite001Api) {
      dependency_4 = _beyondJsHttpSuite001Api;
    }, function (_aimpactChatSdk143Session) {
      dependency_5 = _aimpactChatSdk143Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.3"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/data/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/data/interfaces', dependency_1], ['@aimpact/reactive/entities/item', dependency_2], ['@aimpact/ailearn-app/config', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 2764263861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityClosing = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _activity = require("./providers/activity");
          /*bundle*/
          class ActivityClosing extends _item.Item {
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'ActivityClosing',
                properties: ['participants'],
                provider: _activity.ActivityClosingProvider
              });
            }
          }
          exports.ActivityClosing = ActivityClosing;
        }
      });

      /************************************
      INTERNAL MODULE: ./providers/activity
      ************************************/

      ims.set('./providers/activity', {
        hash: 3604577706,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityClosingProvider = void 0;
          var _config = require("@aimpact/ailearn-app/config");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityClosingProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async load({
              id,
              activityId
            }) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${id}/activity/${activityId}/closing`);
              if (!status) throw new Error('error loading activity closing');
              return data;
            }
          }
          exports.ActivityClosingProvider = ActivityClosingProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "ActivityClosing",
        "name": "ActivityClosing"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityClosing') && _export("ActivityClosing", ActivityClosing = require ? require('./activity').ActivityClosing : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eUNsb3NpbmciLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInNwZWNzIiwiZW50aXR5IiwicHJvcGVydGllcyIsInByb3ZpZGVyIiwiQWN0aXZpdHlDbG9zaW5nUHJvdmlkZXIiLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9hcGkiLCJfc2Vzc2lvbiIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxvYWQiLCJhY3Rpdml0eUlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiXSwic291cmNlcyI6WyIvYWN0aXZpdHkudHMiLCIvcHJvdmlkZXJzL2FjdGl2aXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFBT0UsZUFBZ0IsU0FBUUgsS0FBQSxDQUFBSSxJQUFxRDtZQUdwR0MsWUFBWTtjQUFFQyxFQUFFO2NBQUUsR0FBR0M7WUFBSyxJQUFzQixFQUFFO2NBQ2pELEtBQUssQ0FBQztnQkFDTEQsRUFBRTtnQkFDRixHQUFHQyxLQUFLO2dCQUNSQyxNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QkMsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM1QkMsUUFBUSxFQUFFUixTQUFBLENBQUFTO2VBQ1YsQ0FBQztZQUNIOztVQUNBQyxPQUFBLENBQUFULGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQVUsT0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsSUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsUUFBQSxHQUFBZCxPQUFBO1VBU00sTUFBT1UsdUJBQXVCO1lBQ25DLENBQUFLLEdBQUk7WUFFSlgsWUFBQTtjQUNDLElBQUksQ0FBQyxDQUFBVyxHQUFJLEdBQUcsSUFBSUYsSUFBQSxDQUFBRyxHQUFHLENBQUNKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQztjQUFFaEIsRUFBRTtjQUFFaUI7WUFBVSxDQUFzQztjQUNoRSxJQUFJLENBQUMsQ0FBQVAsR0FBSSxDQUFDUSxNQUFNLENBQUNULFFBQUEsQ0FBQVUsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFQyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBYixHQUFJLENBQUNjLEdBQUcsQ0FBQyxnQkFBZ0J4QixFQUFFLGFBQWFpQixVQUFVLFVBQVUsQ0FBQztjQUNqRyxJQUFJLENBQUNLLE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztjQUU5RCxPQUFPRixJQUFJO1lBQ1o7O1VBQ0FqQixPQUFBLENBQUFELHVCQUFBLEdBQUFBLHVCQUFBIiwiaWdub3JlTGlzdCI6W119