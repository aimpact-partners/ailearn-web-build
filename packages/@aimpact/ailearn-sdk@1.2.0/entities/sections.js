System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-sdk@1.2.0/groups", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Sections, Section, SectionsProvider, ITimeStamp, IKBObjectListItem, IOwnerData, IPeopleBase, ISectionBase, ISectionData, ISectionKBObjectsBase, ISectionItemBase, ISectionUserData, __beyond_pkg, hmr;
  _export({
    Sections: void 0,
    Section: void 0,
    SectionsProvider: void 0,
    ITimeStamp: void 0,
    IKBObjectListItem: void 0,
    IOwnerData: void 0,
    IPeopleBase: void 0,
    ISectionBase: void 0,
    ISectionData: void 0,
    ISectionKBObjectsBase: void 0,
    ISectionItemBase: void 0,
    ISectionUserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnSdk120Groups) {
      dependency_1 = _aimpactAilearnSdk120Groups;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_2 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/sections"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@beyond-js/reactive/entities/collection', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 702752749,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sections = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _item = require("./item");
          /*bundle*/
          class Sections extends _groups.Groups {
            constructor(args) {
              super('sections', _item.Section);
            }
            load(args = {
              user: false
            }) {
              return super.load(args);
            }
          }
          exports.Sections = Sections;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4041352817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Section = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          /*bundle*/
          class Section extends _groups.GroupItem {
            constructor(args) {
              super('sections', {
                ...args,
                properties: ['name', 'description', 'picture', 'joinSpecs', 'owner', 'people', 'kbObjects']
              });
            }
          }
          exports.Section = Section;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 4125911170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionsProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class SectionsProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async list(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get('/sections', specs);
              if (!response.status) {
                throw new Error('Failed to fetch sections');
              }
              return response.data;
            }
            async load(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/sections/${id}`);
              if (!response.status) {
                throw new Error('Failed to load section');
              }
              return response.data;
            }
            async create(data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post('/sections', data);
              if (!response.status) {
                throw new Error('Failed to create section');
              }
              return response.data;
            }
            async edit(id, data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.put(`/sections/${id}`, data);
              if (!response.status) {
                throw new Error('Failed to update section');
              }
              return response.data;
            }
            async delete(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.delete(`/sections/${id}`);
              if (!response.status) {
                throw new Error('Failed to delete section');
              }
              return true;
            }
          }
          exports.SectionsProvider = SectionsProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2785052223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Sections",
        "name": "Sections"
      }, {
        "im": "./item",
        "from": "Section",
        "name": "Section"
      }, {
        "im": "./provider",
        "from": "SectionsProvider",
        "name": "SectionsProvider"
      }, {
        "im": "./types",
        "from": "ITimeStamp",
        "name": "ITimeStamp"
      }, {
        "im": "./types",
        "from": "IKBObjectListItem",
        "name": "IKBObjectListItem"
      }, {
        "im": "./types",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types",
        "from": "IPeopleBase",
        "name": "IPeopleBase"
      }, {
        "im": "./types",
        "from": "ISectionBase",
        "name": "ISectionBase"
      }, {
        "im": "./types",
        "from": "ISectionData",
        "name": "ISectionData"
      }, {
        "im": "./types",
        "from": "ISectionKBObjectsBase",
        "name": "ISectionKBObjectsBase"
      }, {
        "im": "./types",
        "from": "ISectionItemBase",
        "name": "ISectionItemBase"
      }, {
        "im": "./types",
        "from": "ISectionUserData",
        "name": "ISectionUserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Sections') && _export("Sections", Sections = require ? require('./collection').Sections : value);
        (require || prop === 'Section') && _export("Section", Section = require ? require('./item').Section : value);
        (require || prop === 'SectionsProvider') && _export("SectionsProvider", SectionsProvider = require ? require('./provider').SectionsProvider : value);
        (require || prop === 'ITimeStamp') && _export("ITimeStamp", ITimeStamp = require ? require('./types').ITimeStamp : value);
        (require || prop === 'IKBObjectListItem') && _export("IKBObjectListItem", IKBObjectListItem = require ? require('./types').IKBObjectListItem : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types').IOwnerData : value);
        (require || prop === 'IPeopleBase') && _export("IPeopleBase", IPeopleBase = require ? require('./types').IPeopleBase : value);
        (require || prop === 'ISectionBase') && _export("ISectionBase", ISectionBase = require ? require('./types').ISectionBase : value);
        (require || prop === 'ISectionData') && _export("ISectionData", ISectionData = require ? require('./types').ISectionData : value);
        (require || prop === 'ISectionKBObjectsBase') && _export("ISectionKBObjectsBase", ISectionKBObjectsBase = require ? require('./types').ISectionKBObjectsBase : value);
        (require || prop === 'ISectionItemBase') && _export("ISectionItemBase", ISectionItemBase = require ? require('./types').ISectionItemBase : value);
        (require || prop === 'ISectionUserData') && _export("ISectionUserData", ISectionUserData = require ? require('./types').ISectionUserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiU2VjdGlvbnMiLCJHcm91cHMiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJTZWN0aW9uIiwibG9hZCIsInVzZXIiLCJleHBvcnRzIiwiR3JvdXBJdGVtIiwicHJvcGVydGllcyIsIl9hcGkiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiU2VjdGlvbnNQcm92aWRlciIsImFwaSIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiaWQiLCJjcmVhdGUiLCJwb3N0IiwiZWRpdCIsInB1dCIsImRlbGV0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBT087VUFBVSxNQUFPRSxRQUFTLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUM5Q0MsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQyxVQUFVLEVBQUVKLEtBQUEsQ0FBQUssT0FBTyxDQUFDO1lBQzNCO1lBRUFDLElBQUlBLENBQUNGLElBQUEsR0FBb0M7Y0FBRUcsSUFBSSxFQUFFO1lBQUssQ0FBRTtjQUN2RCxPQUFPLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRixJQUFJLENBQUM7WUFDeEI7O1VBQ0FJLE9BQUEsQ0FBQVAsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7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