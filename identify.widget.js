System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-06/components/icons", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev06ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0046Dev06ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_10 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev06ComponentsUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/identify.widget');
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
        hash: 881954741,
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
              type: "student"
            }), _react.default.createElement(_card.Card, {
              type: "teacher"
            }), _react.default.createElement(_card.Card, {
              type: "institution"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2FyZCIsInR5cGUiLCJ1c2VNb2R1bGVDb250ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsImFjY2VwdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9jYXJkIiwiX2ltYWdlIiwiX3VpIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsInN1YnRpdGxlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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