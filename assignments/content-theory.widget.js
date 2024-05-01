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
        hash: 2749014031,
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
              console.log(0.3);
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
              console.log(0.2);
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
        hash: 1171636045,
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
              dyslexia
            } = store.model.materials;
            const content = _session.sessionWrapper.user.accessibilityMode && !!dyslexia ? dyslexia : article;
            return _react.default.createElement(_animationContainer.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, null, content)), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement("div", null, _react.default.createElement(_ui.ActivityAudio, {
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
        hash: 2187404622,
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
        hash: 3910371994,
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
            const handleButtonClick = () => setTab(tab === 'content' ? 'chat' : 'content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25zb2xlIiwibG9nIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJpdGVtcyIsInBhcmFtc1VyaSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJjaGF0SWQiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJlIiwiX3JlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkNoYXJhY3RlckNhcmQiLCJ1c2VDb252ZXJzYXRpb25Db250ZXh0Iiwib25BY3Rpb25DbGljayIsImV2ZW50Iiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmltYXRpb25Db250YWluZXIiLCJBY3Rpdml0eUNoYXQiLCJjb250YWluZXIiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9zeW5zdGhlc2lzRGVzY3JpcHRpb24iLCJBY3Rpdml0eURlc2t0b3BDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImFjY2Vzc2liaWxpdHlNb2RlIiwiUGFnZUNvbnRhaW5lciIsIk1hcmtkb3duIiwiQWN0aXZpdHlBdWRpbyIsIkVudGl0eUltYWdlIiwic3JjIiwiaW1hZ2UiLCJlbnRpdHkiLCJTeW50aGVzaXNEZXNjcmlwdGlvbiIsIl9ob29rcyIsIl9jb2xsYXBzaWJsZSIsIl9jb250ZW50RGVza3RvcCIsIkFjdGl2aXR5Q29udGVudCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3ludGhlc2lzIiwiYXVkaW9zIiwibGVuZ3RoIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIl9jaGF0IiwiX2ljb25zIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwidGFiIiwic2V0VGFiIiwiQ29udHJvbCIsImljb24iLCJ0eXBlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwiYnV0dG9uIiwiQXBwSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb250cm9scy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb250cm9scy9jb250ZW50LWRlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRyb2xzL3N5bnN0aGVzaXMtZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztjQUNoQixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSEwsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQ2hCO2NBQ0EsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlHOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUVBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsZUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixZQUFBLEdBQUF0QixPQUFBO1VBR00sTUFBT1MsWUFBYSxTQUFRVSxNQUFBLENBQUFJLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsVUFBVztZQUVYLElBQUlGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUcsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsQ0FBQUMsS0FBTSxHQUErQixJQUFJVCxNQUFBLENBQUFVLFlBQVksQ0FBQ1QsZUFBQSxDQUFBVSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBRUEsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ00sS0FBSztZQUN4QztZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLGlCQUFpQkEsQ0FBQTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUFFLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQzVDO1lBQ0EsTUFBTTNCLElBQUlBLENBQUNZLFlBQVksRUFBRUMsVUFBVSxFQUFFUSxNQUFNO2NBQzFDLElBQUk7Z0JBQ0haLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBQzNCcEIsWUFBQSxDQUFBbUIsWUFBWSxDQUFDSixpQkFBaUIsR0FBRyxJQUFJO2dCQUNyQyxJQUFJWixZQUFZLEtBQUssSUFBSSxDQUFDLENBQUFBLFlBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQUMsVUFBVyxLQUFLQSxVQUFVLEVBQUU7a0JBQzNFSixZQUFBLENBQUFtQixZQUFZLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQW5CLEtBQU0sQ0FBQztrQkFDbEM7O2dCQUdELElBQUksQ0FBQyxDQUFBQyxZQUFhLEdBQUdBLFlBQVk7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBQyxVQUFXLEdBQUdBLFVBQVU7Z0JBQzdCLElBQUksQ0FBQyxDQUFBVSxLQUFNLEdBQUcsSUFBSTtnQkFFbEIsTUFBTVEsUUFBUSxHQUFHLElBQUkxQixLQUFBLENBQUEyQixrQkFBa0IsQ0FBQztrQkFDdkNDLEVBQUUsRUFBRXBCLFVBQVU7a0JBQ2REO2lCQUNBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFTLE1BQU8sR0FBR0EsTUFBTTtnQkFDckIsSUFBSSxDQUFDLENBQUFOLFNBQVUsR0FBRztrQkFDakJILFlBQVk7a0JBQ1pDO2lCQUNBO2dCQUVELElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUdvQixRQUFRO2dCQUV0QixNQUFNQSxRQUFRLENBQUNHLE9BQU87Z0JBQ3RCLE1BQU1ILFFBQVEsQ0FBQy9CLElBQUksRUFBRTtnQkFDckJTLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBbkIsS0FBTSxDQUFDO2dCQUNsQyxLQUFLLENBQUNXLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ0ksWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYLEtBQUssQ0FBQ2IsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUcsS0FBSztnQkFDbkJkLFlBQUEsQ0FBQW1CLFlBQVksQ0FBQ0osaUJBQWlCLEdBQUcsS0FBSztnQkFDdEMsSUFBSSxDQUFDRyxZQUFZLEVBQUU7O1lBRXJCOztVQUNBdkIsT0FBQSxDQUFBUixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZELElBQUF3QyxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELGFBQUEsR0FBQWxELE9BQUE7VUFNTSxTQUFVbUQsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFKLE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFvRSxXQUFBLEdBQUFwRSxPQUFBO1VBR08sYUFGUDtVQUVtQixTQUFVcUUsYUFBYUEsQ0FBQTtZQUN6QyxNQUFNO2NBQUV4QztZQUFLLENBQUUsR0FBRyxJQUFBc0MsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUUxQyxNQUFNQyxhQUFhLEdBQUdDLEtBQUssSUFBRztjQUM3QmpFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUMzQixDQUFDO1lBRUQsT0FDQ3lDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUEyQixHQUM3Q0gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQXVCLEdBQUV2QixLQUFLLENBQUM0QyxXQUFXLENBQVEsRUFDbEV4QixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBeUIsRUFFbEMsRUFDTkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsV0FBQSxDQUFBTSxNQUFNO2NBQ05DLE9BQU8sRUFBQyxTQUFTO2NBQ2pCdkIsU0FBUyxFQUFDLDhCQUE4QjtjQUN4Q3dCLE9BQU8sRUFBRUwsYUFBYTtjQUN0Qk0sS0FBSyxFQUFFaEQsS0FBSyxDQUFDaUQ7WUFBVSxFQUN0QixDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUE3QixNQUFBLEdBQUFqRCxPQUFBO1VBV08sTUFBTStFLG1CQUFtQixHQUFBOUQsT0FBQSxDQUFBOEQsbUJBQUEsR0FBRzlCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDdUIsYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFDM0UsTUFBTVYsc0JBQXNCLEdBQUdBLENBQUEsS0FBTXJCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDd0IsVUFBVSxDQUFDRixtQkFBbUIsQ0FBQztVQUFDOUQsT0FBQSxDQUFBcUQsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxGLElBQUFyQixNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBa0YsbUJBQUEsR0FBQWxGLE9BQUE7VUFFTSxTQUFVbUYsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVqRCxNQUFNO2NBQUVUO1lBQVksQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFHLHNCQUFzQixHQUFFO1lBQ3pELE9BQ0NyQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsbUJBQUEsQ0FBQS9CLGlCQUFpQjtjQUFDQyxTQUFTLEVBQUM7WUFBd0IsR0FDcERILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQXNCWixFQUFFLEVBQUVaLE1BQU07Y0FBQSxpQkFBaUJULFlBQVk7Y0FBRTJELFNBQVMsRUFBQztZQUFVLEVBQUcsQ0FDbkU7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQW5DLE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFxRixHQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQWtGLG1CQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsU0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RixzQkFBQSxHQUFBeEYsT0FBQTtVQUVNLFNBQVV5RixzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFcEYsS0FBSztjQUFFd0I7WUFBSyxDQUFFLEdBQUcsSUFBQXNDLFFBQUEsQ0FBQUcsc0JBQXNCLEdBQUU7WUFDakQsTUFBTTtjQUFFb0IsT0FBTztjQUFFQztZQUFRLENBQUUsR0FBR3RGLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ29FLFNBQVM7WUFFbkQsTUFBTUMsT0FBTyxHQUFHUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxpQkFBaUIsSUFBSSxDQUFDLENBQUNMLFFBQVEsR0FBR0EsUUFBUSxHQUFHRCxPQUFPO1lBQ3hGLE9BQ0N6QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsbUJBQUEsQ0FBQS9CLGlCQUFpQixRQUNqQkYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJCLEdBQUEsQ0FBQVksYUFBYTtjQUFDN0MsU0FBUyxFQUFDO1lBQXFDLEdBQzdESCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkIsU0FBQSxDQUFBVyxRQUFRLFFBQUVMLE9BQU8sQ0FBWSxDQUN6QixFQUNONUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBT04sU0FBUyxFQUFDO1lBQXlCLEdBQ3pDSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkIsR0FBQSxDQUFBYyxhQUFhO2NBQUNyRCxFQUFFLEVBQUV6QyxLQUFLLENBQUNtQixLQUFLLENBQUNzQjtZQUFFLEVBQUksRUFDckNHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUFlLFdBQVc7Y0FBQ2hELFNBQVMsRUFBQyxvQkFBb0I7Y0FBQ2lELEdBQUcsRUFBRWhHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQzhFLEtBQUs7Y0FBRUMsTUFBTSxFQUFDO1lBQVksRUFBRyxFQUMxRnRELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM4QixzQkFBQSxDQUFBZ0Isb0JBQW9CLE9BQUcsQ0FDbkIsQ0FDQyxDQUNPLENBQ0c7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUF2RCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBcUYsR0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUF5RyxNQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQXVGLFNBQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBMEcsWUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUEyRyxlQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFDTSxTQUFVNEcsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUV2RyxLQUFLO2NBQUV3QjtZQUFLLENBQUUsR0FBRyxJQUFBc0MsUUFBQSxDQUFBRyxzQkFBc0IsR0FBRTtZQUVqRCxNQUFNdUMsSUFBSSxHQUFHLElBQUFKLE1BQUEsQ0FBQUssYUFBYSxHQUFFO1lBQzVCLElBQUlELElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUUsT0FBTzVELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNpRCxlQUFBLENBQUFsQixzQkFBc0IsT0FBRztZQUNyRSxNQUFNO2NBQUVDLE9BQU87Y0FBRXFCLFNBQVM7Y0FBRXBCLFFBQVE7Y0FBRXFCO1lBQU0sQ0FBRSxHQUFHM0csS0FBSyxDQUFDbUIsS0FBSyxDQUFDb0UsU0FBUztZQUN0RSxNQUFNQyxPQUFPLEdBQUdQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGlCQUFpQixJQUFJLENBQUMsQ0FBQ0wsUUFBUSxHQUFHQSxRQUFRLEdBQUdELE9BQU87WUFDeEYsT0FDQ3pDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUFsQyxpQkFBaUIsUUFDakJGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyQixHQUFBLENBQUFZLGFBQWE7Y0FBQzdDLFNBQVMsRUFBQztZQUE2QixHQUNyREgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJCLEdBQUEsQ0FBQWUsV0FBVztjQUFDaEQsU0FBUyxFQUFDLG9CQUFvQjtjQUFDaUQsR0FBRyxFQUFFaEcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDOEUsS0FBSztjQUFFQyxNQUFNLEVBQUM7WUFBWSxFQUFHLEVBQ3pGLENBQUMsQ0FBQ1MsTUFBTSxFQUFFQyxNQUFNLElBQUloRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkIsR0FBQSxDQUFBYyxhQUFhO2NBQUNyRCxFQUFFLEVBQUV6QyxLQUFLLENBQUNtQixLQUFLLENBQUNzQjtZQUFFLEVBQUksRUFDMURHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELFlBQUEsQ0FBQVEsb0JBQW9CO2NBQUNDLElBQUksRUFBRTtZQUFJLEdBQy9CbEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELFlBQUEsQ0FBQVUsaUJBQWlCLFFBQ2pCbkUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUE0RCxRQUFBLFFBQUd4RixLQUFLLENBQUM2RCxPQUFPLENBQUksQ0FDRCxFQUNwQnpDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnRCxZQUFBLENBQUFZLGtCQUFrQixRQUNsQnJFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixTQUFBLENBQUFXLFFBQVEsUUFBRUwsT0FBTyxDQUFZLENBQ1YsQ0FDQyxDQUNsQixFQUVMa0IsU0FBUyxJQUNUOUQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELFlBQUEsQ0FBQVEsb0JBQW9CLFFBQ3BCakUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELFlBQUEsQ0FBQVUsaUJBQWlCLFFBQ2pCbkUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUE0RCxRQUFBLFFBQUd4RixLQUFLLENBQUNrRixTQUFTLENBQUksQ0FDSCxFQUNwQjlELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnRCxZQUFBLENBQUFZLGtCQUFrQixRQUNsQnJFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixTQUFBLENBQUFXLFFBQVEsUUFBRWEsU0FBUyxDQUFZLENBQ1osQ0FFdEIsQ0FDYyxDQUNHO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBOUQsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQXVGLFNBQUEsR0FBQXZGLE9BQUE7VUFFTSxTQUFVd0csb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRW5HLEtBQUs7Y0FBRXdCO1lBQUssQ0FBRSxHQUFHLElBQUFzQyxRQUFBLENBQUFHLHNCQUFzQixHQUFFO1lBQ2pELE1BQU07Y0FBRW9CLE9BQU87Y0FBRXFCO1lBQVMsQ0FBRSxHQUFHMUcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDb0UsU0FBUztZQUNwRCxNQUFNMkIsS0FBSyxHQUFHUixTQUFTLEdBQUdsRixLQUFLLENBQUNrRixTQUFTLEdBQUdsRixLQUFLLENBQUMyRixXQUFXO1lBQzdELE1BQU0zQixPQUFPLEdBQUdrQixTQUFTLEdBQUdBLFNBQVMsR0FBRzFHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ2dHLFdBQVc7WUFDL0QsT0FDQ3ZFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBNEQsUUFBQSxRQUNDcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBSzZELEtBQUssQ0FBTSxFQUNoQnRFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixTQUFBLENBQUFXLFFBQVEsUUFBRUwsT0FBTyxDQUFZLENBQzVCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQTVDLE1BQUEsR0FBQWpELE9BQUE7VUFHQSxJQUFBb0UsV0FBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUF5RyxNQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFFQSxJQUFBcUYsR0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUF5SCxRQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQTBILEtBQUEsR0FBQTFILE9BQUE7VUFDQSxJQUFBMkgsTUFBQSxHQUFBM0gsT0FBQTtVQUVBLElBQUFrRCxhQUFBLEdBQUFsRCxPQUFBO1VBVU87VUFBVSxTQUNSVyxJQUFJQSxDQUFDO1lBQUVOLEtBQUs7WUFBRVM7VUFBRyxDQUFxQztZQUM5RCxNQUFNLENBQUNxQixLQUFLLEVBQUV5RixRQUFRLENBQUMsR0FBRyxJQUFBM0UsTUFBQSxDQUFBNEUsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUNsRyxLQUFLLENBQUMsR0FBRyxJQUFBc0IsTUFBQSxDQUFBNEUsUUFBUSxFQUFDeEgsS0FBSyxDQUFDc0IsS0FBSyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQzRGLEtBQUssRUFBRU8sUUFBUSxDQUFDLEdBQUc3RSxNQUFBLENBQUFRLE9BQUssQ0FBQ29FLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDRSxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHL0UsTUFBQSxDQUFBUSxPQUFLLENBQUNvRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNO2NBQUVoRztZQUFLLENBQUUsR0FBR3hCLEtBQUs7WUFDdkIsTUFBTW9CLFlBQVksR0FBR1gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDakQsTUFBTWtCLE1BQU0sR0FBR3BCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE1BQU1pSCxPQUFPLEdBQUdGLEdBQUcsS0FBSyxTQUFTLEdBQUdOLFFBQUEsQ0FBQWIsZUFBZSxHQUFHYyxLQUFBLENBQUF2QyxZQUFZO1lBQ2xFLE1BQU0rQyxJQUFJLEdBQUdILEdBQUcsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHMUgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDMkcsSUFBSTtZQUMxRCxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNSixNQUFNLENBQUNELEdBQUcsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUU5RSxJQUFBdEIsTUFBQSxDQUFBNEIsU0FBUyxFQUFDLENBQUNoSSxLQUFLLENBQUNtQixLQUFLLENBQUMsRUFBRSxNQUFNc0csUUFBUSxDQUFDekgsS0FBSyxDQUFDbUIsS0FBSyxFQUFFK0YsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLElBQUFkLE1BQUEsQ0FBQTRCLFNBQVMsRUFBQyxDQUFDaEksS0FBSyxDQUFDLEVBQUUsTUFBTXVILFFBQVEsQ0FBQ3ZILEtBQUssQ0FBQzhCLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUlBLEtBQUssSUFBSSxDQUFDOUIsS0FBSyxDQUFDK0IsS0FBSyxFQUFFLE9BQU9hLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLHFCQUFlO1lBQ2pELElBQUksQ0FBQ3ZCLEtBQUssRUFBRSxPQUFPYyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxXQUFBLENBQUFrRSxhQUFhLE9BQUc7WUFFcEMsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCMUcsS0FBSztjQUNMMkcsUUFBUSxFQUFFbkksS0FBSyxDQUFDbUksUUFBUTtjQUN4Qm5JLEtBQUs7Y0FDTDZCLE1BQU07Y0FDTlQsWUFBWTtjQUNaRTthQUNBO1lBRUQsT0FDQ3NCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNTLFFBQUEsQ0FBQVksbUJBQW1CLENBQUMwRCxRQUFRO2NBQUN4RyxLQUFLLEVBQUVzRztZQUFZLEdBQ2hEdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJCLEdBQUEsQ0FBQXFELGNBQWM7Y0FBQ25CLEtBQUssRUFBRWxILEtBQUssQ0FBQ21CLEtBQUssQ0FBQytGLEtBQUs7Y0FBRVcsSUFBSSxFQUFFN0gsS0FBSyxDQUFDbUIsS0FBSyxDQUFDMkcsSUFBSTtjQUFFQSxJQUFJLEVBQUU5SCxLQUFLLENBQUNtQixLQUFLLENBQUMyRztZQUFJLEVBQUksRUFFNUZsRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixhQUFBLENBQUF5RixlQUFlLFFBQ2YxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsT0FBTyxPQUFHLENBQ00sRUFDbEJoRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixhQUFBLENBQUFNLE1BQU0sQ0FBQ29GLE1BQU07Y0FBQ3hGLFNBQVMsRUFBQyxrQkFBa0I7Y0FBQ3dCLE9BQU8sRUFBRXdEO1lBQWlCLEdBQ3JFbkYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lFLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQ1gsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDUixDQUNjO1VBRWpDIiwiaWdub3JlTGlzdCI6W119