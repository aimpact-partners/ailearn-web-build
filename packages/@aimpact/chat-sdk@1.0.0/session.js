System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/settings", "@beyond-js/kernel@0.1.9/core", "firebase@10.9.0/auth", "@beyond-js/reactive@1.1.12/model", "firebase@10.9.0/app", "@aimpact/ailearn-app@0.0.32-beta.5/config"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0032Beta5Config) {
      dependency_6 = _aimpactAilearnApp0032Beta5Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-beta.5"]]);
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
        hash: 2348430544,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9jb3JlIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJTREtTZXR0aW5ncyIsInVzZXJNb2RlbCIsImluaXRpYWxpemUiLCJ0b2tlbiIsImxvYWQiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwicmVzb2x2ZSIsInN0YXR1cyIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJtZXNzYWdlIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkJFVEEiLCJDT05GSUciLCJsb2NhbCIsImRldmVsb3BtZW50IiwidGVzdGluZyIsInF1YWxpdHkiLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiZSIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInNlc3Npb25XcmFwcGVyIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBYUEsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ssSUFBSyxTQUFRRCxNQUFBLENBQUFFLGFBQW1CO1lBQzVDLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMs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