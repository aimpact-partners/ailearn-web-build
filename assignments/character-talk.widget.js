System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032ComponentsHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget');
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
        hash: 4015002199,
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
        hash: 3850554498,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsIkFJQXZhaWxhYmxlIiwiY3JlZGl0cyIsInRvdGFsIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJpc1JlYWR5IiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsYWJlbCIsImJ1dHRvblRleHQiLCJfdWkiLCJDaGF0Q29udHJvbCIsImVuc3VyZUNyZWRpdHMiLCJoYXNDcmVkaXRzIiwiQ2hhdFByZWxvYWQiLCJ0ZXh0Iiwibm9DcmVkaXRzIiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJEZXNrdG9wVmlldyIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIlBhZ2VDb250YWluZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsImltYWdlIiwiZW50aXR5IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfbW9iaWxlIiwiX2Rlc2t0b3AiLCJfaG9va3MyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEl0ZW1zIiwic2V0VGl0bGUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIkNvbnRyb2wiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0s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