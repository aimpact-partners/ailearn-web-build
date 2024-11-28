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
        hash: 2642371354,
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
            onAuthStateChanged(user) {
              if (!user) {
                this.#user = undefined;
                this.signOut();
                this.ready = true;
                this.#initializing = false;
                this.trigger('ready');
                return;
              }
              this.appLogin(user).then(() => {
                this.#initializing = false;
              }).catch(error => {
                console.error('Error onAuthStateChanged', error);
              });
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
            appLogin = async googleUser => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!googleUser?.uid) {
                console.log('INVALID_USER', 'No user id found in response', googleUser);
                throw new _error.CustomError(1001, 'INVALID_USER');
              }
              const user = await this.getUserModel({
                id: googleUser.uid
              });
              user.set(googleUser);
              await user.setFirebaseUser(googleUser);
              this.#user = user;
              this.#uid = user.uid;
              this.#pendingLogin = new _core.PendingPromise();
              const {
                displayName,
                photoURL,
                email,
                phoneNumber,
                uid
              } = googleUser;
              const firebaseToken = await googleUser.getIdToken();
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
                this.ready = true;
                this.trigger('ready');
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
        hash: 3344954659,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJfZXJyb3IiLCJnbG9iYWxUaGlzIiwidG90YWxBdXRoU3RhdGVDaGFuZ2VkIiwiQXV0aCIsIlJlYWN0aXZlTW9kZWwiLCJ1aWQiLCJwZW5kaW5nTG9naW4iLCJ1c2VyIiwiaW5pdGlhbGl6aW5nIiwiZ2V0VXNlclByb21pc2UiLCJzZXNzaW9uIiwiY29uc3RydWN0b3IiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImF1dGgiLCJ0aGVuIiwib25SZWRpcmVjdFJlc3VsdCIsImJpbmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJkYXRhIiwidW5kZWZpbmVkIiwic2lnbk91dCIsInJlYWR5IiwidHJpZ2dlciIsImFwcExvZ2luIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJnZXRVc2VyTW9kZWwiLCJzcGVjcyIsImlkIiwic2V0IiwiVXNlciIsImdldE1vZGVsIiwiaW5pdGlhbGl6ZSIsInNldFVzZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ0cmlnZ2VyRXZlbnQiLCJnb29nbGVVc2VyIiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJtb2RlbCIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9yTWFwcGluZ3MiLCJjb2RlIiwiRXJyb3IiLCJtZXNzYWdlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJ1c2VybmFtZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIm5hbWUiLCJfYXBwIiwiX2FuYWx5dGljcyIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkJFVEEiLCJDT05GSUciLCJsb2NhbCIsImRldmVsb3BtZW50IiwidGVzdGluZyIsInF1YWxpdHkiLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJhbmFseXRpY3MiLCJnZXRBbmFseXRpY3MiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiY2xlYXIiLCJrZWVwS2V5cyIsImtleXNUb0tlZXAiLCJTZXQiLCJPYmplY3QiLCJrZXlzIiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsImtleSIsImhhcyIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uV3JhcHBlciIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9lcnJvci50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7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