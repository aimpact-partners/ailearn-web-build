System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.4.4/users", "@beyond-js/kernel@0.1.12/core", "firebase@11.6.0/auth", "@aimpact/chat-sdk@1.4.4/config", "firebase@11.6.0/analytics", "firebase@11.6.0/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk144Users) {
      dependency_2 = _aimpactChatSdk144Users;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1160Auth) {
      dependency_4 = _firebase1160Auth;
    }, function (_aimpactChatSdk144Config) {
      dependency_5 = _aimpactChatSdk144Config;
    }, function (_firebase1160Analytics) {
      dependency_6 = _firebase1160Analytics;
    }, function (_firebase1160App) {
      dependency_7 = _firebase1160App;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "2.0.4"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@aimpact/chat-sdk/config', dependency_5], ['firebase/analytics', dependency_6], ['firebase/app', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 340483398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _users = require("@aimpact/chat-sdk/users");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("firebase/auth");
          var _error = require("./error");
          var _config = require("./firebase/config");
          var _provider = require("./firebase/provider");
          class Auth extends _model.ReactiveModel {
            #pendingLogin;
            #user;
            get user() {
              return this.#user;
            }
            #session;
            #provider;
            get session() {
              return this.#session;
            }
            constructor(session) {
              super();
              this.#session = session;
              this.#provider = new _provider.FirebaseProvider({
                onAuthStateChanged: this.onAuthStateChanged.bind(this)
              });
            }
            #setReady() {
              this.ready = true;
              this.trigger('ready');
            }
            onAuthStateChanged(user) {
              if (!user) {
                this.#setReady();
                return;
              }
              /**
               * this code only must be executed when the page is laoded
               */
              if (!this.ready) {
                this.appLogin(user);
              }
            }
            appLogin = data => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!data?.uid) {
                console.trace('INVALID_USER', 'No user id found in response', data);
                throw new _error.CustomError(1001, 'INVALID_USER');
              }
              // this.#provider.getCurrentToken().then(token=>{})
              this.#pendingLogin = new _core.PendingPromise();
              // const firebaseToken = await this.#provider.getCurrentToken();
              this.#provider.getCurrentToken().then(firebaseToken => {
                const specs = {
                  ...data,
                  firebaseToken
                };
                const model = this.getUserModel(specs);
                this.#user = model;
                const logInValidation = couldLog => {
                  if (!couldLog) {
                    console.error('Could not login', couldLog);
                  }
                  this.ready = true;
                  this.trigger('ready');
                  this.trigger('login');
                  this.#pendingLogin.resolve({
                    status: true,
                    model
                  });
                };
                model.login(firebaseToken).then(logInValidation).catch(e => {
                  console.log(100, 'fallamos');
                  throw new _error.CustomError(1002, 'LOGIN_ERROR');
                });
              });
              return this.#pendingLogin;
            };
            async loginWith(provider) {
              try {
                if (provider !== 'google') {
                  console.log('Provider not supported');
                  return;
                }
                const userData = await this.#provider.signInWithGoogle();
                return this.appLogin(userData);
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
            getUserModel(specs) {
              if (this.#user && this.#user.id === specs.id) {
                this.#user.set(specs);
                return this.#user;
              }
              if (this.#user) this.#user = undefined;
              //@ts-ignore
              this.#user = _users.User.getModel(specs);
              this.#user.setFirebaseProvider(this.#provider);
              this.#user.initialize(specs);
              return this.#user;
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
            signOut = async () => {
              this.#pendingLogin = undefined;
              this.#user = undefined;
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
        hash: 1188104219,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = exports.analytics = void 0;
          var _config = require("@aimpact/chat-sdk/config");
          var _analytics = require("firebase/analytics");
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
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

      /***********************************
      INTERNAL MODULE: ./firebase/provider
      ***********************************/

      ims.set('./firebase/provider', {
        hash: 3533665603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.FirebaseProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _auth = require("firebase/auth");
          var _config = require("./config");
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          class FirebaseProvider extends _model.ReactiveModel {
            #executions = 0;
            #auth;
            #onAuthStateChanged;
            constructor({
              onAuthStateChanged: callback
            }) {
              super();
              this.#auth = _config.auth;
              this.#onAuthStateChanged = callback;
              (0, _auth.onAuthStateChanged)(_config.auth, this.onAuthStateChanged.bind(this));
            }
            onAuthStateChanged(user) {
              if (!this.#executions) {
                this.trigger('ready');
                this.#executions++;
              }
              const data = user ? this.getData(user) : null;
              this.#onAuthStateChanged(data);
            }
            async signInWithGoogle() {
              const response = await (0, _auth.signInWithPopup)(_config.auth, googleProvider);
              return this.getData(response.user);
            }
            async getCurrentToken(forceRefresh = false) {
              const user = this.#auth.currentUser;
              if (!user) return null;
              try {
                return await user.getIdToken(forceRefresh);
              } catch (error) {
                console.error('Error retrieving token:', error);
                return null;
              }
            }
            logout() {
              return (0, _auth.signOut)(_config.auth);
            }
            getData(user) {
              return {
                id: user.uid,
                uid: user.uid,
                email: user.email ?? '',
                name: user.displayName ?? '',
                displayName: user.displayName ?? '',
                photoURL: user.photoURL ?? '',
                phoneNumber: user.phoneNumber ?? '',
                provider: user.providerData[0]?.providerId ?? 'unknown'
              };
            }
          }
          exports.FirebaseProvider = FirebaseProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1780847829,
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
              this.ready = true;
            }
            listenReady() {
              this.ready = true;
              this.#promise.resolve(this.ready);
              this.triggerEvent('change');
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

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2395231135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9jb25maWciLCJfcHJvdmlkZXIiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJzZXNzaW9uIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIkZpcmViYXNlUHJvdmlkZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJiaW5kIiwic2V0UmVhZHkiLCIjc2V0UmVhZHkiLCJyZWFkeSIsInRyaWdnZXIiLCJhcHBMb2dpbiIsImRhdGEiLCJ1aWQiLCJjb25zb2xlIiwidHJhY2UiLCJDdXN0b21FcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZ2V0Q3VycmVudFRva2VuIiwidGhlbiIsImZpcmViYXNlVG9rZW4iLCJzcGVjcyIsIm1vZGVsIiwiZ2V0VXNlck1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJlcnJvciIsInJlc29sdmUiLCJzdGF0dXMiLCJsb2dpbiIsImNhdGNoIiwiZSIsImxvZyIsImxvZ2luV2l0aCIsInVzZXJEYXRhIiwic2lnbkluV2l0aEdvb2dsZSIsImVycm9yTWFwcGluZ3MiLCJjb2RlIiwiRXJyb3IiLCJtZXNzYWdlIiwiaWQiLCJzZXQiLCJ1bmRlZmluZWQiLCJVc2VyIiwiZ2V0TW9kZWwiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsInNldFVzZXIiLCJzaWduT3V0Iiwic2V0RmlyZWJhc2VVc2VyIiwidHJpZ2dlckV2ZW50IiwiYXV0aCIsImxvZ291dCIsImV4cG9ydHMiLCJuYW1lIiwiX2FuYWx5dGljcyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiYW5hbHl0aWNzIiwiZ2V0QW5hbHl0aWNzIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJleGVjdXRpb25zIiwiY2FsbGJhY2siLCJnZXREYXRhIiwicmVzcG9uc2UiLCJzaWduSW5XaXRoUG9wdXAiLCJmb3JjZVJlZnJlc2giLCJjdXJyZW50VXNlciIsImdldElkVG9rZW4iLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG9uZU51bWJlciIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImNsZWFyIiwia2VlcEtleXMiLCJrZXlzVG9LZWVwIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9lcnJvci50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvZmlyZWJhc2UvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0Es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