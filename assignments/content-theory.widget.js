System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.46.dev-06/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.46.dev-06/components/hooks", "pragmate-ui@0.1.1/collapsible", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.46.dev-06/components/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0046Dev06MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev06MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev06ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0046Dev06ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp0046Dev06ComponentsHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_16 = _pragmateUi011Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0046Dev06ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0046Dev06ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/assignments/content-theory.widget');
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
        hash: 2353600464,
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
            get hasArticle() {
              return this.#model?.materials?.article;
            }
            '';
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
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
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
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
        hash: 2979947218,
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
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const dyslexiaMode = localStorage.getItem('aimpact.accessibility.mode') ? localStorage.getItem('aimpact.accessibility.mode') : 'normal';
            const audioSrc = dyslexiaMode === 'normal' ? audios?.article?.url : audios.dyslexia?.url;
            return _react.default.createElement(_animationContainer.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, null, content)), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement("div", null, !!totalAudios && _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
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
        hash: 1796382574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
            const [tab, setTab] = _react.default.useState(store.hasArticle); // ['content', 'chat'
            const {
              texts
            } = store;
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const Control = tab === 'content' ? _content.ActivityContent : _chat.ActivityChat;
            const icon = tab === 'content' ? 'chat' : store.model?.type;
            const handleButtonClick = () => {
              _mainLayout.LayoutBroker.ensureCredits(() => setTab(tab === 'content' ? 'chat' : 'content'));
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
            }), _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, null)), store.hasArticle && _react.default.createElement(_framerMotion.motion.button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsInBsYXlhYmxlIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJpdGVtcyIsInBhcmFtc1VyaSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJjaGF0SWQiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmFja2luZyIsImhhc0FydGljbGUiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwiY29uc3RydWN0b3IiLCJvbiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiaWQiLCJlIiwiX3JlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkNoYXJhY3RlckNhcmQiLCJ1c2VDb252ZXJzYXRpb25Db250ZXh0Iiwib25BY3Rpb25DbGljayIsImV2ZW50Iiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJfdWkiLCJfaG9va3MiLCJBY3Rpdml0eUNoYXQiLCJzZXRQbGF5YWJsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX3N5bnN0aGVzaXNEZXNjcmlwdGlvbiIsIkFjdGl2aXR5RGVza3RvcENvbnRlbnQiLCJkeXNsZXhpYSIsImF1ZGlvcyIsImNvbnRlbnQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImR5c2xleGlhTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhdWRpb1NyYyIsInVybCIsIk1hcmtkb3duIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsInR5cGUiLCJTeW50aGVzaXNEZXNjcmlwdGlvbiIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3ludGhlc2lzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ0YWIiLCJzZXRUYWIiLCJDb250cm9sIiwiaWNvbiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJidXR0b24iLCJBcHBJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQtZGVza3RvcC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvc3luc3RoZXNpcy1kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2NBQ2pCLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM3RyxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxRQUFRLEdBQUcsSUFBSTtZQUM1QjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ1ksUUFBUSxHQUFHLEtBQUs7WUFDN0I7O1VBQ0FFLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkQsSUFBQWlCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixlQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsU0FBQSxHQUFBeEIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUWEsTUFBQSxDQUFBSyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFFWCxJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFHLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUFDLEtBQU0sR0FBK0IsSUFBSVYsTUFBQSxDQUFBVyxZQUFZLENBQUNWLGVBQUEsQ0FBQVcsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNNLEtBQUs7WUFDeEM7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNuQjtZQUVBLENBQUFyQixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDa0IsS0FBSztjQUNqQixJQUFJLElBQUksQ0FBQyxDQUFBbEIsUUFBUyxLQUFLa0IsS0FBSyxFQUFFO2dCQUM3Qjs7Y0FFRCxJQUFJLENBQUMsQ0FBQWxCLFFBQVMsR0FBR2tCLEtBQUs7Y0FDdEIsSUFBSSxDQUFDSyxZQUFZLEVBQUU7WUFDcEI7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWhCLEtBQU0sRUFBRWlCLFNBQVMsRUFBRUMsT0FBTztZQUN2QztZQUNBLEVBQUU7WUFDRkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDTixZQUFZLENBQUM7WUFDNUM7WUFDQSxNQUFNM0IsSUFBSUEsQ0FBQ2MsWUFBWSxFQUFFQyxVQUFVLEVBQUVRLE1BQU07Y0FDMUMsSUFBSTtnQkFDSGIsV0FBQSxDQUFBd0IsWUFBWSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtnQkFDM0J6QixXQUFBLENBQUF3QixZQUFZLENBQUNSLGlCQUFpQixHQUFHLElBQUk7Z0JBQ3JDLElBQUlaLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQUEsWUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBQyxVQUFXLEtBQUtBLFVBQVUsRUFBRTtrQkFDM0VMLFdBQUEsQ0FBQXdCLFlBQVksQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBUixRQUFTLENBQUM7a0JBQ3JDOztnQkFFRCxJQUFJLENBQUMsQ0FBQWQsWUFBYSxHQUFHQSxZQUFZO2dCQUNqQyxJQUFJLENBQUMsQ0FBQUMsVUFBVyxHQUFHQSxVQUFVO2dCQUU3QixNQUFNYSxRQUFRLEdBQUcsSUFBSWpCLFNBQUEsQ0FBQTBCLFFBQVEsQ0FBQztrQkFBRXZCO2dCQUFZLENBQUUsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLENBQUFjLFFBQVMsR0FBR0EsUUFBUTtnQkFDekIsTUFBTVUsUUFBUSxHQUFHLE1BQU1WLFFBQVEsQ0FBQ1csVUFBVSxDQUFDdkMsSUFBSSxDQUFDO2tCQUFFd0MsRUFBRSxFQUFFekI7Z0JBQVUsQ0FBRSxDQUFDO2dCQUNuRSxJQUFJLENBQUMsQ0FBQUYsS0FBTSxHQUFHeUIsUUFBUTtnQkFDdEI1QixXQUFBLENBQUF3QixZQUFZLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVIsUUFBUyxDQUFDO2dCQUNyQyxLQUFLLENBQUNKLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ0UsWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT2MsQ0FBQyxFQUFFO2dCQUNYLEtBQUssQ0FBQ2pCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHLEtBQUs7Z0JBQ25CZixXQUFBLENBQUF3QixZQUFZLENBQUNSLGlCQUFpQixHQUFHLEtBQUs7Z0JBQ3RDLElBQUksQ0FBQ0MsWUFBWSxFQUFFOztZQUVyQjs7VUFDQXJCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hHRCxJQUFBZ0QsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF3RCxhQUFBLEdBQUF4RCxPQUFBO1VBTU0sU0FBVXlELGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBMEI7WUFDN0YsTUFBTUMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsT0FDQ0wsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsU0FBUztjQUNUSSxNQUFNO2NBQ05QLFNBQVMsRUFBRUEsU0FBUztjQUNwQlEsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFOztZQUNULEdBRUFSLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBSixNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUdPLGFBRlA7VUFFbUIsU0FBVTJFLGFBQWFBLENBQUE7WUFDekMsTUFBTTtjQUFFNUM7WUFBSyxDQUFFLEdBQUcsSUFBQTBDLFFBQUEsQ0FBQUcsc0JBQXNCLEdBQUU7WUFFMUMsTUFBTUMsYUFBYSxHQUFHQyxLQUFLLElBQUc7Y0FDN0JuRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDM0IsQ0FBQztZQUVELE9BQ0MyQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBMkIsR0FDN0NILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1OLFNBQVMsRUFBQztZQUF1QixHQUFFM0IsS0FBSyxDQUFDZ0QsV0FBVyxDQUFRLEVBQ2xFeEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQXlCLEVBRWxDLEVBQ05ILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNVLFdBQUEsQ0FBQU0sTUFBTTtjQUNOQyxPQUFPLEVBQUMsU0FBUztjQUNqQnZCLFNBQVMsRUFBQyw4QkFBOEI7Y0FDeEN3QixPQUFPLEVBQUVMLGFBQWE7Y0FDdEJNLEtBQUssRUFBRXBELEtBQUssQ0FBQ3FEO1lBQVUsRUFDdEIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBN0IsTUFBQSxHQUFBdkQsT0FBQTtVQVlPLE1BQU1xRixtQkFBbUIsR0FBQWxFLE9BQUEsQ0FBQWtFLG1CQUFBLEdBQUc5QixNQUFBLENBQUFRLE9BQUssQ0FBQ3VCLGFBQWEsQ0FBQyxFQUEwQixDQUFDO1VBQzNFLE1BQU1WLHNCQUFzQixHQUFHQSxDQUFBLEtBQU1yQixNQUFBLENBQUFRLE9BQUssQ0FBQ3dCLFVBQVUsQ0FBQ0YsbUJBQW1CLENBQUM7VUFBQ2xFLE9BQUEsQ0FBQXlELHNCQUFBLEdBQUFBLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JsRixJQUFBckIsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXdGLG1CQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXlGLEdBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEYsTUFBQSxHQUFBMUYsT0FBQTtVQUNNLFNBQVUyRixZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRXZELE1BQU07Y0FBRVQsWUFBWTtjQUFFdEI7WUFBSyxDQUFFLEdBQUcsSUFBQW9FLFFBQUEsQ0FBQUcsc0JBQXNCLEdBQUU7WUFDaEUsTUFBTSxDQUFDM0QsUUFBUSxFQUFFMkUsV0FBVyxDQUFDLEdBQUdyQyxNQUFBLENBQUFRLE9BQUssQ0FBQzhCLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQ1ksUUFBUSxDQUFDO1lBRTlELElBQUF5RSxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDekYsS0FBSyxDQUFDLEVBQUUsTUFBTXVGLFdBQVcsQ0FBQ3ZGLEtBQUssQ0FBQ1ksUUFBUSxDQUFDLENBQUM7WUFFckQsT0FDQ3NDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN3QixtQkFBQSxDQUFBL0IsaUJBQWlCO2NBQUNDLFNBQVMsRUFBQztZQUF3QixHQUNwREgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lCLEdBQUEsQ0FBQU0sYUFBYSxRQUNieEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FDQ1gsRUFBRSxFQUFFakIsTUFBTTtjQUFBLGlCQUNLVCxZQUFZO2NBQzNCcUUsU0FBUyxFQUFDLFVBQVU7Y0FDcEIvRSxRQUFRLEVBQUVBO1lBQVEsRUFDakIsQ0FDYSxDQUNHO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBc0MsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXlGLEdBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBd0YsbUJBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBaUcsUUFBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFrRyxTQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLHNCQUFBLEdBQUFuRyxPQUFBO1VBRU0sU0FBVW9HLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQUUvRixLQUFLO2NBQUUwQjtZQUFLLENBQUUsR0FBRyxJQUFBMEMsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUNqRCxNQUFNO2NBQUVoQyxPQUFPO2NBQUV5RCxRQUFRO2NBQUVDO1lBQU0sQ0FBRSxHQUFHakcsS0FBSyxDQUFDcUIsS0FBSyxDQUFDaUIsU0FBUztZQUUzRCxNQUFNNEQsT0FBTyxHQUFHTixRQUFBLENBQUFPLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxpQkFBaUIsSUFBSSxDQUFDLENBQUNMLFFBQVEsR0FBR0EsUUFBUSxHQUFHekQsT0FBTztZQUN4RixNQUFNK0QsSUFBSSxHQUFHLENBQUNMLE1BQU0sSUFBSU0sTUFBTSxDQUFDRCxJQUFJLENBQUNMLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEQsSUFBSU8sV0FBVyxHQUFHRixJQUFJLENBQUNHLE1BQU07WUFDN0IsTUFBTUMsWUFBWSxHQUFXQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxHQUMzRUQsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQVksR0FDOUQsUUFBUTtZQUNYLE1BQU1DLFFBQVEsR0FBR0gsWUFBWSxLQUFLLFFBQVEsR0FBR1QsTUFBTSxFQUFFMUQsT0FBTyxFQUFFdUUsR0FBRyxHQUFHYixNQUFNLENBQUNELFFBQVEsRUFBRWMsR0FBRztZQUV4RixPQUNDNUQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dCLG1CQUFBLENBQUEvQixpQkFBaUIsUUFDakJGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5QixHQUFBLENBQUFNLGFBQWE7Y0FBQ3JDLFNBQVMsRUFBQztZQUFxQyxHQUM3REgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLFNBQUEsQ0FBQWtCLFFBQVEsUUFBRWIsT0FBTyxDQUFZLENBQ3pCLEVBQ05oRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTixTQUFTLEVBQUM7WUFBeUIsR0FDekNILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0UsQ0FBQyxDQUFDNkMsV0FBVyxJQUFJdEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lCLEdBQUEsQ0FBQTRCLGFBQWE7Y0FBQ0MsR0FBRyxFQUFFSjtZQUFRLEVBQUksRUFFbEQzRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUIsR0FBQSxDQUFBOEIsV0FBVztjQUNYN0QsU0FBUyxFQUFDLG9CQUFvQjtjQUM5QjRELEdBQUcsRUFBRWpILEtBQUssQ0FBQ3FCLEtBQUssQ0FBQzhGLE9BQU87Y0FDeEJDLE1BQU0sRUFBQyxVQUFVO2NBQ2pCQyxJQUFJLEVBQUVySCxLQUFLLENBQUNxQixLQUFLLENBQUNnRztZQUFJLEVBQ3JCLEVBQ0ZuRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUMsc0JBQUEsQ0FBQXdCLG9CQUFvQixPQUFHLENBQ25CLENBQ0MsQ0FDTyxDQUNHO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBcEUsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXlGLEdBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEYsTUFBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUFrRyxTQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTRILFlBQUEsR0FBQTVILE9BQUE7VUFDQSxJQUFBNkgsZUFBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUFpRyxRQUFBLEdBQUFqRyxPQUFBO1VBQ00sU0FBVThILGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFekgsS0FBSztjQUFFMEI7WUFBSyxDQUFFLEdBQUcsSUFBQTBDLFFBQUEsQ0FBQUcsc0JBQXNCLEdBQUU7WUFFakQsTUFBTW1ELElBQUksR0FBRyxJQUFBckMsTUFBQSxDQUFBc0MsYUFBYSxHQUFFO1lBQzVCLElBQUlELElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUUsT0FBT3hFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2RCxlQUFBLENBQUF6QixzQkFBc0IsT0FBRztZQUNyRSxNQUFNO2NBQUV4RCxPQUFPO2NBQUVxRixTQUFTO2NBQUU1QixRQUFRO2NBQUVDO1lBQU0sQ0FBRSxHQUFHakcsS0FBSyxDQUFDcUIsS0FBSyxDQUFDaUIsU0FBUztZQUN0RSxNQUFNNEQsT0FBTyxHQUFHTixRQUFBLENBQUFPLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxpQkFBaUIsSUFBSSxDQUFDLENBQUNMLFFBQVEsR0FBR0EsUUFBUSxHQUFHekQsT0FBTztZQUV4RixPQUNDVyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUIsR0FBQSxDQUFBaEMsaUJBQWlCLFFBQ2pCRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUIsR0FBQSxDQUFBTSxhQUFhO2NBQUNyQyxTQUFTLEVBQUM7WUFBNkIsR0FDckRILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5QixHQUFBLENBQUE4QixXQUFXO2NBQ1g3RCxTQUFTLEVBQUMsb0JBQW9CO2NBQzlCNEQsR0FBRyxFQUFFakgsS0FBSyxDQUFDcUIsS0FBSyxDQUFDOEYsT0FBTztjQUN4QkUsSUFBSSxFQUFFckgsS0FBSyxDQUFDcUIsS0FBSyxDQUFDZ0csSUFBSTtjQUN0QkQsTUFBTSxFQUFDO1lBQVUsRUFDaEIsRUFDRCxDQUFDLENBQUNuQixNQUFNLEVBQUVRLE1BQU0sSUFBSXZELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5QixHQUFBLENBQUE0QixhQUFhO2NBQUNoRSxFQUFFLEVBQUVoRCxLQUFLLENBQUNxQixLQUFLLENBQUMyQjtZQUFFLEVBQUksRUFDMURFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELFlBQUEsQ0FBQU0sb0JBQW9CO2NBQUNDLElBQUksRUFBRTtZQUFJLEdBQy9CNUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELFlBQUEsQ0FBQVEsaUJBQWlCLFFBQ2pCN0UsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFzRSxRQUFBLFFBQUd0RyxLQUFLLENBQUNhLE9BQU8sQ0FBSSxDQUNELEVBQ3BCVyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsWUFBQSxDQUFBVSxrQkFBa0IsUUFDbEIvRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsU0FBQSxDQUFBa0IsUUFBUSxRQUFFYixPQUFPLENBQVksQ0FDVixDQUNDLENBQ2xCLEVBRUwwQixTQUFTLElBQ1QxRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsWUFBQSxDQUFBTSxvQkFBb0IsUUFDcEIzRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsWUFBQSxDQUFBUSxpQkFBaUIsUUFDakI3RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQXNFLFFBQUEsUUFBR3RHLEtBQUssQ0FBQ2tHLFNBQVMsQ0FBSSxDQUNILEVBQ3BCMUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELFlBQUEsQ0FBQVUsa0JBQWtCLFFBQ2xCL0UsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLFNBQUEsQ0FBQWtCLFFBQVEsUUFBRWEsU0FBUyxDQUFZLENBQ1osQ0FFdEIsQ0FDYyxDQUNHO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSxJQUFBMUUsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQWtHLFNBQUEsR0FBQWxHLE9BQUE7VUFFTSxTQUFVMkgsb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRXRILEtBQUs7Y0FBRTBCO1lBQUssQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFHLHNCQUFzQixHQUFFO1lBQ2pELE1BQU07Y0FBRWhDLE9BQU87Y0FBRXFGO1lBQVMsQ0FBRSxHQUFHNUgsS0FBSyxDQUFDcUIsS0FBSyxDQUFDaUIsU0FBUztZQUNwRCxNQUFNNEYsS0FBSyxHQUFHTixTQUFTLEdBQUdsRyxLQUFLLENBQUNrRyxTQUFTLEdBQUdsRyxLQUFLLENBQUN5RyxXQUFXO1lBQzdELE1BQU1qQyxPQUFPLEdBQUcwQixTQUFTLEdBQUdBLFNBQVMsR0FBRzVILEtBQUssQ0FBQ3FCLEtBQUssQ0FBQzhHLFdBQVc7WUFDL0QsT0FDQ2pGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBc0UsUUFBQSxRQUNDOUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS3VFLEtBQUssQ0FBTSxFQUNoQmhGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxTQUFBLENBQUFrQixRQUFRLFFBQUViLE9BQU8sQ0FBWSxDQUM1QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFoRCxNQUFBLEdBQUF2RCxPQUFBO1VBRUEsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEwRixNQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFFQSxJQUFBeUYsR0FBQSxHQUFBekYsT0FBQTtVQUNBLElBQUF5SSxRQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQTBJLEtBQUEsR0FBQTFJLE9BQUE7VUFDQSxJQUFBMkksTUFBQSxHQUFBM0ksT0FBQTtVQUVBLElBQUF3RCxhQUFBLEdBQUF4RCxPQUFBO1VBVU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKLEtBQUs7WUFBRVM7VUFBRyxDQUFxQztZQUM5RCxNQUFNLENBQUN1QixLQUFLLEVBQUV1RyxRQUFRLENBQUMsR0FBRyxJQUFBckYsTUFBQSxDQUFBc0MsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUNoRSxLQUFLLENBQUMsR0FBRyxJQUFBMEIsTUFBQSxDQUFBc0MsUUFBUSxFQUFDeEYsS0FBSyxDQUFDd0IsS0FBSyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQ2dILEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUd2RixNQUFBLENBQUFRLE9BQUssQ0FBQzhCLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQ3FDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTTtjQUFFWDtZQUFLLENBQUUsR0FBRzFCLEtBQUs7WUFDdkIsTUFBTXNCLFlBQVksR0FBR2IsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDakQsTUFBTW9CLE1BQU0sR0FBR3RCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE1BQU0rSCxPQUFPLEdBQUdGLEdBQUcsS0FBSyxTQUFTLEdBQUdKLFFBQUEsQ0FBQVgsZUFBZSxHQUFHWSxLQUFBLENBQUEvQyxZQUFZO1lBQ2xFLE1BQU1xRCxJQUFJLEdBQUdILEdBQUcsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHeEksS0FBSyxDQUFDcUIsS0FBSyxFQUFFZ0csSUFBSTtZQUMzRCxNQUFNdUIsaUJBQWlCLEdBQUdBLENBQUEsS0FBSztjQUM5QjFILFdBQUEsQ0FBQXdCLFlBQVksQ0FBQ21HLGFBQWEsQ0FBQyxNQUFNSixNQUFNLENBQUNELEdBQUcsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ2pGLENBQUM7WUFFRCxJQUFBbkQsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ3pGLEtBQUssQ0FBQyxFQUFFLE1BQU11SSxRQUFRLENBQUN2SSxLQUFLLENBQUNnQyxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJQSxLQUFLLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ2lDLEtBQUssRUFBRSxPQUFPaUIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEscUJBQWU7WUFDakQsSUFBSSxDQUFDM0IsS0FBSyxFQUFFLE9BQU9rQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxXQUFBLENBQUF5RSxhQUFhLE9BQUc7WUFFcEMsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCckgsS0FBSztjQUNMc0gsUUFBUSxFQUFFaEosS0FBSyxDQUFDZ0osUUFBUTtjQUN4QmhKLEtBQUs7Y0FDTCtCLE1BQU07Y0FDTlQsWUFBWTtjQUNaRSxLQUFLO2NBQ0xaLFFBQVEsRUFBRVosS0FBSyxDQUFDWTthQUNoQjtZQUVELE9BQ0NzQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxRQUFBLENBQUFZLG1CQUFtQixDQUFDaUUsUUFBUTtjQUFDbkgsS0FBSyxFQUFFaUg7WUFBWSxHQUNoRDdGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5QixHQUFBLENBQUE4RCxjQUFjO2NBQUNoQixLQUFLLEVBQUVsSSxLQUFLLENBQUNxQixLQUFLLENBQUM2RyxLQUFLO2NBQUVTLElBQUksRUFBRTNJLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ2dHLElBQUk7Y0FBRUEsSUFBSSxFQUFFckgsS0FBSyxDQUFDcUIsS0FBSyxDQUFDZ0c7WUFBSSxFQUFJLEVBQzVGbkUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBZ0csZUFBZSxRQUNmakcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytFLE9BQU8sT0FBRyxDQUNNLEVBQ2pCMUksS0FBSyxDQUFDcUMsVUFBVSxJQUNoQmEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBTSxNQUFNLENBQUMyRixNQUFNO2NBQUMvRixTQUFTLEVBQUMsa0JBQWtCO2NBQUN3QixPQUFPLEVBQUUrRDtZQUFpQixHQUNyRTFGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxNQUFBLENBQUFlLE9BQU87Y0FBQ1YsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FFeEIsQ0FDNkI7VUFFakMifQ==