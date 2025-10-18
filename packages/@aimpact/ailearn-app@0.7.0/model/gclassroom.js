System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/config", "dayjs@1.11.13", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_2 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsKernel0114Core) {
      dependency_4 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnApp070Config) {
      dependency_5 = _aimpactAilearnApp070Config;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-app/model/wrapper', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
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
        hash: 2021678877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _class = require("./class");
          var _model = require("@beyond-js/reactive/model");
          var _dayjs = require("dayjs");
          var _session = require("@aimpact/chat-sdk/session");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              const api = new _api.Api(_wrapper.settings.apis.ailearn);
              this.#api = api;
              _session.sessionWrapper.on('login', this.onLogin.bind(this));
              // this.#init();
            }
            onLogin() {}
            async checkPermissions() {
              try {
                const token = await _session.sessionWrapper.user.token;
                if (!token) throw new Error('No token');
                const response = await this.#api.bearer(token).get('/gclassroom/me');
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                return response.data.verifiedTeacher;
              } catch (e) {
                console.error(e);
              }
            }
            async getUrl() {
              try {
                const token = await _session.sessionWrapper.user.token;
                if (!token) throw new Error('No token');
                const response = await this.#api.bearer(token).get('/gclassroom/oauth/url');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsImNvdXJzZSIsIm5hbWUiLCJjb2RlIiwic2VjdGlvbiIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJleHBvcnRzIiwiX2FwaSIsIl9jbGFzcyIsIl9kYXlqcyIsIl9zZXNzaW9uIiwiX3dyYXBwZXIiLCJHQ2xhc3NSb29tIiwicHJvbWlzZSIsInVybCIsIk1BWF9USU1FIiwic3RhdGUiLCJpc1JlYWR5IiwiYXBpIiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJlcnJvciIsImF1dGhvcml6ZWQiLCJwcm9jZXNzZWRDYWxsYmFjayIsImNsYXNzZXMiLCJNYXAiLCJBcGkiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9naW4iLCJiaW5kIiwiY2hlY2tQZXJtaXNzaW9ucyIsInRva2VuIiwidXNlciIsIkVycm9yIiwicmVzcG9uc2UiLCJiZWFyZXIiLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwidmVyaWZpZWRUZWFjaGVyIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJjYWxsYmFjayIsImZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwidHJhY2UiLCJjb3Vyc2VzIiwiZm9yRWFjaCIsInNldCIsImRlZmF1bHQiLCJnY2xhc3Nyb29tIl0sInNvdXJjZXMiOlsiLy9jbGFzcy50cy8iLCIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU0sTUFBT0MsTUFBTyxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hELENBQUFDLE1BQU87WUFFUCxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8s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