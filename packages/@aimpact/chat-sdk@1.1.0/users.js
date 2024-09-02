System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/entities", "@beyond-js/kernel@0.1.9/core", "firebase@10.12.0/auth", "@aimpact/chat-sdk@1.1.0/startup", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.1.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Entities) {
      dependency_1 = _beyondJsReactive120Entities;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_aimpactChatSdk110Startup) {
      dependency_4 = _aimpactChatSdk110Startup;
    }, function (_aimpactHttpSuite001Api) {
      dependency_5 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk110Config) {
      dependency_6 = _aimpactChatSdk110Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-texmath", "1.0.0"], ["mathjax-full", "3.2.2"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['firebase/auth', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@aimpact/http-suite/api', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
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
        hash: 920043301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          var _core = require("@beyond-js/kernel/core");
          var _startup = require("@aimpact/chat-sdk/startup");
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
              this.trigger('login');
              return true;
            }
            static async getModel(specs) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsInJlcXVpcmUiLCJfcHJvdmlkZXIiLCJfY29yZSIsIl9zdGFydHVwIiwiVXNlciIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9nZ2VkIiwicHJvbWlzZUluaXQiLCJmaXJlYmFzZVVzZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJpZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwiaXNSZWFkeSIsInNldCIsInJlc29sdmUiLCJsb2FkZWQiLCJ0cmlnZ2VyIiwic2V0RmlyZWJhc2VVc2VyIiwidXNlciIsImxvZ2luIiwiZ2V0UHJvcGVydGllcyIsInJlc3BvbnNlIiwibG9hZCIsInN0YXR1cyIsIkVycm9yIiwiZXJyb3IiLCJkYXRhIiwiZ2V0TW9kZWwiLCJzZGtDb25maWciLCJ1c2VyTW9kZWwiLCJfYXBpIiwiYXBpIiwiQXBpIiwiYmVhcmVyIiwicG9zdCJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2UudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBQyxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTyxXQVBQOztVQU9pQixNQUFPSSxJQUFLLFNBQVFM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