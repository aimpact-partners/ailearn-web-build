System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.4-test.02/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.4-test.02/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/chat@1.0.2/wrapper", "@aimpact/ailearn-app@0.1.4-test.02/components/hooks", "pragmate-ui@1.0.0-beta.1/collapsible", "@aimpact/chat@1.0.2/shared/components", "@aimpact/ailearn-app@0.1.4-test.02/components/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp014Test02MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp014Test02MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp014Test02ComponentsUi) {
      dependency_11 = _aimpactAilearnApp014Test02ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactChat102Wrapper) {
      dependency_14 = _aimpactChat102Wrapper;
    }, function (_aimpactAilearnApp014Test02ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp014Test02ComponentsHooks;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_16 = _pragmateUi100Beta1Collapsible;
    }, function (_aimpactChat102SharedComponents) {
      dependency_17 = _aimpactChat102SharedComponents;
    }, function (_aimpactAilearnApp014Test02ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp014Test02ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.02"], ["@aimpact/ailearn-app", "0.1.4-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/chat/wrapper', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.4-test.02/assignments/content-theory.widget');
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
        hash: 2332836851,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyaWdnZXJFdmVudCIsInRyYWNraW5nIiwiaGFzQXJ0aWNsZSIsIm1hdGVyaWFscyIsImFydGljbGUiLCJjb25zdHJ1Y3RvciIsIm9uIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJpZCIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJfdWkiLCJfaG9va3MiLCJBY3Rpdml0eUNoYXQiLCJzZXRQbGF5YWJsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIl9tYXJrZG93biIsIl93cmFwcGVyIiwiX3N5bnN0aGVzaXNEZXNjcmlwdGlvbiIsIkFjdGl2aXR5RGVza3RvcENvbnRlbnQiLCJkeXNsZXhpYSIsImF1ZGlvcyIsIm1vZGUiLCJzZXRNb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJNYXJrZG93biIsIkFjdGl2aXR5QXVkaW8iLCJzcmMiLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJlbnRpdHkiLCJ0eXBlIiwiU3ludGhlc2lzRGVzY3JpcHRpb24iLCJfaG9va3MyIiwiX2NvbGxhcHNpYmxlIiwiX2NvbnRlbnREZXNrdG9wIiwiQWN0aXZpdHlDb250ZW50Iiwic3ludGhlc2lzIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkZyYWdtZW50IiwiQ29sbGFwc2libGVDb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIl9jb250ZW50IiwiX2NoYXQiLCJfaWNvbnMiLCJzZXRSZWFkeSIsInRhYiIsInNldFRhYiIsIkNvbnRyb2wiLCJ1bmRlZmluZWQiLCJpY29uIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiaW5jbHVkZXMiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwiYnV0dG9uIiwiQXBwSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb250cm9scy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LWRlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL3N5bnN0aGVzaXMtZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NB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