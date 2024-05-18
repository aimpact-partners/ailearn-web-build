System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-dev.46/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.46/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32-dev.46/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev46CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Dev46CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev46ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Dev46ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032Dev46ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032Dev46ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.46"], ["@aimpact/ailearn-app", "0.0.32-dev.46"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.46/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.46/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.46/assignments/debate.widget');
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
        hash: 2033716279,
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
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            get canConsumeCredits() {
              return this.#found;
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
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                this.#found = true;
                super.ready = true;
                console.log(3);
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
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
        hash: 3226836486,
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
        hash: 3951820561,
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
            console.log(40, store.model.image, store.model);
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement(_chat.ChatControl, null), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              type: store.model.type,
              src: store.model.picture,
              entity: "activity"
            }), _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.model.description))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1432705351,
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
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [title, setTitle] = _react.default.useState('');
            const size = (0, _hooks2.useMediaQuery)();
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
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
        hash: 1703638579,
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
              src: store.model.picture,
              type: store.model.type,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIl91aSIsIkNoYXRDb250cm9sIiwiZW5zdXJlQ3JlZGl0cyIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiRGVza3RvcFZpZXciLCJpbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIlBhZ2VDb250YWluZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJkZXNjcmlwdGlvbiIsIl9ob29rcyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VGl0bGUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIkNvbnRyb2wiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hD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