System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/entities", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.27/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, User, __beyond_pkg, hmr;
  _export("User", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1111Entities) {
      dependency_1 = _beyondJsReactive1111Entities;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Api) {
      dependency_3 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_4 = _aimpactAilearnApp0027Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
        hash: 1754463901,
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
              //@ts-ignore
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
              this.loaded = true;
              this.trigger('user.initialized');
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
        hash: 3025458531,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2NvcmUiLCJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsImZpcmViYXNlVXNlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJpc1JlYWR5Iiwic2V0IiwicmVzb2x2ZSIsImxvYWRlZCIsInRyaWdnZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJsb2FkIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImRhdGEiLCJleHBvcnRzIiwiX2FwaSIsIl9jb25maWciLCJhcGkiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImNoYXQiLCJiZWFyZXIiLCJwb3N0Il0sInNvdXJjZXMiOlsiL2l0ZW0udHMiLCIvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQVVPLFdBYlA7O1VBYWlCLE1BQU9HLElBQUssU0FBUUosU0FBQSxDQUFBSyxJQUFXO1lBQ3JDQyxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztZQUV6RixDQUFBQyxNQUFPO1lBU1AsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFlBQWE7WUFDYixJQUFJ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