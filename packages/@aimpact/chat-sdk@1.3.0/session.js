System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/users", "firebase@10.14.1/auth", "@beyond-js/reactive@1.2.0/model", "firebase@10.14.1/app", "@aimpact/chat-sdk@1.3.0/config", "firebase@10.14.1/analytics"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk130Users) {
      dependency_2 = _aimpactChatSdk130Users;
    }, function (_firebase10141Auth) {
      dependency_3 = _firebase10141Auth;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_firebase10141App) {
      dependency_5 = _firebase10141App;
    }, function (_aimpactChatSdk130Config) {
      dependency_6 = _aimpactChatSdk130Config;
    }, function (_firebase10141Analytics) {
      dependency_7 = _firebase10141Analytics;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.2"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.0"], ["wavesurfer.js", "7.8.6"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.11"], ["@types/react-dom", "18.3.0"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6], ['firebase/analytics', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 608791244,
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
            get session() {
              return this.#session;
            }
            constructor(session) {
              super();
              this.#session = session;
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
        hash: 1810596464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = exports.analytics = void 0;
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          var _config = require("@aimpact/chat-sdk/config");
          var _analytics = require("firebase/analytics");
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
          const analytics = exports.analytics = (0, _analytics.getAnalytics)(app);
          console.log(1, analytics);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2330867755,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJhcHBMb2dpbiIsInJlYWR5IiwidHJpZ2dlciIsInNldFVzZXIiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzcGVjcyIsIlVzZXIiLCJnZXRNb2RlbCIsImluaXRpYWxpemUiLCJzdGF0dXMiLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsIm1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJjb25zb2xlIiwicmVzb2x2ZSIsImxvZ2luIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIl9hcHAiLCJfYW5hbHl0aWNzIiwiREVWIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiQkVUQSIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGVmYXVsdCIsImVudmlyb25tZW50IiwiZ2V0QXV0aCIsImFuYWx5dGljcyIsImdldEFuYWx5dGljcyIsImxvZyIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIlNlc3Npb25NYW5hZ2VyIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsIm9uIiwibGlzdGVuUmVhZHkiLCJlIiwiY2xlYXIiLCJrZWVwS2V5cyIsImtleXNUb0tlZXAiLCJTZXQiLCJPYmplY3QiLCJrZXlzIiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsImtleSIsImhhcyIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIl0sInNvdXJjZXMiOlsiL2F1dGgudHMiLCIvZmlyZWJhc2UvY29uZmlnLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVdBLElBQUFJLE1BQUEsR0FB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