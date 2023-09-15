System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_2 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2494309221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
              this.#knowledgeBoxes.bind('change', () => this.triggerEvent());
              await knowledgeBoxes.load({
                userId: _session.sessionWrapper.user.id
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBYyxDQUFDWSxJQUFJLENBQUNsQjtjQUFFLENBQUUsQ0FBQztjQUNwRHdCLFVBQVUsQ0FBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtjQUM5QixJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzFCOztVQUNBVTtVQUNELE1BQU1DLFFBQVEsR0FBRyxJQUFJakMsT0FBTyxFQUFFO1VBQ3ZCO1VBQVcsTUFBTWtDLFVBQVUsR0FBR0QsUUFBUTtVQUFDRDtVQUM5Q0QsVUFBVSxDQUFDSSxHQUFHLEdBQUdELFVBQVUiLCJuYW1lcyI6WyJXcmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY2hhdCIsImlkIiwiRXJyb3IiLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsInZhbGlkYXRlU2Vzc2lvbiIsImJpbmQiLCJsb2FkIiwibG9nZ2VkIiwicmVhZHkiLCJ1bmRlZmluZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJLbm93bGVkZ2VCb3hlcyIsInVzZXJJZCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ2hhdHMiLCJnbG9iYWxUaGlzIiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsImFwcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=