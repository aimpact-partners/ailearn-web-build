System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, User, __beyond_pkg, hmr;
  _export("User", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive113Entities) {
      dependency_1 = _beyondJsReactive113Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2624061057,
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
              this.init(specs);
            }
            init = async specs => {
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              await this.isReady;
              await this.set(specs);
              this.#promiseInit.resolve();
            };
            setFirebaseUser = async user => {
              this.#firebaseUser = user;
            };
            async login(data) {
              await this.isReady;
              if (this.#logged) return;
              const specs = {
                ...this.getProperties(),
                id: this.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQTtVQUNBO1VBQ0E7VUFVTyxXQWJQOztVQWFpQixNQUFPQSxJQUFLLFNBQVFDLGNBQVc7WUFDckNDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBRXpGLE9BQU87WUFTUCxZQUFZO1lBQ1osYUFBYTtZQUNiLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsSUFBSUMsYUFBYTtjQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQ0MsVUFBVSxFQUFFLEdBQUcsSUFBSTtZQUNuRTtZQUNBQyxZQUFZQyxLQUFLO2NBQ2hCLEtBQUssQ0FBQztnQkFBRUMsRUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsTUFBTTtnQkFBRUMsUUFBUSxFQUFFQztjQUFZLENBQUUsQ0FBQztjQUNsRixJQUFJLENBQUNDLElBQUksQ0FBQ04sS0FBSyxDQUFDO1lBQ2pCO1lBRUFNLElBQUksR0FBRyxNQUFNTixLQUFLLElBQUc7Y0FDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVk7Y0FDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJTyxvQkFBYyxFQUFFO2NBRXhDLE1BQU0sSUFBSSxDQUFDQyxPQUFPO2NBQ2xCLE1BQU0sSUFBSSxDQUFDQyxHQUFHLENBQUNULEtBQUssQ0FBQztjQUVyQixJQUFJLENBQUMsWUFBWSxDQUFDVSxPQUFPLEVBQUU7WUFDNUIsQ0FBQztZQUVEQyxlQUFlLEdBQUcsTUFBTUMsSUFBSSxJQUFHO2NBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUdBLElBQUk7WUFDMUIsQ0FBQztZQUNELE1BQU1DLEtBQUssQ0FBQ0MsSUFBSTtjQUNmLE1BQU0sSUFBSSxDQUFDTixPQUFPO2NBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtjQUVsQixNQUFNUixLQUFLLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUNlLGFBQWEsRUFBRTtnQkFBRWQsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRXRELE1BQU1lLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ1osUUFBUSxDQUFDUyxLQUFLLENBQUNiLEtBQUssQ0FBQztjQUNqRCxJQUFJLENBQUNnQixRQUFRLENBQUNDLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDOztjQUVoQyxNQUFNLElBQUksQ0FBQ1YsR0FBRyxDQUFDTyxRQUFRLENBQUNGLElBQUksQ0FBQ0YsSUFBSSxDQUFDO2NBQ2xDLElBQUksQ0FBQ1EsV0FBVyxDQUFDSixRQUFRLENBQUNGLElBQUksQ0FBQ0YsSUFBSSxDQUFDO2NBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQixPQUFPLElBQUk7WUFDWjs7VUFDQVMiLCJuYW1lcyI6WyJVc2VyIiwiSXRlbSIsInByb3BlcnRpZXMiLCJsb2dnZWQiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJpZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJpbml0IiwiUGVuZGluZ1Byb21pc2UiLCJpc1JlYWR5Iiwic2V0IiwicmVzb2x2ZSIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImRhdGEiLCJnZXRQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwibG9jYWxVcGRhdGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19