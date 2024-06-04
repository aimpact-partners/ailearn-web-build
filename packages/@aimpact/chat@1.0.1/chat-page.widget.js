System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactChat101UiManager) {
      dependency_6 = _aimpactChat101UiManager;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_8 = _pragmateUi011Icons;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedIcons) {
      dependency_11 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/auth", "1.7.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
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
        hash: 3049306109,
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
            const [id] = _react.default.useState(uri.vars.get('id'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIl9yZWFjdCIsInVyaSIsImlkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidmFycyIsImdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMiLCJfd3JhcHBlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJDaGF0Tm90Rm91bmQiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJBcHBXcmFwcGVyIiwicmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiSWNvbiIsImljb24iLCJJQ09OUyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsYWJlbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVO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