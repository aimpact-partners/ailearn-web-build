System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-beta.13/coins-layout.widget", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-beta.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.32-beta.13/components/hooks", "pragmate-ui@0.1.1/collapsible", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32-beta.13/components/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032Beta13CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Beta13CoinsLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Beta13ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Beta13ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0032Beta13ComponentsHooks) {
      dependency_16 = _aimpactAilearnApp0032Beta13ComponentsHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_17 = _pragmateUi011Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0032Beta13ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp0032Beta13ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/ailearn-app/components/hooks', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.13/assignments/content-theory.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3738416228,
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
        hash: 4139591747,
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
                this.#found = true;
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
        hash: 2356643454,
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
            console.log(20, store.model.type, store.model);
            return _react.default.createElement(_animationContainer.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, null, content)), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement("div", null, !!audios?.length && _react.default.createElement(_ui.ActivityAudio, {
              id: store.model.id
            }), _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.image,
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
        hash: 2579562248,
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
              src: store.model.image,
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
        hash: 1091778566,
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
            const [title, setTitle] = _react.default.useState('');
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
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyaWdnZXJFdmVudCIsImNvbnN0cnVjdG9yIiwib24iLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJfdWkiLCJfaG9va3MiLCJBY3Rpdml0eUNoYXQiLCJzZXRQbGF5YWJsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX3N5bnN0aGVzaXNEZXNjcmlwdGlvbiIsIkFjdGl2aXR5RGVza3RvcENvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJ0eXBlIiwiTWFya2Rvd24iLCJsZW5ndGgiLCJBY3Rpdml0eUF1ZGlvIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJpbWFnZSIsImVudGl0eSIsIlN5bnRoZXNpc0Rlc2NyaXB0aW9uIiwiX2NvbGxhcHNpYmxlIiwiX2NvbnRlbnREZXNrdG9wIiwiQWN0aXZpdHlDb250ZW50Iiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJzeW50aGVzaXMiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkZyYWdtZW50IiwiQ29sbGFwc2libGVDb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl9jb250ZW50IiwiX2NoYXQiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInNldFRpdGxlIiwidGFiIiwic2V0VGFiIiwiQ29udHJvbCIsImljb24iLCJoYW5kbGVCdXR0b25DbGljayIsImVuc3VyZUNyZWRpdHMiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwiYnV0dG9uIiwiQXBwSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb250cm9scy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LWRlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL3N5bnN0aGVzaXMtZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FB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