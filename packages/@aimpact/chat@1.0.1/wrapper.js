System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_2 = _beyondJsReactive115Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjaGF0IiwiaWQiLCJFcnJvciIsInRyaWdnZXJFdmVudCIsInJlYWR5IiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwib24iLCJ2YWxpZGF0ZVNlc3Npb24iLCJiaW5kIiwibG9hZCIsImxvZ2dlZCIsInVuZGVmaW5lZCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIktub3dsZWRnZUJveGVzIiwidXNlcklkIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJDaGF0cyIsImdsb2JhbFRoaXMiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIiwiYXBwIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBSU87VUFBVSxNQUFPSSxPQUFRLFNBQVFILE1BQUEsQ0FBQUksYUFBdUI7WUFDOUQsQ0FBQUMsS0FBTTtZQUtOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLENBQUFD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