System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/users", "@aimpact/chat-sdk@1.3.0/reactive/model", "firebase@10.14.1/auth", "firebase@10.14.1/app", "@aimpact/chat-sdk@1.3.0/config", "firebase@10.14.1/analytics", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk130Users) {
      dependency_2 = _aimpactChatSdk130Users;
    }, function (_aimpactChatSdk130ReactiveModel) {
      dependency_3 = _aimpactChatSdk130ReactiveModel;
    }, function (_firebase10141Auth) {
      dependency_4 = _firebase10141Auth;
    }, function (_firebase10141App) {
      dependency_5 = _firebase10141App;
    }, function (_aimpactChatSdk130Config) {
      dependency_6 = _aimpactChatSdk130Config;
    }, function (_firebase10141Analytics) {
      dependency_7 = _firebase10141Analytics;
    }, function (_beyondJsReactive1112Model) {
      dependency_8 = _beyondJsReactive1112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.15"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@aimpact/chat-sdk/reactive/model', dependency_3], ['firebase/auth', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6], ['firebase/analytics', dependency_7], ['@beyond-js/reactive/model', dependency_8]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 664522389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _config = require("./firebase/config");
          var _core = require("@beyond-js/kernel/core");
          var _users = require("@aimpact/chat-sdk/users");
          var _model = require("@aimpact/chat-sdk/reactive/model");
          var _error = require("./error");
          var _auth = require("firebase/auth");
          var _provider = require("./firebase/provider");
          globalThis.totalAuthStateChanged = 0;
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
                console.log('sesion iniciada', userData);
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
        hash: 43148144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _model = require("@aimpact/chat-sdk/reactive/model");
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
                console.log('limpiada');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX21vZGVsIiwiX2Vycm9yIiwiX2F1dGgiLCJfcHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwidG90YWxBdXRoU3RhdGVDaGFuZ2VkIiwiQXV0aCIsIlJlYWN0aXZlTW9kZWwiLCJwZW5kaW5nTG9naW4iLCJ1c2VyIiwic2Vzc2lvbiIsInByb3ZpZGVyIiwiY29uc3RydWN0b3IiLCJGaXJlYmFzZVByb3ZpZGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYmluZCIsInNldFJlYWR5IiwiI3NldFJlYWR5IiwicmVhZHkiLCJ0cmlnZ2VyIiwiYXBwTG9naW4iLCJkYXRhIiwidWlkIiwiY29uc29sZSIsInRyYWNlIiwiQ3VzdG9tRXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsImdldEN1cnJlbnRUb2tlbiIsInRoZW4iLCJmaXJlYmFzZVRva2VuIiwic3BlY3MiLCJtb2RlbCIsImdldFVzZXJNb2RlbCIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwiZXJyb3IiLCJyZXNvbHZlIiwic3RhdHVzIiwibG9naW4iLCJjYXRjaCIsImUiLCJsb2ciLCJsb2dpbldpdGgiLCJ1c2VyRGF0YSIsInNpZ25JbldpdGhHb29nbGUiLCJlcnJvck1hcHBpbmdzIiwiY29kZSIsIkVycm9yIiwibWVzc2FnZSIsImlkIiwic2V0IiwidW5kZWZpbmVkIiwiVXNlciIsImdldE1vZGVsIiwic2V0RmlyZWJhc2VQcm92aWRlciIsImluaXRpYWxpemUiLCJzZXRVc2VyIiwic2lnbk91dCIsInNldEZpcmViYXNlVXNlciIsInRyaWdnZXJFdmVudCIsImF1dGgiLCJsb2dvdXQiLCJleHBvcnRzIiwibmFtZSIsIl9hcHAiLCJfYW5hbHl0aWNzIiwiREVWIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiQkVUQSIsIkNPTkZJRyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGVmYXVsdCIsImVudmlyb25tZW50IiwiZ2V0QXV0aCIsImFuYWx5dGljcyIsImdldEFuYWx5dGljcyIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiZXhlY3V0aW9ucyIsImNhbGxiYWNrIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwic2lnbkluV2l0aFBvcHVwIiwiZm9yY2VSZWZyZXNoIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsIm9uIiwibGlzdGVuUmVhZHkiLCJjbGVhciIsImtlZXBLZXlzIiwia2V5c1RvS2VlcCIsIlNldCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwicmVtb3ZlSXRlbSIsInNlc3Npb25XcmFwcGVyIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9lcnJvci50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvZmlyZWJhc2UvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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MUQsS0FBQSxDQUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzNCLElBQUksQ0FBQyxDQUFBc0QsSUFBSyxDQUFDb0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQ2xHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUNuRCxJQUFJLENBQUNHLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUErRixXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDL0YsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUE0RixPQUFRLENBQUMxRSxPQUFPLENBQUMsSUFBSSxDQUFDbEIsS0FBSyxDQUFDO2NBQ2pDLElBQUksQ0FBQ3lDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFQSxNQUFNRSxNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQyxDQUFBRCxJQUFLLENBQUNILE9BQU8sRUFBRTtnQkFFMUIsU0FBU3lELEtBQUtBLENBQUNDLFFBQVE7a0JBQ3RCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztrQkFDcENHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUc7b0JBQ3ZDLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNELEdBQUcsQ0FBQyxFQUFFO3NCQUN6QkYsWUFBWSxDQUFDSSxVQUFVLENBQUNGLEdBQUcsQ0FBQzs7a0JBRTlCLENBQUMsQ0FBQztnQkFDSDtnQkFDQVIsS0FBSyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDdkQsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDM0JwQyxPQUFPLENBQUNrQixHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUV2QixPQUFPLElBQUk7ZUFDWCxDQUFDLE9BQU9ELENBQUMsRUFBRTtnQkFDWGpCLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDSyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1xRixjQUFjLEdBQUEvRCxPQUFBLENBQUErRCxjQUFBLEdBQUcsSUFBSWxCLGNBQWMsRUFBRTtVQUM3RHZHLFVBQVUsQ0FBQzBILENBQUMsR0FBR0QsY0FBYzs7Ozs7Ozs7Ozs7VUN4RTdCOztVQUVBUCxNQUFBLENBQUFTLGNBQUEsQ0FBQWpFLE9BQUE7WUFDQWtFLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==