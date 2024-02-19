System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@aimpact/chat-sdk@1.0.0/settings", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
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
    }, function (_aimpactChatSdk100Settings) {
      dependency_5 = _aimpactChatSdk100Settings;
    }, function (_beyondJsReactive1111Model) {
      dependency_6 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/app', dependency_4], ['@aimpact/chat-sdk/settings', dependency_5], ['@beyond-js/reactive/model', dependency_6]]);
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
        hash: 3241177956,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInVzZXIiLCJQZW5kaW5nUHJvbWlzZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwiVXNlciIsInNldCIsImxvZ2luIiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImxvZ291dCIsImV4cG9ydHMiLCJfYXBwIiwiQ09ORklHIiwiZGV2ZWxvcG1lbnQiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJ0ZXN0aW5nIiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiX3NldHRpbmdzIiwiX21vZGVsIiwiX2F1dGgyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJ1cGRhdGVVc2VyIiwiZGF0YSIsIlNES1NldHRpbmdzIiwidXNlck1vZGVsIiwic2V0RmlyZWJhc2VVc2VyIiwidW5kZWZpbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQVVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVFNLE1BQU9JLElBQUk7WUFDaEIsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLFlBQWE7WUFFYkMsUUFBUSxHQUFHLE1BQU9DLFFBQXdCLElBQUk7Y0FDN0MsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUVKLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsQ0FBQUEsR0FBSSxLQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQ0osR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHRyxRQUFRLENBQUNDLElBQUksQ0FBQ0osR0FBRztnQkFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQUMsWUFBYSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7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