System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.0.0/auth", "firebase@10.0.0/app", "@beyond-js/reactive@1.1.4/model", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
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
    }, function (_firebase1000App) {
      dependency_3 = _firebase1000App;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_6 = _react;
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
          "vspecifier": "@aimpact/chat-sdk@1.0.0/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['firebase/app', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['react', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3471543116,
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
          class Auth {
            static async login(email, password) {
              const userCredential = await (0, _config.auth)().signInWithEmailAndPassword(email, password);
              const user = new _users.User(userCredential.user.uid, userCredential.user.displayName, userCredential.user.email);
              const token = await _token.TokenManager.getToken(user);
              await _token.TokenManager.storeToken(token, user);
              return user;
            }
            appLogin = async response => {
              if (response.user?.uid) {
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
                user.set(specs);
                const couldLog = await user.login(firebaseToken);
                if (!couldLog) {
                  console.error('Could not login', couldLog);
                }
                return {
                  status: true,
                  user
                };
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
        hash: 4253073890,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBRUEsYUFBYUMsYUFBYSxDQUFDdkUsS0FBYTtjQUN2QyxPQUFPLElBQUk7Y0FDWDtZQUNEOzs7VUFDQStCIiwibmFtZXMiOlsiQXV0aCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJDcmVkZW50aWFsIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsInVpZCIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwicGhvdG9VUkwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwic3BlY3MiLCJpZCIsInNldCIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwic2lnbkluV2l0aEdvb2dsZSIsImF1dGgiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiZmlyZWJhc2VDb25maWdUZXN0aW5nIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VDb25maWciLCJkYXRhYmFzZVVSTCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsIlBlbmRpbmdQcm9taXNlIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJyZXNvbHZlIiwidXBkYXRlVXNlciIsImRhdGEiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImZpcmViYXNlVXNlciIsImdldFVzZXIiLCJyZWZyZXNoVG9rZW4iLCJuZXdUb2tlbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1dGgudHMiLCJmaXJlYmFzZS9jb25maWcudHMiLCJpbmRleC50cyIsInRva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19