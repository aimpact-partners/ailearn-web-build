System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/settings", "@beyond-js/kernel@0.1.9/core", "firebase@10.9.0/auth", "@beyond-js/reactive@1.1.12/model", "firebase@10.9.0/app", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context) {
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
    }, function (_firebase1090Auth) {
      dependency_3 = _firebase1090Auth;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_firebase1090App) {
      dependency_5 = _firebase1090App;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_6 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 4215675022,
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
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                await user.login(data.accessToken);
                await this.appLogin(data);
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
              if (this.#user.token) {
                await this.#user.load();
              }
              // this.#getUserPromise.resolve(this.#user);
              return this.#user;
            }
            appLogin = async response => {
              if (this.#pendingLogin) return this.#pendingLogin;
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
                  console.log('in log in validation', this);
                  this.trigger('login');
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
                this.#pendingLogin = undefined;
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
        hash: 1454012932,
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
        hash: 3248857962,
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
              this.#auth.on('login', () => this.trigger('login'));
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
                // console.log(-5, 'response', response);
                if (!response?.status) return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9jb3JlIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJTREtTZXR0aW5ncyIsInVzZXJNb2RlbCIsImluaXRpYWxpemUiLCJ0b2tlbiIsImxvYWQiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwicmVzb2x2ZSIsInN0YXR1cyIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJtZXNzYWdlIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uV3JhcHBlciIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQWFBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVNLE1BQU9LLElBQUssU0FBUUQsTUFBQSxDQUFBRSxhQUFtQjtZQUM1QyxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJ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