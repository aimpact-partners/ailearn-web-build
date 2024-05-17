System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-dev.44/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.44/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32-dev.44/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, DesktopView, View, MobileView, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032Dev44CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Dev44CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev44ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Dev44ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032Dev44ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032Dev44ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.44/assignments/character-talk.widget');
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
        hash: 2711739193,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #assignmentId;
            #activityId;
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
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#model);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#chatId = chatId;
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.isReady;
                await activity.load();
                _coinsLayout.LayoutBroker.addModel(this.#model);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
                // routing.replaceState({}, '', '/not-found');
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
        hash: 1886151761,
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
          function ChatControl() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            const onClick = () => _coinsLayout.LayoutBroker.ensureCredits(() => {});
            if (!store.hasCredits) {
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
        hash: 97198126,
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
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement(_chat.ChatControl, null), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.image,
              entity: "assignment"
            }), _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.model.description))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4117034255,
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
            const [title, setTitle] = _react.default.useState('');
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const size = (0, _hooks2.useMediaQuery)();
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
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
        hash: 906907669,
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
              src: store.model.image,
              entity: "assignment"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJBSUF2YWlsYWJsZSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsImUiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZWxlY3RUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGFiZWwiLCJidXR0b25UZXh0IiwiX3VpIiwiQ2hhdENvbnRyb2wiLCJlbnN1cmVDcmVkaXRzIiwiQ2hhdFByZWxvYWQiLCJ0ZXh0Iiwibm9DcmVkaXRzIiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJEZXNrdG9wVmlldyIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIlBhZ2VDb250YWluZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsImltYWdlIiwiZW50aXR5IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfbW9iaWxlIiwiX2Rlc2t0b3AiLCJfaG9va3MyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEl0ZW1zIiwic2V0VGl0bGUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIkNvbnRyb2wiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0s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