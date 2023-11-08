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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJrbm93bGVkZ2VCb3hlcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImFjY2Vzc2liaWxpdHkiLCJhY2Nlc2lpYmlsaXR5Iiwic2hhcmVkS25vd2xlZGdlQm94ZXMiLCJjdXJyZW50Q2hhdCIsImNoYXQiLCJpZCIsIkVycm9yIiwicmVhZHkiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsInZhbGlkYXRlU2Vzc2lvbiIsImJpbmQiLCJsb2FkIiwibG9nZ2VkIiwidW5kZWZpbmVkIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwiS25vd2xlZGdlQm94ZXMiLCJKU09OIiwicGFyc2UiLCJDaGF0cyIsInVzZXJJZCIsInVzZXIiLCJnbG9iYWxUaGlzIiwic2V0U2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsImFwcCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUdPO1VBQVUsTUFBT0ksT0FBUSxTQUFRRixNQUFB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