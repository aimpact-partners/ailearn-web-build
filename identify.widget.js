System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/icons', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/identify.widget",
        "is": "page",
        "route": "/identify"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/identify.widget');
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

      /****************************
      INTERNAL MODULE: ./views/card
      ****************************/

      ims.set('./views/card', {
        hash: 3034313751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          // Card.tsx

          const Card = ({
            type
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              title,
              description,
              buttonText,
              iconName
            } = texts[type];
            return _react.default.createElement("div", {
              className: "card__container"
            }, _react.default.createElement(_icons.Icon, {
              name: iconName
            }), _react.default.createElement("h2", {
              className: "card-title"
            }, title), _react.default.createElement("p", {
              className: "card-description"
            }, description), _react.default.createElement("button", {
              className: "button",
              onClick: () => {}
            }, texts.actions.accept));
          };
          exports.Card = Card;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4184337210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContextProvider = void 0;
          var _react = require("react");
          // ModuleContext.tsx

          const ModuleContext = (0, _react.createContext)(undefined);
          const useModuleContext = () => {
            const context = (0, _react.useContext)(ModuleContext);
            if (!context) {
              throw new Error('useModuleContext must be used within a ModuleContextProvider');
            }
            return context;
          };
          exports.useModuleContext = useModuleContext;
          const ModuleContextProvider = ({
            children,
            texts,
            textsReady
          }) => {
            return _react.default.createElement(ModuleContext.Provider, {
              value: {
                texts,
                textsReady
              }
            }, children);
          };
          exports.ModuleContextProvider = ModuleContextProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 585891000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _card = require("./card");
          // App.tsx

          function View() {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier); // Reemplazar con el specifier real
            if (!textsReady) return null;
            return _react.default.createElement(_context.ModuleContextProvider, {
              texts: texts,
              textsReady: textsReady
            }, _react.default.createElement("div", {
              className: "app-container"
            }, textsReady && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_card.Card, {
              type: "institution"
            }), _react.default.createElement(_card.Card, {
              type: "teacher"
            }), _react.default.createElement(_card.Card, {
              type: "student"
            }), _react.default.createElement(_card.Card, {
              type: "parent"
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2ljb25zIiwiX2NvbnRleHQiLCJDYXJkIiwidHlwZSIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwiaWNvbk5hbWUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJuYW1lIiwib25DbGljayIsImFjdGlvbnMiLCJhY2NlcHQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJNb2R1bGVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRleHRzUmVhZHkiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NhcmQiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIkZyYWdtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9B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