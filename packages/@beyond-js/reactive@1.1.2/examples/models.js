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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFJTztVQUFVLE1BQU9BLEtBQU0sU0FBUUMsb0JBQVU7WUFDL0NDO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxRQUFRLEVBQUVDLHNCQUFZO2dCQUFFQyxTQUFTLEVBQUUsT0FBTztnQkFBRUMsRUFBRSxFQUFFLE1BQU07Z0JBQUVDLElBQUksRUFBRUM7Y0FBSSxDQUFFLENBQUM7WUFDOUU7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZEO1VBUU87VUFBVyxNQUNaRCxJQUFLLFNBQVFFLGNBQVc7WUFDbkJDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUV4RFQsWUFBWTtjQUFFVSxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUCxTQUFTLEVBQUUsTUFBTTtnQkFBRUMsRUFBRSxFQUFFO2NBQU0sQ0FBRSxDQUFDO1lBQzdDOztVQUNBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmRDtVQUNBO1VBVU87VUFBVyxNQUNaSyxJQUFLLFNBQVFKLGNBQVc7WUFDbkJDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO1lBRWpEVCxZQUFZO2NBQUVVLEVBQUUsR0FBR0M7WUFBUyxDQUFVO2NBQ3JDLEtBQUssQ0FBQztnQkFBRVIsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLEVBQUUsRUFBRSxNQUFNO2dCQUFFTSxFQUFFO2dCQUFFVCxRQUFRLEVBQUVDO2NBQVksQ0FBRSxDQUFDO1lBQ3JFOztVQUNBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQ7VUFDQTtVQUNBO1VBSU87VUFBVSxNQUFPTSxLQUFNLFNBQVFkLG9CQUFVO1lBQy9DTSxJQUFJLEdBQUdPLFdBQUk7WUFFWFo7Y0FDQyxLQUFLLENBQUM7Z0JBQUVHLFNBQVMsRUFBRSxNQUFNO2dCQUFFQyxFQUFFLEVBQUUsTUFBTTtnQkFBRUgsUUFBUSxFQUFFQyxzQkFBWTtnQkFBRUcsSUFBSSxFQUFFTztjQUFJLENBQUUsQ0FBQztZQUM3RTs7VUFDQUwiLCJuYW1lcyI6WyJCb29rcyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiQm9vayIsImV4cG9ydHMiLCJJdGVtIiwicHJvcGVydGllcyIsImlkIiwidW5kZWZpbmVkIiwiVXNlciIsIlVzZXJzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJib29rcy9jb2xsZWN0aW9uLnRzIiwiYm9va3MvaW5kZXgudHMiLCJ1c2Vycy9pbmRleC50cyIsInVzZXJzL3VzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19