System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.5.0/auth", "@beyond-js/kernel@0.1.9/core", "firebase@10.5.0/app", "@beyond-js/reactive@1.1.9/model", "react@18.2.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive119Model) {
      dependency_5 = _beyondJsReactive119Model;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 2130848214,
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
        hash: 2755192558,
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
          const app = (0, _app.initializeApp)(CONFIG.development);
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2283428919,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl90b2tlbiIsIl9hdXRoIiwiX2NvcmUiLCJBdXRoIiwidWlkIiwicGVuZGluZ0xvZ2luIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiVXNlciIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJUb2tlbk1hbmFnZXIiLCJnZXRUb2tlbiIsInN0b3JlVG9rZW4iLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiUGVuZGluZ1Byb21pc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwidGhlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVQcm92aWRlciIsImVycm9ycyIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsInNpZ25PdXQiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkNPTkZJRyIsImRldmVsb3BtZW50IiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwidGVzdGluZyIsInByb2R1Y3Rpb24iLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIl9tb2RlbCIsIl9hdXRoMiIsIlNlc3Npb25NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImxpc3RlbmVyIiwic2V0VXNlciIsInJlYWR5IiwidXBkYXRlVXNlciIsImRhdGEiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImZpcmViYXNlVXNlciIsImdldFVzZXIiLCJyZWZyZXNoVG9rZW4iLCJuZXdUb2tlbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvaW5kZXgudHMiLCIvdG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBVUEsSUFBQUksS0FBQSxHQUFBSixPQUFBO1VBUU0sTUFBT0ssSUFBSTtZQUNoQixDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsWUFBYTtZQUNiLGFBQWFDLEtBQUtBLENBQUNDLEtBQWEsRUFBRUMsUUFBZ0I7Y0FDakQsTUFBTUMsY0FBYyxHQUFHLE1BQU0sSUFBQVYsT0FBQSxDQUFBVyxJQUFJLEdBQUUsQ0FBQ0MsMEJBQTBCLENBQUNKLEtBQUssRUFBRUMsUUFBUSxDQUFDO2NBQy9FLE1BQU1JLElBQUksR0FBRyxJQUFJZixNQUFBLENBQUFnQixJQUFJLENBQUNKLGNBQWMsQ0FBQ0csSUFBSSxDQUFDUixHQUFHLEVBQUVLLGNBQWMsQ0FBQ0csSUFBSSxDQUFDRSxXQUFXLEVBQUVMLGNBQWMsQ0FBQ0csSUFBSSxDQUFDTCxLQUFLLENBQUM7Y0FFMUcsTUFBTVEsS0FBSyxHQUFHLE1BQU1mLE1BQUEsQ0FBQWdCLFlBQVksQ0FBQ0MsUUFBUSxDQUFDTCxJQUFJLENBQUM7Y0FDL0MsTUFBTVosTUFBQSxDQUFBZ0IsWUFBWSxDQUFDRSxVQUFVLENBQUNILEtBQUssRUFBRUgsSUFBSSxDQUFDO2NBRTFDLE9BQU9BLElBQUk7WUFDWjtZQUVBTyxRQUFRLEdBQUcsTUFBT0MsUUFBd0IsSUFBMEI7Y0FDbkUsSUFBSUEsUUFBUSxDQUFDUixJQUFJLEVBQUVSLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsQ0FBQUEsR0FBSSxLQUFLZ0IsUUFBUSxDQUFDUixJQUFJLENBQUNSLEdBQUcsRUFBRTtnQkFDckMsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR2dCLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDUixHQUFHO2dCQUM3QixJQUFJLElBQUksQ0FBQyxDQUFBQyxZQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtnQkFDakQsSUFBSSxDQUFDLENBQUFBLFlBQWEsR0FBRyxJQUFJSCxLQUFBLENBQUFtQixjQUFjLEVBQUU7Z0JBRXpDLE1BQU07a0JBQUVQLFdBQVc7a0JBQUVRLFFBQVE7a0JBQUVmLEtBQUs7a0JBQUVnQixXQUFXO2tCQUFFbkI7Z0JBQUcsQ0FBRSxHQUFHZ0IsUUFBUSxDQUFDUixJQUFJO2dCQUN4RSxNQUFNWSxhQUFhLEdBQUcsTUFBTUosUUFBUSxDQUFDUixJQUFJLENBQUNhLFVBQVUsRUFBRTtnQkFDdEQsTUFBTUMsS0FBSyxHQUFHO2tCQUFFQyxFQUFFLEVBQUV2QixHQUFHO2tCQUFFVSxXQUFXO2tCQUFFUSxRQUFRO2tCQUFFZixLQUFLO2tCQUFFZ0IsV0FBVztrQkFBRUM7Z0JBQWEsQ0FBRTtnQkFDbkYsTUFBTVosSUFBSSxHQUFHLElBQUlmLE1BQUEsQ0FBQWdCLElBQUksQ0FBQ2EsS0FBSyxDQUFDO2dCQUM1QmQsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUVyQmQsSUFBSSxDQUFDTixLQUFLLENBQUNrQixhQUFhLENBQUMsQ0FBQ0ssSUFBSSxDQUFDQyxRQUFRLElBQUc7a0JBQ3pDLElBQUksQ0FBQ0EsUUFBUSxFQUFFO29CQUNkQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRUYsUUFBUSxDQUFDOztrQkFFM0MsSUFBSSxDQUFDLENBQUF6QixZQUFhLENBQUM0QixPQUFPLENBQUM7b0JBQUVDLE1BQU0sRUFBRSxJQUFJO29CQUFFdEI7a0JBQUksQ0FBRSxDQUFDO2dCQUNuRCxDQUFDLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsQ0FBQVAsWUFBYTs7Y0FFMUIsT0FBTztnQkFBRTZCLE1BQU0sRUFBRSxLQUFLO2dCQUFFRixLQUFLLEVBQUU7Y0FBYyxDQUFFO1lBQ2hELENBQUM7WUFFREcsZ0JBQWdCLEdBQUcsTUFBQUEsQ0FBQSxLQUFpQztjQUNuRCxJQUFJO2dCQUNILE1BQU1mLFFBQVEsR0FBRyxNQUFNLElBQUFuQixLQUFBLENBQUFtQyxlQUFlLEVBQUNyQyxPQUFBLENBQUFXLElBQUksRUFBRVgsT0FBQSxDQUFBc0MsY0FBYyxDQUFDO2dCQUM1RDtnQkFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDbEIsUUFBUSxDQUFDQyxRQUFRLENBQUM7ZUFDcEMsQ0FBQyxPQUFPWSxLQUFLLEVBQUU7Z0JBQ2YsTUFBTU0sTUFBTSxHQUFHO2tCQUNkLCtDQUErQyxFQUFFLDBDQUEwQztrQkFDM0YsMkJBQTJCLEVBQUU7aUJBQzdCO2dCQUVELE9BQU87a0JBQUVKLE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUVNLE1BQU0sQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSTtnQkFBUSxDQUFFOztZQUVqRSxDQUFDO1lBRURDLGlCQUFpQixHQUFHLE1BQUFBLENBQU9qQyxLQUFhLEVBQUVDLFFBQWdCLEVBQUVpQyxRQUFnQixLQUFJO2NBQy9FLElBQUk7Z0JBQ0gsTUFBTXJCLFFBQVEsR0FBRyxNQUFNLElBQUFuQixLQUFBLENBQUF5Qyw4QkFBOEIsRUFBQzNDLE9BQUEsQ0FBQVcsSUFBSSxFQUFFSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQztnQkFDNUUsTUFBTW1DLG1CQUFtQixHQUFHO2tCQUFFLEdBQUd2QixRQUFRLENBQUNSLElBQUk7a0JBQUVFLFdBQVcsRUFBRTJCO2dCQUFRLENBQUU7Z0JBRXZFLE9BQU8sTUFBTSxJQUFJLENBQUN0QixRQUFRLENBQUM7a0JBQUUsR0FBR0MsUUFBUTtrQkFBRVIsSUFBSSxFQUFFK0I7Z0JBQW1CLENBQUUsQ0FBQztlQUN0RSxDQUFDLE9BQU9YLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFRSxNQUFNLEVBQUUsS0FBSztrQkFBRUYsS0FBSyxFQUFFQSxLQUFLLENBQUNZO2dCQUFPLENBQUU7O1lBRWhELENBQUM7WUFFREMsYUFBYSxHQUFHLE1BQU90QyxLQUFhLElBQUk7Y0FDdkMsSUFBSTtnQkFDSCxNQUFNLElBQUFOLEtBQUEsQ0FBQTZDLHNCQUFzQixFQUFDL0MsT0FBQSxDQUFBVyxJQUFJLEVBQUVILEtBQUssQ0FBQztnQkFDekMsT0FBTztrQkFBRTJCLE1BQU0sRUFBRTtnQkFBSSxDQUFFO2VBQ3ZCLENBQUMsT0FBT0YsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVFLE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUVBLEtBQUssQ0FBQ1k7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVERyxvQkFBb0IsR0FBRyxNQUFBQSxDQUFPUixJQUFZLEVBQUVTLFdBQW1CLEtBQUk7Y0FDbEUsSUFBSTtnQkFDSCxNQUFNLElBQUEvQyxLQUFBLENBQUFnRCx1QkFBdUIsRUFBQ2xELE9BQUEsQ0FBQVcsSUFBSSxFQUFFNkIsSUFBSSxDQUFDO2dCQUN6QyxNQUFNLElBQUF0QyxLQUFBLENBQUE4QyxvQkFBb0IsRUFBQ2hELE9BQUEsQ0FBQVcsSUFBSSxFQUFFNkIsSUFBSSxFQUFFUyxXQUFXLENBQUM7Z0JBQ25ELE9BQU87a0JBQUVkLE1BQU0sRUFBRTtnQkFBSSxDQUFFO2VBQ3ZCLENBQUMsT0FBT0YsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVFLE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUVBLEtBQUssQ0FBQ1k7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVEdEMsS0FBSyxHQUFHLE1BQUFBLENBQU9DLEtBQWEsRUFBRUMsUUFBZ0IsS0FBSTtjQUNqRCxJQUFJO2dCQUNILE1BQU1ZLFFBQVEsR0FBRyxNQUFNLElBQUFuQixLQUFBLENBQUFVLDBCQUEwQixFQUFDWixPQUFBLENBQUFXLElBQUksRUFBRUgsS0FBSyxFQUFFQyxRQUFRLENBQUM7Z0JBQ3hFLE9BQU8sTUFBTSxJQUFJLENBQUNXLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO2VBQ3BDLENBQUMsT0FBT1ksS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVFLE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUVBLEtBQUssQ0FBQ1k7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVETSxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsTUFBTSxJQUFBakQsS0FBQSxDQUFBaUQsT0FBTyxFQUFDbkQsT0FBQSxDQUFBVyxJQUFJLENBQUM7ZUFDbkIsQ0FBQyxPQUFPc0IsS0FBSyxFQUFFO2dCQUNmRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBQ0RtQixNQUFNLEdBQUcsSUFBSSxDQUFDRCxPQUFPOztVQUNyQkUsT0FBQSxDQUFBakQsSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hIRCxJQUFBa0QsSUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUZBOztVQUlBO1VBQ0E7VUFFQTtVQUNBO1VBRUEsTUFBTXdELE1BQU0sR0FBRztZQUNkQyxXQUFXLEVBQUU7Y0FDWkMsTUFBTSxFQUFFLHlDQUF5QztjQUNqREMsVUFBVSxFQUFFLHNDQUFzQztjQUNsREMsV0FBVyxFQUFFLDBEQUEwRDtjQUN2RUMsU0FBUyxFQUFFLHNCQUFzQjtjQUNqQ0MsYUFBYSxFQUFFLGtDQUFrQztjQUNqREMsaUJBQWlCLEVBQUUsZUFBZTtjQUNsQ0MsS0FBSyxFQUFFLDRDQUE0QztjQUNuREMsYUFBYSxFQUFFO2FBQ2Y7WUFDREMsT0FBTyxFQUFFO2NBQ1JSLE1BQU0sRUFBRSx5Q0FBeUM7Y0FDakRDLFVBQVUsRUFBRSxzQ0FBc0M7Y0FDbERFLFNBQVMsRUFBRSxzQkFBc0I7Y0FDakNDLGFBQWEsRUFBRSxrQ0FBa0M7Y0FDakRDLGlCQUFpQixFQUFFLGVBQWU7Y0FDbENDLEtBQUssRUFBRTthQUNQO1lBQ0RHLFVBQVUsRUFBRTtjQUNYVCxNQUFNLEVBQUUseUNBQXlDO2NBQ2pEQyxVQUFVLEVBQUUsdUNBQXVDO2NBQ25ERSxTQUFTLEVBQUUsdUJBQXVCO2NBQ2xDQyxhQUFhLEVBQUUsbUNBQW1DO2NBQ2xEQyxpQkFBaUIsRUFBRSxjQUFjO2NBQ2pDQyxLQUFLLEVBQUU7O1dBRVI7VUFFRDtVQUNBLE1BQU1JLEdBQUcsR0FBRyxJQUFBYixJQUFBLENBQUFjLGFBQWEsRUFBQ2IsTUFBTSxDQUFDQyxXQUFXLENBQUM7VUFDdEMsTUFBTTdDLElBQUksR0FBQTBDLE9BQUEsQ0FBQTFDLElBQUEsR0FBRyxJQUFBVCxLQUFBLENBQUFtRSxPQUFPLEVBQUNGLEdBQUcsQ0FBQztVQUN6QixNQUFNN0IsY0FBYyxHQUFBZSxPQUFBLENBQUFmLGNBQUEsR0FBRyxJQUFJcEMsS0FBQSxDQUFBb0Usa0JBQWtCLEVBQUU7VUFDL0MsTUFBTUMsZ0JBQWdCLEdBQUFsQixPQUFBLENBQUFrQixnQkFBQSxHQUFHLElBQUlyRSxLQUFBLENBQUFzRSxvQkFBb0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQzFELElBQUF4RSxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBMEUsTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBTUEsTUFBTTRFLGNBQWUsU0FBUUYsTUFBQSxDQUFBRyxhQUF1QjtZQUVuRCxDQUFBL0QsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsSUFBSWdFLE1BQU1BLENBQUE7Y0FDVCxPQUFPN0UsT0FBQSxDQUFBVyxJQUFJLENBQUNtRSxXQUFXLEdBQUc5RSxPQUFBLENBQUFXLElBQUksQ0FBQ21FLFdBQVcsQ0FBQ3pFLEdBQUcsR0FBRyxJQUFJO1lBQ3REO1lBRUEsSUFBSTBFLE1BQU1BLENBQUE7Y0FDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNsRSxJQUFJO1lBQ25CO1lBRUEsQ0FBQW1FLE9BQVE7WUFDUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUTtZQUNyQjtZQUdBLENBQUFyRSxJQUFLLEdBQVMsSUFBSStELE1BQUEsQ0FBQXRFLElBQUksRUFBRTtZQUN4QixJQUFJTyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBdUUsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRixPQUFRLEdBQUcsSUFBSTdFLEtBQUEsQ0FBQW1CLGNBQWMsRUFBRTtjQUVwQyxJQUFBcEIsS0FBQSxDQUFBaUYsa0JBQWtCLEVBQUNuRixPQUFBLENBQUFXLElBQUksRUFBRSxJQUFJLENBQUN5RSxRQUFRLENBQUM7WUFDeEM7WUFFQUEsUUFBUSxHQUFHLE1BQU12RSxJQUFJLElBQUc7Y0FDdkIsSUFBSUEsSUFBSSxFQUFFO2dCQUNULE1BQU0sSUFBSSxDQUFDd0UsT0FBTyxDQUFDeEUsSUFBSSxDQUFDOztjQUd6QixJQUFJLENBQUN5RSxLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQU4sT0FBUSxDQUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQ29ELEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsTUFBTUMsVUFBVUEsQ0FBQ0MsSUFBSTtjQUNwQixJQUFJLENBQUNBLElBQUksRUFBRTtjQUNYLElBQUksSUFBSSxDQUFDLENBQUEzRSxJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ2UsRUFBRSxLQUFLNEQsSUFBSSxDQUFDbkYsR0FBRyxFQUFFO2NBRTlDLE1BQU1RLElBQUksR0FBRyxJQUFJZixNQUFBLENBQUFnQixJQUFJLENBQUM7Z0JBQUVjLEVBQUUsRUFBRTRELElBQUksQ0FBQ25GO2NBQUcsQ0FBRSxDQUFDO2NBQ3ZDLE1BQU1RLElBQUksQ0FBQ29FLE9BQU87Y0FDbEJwRSxJQUFJLENBQUM0RSxlQUFlLENBQUNELElBQUksQ0FBQztjQUUxQjtjQUNBLE1BQU0zRSxJQUFJLENBQUNnQixHQUFHLENBQUMyRCxJQUFJLENBQUM7Y0FDcEIsSUFBSSxDQUFDLENBQUEzRSxJQUFLLEdBQUdBLElBQUk7WUFDbEI7WUFDQXdFLE9BQU8sR0FBRyxNQUFNRyxJQUFJLElBQUc7Y0FDdEIsSUFBSSxDQUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUEzRSxJQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUc2RSxTQUFTO2dCQUN0QixJQUFJLENBQUMsQ0FBQS9FLElBQUssQ0FBQ3dDLE9BQU8sRUFBRTs7Y0FFckIsSUFBSXFDLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxJQUFJLENBQUM7O2NBRzVCLElBQUksQ0FBQ0YsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSyxZQUFZLENBQUMsUUFBUSxDQUFDO2NBQzNCLElBQUksQ0FBQyxDQUFBWCxPQUFRLENBQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDb0QsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxNQUFNbEQsZ0JBQWdCQSxDQUFBO2NBQ3JCLElBQUk7Z0JBQ0gsTUFBTWYsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFWLElBQUssQ0FBQ3lCLGdCQUFnQixFQUFFO2dCQUVwRCxJQUFJLENBQUNmLFFBQVEsQ0FBQ2MsTUFBTSxFQUFFLE9BQU8sS0FBSztnQkFDbEMsSUFBSSxDQUFDLENBQUF0QixJQUFLLEdBQUdRLFFBQVEsQ0FBQ1IsSUFBSTtnQkFDMUIsSUFBSSxDQUFDOEUsWUFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsT0FBT3RFLFFBQVE7ZUFDZixDQUFDLE9BQU91RSxDQUFDLEVBQUU7Z0JBQ1g1RCxPQUFPLENBQUNDLEtBQUssQ0FBQzJELENBQUMsQ0FBQztnQkFDaEIsT0FBTztrQkFBRXpELE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUU7Z0JBQVEsQ0FBRTs7WUFFM0M7WUFFQSxNQUFNUSxpQkFBaUJBLENBQUM7Y0FBRWpDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaUM7WUFBUSxDQUFFO2NBQ3BELElBQUk7Z0JBQ0gsTUFBTXJCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBVixJQUFLLENBQUM4QixpQkFBaUIsQ0FBQ2pDLEtBQUssRUFBRUMsUUFBUSxFQUFFaUMsUUFBUSxDQUFDO2dCQUU5RSxJQUFJLENBQUNyQixRQUFRLENBQUNjLE1BQU0sRUFBRSxPQUFPO2tCQUFFQSxNQUFNLEVBQUUsS0FBSztrQkFBRUYsS0FBSyxFQUFFWixRQUFRLENBQUNZO2dCQUFLLENBQUU7Z0JBRXJFLE9BQU9aLFFBQVE7ZUFDZixDQUFDLE9BQU91RSxDQUFDLEVBQUU7Z0JBQ1gsT0FBTztrQkFBRXpELE1BQU0sRUFBRSxLQUFLO2tCQUFFRixLQUFLLEVBQUU7Z0JBQVEsQ0FBRTs7WUFFM0M7WUFFQSxNQUFNbUIsTUFBTUEsQ0FBQTtjQUNYLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQXpDLElBQUssQ0FBQ3dDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLENBQUF0QyxJQUFLLEdBQUc2RSxTQUFTO2dCQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYNUQsT0FBTyxDQUFDQyxLQUFLLENBQUMyRCxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1DLGNBQWMsR0FBQXhDLE9BQUEsQ0FBQXdDLGNBQUEsR0FBRyxJQUFJbEIsY0FBYyxFQUFFO1VBQzdEbUIsVUFBVSxDQUFDQyxDQUFDLEdBQUdGLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEg3QixJQUFBN0YsT0FBQSxHQUFBRCxPQUFBO1VBR00sTUFBT2tCLFlBQVk7WUFDeEIsYUFBYUMsUUFBUUEsQ0FBQ0wsSUFBVTtjQUMvQixNQUFNbUYsWUFBWSxHQUFHLE1BQU0sSUFBQWhHLE9BQUEsQ0FBQVcsSUFBSSxHQUFFLENBQUNzRixPQUFPLENBQUNwRixJQUFJLENBQUNlLEVBQUUsQ0FBQztjQUNsRCxNQUFNWixLQUFLLEdBQUcsTUFBTWdGLFlBQVksQ0FBQ3RFLFVBQVUsRUFBRTtjQUM3QyxPQUFPVixLQUFLO1lBQ2I7WUFFQSxhQUFhRyxVQUFVQSxDQUFDSCxLQUFhLEVBQUVILElBQVU7Y0FDaEQ7Y0FDQTtZQUFBO1lBR0QsYUFBYXFGLFlBQVlBLENBQUNyRixJQUFVO2NBQ25DLE1BQU1tRixZQUFZLEdBQUcsTUFBTSxJQUFBaEcsT0FBQSxDQUFBVyxJQUFJLEdBQUUsQ0FBQ3NGLE9BQU8sQ0FBQ3BGLElBQUksQ0FBQ2UsRUFBRSxDQUFDO2NBQ2xELE1BQU11RSxRQUFRLEdBQUcsTUFBTUgsWUFBWSxDQUFDdEUsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNwRCxPQUFPeUUsUUFBUTtZQUNoQjtZQUVBLGFBQWFDLGFBQWFBLENBQUNwRixLQUFhO2NBQ3ZDLE9BQU8sSUFBSTtjQUNYO1lBQ0Q7OztVQUNBcUMsT0FBQSxDQUFBcEMsWUFBQSxHQUFBQSxZQUFBIn0=