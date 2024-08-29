System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.1.0/users", "firebase@10.12.0/auth", "@beyond-js/reactive@1.2.0/model", "firebase@10.12.0/app", "@aimpact/chat-sdk@1.1.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk110Users) {
      dependency_2 = _aimpactChatSdk110Users;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_firebase10120App) {
      dependency_5 = _firebase10120App;
    }, function (_aimpactChatSdk110Config) {
      dependency_6 = _aimpactChatSdk110Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.0"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.4"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/session"
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
        hash: 3654495071,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJhcHBMb2dpbiIsInJlYWR5IiwidHJpZ2dlciIsInNldFVzZXIiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzcGVjcyIsIlVzZXIiLCJnZXRNb2RlbCIsImluaXRpYWxpemUiLCJzdGF0dXMiLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsIm1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJjb25zb2xlIiwicmVzb2x2ZSIsImxvZ2luIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJjbGVhciIsImtlZXBLZXlzIiwia2V5c1RvS2VlcCIsIlNldCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwicmVtb3ZlSXRlbSIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQVdBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVNLE1BQU9LLElBQUssU0FBUUQsTUFBQSxDQUFBRSxhQUFtQjtZQUM1QyxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUFDLGNBQWU7WUFDZixDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQUMsWUFBWUQsT0FBTztjQUNsQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsT0FBUSxHQUFHQSxPQUFPO2NBRXZCLElBQUFSLEtBQUEsQ0FBQVUsaUJBQWlCLEVBQUNkLE9BQUEsQ0FBQWUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDOUQsSUFBQWQsS0FBQSxDQUFBZSxrQkFBa0IsRUFBQ25CLE9BQUEsQ0FBQWUsSUFBSSxFQUFFLElBQUksQ0FBQ0ksa0JBQWtCLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RDtZQUNBLE1BQU1ELGdCQUFnQkEsQ0FBQ0csSUFBSTtjQUMxQixJQUFJLENBQUNBLElBQUksRUFBRTtjQUNYLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUNDLElBQUksQ0FBQztZQUM5QjtZQUNBLE1BQU1ELGtCQUFrQkEsQ0FBQ0MsSUFBSTtjQUM1QixJQUFJLENBQUNBLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQVYsSUFBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHVyxTQUFTO2dCQUN0QixJQUFJLENBQUNDLE9BQU8sRUFBRTs7Y0FHZixJQUFJRixJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsQ0FBQVYsSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNhLEVBQUUsS0FBS0gsSUFBSSxDQUFDWixHQUFHLEVBQUU7Z0JBRTlDLE1BQU1FLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ2MsWUFBWSxDQUFDO2tCQUFFRCxFQUFFLEVBQUVILElBQUksQ0FBQ1o7Z0JBQUcsQ0FBRSxDQUFDO2dCQUV0REUsSUFBSSxDQUFDZSxlQUFlLENBQUNMLElBQUksQ0FBQztnQkFDMUI7Z0JBRUEsTUFBTSxJQUFJLENBQUNNLFFBQVEsQ0FBQ04sSUFBSSxDQUFDO2dCQUN6QjtnQkFDQSxJQUFJLENBQUMsQ0FBQVYsSUFBSyxHQUFHQSxJQUFJOztjQUdsQixJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDdEI7WUFFQSxNQUFNQyxPQUFPQSxDQUFDVCxJQUFJO2NBQ2pCLElBQUksQ0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdXLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQ0MsT0FBTyxFQUFFOztjQUVmLElBQUlGLElBQUksRUFBRTtnQkFDVCxJQUFJLENBQUNBLElBQUksRUFBRTtnQkFDWCxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ2EsRUFBRSxLQUFLSCxJQUFJLENBQUNaLEdBQUcsRUFBRTtnQkFFOUM7Z0JBQ0EsTUFBTUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDYyxZQUFZLENBQUM7a0JBQUVELEVBQUUsRUFBRUgsSUFBSSxDQUFDWjtnQkFBRyxDQUFFLENBQUM7Z0JBRXRERSxJQUFJLENBQUNlLGVBQWUsQ0FBQ0wsSUFBSSxDQUFDO2dCQUUxQjtnQkFDQSxNQUFNVixJQUFJLENBQUNvQixHQUFHLENBQUNWLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLENBQUFWLElBQUssR0FBR0EsSUFBSTs7Y0FHbEIsSUFBSSxDQUFDaUIsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSSxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsTUFBTVAsWUFBWUEsQ0FBQ1EsS0FBSztjQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBdEIsSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNhLEVBQUUsS0FBS1MsS0FBSyxDQUFDVCxFQUFFLEVBQUU7Z0JBQzdDLE1BQU0sSUFBSSxDQUFDLENBQUFiLElBQUssQ0FBQ29CLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDO2dCQUMzQixPQUFPLElBQUksQ0FBQyxDQUFBdEIsSUFBSzs7Y0FFbEIsSUFBSSxJQUFJLENBQUMsQ0FBQUEsSUFBSyxFQUFFLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdXLFNBQVM7Y0FFdEMsSUFBSSxDQUFDLENBQUFYLElBQUssR0FBRyxNQUFNUCxNQUFBLENBQUE4QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO2NBQ3ZDLE1BQU0sSUFBSSxDQUFDLENBQUF0QixJQUFLLENBQUN5QixVQUFVLENBQUNILEtBQUssQ0FBQztjQUVsQyxPQUFPLElBQUksQ0FBQyxDQUFBdEIsSUFBSztZQUNsQjtZQUVBZ0IsUUFBUSxHQUFHLE1BQU9oQixJQUFVLElBQUk7Y0FDL0IsSUFBSSxJQUFJLENBQUMsQ0FBQUQsWUFBYSxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhOztjQUcxQixJQUFJLENBQUNDLElBQUksRUFBRUYsR0FBRyxFQUFFO2dCQUNmLE9BQU87a0JBQUU0QixNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFO2dCQUFjLENBQUU7O2NBR2hELElBQUksQ0FBQyxDQUFBN0IsR0FBSSxHQUFHRSxJQUFJLENBQUNGLEdBQUc7Y0FFcEIsSUFBSSxDQUFDLENBQUFDLFlBQWEsR0FBRyxJQUFJUCxLQUFBLENBQUFvQyxjQUFjLEVBQUU7Y0FFekMsTUFBTTtnQkFBRUMsV0FBVztnQkFBRUMsUUFBUTtnQkFBRUMsS0FBSztnQkFBRUMsV0FBVztnQkFBRWxDO2NBQUcsQ0FBRSxHQUFHRSxJQUFJO2NBQy9ELE1BQU1pQyxhQUFhLEdBQUcsTUFBTWpDLElBQUksQ0FBQ2tDLFVBQVUsRUFBRTtjQUU3QyxNQUFNWixLQUFLLEdBQUc7Z0JBQUVULEVBQUUsRUFBRWYsR0FBRztnQkFBRStCLFdBQVc7Z0JBQUVDLFFBQVE7Z0JBQUVDLEtBQUs7Z0JBQUVDLFdBQVc7Z0JBQUVDO2NBQWEsQ0FBRTtjQUNuRjtjQUNBLE1BQU1FLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQ3JCLFlBQVksQ0FBQ1EsS0FBSyxDQUFDO2NBRTVDLE1BQU1jLGVBQWUsR0FBR0MsUUFBUSxJQUFHO2dCQUNsQyxJQUFJLENBQUNBLFFBQVEsRUFBRTtrQkFDZEMsT0FBTyxDQUFDWCxLQUFLLENBQUMsaUJBQWlCLEVBQUVVLFFBQVEsQ0FBQzs7Z0JBRzNDLElBQUksQ0FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxDQUFBbkIsWUFBYSxDQUFDd0MsT0FBTyxDQUFDO2tCQUFFYixNQUFNLEVBQUUsSUFBSTtrQkFBRVM7Z0JBQUssQ0FBRSxDQUFDO2NBQ3BELENBQUM7Y0FFREEsS0FBSyxDQUFDSyxLQUFLLENBQUNQLGFBQWEsQ0FBQyxDQUFDM0IsSUFBSSxDQUFDOEIsZUFBZSxDQUFDO2NBQ2hELE9BQU8sSUFBSSxDQUFDLENBQUFyQyxZQUFhO1lBQzFCLENBQUM7WUFFRHlDLEtBQUssR0FBRyxNQUFBQSxDQUFPVCxLQUFhLEVBQUVVLFFBQWdCLEtBQUk7Y0FDakQsSUFBSTtnQkFDSCxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFBaEQsS0FBQSxDQUFBaUQsMEJBQTBCLEVBQUNyRCxPQUFBLENBQUFlLElBQUksRUFBRTBCLEtBQUssRUFBRVUsUUFBUSxDQUFDO2dCQUV4RSxPQUFPLE1BQU0sSUFBSSxDQUFDekIsUUFBUSxDQUFDMEIsUUFBUSxDQUFDO2VBQ3BDLENBQUMsT0FBT2YsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVELE1BQU0sRUFBRSxLQUFLO2tCQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ2lCO2dCQUFPLENBQUU7O1lBRWhELENBQUM7WUFDRCxDQUFDO1lBRURDLGdCQUFnQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNILE1BQU1ILFFBQVEsR0FBRyxNQUFNLElBQUFoRCxLQUFBLENBQUFvRCxlQUFlLEVBQUN4RCxPQUFBLENBQUFlLElBQUksRUFBRWYsT0FBQSxDQUFBeUQsY0FBYyxDQUFDO2dCQUM1RDtnQkFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDL0IsUUFBUSxDQUFDMEIsUUFBUSxDQUFDMUMsSUFBSSxDQUFDO2VBQ3pDLENBQUMsT0FBTzJCLEtBQUssRUFBRTtnQkFDZixNQUFNcUIsTUFBTSxHQUFHO2tCQUNkLCtDQUErQyxFQUFFLDBDQUEwQztrQkFDM0YsMkJBQTJCLEVBQUU7aUJBQzdCO2dCQUVELE9BQU87a0JBQUV0QixNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFcUIsTUFBTSxDQUFDckIsS0FBSyxDQUFDc0IsSUFBSSxDQUFDLElBQUk7Z0JBQVEsQ0FBRTs7WUFFakUsQ0FBQztZQUVEQyxpQkFBaUIsR0FBRyxNQUFBQSxDQUFPbkIsS0FBYSxFQUFFVSxRQUFnQixFQUFFVSxRQUFnQixLQUFJO2NBQy9FLElBQUk7Z0JBQ0gsTUFBTVQsUUFBUSxHQUFHLE1BQU0sSUFBQWhELEtBQUEsQ0FBQTBELDhCQUE4QixFQUFDOUQsT0FBQSxDQUFBZSxJQUFJLEVBQUUwQixLQUFLLEVBQUVVLFFBQVEsQ0FBQztnQkFDNUUsTUFBTVksbUJBQW1CLEdBQUc7a0JBQUUsR0FBR1gsUUFBUSxDQUFDMUMsSUFBSTtrQkFBRTZCLFdBQVcsRUFBRXNCO2dCQUFRLENBQUU7Z0JBRXZFLE9BQU8sTUFBTSxJQUFJLENBQUNuQyxRQUFRLENBQUM7a0JBQUUsR0FBRzBCLFFBQVE7a0JBQUUxQyxJQUFJLEVBQUVxRDtnQkFBbUIsQ0FBRSxDQUFDO2VBQ3RFLENBQUMsT0FBTzFCLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFRCxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNpQjtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURVLGFBQWEsR0FBRyxNQUFPdkIsS0FBYSxJQUFJO2NBQ3ZDLElBQUk7Z0JBQ0gsTUFBTSxJQUFBckMsS0FBQSxDQUFBNkQsc0JBQXNCLEVBQUNqRSxPQUFBLENBQUFlLElBQUksRUFBRTBCLEtBQUssQ0FBQztnQkFDekMsT0FBTztrQkFBRUwsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUQsTUFBTSxFQUFFLEtBQUs7a0JBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDaUI7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVEWSxvQkFBb0IsR0FBRyxNQUFBQSxDQUFPUCxJQUFZLEVBQUVRLFdBQW1CLEtBQUk7Y0FDbEUsSUFBSTtnQkFDSCxNQUFNLElBQUEvRCxLQUFBLENBQUFnRSx1QkFBdUIsRUFBQ3BFLE9BQUEsQ0FBQWUsSUFBSSxFQUFFNEMsSUFBSSxDQUFDO2dCQUN6QyxNQUFNLElBQUF2RCxLQUFBLENBQUE4RCxvQkFBb0IsRUFBQ2xFLE9BQUEsQ0FBQWUsSUFBSSxFQUFFNEMsSUFBSSxFQUFFUSxXQUFXLENBQUM7Z0JBQ25ELE9BQU87a0JBQUUvQixNQUFNLEVBQUU7Z0JBQUksQ0FBRTtlQUN2QixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFRCxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNpQjtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURoQyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFiLFlBQWEsR0FBR1ksU0FBUztnQkFDOUIsTUFBTSxJQUFBakIsS0FBQSxDQUFBa0IsT0FBTyxFQUFDdEIsT0FBQSxDQUFBZSxJQUFJLENBQUM7ZUFDbkIsQ0FBQyxPQUFPc0IsS0FBSyxFQUFFO2dCQUNmVyxPQUFPLENBQUNYLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBQ0RnQyxNQUFNLEdBQUcsSUFBSSxDQUFDL0MsT0FBTzs7VUFDckJnRCxPQUFBLENBQUFoRSxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcE1ELElBQUFpRSxJQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUQsT0FBQSxHQUFBQyxPQUFBO1VBSEE7O1VBS0E7VUFDQTtVQUVBO1VBQ0E7VUFDQSxNQUFNdUUsR0FBRyxHQUFHO1lBQ1hDLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakRDLFVBQVUsRUFBRSxzQ0FBc0M7WUFDbERDLFdBQVcsRUFBRSwwREFBMEQ7WUFDdkVDLFNBQVMsRUFBRSxzQkFBc0I7WUFDakNDLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakRDLGlCQUFpQixFQUFFLGVBQWU7WUFDbENDLEtBQUssRUFBRSw0Q0FBNEM7WUFDbkRDLGFBQWEsRUFBRTtXQUNmO1VBQ0QsTUFBTUMsSUFBSSxHQUFHO1lBQ1pSLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakRDLFVBQVUsRUFBRSx1Q0FBdUM7WUFDbkRFLFNBQVMsRUFBRSx1QkFBdUI7WUFDbENDLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbERDLGlCQUFpQixFQUFFLGNBQWM7WUFDakNDLEtBQUssRUFBRTtXQUNQO1VBQ0QsTUFBTUcsTUFBTSxHQUFHO1lBQ2RDLEtBQUssRUFBRVgsR0FBRztZQUNWWSxXQUFXLEVBQUVaLEdBQUc7WUFDaEJhLE9BQU8sRUFBRTtjQUNSWixNQUFNLEVBQUUseUNBQXlDO2NBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO2NBQ2xERSxTQUFTLEVBQUUsc0JBQXNCO2NBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO2NBQ2pEQyxpQkFBaUIsRUFBRSxlQUFlO2NBQ2xDQyxLQUFLLEVBQUU7YUFDUDtZQUNETyxPQUFPLEVBQUVMLElBQUk7WUFDYk0sVUFBVSxFQUFFTjtXQUNaO1VBRUQ7VUFFQSxNQUFNTyxHQUFHLEdBQUcsSUFBQWpCLElBQUEsQ0FBQWtCLGFBQWEsRUFBQ1AsTUFBTSxDQUFDbEYsT0FBQSxDQUFBMEYsT0FBTSxDQUFDQyxXQUFXLENBQUMsQ0FBQztVQUU5QyxNQUFNNUUsSUFBSSxHQUFBdUQsT0FBQSxDQUFBdkQsSUFBQSxHQUFHLElBQUFYLEtBQUEsQ0FBQXdGLE9BQU8sRUFBQ0osR0FBRyxDQUFDO1VBQ3pCLE1BQU0vQixjQUFjLEdBQUFhLE9BQUEsQ0FBQWIsY0FBQSxHQUFHLElBQUlyRCxLQUFBLENBQUF5RixrQkFBa0IsRUFBRTtVQUMvQyxNQUFNQyxnQkFBZ0IsR0FBQXhCLE9BQUEsQ0FBQXdCLGdCQUFBLEdBQUcsSUFBSTFGLEtBQUEsQ0FBQTJGLG9CQUFvQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEMUQsSUFBQS9GLE9BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQU1BLE1BQU0rRixjQUFlLFNBQVEzRixNQUFBLENBQUFFLGFBQXVCO1lBR25ELElBQUlHLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBSyxJQUFLLENBQUNMLElBQUk7WUFDdkI7WUFDQSxJQUFJdUYsTUFBTUEsQ0FBQTtjQUNULE9BQU9qRyxPQUFBLENBQUFlLElBQUksQ0FBQ21GLFdBQVcsR0FBR2xHLE9BQUEsQ0FBQWUsSUFBSSxDQUFDbUYsV0FBVyxDQUFDMUYsR0FBRyxHQUFHLElBQUk7WUFDdEQ7WUFFQSxJQUFJMkYsTUFBTUEsQ0FBQTtjQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBcEYsSUFBSyxDQUFDTCxJQUFJO1lBQ3pCO1lBRUEsQ0FBQTBGLE9BQVE7WUFDUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUTtZQUNyQjtZQUVBLENBQUFyRixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQUYsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBdUYsT0FBUSxHQUFHLElBQUlsRyxLQUFBLENBQUFvQyxjQUFjLEVBQUU7Y0FFcEMsSUFBSSxDQUFDLENBQUF2QixJQUFLLEdBQUcsSUFBSVgsS0FBQSxDQUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzNCLElBQUksQ0FBQyxDQUFBUyxJQUFLLENBQUN1RixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDMUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBQ25ELElBQUksQ0FBQyxDQUFBYixJQUFLLENBQUN1RixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BEO1lBRUFxRixXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDNUUsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUF5RSxPQUFRLENBQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDdEIsS0FBSyxDQUFDO2NBQ2pDLElBQUksQ0FBQ0ksWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVBLE1BQU13QixnQkFBZ0JBLENBQUE7Y0FDckIsT0FBTyxJQUFJLENBQUMsQ0FBQXhDLElBQUssQ0FBQ3dDLGdCQUFnQixFQUFFO2NBQ3BDO1lBQ0Q7WUFFQSxNQUFNSyxpQkFBaUJBLENBQUM7Y0FBRW5CLEtBQUs7Y0FBRVUsUUFBUTtjQUFFVTtZQUFRLENBQUU7Y0FDcEQsSUFBSTtnQkFDSCxNQUFNVCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJDLElBQUssQ0FBQzZDLGlCQUFpQixDQUFDbkIsS0FBSyxFQUFFVSxRQUFRLEVBQUVVLFFBQVEsQ0FBQztnQkFDOUUsSUFBSSxDQUFDVCxRQUFRLENBQUNoQixNQUFNLEVBQUUsT0FBTztrQkFBRUEsTUFBTSxFQUFFLEtBQUs7a0JBQUVDLEtBQUssRUFBRWUsUUFBUSxDQUFDZjtnQkFBSyxDQUFFO2dCQUVyRSxPQUFPZSxRQUFRO2VBQ2YsQ0FBQyxPQUFPb0QsQ0FBQyxFQUFFO2dCQUNYLE9BQU87a0JBQUVwRSxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFO2dCQUFRLENBQUU7O1lBRTNDO1lBRUEsTUFBTWdDLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUF0RCxJQUFLLENBQUNPLE9BQU8sRUFBRTtnQkFFMUIsU0FBU21GLEtBQUtBLENBQUNDLFFBQVE7a0JBQ3RCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztrQkFDcENHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUc7b0JBQ3ZDLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNELEdBQUcsQ0FBQyxFQUFFO3NCQUN6QkYsWUFBWSxDQUFDSSxVQUFVLENBQUNGLEdBQUcsQ0FBQzs7a0JBRTlCLENBQUMsQ0FBQztnQkFDSDtnQkFDQVIsS0FBSyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDMUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFFM0IsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPeUUsQ0FBQyxFQUFFO2dCQUNYeEQsT0FBTyxDQUFDWCxLQUFLLENBQUNtRSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1ZLGNBQWMsR0FBQTlDLE9BQUEsQ0FBQThDLGNBQUEsR0FBRyxJQUFJcEIsY0FBYyxFQUFFO1VBQzdEcUIsVUFBVSxDQUFDQyxDQUFDLEdBQUdGLGNBQWMiLCJpZ25vcmVMaXN0IjpbXX0=