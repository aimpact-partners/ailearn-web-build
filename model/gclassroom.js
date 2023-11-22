System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.14/model/wrapper", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.14/config", "dayjs@1.11.10", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0014ModelWrapper) {
      dependency_2 = _aimpactAilearnApp0014ModelWrapper;
    }, function (_aimpactChat101Api) {
      dependency_3 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_5 = _aimpactAilearnApp0014Config;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-app/model/wrapper', dependency_2], ['@aimpact/chat/api', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./class
      ***********************/
      ims.set('./class', {
        hash: 956808558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _model = require("@beyond-js/reactive/model");
          class GClass extends _model.ReactiveModel {
            #course;
            #name;
            get name() {
              return this.#name;
            }
            #code;
            get code() {
              return this.#code;
            }
            #section;
            get section() {
              return this.#section;
            }
            get id() {
              return this.#course.id;
            }
            constructor(gclass) {
              super();
              this.#course = gclass;
              this.#init();
            }
            #init() {
              this.#name = this.#course.name;
              this.#section = this.#course.section;
            }
          }
          exports.GClass = GClass;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4149257164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _api = require("@aimpact/chat/api");
          var _class = require("./class");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-app/config");
          var _dayjs = require("dayjs");
          var _session = require("@aimpact/chat-sdk/session");
          class GClassRoom extends _model.ReactiveModel {
            #promise;
            #url;
            #MAX_TIME = 300000;
            #state;
            get state() {
              return this.#state;
            }
            #code;
            get code() {
              return this.#code;
            }
            get isReady() {
              return this.#promise;
            }
            #api;
            #lastClassesQueryTime;
            get lastClassesQueryTime() {
              return this.#lastClassesQueryTime;
            }
            #error;
            get error() {
              return this.#error;
            }
            #authorized;
            #processedCallback;
            get processedCallback() {
              return this.#processedCallback;
            }
            get authorized() {
              return this.#authorized;
            }
            #classes = new Map();
            get classes() {
              return this.#classes;
            }
            constructor() {
              super();
              const api = new _api.Api(_config.default.params.apis.ailearn);
              this.#api = api;
              _session.sessionWrapper.on('login', this.onLogin.bind(this));
              this.#init();
            }
            onLogin() {}
            async checkPermissions() {
              try {
                const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/me');
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                return response.data.verifiedTeacher;
              } catch (e) {
                console.error(e);
              }
            }
            async #init() {
              try {
                this.#promise = new _core.PendingPromise();
                await _session.sessionWrapper.isReady;
                if (_session.sessionWrapper.logged) {
                  const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/oauth/authorized');
                  this.#authorized = response.data.authorized;
                  this.#promise.resolve(true);
                  // get permissions;
                  this.checkPermissions().then(isTeacher => {
                    _wrapper.AiLearnWrapper.isTeacher = isTeacher;
                  });
                  this.triggerEvent();
                  return;
                }
                const onChange = () => {
                  if (_session.sessionWrapper.ready) {
                    this.#promise.resolve(true);
                  }
                };
                _session.sessionWrapper.on('change', onChange);
                this.triggerEvent();
                return this.#promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
                this.#promise.resolve(true);
              }
            }
            async getUrl() {
              try {
                const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/oauth/url');
                if (!response.status) {
                  throw new Error(response.error);
                }
                return response.data.url;
              } catch (e) {
                throw new Error('ERROR_GETTING_URL');
              }
            }
            async callback(state, code) {
              try {
                this.#state = state;
                this.#code = code;
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/oauth/callback', {
                  bearer: _session.sessionWrapper.user.token,
                  state,
                  code
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                this.#authorized = true;
                this.#processedCallback = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
              } finally {
                this.fetching = false;
              }
            }
            async courses() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/courses', {
                  bearer: _session.sessionWrapper.user.token,
                  id: _session.sessionWrapper.user.id
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return [];
                }
                response.courses.forEach(course => {
                  const gclass = new _class.GClass(course);
                  this.#classes.set(course.id, gclass);
                });
                this.#lastClassesQueryTime = (0, _dayjs.default)();
                return this.#classes;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.GClassRoom = GClassRoom;
          /*bundle */
          const gclassroom = exports.gclassroom = new GClassRoom();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "gclassroom",
        "name": "gclassroom"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'gclassroom') && _export("gclassroom", gclassroom = require ? require('./index').gclassroom : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsImNvdXJzZSIsIm5hbWUiLCJjb2RlIiwic2VjdGlvbiIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJfYXBpIiwiX2NsYXNzIiwiX2NvcmUiLCJfY29uZmlnIiwiX2RheWpzIiwiX3Nlc3Npb24iLCJHQ2xhc3NSb29tIiwicHJvbWlzZSIsInVybCIsIk1BWF9USU1FIiwic3RhdGUiLCJpc1JlYWR5IiwiYXBpIiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJlcnJvciIsImF1dGhvcml6ZWQiLCJwcm9jZXNzZWRDYWxsYmFjayIsImNsYXNzZXMiLCJNYXAiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwib25Mb2dpbiIsImJpbmQiLCJjaGVja1Blcm1pc3Npb25zIiwicmVzcG9uc2UiLCJiZWFyZXIiLCJ1c2VyIiwidG9rZW4iLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwidmVyaWZpZWRUZWFjaGVyIiwiZSIsImNvbnNvbGUiLCJQZW5kaW5nUHJvbWlzZSIsImxvZ2dlZCIsInJlc29sdmUiLCJ0aGVuIiwiaXNUZWFjaGVyIiwiQWlMZWFybldyYXBwZXIiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNoYW5nZSIsInJlYWR5IiwiZ2V0VXJsIiwiRXJyb3IiLCJjYWxsYmFjayIsImZldGNoaW5nIiwidHJhY2UiLCJjb3Vyc2VzIiwiZm9yRWFjaCIsInNldCIsImdjbGFzc3Jvb20iXSwic291cmNlcyI6WyIvY2xhc3MudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtV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