System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.0.0/auth", "firebase@10.0.0/app", "@beyond-js/reactive@1.1.3/model", "@beyond-js/kernel@0.1.9/core", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Users) {
      dependency_1 = _aimpactChatSdk100Users;
    }, function (_firebase1000Auth) {
      dependency_2 = _firebase1000Auth;
    }, function (_firebase1000App) {
      dependency_3 = _firebase1000App;
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['firebase/auth', dependency_2], ['firebase/app', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['react', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3592597327,
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
          class Auth {
            static async login(email, password) {
              const userCredential = await (0, _config.auth)().signInWithEmailAndPassword(email, password);
              const user = new _users.User(userCredential.user.uid, userCredential.user.displayName, userCredential.user.email);
              const token = await _token.TokenManager.getToken(user);
              await _token.TokenManager.storeToken(token, user);
              return user;
            }
            appLogin = async response => {
              if (response.user?.uid) {
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
                user.set(specs);
                const couldLog = await user.login(response);
                if (!couldLog) {
                  console.error('Could not login', couldLog);
                }
                return {
                  status: true,
                  user
                };
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
        hash: 3257170744,
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
          const firebaseConfig = {
            apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
            authDomain: 'aimpact-partners-dev.firebaseapp.com',
            databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
            projectId: 'aimpact-partners-dev',
            storageBucket: 'aimpact-partners-dev.appspot.com',
            messagingSenderId: '1081434267674',
            appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
            measurementId: 'G-QLL5WFH89Y'
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(firebaseConfig);
          const auth = (0, _auth.getAuth)(app);
          exports.auth = auth;
          const googleProvider = new _auth.GoogleAuthProvider();
          exports.googleProvider = googleProvider;
          const facebookProvider = new _auth.FacebookAuthProvider();
          exports.facebookProvider = facebookProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1630106971,
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
              const firebaseToken = await data.getIdToken();
              const user = new _users.User({
                id: data.uid
              });
              await user.isReady;
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
                console.log(0.2);
                await this.#auth.signOut();
                console.log(0.4);
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
          const sessionWrapper = new SessionManager();
          exports.sessionWrapper = sessionWrapper;
          globalThis.s = sessionWrapper;
        }
      });

      /***********************
      INTERNAL MODULE: ./token
      ***********************/

      ims.set('./token', {
        hash: 3689364598,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFQTtVQWlCTSxNQUFPQSxJQUFJO1lBQ2hCLGFBQWFDLEtBQUssQ0FBQ0MsS0FBYSxFQUFFQyxRQUFnQjtjQUNqRCxNQUFNQyxjQUFjLEdBQUcsTUFBTSxnQkFBSSxHQUFFLENBQUNDLDBCQUEwQixDQUFDSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQztjQUMvRSxNQUFNRyxJQUFJLEdBQUcsSUFBSUMsV0FBSSxDQUFDSCxjQUFjLENBQUNFLElBQUksQ0FBQ0UsR0FBRyxFQUFFSixjQUFjLENBQUNFLElBQUksQ0FBQ0csV0FBVyxFQUFFTCxjQUFjLENBQUNFLElBQUksQ0FBQ0osS0FBSyxDQUFDO2NBRTFHLE1BQU1RLEtBQUssR0FBRyxNQUFNQyxtQkFBWSxDQUFDQyxRQUFRLENBQUNOLElBQUksQ0FBQztjQUMvQyxNQUFNSyxtQkFBWSxDQUFDRSxVQUFVLENBQUNILEtBQUssRUFBRUosSUFBSSxDQUFDO2NBRTFDLE9BQU9BLElBQUk7WUFDWjtZQUVBUSxRQUFRLEdBQUcsTUFBT0MsUUFBd0IsSUFBMEI7Y0FDbkUsSUFBSUEsUUFBUSxDQUFDVCxJQUFJLEVBQUVFLEdBQUcsRUFBRTtnQkFDdkIsTUFBTTtrQkFBRUMsV0FBVztrQkFBRU8sUUFBUTtrQkFBRWQsS0FBSztrQkFBRWUsV0FBVztrQkFBRVQ7Z0JBQUcsQ0FBRSxHQUFHTyxRQUFRLENBQUNULElBQUk7Z0JBQ3hFLE1BQU1ZLGFBQWEsR0FBRyxNQUFNSCxRQUFRLENBQUNULElBQUksQ0FBQ2EsVUFBVSxFQUFFO2dCQUN0RCxNQUFNQyxLQUFLLEdBQUc7a0JBQUVDLEVBQUUsRUFBRWIsR0FBRztrQkFBRUMsV0FBVztrQkFBRU8sUUFBUTtrQkFBRWQsS0FBSztrQkFBRWUsV0FBVztrQkFBRUM7Z0JBQWEsQ0FBRTtnQkFFbkYsTUFBTVosSUFBSSxHQUFHLElBQUlDLFdBQUksQ0FBQ2EsS0FBSyxDQUFDO2dCQUM1QmQsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDRixLQUFLLENBQUM7Z0JBRWYsTUFBTUcsUUFBUSxHQUFHLE1BQU1qQixJQUFJLENBQUNMLEtBQUssQ0FBQ2MsUUFBUSxDQUFDO2dCQUUzQyxJQUFJLENBQUNRLFFBQVEsRUFBRTtrQkFDZEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsaUJBQWlCLEVBQUVGLFFBQVEsQ0FBQzs7Z0JBRTNDLE9BQU87a0JBQUVHLE1BQU0sRUFBRSxJQUFJO2tCQUFFcEI7Z0JBQUksQ0FBRTs7Y0FFOUIsT0FBTztnQkFBRW9CLE1BQU0sRUFBRSxLQUFLO2dCQUFFRCxLQUFLLEVBQUU7Y0FBYyxDQUFFO1lBQ2hELENBQUM7WUFFREUsZ0JBQWdCLEdBQUcsWUFBaUM7Y0FDbkQsSUFBSTtnQkFDSCxNQUFNWixRQUFRLEdBQUcsTUFBTSx5QkFBZSxFQUFDYSxZQUFJLEVBQUVDLHNCQUFjLENBQUM7Z0JBQzVEO2dCQUNBLE9BQU8sTUFBTSxJQUFJLENBQUNmLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO2VBQ3BDLENBQUMsT0FBT1UsS0FBSyxFQUFFO2dCQUNmLE1BQU1LLE1BQU0sR0FBRztrQkFDZCwrQ0FBK0MsRUFBRSwwQ0FBMEM7a0JBQzNGLDJCQUEyQixFQUFFO2lCQUM3QjtnQkFFRCxPQUFPO2tCQUFFSixNQUFNLEVBQUUsS0FBSztrQkFBRUQsS0FBSyxFQUFFSyxNQUFNLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDLElBQUk7Z0JBQVEsQ0FBRTs7WUFFakUsQ0FBQztZQUVEQyxpQkFBaUIsR0FBRyxPQUFPOUIsS0FBYSxFQUFFQyxRQUFnQixFQUFFOEIsUUFBZ0IsS0FBSTtjQUMvRSxJQUFJO2dCQUNILE1BQU1sQixRQUFRLEdBQUcsTUFBTSx3Q0FBOEIsRUFBQ2EsWUFBSSxFQUFFMUIsS0FBSyxFQUFFQyxRQUFRLENBQUM7Z0JBQzVFLE1BQU0rQixtQkFBbUIsR0FBRztrQkFBRSxHQUFHbkIsUUFBUSxDQUFDVCxJQUFJO2tCQUFFRyxXQUFXLEVBQUV3QjtnQkFBUSxDQUFFO2dCQUV2RSxPQUFPLE1BQU0sSUFBSSxDQUFDbkIsUUFBUSxDQUFDO2tCQUFFLEdBQUdDLFFBQVE7a0JBQUVULElBQUksRUFBRTRCO2dCQUFtQixDQUFFLENBQUM7ZUFDdEUsQ0FBQyxPQUFPVCxLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUMsTUFBTSxFQUFFLEtBQUs7a0JBQUVELEtBQUssRUFBRUEsS0FBSyxDQUFDVTtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURDLGFBQWEsR0FBRyxNQUFPbEMsS0FBYSxJQUFJO2NBQ3ZDLElBQUk7Z0JBQ0gsTUFBTSxnQ0FBc0IsRUFBQzBCLFlBQUksRUFBRTFCLEtBQUssQ0FBQztnQkFDekMsT0FBTztrQkFBRXdCLE1BQU0sRUFBRTtnQkFBSSxDQUFFO2VBQ3ZCLENBQUMsT0FBT0QsS0FBSyxFQUFFO2dCQUNmLE9BQU87a0JBQUVDLE1BQU0sRUFBRSxLQUFLO2tCQUFFRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1U7Z0JBQU8sQ0FBRTs7WUFFaEQsQ0FBQztZQUVERSxvQkFBb0IsR0FBRyxPQUFPTixJQUFZLEVBQUVPLFdBQW1CLEtBQUk7Y0FDbEUsSUFBSTtnQkFDSCxNQUFNLGlDQUF1QixFQUFDVixZQUFJLEVBQUVHLElBQUksQ0FBQztnQkFDekMsTUFBTSw4QkFBb0IsRUFBQ0gsWUFBSSxFQUFFRyxJQUFJLEVBQUVPLFdBQVcsQ0FBQztnQkFDbkQsT0FBTztrQkFBRVosTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPRCxLQUFLLEVBQUU7Z0JBQ2YsT0FBTztrQkFBRUMsTUFBTSxFQUFFLEtBQUs7a0JBQUVELEtBQUssRUFBRUEsS0FBSyxDQUFDVTtnQkFBTyxDQUFFOztZQUVoRCxDQUFDO1lBRURsQyxLQUFLLEdBQUcsT0FBT0MsS0FBYSxFQUFFQyxRQUFnQixLQUFJO2NBQ2pELElBQUk7Z0JBQ0gsTUFBTVksUUFBUSxHQUFHLE1BQU0sb0NBQTBCLEVBQUNhLFlBQUksRUFBRTFCLEtBQUssRUFBRUMsUUFBUSxDQUFDO2dCQUN4RSxPQUFPLE1BQU0sSUFBSSxDQUFDVyxRQUFRLENBQUNDLFFBQVEsQ0FBQztlQUNwQyxDQUFDLE9BQU9VLEtBQUssRUFBRTtnQkFDZixPQUFPO2tCQUFFQyxNQUFNLEVBQUUsS0FBSztrQkFBRUQsS0FBSyxFQUFFQSxLQUFLLENBQUNVO2dCQUFPLENBQUU7O1lBRWhELENBQUM7WUFFREksT0FBTyxHQUFHLFlBQVc7Y0FDcEIsSUFBSTtnQkFDSCxNQUFNLGlCQUFPLEVBQUNYLFlBQUksQ0FBQztlQUNuQixDQUFDLE9BQU9ILEtBQUssRUFBRTtnQkFDZkQsT0FBTyxDQUFDQyxLQUFLLENBQUNBLEtBQUssQ0FBQzs7WUFFdEIsQ0FBQztZQUNEZSxNQUFNLEdBQUcsSUFBSSxDQUFDRCxPQUFPOztVQUNyQkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhEO1VBQ0E7VUFGQTs7VUFJQTtVQUNBO1VBRUE7VUFDQTtVQUNBLE1BQU1DLGNBQWMsR0FBRztZQUN0QkMsTUFBTSxFQUFFLHlDQUF5QztZQUNqREMsVUFBVSxFQUFFLHNDQUFzQztZQUNsREMsV0FBVyxFQUFFLDBEQUEwRDtZQUN2RUMsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQ0MsYUFBYSxFQUFFLGtDQUFrQztZQUNqREMsaUJBQWlCLEVBQUUsZUFBZTtZQUNsQ0MsS0FBSyxFQUFFLDRDQUE0QztZQUNuREMsYUFBYSxFQUFFO1dBQ2Y7VUFFRDtVQUNBLE1BQU1DLEdBQUcsR0FBRyxzQkFBYSxFQUFDVCxjQUFjLENBQUM7VUFDbEMsTUFBTWQsSUFBSSxHQUFHLGlCQUFPLEVBQUN1QixHQUFHLENBQUM7VUFBQ1Y7VUFDMUIsTUFBTVosY0FBYyxHQUFHLElBQUl1Qix3QkFBa0IsRUFBRTtVQUFDWDtVQUNoRCxNQUFNWSxnQkFBZ0IsR0FBRyxJQUFJQywwQkFBb0IsRUFBRTtVQUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QjNEO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQU1BLE1BQU1jLGNBQWUsU0FBUUMsb0JBQXVCO1lBRW5ELEtBQUs7WUFDTCxJQUFJbEQsSUFBSTtjQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUs7WUFDbEI7WUFDQSxJQUFJbUQsTUFBTTtjQUNULE9BQU83QixZQUFJLENBQUM4QixXQUFXLEdBQUc5QixZQUFJLENBQUM4QixXQUFXLENBQUNsRCxHQUFHLEdBQUcsSUFBSTtZQUN0RDtZQUVBLElBQUltRCxNQUFNO2NBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDckQsSUFBSTtZQUNuQjtZQUVBLFFBQVE7WUFDUixJQUFJc0QsT0FBTztjQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDckI7WUFHQSxLQUFLLEdBQVMsSUFBSTVELFdBQUksRUFBRTtZQUN4QixJQUFJNEIsSUFBSTtjQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUs7WUFDbEI7WUFDQWlDO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJQyxvQkFBYyxFQUFFO2NBRXBDLDRCQUFrQixFQUFDbEMsWUFBSSxFQUFFLElBQUksQ0FBQ21DLFFBQVEsQ0FBQztZQUN4QztZQUVBQSxRQUFRLEdBQUcsTUFBTXpELElBQUksSUFBRztjQUN2QixJQUFJQSxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLENBQUMwRCxPQUFPLENBQUMxRCxJQUFJLENBQUM7O2NBRXpCLElBQUksQ0FBQzJELEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsTUFBTUUsVUFBVSxDQUFDQyxJQUFJO2NBQ3BCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMvQyxFQUFFLEtBQUsrQyxJQUFJLENBQUM1RCxHQUFHLEVBQUU7Y0FDOUMsTUFBTVUsYUFBYSxHQUFHLE1BQU1rRCxJQUFJLENBQUNqRCxVQUFVLEVBQUU7Y0FDN0MsTUFBTWIsSUFBSSxHQUFHLElBQUlDLFdBQUksQ0FBQztnQkFBRWMsRUFBRSxFQUFFK0MsSUFBSSxDQUFDNUQ7Y0FBRyxDQUFFLENBQUM7Y0FDdkMsTUFBTUYsSUFBSSxDQUFDc0QsT0FBTztjQUVsQjtjQUNBLE1BQU10RCxJQUFJLENBQUNnQixHQUFHLENBQUM4QyxJQUFJLENBQUM7Y0FDcEIsSUFBSSxDQUFDLEtBQUssR0FBRzlELElBQUk7WUFDbEI7WUFDQTBELE9BQU8sR0FBRyxNQUFNSSxJQUFJLElBQUc7Y0FDdEIsSUFBSSxDQUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBR0MsU0FBUztnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQzlCLE9BQU8sRUFBRTs7Y0FFckIsSUFBSTZCLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxJQUFJLENBQUM7O2NBRzVCLElBQUksQ0FBQ0gsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSyxZQUFZLENBQUMsUUFBUSxDQUFDO2NBQzNCLElBQUksQ0FBQyxRQUFRLENBQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsTUFBTXRDLGdCQUFnQjtjQUNyQixJQUFJO2dCQUNILE1BQU1aLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUNZLGdCQUFnQixFQUFFO2dCQUVwRCxJQUFJLENBQUNaLFFBQVEsQ0FBQ1csTUFBTSxFQUFFLE9BQU8sS0FBSztnQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBR1gsUUFBUSxDQUFDVCxJQUFJO2dCQUUxQixPQUFPUyxRQUFRO2VBQ2YsQ0FBQyxPQUFPd0QsQ0FBQyxFQUFFO2dCQUNYL0MsT0FBTyxDQUFDQyxLQUFLLENBQUM4QyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU87a0JBQUU3QyxNQUFNLEVBQUUsS0FBSztrQkFBRUQsS0FBSyxFQUFFO2dCQUFRLENBQUU7O1lBRTNDO1lBRUEsTUFBTWUsTUFBTTtjQUNYLElBQUk7Z0JBQ0hoQixPQUFPLENBQUNnRCxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUNqQyxPQUFPLEVBQUU7Z0JBQzFCZixPQUFPLENBQUNnRCxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHSCxTQUFTO2dCQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYL0MsT0FBTyxDQUFDQyxLQUFLLENBQUM4QyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1FLGNBQWMsR0FBRyxJQUFJbEIsY0FBYyxFQUFFO1VBQUNkO1VBQzlEaUMsVUFBVSxDQUFDQyxDQUFDLEdBQUdGLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekc3QjtVQUdNLE1BQU85RCxZQUFZO1lBQ3hCLGFBQWFDLFFBQVEsQ0FBQ04sSUFBVTtjQUMvQixNQUFNc0UsWUFBWSxHQUFHLE1BQU0sZ0JBQUksR0FBRSxDQUFDQyxPQUFPLENBQUN2RSxJQUFJLENBQUNlLEVBQUUsQ0FBQztjQUNsRCxNQUFNWCxLQUFLLEdBQUcsTUFBTWtFLFlBQVksQ0FBQ3pELFVBQVUsRUFBRTtjQUM3QyxPQUFPVCxLQUFLO1lBQ2I7WUFFQSxhQUFhRyxVQUFVLENBQUNILEtBQWEsRUFBRUosSUFBVTtjQUNoRDtjQUNBO1lBQUE7WUFHRCxhQUFhd0UsWUFBWSxDQUFDeEUsSUFBVTtjQUNuQyxNQUFNc0UsWUFBWSxHQUFHLE1BQU0sZ0JBQUksR0FBRSxDQUFDQyxPQUFPLENBQUN2RSxJQUFJLENBQUNlLEVBQUUsQ0FBQztjQUNsRCxNQUFNMEQsUUFBUSxHQUFHLE1BQU1ILFlBQVksQ0FBQ3pELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDcEQsT0FBTzRELFFBQVE7WUFDaEI7WUFFQSxhQUFhQyxhQUFhLENBQUN0RSxLQUFhO2NBQ3ZDLE9BQU8sSUFBSTtjQUNYO1lBQ0Q7OztVQUNBK0IiLCJuYW1lcyI6WyJBdXRoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJVc2VyIiwidWlkIiwiZGlzcGxheU5hbWUiLCJ0b2tlbiIsIlRva2VuTWFuYWdlciIsImdldFRva2VuIiwic3RvcmVUb2tlbiIsImFwcExvZ2luIiwicmVzcG9uc2UiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwiZmlyZWJhc2VUb2tlbiIsImdldElkVG9rZW4iLCJzcGVjcyIsImlkIiwic2V0IiwiY291bGRMb2ciLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJzaWduSW5XaXRoR29vZ2xlIiwiYXV0aCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlck5hbWUiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwibWVzc2FnZSIsInJlc2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwic2lnbk91dCIsImxvZ291dCIsImV4cG9ydHMiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIlNlc3Npb25NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiUGVuZGluZ1Byb21pc2UiLCJsaXN0ZW5lciIsInNldFVzZXIiLCJyZWFkeSIsInJlc29sdmUiLCJ1cGRhdGVVc2VyIiwiZGF0YSIsInVuZGVmaW5lZCIsInRyaWdnZXJFdmVudCIsImUiLCJsb2ciLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIiwiZmlyZWJhc2VVc2VyIiwiZ2V0VXNlciIsInJlZnJlc2hUb2tlbiIsIm5ld1Rva2VuIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXV0aC50cyIsImZpcmViYXNlL2NvbmZpZy50cyIsImluZGV4LnRzIiwidG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=