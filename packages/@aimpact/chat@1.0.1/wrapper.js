System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_2 = _beyondJsReactive113Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 3552193648,
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
            set currentChat(id) {
              this.#currentChat = this.#chats.get(id);
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
              const knowledgeBoxes = new _core.KnowledgeBoxes();
              this.#knowledgeBoxes = knowledgeBoxes;
              this.#knowledgeBoxes.bind('change', () => this.triggerEvent());
              await knowledgeBoxes.load({
                userId: _session.sessionWrapper.user.id
              });
              this.#sharedKnowledgeBoxes = JSON.parse(localStorage.getItem('sharedFolders')) || [];
              const chats = new _core.Chats();
              this.#chats = chats;
              this.#chats.bind('change', () => this.triggerEvent());
              await chats.load({
                userId: _session.sessionWrapper.user.id
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBSU87VUFBVSxNQUFPQSxPQUFRLFNBQVFDLG9CQUF1QjtZQUM5RCxNQUFNO1lBS04sSUFBSUMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxlQUFlO1lBQ2YsSUFBSUMsY0FBYztjQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlO1lBQzVCO1lBRUEscUJBQXFCO1lBQ3JCLElBQUlDLG9CQUFvQjtjQUN2QixPQUFPLElBQUksQ0FBQyxxQkFBcUI7WUFDbEM7WUFFQSxZQUFZO1lBQ1osSUFBSUMsV0FBVztjQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7WUFFQSxJQUFJQSxXQUFXLENBQUNDLEVBQUU7Y0FDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDQyxHQUFHLENBQUNELEVBQUUsQ0FBQztjQUN2QyxJQUFJLENBQUNFLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU07WUFDTixJQUFJQyxPQUFPO2NBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBQztjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDLENBQUM7Y0FDNURDLHVCQUFjLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM1RCxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUFGLGVBQWU7Y0FDZCxJQUFJLENBQUNGLHVCQUFjLENBQUNLLE1BQU0sRUFBRTtjQUU1QixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO2NBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUdDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDSCxJQUFJLEVBQUU7WUFDWjtZQUVBLE1BQU1BLElBQUk7Y0FDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxJQUFJLENBQUMsTUFBTTtjQUVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlJLHFCQUFjLEVBQUU7Y0FDbEMsTUFBTVIsdUJBQWMsQ0FBQ0gsT0FBTztjQUU1QixJQUFJLENBQUNHLHVCQUFjLENBQUNLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDekI7O2NBR0QsTUFBTWxCLGNBQWMsR0FBRyxJQUFJbUIsb0JBQWMsRUFBRTtjQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHbkIsY0FBYztjQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDWSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDUCxZQUFZLEVBQUUsQ0FBQztjQUM5RCxNQUFNTCxjQUFjLENBQUNhLElBQUksQ0FBQztnQkFBRU8sTUFBTSxFQUFFWCx1QkFBYyxDQUFDWSxJQUFJLENBQUNsQjtjQUFFLENBQUUsQ0FBQztjQUU3RCxJQUFJLENBQUMscUJBQXFCLEdBQUdtQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFO2NBRXBGLE1BQU0xQixLQUFLLEdBQUcsSUFBSTJCLFdBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHM0IsS0FBSztjQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDYSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDUCxZQUFZLEVBQUUsQ0FBQztjQUNyRCxNQUFNTixLQUFLLENBQUNjLElBQUksQ0FBQztnQkFBRU8sTUFBTSxFQUFFWCx1QkFBYyxDQUFDWSxJQUFJLENBQUNsQjtjQUFFLENBQUUsQ0FBQztjQUVwRCxJQUFJLENBQUNZLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDMUI7O1VBQ0FTO1VBQ0QsTUFBTUMsUUFBUSxHQUFHLElBQUkvQixPQUFPLEVBQUU7VUFDdkI7VUFBVyxNQUFNZ0MsVUFBVSxHQUFHRCxRQUFRO1VBQUNEO1VBQzlDRyxVQUFVLENBQUNDLEdBQUcsR0FBR0YsVUFBVSIsIm5hbWVzIjpbIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJpZCIsImdldCIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJyZWFkeSIsInVuZGVmaW5lZCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIktub3dsZWRnZUJveGVzIiwidXNlcklkIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJDaGF0cyIsImV4cG9ydHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiLCJnbG9iYWxUaGlzIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==