System.register(["@beyond-js/backend@0.1.8/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, BooksProvider, BookProvider, UserProvider, UsersProvider, __beyond_pkg, hmr;
  _export({
    BooksProvider: void 0,
    BookProvider: void 0,
    UserProvider: void 0,
    UsersProvider: void 0
  });
  return {
    setters: [function (_beyondJsBackend018Client) {
      dependency_0 = _beyondJsBackend018Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.2/tests/backend/provider"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./books/books
      *****************************/
      ims.set('./books/books', {
        hash: 1208873034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BooksProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class BooksProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("books\\books//BooksProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\books//BooksProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\books//BooksProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("books\\books//BooksProvider//send", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.BooksProvider = BooksProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 693800996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BookProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class BookProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("books\\index//BookProvider//publish", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\index//BookProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\index//BookProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("books\\index//BookProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.BookProvider = BookProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 2405032212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("users\\index//UserProvider//publish", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("users\\index//UserProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\index//UserProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("users\\index//UserProvider//bulkSave", ...arguments);
            }
            async delete(id) {
              return await this.execute("users\\index//UserProvider//delete", ...arguments);
            }
            async deleteItems(ids) {
              return await this.execute("users\\index//UserProvider//deleteItems", ...arguments);
            }
            async prueba() {
              return await this.execute("users\\index//UserProvider//prueba", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UserProvider = UserProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 1323612197,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("users\\users//UsersProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("users\\users//UsersProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\users//UsersProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("users\\users//UsersProvider//send", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UsersProvider = UsersProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/books",
        "from": "BooksProvider",
        "name": "BooksProvider"
      }, {
        "im": "./books/index",
        "from": "BookProvider",
        "name": "BookProvider"
      }, {
        "im": "./users/index",
        "from": "UserProvider",
        "name": "UserProvider"
      }, {
        "im": "./users/users",
        "from": "UsersProvider",
        "name": "UsersProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BooksProvider') && _export("BooksProvider", BooksProvider = require ? require('./books/books').BooksProvider : value);
        (require || prop === 'BookProvider') && _export("BookProvider", BookProvider = require ? require('./books/index').BookProvider : value);
        (require || prop === 'UserProvider') && _export("UserProvider", UserProvider = require ? require('./users/index').UserProvider : value);
        (require || prop === 'UsersProvider') && _export("UsersProvider", UsersProvider = require ? require('./users/users').UsersProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRUMsc0JBQU0sQ0FBQztZQUM1Qjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JEO1VBRU8sWUFBWTtVQUFVLE1BQU9TLGFBQWMsU0FBUXBCLGFBQWE7WUFDbkUsTUFBTUMsSUFBSSxDQUFDQyxJQUFJO2NBQ1gsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBLE1BQU1DLElBQUksQ0FBQztjQUFFQztZQUFFLENBQUU7Y0FDYixPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsbUNBQW1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2hGO1lBQ0EsTUFBTUcsSUFBSTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDaEY7WUFDQSxNQUFNSSxJQUFJO2NBQ04sT0FBTyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBSztjQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUVDLHNCQUFNLENBQUM7WUFDNUI7O1VBQ0hDIiwibmFtZXMiOlsiQm9va3NQcm92aWRlciIsIkFjdGlvbnNCcmlkZ2UiLCJzYXZlIiwiZGF0YSIsImV4ZWN1dGUiLCJhcmd1bWVudHMiLCJsb2FkIiwiaWQiLCJsaXN0Iiwic2VuZCIsImNvbnN0cnVjdG9yIiwiYnVuZGxlIiwiZXhwb3J0cyIsIkJvb2tQcm92aWRlciIsInB1Ymxpc2giLCJidWxrU2F2ZSIsIlVzZXJQcm92aWRlciIsImRlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiaWRzIiwicHJ1ZWJhIiwiVXNlcnNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYm9va3MvYm9va3MudHMiLCJib29rcy9pbmRleC50cyIsInVzZXJzL2luZGV4LnRzIiwidXNlcnMvdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=