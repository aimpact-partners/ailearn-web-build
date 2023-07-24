System.register(["@beyond-js/kernel@0.1.9/bundle", "firebase@10.0.0/app", "firebase@10.0.0/auth", "@aimpact/chat-sdk@0.0.1/core", "@beyond-js/reactive@1.1.2/model", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_firebase1000App) {
      dependency_1 = _firebase1000App;
    }, function (_firebase1000Auth) {
      dependency_2 = _firebase1000Auth;
    }, function (_aimpactChatSdk001Core) {
      dependency_3 = _aimpactChatSdk001Core;
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['firebase/app', dependency_1], ['firebase/auth', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/kernel/core', dependency_6]]);
      ims = new Map();
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
        hash: 1040141119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _core = require("@aimpact/chat-sdk/core");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          var _routing = require("@beyond-js/kernel/routing");
          var _core2 = require("@beyond-js/kernel/core");
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
            constructor() {
              super();
              this.#promise = new _core2.PendingPromise();
              (0, _auth.onAuthStateChanged)(_config.auth, this.setUser);
            }
            setUser = async data => {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                const user = new _core.User({
                  ...data,
                  id: data.uid
                });
                await user.isReady;
                /* TODO Review */
                await user.set(data);
                this.#user = user;
              }
              this.ready = true;
              //@ts-ignore
              this.triggerEvent('change');
              //@ts-ignore
              this.#promise.resolve(this.ready);
            };
            appLogin = async response => {
              if (response.user?.uid) {
                const {
                  displayName,
                  photoURL,
                  email,
                  phoneNumber,
                  uid
                } = response.user;
                const specs = {
                  id: uid,
                  displayName,
                  photoURL,
                  email,
                  phoneNumber
                };
                const user = new _core.User(specs);
                user.set(specs);
                this.#user = user;
                const couldLog = await user.login(response);
                return {
                  status: couldLog
                };
              }
              return {
                status: false,
                error: 'CANNOT'
              };
            };
            signInWithGoogle = async () => {
              try {
                const response = await (0, _auth.signInWithPopup)(_config.auth, _config.googleProvider);
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
            signInWithFacebook = async () => {
              try {
                const response = await (0, _auth.signInWithPopup)(_config.auth, _config.facebookProvider);
                return await this.appLogin(response);
              } catch (error) {
                console.error(error);
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
            signInWithPhoneNumber = async (phoneNumber, appVerifier) => {
              try {
                return await (0, _auth.signInWithPhoneNumber)(_config.auth, phoneNumber, appVerifier);
                // After this you can ask for the code and call confirmationResult.confirm(code)
              } catch (error) {
                console.error(error);
                ``;
              }
            };
            signOut = async () => {
              try {
                await (0, _auth.signOut)(_config.auth);
                _routing.routing.pushState('/');
              } catch (error) {
                console.error(error);
              }
            };
            logout = this.signOut;
          }
          /*bundle*/
          const sessionWrapper = new SessionManager();
          exports.sessionWrapper = sessionWrapper;
          globalThis.s = sessionWrapper;
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 273132084,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@beyond-js/reactive/model");
          class User extends _model.ReactiveModel {
            constructor({
              id
            }) {
              super({
                id,
                storeName: 'users',
                db: 'ailearn'
              });
            }
          }
          exports.User = User;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtVQUVNLE1BQU9uQyxJQUFLLFNBQVFiLG9CQUFtQjtZQUN6Q08sWUFBWTtjQUFFTztZQUFFLENBQUU7Y0FDZCxLQUFLLENBQUM7Z0JBQ0ZBLEVBQUU7Z0JBQ0ZxQyxTQUFTLEVBQUUsT0FBTztnQkFDbEJDLEVBQUUsRUFBRTtlQUNQLENBQUM7WUFDTjs7VUFDSDFEIiwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZXhwb3J0cyIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwidWlkIiwibG9nZ2VkIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRVc2VyIiwiZGF0YSIsInVuZGVmaW5lZCIsInNpZ25PdXQiLCJVc2VyIiwiaWQiLCJzZXQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInJlc29sdmUiLCJhcHBMb2dpbiIsInJlc3BvbnNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJzcGVjcyIsImNvdWxkTG9nIiwibG9naW4iLCJzdGF0dXMiLCJlcnJvciIsInNpZ25JbldpdGhHb29nbGUiLCJlcnJvcnMiLCJjb2RlIiwic2lnbkluV2l0aEZhY2Vib29rIiwiY29uc29sZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyTmFtZSIsInVzZXJXaXRoRGlzcGxheU5hbWUiLCJtZXNzYWdlIiwicmVzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwibmV3UGFzc3dvcmQiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJhcHBWZXJpZmllciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJsb2dvdXQiLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIiwic3RvcmVOYW1lIiwiZGIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImZpcmViYXNlL2NvbmZpZy50cyIsImluZGV4LnRzIiwidXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=