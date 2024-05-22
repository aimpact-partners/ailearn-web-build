System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.33.dev-01/coins-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.33.dev-01/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.33.dev-01/components/hooks", "pragmate-ui@0.1.1/collapsible", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.33.dev-01/components/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    View: void 0
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
    }, function (_aimpactAilearnApp0033Dev01CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0033Dev01CoinsLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_8 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0033Dev01ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0033Dev01ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk100Session) {
      dependency_15 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0033Dev01ComponentsHooks) {
      dependency_17 = _aimpactAilearnApp0033Dev01ComponentsHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_18 = _pragmateUi011Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0033Dev01ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp0033Dev01ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.33.dev-01"], ["@aimpact/ailearn-app", "0.0.33.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.33.dev-01/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/components/hooks', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.33.dev-01/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.33.dev-01/assignments/content-theory.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 863783611,
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
              console.log('si');
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('id'));
              this.#store.playable = true;
            }
            hide() {
              this.#store.playable = false;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2065329598,
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
            #playable;
            get playable() {
              return this.#playable;
            }
            set playable(value) {
              if (this.#playable === value) {
                return;
              }
              this.#playable = value;
              this.triggerEvent();
            }
            #tracking;
            get tracking() {
              return this.#tracking;
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

      /*******************************************
      INTERNAL MODULE: ./views/animation-container
      *******************************************/

      ims.set('./views/animation-container', {
        hash: 1836558385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedContainer({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
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

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1536175329,
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

      /*************************************
      INTERNAL MODULE: ./views/controls/chat
      *************************************/

      ims.set('./views/controls/chat', {
        hash: 2680075782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityChat = ActivityChat;
          var _react = require("react");
          var _context = require("../context");
          var _animationContainer = require("../animation-container");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityChat() {
            const {
              chatId,
              assignmentId,
              store
            } = (0, _context.useConversationContext)();
            const [playable, setPlayable] = _react.default.useState(store.playable);
            (0, _hooks.useBinder)([store], () => setPlayable(store.playable));
            return _react.default.createElement(_animationContainer.AnimatedContainer, {
              className: "ailearn-chat-container"
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered",
              playable: playable
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/controls/content-desktop
      ************************************************/

      ims.set('./views/controls/content-desktop', {
        hash: 2587208267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityDesktopContent = ActivityDesktopContent;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animationContainer = require("../animation-container");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _synsthesisDescription = require("./synsthesis-description");
          function ActivityDesktopContent() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            const {
              article,
              dyslexia,
              audios
            } = store.model.materials;
            const content = _session.sessionWrapper.user.accessibilityMode && !!dyslexia ? dyslexia : article;
            return _react.default.createElement(_animationContainer.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, null, content)), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement("div", null, !!audios?.length && _react.default.createElement(_ui.ActivityAudio, {
              id: store.model.id
            }), _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              entity: "activity",
              type: store.model.type
            }), _react.default.createElement(_synsthesisDescription.SynthesisDescription, null)))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/controls/content
      ****************************************/

      ims.set('./views/controls/content', {
        hash: 3179485631,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          var _contentDesktop = require("./content-desktop");
          var _session = require("@aimpact/chat-sdk/session");
          function ActivityContent() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'lg') return _react.default.createElement(_contentDesktop.ActivityDesktopContent, null);
            const {
              article,
              synthesis,
              dyslexia,
              audios
            } = store.model.materials;
            const content = _session.sessionWrapper.user.accessibilityMode && !!dyslexia ? dyslexia : article;
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--container"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), !!audios?.length && _react.default.createElement(_ui.ActivityAudio, {
              id: store.model.id
            }), _react.default.createElement("div", {
              className: "article-content"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement(_react.default.Fragment, null, texts.article)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_markdown.Markdown, null, content)))), synthesis && _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement(_react.default.Fragment, null, texts.synthesis)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_markdown.Markdown, null, synthesis)))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/controls/synsthesis-description
      *******************************************************/

      ims.set('./views/controls/synsthesis-description', {
        hash: 661182598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SynthesisDescription = SynthesisDescription;
          var _react = require("react");
          var _context = require("../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          function SynthesisDescription() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            const {
              article,
              synthesis
            } = store.model.materials;
            const title = synthesis ? texts.synthesis : texts.description;
            const content = synthesis ? synthesis : store.model.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, title), _react.default.createElement(_markdown.Markdown, null, content));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 689508433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _content = require("./controls/content");
          var _chat = require("./controls/chat");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(false);
            const [items] = (0, _react.useState)(store.items);
            const [tab, setTab] = _react.default.useState('content'); // ['content', 'chat'
            const {
              texts
            } = store;
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const Control = tab === 'content' ? _content.ActivityContent : _chat.ActivityChat;
            const icon = tab === 'content' ? 'chat' : store.model.type;
            const handleButtonClick = () => {
              _coinsLayout.LayoutBroker.ensureCredits(() => setTab(tab === 'content' ? 'chat' : 'content'));
            };
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items,
              playable: store.playable
            };
            return _react.default.createElement(_context.ConversationContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, null)), _react.default.createElement(_framerMotion.motion.button, {
              className: "floating__button",
              onClick: handleButtonClick
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            })));
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
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'CharacterCard') && _export("CharacterCard", CharacterCard = require ? require('./views/characters-card').CharacterCard : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsInBsYXlhYmxlIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29pbnNMYXlvdXQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiY2hhdElkIiwicmVhZHkiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwidHJpZ2dlckV2ZW50IiwidHJhY2tpbmciLCJjb25zdHJ1Y3RvciIsIm9uIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJpZCIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJzZWxlY3RUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGFiZWwiLCJidXR0b25UZXh0IiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FuaW1hdGlvbkNvbnRhaW5lciIsIl91aSIsIl9ob29rcyIsIkFjdGl2aXR5Q2hhdCIsInNldFBsYXlhYmxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiX3Nlc3Npb24iLCJfbWFya2Rvd24iLCJfc3luc3RoZXNpc0Rlc2NyaXB0aW9uIiwiQWN0aXZpdHlEZXNrdG9wQ29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsIk1hcmtkb3duIiwibGVuZ3RoIiwiQWN0aXZpdHlBdWRpbyIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsInR5cGUiLCJTeW50aGVzaXNEZXNjcmlwdGlvbiIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3ludGhlc2lzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ0YWIiLCJzZXRUYWIiLCJDb250cm9sIiwiaWNvbiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJidXR0b24iLCJBcHBJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQtZGVza3RvcC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvc3luc3RoZXNpcy1kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztjQUNqQixJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxH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