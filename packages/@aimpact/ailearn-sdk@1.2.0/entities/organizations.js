System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/groups", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Organizations, Organization, __beyond_pkg, hmr;
  _export({
    Organizations: void 0,
    Organization: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120Groups) {
      dependency_1 = _aimpactAilearnSdk120Groups;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_2 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_5 = _aimpactAilearnSdk120Startup;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/organizations"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/startup', dependency_5]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 1470987630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _item = require("./item");
          /*bundle */ //your code here
          class Organizations extends _groups.Groups {
            constructor(args) {
              super('organizations', _item.Organization);
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3494385758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle */ //your code here
          class Organization extends _groups.GroupItem {
            #api;
            constructor(args) {
              super('organizations', {
                ...args,
                properties: ['address', 'type', 'educationalLevel', 'coins', 'code']
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async freeTrial(data = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/organizations/${this.id}/free-trial`, data);
            }
            async join(specs) {
              return await this.provider.join(specs);
            }
          }
          exports.Organization = Organization;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Organizations",
        "name": "Organizations"
      }, {
        "im": "./item",
        "from": "Organization",
        "name": "Organization"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Organizations') && _export("Organizations", Organizations = require ? require('./collection').Organizations : value);
        (require || prop === 'Organization') && _export("Organization", Organization = require ? require('./item').Organization : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiT3JnYW5pemF0aW9ucyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIk9yZ2FuaXphdGlvbiIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfc3RhcnR1cCIsIkdyb3VwSXRlbSIsImFwaSIsInByb3BlcnRpZXMiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImZyZWVUcmlhbCIsImRhdGEiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInBvc3QiLCJpZCIsImpvaW4iLCJzcGVjcyIsInByb3ZpZGVyIl0sInNvdXJjZXMiOlsiLy9jb2xsZWN0aW9uLnRzLyIsIi8vaXRlbS50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBR08sWUFEUDtVQUNrQixNQUFPRSxhQUFjLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUNwREMsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQyxlQUFlLEVBQUVKLEtBQUEsQ0FBQUssWUFBWSxDQUFDO1lBQ3JDOztVQUNBQyxPQUFBLENBQUFMLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQRCxJQUFBSCxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBUSxRQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxJQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxRQUFBLEdBQUFWLE9BQUE7VUFFTyxZQURQO1VBQ2tCLE1BQU9NLFlBQWEsU0FBUVAsT0FBQSxDQUFBWSxTQUFTO1lBQ3RELENBQUFDLEdBQUk7WUFFSlIsWUFBWUMsSUFBSztjQUNoQixLQUFLLENBQUMsZUFBZSxFQUFFO2dCQUN0QixHQUFHQSxJQUFJO2dCQUNQUSxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNO2VBQ25FLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixRQUFBLENBQUFLLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDNUM7WUFFQSxNQUFNQyxTQUFTQSxDQUFDQyxJQUFJLEdBQUcsRUFBRTtjQUN4QixNQUFNQyxLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDQyxFQUFFLGFBQWEsRUFBRU4sSUFBSSxDQUFDO1lBQ3BFO1lBRUEsTUFBTU8sSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDQyxLQUFLLENBQUM7WUFDdkM7O1VBQ0FwQixPQUFBLENBQUFELFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==