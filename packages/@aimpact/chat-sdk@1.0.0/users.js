System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/entities", "@beyond-js/kernel@0.1.9/core", "firebase@10.9.0/auth", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.27/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1111Entities) {
      dependency_1 = _beyondJsReactive1111Entities;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_firebase1090Auth) {
      dependency_3 = _firebase1090Auth;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_5 = _aimpactAilearnApp0027Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['firebase/auth', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@aimpact/chat-sdk/config', dependency_5]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./interface
      ***************************/
      ims.set('./interface', {
        hash: 4186078931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 361179572,
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
              // this.initialize(specs);
            }
            initialize = async specs => {
              super.initialise();
              console.log('init');
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              await this.isReady;
              await this.set(specs);
              // await this.login(this.firebaseToken);
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
              await this.set(response.data, true);
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
        hash: 2462010797,
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
                throw new Error('error loading user data');
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
        "im": "./interface",
        "from": "IChatUser",
        "name": "IChatUser"
      }, {
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
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./interface').IChatUser : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsInJlcXVpcmUiLCJfcHJvdmlkZXIiLCJfY29yZSIsIlVzZXIiLCJJdGVtIiwicHJvcGVydGllcyIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiaWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpc2UiLCJjb25zb2xlIiwibG9nIiwiUGVuZGluZ1Byb21pc2UiLCJpc1JlYWR5Iiwic2V0IiwicmVzb2x2ZSIsImxvYWRlZCIsInRyaWdnZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJsb2FkIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImRhdGEiLCJfYXBpIiwiX2NvbmZpZyIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImJlYXJlciIsInBvc3QiXSwic291cmNlcyI6WyIvaW50ZXJmYWNlLnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFDLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUlPLFdBUFA7O1VBT2lCLE1BQU9HLElBQUssU0FBUUosU0FBQSxDQUFBSyxJQUFl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