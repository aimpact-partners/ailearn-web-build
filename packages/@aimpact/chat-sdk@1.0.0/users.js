System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@beyond-js/kernel@0.1.9/core", "firebase@10.9.0/auth", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.32-beta.12/config"], function (_export, _context) {
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
    }, function (_firebase1090Auth) {
      dependency_3 = _firebase1090Auth;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0032Beta12Config) {
      dependency_5 = _aimpactAilearnApp0032Beta12Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsInJlcXVpcmUiLCJfcHJvdmlkZXIiLCJfY29yZSIsIlVzZXIiLCJJdGVtIiwicHJvcGVydGllcyIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiaWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsImlzUmVhZHkiLCJzZXQiLCJyZXNvbHZlIiwibG9hZGVkIiwidHJpZ2dlciIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImxvYWQiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZGF0YSIsIl9hcGkiLCJfY29uZmlnIiwiYXBpIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwiYmVhcmVyIiwicG9zdCJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2UudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEsSUFBQUMsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBSU8sV0FQUDs7VUFPaUIsTUFBT0csSUFBSyxTQUFRSixTQUFBLENBQUFLLElBQWU7WUFDekNDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBQ3pGLENBQUFDLE1BQU87WUFHUCxDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLElBQUlGLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsSUFBSUcsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBRCxZQUFhLEdBQUcsSUFBSSxDQUFDLENBQUFBLFlBQWEsQ0FBQ0UsVUFBVSxFQUFFLEdBQUcsSUFBSTtZQUNuRTtZQUVBOzs7O1lBSUFDLFlBQVlDLEtBQUs7Y0FDaEI7Y0FDQSxLQUFLLENBQUM7Z0JBQUVDLEVBQUUsRUFBRUQsS0FBSyxDQUFDQyxFQUFFO2dCQUFFQyxFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLFFBQVEsRUFBRWYsU0FBQSxDQUFBZ0I7Y0FBWSxDQUFFLENBQUM7Y0FFbEY7WUFDRDtZQUVBQyxVQUFVLEdBQUcsTUFBTU4sS0FBSyxJQUFHO2NBQzFCLEtBQUssQ0FBQ08sVUFBVSxFQUFFO2NBRWxCLElBQUksSUFBSSxDQUFDLENBQUFaLFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUcsSUFBSUwsS0FBQSxDQUFBa0IsY0FBYyxFQUFFO2NBQ3hDLE1BQU0sSUFBSSxDQUFDQyxPQUFPO2NBRWxCLE1BQU0sSUFBSSxDQUFDQyxHQUFHLENBQUNWLEtBQUssQ0FBQztjQUNyQjtjQUNBLElBQUksQ0FBQyxDQUFBTCxXQUFZLENBQUNnQixPQUFPLEVBQUU7Y0FDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtjQUVsQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNqQyxDQUFDO1lBRURDLGVBQWUsR0FBRyxNQUFNQyxJQUFJLElBQUc7Y0FDOUIsSUFBSSxDQUFDLENBQUFuQixZQUFhLEdBQUdtQixJQUFJO1lBQzFCLENBQUM7WUFFRCxNQUFNQyxLQUFLQSxDQUFDbkIsYUFBYTtjQUN4QixNQUFNLElBQUksQ0FBQ1ksT0FBTztjQUNsQixJQUFJLElBQUksQ0FBQyxDQUFBZixNQUFPLEVBQUU7Y0FFbEIsTUFBTU0sS0FBSyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDaUIsYUFBYSxFQUFFO2dCQUFFaEIsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFBRUo7Y0FBYSxDQUFFO2NBRXJFLE1BQU1xQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNkLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDbkIsS0FBSyxDQUFDO2NBRWhELElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQ0gsUUFBUSxDQUFDSSxLQUFLLENBQUM7O2NBRWhDLE1BQU0sSUFBSSxDQUFDWixHQUFHLENBQUNRLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFLElBQUksQ0FBQztjQUVuQztjQUNBLElBQUksQ0FBQyxDQUFBN0IsTUFBTyxHQUFHLElBQUk7Y0FDbkIsT0FBTyxJQUFJO1lBQ1o7O1VBQ0FULE9BQUEsQ0FBQU0sSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFRCxJQUFBaUMsSUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxPQUFBLEdBQUFyQyxPQUFBO1VBRU0sTUFBT2lCLFlBQVk7WUFDeEIsQ0FBQXFCLEdBQUk7WUFFSjNCLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQTJCLEdBQUksR0FBRyxJQUFJRixJQUFBLENBQUFHLEdBQUcsQ0FBQ0YsT0FBQSxDQUFBRyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUM7WUFDN0M7WUFFQSxNQUFNWixJQUFJQSxDQUFDbkIsS0FBSztjQUNmLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNoQyxLQUFLLENBQUNILGFBQWEsQ0FBQztjQUVyQyxNQUFNO2dCQUFFdUIsTUFBTTtnQkFBRUc7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQUcsR0FBSSxDQUFDTyxJQUFJLENBQUMsYUFBYSxFQUFFakMsS0FBSyxDQUFDO2NBRW5FLElBQUksQ0FBQ29CLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzs7Y0FHM0MsT0FBTztnQkFBRUQsTUFBTTtnQkFBRUc7Y0FBSSxDQUFFO1lBQ3hCOztVQUNBdEMsT0FBQSxDQUFBb0IsWUFBQSxHQUFBQSxZQUFBIiwiaWdub3JlTGlzdCI6W119