System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.5/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, User, __beyond_pkg, hmr;
  _export("User", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive115Entities) {
      dependency_1 = _beyondJsReactive115Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3889646363,
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
              await this.set(response.data.user);
              this.localUpdate(response.data.user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2NvcmUiLCJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsImZpcmViYXNlVXNlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsImluaXRpYWxpemUiLCJQZW5kaW5nUHJvbWlzZSIsImlzUmVhZHkiLCJzZXQiLCJyZXNvbHZlIiwic2V0RmlyZWJhc2VVc2VyIiwidXNlciIsImxvZ2luIiwiZ2V0UHJvcGVydGllcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImRhdGEiLCJsb2NhbFVwZGF0ZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFVTyxXQWJQOztVQWFpQixNQUFPRyxJQUFLLFNBQVFKLFNBQUEsQ0FBQUssSUFBVztZQUNyQ0MsVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7WUFFekYsQ0FBQUMsTUFBTztZQVNQLENBQUFDLFdBQVk7WUFDWixDQUFBQyxZQUFhO1lBQ2IsSUFBSUYsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxJQUFJRyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFELFlBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQUEsWUFBYSxDQUFDRSxVQUFVLEVBQUUsR0FBRyxJQUFJO1lBQ25FO1lBQ0FDLFlBQVlDLEtBQUs7Y0FDaEIsS0FBSyxDQUFDO2dCQUFFQyxFQUFFLEVBQUVELEtBQUssQ0FBQ0MsRUFBRTtnQkFBRUMsRUFBRSxFQUFFLFVBQVU7Z0JBQUVDLFNBQVMsRUFBRSxNQUFNO2dCQUFFQyxRQUFRLEVBQUVmLFNBQUEsQ0FBQWdCO2NBQVksQ0FBRSxDQUFDO2NBQ2xGLElBQUksQ0FBQ0MsVUFBVSxDQUFDTixLQUFLLENBQUM7WUFDdkI7WUFFQU0sVUFBVSxHQUFHLE1BQU1OLEtBQUssSUFBRztjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBTCxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtjQUMvQyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUlMLEtBQUEsQ0FBQWlCLGNBQWMsRUFBRTtjQUV4QyxNQUFNLElBQUksQ0FBQ0MsT0FBTztjQUNsQixNQUFNLElBQUksQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLLENBQUM7Y0FFckIsSUFBSSxDQUFDLENBQUFMLFdBQVksQ0FBQ2UsT0FBTyxFQUFFO1lBQzVCLENBQUM7WUFFREMsZUFBZSxHQUFHLE1BQU1DLElBQUksSUFBRztjQUM5QixJQUFJLENBQUMsQ0FBQWhCLFlBQWEsR0FBR2dCLElBQUk7WUFDMUIsQ0FBQztZQUNELE1BQU1DLEtBQUtBLENBQUNoQixhQUFhO2NBQ3hCLE1BQU0sSUFBSSxDQUFDVyxPQUFPO2NBQ2xCLElBQUksSUFBSSxDQUFDLENBQUFkLE1BQU8sRUFBRTtjQUVsQixNQUFNTSxLQUFLLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUNjLGFBQWEsRUFBRTtnQkFBRWIsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFBRUo7Y0FBYSxDQUFFO2NBQ3JFLE1BQU1rQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDYixLQUFLLENBQUM7Y0FFakQsSUFBSSxDQUFDZSxRQUFRLENBQUNDLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDOztjQUVoQyxNQUFNLElBQUksQ0FBQ1QsR0FBRyxDQUFDTSxRQUFRLENBQUNJLElBQUksQ0FBQ1AsSUFBSSxDQUFDO2NBQ2xDLElBQUksQ0FBQ1EsV0FBVyxDQUFDTCxRQUFRLENBQUNJLElBQUksQ0FBQ1AsSUFBSSxDQUFDO2NBQ3BDLElBQUksQ0FBQyxDQUFBbEIsTUFBTyxHQUFHLElBQUk7Y0FDbkIsT0FBTyxJQUFJO1lBQ1o7O1VBQ0EyQixPQUFBLENBQUE5QixJQUFBLEdBQUFBLElBQUEifQ==