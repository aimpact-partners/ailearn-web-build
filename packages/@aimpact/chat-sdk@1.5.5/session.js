System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/users", "@beyond-js/kernel@0.1.14/core", "firebase@11.9.1/auth", "firebase@11.9.1/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, SessionManager, sessionWrapper, __beyond_pkg, hmr;
  _export({
    SessionManager: void 0,
    sessionWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Users) {
      dependency_2 = _aimpactChatSdk155Users;
    }, function (_beyondJsKernel0114Core) {
      dependency_3 = _beyondJsKernel0114Core;
    }, function (_firebase1191Auth) {
      dependency_4 = _firebase1191Auth;
    }, function (_firebase1191App) {
      dependency_5 = _firebase1191App;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['firebase/app', dependency_5]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 2060865907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _users = require("@aimpact/chat-sdk/users");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("firebase/auth");
          var _error = require("./error");
          var _provider = require("./firebase/provider");
          class Auth extends _model.ReactiveModel {
            #pendingLogin;
            #user;
            get user() {
              return this.#user;
            }
            #session;
            #provider;
            get session() {
              return this.#session;
            }
            constructor(session, settings) {
              super();
              this.#session = session;
              this.#provider = new _provider.FirebaseProvider(settings.firebase, {
                onAuthStateChanged: this.onAuthStateChanged.bind(this)
              });
            }
            #setReady() {
              this.ready = true;
              this.trigger('ready');
            }
            onAuthStateChanged(user) {
              if (!user) {
                this.#setReady();
                return;
              }
              /**
               * this code only must be executed when the page is laoded
               */
              if (!this.ready) {
                this.appLogin(user);
              }
            }
            appLogin = data => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!data?.uid) {
                throw new _error.CustomError(1001, 'INVALID_USER');
              }
              // this.#provider.getCurrentToken().then(token=>{})
              this.#pendingLogin = new _core.PendingPromise();
              // const firebaseToken = await this.#provider.getCurrentToken();
              this.#provider.getCurrentToken().then(firebaseToken => {
                const specs = {
                  ...data,
                  firebaseToken
                };
                const model = this.getUserModel(specs);
                this.#user = model;
                const logInValidation = couldLog => {
                  if (!couldLog) {
                    // this.#user as undefined does not log in.
                    this.#user = undefined;
                    this.signOut();
                    this.trigger('ready');
                    this.ready = true;
                    return;
                  }
                  this.ready = true;
                  this.trigger('ready');
                  this.trigger('login');
                  this.#pendingLogin.resolve({
                    status: true,
                    model
                  });
                };
                model.login(firebaseToken).then(logInValidation).catch(e => {
                  this.#user = undefined;
                  this.signOut();
                  this.ready = true;
                  throw new Error('e');
                });
              });
              return this.#pendingLogin;
            };
            async loginWith(provider) {
              try {
                if (provider !== 'google') {
                  console.log('Provider not supported');
                  return;
                }
                const userData = await this.#provider.signInWithGoogle();
                return this.appLogin(userData);
              } catch (error) {
                const errorMappings = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                // Known error, throw a custom exception
                if (error.code in errorMappings) {
                  throw new _error.CustomError(1003, errorMappings[error.code]);
                }
                // Unexpected error, rethrow for logging/debugging
                throw new Error(`Unexpected error during Google sign-in: ${error.message}`);
              }
            }
            getUserModel(specs) {
              if (this.#user && this.#user.id === specs.id) {
                this.#user.set(specs);
                return this.#user;
              }
              if (this.#user) this.#user = undefined;
              //@ts-ignore
              this.#user = _users.User.getModel(specs);
              this.#user.setFirebaseProvider(this.#provider);
              this.#user.initialize(specs);
              return this.#user;
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
            signOut = async () => {
              this.#pendingLogin = undefined;
              this.#user = undefined;
              await (0, _auth.signOut)(this.#provider.auth);
            };
            logout = this.signOut;
          }
          exports.Auth = Auth;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3466124835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            code;
            constructor(code, message) {
              super(message);
              this.code = code;
              this.name = 'CustomError';
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************************
      INTERNAL MODULE: ./firebase/provider
      ***********************************/

      ims.set('./firebase/provider', {
        hash: 1876297142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FirebaseProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          class FirebaseProvider extends _model.ReactiveModel {
            #executions = 0;
            #auth;
            get auth() {
              return this.#auth;
            }
            #app;
            get app() {
              return this.#app;
            }
            #googleProvider = new _auth.GoogleAuthProvider();
            #onAuthStateChanged;
            constructor(config, {
              onAuthStateChanged: callback
            }) {
              super();
              // Inicializa Firebase App y Auth internamente
              this.#app = (0, _app.initializeApp)(config);
              this.#auth = (0, _auth.getAuth)(this.#app);
              this.#onAuthStateChanged = callback;
              // Observador de sesión
              (0, _auth.onAuthStateChanged)(this.#auth, this.onAuthStateChanged.bind(this));
            }
            onAuthStateChanged(user) {
              if (!this.#executions) {
                this.trigger('ready');
                this.#executions++;
              }
              const data = user ? this.getData(user) : null;
              this.#onAuthStateChanged?.(data);
            }
            async signInWithGoogle() {
              const response = await (0, _auth.signInWithPopup)(this.#auth, this.#googleProvider);
              return this.getData(response.user);
            }
            async getCurrentToken(forceRefresh = false) {
              const user = this.#auth.currentUser;
              if (!user) return null;
              try {
                return await user.getIdToken(forceRefresh);
              } catch (error) {
                console.error('Error retrieving token:', error);
                return null;
              }
            }
            logout() {
              return (0, _auth.signOut)(this.#auth);
            }
            getData(user) {
              return {
                id: user.uid,
                uid: user.uid,
                email: user.email ?? '',
                name: user.displayName ?? '',
                displayName: user.displayName ?? '',
                photoURL: user.photoURL ?? '',
                phoneNumber: user.phoneNumber ?? '',
                provider: user.providerData[0]?.providerId ?? 'unknown'
              };
            }
          }
          exports.FirebaseProvider = FirebaseProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 44413498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = exports.SessionManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("./auth");
          /*bundle*/
          class SessionManager extends _model.ReactiveModel {
            #id;
            get id() {
              return this.#id;
            }
            get user() {
              return this.#auth.user;
            }
            get logged() {
              return !!this.#auth?.user;
            }
            #initialized = false;
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
              this.#id = Math.random().toString(36).substring(2, 15);
              this.#promise = new _core.PendingPromise();
            }
            settings(settings) {
              this.#initialized = true;
              this.#auth = new _auth.Auth(this, settings);
              this.#auth.on('ready', this.listenReady.bind(this));
            }
            listenReady() {
              this.ready = true;
              this.#promise.resolve(this.ready);
              this.triggerEvent('change');
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
          exports.SessionManager = SessionManager;
          /*bundle*/
          const sessionWrapper = exports.sessionWrapper = new SessionManager();
          globalThis.s = sessionWrapper;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2395231135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SessionManager",
        "name": "SessionManager"
      }, {
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
        (require || prop === 'SessionManager') && _export("SessionManager", SessionManager = require ? require('./index').SessionManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9wcm92aWRlciIsIkF1dGgiLCJSZWFjdGl2ZU1vZGVsIiwicGVuZGluZ0xvZ2luIiwidXNlciIsInNlc3Npb24iLCJwcm92aWRlciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJGaXJlYmFzZVByb3ZpZGVyIiwiZmlyZWJhc2UiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJiaW5kIiwic2V0UmVhZHkiLCIjc2V0UmVhZHkiLCJyZWFkeSIsInRyaWdnZXIiLCJhcHBMb2dpbiIsImRhdGEiLCJ1aWQiLCJDdXN0b21FcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZ2V0Q3VycmVudFRva2VuIiwidGhlbiIsImZpcmViYXNlVG9rZW4iLCJzcGVjcyIsIm1vZGVsIiwiZ2V0VXNlck1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiY2F0Y2giLCJlIiwiRXJyb3IiLCJsb2dpbldpdGgiLCJjb25zb2xlIiwibG9nIiwidXNlckRhdGEiLCJzaWduSW5XaXRoR29vZ2xlIiwiZXJyb3IiLCJlcnJvck1hcHBpbmdzIiwiY29kZSIsIm1lc3NhZ2UiLCJpZCIsInNldCIsIlVzZXIiLCJnZXRNb2RlbCIsInNldEZpcmViYXNlUHJvdmlkZXIiLCJpbml0aWFsaXplIiwic2V0VXNlciIsInNldEZpcmViYXNlVXNlciIsInRyaWdnZXJFdmVudCIsImF1dGgiLCJsb2dvdXQiLCJleHBvcnRzIiwibmFtZSIsIl9hcHAiLCJleGVjdXRpb25zIiwiYXBwIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJjb25maWciLCJjYWxsYmFjayIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwic2lnbkluV2l0aFBvcHVwIiwiZm9yY2VSZWZyZXNoIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiU2Vzc2lvbk1hbmFnZXIiLCJsb2dnZWQiLCJpbml0aWFsaXplZCIsInByb21pc2UiLCJpc1JlYWR5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwib24iLCJsaXN0ZW5SZWFkeSIsImNsZWFyIiwia2VlcEtleXMiLCJrZXlzVG9LZWVwIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvL2F1dGgudHMvIiwiLy9lcnJvci50cy8iLCIvL2ZpcmViYXNlL3Byb3ZpZGVyLnRzIiwiLy9pbmRleC50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFFQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFHTSxNQUFPTSxJQUFLLFNBQVFQLE1BQUEsQ0FBQVEsYUFBbUI7WUFDNUMsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFFTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUFDLE9BQVE7WUFD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