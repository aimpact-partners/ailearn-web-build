System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/entities", "@beyond-js/reactive@1.1.2/tests/backend/provider"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Books, Book, User, Users, __beyond_pkg, hmr;
  _export({
    Books: void 0,
    Book: void 0,
    User: void 0,
    Users: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Entities) {
      dependency_1 = _beyondJsReactive112Entities;
    }, function (_beyondJsReactive112TestsBackendProvider) {
      dependency_2 = _beyondJsReactive112TestsBackendProvider;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.2/examples/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/reactive/tests/backend/provider', dependency_2]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./books/collection
      **********************************/
      ims.set('./books/collection', {
        hash: 3839322128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Books = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _index = require("./index");
          var _provider = require("@beyond-js/reactive/tests/backend/provider");
          /*bundle*/
          class Books extends _entities.Collection {
            constructor() {
              super({
                provider: _provider.UserProvider,
                storeName: 'books',
                db: 'test',
                item: _index.Book
              });
            }
          }
          exports.Books = Books;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 1716820846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Book = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle */
          class Book extends _entities.Item {
            properties = ['id', 'title', 'author', 'year'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                storeName: 'book',
                db: 'test'
              });
            }
          }
          exports.Book = Book;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 3228242892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@beyond-js/reactive/tests/backend/provider");
          /*bundle */
          class User extends _entities.Item {
            properties = ['id', 'name', 'lastname'];
            constructor({
              id = undefined
            }) {
              super({
                storeName: 'user',
                db: 'test',
                id,
                provider: _provider.UserProvider
              });
            }
          }
          exports.User = User;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 2631537503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Users = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _index = require("./index");
          var _provider = require("@beyond-js/reactive/tests/backend/provider");
          /*bundle*/
          class Users extends _entities.Collection {
            item = _index.User;
            constructor() {
              super({
                storeName: 'user',
                db: 'test',
                provider: _provider.UserProvider,
                item: _index.User
              });
            }
          }
          exports.Users = Users;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/collection",
        "from": "Books",
        "name": "Books"
      }, {
        "im": "./books/index",
        "from": "Book",
        "name": "Book"
      }, {
        "im": "./users/index",
        "from": "User",
        "name": "User"
      }, {
        "im": "./users/users",
        "from": "Users",
        "name": "Users"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Books') && _export("Books", Books = require ? require('./books/collection').Books : value);
        (require || prop === 'Book') && _export("Book", Book = require ? require('./books/index').Book : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/index').User : value);
        (require || prop === 'Users') && _export("Users", Users = require ? require('./users/users').Users : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2luZGV4IiwiX3Byb3ZpZGVyIiwiQm9va3MiLCJDb2xsZWN0aW9uIiwiY29uc3RydWN0b3IiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkJvb2siLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIlVzZXIiLCJVc2VycyJdLCJzb3VyY2VzIjpbIi9ib29rcy9jb2xsZWN0aW9uLnRzIiwiL2Jvb2tzL2luZGV4LnRzIiwiL3VzZXJzL2luZGV4LnRzIiwiL3VzZXJzL3VzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUlPO1VBQVUsTUFBT0csS0FBTSxTQUFRSixTQUFBLENBQUFLLFVBQVU7WUFDL0NDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFFBQVEsRUFBRUosU0FBQSxDQUFBSyxZQUFZO2dCQUFFQyxTQUFTLEVBQUUsT0FBTztnQkFBRUMsRUFBRSxFQUFFLE1BQU07Z0JBQUVDLElBQUksRUFBRVQsTUFBQSxDQUFBVTtjQUFJLENBQUUsQ0FBQztZQUM5RTs7VUFDQUMsT0FBQSxDQUFBVCxLQUFBLEdBQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQUosU0FBQSxHQUFBQyxPQUFBO1VBUU87VUFBVyxNQUNaVyxJQUFLLFNBQVFaLFNBQUEsQ0FBQWMsSUFBVztZQUNuQkMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1lBRXhEVCxZQUFZO2NBQUVVLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVQLFNBQVMsRUFBRSxNQUFNO2dCQUFFQyxFQUFFLEVBQUU7Y0FBTSxDQUFFLENBQUM7WUFDN0M7O1VBQ0FHLE9BQUEsQ0FBQUQsSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZELElBQUFaLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQVVPO1VBQVcsTUFDWmlCLElBQUssU0FBUWxCLFNBQUEsQ0FBQWMsSUFBVztZQUNuQkMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFFakRULFlBQVk7Y0FBRVUsRUFBRSxHQUFHQztZQUFTLENBQVU7Y0FDckMsS0FBSyxDQUFDO2dCQUFFUixTQUFTLEVBQUUsTUFBTTtnQkFBRUMsRUFBRSxFQUFFLE1BQU07Z0JBQUVNLEVBQUU7Z0JBQUVULFFBQVEsRUFBRUosU0FBQSxDQUFBSztjQUFZLENBQUUsQ0FBQztZQUNyRTs7VUFDQUssT0FBQSxDQUFBSyxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFsQixTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxTQUFBLEdBQUFGLE9BQUE7VUFJTztVQUFVLE1BQU9rQixLQUFNLFNBQVFuQixTQUFBLENBQUFLLFVBQVU7WUFDL0NNLElBQUksR0FBR1QsTUFBQSxDQUFBZ0IsSUFBSTtZQUVYWixZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFRyxTQUFTLEVBQUUsTUFBTTtnQkFBRUMsRUFBRSxFQUFFLE1BQU07Z0JBQUVILFFBQVEsRUFBRUosU0FBQSxDQUFBSyxZQUFZO2dCQUFFRyxJQUFJLEVBQUVULE1BQUEsQ0FBQWdCO2NBQUksQ0FBRSxDQUFDO1lBQzdFOztVQUNBTCxPQUFBLENBQUFNLEtBQUEsR0FBQUEsS0FBQSJ9