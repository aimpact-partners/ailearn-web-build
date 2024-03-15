System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "@aimpact/chat-sdk@1.0.0/settings", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@aimpact/ailearn-app@0.0.27/config", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_aimpactChatSdk100Settings) {
      dependency_2 = _aimpactChatSdk100Settings;
    }, function (_firebase1050Auth) {
      dependency_3 = _firebase1050Auth;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_firebase1050App) {
      dependency_5 = _firebase1050App;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_6 = _aimpactAilearnApp0027Config;
    }, function (_beyondJsReactive1111Model) {
      dependency_7 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['@aimpact/chat-sdk/settings', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6], ['@beyond-js/reactive/model', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 2902226634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _config = require("./firebase/config");
          var _settings = require("@aimpact/chat-sdk/settings");
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
                // const user = new User(specs);
                const user = new _settings.SDKSettings.userModel(specs);
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
        hash: 2936358833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = void 0;
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          var _config = require("@aimpact/chat-sdk/config");
          // Import the functions you need from the SDKs you need

          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const DEV = {
            apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
            authDomain: 'aimpact-partners-dev.firebaseapp.com',
            databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
            projectId: 'aimpact-partners-dev',
            storageBucket: 'aimpact-partners-dev.appspot.com',
            messagingSenderId: '1081434267674',
            appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
            measurementId: 'G-QLL5WFH89Y'
          };
          const CONFIG = {
            local: DEV,
            development: DEV,
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
          const app = (0, _app.initializeApp)(CONFIG[_config.default.environment]);
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2808533940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _settings = require("@aimpact/chat-sdk/settings");
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
              const user = new _settings.SDKSettings.userModel({
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
                globalThis.localStorage.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInVzZXIiLCJQZW5kaW5nUHJvbWlzZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwiU0RLU2V0dGluZ3MiLCJ1c2VyTW9kZWwiLCJzZXQiLCJsb2dpbiIsInRoZW4iLCJjb3VsZExvZyIsImNvbnNvbGUiLCJlcnJvciIsInJlc29sdmUiLCJzdGF0dXMiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiYXV0aCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwicGFzc3dvcmQiLCJ1c2VybmFtZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXJXaXRoRGlzcGxheU5hbWUiLCJtZXNzYWdlIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiX21vZGVsIiwiX2F1dGgyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJ1cGRhdGVVc2VyIiwiZGF0YSIsInNldEZpcmViYXNlVXNlciIsInVuZGVmaW5lZCIsInRyaWdnZXJFdmVudCIsImUiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uV3JhcHBlciIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBVUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBUU0sTUFBT0ksSUFBSTtZQUNoQixDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUViQyxRQUFRLEdBQUcsTUFBT0MsUUFBd0IsSUFBSTtjQUM3QyxJQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRUosR0FBRyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBQSxHQUFJLEtBQUtHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixHQUFHLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixHQUFHO2dCQUM3QixJQUFJLElBQUks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