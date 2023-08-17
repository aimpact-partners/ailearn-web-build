System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Alert) {
      dependency_10 = _pragmateUi0036Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassrooms/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/alert', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassrooms/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/gclassrooms/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1069450016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              if (this.uri.qs.get('state') && this.uri.qs.get('code')) {
                this.#store.validate(this.uri.qs.get('state'), this.uri.qs.get('code'));
              } else this.#store.ready = true;
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 774891343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
            }
            get error() {
              return _gclassroom.gclassroom.error;
            }
            get gclassroom() {
              return _gclassroom.gclassroom;
            }
            async validate(state, code) {
              try {
                this.fetching = true;
                await _gclassroom.gclassroom.callback(state, code);
                this.fetching = false;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1202960169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("@aimpact/chat/shared/components");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              gclassroom: {
                code,
                state,
                error,
                fetching
              }
            } = store;
            const [isFetching, setFetching] = React.useState(store.fetching || fetching);
            (0, _hooks2.useBinder)([store], () => setFetching(store.fetching));
            if (!textsReady || isFetching) return React.createElement(_components.PreloadScreen, null);
            if (!code || !state || error) {
              return React.createElement("div", {
                className: "page__container"
              }, React.createElement("h1", {
                className: "warning-text"
              }, "404"));
            }
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement(_alert.Alert, {
              type: "success"
            }, React.createElement("h3", null, texts.title), React.createElement("p", null, texts.subtitle)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ2hDOztZQUdSLE9BQ0NIO2NBQUtHLFNBQVMsRUFBQztZQUFpQixHQUMvQkgsb0JBQUNJLFlBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQVMsR0FDcEJMLGdDQUFLTCxLQUFLLENBQUNXLEtBQUssQ0FBTSxFQUN0Qk4sK0JBQUlMLEtBQUssQ0FBQ1ksUUFBUSxDQUFLLENBQ2hCLENBQ0g7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInFzIiwiZ2V0IiwidmFsaWRhdGUiLCJyZWFkeSIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzcm9vbSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJzdGF0ZSIsImNvZGUiLCJmZXRjaGluZyIsImNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJzdG9yZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJQcmVsb2FkU2NyZWVuIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==