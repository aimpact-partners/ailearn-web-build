System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/reactive@1.1.6/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk100Core) {
      dependency_1 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_2 = _aimpactChatSdk100Session;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/wrapper"
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
        hash: 485739756,
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
              const chats = new _core.Chats();
              this.#chats = chats;
              this.#chats.on('change', this.triggerEvent);
              await chats.load({
                userId: _session.sessionWrapper.user.id
              });
              globalThis.chats = this.#chats;
              this.ready = true;
              this.#ready.resolve(true);
            }
            setSettings(settings) {
              Object.keys(settings).forEach(key => {
                this[key] = settings[key];
              });
              this.triggerEvent();
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = _wrapper;
          exports.AppWrapper = AppWrapper;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksQ0FBQyxNQUFNO2NBQzlCLElBQUksQ0FBQzZCLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDMUI7WUFFQVEsV0FBVyxDQUFDQyxRQUFRO2NBQ25CQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxJQUFHO2dCQUNuQyxJQUFJLENBQUNBLEdBQUcsQ0FBQyxHQUFHSixRQUFRLENBQUNJLEdBQUcsQ0FBQztjQUMxQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUN2QyxZQUFZLEVBQUU7WUFDcEI7O1VBQ0F3QztVQUNELE1BQU1DLFFBQVEsR0FBRyxJQUFJakQsT0FBTyxFQUFFO1VBQ3ZCO1VBQVcsTUFBTWtELFVBQVUsR0FBR0QsUUFBUTtVQUFDRDtVQUM5Q1AsVUFBVSxDQUFDVSxHQUFHLEdBQUdELFVBQVUiLCJuYW1lcyI6WyJXcmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwia25vd2xlZGdlQm94ZXMiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsImF1ZGlvU3BlZWQiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJhY2Nlc2lpYmlsaXR5IiwiYWNjZXNzaWJpbGl0eSIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjaGF0IiwiaWQiLCJFcnJvciIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJyZWFkeSIsInVuZGVmaW5lZCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIktub3dsZWRnZUJveGVzIiwiSlNPTiIsInBhcnNlIiwiQ2hhdHMiLCJ1c2VySWQiLCJ1c2VyIiwiZ2xvYmFsVGhpcyIsInNldFNldHRpbmdzIiwic2V0dGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiLCJhcHAiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19