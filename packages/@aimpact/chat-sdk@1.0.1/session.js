System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/users", "firebase@10.12.0/auth", "@beyond-js/reactive@1.2.0/model", "firebase@10.12.0/app", "@aimpact/chat-sdk@1.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk101Users) {
      dependency_2 = _aimpactChatSdk101Users;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_firebase10120App) {
      dependency_5 = _firebase10120App;
    }, function (_aimpactChatSdk101Config) {
      dependency_6 = _aimpactChatSdk101Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.3-test.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/session"
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
        hash: 4232137602,
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
              this.#user = await _users.User.getModel(specs);
              await this.#user.initialize(specs);
              if (this.#user.token) {
                await this.#user.load();
              }
              // this.#getUserPromise.resolve(this.#user);
              return this.#user;
            }
            appLogin = async user => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (user?.uid) {
                // if (this.#uid === user.uid) return { status: true, model: this.#user };
                this.#uid = user.uid;
                if (this.#pendingLogin) return this.#pendingLogin;
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
        hash: 2391878751,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJVc2VyIiwiZ2V0TW9kZWwiLCJpbml0aWFsaXplIiwidG9rZW4iLCJsb2FkIiwiUGVuZGluZ1Byb21pc2UiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwibW9kZWwiLCJsb2dJblZhbGlkYXRpb24iLCJjb3VsZExvZyIsImNvbnNvbGUiLCJlcnJvciIsInJlc29sdmUiLCJzdGF0dXMiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJtZXNzYWdlIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkJFVEEiLCJDT05GSUciLCJsb2NhbCIsImRldmVsb3BtZW50IiwidGVzdGluZyIsInF1YWxpdHkiLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiZSIsImNsZWFyIiwia2VlcEtleXMiLCJrZXlzVG9LZWVwIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBV0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ss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