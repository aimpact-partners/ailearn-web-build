System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/settings", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_firebase1050Auth) {
      dependency_2 = _firebase1050Auth;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_firebase1050App) {
      dependency_4 = _firebase1050App;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_5 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChatSdk100Settings) {
      dependency_6 = _aimpactChatSdk100Settings;
    }, function (_beyondJsReactive1111Model) {
      dependency_7 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/app', dependency_4], ['@aimpact/chat-sdk/config', dependency_5], ['@aimpact/chat-sdk/settings', dependency_6], ['@beyond-js/reactive/model', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3757955403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _config = require("./firebase/config");
          var _auth = require("firebase/auth");
          var _core = require("@beyond-js/kernel/core");
          class Auth {
            #uid;
            #pendingLogin;
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
                const user = new _users.User(specs);
                user.set(specs, true);
                user.login(firebaseToken).then(couldLog => {
                  if (!couldLog) {
                    console.error('Could not login', couldLog);
                  }
                  this.#pendingLogin.resolve({
                    status: true,
                    user
                  });
                });
                return this.#pendingLogin;
              }
              return {
                status: false,
                error: 'INVALID_USER'
              };
            };
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
        hash: 3241177956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _settings = require("@aimpact/chat-sdk/settings");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth2 = require("./auth");
          class SessionManager extends _model.ReactiveModel {
            #user;
            get user() {
              return this.#user;
            }
            get userId() {
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.user;
            }
            #promise;
            get isReady() {
              return this.#promise;
            }
            #auth = new _auth2.Auth();
            get auth() {
              return this.#auth;
            }
            constructor() {
              super();
              this.#promise = new _core.PendingPromise();
              (0, _auth.onAuthStateChanged)(_config.auth, this.listener);
            }
            listener = async user => {
              if (user) {
                await this.setUser(user);
              }
              this.ready = true;
              this.#promise.resolve(this.ready);
            };
            async updateUser(data) {
              if (!data) return;
              if (this.#user && this.#user.id === data.uid) return;
              const user = new _settings.SDKSettings.userModel({
                id: data.uid
              });
              await user.isReady;
              user.setFirebaseUser(data);
              /* TODO Review */
              await user.set(data);
              this.#user = user;
            }
            setUser = async data => {
              if (!data && this.#user) {
                this.#user = undefined;
                this.#auth.signOut();
              }
              if (data) {
                await this.updateUser(data);
              }
              this.ready = true;
              this.triggerEvent('change');
              this.#promise.resolve(this.ready);
            };
            async signInWithGoogle() {
              try {
                const response = await this.#auth.signInWithGoogle();
                if (!response.status) return false;
                this.#user = response.user;
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
                this.#user = undefined;
                this.triggerEvent('change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwiYXBwTG9naW4iLCJyZXNwb25zZSIsInVzZXIiLCJQZW5kaW5nUHJvbWlzZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwiVXNlciIsInNldCIsImxvZ2luIiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJlcnJvcnMiLCJjb2RlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImxvZ291dCIsImV4cG9ydHMiLCJfYXBwIiwiREVWIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJfc2V0dGluZ3MiLCJfbW9kZWwiLCJfYXV0aDIiLCJTZXNzaW9uTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VySWQiLCJjdXJyZW50VXNlciIsImxvZ2dlZCIsInByb21pc2UiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJsaXN0ZW5lciIsInNldFVzZXIiLCJyZWFkeSIsInVwZGF0ZVVzZXIiLCJkYXRhIiwiU0RLU2V0dGluZ3MiLCJ1c2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFVQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFRTSxNQUFPSSxJQUFJO1lBQ2hCLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBRWJDLFFBQVEsR0FBRyxNQUFPQyxRQUF3QixJQUFJO2NBQzdDLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFSixHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLENBQUFBLEdBQUksS0FBS0csUUFBUSxDQUFDQyxJQUFJLENBQUNKLEdBQUcsRUFBRTtnQkFDckMsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0csUUFBUSxDQUFDQyxJQUFJLENBQUNKLEdBQUc7Z0JBQzdCLElBQUksSUFBSSxDQUFDLENB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