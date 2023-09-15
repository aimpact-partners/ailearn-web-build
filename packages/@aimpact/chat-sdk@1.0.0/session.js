System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.1.0/auth", "firebase@10.1.0/app", "@beyond-js/reactive@1.1.5/model", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
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
    }, function (_firebase1010App) {
      dependency_3 = _firebase1010App;
    }, function (_beyondJsReactive115Model) {
      dependency_4 = _beyondJsReactive115Model;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3257170744,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl90b2tlbiIsIl9hdXRoIiwiQXV0aCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJDcmVkZW50aWFsIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsIlVzZXIiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsInRva2VuIiwiVG9rZW5NYW5hZ2VyIiwiZ2V0VG9rZW4iLCJzdG9yZVRva2VuIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsInNwZWNzIiwiaWQiLCJzZXQiLCJjb3VsZExvZyIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJfbW9kZWwiLCJfY29yZSIsIl9hdXRoMiIsIlNlc3Npb25NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsIlBlbmRpbmdQcm9taXNlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJyZXNvbHZlIiwidXBkYXRlVXNlciIsImRhdGEiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImZpcmViYXNlVXNlciIsImdldFVzZXIiLCJyZWZyZXNoVG9rZW4iLCJuZXdUb2tlbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiLCIvdG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBaUJNLE1BQU9JLElBQUk7WUFDaEIsYUFBYUMsS0FBS0EsQ0FBQ0MsS0FBYSxFQUFFQyxRQUFnQjtjQUNqRCxNQUFNQyxjQUFjLEdBQUcsTUFBTSxJQUFBUCxPQUFBLENBQUFRLElBQUksR0FBRSxDQUFDQywwQkFBMEIsQ0FBQ0osS0FBSyxFQUFFQyxRQUFRLENBQUM7Y0FDL0UsTUFBTUksSUFBSSxHQUFHLElBQUlaLE1BQUEsQ0FBQWEsSUFBSSxDQUFDSixjQUFjLENBQUNHLElBQUksQ0FBQ0UsR0FBRyxFQUFFTCxjQUFjLENBQUNHLElBQUksQ0FB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