System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@beyond-js/reactive@1.1.6/model", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/app', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3999769167,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _config = require("./firebase/config");
          var _token = require("./token");
          var _auth = require("firebase/auth");
          var _core = require("@beyond-js/kernel/core");
          class Auth {
            #uid;
            #pendingLogin;
            static async login(email, password) {
              const userCredential = await (0, _config.auth)().signInWithEmailAndPassword(email, password);
              const user = new _users.User(userCredential.user.uid, userCredential.user.displayName, userCredential.user.email);
              const token = await _token.TokenManager.getToken(user);
              await _token.TokenManager.storeToken(token, user);
              return user;
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
            registerWithEmail = async (email, password, userName) => {
              try {
                const response = await (0, _auth.createUserWithEmailAndPassword)(_config.auth, email, password);
                const userWithDisplayName = {
                  ...response.user,
                  displayName: userName
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
        hash: 3901817652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = void 0;
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          // Import the functions you need from the SDKs you need

          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const CONFIG = {
            development: {
              apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
              authDomain: 'aimpact-partners-dev.firebaseapp.com',
              databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
              projectId: 'aimpact-partners-dev',
              storageBucket: 'aimpact-partners-dev.appspot.com',
              messagingSenderId: '1081434267674',
              appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
              measurementId: 'G-QLL5WFH89Y'
            },
            testing: {
              apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
              authDomain: 'chat-api-test-393820.firebaseapp.com',
              projectId: 'chat-api-test-393820',
              storageBucket: 'chat-api-test-393820.appspot.com',
              messagingSenderId: '1083395329827',
              appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
            }
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(CONFIG.testing);
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 822604179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _users = require("@aimpact/chat-sdk/users");
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
              const user = new _users.User({
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
                return response;
              } catch (e) {
                console.error(e);
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

      /***********************
      INTERNAL MODULE: ./token
      ***********************/

      ims.set('./token', {
        hash: 467389159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenManager = void 0;
          var _config = require("./firebase/config");
          class TokenManager {
            static async getToken(user) {
              const firebaseUser = await (0, _config.auth)().getUser(user.id);
              const token = await firebaseUser.getIdToken();
              return token;
            }
            static async storeToken(token, user) {
              // Logic to store token to your backend and generate your own value.
              // This could involve making a fetch or axios request to your backend API.
            }
            static async refreshToken(user) {
              const firebaseUser = await (0, _config.auth)().getUser(user.id);
              const newToken = await firebaseUser.getIdToken(true);
              return newToken;
            }
            static async validateToken(token) {
              return true;
              // Validate token logic...
            }
          }

          exports.TokenManager = TokenManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl90b2tlbiIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiUGVuZGluZ1Byb21pc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJOYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkNPTkZJRyIsImRldmVsb3BtZW50IiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwidGVzdGluZyIsImFwcCIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiX21vZGVsIiwiX2F1dGgyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJsb2dnZWQiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibGlzdGVuZXIiLCJzZXRVc2VyIiwicmVhZHkiLCJ1cGRhdGVVc2VyIiwiZGF0YSIsInNldEZpcmViYXNlVXNlciIsInVuZGVmaW5lZCIsInRyaWdnZXJFdmVudCIsImUiLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIiwiZmlyZWJhc2VVc2VyIiwiZ2V0VXNlciIsInJlZnJlc2hUb2tlbiIsIm5ld1Rva2VuIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyIsIi90b2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFVQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFRTSxNQUFPSyxJQUFJO1lBQ2hCLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBQ2IsYUFBYUMsS0FBS0EsQ0FBQ0MsS0FBYSxFQUFFQyxRQUFnQjtjQUNqRCxNQUFNQyxjQUFjLEdBQUcsTUFBTSxJQUFBVixPQUFBLENBQUFXLElBQUksR0FBRSxDQUFDQywwQkFBMEIsQ0FBQ0osS0FBSyxFQUFFQyxRQUFRLENBQUM7Y0FDL0UsTUFBTUksSUFBSSxHQUFHLElBQUlmLE1BQUEsQ0FBQWdCLElBQUksQ0FBQ0osY0FBYyxDQUFDRyxJQUFJLENBQUNSLEdBQUcsRUFBRUssY0FBYyxDQUFDRyxJQUFJLENBQUNFLFdBQVcsRUFBRUwsY0FBYyxDQUFDRyxJQUFJLENBQUNMLEtBQUssQ0FBQztjQUUxRyxNQUFNUSxLQUFLLEdBQUcsTUFBTWYsTUFBQSxDQUFBZ0IsWUFBWSxDQUFDQyxRQUFRLENBQUNMLElBQUksQ0FBQztjQUMvQyxNQUFNWixNQUFBLENBQUFnQixZQUFZLENBQUNFLFVBQVUsQ0FBQ0gsS0FBSyxFQUFFSCxJQUFJLENBQUM7Y0FFMUMsT0FBT0EsSUFBSTtZQUNaO1lBRUFPLFFBQVEsR0FBRyxNQUFPQyxRQUF3QixJQUEwQjtjQUNuRSxJQUFJQSxRQUFRLENBQUNSLElBQUksRUFBRVIsR0FBRyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBQSxHQUFJLEtBQUtnQixRQUFRLENBQUNSLElBQUksQ0FBQ1IsR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHZ0IsUUFBUSxDQUFDUixJQUFJLENBQUNSLEdBQUc7Z0JBQzdCLElBQUksSUFBSSxDQUFDLENBQUFDLFlBQWEsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO2dCQUNqRCxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUlILEtBQUEsQ0FBQW1CLGNBQWMsRUFBRTtnQkFFekMsTUFBTTtrQkFBRVAsV0FBVztrQkFBRVEsUUFBUTtrQkFBRWYsS0FBSztrQkFBRWdCLFdBQVc7a0JBQUVuQjtnQkFBRyxDQUFFLEdBQUdnQixRQUFRLENBQUNSLElBQUk7Z0JBQ3hFLE1BQU1ZLGFBQWEsR0FBRyxNQUFNSixRQUFRLENBQUNSLElBQUksQ0FBQ2EsVUFBVSxFQUFFO2dCQUN0RCxNQUFNQyxLQUFLLEdBQUc7a0JBQUVDLEVBQUUsRUFBRXZCLEdBQUc7a0JBQUVVLFdBQVc7a0JBQUVRLFFBQVE7a0JBQUVmLEtBQUs7a0JBQUVnQixXQUFXO2tCQUFFQztnQkFBYSxDQUFFO2dCQUNuRixNQUFNWixJQUFJLEdBQUcsSUFBSWYsTUFBQSxDQUFBZ0IsSUFBSSxDQUFDYSxLQUFLLENBQUM7Z0JBQzVCZCxJQUFJLENBQUNnQixHQUFHLENBQUNGLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBRXJCZCxJQUFJLENBQUNOLEtBQUssQ0FBQ2tCLGFBQWEsQ0FBQyxDQUFDSyxJQUFJLENBQUNDLFFBQVEsSUFBRztrQkFDekMsSUFBSSxDQUFDQSxRQUFRLEVBQUU7b0JBQ2RDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQixFQUFFRixRQUFRLENBQUM7O2tCQUUzQyxJQUFJLENBQUMsQ0FBQXpCLFlBQWEsQ0FBQzRCLE9BQU8sQ0FBQztvQkFBRUMsTUFBTSxFQUFFLElBQUk7b0JBQUV0QjtrQkFBSSxDQUFFLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQyxDQUFBUCxZQUFhOztjQUUxQixPQUFPO2dCQUFFNkIsTUFBTSxFQUFFLEtBQUs7Z0JBQUVGLEtBQUssRUFBRTtjQUFjLENBQUU7WUFDaEQsQ0FBQztZQUVERyxnQkFBZ0IsR0FBRyxNQUFBQSxDQUFBLEtBQWlDO2NBQ25ELElBQUk7Z0JBQ0gsTUFBTWYsUUFBUSxHQUFHLE1BQU0sSUFBQW5CLEtBQUEsQ0FBQW1DLGVBQWUsRUFBQ3JDLE9BQUEsQ0FBQVcsSUFBSSxFQUFFWCxPQUFBLENBQUFzQyxjQUFjLENBQUM7Z0JBQzVEO2dCQUNBLE9BQU8sTUFBTSxJQUFJLENBQUNsQixRQUFRLENBQUNDLFFBQVEsQ0FBQztlQUNwQyxDQUFDLE9BQU9ZLEtBQUssRUFBRTtnQkFDZixNQUFNTSxNQUFNLEdBQUc7a0JBQ2QsK0NBQStDLEVBQUUsMENBQTBDO2tCQUMzRiwyQkFBMkIsRUFBRTtpQkFDN0I7Z0JBRUQsT0FBTztrQkFBRUosTUFBTSxFQUFFLEtBQUs7a0JBQUVGLEtBQUssRUFBRU0sTUFBTSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJO2dCQUFRLENBQUU7O1lBRWpFLENBQUM7WUFFREMsaUJBQWlCLEdBQUcsTUFBQUEsQ0FBT2pDLEtBQWEsRUFBRUMsUUFBZ0IsRUFBRWlDLFFBQWdCLEtBQUk7Y0FDL0UsSUFBSTtnQkFDSCxNQUFNckIsUUFBUSxHQUFHLE1BQU0sSUFBQW5CLEtBQUEsQ0FBQXlDLDhCQUE4QixFQUFDM0MsT0FBQSxDQUFBVyxJQUFJLEVBQUVILEtBQUssRUFBRUMsUUFBUSxDQUFDO2dCQUM1RSxNQUFNbUMsbUJBQW1CLEdBQUc7a0JBQUUsR0FBR3ZCLFFBQVEsQ0FBQ1IsSUFBSTtrQkFBRUUsV0FBVyxFQUFFMkI7Z0JBQVEsQ0FBRTtnQkFFdkUsT0FBTyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQztrQkFBRSxHQUFHQyxRQUFRO2tCQUFFUixJQUFJLEVBQUUrQjtnQkFBbUIsQ0FBRSxDQUFDO2VBQ3RFLENBQUMsT0FBT1gsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVFLE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUVBLEtBQUssQ0FBQ1k7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVEQyxhQUFhLEdBQUcsTUFBT3RDLEtBQWEsSUFBSTtjQUN2QyxJQUFJO2dCQUNILE1BQU0sSUFBQU4sS0FBQSxDQUFBNkMsc0JBQXNCLEVBQUMvQyxPQUFBLENBQUFXLElBQUksRUFBRUgsS0FBSyxDQUFDO2dCQUN6QyxPQUFPO2tCQUFFMkIsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPRixLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUUsTUFBTSxFQUFFLEtBQUs7a0JBQUVGLEtBQUssRUFBRUEsS0FBSyxDQUFDWTtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURHLG9CQUFvQixHQUFHLE1BQUFBLENBQU9SLElBQVksRUFBRVMsV0FBbUIsS0FBSTtjQUNsRSxJQUFJO2dCQUNILE1BQU0sSUFBQS9DLEtBQUEsQ0FBQWdELHVCQUF1QixFQUFDbEQsT0FBQSxDQUFBVyxJQUFJLEVBQUU2QixJQUFJLENBQUM7Z0JBQ3pDLE1BQU0sSUFBQXRDLEtBQUEsQ0FBQThDLG9CQUFvQixFQUFDaEQsT0FBQSxDQUFBVyxJQUFJLEVBQUU2QixJQUFJLEVBQUVTLFdBQVcsQ0FBQztnQkFDbkQsT0FBTztrQkFBRWQsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPRixLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUUsTUFBTSxFQUFFLEtBQUs7a0JBQUVGLEtBQUssRUFBRUEsS0FBSyxDQUFDWTtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRUR0QyxLQUFLLEdBQUcsTUFBQUEsQ0FBT0MsS0FBYSxFQUFFQyxRQUFnQixLQUFJO2NBQ2pELElBQUk7Z0JBQ0gsTUFBTVksUUFBUSxHQUFHLE1BQU0sSUFBQW5CLEtBQUEsQ0FBQVUsMEJBQTBCLEVBQUNaLE9BQUEsQ0FBQVcsSUFBSSxFQUFFSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQztnQkFDeEUsT0FBTyxNQUFNLElBQUksQ0FBQ1csUUFBUSxDQUFDQyxRQUFRLENBQUM7ZUFDcEMsQ0FBQyxPQUFPWSxLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUUsTUFBTSxFQUFFLEtBQUs7a0JBQUVGLEtBQUssRUFBRUEsS0FBSyxDQUFDWTtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURNLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxNQUFNLElBQUFqRCxLQUFBLENBQUFpRCxPQUFPLEVBQUNuRCxPQUFBLENBQUFXLElBQUksQ0FBQztlQUNuQixDQUFDLE9BQU9zQixLQUFLLEVBQUU7Z0JBQ2ZELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQSxLQUFLLENBQUM7O1lBRXRCLENBQUM7WUFDRG1CLE1BQU0sR0FBRyxJQUFJLENBQUNELE9BQU87O1VBQ3JCRSxPQUFBLENBQUFqRCxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEhELElBQUFrRCxJQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBRkE7O1VBSUE7VUFDQTtVQUVBO1VBQ0E7VUFFQSxNQUFNd0QsTUFBTSxHQUFHO1lBQ2RDLFdBQVcsRUFBRTtjQUNaQyxNQUFNLEVBQUUseUNBQXlDO2NBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO2NBQ2xEQyxXQUFXLEVBQUUsMERBQTBEO2NBQ3ZFQyxTQUFTLEVBQUUsc0JBQXNCO2NBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO2NBQ2pEQyxpQkFBaUIsRUFBRSxlQUFlO2NBQ2xDQyxLQUFLLEVBQUUsNENBQTRDO2NBQ25EQyxhQUFhLEVBQUU7YUFDZjtZQUNEQyxPQUFPLEVBQUU7Y0FDUlIsTUFBTSxFQUFFLHlDQUF5QztjQUNqREMsVUFBVSxFQUFFLHNDQUFzQztjQUNsREUsU0FBUyxFQUFFLHNCQUFzQjtjQUNqQ0MsYUFBYSxFQUFFLGtDQUFrQztjQUNqREMsaUJBQWlCLEVBQUUsZUFBZTtjQUNsQ0MsS0FBSyxFQUFFOztXQUVSO1VBRUQ7VUFDQSxNQUFNRyxHQUFHLEdBQUcsSUFBQVosSUFBQSxDQUFBYSxhQUFhLEVBQUNaLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDO1VBQ2xDLE1BQU10RCxJQUFJLEdBQUEwQyxPQUFBLENBQUExQyxJQUFBLEdBQUcsSUFBQVQsS0FBQSxDQUFBa0UsT0FBTyxFQUFDRixHQUFHLENBQUM7VUFDekIsTUFBTTVCLGNBQWMsR0FBQWUsT0FBQSxDQUFBZixjQUFBLEdBQUcsSUFBSXBDLEtBQUEsQ0FBQW1FLGtCQUFrQixFQUFFO1VBQy9DLE1BQU1DLGdCQUFnQixHQUFBakIsT0FBQSxDQUFBaUIsZ0JBQUEsR0FBRyxJQUFJcEUsS0FBQSxDQUFBcUUsb0JBQW9CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkMxRCxJQUFBdkUsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFFQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBMEUsTUFBQSxHQUFBMUUsT0FBQTtVQU1BLE1BQU0yRSxjQUFlLFNBQVFGLE1BQUEsQ0FBQUcsYUFBdUI7WUFFbkQsQ0FBQTlELElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLElBQUkrRCxNQUFNQSxDQUFBO2NBQ1QsT0FBTzVFLE9BQUEsQ0FBQVcsSUFBSSxDQUFDa0UsV0FBVyxHQUFHN0UsT0FBQSxDQUFBVyxJQUFJLENBQUNrRSxXQUFXLENBQUN4RSxHQUFHLEdBQUcsSUFBSTtZQUN0RDtZQUVBLElBQUl5RSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDakUsSUFBSTtZQUNuQjtZQUVBLENBQUFrRSxPQUFRO1lBQ1IsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVE7WUFDckI7WUFHQSxDQUFBcEUsSUFBSyxHQUFTLElBQUk4RCxNQUFBLENBQUFyRSxJQUFJLEVBQUU7WUFDeEIsSUFBSU8sSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQXNFLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUYsT0FBUSxHQUFHLElBQUk1RSxLQUFBLENBQUFtQixjQUFjLEVBQUU7Y0FFcEMsSUFBQXBCLEtBQUEsQ0FBQWdGLGtCQUFrQixFQUFDbEYsT0FBQSxDQUFBVyxJQUFJLEVBQUUsSUFBSSxDQUFDd0UsUUFBUSxDQUFDO1lBQ3hDO1lBRUFBLFFBQVEsR0FBRyxNQUFNdEUsSUFBSSxJQUFHO2NBQ3ZCLElBQUlBLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksQ0FBQ3VFLE9BQU8sQ0FBQ3ZFLElBQUksQ0FBQzs7Y0FHekIsSUFBSSxDQUFDd0UsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUFOLE9BQVEsQ0FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUNtRCxLQUFLLENBQUM7WUFDbEMsQ0FBQztZQUVELE1BQU1DLFVBQVVBLENBQUNDLElBQUk7Y0FDcEIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDWCxJQUFJLElBQUksQ0FBQyxDQUFBMUUsSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNlLEVBQUUsS0FBSzJELElBQUksQ0FBQ2xGLEdBQUcsRUFBRTtjQUU5QyxNQUFNUSxJQUFJLEdBQUcsSUFBSWYsTUFBQSxDQUFBZ0IsSUFBSSxDQUFDO2dCQUFFYyxFQUFFLEVBQUUyRCxJQUFJLENBQUNsRjtjQUFHLENBQUUsQ0FBQztjQUN2QyxNQUFNUSxJQUFJLENBQUNtRSxPQUFPO2NBQ2xCbkUsSUFBSSxDQUFDMkUsZUFBZSxDQUFDRCxJQUFJLENBQUM7Y0FFMUI7Y0FDQSxNQUFNMUUsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDMEQsSUFBSSxDQUFDO2NBQ3BCLElBQUksQ0FBQyxDQUFBMUUsSUFBSyxHQUFHQSxJQUFJO1lBQ2xCO1lBQ0F1RSxPQUFPLEdBQUcsTUFBTUcsSUFBSSxJQUFHO2NBQ3RCLElBQUksQ0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBMUUsSUFBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHNEUsU0FBUztnQkFDdEIsSUFBSSxDQUFDLENBQUE5RSxJQUFLLENBQUN3QyxPQUFPLEVBQUU7O2NBRXJCLElBQUlvQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsSUFBSSxDQUFDOztjQUc1QixJQUFJLENBQUNGLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0ssWUFBWSxDQUFDLFFBQVEsQ0FBQztjQUMzQixJQUFJLENBQUMsQ0FBQVgsT0FBUSxDQUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQ21ELEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsTUFBTWpELGdCQUFnQkEsQ0FBQTtjQUNyQixJQUFJO2dCQUNILE1BQU1mLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBVixJQUFLLENBQUN5QixnQkFBZ0IsRUFBRTtnQkFFcEQsSUFBSSxDQUFDZixRQUFRLENBQUNjLE1BQU0sRUFBRSxPQUFPLEtBQUs7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBdEIsSUFBSyxHQUFHUSxRQUFRLENBQUNSLElBQUk7Z0JBRTFCLE9BQU9RLFFBQVE7ZUFDZixDQUFDLE9BQU9zRSxDQUFDLEVBQUU7Z0JBQ1gzRCxPQUFPLENBQUNDLEtBQUssQ0FBQzBELENBQUMsQ0FBQztnQkFDaEIsT0FBTztrQkFBRXhELE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUU7Z0JBQVEsQ0FBRTs7WUFFM0M7WUFFQSxNQUFNbUIsTUFBTUEsQ0FBQTtjQUNYLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQXpDLElBQUssQ0FBQ3dDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLENBQUF0QyxJQUFLLEdBQUc0RSxTQUFTO2dCQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYM0QsT0FBTyxDQUFDQyxLQUFLLENBQUMwRCxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1DLGNBQWMsR0FBQXZDLE9BQUEsQ0FBQXVDLGNBQUEsR0FBRyxJQUFJbEIsY0FBYyxFQUFFO1VBQzdEbUIsVUFBVSxDQUFDQyxDQUFDLEdBQUdGLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekc3QixJQUFBNUYsT0FBQSxHQUFBRCxPQUFBO1VBR00sTUFBT2tCLFlBQVk7WUFDeEIsYUFBYUMsUUFBUUEsQ0FBQ0wsSUFBVTtjQUMvQixNQUFNa0YsWUFBWSxHQUFHLE1BQU0sSUFBQS9GLE9BQUEsQ0FBQVcsSUFBSSxHQUFFLENBQUNxRixPQUFPLENBQUNuRixJQUFJLENBQUNlLEVBQUUsQ0FBQztjQUNsRCxNQUFNWixLQUFLLEdBQUcsTUFBTStFLFlBQVksQ0FBQ3JFLFVBQVUsRUFBRTtjQUM3QyxPQUFPVixLQUFLO1lBQ2I7WUFFQSxhQUFhRyxVQUFVQSxDQUFDSCxLQUFhLEVBQUVILElBQVU7Y0FDaEQ7Y0FDQTtZQUFBO1lBR0QsYUFBYW9GLFlBQVlBLENBQUNwRixJQUFVO2NBQ25DLE1BQU1rRixZQUFZLEdBQUcsTUFBTSxJQUFBL0YsT0FBQSxDQUFBVyxJQUFJLEdBQUUsQ0FBQ3FGLE9BQU8sQ0FBQ25GLElBQUksQ0FBQ2UsRUFBRSxDQUFDO2NBQ2xELE1BQU1zRSxRQUFRLEdBQUcsTUFBTUgsWUFBWSxDQUFDckUsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNwRCxPQUFPd0UsUUFBUTtZQUNoQjtZQUVBLGFBQWFDLGFBQWFBLENBQUNuRixLQUFhO2NBQ3ZDLE9BQU8sSUFBSTtjQUNYO1lBQ0Q7OztVQUNBcUMsT0FBQSxDQUFBcEMsWUFBQSxHQUFBQSxZQUFBIn0=