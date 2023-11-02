System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@beyond-js/reactive@1.1.6/model", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
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
          const sessionWrapper = exports.sessionWrapper = new SessionManager();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl90b2tlbiIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiUGVuZGluZ1Byb21pc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsImZpcmViYXNlQ29uZmlnVGVzdGluZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQ29uZmlnIiwiZGF0YWJhc2VVUkwiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJfbW9kZWwiLCJfYXV0aDIiLCJTZXNzaW9uTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJsaXN0ZW5lciIsInNldFVzZXIiLCJyZWFkeSIsInVwZGF0ZVVzZXIiLCJkYXRhIiwic2V0RmlyZWJhc2VVc2VyIiwidW5kZWZpbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiLCJmaXJlYmFzZVVzZXIiLCJnZXRVc2VyIiwicmVmcmVzaFRva2VuIiwibmV3VG9rZW4iLCJ2YWxpZGF0ZVRva2VuIl0sInNvdXJjZXMiOlsiL2F1dGgudHMiLCIvZmlyZWJhc2UvY29uZmlnLnRzIiwiL2luZGV4LnRzIiwiL3Rva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVVBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQVFNLE1BQU9LLElBQUk7WUFDaEIsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLFlBQWE7WUFDYixhQUFhQyxLQUFLQSxDQUFDQyxLQUFhLEVBQUVDLFFBQWdCO2NBQ2pELE1BQU1DLGNBQWMsR0FBRyxNQUFNLElBQUFWLE9BQUEsQ0FBQVcsSUFBSSxHQUFFLENBQUNDLDBCQUEwQixDQUFDSixLQUFLLEVBQUVDLFFBQVEsQ0FB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