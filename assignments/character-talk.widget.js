System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.34.dev-01/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, DesktopView, View, MobileView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    DesktopView: void 0,
    View: void 0,
    MobileView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0034Dev01CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0034Dev01CoinsLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_8 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0034Dev01ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0034Dev01ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp0034Dev01ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.34.dev-01"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.34.dev-01/assignments/character-talk.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1310206847,
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
            show() {
              // todo: @carlos ADd validation error if the vars are not present
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1294694356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #assignmentId;
            #activityId;
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #chatId;
            get chatId() {
              return this.#chatId;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            get AIAvailable() {
              return this.#model?.credits?.total > 0;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                this.#chatId = chatId;
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = new _tracking.Tracking({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _coinsLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
                this.triggerEvent();
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/characters-card
      ***************************************/

      ims.set('./views/characters-card', {
        hash: 574123641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterCard = CharacterCard;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /* bundle */ // import { Image } from 'pragmate-ui/image';
          function CharacterCard() {
            const {
              texts
            } = (0, _context.useConversationContext)();
            const onActionClick = event => {
              console.log('clickAvatar');
            };
            return _react.default.createElement("section", {
              className: "character-card__container"
            }, _react.default.createElement("span", {
              className: "character-card__title"
            }, texts.selectTitle), _react.default.createElement("div", {
              className: "character-card__actions"
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "character-card__button mt-15",
              onClick: onActionClick,
              label: texts.buttonText
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/chat
      ****************************/

      ims.set('./views/chat', {
        hash: 19038571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ChatControl() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            const onClick = () => _coinsLayout.LayoutBroker.ensureCredits(() => {});
            const [hasCredits, setHasCredits] = _react.default.useState(store.hasCredits);
            //'credits.change'
            (0, _hooks.useBinder)([store.model], () => {
              setHasCredits(store.hasCredits);
            }, 'credits.change');
            if (!hasCredits) {
              return _react.default.createElement(_ui.ChatPreload, {
                text: texts.noCredits,
                onClick: onClick
              });
            }
            return _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 563708756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConversationContext = exports.ConversationContext = void 0;
          var _react = require("react");
          const ConversationContext = exports.ConversationContext = _react.default.createContext({});
          const useConversationContext = () => _react.default.useContext(ConversationContext);
          exports.useConversationContext = useConversationContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 362503832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chat = require("./chat");
          /*bundle*/
          function DesktopView() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              icon: store.model.type,
              title: store.model.title,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement(_chat.ChatControl, null), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.model.description)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4065023885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _mobile = require("./mobile");
          var _desktop = require("./desktop");
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)();
            const [items, setItems] = (0, _react.useState)(store.items);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const size = (0, _hooks2.useMediaQuery)();
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              chatId,
              assignmentId,
              store,
              items
            };
            const Control = size === 'md' || size === 'lg' ? _desktop.DesktopView : _mobile.MobileView;
            return _react.default.createElement(_context.ConversationContext.Provider, {
              value: contextValue
            }, _react.default.createElement(Control, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 2362117843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chat = require("./chat");
          /*bundle*/
          function MobileView() {
            const {
              store,
              chatId,
              assignmentId
            } = (0, _context.useConversationContext)();
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--container"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              type: store.model.type,
              src: store.model.picture,
              entity: "activity"
            }), _react.default.createElement(_chat.ChatControl, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/characters-card",
        "from": "CharacterCard",
        "name": "CharacterCard"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'CharacterCard') && _export("CharacterCard", CharacterCard = require ? require('./views/characters-card').CharacterCard : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJ0cmFja2luZyIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJBSUF2YWlsYWJsZSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsYWJlbCIsImJ1dHRvblRleHQiLCJfdWkiLCJfaG9va3MiLCJDaGF0Q29udHJvbCIsImVuc3VyZUNyZWRpdHMiLCJzZXRIYXNDcmVkaXRzIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDaGF0UHJlbG9hZCIsInRleHQiLCJub0NyZWRpdHMiLCJDb252ZXJzYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIkRlc2t0b3BWaWV3IiwiQWN0aXZpdHlIZWFkZXIiLCJpY29uIiwidHlwZSIsInRpdGxlIiwiUGFnZUNvbnRhaW5lciIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImRlc2NyaXB0aW9uIiwiX21vYmlsZSIsIl9kZXNrdG9wIiwiX2hvb2tzMiIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIkNvbnRyb2wiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcs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