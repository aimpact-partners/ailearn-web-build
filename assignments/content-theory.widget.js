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
        hash: 353307036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityChat = ActivityChat;
          var _react = require("react");
          var _context = require("../context");
          var _animationContainer = require("../animation-container");
          function ActivityChat() {
            const {
              chatId,
              assignmentId
            } = (0, _context.useConversationContext)();
            return _react.default.createElement(_animationContainer.AnimatedContainer, {
              className: "ailearn-chat-container"
            }, _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered"
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsImUiLCJfcmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwid2lkdGgiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJBY3Rpdml0eUNoYXQiLCJjb250YWluZXIiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9zeW5zdGhlc2lzRGVzY3JpcHRpb24iLCJBY3Rpdml0eURlc2t0b3BDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImFjY2Vzc2liaWxpdHlNb2RlIiwiUGFnZUNvbnRhaW5lciIsIk1hcmtkb3duIiwibGVuZ3RoIiwiQWN0aXZpdHlBdWRpbyIsIkVudGl0eUltYWdlIiwic3JjIiwiaW1hZ2UiLCJlbnRpdHkiLCJTeW50aGVzaXNEZXNjcmlwdGlvbiIsIl9ob29rcyIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3ludGhlc2lzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwidGFiIiwic2V0VGFiIiwiQ29udHJvbCIsImljb24iLCJ0eXBlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsImJ1dHRvbiIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY29udHJvbHMvY2hhdC50c3giLCIvdHMvdmlld3MvY29udHJvbHMvY29udGVudC1kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9zeW5zdGhlc2lzLWRlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFB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