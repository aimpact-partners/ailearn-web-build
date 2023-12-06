System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactChat101UiManager) {
      dependency_6 = _aimpactChat101UiManager;
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }, function (_pragmateUi003Icons) {
      dependency_8 = _pragmateUi003Icons;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedIcons) {
      dependency_11 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/chat-page",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/chat/ui/manager', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/icons', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/icons', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat-page.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat-page.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2861114136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              //this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 853805903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3105502050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          function View({
            store,
            uri
          }) {
            const [id, setId] = _react.default.useState(uri.vars.get('id'));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aimpact-chat-control", {
              id: id
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 4064363242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          var _manager = require("@aimpact/chat/ui/manager");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components2 = require("@aimpact/chat/shared/components");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ChatNotFound() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            if (!_wrapper.AppWrapper.ready) return _react.default.createElement(_components2.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'not__found_chat '
            }, _react.default.createElement("img", {
              src: '/assets/not-found.png',
              alt: 'Chat not found'
            }), _react.default.createElement("span", {
              className: 'not__found__details'
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'not-found__ailogo'
            }), _react.default.createElement("h2", null, "Chat not found"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", _react.default.createElement("br", null), "Please enter URL correctly or create a new chat."), _react.default.createElement(_components.Button, {
              icon: 'chat',
              onClick: openDialog,
              label: 'Start New Chat'
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIl9yZWFjdCIsInVyaSIsImlkIiwic2V0SWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ2YXJzIiwiZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX21hbmFnZXIiLCJfY29tcG9uZW50cyIsIl9pY29ucyIsIl93cmFwcGVyIiwiX2NvbXBvbmVudHMyIiwiX2ljb25zMiIsIkNoYXROb3RGb3VuZCIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIkFwcFdyYXBwZXIiLCJyZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiQnV0dG9uIiwib25DbGljayIsImxhYmVsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxL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