System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/entities", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.24/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, User, __beyond_pkg, hmr;
  _export("User", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive119Entities) {
      dependency_1 = _beyondJsReactive119Entities;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Api) {
      dependency_3 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_4 = _aimpactAilearnApp0024Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@aimpact/chat-sdk/api', dependency_3], ['@aimpact/chat-sdk/config', dependency_4]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./item
      **********************/
      ims.set('./item', {
        hash: 664636268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // AudioItem

          class User extends _entities.Item {
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber', 'token'];
            #logged;
            #promiseInit;
            #firebaseUser;
            get logged() {
              return this.#logged;
            }
            get firebaseToken() {
              return this.#firebaseUser ? this.#firebaseUser.getIdToken() : null;
            }
            /**
             * todo: @carlos implement http request to get user data
             * @param specs
             */
            constructor(specs) {
              super({
                id: specs.id,
                db: 'chat-api',
                storeName: 'User',
                provider: _provider.UserProvider
              });
              this.initialize(specs);
            }
            initialize = async specs => {
              super.initialise();
              //@ts-ignore
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              await this.isReady;
              await this.set(specs);
              this.#promiseInit.resolve();
            };
            setFirebaseUser = async user => {
              this.#firebaseUser = user;
            };
            async login(firebaseToken) {
              await this.isReady;
              if (this.#logged) return;
              const specs = {
                ...this.getProperties(),
                id: this.id,
                firebaseToken
              };
              const response = await this.provider.load(specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              await this.set(response.data.user, true);
              // this.localUpdate(response.data.user);
              this.#logged = true;
              return true;
            }
          }
          exports.User = User;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 2906018262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/chat-sdk/config");
          class UserProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_config.default.params.apis.chat);
            }
            async load(specs) {
              this.#api.bearer(specs.firebaseToken);
              const {
                status,
                data
              } = await this.#api.post('/auth/login', specs);
              if (!status) {
                throw new Error('error loading chat');
              }
              return {
                status,
                data
              };
            }
          }
          exports.UserProvider = UserProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./item",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'User') && _export("User", User = require ? require('./item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2NvcmUiLCJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsImZpcmViYXNlVXNlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJpc1JlYWR5Iiwic2V0IiwicmVzb2x2ZSIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImxvYWQiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZGF0YSIsImV4cG9ydHMiLCJfYXBpIiwiX2NvbmZpZyIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImJlYXJlciIsInBvc3QiXSwic291cmNlcyI6WyIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBVU8sV0FiUDs7VUFhaUIsTUFBT0csSUFBSyxTQUFRSixTQUFBLENBQUFLLElBQVc7WUFDckNDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBRXpGLENBQUFDLE1BQU87WUFTUCxDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLElBQUlGLE1BQU1BLENBQUE7Y0FDVCxP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