System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.3/model", "firebase@10.0.0/auth", "firebase@10.0.0/app", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Core) {
      dependency_1 = _aimpactChatSdk100Core;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_beyondJsReactive113Model) {
      dependency_3 = _beyondJsReactive113Model;
    }, function (_firebase1000Auth) {
      dependency_4 = _firebase1000Auth;
    }, function (_firebase1000App) {
      dependency_5 = _firebase1000App;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_7 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['firebase/auth', dependency_4], ['firebase/app', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['react', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 1947295083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _config = require("./firebase/config");
          var _token = require("./token");
          var _auth = require("firebase/auth");
          class Auth {
            static async login(email, password) {
              const userCredential = await (0, _config.auth)().signInWithEmailAndPassword(email, password);
              const user = new _core.User(userCredential.user.uid, userCredential.user.displayName, userCredential.user.email);
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
                const user = new _core.User(specs);
                user.set(specs);
                const couldLog = await user.login(response);
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
        hash: 1510500640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _core = require("@aimpact/chat-sdk/core");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          var _core2 = require("@beyond-js/kernel/core");
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
              this.#promise = new _core2.PendingPromise();
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
              const firebaseToken = await data.getIdToken();
              const user = new _core.User({
                id: data.uid
              });
              await user.isReady;
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
        hash: 1891705337,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDOURnQyxVQUFVLENBQUNDLENBQUMsR0FBR0YsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRjdCO1VBR00sTUFBTzdELFlBQVk7WUFDeEIsYUFBYUMsUUFBUSxDQUFDTixJQUFVO2NBQy9CLE1BQU1xRSxZQUFZLEdBQUcsTUFBTSxnQkFBSSxHQUFFLENBQUNDLE9BQU8sQ0FBQ3RFLElBQUksQ0FBQ2UsRUFBRSxDQUFDO2NBQ2xELE1BQU1YLEtBQUssR0FBRyxNQUFNaUUsWUFBWSxDQUFDeEQsVUFBVSxFQUFFO2NBQzdDLE9BQU9ULEtBQUs7WUFDYjtZQUVBLGFBQWFHLFVBQVUsQ0FBQ0gsS0FBYSxFQUFFSixJQUFVO2NBQ2hEO2NBQ0E7WUFBQTtZQUdELGFBQWF1RSxZQUFZLENBQUN2RSxJQUFVO2NBQ25DLE1BQU1xRSxZQUFZLEdBQUcsTUFBTSxnQkFBSSxHQUFFLENBQUNDLE9BQU8sQ0FBQ3RFLElBQUksQ0FBQ2UsRUFBRSxDQUFDO2NBQ2xELE1BQU15RCxRQUFRLEdBQUcsTUFBTUgsWUFBWSxDQUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNwRCxPQUFPMkQsUUFBUTtZQUNoQjtZQUVBLGFBQWFDLGFBQWEsQ0FBQ3JFLEtBQWE7Y0FDdkMsT0FBTyxJQUFJO2NBQ1g7WUFDRDs7O1VBQ0ErQiIsIm5hbWVzIjpbIkF1dGgiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyQ3JlZGVudGlhbCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsIlVzZXIiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsInRva2VuIiwiVG9rZW5NYW5hZ2VyIiwiZ2V0VG9rZW4iLCJzdG9yZVRva2VuIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsInNwZWNzIiwiaWQiLCJzZXQiLCJjb3VsZExvZyIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJ1c2VyTmFtZSIsInVzZXJXaXRoRGlzcGxheU5hbWUiLCJtZXNzYWdlIiwicmVzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJzaWduT3V0IiwibG9nb3V0IiwiZXhwb3J0cyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJQZW5kaW5nUHJvbWlzZSIsImxpc3RlbmVyIiwic2V0VXNlciIsInJlYWR5IiwicmVzb2x2ZSIsInVwZGF0ZVVzZXIiLCJkYXRhIiwidW5kZWZpbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiLCJmaXJlYmFzZVVzZXIiLCJnZXRVc2VyIiwicmVmcmVzaFRva2VuIiwibmV3VG9rZW4iLCJ2YWxpZGF0ZVRva2VuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdXRoLnRzIiwiZmlyZWJhc2UvY29uZmlnLnRzIiwiaW5kZXgudHMiLCJ0b2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==