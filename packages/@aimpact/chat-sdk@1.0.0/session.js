System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/users", "firebase@10.12.0/auth", "@beyond-js/reactive@1.1.12/model", "firebase@10.12.0/app", "@aimpact/ailearn-app@0.0.46.dev-20/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Users) {
      dependency_2 = _aimpactChatSdk100Users;
    }, function (_firebase10120Auth) {
      dependency_3 = _firebase10120Auth;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_firebase10120App) {
      dependency_5 = _firebase10120App;
    }, function (_aimpactAilearnApp0046Dev20Config) {
      dependency_6 = _aimpactAilearnApp0046Dev20Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['firebase/auth', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['firebase/app', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 2816561265,
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
              if (this.#pendingLogin) return this.#pendingLogin;
              if (user?.uid) {
                if (this.#uid === user.uid) return;
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
        hash: 861747966,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9jb3JlIiwiX3VzZXJzIiwiX2F1dGgiLCJfbW9kZWwiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInVpZCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJnZXRVc2VyUHJvbWlzZSIsInNlc3Npb24iLCJjb25zdHJ1Y3RvciIsImdldFJlZGlyZWN0UmVzdWx0IiwiYXV0aCIsInRoZW4iLCJvblJlZGlyZWN0UmVzdWx0IiwiYmluZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwiaWQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJVc2VyIiwiZ2V0TW9kZWwiLCJpbml0aWFsaXplIiwidG9rZW4iLCJsb2FkIiwiUGVuZGluZ1Byb21pc2UiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImZpcmViYXNlVG9rZW4iLCJnZXRJZFRva2VuIiwibW9kZWwiLCJsb2dJblZhbGlkYXRpb24iLCJjb3VsZExvZyIsImNvbnNvbGUiLCJlcnJvciIsInJlc29sdmUiLCJzdGF0dXMiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJtZXNzYWdlIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiZXJyb3JzIiwiY29kZSIsInJlZ2lzdGVyV2l0aEVtYWlsIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyV2l0aERpc3BsYXlOYW1lIiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsIm5ld1Bhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJsb2dvdXQiLCJleHBvcnRzIiwiX2FwcCIsIkRFViIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkJFVEEiLCJDT05GSUciLCJsb2NhbCIsImRldmVsb3BtZW50IiwidGVzdGluZyIsInF1YWxpdHkiLCJwcm9kdWN0aW9uIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRlZmF1bHQiLCJlbnZpcm9ubWVudCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiZSIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInNlc3Npb25XcmFwcGVyIiwicyJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBV0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ssSUFBSyxTQUFRRCxNQUFBLENBQUFFLGFBQW1CO1lBQzVDLENBQUFDLEdBQUk7WUFDSixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsSUFBSztZQUNM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