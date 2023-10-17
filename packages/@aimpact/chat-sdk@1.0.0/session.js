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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
        hash: 4204140638,
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
          const app = (0, _app.initializeApp)(firebaseConfigTesting);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pFLElBQUksQ0FBQ2dCLEVBQUUsQ0FBQztjQUNsRCxNQUFNWixLQUFLLEdBQUcsTUFBTW9FLFlBQVksQ0FBQzFELFVBQVUsRUFBRTtjQUM3QyxPQUFPVixLQUFLO1lBQ2I7WUFFQSxhQUFhRyxVQUFVLENBQUNILEtBQWEsRUFBRUosSUFBVTtjQUNoRDtjQUNBO1lBQUE7WUFHRCxhQUFhMEUsWUFBWSxDQUFDMUUsSUFBVTtjQUNuQyxNQUFNd0UsWUFBWSxHQUFHLE1BQU0sZ0JBQUksR0FBRSxDQUFDQyxPQUFPLENBQUN6RSxJQUFJLENBQUNnQixFQUFFLENBQUM7Y0FDbEQsTUFBTTJELFFBQVEsR0FBRyxNQUFNSCxZQUFZLENBQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ3BELE9BQU82RCxRQUFRO1lBQ2hCO1lBRUEsYUFBYUMsYUFBYSxDQUFDeEUsS0FBYTtjQUN2QyxPQUFPLElBQUk7Y0FDWDtZQUNEOzs7VUFDQWtDIiwibmFtZXMiOlsiQXV0aCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJDcmVkZW50aWFsIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsInVpZCIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiUGVuZGluZ1Byb21pc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJ1c2VyTmFtZSIsInVzZXJXaXRoRGlzcGxheU5hbWUiLCJtZXNzYWdlIiwicmVzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJzaWduT3V0IiwibG9nb3V0IiwiZXhwb3J0cyIsImZpcmViYXNlQ29uZmlnVGVzdGluZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQ29uZmlnIiwiZGF0YWJhc2VVUkwiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lciIsInNldFVzZXIiLCJyZWFkeSIsInVwZGF0ZVVzZXIiLCJkYXRhIiwic2V0RmlyZWJhc2VVc2VyIiwidW5kZWZpbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiLCJmaXJlYmFzZVVzZXIiLCJnZXRVc2VyIiwicmVmcmVzaFRva2VuIiwibmV3VG9rZW4iLCJ2YWxpZGF0ZVRva2VuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdXRoLnRzIiwiZmlyZWJhc2UvY29uZmlnLnRzIiwiaW5kZXgudHMiLCJ0b2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==