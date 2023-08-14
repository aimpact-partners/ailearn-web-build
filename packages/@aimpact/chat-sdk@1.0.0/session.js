System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.2/model", "firebase@10.1.0/auth", "firebase@10.1.0/app", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }, function (_firebase1010Auth) {
      dependency_4 = _firebase1010Auth;
    }, function (_firebase1010App) {
      dependency_5 = _firebase1010App;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_7 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiX3Rva2VuIiwiX2F1dGgiLCJBdXRoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsInVpZCIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwicGhvdG9VUkwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwic3BlY3MiLCJpZCIsInNldCIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlck5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwibWVzc2FnZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwic2lnbk91dCIsImxvZ291dCIsImV4cG9ydHMiLCJfYXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIl9tb2RlbCIsIl9jb3JlMiIsIl9hdXRoMiIsIlNlc3Npb25NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsIlBlbmRpbmdQcm9taXNlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJyZXNvbHZlIiwidXBkYXRlVXNlciIsImRhdGEiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImZpcmViYXNlVXNlciIsImdldFVzZXIiLCJyZWZyZXNoVG9rZW4iLCJuZXdUb2tlbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiLCIvdG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFpQk0sTUFBT0ksSUFBSTtZQUNoQixhQUFhQyxLQUFLQSxDQUFDQyxLQUFhLEVBQUVDLFFBQWdCO2NBQ2pELE1BQU1DLGNBQWMsR0FBRyxNQUFNLElBQUFQLE9BQUEsQ0FBQVEsSUFBSSxHQUFFLENBQUNDLDBCQUEwQixDQUFDSixLQUFLLEVBQUVDLFFBQVEsQ0FBQztjQUMvRSxNQUFNSSxJQUFJLEdBQUcsSUFBSVosS0FBQSxDQUFBYSxJQUFJLENBQUNKLGNBQWMsQ0FBQ0csSUFBSSxDQUFDRSxHQUFHLEVBQUVMLGNBQWMsQ0FBQ0csSUFBSSxDQUFDRyxXQUFXLEVBQUVOLGNB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