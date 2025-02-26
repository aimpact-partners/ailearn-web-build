System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk141Core) {
      dependency_1 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Session) {
      dependency_2 = _aimpactChatSdk141Session;
    }, function (_aimpactReactive001Model) {
      dependency_3 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/reactive/model', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2997184911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@aimpact/reactive/model");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #chats;
            get chats() {
              return this.#chats;
            }
            #language = _core2.languages.current;
            get language() {
              return this.#language;
            }
            set language(value) {
              this.#language = value;
              this.triggerEvent('app.settings.change');
            }
            #audioSpeed = localStorage.getItem('aimpact.audio.speed') && !isNaN(parseInt(localStorage.getItem('aimpact.audio.speed'))) ? parseInt(localStorage.getItem('aimpact.audio.speed')) : 1;
            get audioSpeed() {
              return this.#audioSpeed;
            }
            set audioSpeed(value) {
              if (!value) return;
              this.#audioSpeed = value;
              localStorage.setItem('aimpact.audio.speed', value.toString());
              this.triggerEvent('app.settings.change');
            }
            #accessibility = localStorage.getItem('aimpact.chat.accessibility') ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
            get accesiibility() {
              return this.#accessibility;
            }
            set accesiibility(value) {
              this.#accessibility = value;
              localStorage.setItem('aimpact.chat.accessibility', value);
              this.triggerEvent('app.settings.change');
            }
            set accessibility(value) {
              this.#accessibility = value;
              localStorage.setItem('aimpact.chat.accessibility', value);
              this.triggerEvent();
            }
            #currentChat;
            get currentChat() {
              return this.#currentChat;
            }
            set currentChat(chat) {
              if (!chat?.id) {
                throw new Error('invalid chat');
              }
              if (this.#currentChat?.id === chat?.id) return;
              this.#currentChat = chat;
              this.triggerEvent();
            }
            #ready;
            get isReady() {
              return this.#ready;
            }
            constructor() {
              super();
              this.reactiveProps(['isUpdating', 'selectedKnowledgeBoxId']);
              _session.sessionWrapper.on('change', this.validateSession.bind(this));
              this.load();
            }
            validateSession() {
              if (!_session.sessionWrapper.logged) return;
              this.ready = false;
              this.#ready = undefined;
              this.load();
            }
            async load() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core2.PendingPromise();
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged) {
                this.ready = true;
                this.#ready.resolve(true);
                return;
              }
              // TODO: @jircdev - Move the loading of knowledge boxes to a separate module for on-demand loading.
              /**
               * TODO: @jircdev - Move the loading of chats to a separate module for on-demand loading.
               */
              const chats = new _core.Chats();
              this.#chats = chats;
              // this.#chats.on('change', this.triggerEvent);
              // await chats.load({ userId: sessionWrapper.user.id });
              this.ready = true;
              this.#ready.resolve(true);
            }
            setSettings(settings) {
              Object.keys(settings).forEach(key => this[key] = settings[key]);
              this.triggerEvent();
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = exports.AppWrapper = _wrapper;
          globalThis.app = AppWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./index').AppWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXNOYU4iLCJwYXJzZUludCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImFjY2Vzc2liaWxpdHkiLCJhY2Nlc2lpYmlsaXR5IiwiY3VycmVudENoYXQiLCJjaGF0IiwiaWQiLCJFcnJvciIsInJlYWR5IiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwib24iLCJ2YWxpZGF0ZVNlc3Npb24iLCJiaW5kIiwibG9hZCIsImxvZ2dlZCIsInVuZGVmaW5lZCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIkNoYXRzIiwic2V0U2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsImdsb2JhbFRoaXMiLCJhcHAiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFNTztVQUFVLE1BQU9JLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUF1QjtZQUM5RCxDQUFBQyxLQUFNO1lBS04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtB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