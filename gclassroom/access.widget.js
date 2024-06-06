System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.46.dev-09/model/gclassroom", "react@18.2.0", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
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
    }, function (_aimpactAilearnApp0046Dev09ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0046Dev09ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/gclassroom/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/image', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/gclassroom/access.widget');
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
        hash: 1084354450,
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
            }, error?.text), _react.default.createElement("h4", null, texts.subtitle))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInFzIiwiZ2V0IiwidmFsaWRhdGUiLCJyZWFkeSIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJnY2xhc3Nyb29tIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJlcnJvciIsInN0YXRlIiwiY29kZSIsImZldGNoaW5nIiwiY2FsbGJhY2siLCJlIiwiY29uc29sZSIsIl9yZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9pbWFnZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiQWxlcnQiLCJ0eXBlIiwidGV4dCIsInN1YnRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0Es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