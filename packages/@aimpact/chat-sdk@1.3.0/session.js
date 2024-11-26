System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/users", "firebase@10.14.1/auth", "@beyond-js/reactive@1.1.12/model", "firebase@10.14.1/app", "@aimpact/chat-sdk@1.3.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 4260318062,
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
                if (this.#user && this.#user.id === data.uid) {
                  console.log(1, 'onAuthStateChanged', 'this.#user && this.#user.id === data.uid');
                  return;
                }
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
                console.log(1.1, 'appLogin', 'this.#pendingLogin');
                return this.#pendingLogin;
              }
              if (!user?.uid) {
                console.log(2, 'appLogin', 'INVALID_USER');
                return {
                  status: false,
                  error: 'INVALID_USER'
                };
              }
              this.#uid = user.uid;
              this.#pendingLogin = new _core.PendingPromise();
              globalThis.__p = this.#pendingLogin;
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
              model.login(firebaseToken).then(logInValidation).catch(error => {
                console.error('Could not login', error);
                this.#pendingLogin.resolve({
                  status: false,
                  error
                });
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlck1vZGVsIiwic2V0RmlyZWJhc2VVc2VyIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJVc2VyIiwiZ2V0TW9kZWwiLCJpbml0aWFsaXplIiwic3RhdHVzIiwiZXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsImdsb2JhbFRoaXMiLCJfX3AiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwibW9kZWwiLCJsb2dJblZhbGlkYXRpb24iLCJjb3VsZExvZyIsInJlc29sdmUiLCJsb2dpbiIsImNhdGNoIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJjbGVhciIsImtlZXBLZXlzIiwia2V5c1RvS2VlcCIsIlNldCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwicmVtb3ZlSXRlbSIsInNlc3Npb25XcmFwcGVyIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBV0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ssSUFBSyxTQUFRRCxNQUFBLENBQUFFLGFBQW1CO1lBQzVDLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBQyxZQUFZRCxPQUFPO2NBQ2xCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQU87Y0FFdkIsSUFBQVIsS0FBQSxDQUFBVSxpQkFBaUIsRUFBQ2QsT0FBQSxDQUFBZSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM5RCxJQUFBZCxLQUFBLENBQUFlLGtCQUFrQixFQUFDbkIsT0FBQSxDQUFBZSxJQUFJLEVBQUUsSUFBSSxDQUFDSSxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdEO1lBQ0EsTUFBTUQsZ0JBQWdCQSxDQUFDRyxJQUFJO2NBQzFCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQ1gsSUFBSSxDQUFDRCxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDO1lBQzlCO1lBQ0EsTUFBTUQsa0JBQWtCQSxDQUFDQyxJQUFJO2NBQzVCLElBQUksQ0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdXLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQ0MsT0FBTyxFQUFFOztjQUdmLElBQUlGLElBQUksRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ2EsRUFBRSxLQUFLSCxJQUFJLENBQUNaLEdBQUcsRUFBRTtrQkFDN0NnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsMENBQTBDLENBQUM7a0JBRWhGOztnQkFHRCxNQUFNZixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNnQixZQUFZLENBQUM7a0JBQUVILEVBQUUsRUFBRUgsSUFBSSxDQUFDWjtnQkFBRyxDQUFFLENBQUM7Z0JBRXRERSxJQUFJLENBQUNpQixlQUFlLENBQUNQLElBQUksQ0FBQztnQkFDMUI7Z0JBRUEsTUFBTSxJQUFJLENBQUNRLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDO2dCQUN6QjtnQkFDQSxJQUFJLENBQUMsQ0FBQVYsSUFBSyxHQUFHQSxJQUFJOztjQUdsQixJQUFJLENBQUNtQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDdEI7WUFFQSxNQUFNQyxPQUFPQSxDQUFDWCxJQUFJO2NBQ2pCLElBQUksQ0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdXLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQ0MsT0FBTyxFQUFFOztjQUVmLElBQUlGLElBQUksRUFBRTtnQkFDVCxJQUFJLENBQUNBLElBQUksRUFBRTtnQkFDWCxJQUFJLElBQUksQ0FBQyxDQUFBVixJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ2EsRUFBRSxLQUFLSCxJQUFJLENBQUNaLEdBQUcsRUFBRTtnQkFFOUM7Z0JBQ0EsTUFBTUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDZ0IsWUFBWSxDQUFDO2tCQUFFSCxFQUFFLEVBQUVILElBQUksQ0FBQ1o7Z0JBQUcsQ0FBRSxDQUFDO2dCQUV0REUsSUFBSSxDQUFDaUIsZUFBZSxDQUFDUCxJQUFJLENBQUM7Z0JBRTFCO2dCQUNBLE1BQU1WLElBQUksQ0FBQ3NCLEdBQUcsQ0FBQ1osSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsQ0FBQVYsSUFBSyxHQUFHQSxJQUFJOztjQUdsQixJQUFJLENBQUNtQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNJLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFQSxNQUFNUCxZQUFZQSxDQUFDUSxLQUFLO2NBQ3ZCLElBQUksSUFBSSxDQUFDLENBQUF4QixJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ2EsRUFBRSxLQUFLVyxLQUFLLENBQUNYLEVBQUUsRUFBRTtnQkFDN0MsTUFBTSxJQUFJLENBQUMsQ0FBQWIsSUFBSyxDQUFDc0IsR0FBRyxDQUFDRSxLQUFLLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUF4QixJQUFLOztjQUVsQixJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFBLElBQUssR0FBR1csU0FBUztjQUV0QyxJQUFJLENBQUMsQ0FBQVgsSUFBSyxHQUFHLE1BQU1QLE1BQUEsQ0FBQWdDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixLQUFLLENBQUM7Y0FDdkMsTUFBTSxJQUFJLENBQUMsQ0FBQXhCLElBQUssQ0FBQzJCLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDO2NBRWxDLE9BQU8sSUFBSSxDQUFDLENBQUF4QixJQUFLO1lBQ2xCO1lBRUFrQixRQUFRLEdBQUcsTUFBT2xCLElBQVUsSUFBSTtjQUMvQixJQUFJLElBQUksQ0FBQyxDQUFBRCxZQUFhLEVBQUU7Z0JBQ3ZCZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixDQUFDO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxDQUFBaEIsWUFBYTs7Y0FHMUIsSUFBSSxDQUFDQyxJQUFJLEVBQUVGLEdBQUcsRUFBRTtnQkFDZmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO2dCQUMxQyxPQUFPO2tCQUFFYSxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFO2dCQUFjLENBQUU7O2NBR2hELElBQUksQ0FBQyxDQUFBL0IsR0FBSSxHQUFHRSxJQUFJLENBQUNGLEdBQUc7Y0FFcEIsSUFBSSxDQUFDLENBQUFDLFlBQWEsR0FBRyxJQUFJUCxLQUFBLENBQUFzQyxjQUFjLEVBQUU7Y0FDekNDLFVBQVUsQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFBakMsWUFBYTtjQUNuQyxNQUFNO2dCQUFFa0MsV0FBVztnQkFBRUMsUUFBUTtnQkFBRUMsS0FBSztnQkFBRUMsV0FBVztnQkFBRXRDO2NBQUcsQ0FBRSxHQUFHRSxJQUFJO2NBQy9ELE1BQU1xQyxhQUFhLEdBQUcsTUFBTXJDLElBQUksQ0FBQ3NDLFVBQVUsRUFBRTtjQUU3QyxNQUFNZCxLQUFLLEdBQUc7Z0JBQUVYLEVBQUUsRUFBRWYsR0FBRztnQkFBRW1DLFdBQVc7Z0JBQUVDLFFBQVE7Z0JBQUVDLEtBQUs7Z0JBQUVDLFdBQVc7Z0JBQUVDO2NBQWEsQ0FBRTtjQUNuRjtjQUNBLE1BQU1FLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQ3ZCLFlBQVksQ0FBQ1EsS0FBSyxDQUFDO2NBRTVDLE1BQU1nQixlQUFlLEdBQUdDLFFBQVEsSUFBRztnQkFDbEMsSUFBSSxDQUFDQSxRQUFRLEVBQUU7a0JBQ2QzQixPQUFPLENBQUNlLEtBQUssQ0FBQyxpQkFBaUIsRUFBRVksUUFBUSxDQUFDOztnQkFHM0MsSUFBSSxDQUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDckIsSUFBSSxDQUFDLENBQUFyQixZQUFhLENBQUMyQyxPQUFPLENBQUM7a0JBQUVkLE1BQU0sRUFBRSxJQUFJO2tCQUFFVztnQkFBSyxDQUFFLENBQUM7Y0FDcEQsQ0FBQztjQUVEQSxLQUFLLENBQ0hJLEtBQUssQ0FBQ04sYUFBYSxDQUFDLENBQ3BCL0IsSUFBSSxDQUFDa0MsZUFBZSxDQUFDLENBQ3JCSSxLQUFLLENBQUNmLEtBQUssSUFBRztnQkFDZGYsT0FBTyxDQUFDZSxLQUFLLENBQUMsaUJBQWlCLEVBQUVBLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLENBQUE5QixZQUFhLENBQUMyQyxPQUFPLENBQUM7a0JBQUVkLE1BQU0sRUFBRSxLQUFLO2tCQUFFQztnQkFBSyxDQUFFLENBQUM7Y0FDckQsQ0FBQyxDQUFDO2NBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQTlCLFlBQWE7WUFDMUIsQ0FBQztZQUVENEMsS0FBSyxHQUFHLE1BQUFBLENBQU9SLEtBQWEsRUFBRVUsUUFBZ0IsS0FBSTtjQUNqRCxJQUFJO2dCQUNILE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUFwRCxLQUFBLENBQUFxRCwwQkFBMEIsRUFBQ3pELE9BQUEsQ0FBQWUsSUFBSSxFQUFFOEIsS0FBSyxFQUFFVSxRQUFRLENBQUM7Z0JBRXhFLE9BQU8sTUFBTSxJQUFJLENBQUMzQixRQUFRLENBQUM0QixRQUFRLENBQUM7ZUFDcEMsQ0FBQyxPQUFPakIsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVELE1BQU0sRUFBRSxLQUFLO2tCQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ21CO2dCQUFPLENBQUU7O1lBRWhELENBQUM7WUFDRCxDQUFDO1lBRURDLGdCQUFnQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNILE1BQU1ILFFBQVEsR0FBRyxNQUFNLElBQUFwRCxLQUFBLENBQUF3RCxlQUFlLEVBQUM1RCxPQUFBLENBQUFlLElBQUksRUFBRWYsT0FBQSxDQUFBNkQsY0FBYyxDQUFDO2dCQUM1RDtnQkFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDakMsUUFBUSxDQUFDNEIsUUFBUSxDQUFDOUMsSUFBSSxDQUFDO2VBQ3pDLENBQUMsT0FBTzZCLEtBQUssRUFBRTtnQkFDZixNQUFNdUIsTUFBTSxHQUFHO2tCQUNkLCtDQUErQyxFQUFFLDBDQUEwQztrQkFDM0YsMkJBQTJCLEVBQUU7aUJBQzdCO2dCQUVELE9BQU87a0JBQUV4QixNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFdUIsTUFBTSxDQUFDdkIsS0FBSyxDQUFDd0IsSUFBSSxDQUFDLElBQUk7Z0JBQVEsQ0FBRTs7WUFFakUsQ0FBQztZQUVEQyxpQkFBaUIsR0FBRyxNQUFBQSxDQUFPbkIsS0FBYSxFQUFFVSxRQUFnQixFQUFFVSxRQUFnQixLQUFJO2NBQy9FLElBQUk7Z0JBQ0gsTUFBTVQsUUFBUSxHQUFHLE1BQU0sSUFBQXBELEtBQUEsQ0FBQThELDhCQUE4QixFQUFDbEUsT0FBQSxDQUFBZSxJQUFJLEVBQUU4QixLQUFLLEVBQUVVLFFBQVEsQ0FBQztnQkFDNUUsTUFBTVksbUJBQW1CLEdBQUc7a0JBQUUsR0FBR1gsUUFBUSxDQUFDOUMsSUFBSTtrQkFBRWlDLFdBQVcsRUFBRXNCO2dCQUFRLENBQUU7Z0JBRXZFLE9BQU8sTUFBTSxJQUFJLENBQUNyQyxRQUFRLENBQUM7a0JBQUUsR0FBRzRCLFFBQVE7a0JBQUU5QyxJQUFJLEVBQUV5RDtnQkFBbUIsQ0FBRSxDQUFDO2VBQ3RFLENBQUMsT0FBTzVCLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFRCxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNtQjtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURVLGFBQWEsR0FBRyxNQUFPdkIsS0FBYSxJQUFJO2NBQ3ZDLElBQUk7Z0JBQ0gsTUFBTSxJQUFBekMsS0FBQSxDQUFBaUUsc0JBQXNCLEVBQUNyRSxPQUFBLENBQUFlLElBQUksRUFBRThCLEtBQUssQ0FBQztnQkFDekMsT0FBTztrQkFBRVAsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUQsTUFBTSxFQUFFLEtBQUs7a0JBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDbUI7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVEWSxvQkFBb0IsR0FBRyxNQUFBQSxDQUFPUCxJQUFZLEVBQUVRLFdBQW1CLEtBQUk7Y0FDbEUsSUFBSTtnQkFDSCxNQUFNLElBQUFuRSxLQUFBLENBQUFvRSx1QkFBdUIsRUFBQ3hFLE9BQUEsQ0FBQWUsSUFBSSxFQUFFZ0QsSUFBSSxDQUFDO2dCQUN6QyxNQUFNLElBQUEzRCxLQUFBLENBQUFrRSxvQkFBb0IsRUFBQ3RFLE9BQUEsQ0FBQWUsSUFBSSxFQUFFZ0QsSUFBSSxFQUFFUSxXQUFXLENBQUM7Z0JBQ25ELE9BQU87a0JBQUVqQyxNQUFNLEVBQUU7Z0JBQUksQ0FBRTtlQUN2QixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFRCxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNtQjtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURwQyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFiLFlBQWEsR0FBR1ksU0FBUztnQkFDOUIsTUFBTSxJQUFBakIsS0FBQSxDQUFBa0IsT0FBTyxFQUFDdEIsT0FBQSxDQUFBZSxJQUFJLENBQUM7ZUFDbkIsQ0FBQyxPQUFPd0IsS0FBSyxFQUFFO2dCQUNmZixPQUFPLENBQUNlLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBQ0RrQyxNQUFNLEdBQUcsSUFBSSxDQUFDbkQsT0FBTzs7VUFDckJvRCxPQUFBLENBQUFwRSxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaE5ELElBQUFxRSxJQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUQsT0FBQSxHQUFBQyxPQUFBO1VBSEE7O1VBS0E7VUFDQTtVQUVBO1VBQ0E7VUFDQSxNQUFNMkUsR0FBRyxHQUFHO1lBQ1hDLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakRDLFVBQVUsRUFBRSxzQ0FBc0M7WUFDbERDLFdBQVcsRUFBRSwwREFBMEQ7WUFDdkVDLFNBQVMsRUFBRSxzQkFBc0I7WUFDakNDLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakRDLGlCQUFpQixFQUFFLGVBQWU7WUFDbENDLEtBQUssRUFBRSw0Q0FBNEM7WUFDbkRDLGFBQWEsRUFBRTtXQUNmO1VBQ0QsTUFBTUMsSUFBSSxHQUFHO1lBQ1pSLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakRDLFVBQVUsRUFBRSx1Q0FBdUM7WUFDbkRFLFNBQVMsRUFBRSx1QkFBdUI7WUFDbENDLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbERDLGlCQUFpQixFQUFFLGNBQWM7WUFDakNDLEtBQUssRUFBRTtXQUNQO1VBQ0QsTUFBTUcsTUFBTSxHQUFHO1lBQ2RDLEtBQUssRUFBRVgsR0FBRztZQUNWWSxXQUFXLEVBQUVaLEdBQUc7WUFDaEJhLE9BQU8sRUFBRTtjQUNSWixNQUFNLEVBQUUseUNBQXlDO2NBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO2NBQ2xERSxTQUFTLEVBQUUsc0JBQXNCO2NBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO2NBQ2pEQyxpQkFBaUIsRUFBRSxlQUFlO2NBQ2xDQyxLQUFLLEVBQUU7YUFDUDtZQUNETyxPQUFPLEVBQUVMLElBQUk7WUFDYk0sVUFBVSxFQUFFTjtXQUNaO1VBRUQ7VUFFQSxNQUFNTyxHQUFHLEdBQUcsSUFBQWpCLElBQUEsQ0FBQWtCLGFBQWEsRUFBQ1AsTUFBTSxDQUFDdEYsT0FBQSxDQUFBOEYsT0FBTSxDQUFDQyxXQUFXLENBQUMsQ0FBQztVQUU5QyxNQUFNaEYsSUFBSSxHQUFBMkQsT0FBQSxDQUFBM0QsSUFBQSxHQUFHLElBQUFYLEtBQUEsQ0FBQTRGLE9BQU8sRUFBQ0osR0FBRyxDQUFDO1VBQ3pCLE1BQU0vQixjQUFjLEdBQUFhLE9BQUEsQ0FBQWIsY0FBQSxHQUFHLElBQUl6RCxLQUFBLENBQUE2RixrQkFBa0IsRUFBRTtVQUMvQyxNQUFNQyxnQkFBZ0IsR0FBQXhCLE9BQUEsQ0FBQXdCLGdCQUFBLEdBQUcsSUFBSTlGLEtBQUEsQ0FBQStGLG9CQUFvQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEMUQsSUFBQW5HLE9BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQU1BLE1BQU1tRyxjQUFlLFNBQVEvRixNQUFBLENBQUFFLGFBQXVCO1lBR25ELElBQUlHLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBSyxJQUFLLENBQUNMLElBQUk7WUFDdkI7WUFDQSxJQUFJMkYsTUFBTUEsQ0FBQTtjQUNULE9BQU9yRyxPQUFBLENBQUFlLElBQUksQ0FBQ3VGLFdBQVcsR0FBR3RHLE9BQUEsQ0FBQWUsSUFBSSxDQUFDdUYsV0FBVyxDQUFDOUYsR0FBRyxHQUFHLElBQUk7WUFDdEQ7WUFFQSxJQUFJK0YsTUFBTUEsQ0FBQTtjQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBeEYsSUFBSyxDQUFDTCxJQUFJO1lBQ3pCO1lBRUEsQ0FBQThGLE9BQVE7WUFDUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUTtZQUNyQjtZQUVBLENBQUF6RixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQUYsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBMkYsT0FBUSxHQUFHLElBQUl0RyxLQUFBLENBQUFzQyxjQUFjLEVBQUU7Y0FFcEMsSUFBSSxDQUFDLENBQUF6QixJQUFLLEdBQUcsSUFBSVgsS0FBQSxDQUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzNCLElBQUksQ0FBQyxDQUFBUyxJQUFLLENBQUMyRixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDNUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBQ25ELElBQUksQ0FBQyxDQUFBZixJQUFLLENBQUMyRixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BEO1lBRUF5RixXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDOUUsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUEyRSxPQUFRLENBQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDdkIsS0FBSyxDQUFDO2NBQ2pDLElBQUksQ0FBQ0ksWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVBLE1BQU0wQixnQkFBZ0JBLENBQUE7Y0FDckIsT0FBTyxJQUFJLENBQUMsQ0FBQTVDLElBQUssQ0FBQzRDLGdCQUFnQixFQUFFO2NBQ3BDO1lBQ0Q7WUFFQSxNQUFNSyxpQkFBaUJBLENBQUM7Y0FBRW5CLEtBQUs7Y0FBRVUsUUFBUTtjQUFFVTtZQUFRLENBQUU7Y0FDcEQsSUFBSTtnQkFDSCxNQUFNVCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXpDLElBQUssQ0FBQ2lELGlCQUFpQixDQUFDbkIsS0FBSyxFQUFFVSxRQUFRLEVBQUVVLFFBQVEsQ0FBQztnQkFDOUUsSUFBSSxDQUFDVCxRQUFRLENBQUNsQixNQUFNLEVBQUUsT0FBTztrQkFBRUEsTUFBTSxFQUFFLEtBQUs7a0JBQUVDLEtBQUssRUFBRWlCLFFBQVEsQ0FBQ2pCO2dCQUFLLENBQUU7Z0JBRXJFLE9BQU9pQixRQUFRO2VBQ2YsQ0FBQyxPQUFPb0QsQ0FBQyxFQUFFO2dCQUNYLE9BQU87a0JBQUV0RSxNQUFNLEVBQUUsS0FBSztrQkFBRUMsS0FBSyxFQUFFO2dCQUFRLENBQUU7O1lBRTNDO1lBRUEsTUFBTWtDLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUExRCxJQUFLLENBQUNPLE9BQU8sRUFBRTtnQkFFMUIsU0FBU3VGLEtBQUtBLENBQUNDLFFBQVE7a0JBQ3RCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztrQkFDcENHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUc7b0JBQ3ZDLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNELEdBQUcsQ0FBQyxFQUFFO3NCQUN6QkYsWUFBWSxDQUFDSSxVQUFVLENBQUNGLEdBQUcsQ0FBQzs7a0JBRTlCLENBQUMsQ0FBQztnQkFDSDtnQkFDQVIsS0FBSyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDNUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFFM0IsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPMkUsQ0FBQyxFQUFFO2dCQUNYcEYsT0FBTyxDQUFDZSxLQUFLLENBQUNxRSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1ZLGNBQWMsR0FBQTlDLE9BQUEsQ0FBQThDLGNBQUEsR0FBRyxJQUFJcEIsY0FBYyxFQUFFO1VBQzdEM0QsVUFBVSxDQUFDZ0YsQ0FBQyxHQUFHRCxjQUFjIiwiaWdub3JlTGlzdCI6W119