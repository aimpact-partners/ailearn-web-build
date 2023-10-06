System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.0.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.0.0/app", "@beyond-js/reactive@1.1.6/model", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_firebase1000Auth) {
      dependency_2 = _firebase1000Auth;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_firebase1000App) {
      dependency_4 = _firebase1000App;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/app', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3999769167,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _config = require("./firebase/config");
          var _token = require("./token");
          var _auth = require("firebase/auth");
          var _core = require("@beyond-js/kernel/core");
          class Auth {
            #uid;
            #pendingLogin;
            static async login(email, password) {
              const userCredential = await (0, _config.auth)().signInWithEmailAndPassword(email, password);
              const user = new _users.User(userCredential.user.uid, userCredential.user.displayName, userCredential.user.email);
              const token = await _token.TokenManager.getToken(user);
              await _token.TokenManager.storeToken(token, user);
              return user;
            }
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
            registerWithEmail = async (email, password, userName) => {
              try {
                const response = await (0, _auth.createUserWithEmailAndPassword)(_config.auth, email, password);
                const userWithDisplayName = {
                  ...response.user,
                  displayName: userName
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
        hash: 550005946,
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
          const firebaseConfigTesting = {
            apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
            authDomain: 'chat-api-test-393820.firebaseapp.com',
            projectId: 'chat-api-test-393820',
            storageBucket: 'chat-api-test-393820.appspot.com',
            messagingSenderId: '1083395329827',
            appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
          };
          const firebaseConfig = {
            apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
            authDomain: 'aimpact-partners-dev.firebaseapp.com',
            databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
            projectId: 'aimpact-partners-dev',
            storageBucket: 'aimpact-partners-dev.appspot.com',
            messagingSenderId: '1081434267674',
            appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
            measurementId: 'G-QLL5WFH89Y'
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(firebaseConfig);
          const auth = (0, _auth.getAuth)(app);
          exports.auth = auth;
          const googleProvider = new _auth.GoogleAuthProvider();
          exports.googleProvider = googleProvider;
          const facebookProvider = new _auth.FacebookAuthProvider();
          exports.facebookProvider = facebookProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 822604179,
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
                return response;
              } catch (e) {
                console.error(e);
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
          const sessionWrapper = new SessionManager();
          exports.sessionWrapper = sessionWrapper;
          globalThis.s = sessionWrapper;
        }
      });

      /***********************
      INTERNAL MODULE: ./token
      ***********************/

      ims.set('./token', {
        hash: 467389159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenManager = void 0;
          var _config = require("./firebase/config");
          class TokenManager {
            static async getToken(user) {
              const firebaseUser = await (0, _config.auth)().getUser(user.id);
              const token = await firebaseUser.getIdToken();
              return token;
            }
            static async storeToken(token, user) {
              // Logic to store token to your backend and generate your own value.
              // This could involve making a fetch or axios request to your backend API.
            }
            static async refreshToken(user) {
              const firebaseUser = await (0, _config.auth)().getUser(user.id);
              const newToken = await firebaseUser.getIdToken(true);
              return newToken;
            }
            static async validateToken(token) {
              return true;
              // Validate token logic...
            }
          }

          exports.TokenManager = TokenManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekUsSUFBSSxDQUFDZ0IsRUFBRSxDQUFDO2NBQ2xELE1BQU1aLEtBQUssR0FBRyxNQUFNb0UsWUFBWSxDQUFDMUQsVUFBVSxFQUFFO2NBQzdDLE9BQU9WLEtBQUs7WUFDYjtZQUVBLGFBQWFHLFVBQVUsQ0FBQ0gsS0FBYSxFQUFFSixJQUFVO2NBQ2hEO2NBQ0E7WUFBQTtZQUdELGFBQWEwRSxZQUFZLENBQUMxRSxJQUFVO2NBQ25DLE1BQU13RSxZQUFZLEdBQUcsTUFBTSxnQkFBSSxHQUFFLENBQUNDLE9BQU8sQ0FBQ3pFLElBQUksQ0FBQ2dCLEVBQUUsQ0FBQztjQUNsRCxNQUFNMkQsUUFBUSxHQUFHLE1BQU1ILFlBQVksQ0FBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDcEQsT0FBTzZELFFBQVE7WUFDaEI7WUFFQSxhQUFhQyxhQUFhLENBQUN4RSxLQUFhO2NBQ3ZDLE9BQU8sSUFBSTtjQUNYO1lBQ0Q7OztVQUNBa0MiLCJuYW1lcyI6WyJBdXRoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJVc2VyIiwidWlkIiwiZGlzcGxheU5hbWUiLCJ0b2tlbiIsIlRva2VuTWFuYWdlciIsImdldFRva2VuIiwic3RvcmVUb2tlbiIsImFwcExvZ2luIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsInNwZWNzIiwiaWQiLCJzZXQiLCJ0aGVuIiwiY291bGRMb2ciLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNvbHZlIiwic3RhdHVzIiwic2lnbkluV2l0aEdvb2dsZSIsImF1dGgiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiZmlyZWJhc2VDb25maWdUZXN0aW5nIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VDb25maWciLCJkYXRhYmFzZVVSTCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVyIiwic2V0VXNlciIsInJlYWR5IiwidXBkYXRlVXNlciIsImRhdGEiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImZpcmViYXNlVXNlciIsImdldFVzZXIiLCJyZWZyZXNoVG9rZW4iLCJuZXdUb2tlbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1dGgudHMiLCJmaXJlYmFzZS9jb25maWcudHMiLCJpbmRleC50cyIsInRva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19