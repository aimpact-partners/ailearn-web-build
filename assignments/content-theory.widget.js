System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.32/components/hooks", "pragmate-ui@0.1.1/collapsible", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0032ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp0032ComponentsHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_16 = _pragmateUi011Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp0032ComponentsIcons;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/content-theory.widget');
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
        hash: 195353752,
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
        hash: 4192360219,
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
        hash: 4271141101,
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
          function ActivityChat() {
            const {
              chatId,
              assignmentId
            } = (0, _context.useConversationContext)();
            return _react.default.createElement(_animationContainer.AnimatedContainer, {
              className: "ailearn-chat-container"
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered"
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/controls/content-desktop
      ************************************************/

      ims.set('./views/controls/content-desktop', {
        hash: 3029890651,
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
              src: store.model.image,
              entity: "assignment"
            }), _react.default.createElement(_synsthesisDescription.SynthesisDescription, null)))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/controls/content
      ****************************************/

      ims.set('./views/controls/content', {
        hash: 2444069457,
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
            console.log(0.2, audios);
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--container"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.image,
              entity: "assignment"
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
        hash: 3118852360,
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
              items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJfdWkiLCJBY3Rpdml0eUNoYXQiLCJQYWdlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiX3Nlc3Npb24iLCJfbWFya2Rvd24iLCJfc3luc3RoZXNpc0Rlc2NyaXB0aW9uIiwiQWN0aXZpdHlEZXNrdG9wQ29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsIk1hcmtkb3duIiwibGVuZ3RoIiwiQWN0aXZpdHlBdWRpbyIsIkVudGl0eUltYWdlIiwic3JjIiwiaW1hZ2UiLCJlbnRpdHkiLCJTeW50aGVzaXNEZXNjcmlwdGlvbiIsIl9ob29rcyIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3ludGhlc2lzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwidGFiIiwic2V0VGFiIiwiQ29udHJvbCIsImljb24iLCJ0eXBlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsImJ1dHRvbiIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY29udHJvbHMvY2hhdC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC1kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9zeW5zdGhlc2lzLWRlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFB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