System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-dev.48/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32-dev.48/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev48CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Dev48CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032Dev48ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032Dev48ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/assignments/debate.widget');
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
        hash: 334831446,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIl91aSIsIkNoYXRDb250cm9sIiwiZW5zdXJlQ3JlZGl0cyIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiRGVza3RvcFZpZXciLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiaWNvbiIsInR5cGUiLCJQYWdlQ29udGFpbmVyIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJDb250cm9sIiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElB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