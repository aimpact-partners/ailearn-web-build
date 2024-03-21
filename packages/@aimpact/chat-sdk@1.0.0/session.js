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
        hash: 2731344487,
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
                await user.set(data);
                await user.load();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9jb3JlIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJzZXQiLCJsb2FkIiwicmVhZHkiLCJ0cmlnZ2VyIiwic2V0VXNlciIsInRyaWdnZXJFdmVudCIsInNwZWNzIiwiU0RLU2V0dGluZ3MiLCJ1c2VyTW9kZWwiLCJpbml0aWFsaXplIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJ1c2VybmFtZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXJXaXRoRGlzcGxheU5hbWUiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsImxvZ291dCIsImV4cG9ydHMiLCJfYXBwIiwiREVWIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiZSIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInNlc3Npb25XcmFwcGVyIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBYUEsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ssSUFBSyxTQUFRRCxNQUFBLENBQUFFLGFBQW1CO1lBQzVDLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FB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