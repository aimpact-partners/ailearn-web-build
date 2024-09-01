System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk110Core) {
      dependency_1 = _aimpactChatSdk110Core;
    }, function (_aimpactChatSdk110Session) {
      dependency_2 = _aimpactChatSdk110Session;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-texmath", "1.0.0"], ["mathjax-full", "3.2.2"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/wrapper"
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
        hash: 2289235394,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJhY2Nlc3NpYmlsaXR5IiwiYWNjZXNpaWJpbGl0eSIsImN1cnJlbnRDaGF0IiwiY2hhdCIsImlkIiwiRXJyb3IiLCJyZWFkeSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJ1bmRlZmluZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJDaGF0cyIsInNldFNldHRpbmdzIiwic2V0dGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiLCJnbG9iYWxUaGlzIiwiYXBwIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBR087VUFBVSxNQUFPSSxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBdUI7WUFDOUQsQ0FBQUMsS0FBTTtZQUlOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25C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