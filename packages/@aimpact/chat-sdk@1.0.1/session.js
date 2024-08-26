System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/users", "firebase@10.12.0/auth", "@beyond-js/reactive@1.2.0/model", "firebase@10.12.0/app", "@aimpact/chat-sdk@1.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk101Users) {
      dependency_2 = _aimpactChatSdk101Users;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_firebase10120App) {
      dependency_5 = _firebase10120App;
    }, function (_aimpactChatSdk101Config) {
      dependency_6 = _aimpactChatSdk101Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 1629808284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _config = require("./firebase/config");
          var _core = require("@beyond-js/kernel/core");
          var _users = require("@aimpact/chat-sdk/users");
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
                // await user.login(data.accessToken);
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
              this.#user = await _users.User.getModel(specs);
              await this.#user.initialize(specs);
              if (this.#user.token) {
                await this.#user.load();
              }
              // this.#getUserPromise.resolve(this.#user);
              return this.#user;
            }
            appLogin = async user => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!user?.uid) {
                return {
                  status: false,
                  error: 'INVALID_USER'
                };
              }
              this.#uid = user.uid;
              this.#pendingLogin = new _core.PendingPromise();
              const {
                displayName,
                photoURL,
                email,
                phoneNumber,
                uid
              } = user;
              const firebaseToken = await user.getIdToken();
              const specs = {
                id: uid,
                displayName,
                photoURL,
                email,
                phoneNumber,
                firebaseToken
              };
              // const user = new User(specs);
              const model = await this.getUserModel(specs);
              const logInValidation = couldLog => {
                if (!couldLog) {
                  console.error('Could not login', couldLog);
                }
                this.trigger('login');
                this.#pendingLogin.resolve({
                  status: true,
                  model
                });
              };
              model.login(firebaseToken).then(logInValidation);
              return this.#pendingLogin;
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
                return await this.appLogin(response.user);
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
        hash: 1942609227,
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
          const BETA = {
            apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
            authDomain: 'aimpact-partners-prod.firebaseapp.com',
            projectId: 'aimpact-partners-prod',
            storageBucket: 'aimpact-partners-prod.appspot.com',
            messagingSenderId: '741854278426',
            appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
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
            quality: BETA,
            production: BETA
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
        hash: 2391878751,
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
              return this.#auth.signInWithGoogle();
              // console.log(-5, 'response', response);
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
                function clear(keepKeys) {
                  const keysToKeep = new Set(keepKeys);
                  Object.keys(localStorage).forEach(key => {
                    if (!keysToKeep.has(key)) {
                      localStorage.removeItem(key);
                    }
                  });
                }
                clear(['ailearn.home.tour']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJhcHBMb2dpbiIsInJlYWR5IiwidHJpZ2dlciIsInNldFVzZXIiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzcGVjcyIsIlVzZXIiLCJnZXRNb2RlbCIsImluaXRpYWxpemUiLCJ0b2tlbiIsImxvYWQiLCJzdGF0dXMiLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsIm1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJjb25zb2xlIiwicmVzb2x2ZSIsImxvZ2luIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJjbGVhciIsImtlZXBLZXlzIiwia2V5c1RvS2VlcCIsIlNldCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwicmVtb3ZlSXRlbSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVdBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVNLE1BQU9LLElBQUssU0FBUUQsTUFB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