System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@aimpact/chat@1.0.2/shared/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_9 = _pragmateUi100Beta2Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_12 = _aimpactChat102SharedComponents;
    }, function (_aimpactAilearnApp016Dev04ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp016Dev04ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/assignments/character-talk.widget');
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
        hash: 3675774796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              return this.#tracking?.credits?.total > 0;
            }
            get AIAvailable() {
              return this.#tracking?.credits?.total > 0;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                this.#chatId = chatId;
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
                this.triggerEvent();
              } catch (e) {
                console.error(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
                this.triggerEvent();
              }
            }
            updateTracking = async () => {
              const tracking = _tracking.Tracking.get({
                assignmentId: this.#assignmentId
              });
              this.#tracking = tracking;
              const activity = await tracking.activities.load({
                id: this.#activityId
              });
            };
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

      /************************************
      INTERNAL MODULE: ./views/chat-control
      ************************************/

      ims.set('./views/chat-control', {
        hash: 2680380819,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControlComponent = ChatControlComponent;
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ChatControlComponent() {
            const {
              chatId,
              assignmentId,
              store
            } = (0, _context.useConversationContext)();
            const [playable, setPlayable] = _react.default.useState(store.playable);
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => setPlayable(store.playable));
            _react.default.useEffect(() => {
              ref.current.addEventListener('onMessageSent', store.updateTracking);
            }, []);
            return _react.default.createElement("aimpact-chat-control", {
              ref: ref,
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered",
              playable: playable
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/chat
      ****************************/

      ims.set('./views/chat', {
        hash: 3908574170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chatControl = require("./chat-control");
          function ChatControl() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            const onClick = () => _mainLayout.LayoutBroker.ensureCredits(() => {});
            const [hasCredits, setHasCredits] = _react.default.useState(store.hasCredits);
            (0, _hooks.useBinder)([store.model.tracking], () => {
              setHasCredits(store.hasCredits);
            }, 'credits.change');
            if (!hasCredits) {
              return _react.default.createElement(_ui.ChatPreload, {
                text: texts.noCredits,
                onClick: onClick
              });
            }
            return _react.default.createElement(_chatControl.ChatControlComponent, null);
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
        hash: 1786098072,
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
            const [ready, setReady] = (0, _react.useState)(store.ready);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsInRyYWNraW5nIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiY2hhdElkIiwicmVhZHkiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiaWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwidXBkYXRlVHJhY2tpbmciLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsYWJlbCIsImJ1dHRvblRleHQiLCJfaG9va3MiLCJDaGF0Q29udHJvbENvbXBvbmVudCIsInBsYXlhYmxlIiwic2V0UGxheWFibGUiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsInVzZUJpbmRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiX3VpIiwiX2NoYXRDb250cm9sIiwiQ2hhdENvbnRyb2wiLCJlbnN1cmVDcmVkaXRzIiwic2V0SGFzQ3JlZGl0cyIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiRGVza3RvcFZpZXciLCJBY3Rpdml0eUhlYWRlciIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiZGVzY3JpcHRpb24iLCJfbW9iaWxlIiwiX2Rlc2t0b3AiLCJfaG9va3MyIiwic2V0UmVhZHkiLCJzZXRJdGVtcyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiQ29udHJvbCIsIk1vYmlsZVZpZXciLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY2hhdC1jb250cm9sLnRzeCIsIi90cy92aWV3cy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFB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