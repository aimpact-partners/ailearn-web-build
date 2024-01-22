System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "react@18.2.0", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi003Image) {
      dependency_5 = _pragmateUi003Image;
    }, function (_pragmateUi003Components) {
      dependency_6 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_7 = _beyondJsReact18Widgets103Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
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
        hash: 2913627299,
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
              src: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/white-logo'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImR5bmFtaWNDaGlsZHJlbiIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJzaG93IiwiaGlkZSIsImV4cG9ydHMiLCJjb25zdHJ1Y3RvciIsIl9yZWFjdCIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwidGV4dFJlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixNQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztjQUUzRSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVcsWUFBWSxDQUFDTCxlQUFlLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlRLE1BQU1BLENBQUE7Y0FDVCxPQUFPWCxNQUFBLENBQUFXLE1BQU07WUFDZDtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCSyxNQUFPUyxZQUFZO1lBQ3hCLENBQUFMLGVBQWdCO1lBQ2hCLElBQUlBLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7WUFDN0I7WUFFQVUsWUFBWVYsZUFBd0I7Y0FDbkMsSUFBSSxDQUFDLENBQUFBLGVBQWdCLEdBQUdBLGVBQWU7WUFDeEM7O1VBQ0FTLE9BQUEsQ0FBQUosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFNLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixXQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLGVBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUdPO1VBQVUsU0FDUmEsTUFBTUEsQ0FBQztZQUFFUjtVQUFLLENBQTJCO1lBQ2pELE1BQU0sQ0FBQ2tCLFNBQVMsRUFBRUMsS0FBSyxDQUFDLEdBQUcsSUFBQUYsTUFBQSxDQUFBRyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFckQsSUFBSSxDQUFDSixTQUFTLEVBQUUsT0FBT0wsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsV0FBQSxDQUFBVSxPQUFPO2NBQUNDLE1BQU07Y0FBQ0MsSUFBSSxFQUFDO1lBQVMsRUFBRztZQUV4RCxPQUNDZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLSSxTQUFTLEVBQUUsMEJBQTBCNUIsS0FBSyxDQUFDRSxlQUFlLElBQUksVUFBVTtZQUFFLEdBQzlFVyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUMvQmYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBZSxLQUFLO2NBQUNDLEdBQUcsRUFBQztZQUFvRixFQUFHLENBQzdGLENBQ0QsRUFDTmpCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtJLFNBQVMsRUFBRSxtQ0FBbUM1QixLQUFLLENBQUNFLGVBQWUsSUFBSSxVQUFVO1lBQUUsR0FDdkZXLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUlJLFNBQVMsRUFBQztZQUFtQixHQUFFVCxLQUFLLENBQUNZLEtBQUssQ0FBTSxFQUNwRGxCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUdJLFNBQVMsRUFBQztZQUFzQixHQUFFVCxLQUFLLENBQUNhLFdBQVcsQ0FBSyxDQUN0RCxDQUNEO1VBRVIifQ==