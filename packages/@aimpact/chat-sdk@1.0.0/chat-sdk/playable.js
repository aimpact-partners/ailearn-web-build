System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/voice"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_4 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100Voice) {
      dependency_5 = _aimpactChatSdk100Voice;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/chat-sdk/playable"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/chat-sdk/widgets/playable', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.0.0/chat-sdk/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
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
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4168963323,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _voice = require("@aimpact/chat-sdk/voice");
          const text = `
# Hola como te va ? 

## pensamientos 

yo pensaba que esto era una prueba pero no lo es`;
          const text2 = 'hola como te a ti? que me cuentas?';
          const voice = new _voice.Voice({
            language: 'es',
            rate: 1
          });
          voice.langue = 'es';
          /*bundle*/
          function View() {
            const playable = true;
            const onClickWord = e => {
              console.log('clicked', e);
            };
            return React.createElement("div", null, React.createElement("h1", null, "Playable component"), React.createElement(_playable.Playable, {
              content: text2,
              id: 'id',
              player: voice,
              playable: playable,
              onClickWord: onClickWord
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3QiLCJfcGxheWFibGUiLCJfdm9pY2UiLCJ0ZXh0IiwidGV4dDIiLCJ2b2ljZSIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwibGFuZ3VlIiwicGxheWFibGUiLCJvbkNsaWNrV29yZCIsImUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIlBsYXlhYmxlIiwiY29udGVudCIsImlkIiwicGxheWVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxNQUFPSSxZQUFZO1VBQTJCSyxPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEcEQsSUFBQU0sS0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsU0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsTUFBQSxHQUFBZixPQUFBO1VBQ0EsTUFBTWdCLElBQUksR0FBRzs7Ozs7aURBS29DO1VBRWpELE1BQU1DLEtBQUssR0FBRyxvQ0FBb0M7VUFDbEQsTUFBTUMsS0FBSyxHQUFHLElBQUlILE1BQUEsQ0FBQUksS0FBSyxDQUFDO1lBQUVDLFFBQVEsRUFBRSxJQUFJO1lBQUVDLElBQUksRUFBRTtVQUFDLENBQUUsQ0FBQztVQUNwREgsS0FBSyxDQUFDSSxNQUFNLEdBQUcsSUFBSTtVQUNaO1VBQVUsU0FDUmIsSUFBSUEsQ0FBQTtZQUNaLE1BQU1jLFFBQVEsR0FBRyxJQUFJO1lBQ3JCLE1BQU1DLFdBQVcsR0FBR0MsQ0FBQyxJQUFHO2NBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVGLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQ0QsT0FDQ1osS0FBQSxDQUFBZSxhQUFBLGNBQ0NmLEtBQUEsQ0FBQWUsYUFBQSxrQ0FBMkIsRUFDM0JmLEtBQUEsQ0FBQWUsYUFBQSxDQUFDZCxTQUFBLENBQUFlLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFYixLQUFLO2NBQUVjLEVBQUUsRUFBQyxJQUFJO2NBQUNDLE1BQU0sRUFBRWQsS0FBSztjQUFFSyxRQUFRLEVBQUVBLFFBQVE7Y0FBRUMsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDNUY7VUFFUiJ9