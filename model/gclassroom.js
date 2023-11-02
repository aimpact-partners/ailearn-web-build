System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.11/config", "dayjs@1.11.10"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsImNvdXJzZSIsIm5hbWUiLCJjb2RlIiwiaWQiLCJjb25zdHJ1Y3RvciIsImdjbGFzcyIsImluaXQiLCIjaW5pdCIsImRlc2NyaXB0aW9uSGVhZGluZyIsImVucm9sbG1lbnRDb2RlIiwiZXhwb3J0cyIsIl9hcGkiLCJfc2Vzc2lvbiIsIl9jb3JlIiwiX2NvbmZpZyIsIl9jbGFzcyIsIl9kYXlqcyIsIkdDbGFzc1Jvb20iLCJwcm9taXNlIiwidXJsIiwiTUFYX1RJTUUiLCJzdGF0ZSIsImlzUmVhZHkiLCJhcGkiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsImVycm9yIiwiYXV0aG9yaXplZCIsInByb2Nlc3NlZENhbGxiYWNrIiwiY2xhc3NlcyIsIk1hcCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBlbmRpbmdQcm9taXNlIiwic2Vzc2lvbldyYXBwZXIiLCJsb2dnZWQiLCJyZXNwb25zZSIsImJlYXJlciIsInVzZXIiLCJ0b2tlbiIsImdldCIsImRhdGEiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Iiwib25DaGFuZ2UiLCJyZWFkeSIsIm9uIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJzdGF0dXMiLCJFcnJvciIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJ0cmFjZSIsImNvdXJzZXMiLCJmb3JFYWNoIiwic2V0IiwiZ2NsYXNzcm9vbSJdLCJzb3VyY2VzIjpbIi9jbGFzcy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVNLE1BQU9DLE1BQU8sU0FBUUYsTUFBQSxDQUFBRyxhQUFxQjtZQUNoRCxDQUFBQyxNQUFPO1lBRVAsQ0FBQUMsSUFBSztZQUNM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