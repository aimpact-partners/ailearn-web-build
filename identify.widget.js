System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32/components/ui"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_10 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11]]);
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
        hash: 3700837159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              super.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/card
      ****************************/

      ims.set('./views/card', {
        hash: 2583675073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          // Card.tsx

          const Card = ({
            type
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            if (!texts[type]) return null;
            const {
              title,
              description,
              icon
            } = texts[type];
            return _react.default.createElement("div", {
              className: "card__container"
            }, _react.default.createElement("figure", null, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("figcaption", null, _react.default.createElement("h2", null, title))), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, description)), _react.default.createElement("footer", {
              className: "card__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, texts.actions.accept)));
          };
          exports.Card = Card;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2702009434,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 107048155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _card = require("./card");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // App.tsx

          //@ts-ignore

          function View({
            store
          }) {
            const {
              texts
            } = store;
            const [ready, setReady] = _react.default.useState(store.ready);
            console.log(0.1, texts);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return 'preload...';
            const value = {
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h1", null, texts.title), _react.default.createElement("h3", null, texts.subtitle)), _react.default.createElement("div", {
              className: "cards-container"
            }, _react.default.createElement(_card.Card, {
              type: "institution"
            }), _react.default.createElement(_card.Card, {
              type: "teacher"
            }), _react.default.createElement(_card.Card, {
              type: "student"
            }), _react.default.createElement(_image.Image, {
              className: "bg-image",
              src: "/assets/rvd/bg/branding.png",
              alt: "RVD"
            }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2FyZCIsInR5cGUiLCJ1c2VNb2R1bGVDb250ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsImFjY2VwdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9jYXJkIiwiX2ltYWdlIiwiX3VpIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VCaW5kZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJzdWJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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