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
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
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
        hash: 3990931437,
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
              // const knowledgeBoxes = new KnowledgeBoxes();
              // this.#knowledgeBoxes = knowledgeBoxes;
              // // this.#knowledgeBoxes.bind('change', () => this.triggerEvent());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJrbm93bGVkZ2VCb3hlcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImFjY2Vzc2liaWxpdHkiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY2hhdCIsImlkIiwiRXJyb3IiLCJyZWFkeSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJ1bmRlZmluZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJKU09OIiwicGFyc2UiLCJDaGF0cyIsInNldFNldHRpbmdzIiwic2V0dGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImV4cG9ydHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiLCJnbG9iYWxUaGlzIiwiYXBwIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBR087VUFBVSxNQUFPSSxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBdUI7WUFDOUQsQ0FBQUMsS0FBTTtZQUtOLElBQUlBLEtBQUtBLENB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QU0sRUFBRTtjQUU1QixJQUFJLENBQUNULEtBQUssR0FBRyxLQUFLO2NBQ2xCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdVLFNBQVM7Y0FDdkIsSUFBSSxDQUFDRixJQUFJLEVBQUU7WUFDWjtZQUVBLE1BQU1BLElBQUlBLENBQUE7Y0FDVCxJQUFJLElBQUksQ0FBQyxDQUFBUixLQUFNLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUNuQyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHLElBQUl0QixNQUFBLENBQUFpQyxjQUFjLEVBQUU7Y0FDbEMsTUFBTW5DLFFBQUEsQ0FBQTRCLGNBQWMsQ0FBQ0gsT0FBTztjQUU1QixJQUFJLENBQUN6QixRQUFBLENBQUE0QixjQUFjLENBQUNLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDVCxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ1ksT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDekI7O2NBR0Q7Y0FFQTtjQUNBO2NBQ0E7Y0FDQTtjQUVBLElBQUksQ0FBQyxDQUFBakIsb0JBQXFCLEdBQUdrQixJQUFJLENBQUNDLEtBQUssQ0FBQ3pCLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRTtjQUVwRjs7O2NBR0EsTUFBTVQsS0FBSyxHQUFHLElBQUlQLEtBQUEsQ0FBQXlDLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQWxDLEtBQU0sR0FBR0EsS0FBSztjQUNuQjtjQUNBO2NBRUEsSUFBSSxDQUFDbUIsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ1ksT0FBTyxDQUFDLElBQUksQ0FBQztZQUMxQjtZQUVBSSxXQUFXQSxDQUFDQyxRQUFRO2NBQ25CQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxJQUFLLElBQUksQ0FBQ0EsR0FBRyxDQUFDLEdBQUdKLFFBQVEsQ0FBQ0ksR0FBRyxDQUFFLENBQUM7Y0FDakUsSUFBSSxDQUFDbEMsWUFBWSxFQUFFO1lBQ3BCOztVQUNBbUMsT0FBQSxDQUFBM0MsT0FBQSxHQUFBQSxPQUFBO1VBQ0QsTUFBTTRDLFFBQVEsR0FBRyxJQUFJNUMsT0FBTyxFQUFFO1VBQ3ZCO1VBQVcsTUFBTTZDLFVBQVUsR0FBQUYsT0FBQSxDQUFBRSxVQUFBLEdBQUdELFFBQVE7VUFDN0NFLFVBQVUsQ0FBQ0MsR0FBRyxHQUFHRixVQUFVIiwiaWdub3JlTGlzdCI6W119