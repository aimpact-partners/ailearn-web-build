System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/settings", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/auth", "@beyond-js/reactive@1.1.11/model", "firebase@10.5.0/app", "@aimpact/ailearn-app@0.0.27/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Settings) {
      dependency_1 = _aimpactChatSdk100Settings;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_firebase1050Auth) {
      dependency_3 = _firebase1050Auth;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_firebase1050App) {
      dependency_5 = _firebase1050App;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_6 = _aimpactAilearnApp0027Config;
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/settings', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3460589783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _config = require("./firebase/config");
          var _settings = require("@aimpact/chat-sdk/settings");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          class Auth extends _model.ReactiveModel {
            #uid;
            #pendingLogin;
            #user;
            get user() {
              return this.#user;
            }
            #getUserPromise;
            #session;
            constructor(session) {
              super();
              this.session = session;
              (0, _auth.getRedirectResult)(_config.auth).then(this.onRedirectResult.bind(this));
              (0, _auth.onAuthStateChanged)(_config.auth, this.onAuthStateChanged.bind(this));
            }
            async onRedirectResult(data) {
              if (!data) return;
              this.onAuthStateChanged(data);
            }
            async onAuthStateChanged(data) {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                if (this.#user && this.#user.id === data.uid) return;
                // const user = new SDKSettings.userModel({ id: data.uid });
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                await user.login(data.accessToken);
                if (user.token) {
                  await user.load();
                }
                /* TODO Review */
                this.#user = user;
              }
              this.ready = true;
              this.trigger('ready');
            }
            async setUser(data) {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                if (!data) return;
                if (this.#user && this.#user.id === data.uid) return;
                // const user = new SDKSettings.userModel({ id: data.uid });
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                /* TODO Review */
                await user.set(data);
                this.#user = user;
              }
              this.ready = true;
              this.triggerEvent('change');
            }
            async getUserModel(specs) {
              if (this.#user && this.#user.id === specs.id) {
                await this.#user.set(specs);
                return this.#user;
              }
              if (this.#user) this.#user = undefined;
              this.#user = new _settings.SDKSettings.userModel(specs);
              await this.#user.initialize(specs);
              // this.#getUserPromise.resolve(this.#user);
              return this.#user;
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
                // const user = new User(specs);
                const user = await this.getUserModel(specs);
                const logInValidation = couldLog => {
                  if (!couldLog) {
                    console.error('Could not login', couldLog);
                  }
                  this.#pendingLogin.resolve({
                    status: true,
                    user
                  });
                };
                user.login(firebaseToken).then(logInValidation);
                return this.#pendingLogin;
              }
              return {
                status: false,
                error: 'INVALID_USER'
              };
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
            0;
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
        hash: 943844647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("./auth");
          class SessionManager extends _model.ReactiveModel {
            get user() {
              return this.#auth.user;
            }
            get userId() {
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.#auth.user;
            }
            #promise;
            get isReady() {
              return this.#promise;
            }
            #auth;
            get auth() {
              return this.#auth;
            }
            constructor() {
              super();
              this.#promise = new _core.PendingPromise();
              this.#auth = new _auth.Auth(this);
              this.#auth.on('ready', this.listenReady.bind(this));
            }
            listenReady() {
              this.ready = true;
              this.#promise.resolve(this.ready);
              this.triggerEvent('change');
            }
            async signInWithGoogle() {
              try {
                const response = await this.#auth.signInWithGoogle();
                if (!response.status) return false;
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
                globalThis.localStorage.clear();
                this.triggerEvent('logout');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9jb3JlIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwidG9rZW4iLCJsb2FkIiwicmVhZHkiLCJ0cmlnZ2VyIiwic2V0VXNlciIsInNldCIsInRyaWdnZXJFdmVudCIsInNwZWNzIiwiU0RLU2V0dGluZ3MiLCJ1c2VyTW9kZWwiLCJpbml0aWFsaXplIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJtZXNzYWdlIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uV3JhcHBlciIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQWFBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVNLE1BQU9LLElBQUssU0FBUUQsTUFBQSxDQUFBRSxhQUFtQjtZQUM1QyxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxD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