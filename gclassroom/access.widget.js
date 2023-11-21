System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.14/model/gclassroom", "react@18.2.0", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0014ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0014ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Alert) {
      dependency_10 = _pragmateUi003Alert;
    }, function (_pragmateUi003Image) {
      dependency_11 = _pragmateUi003Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/gclassroom/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/image', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/gclassroom/access.widget');
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
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
        hash: 2597303807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("@aimpact/chat/shared/components");
          var _alert = require("pragmate-ui/alert");
          var _image = require("pragmate-ui/image");
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
            const [isFetching, setFetching] = _react.default.useState(store.fetching || fetching);
            (0, _hooks2.useBinder)([store], () => setFetching(store.fetching));
            if (!textsReady || isFetching) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: "page__container place-center"
            }, _react.default.createElement("div", {
              className: "card"
            }, _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error), _react.default.createElement("h4", null, texts.subtitle))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInFzIiwiZ2V0IiwidmFsaWRhdGUiLCJyZWFkeSIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJnY2xhc3Nyb29tIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJlcnJvciIsInN0YXRlIiwiY29kZSIsImZldGNoaW5nIiwiY2FsbGJhY2siLCJlIiwiY29uc29sZSIsIl9yZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9pbWFnZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiQWxlcnQiLCJ0eXBlIiwic3VidGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxN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