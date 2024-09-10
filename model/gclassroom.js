System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.21/model/wrapper", "@aimpact/http-suite@0.0.1/api", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.6-dev.21/config", "dayjs@1.11.13", "@aimpact/chat-sdk@1.1.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp016Dev21ModelWrapper) {
      dependency_2 = _aimpactAilearnApp016Dev21ModelWrapper;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp016Dev21Config) {
      dependency_5 = _aimpactAilearnApp016Dev21Config;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactChatSdk110Session) {
      dependency_7 = _aimpactChatSdk110Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-app/model/wrapper', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
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
        hash: 1292236012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _api = require("@aimpact/http-suite/api");
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
              // this.#init();
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
                  _wrapper.AiLearnWrapper.isTeacher = false;
                  // this.checkPermissions().then(isTeacher => {
                  // 	AiLearnWrapper.isTeacher = isTeacher;
                  // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsImNvdXJzZSIsIm5hbWUiLCJjb2RlIiwic2VjdGlvbiIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJfYXBpIiwiX2NsYXNzIiwiX2NvcmUiLCJfY29uZmlnIiwiX2RheWpzIiwiX3Nlc3Npb24iLCJHQ2xhc3NSb29tIiwicHJvbWlzZSIsInVybCIsIk1BWF9USU1FIiwic3RhdGUiLCJpc1JlYWR5IiwiYXBpIiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJlcnJvciIsImF1dGhvcml6ZWQiLCJwcm9jZXNzZWRDYWxsYmFjayIsImNsYXNzZXMiLCJNYXAiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwib25Mb2dpbiIsImJpbmQiLCJjaGVja1Blcm1pc3Npb25zIiwicmVzcG9uc2UiLCJiZWFyZXIiLCJ1c2VyIiwidG9rZW4iLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwidmVyaWZpZWRUZWFjaGVyIiwiZSIsImNvbnNvbGUiLCJQZW5kaW5nUHJvbWlzZSIsImxvZ2dlZCIsInJlc29sdmUiLCJBaUxlYXJuV3JhcHBlciIsImlzVGVhY2hlciIsInRyaWdnZXJFdmVudCIsIm9uQ2hhbmdlIiwicmVhZHkiLCJnZXRVcmwiLCJFcnJvciIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJ0cmFjZSIsImNvdXJzZXMiLCJmb3JFYWNoIiwic2V0IiwiZ2NsYXNzcm9vbSJdLCJzb3VyY2VzIjpbIi9jbGFzcy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU0sTUFBT0MsTUFBTyxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hELENBQUFDLE1BQU87WUFFUCxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxJQUFJQyxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUosTUFBTyxDQUFDSSxFQUFFO1lBQ3ZCO1lBQ0FDLFlBQVlDLE1BQU07Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR00sTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsSUFBSyxFQUFFO1lBQ2I7WUFFQSxDQUFBQSxJQUFLQyxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFQLElBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUQsTUFBTyxDQUFDQyxJQUFJO2NBQzlCLElBQUksQ0FBQyxDQUFBRSxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ0csT0FBTztZQUNyQzs7VUFDQU0sT0FBQSxDQUFBWCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFZLFFBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLElBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLE1BQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixLQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWlCLE9BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBQ00sTUFBT29CLFVBQVcsU0FBUXJCLE1BQUEsQ0FBQUcsYUFBeUI7WUFDeEQsQ0FBQW1CLE9BQVE7WUFDUixDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsUUFBUyxHQUFHLE1BQU07WUFDbEIsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQW5CLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLElBQUlvQixPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUosT0FBUTtZQUNyQjtZQUNBLENBQUFLLEdBQUk7WUFDSixDQUFBQyxvQkFBcUI7WUFDckIsSUFBSUEsb0JBQW9CQSxDQUFBO2NBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUFBLG9CQUFxQjtZQUNsQztZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFVBQVc7WUFDWCxDQUFBQyxpQkFBa0I7WUFFbEIsSUFBSUEsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGlCQUFrQjtZQUMvQjtZQUNBLElBQUlELFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQUUsT0FBUSxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNwQixJQUFJRCxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBdkIsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQLE1BQU1rQixHQUFHLEdBQUcsSUFBSVosSUFBQSxDQUFBbUIsR0FBRyxDQUFDaEIsT0FBQSxDQUFBaUIsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBWCxHQUFJLEdBQUdBLEdBQUc7Y0FDZlAsUUFBQSxDQUFBbUIsY0FBYyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDbkQ7WUFDRDs7WUFFQUQsT0FBT0EsQ0FBQSxHQUFJO1lBRVgsTUFBTUUsZ0JBQWdCQSxDQUFBO2NBQ3JCLElBQUk7Z0JBQ0gsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFqQixHQUFJLENBQUNrQixNQUFNLENBQUN6QixRQUFBLENBQUFtQixjQUFjLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEYsSUFBSUosUUFBUSxDQUFDSyxNQUFNLEtBQUssT0FBTyxFQUFFO2tCQUNoQyxJQUFJLENBQUMsQ0FBQXBCLEtBQU0sR0FBR2UsUUFBUSxDQUFDZixLQUFLO2tCQUM1Qjs7Z0JBR0QsT0FBT2UsUUFBUSxDQUFDTSxJQUFJLENBQUNDLGVBQWU7ZUFDcEMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3hCLEtBQUssQ0FBQ3VCLENBQUMsQ0FBQzs7WUFFbEI7WUFDQSxNQUFNLENBQUF6QyxJQUFLQyxDQUFBO2NBQ1YsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVUsT0FBUSxHQUFHLElBQUlMLEtBQUEsQ0FBQXFDLGNBQWMsRUFBRTtnQkFFcEMsTUFBTWxDLFFBQUEsQ0FBQW1CLGNBQWMsQ0FBQ2IsT0FBTztnQkFFNUIsSUFBSU4sUUFBQSxDQUFBbUIsY0FBYyxDQUFDZ0IsTUFBTSxFQUFFO2tCQUMxQixNQUFNWCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWpCLEdBQUksQ0FBQ2tCLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQW1CLGNBQWMsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO2tCQUN0RyxJQUFJLENBQUMsQ0FBQWxCLFVBQVcsR0FBR2MsUUFBUSxDQUFDTSxJQUFJLENBQUNwQixVQUFVO2tCQUMzQyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxDQUFDa0MsT0FBTyxDQUFDLElBQUksQ0FBQztrQkFFM0I7a0JBQ0ExQyxRQUFBLENBQUEyQyxjQUFjLENBQUNDLFNBQVMsR0FBRyxLQUFLO2tCQUNoQztrQkFDQTtrQkFDQTtrQkFFQSxJQUFJLENBQUNDLFlBQVksRUFBRTtrQkFDbkI7O2dCQUdELE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2tCQUNyQixJQUFJeEMsUUFBQSxDQUFBbUIsY0FBYyxDQUFDc0IsS0FBSyxFQUFFO29CQUN6QixJQUFJLENBQUMsQ0FBQXZDLE9BQVEsQ0FBQ2tDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O2dCQUU3QixDQUFDO2dCQUNEcEMsUUFBQSxDQUFBbUIsY0FBYyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFb0IsUUFBUSxDQUFDO2dCQUVyQyxJQUFJLENBQUNELFlBQVksRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQXJDLE9BQVE7ZUFDcEIsQ0FBQyxPQUFPOEIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN4QixLQUFLLENBQUN1QixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNTLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsQ0FBQXZDLE9BQVEsQ0FBQ2tDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBRTdCO1lBRUEsTUFBTU0sTUFBTUEsQ0FBQTtjQUNYLElBQUk7Z0JBQ0gsTUFBTWxCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDa0IsTUFBTSxDQUFDekIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7Z0JBRS9GLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxNQUFNLEVBQUU7a0JBQ3JCLE1BQU0sSUFBSWMsS0FBSyxDQUFDbkIsUUFBUSxDQUFDZixLQUFLLENBQUM7O2dCQUdoQyxPQUFPZSxRQUFRLENBQUNNLElBQUksQ0FBQzNCLEdBQUc7ZUFDeEIsQ0FBQyxPQUFPNkIsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVcsS0FBSyxDQUFDLG1CQUFtQixDQUFDOztZQUV0QztZQUVBLE1BQU1DLFFBQVFBLENBQUN2QyxLQUFLLEVBQUVuQixJQUFJO2NBQ3pCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFtQixLQUFNLEdBQUdBLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxDQUFBbkIsSUFBSyxHQUFHQSxJQUFJO2dCQUNqQixJQUFJLENBQUMyRCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTXJCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDcUIsR0FBRyxDQUFDLDRCQUE0QixFQUFFO2tCQUNsRUgsTUFBTSxFQUFFekIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTyxJQUFJLENBQUNDLEtBQUs7a0JBQ2pDdEIsS0FBSztrQkFDTG5CO2lCQUNBLENBQUM7Z0JBRUYsSUFBSXNDLFFBQVEsQ0FBQ0ssTUFBTSxLQUFLLE9BQU8sRUFBRTtrQkFDaEMsSUFBSSxDQUFDLENBQUFwQixLQUFNLEdBQUdlLFFBQVEsQ0FBQ2YsS0FBSztrQkFDNUI7O2dCQUdELElBQUksQ0FBQyxDQUFBQyxVQUFXLEdBQUcsSUFBSTtnQkFDdkIsSUFBSSxDQUFDLENBQUFDLGlCQUFrQixHQUFHLElBQUk7Z0JBQzlCLElBQUksQ0FBQzRCLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9QLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDYSxLQUFLLENBQUNkLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ2EsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUUsT0FBT0EsQ0FBQTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTXJCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDcUIsR0FBRyxDQUFDLHFCQUFxQixFQUFFO2tCQUMzREgsTUFBTSxFQUFFekIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTyxJQUFJLENBQUNDLEtBQUs7a0JBQ2pDdkMsRUFBRSxFQUFFWSxRQUFBLENBQUFtQixjQUFjLENBQUNPLElBQUksQ0FBQ3RDO2lCQUN4QixDQUFDO2dCQUNGLElBQUlvQyxRQUFRLENBQUNLLE1BQU0sS0FBSyxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxDQUFBcEIsS0FBTSxHQUFHZSxRQUFRLENBQUNmLEtBQUs7a0JBQzVCLE9BQU8sRUFBRTs7Z0JBR1ZlLFFBQVEsQ0FBQ3VCLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDaEUsTUFBTSxJQUFHO2tCQUNqQyxNQUFNTSxNQUFNLEdBQUcsSUFBSU0sTUFBQSxDQUFBZCxNQUFNLENBQUNFLE1BQU0sQ0FBQztrQkFDakMsSUFBSSxDQUFDLENBQUE0QixPQUFRLENBQUNxQyxHQUFHLENBQUNqRSxNQUFNLENBQUNJLEVBQUUsRUFBRUUsTUFBTSxDQUFDO2dCQUNyQyxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFrQixvQkFBcUIsR0FBRyxJQUFBVCxNQUFBLENBQUFnQixPQUFLLEdBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVE7ZUFDcEIsQ0FBQyxPQUFPb0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN4QixLQUFLLENBQUN1QixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNhLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQXBELE9BQUEsQ0FBQVEsVUFBQSxHQUFBQSxVQUFBO1VBRU07VUFBWSxNQUFNaUQsVUFBVSxHQUFBekQsT0FBQSxDQUFBeUQsVUFBQSxHQUFHLElBQUlqRCxVQUFVLEVBQUUifQ==