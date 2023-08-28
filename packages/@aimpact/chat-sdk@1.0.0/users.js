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
        hash: 3377721287,
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
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber', 'token', 'firebaseToken'];
            #logged;
            #promiseInit;
            get logged() {
              return this.#logged;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQTtVQUNBO1VBQ0E7VUFTTyxXQVpQOztVQVlpQixNQUFPQSxJQUFLLFNBQVFDLGNBQVc7WUFDckNDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUUxRyxPQUFPO1lBU1AsWUFBWTtZQUNaLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUFDLFlBQVlDLEtBQUs7Y0FDaEIsS0FBSyxDQUFDO2dCQUFFQyxFQUFFLEVBQUVELEtBQUssQ0FBQ0MsRUFBRTtnQkFBRUMsRUFBRSxFQUFFLFVBQVU7Z0JBQUVDLFNBQVMsRUFBRSxNQUFNO2dCQUFFQyxRQUFRLEVBQUVDO2NBQVksQ0FBRSxDQUFDO2NBQ2xGLElBQUksQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUM7WUFDakI7WUFFQU0sSUFBSSxHQUFHLE1BQU1OLEtBQUssSUFBRztjQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtjQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUlPLG9CQUFjLEVBQUU7Y0FFeEMsTUFBTSxJQUFJLENBQUNDLE9BQU87Y0FDbEIsTUFBTSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1QsS0FBSyxDQUFDO2NBRXJCLElBQUksQ0FBQyxZQUFZLENBQUNVLE9BQU8sRUFBRTtZQUM1QixDQUFDO1lBRUQsTUFBTUMsS0FBSyxDQUFDQyxJQUFJO2NBQ2YsTUFBTSxJQUFJLENBQUNKLE9BQU87Y0FDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2NBRWxCLE1BQU1SLEtBQUssR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQ2EsYUFBYSxFQUFFO2dCQUFFWixFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUU7Y0FFdEQsTUFBTWEsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDVixRQUFRLENBQUNPLEtBQUssQ0FBQ1gsS0FBSyxDQUFDO2NBQ2pELElBQUksQ0FBQ2MsUUFBUSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLEtBQUssQ0FBQzs7Y0FFaEMsTUFBTSxJQUFJLENBQUNSLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDRixJQUFJLENBQUNNLElBQUksQ0FBQztjQUNsQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDRixJQUFJLENBQUNNLElBQUksQ0FBQztjQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7Y0FDbkIsT0FBTyxJQUFJO1lBQ1o7O1VBQ0FFIiwibmFtZXMiOlsiVXNlciIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9nZ2VkIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImlkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsImluaXQiLCJQZW5kaW5nUHJvbWlzZSIsImlzUmVhZHkiLCJzZXQiLCJyZXNvbHZlIiwibG9naW4iLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsInVzZXIiLCJsb2NhbFVwZGF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=