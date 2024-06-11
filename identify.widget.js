System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-15/components/icons", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0046Dev15ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0046Dev15ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/identify.widget');
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
        hash: 2575454818,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get isMinor() {
              return this.user.age < 18;
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

      /*********************************
      INTERNAL MODULE: ./views/card/base
      *********************************/

      ims.set('./views/card/base', {
        hash: 164960418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardBase = CardBase;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          // Card.tsx

          function CardBase({
            type,
            href
          }) {
            const {
              texts,
              setTypeSelected
            } = (0, _context.useModuleContext)();
            if (!texts[type]) return null;
            const Control = href ? _components.Link : _components.Button;
            const {
              title,
              description,
              icon
            } = texts[type];
            const attrs = {
              link: {
                href,
                className: 'btn btn-secondary'
              },
              button: {
                variant: 'secondary',
                onClick: () => setTypeSelected(type)
              }
            };
            const attributes = href ? attrs.link : attrs.button;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figure", null, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("figcaption", null, _react.default.createElement("h2", null, title))), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, description)), _react.default.createElement("footer", {
              className: "card__actions"
            }, _react.default.createElement(Control, {
              ...attributes
            }, texts.actions.accept)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/card/index
      **********************************/

      ims.set('./views/card/index', {
        hash: 2128331058,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _selected = require("./selected");
          var _base = require("./base");
          // Card.tsx

          function Card(props) {
            const {
              href,
              type
            } = props;
            const {
              texts,
              typeSelected
            } = (0, _context.useModuleContext)();
            if (!texts[type]) return null;
            const isSelected = typeSelected && typeSelected === type;
            const cls = `card__container ${isSelected ? ' card--block' : ''}`;
            const exitAnimation = {
              duration: 0.3,
              bottom: -100
            };
            if (typeSelected && !isSelected) return null;
            const Control = isSelected ? _selected.CardSelected : _base.CardBase;
            return _react.default.createElement(_ui.AnimatedContainer, {
              exit: exitAnimation,
              className: cls
            }, _react.default.createElement(Control, {
              ...props
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/card/selected
      *************************************/

      ims.set('./views/card/selected', {
        hash: 2132085253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardSelected = CardSelected;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          // Card.tsx

          function CardSelected({
            type
          }) {
            const {
              texts,
              setTypeSelected
            } = (0, _context.useModuleContext)();
            if (!texts[type]) return null;
            const {
              title,
              icon,
              message
            } = texts[type];
            const isAdmin = type === 'teacher' || type === 'admin';
            const onBack = () => setTypeSelected(null);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figure", null, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("figcaption", null, _react.default.createElement("h2", null, title)), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement(_components.HtmlWrapper, null, message))), _react.default.createElement("footer", {
              className: "card__actions"
            }, isAdmin && _react.default.createElement(_components.Link, {
              href: "/organizations/join",
              className: "btn btn-primary"
            }, texts.actions.continue), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onBack
            }, texts.actions.back)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/card/types
      **********************************/

      ims.set('./views/card/types', {
        hash: 1759672895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/cards
      *****************************/

      ims.set('./views/cards', {
        hash: 1682566228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardsContainer = CardsContainer;
          var _react = require("react");
          var _context = require("./context");
          var _card = require("./card");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // App.tsx

          //@ts-ignore

          function CardsContainer() {
            const {
              texts,
              typeSelected,
              store
            } = (0, _context.useModuleContext)();
            const title = typeSelected ? texts[typeSelected].selectionTitle : texts.title;
            return _react.default.createElement(_ui.AnimatedContainer, {
              exit: {
                duration: 0.3,
                bottom: -100
              },
              className: "general-container"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h1", null, title)), _react.default.createElement("div", {
              className: "cards-container"
            }, _react.default.createElement(_card.Card, {
              type: "student"
            }), !store.isMinor && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_card.Card, {
              type: "teacher"
            }), _react.default.createElement(_card.Card, {
              type: "institution",
              href: "/organizations/create"
            }))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1746411293,
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
        hash: 1116627097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _framerMotion = require("framer-motion");
          var _cards = require("./cards");
          // App.tsx

          //@ts-ignore

          function View({
            store
          }) {
            const {
              texts
            } = store;
            const [ready, setReady] = _react.default.useState(store.ready);
            const [typeSelected, setTypeSelected] = _react.default.useState();
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return 'preload...';
            const value = {
              texts,
              setTypeSelected,
              typeSelected,
              store
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(_cards.CardsContainer, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/selected-type
      *************************************/

      ims.set('./views/selected-type', {
        hash: 67194527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectedType = SelectedType;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // App.tsx

          //@ts-ignore

          function SelectedType({}) {
            const {
              texts,
              typeSelected
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.AnimatedContainer, {
              className: "general-container"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement("div", {
              className: "message-container"
            }, _react.default.createElement("h3", null, texts[typeSelected].message))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiQ2FyZEJhc2UiLCJ0eXBlIiwiaHJlZiIsInNldFR5cGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJDb250cm9sIiwiTGluayIsIkJ1dHRvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiYXR0cnMiLCJsaW5rIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhdHRyaWJ1dGVzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFwcEljb24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiX3VpIiwiX3NlbGVjdGVkIiwiX2Jhc2UiLCJDYXJkIiwicHJvcHMiLCJ0eXBlU2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwiY2xzIiwiZXhpdEFuaW1hdGlvbiIsImR1cmF0aW9uIiwiYm90dG9tIiwiQ2FyZFNlbGVjdGVkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJleGl0IiwibWVzc2FnZSIsImlzQWRtaW4iLCJvbkJhY2siLCJIdG1sV3JhcHBlciIsImNvbnRpbnVlIiwiYm9yZGVyZWQiLCJiYWNrIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY2FyZCIsIkNhcmRzQ29udGFpbmVyIiwic2VsZWN0aW9uVGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ZyYW1lck1vdGlvbiIsIl9jYXJkcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJQcm92aWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJTZWxlY3RlZFR5cGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jYXJkL2Jhc2UudHN4IiwiL3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NhcmQvc2VsZWN0ZWQudHN4IiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NhcmRzLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0ZWQtdHlwZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcs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