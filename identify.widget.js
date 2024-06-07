System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-13/components/icons", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0"], function (_export, _context2) {
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
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0046Dev13ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0046Dev13ComponentsIcons;
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0046Dev13ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['framer-motion', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/identify.widget');
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
        hash: 2835659809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          // Card.tsx

          function Card({
            href,
            type
          }) {
            const {
              texts,
              typeSelected,
              setTypeSelected
            } = (0, _context.useModuleContext)();
            if (!texts[type]) return null;
            const {
              title,
              description,
              icon,
              message
            } = texts[type];
            const attrs = {
              link: {
                href,
                className: 'btn btn-secondary'
              },
              button: {
                variant: 'secondary',
                onClick: () => {
                  setTypeSelected(type);
                }
              }
            };
            const Control = href ? _components.Link : _components.Button;
            const attributes = href ? attrs.link : attrs.button;
            const isSelected = typeSelected && typeSelected === type;
            const cls = `card__container ${isSelected ? ' card--block' : ''}`;
            const onBack = () => setTypeSelected(null);
            if (typeSelected && !isSelected) return null;
            return _react.default.createElement(_ui.AnimatedContainer, {
              exit: {
                duration: 0.3,
                bottom: -100
              },
              className: cls
            }, isSelected ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figure", null, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("figcaption", null, _react.default.createElement("h2", null, title)), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, message))), _react.default.createElement("footer", {
              className: "card__actions"
            }, type === 'teacher' && _react.default.createElement(_components.Link, {
              href: "/organizations/join",
              className: "btn btn-primary"
            }, texts.actions.continue), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onBack
            }, texts.actions.back))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figure", null, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("figcaption", null, _react.default.createElement("h2", null, title))), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, description)), _react.default.createElement("footer", {
              className: "card__actions"
            }, _react.default.createElement(Control, {
              ...attributes
            }, texts.actions.accept))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/cards
      *****************************/

      ims.set('./views/cards', {
        hash: 1783154928,
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
              typeSelected
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
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h1", null, title), !typeSelected && _react.default.createElement("p", null, texts.description)), _react.default.createElement("div", {
              className: "cards-container"
            }, _react.default.createElement(_card.Card, {
              type: "student"
            }), _react.default.createElement(_card.Card, {
              type: "teacher"
            }), _react.default.createElement(_card.Card, {
              type: "institution",
              href: "/organizations/create"
            })))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3053690432,
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
        hash: 2205046601,
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
          var _selectedType = require("./selected-type");
          // App.tsx

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
              typeSelected
            };
            const Views = {
              cards: _cards.CardsContainer,
              type: _selectedType.SelectedType
            };
            const Control = typeSelected ? Views.type : Views.cards;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiQ2FyZCIsImhyZWYiLCJ0eXBlIiwidHlwZVNlbGVjdGVkIiwic2V0VHlwZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwibWVzc2FnZSIsImF0dHJzIiwibGluayIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiQ29udHJvbCIsIkxpbmsiLCJCdXR0b24iLCJhdHRyaWJ1dGVzIiwiaXNTZWxlY3RlZCIsImNscyIsIm9uQmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQW5pbWF0ZWRDb250YWluZXIiLCJleGl0IiwiZHVyYXRpb24iLCJib3R0b20iLCJGcmFnbWVudCIsIkFwcEljb24iLCJhY3Rpb25zIiwiY29udGludWUiLCJib3JkZXJlZCIsImJhY2siLCJhY2NlcHQiLCJfY2FyZCIsIkNhcmRzQ29udGFpbmVyIiwic2VsZWN0aW9uVGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ZyYW1lck1vdGlvbiIsIl9jYXJkcyIsIl9zZWxlY3RlZFR5cGUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiVmlld3MiLCJjYXJkcyIsIlNlbGVjdGVkVHlwZSIsIlByb3ZpZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NhcmQudHN4IiwiL3RzL3ZpZXdzL2NhcmRzLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0ZWQtdHlwZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7WUFFUjs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJELElBQUFVLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYs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