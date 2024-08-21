System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/chat@1.0.2/wrapper", "@aimpact/ailearn-app@0.1.6-dev.04/components/hooks", "pragmate-ui@1.0.0-beta.2/collapsible", "@aimpact/chat@1.0.2/shared/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons"], function (_export, _context2) {
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
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactChat102Wrapper) {
      dependency_14 = _aimpactChat102Wrapper;
    }, function (_aimpactAilearnApp016Dev04ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev04ComponentsHooks;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_16 = _pragmateUi100Beta2Collapsible;
    }, function (_aimpactChat102SharedComponents) {
      dependency_17 = _aimpactChat102SharedComponents;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp016Dev04ComponentsIcons;
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
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/chat/wrapper', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/assignments/content-theory.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1643034851,
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
        hash: 1261001028,
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
              return !!this.#model?.materials?.article;
            }
            '';
            constructor() {
              super();
              // this.#texts.load();
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
              } catch (e) {
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
        hash: 3165488857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityChat = ActivityChat;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityChat() {
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
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("aimpact-chat-control", {
              ref: ref,
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered",
              playable: playable
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/controls/content-desktop
      ************************************************/

      ims.set('./views/controls/content-desktop', {
        hash: 2769064571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityDesktopContent = ActivityDesktopContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _animationContainer = require("../animation-container");
          var _context = require("../context");
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
            const [mode, setMode] = _react.default.useState(_wrapper.AppWrapper.accessibility);
            const content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            (0, _hooks.useBinder)([_wrapper.AppWrapper], () => setMode(_wrapper.AppWrapper.accessibility));
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
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
        hash: 1588063096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _collapsible = require("pragmate-ui/collapsible");
          var _react = require("react");
          var _context = require("../context");
          var _contentDesktop = require("./content-desktop");
          function ActivityContent() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            const {
              article,
              synthesis,
              dyslexia,
              audios
            } = store.model.materials;
            const [mode, setMode] = _react.default.useState(_wrapper.AppWrapper.accessibility);
            const content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            (0, _hooks2.useBinder)([_wrapper.AppWrapper], () => setMode(_wrapper.AppWrapper.accessibility));
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'lg') return _react.default.createElement(_contentDesktop.ActivityDesktopContent, null);
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--container"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), !!totalAudios && _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
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
        hash: 1220275823,
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
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [tab, setTab] = _react.default.useState(); // ['content', 'chat'
            const {
              texts
            } = store;
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const Control = tab === 'content' || tab === undefined && store.hasArticle ? _content.ActivityContent : _chat.ActivityChat;
            const icon = tab === 'content' ? 'chat' : store.model?.type;
            const handleButtonClick = () => {
              _mainLayout.LayoutBroker.ensureCredits(() => setTab([undefined, 'content'].includes(tab) ? 'chat' : 'content'));
            };
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyaWdnZXJFdmVudCIsInRyYWNraW5nIiwiaGFzQXJ0aWNsZSIsIm1hdGVyaWFscyIsImFydGljbGUiLCJjb25zdHJ1Y3RvciIsIm9uIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJpZCIsImUiLCJ1cGRhdGVUcmFja2luZyIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiYXMiLCJDb21wb25lbnQiLCJtb3Rpb24iLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJ3aWR0aCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGFiZWwiLCJidXR0b25UZXh0IiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiQWN0aXZpdHlDaGF0Iiwic2V0UGxheWFibGUiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsInVzZUJpbmRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIl9tYXJrZG93biIsIl93cmFwcGVyIiwiX2FuaW1hdGlvbkNvbnRhaW5lciIsIl9zeW5zdGhlc2lzRGVzY3JpcHRpb24iLCJBY3Rpdml0eURlc2t0b3BDb250ZW50IiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiTWFya2Rvd24iLCJBY3Rpdml0eUF1ZGlvIiwic3JjIiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwidHlwZSIsIlN5bnRoZXNpc0Rlc2NyaXB0aW9uIiwiX2hvb2tzMiIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInN5bnRoZXNpcyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ0YWIiLCJzZXRUYWIiLCJDb250cm9sIiwidW5kZWZpbmVkIiwiaWNvbiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImluY2x1ZGVzIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsImJ1dHRvbiIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY29udHJvbHMvY2hhdC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC1kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9zeW5zdGhlc2lzLWRlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxN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QUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDM0YsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjRJLFFBQVEsQ0FBQzVJLEtBQUssQ0FBQzhCLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixJQUFJQSxLQUFLLElBQUksQ0FBQzlCLEtBQUssQ0FBQytCLEtBQUssRUFBRSxPQUFPa0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEscUJBQWU7WUFDakQsSUFBSSxDQUFDNUIsS0FBSyxFQUFFLE9BQU9tQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxXQUFBLENBQUFpRixhQUFhLE9BQUc7WUFFcEMsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCOUgsS0FBSztjQUNMK0gsUUFBUSxFQUFFdkosS0FBSyxDQUFDdUosUUFBUTtjQUN4QnZKLEtBQUs7Y0FDTDZCLE1BQU07Y0FDTlQsWUFBWTtjQUNaRSxLQUFLO2NBQ0xaLFFBQVEsRUFBRVYsS0FBSyxDQUFDVTthQUNoQjtZQUVELE9BQ0N1QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxRQUFBLENBQUFjLG1CQUFtQixDQUFDdUUsUUFBUTtjQUFDNUgsS0FBSyxFQUFFMEg7WUFBWSxHQUNoRHJHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwQixHQUFBLENBQUFxRSxjQUFjO2NBQUNsQixLQUFLLEVBQUV2SSxLQUFLLENBQUNtQixLQUFLLENBQUNvSCxLQUFLO2NBQUVVLElBQUksRUFBRWpKLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3NHLElBQUk7Y0FBRUEsSUFBSSxFQUFFekgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDc0c7WUFBSSxFQUFJLEVBQzVGeEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBd0csZUFBZSxRQUNmekcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FGLE9BQU8sT0FBRyxDQUNNLEVBQ2pCL0ksS0FBSyxDQUFDbUMsVUFBVSxJQUNoQmMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBTSxNQUFNLENBQUNtRyxNQUFNO2NBQUN2RyxTQUFTLEVBQUMsa0JBQWtCO2NBQUMwQixPQUFPLEVBQUVvRTtZQUFpQixHQUNyRWpHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNpRixNQUFBLENBQUFpQixPQUFPO2NBQUNYLElBQUksRUFBRUE7WUFBSSxFQUFJLENBRXhCLENBQzZCO1VBRWpDIiwiaWdub3JlTGlzdCI6W119