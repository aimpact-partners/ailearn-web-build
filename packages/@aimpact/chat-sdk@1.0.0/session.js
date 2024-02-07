System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@beyond-js/reactive@1.1.9/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_firebase1050Auth) {
      dependency_2 = _firebase1050Auth;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_firebase1050App) {
      dependency_4 = _firebase1050App;
    }, function (_beyondJsReactive119Model) {
      dependency_5 = _beyondJsReactive119Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/app', dependency_4], ['@beyond-js/reactive/model', dependency_5]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3757955403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _config = require("./firebase/config");
          var _auth = require("firebase/auth");
          var _core = require("@beyond-js/kernel/core");
          class Auth {
            #uid;
            #pendingLogin;
            appLogin = async response => {
              if (response.user?.uid) {
                if (this.#uid === response.user.uid) return;
                this.#uid = response.user.uid;
                if (this.#pendingLogin) return this.#pendingLogin;
                this.#pendingLogin = new _core.PendingPromise();
                const {
                  displayName,
                  photoURL,
                  email,
                  phoneNumber,
                  uid
                } = response.user;
                const firebaseToken = await response.user.getIdToken();
                const specs = {
                  id: uid,
                  displayName,
                  photoURL,
                  email,
                  phoneNumber,
                  firebaseToken
                };
                const user = new _users.User(specs);
                user.set(specs, true);
                user.login(firebaseToken).then(couldLog => {
                  if (!couldLog) {
                    console.error('Could not login', couldLog);
                  }
                  this.#pendingLogin.resolve({
                    status: true,
                    user
                  });
                });
                return this.#pendingLogin;
              }
              return {
                status: false,
                error: 'INVALID_USER'
              };
            };
            signInWithGoogle = async () => {
              try {
                const response = await (0, _auth.signInWithPopup)(_config.auth, _config.googleProvider);
                //const response = await signInWithRedirect(auth, googleProvider);
                return await this.appLogin(response);
              } catch (error) {
                const errors = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                return {
                  status: false,
                  error: errors[error.code] || 'CANNOT'
                };
              }
            };
            registerWithEmail = async (email, password, username) => {
              try {
                const response = await (0, _auth.createUserWithEmailAndPassword)(_config.auth, email, password);
                const userWithDisplayName = {
                  ...response.user,
                  displayName: username
                };
                return await this.appLogin({
                  ...response,
                  user: userWithDisplayName
                });
              } catch (error) {
                return {
                  status: false,
                  error: error.message
                };
              }
            };
            resetPassword = async email => {
              try {
                await (0, _auth.sendPasswordResetEmail)(_config.auth, email);
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error: error.message
                };
              }
            };
            confirmPasswordReset = async (code, newPassword) => {
              try {
                await (0, _auth.verifyPasswordResetCode)(_config.auth, code);
                await (0, _auth.confirmPasswordReset)(_config.auth, code, newPassword);
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error: error.message
                };
              }
            };
            login = async (email, password) => {
              try {
                const response = await (0, _auth.signInWithEmailAndPassword)(_config.auth, email, password);
                return await this.appLogin(response);
              } catch (error) {
                return {
                  status: false,
                  error: error.message
                };
              }
            };
            signOut = async () => {
              try {
                await (0, _auth.signOut)(_config.auth);
              } catch (error) {
                console.error(error);
              }
            };
            logout = this.signOut;
          }
          exports.Auth = Auth;
        }
      });

      /*********************************
      INTERNAL MODULE: ./firebase/config
      *********************************/

      ims.set('./firebase/config', {
        hash: 2755192558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = void 0;
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          // Import the functions you need from the SDKs you need

          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const CONFIG = {
            development: {
              apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
              authDomain: 'aimpact-partners-dev.firebaseapp.com',
              databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
              projectId: 'aimpact-partners-dev',
              storageBucket: 'aimpact-partners-dev.appspot.com',
              messagingSenderId: '1081434267674',
              appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
              measurementId: 'G-QLL5WFH89Y'
            },
            testing: {
              apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
              authDomain: 'chat-api-test-393820.firebaseapp.com',
              projectId: 'chat-api-test-393820',
              storageBucket: 'chat-api-test-393820.appspot.com',
              messagingSenderId: '1083395329827',
              appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
            },
            production: {
              apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
              authDomain: 'aimpact-partners-prod.firebaseapp.com',
              projectId: 'aimpact-partners-prod',
              storageBucket: 'aimpact-partners-prod.appspot.com',
              messagingSenderId: '741854278426',
              appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
            }
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(CONFIG.development);
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3184953741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _users = require("@aimpact/chat-sdk/users");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth2 = require("./auth");
          class SessionManager extends _model.ReactiveModel {
            #user;
            get user() {
              return this.#user;
            }
            get userId() {
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.user;
            }
            #promise;
            get isReady() {
              return this.#promise;
            }
            #auth = new _auth2.Auth();
            get auth() {
              return this.#auth;
            }
            constructor() {
              super();
              this.#promise = new _core.PendingPromise();
              (0, _auth.onAuthStateChanged)(_config.auth, this.listener);
            }
            listener = async user => {
              if (user) {
                await this.setUser(user);
              }
              this.ready = true;
              this.#promise.resolve(this.ready);
            };
            async updateUser(data) {
              if (!data) return;
              if (this.#user && this.#user.id === data.uid) return;
              const user = new _users.User({
                id: data.uid
              });
              await user.isReady;
              user.setFirebaseUser(data);
              /* TODO Review */
              await user.set(data);
              this.#user = user;
            }
            setUser = async data => {
              if (!data && this.#user) {
                this.#user = undefined;
                this.#auth.signOut();
              }
              if (data) {
                await this.updateUser(data);
              }
              this.ready = true;
              this.triggerEvent('change');
              this.#promise.resolve(this.ready);
            };
            async signInWithGoogle() {
              try {
                const response = await this.#auth.signInWithGoogle();
                if (!response.status) return false;
                this.#user = response.user;
                this.triggerEvent('login');
                return response;
              } catch (e) {
                console.error(e);
                return {
                  status: false,
                  error: 'CANNOT'
                };
              }
            }
            async registerWithEmail({
              email,
              password,
              username
            }) {
              try {
                const response = await this.#auth.registerWithEmail(email, password, username);
                if (!response.status) return {
                  status: false,
                  error: response.error
                };
                return response;
              } catch (e) {
                return {
                  status: false,
                  error: 'CANNOT'
                };
              }
            }
            async logout() {
              try {
                await this.#auth.signOut();
                this.#user = undefined;
                this.triggerEvent('change');
                return true;
              } catch (e) {
                console.error(e);
                return false;
              }
            }
          }
          /*bundle*/
          const sessionWrapper = exports.sessionWrapper = new SessionManager();
          globalThis.s = sessionWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sessionWrapper",
        "name": "sessionWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sessionWrapper') && _export("sessionWrapper", sessionWrapper = require ? require('./index').sessionWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInVzZXIiLCJQZW5kaW5nUHJvbWlzZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwiVXNlciIsInNldCIsImxvZ2luIiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImxvZ291dCIsImV4cG9ydHMiLCJfYXBwIiwiQ09ORklHIiwiZGV2ZWxvcG1lbnQiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJ0ZXN0aW5nIiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiX21vZGVsIiwiX2F1dGgyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJ1cGRhdGVVc2VyIiwiZGF0YSIsInNldEZpcmViYXNlVXNlciIsInVuZGVmaW5lZCIsInRyaWdnZXJFdmVudCIsImUiLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIl0sInNvdXJjZXMiOlsiL2F1dGgudHMiLCIvZmlyZWJhc2UvY29uZmlnLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBVUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBUU0sTUFBT0ksSUFBSTtZQUNoQixDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUViQyxRQUFRLEdBQUcsTUFBT0MsUUFBd0IsSUFBSTtjQUM3QyxJQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRUosR0FBRyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBQSxHQUFJLEtBQUtHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixHQUFHLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixHQUFHO2dCQUM3QixJQUFJLElBQUksQ0FBQyxDQUFBQyxZQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtnQkFDakQsSUFBSSxDQUFDLENBQUFBLFlBQWEsR0FBRyxJQUFJSCxL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