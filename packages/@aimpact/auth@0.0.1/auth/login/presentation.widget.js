System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.27/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi006Image) {
      dependency_5 = _pragmateUi006Image;
    }, function (_pragmateUi006Components) {
      dependency_6 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_7 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_8 = _aimpactAilearnApp0027Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/auth/config', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-login-presentation",
        "attrs": ["dynamic-children"],
        "vspecifier": "@aimpact/auth@0.0.1/auth/login/presentation.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth/login/presentation.widget');
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
        hash: 618884279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {
            #dynamicChildren;
            get dynamicChildren() {
              return this.#dynamicChildren;
            }
            constructor(dynamicChildren) {
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
        hash: 323783497,
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
          var _config = require("@aimpact/auth/config");
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
              src: _config.default.params.APP_LOGO
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImR5bmFtaWNDaGlsZHJlbiIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJzaG93IiwiaGlkZSIsImV4cG9ydHMiLCJjb25zdHJ1Y3RvciIsIl9yZWFjdCIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2NvbmZpZyIsInRleHRSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJwYXJhbXMiLCJBUFBfTE9HTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLE1BQU1DLGVBQWUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxD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