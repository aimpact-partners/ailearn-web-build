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
        hash: 1286272097,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyaWdnZXJFdmVudCIsImNvbnN0cnVjdG9yIiwib24iLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJfdWkiLCJfaG9va3MiLCJBY3Rpdml0eUNoYXQiLCJzZXRQbGF5YWJsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX3N5bnN0aGVzaXNEZXNjcmlwdGlvbiIsIkFjdGl2aXR5RGVza3RvcENvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJ0eXBlIiwiTWFya2Rvd24iLCJsZW5ndGgiLCJBY3Rpdml0eUF1ZGlvIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiU3ludGhlc2lzRGVzY3JpcHRpb24iLCJfY29sbGFwc2libGUiLCJfY29udGVudERlc2t0b3AiLCJBY3Rpdml0eUNvbnRlbnQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInN5bnRoZXNpcyIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiRnJhZ21lbnQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX2NvbnRlbnQiLCJfY2hhdCIsIl9pY29ucyIsInNldFJlYWR5Iiwic2V0VGl0bGUiLCJ0YWIiLCJzZXRUYWIiLCJDb250cm9sIiwiaWNvbiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJidXR0b24iLCJBcHBJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQtZGVza3RvcC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvc3luc3RoZXNpcy1kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtjQUNBLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM3RyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxRQUFRLEdBQUcsSUFBSTtZQUM1QjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1UsUUFBUSxHQUFHLEtBQUs7WUFDN0I7O1VBQ0FFLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBZSxLQUFBLEdBQUFsQixPQUFBO1VBRUEsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixlQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLFlBQUEsR0FBQXRCLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFZLE1BQUEsQ0FBQUksYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBRVgsSUFBSUYsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBRyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBQyxLQUFNLEdBQStCLElBQUlULE1BQUEsQ0FBQVUsWUFBWSxDQUFDVCxlQUFBLENBQUFVLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFFQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTSxLQUFLO1lBQ3hDO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUMsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU07WUFDbkI7WUFFQSxDQUFBckIsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ2tCLEtBQUs7Y0FDakIsSUFBSSxJQUFJLENBQUMsQ0FBQWxCLFFBQVMsS0FBS2tCLEtBQUssRUFBRTtnQkFDN0I7O2NBRUQsSUFBSSxDQUFDLENBQUFsQixRQUFTLEdBQUdrQixLQUFLO2NBQ3RCLElBQUksQ0FBQ0ssWUFBWSxFQUFFO1lBQ3BCO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0YsWUFBWSxDQUFDO1lBQzVDO1lBQ0EsTUFBTTNCLElBQUlBLENBQUNjLFlBQVksRUFBRUMsVUFBVSxFQUFFUSxNQUFNO2NBQzFDLElBQUk7Z0JBQ0haLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBQzNCcEIsWUFBQSxDQUFBbUIsWUFBWSxDQUFDSixpQkFBaUIsR0FBRyxJQUFJO2dCQUNyQyxJQUFJWixZQUFZLEtBQUssSUFBSSxDQUFDLENBQUFBLFlBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQUMsVUFBVyxLQUFLQSxVQUFVLEVBQUU7a0JBQzNFSixZQUFBLENBQUFtQixZQUFZLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQW5CLEtBQU0sQ0FBQztrQkFDbEM7O2dCQUdELElBQUksQ0FBQyxDQUFBQyxZQUFhLEdBQUdBLFlBQVk7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBQyxVQUFXLEdBQUdBLFVBQVU7Z0JBQzdCLElBQUksQ0FBQyxDQUFBVSxLQUFNLEdBQUcsSUFBSTtnQkFFbEIsTUFBTVEsUUFBUSxHQUFHLElBQUkxQixLQUFBLENBQUEyQixrQkFBa0IsQ0FBQztrQkFDdkNDLEVBQUUsRUFBRXBCLFVBQVU7a0JBQ2REO2lCQUNBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFTLE1BQU8sR0FBR0EsTUFBTTtnQkFDckIsSUFBSSxDQUFDLENBQUFOLFNBQVUsR0FBRztrQkFDakJILFlBQVk7a0JBQ1pDO2lCQUNBO2dCQUVELElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUdvQixRQUFRO2dCQUV0QixNQUFNQSxRQUFRLENBQUNHLE9BQU87Z0JBQ3RCLE1BQU1ILFFBQVEsQ0FBQ2pDLElBQUksRUFBRTtnQkFDckJXLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBbkIsS0FBTSxDQUFDO2dCQUNsQyxLQUFLLENBQUNXLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ0UsWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT1UsQ0FBQyxFQUFFO2dCQUNYLEtBQUssQ0FBQ2IsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUcsS0FBSztnQkFDbkJkLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0osaUJBQWlCLEdBQUcsS0FBSztnQkFDdEMsSUFBSSxDQUFDQyxZQUFZLEVBQUU7O1lBRXJCOztVQUNBckIsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEdELElBQUEwQyxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELGFBQUEsR0FBQWxELE9BQUE7VUFNTSxTQUFVbUQsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFKLE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFvRSxXQUFBLEdBQUFwRSxPQUFBO1VBR08sYUFGUDtVQUVtQixTQUFVcUUsYUFBYUEsQ0FBQTtZQUN6QyxNQUFNO2NBQUV4QztZQUFLLENBQUUsR0FBRyxJQUFBc0MsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUUxQyxNQUFNQyxhQUFhLEdBQUdDLEtBQUssSUFBRztjQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDekIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQTJCLEdBQzdDSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBdUIsR0FBRXZCLEtBQUssQ0FBQzhDLFdBQVcsQ0FBUSxFQUNsRTFCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF5QixFQUVsQyxFQUNOSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxXQUFBLENBQUFRLE1BQU07Y0FDTkMsT0FBTyxFQUFDLFNBQVM7Y0FDakJ6QixTQUFTLEVBQUMsOEJBQThCO2NBQ3hDMEIsT0FBTyxFQUFFUCxhQUFhO2NBQ3RCUSxLQUFLLEVBQUVsRCxLQUFLLENBQUNtRDtZQUFVLEVBQ3RCLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQS9CLE1BQUEsR0FBQWpELE9BQUE7VUFZTyxNQUFNaUYsbUJBQW1CLEdBQUFoRSxPQUFBLENBQUFnRSxtQkFBQSxHQUFHaEMsTUFBQSxDQUFBUSxPQUFLLENBQUN5QixhQUFhLENBQUMsRUFBMEIsQ0FBQztVQUMzRSxNQUFNWixzQkFBc0IsR0FBR0EsQ0FBQSxLQUFNckIsTUFBQSxDQUFBUSxPQUFLLENBQUMwQixVQUFVLENBQUNGLG1CQUFtQixDQUFDO1VBQUNoRSxPQUFBLENBQUFxRCxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNibEYsSUFBQXJCLE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFvRixtQkFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixHQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLE1BQUEsR0FBQXRGLE9BQUE7VUFDTSxTQUFVdUYsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVyRCxNQUFNO2NBQUVULFlBQVk7Y0FBRXBCO1lBQUssQ0FBRSxHQUFHLElBQUE4RCxRQUFBLENBQUFHLHNCQUFzQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ3ZELFFBQVEsRUFBRXlFLFdBQVcsQ0FBQyxHQUFHdkMsTUFBQSxDQUFBUSxPQUFLLENBQUNnQyxRQUFRLENBQUNwRixLQUFLLENBQUNVLFFBQVEsQ0FBQztZQUU5RCxJQUFBdUUsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ3JGLEtBQUssQ0FBQyxFQUFFLE1BQU1tRixXQUFXLENBQUNuRixLQUFLLENBQUNVLFFBQVEsQ0FBQyxDQUFDO1lBRXJELE9BQ0NrQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEIsbUJBQUEsQ0FBQWpDLGlCQUFpQjtjQUFDQyxTQUFTLEVBQUM7WUFBd0IsR0FDcERILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUFNLGFBQWEsUUFDYjFDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQ0NaLEVBQUUsRUFBRVosTUFBTTtjQUFBLGlCQUNLVCxZQUFZO2NBQzNCbUUsU0FBUyxFQUFDLFVBQVU7Y0FDcEI3RSxRQUFRLEVBQUVBO1lBQVEsRUFDakIsQ0FDYSxDQUNHO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBa0MsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQXFGLEdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBb0YsbUJBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBNkYsUUFBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUE4RixTQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQStGLHNCQUFBLEdBQUEvRixPQUFBO1VBRU0sU0FBVWdHLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQUUzRixLQUFLO2NBQUV3QjtZQUFLLENBQUUsR0FBRyxJQUFBc0MsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUNqRCxNQUFNO2NBQUUyQixPQUFPO2NBQUVDLFFBQVE7Y0FBRUM7WUFBTSxDQUFFLEdBQUc5RixLQUFLLENBQUNtQixLQUFLLENBQUM0RSxTQUFTO1lBRTNELE1BQU1DLE9BQU8sR0FBR1IsUUFBQSxDQUFBUyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsaUJBQWlCLElBQUksQ0FBQyxDQUFDTixRQUFRLEdBQUdBLFFBQVEsR0FBR0QsT0FBTztZQUN4RnhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRXJFLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ2lGLElBQUksRUFBRXBHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQztZQUM5QyxPQUNDeUIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLG1CQUFBLENBQUFqQyxpQkFBaUIsUUFDakJGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUFNLGFBQWE7Y0FBQ3ZDLFNBQVMsRUFBQztZQUFxQyxHQUM3REgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFNBQUEsQ0FBQVksUUFBUSxRQUFFTCxPQUFPLENBQVksQ0FDekIsRUFDTnBELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU9OLFNBQVMsRUFBQztZQUF5QixHQUN6Q0gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDRSxDQUFDLENBQUN5QyxNQUFNLEVBQUVRLE1BQU0sSUFBSTFELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUF1QixhQUFhO2NBQUM5RCxFQUFFLEVBQUV6QyxLQUFLLENBQUNtQixLQUFLLENBQUNzQjtZQUFFLEVBQUksRUFFMURHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUF3QixXQUFXO2NBQ1h6RCxTQUFTLEVBQUMsb0JBQW9CO2NBQzlCMEQsR0FBRyxFQUFFekcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDdUYsT0FBTztjQUN4QkMsTUFBTSxFQUFDLFVBQVU7Y0FDakJQLElBQUksRUFBRXBHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ2lGO1lBQUksRUFDckIsRUFDRnhELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxQyxzQkFBQSxDQUFBa0Isb0JBQW9CLE9BQUcsQ0FDbkIsQ0FDQyxDQUNPLENBQ0c7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFoRSxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBcUYsR0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFzRixNQUFBLEdBQUF0RixPQUFBO1VBQ0EsSUFBQThGLFNBQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBa0gsWUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFtSCxlQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQTZGLFFBQUEsR0FBQTdGLE9BQUE7VUFDTSxTQUFVb0gsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUUvRyxLQUFLO2NBQUV3QjtZQUFLLENBQUUsR0FBRyxJQUFBc0MsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUVqRCxNQUFNK0MsSUFBSSxHQUFHLElBQUEvQixNQUFBLENBQUFnQyxhQUFhLEdBQUU7WUFDNUIsSUFBSUQsSUFBSSxLQUFLLElBQUksSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRSxPQUFPcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lELGVBQUEsQ0FBQW5CLHNCQUFzQixPQUFHO1lBQ3JFLE1BQU07Y0FBRUMsT0FBTztjQUFFc0IsU0FBUztjQUFFckIsUUFBUTtjQUFFQztZQUFNLENBQUUsR0FBRzlGLEtBQUssQ0FBQ21CLEtBQUssQ0FBQzRFLFNBQVM7WUFDdEUsTUFBTUMsT0FBTyxHQUFHUixRQUFBLENBQUFTLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxpQkFBaUIsSUFBSSxDQUFDLENBQUNOLFFBQVEsR0FBR0EsUUFBUSxHQUFHRCxPQUFPO1lBRXhGLE9BQ0NoRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkIsR0FBQSxDQUFBbEMsaUJBQWlCLFFBQ2pCRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkIsR0FBQSxDQUFBTSxhQUFhO2NBQUN2QyxTQUFTLEVBQUM7WUFBNkIsR0FDckRILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUF3QixXQUFXO2NBQ1h6RCxTQUFTLEVBQUMsb0JBQW9CO2NBQzlCMEQsR0FBRyxFQUFFekcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDdUYsT0FBTztjQUN4Qk4sSUFBSSxFQUFFcEcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDaUYsSUFBSTtjQUN0Qk8sTUFBTSxFQUFDO1lBQVUsRUFDaEIsRUFDRCxDQUFDLENBQUNiLE1BQU0sRUFBRVEsTUFBTSxJQUFJMUQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJCLEdBQUEsQ0FBQXVCLGFBQWE7Y0FBQzlELEVBQUUsRUFBRXpDLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3NCO1lBQUUsRUFBSSxFQUMxREcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWlCLEdBQy9CSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsWUFBQSxDQUFBTSxvQkFBb0I7Y0FBQ0MsSUFBSSxFQUFFO1lBQUksR0FDL0J4RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsWUFBQSxDQUFBUSxpQkFBaUIsUUFDakJ6RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQWtFLFFBQUEsUUFBRzlGLEtBQUssQ0FBQ29FLE9BQU8sQ0FBSSxDQUNELEVBQ3BCaEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dELFlBQUEsQ0FBQVUsa0JBQWtCLFFBQ2xCM0UsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFNBQUEsQ0FBQVksUUFBUSxRQUFFTCxPQUFPLENBQVksQ0FDVixDQUNDLENBQ2xCLEVBRUxrQixTQUFTLElBQ1R0RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsWUFBQSxDQUFBTSxvQkFBb0IsUUFDcEJ2RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsWUFBQSxDQUFBUSxpQkFBaUIsUUFDakJ6RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQWtFLFFBQUEsUUFBRzlGLEtBQUssQ0FBQzBGLFNBQVMsQ0FBSSxDQUNILEVBQ3BCdEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dELFlBQUEsQ0FBQVUsa0JBQWtCLFFBQ2xCM0UsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFNBQUEsQ0FBQVksUUFBUSxRQUFFYSxTQUFTLENBQVksQ0FDWixDQUV0QixDQUNjLENBQ0c7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUF0RSxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBOEYsU0FBQSxHQUFBOUYsT0FBQTtVQUVNLFNBQVVpSCxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFNUcsS0FBSztjQUFFd0I7WUFBSyxDQUFFLEdBQUcsSUFBQXNDLFFBQUEsQ0FBQUcsc0JBQXNCLEdBQUU7WUFDakQsTUFBTTtjQUFFMkIsT0FBTztjQUFFc0I7WUFBUyxDQUFFLEdBQUdsSCxLQUFLLENBQUNtQixLQUFLLENBQUM0RSxTQUFTO1lBQ3BELE1BQU15QixLQUFLLEdBQUdOLFNBQVMsR0FBRzFGLEtBQUssQ0FBQzBGLFNBQVMsR0FBRzFGLEtBQUssQ0FBQ2lHLFdBQVc7WUFDN0QsTUFBTXpCLE9BQU8sR0FBR2tCLFNBQVMsR0FBR0EsU0FBUyxHQUFHbEgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDc0csV0FBVztZQUMvRCxPQUNDN0UsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFrRSxRQUFBLFFBQ0MxRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLbUUsS0FBSyxDQUFNLEVBQ2hCNUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFNBQUEsQ0FBQVksUUFBUSxRQUFFTCxPQUFPLENBQVksQ0FDNUI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBcEQsTUFBQSxHQUFBakQsT0FBQTtVQUVBLElBQUFzQixZQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQW9FLFdBQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBc0YsTUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBRUEsSUFBQXFGLEdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBK0gsUUFBQSxHQUFBL0gsT0FBQTtVQUNBLElBQUFnSSxLQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQWlJLE1BQUEsR0FBQWpJLE9BQUE7VUFFQSxJQUFBa0QsYUFBQSxHQUFBbEQsT0FBQTtVQVVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSixLQUFLO1lBQUVPO1VBQUcsQ0FBcUM7WUFDOUQsTUFBTSxDQUFDdUIsS0FBSyxFQUFFK0YsUUFBUSxDQUFDLEdBQUcsSUFBQWpGLE1BQUEsQ0FBQXdDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDekMsTUFBTSxDQUFDOUQsS0FBSyxDQUFDLEdBQUcsSUFBQXNCLE1BQUEsQ0FBQXdDLFFBQVEsRUFBQ3BGLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQztZQUNyQyxNQUFNLENBQUNrRyxLQUFLLEVBQUVNLFFBQVEsQ0FBQyxHQUFHbEYsTUFBQSxDQUFBUSxPQUFLLENBQUNnQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQzJDLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUdwRixNQUFBLENBQUFRLE9BQUssQ0FBQ2dDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU07Y0FBRTVEO1lBQUssQ0FBRSxHQUFHeEIsS0FBSztZQUN2QixNQUFNb0IsWUFBWSxHQUFHYixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNb0IsTUFBTSxHQUFHdEIsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckMsTUFBTXdILE9BQU8sR0FBR0YsR0FBRyxLQUFLLFNBQVMsR0FBR0wsUUFBQSxDQUFBWCxlQUFlLEdBQUdZLEtBQUEsQ0FBQXpDLFlBQVk7WUFDbEUsTUFBTWdELElBQUksR0FBR0gsR0FBRyxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcvSCxLQUFLLENBQUNtQixLQUFLLENBQUNpRixJQUFJO1lBQzFELE1BQU0rQixpQkFBaUIsR0FBR0EsQ0FBQSxLQUFLO2NBQzlCbEgsWUFBQSxDQUFBbUIsWUFBWSxDQUFDZ0csYUFBYSxDQUFDLE1BQU1KLE1BQU0sQ0FBQ0QsR0FBRyxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDakYsQ0FBQztZQUVELElBQUE5QyxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDckYsS0FBSyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTTJHLFFBQVEsQ0FBQzlILEtBQUssQ0FBQ21CLEtBQUssRUFBRXFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFBdkMsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ3JGLEtBQUssQ0FBQyxFQUFFLE1BQU02SCxRQUFRLENBQUM3SCxLQUFLLENBQUM4QixLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJQSxLQUFLLElBQUksQ0FBQzlCLEtBQUssQ0FBQytCLEtBQUssRUFBRSxPQUFPYSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxxQkFBZTtZQUNqRCxJQUFJLENBQUN2QixLQUFLLEVBQUUsT0FBT2MsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsV0FBQSxDQUFBc0UsYUFBYSxPQUFHO1lBRXBDLE1BQU1DLFlBQVksR0FBRztjQUNwQjlHLEtBQUs7Y0FDTCtHLFFBQVEsRUFBRXZJLEtBQUssQ0FBQ3VJLFFBQVE7Y0FDeEJ2SSxLQUFLO2NBQ0w2QixNQUFNO2NBQ05ULFlBQVk7Y0FDWkUsS0FBSztjQUNMWixRQUFRLEVBQUVWLEtBQUssQ0FBQ1U7YUFDaEI7WUFFRCxPQUNDa0MsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1MsUUFBQSxDQUFBYyxtQkFBbUIsQ0FBQzRELFFBQVE7Y0FBQzVHLEtBQUssRUFBRTBHO1lBQVksR0FDaEQxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkIsR0FBQSxDQUFBeUQsY0FBYztjQUFDakIsS0FBSyxFQUFFeEgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDcUcsS0FBSztjQUFFVSxJQUFJLEVBQUVsSSxLQUFLLENBQUNtQixLQUFLLENBQUNpRixJQUFJO2NBQUVBLElBQUksRUFBRXBHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ2lGO1lBQUksRUFBSSxFQUM1RnhELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNSLGFBQUEsQ0FBQTZGLGVBQWUsUUFDZjlGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM0RSxPQUFPLE9BQUcsQ0FDTSxFQUNsQnJGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNSLGFBQUEsQ0FBQU0sTUFBTSxDQUFDd0YsTUFBTTtjQUFDNUYsU0FBUyxFQUFDLGtCQUFrQjtjQUFDMEIsT0FBTyxFQUFFMEQ7WUFBaUIsR0FDckV2RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsTUFBQSxDQUFBZ0IsT0FBTztjQUFDVixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNSLENBQ2M7VUFFakMiLCJpZ25vcmVMaXN0IjpbXX0=