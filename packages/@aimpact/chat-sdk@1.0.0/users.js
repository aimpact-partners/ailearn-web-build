System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@beyond-js/kernel@0.1.9/core", "firebase@10.12.0/auth", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.45/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Entities) {
      dependency_1 = _beyondJsReactive1112Entities;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_5 = _aimpactAilearnApp0045Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.45"]]);
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
        hash: 2283316067,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsInJlcXVpcmUiLCJfcHJvdmlkZXIiLCJfY29yZSIsIlVzZXIiLCJJdGVtIiwicHJvcGVydGllcyIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiaWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsImlzUmVhZHkiLCJzZXQiLCJyZXNvbHZlIiwibG9hZGVkIiwidHJpZ2dlciIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImxvYWQiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZGF0YSIsIl9hcGkiLCJfY29uZmlnIiwiYXBpIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwiYmVhcmVyIiwicG9zdCJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2UudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEsSUFBQUMsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBSU8sV0FQUDs7VUFPaUIsTUFBT0csSUFBSyxTQUFRSixTQUFBLENBQUFLLElBQWU7WUFDekNDLFVBQVUsR0FB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