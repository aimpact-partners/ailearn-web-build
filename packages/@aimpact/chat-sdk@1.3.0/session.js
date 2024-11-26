System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/users", "firebase@10.14.1/auth", "@beyond-js/reactive@1.1.12/model", "firebase@10.14.1/app", "@aimpact/chat-sdk@1.3.0/config", "firebase@10.14.1/analytics"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_firebase10141App) {
      dependency_5 = _firebase10141App;
    }, function (_aimpactChatSdk130Config) {
      dependency_6 = _aimpactChatSdk130Config;
    }, function (_firebase10141Analytics) {
      dependency_7 = _firebase10141Analytics;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
        hash: 3580674575,
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
          var _error = require("./error");
          globalThis.totalAuthStateChanged = 0;
          class Auth extends _model.ReactiveModel {
            #uid;
            #pendingLogin;
            #user;
            /**
             * Defines if the object is being initialized when the page is loaded
             */
            #initializing = true;
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
              console.log('me ejecuto', globalThis.totalAuthStateChanged++);
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
                this.ready = true;
                this.#initializing = false;
                this.trigger('ready');
                return;
              }
              if (data) {
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                // await user.login(data.accessToken);
                if (this.#initializing) {
                  await this.appLogin(data);
                  this.#initializing = false;
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
              this.#user = await _users.User.getModel(specs);
              await this.#user.initialize(specs);
              return this.#user;
            }
            appLogin = async user => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!user?.uid) {
                console.log('INVALID_USER', 'No user id found in response');
                throw new _error.CustomError(1001, 'INVALID_USER');
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
              model.login(firebaseToken).then(logInValidation).catch(e => {
                throw new _error.CustomError(1002, 'LOGIN_ERROR');
              });
              return this.#pendingLogin;
            };
            login = async (email, password) => {
              const response = await (0, _auth.signInWithEmailAndPassword)(_config.auth, email, password);
              return await this.appLogin(response.user);
            };
            async signInWithGoogle() {
              try {
                const response = await (0, _auth.signInWithPopup)(_config.auth, _config.googleProvider);
                return await this.appLogin(response.user);
              } catch (error) {
                const errorMappings = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                // Known error, throw a custom exception
                if (error.code in errorMappings) {
                  throw new _error.CustomError(1003, errorMappings[error.code]);
                }
                // Unexpected error, rethrow for logging/debugging
                throw new Error(`Unexpected error during Google sign-in: ${error.message}`);
              }
            }
            registerWithEmail = async (email, password, username) => {
              const response = await (0, _auth.createUserWithEmailAndPassword)(_config.auth, email, password);
              return await this.appLogin(response.user);
            };
            resetPassword = async email => {
              await (0, _auth.sendPasswordResetEmail)(_config.auth, email);
              return {
                status: true
              };
            };
            confirmPasswordReset = async (code, newPassword) => {
              await (0, _auth.verifyPasswordResetCode)(_config.auth, code);
              await (0, _auth.confirmPasswordReset)(_config.auth, code, newPassword);
              return {
                status: true
              };
            };
            signOut = async () => {
              this.#pendingLogin = undefined;
              await (0, _auth.signOut)(_config.auth);
            };
            logout = this.signOut;
          }
          exports.Auth = Auth;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3466124835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            code;
            constructor(code, message) {
              super(message);
              this.code = code;
              this.name = 'CustomError';
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /*********************************
      INTERNAL MODULE: ./firebase/config
      *********************************/

      ims.set('./firebase/config', {
        hash: 1269228309,
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
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2985739675,
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
              const response = await this.#auth.registerWithEmail(email, password, username);
              if (!response.status) return {
                status: false,
                error: response.error
              };
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJfZXJyb3IiLCJnbG9iYWxUaGlzIiwidG90YWxBdXRoU3RhdGVDaGFuZ2VkIiwiQXV0aCIsIlJlYWN0aXZlTW9kZWwiLCJ1aWQiLCJwZW5kaW5nTG9naW4iLCJ1c2VyIiwiaW5pdGlhbGl6aW5nIiwiZ2V0VXNlclByb21pc2UiLCJzZXNzaW9uIiwiY29uc3RydWN0b3IiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImF1dGgiLCJ0aGVuIiwib25SZWRpcmVjdFJlc3VsdCIsImJpbmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInNpZ25PdXQiLCJyZWFkeSIsInRyaWdnZXIiLCJnZXRVc2VyTW9kZWwiLCJpZCIsInNldEZpcmViYXNlVXNlciIsImFwcExvZ2luIiwic2V0VXNlciIsInNldCIsInRyaWdnZXJFdmVudCIsInNwZWNzIiwiVXNlciIsImdldE1vZGVsIiwiaW5pdGlhbGl6ZSIsIkN1c3RvbUVycm9yIiwiUGVuZGluZ1Byb21pc2UiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwibW9kZWwiLCJsb2dJblZhbGlkYXRpb24iLCJjb3VsZExvZyIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiY2F0Y2giLCJlIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JNYXBwaW5ncyIsImNvZGUiLCJFcnJvciIsIm1lc3NhZ2UiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwibmFtZSIsIl9hcHAiLCJfYW5hbHl0aWNzIiwiREVWIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiQkVUQSIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGVmYXVsdCIsImVudmlyb25tZW50IiwiZ2V0QXV0aCIsImFuYWx5dGljcyIsImdldEFuYWx5dGljcyIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIlNlc3Npb25NYW5hZ2VyIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsIm9uIiwibGlzdGVuUmVhZHkiLCJjbGVhciIsImtlZXBLZXlzIiwia2V5c1RvS2VlcCIsIlNldCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwicmVtb3ZlSXRlbSIsInNlc3Npb25XcmFwcGVyIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2Vycm9yLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtB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