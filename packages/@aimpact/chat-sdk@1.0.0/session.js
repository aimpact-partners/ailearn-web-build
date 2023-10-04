System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.1.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.1.0/app", "@beyond-js/reactive@1.1.6/model", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_firebase1010Auth) {
      dependency_2 = _firebase1010Auth;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_firebase1010App) {
      dependency_4 = _firebase1010App;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl90b2tlbiIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiUGVuZGluZ1Byb21pc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsImZpcmViYXNlQ29uZmlnVGVzdGluZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQ29uZmlnIiwiZGF0YWJhc2VVUkwiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJfbW9kZWwiLCJfYXV0aDIiLCJTZXNzaW9uTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJsaXN0ZW5lciIsInNldFVzZXIiLCJyZWFkeSIsInVwZGF0ZVVzZXIiLCJkYXRhIiwic2V0RmlyZWJhc2VVc2VyIiwidW5kZWZpbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiLCJmaXJlYmFzZVVzZXIiLCJnZXRVc2VyIiwicmVmcmVzaFRva2VuIiwibmV3VG9rZW4iLCJ2YWxpZGF0ZVRva2VuIl0sInNvdXJjZXMiOlsiL2F1dGgudHMiLCIvZmlyZWJhc2UvY29uZmlnLnRzIiwiL2luZGV4LnRzIiwiL3Rva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVVBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQVFNLE1BQU9LLElBQUk7WUFDaEIsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLFlBQWE7WUFDYixhQUFhQyxLQUFLQSxDQUFDQyxLQUFhLEVBQUVDLFFBQWdCO2NBQ2pELE1BQU1DLGNBQWMsR0FBRyxNQUFNLElBQUFWLE9BQUEsQ0FBQVcsSUFBSSxHQUFFLENBQUNDLDBCQUEwQixDQUFDSixLQUFLLEVBQUVDLFFBQVEsQ0FB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