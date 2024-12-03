System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.3.0/reactive/entities/item", "@beyond-js/kernel@0.1.9/core", "firebase@10.14.1/auth", "@aimpact/chat-sdk@1.3.0/startup", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.3.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk130ReactiveEntitiesItem) {
      dependency_1 = _aimpactChatSdk130ReactiveEntitiesItem;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_firebase10141Auth) {
      dependency_3 = _firebase10141Auth;
    }, function (_aimpactChatSdk130Startup) {
      dependency_4 = _aimpactChatSdk130Startup;
    }, function (_aimpactHttpSuite001Api) {
      dependency_5 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk130Config) {
      dependency_6 = _aimpactChatSdk130Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/reactive/entities/item', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['firebase/auth', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@aimpact/http-suite/api', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
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
        hash: 1480323652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _item = require("@aimpact/chat-sdk/reactive/entities/item");
          var _provider = require("./provider");
          var _core = require("@beyond-js/kernel/core");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/ // AudioItem

          class User extends _item.Item {
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber', 'token'];
            #logged;
            #promiseInit;
            #firebaseUser;
            get logged() {
              return this.#logged;
            }
            #firebaseProvider;
            get firebaseToken() {
              return this.#firebaseProvider?.getCurrentToken();
            }
            /**
             * todo: @carlos implement http request to get user data
             * @param specs
             */
            constructor(specs) {
              //@ts-ignore
              super({
                id: specs.id,
                entity: 'User',
                provider: _provider.UserProvider,
                properties: specs.properties ?? []
              });
              // this.initialize(specs);
            }
            setFirebaseProvider(provider) {
              this.#firebaseProvider = provider;
            }
            initialize = async specs => {
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              this.set(specs);
              // await this.login(this.firebaseToken);
              this.#promiseInit.resolve();
              this.loaded = true;
              this.trigger('user.initialized');
            };
            setFirebaseUser = async user => {
              this.#firebaseUser = user;
            };
            async login(firebaseToken) {
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
              this.set(response.data);
              // this.localUpdate(response.data.user);
              this.#logged = true;
              this.trigger('login');
              return true;
            }
            static getModel(specs) {
              if (_startup.sdkConfig.userModel) return new _startup.sdkConfig.userModel(specs);
              return new User(specs);
            }
          }
          exports.User = User;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 1081948398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          class UserProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.api);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9pdGVtIiwicmVxdWlyZSIsIl9wcm92aWRlciIsIl9jb3JlIiwiX3N0YXJ0dXAiLCJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsImZpcmViYXNlVXNlciIsImZpcmViYXNlUHJvdmlkZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0Q3VycmVudFRva2VuIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZW50aXR5IiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0IiwicmVzb2x2ZSIsImxvYWRlZCIsInRyaWdnZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJsb2FkIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImRhdGEiLCJnZXRNb2RlbCIsInNka0NvbmZpZyIsInVzZXJNb2RlbCIsIl9hcGkiLCJhcGkiLCJBcGkiLCJiZWFyZXIiLCJwb3N0Il0sInNvdXJjZXMiOlsiL2ludGVyZmFjZS50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFDLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUdBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPLFdBUFA7O1VBT2lCLE1BQU9J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