System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@0.2.0/provider", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, User, __beyond_pkg, hmr;
  _export("User", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Entities) {
      dependency_1 = _beyondJsReactive116Entities;
    }, function (_aimpactChatApi020Provider) {
      dependency_2 = _aimpactChatApi020Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./item
      **********************/
      ims.set('./item', {
        hash: 3240821629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
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
              const response = await this.provider.login(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2NvcmUiLCJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsImZpcmViYXNlVXNlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJpc1JlYWR5Iiwic2V0IiwicmVzb2x2ZSIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnRpZXMiLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwiZXJyb3IiLCJkYXRhIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQVVPLFdBYlA7O1VBYWlCLE1BQU9HLElBQUssU0FBUUosU0FBQSxDQUFBSyxJQUFXO1lBQ3JDQyxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztZQUV6RixDQUFBQyxNQUFPO1lBU1AsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFlBQWE7WUFDYixJQUFJRixNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLElBQUlHLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsWUFBYSxHQUFHLElBQUksQ0FBQyxDQUFBQSxZQUFhLENBQUNFLFVBQVUsRUFBRSxHQUFHLElBQUk7WUFDbkU7WUFDQUMsWUFBWUMsS0FBSztjQUNoQixLQUFLLENBQUM7Z0JBQUVDLEVBQUUsRUFBRUQsS0FBSyxDQUFDQyxFQUFFO2dCQUFFQyxFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLFFBQVEsRUFBRWYsU0FBQSxDQUFBZ0I7Y0FBWSxDQUFFLENBQUM7Y0FFbEYsSUFBSSxDQUFDQyxVQUFVLENBQUNOLEtBQUssQ0FBQztZQUN2QjtZQUVBTSxVQUFVLEdBQUcsTUFBTU4sS0FBSyxJQUFHO2NBQzFCLEtBQUssQ0FBQ08sVUFBVSxFQUFFO2NBQ2xCO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQVosV0FBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7Y0FDL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJTCxLQUFBLENBQUFrQixjQUFjLEVBQUU7Y0FDeEMsTUFBTSxJQUFJLENBQUNDLE9BQU87Y0FDbEIsTUFBTSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1YsS0FBSyxDQUFDO2NBQ3JCLElBQUksQ0FBQyxDQUFBTCxXQUFZLENBQUNnQixPQUFPLEVBQUU7WUFDNUIsQ0FBQztZQUVEQyxlQUFlLEdBQUcsTUFBTUMsSUFBSSxJQUFHO2NBQzlCLElBQUksQ0FBQyxDQUFBakIsWUFBYSxHQUFHaUIsSUFBSTtZQUMxQixDQUFDO1lBQ0QsTUFBTUMsS0FBS0EsQ0FBQ2pCLGFBQWE7Y0FDeEIsTUFBTSxJQUFJLENBQUNZLE9BQU87Y0FDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQWYsTUFBTyxFQUFFO2NBRWxCLE1BQU1NLEtBQUssR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQ2UsYUFBYSxFQUFFO2dCQUFFZCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2dCQUFFSjtjQUFhLENBQUU7Y0FFckUsTUFBTW1CLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ1osUUFBUSxDQUFDVSxLQUFLLENBQUNkLEtBQUssQ0FBQztjQUVqRCxJQUFJLENBQUNnQixRQUFRLENBQUNDLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDOztjQUVoQyxNQUFNLElBQUksQ0FBQ1QsR0FBRyxDQUFDTSxRQUFRLENBQUNJLElBQUksQ0FBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQztjQUV4QztjQUNBLElBQUksQ0FBQyxDQUFBbkIsTUFBTyxHQUFHLElBQUk7Y0FDbkIsT0FBTyxJQUFJO1lBQ1o7O1VBQ0EyQixPQUFBLENBQUE5QixJQUFBLEdBQUFBLElBQUEifQ==