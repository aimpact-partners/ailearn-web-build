System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, sdkConfig, __beyond_pkg, hmr;
  _export("sdkConfig", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Database) {
      dependency_2 = _beyondJsReactive120Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/startup"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/database', dependency_2]]);
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
        hash: 578775214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sdkConfig = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _localdb = require("./localdb");
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
              if (localdb) {
                return (0, _localdb.localdb)();
              }
            }
          }
          /*bundle*/
          const sdkConfig = exports.sdkConfig = new SDKInitializer();
        }
      });

      /*************************
      INTERNAL MODULE: ./localdb
      *************************/

      ims.set('./localdb', {
        hash: 2345944389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.localdb = localdb;
          var _database = require("@beyond-js/reactive/database");
          async function localdb() {
            try {
              const db = await _database.DBManager.config('chat-api@26', {
                Activities: 'id',
                Assignments: 'id, name',
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                Classrooms: 'id, name',
                Conversations: 'id, name, userId, system',
                Documents: 'id, knowledgeBaseId',
                KnowledgeBoxes: 'id, userId',
                Messages: 'id,  chatId, userId, text, role, usage, timestamp',
                Modules: 'id, type, timeCreated, timeUpdated',
                Organizations: 'id',
                Projects: 'id, project',
                PromptCategories: 'id',
                Prompts: 'id',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Sessions: 'id,  classRoomId',
                StudentsHome: 'id',
                Topics: 'id,  title',
                User: 'id'
              });
              // For example, if you have user data to add you can use:
              // db.Chat.bulkAdd(chats);
            } catch (e) {
              console.trace('error', e);
            }
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFTkRQT0lOVFMiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJsb2NhbCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImEiLCJjaGF0QVBJIiwiYWlsZWFybkFQSSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfbG9jYWxkYiIsIl9lbmRwb2ludHMiLCJTREtJbml0aWFsaXplciIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlbnZpcm9ubWVudCIsImVuZHBvaW50cyIsInVzZXJNb2RlbCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiaW5pdGlhbGl6ZSIsImxvY2FsZGIiLCJzZGtDb25maWciLCJfZGF0YWJhc2UiLCJkYiIsIkRCTWFuYWdlciIsImNvbmZpZyIsIkFjdGl2aXRpZXMiLCJBc3NpZ25tZW50cyIsIkNoYXQiLCJDbGFzc3Jvb21zIiwiQ29udmVyc2F0aW9ucyIsIkRvY3VtZW50cyIsIktub3dsZWRnZUJveGVzIiwiTWVzc2FnZXMiLCJNb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsIlByb2plY3RzIiwiUHJvbXB0Q2F0ZWdvcmllcyIsIlByb21wdHMiLCJTaGFyZWRLbm93bGVkZ2VCYXNlcyIsIlNlc3Npb25zIiwiU3R1ZGVudHNIb21lIiwiVG9waWNzIiwiVXNlciIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9lbmRwb2ludHMudHMiLCIvaW5kZXgudHMiLCIvbG9jYWxkYi50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsU0FBUyxHQUFBQyxPQUFBLENBQUFELFNBQUEsR0FBRztZQUN4QkUsV0FBVyxFQUFFLHlDQUF5QztZQUN0REMsS0FBSyxFQUFFLHlDQUF5QztZQUNoREMsT0FBTyxFQUFFLDBDQUEwQztZ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