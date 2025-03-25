System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/base", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_2 = _beyondJsReact18Widgets113Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_3 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_5 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_7 = _beyondJsReact18Widgets113Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/auth/login/presentation",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['react', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-login-presentation",
        "attrs": ["dynamic-children"],
        "vspecifier": "@aimpact/ailearn-app@0.3.29/auth/login/presentation.widget"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1036550463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              const dynamicChildren = JSON.parse(this.attributes.get('dynamic-children'));
              this.#store = new _store.StoreManager(dynamicChildren);
              return this.#store;
            }
            get Widget() {
              return _views.Widget;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
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
        hash: 3376796810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #dynamicChildren;
            get dynamicChildren() {
              return this.#dynamicChildren;
            }
            constructor(dynamicChildren) {
              super();
              this.#dynamicChildren = dynamicChildren;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1174167929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Widget({
            store
          }) {
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            return _react.default.createElement("div", {
              className: `presentation-container ${store.dynamicChildren && ' visible'}`
            }, _react.default.createElement("div", {
              className: 'presentation-header__container'
            }, _react.default.createElement("div", {
              className: 'logo__container'
            }, _react.default.createElement(_image.Image, {
              src: '/assets/eduscrum/logo.png'
            }))), _react.default.createElement("div", {
              className: `presentation-content__container ${store.dynamicChildren && ' visible'}`
            }, _react.default.createElement("h2", {
              className: 'content__title h1'
            }, texts.title), _react.default.createElement("p", {
              className: 'content__description'
            }, texts.description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Widget",
        "name": "Widget"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./views/index').Widget : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImR5bmFtaWNDaGlsZHJlbiIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJzaG93IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInRleHRSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixNQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztjQUUz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