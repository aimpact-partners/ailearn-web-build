System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat@1.0.1/api", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.11/config", "dayjs@1.11.10"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_aimpactChat101Api) {
      dependency_2 = _aimpactChat101Api;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_5 = _aimpactAilearnApp0011Config;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['dayjs', dependency_6]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./class
      ***********************/
      ims.set('./class', {
        hash: 1820026526,
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
            get id() {
              return this.#course.id;
            }
            constructor(gclass) {
              super();
              this.#course = gclass;
              this.#init();
            }
            #init() {
              this.#name = this.#course.descriptionHeading;
              this.#code = this.#course.enrollmentCode;
            }
          }
          exports.GClass = GClass;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2174054127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _api = require("@aimpact/chat/api");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/ailearn-app/config");
          var _class = require("./class");
          var _dayjs = require("dayjs");
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
              this.#init();
            }
            async #init() {
              try {
                this.#promise = new _core.PendingPromise();
                await _session.sessionWrapper.isReady;
                if (_session.sessionWrapper.logged) {
                  const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/oauth/authorized');
                  this.#authorized = response.data.authorized;
                  this.#promise.resolve(true);
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
          const gclassroom = new GClassRoom();
          exports.gclassroom = gclassroom;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQUssR0FBRTtnQkFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUTtlQUNwQixDQUFDLE9BQU9pQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQzFCLEtBQUssQ0FBQ3lCLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ08sUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBckM7VUFFTTtVQUFZLE1BQU0yQyxVQUFVLEdBQUcsSUFBSTFDLFVBQVUsRUFBRTtVQUFDRCIsIm5hbWVzIjpbIkdDbGFzcyIsIlJlYWN0aXZlTW9kZWwiLCJuYW1lIiwiY29kZSIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJkZXNjcmlwdGlvbkhlYWRpbmciLCJlbnJvbGxtZW50Q29kZSIsImV4cG9ydHMiLCJHQ2xhc3NSb29tIiwic3RhdGUiLCJpc1JlYWR5IiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJlcnJvciIsInByb2Nlc3NlZENhbGxiYWNrIiwiYXV0aG9yaXplZCIsIk1hcCIsImNsYXNzZXMiLCJhcGkiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBlbmRpbmdQcm9taXNlIiwic2Vzc2lvbldyYXBwZXIiLCJsb2dnZWQiLCJyZXNwb25zZSIsImJlYXJlciIsInVzZXIiLCJ0b2tlbiIsImdldCIsImRhdGEiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Iiwib25DaGFuZ2UiLCJyZWFkeSIsIm9uIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJzdGF0dXMiLCJFcnJvciIsInVybCIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJ0cmFjZSIsImNvdXJzZXMiLCJmb3JFYWNoIiwiY291cnNlIiwic2V0IiwiZ2NsYXNzcm9vbSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY2xhc3MudHMiLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19