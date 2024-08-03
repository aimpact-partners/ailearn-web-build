System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk101Core) {
      dependency_1 = _aimpactChatSdk101Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_2 = _aimpactChatSdk101Session;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2254898876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #chats;
            get chats() {
              return this.#chats;
            }
            #knowledgeBoxes;
            get knowledgeBoxes() {
              return this.#knowledgeBoxes;
            }
            #language = _core2.languages.current;
            get language() {
              return this.#language;
            }
            set language(value) {
              this.#language = value;
              this.triggerEvent('app.settings.change');
            }
            #audioSpeed = localStorage.getItem('aimpact.audio.speed') ? parseInt(localStorage.getItem('aimpact.audio.speed')) : 1;
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
            get accessibility() {
              return this.#accessibility;
            }
            set accessibility(value) {
              this.#accessibility = value;
              localStorage.setItem('aimpact.chat.accessibility', value);
              this.triggerEvent('app.settings.change');
            }
            #sharedKnowledgeBoxes;
            get sharedKnowledgeBoxes() {
              return this.#sharedKnowledgeBoxes;
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
              const knowledgeBoxes = new _core.KnowledgeBoxes();
              this.#knowledgeBoxes = knowledgeBoxes;
              // this.#knowledgeBoxes.bind('change', () => this.triggerEvent());
              // await knowledgeBoxes.load({ userId: sessionWrapper.user.id });
              this.#sharedKnowledgeBoxes = JSON.parse(localStorage.getItem('sharedFolders')) || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJrbm93bGVkZ2VCb3hlcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImFjY2Vzc2liaWxpdHkiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY2hhdCIsImlkIiwiRXJyb3IiLCJyZWFkeSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJ1bmRlZmluZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJLbm93bGVkZ2VCb3hlcyIsIkpTT04iLCJwYXJzZSIsIkNoYXRzIiwic2V0U2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsImdsb2JhbFRoaXMiLCJhcHAiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFHTztVQUFVLE1BQU9JLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUF1QjtZQUM5RCxDQUFBQyxLQUFNO1lB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