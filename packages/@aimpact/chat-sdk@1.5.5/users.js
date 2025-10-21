System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/kernel@0.1.14/core", "firebase@11.9.1/auth", "@beyond-js/http-suite@0.1.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactChatSdk155Startup) {
      dependency_1 = _aimpactChatSdk155Startup;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_2 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsKernel0114Core) {
      dependency_3 = _beyondJsKernel0114Core;
    }, function (_firebase1191Auth) {
      dependency_4 = _firebase1191Auth;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/startup', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@beyond-js/http-suite/api', dependency_5]]);
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
        hash: 3851612744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // AudioItem

          class User extends _item.Item {
            #logged;
            #promiseInit;
            #firebaseUser;
            get logged() {
              return this.#logged;
            }
            #token;
            get token() {
              return this.firebaseToken;
            }
            set token(value) {
              if (value === this.#token) return;
              this.#token = value;
              this.trigger('token.changed');
            }
            #firebaseProvider;
            get firebaseToken() {
              return this.#firebaseProvider?.getCurrentToken();
            }
            constructor({
              properties = [],
              ...specs
            } = {
              properties: [],
              id: undefined
            }) {
              //@ts-ignore
              super({
                id: specs.id,
                properties: [...properties, 'displayName', 'id', 'email', 'photoURL', 'phoneNumber'],
                entity: 'User',
                provider: _provider.UserProvider
              });
              // this.initialize(specs);
            }
            set(specs) {
              const data = super.set(specs);
              if (specs.token) this.token = specs.token;
              return {
                ...data,
                token: this.token
              };
            }
            getProperties() {
              const data = super.getProperties();
              return {
                ...data,
                token: this.token
              };
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
                id: this.getProperty('id'),
                firebaseToken
              };
              const response = await this.provider.load(specs);
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
        hash: 3101769485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwidG9rZW4iLCJmaXJlYmFzZVRva2VuIiwidHJpZ2dlciIsImZpcmViYXNlUHJvdmlkZXIiLCJnZXRDdXJyZW50VG9rZW4iLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJzcGVjcyIsImlkIiwidW5kZWZpbmVkIiwiZW50aXR5IiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJzZXQiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInNldEZpcmViYXNlUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwibG9hZGVkIiwic2V0RmlyZWJhc2VVc2VyIiwidXNlciIsImxvZ2luIiwiZ2V0UHJvcGVydHkiLCJyZXNwb25zZSIsImxvYWQiLCJnZXRNb2RlbCIsInNka0NvbmZpZyIsInVzZXJNb2RlbCIsIl9hcGkiLCJhcGkiLCJBcGkiLCJiZWFyZXIiLCJzdGF0dXMiLCJwb3N0IiwiRXJyb3IiXSwic291cmNlcyI6WyIvaW50ZXJmYWNlLnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFDLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFNBQUEsR0FBQUgsT0FB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