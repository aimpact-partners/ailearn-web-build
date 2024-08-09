System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta1Image) {
      dependency_5 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Components) {
      dependency_6 = _pragmateUi100Beta1Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.3-test.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth/login/presentation",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['react', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-login-presentation",
        "attrs": ["dynamic-children"],
        "vspecifier": "@aimpact/auth@0.0.1/auth/login/presentation.widget"
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